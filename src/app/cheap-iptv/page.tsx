import type { Metadata } from "next";
import Link from "next/link";
import SeoLanding, {
  linkCls,
  type SeoFaq,
  type SeoSection,
} from "@/components/SeoLanding";
import { buildLandingMetadata } from "@/lib/seo";

/* Primary keyword: "cheap iptv".
   Angle: the economics — why IPTV costs so little, the difference between
   structurally cheap and unsustainably cheap, and how to tell them apart.
   UK price comparison sits on /cheap-iptv-uk; term maths on
   /cheap-iptv-subscription; the entry price itself on /cheapest-iptv. */

const PAGE_PATH = "/cheap-iptv";
const PAGE_TITLE = "Cheap IPTV — Why It Costs So Little, and When to Worry";
const PAGE_DESCRIPTION =
  "Why IPTV costs a fraction of traditional TV, the difference between structurally cheap and unsustainably cheap providers, and the warning signs that separate the two.";

export const metadata: Metadata = buildLandingMetadata({
  path: PAGE_PATH,
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  imageAlt: "Cheap IPTV — the economics behind low subscription prices",
});

const SECTIONS: SeoSection[] = [
  {
    id: "why-cheap",
    h2: "Why IPTV costs a fraction of traditional television",
    body: (
      <>
        <p>
          The gap between an IPTV subscription and a traditional television
          package is large enough that people reasonably assume something is
          wrong. Mostly there is not, and the reason is structural rather than
          suspicious.
        </p>
        <p>
          A traditional pay-TV business carries costs that have nothing to do
          with the programmes. It maintains a satellite or cable distribution
          network. It manufactures, ships, installs and eventually recovers
          physical equipment. It sends engineers to houses. It runs retail
          premises, call centres and a marketing operation at national scale.
          It funds original commissioning. Those costs are recovered from you
          across an eighteen or twenty-four month contract, which is precisely
          why the contract exists — it is an amortisation schedule, not a
          service guarantee.
        </p>
        <p>
          An IPTV provider carries almost none of that. Delivery rides on
          broadband you are already paying for. There is no hardware to
          manufacture or install, no engineer visit, no retail estate. The
          costs are servers, bandwidth, content licensing and support staff.
          Strip out everything else and the price falls by an order of
          magnitude without anything sinister happening.
        </p>
        <p>
          That is the honest explanation for most of the difference. It is not
          the whole explanation for every provider, which is what the rest of
          this page is about.
        </p>
      </>
    ),
  },
  {
    id: "two-kinds",
    h2: "Two very different kinds of cheap",
    body: (
      <>
        <p>
          <strong className="text-foreground font-semibold">
            Structurally cheap
          </strong>{" "}
          is a provider whose costs really are lower. It runs its own
          infrastructure, so it pays for servers and bandwidth rather than a
          middleman&rsquo;s margin. It sells directly rather than through
          retail. It has no hardware programme. Its price is low because its
          cost base is low, and it can stay at that price indefinitely because
          the arithmetic works.
        </p>
        <p>
          <strong className="text-foreground font-semibold">
            Unsustainably cheap
          </strong>{" "}
          is a provider priced below what its service costs to deliver. That
          happens for two reasons. Either it is buying a wholesale package from
          an upstream supplier and reselling thin, in which case it has no
          control over anything and disappears when the supplier does. Or it is
          not paying for its content at all, in which case the price reflects
          an absent cost rather than an efficient one.
        </p>
        <p>
          Both look identical on a pricing page. Both may work perfectly well
          for a while. The difference shows up in month four, when the
          structurally cheap provider is still running and the unsustainably
          cheap one has gone quiet, taking the remainder of your term with it.
          The problem for a buyer is that price alone cannot distinguish them —
          you have to look at what surrounds the price.
        </p>
      </>
    ),
  },
  {
    id: "warning-signs",
    h2: "The signals that separate them",
    body: (
      <>
        <p>
          None of these are about the number on the page. All of them are
          checkable before you spend anything.
        </p>
        <p>
          <strong className="text-foreground font-semibold">
            No published refund terms.
          </strong>{" "}
          The strongest single signal in this market. A provider that will not
          commit its refund terms to writing before taking your money has
          already answered the question of what happens when you ask for it
          back.
        </p>
        <p>
          <strong className="text-foreground font-semibold">
            Lifetime subscriptions.
          </strong>{" "}
          A recurring cost cannot be covered by a single payment. A lifetime
          offer is a business selling its future revenue to fund its present,
          which is a pattern with exactly one ending.
        </p>
        <p>
          <strong className="text-foreground font-semibold">
            Impossible channel counts.
          </strong>{" "}
          Six-figure claims are inventory padding — duplicates, dead entries
          and regional variants counted separately. Precision is a better
          signal than scale.
        </p>
        <p>
          <strong className="text-foreground font-semibold">
            Universal 4K claims.
          </strong>{" "}
          Only a minority of broadcasts are produced in 4K. A provider claiming
          everything is UHD is upscaling and calling it something else.
        </p>
        <p>
          <strong className="text-foreground font-semibold">
            No reachable human before purchase.
          </strong>{" "}
          Message them a real question at an awkward hour. Slow or templated
          pre-sales replies predict post-sales support accurately, and the test
          is free.
        </p>
        <p>
          <strong className="text-foreground font-semibold">
            Pressure and countdown timers.
          </strong>{" "}
          A price that is genuinely sustainable does not need to expire in
          eleven minutes.
        </p>
      </>
    ),
  },
  {
    id: "never-compromise",
    h2: "What a low price should never cost you",
    body: (
      <>
        <p>
          Cheap is a legitimate reason to choose a provider. It is not a reason
          to accept less on the things that determine whether the subscription
          is usable at all.
        </p>
        <p>
          <strong className="text-foreground font-semibold">
            Capacity at peak.
          </strong>{" "}
          A service that stutters at Saturday teatime has failed at the one
          moment it needed to work, and no saving compensates for that.
        </p>
        <p>
          <strong className="text-foreground font-semibold">
            A real refund window.
          </strong>{" "}
          Long enough to sit through several peak weekends. Seven days is not.
        </p>
        <p>
          <strong className="text-foreground font-semibold">
            Enough simultaneous connections.
          </strong>{" "}
          A single-connection plan is the most common hidden catch behind a
          headline price, and it is unworkable for most households.
        </p>
        <p>
          <strong className="text-foreground font-semibold">
            Support that answers.
          </strong>{" "}
          Streams break everywhere. What differs is how long you wait.
        </p>
        <p>
          If a cheap provider gives you all four, the price is doing its job.
          If it gives you a low number and none of them, you have not found a
          bargain — you have found the reason it is cheap.
        </p>
      </>
    ),
  },
  {
    id: "how-we-price",
    h2: "Where our own price comes from",
    body: (
      <>
        <p>
          It is fair to turn the same scrutiny on this page. Our terms run
          £25.99 for three months, £35.99 for six, £49.99 for twelve and £79.99
          for twenty-four — £8.66 down to £2.96 a month.
        </p>
        <p>
          Three things make that possible. We run our own streaming
          infrastructure rather than reselling somebody else&rsquo;s package,
          which removes a middleman&rsquo;s margin and means capacity problems
          are ours to fix rather than ours to apologise for. We sell directly
          through a single channel with no retail estate and no affiliate
          commissions built into the price. And we do not operate a free trial,
          which sounds like a disadvantage and is in fact a cost saving —
          unlimited free credentials are the main route through which stream
          capacity gets consumed by people who never intend to subscribe.
        </p>
        <p>
          What we do not do is fund the price by cutting the things listed
          above. Five simultaneous connections are included on every plan
          rather than sold back to you. The refund window is thirty days rather
          than seven. Support is staffed around the clock. Those are the
          expensive parts and they are where a genuinely cheap provider should
          be spending the savings.
        </p>
      </>
    ),
  },
  {
    id: "still-included",
    h2: "What the cheapest plan still includes",
    body: (
      <p>
        There is no reduced tier here, which is worth stating because it is
        unusual. The three-month plan at £25.99 carries exactly the same
        roughly 37,000 live channels, the same 198,000 films and series on
        demand, the same seven-day programme guide with catch-up, the same
        native 4K on feeds that are genuinely produced in 4K, the same five
        simultaneous connections, the same 24/7 support and the same 30-day
        money-back guarantee as the twenty-four-month plan at £79.99. Term
        length is the only variable. Nothing is withheld from cheaper buyers
        and there is no sports tier, no per-event charge and no equipment fee.
        The{" "}
        <Link href="/cheapest-iptv" className={linkCls}>
          cheapest IPTV page
        </Link>{" "}
        works through the entry-level option specifically, and{" "}
        <Link href="/cheap-iptv-subscription" className={linkCls}>
          cheap IPTV subscription
        </Link>{" "}
        covers how term length drives the monthly rate.
      </p>
    ),
  },
  {
    id: "when-to-pay-more",
    h2: "When paying a bit more is the right call",
    body: (
      <p>
        Occasionally the cheapest option genuinely is not the right one, and a
        page about cheap IPTV should say so. If your household regularly runs
        more than five screens at once, buying extra connections at the outset
        costs less than discovering the limit mid-term and adding them later.
        If privacy on a shared or monitored network matters to you, the Secure
        Proxy add-on is a real cost worth paying rather than a manufactured
        upsell. And if you know you will keep the service, the longer terms are
        straightforwardly better value — the twenty-four-month plan is less
        than half the monthly rate of the three-month one for identical
        content. Paying more up front to pay less per month is not the same as
        paying more for the same thing.
      </p>
    ),
  },
];

