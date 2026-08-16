"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import { PlusRule } from "@/components/Marks";
import { useCart } from "@/components/CartProvider";

type SessionPayload = {
  payment_status?: string;
  status?: string;
  customer_email?: string | null;
  titles?: string[];
  shipping?: { name?: string | null; city?: string | null; country?: string | null } | null;
};

function SuccessBody() {
  const params = useSearchParams();
  const sessionId = params.get("session_id");
  const { clear } = useCart();
  const [status, setStatus] = useState<"loading" | "paid" | "open" | "unknown">("loading");
  const [details, setDetails] = useState<SessionPayload | null>(null);

  useEffect(() => {
    if (!sessionId) {
      setStatus("unknown");
      return;
    }
    fetch(`/api/checkout/session?session_id=${encodeURIComponent(sessionId)}`)
      .then((response) => response.json())
      .then((data: SessionPayload) => {
        setDetails(data);
        if (data.payment_status === "paid" || data.status === "complete") {
          setStatus("paid");
          clear();
        } else setStatus("open");
      })
      .catch(() => setStatus("unknown"));
  }, [sessionId, clear]);

  const place =
    details?.shipping?.city && details.shipping.country
      ? `${details.shipping.city}, ${details.shipping.country}`
      : details?.shipping?.country;

  return (
    <div className="px-5 pb-24 pt-28 md:px-8 lg:px-10">
      <PlusRule />
      <header className="mt-10 max-w-xl">
        <h1 className="font-serif text-5xl tracking-tight md:text-6xl">
          {status === "paid" ? "Received" : status === "loading" ? "Confirming" : "Checkout"}
        </h1>
        <p className="mt-6 text-[16px] leading-8 text-fg/70">
          {status === "loading"
            ? "Confirming payment…"
            : status === "paid"
              ? "Thank you. The order is in. I will pack the work and send tracking when it ships."
              : "If payment did not complete, return to the cart and try again."}
        </p>
        {status === "paid" && details?.customer_email ? (
          <p className="mt-4 text-sm leading-7 text-fg/55">
            A receipt goes to {details.customer_email}
            {details.titles && details.titles.length > 0
              ? ` for ${details.titles.join(", ")}`
              : ""}
            {place ? `. Shipping to ${place}.` : "."}
          </p>
        ) : null}
        <p className="mt-10">
          <Link href={status === "open" ? "/cart" : "/work"} className="text-sm lowercase text-accent">
            {status === "open" ? "+ cart" : "+ work"}
          </Link>
        </p>
      </header>
    </div>
  );
}

export default function CheckoutSuccessPage() {
  return (
    <Suspense fallback={<div className="px-5 pt-28 text-sm text-fg/45">Loading…</div>}>
      <SuccessBody />
    </Suspense>
  );
}
