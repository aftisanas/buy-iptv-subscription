import type { Metadata } from "next";
import Link from "next/link";
import SeoLanding, {
  linkCls,
  type SeoFaq,
  type SeoSection,
} from "@/components/SeoLanding";
import { buildLandingMetadata } from "@/lib/seo";

/* Primary keyword: "best iptv subscription".
   Angle: a provider-agnostic evaluation framework — the criteria and how to
   weight them. UK-specific criteria live on /best-iptv-subscription-uk. */

const PAGE_PATH = "/best-iptv-subscription";
const PAGE_TITLE = "Best IPTV Subscription — A Seven-Point Test You Can Apply";
const PAGE_DESCRIPTION =
  "How to judge any IPTV subscription: infrastructure, real channel quality, peak-time stability, support, refund terms and pricing honesty — scored on a test you can run yourself.";

export const metadata: Metadata = buildLandingMetadata({
  path: PAGE_PATH,
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  imageAlt: "Best IPTV subscription — a seven-point evaluation test",
});

const SECTIONS: SeoSection[] = [
  {
    id: "what-best-means",
    h2: "What “best” should mean here",
    body: (
      <>
        <p>
          Almost every &ldquo;best IPTV&rdquo; list online is an affiliate
          ranking, ordered by commission rather than by merit. That is worth
          saying plainly on a page published by a provider, because you should
          read this one with the same suspicion. The useful thing we can give
          you is not our own name at the top of a list — it is the test itself,
          written so you can apply it to anyone, us included.
        </p>
        <p>
          The second problem with most rankings is that they optimise for the
          wrong variable. Channel count is the number everyone quotes and it is
          close to meaningless: a service advertising 140,000 channels is
          counting duplicate feeds, dead entries and every regional variant
          separately. If the twenty channels you actually watch are unstable,
          the other 139,980 are irrelevant.
        </p>
        <p>
          What separates a subscription worth keeping from one you will abandon
          in three months is boring and unglamorous: does the picture hold at
          peak, does a human answer when something breaks, and can you get your
          money back if the answer to either is no. Everything below is built
          around those three questions.
        </p>
      </>
    ),
  },
  {
    id: "infrastructure",
    h2: "One — who actually runs the servers",
    body: (
      <>
        <p>
          This is the highest-weighted criterion and the hardest to fake. A
          provider running its own streaming infrastructure controls its own
          capacity, can add servers when demand rises and can fix a broken feed
          directly. A reseller buying a wholesale package can do none of those
          things: when the upstream supply fails, every reseller downstream
          fails simultaneously and none of them can do anything but wait.
        </p>
        <p>
          That is why this market has such a reputation for services vanishing
          overnight. It is rarely enforcement that kills them — it is the
          supplier above them disappearing and taking a hundred downstream
          brands with it.
        </p>
        <p>
          You cannot audit this from outside, but you can probe it. Ask where
          the edge servers are located. A provider running its own
          infrastructure will answer with specifics and will not treat the
          question as strange. A reseller will deflect, answer vaguely, or
          claim a global network without being able to name anything in it. The
          question costs you nothing and the quality of the answer is
          informative regardless of what the answer is.
        </p>
      </>
    ),
  },
  {
    id: "peak-stability",
    h2: "Two — stability when the country is watching",
    body: (
      <>
        <p>
          Every service in this market performs well on a Wednesday afternoon.
          Capacity is only tested when a large fraction of subscribers load the
          same event within the same minute, which in the UK means Saturday
          teatime and Sunday afternoon.
        </p>
        <p>
          Two numbers matter and neither appears on a pricing page. The first
          is end-to-end latency: how far behind live you are. Anything inside
          about thirty seconds is acceptable. Beyond that, a neighbour&rsquo;s
          reaction through the wall reaches you before the goal does, which
          ruins live sport in a way no amount of picture quality compensates
          for. The second is recovery behaviour when a packet is dropped. A
          well-built service re-fetches and continues within a second or two,
          softening the picture briefly. A poorly built one stalls, spins and
          makes you miss the moment.
        </p>
        <p>
          You cannot test this before buying, which is precisely why the refund
          window matters so much — it is the only mechanism that lets you run
          the real test without risk. Any provider whose guarantee expires
          before you have sat through several peak weekends has given you a
          window too short to discover the thing most likely to disappoint you.
        </p>
      </>
    ),
  },
  {
    id: "real-quality",
    h2: "Three — resolution claims that survive contact with a television",
    body: (
      <>
        <p>
          Treat &ldquo;4K&rdquo; on a feature list as a claim to be verified
          rather than a specification. Only a minority of broadcasts are
          genuinely produced in 4K. Any provider implying that its entire
          line-up is UHD is either upscaling 1080p and labelling it 4K, or is
          not being straight with you — and upscaled 1080p on a large modern
          television is obvious once you know to look for it.
        </p>
        <p>
          The honest position is the one worth looking for: feeds that are
          produced in 4K are delivered in 4K, and everything else arrives at
          the resolution it was made in. A provider willing to tell you that
          most channels are not 4K is displaying the kind of candour that tends
          to correlate with the rest of the service.
        </p>
        <p>
          Test it on live sport rather than on a film. Fast lateral motion, a
          wide pitch shot and floodlighting are exactly the conditions where
          upscaling falls apart and native UHD holds together. A static studio
          shot will look fine either way and tells you nothing.
        </p>
      </>
    ),
  },
  {
    id: "support",
    h2: "Four — whether a person answers",
    body: (
      <>
        <p>
          Streams break. Channels move, feeds are replaced and occasionally
          something fails at the worst possible moment. The differentiator is
          not whether that ever happens — it happens to everyone — but how long
          it takes to be fixed and whether you are talking to a person while
          you wait.
        </p>
        <p>
          There is a free test and everyone should run it: message a provider a
          specific, real question before spending anything, at an inconvenient
          hour, and time the reply. Pre-sales response is the best available
          predictor of post-sales response, and it is the one measurement you
          can take at zero cost and zero risk. A provider that takes six hours
          to answer a prospective customer will not take six minutes to answer
          an existing one.
        </p>
        <p>
          Judge the substance too, not just the speed. An answer that engages
          with the specifics of your question is worth more than a fast
          template. Ask something that cannot be answered from a script — how
          they handle a particular device, or what happens if a specific
          channel drops mid-event.
        </p>
      </>
    ),
  },
  {
    id: "refund-terms",
    h2: "Five — refund terms published before you pay",
    body: (
      <>
        <p>
          This is the single most reliable signal in the entire market, and it
          is available to you before you spend anything.
        </p>
        <p>
          A provider that publishes its refund terms in full — the window, the
          exclusions, the processing time, the difference between first
          purchases and renewals — has committed to something it can be held
          to. A provider that will not put those terms in writing before taking
          your money has already told you what will happen when you ask for it
          back. The correlation between published refund terms and every other
          quality marker in this industry is remarkably strong, which makes
          this a good first filter: apply it before you spend time on anything
          else.
        </p>
        <p>
          Look at length as well as existence. A seven-day window sounds
          reasonable and is not, because it expires before you have tested
          peak-time performance across several weekends. Ours runs thirty days
          on first purchases and is set out on the{" "}
          <Link href="/refund" className={linkCls}>
            refund page
          </Link>
          , including the shorter seven-day window that applies to renewals —
          which is stated openly rather than discovered later.
        </p>
      </>
    ),
  },
  {
    id: "pricing-honesty",
    h2: "Six and seven — pricing honesty and connection limits",
    body: (
      <>
        <p>
          <strong className="text-foreground font-semibold">
            Pricing honesty.
          </strong>{" "}
          Check whether the price you first see is the price you pay. Watch for
          tiers that withhold sport or films from cheaper plans, per-event
          charges for headline fixtures, equipment fees, activation fees, and
          renewal rates that differ from the introductory rate without saying
          so. Our four terms differ only in length: £25.99 for three months,
          £35.99 for six, £49.99 for twelve and £79.99 for twenty-four, with
          identical content on each. The{" "}
          <Link href="/iptv-price" className={linkCls}>
            price page
          </Link>{" "}
          sets out what drives those numbers.
        </p>
        <p>
          <strong className="text-foreground font-semibold">
            Connection limits.
          </strong>{" "}
          Find out how many simultaneous streams are included and what extras
          cost. A single-connection plan is unworkable for most households and
          is often the hidden catch behind a headline price. Five are included
          here on every plan, with additional connections priced per term.
        </p>
        <p>
          Score a shortlist across all seven criteria rather than weighing any
          one in isolation. A provider strong on infrastructure and support but
          with a seven-day refund window is a reasonable bet; one with a
          spectacular channel count, no published refund terms and slow
          pre-sales replies is the profile that most often ends in a lost
          subscription fee.
        </p>
      </>
    ),
  },
];

