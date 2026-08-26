import type { Metadata } from "next";
import Link from "next/link";
import SeoLanding, {
  linkCls,
  type SeoFaq,
  type SeoSection,
} from "@/components/SeoLanding";
import { buildLandingMetadata } from "@/lib/seo";

/* Primary keyword: "iptv cost".
   Angle: total cost of ownership — subscription plus hardware plus the
   broadband headroom it assumes, modelled over five years. The price list
   itself and what drives it live on /iptv-price. */

const PAGE_PATH = "/iptv-cost";
const PAGE_TITLE = "IPTV Cost — The Full Total, Including What Nobody Mentions";
const PAGE_DESCRIPTION =
  "What IPTV really costs: the subscription, the one-off hardware, the broadband headroom it assumes, and a five-year model set against traditional UK television.";

export const metadata: Metadata = buildLandingMetadata({
  path: PAGE_PATH,
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  imageAlt: "IPTV cost — total cost of ownership over five years",
});

const SECTIONS: SeoSection[] = [
  {
    id: "subscription-cost",
    h2: "The subscription — the part everyone quotes",
    body: (
      <>
        <p>
          Four terms, differing only in length. Three months at £25.99 works
          out at £8.66 a month. Six months at £35.99 is £6.00. Twelve months at
          £49.99 is £4.17. Twenty-four months at £79.99 is £2.96.
        </p>
        <p>
          Every one of those includes the same roughly 37,000 live channels,
          around 198,000 films and series on demand, a seven-day programme
          guide with catch-up, native 4K on feeds genuinely produced in 4K,
          five simultaneous connections and support around the clock. There is
          no reduced tier and no sports add-on held back for higher plans.
        </p>
        <p>
          Two optional extras sit alongside: additional simultaneous
          connections at £2.42 a month, and a Secure Proxy add-on at £1.58 a
          month, both flat across every term. Neither is assumed and most
          households need neither.
        </p>
        <p>
          That is the figure quoted everywhere. It is also not the whole cost,
          which is what the rest of this page is for.
        </p>
      </>
    ),
  },
  {
    id: "hardware-cost",
    h2: "Hardware — a one-off, and often zero",
    body: (
      <>
        <p>
          You need a device capable of running a player application. For most
          households that is something already sitting under the television,
          in which case this line is £0 and can be ignored.
        </p>
        <p>
          If you do need something, the practical options run roughly as
          follows. A basic streaming stick sits at the bottom end and is
          perfectly adequate for HD viewing. A 4K-capable streaming stick or
          small box is the sensible middle, and is what most people should buy
          if they want UHD on the main screen. A higher-end streaming box or a
          dedicated MAG, Formuler or Enigma2 receiver sits at the top and is
          genuinely unnecessary for most viewers.
        </p>
        <p>
          Three things are worth saying plainly. This is a one-off purchase,
          not a recurring cost, so it amortises away quickly against a
          subscription measured in single-figure pounds per month. You buy it
          from a high-street retailer rather than from us, which means you can
          shop on price and you own it outright. And unlike a traditional
          set-top box there is nothing to return when you stop, and no
          non-return charge if you lose the packaging.
        </p>
        <p>
          The one piece of hardware genuinely worth spending on is not a
          streaming device at all: it is an Ethernet cable to the main screen.
          A few pounds removes the most common cause of buffering in this
          entire industry.
        </p>
      </>
    ),
  },
  {
    id: "broadband",
    h2: "Broadband — a cost you already have, with conditions",
    body: (
      <>
        <p>
          IPTV rides on your existing connection, so in most cases this is not
          an additional cost. It does, however, assume a certain amount of
          headroom, and it is dishonest to present a total that ignores the
          possibility that you would need to upgrade.
        </p>
        <p>
          The figures per stream are roughly: 8&ndash;10 Mbps for standard HD,
          about 15 Mbps for Full HD, and around 25 Mbps for a genuine 4K
          stream. Those are per simultaneous stream, so a household running
          three screens at once during a Saturday evening should be thinking in
          terms of 50&ndash;60 Mbps total to be comfortable.
        </p>
        <p>
          Most modern UK broadband clears that easily and the question does not
          arise. If you are on an older ADSL line, or a rural connection
          delivering under 20 Mbps, then either 4K on the main screen or
          multiple simultaneous streams will be constrained — and if you would
          need to upgrade your line to make IPTV work properly, that upgrade
          belongs in your cost comparison rather than being quietly omitted
          from it.
        </p>
        <p>
          Data caps are worth a thought too. Streaming is data-hungry: an hour
          of HD is roughly 3 GB and an hour of 4K considerably more. On an
          unlimited home connection this is irrelevant. On a capped or mobile
          connection it is not.
        </p>
      </>
    ),
  },
  {
    id: "vs-traditional",
    h2: "Set against traditional television",
    body: (
      <>
        <p>
          A UK household following entertainment, sport and film through
          conventional routes — a core package, a sports tier, possibly a film
          tier, plus two or three streaming services — commonly spends
          somewhere between £60 and £110 a month once every line is counted.
          The spread is wide because it depends heavily on what you take and
          what promotional rate you happen to be on, which is why the useful
          exercise is adding up your own direct debits rather than accepting
          anyone&rsquo;s headline comparison.
        </p>
        <p>
          Against that, an IPTV subscription at £2.96 to £8.66 a month plus a
          possible one-off device purchase is a different order of magnitude.
          Over a year the twelve-month plan totals £49.99; a conventional
          arrangement at the lower end of that range totals around £720.
        </p>
        <p>
          The comparison is not perfectly like-for-like and it is worth being
          straight about why. A traditional broadcaster funds original British
          production; a distribution service does not. A satellite feed does
          not depend on your broadband being up. And a conventional package
          usually includes an engineer who will come to your house. Those are
          real differences, discussed properly on the{" "}
          <Link href="/cheap-iptv-uk" className={linkCls}>
            cheap IPTV UK page
          </Link>
          .
        </p>
      </>
    ),
  },
  {
    id: "five-year-model",
    h2: "A five-year model",
    body: (
      <>
        <p>
          Subscription decisions are usually made monthly and lived with for
          years, so the longer view is the more honest one.
        </p>
        <p>
          <strong className="text-foreground font-semibold">
            IPTV over five years.
          </strong>{" "}
          Buying the twenty-four-month term repeatedly at £79.99 covers four
          years for £159.98, with a fifth year on the twelve-month plan at
          £49.99 — around £210 for five years, or roughly £3.50 a month
          averaged. Add a one-off 4K streaming device at the start and the
          total moves by well under a hundred pounds across the whole period.
        </p>
        <p>
          <strong className="text-foreground font-semibold">
            Conventional television over five years.
          </strong>{" "}
          At £60 a month — the optimistic end — that is £3,600. At £110 a month
          it is £6,600. Contractual price rises in the second year of each
          contract typically push the real figure above the starting rate
          rather than below it.
        </p>
        <p>
          The gap over five years therefore runs into thousands rather than
          hundreds. Whether that gap is worth the trade-offs listed above is a
          genuine judgement call, but it should at least be made with the right
          numbers in view.
        </p>
      </>
    ),
  },
  {
    id: "hidden-costs",
    h2: "Costs that appear elsewhere in this market",
    body: (
      <>
        <p>
          When totalling any provider, check for these. Each turns a cheap
          headline into something else.
        </p>
        <p>
          <strong className="text-foreground font-semibold">
            Per-connection charging.
          </strong>{" "}
          A single simultaneous stream on the entry plan, with each extra
          screen billed. For a household this is usually the largest hidden
          cost. Five are included here.
        </p>
        <p>
          <strong className="text-foreground font-semibold">
            Tiered content and per-event fees.
          </strong>{" "}
          Sport or film withheld from cheaper plans, or headline fixtures
          charged individually.
        </p>
        <p>
          <strong className="text-foreground font-semibold">
            Activation, setup or equipment fees.
          </strong>{" "}
          There is nothing to ship in this industry, so these are margin rather
          than cost. There are none here.
        </p>
        <p>
          <strong className="text-foreground font-semibold">
            Renewal step-ups.
          </strong>{" "}
          An introductory rate that becomes something higher. Nothing renews
          automatically here, so there is no mechanism for it.
        </p>
      </>
    ),
  },
  {
    id: "lowest-total",
    h2: "Getting to the lowest honest total",
    body: (
      <p>
        Four things, in order of impact. Take the longest term you are
        genuinely confident about, since that single choice moves your monthly
        rate by nearly two thirds. Use hardware you already own rather than
        buying something. Run Ethernet to the main screen instead of paying for
        a faster broadband package to overcome a wireless problem — the cable
        is a few pounds and the speed upgrade is monthly forever. And buy any
        extra connections at the point of purchase rather than mid-term, where
        they cost more. The term-by-term arithmetic is on the{" "}
        <Link href="/cheap-iptv-subscription" className={linkCls}>
          cheap IPTV subscription page
        </Link>{" "}
        and the price list itself on the{" "}
        <Link href="/iptv-price" className={linkCls}>
          IPTV price page
        </Link>
        .
      </p>
    ),
  },
];

