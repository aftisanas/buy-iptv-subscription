import type { Metadata } from "next";
import Link from "next/link";
import SeoLanding, {
  linkCls,
  type SeoFaq,
  type SeoSection,
} from "@/components/SeoLanding";
import { buildLandingMetadata } from "@/lib/seo";

/* Primary keyword: "buy iptv subscription" — the exact-match domain term.
   Angle: the complete purchase guide. Owns the buying *process*; the
   evaluation criteria live on /best-iptv-subscription and the price
   breakdown on /iptv-cost, so this page links out rather than repeating. */

const PAGE_PATH = "/buy-iptv-subscription";
const PAGE_TITLE =
  "Buy IPTV Subscription — UK Plans From £25.99, Live in Minutes";
const PAGE_DESCRIPTION =
  "Buy an IPTV subscription with 37,000 channels, native 4K and five simultaneous connections. Four terms from £25.99, 30-day money-back guarantee, activation in minutes.";

export const metadata: Metadata = buildLandingMetadata({
  path: PAGE_PATH,
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  imageAlt: "Buy IPTV subscription — UK plans from £25.99",
});

const SECTIONS: SeoSection[] = [
  {
    id: "what-you-buy",
    h2: "What you are actually buying",
    body: (
      <>
        <p>
          An IPTV subscription is access, not hardware. You are buying a set of
          credentials — a username, a password and a portal address — that
          authorise a player application on a device you already own to pull
          live channel streams and an on-demand catalogue from our servers.
          Nothing is posted to you, no engineer visits, and there is no box to
          return if you leave.
        </p>
        <p>
          Concretely, a subscription here covers roughly 37,000 live channels
          and around 198,000 films and series on demand, a full seven-day
          electronic programme guide with catch-up, and five simultaneous
          connections so different people in the house can watch different
          things at once. Streams are delivered at the highest resolution the
          source carries: standard definition where the channel is SD, and
          native 4K where the broadcast is genuinely produced in 4K rather than
          upscaled.
        </p>
        <p>
          What you are not buying is a contract. There is no minimum term
          beyond the one you choose, no credit check, no early-termination
          charge and no automatic rollover onto a higher price. When the term
          you paid for ends, access stops unless you choose to renew. That is a
          deliberate difference from the traditional pay-TV model and it is
          worth understanding before you compare prices, because a twelve-month
          IPTV subscription and a twelve-month TV contract are not the same
          kind of commitment even when the headline numbers look similar.
        </p>
      </>
    ),
  },
  {
    id: "choose-term",
    h2: "Choosing which term to buy",
    body: (
      <>
        <p>
          Four terms are available and the only difference between them is
          length and effective monthly rate. The channel line-up, the on-demand
          catalogue, 4K delivery, the connection count and the support
          arrangements are identical on all four — there is no premium tier
          holding back content from the entry plan.
        </p>
        <p>
          Three months costs £25.99, which works out at £8.66 a month. Six
          months is £35.99, or £6.00 a month. Twelve months is £49.99, which
          brings the monthly figure to £4.17. Twenty-four months is £79.99, or
          £2.96 a month. The curve is steep at the start and flattens later:
          moving from three months to six months cuts your monthly rate by
          nearly a third, while the step from twelve to twenty-four months
          saves a further £1.21 a month.
        </p>
        <p>
          The instinct for a first purchase is usually to take the shortest
          term, and it is the wrong instinct here. Because every plan carries
          the same 30-day money-back guarantee, a longer term is not a larger
          commitment during the window in which you are actually deciding — it
          is the same decision at a lower monthly rate. If the service is not
          right you exit inside thirty days regardless of whether you paid for
          three months or twenty-four. The shorter term only protects you
          against something going wrong in month four onwards, which is a much
          narrower risk than most buyers assume they are insuring against.
        </p>
      </>
    ),
  },
  {
    id: "verify-first",
    h2: "What to verify before you pay anyone",
    body: (
      <>
        <p>
          This market contains a large number of resellers who buy a stream
          package wholesale, add a logo and disappear when the upstream supply
          fails. Applying a few checks before payment costs nothing and filters
          most of them out. Apply them to us as readily as to anyone else.
        </p>
        <p>
          <strong className="text-foreground font-semibold">
            Are the refund terms published in full and easy to find?
          </strong>{" "}
          Ours are on the{" "}
          <Link href="/refund" className={linkCls}>
            refund page
          </Link>
          , stating the window, the exclusions and the processing time. A
          seller who will not commit to refund terms in writing before you pay
          has told you what happens when you ask afterwards.
        </p>
        <p>
          <strong className="text-foreground font-semibold">
            Can you reach a human before you spend anything?
          </strong>{" "}
          Message support with a real question and time the reply. Pre-sales
          response time is the single best available proxy for post-sales
          response time, and it is free to test.
        </p>
        <p>
          <strong className="text-foreground font-semibold">
            Are the claims plausible?
          </strong>{" "}
          Channel counts running into six figures are inventory padding —
          duplicate feeds, dead entries and regional variants counted
          separately. A precise figure is a better sign than a spectacular one.
          Likewise treat &ldquo;everything in 4K&rdquo; with suspicion: only a
          minority of broadcasts are produced in 4K, so any provider claiming
          universal UHD is either upscaling or not being straight with you.
        </p>
        <p>
          <strong className="text-foreground font-semibold">
            Is there a real company footprint?
          </strong>{" "}
          Published terms, a privacy policy, a DMCA route and a contact address
          are not glamorous, but their absence is informative.
        </p>
      </>
    ),
  },
  {
    id: "how-to-buy",
    h2: "How to buy, step by step",
    body: (
      <>
        <p>
          The purchase runs over WhatsApp rather than a card form, and the
          whole thing takes about five minutes.
        </p>
        <p>
          <strong className="text-foreground font-semibold">One.</strong> Pick
          your term on the{" "}
          <Link href="/#pricing" className={linkCls}>
            pricing table
          </Link>
          . Decide at this point whether you want extra connections beyond the
          five included, because adding them at purchase is cheaper than adding
          them mid-term.{" "}
          <strong className="text-foreground font-semibold">Two.</strong> Press
          the order button, which opens a WhatsApp conversation with your
          chosen plan pre-filled so nothing is mistyped.{" "}
          <strong className="text-foreground font-semibold">Three.</strong>{" "}
          Confirm the plan and tell us which devices you intend to use — this
          determines which setup instructions you are sent.
        </p>
        <p>
          <strong className="text-foreground font-semibold">Four.</strong>{" "}
          Complete payment through the method agreed in the conversation.{" "}
          <strong className="text-foreground font-semibold">Five.</strong> Your
          credentials arrive in the same thread, usually within five minutes,
          alongside a setup walkthrough for your specific device.
        </p>
        <p>
          Keeping the entire transaction in one thread is deliberate. It means
          that when you need support in month seven, you are messaging the same
          conversation that contains your order details and your credentials,
          rather than opening a ticket and re-establishing who you are. It also
          means there is a written record of what you were promised at the
          point of sale, which is to your benefit rather than ours.
        </p>
      </>
    ),
  },
  {
    id: "after-you-buy",
    h2: "What happens after you buy",
    body: (
      <>
        <p>
          Setup is the part new buyers worry about most and it is consistently
          the part that takes least time. On a Fire TV Stick you install a
          player application, enter the portal address and your credentials,
          and wait while the channel list and programme guide populate — a
          process that takes two to three minutes on a first load because the
          full EPG is being downloaded. On a smart TV the flow is the same
          through the platform&rsquo;s own app store. On MAG, Formuler and
          Enigma2 receivers the portal address goes into the box&rsquo;s
          settings menu directly.
        </p>
        <p>
          One piece of advice matters more than any other and it has nothing to
          do with us: run an Ethernet cable to whichever device feeds your main
          television if you possibly can. Wireless is the single most common
          cause of buffering that gets blamed on the provider, and a wired
          connection removes it. If a cable genuinely is not possible, a
          powerline adapter is the next best option and a mesh node is better
          than a distant router.
        </p>
        <p>
          Support runs through the same WhatsApp thread, staffed around the
          clock. Most first-week questions are about getting a particular
          device configured, and most are resolved inside a few minutes. If a
          specific channel drops, tell us which one — a replacement stream is
          normally pushed within minutes, and on a match night that response
          time is the thing that actually matters.
        </p>
      </>
    ),
  },
  {
    id: "guarantee",
    h2: "The guarantee, and how to use it properly",
    body: (
      <>
        <p>
          Every plan carries a 30-day money-back guarantee on first-time
          purchases. Ask in the thread you bought through, and the refund is
          processed back to your original payment method. There is no form to
          complete and no scripted attempt to talk you out of it. Renewals
          carry a shorter seven-day window, which is stated openly rather than
          buried.
        </p>
        <p>
          Thirty days is roughly four weekends, and the point of that length is
          that it lets you test the things a short trial cannot reach. Use it
          deliberately. Watch during peak hours on a Saturday evening, when
          demand spikes nationally and under-provisioned providers begin to
          stutter — any service looks competent on a quiet Tuesday. Check a
          genuinely 4K-produced broadcast on your main television and judge
          whether it is really native UHD. Message support at an awkward hour
          and see how long a real answer takes. Run all your connections at
          once. Check the specific channels you personally care about rather
          than counting the total.
        </p>
        <p>
          If any of those tests disappoint you, ask for your money back inside
          the window. That is what the window is for, and a provider confident
          in its service should be relaxed about you using it.
        </p>
      </>
    ),
  },
  {
    id: "renewal",
    h2: "Renewal, and what does not happen automatically",
    body: (
      <p>
        Nothing renews on its own. There is no stored card, no automatic
        rollover and no price increase applied quietly at the anniversary. When
        your term approaches its end you are contacted in the same thread, and
        if you want to continue you buy another term at the rate published at
        that time. If you do nothing, access simply stops. Some buyers find
        this less convenient than automatic billing, which is a fair criticism.
        The trade is that you can never be charged for a service you stopped
        using or forgot about, which is the more common complaint about
        subscription television generally. If you want to weigh terms against
        each other before renewing, the{" "}
        <Link href="/iptv-12-month-subscription" className={linkCls}>
          twelve-month plan breakdown
        </Link>{" "}
        and the{" "}
        <Link href="/iptv-cost" className={linkCls}>
          full cost analysis
        </Link>{" "}
        set out the arithmetic.
      </p>
    ),
  },
];

