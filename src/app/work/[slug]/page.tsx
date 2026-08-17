import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { OutlineNum, PageIndex, PlusRule } from "@/components/Marks";
import { AddToCart } from "@/components/AddToCart";
import { WorkGallery } from "@/components/WorkGallery";
import { WorkTile } from "@/components/WorkTile";
import { gicleeNote } from "@/data/product-copy";
import { formatPrice, getWork, similarWorks, works } from "@/data/works";

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
  const related = similarWorks(work);
  const images = work.images.length ? work.images : [work.image];

  return (
    <article className="relative overflow-hidden px-5 pb-8 pt-28 md:px-8 lg:px-10">
      <PlusRule />
      <OutlineNum className="absolute -right-6 top-10 text-[40vw] md:text-[18rem]">{plate}</OutlineNum>
      <div className="relative mt-8 grid items-start gap-12 lg:grid-cols-12">
        <WorkGallery title={work.title} images={images} />
        <div className="lg:col-span-5 lg:col-start-8 lg:pt-8">
          <p className="text-[12px] text-fg/45">
            {plate} / {String(works.length).padStart(2, "0")}
          </p>
          <h1 className="mt-3 text-5xl font-extrabold tracking-tight">{work.title}</h1>
          <p className="mt-4 text-xl">
            {formatPrice(work.price)}
            {work.soldOut ? <span className="ml-3 text-accent">Sold</span> : null}
          </p>
          {work.quote ? (
            <blockquote className="mt-8 max-w-prose">
              <p className="text-[15px] leading-7 text-fg/80">“{work.quote}”</p>
              {work.attribution ? (
                <cite className="mt-3 block text-[12px] not-italic text-fg/40">
                  — {work.attribution}
                </cite>
              ) : null}
            </blockquote>
          ) : null}
          {work.description ? (
            <p className="mt-8 max-w-prose text-sm leading-7 text-fg/55">{work.description}</p>
          ) : null}
          {work.print ? (
            <p className="mt-6 max-w-prose text-sm leading-7 text-fg/45">
              {gicleeNote}{" "}
              <Link
                href={`/contact?work=${encodeURIComponent(work.title)}&print=1`}
                className="text-fg/70 hover:text-accent"
              >
                If you would like to purchase a print, please reach out to inquire.
              </Link>
            </p>
          ) : null}
          {work.diagnosis || work.size ? (
            <p className="mt-4 text-[12px] text-fg/40">
              {[work.diagnosis, work.size].filter(Boolean).join(" · ")}
            </p>
          ) : null}
          <div className="mt-10 flex flex-wrap items-center gap-4">
            {work.print ? (
              <Link
                href={`/contact?work=${encodeURIComponent(work.title)}&print=1`}
                className="pill"
              >
                Inquire about a print
              </Link>
            ) : (
              <>
                <AddToCart slug={work.slug} soldOut={work.soldOut} />
                <Link
                  href={`/contact?work=${encodeURIComponent(work.title)}`}
                  className="inline-flex items-center text-sm lowercase text-fg/70 hover:text-accent"
                >
                  + inquire
                </Link>
              </>
            )}
          </div>
        </div>
      </div>

      {related.length > 0 ? (
        <section aria-labelledby="similar-works-heading" className="relative mt-24">
          <div className="flex items-center gap-4" aria-hidden="true">
            <span className="h-px flex-1 bg-fg/25" />
            <span className="text-accent">+</span>
            <span className="h-px flex-1 bg-fg/25" />
          </div>
          <h2
            id="similar-works-heading"
            className="mt-8 text-sm font-semibold lowercase tracking-wide text-fg/55"
          >
            similar works
          </h2>
          {work.diagnosis ? (
            <p className="mt-2 text-[12px] text-fg/40">{work.diagnosis}</p>
          ) : null}
          <nav className="mt-8 grid gap-10 sm:grid-cols-2">
            {related.map((item, i) => (
              <WorkTile
                key={item.slug}
                work={item}
                figureClassName={i % 2 === 0 ? "aspect-[4/5]" : "aspect-square"}
              />
            ))}
          </nav>
        </section>
      ) : null}
      <div className="mt-12">
        <PageIndex n={plate} of={String(works.length).padStart(2, "0")} />
      </div>
    </article>
  );
}