const FAQS: readonly SeoFaq[] = [
  {
    q: "Why is IPTV so much cheaper than traditional TV?",
    a: "Because the cost base is genuinely smaller. There is no satellite or cable network to maintain, no hardware to manufacture, ship, install or recover, no engineer visits and no retail estate. Delivery rides on broadband you already pay for. Strip those costs out and the price falls dramatically without anything untoward happening.",
  },
  {
    q: "Is cheap IPTV a scam?",
    a: "Not inherently — most of the price difference is structural. But there is a real distinction between structurally cheap providers, whose costs genuinely are lower, and unsustainably cheap ones priced below what delivery costs. The two look identical on a pricing page and differ sharply by month four.",
  },
  {
    q: "How do I tell a good cheap provider from a bad one?",
    a: "Ignore the price and check what surrounds it: published refund terms, a reachable human before you pay, plausible channel and resolution claims, adequate simultaneous connections, and no lifetime offers or countdown pressure. All of those are checkable before spending anything.",
  },
  {
    q: "Why are lifetime IPTV subscriptions a warning sign?",
    a: "Because servers, bandwidth and licensing are recurring costs that a single payment cannot cover indefinitely. A lifetime offer funds present operations with future revenue, which is a pattern with one ending.",
  },
  {
    q: "What is the cheapest plan here and what does it include?",
    a: "Three months at £25.99, which is £8.66 a month. It includes exactly the same channels, on-demand catalogue, 4K delivery, five simultaneous connections, 24/7 support and 30-day guarantee as the most expensive plan. Only the term length differs.",
  },
  {
    q: "Should I always choose the cheapest option?",
    a: "Usually, but not always. If your household regularly runs more than five screens at once, buying extra connections up front costs less than adding them mid-term. And if you expect to keep the service, longer terms are better value — twenty-four months is less than half the monthly rate of three months for identical content.",
  },
  {
    q: "Does a cheaper plan mean fewer channels?",
    a: "Not here. There is no reduced tier, no sports add-on and no per-event charge. Every plan carries the same roughly 37,000 channels and 198,000 on-demand titles. Term length is the only difference between them.",
  },
  {
    q: "What should a low price never cost me?",
    a: "Capacity at peak times, a refund window long enough to test several peak weekends, enough simultaneous connections for your household, and support that actually answers. A provider offering a low price and none of those has not given you a bargain.",
  },
] as const;

