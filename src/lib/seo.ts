import type { Metadata } from "next";
import { SITE_NAME, SITE_URL } from "@/lib/constants";

/**
 * Metadata builder for the keyword landing pages.
 *
 * Every landing page must be self-canonical and independently indexable —
 * these pages target close keyword variants, so a canonical pointing at a
 * sibling would collapse the whole set into one ranking URL and undo the
 * reason they exist.
 */
export function buildLandingMetadata({
  path,
  title,
  description,
  imageAlt,
}: {
  path: string;
  title: string;
  description: string;
  imageAlt: string;
}): Metadata {
  const url = `${SITE_URL}${path}`;
  const image = `${SITE_URL}/og-image.jpg`;

  return {
    title: { absolute: title },
    description,
    alternates: { canonical: path, languages: { "en-GB": path } },
    openGraph: {
      type: "website",
      locale: "en_GB",
      siteName: SITE_NAME,
      url,
      title,
      description,
      images: [{ url: image, width: 1200, height: 630, alt: imageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
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
}
