import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { OutlineNum, PageIndex, PlusRule } from "@/components/Marks";
import { getWork } from "@/data/works";

export const metadata: Metadata = {
  title: "About",
  description:
    "Zelda Cavanaugh grew up around a family-owned funeral home in Pennsylvania. She still works in product. The studio uses the same habits.",
};

const credentials = [
  {
    school: "University of Central Florida",
    degree: "B.A. English, Technical Communications",
    context: "How to make dense language usable.",
  },
  {
    school: "Northwestern University",
    degree: "M.S. Information Design & Strategy",
    context:
      "Completed. How information is structured, and how people actually receive it.",
  },
  {
    school: "Cornell University",
    degree: "Product Management certification",
    context:
      "Completed. How a thing is sequenced, built, and put in front of a person.",
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

          <p className="mt-10">
            I grew up in Pennsylvania around a family-owned funeral home. I was
            not born in one. The distinction is boring and it is also accurate.
            The work was simply there: restorative arts, sewing, grief
            counseling. You see grief without the polite version. It strips
            things down. It also made the psyche interesting, enough that
            psychiatric nursing seemed like the next move.
          </p>
          <p className="mt-6">
            It wasn’t. I studied English at the University of Central Florida,
            concentrating in Technical Communications, and received the Stuart
            Oman’s Award for Excellence. The work after that was product,
            starting at IBM and continuing through Verizon, Walmart, and Disney.
            I still work in product. I take something dense and make it
            something a person can actually use.
          </p>
          <p className="mt-6">
            The studio keeps that job going. I start with a diagnosis from the
            DSM-5, give it a persona, and talk until the clinical language
            starts to behave. Then the generative tools, then a suture I learned
            in that funeral home, then gold leaf.
          </p>
        </article>
      </div>

      <section className="relative mt-24 max-w-4xl">
        <h2 className="text-4xl font-extrabold tracking-tight md:text-5xl">Education</h2>
        <p className="mt-6 max-w-2xl text-[16px] leading-8 text-fg/80">
          These are finished. The master’s at Northwestern and the product
          management certificate at Cornell are complete. I am not in school.
        </p>

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
                <p className="mt-3 text-sm leading-6 text-fg/55">{item.context}</p>
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
