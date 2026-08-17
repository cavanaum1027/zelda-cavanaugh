import { notes } from "@/data/notes";
import { works } from "@/data/works";
import { sectionPaths } from "@/lib/seo";

export default function sitemap() {
  const now = new Date();
  const sections = sectionPaths.map((path) => ({
    url: path === "/" ? "https://www.zeldacavanaugh.com" : `https://www.zeldacavanaugh.com${path}`,
    lastModified: now,
    changeFrequency: path === "/" || path === "/work" ? "weekly" as const : "monthly" as const,
    priority: path === "/" ? 1 : path === "/work" ? 0.9 : 0.7,
  }));
  const artwork = works.map((work) => ({
    url: `https://www.zeldacavanaugh.com/work/${work.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: work.featured ? 0.8 : 0.6,
  }));
  const fieldNotes = notes.map((note) => ({
    url: `https://www.zeldacavanaugh.com/notes/${note.slug}`,
    lastModified: new Date(note.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));
  return [
    ...sections,
    ...artwork,
    ...fieldNotes,
    {
      url: "https://www.zeldacavanaugh.com/llms.txt",
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.5,
    },
  ];
}
