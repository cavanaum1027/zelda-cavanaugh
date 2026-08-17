import { NextResponse } from "next/server";
import { sendContactEmail } from "@/lib/email";
import { rateLimit, requestIp } from "@/lib/rate-limit";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type Payload = {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
  website?: string;
};

function oneLine(value: string, max: number) {
  return value.replace(/[\r\n]+/g, " ").trim().slice(0, max);
}

export async function POST(request: Request) {
  if (!rateLimit(`contact:${requestIp(request)}`, 5, 10 * 60 * 1000)) {
    return NextResponse.json(
      { error: "Please wait a few minutes before sending another message." },
      { status: 429 },
    );
  }

  let body: Payload;
  try {
    body = (await request.json()) as Payload;
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  if (typeof body.website === "string" && body.website.trim()) {
    return NextResponse.json({ ok: true });
  }

  const name = oneLine(String(body.name ?? ""), 120);
  const email = oneLine(String(body.email ?? ""), 200);
  const subject = oneLine(String(body.subject ?? "Inquiry"), 160) || "Inquiry";
  const message = String(body.message ?? "").trim().slice(0, 5000);

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Please fill in name, email, and a message." },
      { status: 400 },
    );
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { error: "Please use a valid email address." },
      { status: 400 },
    );
  }

  const result = await sendContactEmail({ name, email, subject, message });
  if ("error" in result) {
    console.error("[contact] delivery failed", result.error);
    return NextResponse.json(
      { error: "The message could not be sent. Please try again." },
      { status: result.error === "missing_key" ? 503 : 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
