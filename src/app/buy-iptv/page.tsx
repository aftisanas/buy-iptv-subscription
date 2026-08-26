import type { Metadata } from "next";
import Link from "next/link";
import SeoLanding, {
  linkCls,
  type SeoFaq,
  type SeoSection,
} from "@/components/SeoLanding";
import { buildLandingMetadata } from "@/lib/seo";

/* Primary keyword: "buy iptv" (highest volume in the set).
   Angle: the concept and the legal position — what buying IPTV means,
   licensed versus unlicensed, what you need in place first. The purchase
   mechanics live on /iptv-buy and the term maths on /iptv-cost. */

const PAGE_PATH = "/buy-iptv";
const PAGE_TITLE = "Buy IPTV — What You Get, What It Costs, What to Check";
const PAGE_DESCRIPTION =
  "Buy IPTV in the UK without a contract or a set-top box. What an IPTV service actually is, how licensed providers differ from re-broadcasters, and what to check before paying.";

export const metadata: Metadata = buildLandingMetadata({
  path: PAGE_PATH,
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  imageAlt: "Buy IPTV in the UK — plans, pricing and what to check",
});

const SECTIONS: SeoSection[] = [
  {
    id: "what-is-iptv",
    h2: "What IPTV is, in plain terms",
    body: (
      <>
        <p>
          IPTV stands for Internet Protocol Television, which is a technical
          way of saying television delivered over your broadband connection
          rather than through a satellite dish, a rooftop aerial or a cable
          into the wall. The picture arrives as data, the same way a video call
          or a film from a streaming service does.
        </p>
        <p>
          The practical consequence is that the infrastructure disappears.
          There is no dish to mount, no cable to be dug in, no engineer
          appointment and no box that has to be returned when you stop. Any
          device that can run an app and reach the internet becomes a
          television receiver: a streaming stick, a smart TV, a phone, a tablet
          or a laptop. That is why an IPTV subscription can be activated in
          minutes when a traditional installation takes days or weeks.
        </p>
        <p>
          It also changes what you are paying for. A traditional television
          package bundles content with hardware, installation and a contract
          that recovers those costs over eighteen or twenty-four months. An
          IPTV subscription strips all of that away and charges only for
          access. That is the largest single reason the numbers look so
          different, and it is worth understanding before you assume a low
          price must mean a poor service.
        </p>
      </>
    ),
  },
  {
    id: "licensed-vs-not",
    h2: "The distinction that actually matters",
    body: (
      <>
        <p>
          IPTV as a technology is entirely mainstream. Every major broadcaster
          and every streaming platform in the country delivers television over
          internet protocol. The technology is not the question. The question
          is whether the particular service you are buying from holds the
          rights to distribute what it is distributing.
        </p>
        <p>
          At one end of the market are providers running their own streaming
          infrastructure and paying for their content. At the other end are
          operations re-broadcasting someone else&rsquo;s feed without
          permission, typically bought wholesale from an upstream supplier they
          have never met and resold under a new name. The second kind is where
          both the legal exposure and the reliability problems sit — when the
          upstream supply is cut off, every reseller downstream goes dark at
          once, which is why that part of the market has such a reputation for
          services vanishing overnight.
        </p>
        <p>
          You cannot tell these apart from the price alone, and anyone
          suggesting the cheap ones are always the illegitimate ones is
          oversimplifying. What does separate them is the surrounding evidence:
          published refund terms, a real support channel staffed by people, a
          traceable company footprint, a DMCA process, and claims about channel
          counts and picture quality that are specific rather than
          spectacular. The{" "}
          <Link href="/best-iptv-subscription" className={linkCls}>
            evaluation guide
          </Link>{" "}
          sets out the full checklist.
        </p>
      </>
    ),
  },
  {
    id: "what-you-need",
    h2: "What you need in place before you buy",
    body: (
      <>
        <p>
          Three things, and most UK households already have all of them.
        </p>
        <p>
          <strong className="text-foreground font-semibold">
            A broadband connection with enough headroom.
          </strong>{" "}
          A standard high-definition stream needs roughly 8&ndash;10 Mbps. Full
          HD wants around 15 Mbps. A genuine 4K stream needs about 25 Mbps to
          itself. Those are per-stream figures, so a household running three
          screens at once should be thinking in terms of 50&ndash;60 Mbps
          total. Most modern UK connections clear that comfortably; if yours is
          an older ADSL line, 4K on multiple screens is where you will feel it.
        </p>
        <p>
          <strong className="text-foreground font-semibold">
            A device that can run a player app.
          </strong>{" "}
          A Fire TV Stick, Apple TV, Android TV box, Nvidia Shield, a Samsung
          or LG smart TV from the last few years, a phone, a tablet, a Windows
          or Mac laptop, or a dedicated MAG, Formuler or Enigma2 receiver. If
          you own none of these, a basic streaming stick is the cheapest entry
          point and it is a one-off purchase from a high-street retailer, not
          something you buy from a subscription provider.
        </p>
        <p>
          <strong className="text-foreground font-semibold">
            Ideally, a wired connection to the main screen.
          </strong>{" "}
          This is optional but it is the single highest-value thing you can do.
          The overwhelming majority of buffering complaints in this industry
          are wireless problems misattributed to the provider. An Ethernet
          cable to the device under your main television eliminates them.
        </p>
      </>
    ),
  },
  {
    id: "what-you-get",
    h2: "What a subscription includes",
    body: (
      <>
        <p>
          Around 37,000 live channels spanning UK terrestrial and entertainment
          output, live sport, film channels, news, children&rsquo;s
          programming, documentaries and a broad international selection
          covering most major languages. Roughly 198,000 films and series are
          available on demand, with the film catalogue refreshed continuously
          rather than rotating titles out on a licensing cycle.
        </p>
        <p>
          A full electronic programme guide runs seven days ahead with
          catch-up, so a programme you missed on Tuesday is still reachable on
          Friday without having set a recording. Picture quality follows the
          source: SD channels arrive as SD, HD as HD, and any feed genuinely
          produced in 4K is delivered in native 4K rather than upscaled. HDR
          metadata is passed through to displays that can use it.
        </p>
        <p>
          Five simultaneous connections are included on every plan, which
          covers most households without add-ons. You may install the player on
          more devices than that — the limit is on concurrent streams, not on
          installations — so a phone, a tablet, two televisions and a laptop
          can all be configured, with any five of them watching at once.
          Additional simultaneous connections can be bought at checkout for the
          length of the term.
        </p>
      </>
    ),
  },
  {
    id: "pricing",
    h2: "What it costs to buy",
    body: (
      <>
        <p>
          Four terms, differing only in length and effective monthly rate.
          Three months is £25.99, which is £8.66 a month. Six months is £35.99,
          or £6.00 a month. Twelve months is £49.99, bringing it to £4.17 a
          month. Twenty-four months is £79.99, or £2.96 a month.
        </p>
        <p>
          Everything else is identical across the four. There is no premium
          tier, no sports add-on, no per-event charge for headline fixtures and
          no equipment fee. The two optional extras are additional simultaneous
          connections and a Secure Proxy add-on, both priced per term and both
          genuinely optional rather than quietly assumed.
        </p>
        <p>
          Set against a traditional package covering entertainment, sport and
          film, the annual difference for a UK household typically runs to
          several hundred pounds. That comparison is set out properly, with the
          caveats it deserves, on the{" "}
          <Link href="/iptv-cost" className={linkCls}>
            IPTV cost page
          </Link>
          , and the{" "}
          <Link href="/cheap-iptv-uk" className={linkCls}>
            cheap IPTV UK page
          </Link>{" "}
          covers where the saving actually comes from.
        </p>
      </>
    ),
  },
  {
    id: "mistakes",
    h2: "The mistakes first-time buyers make",
    body: (
      <>
        <p>
          <strong className="text-foreground font-semibold">
            Buying on channel count.
          </strong>{" "}
          A headline number in the hundreds of thousands is padding: duplicate
          feeds, dead entries and every regional variant counted separately.
          What matters is whether the twenty channels you actually watch are
          present and stable.
        </p>
        <p>
          <strong className="text-foreground font-semibold">
            Testing at the wrong time.
          </strong>{" "}
          Every provider in this market looks flawless on a Wednesday
          afternoon. The test that separates them is Saturday teatime, when the
          whole country loads the same fixtures within the same minute.
        </p>
        <p>
          <strong className="text-foreground font-semibold">
            Blaming the provider for the Wi-Fi.
          </strong>{" "}
          Before reporting buffering, plug the device into the router with a
          cable and try again. It resolves the majority of cases.
        </p>
        <p>
          <strong className="text-foreground font-semibold">
            Paying before testing support.
          </strong>{" "}
          Message a provider a real question before you spend anything. The
          reply time you get as a prospect is the best available prediction of
          the reply time you get as a customer.
        </p>
        <p>
          <strong className="text-foreground font-semibold">
            Taking the shortest term by default.
          </strong>{" "}
          With a 30-day guarantee covering every plan, the short term protects
          you against far less than buyers assume, at a materially higher
          monthly rate.
        </p>
      </>
    ),
  },
  {
    id: "how-to-order",
    h2: "How to buy",
    body: (
      <p>
        Choose a term on the{" "}
        <Link href="/#pricing" className={linkCls}>
          pricing table
        </Link>
        , press the order button, and a WhatsApp conversation opens with your
        plan pre-filled. Confirm it, mention which devices you intend to use,
        and complete payment in the thread. Credentials and device-specific
        setup instructions arrive in the same conversation, normally within
        five minutes. Everything stays in one place, so when you need help in
        month seven you are messaging the thread that already contains your
        order. The{" "}
        <Link href="/iptv-buy" className={linkCls}>
          step-by-step purchase walkthrough
        </Link>{" "}
        covers the process in more detail, including what to have ready before
        you start.
      </p>
    ),
  },
];

