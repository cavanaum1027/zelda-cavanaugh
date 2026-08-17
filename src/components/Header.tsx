"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { CartButton } from "@/components/CartButton";
import { nav } from "@/data/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50">
      <div className="pointer-events-auto flex items-start justify-between px-5 py-5 md:px-8 lg:px-10">
        <Link href="/" className="tracked text-fg hover:text-accent">
          Zelda Cavanaugh
        </Link>

        <nav className="hidden items-center gap-5 text-[13px] lowercase text-fg/80 lg:flex">
          {nav.map((item) => {
            const active =
              pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={active ? "text-accent" : "hover:text-fg"}
              >
                {item.label.toLowerCase()}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-5">
          <CartButton />
          <button
            type="button"
            className="text-[13px] lowercase lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? "close" : "menu"}
          </button>
        </div>
      </div>

      {open ? (
        <div className="pointer-events-auto border-t border-fg/10 bg-bg px-5 py-6 lg:hidden">
          <nav id="mobile-nav" className="flex flex-col gap-3 text-lg lowercase">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="hover:text-accent"
              >
                + {item.label.toLowerCase()}
              </Link>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
