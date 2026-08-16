export const CART_STORAGE_KEY = "zelda-cart-v1";
export const SHIPPING_CENTS = 4500;
export const SHIPPING_LABEL = "UPS Ground";
export const SHIPPING_COUNTRIES = [
  "US",
  "CA",
  "GB",
  "AU",
  "FR",
  "DE",
  "ES",
  "IT",
  "NL",
  "IE",
  "NZ",
] as const;
/** Minimum Checkout Session lifetime Stripe allows — short hold for one-of-one canvases. */
export const SESSION_TTL_SECONDS = 30 * 60;
/** Stripe Tax: General - Tangible Goods (physical originals, not digital downloads). */
export const PHYSICAL_TAX_CODE = "txcd_99999999";

export type CartEntry = {
  slug: string;
  quantity: number;
};
