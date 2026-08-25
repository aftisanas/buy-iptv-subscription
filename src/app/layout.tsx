import type { Metadata, Viewport } from "next";
import { Newsreader, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HashScrollHandler from "@/components/HashScrollHandler";
import { SITE_URL } from "@/lib/constants";

// Display carries the H1, which is the LCP element, so it preloads.
// Newsreader (serif) for narrative headings, Plus Jakarta Sans for body and
// UI — the inverse of the first pass, which put a serif in the body and read
// as an essay rather than a subscription page.
const newsreader = Newsreader({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700"],
  preload: true,
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Buy IPTV UK 2026 | Buy IPTV Subscription From £25.99",
    template: "%s | Buy IPTV UK",
  },
  description:
    "Buy IPTV UK the fast way — automated checkout, Xtream codes emailed in 60 seconds. 37,000 UK channels, 4K UHD, 5 screens. From £25.99.",
  keywords: [
    "buy iptv uk",
    "buy iptv",
    "buy iptv subscription uk",
    "buy iptv subscription",
    "iptv uk",
    "uk iptv subscription",
    "iptv subscription uk",
    "purchase iptv uk",
    "iptv for sale uk",
    "buy iptv online uk",
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
    title: "Buy IPTV UK — Automated Checkout, Xtream Codes In 60 Seconds",
    description:
      "Buy IPTV UK with 37,000 live channels, 198,000 films and series, native 4K UHD and five simultaneous screens. Pay at the automated checkout and your Xtream codes are emailed the moment payment clears. From £25.99.",
    images: [
      {
        // 1.91:1 — the ratio summary_large_image and Facebook/LinkedIn expect.
        // The square logo letterboxed badly at 1024x1024.
        url: `${SITE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Buy IPTV UK — 37,000+ channels in 4K UHD with UK support, from £25.99",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Buy IPTV UK — Automated Checkout, Xtream Codes In 60 Seconds",
    description:
      "Buy IPTV UK with 37,000 live channels, 198,000 films and series, native 4K UHD and five simultaneous screens. Pay at the automated checkout and your Xtream codes are emailed the moment payment clears. From £25.99.",
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
  themeColor: "#0b0a1a",
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
      className={`${newsreader.variable} ${jakarta.variable}`}
    >
      <body className="min-h-screen bg-paper text-ink">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-100 focus:bg-gold focus:px-4 focus:py-2 focus:font-display focus:text-sm focus:text-white"
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
