"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart, money } from "@/components/CartProvider";
import { canPurchase } from "@/data/works";

export function CartDrawer() {
  const { open, setOpen, lines, subtotal, remove } = useCart();

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60]">
      <button
        type="button"
        className="absolute inset-0 bg-black/70"
        aria-label="Close cart"
        onClick={() => setOpen(false)}
      />
      <aside
        role="dialog"
        aria-modal="true"
        aria-labelledby="cart-title"
        tabIndex={-1}
        onKeyDown={(event) => {
          if (event.key === "Escape") setOpen(false);
        }}
        className="absolute inset-y-0 right-0 flex w-full max-w-md flex-col border-l border-fg/10 bg-bg px-6 py-8 text-fg"
      >
        <div className="flex items-baseline justify-between">
          <h2 id="cart-title" className="font-serif text-3xl">
            Cart
          </h2>
          <button type="button" className="text-sm lowercase" onClick={() => setOpen(false)}>
            close
          </button>
        </div>

        {lines.length === 0 ? (
          <p className="mt-10 text-sm leading-7 text-fg/55">
            The cart is empty.{" "}
            <Link href="/work" className="text-accent" onClick={() => setOpen(false)}>
              + work
            </Link>
          </p>
        ) : (
          <>
            <ul className="mt-8 flex-1 space-y-6 overflow-y-auto">
              {lines.map((line) => (
                <li key={line.slug} className="flex gap-4">
                  <Link
                    href={`/work/${line.slug}`}
                    onClick={() => setOpen(false)}
                    className="frame relative h-20 w-20 shrink-0"
                  >
                    <Image
                      src={line.work.image}
                      alt={line.work.title}
                      fill
                      sizes="80px"
                      className="object-cover"
                    />
                  </Link>
                  <div className="min-w-0 flex-1">
                    <p className="truncate">{line.work.title}</p>
                    <p className="mt-1 text-sm text-fg/45">
                      {line.work.print ? "Giclée print · " : ""}
                      {canPurchase(line.work) ? money(line.work.price) : "Sold"}
                    </p>
                    <button
                      type="button"
                      className="mt-2 text-[12px] lowercase text-accent"
                      onClick={() => remove(line.slug)}
                    >
                      + remove
                    </button>
                  </div>
                </li>
              ))}
            </ul>
            <div className="border-t border-fg/10 pt-6">
              <p className="flex justify-between text-sm">
                <span>Subtotal</span>
                <span>{money(subtotal)}</span>
              </p>
              <p className="mt-2 text-[12px] text-fg/40">
                Shipping is calculated at checkout.
              </p>
              {lines.some((line) => !canPurchase(line.work)) ? (
                <p className="mt-4 text-sm text-accent">
                  A work in the cart is sold. Remove it to continue.
                </p>
              ) : (
                <Link
                  href="/checkout"
                  onClick={() => setOpen(false)}
                  className="pill mt-6 w-full"
                >
                  Checkout
                </Link>
              )}
              <Link
                href="/cart"
                onClick={() => setOpen(false)}
                className="mt-4 block text-center text-sm lowercase text-accent"
              >
                + cart
              </Link>
            </div>
          </>
        )}
      </aside>
    </div>
  );
}
