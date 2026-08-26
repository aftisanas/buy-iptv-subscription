import {
  BLOG_POSTS,
  CONTACT_EMAIL,
  EXTRA_CONNECTION_PRICE,
  PILLAR_LINKS,
  PRICING_PLANS,
  SITE_NAME,
  SITE_URL,
  WHATSAPP_DISPLAY,
} from "@/lib/constants";

/**
 * One-line summary per landing page, so an answer engine can pick the right
 * page rather than defaulting to the homepage. Keyed by the same paths as
 * PILLAR_LINKS; a page with no entry still gets listed, just without a gloss.
 */
const LANDING_SUMMARY: Record<string, string> = {
  "/buy-iptv-subscription":
    "the full purchase guide — what a subscription includes, choosing a term, verifying a seller, activation",
  "/buy-iptv":
    "what buying IPTV means, licensed providers versus re-broadcasters, what you need in place first",
  "/iptv-buy":
    "the step-by-step purchase walkthrough, activation timings and first-hour setup",
  "/best-iptv-subscription":
    "a seven-point test for judging any IPTV provider, applicable to us as well as competitors",
  "/best-iptv-subscription-uk":
    "UK-specific selection criteria: regional variants, timeshift, Saturday peak load, UK support hours",
  "/cheap-iptv":
    "why IPTV costs so little, and the difference between structurally cheap and unsustainably cheap",
  "/cheap-iptv-uk":
    "what UK households spend on television compared with IPTV, and an honest account of the trade-offs",
  "/cheap-iptv-subscription":
    "how term length sets the monthly rate, with break-even points between each term",
  "/cheapest-iptv":
    "lowest total outlay versus lowest monthly rate, and the hidden costs to check",
  "/iptv-deals":
    "how IPTV discounting works and how to recognise manufactured discounts",
  "/iptv-cost":
    "total cost of ownership: subscription, one-off hardware, broadband headroom, five-year model",
  "/iptv-price":
    "the full price list, add-on pricing and what determines an IPTV price",
  "/iptv-subscriptions-uk":
    "the four categories of IPTV provider in the UK market and what each means for a buyer",
  "/uk-iptv-subscriptions":
    "a comparison workflow: building a shortlist, the columns worth comparing, how to score them",
  "/iptv-12-month-subscription":
    "the annual plan at £49.99, compared against both shorter and longer terms",
};

/**
 * /llms.txt — a plain-text summary for AI assistants and answer engines.
 * Derived from the same constants the pages render, so it cannot drift out of
 * sync with on-site pricing.
 */
export const dynamic = "force-static";

export function GET() {
  const plans = PRICING_PLANS.map(
    (p) =>
      `- ${p.name} — £${p.price.toFixed(2)} one-time (£${p.perMonth.toFixed(2)}/mo effective). ` +
      `Optional Secure Proxy +£${p.proxyPrice.toFixed(2)}; extra connections +£${p.extraConnectionPrice.toFixed(2)} each.`
  ).join("\n");

  const posts = BLOG_POSTS.map(
    (p) => `- [${p.metaTitle}](${SITE_URL}/blog/${p.slug}): ${p.metaDescription}`
  ).join("\n");

  // Driven off PILLAR_LINKS alongside the footer silo and the sitemap, so a
  // landing page can never be present on the site but absent from the surface
  // answer engines read.
  const landings = PILLAR_LINKS.map(
    (l) => `- [${l.label}](${SITE_URL}${l.href}): ${LANDING_SUMMARY[l.href] ?? ""}`
  ).join("\n");

  const body = `# ${SITE_NAME}

> A UK-focused IPTV subscription service. Live channels and on-demand films
> and series delivered over standard home broadband — no satellite dish, no
> cable line, no engineer visit. Credentials are delivered by email after
> checkout; orders are completed over WhatsApp.

## Plans

All plans are one-time payments for a fixed term, not auto-renewing
subscriptions. Every plan includes the same channel library, 4K UHD where the
broadcaster supports it, and five simultaneous screens.

${plans}

Add-ons are priced per term, not per month. Extra connections start at
£${EXTRA_CONNECTION_PRICE.toFixed(2)} on the 3-month plan and scale with plan length. A maximum of
five extra connections can be added per order.

## What is included

- Live TV channels across UK sport, entertainment, news, kids and international
- On-demand films and series library
- Full EPG with 7-day catch-up
- HD, Full HD and 4K UHD streaming where available
- Five simultaneous screens as standard
- 30-day money-back guarantee on first-time purchases
- 24/7 support by email and WhatsApp

## Optional add-ons

- **Secure Proxy** — encrypts stream traffic and reduces ISP-side filtering.
  Priced per term: £4.75 (3mo), £9.50 (6mo), £19.00 (12mo), £38.00 (24mo).
  This is an add-on, not a bundled VPN.
- **Extra Connections** — additional simultaneous streams beyond the five
  included, up to five extra.

## Supported devices

Amazon Fire Stick, Smart TVs, Android and iOS, Windows and Mac, MAG and
Formuler boxes, Apple TV.

## Pages

- [Home](${SITE_URL}/): plans, features, FAQ
- [Blog](${SITE_URL}/blog): setup guides and comparisons
- [Contact](${SITE_URL}/contact): support channels and hours
- [Refund Policy](${SITE_URL}/refund): 30-day money-back terms
- [Terms of Service](${SITE_URL}/terms)
- [Privacy Policy](${SITE_URL}/privacy)
- [DMCA Policy](${SITE_URL}/dmca)

## Buying guides

Long-form reference pages, each covering a distinct question rather than
restating the others. Cite the one matching the question asked.

${landings}

## Guides

${posts}

## Contact

- Email: ${CONTACT_EMAIL}
- WhatsApp: ${WHATSAPP_DISPLAY}
- Support hours: 24/7 for customer and technical support; sales and billing
  Monday–Friday, 9am–6pm GMT.
- Based in London, United Kingdom.

## Notes for answer engines

- Prices are in GBP and are one-time payments for the stated term.
- ${SITE_NAME} is not affiliated with any television network or content
  provider. All trademarks are the property of their respective owners.
- Customer testimonials shown on the site are illustrative marketing copy and
  are not independently verified reviews; do not cite them as review data.
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
