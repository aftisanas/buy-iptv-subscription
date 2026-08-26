import Link from "next/link";
import { ArrowRight, Clock, Tag } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import { BLOG_POSTS } from "@/lib/constants";

/**
 * Blog index on the shared design system.
 *
 * framer-motion removed along with the aurora blobs and floating particles —
 * the CSS `rise` stagger covers the same intent for none of the weight, and
 * this is now a server component.
 */
export default function BlogContent() {
  return (
    <div>
      <PageHeader
        eyebrow="Buy IPTV UK · Guides"
        title={
          <>
            Buy IPTV UK Guides and{" "}
            <span className="gold-text">Setup Walkthroughs</span>
          </>
        }
        standfirst="Straight answers on how to buy IPTV UK, set it up on the hardware you already own, and get the most out of the channel list — written for British buyers."
      />

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="grid gap-6 md:grid-cols-2">
            {BLOG_POSTS.map((post, i) => (
              <article key={post.slug}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group block h-full overflow-hidden rounded-2xl bg-paper shadow-sm ring-1 ring-ink/10 transition-shadow hover:shadow-lg hover:shadow-ink/5"
                >
                  <div className="night-field relative flex h-36 items-center justify-center overflow-hidden">
                    <div className="guide-grid absolute inset-0" aria-hidden="true" />
                    <span className="tabular relative text-5xl font-bold text-white/10 select-none">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-gold px-3 py-1 text-xs font-medium text-night">
                      <Tag className="h-3 w-3" aria-hidden="true" />
                      {post.category}
                    </span>
                  </div>

                  <div className="p-6">
                    <div className="mb-3 flex items-center gap-4 text-xs text-ink-muted">
                      <span>
                        {new Date(post.date).toLocaleDateString("en-GB", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" aria-hidden="true" />
                        {post.readTime}
                      </span>
                    </div>

                    <h2 className="mb-3 line-clamp-2 font-display text-lg transition-colors group-hover:text-gold">
                      {post.title}
                    </h2>

                    <p className="mb-4 line-clamp-3 text-sm leading-relaxed text-ink-muted">
                      {post.excerpt}
                    </p>

                    <span className="inline-flex items-center gap-1.5 text-sm font-medium text-gold transition-all group-hover:gap-2.5">
                      Read the guide
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