const FAQS: readonly SeoFaq[] = [
  {
    q: "Is it legal to buy IPTV in the UK?",
    a: "Buying from a service that runs its own infrastructure and pays for the content it distributes is legal. IPTV as a technology is used by every major UK broadcaster. The legal risk sits with unlicensed re-broadcasters, which are usually identifiable by absent refund terms, no company details and no reachable support.",
  },
  {
    q: "How much does it cost to buy IPTV?",
    a: "Three months is £25.99 (£8.66/month), six months £35.99 (£6.00/month), twelve months £49.99 (£4.17/month) and twenty-four months £79.99 (£2.96/month). All four include the same channels, the same 4K delivery and five simultaneous connections.",
  },
  {
    q: "Do I need a special box to buy IPTV?",
    a: "No. Any device that runs an app works — Fire TV Stick, Apple TV, Android TV, Nvidia Shield, Samsung and LG smart TVs, phones, tablets, Windows and Mac. Dedicated MAG, Formuler and Enigma2 receivers are supported but not required.",
  },
  {
    q: "What internet speed do I need?",
    a: "Roughly 8–10 Mbps per HD stream, about 15 Mbps for Full HD and around 25 Mbps for a genuine 4K stream. A household running three screens at once should have 50–60 Mbps. Wiring the main TV to the router with Ethernet matters more than raw speed.",
  },
  {
    q: "How quickly can I start watching after buying?",
    a: "Usually within five minutes. Credentials arrive in the WhatsApp thread you ordered through, with setup instructions for your device. Nothing is posted and no installation appointment is needed.",
  },
  {
    q: "Is there a contract when you buy IPTV?",
    a: "No. You buy a fixed term and it ends when it ends. No credit check, no early-termination fee, no automatic renewal and no stored card. If you want to continue you buy another term.",
  },
  {
    q: "Can I get a refund if I do not like it?",
    a: "Yes — every first-time purchase carries a 30-day money-back guarantee, processed back to your original payment method with no form and no retention call. Renewals carry a seven-day window instead, stated openly on the refund page.",
  },
  {
    q: "How many people can watch at once?",
    a: "Five simultaneous streams are included on every plan. You can install the player on more devices than that; the limit applies to concurrent viewing, not installations. Extra simultaneous connections can be added at checkout for the term.",
  },
] as const;

