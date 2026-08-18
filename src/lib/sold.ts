import soldOverlay from "@/data/sold-overlay.json";
import { getWork, type Work } from "@/data/works";

const OVERLAY_PATH = "src/data/sold-overlay.json";
const DEFAULT_REPO = "Michelle-Cavanaugh/zelda-cavanaugh";
const DEFAULT_BRANCH = "main";

function asSlugList(value: unknown): string[] {
  if (!Array.isArray(value)) return [];
  return value.filter((item): item is string => typeof item === "string" && item.length > 0);
}

function overlayToken() {
  return process.env.SOLD_OVERLAY_TOKEN || process.env.GITHUB_TOKEN || "";
}

function repoSlug() {
  return process.env.GITHUB_REPO || DEFAULT_REPO;
}

function overlayBranch() {
  return process.env.GITHUB_BRANCH || DEFAULT_BRANCH;
}

export function overlaySoldSlugs() {
  return asSlugList(soldOverlay);
}

export function originalSlugsFrom(slugs: string[]) {
  return [...new Set(slugs.filter((slug) => {
    const work = getWork(slug);
    return Boolean(work && !work.print);
  }))];
}

export function applyLiveSold<T extends Work>(work: T, sold: Iterable<string>): T {
  if (work.soldOut || work.print) return work;
  const set = sold instanceof Set ? sold : new Set(sold);
  if (!set.has(work.slug)) return work;
  return { ...work, soldOut: true };
}

export function applyLiveSoldList<T extends Work>(works: T[], sold: Iterable<string>) {
  const set = sold instanceof Set ? sold : new Set(sold);
  return works.map((work) => applyLiveSold(work, set));
}

type GithubContent = {
  sha?: string;
  content?: string;
  encoding?: string;
  message?: string;
};

function githubHeaders(token: string) {
  return {
    Accept: "application/vnd.github+json",
    Authorization: `Bearer ${token}`,
    "X-GitHub-Api-Version": "2022-11-28",
    "User-Agent": "zelda-cavanaugh-sold-overlay",
  };
}

function parseOverlayPayload(raw: unknown): string[] {
  if (!Array.isArray(raw)) return [];
  return raw.filter((slug): slug is string => typeof slug === "string" && slug.length > 0);
}

function decodeGithubContent(file: GithubContent) {
  if (!file.content) return [];
  const encoded = file.content.replaceAll("\n", "");
  const text = Buffer.from(encoded, file.encoding === "base64" ? "base64" : "utf8").toString("utf8");
  try {
    return parseOverlayPayload(JSON.parse(text) as unknown);
  } catch {
    return [];
  }
}

export async function persistSoldSlugs(slugs: string[]) {
  const originals = originalSlugsFrom(slugs);
  if (originals.length === 0) {
    return { ok: true as const, slugs: [] as string[], committed: false };
  }

  const token = overlayToken();
  if (!token) {
    console.info("[sold-overlay] GitHub token unset; overlay not committed", {
      slugs: originals,
    });
    return { ok: true as const, slugs: originals, committed: false };
  }

  const repo = repoSlug();
  const branch = overlayBranch();
  const url = `https://api.github.com/repos/${repo}/contents/${OVERLAY_PATH}`;
  const headers = githubHeaders(token);

  try {
    const existingRes = await fetch(`${url}?ref=${encodeURIComponent(branch)}`, {
      headers,
      cache: "no-store",
    });
    let sha: string | undefined;
    let current = overlaySoldSlugs();
    if (existingRes.ok) {
      const file = (await existingRes.json()) as GithubContent;
      sha = file.sha;
      current = decodeGithubContent(file);
    } else if (existingRes.status !== 404) {
      console.error("[sold-overlay] GitHub read failed", { status: existingRes.status });
      return { ok: false as const, slugs: originals, committed: false };
    }

    const merged = [...new Set([...current, ...originals])].sort();
    if (merged.length === current.length && originals.every((slug) => current.includes(slug))) {
      return { ok: true as const, slugs: originals, committed: false };
    }

    const body = JSON.stringify({
      message: `Mark sold: ${originals.join(", ")}`,
      content: Buffer.from(`${JSON.stringify(merged, null, 2)}\n`, "utf8").toString("base64"),
      branch,
      sha,
    });

    const putRes = await fetch(url, {
      method: "PUT",
      headers: { ...headers, "Content-Type": "application/json" },
      body,
    });
    if (!putRes.ok) {
      console.error("[sold-overlay] GitHub write failed", { status: putRes.status });
      return { ok: false as const, slugs: originals, committed: false };
    }

    console.info("[sold-overlay] committed sold originals", { slugs: originals });
    return { ok: true as const, slugs: originals, committed: true };
  } catch (error) {
    console.error("[sold-overlay] GitHub update failed", {
      error: error instanceof Error ? error.message : "unknown",
    });
    return { ok: false as const, slugs: originals, committed: false };
  }
}
