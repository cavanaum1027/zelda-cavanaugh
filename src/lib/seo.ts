import type { Metadata } from "next";
import {
  exhibitions,
  faqs,
  identity,
  practice,
  press,
  processSteps,
  social,
} from "@/data/site";
import { notes, type Note } from "@/data/notes";
import { featuredWorks, works, type Work } from "@/data/works";

export const SITE_URL = "https://www.zeldacavanaugh.com";
export const SITE_NAME = "Zelda Cavanaugh";

export const SITE_DESCRIPTION =
  "Original canvases by Zelda Cavanaugh: DSM-5 diagnostic language translated through generative systems, then finished by hand with gold leaf and embroidery.";

export const sameAs = [
  social.instagram,
  social.artsy,
  social.substack,
  social.interview,
  "https://github.com/Michelle-Cavanaugh/zelda-cavanaugh",
];

export const sectionPaths = [
  "/",
  "/work",
  "/about",
  "/exhibitions",
  "/press",
  "/research",
  "/faq",
  "/notes",
  "/contact",
  "/privacy",
] as const;

type PageMetaInput = {
  title: string | { absolute: string };
  description: string;
  path: string;
  index?: boolean;
};

export function absoluteUrl(path: string) {
  if (path === "/") return SITE_URL;
  return `${SITE_URL}${path}`;
}

export function displayTitle(title: string | { absolute: string }) {
  return typeof title === "string" ? `${title} — ${SITE_NAME}` : title.absolute;
}

export function pageMeta({
  title,
  description,
  path,
  index = true,
}: PageMetaInput): Metadata {
  const ogTitle = displayTitle(title);
  return {
    title,
    description,
    alternates: { canonical: path },
    robots: index
      ? { index: true, follow: true }
      : { index: false, follow: false },
    openGraph: {
      title: ogTitle,
      description,
      url: absoluteUrl(path),
      siteName: SITE_NAME,
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description,
    },
  };
}

export function workSeoTitle(work: Work) {
  if (work.print) return `${work.title} — Giclée print`;
  const tag = work.tags.find((item) => item.length <= 36);
  if (tag) return `${work.title} — ${tag}`;
  return work.title;
}

export function workSeoDescription(work: Work) {
  const size = work.size ? `, ${work.size}` : "";
  if (work.print) {
    return `${work.title}${size} — Giclée print of the original canvas by Zelda Cavanaugh. Inquire to purchase a print.`;
  }
  const diagnosis = work.diagnosis
    ? ` after DSM-5 criteria for ${work.diagnosis}`
    : "";
  return `${work.title}${size} canvas by Zelda Cavanaugh. Hand gilding and embroidery${diagnosis}.`;
}

export function workImageAlt(work: Pick<Work, "title" | "print" | "diagnosis">, view?: number) {
  const medium = work.print ? "Giclée print" : "original canvas";
  const diagnosis = work.diagnosis ? `, ${work.diagnosis}` : "";
  const frame = view ? `, view ${view}` : "";
  return `${work.title}${frame}, ${medium}${diagnosis} by Zelda Cavanaugh`;
}

export function workMeta(work: Work): Metadata {
  return pageMeta({
    title: workSeoTitle(work),
    description: workSeoDescription(work),
    path: `/work/${work.slug}`,
  });
}

export function artistJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["Person", "VisualArtist"],
    "@id": `${SITE_URL}#artist`,
    name: SITE_NAME,
    alternateName: "Michelle Cavanaugh",
    url: SITE_URL,
    image: [
      `${SITE_URL}/work/beloved/opengraph-image`,
      `${SITE_URL}/opengraph-image`,
    ],
    jobTitle: "Artist",
    description: SITE_DESCRIPTION,
    sameAs,
    alumniOf: [
      { "@type": "CollegeOrUniversity", name: "University of Central Florida" },
      { "@type": "CollegeOrUniversity", name: "Northwestern University" },
      { "@type": "CollegeOrUniversity", name: "Cornell University" },
    ],
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    publisher: { "@id": `${SITE_URL}#artist` },
  };
}

export function artworkJsonLd(work: Work) {
  const size = parseArtworkSize(work.size);
  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "VisualArtwork",
    name: work.title,
    url: absoluteUrl(`/work/${work.slug}`),
    image: work.image.startsWith("/") ? absoluteUrl(work.image) : work.image,
    creator: { "@id": `${SITE_URL}#artist` },
    artMedium: work.print
      ? "Giclée print"
      : "Canvas, gold leaf, and embroidery",
    description: workSeoDescription(work),
  };
  if (size) {
    data.width = { "@type": "Distance", name: `${size.width} in` };
    data.height = { "@type": "Distance", name: `${size.height} in` };
  }
  if (!work.print) {
    data.offers = {
      "@type": "Offer",
      url: absoluteUrl(`/work/${work.slug}`),
      priceCurrency: "USD",
      price: String(work.price),
      availability: work.soldOut
        ? "https://schema.org/SoldOut"
        : "https://schema.org/InStock",
    };
  }
  return data;
}

