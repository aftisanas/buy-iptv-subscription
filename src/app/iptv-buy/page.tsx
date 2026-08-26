import type { Metadata } from "next";
import Link from "next/link";
import SeoLanding, {
  linkCls,
  type SeoFaq,
  type SeoSection,
} from "@/components/SeoLanding";
import { buildLandingMetadata } from "@/lib/seo";

/* Primary keyword: "iptv buy".
   Angle: the mechanics of the transaction itself — preparation, the order
   flow minute by minute, first-hour setup and what to do if something is
   wrong on day one. Concept and legality live on /buy-iptv. */

const PAGE_PATH = "/iptv-buy";
const PAGE_TITLE = "IPTV Buy — The Five-Minute Purchase, Step by Step";
const PAGE_DESCRIPTION =
  "How to buy IPTV start to finish: what to decide before ordering, the WhatsApp purchase flow, activation timings and getting your first device running in the first hour.";

export const metadata: Metadata = buildLandingMetadata({
  path: PAGE_PATH,
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  imageAlt: "IPTV buy — step-by-step purchase and activation walkthrough",
});

const SECTIONS: SeoSection[] = [
  {
    id: "before-you-start",
    h2: "Three decisions to make before you order",
    body: (
      <>
        <p>
          The purchase itself takes about five minutes. Almost all of the time
          people spend buying is spent deciding, so making these three calls
          first turns the order into a formality.
        </p>
        <p>
          <strong className="text-foreground font-semibold">
            How long a term.
          </strong>{" "}
          Three months at £25.99, six at £35.99, twelve at £49.99 or
          twenty-four at £79.99. The content is identical; only the effective
          monthly rate changes, from £8.66 down to £2.96. Because the 30-day
          guarantee applies to all four, the shorter terms protect you against
          less than most buyers assume.
        </p>
        <p>
          <strong className="text-foreground font-semibold">
            How many screens at once.
          </strong>{" "}
          Five simultaneous connections are included, which covers most
          households. Count the screens that would realistically be running at
          the same moment on a Saturday evening, not the total number of
          devices you own. If that number exceeds five, add connections at
          checkout — doing it then is cheaper than adding them mid-term.
        </p>
        <p>
          <strong className="text-foreground font-semibold">
            Which devices.
          </strong>{" "}
          Have a list ready. It determines which setup instructions you are
          sent, and it lets support pre-empt the quirks of particular
          platforms. A Fire TV Stick, an LG television and an iPhone each need
          slightly different first steps.
        </p>
      </>
    ),
  },
  {
    id: "the-order-flow",
    h2: "The order, minute by minute",
    body: (
      <>
        <p>
          <strong className="text-foreground font-semibold">
            Minute one.
          </strong>{" "}
          On the{" "}
          <Link href="/#pricing" className={linkCls}>
            pricing table
          </Link>{" "}
          you select a term and, if you need them, extra connections. The total
          updates as you change the selection, so the figure you see is the
          figure you pay — there is no basket stage that adds fees later.
        </p>
        <p>
          <strong className="text-foreground font-semibold">
            Minute two.
          </strong>{" "}
          Pressing the order button opens WhatsApp with a message already
          composed containing the plan, the term and any add-ons. Nothing is
          typed by hand, so nothing gets mistyped. You send it as it stands.
        </p>
        <p>
          <strong className="text-foreground font-semibold">
            Minute three.
          </strong>{" "}
          A person confirms the order back to you and asks which devices you
          plan to use. This is the moment to raise anything unusual — an
          older television, a particular receiver, a household with more
          screens than usual — because it is easier to configure correctly than
          to correct afterwards.
        </p>
        <p>
          <strong className="text-foreground font-semibold">
            Minute four.
          </strong>{" "}
          You complete payment using the method agreed in the thread.
        </p>
        <p>
          <strong className="text-foreground font-semibold">
            Minute five.
          </strong>{" "}
          Your credentials arrive — a portal address, a username and a password
          — with a setup walkthrough matched to the devices you named. From
          here you are watching within a few more minutes.
        </p>
      </>
    ),
  },
  {
    id: "why-whatsapp",
    h2: "Why the order runs through WhatsApp",
    body: (
      <>
        <p>
          A checkout form is faster to build and it is what most buyers expect,
          so the choice deserves an explanation rather than an assertion.
        </p>
        <p>
          The first reason is continuity. When something needs attention in
          month seven, you are messaging the same conversation that contains
          your order, your credentials and everything you were told at the
          point of sale. There is no ticket to raise, no reference number to
          find and no need to re-establish who you are to somebody who has
          never spoken to you. In a market where support quality is the main
          differentiator, that continuity is worth more than the thirty seconds
          a form would save.
        </p>
        <p>
          The second is that it forces a human into the transaction before
          money changes hands. You get to ask a real question and judge the
          answer before committing, which is exactly the test we recommend you
          apply to every provider you are considering, including this one.
        </p>
        <p>
          The third is accountability in your favour: the thread is a written
          record of what was promised. If a claim made at the point of sale
          turns out not to hold, you have it in writing rather than in memory.
        </p>
      </>
    ),
  },
  {
    id: "first-hour",
    h2: "Your first hour after buying",
    body: (
      <>
        <p>
          Start with the main television rather than a phone. It is the screen
          that matters most and the one where problems are most visible, so it
          is the one worth getting right first.
        </p>
        <p>
          Install the player application named in your setup message, enter the
          portal address and credentials exactly as sent, and then wait. The
          first load takes two to three minutes because the full channel list
          and a seven-day programme guide are being downloaded. This pause
          catches people out and gets mistaken for a failure — leave it alone
          and let it finish. Subsequent loads are near-instant.
        </p>
        <p>
          Once the guide has populated, open a channel you know well and watch
          it for a couple of minutes rather than flicking immediately. You are
          checking that the picture holds steady, that audio is in sync, and
          that the resolution matches what you expect from that channel. Then
          try a second channel in a different category — a film channel after a
          news channel, say — because the two are often served from different
          sources.
        </p>
        <p>
          Only then set up the remaining devices. Doing them one at a time
          means that if something misbehaves you know which change caused it.
        </p>
      </>
    ),
  },
  {
    id: "day-one-problems",
    h2: "If something is wrong on day one",
    body: (
      <>
        <p>
          Work through this order before reporting a fault, because it resolves
          most first-day issues in a couple of minutes.
        </p>
        <p>
          <strong className="text-foreground font-semibold">
            Buffering on one device only.
          </strong>{" "}
          Almost always the network rather than the stream. Plug that device
          into the router with an Ethernet cable and try again. If wired
          playback is clean, the problem was wireless and no amount of
          provider-side work will fix it.
        </p>
        <p>
          <strong className="text-foreground font-semibold">
            Buffering on every device at once.
          </strong>{" "}
          Check your broadband speed. If the line is fine, message support with
          the time and the channel so it can be traced.
        </p>
        <p>
          <strong className="text-foreground font-semibold">
            Credentials rejected.
          </strong>{" "}
          Nearly always a transcription error — a confused zero and letter O,
          or a trailing space copied in. Paste rather than type.
        </p>
        <p>
          <strong className="text-foreground font-semibold">
            One channel dead, the rest fine.
          </strong>{" "}
          Report that specific channel. A replacement stream is usually pushed
          within minutes.
        </p>
        <p>
          <strong className="text-foreground font-semibold">
            Picture soft on a 4K television.
          </strong>{" "}
          Check whether that broadcast is genuinely produced in 4K. Most are
          not, and no provider can deliver UHD from an HD source however much
          they claim otherwise.
        </p>
      </>
    ),
  },
  {
    id: "payment-safety",
    h2: "Paying safely",
    body: (
      <p>
        Sensible precautions apply here as with any online purchase. Confirm
        the price in the thread before paying so both sides have the figure in
        writing. Do not send payment to a different account from the one quoted
        in the conversation, and treat any mid-transaction change of payment
        details as a reason to stop and re-verify — that pattern is a common
        interception scam across every industry, not just this one. Keep the
        thread rather than deleting it, since it is your record of the
        transaction and of the refund terms you bought under. Those terms are
        published in full on the{" "}
        <Link href="/refund" className={linkCls}>
          refund page
        </Link>{" "}
        and are worth reading before you pay rather than after.
      </p>
    ),
  },
  {
    id: "after-purchase",
    h2: "After the purchase",
    body: (
      <p>
        Nothing renews automatically. There is no stored card and no quiet
        rollover at a higher rate; when the term ends, access stops unless you
        choose to buy another. Support stays in the same thread around the
        clock for the life of the subscription. If your household grows and
        five simultaneous connections stop being enough, extra connections can
        be added part-way through a term, though buying them at the outset
        costs less. And if you decide within thirty days that it is not for
        you, ask in that same thread and the money goes back. For the wider
        buying context — what you are purchasing and how to judge sellers — see{" "}
        <Link href="/buy-iptv-subscription" className={linkCls}>
          buy IPTV subscription
        </Link>
        .
      </p>
    ),
  },
];

