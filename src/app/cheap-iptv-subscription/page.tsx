import type { Metadata } from "next";
import Link from "next/link";
import SeoLanding, {
  linkCls,
  type SeoFaq,
  type SeoSection,
} from "@/components/SeoLanding";
import { buildLandingMetadata } from "@/lib/seo";

/* Primary keyword: "cheap iptv subscription".
   Angle: term-length arithmetic — how subscription length drives the monthly
   rate, break-even points, and why the guarantee changes the risk calculus.
   Market economics sit on /cheap-iptv; the UK bill comparison on
   /cheap-iptv-uk; the entry price on /cheapest-iptv. */

const PAGE_PATH = "/cheap-iptv-subscription";
const PAGE_TITLE =
  "Cheap IPTV Subscription — How Term Length Sets the Monthly Rate";
const PAGE_DESCRIPTION =
  "The arithmetic behind cheap IPTV subscriptions: how each term changes your monthly rate, where the break-even points fall, and why a longer term is not a bigger risk.";

export const metadata: Metadata = buildLandingMetadata({
  path: PAGE_PATH,
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  imageAlt: "Cheap IPTV subscription — term length and monthly rate compared",
});

const SECTIONS: SeoSection[] = [
  {
    id: "how-term-sets-price",
    h2: "Why term length is the only thing that changes the price",
    body: (
      <>
        <p>
          In most subscription businesses, a cheaper plan means a smaller
          product — fewer channels, lower resolution, fewer screens. That is
          not how this works, and understanding why makes the pricing table far
          easier to read.
        </p>
        <p>
          The cost of serving a subscriber is largely fixed: the streams, the
          bandwidth, the support. What varies is how long that subscriber stays
          and how much it cost to acquire them. A buyer committing to two years
          up front removes two years of renewal administration, payment
          handling and the risk of churn, and that certainty is genuinely worth
          something. The longer terms are cheaper because they are worth more,
          not because they contain less.
        </p>
        <p>
          The consequence is that there is no reduced tier here. Every plan
          carries the same roughly 37,000 live channels, the same 198,000 films
          and series on demand, the same seven-day guide with catch-up, the
          same native 4K where the broadcast is genuinely 4K, the same five
          simultaneous connections, the same round-the-clock support and the
          same 30-day money-back guarantee. Nothing is held back from the
          cheapest buyer.
        </p>
      </>
    ),
  },
  {
    id: "the-four-terms",
    h2: "The four terms, and what each actually costs per month",
    body: (
      <>
        <p>
          <strong className="text-foreground font-semibold">
            Three months — £25.99, or £8.66 a month.
          </strong>{" "}
          The trial-sized commitment. Highest monthly rate, smallest amount at
          stake, and the sensible choice if you are switching from a
          conventional package and want to overlap the two.
        </p>
        <p>
          <strong className="text-foreground font-semibold">
            Six months — £35.99, or £6.00 a month.
          </strong>{" "}
          A £10 increase over the three-month plan buys you double the time.
          This is the steepest efficiency gain in the whole table: the monthly
          rate falls by 31% for an extra tenner up front.
        </p>
        <p>
          <strong className="text-foreground font-semibold">
            Twelve months — £49.99, or £4.17 a month.
          </strong>{" "}
          Another £14 buys another six months. The monthly rate drops a further
          30%. For most households that already know IPTV works on their
          connection, this is the point of best value.
        </p>
        <p>
          <strong className="text-foreground font-semibold">
            Twenty-four months — £79.99, or £2.96 a month.
          </strong>{" "}
          £30 more for a second year, bringing the monthly figure down another
          29%. The lowest rate available, and worth taking only if you are
          reasonably confident about the next two years.
        </p>
      </>
    ),
  },
  {
    id: "break-even",
    h2: "Where the break-even points fall",
    body: (
      <>
        <p>
          The useful question is not which plan is cheapest but at what point a
          longer term has already paid for itself. The arithmetic is
          straightforward.
        </p>
        <p>
          Six months costs £10 more than three. At the three-month plan&rsquo;s
          rate of £8.66 a month, that £10 buys you a little over a month of
          viewing. So if you keep the service for four months and one week or
          longer, the six-month plan was the cheaper choice — and if you were
          ever going to renew a three-month plan even once, it was cheaper from
          the start.
        </p>
        <p>
          Twelve months costs £14 more than six. Against the six-month rate of
          £6.00, that is under two and a half months of viewing. Keep the
          service past roughly eight and a half months and the annual plan has
          already won.
        </p>
        <p>
          Twenty-four months costs £30 more than twelve. At £4.17 a month that
          is around seven months of viewing, so the two-year plan pays for
          itself somewhere around the nineteen-month mark. That is the longest
          payback in the table, which is why it is the one term where you
          should genuinely think about whether you will still want the service.
        </p>
      </>
    ),
  },
  {
    id: "risk-and-guarantee",
    h2: "Why a longer term is not a bigger risk",
    body: (
      <>
        <p>
          The instinctive objection to a two-year plan is that it locks you in.
          Look closely at what the guarantee does to that argument.
        </p>
        <p>
          Every plan — including the twenty-four-month one — carries the same
          30-day money-back guarantee on first purchases. During the window in
          which you are actually deciding whether the service is any good, your
          exposure is identical regardless of which term you bought. If the
          streams stutter at Saturday teatime, you get your money back whether
          you paid £25.99 or £79.99.
        </p>
        <p>
          What the shorter term protects you against is a narrower scenario: the
          service being fine for the first month and then deteriorating later,
          or your circumstances changing after month four. That is a real risk,
          but it is much smaller than the risk most buyers think they are
          insuring against — and they pay a substantial premium for that
          insurance. Choosing three months over twelve costs you £4.49 every
          month for protection against month five onwards.
        </p>
        <p>
          There is also no contract in the conventional sense: no credit check,
          no early-termination charge and nothing to cancel. A longer term is a
          prepayment, not an obligation. The full terms are on the{" "}
          <Link href="/refund" className={linkCls}>
            refund page
          </Link>
          .
        </p>
      </>
    ),
  },
  {
    id: "add-ons",
    h2: "How add-ons change the maths",
    body: (
      <>
        <p>
          Two optional extras exist and both are priced per term, which means
          the term you choose changes what they cost you per month as well.
        </p>
        <p>
          <strong className="text-foreground font-semibold">
            Extra simultaneous connections.
          </strong>{" "}
          Five are included. Beyond that, an additional connection is £7.25 on
          the three-month plan, £14.50 on six months, £29.00 on twelve and
          £58.00 on twenty-four. Per month those work out at £2.42, £2.42,
          £2.42 and £2.42 respectively — deliberately flat, so adding a
          connection costs the same monthly rate whichever term you pick.
        </p>
        <p>
          <strong className="text-foreground font-semibold">
            The Secure Proxy add-on.
          </strong>{" "}
          £4.75 on three months, £9.50 on six, £19.00 on twelve and £38.00 on
          twenty-four — again a flat £1.58 a month across every term.
        </p>
        <p>
          The practical point is that add-ons bought at the point of purchase
          cost less than the same add-ons bought mid-term, because a mid-term
          addition is priced for the remainder rather than at the term rate.
          Decide on connections before you order rather than afterwards.
        </p>
      </>
    ),
  },
  {
    id: "renewal-pricing",
    h2: "What happens to the price at renewal",
    body: (
      <p>
        Nothing renews automatically, so there is no mechanism by which a price
        could quietly step up. There is no stored card, no introductory rate
        that expires and no loyalty penalty. When your term approaches its end
        you are contacted in the same thread, and if you want to continue you
        buy another term at whatever is published at that time. If you do
        nothing, access stops. The one thing worth knowing is that the refund
        window on a renewal is seven days rather than thirty — the longer
        window exists to let a new buyer test the service, and by the time you
        are renewing you have already done that. That distinction is stated
        openly on the{" "}
        <Link href="/refund" className={linkCls}>
          refund page
        </Link>{" "}
        rather than discovered later.
      </p>
    ),
  },
  {
    id: "which-to-choose",
    h2: "Which term to actually choose",
    body: (
      <p>
        If you are coming from a conventional package and have not run IPTV on
        your connection before, take three months and overlap the two services
        for a few weeks. If you have used IPTV before and know your broadband
        handles it, twelve months at £4.17 is the sweet spot — it captures most
        of the available saving without requiring a two-year view. Take
        twenty-four months only if you are genuinely confident, since it is the
        one term with a payback period long enough to matter. And in every case
        decide on extra connections before ordering rather than after. The{" "}
        <Link href="/iptv-12-month-subscription" className={linkCls}>
          twelve-month plan page
        </Link>{" "}
        goes through the annual option in detail, and{" "}
        <Link href="/cheapest-iptv" className={linkCls}>
          cheapest IPTV
        </Link>{" "}
        covers the entry-level route.
      </p>
    ),
  },
];

