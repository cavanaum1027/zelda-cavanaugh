import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { ContactForm } from "@/components/ContactForm";
import { OutlineNum, PageIndex, PlusRule } from "@/components/Marks";
import { social } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Inquiries for originals, exhibitions, galleries, and consulting.",
};

export default function ContactPage() {
  return (
    <div className="relative overflow-hidden px-5 pb-8 pt-28 md:px-8 lg:px-10">
      <PlusRule />
      <OutlineNum className="absolute -right-6 top-8 text-[36vw] md:text-[16rem]">08</OutlineNum>

      <header className="relative mt-8 max-w-xl">
        <h1 className="text-5xl font-extrabold tracking-tight md:text-6xl">Contact</h1>
        <p className="mt-5 text-sm leading-7 text-fg/55">
          A work, an exhibition, a consultation. AI innovation, design,
          storytelling, and product — $175 per hour.
        </p>
      </header>

      <section className="relative mt-16 grid gap-16 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <Suspense fallback={<p className="text-sm text-fg/40">Loading…</p>}>
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
            <li>
              <Link href="/faq">+ faq</Link>
            </li>
          </ul>
        </aside>
      </section>

      <div className="mt-16">
        <PageIndex n="08" />
      </div>
    </div>
  );
}
