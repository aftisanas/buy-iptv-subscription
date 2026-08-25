import type { Metadata, Viewport } from "next";
import { Archivo, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HashScrollHandler from "@/components/HashScrollHandler";
import { SITE_URL } from "@/lib/constants";

// Display carries the H1, which is the LCP element — so it preloads and the
// body serif does not. Weights are pinned rather than variable to keep the
// mobile font payload inside the performance budget (DESIGN-SPEC §6).
const archivo = Archivo({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
  weight: ["700", "800"],
  preload: true,
});

const sourceSerif = Source_Serif_4({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600"],
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Buy IPTV Subscription 2026 | UK IPTV From £25.99",
    template: "%s | Buy IPTV Subscription",
  },
  description:
    "Buy an IPTV subscription and stream 37,000 channels in 4K within 60 seconds. Five screens, optional Secure Proxy, 30-day guarantee. From £25.99.",
  keywords: [
    "buy iptv",
    "buy iptv subscription",
    "buy iptv uk",
    "iptv subscription",
    "iptv uk",
    "best iptv uk",
    "iptv providers",
    "iptv service",
    "iptv reviews",
    "british iptv",
    "strong iptv",
    "fast iptv",
    "premium iptv",
    "cheap iptv subscription",
  ],
  authors: [{ name: "Buy IPTV Subscription" }],
  creator: "Buy IPTV Subscription",
  applicationName: "Buy IPTV Subscription",
  alternates: {
    canonical: "/",
    languages: {
      "en-GB": "/",
    },
  },
  manifest: "/favicon_io/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon_io/favicon.ico", sizes: "any" },
      { url: "/favicon_io/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon_io/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon_io/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/favicon_io/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: "/favicon_io/favicon.ico",
    apple: [
      { url: "/favicon_io/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "Buy IPTV Subscription",
    url: SITE_URL,
    title: "Buy IPTV Subscription UK 2026 — Instant Checkout, Instant Streaming",
    description:
      "Buy an IPTV subscription in a couple of taps: 37,000 channels, 198,000 films and series, native 4K UHD and five simultaneous screens. Credentials emailed automatically the moment payment clears. From £25.99.",
    images: [
      {
        // 1.91:1 — the ratio summary_large_image and Facebook/LinkedIn expect.
        // The square logo letterboxed badly at 1024x1024.
        url: `${SITE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Buy IPTV Subscription — 37,000+ channels in 4K UHD with UK support, from £25.99",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Buy IPTV Subscription UK 2026 — Instant Checkout, Instant Streaming",
    description:
      "Buy an IPTV subscription in a couple of taps: 37,000 channels, 198,000 films and series, native 4K UHD and five simultaneous screens. Credentials emailed automatically the moment payment clears. From £25.99.",
    images: [`${SITE_URL}/og-image.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#14110d",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-GB"
      className={`${archivo.variable} ${sourceSerif.variable}`}
    >
      <body className="min-h-screen bg-paper text-ink">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-100 focus:bg-orange focus:px-4 focus:py-2 focus:font-display focus:text-sm focus:text-white"
        >
          Skip to main content
        </a>
        <HashScrollHandler />
        <Navbar />
        <main id="main" className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