export default function CheapIptvPage() {
  return (
    <SeoLanding
      pagePath={PAGE_PATH}
      breadcrumbName="Cheap IPTV"
      badge="Cheap IPTV"
      h1Lead="Cheap IPTV —"
      h1Accent="The Honest Economics"
      intro={
        <p>
          IPTV costs a fraction of traditional television, and the reason is
          mostly structural rather than suspicious. But there is a real
          difference between a provider that is cheap because its costs are
          genuinely lower and one that is cheap because it is not paying for
          something it should be. This page explains where the saving actually
          comes from and how to tell the two apart before you spend anything.
        </p>
      }
      sections={SECTIONS}
      midCtaAfter={3}
      midCtaText="No reduced tier — every plan carries the full line-up."
      midCtaLabel="See All Four Terms"
      faqs={FAQS}
      faqHeading="Cheap IPTV"
      closingLead="Cheap because the costs are lower,"
      closingAccent="not because something is missing"
      closingBody={
        <p>
          Full line-up on every plan, five connections included, support around
          the clock and thirty days to change your mind. Apply the warning
          signs on this page to us as readily as to anyone else — the{" "}
          <Link href="/refund" className={linkCls}>
            refund terms
          </Link>{" "}
          are published so you can start there.
        </p>
      }
      ctaLabel="See Plans From £25.99"
      secondaryHref="/cheap-iptv-uk"
      secondaryLabel="Or compare against UK TV package prices"
      serviceType="IPTV Subscription"
      pageTitle={PAGE_TITLE}
      pageDescription={PAGE_DESCRIPTION}
    />
  );
}
