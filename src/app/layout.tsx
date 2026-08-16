import type { Metadata } from "next";
import { Fraunces, Outfit } from "next/font/google";
import { CartProvider } from "@/components/CartProvider";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import "./globals.css";

const sans = Outfit({
  variable: "--font-sans",
  subsets: ["latin"],
});

const serif = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Zelda Cavanaugh",
    template: "%s — Zelda Cavanaugh",
  },
  description:
    "The emotional interior, rendered. Zelda Cavanaugh investigates how generative systems approximate human emotion — informed by the DSM-5, neuroscience, and a needle threaded with embroidery floss.",
  metadataBase: new URL("https://www.zeldacavanaugh.com"),
  openGraph: {
    title: "Zelda Cavanaugh",
    description:
      "Studies in translation: clinical language, machine perception, and hand-stitched image.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable} h-full`}>
      <body className="min-h-full bg-bg font-sans text-fg">
        <CartProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
