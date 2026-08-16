import Link from "next/link";
import { PlusRule } from "@/components/Marks";
import { WorkTile } from "@/components/WorkTile";
import { exhibitions } from "@/data/site";
import { getWork } from "@/data/works";

const selectedSlugs = [
  "beloved",
  "diffident",
  "toska",
  "medicine",
  "suture",
  "rue",
] as const;

export default function Home() {
  const selected = selectedSlugs
    .map((slug) => getWork(slug))
    .filter((work): work is NonNullable<typeof work> => Boolean(work));
  const nextShow = exhibitions.find((item) => item.status === "upcoming");

  return (
    <div className="glow px-5 pb-24 pt-28 md:px-8 lg:px-10">
      <PlusRule />

      <header className="mt-14 max-w-2xl">
        <h1 className="text-[clamp(2.75rem,7vw,5.5rem)] font-extrabold leading-[0.95] tracking-tight">
          Zelda Cavanaugh
        </h1>
        <p className="mt-6 max-w-md text-lg leading-snug text-white/70">
          The emotional interior, rendered.
        </p>
      </header>

      <section className="mt-24 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {selected.map((work, index) => (
          <WorkTile
            key={work.slug}
            work={work}
            priority={index < 3}
            figureClassName="aspect-square"
          />
        ))}
      </section>

      {nextShow ? (
        <Link
          href="/exhibitions"
          className="mt-24 flex aspect-square w-full max-w-sm flex-col justify-between bg-accent p-8 text-black hover:text-black"
        >
          <p className="text-[12px] font-semibold tracking-[0.18em] uppercase">
            {nextShow.city}
          </p>
          <div>
            <p className="text-3xl font-extrabold leading-[1.1]">{nextShow.title}</p>
            <p className="mt-4 text-[15px] leading-6">
              {nextShow.venue}
              <br />
              {nextShow.dates}
            </p>
          </div>
        </Link>
      ) : null}

      <p className="mt-12">
        <Link href="/work" className="text-sm lowercase text-accent">
          + all work
        </Link>
      </p>
    </div>
  );
}
