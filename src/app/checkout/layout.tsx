import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Checkout",
  description: "Pay for original work on this site.",
  path: "/checkout",
  index: false,
});

export default function CheckoutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
