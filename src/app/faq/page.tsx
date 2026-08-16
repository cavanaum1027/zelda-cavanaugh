import type { Metadata } from "next";
import Link from "next/link";
import { OutlineNum, PageIndex, PlusRule } from "@/components/Marks";
import { faqs } from "@/data/site";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Originals versus prints, commissions, shipping, returns, and consulting.",
};

export default function FaqPage() {
  return (
    <div className="relative overflow-hidden px-5 pb-8 pt-28 md:px-8 lg:px-10">
      <PlusRule />
      <OutlineNum className="absolute -right-6 top-8 text-[36vw] md:text-[16rem]">07</OutlineNum>

      <header className="relative mt-8 max-w-xl">
        <h1 className="text-5xl font-extrabold tracking-tight md:text-6xl">FAQ</h1>
        <p className="mt-5 text-sm leading-7 text-fg/55">
          Originals versus prints, commissions, shipping, returns. The practical
          side of the work, without the sales language.
        </p>
      </header>

      <section className="relative mt-16">
        <ol className="max-w-2xl space-y-10">
          {faqs.map((item, index) => (
            <li key={item.q} className="border-t border-fg/10 pt-8">
              <p className="font-semibold">
                <span className="text-accent">
                  {String(index + 1).padStart(2, "0")}
                </span>
                &ensp;{item.q}
              </p>
              <p className="mt-3 text-sm leading-7 text-fg/55">{item.a}</p>
            </li>
          ))}
        </ol>
      </section>

      <p className="mt-16">
        <Link href="/contact" className="text-sm lowercase text-accent">
          + contact
        </Link>
      </p>

      <div className="mt-10">
        <PageIndex n="07" />
      </div>
    </div>
  );
}
