import { NextResponse } from "next/server";
import { getPublishableKey, logStripeKeyStatus } from "@/lib/stripe";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  const keys = logStripeKeyStatus("api/checkout/config");
  const publishableKey = getPublishableKey();
  return NextResponse.json({
    configured: keys.secret && keys.publishable,
    publishableKey: publishableKey || null,
    keysPresent: { secret: keys.secret, publishable: keys.publishable },
  });
}
