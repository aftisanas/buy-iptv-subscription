import type { Metadata } from "next";
import Link from "next/link";
import SeoLanding, {
  linkCls,
  type SeoFaq,
  type SeoSection,
} from "@/components/SeoLanding";
import { buildLandingMetadata } from "@/lib/seo";

/* Primary keyword: "iptv deals".
   Angle: how discounting works in this market and how to tell a real
   saving from a manufactured one. Deliberately does not invent scarcity or
   time-limited offers — the honest position is that the term structure is
   the discount. */

const PAGE_PATH = "/iptv-deals";
const PAGE_TITLE = "IPTV Deals — Which Savings Are Real and Which Are Theatre";
const PAGE_DESCRIPTION =
  "How IPTV discounting actually works, where the genuine savings sit, and how to recognise the fake-discount tactics used across this market before you buy.";

export const metadata: Metadata = buildLandingMetadata({
  path: PAGE_PATH,
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  imageAlt: "IPTV deals — genuine savings versus manufactured discounts",
});

const SECTIONS: SeoSection[] = [
  {
    id: "how-discounting-works",
    h2: "How discounting works in this market",
    body: (
      <>
        <p>
          Most industries discount to clear inventory or to fill capacity that
          would otherwise go unused. Neither applies here. Streaming capacity
          is provisioned in advance and a subscription is not a physical unit
          sitting in a warehouse, so there is no surplus to shift.
        </p>
        <p>
          What that means in practice is that a genuine IPTV discount can only
          come from one of two places. Either the provider is genuinely
          cheaper to run — its own infrastructure rather than a reseller
          margin, direct sales rather than affiliate commissions — or a longer
          commitment from you is worth enough to justify a lower rate.
          Everything else described as a deal is a presentation choice rather
          than a saving.
        </p>
        <p>
          This matters because the discount theatre in this market is unusually
          heavy. Struck-through prices, countdown clocks, percentages off a
          figure nobody ever paid, and offers that expire and then reappear the
          following week are all common. None of them make a subscription
          cheaper. Recognising them is worth more to you than any of them are.
        </p>
      </>
    ),
  },
  {
    id: "the-real-saving",
    h2: "Where the real saving actually is",
    body: (
      <>
        <p>
          The term structure. That is the whole answer, and it is not
          time-limited or conditional on anything.
        </p>
        <p>
          Three months costs £25.99, or £8.66 a month. Six months costs £35.99,
          or £6.00 a month — a 31% reduction in your monthly rate for £10 more
          up front. Twelve months costs £49.99, or £4.17 a month, another 30%
          off. Twenty-four months costs £79.99, or £2.96 a month, a further
          29%.
        </p>
        <p>
          Between the shortest and longest term the monthly rate falls by
          nearly two thirds. That is a larger reduction than any promotional
          offer you will find in this market, it is available every day of the
          year, and it requires nothing from you except deciding how far ahead
          you want to commit. There is no code to enter and no window to catch.
        </p>
        <p>
          The arithmetic behind each step, including where the break-even
          points fall, is set out on the{" "}
          <Link href="/cheap-iptv-subscription" className={linkCls}>
            cheap IPTV subscription page
          </Link>
          .
        </p>
      </>
    ),
  },
  {
    id: "fake-discounts",
    h2: "Recognising a manufactured discount",
    body: (
      <>
        <p>
          <strong className="text-foreground font-semibold">
            The struck-through price nobody paid.
          </strong>{" "}
          A high original price displayed alongside a lower current one, where
          the higher figure has never been charged to anyone. The percentage is
          arithmetic on a number that was invented to make the arithmetic look
          good.
        </p>
        <p>
          <strong className="text-foreground font-semibold">
            The permanent countdown.
          </strong>{" "}
          A timer showing minutes remaining on an offer, which resets when you
          reload the page or return the next day. If a price is genuinely
          sustainable it does not need to expire in eleven minutes; if it is
          not sustainable, the expiry is the least of your problems.
        </p>
        <p>
          <strong className="text-foreground font-semibold">
            The seasonal offer that never ends.
          </strong>{" "}
          Black Friday pricing in March. New Year pricing in July. If the
          promotional rate is the only rate, it is not promotional — it is the
          price.
        </p>
        <p>
          <strong className="text-foreground font-semibold">
            The lifetime subscription.
          </strong>{" "}
          The most expensive deal in this market despite appearing to be the
          cheapest. Servers, bandwidth and licensing are recurring costs that
          one payment cannot fund indefinitely. A lifetime offer is a business
          spending its future revenue today, and it has one ending.
        </p>
        <p>
          <strong className="text-foreground font-semibold">
            The bundle you did not want.
          </strong>{" "}
          Add-ons included &ldquo;free&rdquo; with a higher tier, where the
          tier costs more than the add-ons would have.
        </p>
      </>
    ),
  },
  {
    id: "add-on-value",
    h2: "The add-ons, and whether they represent value",
    body: (
      <>
        <p>
          Two optional extras exist. Both are priced per term, and both work
          out at a flat monthly rate regardless of which term you choose —
          which is itself worth noting, because it means neither is being used
          to make a longer term look artificially attractive.
        </p>
        <p>
          <strong className="text-foreground font-semibold">
            Extra simultaneous connections.
          </strong>{" "}
          Five are included as standard. Beyond that, each additional
          connection is £7.25 on the three-month term, £14.50 on six months,
          £29.00 on twelve and £58.00 on twenty-four — £2.42 a month in every
          case. Worth taking only if your household genuinely runs more than
          five screens at the same moment, which most do not.
        </p>
        <p>
          <strong className="text-foreground font-semibold">
            The Secure Proxy add-on.
          </strong>{" "}
          £4.75, £9.50, £19.00 and £38.00 across the four terms, which is £1.58
          a month throughout. Relevant if you are on a shared, monitored or
          restricted network and not otherwise.
        </p>
        <p>
          Both cost less bought at the point of purchase than added mid-term,
          because a mid-term addition is priced for the remainder of the term
          rather than at the term rate. That is the one genuine timing
          incentive in the whole pricing structure, and it is worth acting on.
        </p>
      </>
    ),
  },
  {
    id: "what-we-dont-do",
    h2: "What this site deliberately does not do",
    body: (
      <>
        <p>
          It is easy to write a page about spotting fake discounts and then run
          them. So, specifically: there are no countdown timers here, no
          struck-through prices representing figures nobody paid, no
          promotional codes, no seasonal sales and no lifetime offers.
        </p>
        <p>
          The four prices are the four prices. They are published, they apply
          every day, and the only thing that changes what you pay per month is
          which term you pick. If you come back next week the numbers will be
          the same, which removes any reason to rush a decision you have not
          finished thinking about.
        </p>
        <p>
          The genuine reason to decide sooner rather than later has nothing to
          do with pricing: it is that the thirty-day guarantee starts when you
          buy, and the window is most useful when it covers several peak
          weekends. Buying at the start of a month with a full sporting
          calendar ahead gives you more to test than buying in a quiet week.
        </p>
      </>
    ),
  },
  {
    id: "comparing-offers",
    h2: "Comparing offers across providers properly",
    body: (
      <>
        <p>
          When you are weighing several providers, convert everything to the
          same unit before comparing. Two steps do most of the work.
        </p>
        <p>
          <strong className="text-foreground font-semibold">
            Reduce every offer to a monthly rate,
          </strong>{" "}
          including any add-ons you would actually need. A provider charging
          less per month but including one connection is more expensive than
          one charging more and including five, once you have added what your
          household requires.
        </p>
        <p>
          <strong className="text-foreground font-semibold">
            Then check what the price is protected by.
          </strong>{" "}
          A cheap subscription with a seven-day refund window is worth less
          than a slightly dearer one with thirty days, because the shorter
          window expires before you have tested the thing most likely to
          disappoint you. Price without a usable refund window is not a saving,
          it is exposure. The{" "}
          <Link href="/best-iptv-subscription" className={linkCls}>
            evaluation guide
          </Link>{" "}
          sets out the full seven-point test.
        </p>
      </>
    ),
  },
  {
    id: "best-value",
    h2: "The best-value option, stated plainly",
    body: (
      <p>
        For most households it is twelve months at £49.99, which is £4.17 a
        month. It captures the large majority of the available saving without
        requiring you to have a view on the next two years, and its break-even
        against the six-month plan falls at roughly eight and a half months. If
        you have never run IPTV on your broadband, take three months at £25.99
        instead and lengthen the term once you know it works. If you are
        confident about two years, £2.96 a month on the twenty-four-month term
        is the lowest rate available anywhere in this pricing table. The{" "}
        <Link href="/cheapest-iptv" className={linkCls}>
          cheapest IPTV page
        </Link>{" "}
        works through the entry-level route in more detail.
      </p>
    ),
  },
];

