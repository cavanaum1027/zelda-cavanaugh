import type { Metadata } from "next";
import Link from "next/link";
import { OutlineNum, PageIndex, PlusRule } from "@/components/Marks";
import { PageBreadcrumb } from "@/components/PageBreadcrumb";
import { WorkTile } from "@/components/WorkTile";
import { availableWorks, soldWorks } from "@/data/works";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Work — original canvases",
  description:
    "Available original canvases by Zelda Cavanaugh, finished with gold leaf and embroidery. Giclée prints of sold works are listed separately and available by inquiry.",
  path: "/work",
});

type Props = {
  searchParams: Promise<{ view?: string | string[] }>;
};

export default async function WorkPage({ searchParams }: Props) {
  const view = (await searchParams).view;
  const sold = (Array.isArray(view) ? view[0] : view) === "sold";
  const list = sold ? soldWorks : availableWorks;

  return (
    <div className="relative overflow-hidden px-5 pb-8 pt-28 md:px-8 lg:px-10">
      <PlusRule />
      <OutlineNum className="absolute -right-4 top-16 text-[32vw] md:text-[16rem]">02</OutlineNum>
      <header className="relative mt-8 max-w-xl">
        <PageBreadcrumb
          items={[
            { name: "zelda cavanaugh", href: "/" },
            { name: "work", href: "/work" },
          ]}
        />
        <h1 className="mt-6 text-5xl font-extrabold tracking-tight md:text-6xl">Work</h1>
        <p className="mt-5 text-sm leading-7 text-fg/55">
          {sold
            ? "Sold originals. Giclée prints of these works are available by inquiry."
            : "Original canvases available to purchase, finished with gold leaf and a suture learned in the funeral industry. The embroidered originals are never reproduced on canvas."}
        </p>
        <nav className="mt-8 flex gap-5 text-sm lowercase">
          <Link
            href="/work"
            className={sold ? "text-fg/45 hover:text-fg" : "text-accent"}
          >
            available
          </Link>
          <Link
            href="/work?view=sold"
            className={sold ? "text-accent" : "text-fg/45 hover:text-fg"}
          >
            sold
          </Link>
        </nav>
        <p className="mt-5">
          <Link href="/faq" className="text-sm lowercase text-accent">
            + faq — originals, prints, shipping, commissions
          </Link>
        </p>
      </header>
      <section className="relative mt-16 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((work, index) => (
          <WorkTile
            key={work.slug}
            work={work}
            priority={index < 6}
            figureClassName={index % 5 === 0 ? "aspect-[4/5]" : "aspect-square"}
          />
        ))}
      </section>
      <div className="mt-16">
        <PageIndex n="02" />
      </div>
    </div>
  );
}
