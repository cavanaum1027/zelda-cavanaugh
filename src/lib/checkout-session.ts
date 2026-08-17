import { getStripe } from "@/lib/stripe";

export type CheckoutSessionView = {
  status: string | null;
  payment_status: string | null;
  customer_email: string | null;
  titles: string[];
  shipping: { name?: string | null; city?: string | null; country?: string | null } | null;
};

export async function getCheckoutSession(
  sessionId: string,
): Promise<CheckoutSessionView | null> {
  if (!sessionId.startsWith("cs_")) return null;
  const stripe = getStripe();
  if (!stripe) return null;

  let session;
  try {
    session = await stripe.checkout.sessions.retrieve(sessionId, {
      expand: ["line_items"],
    });
  } catch {
    return null;
  }
  const shipping = session.collected_information?.shipping_details;

  return {
    status: session.status,
    payment_status: session.payment_status,
    customer_email: session.customer_details?.email ?? null,
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
  };
}
