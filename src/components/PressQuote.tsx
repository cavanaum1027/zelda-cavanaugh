type PressItem = {
  quote: string;
  source: string;
  detail: string;
  href: string;
  action: string;
};

export function PressQuote({
  item,
  size = "md",
}: {
  item: PressItem;
  size?: "sm" | "md";
}) {
  const quoteClass =
    size === "sm"
      ? "text-2xl font-semibold leading-snug md:text-3xl"
      : "text-2xl font-semibold leading-snug md:text-4xl";

  return (
    <blockquote>
      <a
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        className="group block text-fg hover:text-fg"
      >
        <p className={`${quoteClass} underline-offset-4 group-hover:underline`}>
          “{item.quote}”
        </p>
        <footer className="mt-4 text-[12px] text-fg/45">
          {item.source} · {item.detail}
        </footer>
        <span className="mt-3 inline-block text-sm lowercase text-accent">
          + {item.action.toLowerCase()}
        </span>
      </a>
    </blockquote>
  );
}
