import Image from "next/image";
import Link from "next/link";
import { OutlineNum, PageIndex, PlusRule } from "@/components/Marks";
import { PressQuote } from "@/components/PressQuote";
import { WorkTile } from "@/components/WorkTile";
import { exhibitions, nav, press, processSteps } from "@/data/site";
import { featuredWorks, getWork } from "@/data/works";

export default function Home() {
  const hero = getWork("beloved") ?? featuredWorks[0];
  const selected = featuredWorks.filter((work) => work.slug !== hero?.slug).slice(0, 4);
  const upcoming = exhibitions.filter((item) => item.status === "upcoming");

  return (
    <>
      <section className="glow relative min-h-[100svh] overflow-hidden px-5 pb-10 pt-24 md:px-8 lg:px-10">
        <svg
          className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.09]"
          viewBox="0 0 1600 900"
          aria-hidden="true"
        >
          <polygon points="420,900 1180,-40 1600,220 1600,900" fill="#3a3a3a" />
        </svg>
        <PlusRule className="absolute left-5 top-24 md:left-8" />
        <h1 className="relative mt-16 max-w-xl text-[clamp(4.2rem,14vw,9.5rem)] font-extrabold leading-[0.82] tracking-tight">
          Zelda
        </h1>
        <p className="relative mt-5 max-w-sm text-lg text-white/80">
          The emotional interior, rendered.
        </p>
        <p className="relative mt-6 max-w-md text-[15px] leading-7 text-white/55">
          I investigate how generative systems approximate human emotion. Informed
          by the DSM-5, neuroscience, and a needle threaded with embroidery floss.
        </p>
        {hero ? (
          <Link
            href={`/work/${hero.slug}`}
            className="relative mt-12 block h-[42vh] min-h-[280px] w-[min(92%,540px)] md:absolute md:bottom-0 md:right-0 md:mt-0 md:h-[72%] md:w-[52%] md:min-h-0"
          >
            <Image
              src={hero.image}
              alt={hero.title}
              fill
              priority
              sizes="55vw"
              className="object-cover object-[70%_20%] grayscale contrast-125"
            />
          </Link>
        ) : null}
        <p className="absolute bottom-24 right-6 hidden origin-bottom-right -rotate-90 tracking-[0.38em] text-[11px] uppercase text-white/80 lg:block">
          Zelda Cavanaugh
        </p>
        <div className="absolute bottom-8 left-5 md:left-8">
          <PageIndex n="01" />
        </div>
        <span className="absolute right-8 top-24 hidden text-accent md:block">+</span>
      </section>

      <section className="relative overflow-hidden px-5 py-24 md:px-8 md:py-32 lg:px-10">
        <OutlineNum className="absolute -bottom-8 -right-4 text-[38vw] md:text-[22rem]">02</OutlineNum>
        <PlusRule className="absolute left-5 top-24 hidden md:flex md:left-8" />
        <div className="relative grid items-center gap-16 lg:grid-cols-12">
          {hero ? (
            <div className="frame relative mx-auto aspect-[9/19] w-[220px] lg:col-span-4 lg:mx-0 lg:w-[260px]">
              <Image
                src={(getWork("toska") ?? hero).image}
                alt="Selected work"
                fill
                sizes="260px"
                className="object-cover"
              />
            </div>
          ) : null}
          <ul className="space-y-4 text-2xl lowercase lg:col-span-4 lg:col-start-6">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-accent">
                  + {item.label.toLowerCase()}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-16">
          <PageIndex n="02" />
        </div>
      </section>

      <section className="relative overflow-hidden px-5 py-24 md:px-8 lg:px-10">
        <OutlineNum className="absolute -bottom-10 left-8 text-[32vw] md:text-[18rem]">03</OutlineNum>
        <div className="relative grid items-start gap-12 lg:grid-cols-12">
          <div className="flex aspect-square items-center bg-accent p-8 text-black lg:col-span-5">
            <p className="text-3xl font-extrabold leading-[1.15] md:text-4xl">
              The works are not illustrations of mental illness.
            </p>
          </div>
          <div className="space-y-8 lg:col-span-6 lg:col-start-7">
            <p className="text-sm leading-7 text-white/70">
              They are studies in translation — what is gained and lost when
              psychological experience moves from clinical text, through
              algorithmic interpretation, and into hand-stitched image.
            </p>
            {processSteps.map((step) => (
              <div key={step.number}>
                <h2 className="text-lg font-semibold">{step.title}</h2>
                <p className="mt-2 text-sm leading-6 text-white/55">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-16">
          <PageIndex n="03" />
        </div>
      </section>

      <section className="relative px-5 py-24 md:px-8 lg:px-10">
        <PlusRule />
        <div className="mt-8 flex items-end justify-between gap-6">
          <h2 className="text-4xl font-bold md:text-5xl">Selected work</h2>
          <Link href="/work" className="text-sm lowercase text-white/60 hover:text-accent">
            + work
          </Link>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {selected.map((work, index) => (
            <WorkTile
              key={work.slug}
              work={work}
              priority={index < 2}
              figureClassName={index === 0 ? "aspect-[4/5]" : "aspect-square"}
            />
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden px-5 py-24 md:px-8 lg:px-10">
        <OutlineNum className="absolute -top-6 right-0 text-[28vw] md:text-[14rem]">04</OutlineNum>
        <div className="relative grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="tracked text-white/50">On view</p>
            <ul className="mt-8 space-y-8">
              {upcoming.map((item) => (
                <li key={`${item.title}-${item.city}`}>
                  <p className="text-[12px] text-white/45">
                    {item.city} · {item.dates}
                  </p>
                  <h3 className="mt-1 text-2xl font-semibold">{item.title}</h3>
                  <p className="mt-1 text-sm text-white/50">{item.venue}</p>
                </li>
              ))}
            </ul>
            <Link href="/exhibitions" className="mt-8 inline-block text-sm lowercase text-accent">
              + exhibition history
            </Link>
          </div>
          <div className="space-y-12 lg:col-span-6 lg:col-start-7">
            {press.map((item) => (
              <PressQuote key={item.href} item={item} size="sm" />
            ))}
            <Link href="/press" className="inline-block text-sm lowercase text-accent">
              + press
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
