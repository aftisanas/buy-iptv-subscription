import type { Metadata } from "next";
import Link from "next/link";
import SeoLanding, {
  linkCls,
  type SeoFaq,
  type SeoSection,
} from "@/components/SeoLanding";
import { buildLandingMetadata } from "@/lib/seo";

/* Primary keyword: "cheapest iptv".
   Angle: the superlative question answered literally — which single option is
   cheapest, on which measure, and when cheapest is the wrong target. Term
   arithmetic lives on /cheap-iptv-subscription; market economics on
   /cheap-iptv. */

const PAGE_PATH = "/cheapest-iptv";
const PAGE_TITLE = "Cheapest IPTV — Two Different Answers, Depending on How You Measure";
const PAGE_DESCRIPTION =
  "The cheapest IPTV option depends on whether you mean lowest total outlay or lowest monthly rate. Both answers, the hidden costs to check, and when cheapest is the wrong target.";

export const metadata: Metadata = buildLandingMetadata({
  path: PAGE_PATH,
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  imageAlt: "Cheapest IPTV — lowest outlay versus lowest monthly rate",
});

const SECTIONS: SeoSection[] = [
  {
    id: "two-answers",
    h2: "Cheapest has two meanings, and they point different ways",
    body: (
      <>
        <p>
          Ask for the cheapest IPTV and there are two defensible answers
          depending on which number you are minimising. Being clear about which
          one you mean saves a lot of confusion.
        </p>
        <p>
          <strong className="text-foreground font-semibold">
            Lowest total outlay: three months at £25.99.
          </strong>{" "}
          This is the smallest sum you can hand over to start watching. If your
          constraint is what leaves your account today, this is the answer.
        </p>
        <p>
          <strong className="text-foreground font-semibold">
            Lowest monthly rate: twenty-four months at £79.99.
          </strong>{" "}
          That works out at £2.96 a month, which is barely a third of the
          three-month plan&rsquo;s £8.66. If your constraint is what television
          costs you per month over time, this is the answer, and it is not
          close.
        </p>
        <p>
          Most people asking for the cheapest option mean the first and would
          be better served by the second. The three-month plan is the cheapest
          way to start; it is the most expensive way to continue. If you renew
          a three-month plan four times you will have spent £103.96 to cover
          the same year the twelve-month plan covers for £49.99.
        </p>
      </>
    ),
  },
  {
    id: "the-entry-plan",
    h2: "What the £25.99 plan actually includes",
    body: (
      <>
        <p>
          The thing worth checking about any cheapest option is what has been
          removed to reach the price. Here, nothing has.
        </p>
        <p>
          The three-month plan carries roughly 37,000 live channels with full
          UK coverage, around 198,000 films and series on demand, a seven-day
          electronic programme guide with catch-up, HD and Full HD throughout
          and native 4K on every feed genuinely produced in 4K, five
          simultaneous connections, support staffed around the clock, and the
          same 30-day money-back guarantee as every other plan.
        </p>
        <p>
          That list is identical to the twenty-four-month plan&rsquo;s. There
          is no reduced tier, no sports add-on withheld from cheaper buyers, no
          resolution cap and no per-event charge for headline fixtures. The
          only thing the entry plan gives you less of is time.
        </p>
        <p>
          This is unusual enough in the wider subscription market to be worth
          verifying rather than taking on trust — the{" "}
          <Link href="/#pricing" className={linkCls}>
            pricing table
          </Link>{" "}
          lists the inclusions against each term so you can compare them
          directly.
        </p>
      </>
    ),
  },
  {
    id: "cost-per-month",
    h2: "The cost per month at every term",
    body: (
      <>
        <p>
          Set out plainly, because the headline prices are not comparable
          without doing the division.
        </p>
        <p>
          Three months at £25.99 is{" "}
          <strong className="text-foreground font-semibold">
            £8.66 a month
          </strong>
          . Six months at £35.99 is{" "}
          <strong className="text-foreground font-semibold">
            £6.00 a month
          </strong>
          . Twelve months at £49.99 is{" "}
          <strong className="text-foreground font-semibold">
            £4.17 a month
          </strong>
          . Twenty-four months at £79.99 is{" "}
          <strong className="text-foreground font-semibold">
            £2.96 a month
          </strong>
          .
        </p>
        <p>
          Each step roughly halves your remaining exposure to the previous
          rate. Moving from three to six months cuts the monthly figure by 31%
          for £10 more up front. Six to twelve cuts it another 30% for £14.
          Twelve to twenty-four cuts it a further 29% for £30. The proportional
          gain is remarkably consistent, which means the decision is not really
          about value — every step is good value — but about how far ahead you
          are willing to commit.
        </p>
      </>
    ),
  },
  {
    id: "hidden-costs",
    h2: "The hidden costs that make a cheap plan expensive",
    body: (
      <>
        <p>
          When comparing cheapest options across providers, the headline is
          rarely the whole figure. These are the four places the rest of it
          usually hides.
        </p>
        <p>
          <strong className="text-foreground font-semibold">
            Connection limits.
          </strong>{" "}
          The most common one by far. A very low headline price often buys a
          single simultaneous stream, which is unworkable for a household. By
          the time you have added enough connections to be usable, the cheap
          plan is not cheap. Five are included here on every term.
        </p>
        <p>
          <strong className="text-foreground font-semibold">
            Tiered content.
          </strong>{" "}
          Sport or film held back for a higher plan, or headline fixtures
          charged per event. Check what the entry tier actually contains rather
          than what the provider&rsquo;s channel count claims.
        </p>
        <p>
          <strong className="text-foreground font-semibold">
            Setup, activation and equipment fees.
          </strong>{" "}
          There is nothing to ship in this industry, so any of these is a
          margin line rather than a cost. There are none here.
        </p>
        <p>
          <strong className="text-foreground font-semibold">
            Renewal step-ups.
          </strong>{" "}
          An introductory rate that quietly becomes something else. Nothing
          renews automatically here, so there is no mechanism for it — but on
          any provider that does auto-renew, find the post-introductory price
          before you buy.
        </p>
      </>
    ),
  },
  {
    id: "cheapest-vs-value",
    h2: "When cheapest is the wrong target",
    body: (
      <>
        <p>
          A page about the cheapest option should be willing to say when
          cheapest is not what you want.
        </p>
        <p>
          <strong className="text-foreground font-semibold">
            If your household runs more than five screens at once.
          </strong>{" "}
          Buy the extra connections at the point of purchase. They cost £2.42 a
          month whichever term you choose, and adding them mid-term costs more
          than adding them at the start.
        </p>
        <p>
          <strong className="text-foreground font-semibold">
            If you already know IPTV works on your connection.
          </strong>{" "}
          Taking the three-month plan out of caution is paying £4.49 a month
          extra for insurance you do not need. The thirty-day guarantee already
          covers the scenario you are worried about.
        </p>
        <p>
          <strong className="text-foreground font-semibold">
            If you are on a shared or monitored network
          </strong>{" "}
          and privacy matters to you, the Secure Proxy add-on at £1.58 a month
          is a genuine cost worth paying rather than an upsell to dodge.
        </p>
        <p>
          The reverse also holds: if you have never run IPTV in your home, do
          not reach for the two-year plan because the monthly figure looks
          attractive. Start on three months, test it properly across a couple
          of peak weekends, and lengthen the term once you know.
        </p>
      </>
    ),
  },
  {
    id: "cheapest-safely",
    h2: "Buying the cheapest option safely",
    body: (
      <>
        <p>
          The risk with any cheapest-in-market purchase is not the price, it is
          what the price signals. Two checks cover most of it and both are free.
        </p>
        <p>
          First, find the refund terms before you pay and read the actual
          window. A seven-day window is too short to test peak-time
          performance, which is the thing most likely to disappoint you. Ours
          are on the{" "}
          <Link href="/refund" className={linkCls}>
            refund page
          </Link>{" "}
          — thirty days on first purchases, seven on renewals, stated openly.
        </p>
        <p>
          Second, message support a real question at an awkward hour before
          spending anything and time the reply. Pre-sales responsiveness
          predicts post-sales responsiveness well, and a cheap provider that
          cannot answer a prospect will not answer a customer.
        </p>
        <p>
          If a provider passes both and its price is still the lowest you have
          found, the price is probably genuine. The full set of warning signs
          is on the{" "}
          <Link href="/cheap-iptv" className={linkCls}>
            cheap IPTV page
          </Link>
          .
        </p>
      </>
    ),
  },
  {
    id: "recommendation",
    h2: "The straight recommendation",
    body: (
      <p>
        If you have never used IPTV on your broadband before, buy three months
        at £25.99 — the cheapest way to find out, with thirty days to change
        your mind. If you have, buy twelve months at £49.99; at £4.17 a month
        it captures most of the available saving without needing a two-year
        view, and it is the term most households end up on. Take the
        twenty-four-month plan at £2.96 a month only if you are genuinely
        confident about the next two years, because its payback period runs to
        around nineteen months. Whichever you choose, decide on extra
        connections before you order. The full arithmetic is on the{" "}
        <Link href="/cheap-iptv-subscription" className={linkCls}>
          cheap IPTV subscription page
        </Link>
        .
      </p>
    ),
  },
];

