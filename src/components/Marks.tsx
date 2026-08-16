export function PlusRule({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-col items-center gap-2 ${className}`} aria-hidden="true">
      <span className="h-9 w-px bg-white" />
      <span className="text-[13px] leading-none">+</span>
    </div>
  );
}

export function OutlineNum({
  children,
  className = "",
}: {
  children: string;
  className?: string;
}) {
  return (
    <span aria-hidden="true" className={`outline-num ${className}`}>
      {children}
    </span>
  );
}

export function PageIndex({ n, of = "07" }: { n: string; of?: string }) {
  return <p className="text-[11px] tracking-wide text-white/70">({n}/{of})</p>;
}