export function noteJsonLd(note: Note) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: note.title,
    description: note.dek,
    datePublished: note.date,
    url: absoluteUrl(`/notes/${note.slug}`),
    author: { "@id": `${SITE_URL}#artist` },
    publisher: { "@id": `${SITE_URL}#artist` },
    mainEntityOfPage: absoluteUrl(`/notes/${note.slug}`),
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function faqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}

const cityCountry: Record<string, string> = {
  London: "GB",
  Barcelona: "ES",
  "New York": "US",
  Paris: "FR",
  Berlin: "DE",
};

export function exhibitionEventsJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": exhibitions.map((item) => ({
      "@type": "Event",
      name: `${item.title} — ${SITE_NAME}`,
      description: item.body,
      startDate: item.startDate,
      endDate: item.endDate,
      eventStatus: "https://schema.org/EventScheduled",
      eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
      image: `${SITE_URL}/opengraph-image`,
      organizer: { "@id": `${SITE_URL}#artist` },
      location: {
        "@type": "Place",
        name: item.venue,
        address: {
          "@type": "PostalAddress",
          addressLocality: item.city,
          addressCountry: cityCountry[item.city] ?? undefined,
        },
      },
    })),
  };
}

export function parseArtworkSize(size?: string) {
  if (!size) return null;
  const match = size.match(/(\d+(?:\.\d+)?)\s*[×x]\s*(\d+(?:\.\d+)?)/);
  if (!match) return null;
  return { width: Number(match[1]), height: Number(match[2]) };
}

export function artworkCdnUrl(src: string, format = "1000w") {
  if (src.startsWith("/")) return absoluteUrl(src);
  const joiner = src.includes("?") ? "&" : "?";
  return `${src}${joiner}format=${format}`;
}

function workLine(work: Work) {
  const bits = [
    work.size,
    work.diagnosis,
    work.print ? "Giclée print, inquire to purchase" : work.soldOut ? "sold" : "available",
  ].filter(Boolean);
  return `- [${work.title}](${absoluteUrl(`/work/${work.slug}`)})${bits.length ? ` — ${bits.join(", ")}` : ""}`;
}

export function llmsTxt() {
  const originals = works.filter((work) => !work.print);
  const pages = [
    ["Home", "/", SITE_DESCRIPTION],
    ["Work", "/work", "Original canvases. Available work is listed first; sold work is archived on the same page."],
    ["About", "/about", identity.statement],
    ["Exhibitions", "/exhibitions", "Upcoming and past exhibitions."],
    ["Press", "/press", "Selected press and interviews."],
    ["Research", "/research", "Moodl.y, systems thinking, and studio research."],
    ["FAQ", "/faq", "Identity, originals versus prints, commissions, shipping, returns."],
    ["Notes", "/notes", "Field Notes: studio writing on generative systems, bureaucracy, and the half-life of digital thought."],
    ["Contact", "/contact", "Inquiry form. Prints and commissions by inquiry."],
  ] as const;

  const lines = [
    `# ${SITE_NAME}`,
    "",
    `> ${SITE_DESCRIPTION}`,
    "",
    identity.statement,
    "",
    `Official site: ${SITE_URL}`,
    "Also known as: Michelle Cavanaugh",
    "Occupation: Artist",
    "Education: Northwestern University (M.S. Information Design & Strategy); University of Central Florida (B.A. English, Technical Communications); Cornell University (Product Management certification)",
    "",
    "## Practice",
    "",
    practice.hero,
    practice.intro,
    practice.close,
    "",
    "Process:",
    ...processSteps.map((step) => `- ${step.title}: ${step.kicker}. ${step.body}`),
    "",
    "## Pages",
    "",
    ...pages.map(([name, path, note]) => `- [${name}](${absoluteUrl(path)}): ${note}`),
    "",
    "## Featured work",
    "",
    ...featuredWorks.map(workLine),
    "",
    "## Catalog",
    "",
    "Original canvases. Giclée prints of sold work are available by inquiry via the contact form, not the cart.",
    "",
    ...originals.map(workLine),
    "",
    "## Exhibitions",
    "",
    ...exhibitions.map(
      (item) =>
        `- ${item.dates} — ${item.title}, ${item.venue}, ${item.city} (${item.status})`,
    ),
    "",
    "## Press",
    "",
    ...press.map((item) => `- ${item.source}, ${item.detail}: “${item.quote}” — ${item.href}`),
    "",
    "## FAQ",
    "",
    ...faqs.flatMap((item) => [`### ${item.q}`, "", item.a, ""]),
    "",
    "## Field Notes",
    "",
    ...notes.map(
      (note) => `- [${note.title}](${absoluteUrl(`/notes/${note.slug}`)}): ${note.dek}`,
    ),
    "",
    "## Elsewhere",
    "",
    `- Instagram: ${social.instagram}`,
    `- Artsy: ${social.artsy}`,
    `- Field Notes: ${absoluteUrl("/notes")}`,
    `- Field Notes on Substack: ${social.substack}`,
    `- Interview: ${social.interview}`,
    `- This site (markdown for language models): ${absoluteUrl("/llms.txt")}`,
  ];

  return `${lines.join("\n")}\n`;
}
