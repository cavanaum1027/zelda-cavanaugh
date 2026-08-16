import Stripe from "stripe";

function isUsableSecret(value?: string) {
  return Boolean(
    (value?.startsWith("sk_test_") || value?.startsWith("sk_live_")) &&
      !value.includes("replace_me") &&
      !value.includes("...") &&
      value.length > 20,
  );
}

function isUsablePublishable(value?: string) {
  return Boolean(
    (value?.startsWith("pk_test_") || value?.startsWith("pk_live_")) &&
      !value.includes("replace_me") &&
      !value.includes("...") &&
      value.length > 20,
  );
}

export function getStripe() {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!isUsableSecret(key)) return null;
  return new Stripe(key as string);
}

export function stripeConfigured() {
  return (
    isUsableSecret(process.env.STRIPE_SECRET_KEY) &&
    isUsablePublishable(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)
  );
}

export function stripeTaxEnabled() {
  return process.env.STRIPE_TAX_ENABLED === "true";
}

export function siteOrigin(request: Request) {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
  if (fromEnv) return fromEnv;
  const host = request.headers.get("x-forwarded-host") ?? request.headers.get("host");
  const proto = request.headers.get("x-forwarded-proto") ?? "http";
  if (host) return `${proto}://${host}`;
  return new URL(request.url).origin;
}
