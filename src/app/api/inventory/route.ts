import { NextResponse } from "next/server";
import { getWork } from "@/data/works";
import { findUnavailableSlugs } from "@/lib/inventory";
import { rateLimit, requestIp } from "@/lib/rate-limit";
import { getStripe } from "@/lib/stripe";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  if (!rateLimit(`inventory:${requestIp(request)}`, 60, 60 * 1000)) {
    return NextResponse.json({ error: "Please wait a moment." }, { status: 429 });
  }

  const slug = new URL(request.url).searchParams.get("slug")?.trim() ?? "";
  if (!slug) {
    return NextResponse.json({ error: "Missing slug." }, { status: 400 });
  }

  const work = getWork(slug);
  if (!work) {
    return NextResponse.json({ sold: true });
  }
  if (work.print) {
    return NextResponse.json({ sold: false, print: true });
  }
  if (work.soldOut) {
    return NextResponse.json({ sold: true });
  }

  const stripe = getStripe();
  if (!stripe) {
    return NextResponse.json({ sold: false });
  }

  const unavailable = await findUnavailableSlugs(stripe, [slug]);
  return NextResponse.json({
    sold: unavailable.sold.includes(slug),
    held: unavailable.held.includes(slug),
  });
}
