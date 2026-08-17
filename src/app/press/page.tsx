import type { Metadata } from "next";
import { OutlineNum, PageIndex, PlusRule } from "@/components/Marks";
import { PageBreadcrumb } from "@/components/PageBreadcrumb";
import { PressQuote } from "@/components/PressQuote";
import { press } from "@/data/site";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Press",
  description:
    "Press on Zelda Cavanaugh: Artio Magazine, the IBM Business Schooled podcast, and an interview with Contemporary Art Curator Magazine.",
  path: "/press",
});

export default function PressPage() {
  return (
    <div className="relative overflow-hidden px-5 pb-8 pt-28 md:px-8 lg:px-10">
      <PlusRule />
      <OutlineNum className="absolute -right-6 top-8 text-[36vw] md:text-[16rem]">05</OutlineNum>

      <header className="relative mt-8 max-w-xl">
        <PageBreadcrumb
          items={[
            { name: "zelda cavanaugh", href: "/" },
            { name: "press", href: "/press" },
          ]}
        />
        <h1 className="mt-6 text-5xl font-extrabold tracking-tight md:text-6xl">Press</h1>
        <p className="mt-5 text-sm leading-7 text-fg/55">
          A new visual language — and a reminder that the core of creativity
          remains distinctly human.
        </p>
      </header>

      <section className="relative mt-16 space-y-16">
        {press.map((item) => (
          <div key={item.href} className="max-w-4xl border-t border-fg/10 pt-10">
            <PressQuote item={item} />
          </div>
        ))}
      </section>

      <div className="mt-16">
        <PageIndex n="05" />
      </div>
    </div>
  );
}
