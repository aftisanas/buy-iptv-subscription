import type { Metadata } from "next";
import { SITE_NAME, CONTACT_EMAIL } from "@/lib/constants";
import LegalPageSchema from "@/components/LegalPageSchema";

const DESCRIPTION = `DMCA and copyright policy for ${SITE_NAME}: how to file a takedown notice, what to include, our response process and counter-notice procedure.`;

export const metadata: Metadata = {
  title: "DMCA Policy",
  description: DESCRIPTION,
  alternates: { canonical: "/dmca" },
};

export default function DMCAPage() {
  return (
    <>
    <div className="pt-24 lg:pt-28">
      <div className="mx-auto max-w-3xl px-5 sm:px-8 py-14 lg:py-20">
        <h1 className="font-display text-3xl sm:text-4xl mb-8">DMCA Policy</h1>
        <div className="space-y-6 text-ink-muted leading-relaxed">
          <p className="eyebrow">Last updated: 31 July 2026</p>

          <section>
            <h2 className="font-display text-xl mb-3 text-ink">Copyright Policy</h2>
            <p>{SITE_NAME} respects the intellectual property rights of others and expects its users to do the same. We comply with the Digital Millennium Copyright Act (DMCA) and respond promptly to valid copyright infringement notices.</p>
          </section>

          <section>
            <h2 className="font-display text-xl mb-3 text-ink">Reporting Copyright Infringement</h2>
            <p>If you believe that content available through our service infringes your copyright, please send a written notice to our designated copyright agent at <a href={`mailto:${CONTACT_EMAIL}`} className="text-gold underline-offset-2 hover:underline">{CONTACT_EMAIL}</a> with the following information:</p>
            <ul className="list-disc ml-5 mt-2 space-y-1">
              <li>A description of the copyrighted work you claim has been infringed</li>
              <li>Identification of the material that you claim is infringing</li>
              <li>Your contact information (name, address, telephone, email)</li>
              <li>A statement that you have a good faith belief the use is not authorised</li>
              <li>A statement that the information in the notification is accurate</li>
              <li>Your physical or electronic signature</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-xl mb-3 text-ink">Disclaimer</h2>
            <p>{SITE_NAME} is not affiliated with any television networks or content providers. All trademarks and logos mentioned on this website are the property of their respective owners. Users are responsible for ensuring compliance with all applicable laws regarding any content accessed via our platform.</p>
          </section>
        </div>
      </div>
    </div>
    <LegalPageSchema
      slug="dmca"
      name="DMCA Policy"
      description={DESCRIPTION}
      dateModified="2026-07-31"
    />
    </>
  );
}
