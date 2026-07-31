import type { Metadata } from "next";
import ContactContent from "./ContactContent";
import { CONTACT_EMAIL, SITE_NAME, SITE_URL, WHATSAPP_DISPLAY } from "@/lib/constants";

export const metadata: Metadata = {
  title: { absolute: "Contact Us — 24/7 UK IPTV Support" },
  description:
    "Contact the Buy IPTV Subscription support team. 24/7 help by email and WhatsApp for setup, billing and pre-purchase questions.",
  alternates: { canonical: "/contact" },
};

const contactLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": `${SITE_URL}/contact#contactpage`,
  url: `${SITE_URL}/contact`,
  name: `Contact ${SITE_NAME}`,
  inLanguage: "en-GB",
  isPartOf: { "@id": `${SITE_URL}/#website` },
  about: { "@id": `${SITE_URL}/#organization` },
  mainEntity: {
    "@id": `${SITE_URL}/#organization`,
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: CONTACT_EMAIL,
        telephone: WHATSAPP_DISPLAY,
        areaServed: "GB",
        availableLanguage: "English",
        hoursAvailable: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
          opens: "00:00",
          closes: "23:59",
        },
      },
      {
        "@type": "ContactPoint",
        contactType: "sales",
        email: CONTACT_EMAIL,
        areaServed: "GB",
        availableLanguage: "English",
      },
    ],
  },
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Contact", item: `${SITE_URL}/contact` },
  ],
};

export default function ContactPage() {
  return (
    <>
      <ContactContent />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
    </>
  );
}
