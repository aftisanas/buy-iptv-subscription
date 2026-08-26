import type { Metadata } from "next";
import Link from "next/link";
import SeoLanding, {
  linkCls,
  type SeoFaq,
  type SeoSection,
} from "@/components/SeoLanding";
import { buildLandingMetadata } from "@/lib/seo";

/* Primary keyword: "uk iptv subscriptions".
   Angle: the comparison workflow itself — how to build a shortlist, what to
   put in the table, how to score it and how to decide. Distinct from
   /iptv-subscriptions-uk (market categories) and /best-iptv-subscription-uk
   (the criteria themselves). */

const PAGE_PATH = "/uk-iptv-subscriptions";
const PAGE_TITLE =
  "UK IPTV Subscriptions — How to Compare Them Without Guessing";
const PAGE_DESCRIPTION =
  "A repeatable way to compare UK IPTV subscriptions: building a shortlist, the eight columns worth putting in your table, how to score them and how to decide.";

export const metadata: Metadata = buildLandingMetadata({
  path: PAGE_PATH,
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  imageAlt: "UK IPTV subscriptions — a comparison workflow for buyers",
});

const SECTIONS: SeoSection[] = [
  {
    id: "why-comparison-fails",
    h2: "Why most comparisons produce the wrong answer",
    body: (
      <>
        <p>
          People usually compare IPTV subscriptions by opening several tabs and
          reading feature lists. That fails for a specific reason: the feature
          lists are written by the sellers, they emphasise the same handful of
          metrics, and the metrics they emphasise are the ones least connected
          to whether you will still be happy in month six.
        </p>
        <p>
          Channel count dominates every comparison and is close to
          meaningless. Resolution claims are unverifiable before purchase.
          Price is comparable only after adjusting for what is included, which
          almost nobody does. Meanwhile the things that actually determine
          satisfaction — capacity at peak, whether support answers, whether you
          can get your money back — appear on no comparison table because they
          are harder to put in a column.
        </p>
        <p>
          The fix is to build your own table with columns chosen for
          decisiveness rather than availability, and to accept that two of the
          most important columns can only be filled in after you have bought.
          That is not a flaw in the method; it is why the refund window is a
          selection criterion rather than a footnote.
        </p>
      </>
    ),
  },
  {
    id: "build-shortlist",
    h2: "Step one — build a shortlist of three or four",
    body: (
      <>
        <p>
          Do not compare twenty. The market is large enough that exhaustive
          comparison is impossible and most of it is undifferentiated, so the
          objective is a small shortlist filtered on things you can check
          quickly.
        </p>
        <p>
          Three filters remove the majority of candidates in a few minutes
          each. <strong className="text-foreground font-semibold">
            Does it publish refund terms in full,
          </strong>{" "}
          with a stated window, exclusions and processing time? If not, discard
          it — this correlates with everything else more strongly than any
          other single signal.{" "}
          <strong className="text-foreground font-semibold">
            Does it include enough simultaneous connections
          </strong>{" "}
          for your household without add-ons, or state clearly what extras
          cost?{" "}
          <strong className="text-foreground font-semibold">
            Are its claims plausible
          </strong>{" "}
          — a channel count that is precise rather than spectacular, and a
          resolution claim that admits most broadcasts are not 4K?
        </p>
        <p>
          Anything surviving all three is worth a place on your table. In
          practice this usually leaves three or four names out of a page of
          search results, which is exactly the number you can actually assess
          properly.
        </p>
      </>
    ),
  },
  {
    id: "the-columns",
    h2: "Step two — the eight columns worth having",
    body: (
      <>
        <p>
          <strong className="text-foreground font-semibold">
            1. Monthly rate, normalised.
          </strong>{" "}
          Total price divided by months, plus the cost of any connections you
          would actually need. This single normalisation reorders most
          comparisons.
        </p>
        <p>
          <strong className="text-foreground font-semibold">
            2. Included simultaneous connections.
          </strong>{" "}
          Not devices — concurrent streams.
        </p>
        <p>
          <strong className="text-foreground font-semibold">
            3. Refund window length,
          </strong>{" "}
          and whether renewals differ from first purchases.
        </p>
        <p>
          <strong className="text-foreground font-semibold">
            4. Pre-sales reply time.
          </strong>{" "}
          Message each candidate the same specific question at an awkward hour
          and record how long each takes. This is the highest-value column on
          the table and it costs nothing.
        </p>
        <p>
          <strong className="text-foreground font-semibold">
            5. Server answer.
          </strong>{" "}
          Ask where the edge servers sit. Record whether you got specifics,
          vagueness or a change of subject.
        </p>
        <p>
          <strong className="text-foreground font-semibold">
            6. UK specifics.
          </strong>{" "}
          Regional variants, +1 timeshift channels, a seven-day guide on UK
          time with working catch-up.
        </p>
        <p>
          <strong className="text-foreground font-semibold">
            7. Your own twenty channels.
          </strong>{" "}
          Present or absent. Not the headline count.
        </p>
        <p>
          <strong className="text-foreground font-semibold">
            8. Peak-time stability.
          </strong>{" "}
          Blank until you have bought — which is why column three matters.
        </p>
      </>
    ),
  },
  {
    id: "free-tests",
    h2: "Step three — run the two tests that cost nothing",
    body: (
      <>
        <p>
          Columns four and five can both be filled in before spending a penny,
          and together they are more predictive than everything else you can
          gather pre-purchase.
        </p>
        <p>
          <strong className="text-foreground font-semibold">
            The support test.
          </strong>{" "}
          Send every candidate the same question, at a genuinely inconvenient
          hour — a Sunday evening, a bank holiday. Make it specific enough that
          a template cannot answer it: how they handle a particular device you
          own, or what happens if a named channel drops mid-fixture. Record the
          reply time and whether the answer engages with what you asked. A
          provider that takes six hours to answer a prospective customer will
          not take six minutes to answer an existing one.
        </p>
        <p>
          <strong className="text-foreground font-semibold">
            The infrastructure test.
          </strong>{" "}
          Ask where the edge servers are located. This is a normal question for
          a provider running its own network and an uncomfortable one for a
          reseller. You are not verifying the answer — you are observing
          whether they can give one.
        </p>
        <p>
          Run both before you look at price again. It is remarkable how often
          the cheapest candidate on a table stops looking attractive after
          these two columns are filled in.
        </p>
      </>
    ),
  },
  {
    id: "scoring",
    h2: "Step four — score without pretending to be precise",
    body: (
      <>
        <p>
          Resist the urge to build a weighted numerical model. The inputs are
          not precise enough to justify it and it produces false confidence. A
          three-band judgement per column is sufficient and more honest.
        </p>
        <p>
          Mark each cell good, acceptable or poor. Then apply two rules. First,
          any candidate scoring poor on refund terms, connections or pre-sales
          support is out regardless of how it scores elsewhere — those three
          are disqualifying rather than tradeable, because each of them
          determines whether you can recover from a bad outcome. Second, among
          the survivors, price is the tiebreaker rather than the driver.
        </p>
        <p>
          This usually leaves one or two candidates. If it leaves none, your
          shortlist was drawn from too shallow a pool and it is worth widening
          the search rather than lowering the standard on the three
          disqualifying columns.
        </p>
      </>
    ),
  },
  {
    id: "final-test",
    h2: "Step five — buy the shortest term and fill in column eight",
    body: (
      <>
        <p>
          Peak-time stability is the single most important attribute and it is
          the one nobody can show you in advance. The only honest way to fill
          that column is to buy and watch.
        </p>
        <p>
          Take the shortest term your chosen candidate offers — here that is
          three months at £25.99 — and treat the refund window as the test
          period rather than as a safety net you hope not to use. Watch at
          Saturday teatime and Sunday afternoon specifically, because that is
          when the British audience load spikes and capacity problems surface.
          Run all your connections at once. Check a genuinely 4K-produced
          broadcast on the main screen. Message support once with a real
          problem.
        </p>
        <p>
          If it passes, move to a longer term to drop the monthly rate — the
          step from three months to twelve takes £8.66 a month down to £4.17.
          If it fails, claim the refund inside the window and move to the
          second name on your table. The whole exercise then costs you nothing
          but a few weeks.
        </p>
      </>
    ),
  },
  {
    id: "our-columns",
    h2: "Our own entries, so you can start the table",
    body: (
      <p>
        For whatever it is worth coming from us: four terms at £25.99, £35.99,
        £49.99 and £79.99, which normalise to £8.66, £6.00, £4.17 and £2.96 a
        month. Five simultaneous connections included on every term, with
        extras at £2.42 a month. A thirty-day refund window on first purchases
        and seven days on renewals, published in full on the{" "}
        <Link href="/refund" className={linkCls}>
          refund page
        </Link>
        . Support in the same WhatsApp thread you order in, staffed around the
        clock — test it before you buy rather than taking that on trust. Full
        UK coverage including regional variants and timeshift. Column eight is
        for you to fill in, which is what the thirty days are for. The
        underlying criteria behind each column are set out on the{" "}
        <Link href="/best-iptv-subscription" className={linkCls}>
          evaluation guide
        </Link>
        .
      </p>
    ),
  },
];

