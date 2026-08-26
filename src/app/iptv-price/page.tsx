import type { Metadata } from "next";
import Link from "next/link";
import SeoLanding, {
  linkCls,
  type SeoFaq,
  type SeoSection,
} from "@/components/SeoLanding";
import { buildLandingMetadata } from "@/lib/seo";

/* Primary keyword: "iptv price".
   Angle: the price list itself and the mechanics behind it — what determines
   an IPTV price, why providers differ so widely, and how add-ons are priced.
   Total cost of ownership lives on /iptv-cost. */

const PAGE_PATH = "/iptv-price";
const PAGE_TITLE = "IPTV Price — The Full List and What Sets It";
const PAGE_DESCRIPTION =
  "Every IPTV price in one place: the four terms, add-on pricing, what determines an IPTV price, and why quotes across the market vary so widely.";

export const metadata: Metadata = buildLandingMetadata({
  path: PAGE_PATH,
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  imageAlt: "IPTV price list — four subscription terms and add-on pricing",
});

const SECTIONS: SeoSection[] = [
  {
    id: "the-price-list",
    h2: "The price list in full",
    body: (
      <>
        <p>
          <strong className="text-foreground font-semibold">
            Three months — £25.99.
          </strong>{" "}
          £8.66 a month.
        </p>
        <p>
          <strong className="text-foreground font-semibold">
            Six months — £35.99.
          </strong>{" "}
          £6.00 a month.
        </p>
        <p>
          <strong className="text-foreground font-semibold">
            Twelve months — £49.99.
          </strong>{" "}
          £4.17 a month.
        </p>
        <p>
          <strong className="text-foreground font-semibold">
            Twenty-four months — £79.99.
          </strong>{" "}
          £2.96 a month.
        </p>
        <p>
          Each includes roughly 37,000 live channels, around 198,000 films and
          series on demand, a seven-day programme guide with catch-up, HD and
          Full HD throughout with native 4K where the broadcast is genuinely
          produced in 4K, five simultaneous connections, 24/7 support and a
          30-day money-back guarantee on first purchases. The inclusions do not
          vary by term — only the price and the length do.
        </p>
      </>
    ),
  },
  {
    id: "add-on-pricing",
    h2: "Add-on pricing",
    body: (
      <>
        <p>
          Two optional extras, both priced per term rather than per month, and
          both working out at a flat monthly figure whichever term you pick.
        </p>
        <p>
          <strong className="text-foreground font-semibold">
            Additional simultaneous connections.
          </strong>{" "}
          Five are included as standard. Each additional connection costs £7.25
          on the three-month term, £14.50 on six months, £29.00 on twelve and
          £58.00 on twenty-four — £2.42 a month in every case. Up to five extra
          connections can be added.
        </p>
        <p>
          <strong className="text-foreground font-semibold">
            Secure Proxy add-on.
          </strong>{" "}
          £4.75 on three months, £9.50 on six, £19.00 on twelve and £38.00 on
          twenty-four — £1.58 a month throughout. Relevant on shared, monitored
          or restricted networks; unnecessary otherwise.
        </p>
        <p>
          Both cost less when bought at the point of purchase than when added
          part-way through a term, because a mid-term addition is priced for
          the remainder rather than at the full term rate. If you think you
          might need extra connections, decide before ordering.
        </p>
        <p>
          There is no equipment fee, no activation fee, no delivery charge and
          no per-event charge for headline fixtures. There is nothing to ship,
          so those lines do not exist.
        </p>
      </>
    ),
  },
  {
    id: "what-determines-price",
    h2: "What actually determines an IPTV price",
    body: (
      <>
        <p>
          Four things, and understanding them explains most of the variation
          you will see across the market.
        </p>
        <p>
          <strong className="text-foreground font-semibold">
            Whether the provider owns its infrastructure.
          </strong>{" "}
          A provider running its own servers pays for bandwidth and hardware. A
          reseller pays a wholesale rate that already contains someone
          else&rsquo;s margin, then adds its own. Two margins on the same
          stream is a structurally higher cost base, or a structurally thinner
          service at the same price.
        </p>
        <p>
          <strong className="text-foreground font-semibold">
            How it acquires customers.
          </strong>{" "}
          Affiliate commissions in this market are substantial, and they are
          paid out of the subscription price. A provider selling through
          review sites and comparison rankings is funding those placements from
          what you pay.
        </p>
        <p>
          <strong className="text-foreground font-semibold">
            Content licensing.
          </strong>{" "}
          The largest genuine input cost, and the one whose absence explains
          the very cheapest prices in this market.
        </p>
        <p>
          <strong className="text-foreground font-semibold">
            Support staffing.
          </strong>{" "}
          Round-the-clock human support is a real recurring cost. A provider
          with no reachable support has removed it, which is a saving passed to
          you in the form of nobody answering when a channel dies mid-fixture.
        </p>
      </>
    ),
  },
  {
    id: "why-prices-vary",
    h2: "Why quotes vary so wildly across the market",
    body: (
      <>
        <p>
          You will find IPTV advertised anywhere from a couple of pounds a
          month to forty. That spread is not explained by service quality
          alone, and reading it correctly is useful.
        </p>
        <p>
          At the very bottom sit providers not paying for content, plus
          resellers pricing below their own cost to acquire subscribers quickly
          — the second group is usually gone within a year. In the middle sit
          providers with a genuine cost base, running their own infrastructure
          and paying support staff. At the top sit providers whose price is
          driven by acquisition spend rather than service: heavy affiliate
          programmes, aggressive marketing, and a price that funds both.
        </p>
        <p>
          A higher price therefore does not reliably indicate a better service,
          and a lower one does not reliably indicate a worse one. What does
          correlate with quality is the surrounding evidence: published refund
          terms, reachable support before purchase, plausible channel and
          resolution claims and adequate connection limits. The{" "}
          <Link href="/best-iptv-subscription" className={linkCls}>
            seven-point evaluation test
          </Link>{" "}
          covers all of it, and the{" "}
          <Link href="/cheap-iptv" className={linkCls}>
            cheap IPTV page
          </Link>{" "}
          covers how to spot a price that is too low to be sustainable.
        </p>
      </>
    ),
  },
  {
    id: "price-vs-value",
    h2: "Reading price against value",
    body: (
      <>
        <p>
          Comparing headline prices across providers is close to meaningless
          without normalising them first. Two adjustments do most of the work.
        </p>
        <p>
          <strong className="text-foreground font-semibold">
            Add the connections you would actually need.
          </strong>{" "}
          A provider at £3 a month including one stream is more expensive than
          one at £4.17 including five, for any household with more than one
          television. This single adjustment reorders most comparison tables.
        </p>
        <p>
          <strong className="text-foreground font-semibold">
            Weight the price by the refund window protecting it.
          </strong>{" "}
          A subscription is a prepayment, and the refund window is the only
          thing standing between you and losing it if the service turns out to
          be poor. A cheap plan protected by seven days carries meaningfully
          more risk than a slightly dearer one protected by thirty, because
          seven days expires before you have tested peak-time performance
          across a couple of weekends.
        </p>
        <p>
          Price divided by risk is a better comparison than price alone, and it
          is the reason the cheapest listing in a comparison table is so often
          not the cheapest outcome.
        </p>
      </>
    ),
  },
  {
    id: "price-stability",
    h2: "Price stability and renewal",
    body: (
      <>
        <p>
          The four prices above are the four prices. There are no promotional
          codes, no countdown timers, no seasonal rates and no struck-through
          figures representing prices nobody paid. If you return next week they
          will be the same.
        </p>
        <p>
          Nothing renews automatically. There is no stored card and no
          introductory rate that steps up at the anniversary, because there is
          no anniversary — the term simply ends and access stops unless you
          choose to buy another. If you do renew, you pay whatever is published
          at that time.
        </p>
        <p>
          One difference is worth knowing in advance: the refund window on a
          renewal is seven days rather than thirty. The longer window exists so
          a new buyer can test the service properly, and by the time you are
          renewing you have already done that. It is set out alongside the rest
          of the terms on the{" "}
          <Link href="/refund" className={linkCls}>
            refund page
          </Link>
          .
        </p>
      </>
    ),
  },
  {
    id: "which-price",
    h2: "Which price to pay",
    body: (
      <p>
        If you have never run IPTV on your broadband, £25.99 for three months
        is the right entry point — smallest outlay, thirty days to judge it,
        and you can lengthen the term afterwards. If you already know it works
        in your home, £49.99 for twelve months at £4.17 a month is where most
        households settle: it captures the bulk of the available saving without
        requiring a two-year view. £79.99 for twenty-four months at £2.96 a
        month is the lowest rate available and makes sense if you are confident
        about the next two years. In every case, decide on extra connections
        before you order rather than after. The break-even arithmetic between
        each step is on the{" "}
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
    q: "What is the price of an IPTV subscription?",
    a: "£25.99 for three months, £35.99 for six months, £49.99 for twelve months and £79.99 for twenty-four months — £8.66, £6.00, £4.17 and £2.96 per month respectively. All four carry identical channels, features and connection counts.",
  },
  {
    q: "How much do extra connections cost?",
    a: "Five simultaneous connections are included. Each additional one costs £7.25 on three months, £14.50 on six, £29.00 on twelve and £58.00 on twenty-four — a flat £2.42 a month on every term, with up to five extra available.",
  },
  {
    q: "What does the Secure Proxy add-on cost?",
    a: "£4.75 on three months, £9.50 on six, £19.00 on twelve and £38.00 on twenty-four, which is £1.58 a month across every term. It is relevant on shared, monitored or restricted networks and unnecessary otherwise.",
  },
  {
    q: "Are there any setup or equipment fees?",
    a: "No. There is no activation fee, equipment fee, delivery charge or per-event charge for headline fixtures. Nothing is shipped, so none of those lines exist.",
  },
  {
    q: "Why do IPTV prices vary so much between providers?",
    a: "Whether the provider owns its infrastructure or resells at a margin, how much it pays in affiliate commissions, whether it licenses its content, and whether it staffs real support. A higher price does not reliably mean better service, and a lower one does not reliably mean worse.",
  },
  {
    q: "How should I compare IPTV prices fairly?",
    a: "Add the connections you would actually need — a £3 plan including one stream is dearer than a £4.17 plan including five. Then weight the price by the refund window protecting it, since seven days expires before you can test peak-time performance.",
  },
  {
    q: "Will the price change at renewal?",
    a: "There is no automatic renewal, no stored card and no introductory rate, so nothing steps up on its own. If you choose to renew you pay what is published then. Note that renewals carry a seven-day refund window rather than thirty days.",
  },
  {
    q: "Are there discount codes or sales?",
    a: "No. The four published prices apply every day of the year. The genuine saving is the term structure itself, which moves the monthly rate from £8.66 down to £2.96 without any code or promotional window.",
  },
] as const;

export default function IptvPricePage() {
  return (
    <SeoLanding
      pagePath={PAGE_PATH}
      breadcrumbName="IPTV Price"
      badge="IPTV Price"
      h1Lead="IPTV Price —"
      h1Accent="Every Number, in One Place"
      intro={
        <p>
          The complete price list: four subscription terms from £25.99 to
          £79.99, the two optional add-ons and what they cost on each term, and
          an explanation of what actually determines an IPTV price — which is
          why quotes across this market range from a couple of pounds a month
          to forty. For the total including hardware and broadband, see{" "}
          <Link href="/iptv-cost" className={linkCls}>
            IPTV cost
          </Link>
          .
        </p>
      }
      sections={SECTIONS}
      midCtaAfter={2}
      midCtaText="Four prices, published, unchanging — no codes and no countdowns."
      midCtaLabel="Go to the Pricing Table"
      faqs={FAQS}
      faqHeading="IPTV Price"
      closingLead="The listed price"
      closingAccent="is the price you pay"
      closingBody={
        <p>
          No activation fee, no equipment charge, no per-event billing and no
          rate that steps up later. Add extra connections only if your
          household needs them, and read the{" "}
          <Link href="/refund" className={linkCls}>
            refund terms
          </Link>{" "}
          before you spend anything rather than after.
        </p>
      }
      ctaLabel="See Pricing"
      secondaryHref="/iptv-deals"
      secondaryLabel="Or read why there are no discount codes"
      serviceType="IPTV Subscription"
      pageTitle={PAGE_TITLE}
      pageDescription={PAGE_DESCRIPTION}
    />
  );
}
