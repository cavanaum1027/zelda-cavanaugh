import Stripe from "stripe";

function readEnv(name: string) {
  // Dynamic lookup so Next.js cannot inline an empty NEXT_PUBLIC_ value at build time.
  return process.env[name];
}

function isUsableSecret(value?: string) {
  return Boolean(
    (value?.startsWith("sk_test_") ||
      value?.startsWith("sk_live_") ||
      value?.startsWith("rk_test_") ||
      value?.startsWith("rk_live_")) &&
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

export function stripeKeyStatus() {
  return {
    secret: isUsableSecret(readEnv("STRIPE_SECRET_KEY")),
    publishable: Boolean(getPublishableKey()),
  };
}

export function logStripeKeyStatus(source: string) {
  const status = stripeKeyStatus();
  console.info("[stripe] keys present", {
    source,
    secret: status.secret ? "yes" : "no",
    publishable: status.publishable ? "yes" : "no",
  });
  return status;
}

export function getPublishableKey() {
  const value =
    readEnv("STRIPE_PUBLISHABLE_KEY") ||
    readEnv("NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY") ||
    "";
  return isUsablePublishable(value) ? value : "";
}

export function getStripe() {
  const key = readEnv("STRIPE_SECRET_KEY");
  if (!isUsableSecret(key)) return null;
  return new Stripe(key as string);
}

export function stripeConfigured() {
  const status = stripeKeyStatus();
  return status.secret && status.publishable;
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
