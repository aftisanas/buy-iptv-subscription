import type { Metadata } from "next";
import { SITE_NAME, CONTACT_EMAIL } from "@/lib/constants";
import LegalPageSchema from "@/components/LegalPageSchema";

const DESCRIPTION = `${SITE_NAME} refund policy: a 30-day money-back guarantee on all plans, how to request a refund, processing times and the few exclusions that apply.`;

export const metadata: Metadata = {
  title: "Refund Policy",
  description: DESCRIPTION,
  alternates: { canonical: "/refund" },
};

export default function RefundPage() {
  return (
    <>
    <div className="pt-24 lg:pt-28">
      <div className="mx-auto max-w-3xl px-5 sm:px-8 py-14 lg:py-20">
        <h1 className="font-display text-3xl sm:text-4xl mb-8">Refund Policy</h1>
        <div className="space-y-6 text-ink-muted leading-relaxed">
          <p className="eyebrow">Last updated: 31 July 2026</p>

          <section>
            <h2 className="font-display text-xl mb-3 text-ink">30-Day Money-Back Guarantee</h2>
            <p>At {SITE_NAME}, we stand behind our service with a no-questions-asked 30-day money-back guarantee on all new subscriptions. If you are not completely satisfied with the streaming quality, channel selection, or anything else within the first 30 days, we will issue a full refund. No hoops, no delays.</p>
          </section>

          <section>
            <h2 className="font-display text-xl mb-3 text-ink">How to Request a Refund</h2>
            <p>To request a refund, simply contact our customer support team via WhatsApp or email at <a href={`mailto:${CONTACT_EMAIL}`} className="text-gold underline-offset-2 hover:underline">{CONTACT_EMAIL}</a>. Please include your subscription details and the reason for your refund request (optional but helpful).</p>
          </section>

          <section>
            <h2 className="font-display text-xl mb-3 text-ink">Processing Time</h2>
            <p>Refund requests are accepted 24/7 and are typically processed within 24–48 hours of receipt. Depending on your payment method, the refund may take an additional 5–10 business days to appear in your account.</p>
          </section>

          <section>
            <h2 className="font-display text-xl mb-3 text-ink">Conditions</h2>
            <p>The 30-day money-back guarantee applies to first-time purchases only. Renewals and repeat subscriptions are subject to a 7-day refund window. The processing times above apply to those requests too.</p>
          </section>
        </div>
      </div>
    </div>
    <LegalPageSchema
      slug="refund"
      name="Refund Policy"
      description={DESCRIPTION}
      dateModified="2026-07-31"
    />
    </>
  );
}
