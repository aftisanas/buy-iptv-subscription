import HeroSection from "@/components/HeroSection";
import StatsBar from "@/components/StatsBar";
import FeaturesSection from "@/components/FeaturesSection";
import PricingSection from "@/components/PricingSection";
import DevicesSection from "@/components/DevicesSection";
import ChannelsSection from "@/components/ChannelsSection";
import FAQSection from "@/components/FAQSection";
import TrustSection from "@/components/TrustSection";
import CTASection from "@/components/CTASection";
import {
  CONTACT_EMAIL,
  FAQ_ITEMS,
  PRICE_VALID_UNTIL,
  PRICING_PLANS,
  SITE_NAME,
  SITE_URL,
} from "@/lib/constants";

export default function HomePage() {
  const organizationId = `${SITE_URL}/#organization`;
  const websiteId = `${SITE_URL}/#website`;
  const webpageId = `${SITE_URL}/#webpage`;
  const productId = `${SITE_URL}/#product`;
  const breadcrumbId = `${SITE_URL}/#breadcrumb`;
  const logoUrl = `${SITE_URL}/buy-iptv.webp`;

  return (
    <>
      <HeroSection />
      <StatsBar />
      <FeaturesSection />
      <PricingSection />
      <DevicesSection />
      <ChannelsSection />
      <FAQSection />
      <TrustSection />
      <CTASection />

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Organization",
                "@id": organizationId,
                name: SITE_NAME,
                alternateName: "Buy IPTV Subscription UK",
                url: SITE_URL,
                logo: {
                  "@type": "ImageObject",
                  url: logoUrl,
                },
                description:
                  "Buy IPTV and stream 37,000 channels in 4K within 60 seconds. UK subscription with five screens, an optional Secure Proxy, a 30-day money-back guarantee and 24/7 support — from £25.99.",
                areaServed: { "@type": "Country", name: "United Kingdom" },
                contactPoint: {
                  "@type": "ContactPoint",
                  contactType: "customer service",
                  availableLanguage: "English",
                  areaServed: "GB",
                  email: CONTACT_EMAIL,
                },
              },
              {
                "@type": "WebSite",
                "@id": websiteId,
                name: SITE_NAME,
                url: SITE_URL,
                inLanguage: "en-GB",
                publisher: {
                  "@id": organizationId,
                },
              },
              {
                "@type": "WebPage",
                "@id": webpageId,
                url: SITE_URL,
                name: "Buy IPTV Subscription 2026 | UK IPTV From £25.99",
                inLanguage: "en-GB",
                isPartOf: {
                  "@id": websiteId,
                },
                about: {
                  "@id": organizationId,
                },
                breadcrumb: {
                  "@id": breadcrumbId,
                },
                description:
                  "Buy IPTV and stream 37,000 channels in 4K within 60 seconds. UK subscription, five screens, an optional Secure Proxy and a 30-day money-back guarantee.",
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
                    name: "Buy IPTV",
                    item: `${SITE_URL}/#features`,
                  },
                ],
              },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "@id": productId,
            name: "Buy IPTV Subscription",
            url: SITE_URL,
            image: [`${SITE_URL}/og-image.jpg`, logoUrl],
            description:
              "Buy IPTV subscription with 60-second activation, 37,000+ live channels, 198,000+ on-demand films and series in 4K UHD, five simultaneous screens and an optional Secure Proxy add-on — from £25.99.",
            brand: { "@type": "Brand", name: SITE_NAME },
            offers: PRICING_PLANS.map((plan) => ({
              "@type": "Offer",
              name: `${plan.name} IPTV Subscription`,
              price: plan.price.toFixed(2),
              priceCurrency: "GBP",
              availability: "https://schema.org/InStock",
              itemCondition: "https://schema.org/NewCondition",
              priceValidUntil: PRICE_VALID_UNTIL,
              url: `${SITE_URL}/#pricing`,
              seller: { "@id": organizationId },
              hasMerchantReturnPolicy: {
                "@type": "MerchantReturnPolicy",
                applicableCountry: "GB",
                returnPolicyCategory:
                  "https://schema.org/MerchantReturnFiniteReturnWindow",
                merchantReturnDays: 30,
                returnMethod: "https://schema.org/ReturnByMail",
                returnFees: "https://schema.org/FreeReturn",
              },
            })),
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: FAQ_ITEMS.map((item) => ({
              "@type": "Question",
              name: item.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: item.answer,
              },
            })),
          }),
        }}
      />
      {/*
        Review / AggregateRating markup intentionally omitted, and the on-page
        testimonials section was deleted on 2026-08-25 — its six entries were
        invented customers. Publishing fake consumer reviews to UK buyers is
        prohibited under the DMCC Act 2024 (in force April 2025, CMA-enforced),
        and marking them up as schema.org/Review would additionally be
        fabricated structured data. Reinstate neither without genuine,
        verifiable, attributable reviews (e.g. a live Trustpilot feed).
      */}
    </>
  );
}
