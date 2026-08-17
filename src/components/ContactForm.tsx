"use client";

import { useSearchParams } from "next/navigation";
import { FormEvent, useMemo, useState } from "react";

export function ContactForm() {
  const params = useSearchParams();
  const work = params.get("work") ?? "";
  const print = params.get("print") === "1";
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  const defaultMessage = useMemo(
    () =>
      work && print
        ? `I am inquiring about purchasing a Giclée print of “${work}.”`
        : work
          ? `I am inquiring about “${work}.”`
          : "I would like to discuss a work, exhibition, or consultation.",
    [work, print],
  );

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    setSending(true);
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: String(data.get("name") ?? ""),
          email: String(data.get("email") ?? ""),
          subject: String(data.get("subject") ?? "Inquiry"),
          message: String(data.get("message") ?? ""),
          website: String(data.get("website") ?? ""),
        }),
      });
      const payload = (await res.json().catch(() => null)) as {
        error?: string;
      } | null;
      if (!res.ok) {
        setError(payload?.error ?? "The message could not be sent. Please try again.");
        return;
      }
      setSent(true);
    } catch {
      setError("The message could not be sent. Please try again.");
    } finally {
      setSending(false);
    }
  }

  if (sent) {
    return (
      <p className="text-2xl font-semibold leading-snug">
        Thank you. I will follow up.
      </p>
    );
  }

  const field =
    "mt-2 w-full border-b border-fg/20 bg-transparent py-2 text-lg outline-none focus:border-accent";

  return (
    <form onSubmit={onSubmit} className="space-y-7">
      <label className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
        Website
        <input tabIndex={-1} autoComplete="off" name="website" />
      </label>
      <label className="block">
        <span className="text-[12px] text-fg/45">Name</span>
        <input required name="name" className={field} />
      </label>
      <label className="block">
        <span className="text-[12px] text-fg/45">Email</span>
        <input required type="email" name="email" className={field} />
      </label>
      <label className="block">
        <span className="text-[12px] text-fg/45">Subject</span>
        <input
          name="subject"
          defaultValue={
            work
              ? print
                ? `Print inquiry: ${work}`
                : `Inquiry: ${work}`
              : "Inquiry"
          }
          className={field}
        />
      </label>
      <label className="block">
        <span className="text-[12px] text-fg/45">Message</span>
        <textarea
          required
          name="message"
          rows={6}
          defaultValue={defaultMessage}
          className={field}
        />
      </label>
      {error ? <p className="text-sm text-accent">{error}</p> : null}
      <button type="submit" className="pill" disabled={sending}>
        {sending ? "Sending" : "Send"}
      </button>
    </form>
  );
}
