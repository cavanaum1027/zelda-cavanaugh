import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Fraunces, Outfit } from "next/font/google";
import { CartProvider } from "@/components/CartProvider";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { artistJsonLd, SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/seo";
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
    default: SITE_NAME,
    template: `%s — ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  metadataBase: new URL(SITE_URL),
  icons: {
    icon: [{ url: "/icon", type: "image/png" }],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  verification: {
    google: "8tXrKvi2STPl0Yhgb4zz18m8K9b49ihrWlRusDPlPwE",
  },
  openGraph: {
    siteName: SITE_NAME,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable} h-full`}>
      <head>
        <meta
          name="google-site-verification"
          content="8tXrKvi2STPl0Yhgb4zz18m8K9b49ihrWlRusDPlPwE"
        />
      </head>
      <body className="min-h-full bg-bg font-sans text-fg">
        <JsonLd data={artistJsonLd()} />
        <CartProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </CartProvider>
      </body>
      <GoogleAnalytics gaId="G-8DYT78WKVF" />
    </html>
  );
}