export default function BuyIptvPage() {
  return (
    <SeoLanding
      pagePath={PAGE_PATH}
      breadcrumbName="Buy IPTV"
      badge="Buy IPTV"
      h1Lead="Buy IPTV —"
      h1Accent="No Dish, No Contract, No Box"
      intro={
        <p>
          Buying IPTV means paying for access to television delivered over your
          broadband line, on hardware you already own, with no installation and
          no minimum contract. This page explains what that actually involves,
          how to tell a licensed provider from a re-broadcaster, what you need
          in place before you buy, and what the whole thing costs. If you
          already know the territory and just want the purchase steps, go
          straight to the{" "}
          <Link href="/iptv-buy" className={linkCls}>
            buying walkthrough
          </Link>
          .
        </p>
      }
      sections={SECTIONS}
      midCtaAfter={3}
      midCtaText="37,000 channels, native 4K, five screens — from £2.96 a month."
      midCtaLabel="See Plans & Pricing"
      faqs={FAQS}
      faqHeading="Buying IPTV"
      closingLead="Everything included,"
      closingAccent="nothing to install"
      closingBody={
        <p>
          One subscription, five screens, no engineer and no equipment to
          return. If it is not right for you, the 30-day money-back guarantee
          is published in full on the{" "}
          <Link href="/refund" className={linkCls}>
            refund page
          </Link>{" "}
          — read it before you buy rather than after.
        </p>
      }
      ctaLabel="Buy IPTV Today"
      secondaryHref="/best-iptv-subscription"
      secondaryLabel="Or learn how to judge a provider first"
      serviceType="IPTV Service"
      pageTitle={PAGE_TITLE}
      pageDescription={PAGE_DESCRIPTION}
    />
  );
}
