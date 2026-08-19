"use client";

import { EmbeddedCheckout, EmbeddedCheckoutProvider } from "@stripe/react-stripe-js";
import { loadStripe, type Stripe, type StripeEmbeddedCheckoutShippingDetailsChangeEvent } from "@stripe/stripe-js";
import Link from "next/link";
import { useCallback, useEffect, useMemo, useState } from "react";
import { PlusRule } from "@/components/Marks";
import { useCart } from "@/components/CartProvider";
import { canPurchase } from "@/data/works";

type CheckoutConfig = {
  configured?: boolean;
  publishableKey?: string | null;
};

export default function CheckoutPage() {
  const { lines, ready } = useCart();
  const [error, setError] = useState<string | null>(null);
  const [config, setConfig] = useState<CheckoutConfig | null>(null);
  const purchasable = lines.filter((line) => canPurchase(line.work));
  const slugs = purchasable.map((line) => line.slug).join(",");
  const publishableKey = config?.publishableKey ?? "";
  const stripePromise = useMemo<Promise<Stripe | null> | null>(() => {
    if (!publishableKey) return null;
    return loadStripe(publishableKey);
  }, [publishableKey]);

  useEffect(() => {
    let cancelled = false;
    fetch("/api/checkout/config")
      .then(async (response) => {
        const data = (await response.json()) as CheckoutConfig;
        if (!cancelled) setConfig(data);
      })
      .catch(() => {
        if (!cancelled) setConfig({ configured: false, publishableKey: null });
      });
    return () => {
      cancelled = true;
    };
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

  const onShippingDetailsChange = useCallback(
    async (event: StripeEmbeddedCheckoutShippingDetailsChangeEvent) => {
      const response = await fetch("/api/checkout/shipping", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          checkoutSessionId: event.checkoutSessionId,
          shippingDetails: event.shippingDetails,
        }),
      });
      const data = (await response.json()) as { type?: string; message?: string };
      if (!response.ok || data.type === "error") {
        return {
          type: "reject" as const,
          errorMessage:
            data.message ?? "We can’t ship to that address. Write through the contact form.",
        };
      }
      return { type: "accept" as const };
    },
    [],
  );

  const waitingForConfig = config === null;
  const canMount = Boolean(stripePromise) && !error;

  return (
    <div className="px-5 pb-24 pt-28 md:px-8 lg:px-10">
      <PlusRule />
      <header className="mt-10 max-w-xl">
        <h1 className="font-serif text-5xl tracking-tight md:text-6xl">Checkout</h1>
        <p className="mt-5 text-sm leading-7 text-fg/55">
          Pay on this site. Shipping is calculated from the address you enter.
        </p>
      </header>

      {!ready || waitingForConfig ? (
        <p className="mt-16 text-sm text-fg/45">Loading cart…</p>
      ) : purchasable.length === 0 ? (
        <p className="mt-16 text-sm">
          Nothing to check out.{" "}
          <Link href="/work" className="text-accent">
            + work
          </Link>
        </p>
      ) : canMount ? (
        <div className="mt-12 max-w-2xl bg-[#fff] p-3">
          <EmbeddedCheckoutProvider
            stripe={stripePromise}
            options={{ fetchClientSecret, onShippingDetailsChange }}
          >
            <EmbeddedCheckout />
          </EmbeddedCheckoutProvider>
        </div>
      ) : (
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
      )}
    </div>
  );
}
