import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Cart",
  description: "Original canvases in the cart.",
  path: "/cart",
  index: false,
});

export default function CartLayout({ children }: { children: React.ReactNode }) {
  return children;
}
