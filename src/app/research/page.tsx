import type { Metadata } from "next";
import Link from "next/link";
import { OutlineNum, PageIndex, PlusRule } from "@/components/Marks";
import { PageBreadcrumb } from "@/components/PageBreadcrumb";
import { research } from "@/data/site";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Research",
  description:
    "Studio research by Zelda Cavanaugh: Moodl.y, systems thinking and AI, and Field Notes on the half-life of digital thought.",
  path: "/research",
});

export default function ResearchPage() {
  return (
    <div className="relative overflow-hidden px-5 pb-8 pt-28 md:px-8 lg:px-10">
      <PlusRule />
      <OutlineNum className="absolute -right-4 top-12 text-[32vw] md:text-[16rem]">06</OutlineNum>

      <header className="relative mt-8 max-w-xl">
        <PageBreadcrumb
          items={[
            { name: "zelda cavanaugh", href: "/" },
            { name: "research", href: "/research" },
          ]}
        />
        <h1 className="mt-6 text-5xl font-extrabold tracking-tight md:text-6xl">Research</h1>
        <p className="mt-5 text-sm leading-7 text-fg/55">
          The canvas only shows the final output. The real story is in the systems
          beneath it — product, perception, and the half-life of digital thought.
        </p>
      </header>

      <section className="relative mt-16 space-y-16">
        {research.map((item) => (
          <article key={item.title} className="grid gap-4 border-t border-fg/10 pt-10 md:grid-cols-12">
            <p className="text-[12px] text-fg/40 md:col-span-3">{item.kicker}</p>
            <div className="md:col-span-8">
              <h2 className="text-3xl font-bold md:text-4xl">
                {item.title === "Field Notes" ? (
                  <Link href="/notes" className="text-fg">
                    {item.title}
                  </Link>
                ) : (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-fg"
                  >
                    {item.title}
                  </a>
                )}
              </h2>
              <p className="mt-5 max-w-xl text-sm leading-7 text-fg/55">{item.body}</p>
              {"note" in item && item.note ? (
                <p className="mt-4 text-sm text-fg/40">{item.note}</p>
              ) : null}
              <p className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
                {item.links.map((link) =>
                  link.href.startsWith("/") ? (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-sm lowercase text-accent"
                    >
                      + {link.label.toLowerCase()}
                    </Link>
                  ) : (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm lowercase text-accent"
                    >
                      + {link.label.toLowerCase()}
                    </a>
                  ),
                )}
              </p>
            </div>
          </article>
        ))}
      </section>

      <div className="mt-16">
        <PageIndex n="06" />
      </div>
    </div>
  );
}
