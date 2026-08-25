import SectionLink from "./SectionLink";
import { WhatsAppCta, WhatsAppExpectation } from "./ui/WhatsAppCta";

/**
 * Dark hero, typographic. No canvas, no blobs, no framer-motion — this is the
 * LCP region and 70% of clicks are mobile (820/1,172, buy-iptv-uk.com 90d).
 * The only motion is a CSS staggered reveal under prefers-reduced-motion.
 *
 * Deliberately carries no imagery: every competitor template leads with
 * broadcaster logos or film posters, both of which are enforcement triggers we
 * will not ship. Absence is the differentiator (DESIGN-SPEC §1).
 */

type SpecItem = { label: string; value: string };

const SPEC: SpecItem[] = [
  { label: "Live channels", value: "37,000+" },
  { label: "Films & series", value: "198,000+" },
  { label: "Screens", value: "5" },
  { label: "Money-back", value: "30 days" },
];

export default function Hero({
  eyebrow = "Buy IPTV · United Kingdom",
  title = (
    <>
      Buy IPTV.
      <br />
      37,000 channels,
      <br />
      <span className="text-orange">live in 60 seconds.</span>
    </>
  ),
  standfirst = "One payment, no contract, no auto-renewal. Tell us which plan you want, we send the payment details, and your credentials arrive by email. From £25.99 for three months.",
  compact = false,
}: {
  eyebrow?: string;
  title?: React.ReactNode;
  standfirst?: string;
  compact?: boolean;
}) {
  return (
    <section
      className={`bg-night text-white ${compact ? "pt-24 pb-12 lg:pt-32 lg:pb-16" : "pt-28 pb-16 lg:pt-40 lg:pb-24"}`}
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <p className="eyebrow rise rise-1 text-white/55">{eyebrow}</p>

        <h1
          className={`rise rise-2 mt-5 font-display tracking-tight ${
            compact
              ? "text-[2rem] sm:text-4xl lg:text-5xl"
              : "text-[2.5rem] leading-[1.05] sm:text-5xl lg:text-[4.25rem]"
          }`}
        >
          {title}
        </h1>

        <p className="rise rise-3 measure mt-6 text-white/70">{standfirst}</p>

        <div className="rise rise-4 mt-9 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-5">
          <WhatsAppCta className="w-full justify-center sm:w-auto" />
          <SectionLink
            href="/#plans"
            className="font-display text-sm font-bold tracking-tight text-white underline decoration-orange decoration-2 underline-offset-[6px] transition-colors hover:text-orange"
          >
            See all four plans
          </SectionLink>
        </div>

        <WhatsAppExpectation className="rise rise-4 mt-4 text-white/45" />

        {!compact && (
          <dl className="rise rise-4 mt-14 grid grid-cols-2 border-t border-white/15 sm:grid-cols-4">
            {SPEC.map((item) => (
              <div
                key={item.label}
                className="border-b border-white/15 py-5 pr-4 sm:border-b-0 sm:pr-6"
              >
                <dt className="eyebrow text-white/45">{item.label}</dt>
                <dd className="data mt-1.5 text-2xl font-medium text-white lg:text-3xl">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>
        )}
      </div>
    </section>
  );
}
