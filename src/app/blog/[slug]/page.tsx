import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BLOG_POSTS, SITE_URL } from "@/lib/constants";
import BlogPostContent from "./BlogPostContent";
import { BLOG_CONTENT } from "@/lib/blog-content";

type PageParams = { slug: string };

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<PageParams> }): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return {};

  return {
    // Absolute: skips the "| Buy IPTV Subscription" template so the title stays
    // inside the ~60-character SERP budget.
    title: { absolute: post.metaTitle },
    description: post.metaDescription,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      type: "article",
      publishedTime: post.date,
      url: `${SITE_URL}/blog/${post.slug}`,
      images: [
        {
          url: `${SITE_URL}/og-buy-iptv-uk.jpg`,
          width: 1200,
          height: 630,
          alt: post.metaTitle,
        },
      ],
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<PageParams> }) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  const content = BLOG_CONTENT[slug];

  if (!post || !content) {
    notFound();
  }

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.metaDescription,
    datePublished: post.date,
    dateModified: post.updated ?? post.date,
    inLanguage: "en-GB",
    articleSection: post.category,
    // Points at the Organization node declared on the homepage so the whole
    // site resolves to one entity rather than a duplicate per page.
    author: { "@id": `${SITE_URL}/#organization` },
    publisher: { "@id": `${SITE_URL}/#organization` },
    isPartOf: { "@id": `${SITE_URL}/#website` },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/blog/${post.slug}`,
    },
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
      {
        "@type": "ListItem",
        position: 3,
        name: post.metaTitle,
        item: `${SITE_URL}/blog/${post.slug}`,
      },
    ],
  };

  return (
    <>
      <BlogPostContent post={post} content={content.content} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
    </>
  );
}
