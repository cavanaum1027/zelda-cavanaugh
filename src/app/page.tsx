import Image from "next/image";
import Link from "next/link";
import { exhibitions, processSteps } from "@/data/site";
import { getWork } from "@/data/works";
import { WorkTile } from "@/components/WorkTile";

const selectedSlugs = [
  "beloved",
  "diffident",
  "toska",
  "nepenthe",
  "creation",
  "rue",
] as const;

function Chapter({ n, label }: { n: string; label: string }) {
  return (
    <p className="tracked text-gold">
      {n}
      <span className="mx-2 text-fg/25">/</span>
      {label}
    </p>
  );
}

export default function Home() {
  const identityPiece = getWork("beloved");
  const selected = selectedSlugs
    .map((slug) => getWork(slug))
    .filter((work): work is NonNullable<typeof work> => Boolean(work))
    .filter((work) => work.slug !== identityPiece?.slug);
  const upcoming = exhibitions.filter((item) => item.status === "upcoming");
  const lead = selected[0];
  const second = selected[1];
  const rest = selected.slice(2);

  return (
    <article className="px-5 pb-28 pt-28 md:px-8 lg:px-12">
      <section className="grid items-end gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7">
          <div className="mb-8 flex items-center gap-3 text-gold" aria-hidden="true">
            <span className="h-px w-10 bg-current" />
            <span className="text-[13px] leading-none">+</span>
          </div>
          <Chapter n="01" label="Identity" />
          <h1 className="mt-8 font-serif">
            <span className="block text-2xl font-light tracking-wide md:text-3xl">
              Zelda
            </span>
            <span className="mt-2 block text-[clamp(3.25rem,11vw,8.5rem)] font-medium leading-[0.82] tracking-[-0.04em]">
              Cavanaugh
            </span>
          </h1>
          <p className="mt-8 max-w-md font-serif text-2xl leading-snug text-fg/80 md:text-[1.75rem]">
            The emotional interior, rendered.
          </p>
          <p className="mt-5 max-w-md text-[15px] leading-7 text-fg/55">
            I investigate how generative systems approximate human emotion.
            Informed by the DSM-5, neuroscience, and a needle threaded with
            embroidery floss.
          </p>
        </div>

        {identityPiece ? (
          <Link
            href={`/work/${identityPiece.slug}`}
            className="group relative lg:col-span-5 lg:mb-4"
          >
            <span className="frame gilt relative block aspect-square">
              <Image
                src={identityPiece.image}
                alt={identityPiece.title}
                fill
                priority
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover object-[45%_30%]"
              />
            </span>
            <span className="mt-3 flex justify-between text-[12px] text-fg/45">
              <span>{identityPiece.title}</span>
              <span>20 × 20</span>
            </span>
          </Link>
        ) : null}
      </section>

      <section className="mt-28 max-w-3xl lg:mt-36">
        <Chapter n="02" label="Practice" />
        <div className="mt-10 space-y-8 text-[17px] leading-8 text-fg/80 md:text-[18px] md:leading-9">
          <p>
            Each work begins with a clinical question: how does a diagnostic
            framework — the DSM-5 — translate into visual form when filtered
            through a generative system? The research sits at the intersection of
            psychology, machine perception, and the limits of language.
          </p>
          <blockquote className="font-serif text-[1.65rem] leading-[1.25] text-fg md:text-[2.15rem] md:leading-[1.2]">
            “Abstraction as an entry point for machines to approximate emotional
            nuance.”
          </blockquote>
          <p>
            The works are not illustrations of mental illness. They are studies in
            translation — what is gained and lost when psychological experience
            moves from clinical text, through algorithmic interpretation, and into
            hand-stitched image.
          </p>
        </div>

        <p className="tracked mt-16 text-gold">The process</p>
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

      <section className="mt-28 lg:mt-36">
        <Chapter n="03" label="Selected" />
        <div className="mt-10 grid gap-x-5 gap-y-10 sm:grid-cols-2">
          {lead ? (
            <WorkTile
              work={lead}
              priority
              figureClassName="aspect-square gilt"
            />
          ) : null}
          {second ? (
            <WorkTile
              work={second}
              priority
              figureClassName="aspect-square gilt"
            />
          ) : null}
        </div>
        <div className="mt-10 grid gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((work) => (
            <WorkTile
              key={work.slug}
              work={work}
              figureClassName="aspect-square gilt"
            />
          ))}
        </div>
      </section>

      <section className="mt-28 lg:mt-36">
        <Chapter n="04" label="Forthcoming" />
        <div className="mt-10 grid items-stretch gap-5 sm:grid-cols-2 lg:max-w-3xl">
          {upcoming.map((item) => (
            <Link
              key={`${item.title}-${item.city}`}
              href="/exhibitions"
              className="flex h-full min-h-[22rem] flex-col bg-accent p-7 text-bg hover:text-bg"
            >
              <p className="text-[11px] font-semibold tracking-[0.2em] uppercase">
                {item.city}
              </p>
              <p className="mt-8 flex-1 font-serif text-3xl font-medium leading-[1.15]">
                {item.title}
              </p>
              <p className="mt-6 text-sm leading-6">
                {item.venue}
                <br />
                {item.dates}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <nav className="mt-28 flex flex-wrap gap-x-8 gap-y-3 border-t border-fg/10 pt-10 text-sm lowercase">
        <Link href="/work" className="text-accent">
          + all work
        </Link>
        <Link href="/contact" className="text-accent">
          + contact
        </Link>
      </nav>
    </article>
  );
}
