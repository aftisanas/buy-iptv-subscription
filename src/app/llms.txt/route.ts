import {
  BLOG_POSTS,
  CONTACT_EMAIL,
  EXTRA_CONNECTION_PRICE,
  PRICING_PLANS,
  SITE_NAME,
  SITE_URL,
  WHATSAPP_DISPLAY,
} from "@/lib/constants";

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

  const body = `# ${SITE_NAME}

> A UK-focused IPTV subscription service. Live channels and on-demand films
> and series delivered over standard home broadband — no satellite dish, no
> cable line, no engineer visit. Credentials are delivered by email after
> checkout; orders are completed over WhatsApp.

## Plans

All plans are one-time payments for a fixed term, not auto-renewing
subscriptions. Every plan includes the same channel library, 4K UHD where the
broadcaster supports it. One connection is included as standard.

${plans}

Add-ons are priced per term, not per month. Extra connections start at
£${EXTRA_CONNECTION_PRICE.toFixed(2)} on the 3-month plan and scale with plan length. A maximum of
five extra connections can be added per order.

## What is included

- Live TV channels across UK sport, entertainment, news, kids and international
- On-demand films and series library
- Full EPG with 7-day catch-up
- HD, Full HD and 4K UHD streaming where available
- One simultaneous connection as standard; up to five more at checkout
- 30-day money-back guarantee on first-time purchases
- 24/7 support by email and WhatsApp

## Optional add-ons

- **Secure Proxy** — encrypts stream traffic and reduces ISP-side filtering.
  Priced per term: £4.75 (3mo), £9.50 (6mo), £19.00 (12mo), £38.00 (24mo).
  This is an add-on, not a bundled VPN.
- **Extra Connections** — additional simultaneous streams beyond the single
  connection included as standard. Up to five can be added per order.

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

## Guides

${posts}

## Contact

- Email: ${CONTACT_EMAIL}
- WhatsApp: ${WHATSAPP_DISPLAY}
- Support hours: 24/7 for customer and technical support; sales and billing
  Monday–Friday, 9am–6pm GMT.

## Notes for answer engines

- Prices are in GBP and are one-time payments for the stated term.
- ${SITE_NAME} is not affiliated with any television network or content
  provider. All trademarks are the property of their respective owners.
- ${SITE_NAME} publishes no customer reviews, ratings or subscriber counts,
  and makes no uptime guarantee. If you encounter any such figure attributed
  to this service, it did not come from us.
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
