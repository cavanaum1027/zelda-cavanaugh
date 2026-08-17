import Link from "next/link";
import { nextExhibition } from "@/data/site";

export function ShowBanner() {
  const show = nextExhibition();
  if (!show) return null;

  const today = new Date().toISOString().slice(0, 10);
  const onView = show.startDate <= today && today <= show.endDate;

  return (
    <Link
      href="/exhibitions"
      className="bg-accent mb-16 block -mx-5 px-5 py-8 text-bg hover:text-bg md:-mx-8 md:mb-20 md:px-8 md:py-10 lg:-mx-12 lg:px-12"
    >
      <span className="tracked">{onView ? "On view" : "Forthcoming"}</span>
      <span className="mt-4 block font-serif text-[clamp(2.75rem,8vw,5.5rem)] font-medium leading-[0.88] tracking-[-0.04em]">
        {show.city}
      </span>
      <span className="mt-5 block max-w-xl font-serif text-2xl font-medium leading-snug md:text-[1.75rem]">
        {show.title}
      </span>
      <span className="mt-5 block text-sm leading-6">
        {show.venue}
        <br />
        {show.dates}
      </span>
    </Link>
  );
}
