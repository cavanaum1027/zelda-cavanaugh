import type { Metadata } from "next";
import Link from "next/link";
import { OutlineNum, PlusRule } from "@/components/Marks";
import { PageBreadcrumb } from "@/components/PageBreadcrumb";
import { contactEmail } from "@/data/site";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Privacy",
  description:
    "How Zelda Cavanaugh collects and uses information on this site: inquiries, orders, shipping, and analytics.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <div className="relative overflow-hidden px-5 pb-8 pt-28 md:px-8 lg:px-10">
      <PlusRule />
      <OutlineNum className="absolute -right-6 top-8 text-[36vw] md:text-[16rem]">
        10
      </OutlineNum>

      <header className="relative mt-8 max-w-xl">
        <PageBreadcrumb
          items={[
            { name: "zelda cavanaugh", href: "/" },
            { name: "privacy", href: "/privacy" },
          ]}
        />
        <h1 className="mt-6 text-5xl font-extrabold tracking-tight md:text-6xl">
          Privacy
        </h1>
        <p className="mt-5 text-sm leading-7 text-fg/55">
          This site is a studio shop. I collect only what I need to answer you,
          ship a work, or understand whether the site is working.
        </p>
      </header>

      <section className="relative mt-16 max-w-2xl space-y-10 text-sm leading-7 text-fg/55">
        <article className="border-t border-fg/10 pt-8">
          <h2 className="font-semibold text-fg">Inquiries</h2>
          <p className="mt-3">
            The contact form sends your name, email, subject, and message to{" "}
            {contactEmail}. I use that to reply. I do not sell it.
          </p>
        </article>
        <article className="border-t border-fg/10 pt-8">
          <h2 className="font-semibold text-fg">Orders</h2>
          <p className="mt-3">
            Payments run through Stripe. Stripe collects card details, billing
            address, and the shipping address you enter at checkout. I receive
            your email, phone, what you bought, and where to send it. I keep
            that so I can pack the work and send tracking.
          </p>
        </article>
        <article className="border-t border-fg/10 pt-8">
          <h2 className="font-semibold text-fg">Analytics</h2>
          <p className="mt-3">
            Google Analytics records visits. It uses cookies to tell me which
            pages are read. It is not used to sell ads.
          </p>
        </article>
        <article className="border-t border-fg/10 pt-8">
          <h2 className="font-semibold text-fg">Returns</h2>
          <p className="mt-3">
            Returns within 30 days, original condition and packaging. Custom
            orders cannot be returned. The full note is on the{" "}
            <Link href="/faq" className="text-accent">
              FAQ
            </Link>
            .
          </p>
        </article>
        <article className="border-t border-fg/10 pt-8">
          <h2 className="font-semibold text-fg">Ask me</h2>
          <p className="mt-3">
            To see, correct, or delete what I have, write through the{" "}
            <Link href="/contact" className="text-accent">
              contact form
            </Link>{" "}
            or email {contactEmail}.
          </p>
        </article>
      </section>
    </div>
  );
}