const FAQS: readonly SeoFaq[] = [
  {
    q: "How much does it cost to buy an IPTV subscription?",
    a: "Four terms are available: three months at £25.99, six months at £35.99, twelve months at £49.99 and twenty-four months at £79.99. That works out at £8.66, £6.00, £4.17 and £2.96 per month respectively. Every plan includes the same channels, the same 4K delivery and five simultaneous connections.",
  },
  {
    q: "How quickly do I get access after I buy?",
    a: "Usually within five minutes. Credentials are sent to the same WhatsApp thread you ordered through, together with setup instructions for your specific device. Nothing is posted and no engineer visit is required.",
  },
  {
    q: "Do I need to buy any hardware?",
    a: "No, provided you already own something that can run a player app — a Fire TV Stick, Apple TV, Android box, recent smart TV, phone, tablet or computer. If you have none of those, a basic streaming stick is the cheapest route and is a one-off purchase, not something you buy from us.",
  },
  {
    q: "Is there a contract or a minimum term?",
    a: "No contract beyond the term you buy. There is no credit check, no early-termination charge and no automatic renewal. When your term ends, access stops unless you choose to buy another.",
  },
  {
    q: "How many devices can I use on one subscription?",
    a: "Five simultaneous connections are included on every plan, and you can install on more devices than that provided no more than five stream at the same time. Additional simultaneous connections can be added at purchase, priced per term.",
  },
  {
    q: "What if it does not work for me?",
    a: "Every first-time purchase carries a 30-day money-back guarantee. Ask in the thread you bought through and the refund goes back to your original payment method, with no form and no retention call. Renewals carry a seven-day window instead.",
  },
  {
    q: "Is buying an IPTV subscription legal in the UK?",
    a: "Subscribing to a service that runs its own infrastructure and pays for the content it distributes is legal. The risk in this market sits with unlicensed re-broadcasters, which are usually identifiable by the absence of published refund terms, company details and reachable support.",
  },
  {
    q: "Can I upgrade my plan part-way through a term?",
    a: "Yes. Message the same thread and the remaining value of your current term is credited against the longer one, so you only pay the difference. Extra connections can also be added mid-term, though adding them at the point of purchase costs less.",
  },
] as const;

