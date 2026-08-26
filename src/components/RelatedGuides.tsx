import Link from "next/link";
import { ArrowRight, Clock, Tag } from "lucide-react";
import { BLOG_POSTS } from "@/lib/constants";

/**
 * Cross-links between blog posts.
 *
 * The Phase 7 audit found every article had exactly ONE inbound internal link
 * — from /blog — while top-level pages had twelve each. That left the site's
 * two longest pieces of content nearly orphaned in link terms, and it is a
 * plausible contributor to the seven URLs sitting in Search Console's
 * "Discovered — currently not indexed".
 *
 * `exclude` drops the current post so an article never links to itself.
 * `limit` keeps the homepage strip short without needing a second component.
 */
export default function RelatedGuides({
  exclude,
  limit = 3,
  heading = "Related guides",
  standfirst,
  tone = "light",
}: {
  exclude?: string;
  limit?: number;
  heading?: string;
  standfirst?: string;
  tone?: "light" | "sunk";
}) {
  const posts = BLOG_POSTS.filter((p) => p.slug !== exclude).slice(0, limit);
  if (posts.length === 0) return null;

  const card =
    tone === "sunk"
      ? "bg-paper ring-1 ring-ink/10"
      : "bg-paper-sunk ring-1 ring-ink/10";

  return (
    <section className="mt-14">
      <div className="flex items-baseline justify-between gap-4">
        <h2 className="font-display text-2xl">{heading}</h2>
        <Link
          href="/blog"
          className="shrink-0 text-sm font-semibold text-gold transition-colors hover:text-gold-hover"
        >
          All guides
        </Link>
      </div>
      {standfirst && <p className="measure mt-3 text-ink-muted">{standfirst}</p>}

      <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link
              href={`/blog/${post.slug}`}
              className={`group flex h-full flex-col rounded-xl p-5 transition-shadow hover:shadow-lg hover:shadow-ink/5 ${card}`}
            >
              <span className="flex items-center gap-3 text-xs text-ink-muted">
                <span className="inline-flex items-center gap-1.5 font-semibold text-gold">
                  <Tag className="h-3 w-3" aria-hidden="true" />
                  {post.category}
                </span>
                <span className="inline-flex items-center gap-1">
                  <Clock className="h-3 w-3" aria-hidden="true" />
                  {post.readTime}
                </span>
              </span>

              <h3 className="mt-3 line-clamp-3 font-display text-base leading-snug transition-colors group-hover:text-gold">
                {post.title}
              </h3>

              <span className="mt-auto inline-flex items-center gap-1.5 pt-4 text-sm font-semibold text-gold transition-all group-hover:gap-2.5">
                Read it
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
