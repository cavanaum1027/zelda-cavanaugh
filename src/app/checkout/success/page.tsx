import Link from "next/link";
import { ClearPaidCart } from "@/components/ClearPaidCart";
import { PlusRule } from "@/components/Marks";
import { getCheckoutSession } from "@/lib/checkout-session";

type Props = {
  searchParams: Promise<{ session_id?: string | string[] }>;
};

export default async function CheckoutSuccessPage({ searchParams }: Props) {
  const raw = (await searchParams).session_id;
  const sessionId = Array.isArray(raw) ? raw[0] : raw;
  const details = sessionId ? await getCheckoutSession(sessionId) : null;
  const paid =
    details?.payment_status === "paid" || details?.status === "complete";
  const status = !sessionId ? "unknown" : !details ? "unknown" : paid ? "paid" : "open";
  const place =
    details?.shipping?.city && details.shipping.country
      ? `${details.shipping.city}, ${details.shipping.country}`
      : details?.shipping?.country;

  return (
    <div className="px-5 pb-24 pt-28 md:px-8 lg:px-10">
      {paid ? <ClearPaidCart paid /> : null}
      <PlusRule />
      <header className="mt-10 max-w-xl">
        <h1 className="font-serif text-5xl tracking-tight md:text-6xl">
          {status === "paid" ? "Received" : "Checkout"}
        </h1>
        <p className="mt-6 text-[16px] leading-8 text-fg/70">
          {status === "paid"
            ? "Thank you. The order is in. I will pack the work and send tracking when it ships."
            : "If payment did not complete, return to the cart and try again."}
        </p>
        {status === "paid" && details?.customer_email ? (
          <p className="mt-4 text-sm leading-7 text-fg/55">
            A receipt goes to {details.customer_email}
            {details.titles.length > 0 ? ` for ${details.titles.join(", ")}` : ""}
            {place ? `. Shipping to ${place}.` : "."}
          </p>
        ) : null}
        <p className="mt-10">
          <Link
            href={status === "open" ? "/cart" : "/work"}
            className="text-sm lowercase text-accent"
          >
            {status === "open" ? "+ cart" : "+ work"}
          </Link>
        </p>
      </header>
    </div>
  );
}
