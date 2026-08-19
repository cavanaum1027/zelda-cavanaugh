import { NextResponse } from "next/server";
import type Stripe from "stripe";
import { revalidatePath } from "next/cache";
import { sendSaleEmail } from "@/lib/email";
import { rememberPaidOriginals } from "@/lib/inventory";
import { originalSlugsFrom, persistSoldSlugs } from "@/lib/sold";
import { getStripe } from "@/lib/stripe";

export const runtime = "nodejs";

const FULFILL_EVENTS = new Set([
  "checkout.session.completed",
  "checkout.session.async_payment_succeeded",
]);

function shippingFrom(session: Stripe.Checkout.Session) {
  const details = session.collected_information?.shipping_details;
  if (!details) return null;
  const address = details.address;
  return {
    name: details.name,
    line1: address?.line1 ?? null,
    line2: address?.line2 ?? null,
    city: address?.city ?? null,
    state: address?.state ?? null,
    postal_code: address?.postal_code ?? null,
    country: address?.country ?? null,
  };
}

async function fulfill(stripe: Stripe, session: Stripe.Checkout.Session) {
  if (session.payment_status !== "paid") return;

  const full = await stripe.checkout.sessions.retrieve(session.id, {
    expand: ["line_items"],
  });
  const titles =
    full.line_items?.data.map((item) => item.description).filter(Boolean) ?? [];

  const shipping = shippingFrom(full);
  const slugs = (full.metadata?.slugs ?? "")
    .split(",")
    .map((slug) => slug.trim())
    .filter(Boolean);
  const originals = originalSlugsFrom(
    full.metadata && "originals" in full.metadata
      ? (full.metadata.originals ?? "")
          .split(",")
          .map((slug) => slug.trim())
          .filter(Boolean)
      : slugs,
  );
  rememberPaidOriginals(originals);
  const overlay = await persistSoldSlugs(originals);
  console.info("[stripe] payment received", {
    id: full.id,
    email: full.customer_details?.email ?? null,
    slugs: slugs.join(","),
    originals: originals.join(",") || "none",
    titles,
    overlay: originals.length === 0 ? "skipped" : overlay.committed ? "committed" : "pending",
  });
  revalidatePath("/work");
  revalidatePath("/");
  for (const slug of originals) {
    revalidatePath(`/work/${slug}`);
  }

  const notice = await sendSaleEmail({
    email: full.customer_details?.email ?? null,
    phone: full.customer_details?.phone ?? null,
    titles: titles.filter((title): title is string => Boolean(title)),
    slugs: slugs.join(","),
    amount: full.amount_total,
    currency: full.currency,
    shipping,
    overlayCommitted: overlay.committed,
  });
  if ("error" in notice) {
    console.error("[stripe] sale email failed", notice.error);
  }
}

export async function POST(request: Request) {
  const stripe = getStripe();
  const secret = process.env.STRIPE_WEBHOOK_SECRET;
  if (!stripe || !secret || secret.includes("replace_me")) {
    return NextResponse.json({ error: "Webhook is not configured." }, { status: 503 });
  }

  const signature = request.headers.get("stripe-signature");
  if (!signature) {
    return NextResponse.json({ error: "Missing signature." }, { status: 400 });
  }

  const payload = await request.text();

  try {
    const event = stripe.webhooks.constructEvent(payload, signature, secret);
    if (FULFILL_EVENTS.has(event.type)) {
      await fulfill(stripe, event.data.object as Stripe.Checkout.Session);
    } else if (event.type === "checkout.session.async_payment_failed") {
      const session = event.data.object as Stripe.Checkout.Session;
      console.info("[stripe] async payment failed", { id: session.id });
    }
    return NextResponse.json({ received: true, type: event.type });
  } catch {
    return NextResponse.json({ error: "Invalid signature." }, { status: 400 });
  }
}
