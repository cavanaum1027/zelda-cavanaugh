"use client";

import { useSearchParams } from "next/navigation";
import { FormEvent, useMemo, useState } from "react";

export function ContactForm() {
  const params = useSearchParams();
  const work = params.get("work") ?? "";
  const [sent, setSent] = useState(false);

  const defaultMessage = useMemo(
    () =>
      work
        ? `I am inquiring about “${work}.”`
        : "I would like to discuss a work, exhibition, or consultation.",
    [work],
  );

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const subject = String(data.get("subject") ?? "Inquiry");
    const message = String(data.get("message") ?? "");
    const body = `From: ${name} <${email}>\n\n${message}`;
    window.location.href = `mailto:studio@zeldacavanaugh.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  if (sent) {
    return (
      <p className="text-2xl font-semibold leading-snug">
        Thank you. If your mail client did not open, write directly and I will
        follow up.
      </p>
    );
  }

  const field =
    "mt-2 w-full border-b border-white/20 bg-transparent py-2 text-lg outline-none focus:border-accent";

  return (
    <form onSubmit={onSubmit} className="space-y-7">
      <label className="block">
        <span className="text-[12px] text-white/45">Name</span>
        <input required name="name" className={field} />
      </label>
      <label className="block">
        <span className="text-[12px] text-white/45">Email</span>
        <input required type="email" name="email" className={field} />
      </label>
      <label className="block">
        <span className="text-[12px] text-white/45">Subject</span>
        <input
          name="subject"
          defaultValue={work ? `Inquiry: ${work}` : "Inquiry"}
          className={field}
        />
      </label>
      <label className="block">
        <span className="text-[12px] text-white/45">Message</span>
        <textarea required name="message" rows={6} defaultValue={defaultMessage} className={field} />
      </label>
      <button type="submit" className="pill">
        Send
      </button>
    </form>
  );
}
