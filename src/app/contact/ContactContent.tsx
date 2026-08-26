import { Mail, Clock, Headphones, MessageCircle } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import { WhatsAppCta } from "@/components/ui/WhatsAppCta";
import {
  CONTACT_EMAIL,
  SUPPORT_HOURS,
  WHATSAPP_DISPLAY,
  WHATSAPP_NUMBER,
} from "@/lib/constants";

/**
 * Contact page on the shared design system.
 *
 * WhatsApp is listed alongside email — the previous version advertised a
 * "named British team" on "live chat" while offering exactly one channel, and
 * omitted the one channel most buyers actually use.
 *
 * "Based in London, United Kingdom" is not reinstated: it was removed from
 * llms.txt in the credibility pass as unverifiable and should not survive here.
 */

const HELP_WITH = [
  "Device setup and installation guidance",
  "Account and subscription management",
  "Technical troubleshooting",
  "Channel and content enquiries",
  "Billing and payment support",
  "General enquiries and feedback",
];

const HOURS = [
  { dept: "Customer support", hours: "24/7" },
  { dept: "Technical support", hours: "24/7" },
  { dept: "Refund requests", hours: "24/7" },
  { dept: "Sales & billing", hours: "Mon–Fri, 9am–6pm GMT" },
];

export default function ContactContent() {
  return (
    <div>
      <PageHeader
        eyebrow="Buy IPTV UK · Support"
        title={
          <>
            Questions Before You <span className="gold-text">Buy IPTV UK?</span>
          </>
        }
        standfirst="Ask before you pay rather than after. Support answers on WhatsApp and email around the clock, including evenings and weekends."
      >
        <WhatsAppCta />
      </PageHeader>

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <div className="grid gap-6 sm:grid-cols-2">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl bg-paper p-6 shadow-sm ring-1 ring-ink/10 transition-shadow hover:shadow-lg hover:shadow-ink/5"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold text-night">
                <MessageCircle className="h-5 w-5" aria-hidden="true" />
              </span>
              <h2 className="mt-4 font-display text-lg">WhatsApp</h2>
              <p className="mt-1.5 text-sm text-ink-muted">
                Fastest route for order questions and setup help.
              </p>
              <p className="mt-3 text-sm font-medium text-gold">
                {WHATSAPP_DISPLAY}
              </p>
            </a>

            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="group rounded-2xl bg-paper p-6 shadow-sm ring-1 ring-ink/10 transition-shadow hover:shadow-lg hover:shadow-ink/5"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-night text-gold-bright">
                <Mail className="h-5 w-5" aria-hidden="true" />
              </span>
              <h2 className="mt-4 font-display text-lg">Email</h2>
              <p className="mt-1.5 text-sm text-ink-muted">
                For account, billing and anything needing a paper trail.
              </p>
              <p className="mt-3 text-sm font-medium break-all text-gold">
                {CONTACT_EMAIL}
              </p>
            </a>
          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl bg-paper-sunk p-8 ring-1 ring-ink/10">
              <div className="mb-5 flex items-center gap-3">
                <Clock className="h-5 w-5 text-gold" aria-hidden="true" />
                <h2 className="font-display text-lg">Support hours</h2>
              </div>
              <dl>
                {HOURS.map((item) => (
                  <div
                    key={item.dept}
                    className="flex items-center justify-between border-b border-rule/70 py-2.5 last:border-0"
                  >
                    <dt className="text-sm text-ink-muted">{item.dept}</dt>
                    <dd className="text-sm font-medium text-ink">{item.hours}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-4 text-xs text-ink-muted">{SUPPORT_HOURS}</p>
            </div>

            <div className="rounded-2xl bg-paper-sunk p-8 ring-1 ring-ink/10">
              <div className="mb-5 flex items-center gap-3">
                <Headphones className="h-5 w-5 text-gold" aria-hidden="true" />
                <h2 className="font-display text-lg">What we can help with</h2>
              </div>
              <ul className="space-y-3">
                {HELP_WITH.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold"
                      aria-hidden="true"
                    />
                    <span className="text-sm text-ink-muted">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
