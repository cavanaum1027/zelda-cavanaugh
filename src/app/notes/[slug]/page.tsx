import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { NoteBody } from "@/components/NoteBody";
import { OutlineNum, PageIndex, PlusRule } from "@/components/Marks";
import { PageBreadcrumb } from "@/components/PageBreadcrumb";
import { WorkTile } from "@/components/WorkTile";
import { JsonLd } from "@/components/JsonLd";
import { getNote, notes } from "@/data/notes";
import { getWork } from "@/data/works";
import { noteJsonLd, pageMeta } from "@/lib/seo";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return notes.map((note) => ({ slug: note.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const note = getNote(slug);
  if (!note) return { title: "Notes" };
  return pageMeta({
    title: note.title,
    description: note.dek || note.title,
    path: `/notes/${note.slug}`,
  });
}

function formatDate(iso: string) {
  const date = new Date(`${iso}T00:00:00`);
  return date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function NotePage({ params }: Props) {
  const { slug } = await params;
  const note = getNote(slug);
  if (!note) notFound();

  const work = getWork(note.work);
  const index = notes.findIndex((item) => item.slug === note.slug);
  const previous = notes[index - 1];
  const next = notes[index + 1];

  return (
    <article className="relative overflow-hidden px-5 pb-8 pt-28 md:px-8 lg:px-10">
      <JsonLd data={noteJsonLd(note)} />
      <PlusRule />
      <OutlineNum className="absolute -right-6 top-8 text-[36vw] md:text-[16rem]">09</OutlineNum>

      <header className="relative mt-8 max-w-xl">
        <PageBreadcrumb
          items={[
            { name: "zelda cavanaugh", href: "/" },
            { name: "notes", href: "/notes" },
            { name: note.title, href: `/notes/${note.slug}` },
          ]}
        />
        <p className="mt-8 text-[12px] text-fg/40">{formatDate(note.date)}</p>
        <h1 className="mt-3 text-5xl font-extrabold tracking-tight md:text-6xl">
          {note.title}
        </h1>
        {note.dek ? (
          <p className="mt-5 font-serif text-[1.35rem] leading-[1.35] text-fg">
            {note.dek}
          </p>
        ) : null}
      </header>

      <div className="relative mt-10">
        <NoteBody blocks={note.blocks} />
      </div>

      {work ? (
        <section className="relative mt-20 max-w-md border-t border-fg/10 pt-10">
          <WorkTile work={work} figureClassName="aspect-square gilt" />
        </section>
      ) : null}

      <p className="mt-12">
        <a
          href={note.substack}
          target="_blank"
          rel="me noopener noreferrer"
          className="text-sm lowercase text-accent"
        >
          + on substack
        </a>
      </p>

      <nav className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm lowercase">
        {previous ? (
          <Link href={`/notes/${previous.slug}`} className="text-accent">
            + {previous.title}
          </Link>
        ) : null}
        {next ? (
          <Link href={`/notes/${next.slug}`} className="text-accent">
            + {next.title}
          </Link>
        ) : null}
        <Link href="/notes" className="text-accent">
          + all notes
        </Link>
      </nav>

      <div className="mt-10">
        <PageIndex n="09" of="09" />
      </div>
    </article>
  );
}