const FAQS: readonly SeoFaq[] = [
  {
    q: "What is the cheapest IPTV subscription available here?",
    a: "By total outlay, three months at £25.99. By monthly rate, twenty-four months at £79.99, which works out at £2.96 a month. Both carry exactly the same channels, features and guarantee — only the term length differs.",
  },
  {
    q: "Does a cheaper subscription mean fewer channels?",
    a: "No. There is no reduced tier. Every plan includes the same roughly 37,000 live channels, 198,000 on-demand titles, seven-day guide with catch-up, native 4K where the source is 4K, five simultaneous connections and 24/7 support.",
  },
  {
    q: "Why are longer terms cheaper per month?",
    a: "Because the cost of serving a subscriber is largely fixed, while a longer commitment removes renewal administration, payment handling and churn risk. Longer terms cost less per month because they are worth more to us, not because they contain less.",
  },
  {
    q: "At what point does a longer term pay for itself?",
    a: "Six months beats three after about four months and a week. Twelve months beats six after roughly eight and a half months. Twenty-four months beats twelve at around nineteen months — the longest payback, and the one term worth thinking hard about.",
  },
  {
    q: "Is a two-year plan risky?",
    a: "Less than it looks. The same 30-day money-back guarantee applies to every term, so during the period you are actually judging the service your exposure is identical. There is also no contract, no credit check and no early-termination charge — a longer term is a prepayment, not an obligation.",
  },
  {
    q: "How much do extra connections cost?",
    a: "Five simultaneous connections are included. Beyond that it is £7.25 on three months, £14.50 on six, £29.00 on twelve and £58.00 on twenty-four — a flat £2.42 per month whichever term you choose. Buying them at purchase costs less than adding them mid-term.",
  },
  {
    q: "Will my price increase when I renew?",
    a: "There is no automatic renewal, no stored card and no introductory rate that expires, so nothing can step up on its own. If you choose to renew you pay whatever is published at that time. Note that renewals carry a seven-day refund window rather than thirty days.",
  },
  {
    q: "Which term should I choose?",
    a: "Three months if you are switching from a conventional package and want to overlap. Twelve months at £4.17 if you already know IPTV works on your connection — that is the point of best value. Twenty-four months only if you are confident about the next two years.",
  },
] as const;

