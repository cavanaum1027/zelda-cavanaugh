import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/seo";

export function PageBreadcrumb({
  items,
}: {
  items: { name: string; href: string }[];
}) {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd(
          items.map((item) => ({ name: item.name, path: item.href })),
        )}
      />
      <nav className="text-[12px] lowercase text-fg/40" aria-label="Breadcrumb">
        {items.map((item, index) => {
          const last = index === items.length - 1;
          return (
            <span key={item.href}>
              {index > 0 ? <span className="text-fg/25"> / </span> : null}
              {last ? (
                <span>{item.name}</span>
              ) : (
                <Link href={item.href} className="hover:text-accent">
                  {item.name}
                </Link>
              )}
            </span>
          );
        })}
      </nav>
    </>
  );
}
