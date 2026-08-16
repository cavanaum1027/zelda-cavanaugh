import type { Metadata } from "next";
import Link from "next/link";
import { OutlineNum, PageIndex, PlusRule } from "@/components/Marks";
import { WorkTile } from "@/components/WorkTile";
import { works } from "@/data/works";

export const metadata: Metadata = {
  title: "Work",
  description: "Original canvases with hand-generated gilding and embroidery.",
};

export default function WorkPage() {
  return (
    <div className="relative overflow-hidden px-5 pb-8 pt-28 md:px-8 lg:px-10">
      <PlusRule />
      <OutlineNum className="absolute -right-4 top-16 text-[32vw] md:text-[16rem]">02</OutlineNum>
      <header className="relative mt-8 max-w-xl">
        <h1 className="text-5xl font-extrabold tracking-tight md:text-6xl">Work</h1>
        <p className="mt-5 text-sm leading-7 text-fg/55">
          Original canvases finished with gold leaf and a suture learned in the
          funeral industry. The embroidered originals are never reproduced on canvas.
        </p>
        <p className="mt-5">
          <Link href="/faq" className="text-sm lowercase text-accent">
            + faq — originals, prints, shipping, commissions
          </Link>
        </p>
      </header>
      <section className="relative mt-16 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {works.map((work, index) => (
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
