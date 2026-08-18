"use client";

import { useState } from "react";
import { useCart } from "@/components/CartProvider";

export function AddToCart({ slug, soldOut }: { slug: string; soldOut?: boolean }) {
  const { add, lines } = useCart();
  const [busy, setBusy] = useState(false);
  const [nowSold, setNowSold] = useState(false);
  const inCart = lines.some((line) => line.slug === slug);

  if (soldOut || nowSold) {
    return (
      <button type="button" className="pill" disabled>
        Sold
      </button>
    );
  }

  return (
    <button
      type="button"
      className="pill"
      disabled={busy}
      onClick={() => {
        void (async () => {
          setBusy(true);
          const ok = await add(slug);
          if (!ok) setNowSold(true);
          setBusy(false);
        })();
      }}
    >
      {inCart ? "In cart" : "Add to cart"}
    </button>
  );
}
