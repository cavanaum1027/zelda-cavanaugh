import { social } from "@/data/site";

export function Footer() {
  return (
    <footer className="flex flex-wrap items-end justify-between gap-6 px-5 pb-10 pt-24 md:px-8 lg:px-10">
      <p className="text-[11px] text-white/50">(c) {new Date().getFullYear()} Zelda Cavanaugh</p>
      <p className="flex gap-5 text-[13px] lowercase text-white/60">
        <a href={social.instagram} target="_blank" rel="noreferrer">
          instagram
        </a>
        <a href={social.substack} target="_blank" rel="noreferrer">
          field notes
        </a>
        <a href={social.artsy} target="_blank" rel="noreferrer">
          artsy
        </a>
      </p>
    </footer>
  );
}
