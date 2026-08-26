import type { Metadata } from "next";
import Link from "next/link";
import SeoLanding, {
  linkCls,
  type SeoFaq,
  type SeoSection,
} from "@/components/SeoLanding";
import { buildLandingMetadata } from "@/lib/seo";

/* Primary keyword: "iptv subscriptions uk".
   Angle: market structure — the categories of IPTV subscription a UK buyer
   will encounter and what each means for them. Deliberately distinct from
   /uk-iptv-subscriptions, which covers the comparison workflow, and from
   /best-iptv-subscription-uk, which covers selection criteria. */

const PAGE_PATH = "/iptv-subscriptions-uk";
const PAGE_TITLE =
  "IPTV Subscriptions UK — The Four Kinds You Will Actually Meet";
const PAGE_DESCRIPTION =
  "The UK IPTV market explained: the four categories of subscription on offer, what each means for reliability and legality, and which suits which kind of household.";

export const metadata: Metadata = buildLandingMetadata({
  path: PAGE_PATH,
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  imageAlt: "IPTV subscriptions UK — the categories of provider explained",
});

const SECTIONS: SeoSection[] = [
  {
    id: "market-shape",
    h2: "The shape of the UK market",
    body: (
      <>
        <p>
          Search for an IPTV subscription in Britain and you will be shown
          hundreds of options that look broadly identical: similar channel
          counts, similar promises about 4K, similar pricing. They are not
          identical, and the differences that matter are structural rather than
          cosmetic.
        </p>
        <p>
          Almost everything on offer falls into one of four categories. Which
          category a provider belongs to tells you more about what your
          experience will be — whether it still exists in a year, whether
          anyone answers when a channel dies, whether the picture holds at
          Saturday teatime — than any feature list will.
        </p>
        <p>
          The categories are rarely stated on a website, because two of them
          have every reason not to advertise what they are. But they are
          identifiable from the outside once you know what to look at, and the
          rest of this page is about how.
        </p>
      </>
    ),
  },
  {
    id: "broadcaster-iptv",
    h2: "One — broadcaster and platform IPTV",
    body: (
      <>
        <p>
          The mainstream services delivered over internet protocol by
          established broadcasters and streaming platforms. This category is
          worth naming because most people do not realise it is IPTV at all —
          the technology carrying a mainstream on-demand app is the same
          technology carrying a subscription service.
        </p>
        <p>
          The characteristics are predictable. Content is limited to what that
          particular broadcaster or platform owns or has licensed, so covering
          entertainment, sport and film means subscribing to several. Pricing
          is per service and accumulates quietly. Reliability is generally
          excellent. Legal position is unambiguous.
        </p>
        <p>
          The reason UK households look beyond this category is arithmetic
          rather than dissatisfaction: covering the same ground across several
          separate services, each with its own bill and renewal date, is what
          produces the £60&ndash;£110 monthly totals discussed on the{" "}
          <Link href="/cheap-iptv-uk" className={linkCls}>
            cheap IPTV UK page
          </Link>
          .
        </p>
      </>
    ),
  },
  {
    id: "direct-providers",
    h2: "Two — providers running their own infrastructure",
    body: (
      <>
        <p>
          Independent services that operate their own streaming servers, hold
          their own supply arrangements and sell directly to subscribers. This
          is the category we belong to, so read what follows with that in mind
          and verify it rather than accepting it.
        </p>
        <p>
          The identifying characteristics are practical. Capacity problems are
          theirs to fix rather than theirs to apologise for, which shows up as
          stability at peak times. Support is staffed rather than absent,
          because there is a business to protect. Refund terms are published,
          because a provider expecting to exist next year can afford to commit
          to them. And they will answer a specific question about where their
          edge servers sit without treating it as an intrusion.
        </p>
        <p>
          Prices in this category cluster in the low single-figure pounds per
          month on longer terms — ours run £2.96 to £8.66 depending on length.
          That is well below broadcaster pricing and well above the bottom of
          the market, and the gap in both directions is explained by cost
          structure rather than by quality alone.
        </p>
      </>
    ),
  },
  {
    id: "resellers",
    h2: "Three — resellers",
    body: (
      <>
        <p>
          By volume this is the largest category in the UK market, and it is
          the one most buyers end up in without realising.
        </p>
        <p>
          A reseller buys a stream package wholesale from an upstream supplier,
          applies its own branding and sells it on. It does not run servers, does
          not control capacity and cannot fix a broken feed — it can only
          report the problem upstream and wait, exactly as you are waiting.
          Some resellers are perfectly honest operations providing decent
          customer service on top of somebody else&rsquo;s infrastructure.
        </p>
        <p>
          The structural risk is not dishonesty, it is fragility. When the
          upstream supplier fails or disappears, every reseller beneath it goes
          dark simultaneously and none can do anything about it. This is the
          single largest cause of subscriptions vanishing mid-term in this
          market — far more common than enforcement action, which most buyers
          assume is the main hazard.
        </p>
        <p>
          Resellers are identifiable by deflection. Ask where the servers are
          and you will get vagueness, a claim of a global network with no
          specifics, or a change of subject. The question is worth asking every
          time.
        </p>
      </>
    ),
  },
  {
    id: "restreams",
    h2: "Four — unlicensed restream operations",
    body: (
      <>
        <p>
          Services retransmitting protected output without holding the rights
          to do so. This is where the legal exposure in the UK market actually
          sits, and it is worth being precise about, because the common
          assumption that IPTV as a whole occupies a legal grey area is simply
          wrong. The technology is used by every major British broadcaster.
        </p>
        <p>
          These operations are usually identifiable by a combination of
          signals rather than any single one: prices materially below what
          delivery costs, channel counts running to six figures, lifetime
          subscription offers, no published refund terms, no company footprint,
          no DMCA process and no reachable human before purchase.
        </p>
        <p>
          They are also, for entirely practical reasons, the worst services to
          buy from even setting legality aside. They have the least incentive
          to invest in capacity, the least reason to answer support requests
          and the shortest expected lifespan. A subscription that disappears in
          month three has cost you more than a dearer one that lasts two years.
        </p>
      </>
    ),
  },
  {
    id: "what-uk-households-watch",
    h2: "What UK households actually use a subscription for",
    body: (
      <>
        <p>
          Worth knowing because it should shape what you check before buying,
          and it rarely matches the marketing emphasis.
        </p>
        <p>
          Live sport is the most common reason British households move to IPTV,
          and it is also the most demanding technically — a sharp national
          load spike at Saturday teatime and Sunday afternoon, which is where
          under-provisioned services fail. Everyday entertainment viewing is
          the largest share of hours but the least demanding. Films and box
          sets on demand come next, where catalogue depth matters more than
          channel count. Regional and terrestrial coverage matters more to UK
          viewers than to almost any other market, because of how heavily
          regionalised British broadcasting is — regional variants and +1
          timeshift channels are routinely missing from services built
          elsewhere.
        </p>
        <p>
          The practical implication is that you should audit a provider against
          your own twenty most-watched channels, and test it on a Saturday
          rather than a Tuesday. Both are covered in detail on the{" "}
          <Link href="/best-iptv-subscription-uk" className={linkCls}>
            UK selection guide
          </Link>
          .
        </p>
      </>
    ),
  },
  {
    id: "which-suits-whom",
    h2: "Which category suits which household",
    body: (
      <p>
        If you watch one broadcaster&rsquo;s output and nothing else,
        subscribing to that broadcaster directly is the simplest answer and
        this whole market is irrelevant to you. If you want broad coverage —
        entertainment, live sport, films, regional and international channels —
        across several screens without paying four separate bills, an
        independent provider running its own infrastructure is the category to
        shop in, and the question then becomes how to tell those apart from
        resellers. If a price looks impossibly low, it is worth understanding
        why before treating it as a bargain; the{" "}
        <Link href="/cheap-iptv" className={linkCls}>
          cheap IPTV page
        </Link>{" "}
        covers the economics. And when you have a shortlist, the{" "}
        <Link href="/uk-iptv-subscriptions" className={linkCls}>
          comparison workflow
        </Link>{" "}
        sets out how to score them against each other.
      </p>
    ),
  },
];

