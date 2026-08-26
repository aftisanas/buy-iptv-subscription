import type { ReactNode } from "react";
import Link from "next/link";
import { ChevronRight, ShieldCheck } from "lucide-react";
import SectionLink from "@/components/SectionLink";
import MotionReveal from "@/components/MotionReveal";
import { PRICING_PLANS, SITE_NAME, SITE_URL } from "@/lib/constants";

/* ------------------------------------------------------------------ *
 *  Shared layout for every keyword landing page.
 *
 *  Each page supplies its own copy and keeps its own file; only the
 *  chrome lives here. That split matters: the pages must read as
 *  genuinely separate documents to a quality reviewer, so nothing in
 *  this component may generate body copy from the keyword. It renders
 *  what the page hands it and nothing else.
 * ------------------------------------------------------------------ */

/** Shared inline-link styling so body copy looks identical page to page. */
export const linkCls =
  "text-violet-700 underline-offset-2 hover:underline hover:text-violet-800 font-medium";

export interface SeoSection {
  id: string;
  h2: string;
  body: ReactNode;
}

export interface SeoFaq {
  q: string;
  a: string;
}

export interface SeoLandingProps {
  /** Path with no trailing slash, e.g. "/cheap-iptv-uk". */
  pagePath: string;
  /** Breadcrumb leaf label. */
  breadcrumbName: string;
  /** Small pill above the H1. */
  badge: string;
  /** H1 renders as `${h1Lead} <gradient>${h1Accent}</gradient>`. */
  h1Lead: string;
  h1Accent: string;
  intro: ReactNode;
  sections: SeoSection[];
  /** Insert the mid-page CTA after this many sections. */
  midCtaAfter?: number;
  midCtaText: string;
  midCtaLabel: string;
  faqs: readonly SeoFaq[];
  faqHeading: string;
  closingLead: string;
  closingAccent: string;
  closingBody: ReactNode;
  ctaLabel: string;
  secondaryHref: string;
  secondaryLabel: string;
  /** schema.org Service.serviceType for this page. */
  serviceType: string;
  pageTitle: string;
  pageDescription: string;
}

