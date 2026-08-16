import type Stripe from "stripe";

function slugsFromSession(session: Stripe.Checkout.Session) {
  return (session.metadata?.slugs ?? "")
    .split(",")
    .map((slug) => slug.trim())
    .filter(Boolean);
}

export async function findUnavailableSlugs(stripe: Stripe, slugs: string[]) {
  const wanted = new Set(slugs);
  const sold = new Set<string>();
  const held = new Set<string>();

  try {
    const [complete, open] = await Promise.all([
      stripe.checkout.sessions.list({ status: "complete", limit: 100 }),
      stripe.checkout.sessions.list({ status: "open", limit: 100 }),
    ]);

    for (const session of complete.data) {
      if (session.payment_status !== "paid") continue;
      for (const slug of slugsFromSession(session)) {
        if (wanted.has(slug)) sold.add(slug);
      }
    }

    for (const session of open.data) {
      for (const slug of slugsFromSession(session)) {
        if (wanted.has(slug) && !sold.has(slug)) held.add(slug);
      }
    }
  } catch (error) {
    console.warn("[stripe] inventory check skipped", error);
  }

  return { sold: [...sold], held: [...held] };
}
