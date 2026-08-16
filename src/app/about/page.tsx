import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { OutlineNum, PageIndex, PlusRule } from "@/components/Marks";
import { getWork } from "@/data/works";

export const metadata: Metadata = {
  title: "About",
  description:
    "Zelda Cavanaugh was born in a family-owned funeral home in Pennsylvania. She still works in product. The studio continues the same question.",
};

const credentials = [
  {
    school: "University of Central Florida",
    degree: "B.A. English, Technical Communications",
    context:
      "The first formal training in making dense language usable. Recipient of the Stuart Oman’s Award for Excellence.",
  },
  {
    school: "Northwestern University",
    degree: "M.S. Information Design & Strategy",
    context:
      "Completed. How information is structured, perceived, and received — the graduate work that sits under both the product practice and the studio.",
  },
  {
    school: "Cornell University",
    degree: "Product Management certification",
    context:
      "Completed. How a thing is sequenced, built, and put in front of a person.",
  },
];

export default function AboutPage() {
  const piece = getWork("ophelia");

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
              className="object-cover object-[45%_20%]"
            />
          </Link>
        ) : null}

        <article className="max-w-xl text-[16px] leading-8 text-fg/80 lg:col-span-6 lg:col-start-7">
          <h1 className="text-5xl font-extrabold tracking-tight text-fg">About</h1>

          <p className="mt-10">
            I was born in Pennsylvania, in a family-owned funeral home. That was
            the first training: embalming, restorative arts, floral arrangement,
            sewing, lighting, and grief counseling. You see grief up close and
            unfiltered. It strips things down. It also pulled me toward the
            psyche — first toward psychiatric nursing.
          </p>
          <p className="mt-6">
            The path bent. I studied English, concentrating in Technical
            Communications, and received the Stuart Oman’s Award for Excellence.
            The work that followed started at IBM and continued through Verizon,
            Walmart, and Disney. I still work in product. The job is the same
            question in a different room: take something complex and make it
            something a person can use, understand, hold.
          </p>
          <p className="mt-6">
            The studio continues that question. I start with a diagnosis from
            the DSM-5, give it a persona, and talk until the clinical language
            has a pulse. Then the image, then the needle, then gold leaf. The
            Circle of Fifths sits under the composition the way a song sits
            under a scene. Beauty and disfigurement in the same frame. The
            machine is a tool. The meaning is mine.
          </p>
        </article>
      </div>

      <section className="relative mt-24 max-w-4xl">
        <h2 className="text-4xl font-extrabold tracking-tight md:text-5xl">Education</h2>
        <p className="mt-6 max-w-2xl text-[16px] leading-8 text-fg/80">
          Technical communications came first: how to make language exact without
          killing it. Product work put that training against real systems —
          interfaces, constraints, and later the generative tools that now enter
          the studio. The graduate work at Northwestern was information design
          and strategy: how people actually receive complexity. Cornell was
          product management — how a thing is built, sequenced, and shipped.
        </p>
        <p className="mt-5 max-w-2xl text-[16px] leading-8 text-fg/80">
          The degrees are complete. They sit in the practice the way the funeral
          training does: not as ornament, but as method.
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