const FAQS: readonly SeoFaq[] = [
  {
    q: "How much does IPTV cost per month?",
    a: "Between £2.96 and £8.66 depending on the term: £25.99 for three months, £35.99 for six, £49.99 for twelve and £79.99 for twenty-four. All four include identical channels, features and five simultaneous connections.",
  },
  {
    q: "Are there costs beyond the subscription?",
    a: "Potentially two. A device to run the player app, which is a one-off and often £0 because you already own something suitable. And broadband headroom — if your line is too slow for the streams you want, an upgrade belongs in your comparison.",
  },
  {
    q: "What internet speed does IPTV need?",
    a: "Roughly 8–10 Mbps per HD stream, about 15 Mbps for Full HD and around 25 Mbps for genuine 4K. Those are per simultaneous stream, so a household running three screens at once wants 50–60 Mbps total.",
  },
  {
    q: "Do I have to buy a set-top box?",
    a: "No, if you already own a Fire TV Stick, Apple TV, Android box, recent smart TV, phone, tablet or computer. If you need one, a 4K-capable streaming stick is the sensible middle option, bought from a high-street retailer and owned outright — with nothing to return when you stop.",
  },
  {
    q: "How does IPTV cost compare to a traditional TV package?",
    a: "A UK household running entertainment, sport, film and a few streaming services commonly spends £60–£110 a month. IPTV runs £2.96–£8.66. Over five years the difference typically runs into thousands, though a traditional package funds original production and does not depend on your broadband.",
  },
  {
    q: "How much data does IPTV use?",
    a: "Roughly 3 GB per hour of HD and considerably more for 4K. Irrelevant on an unlimited home connection, but worth calculating on a capped or mobile one.",
  },
  {
    q: "Are there activation or equipment fees?",
    a: "No. There is nothing to ship, so there is no delivery, activation or equipment charge. The only optional extras are additional simultaneous connections at £2.42 a month and the Secure Proxy add-on at £1.58 a month.",
  },
  {
    q: "What is the cheapest way to run IPTV long term?",
    a: "Take the longest term you are confident about — that alone cuts the monthly rate by nearly two thirds. Use hardware you already own, run Ethernet to the main screen rather than upgrading broadband to fix a wireless problem, and buy extra connections at purchase rather than mid-term.",
  },
] as const;

