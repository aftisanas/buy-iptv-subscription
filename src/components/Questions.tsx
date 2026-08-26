import { FAQ_ITEMS } from "@/lib/constants";

/**
 * FAQ, built on native <details>/<summary>.
 *
 * No framer-motion, no client JS, no state: it is keyboard-accessible and
 * screen-reader-correct for free, and it costs nothing against the INP budget.
 * The sibling sites all ship an animated JS accordion for the same result.
 */
export default function Questions() {
  return (
    <section id="faq" className="border-b border-rule py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,20rem)_1fr] lg:gap-16">
          <div>
            <p className="eyebrow">Questions</p>
            <h2 className="marker mt-4 font-display text-3xl lg:text-4xl">
              Buy IPTV UK — Questions, Including the Awkward Ones
            </h2>
            <p className="measure mt-4 text-ink-muted">
              If something about how to buy IPTV UK is not answered here, ask on
              WhatsApp before you pay rather than after.
            </p>
          </div>

          <div className="border-t border-rule">
            {FAQ_ITEMS.map((item) => (
              <details
                key={item.question}
                className="group border-b border-rule"
              >
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4 py-5 font-display text-base font-bold tracking-tight marker:content-['']">
                  {item.question}
                  <span
                    aria-hidden="true"
                    className="mt-0.5 shrink-0 text-gold transition-transform group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="measure pb-5 text-ink-muted">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