const FAQS: readonly SeoFaq[] = [
  {
    q: "What makes one IPTV subscription better than another?",
    a: "Whether the provider runs its own infrastructure, how the streams hold up at peak times, whether resolution claims are honest, how fast a human answers support, whether refund terms are published in full, whether pricing is transparent, and how many simultaneous connections are included.",
  },
  {
    q: "Is a higher channel count better?",
    a: "No. Large headline counts are inflated by duplicate feeds, dead entries and regional variants counted separately. What matters is whether the specific channels you watch are present and stable. A precise number is a better sign than a spectacular one.",
  },
  {
    q: "How can I test an IPTV service before committing?",
    a: "Message support a real question at an awkward hour before paying and time the reply — that is free and it predicts post-sales support well. Everything else requires access, which is why a long refund window matters: it is the only way to test peak-time stability without risk.",
  },
  {
    q: "Why does the refund window length matter so much?",
    a: "Because the thing most likely to disappoint you — stability when the whole country is watching the same fixture — can only be tested across several peak weekends. A seven-day window expires before you get there. Thirty days covers roughly four weekends.",
  },
  {
    q: "How do I know if a provider runs its own servers?",
    a: "Ask where the edge servers are. A provider running its own infrastructure answers with specifics and treats it as a normal question. A reseller deflects or claims a global network it cannot describe. The quality of the answer is informative either way.",
  },
  {
    q: "Should I trust 4K claims on a feature list?",
    a: "Verify them. Only a minority of broadcasts are produced in 4K, so any provider implying its whole line-up is UHD is upscaling. Test on live sport rather than a film — fast motion and wide shots expose upscaling immediately, whereas a studio shot looks fine either way.",
  },
  {
    q: "What connection limit should I look for?",
    a: "Enough to cover the screens that would realistically run at the same moment, not the total number of devices you own. Single-connection plans are the common hidden catch behind a low headline price. Five simultaneous connections are included on every plan here.",
  },
  {
    q: "Are 'best IPTV' lists online trustworthy?",
    a: "Most are affiliate rankings ordered by commission rather than merit — and you should apply the same scepticism to a page published by a provider, including this one. Use the criteria rather than the ordering, and score your own shortlist.",
  },
] as const;

