import type { Metadata } from "next";
import Link from "next/link";
import SeoLanding, {
  linkCls,
  type SeoFaq,
  type SeoSection,
} from "@/components/SeoLanding";
import { buildLandingMetadata } from "@/lib/seo";

/* Primary keyword: "iptv 12 month subscription".
   Angle: the annual plan specifically — what it costs, how it compares in
   both directions, who it suits and who it does not. Term arithmetic across
   the whole table lives on /cheap-iptv-subscription. */

const PAGE_PATH = "/iptv-12-month-subscription";
const PAGE_TITLE =
  "IPTV 12 Month Subscription — £49.99, or £4.17 a Month";
const PAGE_DESCRIPTION =
  "The twelve-month IPTV plan at £49.99: what it includes, how it compares against the six and twenty-four month terms, who it suits and when a shorter term is wiser.";

export const metadata: Metadata = buildLandingMetadata({
  path: PAGE_PATH,
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  imageAlt: "IPTV 12 month subscription — £49.99 annual plan",
});

const SECTIONS: SeoSection[] = [
  {
    id: "what-it-includes",
    h2: "What the twelve-month plan includes",
    body: (
      <>
        <p>
          £49.99 for a full year, which works out at £4.17 a month. That single
          payment covers roughly 37,000 live channels with full UK coverage,
          around 198,000 films and series on demand, a seven-day electronic
          programme guide with catch-up, HD and Full HD throughout with native
          4K on every feed genuinely produced in 4K, five simultaneous
          connections, and support staffed around the clock for the whole
          twelve months.
        </p>
        <p>
          It also carries the same 30-day money-back guarantee as every other
          term. That is the detail most people miss when weighing an annual
          plan against a quarterly one, and it changes the comparison
          substantially.
        </p>
        <p>
          What it does not include is any obligation. There is no contract, no
          credit check, no early-termination charge and no automatic renewal at
          the end. It is a prepayment for twelve months of access, not a
          twelve-month commitment in the sense the phrase usually implies.
        </p>
      </>
    ),
  },
  {
    id: "the-monthly-maths",
    h2: "The monthly arithmetic",
    body: (
      <>
        <p>
          £49.99 divided across twelve months is £4.17. Put against the
          alternatives, that number is the whole argument for this plan.
        </p>
        <p>
          Covering a year on the three-month plan means buying it four times:
          £25.99 × 4 = <strong className="text-foreground font-semibold">
            £103.96
          </strong>
          . The annual plan covers the identical service for £49.99, so you
          would pay <strong className="text-foreground font-semibold">
            £53.97 more
          </strong>{" "}
          — more than double — for the privilege of committing in three-month
          increments.
        </p>
        <p>
          Covering a year on the six-month plan means buying it twice: £35.99 ×
          2 = £71.98. That is still £21.99 more than the annual plan for the
          same twelve months.
        </p>
        <p>
          Put the other way round: the twelve-month plan costs £14 more than a
          single six-month plan and gives you six additional months. At the
          six-month rate of £6.00 a month, those six months would otherwise
          cost £36. The annual plan is the point in the table where the value
          gap is widest relative to the extra outlay.
        </p>
      </>
    ),
  },
  {
    id: "vs-shorter",
    h2: "Against the three and six month plans",
    body: (
      <>
        <p>
          The honest case for a shorter term is flexibility, and it is worth
          examining what that flexibility actually buys.
        </p>
        <p>
          Because the 30-day guarantee applies identically to all four terms,
          the shorter plan gives you no additional protection during the period
          when you are actually deciding whether the service is any good. If
          streams stutter at Saturday teatime, you get your money back whether
          you paid £25.99 or £49.99.
        </p>
        <p>
          What the shorter term protects against is a narrower scenario:
          something changing after month three. Your circumstances shifting,
          the service degrading later, or you simply losing interest. That is a
          genuine risk but a much smaller one than most buyers imagine they are
          insuring against, and the premium is steep — choosing three months
          over twelve costs £4.49 every month for that protection.
        </p>
        <p>
          The break-even is worth knowing precisely. The twelve-month plan
          costs £14 more than the six-month one; at the six-month rate that is
          just under two and a half months of viewing. Keep the service beyond
          roughly eight and a half months and the annual plan has already won.
          Most households keep it considerably longer than that.
        </p>
      </>
    ),
  },
  {
    id: "vs-longer",
    h2: "Against the twenty-four month plan",
    body: (
      <>
        <p>
          The two-year plan at £79.99 is £2.96 a month, which is £1.21 cheaper
          per month than the annual one. Over two years that difference totals
          roughly £29 — the two-year plan costs £79.99 against £99.98 for two
          consecutive annual plans.
        </p>
        <p>
          Whether that is worth taking comes down to payback period. The
          twenty-four-month plan costs £30 more than the twelve-month one, and
          at £4.17 a month that is around seven months of viewing. So it pays
          for itself somewhere near the nineteen-month mark. Anything short of
          that and you would have been better off on the annual plan.
        </p>
        <p>
          Nineteen months is a long way to see ahead. Households move,
          circumstances change, and the streaming market shifts. The annual
          plan captures the large majority of the available saving — the drop
          from £8.66 to £4.17 is far bigger than the drop from £4.17 to £2.96 —
          without requiring you to have a confident view of where you will be
          in two years. That is why it is the term most households settle on.
        </p>
        <p>
          If you are confident about two years, take the longer plan; the
          guarantee is identical and the saving is real. The full
          term-by-term comparison is on the{" "}
          <Link href="/cheap-iptv-subscription" className={linkCls}>
            cheap IPTV subscription page
          </Link>
          .
        </p>
      </>
    ),
  },
  {
    id: "who-it-suits",
    h2: "Who the annual plan suits",
    body: (
      <>
        <p>
          <strong className="text-foreground font-semibold">
            Households that have run IPTV before.
          </strong>{" "}
          If you already know your broadband handles it and your devices work,
          the uncertainty the short term insures against has largely gone.
        </p>
        <p>
          <strong className="text-foreground font-semibold">
            Anyone replacing a conventional package.
          </strong>{" "}
          If you are cancelling a traditional subscription, you are not going
          to be without television for the next year, so the annual horizon
          matches your actual situation.
        </p>
        <p>
          <strong className="text-foreground font-semibold">
            People who dislike recurring admin.
          </strong>{" "}
          One payment, one date to remember, no quarterly repurchase.
        </p>
        <p>
          <strong className="text-foreground font-semibold">
            Sports-led households.
          </strong>{" "}
          A domestic season runs most of a year. A three-month plan bought in
          August expires before the business end of it.
        </p>
        <p>
          It suits you less well if you have never run IPTV on your connection,
          if your living situation is about to change, or if your broadband is
          marginal for the number of streams you want — in all three cases,
          three months at £25.99 is the more sensible entry and you can
          lengthen afterwards.
        </p>
      </>
    ),
  },
  {
    id: "connections",
    h2: "Extra connections on an annual term",
    body: (
      <p>
        Five simultaneous connections are included, which covers most
        households. Beyond that, each additional connection is £29.00 for the
        twelve-month term, which is £2.42 a month — the same monthly rate as on
        every other term, so the annual plan neither penalises nor rewards you
        for adding them. The Secure Proxy add-on is £19.00 for the year, or
        £1.58 a month, and is only relevant on shared, monitored or restricted
        networks. Both cost less bought at the point of purchase than added
        part-way through, because a mid-term addition is priced for the
        remainder rather than at the full term rate. If you think five
        connections might not be enough, decide before you order — the{" "}
        <Link href="/iptv-price" className={linkCls}>
          full price list
        </Link>{" "}
        sets out every figure.
      </p>
    ),
  },
  {
    id: "what-happens-at-end",
    h2: "What happens when the year ends",
    body: (
      <p>
        Nothing automatic. There is no stored card, no rollover and no price
        that steps up at the anniversary. You are contacted in the same thread
        as your term approaches its end, and if you want to continue you buy
        another at whatever is published then. If you do nothing, access simply
        stops. One thing worth knowing in advance: the refund window on a
        renewal is seven days rather than thirty, because the longer window
        exists so a new buyer can test the service and by then you will already
        have done so. That is set out with the rest of the terms on the{" "}
        <Link href="/refund" className={linkCls}>
          refund page
        </Link>
        .
      </p>
    ),
  },
];

