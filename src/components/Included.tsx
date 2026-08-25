import { CHANNEL_CATEGORIES, DEVICES } from "@/lib/constants";

/**
 * What's included, and what it runs on.
 *
 * Text-only category tiles. Every reference template fills this slot with
 * broadcaster logos (Sky, BT, beIN, Netflix) and film posters; both are
 * enforcement triggers we will not ship, and a sister property was deindexed
 * overnight after a DMCA event. Category names are not trademarks.
 *
 * These categories are presented as a visual device only — they are
 * deliberately NOT spun into cluster URLs, because /sports-iptv would compete
 * with two other properties in the network and dilute the buy-intent silo.
 */
export default function Included() {
  return (
    <section id="included" className="border-b border-rule py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <p className="eyebrow">Included</p>
        <h2 className="marker mt-4 font-display text-3xl lg:text-4xl">
          What the library covers
        </h2>

        <ul className="mt-10 grid gap-px border border-rule bg-rule sm:grid-cols-2 lg:grid-cols-3">
          {CHANNEL_CATEGORIES.map((cat) => (
            <li key={cat.name} className="bg-paper p-6">
              <p className="data text-sm text-orange">{cat.count}</p>
              <h3 className="mt-2 font-display text-base font-extrabold tracking-tight">
                {cat.name.split("—")[0].trim()}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                {cat.channels}
              </p>
            </li>
          ))}
        </ul>

        <div className="mt-14">
          <p className="eyebrow">Compatibility</p>
          <h3 className="marker mt-4 font-display text-2xl lg:text-3xl">
            Runs on what you already own
          </h3>
          <p className="measure mt-4 text-ink-muted">
            Any device that runs an M3U or Xtream-compatible player. Setup takes
            a few minutes and we will walk you through it on WhatsApp if it
            does not go smoothly.
          </p>
          <ul className="mt-6 flex flex-wrap gap-x-8 gap-y-2 border-t border-rule pt-5">
            {DEVICES.map((device) => (
              <li key={device.name} className="data text-sm text-ink-muted">
                {device.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