const FAQS: readonly SeoFaq[] = [
  {
    q: "What is the cheapest IPTV subscription?",
    a: "It depends on the measure. Lowest total outlay is three months at £25.99. Lowest monthly rate is twenty-four months at £79.99, which is £2.96 a month against the three-month plan's £8.66.",
  },
  {
    q: "Does the cheapest plan have fewer channels?",
    a: "No. The £25.99 three-month plan carries the same roughly 37,000 live channels, 198,000 on-demand titles, seven-day guide, native 4K, five simultaneous connections, 24/7 support and 30-day guarantee as every other term. Only the length differs.",
  },
  {
    q: "Is it cheaper to keep renewing a three-month plan?",
    a: "No, considerably more expensive. Four three-month terms cost £103.96 to cover the same year the twelve-month plan covers for £49.99. The short plan is the cheapest way to start and the most expensive way to continue.",
  },
  {
    q: "What hidden costs should I check on cheap providers?",
    a: "Connection limits are the biggest — a very low price often buys a single simultaneous stream. Then tiered content with sport held back, setup or activation fees, and introductory rates that step up at renewal. None of those apply here.",
  },
  {
    q: "How much are extra connections?",
    a: "Five are included. Additional simultaneous connections cost £2.42 a month whichever term you pick — £7.25 on three months, £14.50 on six, £29.00 on twelve, £58.00 on twenty-four. Buying at the point of purchase costs less than adding mid-term.",
  },
  {
    q: "When should I not choose the cheapest option?",
    a: "If your household runs more than five screens at once, buy extra connections up front. If you already know IPTV works on your connection, the three-month plan costs £4.49 a month extra for insurance the 30-day guarantee already provides.",
  },
  {
    q: "How do I know a cheap provider is genuine?",
    a: "Two free checks. Read the refund terms before paying — a seven-day window is too short to test peak-time performance. Then message support a real question at an awkward hour and time the reply. A provider that cannot answer a prospect will not answer a customer.",
  },
  {
    q: "Which term do most households end up on?",
    a: "Twelve months at £49.99. At £4.17 a month it captures most of the available saving without requiring a two-year commitment, and its break-even against the six-month plan falls at roughly eight and a half months.",
  },
] as const;