const FAQS: readonly SeoFaq[] = [
  {
    q: "How much is a 12 month IPTV subscription?",
    a: "£49.99 for the full year, which works out at £4.17 a month. It includes roughly 37,000 live channels, 198,000 on-demand titles, a seven-day guide with catch-up, native 4K where the source is 4K, five simultaneous connections and 24/7 support.",
  },
  {
    q: "Is the annual plan cheaper than buying shorter terms?",
    a: "Considerably. Four three-month plans cost £103.96 to cover the same year, and two six-month plans cost £71.98, against £49.99 for the annual plan. You would pay £53.97 more on the quarterly route for an identical service.",
  },
  {
    q: "Does the 12 month plan include the 30-day guarantee?",
    a: "Yes, identically to every other term. That is the detail most people miss — during the period you are actually judging the service, your exposure on the annual plan is exactly the same as on the three-month one.",
  },
  {
    q: "Should I take 12 months or 24 months?",
    a: "Twenty-four months at £2.96 a month saves £1.21 a month more, but its payback falls around the nineteen-month mark. The annual plan captures most of the available saving — the drop from £8.66 to £4.17 is far bigger than £4.17 to £2.96 — without needing a two-year view.",
  },
  {
    q: "Is there a contract with the annual plan?",
    a: "No. No credit check, no early-termination charge and no automatic renewal. It is a prepayment for twelve months of access rather than a twelve-month commitment in the usual sense — there is nothing to cancel.",
  },
  {
    q: "When is a shorter term the better choice?",
    a: "If you have never run IPTV on your broadband, if your living situation is about to change, or if your connection is marginal for the number of streams you want. In all three cases start on three months at £25.99 and lengthen once you know it works.",
  },
  {
    q: "How much are extra connections on the annual plan?",
    a: "£29.00 for the year per additional connection, which is £2.42 a month — the same monthly rate as every other term. Five are included as standard. Buying at the point of purchase costs less than adding mid-term.",
  },
  {
    q: "What happens when the twelve months are up?",
    a: "Nothing automatic. No stored card, no rollover and no price increase. You are contacted in the same thread, and if you want to continue you buy another term at the rate published then. Renewals carry a seven-day refund window rather than thirty days.",
  },
] as const;