const FAQS: readonly SeoFaq[] = [
  {
    q: "What is the best IPTV deal available?",
    a: "The term structure itself. Twenty-four months at £79.99 works out at £2.96 a month against £8.66 on the three-month plan — a reduction of nearly two thirds. It is available every day and requires no code or promotional window.",
  },
  {
    q: "Are there discount codes or seasonal sales?",
    a: "No. There are four published prices that apply every day of the year. No codes, no countdown timers, no struck-through prices and no seasonal offers. If you return next week the numbers will be identical.",
  },
  {
    q: "Why are lifetime IPTV deals a bad idea?",
    a: "Because servers, bandwidth and content licensing are recurring costs a single payment cannot fund indefinitely. A lifetime offer spends future revenue on present operations, which has one ending — usually with the remainder of your access disappearing.",
  },
  {
    q: "How do I spot a fake IPTV discount?",
    a: "Look for struck-through prices nobody ever paid, countdown timers that reset on reload, seasonal sales running out of season, lifetime offers, and bundles where the higher tier costs more than the included add-ons would have separately.",
  },
  {
    q: "Do add-ons get cheaper on longer terms?",
    a: "They stay flat per month. Extra connections are £2.42 a month on every term and the Secure Proxy add-on is £1.58 a month on every term. Neither is used to make longer terms look artificially attractive.",
  },
  {
    q: "Is there any advantage to buying sooner?",
    a: "Not on price — the four prices do not change. The only real timing consideration is that the thirty-day guarantee starts when you buy, so buying ahead of a busy sporting period gives you more to test within the window.",
  },
  {
    q: "How should I compare deals between providers?",
    a: "Convert everything to a monthly rate including any add-ons you would actually need, since a low headline with one connection is dearer than a higher one including five. Then check the refund window — a cheap plan protected by seven days is worth less than a dearer one protected by thirty.",
  },
  {
    q: "Which term is the best value overall?",
    a: "Twelve months at £49.99 for most households — £4.17 a month, capturing most of the available saving without needing a two-year view. Three months if you have never run IPTV on your connection; twenty-four months if you are confident about the next two years.",
  },
] as const;

