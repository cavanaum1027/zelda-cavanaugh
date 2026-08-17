"use client";

import { useEffect } from "react";
import { useCart } from "@/components/CartProvider";

export function ClearPaidCart({ paid }: { paid: boolean }) {
  const { clear } = useCart();

  useEffect(() => {
    if (paid) clear();
  }, [paid, clear]);

  return null;
}
