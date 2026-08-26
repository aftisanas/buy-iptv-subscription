import RelatedGuides from "./RelatedGuides";

/**
 * Homepage guides strip.
 *
 * The Phase 7 audit found every blog post had exactly one inbound internal
 * link, from /blog. The homepage — by far the most linked page on the site —
 * pointed at none of them. This passes some of that authority down.
 */
export default function Guides() {
  return (
    <section id="guides" className="border-b border-rule bg-paper-sunk py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <p className="eyebrow">Guides</p>
        <RelatedGuides
          heading="Before You Buy IPTV UK, Read These"
          standfirst="Straight answers on choosing a provider, setting it up on the hardware you already own, and what IPTV actually replaces."
          limit={3}
          tone="sunk"
        />
      </div>
    </section>
  );
}