const FAQS: readonly SeoFaq[] = [
  {
    q: "How long does it take to buy IPTV?",
    a: "About five minutes end to end. Selecting a plan and opening the pre-filled WhatsApp message takes under two minutes, confirmation and payment another two, and credentials normally arrive within five minutes of payment clearing.",
  },
  {
    q: "What do I need to decide before ordering?",
    a: "Three things: which term you want, how many screens will realistically stream at the same time, and which devices you intend to use. Having those ready turns the order into a formality and lets support send the right setup instructions first time.",
  },
  {
    q: "Why is the order taken over WhatsApp instead of a checkout page?",
    a: "So that support in month seven happens in the same thread that holds your order and credentials, with no ticket to raise. It also puts a human in the transaction before you pay, which lets you test response times, and it leaves you a written record of what was promised.",
  },
  {
    q: "Why does the channel list take a few minutes to appear?",
    a: "The first load downloads the full channel list and a seven-day programme guide, which takes two to three minutes. This is normal and often mistaken for a failure. Later loads are near-instant.",
  },
  {
    q: "What should I do first if a stream buffers?",
    a: "Connect that device to the router with an Ethernet cable and try again. Wireless is the most common cause of buffering blamed on providers. If wired playback is clean the network was the problem; if every device buffers at once, check your line speed and then message support with the time and channel.",
  },
  {
    q: "My credentials are being rejected — what is wrong?",
    a: "Almost always a transcription error: a zero mistaken for a letter O, or a trailing space copied along with the password. Paste the details rather than typing them. If it still fails, message the thread and they will be reissued.",
  },
  {
    q: "Can I add more connections after I have bought?",
    a: "Yes, mid-term additions are possible through the same thread, but adding them at the point of purchase costs less. Five simultaneous connections are included as standard on every plan.",
  },
  {
    q: "Is there anything to cancel later?",
    a: "No. Nothing renews on its own, there is no stored card and no cancellation process. The term simply ends. If you want to continue you buy another one.",
  },
] as const;

