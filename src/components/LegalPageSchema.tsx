import { SITE_URL } from "@/lib/constants";

type LegalPageSchemaProps = {
  /** Route path without a leading slash, e.g. "refund". */
  slug: string;
  /** Breadcrumb label and WebPage name, e.g. "Refund Policy". */
  name: string;
  description: string;
  /** ISO date the policy was last revised. */
  dateModified: string;
};

/**
 * Emits WebPage + BreadcrumbList JSON-LD for the static legal pages, which
 * otherwise shipped with no structured data at all. Both nodes reference the
 * Organization/WebSite entities declared on the homepage so the site resolves
 * to a single entity graph.
 */
export default function LegalPageSchema({
  slug,
  name,
  description,
  dateModified,
}: LegalPageSchemaProps) {
  const url = `${SITE_URL}/${slug}`;

  const webPageLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name,
    description,
    inLanguage: "en-GB",
    dateModified,
    isPartOf: { "@id": `${SITE_URL}/#website` },
    about: { "@id": `${SITE_URL}/#organization` },
    publisher: { "@id": `${SITE_URL}/#organization` },
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name, item: url },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
    </>
  );
}
