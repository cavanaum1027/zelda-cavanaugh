import { NextResponse } from "next/server";
import { getWork } from "@/data/works";
import { quoteShipping, isShippableCountry, SHIPPING_TAX_CODE } from "@/lib/shipping";
import { getStripe, stripeTaxEnabled } from "@/lib/stripe";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type ShippingAddress = {
  country?: string;
  line1?: string | null;
  line2?: string | null;
  city?: string | null;
  postal_code?: string | null;
  state?: string | null;
};

type Payload = {
  checkoutSessionId?: string;
  checkout_session_id?: string;
  shippingDetails?: { name?: string; address?: ShippingAddress };
  shipping_details?: { name?: string; address?: ShippingAddress };
};

export async function POST(request: Request) {
  const stripe = getStripe();
  if (!stripe) {
    return NextResponse.json(
      { type: "error", message: "Checkout isn’t configured." },
      { status: 503 },
    );
  }

  let body: Payload;
  try {
    body = (await request.json()) as Payload;
  } catch {
    return NextResponse.json(
      { type: "error", message: "Invalid shipping request." },
      { status: 400 },
    );
  }

  const sessionId = body.checkoutSessionId ?? body.checkout_session_id;
  const details = body.shippingDetails ?? body.shipping_details;
  const address = details?.address;
  const name = details?.name?.trim();
  const country = address?.country?.toUpperCase() ?? "";

  if (!sessionId || !name || !address || !country) {
    return NextResponse.json(
      { type: "error", message: "Enter a complete shipping address." },
      { status: 400 },
    );
  }

  if (!isShippableCountry(country)) {
    return NextResponse.json({
      type: "error",
      message: "This destination isn’t available for shipping. Write through the contact form.",
    });
  }

  const session = await stripe.checkout.sessions.retrieve(sessionId);
  if (session.status !== "open") {
    return NextResponse.json(
      { type: "error", message: "This checkout expired. Refresh and try again." },
      { status: 409 },
    );
  }

  const slugs = (session.metadata?.slugs ?? "")
    .split(",")
    .map((slug) => slug.trim())
    .filter(Boolean);
  const works = slugs
    .map((slug) => getWork(slug))
    .filter((work): work is NonNullable<typeof work> => Boolean(work));

  const quote = quoteShipping(country, works);
  if (!quote) {
    return NextResponse.json({
      type: "error",
      message: "This destination isn’t available for shipping. Write through the contact form.",
    });
  }

  const taxEnabled = stripeTaxEnabled();
  const line1 = address.line1?.trim() || "—";

  await stripe.checkout.sessions.update(sessionId, {
    collected_information: {
      shipping_details: {
        name,
        address: {
          country,
          line1,
          line2: address.line2?.trim() || undefined,
          city: address.city?.trim() || undefined,
          postal_code: address.postal_code?.trim() || undefined,
          state: address.state?.trim() || undefined,
        },
      },
    },
    shipping_options: [
      {
        shipping_rate_data: {
          type: "fixed_amount",
          display_name: quote.label,
          fixed_amount: { amount: quote.cents, currency: "usd" },
          tax_behavior: taxEnabled ? "exclusive" : undefined,
          tax_code: taxEnabled ? SHIPPING_TAX_CODE : undefined,
          delivery_estimate: {
            minimum: { unit: "business_day", value: quote.minDays },
            maximum: { unit: "business_day", value: quote.maxDays },
          },
        },
      },
    ],
  });

  return NextResponse.json({ type: "object", value: { succeeded: true } });
}
