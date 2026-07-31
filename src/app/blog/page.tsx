import type { Metadata } from "next";
import BlogContent from "./BlogContent";
import { BLOG_POSTS, SITE_NAME, SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: { absolute: "IPTV UK Guides, Setup Tips & Reviews | Blog" },
  description:
    "Expert guides on IPTV setup, streaming optimisation, device compatibility and choosing a provider in the UK.",
  alternates: { canonical: "/blog" },
};

const blogLd = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "@id": `${SITE_URL}/blog#blog`,
  name: `${SITE_NAME} Blog`,
  description:
    "Expert guides on IPTV setup, streaming optimisation, device compatibility and choosing a provider in the UK.",
  url: `${SITE_URL}/blog`,
  inLanguage: "en-GB",
  publisher: { "@id": `${SITE_URL}/#organization` },
  isPartOf: { "@id": `${SITE_URL}/#website` },
  blogPost: BLOG_POSTS.map((post) => ({
    "@type": "BlogPosting",
    headline: post.title,
    description: post.metaDescription,
    datePublished: post.date,
    url: `${SITE_URL}/blog/${post.slug}`,
  })),
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
  ],
};

export default function BlogPage() {
  return (
    <>
      <BlogContent />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
    </>
  );
}
