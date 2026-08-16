import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cart",
  description: "Original canvases in the cart.",
};

export default function CartLayout({ children }: { children: React.ReactNode }) {
  return children;
}
