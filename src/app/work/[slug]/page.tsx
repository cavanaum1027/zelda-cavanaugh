import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { OutlineNum, PageIndex, PlusRule } from "@/components/Marks";
import { WorkTile } from "@/components/WorkTile";
import { formatPrice, getWork, shopUrl, works } from "@/data/works";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return works.map((work) => ({ slug: work.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const work = getWork(slug);
  if (!work) return { title: "Work" };
  return {
    title: work.title,
    description: work.description ?? `${work.title} — original work by Zelda Cavanaugh.`,
  };
}

export default async function WorkDetailPage({ params }: Props) {
  const { slug } = await params;
  const work = getWork(slug);
  if (!work) notFound();

  const index = works.findIndex((item) => item.slug === work.slug);
  const plate = String(index + 1).padStart(2, "0");
  const prev = works[(index - 1 + works.length) % works.length];
  const next = works[(index + 1) % works.length];
  const description =
    work.description ??
    `${work.size ? `${work.size}. ` : ""}Canvas with hand-generated gilding and embroidery. Gold detailing follows the Circle of Fifths — a tonal architecture related to the diagnostic criteria at the heart of the work.`;

  return (
    <article className="relative overflow-hidden px-5 pb-8 pt-28 md:px-8 lg:px-10">
      <PlusRule />
      <OutlineNum className="absolute -right-6 top-10 text-[40vw] md:text-[18rem]">{plate}</OutlineNum>
      <div className="relative mt-8 grid items-start gap-12 lg:grid-cols-12">
        <div className="frame relative aspect-[4/5] lg:col-span-6">
          <Image
            src={work.image}
            alt={work.title}
            fill
            priority
            sizes="55vw"
            className="object-cover"
          />
        </div>
        <div className="lg:col-span-5 lg:col-start-8 lg:pt-8">
          <p className="text-[12px] text-white/45">
            {plate} / {String(works.length).padStart(2, "0")}
          </p>
          <h1 className="mt-3 text-5xl font-extrabold tracking-tight">{work.title}</h1>
          <p className="mt-4 text-xl">
            {formatPrice(work.price)}
            {work.soldOut ? <span className="ml-3 text-accent">Sold</span> : null}
          </p>
          {work.quote ? (
            <blockquote className="mt-8 max-w-sm">
              <p className="text-[15px] leading-7 text-white/80">“{work.quote}”</p>
              {work.attribution ? (
                <cite className="mt-3 block text-[12px] not-italic text-white/40">
                  — {work.attribution}
                </cite>
              ) : null}
            </blockquote>
          ) : null}
          <p className="mt-8 max-w-sm text-sm leading-7 text-white/55">{description}</p>
          <p className="mt-4 text-[12px] text-white/40">
            {work.diagnosis ?? "Original work"}
            {work.size ? ` · ${work.size}` : ""}
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            {!work.soldOut ? (
              <a href={shopUrl(work.slug)} className="pill">
                Purchase
              </a>
            ) : null}
            <Link
              href={`/contact?work=${encodeURIComponent(work.title)}`}
              className="inline-flex items-center text-sm lowercase text-white/70 hover:text-accent"
            >
              + inquire
            </Link>
          </div>
        </div>
      </div>
      <nav className="mt-24 grid gap-8 sm:grid-cols-2">
        <WorkTile work={prev} figureClassName="aspect-[4/5]" />
        <WorkTile work={next} figureClassName="aspect-square" />
      </nav>
      <div className="mt-12">
        <PageIndex n={plate} of={String(works.length).padStart(2, "0")} />
      </div>
    </article>
  );
}