const FAQS: readonly SeoFaq[] = [
  {
    q: "How should I compare UK IPTV subscriptions?",
    a: "Build a shortlist of three or four filtered on published refund terms, included connections and plausible claims. Then compare on normalised monthly rate, connections, refund window, pre-sales reply time, whether they can say where their servers are, UK specifics and your own twenty channels.",
  },
  {
    q: "Why is channel count a bad comparison metric?",
    a: "Because large counts are inflated with duplicate feeds, dead entries and regional variants counted separately. What matters is whether the twenty channels your household actually watches are present and stable — which is a different and far shorter list.",
  },
  {
    q: "What can I test before paying anything?",
    a: "Two things, and they are the most predictive available. Message each candidate the same specific question at an awkward hour and record reply times. And ask where their edge servers are — providers running their own infrastructure answer with specifics, resellers deflect.",
  },
  {
    q: "Which factors should disqualify a provider outright?",
    a: "Poor scores on refund terms, included connections or pre-sales support. Those three are disqualifying rather than tradeable, because each determines whether you can recover from a bad outcome. Among survivors, price is a tiebreaker rather than the driver.",
  },
  {
    q: "How do I compare prices fairly between providers?",
    a: "Divide total price by months, then add the cost of any connections you would actually need. A provider at £3 a month including one stream is more expensive than one at £4.17 including five, for any household with more than one television.",
  },
  {
    q: "Can I test peak-time stability before buying?",
    a: "No, which is exactly why the refund window is a selection criterion rather than a footnote. Buy the shortest term, watch at Saturday teatime and Sunday afternoon, and treat the window as the test period rather than a safety net.",
  },
  {
    q: "How long should a refund window be to be useful?",
    a: "Long enough to cover several peak weekends. Seven days expires before you have tested the thing most likely to disappoint you. Thirty days covers roughly four weekends, which is enough to form a real view.",
  },
  {
    q: "What if no provider passes my shortlist filters?",
    a: "Widen the search rather than lowering the standard on refund terms, connections or support. Those three are the ones protecting you, and a shortlist that fails all of them usually means it was drawn from too shallow a pool.",
  },
] as const;