const FAQS: readonly SeoFaq[] = [
  {
    q: "What types of IPTV subscription are available in the UK?",
    a: "Four categories: broadcaster and platform services delivered over IP, independent providers running their own infrastructure, resellers rebranding a wholesale package, and unlicensed restream operations. Which category a provider belongs to predicts your experience better than any feature list.",
  },
  {
    q: "How do I tell a real provider from a reseller?",
    a: "Ask where their edge servers are. A provider running its own infrastructure answers with specifics and treats it as a normal question. A reseller deflects, is vague, or claims a global network it cannot describe. It costs nothing to ask.",
  },
  {
    q: "Why do resellers matter if the service works?",
    a: "Because they cannot fix anything. They do not control capacity and cannot repair a broken feed — only report it upstream and wait. When the upstream supplier fails, every reseller beneath it goes dark at once. That is the biggest single cause of subscriptions vanishing mid-term.",
  },
  {
    q: "Is IPTV legal in the UK?",
    a: "The technology is entirely mainstream and used by every major British broadcaster. Legality depends on whether the specific provider holds rights to what it distributes. Unlicensed restream operations are where the exposure sits — and they are also the least reliable services to buy from.",
  },
  {
    q: "What do UK households mainly use IPTV for?",
    a: "Live sport is the most common driver and the most technically demanding, with a sharp national load spike at Saturday teatime. Everyday entertainment accounts for the most hours. Films and box sets follow. Regional and terrestrial coverage matters more in Britain than in most markets.",
  },
  {
    q: "Why are regional variants important for UK subscriptions?",
    a: "British terrestrial channels carry different regional news and some different programming by area, and +1 timeshift channels are heavily used. Services built for other markets routinely carry a single generic national feed, which looks complete in a channel list and feels wrong in use.",
  },
  {
    q: "How much do UK IPTV subscriptions cost?",
    a: "Independent providers typically sit in the low single-figure pounds per month on longer terms. Ours run £25.99 for three months, £35.99 for six, £49.99 for twelve and £79.99 for twenty-four — £8.66 down to £2.96 a month.",
  },
  {
    q: "Which type of subscription should I choose?",
    a: "If you only watch one broadcaster's output, subscribe to them directly. If you want broad coverage across several screens without multiple bills, shop among independent providers running their own infrastructure — then verify which ones actually do, rather than which ones claim to.",
  },
] as const;

