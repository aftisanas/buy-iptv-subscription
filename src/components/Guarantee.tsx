import Link from "next/link";
import { SITE_NAME } from "@/lib/constants";
import { WhatsAppCta, WhatsAppExpectation } from "./ui/WhatsAppCta";

/**
 * The guarantee, quoted verbatim from /refund rather than paraphrased.
 *
 * With no reviews, ratings or testimonials, the published policy is the trust
 * artefact — and exact wording reads as honest where marketing paraphrase does
 * not (DESIGN-SPEC §9). If /refund changes, this block changes with it.
 */
export default function Guarantee() {
  return (
    <section id="guarantee" className="bg-night py-16 text-white lg:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_minmax(0,20rem)] lg:gap-16">
          <div>
            <p className="eyebrow text-white/45">Guarantee</p>
            <h2 className="mt-4 font-display text-3xl lg:text-4xl">
              <span className="mb-5 block h-0.5 w-12 bg-orange" />
              Stated in full, not summarised
            </h2>

            <blockquote className="measure mt-6 border-l-2 border-orange pl-5 text-white/80">
              <p>
                At {SITE_NAME}, we stand behind our service with a
                no-questions-asked 30-day money-back guarantee on all new
                subscriptions. If you are not completely satisfied with the
                streaming quality, channel selection, or anything else within
                the first 30 days, we will issue a full refund. No hoops, no
                delays.
              </p>
            </blockquote>

            <p className="measure mt-5 text-sm text-white/50">
              The 30-day window applies to first-time purchases. Renewals carry
              a 7-day window. Read the{" "}
              <Link
                href="/refund"
                className="text-white underline decoration-orange decoration-2 underline-offset-4"
              >
                full refund policy
              </Link>{" "}
              and the{" "}
              <Link
                href="/terms"
                className="text-white underline decoration-orange decoration-2 underline-offset-4"
              >
                terms of service
              </Link>{" "}
              before you order — both are published in full.
            </p>
          </div>

          <div className="self-end">
            <WhatsAppCta className="w-full" />
            <WhatsAppExpectation className="mt-3 text-white/45" />
          </div>
        </div>
      </div>
    </section>
  );
}