export default function BuyIptvSubscriptionPage() {
  return (
    <SeoLanding
      pagePath={PAGE_PATH}
      breadcrumbName="Buy IPTV Subscription"
      badge="Buy IPTV Subscription"
      h1Lead="Buy an IPTV Subscription —"
      h1Accent="Live in Five Minutes"
      intro={
        <p>
          Buying an IPTV subscription should take five minutes and involve no
          contract, no credit check and no hardware. This page covers exactly
          what you get for your money, how the four terms compare, what to
          verify about any seller before you pay, and what happens in the
          minutes and months after you do. If you would rather start with how
          to judge one provider against another, read the{" "}
          <Link href="/best-iptv-subscription" className={linkCls}>
            best IPTV subscription guide
          </Link>{" "}
          first.
        </p>
      }
      sections={SECTIONS}
      midCtaAfter={2}
      midCtaText="Same channels on every plan — only the term length changes."
      midCtaLabel="Compare the Four Terms"
      faqs={FAQS}
      faqHeading="Buying an IPTV Subscription"
      closingLead="Five minutes to buy,"
      closingAccent="thirty days to decide"
      closingBody={
        <p>
          Pick a term, order in the thread, and your credentials arrive within
          minutes. If it is not what you expected, the 30-day guarantee is
          there and we would rather you used it than stayed unhappy. The full
          terms are on the{" "}
          <Link href="/refund" className={linkCls}>
            refund page
          </Link>{" "}
          so you can read them before you spend anything.
        </p>
      }
      ctaLabel="Buy Your IPTV Subscription"
      secondaryHref="/iptv-cost"
      secondaryLabel="Or see the full cost breakdown first"
      serviceType="IPTV Subscription"
      pageTitle={PAGE_TITLE}
      pageDescription={PAGE_DESCRIPTION}
    />
  );
}
