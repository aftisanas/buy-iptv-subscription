import SectionLink from "./SectionLink";
import { CreditCard, Mail, PlayCircle, MessageCircle } from "lucide-react";
import { WhatsAppCta } from "./ui/WhatsAppCta";

/**
 * How ordering works.
 *
 * The first pass described WhatsApp as the only path, which understated the
 * product: the automated checkout takes card payment through the hub and
 * emails Xtream codes without anyone touching the order. WhatsApp is the
 * fallback when the hub reports stores unavailable, and an option for buyers
 * who prefer to talk first — not the primary route.
 */

const STEPS = [
  {
    icon: CreditCard,
    n: "01",
    title: "Choose your plan and pay",
    body: "Pick a term, add the Secure Proxy or extra connections, and pay securely by card at the checkout. Nothing about your card touches this site.",
  },
  {
    icon: Mail,
    n: "02",
    title: "Xtream codes arrive by email",
    body: "The moment payment clears, your Xtream username, password and server URL are generated and emailed automatically. No queue, no manual approval, no office hours.",
  },
  {
    icon: PlayCircle,
    n: "03",
    title: "Sign in and start watching",
    body: "Enter the codes in IPTV Smarters, TiviMate or any Xtream-compatible player and the full channel list loads straight away.",
  },
];

export default function Ordering() {
  return (
    <section id="ordering" className="border-b border-rule bg-paper-sunk py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="max-w-3xl">
          <p className="eyebrow">How it works</p>
          <h2 className="marker mt-3 font-display text-3xl sm:text-4xl lg:text-[2.75rem]">
            Buy IPTV UK in Three Steps — Fully Automated
          </h2>
          <p className="mt-4 text-ink-muted">
            When you buy IPTV UK here the whole order is automated end to end,
            so activation does not depend on anyone being awake.
          </p>
        </div>

        <ol className="mt-12 grid gap-6 lg:grid-cols-3">
          {STEPS.map((step) => (
            <li key={step.n} className="relative rounded-xl bg-paper ring-1 ring-ink/10 p-6">
              <span className="tabular absolute right-5 top-5 font-display text-4xl text-rule">
                {step.n}
              </span>
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold text-night">
                <step.icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="mt-4 font-display text-xl">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                {step.body}
              </p>
            </li>
          ))}
        </ol>

        <div className="mt-10 flex flex-col items-center justify-between gap-5 rounded-xl bg-night px-6 py-7 text-center sm:flex-row sm:text-left">
          <div>
            <h3 className="font-display text-xl text-white">
              Would rather talk before you buy IPTV UK?
            </h3>
            <p className="mt-1.5 text-sm text-white/60">
              Message us on WhatsApp and we will set the order up with you and
              send payment details in the chat.
            </p>
          </div>
          <div className="flex shrink-0 flex-col gap-2.5 sm:flex-row sm:items-center">
            <SectionLink
              href="/#plans"
              className="rounded-lg bg-gradient-to-r from-gold-bright to-gold px-6 py-3.5 text-center text-sm font-bold text-night transition-all hover:brightness-110"
            >
              Go to checkout
            </SectionLink>
            <WhatsAppCta
              label="WhatsApp"
              tone="outline"
              className="bg-white/10 text-white hover:bg-white/15"
            />
          </div>
        </div>

        <p className="mt-4 flex items-center justify-center gap-2 text-xs text-ink-muted">
          <MessageCircle className="h-3.5 w-3.5" aria-hidden="true" />
          If the card checkout is ever unavailable, the order falls back to
          WhatsApp automatically — you will not lose your basket.
        </p>
      </div>
    </section>
  );
}
