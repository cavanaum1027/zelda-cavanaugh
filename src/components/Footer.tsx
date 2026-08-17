import Link from "next/link";
import { nav, social } from "@/data/site";

export function Footer() {
  return (
    <footer className="flex flex-wrap items-end justify-between gap-6 px-5 pb-10 pt-24 md:px-8 lg:px-10">
      <div>
        <p className="text-[11px] text-fg/50">
          (c) {new Date().getFullYear()} Zelda Cavanaugh
        </p>
        <nav className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-[13px] lowercase text-fg/60">
          {nav.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label.toLowerCase()}
            </Link>
          ))}
          <Link href="/privacy">privacy</Link>
        </nav>
      </div>
      <p className="flex gap-5 text-[13px] lowercase text-fg/60">
        <Link href="/notes" className="hover:text-accent">
          field notes
        </Link>
        <a href={social.instagram} target="_blank" rel="me noreferrer">
          instagram
        </a>
        <a href={social.artsy} target="_blank" rel="me noreferrer">
          artsy
        </a>
      </p>
    </footer>
  );
}
