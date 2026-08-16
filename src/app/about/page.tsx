import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { OutlineNum, PageIndex, PlusRule } from "@/components/Marks";
import { getWork } from "@/data/works";

export const metadata: Metadata = {
  title: "About",
  description:
    "Zelda Cavanaugh was born in a family-owned funeral home in Pennsylvania. She still works in product. The studio is the other half of the same question.",
};

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

        <article className="max-w-xl text-[16px] leading-8 text-white/80 lg:col-span-6 lg:col-start-7">
          <h1 className="text-5xl font-extrabold tracking-tight text-white">About</h1>

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
            The studio is the other half. I start with a diagnosis from the
            DSM-5, give it a persona, and talk until the clinical language has a
            pulse. Then the image, then the needle, then gold leaf. The Circle
            of Fifths sits under the composition the way a song sits under a
            scene. Beauty and disfigurement in the same frame. The machine is a
            tool. The meaning is mine.
          </p>

          <p className="mt-16 text-[12px] leading-6 text-white/40">
            University of Central Florida, B.A. English, Technical
            Communications. Northwestern University, M.S. Information Design
            & Strategy. Cornell University, Product Management.
          </p>
          <Link href="/work" className="mt-8 inline-block text-sm lowercase text-accent">
            + work
          </Link>
        </article>
      </div>

      <div className="mt-20">
        <PageIndex n="03" />
      </div>
    </div>
  );
}
