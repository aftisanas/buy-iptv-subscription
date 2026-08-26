import type { Metadata } from "next";
import Link from "next/link";
import { Check, X } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import { WhatsAppCta } from "@/components/ui/WhatsAppCta";
import {
  CONTACT_EMAIL,
  SITE_NAME,
  SITE_URL,
  SPECIFICATION,
  SUPPORT_HOURS,
  WHATSAPP_DISPLAY,
  WHATSAPP_NUMBER,
} from "@/lib/constants";

/**
 * /about — the entity page.
 *
 * TRADER IDENTITY: this page carries no company name, registration number or
 * geographic address, because there is none to publish. That leaves a real
 * gap. The Consumer Contracts Regulations 2013 require a trader's identity and
 * a geographic address to be given to a UK consumer before a distance contract
 * is concluded, and it is the strongest trust signal available to a site with
 * no reviews, no licence and no third-party marks. If a trading name and
 * address ever become available, add them here, in the footer, in /terms, and
 * as `legalName` + `address` on the Organization node.
 *
 * What the page does instead is state limits plainly. On a site that cannot
 * show what it sells, saying what it does NOT do is the one credibility
 * mechanism a scam would never copy.
 *
 * TODO (owner): product screenshots and a redacted WhatsApp order thread are
 * to be added after the phase work completes — they belong in the reserved
 * slot below "How buying IPTV UK works here".
 */

const TITLE = "About Buy IPTV UK — How This Service Works";
const DESCRIPTION =
  "What Buy IPTV UK is, how ordering and Xtream code delivery work, what is included, and what this service deliberately does not do.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: "/about" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/about`,
    type: "website",
    locale: "en_GB",
    siteName: SITE_NAME,
    // Declared explicitly: Next shallow-merges metadata, so a page that
    // declares its own openGraph does NOT inherit the parent's image.
    images: [
      {
        url: `${SITE_URL}/og-buy-iptv-uk.jpg`,
        width: 1200,
        height: 630,
        alt: "Buy IPTV UK — 37,000+ channels in 4K UHD with UK support",
      },
    ],
  },
};

const WE_DO = [
  "Sell fixed-term IPTV subscriptions with no auto-renewal",
  "Deliver Xtream codes by email automatically once payment clears",
  "Support any M3U or Xtream-compatible player on hardware you already own",
  "Answer setup and billing questions on WhatsApp and email",
  "Honour a 30-day money-back guarantee on first-time purchases",
];

const WE_DO_NOT = [
  "Operate a phone line, live chat or callback service",
  "Publish customer reviews, star ratings or subscriber counts",
  "Take card details on this site — payment is processed off-site",
  "Sell hardware, set-top boxes or preloaded devices",
  "Guarantee that a specific channel will be carried indefinitely",
];

const aboutLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": `${SITE_URL}/about#aboutpage`,
  url: `${SITE_URL}/about`,
  name: TITLE,
  description: DESCRIPTION,
  inLanguage: "en-GB",
  isPartOf: { "@id": `${SITE_URL}/#website` },
  about: { "@id": `${SITE_URL}/#organization` },
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "About", item: `${SITE_URL}/about` },
  ],
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title={
          <>
            About <span className="gold-text">Buy IPTV UK</span>
          </>
        }
        standfirst="What this service is, how it delivers, and what it deliberately does not do. Everything below is checkable against the plan table or a published policy."
      />

      <section className="py-14 lg:py-20">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <div className="measure">
            <h2 className="font-display text-2xl">What Buy IPTV UK actually is</h2>
            <p className="mt-4 text-ink-muted">
              Buy IPTV UK sells fixed-term IPTV subscriptions to viewers in the
              United Kingdom. You pay once for a term — three, six, twelve or
              twenty-four months — and receive Xtream credentials that work in
              any compatible player on hardware you already own. There is no
              contract, no auto-renewal and no equipment to buy.
            </p>
            <p className="mt-4 text-ink-muted">
              We are a reseller, not a broadcaster. We do not produce, own or
              licence the content carried on the service, and we make no claim
              to the trademarks of any television network. That is why this site
              shows no broadcaster logos and no programme artwork.
            </p>

            <h2 className="mt-12 font-display text-2xl">
              How buying IPTV UK works here
            </h2>
            <p className="mt-4 text-ink-muted">
              Choose a plan, add the Secure Proxy or extra connections if you
              want them, and pay by card at the checkout. Payment is processed
              off-site; no card details are entered on this domain. Once payment
              clears, your Xtream username, password and server URL are
              generated and emailed automatically — typically inside a minute,
              at any hour. If the card checkout is unavailable the order falls
              back to WhatsApp, and we send payment details in the chat.
            </p>
            <p className="mt-4 text-ink-muted">
              The full breakdown is in the{" "}
              <Link
                href="/#ordering"
                className="text-gold underline-offset-2 hover:underline"
              >
                how it works
              </Link>{" "}
              section, and every plan is listed on the{" "}
              <Link
                href="/#plans"
                className="text-gold underline-offset-2 hover:underline"
              >
                pricing grid
              </Link>
              .
            </p>
          </div>

          {/* Reserved: product screenshots and a redacted WhatsApp order
              thread, to be supplied by the owner. */}

          <h2 className="mt-14 font-display text-2xl">
            What we do, and what we do not
          </h2>
          <p className="measure mt-4 text-ink-muted">
            A service with no reviews and no third-party marks has one honest
            way to be credible: say what it will not do as clearly as what it
            will.
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="rounded-xl bg-paper-sunk p-6 ring-1 ring-ink/10">
              <h3 className="font-display text-lg">We do</h3>
              <ul className="mt-4 space-y-3">
                {WE_DO.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-sm text-ink-muted"
                  >
                    <Check
                      className="mt-0.5 h-4 w-4 shrink-0 text-gold"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl bg-paper-sunk p-6 ring-1 ring-ink/10">
              <h3 className="font-display text-lg">We do not</h3>
              <ul className="mt-4 space-y-3">
                {WE_DO_NOT.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-sm text-ink-muted"
                  >
                    <X
                      className="mt-0.5 h-4 w-4 shrink-0 text-flame"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <h2 className="mt-14 font-display text-2xl">The service at a glance</h2>
          <table className="mt-6 w-full text-left">
            <caption className="sr-only">Buy IPTV UK specification</caption>
            <tbody>
              {SPECIFICATION.map((row) => (
                <tr key={row.label} className="border-t border-rule/70">
                  <th
                    scope="row"
                    className="w-[40%] py-3 pr-4 align-top text-sm font-normal text-ink-muted"
                  >
                    {row.label}
                  </th>
                  <td className="py-3 pr-4 align-top">
                    <span className="tabular text-sm font-medium text-ink">
                      {row.value}
                    </span>
                  </td>
                  <td className="hidden py-3 align-top text-sm text-ink-muted sm:table-cell">
                    {row.note}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <h2 className="mt-14 font-display text-2xl">Reaching a human</h2>
          <p className="measure mt-4 text-ink-muted">
            WhatsApp is the fastest route and the one most buyers use. Email
            suits anything needing a record — billing, refunds, or a dispute.
          </p>
          <ul className="mt-5 space-y-2">
            <li>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold underline-offset-2 hover:underline"
              >
                {WHATSAPP_DISPLAY}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="break-all text-gold underline-offset-2 hover:underline"
              >
                {CONTACT_EMAIL}
              </a>
            </li>
          </ul>
          <p className="eyebrow mt-3">{SUPPORT_HOURS}</p>

          <div className="mt-12 rounded-2xl bg-paper-sunk p-8 text-center ring-1 ring-ink/10">
            <h2 className="font-display text-xl">Ready to buy IPTV UK?</h2>
            <p className="mx-auto mt-3 max-w-md text-ink-muted">
              Plans start at £25.99 with automated Xtream code delivery and a
              30-day money-back guarantee.
            </p>
            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/#plans"
                className="w-full rounded-lg bg-gradient-to-r from-gold-bright to-gold px-8 py-3.5 text-center text-sm font-bold text-night transition-all hover:brightness-110 sm:w-auto"
              >
                See the plans
              </Link>
              <WhatsAppCta tone="outline" className="w-full sm:w-auto" />
            </div>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
    </>
  );
}
