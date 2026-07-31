import type { Metadata, Viewport } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HashScrollHandler from "@/components/HashScrollHandler";
import { SITE_URL } from "@/lib/constants";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const outfit = Outfit({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
  weight: ["600", "700"],
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Buy IPTV Subscription 2026 | Trusted UK IPTV From £12.99",
    template: "%s | Buy IPTV Subscription",
  },
  description:
    "Buy an IPTV subscription and stream 37,000 channels in 4K within 60 seconds. Five screens, optional Secure Proxy, 30-day guarantee. From £12.99.",
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
      "Ready to buy an IPTV subscription? 50,000 UK subscribers already did. 37,000 channels, premium 4K, optional Secure Proxy. Pay now, stream in 60 seconds. The shortcut to better television.",
    images: [
      {
        // 1.91:1 — the ratio summary_large_image and Facebook/LinkedIn expect.
        // The square logo letterboxed badly at 1024x1024.
        url: `${SITE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Buy IPTV Subscription — 37,000+ channels in 4K UHD with UK support, from £12.99",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Buy IPTV Subscription UK 2026 — Instant Checkout, Instant Streaming",
    description:
      "Ready to buy an IPTV subscription? 50,000 UK subscribers already did. 37,000 channels, premium 4K, optional Secure Proxy. Pay now, stream in 60 seconds. The shortcut to better television.",
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
  themeColor: "#0a0a0a",
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
      className={`${inter.variable} ${outfit.variable} antialiased`}
    >
      <body className="min-h-screen bg-background text-foreground font-(--font-sans)">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-100 focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-foreground focus:shadow-lg focus:outline-2 focus:outline-violet-600"
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