export default function IptvSubscriptionsUkPage() {
  return (
    <SeoLanding
      pagePath={PAGE_PATH}
      breadcrumbName="IPTV Subscriptions UK"
      badge="IPTV Subscriptions UK"
      h1Lead="IPTV Subscriptions UK —"
      h1Accent="Four Categories, Not Hundreds of Options"
      intro={
        <p>
          The British IPTV market looks like hundreds of near-identical
          services. Structurally there are four kinds, and knowing which one
          you are dealing with predicts your experience far better than any
          channel count: whether it still exists next year, whether anyone
          answers when a feed dies, and whether the picture holds at Saturday
          teatime.
        </p>
      }
      sections={SECTIONS}
      midCtaAfter={3}
      midCtaText="Own infrastructure, published refund terms, support that answers."
      midCtaLabel="See Our Plans"
      faqs={FAQS}
      faqHeading="UK IPTV Subscriptions"
      closingLead="Work out which category"
      closingAccent="you are buying from"
      closingBody={
        <p>
          Ask where the servers are. Read the refund terms before paying. Both
          questions separate the four categories quickly, and ours are answered
          on the{" "}
          <Link href="/refund" className={linkCls}>
            refund page
          </Link>{" "}
          and in any message you care to send us before spending anything.
        </p>
      }
      ctaLabel="See Plans & Pricing"
      secondaryHref="/best-iptv-subscription-uk"
      secondaryLabel="Or read the UK selection criteria"
      serviceType="IPTV Subscription"
      pageTitle={PAGE_TITLE}
      pageDescription={PAGE_DESCRIPTION}
    />
  );
}
