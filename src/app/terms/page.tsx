import type { Metadata } from "next";
import { SITE_NAME, CONTACT_EMAIL } from "@/lib/constants";
import LegalPageSchema from "@/components/LegalPageSchema";

const DESCRIPTION = `Terms and conditions for using ${SITE_NAME}: account rules, acceptable use, billing, subscription terms, liability and cancellation.`;

export const metadata: Metadata = {
  title: "Terms of Service",
  description: DESCRIPTION,
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <>
    <div className="pt-24 lg:pt-28">
      <div className="mx-auto max-w-3xl px-5 sm:px-8 py-14 lg:py-20">
        <h1 className="font-display text-3xl sm:text-4xl mb-8">Terms of Service</h1>
        <div className="space-y-6 text-ink-muted leading-relaxed">
          <p className="eyebrow">Last updated: 31 July 2026</p>

          <section>
            <h2 className="font-display text-xl mb-3 text-ink">1. Acceptance of Terms</h2>
            <p>By accessing and using {SITE_NAME} (&ldquo;the Service&rdquo;), you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you must not use our Service.</p>
          </section>

          <section>
            <h2 className="font-display text-xl mb-3 text-ink">2. Service Description</h2>
            <p>{SITE_NAME} provides Internet Protocol Television (IPTV) streaming services, delivering live television channels and video-on-demand content over the internet to subscribers in the United Kingdom and internationally.</p>
          </section>

          <section>
            <h2 className="font-display text-xl mb-3 text-ink">3. Subscriptions & Payments</h2>
            <p>Subscriptions are billed according to the plan selected at the time of purchase. All prices are displayed in British Pounds (GBP). We offer monthly, quarterly, and annual billing cycles. Payment is due at the start of each billing period.</p>
          </section>

          <section>
            <h2 className="font-display text-xl mb-3 text-ink">4. Refund Policy</h2>
            <p>We offer a 30-day money-back guarantee on all new subscriptions. If you are not satisfied with our service within the first 30 days, contact us for a full refund. Refunds are processed within 5–10 business days.</p>
          </section>

          <section>
            <h2 className="font-display text-xl mb-3 text-ink">5. Acceptable Use</h2>
            <p>You agree not to redistribute, resell, or share your subscription credentials with unauthorised parties. Each subscription is for personal, non-commercial use only. We reserve the right to suspend or terminate accounts that violate these terms.</p>
          </section>

          <section>
            <h2 className="font-display text-xl mb-3 text-ink">6. Service Availability</h2>
            <p>While we aim for 99.9% uptime, we do not guarantee uninterrupted access to the Service. Scheduled maintenance, technical issues, or circumstances beyond our control may occasionally affect availability. We will endeavour to notify users of planned maintenance in advance.</p>
          </section>

          <section>
            <h2 className="font-display text-xl mb-3 text-ink">7. Contact</h2>
            <p>For questions about these Terms of Service, please contact us at <a href={`mailto:${CONTACT_EMAIL}`} className="text-gold underline-offset-2 hover:underline">{CONTACT_EMAIL}</a>.</p>
          </section>
        </div>
      </div>
    </div>
    <LegalPageSchema
      slug="terms"
      name="Terms of Service"
      description={DESCRIPTION}
      dateModified="2026-07-31"
    />
    </>
  );
}
