import { Clock, ArrowLeft, Tag } from "lucide-react";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import RelatedGuides from "@/components/RelatedGuides";

interface BlogPostContentProps {
  post: {
    slug: string;
    title: string;
    excerpt: string;
    date: string;
    readTime: string;
    category: string;
  };
  content: string[];
}

/**
 * Renders inline `**bold**` and `[text](url)` inside a line of body copy.
 * External links open in a new tab with rel="noopener noreferrer"; internal
 * ones route through next/link so client navigation still works.
 */
function renderInline(text: string, keyPrefix: string) {
  const tokens = text.split(/(\[[^\]]+\]\([^)]+\)|\*\*[^*]+\*\*)/g);

  return tokens.map((token, i) => {
    const key = `${keyPrefix}-${i}`;

    const link = token.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (link) {
      const [, label, href] = link;
      if (href.startsWith("/")) {
        return (
          <Link
            key={key}
            href={href}
            className="text-gold underline-offset-2 hover:underline"
          >
            {label}
          </Link>
        );
      }
      return (
        <a
          key={key}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gold underline-offset-2 hover:underline"
        >
          {label}
        </a>
      );
    }

    const bold = token.match(/^\*\*([^*]+)\*\*$/);
    if (bold) {
      return (
        <strong key={key} className="font-semibold text-ink">
          {bold[1]}
        </strong>
      );
    }

    return <span key={key}>{token}</span>;
  });
}

export default function BlogPostContent({ post, content }: BlogPostContentProps) {
  const published = new Date(post.date).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div>
      <PageHeader
        eyebrow={post.category}
        title={post.title}
        standfirst={post.excerpt}
      >
        <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-white/50">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/80">
            <Tag className="h-3 w-3" aria-hidden="true" />
            {post.category}
          </span>
          <span>{published}</span>
          <span className="flex items-center gap-1">
            <Clock className="h-3 w-3" aria-hidden="true" />
            {post.readTime}
          </span>
        </div>
      </PageHeader>

      <article className="py-14 lg:py-20">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <Link
            href="/blog"
            className="mb-10 inline-flex items-center gap-2 text-sm text-ink-muted transition-colors hover:text-gold"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            All guides
          </Link>

          <div className="measure">
            {content.map((block, i) => {
              const lines = block.split("\n");
              return (
                <div key={i} className="mb-8">
                  {lines.map((line, j) => {
                    if (line.startsWith("### ")) {
                      return (
                        <h3 key={j} className="mt-7 mb-3 font-display text-lg">
                          {renderInline(line.replace("### ", ""), `${i}-${j}`)}
                        </h3>
                      );
                    }
                    if (line.startsWith("## ")) {
                      return (
                        <h2 key={j} className="mt-10 mb-4 font-display text-2xl">
                          {renderInline(line.replace("## ", ""), `${i}-${j}`)}
                        </h2>
                      );
                    }
                    if (line.startsWith("- ")) {
                      return (
                        <li
                          key={j}
                          className="mb-2 ml-5 list-disc leading-relaxed text-ink-muted"
                        >
                          {renderInline(line.replace("- ", ""), `${i}-${j}`)}
                        </li>
                      );
                    }
                    if (line.trim() === "") return <br key={j} />;
                    return (
                      <p key={j} className="mb-4 leading-relaxed text-ink-muted">
                        {renderInline(line, `${i}-${j}`)}
                      </p>
                    );
                  })}
                </div>
              );
            })}
          </div>

          <RelatedGuides exclude={post.slug} />

          <div className="mt-14 rounded-2xl bg-paper-sunk p-8 text-center ring-1 ring-ink/10">
            <h3 className="font-display text-xl">Ready to buy IPTV UK?</h3>
            <p className="mx-auto mt-3 max-w-md text-ink-muted">
              Plans start at £25.99 with automated Xtream code delivery and a
              30-day money-back guarantee.
            </p>
            <Link
              href="/checkout"
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-gold-bright to-gold px-8 py-3.5 text-sm font-bold text-night transition-all hover:brightness-110"
            >
              Buy IPTV UK Now
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
