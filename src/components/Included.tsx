import { CHANNEL_CATEGORIES } from "@/lib/constants";

/**
 * What's included, and what it runs on.
 *
 * Text-only category tiles. Every reference template fills this slot with
 * broadcaster logos (Sky, BT, beIN, Netflix) and film posters; both are
 * enforcement triggers we will not ship, and a sister property was deindexed
 * overnight after a DMCA event. Category names are not trademarks.
 *
 * Device compatibility lives in Devices.tsx — it was duplicated here.
 *
 * These categories are presented as a visual device only — they are
 * deliberately NOT spun into cluster URLs, because /sports-iptv would compete
 * with two other properties in the network and dilute the buy-intent silo.
 */
export default function Included() {
  return (
    <section id="included" className="border-b border-rule py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <p className="eyebrow">Channel library</p>
        <h2 className="marker mt-4 font-display text-3xl lg:text-4xl">
          Buy IPTV UK and Get Every Category Covered
        </h2>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {CHANNEL_CATEGORIES.map((cat) => (
            <li key={cat.name} className="bg-paper p-6">
              <p className="tabular text-sm text-gold">{cat.count}</p>
              <h3 className="mt-2 font-display text-base font-bold tracking-tight">
                {cat.name.split("—")[0].trim()}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                {cat.channels}
              </p>
            </li>
          ))}
        </ul>

      </div>
    </section>
  );
}
