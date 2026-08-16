import type { Metadata } from "next";
import { Suspense } from "react";
import { ContactForm } from "@/components/ContactForm";
import { OutlineNum, PageIndex, PlusRule } from "@/components/Marks";
import { faqs, social } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Inquiries for originals, exhibitions, galleries, and consulting.",
};

export default function ContactPage() {
  return (
    <div className="relative overflow-hidden px-5 pb-8 pt-28 md:px-8 lg:px-10">
      <PlusRule />
      <OutlineNum className="absolute -right-6 top-8 text-[36vw] md:text-[16rem]">07</OutlineNum>

      <header className="relative mt-8 max-w-xl">
        <h1 className="text-5xl font-extrabold tracking-tight md:text-6xl">Contact</h1>
        <p className="mt-5 text-sm leading-7 text-white/55">
          A work, an exhibition, a consultation. AI innovation, design,
          storytelling, and product — $175 per hour.
        </p>
      </header>

      <section className="relative mt-16 grid gap-16 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <Suspense fallback={<p className="text-sm text-white/40">Loading…</p>}>
            <ContactForm />
          </Suspense>
        </div>
        <aside className="lg:col-span-4 lg:col-start-9 lg:pt-4">
          <ul className="space-y-3 text-lg lowercase">
            <li>
              <a href={social.instagram} target="_blank" rel="noreferrer">
                + instagram
              </a>
            </li>
            <li>
              <a href={social.substack} target="_blank" rel="noreferrer">
                + field notes
              </a>
            </li>
            <li>
              <a href={social.artsy} target="_blank" rel="noreferrer">
                + artsy
              </a>
            </li>
          </ul>
          <p className="mt-10 text-sm leading-7 text-white/45">
            Returns within 30 days, original condition and packaging. Custom
            orders cannot be returned. Damaged or incorrect items: write
            immediately so I can make it right.
          </p>
        </aside>
      </section>

      <section className="relative mt-24">
        <p className="tracked text-white/40">FAQ</p>
        <ol className="mt-8 max-w-2xl space-y-8">
          {faqs.map((item, index) => (
            <li key={item.q}>
              <p className="font-semibold">
                <span className="text-accent">{String(index + 1).padStart(2, "0")}</span>
                &ensp;{item.q}
              </p>
              <p className="mt-2 text-sm leading-7 text-white/55">{item.a}</p>
            </li>
          ))}
        </ol>
      </section>

      <div className="mt-16">
        <PageIndex n="07" />
      </div>
    </div>
  );
}
