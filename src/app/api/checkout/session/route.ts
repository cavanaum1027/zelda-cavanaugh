import { NextResponse } from "next/server";
import { getStripe } from "@/lib/stripe";

export const runtime = "nodejs";

export async function GET(request: Request) {
  const stripe = getStripe();
  if (!stripe) {
    return NextResponse.json({ error: "Checkout is unavailable." }, { status: 503 });
  }

  const id = new URL(request.url).searchParams.get("session_id");
  if (!id || !id.startsWith("cs_")) {
    return NextResponse.json({ error: "Missing session." }, { status: 400 });
  }

  const session = await stripe.checkout.sessions.retrieve(id, {
    expand: ["line_items"],
  });
  const shipping = session.collected_information?.shipping_details;

  return NextResponse.json({
    status: session.status,
    payment_status: session.payment_status,
    customer_email: session.customer_details?.email ?? null,
    amount_total: session.amount_total,
    currency: session.currency,
    titles:
      session.line_items?.data
        .map((item) => item.description)
        .filter((title): title is string => Boolean(title)) ?? [],
    shipping: shipping
      ? {
          name: shipping.name,
          city: shipping.address?.city ?? null,
          country: shipping.address?.country ?? null,
        }
      : null,
  });
}