export default function IptvBuyPage() {
  return (
    <SeoLanding
      pagePath={PAGE_PATH}
      breadcrumbName="IPTV Buy"
      badge="IPTV Buy"
      h1Lead="IPTV Buy —"
      h1Accent="From Order to Watching in Minutes"
      intro={
        <p>
          This is the practical walkthrough: what to decide before you order,
          exactly what happens during the five minutes the purchase takes, how
          to get your first device running, and what to check if something
          looks wrong on day one. For what an IPTV subscription actually is and
          how to tell providers apart, start with{" "}
          <Link href="/buy-iptv" className={linkCls}>
            buy IPTV
          </Link>{" "}
          instead.
        </p>
      }
      sections={SECTIONS}
      midCtaAfter={2}
      midCtaText="Plan pre-filled, credentials in minutes, no account to create."
      midCtaLabel="Start Your Order"
      faqs={FAQS}
      faqHeading="Buying IPTV"
      closingLead="Order in five minutes,"
      closingAccent="watching in ten"
      closingBody={
        <p>
          Pick a term, send the pre-filled message, and your credentials come
          back in the same thread with instructions for your device. If day one
          does not go the way you hoped, the 30-day guarantee on the{" "}
          <Link href="/refund" className={linkCls}>
            refund page
          </Link>{" "}
          means you are not stuck with it.
        </p>
      }
      ctaLabel="Buy IPTV Now"
      secondaryHref="/iptv-price"
      secondaryLabel="Or check the price list first"
      serviceType="IPTV Subscription"
      pageTitle={PAGE_TITLE}
      pageDescription={PAGE_DESCRIPTION}
    />
  );
}
