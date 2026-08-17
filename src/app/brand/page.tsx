import type { Metadata } from "next";
import { OutlineNum, PlusRule } from "@/components/Marks";
import { PageBreadcrumb } from "@/components/PageBreadcrumb";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Brand",
  description: "Zelda Cavanaugh invoice marks.",
  path: "/brand",
  index: false,
});

const files = [
  {
    href: "/brand/zelda-cavanaugh-icon.png",
    label: "Icon",
    note: "Square. Near-black field, pink plus. Profile photos, invoice software, anything that wants a 1:1 mark.",
  },
  {
    href: "/brand/zelda-cavanaugh-icon-512.png",
    label: "Icon, 512",
    note: "Same mark, smaller file.",
  },
  {
    href: "/brand/zelda-cavanaugh-icon-mark.png",
    label: "Plus only",
    note: "Transparent. Drop it on a light invoice.",
  },
  {
    href: "/brand/zelda-cavanaugh-icon.svg",
    label: "Icon SVG",
    note: "Vector square.",
  },
  {
    href: "/brand/zelda-cavanaugh-icon-mark.svg",
    label: "Plus SVG",
    note: "Vector, no field.",
  },
  {
    href: "/brand/zelda-cavanaugh-invoice.png",
    label: "Stacked mark",
    note: "Use this on invoices.",
  },
  {
    href: "/brand/zelda-cavanaugh-invoice-llc.png",
    label: "Stacked mark with LLC",
    note: "Legal name.",
  },
  {
    href: "/brand/zelda-cavanaugh-invoice-wide.png",
    label: "Wide mark",
    note: "A thin header strip.",
  },
  {
    href: "/brand/zelda-cavanaugh-invoice.svg",
    label: "Stacked SVG",
    note: "Vector, if the tool accepts it.",
  },
  {
    href: "/brand/zelda-cavanaugh-invoice-llc.svg",
    label: "LLC SVG",
    note: "Vector, legal name.",
  },
];

export default function BrandPage() {
  return (
    <div className="relative overflow-hidden px-5 pb-8 pt-28 md:px-8 lg:px-10">
      <PlusRule />
      <OutlineNum className="absolute -right-6 top-8 text-[36vw] md:text-[16rem]">
        +
      </OutlineNum>

      <header className="relative mt-8 max-w-xl">
        <PageBreadcrumb
          items={[
            { name: "zelda cavanaugh", href: "/" },
            { name: "brand", href: "/brand" },
          ]}
        />
        <h1 className="mt-6 text-5xl font-extrabold tracking-tight md:text-6xl">
          Brand
        </h1>
        <p className="mt-5 text-sm leading-7 text-fg/55">
          Icon and invoice marks. Right-click or use the download link.
        </p>
      </header>

      <section className="relative mt-16 max-w-2xl space-y-10">
        {files.map((file) => (
          <article key={file.href} className="border-t border-fg/10 pt-8">
            {file.href.endsWith(".png") ? (
              <div className="border border-fg/10 bg-[#fcfcf4] px-8 py-10">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={file.href}
                  alt={file.label}
                  className="mx-auto max-h-40 w-auto"
                />
              </div>
            ) : null}
            <p className="mt-5 text-xl font-semibold">{file.label}</p>
            <p className="mt-1 text-sm text-fg/55">{file.note}</p>
            <p className="mt-4">
              <a
                href={file.href}
                download
                className="text-sm lowercase text-accent"
              >
                + download
              </a>
            </p>
          </article>
        ))}
      </section>
    </div>
  );
}