export default function CheapestIptvPage() {
  return (
    <SeoLanding
      pagePath={PAGE_PATH}
      breadcrumbName="Cheapest IPTV"
      badge="Cheapest IPTV"
      h1Lead="Cheapest IPTV —"
      h1Accent="£25.99 to Start, £2.96 a Month to Stay"
      intro={
        <p>
          There are two honest answers to which IPTV is cheapest, and they
          point in opposite directions. The smallest sum you can pay today is
          £25.99 for three months. The lowest ongoing rate is £2.96 a month on
          the two-year term. Most people asking the question mean the first and
          are better served by the second — here is the arithmetic, plus the
          hidden costs worth checking on any provider claiming to be cheapest.
        </p>
      }
      sections={SECTIONS}
      midCtaAfter={3}
      midCtaText="Nothing withheld from the entry plan — same line-up on all four terms."
      midCtaLabel="Compare Every Term"
      faqs={FAQS}
      faqHeading="Cheapest IPTV"
      closingLead="Cheapest to start"
      closingAccent="or cheapest to keep"
      closingBody={
        <p>
          Three months at £25.99 if you are finding out whether IPTV works for
          you; twelve months at £4.17 a month if you already know it does.
          Either way the{" "}
          <Link href="/refund" className={linkCls}>
            thirty-day guarantee
          </Link>{" "}
          applies identically, so the early risk does not change with the term.
        </p>
      }
      ctaLabel="See Every Price"
      secondaryHref="/cheap-iptv"
      secondaryLabel="Or read why IPTV costs so little"
      serviceType="IPTV Subscription"
      pageTitle={PAGE_TITLE}
      pageDescription={PAGE_DESCRIPTION}
    />
  );
}
