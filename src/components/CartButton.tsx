"use client";

import { useCart } from "@/components/CartProvider";

export function CartButton() {
  const { count, setOpen } = useCart();

  return (
    <button
      type="button"
      onClick={() => setOpen(true)}
      className="relative text-[13px] lowercase text-fg/80 hover:text-accent"
      aria-label={count ? `Cart, ${count} items` : "Cart"}
    >
      cart
      {count > 0 ? (
        <span className="ml-1 text-accent">{count}</span>
      ) : null}
    </button>
  );
}
