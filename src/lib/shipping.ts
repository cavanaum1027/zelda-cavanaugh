import type { Work } from "@/data/works";
import { SHIPPING_COUNTRIES } from "@/lib/commerce";

/** Stripe Tax: Shipping. */
export const SHIPPING_TAX_CODE = "txcd_92010001";

type Zone = {
  first: number;
  extra: number;
  minDays: number;
  maxDays: number;
};

/** Destination rates for a boxed original canvas. Not a live carrier quote. */
const ZONES: Record<string, Zone> = {
  US: { first: 2200, extra: 1000, minDays: 5, maxDays: 8 },
  CA: { first: 3800, extra: 1400, minDays: 7, maxDays: 12 },
  GB: { first: 4800, extra: 1600, minDays: 8, maxDays: 14 },
  IE: { first: 4800, extra: 1600, minDays: 8, maxDays: 14 },
  FR: { first: 5500, extra: 1600, minDays: 8, maxDays: 14 },
  DE: { first: 5500, extra: 1600, minDays: 8, maxDays: 14 },
  ES: { first: 5500, extra: 1600, minDays: 8, maxDays: 14 },
  IT: { first: 5500, extra: 1600, minDays: 8, maxDays: 14 },
  NL: { first: 5500, extra: 1600, minDays: 8, maxDays: 14 },
  AU: { first: 7200, extra: 2000, minDays: 10, maxDays: 18 },
  NZ: { first: 7200, extra: 2000, minDays: 10, maxDays: 18 },
};

/** Rigid-mailer rates for Giclée prints. Canvas rates above stay unchanged. */
const PRINT_ZONES: Record<string, Zone> = {
  US: { first: 900, extra: 400, minDays: 5, maxDays: 8 },
  CA: { first: 1600, extra: 600, minDays: 7, maxDays: 12 },
  GB: { first: 2000, extra: 700, minDays: 8, maxDays: 14 },
  IE: { first: 2000, extra: 700, minDays: 8, maxDays: 14 },
  FR: { first: 2200, extra: 700, minDays: 8, maxDays: 14 },
  DE: { first: 2200, extra: 700, minDays: 8, maxDays: 14 },
  ES: { first: 2200, extra: 700, minDays: 8, maxDays: 14 },
  IT: { first: 2200, extra: 700, minDays: 8, maxDays: 14 },
  NL: { first: 2200, extra: 700, minDays: 8, maxDays: 14 },
  AU: { first: 2800, extra: 800, minDays: 10, maxDays: 18 },
  NZ: { first: 2800, extra: 800, minDays: 10, maxDays: 18 },
};

const LARGE_SIDE_INCHES = 24;
const LARGE_SURCHARGE_CENTS = 1200;

export function isShippableCountry(country: string) {
  return (SHIPPING_COUNTRIES as readonly string[]).includes(country.toUpperCase());
}

export function longestSideInches(size?: string) {
  if (!size) return 0;
  const nums = [...size.matchAll(/(\d+(?:\.\d+)?)/g)].map((match) => Number(match[1]));
  return nums.length ? Math.max(...nums) : 0;
}

function packageCents(zone: Zone, count: number, large = 0) {
  if (count <= 0) return 0;
  return zone.first + zone.extra * (count - 1) + large * LARGE_SURCHARGE_CENTS;
}

export function quoteShipping(country: string, works: Work[]) {
  const code = country.toUpperCase();
  const canvasZone = ZONES[code];
  const printZone = PRINT_ZONES[code];
  if (!canvasZone || !printZone) return null;

  const canvases = works.filter((work) => !work.print);
  const prints = works.filter((work) => work.print);
  const large = canvases.filter(
    (work) => longestSideInches(work.size) >= LARGE_SIDE_INCHES,
  ).length;

  const cents =
    packageCents(canvasZone, canvases.length, large) +
    packageCents(printZone, prints.length);

  const zone = canvases.length > 0 ? canvasZone : printZone;
  return {
    cents,
    minDays: zone.minDays,
    maxDays: zone.maxDays,
    label: "UPS Ground",
  };
}