export default function UkIptvSubscriptionsPage() {
  return (
    <SeoLanding
      pagePath={PAGE_PATH}
      breadcrumbName="UK IPTV Subscriptions"
      badge="UK IPTV Subscriptions"
      h1Lead="UK IPTV Subscriptions —"
      h1Accent="Build the Table Yourself"
      intro={
        <p>
          Comparing IPTV subscriptions by reading feature lists produces the
          wrong answer, because the metrics sellers emphasise are the ones
          least connected to whether you will still be happy in month six.
          This is a repeatable workflow instead: how to filter down to three or
          four candidates, the eight columns worth comparing, the two tests
          that cost nothing, and how to decide.
        </p>
      }
      sections={SECTIONS}
      midCtaAfter={3}
      midCtaText="Test us before you buy — that is what columns four and five are for."
      midCtaLabel="See Our Numbers"
      faqs={FAQS}
      faqHeading="Comparing UK IPTV Subscriptions"
      closingLead="Run the two free tests"
      closingAccent="on every name, including ours"
      closingBody={
        <p>
          Message us a hard question on a Sunday evening and time the reply.
          Ask where the servers are. Read the{" "}
          <Link href="/refund" className={linkCls}>
            refund terms
          </Link>
          . If we come out of your table ahead, three months at £25.99 is the
          low-risk way to fill in the last column.
        </p>
      }
      ctaLabel="See Plans & Pricing"
      secondaryHref="/iptv-subscriptions-uk"
      secondaryLabel="Or read about the four kinds of provider"
      serviceType="IPTV Subscription"
      pageTitle={PAGE_TITLE}
      pageDescription={PAGE_DESCRIPTION}
    />
  );
}