export default function IptvDealsPage() {
  return (
    <SeoLanding
      pagePath={PAGE_PATH}
      breadcrumbName="IPTV Deals"
      badge="IPTV Deals"
      h1Lead="IPTV Deals —"
      h1Accent="No Codes, No Countdowns, No Theatre"
      intro={
        <p>
          There are no discount codes on this site, no countdown timers and no
          seasonal sales. The genuine saving is built into the term structure:
          £8.66 a month on the shortest plan down to £2.96 on the longest, every
          day of the year. This page explains why that is the only real
          discount in this market, and how to recognise the manufactured ones
          you will meet everywhere else.
        </p>
      }
      sections={SECTIONS}
      midCtaAfter={2}
      midCtaText="Four published prices, every day — nothing expires in eleven minutes."
      midCtaLabel="See the Four Terms"
      faqs={FAQS}
      faqHeading="IPTV Deals"
      closingLead="The discount is the term,"
      closingAccent="not a countdown clock"
      closingBody={
        <p>
          Take your time deciding — the prices will be the same next week. When
          you are ready, the{" "}
          <Link href="/refund" className={linkCls}>
            thirty-day guarantee
          </Link>{" "}
          covers every term equally, so the choice is about how far ahead you
          want to commit rather than how much risk you are taking.
        </p>
      }
      ctaLabel="See Plans From £2.96/month"
      secondaryHref="/cheap-iptv-subscription"
      secondaryLabel="Or see the term-by-term arithmetic"
      serviceType="IPTV Subscription"
      pageTitle={PAGE_TITLE}
      pageDescription={PAGE_DESCRIPTION}
    />
  );
}
