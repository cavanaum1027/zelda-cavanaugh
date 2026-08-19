import { Resend } from "resend";
import { contactEmail } from "@/data/site";
import { getWork } from "@/data/works";

function resend() {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return null;
  return new Resend(apiKey);
}

function fromAddress() {
  return (
    process.env.CONTACT_FROM_EMAIL ?? "Zelda Cavanaugh <onboarding@resend.dev>"
  );
}

export function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

export async function sendContactEmail(input: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) {
  const client = resend();
  if (!client) return { error: "missing_key" as const };

  const text = `From: ${input.name} <${input.email}>\n\n${input.message}`;
  const { error } = await client.emails.send({
    from: fromAddress(),
    to: contactEmail,
    replyTo: input.email,
    subject: `zeldacavanaugh.com: ${input.subject}`,
    text,
    html: `<p><strong>From:</strong> ${escapeHtml(input.name)} &lt;${escapeHtml(input.email)}&gt;</p><p>${escapeHtml(input.message).replaceAll("\n", "<br />")}</p>`,
  });

  return error ? { error: "send_failed" as const } : { ok: true as const };
}

export async function sendSaleEmail(input: {
  email: string | null;
  phone: string | null;
  titles: string[];
  slugs: string;
  amount: number | null;
  currency: string | null;
  shipping: {
    name: string | null;
    line1: string | null;
    line2: string | null;
    city: string | null;
    state: string | null;
    postal_code: string | null;
    country: string | null;
  } | null;
  overlayCommitted?: boolean;
}) {
  const client = resend();
  if (!client) return { error: "missing_key" as const };

  const dollars =
    input.amount != null
      ? `${(input.amount / 100).toFixed(2)} ${input.currency ?? "usd"}`
      : "unknown";
  const ship = input.shipping
    ? [
        input.shipping.name,
        input.shipping.line1,
        input.shipping.line2,
        [input.shipping.city, input.shipping.state, input.shipping.postal_code]
          .filter(Boolean)
          .join(", "),
        input.shipping.country,
      ]
        .filter(Boolean)
        .join("\n")
    : "none";
  const slugList = input.slugs
    .split(",")
    .map((slug) => slug.trim())
    .filter(Boolean);
  const originals = slugList.filter((slug) => {
    const work = getWork(slug);
    return Boolean(work && !work.print);
  });
  const prints = slugList.filter((slug) => getWork(slug)?.print);
  const overlayLine =
    originals.length === 0
      ? "Print order. Originals were not marked sold. Prints stay available."
      : input.overlayCommitted
        ? `The site recorded those originals as sold and committed src/data/sold-overlay.json.`
        : `The site recorded those originals as sold. Stripe inventory blocks a second purchase immediately. Catalog overlay updates on the next deploy if GitHub is connected.`;
  const pack = [
    originals.length > 0 ? "Pack and ship the original by hand." : null,
    prints.length > 0
      ? "Ship Giclée prints in a rigid mailer. Prints stay available; do not mark them sold."
      : null,
  ]
    .filter(Boolean)
    .join(" ");
  const text = [
    `A sale just completed on zeldacavanaugh.com.`,
    ``,
    `Works: ${input.titles.join(", ") || input.slugs || "unknown"}`,
    `Slugs: ${input.slugs || "none"}`,
    `Total: ${dollars}`,
    `Buyer: ${input.email ?? "none"}`,
    `Phone: ${input.phone ?? "none"}`,
    ``,
    `Ship to:`,
    ship,
    ``,
    overlayLine,
    pack,
  ].join("\n");

  const { error } = await client.emails.send({
    from: fromAddress(),
    to: contactEmail,
    subject: `Sale: ${input.titles.join(", ") || input.slugs || "order"}`,
    text,
  });

  return error ? { error: "send_failed" as const } : { ok: true as const };
}