export default function CheapIptvSubscriptionPage() {
  return (
    <SeoLanding
      pagePath={PAGE_PATH}
      breadcrumbName="Cheap IPTV Subscription"
      badge="Cheap IPTV Subscription"
      h1Lead="Cheap IPTV Subscription —"
      h1Accent="The Arithmetic Behind Each Term"
      intro={
        <p>
          Every plan here contains exactly the same service. The only variable
          is how long you buy for, and that single variable moves the monthly
          rate from £8.66 down to £2.96. This page works through what each term
          actually costs per month, where the break-even points fall, and why a
          longer term carries less risk than it appears to.
        </p>
      }
      sections={SECTIONS}
      midCtaAfter={3}
      midCtaText="Same service on all four terms — from £2.96 a month."
      midCtaLabel="See the Pricing Table"
      faqs={FAQS}
      faqHeading="Cheap IPTV Subscription"
      closingLead="Identical service,"
      closingAccent="four different monthly rates"
      closingBody={
        <p>
          Pick the term that matches how confident you are, not the one that
          feels safest — the{" "}
          <Link href="/refund" className={linkCls}>
            thirty-day guarantee
          </Link>{" "}
          applies to all four equally, so the early risk is the same whichever
          you choose.
        </p>
      }
      ctaLabel="Choose Your Term"
      secondaryHref="/iptv-price"
      secondaryLabel="Or see the full price list"
      serviceType="IPTV Subscription"
      pageTitle={PAGE_TITLE}
      pageDescription={PAGE_DESCRIPTION}
    />
  );
}
