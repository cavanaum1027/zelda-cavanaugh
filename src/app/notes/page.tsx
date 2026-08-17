import type { Metadata } from "next";
import Link from "next/link";
import { OutlineNum, PageIndex, PlusRule } from "@/components/Marks";
import { PageBreadcrumb } from "@/components/PageBreadcrumb";
import { notes } from "@/data/notes";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Notes",
  description:
    "Field Notes by Zelda Cavanaugh, also Michelle Cavanaugh: studio writing on generative systems, bureaucracy, and the half-life of digital thought.",
  path: "/notes",
});

function formatDate(iso: string) {
  const date = new Date(`${iso}T00:00:00`);
  return date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function NotesPage() {
  return (
    <div className="relative overflow-hidden px-5 pb-8 pt-28 md:px-8 lg:px-10">
      <PlusRule />
      <OutlineNum className="absolute -right-6 top-8 text-[36vw] md:text-[16rem]">09</OutlineNum>

      <header className="relative mt-8 max-w-xl">
        <PageBreadcrumb
          items={[
            { name: "zelda cavanaugh", href: "/" },
            { name: "notes", href: "/notes" },
          ]}
        />
        <h1 className="mt-6 text-5xl font-extrabold tracking-tight md:text-6xl">Notes</h1>
        <p className="mt-5 text-sm leading-7 text-fg/55">
          Field Notes, written as Zelda Cavanaugh, also Michelle Cavanaugh.
          The canvas only shows the final output. These essays are the systems
          underneath.
        </p>
      </header>

      <section className="relative mt-16 max-w-2xl">
        {notes.map((note) => (
          <article key={note.slug} className="border-t border-fg/10 py-10">
            <p className="text-[12px] text-fg/40">{formatDate(note.date)}</p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              <Link href={`/notes/${note.slug}`} className="text-fg">
                {note.title}
              </Link>
            </h2>
            {note.dek ? (
              <p className="mt-4 max-w-xl text-sm leading-7 text-fg/55">{note.dek}</p>
            ) : null}
            <p className="mt-6">
              <Link
                href={`/notes/${note.slug}`}
                className="text-sm lowercase text-accent"
              >
                + read
              </Link>
            </p>
          </article>
        ))}
      </section>

      <p className="mt-8">
        <Link href="/research" className="text-sm lowercase text-accent">
          + research
        </Link>
      </p>

      <div className="mt-10">
        <PageIndex n="09" of="09" />
      </div>
    </div>
  );
}
