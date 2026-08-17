import { NextResponse } from "next/server";
import { getCheckoutSession } from "@/lib/checkout-session";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const id = new URL(request.url).searchParams.get("session_id");
  if (!id || !id.startsWith("cs_")) {
    return NextResponse.json({ error: "Missing session." }, { status: 400 });
  }

  const session = await getCheckoutSession(id);
  if (!session) {
    return NextResponse.json({ error: "Checkout is unavailable." }, { status: 503 });
  }

  return NextResponse.json({
    status: session.status,
    payment_status: session.payment_status,
    paid: session.payment_status === "paid" || session.status === "complete",
  });
}
