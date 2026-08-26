import type { MetadataRoute } from "next";
import { BLOG_POSTS, PILLAR_LINKS, SITE_URL } from "@/lib/constants";

/**
 * Per-route last-meaningful-update dates.
 *
 * Hand-maintained rather than stamped with `new Date()` at build time: a
 * build-time timestamp re-dates every URL on every deploy, so `lastmod`
 * carries no signal and crawlers learn to ignore it. Bump a route's entry
 * only when that route's content actually changes.
 */
const ROUTE_LAST_MODIFIED: Record<string, string> = {
  "/": "2026-08-04",
  "/blog": "2026-08-04",
  "/contact": "2026-04-01",
  "/terms": "2026-04-01",
  "/privacy": "2026-04-01",
  "/dmca": "2026-04-01",
  "/refund": "2026-04-01",
};

/**
 * Landing-page priorities, keyed by the same paths as PILLAR_LINKS and
 * ordered by search volume and commercial intent. Anything absent falls
 * back to 0.7.
 */
const LANDING_PRIORITY: Record<string, number> = {
  "/buy-iptv-subscription": 0.9,
  "/buy-iptv": 0.9,
  "/best-iptv-subscription": 0.8,
  "/cheap-iptv": 0.8,
  "/cheap-iptv-uk": 0.8,
  "/cheap-iptv-subscription": 0.8,
  "/best-iptv-subscription-uk": 0.8,
  "/iptv-buy": 0.8,
};

const LANDING_LAST_MODIFIED = "2026-08-04";

export default function sitemap(): MetadataRoute.Sitemap {
  const fallback = new Date("2026-04-01");

  const parseDate = (value: string | undefined) => {
    if (!value) return fallback;
    const parsed = new Date(value);
    return Number.isNaN(parsed.getTime()) ? fallback : parsed;
  };

  const lastModified = (path: string) => parseDate(ROUTE_LAST_MODIFIED[path]);

  const staticRoutes: MetadataRoute.Sitemap = [
    // No trailing slash — must match the rendered canonical exactly.
    { url: SITE_URL, lastModified: lastModified("/"), changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/blog`, lastModified: lastModified("/blog"), changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/contact`, lastModified: lastModified("/contact"), changeFrequency: "monthly", priority: 0.5 },
    { url: `${SITE_URL}/terms`, lastModified: lastModified("/terms"), changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE_URL}/privacy`, lastModified: lastModified("/privacy"), changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE_URL}/dmca`, lastModified: lastModified("/dmca"), changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE_URL}/refund`, lastModified: lastModified("/refund"), changeFrequency: "yearly", priority: 0.3 },
  ];

  // Driven off PILLAR_LINKS so the sitemap and the footer silo cannot drift
  // apart: a landing page added to one is automatically present in the other.
  const landingRoutes: MetadataRoute.Sitemap = PILLAR_LINKS.map((link) => ({
    url: `${SITE_URL}${link.href}`,
    lastModified: parseDate(LANDING_LAST_MODIFIED),
    changeFrequency: "monthly" as const,
    priority: LANDING_PRIORITY[link.href] ?? 0.7,
  }));

  const blogRoutes: MetadataRoute.Sitemap = BLOG_POSTS.filter((post) =>
    Boolean(post.slug)
  ).map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: parseDate(post.updated ?? post.date),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...landingRoutes, ...blogRoutes];
}
