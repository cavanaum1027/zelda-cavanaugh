import type { Metadata } from "next";
import { OutlineNum, PageIndex, PlusRule } from "@/components/Marks";
import { JsonLd } from "@/components/JsonLd";
import { PageBreadcrumb } from "@/components/PageBreadcrumb";
import { exhibitions } from "@/data/site";
import { exhibitionEventsJsonLd, pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Exhibitions",
  description:
    "Zelda Cavanaugh exhibitions in Berlin, Paris, London, Barcelona, and New York. Forthcoming: Beyond Borders in Barcelona, plus selected history.",
  path: "/exhibitions",
});

export default function ExhibitionsPage() {
  const upcoming = exhibitions.filter((item) => item.status === "upcoming");
  const past = exhibitions.filter((item) => item.status === "past");

  return (
    <div className="relative overflow-hidden px-5 pb-8 pt-28 md:px-8 lg:px-10">
      <JsonLd data={exhibitionEventsJsonLd()} />
      <PlusRule />
      <OutlineNum className="absolute -right-4 top-12 text-[32vw] md:text-[16rem]">04</OutlineNum>

      <header className="relative mt-8 max-w-xl">
        <PageBreadcrumb
          items={[
            { name: "zelda cavanaugh", href: "/" },
            { name: "exhibitions", href: "/exhibitions" },
          ]}
        />
        <h1 className="mt-6 text-5xl font-extrabold tracking-tight md:text-6xl">Exhibitions</h1>
        <p className="mt-5 text-sm leading-7 text-fg/55">
          Berlin, Paris, London, Barcelona, New York. The themes travel: mental
          health, identity, the friction between humanity and the machine.
        </p>
      </header>

      <section className="relative mt-16">
        <p className="tracked text-fg/40">Upcoming</p>
        <ul className="mt-6">
          {upcoming.map((item) => (
            <li
              key={`${item.title}-${item.year}`}
              className="grid gap-2 border-t border-fg/10 py-8 md:grid-cols-12 md:gap-6"
            >
              <p className="text-sm text-fg/45 md:col-span-2">{item.year}</p>
              <div className="md:col-span-5">
                <h2 className="text-2xl font-semibold leading-snug">{item.title}</h2>
                <p className="mt-1 text-sm text-fg/50">
                  {item.venue}, {item.city}
                </p>
              </div>
              <p className="text-sm leading-6 text-fg/55 md:col-span-5">
                {item.dates}. {item.body}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section className="relative mt-10">
        <p className="tracked text-fg/40">Selected history</p>
        <ul className="mt-6">
          {past.map((item) => (
            <li
              key={`${item.title}-${item.city}-${item.year}`}
              className="grid gap-2 border-t border-fg/10 py-6 md:grid-cols-12 md:gap-6"
            >
              <p className="text-sm text-fg/45 md:col-span-2">{item.year}</p>
              <p className="md:col-span-5">
                <span className="text-xl font-semibold">{item.title}</span>
                <br />
                <span className="text-sm text-fg/45">
                  {item.venue}, {item.city}
                </span>
              </p>
              <p className="text-sm leading-6 text-fg/55 md:col-span-5">
                {item.dates}. {item.body}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <div className="mt-16">
        <PageIndex n="04" />
      </div>
    </div>
  );
}
