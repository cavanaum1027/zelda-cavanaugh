import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { OutlineNum, PageIndex, PlusRule } from "@/components/Marks";
import { practice, processSteps } from "@/data/site";
import { getWork } from "@/data/works";

export const metadata: Metadata = {
  title: "About",
  description: practice.hero,
};

const credentials = [
  {
    school: "University of Central Florida",
    degree: "B.A. English, Technical Communications",
  },
  {
    school: "Northwestern University",
    degree: "M.S. Information Design & Strategy",
  },
  {
    school: "Cornell University",
    degree: "Product Management certification",
  },
];

export default function AboutPage() {
  const piece = getWork("dolorifuge");

  return (
    <div className="relative overflow-hidden px-5 pb-8 pt-28 md:px-8 lg:px-10">
      <PlusRule />
      <OutlineNum className="absolute -right-4 top-10 text-[36vw] md:text-[16rem]">03</OutlineNum>

      <div className="relative mt-8 grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
        {piece ? (
          <Link
            href={`/work/${piece.slug}`}
            className="frame relative aspect-[3/4] lg:col-span-5"
          >
            <Image
              src={piece.image}
              alt={piece.title}
              fill
              priority
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover object-[50%_22%]"
            />
          </Link>
        ) : null}

        <article className="max-w-xl text-[16px] leading-8 text-fg/80 lg:col-span-6 lg:col-start-7">
          <h1 className="text-5xl font-extrabold tracking-tight text-fg">About</h1>
          <p className="mt-10">{practice.hero}</p>
          <p className="mt-6">{practice.intro}</p>
          <blockquote className="mt-8 font-serif text-[1.65rem] leading-[1.25] text-fg md:text-[2.15rem] md:leading-[1.2]">
            “{practice.quote}”
          </blockquote>
          <p className="mt-8">{practice.close}</p>
        </article>
      </div>

      <section className="relative mt-24 max-w-3xl">
        <p className="tracked text-gold">The process</p>
        <ol className="thread mt-8 space-y-9">
          {processSteps.map((step) => (
            <li key={step.number} className="thread-node">
              <p className="text-[12px] text-fg/40">
                {step.number} — {step.title}
              </p>
              <p className="mt-1 font-serif text-xl">{step.kicker}</p>
              <p className="mt-2 max-w-xl text-sm leading-6 text-fg/55">{step.body}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="relative mt-24 max-w-4xl">
        <h2 className="text-4xl font-extrabold tracking-tight md:text-5xl">Education</h2>

        <ol className="mt-14">
          {credentials.map((item) => (
            <li
              key={item.school}
              className="grid gap-3 border-t border-fg/10 py-8 md:grid-cols-12 md:gap-8"
            >
              <p className="text-sm font-semibold leading-6 md:col-span-5">
                {item.school}
              </p>
              <div className="md:col-span-7">
                <p className="text-xl font-semibold leading-snug">{item.degree}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <div className="mt-16">
        <Link href="/work" className="text-sm lowercase text-accent">
          + work
        </Link>
        <div className="mt-10">
          <PageIndex n="03" />
        </div>
      </div>
    </div>
  );
}