export default function IptvCostPage() {
  return (
    <SeoLanding
      pagePath={PAGE_PATH}
      breadcrumbName="IPTV Cost"
      badge="IPTV Cost"
      h1Lead="IPTV Cost —"
      h1Accent="The Total, Not Just the Subscription"
      intro={
        <p>
          The subscription is the number everyone quotes, and it is not the
          whole cost. This page adds the two lines usually left out — a
          possible one-off device, and the broadband headroom IPTV assumes —
          then models the five-year total against conventional UK television.
          For the price list itself and what drives it, see{" "}
          <Link href="/iptv-price" className={linkCls}>
            IPTV price
          </Link>
          .
        </p>
      }
      sections={SECTIONS}
      midCtaAfter={3}
      midCtaText="£2.96 to £8.66 a month, with nothing withheld from cheaper terms."
      midCtaLabel="See All Four Terms"
      faqs={FAQS}
      faqHeading="IPTV Cost"
      closingLead="Add up your own bill first,"
      closingAccent="then compare properly"
      closingBody={
        <p>
          Total every television line you currently pay — package, sport, film,
          streaming services, box charges — and set it against £49.99 a year.
          If the comparison holds up, the{" "}
          <Link href="/refund" className={linkCls}>
            thirty-day guarantee
          </Link>{" "}
          means testing it costs you nothing.
        </p>
      }
      ctaLabel="See Plans & Pricing"
      secondaryHref="/cheap-iptv-uk"
      secondaryLabel="Or compare against UK package prices"
      serviceType="IPTV Subscription"
      pageTitle={PAGE_TITLE}
      pageDescription={PAGE_DESCRIPTION}
    />
  );
}
