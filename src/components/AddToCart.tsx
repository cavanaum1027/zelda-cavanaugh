"use client";

import { useCart } from "@/components/CartProvider";

export function AddToCart({ slug, soldOut }: { slug: string; soldOut?: boolean }) {
  const { add, lines } = useCart();
  const inCart = lines.some((line) => line.slug === slug);

  if (soldOut) {
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
      onClick={() => add(slug)}
    >
      {inCart ? "In cart" : "Add to cart"}
    </button>
  );
}
