import { NextResponse } from "next/server";
import { getWork } from "@/data/works";
import { findUnavailableSlugs } from "@/lib/inventory";
import {
  PHYSICAL_TAX_CODE,
  SESSION_TTL_SECONDS,
  SHIPPING_CENTS,
  SHIPPING_COUNTRIES,
  SHIPPING_LABEL,
} from "@/lib/commerce";
import {
  getPublishableKey,
  getStripe,
  logStripeKeyStatus,
  siteOrigin,
  stripeTaxEnabled,
} from "@/lib/stripe";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type Payload = {
  items?: { slug?: string; quantity?: number }[];
};

export async function POST(request: Request) {
  const keys = logStripeKeyStatus("api/checkout");
  const stripe = getStripe();
  if (!stripe || !keys.publishable) {
    return NextResponse.json(
      {
        error:
          "Checkout isn’t configured on the server yet. Write through the contact form if you want a work held.",
        keysPresent: { secret: keys.secret, publishable: keys.publishable },
      },
      { status: 503 },
    );
  }

  let body: Payload;
  try {
    body = (await request.json()) as Payload;
  } catch {
    return NextResponse.json({ error: "Invalid cart." }, { status: 400 });
  }

  const items = Array.isArray(body.items) ? body.items : [];
  const slugs: string[] = [];
  const lineItems = [];
  const taxEnabled = stripeTaxEnabled();

  for (const item of items) {
    const slug = String(item.slug ?? "");
    const work = getWork(slug);
    if (!work) {
      return NextResponse.json({ error: `Unknown work: ${slug}` }, { status: 400 });
    }
    if (work.soldOut) {
      return NextResponse.json({ error: `${work.title} is sold.` }, { status: 400 });
    }
    slugs.push(work.slug);
    lineItems.push({
      quantity: 1,
      adjustable_quantity: { enabled: false },
      price_data: {
        currency: "usd" as const,
        unit_amount: Math.round(work.price * 100),
        tax_behavior: taxEnabled ? ("exclusive" as const) : undefined,
        product_data: {
          name: `Zelda Cavanaugh — ${work.title}`,
          description: work.size ?? "Original canvas",
          images: [work.image],
          tax_code: PHYSICAL_TAX_CODE,
          metadata: { slug: work.slug },
        },
      },
    });
  }

  if (lineItems.length === 0) {
    return NextResponse.json({ error: "Cart is empty." }, { status: 400 });
  }

  const unavailable = await findUnavailableSlugs(stripe, slugs);
  if (unavailable.sold.length > 0) {
    const titles = unavailable.sold
      .map((slug) => getWork(slug)?.title ?? slug)
      .join(", ");
    return NextResponse.json(
      { error: `${titles} just sold. Remove it from the cart.` },
      { status: 409 },
    );
  }
  if (unavailable.held.length > 0) {
    const titles = unavailable.held
      .map((slug) => getWork(slug)?.title ?? slug)
      .join(", ");
    return NextResponse.json(
      {
        error: `${titles} is in another checkout. Try again in a few minutes, or write through the contact form.`,
      },
      { status: 409 },
    );
  }

  const origin = siteOrigin(request);
  const metadata: Record<string, string> = { slugs: slugs.join(",") };
  for (const slug of slugs) {
    metadata[`w_${slug}`.slice(0, 40)] = "1";
  }

  try {
    const session = await stripe.checkout.sessions.create(
      {
        ui_mode: "embedded",
        mode: "payment",
        line_items: lineItems,
        metadata,
        client_reference_id: slugs.join(",").slice(0, 200),
        customer_creation: "always",
        billing_address_collection: "required",
        phone_number_collection: { enabled: true },
        expires_at: Math.floor(Date.now() / 1000) + SESSION_TTL_SECONDS,
        ...(taxEnabled ? { automatic_tax: { enabled: true } } : {}),
        shipping_address_collection: {
          allowed_countries: [...SHIPPING_COUNTRIES],
        },
        shipping_options: [
          {
            shipping_rate_data: {
              type: "fixed_amount",
              fixed_amount: { amount: SHIPPING_CENTS, currency: "usd" },
              display_name: SHIPPING_LABEL,
              tax_behavior: taxEnabled ? "exclusive" : undefined,
              delivery_estimate: {
                minimum: { unit: "business_day", value: 5 },
                maximum: { unit: "business_day", value: 12 },
              },
            },
          },
        ],
        custom_text: {
          shipping_address: {
            message:
              "Original canvases ship via UPS. Include a phone number the carrier can reach.",
          },
        },
        return_url: `${origin}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      },
      {
        idempotencyKey: `checkout:${crypto.randomUUID()}`,
      },
    );

    if (!session.client_secret) {
      return NextResponse.json({ error: "Checkout could not start." }, { status: 500 });
    }

    return NextResponse.json({
      clientSecret: session.client_secret,
      publishableKey: getPublishableKey() || null,
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Checkout failed.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