export default function BestIptvSubscriptionPage() {
  return (
    <SeoLanding
      pagePath={PAGE_PATH}
      breadcrumbName="Best IPTV Subscription"
      badge="Best IPTV Subscription"
      h1Lead="Best IPTV Subscription —"
      h1Accent="The Test, Not the Ranking"
      intro={
        <p>
          Most &ldquo;best IPTV&rdquo; lists are ordered by affiliate
          commission, and you should read this one with the same scepticism
          given who publishes it. So rather than a ranking, here is the
          seven-point test itself — written so you can apply it to any provider
          you are considering, including us. For the UK-specific criteria that
          sit on top of these, see{" "}
          <Link href="/best-iptv-subscription-uk" className={linkCls}>
            best IPTV subscription UK
          </Link>
          .
        </p>
      }
      sections={SECTIONS}
      midCtaAfter={3}
      midCtaText="Thirty days to run the test properly — four peak weekends."
      midCtaLabel="See Plans & Pricing"
      faqs={FAQS}
      faqHeading="Choosing an IPTV Subscription"
      closingLead="Score us on the same test"
      closingAccent="you score everyone else on"
      closingBody={
        <p>
          Ask where the servers are. Message support before you pay and time
          the reply. Read the{" "}
          <Link href="/refund" className={linkCls}>
            refund terms
          </Link>{" "}
          before you spend anything. If we fail your test, the thirty-day
          window exists precisely so that costs you nothing.
        </p>
      }
      ctaLabel="Try It for Thirty Days"
      secondaryHref="/buy-iptv-subscription"
      secondaryLabel="Or read the buying guide"
      serviceType="IPTV Subscription"
      pageTitle={PAGE_TITLE}
      pageDescription={PAGE_DESCRIPTION}
    />
  );
}