export default function SeoLanding({
  pagePath,
  breadcrumbName,
  badge,
  h1Lead,
  h1Accent,
  intro,
  sections,
  midCtaAfter = 3,
  midCtaText,
  midCtaLabel,
  faqs,
  faqHeading,
  closingLead,
  closingAccent,
  closingBody,
  ctaLabel,
  secondaryHref,
  secondaryLabel,
  serviceType,
  pageTitle,
  pageDescription,
}: SeoLandingProps) {
  const pageUrl = `${SITE_URL}${pagePath}`;
  const webpageId = `${pageUrl}#webpage`;
  const serviceId = `${pageUrl}#service`;
  const breadcrumbId = `${pageUrl}#breadcrumb`;
  const organizationId = `${SITE_URL}/#organization`;
  const websiteId = `${SITE_URL}/#website`;

  const lowPrice = Math.min(...PRICING_PLANS.map((p) => p.price)).toFixed(2);
  const highPrice = Math.max(...PRICING_PLANS.map((p) => p.price)).toFixed(2);

  return (
    <>
      <section
        id="page-header"
        className="relative pt-28 sm:pt-32 pb-10 lg:pt-36 lg:pb-14"
      >
        <div className="absolute inset-0 section-gradient-1" />
        <div className="absolute inset-0 mesh-gradient" />

        <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <nav
            aria-label="Breadcrumb"
            className="text-xs sm:text-sm text-muted mb-5"
          >
            <ol className="flex flex-wrap items-center gap-1.5">
              <li>
                <Link href="/" className="hover:text-violet-700">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-foreground font-medium" aria-current="page">
                {breadcrumbName}
              </li>
            </ol>
          </nav>

          <span className="inline-flex items-center gap-2 rounded-full bg-violet-50 border border-violet-200 px-4 py-1.5 text-xs font-semibold text-violet-700 mb-4">
            {badge}
          </span>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-[1.15] mb-5">
            {h1Lead} <span className="gradient-text">{h1Accent}</span>
          </h1>

          <div className="text-base lg:text-lg text-muted leading-relaxed space-y-4">
            {intro}
          </div>
        </div>
      </section>

      <div className="relative bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-6 lg:py-10">
          {sections.map((s, i) => (
            <div key={s.id}>
              <MotionReveal>
                <section
                  id={s.id}
                  aria-labelledby={`${s.id}-heading`}
                  className="py-8 lg:py-10 border-b border-slate-200/70 last:border-b-0"
                >
                  <h2
                    id={`${s.id}-heading`}
                    className="text-2xl sm:text-3xl lg:text-[2rem] font-bold text-foreground mb-4 leading-tight"
                  >
                    {s.h2}
                  </h2>
                  <div className="space-y-4 text-base lg:text-lg text-muted leading-relaxed">
                    {s.body}
                  </div>
                </section>
              </MotionReveal>

              {i + 1 === midCtaAfter && (
                <MotionReveal>
                  <div className="my-6 rounded-2xl border border-violet-200 bg-gradient-to-br from-violet-50 via-white to-cyan-50 p-6 lg:p-8 text-center">
                    <p className="text-sm sm:text-base font-medium text-muted mb-4">
                      {midCtaText}
                    </p>
                    <SectionLink
                      href="/#pricing"
                      className="group inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-violet-600 via-purple-600 to-cyan-500 px-6 py-3 text-sm sm:text-base font-semibold text-white shadow-lg shadow-purple-900/20 transition-all hover:shadow-2xl hover:shadow-purple-500/30 active:scale-[0.98]"
                    >
                      {midCtaLabel}
                      <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </SectionLink>
                  </div>
                </MotionReveal>
              )}
            </div>
          ))}
        </div>
      </div>

      <section
        id="faq"
        aria-labelledby="faq-heading"
        className="relative py-14 lg:py-20"
      >
        <div className="absolute inset-0 section-gradient-1" />

        <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2
              id="faq-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4"
            >
              {faqHeading} <span className="gradient-text">FAQs</span>
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((item, i) => (
              <MotionReveal
                key={item.q}
                className="rounded-2xl border border-slate-200/70 bg-white p-5 lg:p-6 shadow-sm"
              >
                <details className="group">
                  <summary className="flex items-start justify-between gap-4 cursor-pointer list-none">
                    <h3 className="text-base lg:text-lg font-semibold text-foreground pr-2">
                      {item.q}
                    </h3>
                    <span
                      aria-hidden="true"
                      className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-violet-100 text-violet-700 transition-transform group-open:rotate-45 text-lg leading-none"
                    >
                      +
                    </span>
                  </summary>
                  <p
                    id={`faq-panel-${i}`}
                    className="mt-3 text-sm lg:text-base text-muted leading-relaxed"
                  >
                    {item.a}
                  </p>
                </details>
              </MotionReveal>
            ))}
          </div>
        </div>
      </section>

      <section
        id="closing"
        aria-labelledby="closing-heading"
        className="relative py-14 lg:py-20"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-violet-50 via-white to-cyan-50" />

        <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <MotionReveal>
            <h2
              id="closing-heading"
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-5 leading-tight"
            >
              {closingLead} <span className="gradient-text">{closingAccent}</span>
            </h2>
            <div className="mx-auto max-w-2xl text-base lg:text-lg text-muted leading-relaxed mb-8">
              {closingBody}
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <SectionLink
                href="/#pricing"
                className="group inline-flex items-center gap-2.5 rounded-2xl bg-gradient-to-r from-violet-600 via-purple-600 to-cyan-500 px-7 py-3.5 text-sm sm:text-base font-semibold text-white shadow-lg shadow-purple-900/20 transition-all hover:shadow-2xl hover:shadow-purple-500/30 active:scale-[0.98]"
              >
                <ShieldCheck className="h-5 w-5" />
                {ctaLabel}
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </SectionLink>
              <Link
                href={secondaryHref}
                className="text-sm font-semibold text-violet-700 underline-offset-4 hover:underline"
              >
                {secondaryLabel} &rarr;
              </Link>
            </div>
          </MotionReveal>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "WebPage",
                "@id": webpageId,
                url: pageUrl,
                name: pageTitle,
                description: pageDescription,
                inLanguage: "en-GB",
                isPartOf: { "@id": websiteId },
                about: { "@id": organizationId },
                breadcrumb: { "@id": breadcrumbId },
                primaryImageOfPage: {
                  "@type": "ImageObject",
                  url: `${SITE_URL}/og-image.jpg`,
                },
              },
              {
                "@type": "BreadcrumbList",
                "@id": breadcrumbId,
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    name: "Home",
                    item: SITE_URL,
                  },
                  {
                    "@type": "ListItem",
                    position: 2,
                    name: breadcrumbName,
                    item: pageUrl,
                  },
                ],
              },
              {
                "@type": "Service",
                "@id": serviceId,
                serviceType,
                name: `${SITE_NAME} — ${breadcrumbName}`,
                url: pageUrl,
                description: pageDescription,
                provider: { "@id": organizationId },
                areaServed: { "@type": "Country", name: "United Kingdom" },
                audience: {
                  "@type": "Audience",
                  geographicArea: {
                    "@type": "Country",
                    name: "United Kingdom",
                  },
                },
                offers: {
                  "@type": "AggregateOffer",
                  priceCurrency: "GBP",
                  lowPrice,
                  highPrice,
                  offerCount: String(PRICING_PLANS.length),
                  availability: "https://schema.org/InStock",
                  url: `${SITE_URL}/#pricing`,
                },
              },
              {
                "@type": "FAQPage",
                mainEntity: faqs.map((f) => ({
                  "@type": "Question",
                  name: f.q,
                  acceptedAnswer: { "@type": "Answer", text: f.a },
                })),
              },
            ],
          }),
        }}
      />
    </>
  );
}
