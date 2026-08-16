"use client";

import Image from "next/image";
import Link from "next/link";
import { PlusRule } from "@/components/Marks";
import { useCart, money } from "@/components/CartProvider";

export default function CartPage() {
  const { lines, subtotal, remove, ready } = useCart();

  return (
    <div className="px-5 pb-24 pt-28 md:px-8 lg:px-10">
      <PlusRule />
      <header className="mt-10 max-w-xl">
        <h1 className="font-serif text-5xl tracking-tight md:text-6xl">Cart</h1>
        <p className="mt-5 text-sm leading-7 text-fg/55">
          Original canvases. Shipping is added at checkout.
        </p>
      </header>

      {!ready ? (
        <p className="mt-16 text-sm text-fg/45">Loading cart…</p>
      ) : lines.length === 0 ? (
        <p className="mt-16 text-sm">
          The cart is empty.{" "}
          <Link href="/work" className="text-accent">
            + work
          </Link>
        </p>
      ) : (
        <div className="mt-16 max-w-3xl">
          <ul>
            {lines.map((line) => (
              <li
                key={line.slug}
                className="grid items-center gap-4 border-t border-fg/10 py-6 sm:grid-cols-12"
              >
                <Link href={`/work/${line.slug}`} className="frame relative aspect-square sm:col-span-2">
                  <Image
                    src={line.work.image}
                    alt={line.work.title}
                    fill
                    sizes="160px"
                    className="object-cover"
                  />
                </Link>
                <div className="sm:col-span-6">
                  <p className="text-xl font-semibold">{line.work.title}</p>
                  <p className="mt-1 text-sm text-fg/45">Qty {line.quantity}</p>
                </div>
                <p className="sm:col-span-2 sm:text-right">
                  {line.work.soldOut ? "Sold" : money(line.work.price)}
                </p>
                <button
                  type="button"
                  className="text-left text-sm lowercase text-accent sm:col-span-2 sm:text-right"
                  onClick={() => remove(line.slug)}
                >
                  + remove
                </button>
              </li>
            ))}
          </ul>
          <p className="mt-8 flex justify-between border-t border-fg/10 pt-6">
            <span>Subtotal</span>
            <span>{money(subtotal)}</span>
          </p>
          {lines.some((line) => line.work.soldOut) ? (
            <p className="mt-8 text-sm text-accent">
              A work in the cart is sold. Remove it to continue.
            </p>
          ) : (
            <Link href="/checkout" className="pill mt-8 inline-flex">
              Checkout
            </Link>
          )}
        </div>
      )}
    </div>
  );
}
