import type Stripe from "stripe";
import { getWork } from "@/data/works";
import { overlaySoldSlugs } from "@/lib/sold";

function slugsFromSession(session: Stripe.Checkout.Session) {
  // Prefer `originals` so a paid print never inventory-locks a canvas.
  // Empty string means a print-only order. Missing key falls back to legacy `slugs`.
  const raw =
    session.metadata && "originals" in session.metadata
      ? (session.metadata.originals ?? "")
      : (session.metadata?.slugs ?? "");
  return raw
    .split(",")
    .map((slug) => slug.trim())
    .filter(Boolean);
}

async function listSessions(stripe: Stripe, status: "complete" | "open") {
  const sessions: Stripe.Checkout.Session[] = [];
  let startingAfter: string | undefined;

  for (let page = 0; page < 10; page += 1) {
    const batch = await stripe.checkout.sessions.list({
      status,
      limit: 100,
      starting_after: startingAfter,
    });
    sessions.push(...batch.data);
    if (!batch.has_more) break;
    startingAfter = batch.data.at(-1)?.id;
    if (!startingAfter) break;
  }

  return sessions;
}

export async function findUnavailableSlugs(stripe: Stripe, slugs: string[]) {
  const wanted = new Set(slugs.filter(originalSlug));
  const sold = new Set<string>();
  const held = new Set<string>();

  try {
    const [complete, open] = await Promise.all([
      listSessions(stripe, "complete"),
      listSessions(stripe, "open"),
    ]);

    for (const session of complete) {
      if (session.payment_status !== "paid") continue;
      for (const slug of slugsFromSession(session)) {
        if (wanted.has(slug)) sold.add(slug);
      }
    }

    for (const session of open) {
      for (const slug of slugsFromSession(session)) {
        if (wanted.has(slug) && !sold.has(slug)) held.add(slug);
      }
    }
  } catch (error) {
    console.warn("[stripe] inventory check skipped", error);
  }

  return { sold: [...sold], held: [...held] };
}

let paidCache: { at: number; slugs: string[] } | null = null;
const PAID_CACHE_MS = 20_000;

function originalSlug(slug: string) {
  const work = getWork(slug);
  return Boolean(work && !work.print);
}

export function rememberPaidOriginals(slugs: string[]) {
  const extra = slugs.filter(originalSlug);
  if (extra.length === 0) return;
  const prev = paidCache?.slugs ?? [];
  paidCache = { at: Date.now(), slugs: [...new Set([...prev, ...extra])] };
}

export async function findPaidOriginalSlugs(stripe: Stripe | null) {
  const overlay = overlaySoldSlugs();
  if (!stripe) return new Set(overlay);

  if (paidCache && Date.now() - paidCache.at < PAID_CACHE_MS) {
    return new Set([...overlay, ...paidCache.slugs]);
  }

  try {
    const complete = await listSessions(stripe, "complete");
    const sold = new Set<string>();
    for (const session of complete) {
      if (session.payment_status !== "paid") continue;
      for (const slug of slugsFromSession(session)) {
        if (originalSlug(slug)) sold.add(slug);
      }
    }
    paidCache = { at: Date.now(), slugs: [...sold] };
    return new Set([...overlay, ...sold]);
  } catch (error) {
    console.warn("[stripe] paid originals lookup skipped", error);
    return new Set([...overlay, ...(paidCache?.slugs ?? [])]);
  }
}
