import Image from "next/image";

/**
 * Real customer WhatsApp threads, supplied by the owner and redacted.
 *
 * These are genuine conversations — not the invented testimonials removed in
 * the credibility pass. That distinction is why they can be shown at all:
 * fabricated consumer reviews are prohibited under the DMCC Act 2024, real
 * ones are not.
 *
 * DELIBERATELY NO Review / AggregateRating SCHEMA. The customers are
 * anonymised, so there is no author to attribute and no verifiable rating to
 * publish. Marking screenshots up as schema.org/Review would be fabricated
 * structured data even though the underlying conversations are real. These are
 * presented as evidence, not as rated reviews.
 *
 * Every image must be checked for personal data before it is added here —
 * names, profile photos, phone numbers, payment-account identifiers. Two of
 * the supplied screenshots still carry partial recipient names inside the
 * payment card and are withheld until that is redacted at source.
 */

type Shot = {
  src: string;
  alt: string;
  caption: string;
  quote?: string;
};

const SHOTS: Shot[] = [
  {
    src: "/reviews/buy-iptv-uk-firestick-setup-review.webp",
    alt: "WhatsApp conversation: a customer sets up IPTV on a Fire Stick and confirms Formula 1 is playing",
    caption: "Fire Stick setup, walked through on WhatsApp",
    quote: "That was easier then I thought got the F1 on now cheers mate",
  },
  {
    src: "/reviews/buy-iptv-uk-skrill-payment-confirmation.webp",
    alt: "WhatsApp conversation: payment confirmed and a 12-month subscription being prepared",
    caption: "12-month order, credentials prepared straight after payment",
  },
];

export default function Proof() {
  return (
    <section id="proof" className="border-b border-rule bg-paper-sunk py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="max-w-3xl">
          <p className="eyebrow">Real orders</p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-[2.75rem]">
            What Happens After You Buy IPTV UK
          </h2>
          <p className="mt-4 text-ink-muted">
            Unedited WhatsApp threads from customers, with names and payment
            details removed. We publish no star ratings and no subscriber
            counts — these are simply what the conversations look like.
          </p>
        </div>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SHOTS.map((shot) => (
            <li
              key={shot.src}
              className="overflow-hidden rounded-2xl bg-paper ring-1 ring-ink/10"
            >
              <div className="relative aspect-[9/16] overflow-hidden bg-night">
                <Image
                  src={shot.src}
                  alt={shot.alt}
                  fill
                  sizes="(min-width: 1024px) 360px, (min-width: 640px) 45vw, 90vw"
                  className="object-cover object-top"
                />
              </div>
              <div className="p-5">
                {shot.quote && (
                  <blockquote className="border-l-2 border-gold pl-3 text-sm leading-relaxed text-ink">
                    &ldquo;{shot.quote}&rdquo;
                  </blockquote>
                )}
                <p
                  className={`text-xs text-ink-muted ${shot.quote ? "mt-3" : ""}`}
                >
                  {shot.caption}
                </p>
              </div>
            </li>
          ))}

          {/* Third slot: the two withheld screenshots go here once the partial
              recipient names inside the payment cards are redacted. */}
          <li className="flex items-center justify-center rounded-2xl border border-dashed border-rule p-8 text-center sm:col-span-2 lg:col-span-1">
            <p className="text-sm text-ink-muted">
              More order threads are added as customers agree to share them.
              Ask on WhatsApp if you would like to see a specific setup.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}