export default function Iptv12MonthSubscriptionPage() {
  return (
    <SeoLanding
      pagePath={PAGE_PATH}
      breadcrumbName="IPTV 12 Month Subscription"
      badge="IPTV 12 Month Subscription"
      h1Lead="IPTV 12 Month Subscription —"
      h1Accent="£49.99 for the Year"
      intro={
        <p>
          £4.17 a month, paid once, with the same 30-day money-back guarantee
          as every other term. Covering the same year in three-month
          instalments costs £103.96 — more than double. This page sets out what
          the annual plan includes, how it compares in both directions, and the
          cases where a shorter term is genuinely the wiser choice.
        </p>
      }
      sections={SECTIONS}
      midCtaAfter={2}
      midCtaText="£49.99 for twelve months — the term most households settle on."
      midCtaLabel="See the Annual Plan"
      faqs={FAQS}
      faqHeading="The 12 Month IPTV Plan"
      closingLead="A year of television"
      closingAccent="for £49.99"
      closingBody={
        <p>
          One payment, five screens, nothing to cancel and thirty days to
          change your mind — the same window that applies to every other term.
          The full terms are on the{" "}
          <Link href="/refund" className={linkCls}>
            refund page
          </Link>{" "}
          if you would rather read them before deciding.
        </p>
      }
      ctaLabel="Get the 12 Month Plan"
      secondaryHref="/cheap-iptv-subscription"
      secondaryLabel="Or compare all four terms"
      serviceType="IPTV Subscription"
      pageTitle={PAGE_TITLE}
      pageDescription={PAGE_DESCRIPTION}
    />
  );
}
