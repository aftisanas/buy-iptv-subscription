import { WhatsAppCta, WhatsAppExpectation } from "./ui/WhatsAppCta";

/**
 * How ordering works. No sibling site has this section.
 *
 * Shows the whole path before the buyer commits to the first step — the point
 * of a chat preview is that the next action stops being unfamiliar. Presented
 * as a deliberate channel, never apologised for (DESIGN-SPEC §8).
 */

const STEPS = [
  {
    n: "01",
    title: "Tell us the plan",
    body: "Pick a term, add the Secure Proxy or extra connections if you want them, and the order opens in WhatsApp with the details already written out.",
  },
  {
    n: "02",
    title: "We send payment details",
    body: "You get the payment details back in the same conversation. Nothing is stored on this site and there is no card form to fill in.",
  },
  {
    n: "03",
    title: "Credentials arrive by email",
    body: "Once payment clears, your M3U link and app login are emailed automatically. No queue, no manual approval, no office-hours restriction.",
  },
];

export default function Ordering() {
  return (
    <section id="ordering" className="border-b border-rule py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <p className="eyebrow">Ordering</p>
        <h2 className="marker mt-4 font-display text-3xl lg:text-4xl">
          Three steps, one conversation
        </h2>

        <div className="mt-10 grid gap-12 lg:grid-cols-[1fr_minmax(0,22rem)] lg:gap-16">
          <ol className="border-t-2 border-ink">
            {STEPS.map((step) => (
              <li
                key={step.n}
                className="grid grid-cols-[3rem_1fr] gap-x-4 border-b border-rule py-6 sm:grid-cols-[4rem_1fr]"
              >
                <span className="data text-sm text-orange">{step.n}</span>
                <div>
                  <h3 className="font-display text-lg font-extrabold tracking-tight">
                    {step.title}
                  </h3>
                  <p className="measure mt-2 text-ink-muted">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>

          {/* Static chat preview — markup, not an image, so it costs nothing
              and stays legible at 375px. */}
          <div>
            <div className="border border-rule bg-night p-5">
              <p className="eyebrow text-white/45">Preview</p>
              <div className="mt-4 space-y-2.5">
                <p className="ml-auto max-w-[85%] bg-orange px-3.5 py-2.5 text-sm leading-snug text-white">
                  Hi 👋 I&apos;d like the 12-month plan.
                </p>
                <p className="max-w-[85%] bg-night-2 px-3.5 py-2.5 text-sm leading-snug text-white/80">
                  Great — that&apos;s £49.99 for 12 months, 5 screens included.
                  Here are the payment details…
                </p>
                <p className="max-w-[85%] bg-night-2 px-3.5 py-2.5 text-sm leading-snug text-white/80">
                  Received. Your login is on its way to your inbox now.
                </p>
              </div>
            </div>
            <WhatsAppCta className="mt-5 w-full" />
            <WhatsAppExpectation className="mt-3" />
          </div>
        </div>
      </div>
    </section>
  );
}
