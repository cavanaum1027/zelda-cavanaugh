"use client";

import { EmbeddedCheckout, EmbeddedCheckoutProvider } from "@stripe/react-stripe-js";
import { loadStripe, type Stripe } from "@stripe/stripe-js";
import Link from "next/link";
import { useCallback, useMemo, useState } from "react";
import { PlusRule } from "@/components/Marks";
import { useCart } from "@/components/CartProvider";

const publishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY ?? "";
const keysLookReal =
  (publishableKey.startsWith("pk_test_") || publishableKey.startsWith("pk_live_")) &&
  !publishableKey.includes("replace_me") &&
  !publishableKey.includes("...") &&
  publishableKey.length > 20;

export default function CheckoutPage() {
  const { lines, ready } = useCart();
  const [error, setError] = useState<string | null>(null);
  const purchasable = lines.filter((line) => !line.work.soldOut);
  const slugs = purchasable.map((line) => line.slug).join(",");
  const stripePromise = useMemo<Promise<Stripe | null> | null>(() => {
    if (!keysLookReal) return null;
    return loadStripe(publishableKey);
  }, []);

  const fetchClientSecret = useCallback(async () => {
    const response = await fetch("/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        items: slugs.split(",").filter(Boolean).map((slug) => ({ slug, quantity: 1 })),
      }),
    });
    const data = (await response.json()) as { clientSecret?: string; error?: string };
    if (!response.ok || !data.clientSecret) {
      const message =
        data.error ??
        "Checkout isn’t configured on the server yet. Write through the contact form if you want a work held.";
      setError(message);
      throw new Error(message);
    }
    return data.clientSecret;
  }, [slugs]);

  return (
    <div className="px-5 pb-24 pt-28 md:px-8 lg:px-10">
      <PlusRule />
      <header className="mt-10 max-w-xl">
        <h1 className="font-serif text-5xl tracking-tight md:text-6xl">Checkout</h1>
        <p className="mt-5 text-sm leading-7 text-fg/55">
          Pay on this site. Shipping address is collected for the original canvases.
        </p>
      </header>

      {!ready ? (
        <p className="mt-16 text-sm text-fg/45">Loading cart…</p>
      ) : purchasable.length === 0 ? (
        <p className="mt-16 text-sm">
          Nothing to check out.{" "}
          <Link href="/work" className="text-accent">
            + work
          </Link>
        </p>
      ) : !keysLookReal || error ? (
        <div className="mt-16 max-w-xl text-sm leading-7 text-fg/70">
          <p>
            {error ??
              "Checkout isn’t configured on the server yet. Write through the contact form if you want a work held today."}
          </p>
          <p className="mt-6">
            <Link href="/contact" className="text-accent">
              + contact
            </Link>
            <span className="mx-3 text-fg/25">/</span>
            <Link href="/cart" className="text-accent">
              + cart
            </Link>
          </p>
        </div>
      ) : (
        <div className="mt-12 max-w-2xl bg-[#fff] p-3">
          <EmbeddedCheckoutProvider
            stripe={stripePromise}
            options={{ fetchClientSecret }}
          >
            <EmbeddedCheckout />
          </EmbeddedCheckoutProvider>
        </div>
      )}
    </div>
  );
}
