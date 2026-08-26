import type { Metadata } from "next";
import Link from "next/link";
import SeoLanding, {
  linkCls,
  type SeoFaq,
  type SeoSection,
} from "@/components/SeoLanding";
import { buildLandingMetadata } from "@/lib/seo";

/* Primary keyword: "best iptv subscription uk".
   Angle: the UK-specific layer only — British channel coverage, regional
   variants, UK peak-load patterns, UK support hours and the UK legal
   position. The generic criteria live on /best-iptv-subscription. */

const PAGE_PATH = "/best-iptv-subscription-uk";
const PAGE_TITLE =
  "Best IPTV Subscription UK — What Changes When You Are British";
const PAGE_DESCRIPTION =
  "The UK-specific criteria for choosing an IPTV subscription: British channel coverage, regional variants and timeshift, Saturday peak load, UK support hours and the legal position.";

export const metadata: Metadata = buildLandingMetadata({
  path: PAGE_PATH,
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  imageAlt: "Best IPTV subscription UK — UK-specific selection criteria",
});

const SECTIONS: SeoSection[] = [
  {
    id: "why-uk-specific",
    h2: "Why a UK buyer needs different criteria",
    body: (
      <>
        <p>
          The general criteria for judging any IPTV service — infrastructure,
          peak stability, honest resolution claims, real support, published
          refund terms — apply everywhere and are set out on the{" "}
          <Link href="/best-iptv-subscription" className={linkCls}>
            best IPTV subscription page
          </Link>
          . This page covers the layer that sits on top of them and only
          matters if you are watching from Britain.
        </p>
        <p>
          A great many services marketed to UK viewers are built for a
          different audience and adapted afterwards. They carry a broad
          international line-up, a handful of English-language channels, and
          nothing that reflects how British television actually works. On
          paper the channel count looks enormous. In practice you discover that
          the regional variant covering your area is missing, that timeshift
          channels are absent, that the programme guide is in the wrong time
          zone, and that support goes quiet at exactly the hours a UK household
          watches television.
        </p>
        <p>
          None of that shows up in a feature list. All of it shows up in the
          first month.
        </p>
      </>
    ),
  },
  {
    id: "channel-coverage",
    h2: "British channel coverage, properly understood",
    body: (
      <>
        <p>
          Start by ignoring the total and auditing the specifics. Write down
          the twenty channels your household genuinely watches — the
          terrestrial mainstays, the two or three entertainment channels
          somebody has on in the evening, whatever sport matters, the
          children&rsquo;s channels if they are relevant, and the news channel
          you default to. That list, not the headline figure, is your
          requirement.
        </p>
        <p>
          Then check three things a general-purpose service usually fails.
          Whether the full terrestrial set is present rather than a partial
          selection. Whether the entertainment and film channels include their
          sister channels rather than only the flagships — a great deal of what
          people actually watch sits on the secondary channels. And whether the
          catalogue includes British-produced content on demand rather than
          only international films, because a UK household's back-catalogue
          viewing skews heavily domestic.
        </p>
        <p>
          Our line-up runs to roughly 37,000 live channels with full UK
          coverage and around 198,000 films and series on demand. The number
          matters far less than the audit, which is why the thirty-day window
          exists: it lets you run the audit against a live service rather than
          against a marketing page.
        </p>
      </>
    ),
  },
  {
    id: "regional-timeshift",
    h2: "Regional variants and timeshift — the detail most services miss",
    body: (
      <>
        <p>
          British broadcasting is regionalised in a way that catches out
          services built elsewhere. Terrestrial channels carry different
          regional news and some different programming depending on where you
          are, and a household in the north-west expects a different feed from
          one in the south-east. A service carrying a single generic national
          feed will look complete in a channel list and feel wrong the first
          time the regional news comes on.
        </p>
        <p>
          Timeshift channels — the +1 variants running an hour behind — are the
          second thing routinely absent. They are heavily used in British
          households and their absence is only noticed after purchase.
        </p>
        <p>
          The third is the programme guide itself. A seven-day EPG aligned to
          UK time with working catch-up is the difference between a channel
          list and a usable television service. Check that the guide is
          populated for the channels you care about, not just the headline
          ones, and that catch-up actually retrieves a programme from three
          days ago rather than failing silently. All three of these are quick
          to verify once you have access and impossible to verify before.
        </p>
      </>
    ),
  },
  {
    id: "peak-load",
    h2: "The British peak is unusually sharp",
    body: (
      <>
        <p>
          Most countries have a broad evening peak. The UK has a spike. On a
          Saturday at three o&rsquo;clock and again at teatime, and on Sunday
          afternoon, an enormous share of the national audience loads the same
          small number of fixtures within the same few minutes. It is a harder
          engineering problem than a gradually rising evening curve, and it is
          the moment at which under-provisioned services fail.
        </p>
        <p>
          This is why UK-focused edge capacity matters more here than the raw
          size of a provider&rsquo;s network. Servers routed for British
          traffic keep end-to-end latency inside roughly thirty seconds, which
          is the threshold beyond which live sport stops working socially —
          past that, a neighbour&rsquo;s reaction arrives before the goal does.
        </p>
        <p>
          When you test a provider, test it then. A Tuesday evening tells you
          nothing at all. Sit through a Saturday teatime and a Sunday afternoon
          before you form a view, which is precisely why a refund window that
          expires in seven days is too short to be useful and a thirty-day
          window is not.
        </p>
      </>
    ),
  },
  {
    id: "support-hours",
    h2: "Support that is awake when Britain is watching",
    body: (
      <>
        <p>
          A support operation staffed for a different time zone is fine until
          something breaks at nine on a Saturday evening. That is when UK
          households are watching, and it is when a service marketed to them
          needs to be reachable.
        </p>
        <p>
          The test is free and worth running before you spend anything: message
          a prospective provider at an awkward UK hour — a Sunday evening, a
          bank holiday — with a specific question that cannot be answered from
          a template. Time the reply and judge whether it engages with what you
          actually asked. Pre-sales responsiveness is the best available
          predictor of what happens when you are a paying customer with a dead
          channel and a match starting in ten minutes.
        </p>
        <p>
          Ours runs through the same WhatsApp thread you order in, staffed
          around the clock, which also means support in month seven happens in
          the conversation that already contains your order and credentials
          rather than through a ticket system that has never heard of you.
        </p>
      </>
    ),
  },
  {
    id: "legal-position",
    h2: "The UK legal position, stated plainly",
    body: (
      <>
        <p>
          IPTV is not illegal in the United Kingdom, and the technology is used
          by every major British broadcaster. Subscribing to a service that
          operates its own infrastructure and pays for the content it
          distributes is lawful.
        </p>
        <p>
          The exposure in this market sits with unlicensed re-broadcasters —
          operations retransmitting protected output without holding the
          rights. Those are also, for entirely separate reasons, the least
          reliable services to buy from: they typically resell an upstream
          package they do not control, so when that supply is interrupted every
          brand downstream goes dark at once.
        </p>
        <p>
          The practical markers are the same ones that predict service quality
          generally. A published DMCA process, real terms and a privacy policy,
          a traceable company footprint, refund terms committed to in writing,
          and support you can reach before you pay. A provider unwilling to
          publish any of that has told you something useful about both its
          licensing and its longevity.
        </p>
      </>
    ),
  },
  {
    id: "pricing",
    h2: "What a UK subscription should cost",
    body: (
      <p>
        Four terms, identical in content and differing only in length: £25.99
        for three months, £35.99 for six, £49.99 for twelve and £79.99 for
        twenty-four, which works out from £8.66 down to £2.96 a month. Five
        simultaneous connections are included on every one, with no sports
        tier, no per-event charges and no equipment fee. Against a traditional
        UK package covering entertainment, sport and film the annual gap
        typically runs to several hundred pounds — that comparison is set out
        with its caveats on the{" "}
        <Link href="/cheap-iptv-uk" className={linkCls}>
          cheap IPTV UK page
        </Link>
        , and the full cost model including hardware and broadband is on the{" "}
        <Link href="/iptv-cost" className={linkCls}>
          IPTV cost page
        </Link>
        .
      </p>
    ),
  },
];

const FAQS: readonly SeoFaq[] = [
  {
    q: "What makes an IPTV subscription good specifically for UK viewers?",
    a: "Full British terrestrial and entertainment coverage including sister channels, the correct regional variants for your area, +1 timeshift channels, a seven-day programme guide on UK time with working catch-up, edge capacity provisioned for the sharp Saturday peak, and support staffed during UK evening hours.",
  },
  {
    q: "Why do regional variants matter?",
    a: "British terrestrial channels carry different regional news and some different programming by area. A service carrying only a single generic national feed looks complete in a channel list but feels wrong the first time regional news comes on. Many services built for other markets miss this entirely.",
  },
  {
    q: "Is IPTV legal in the UK?",
    a: "Yes, where the provider runs its own infrastructure and pays for the content it distributes — the technology itself is used by every major UK broadcaster. The legal risk sits with unlicensed re-broadcasters, which are also the least reliable services because they resell upstream supply they do not control.",
  },
  {
    q: "When should I test a UK IPTV service?",
    a: "Saturday at three o'clock, Saturday teatime and Sunday afternoon. The British viewing peak is a sharp spike rather than a gradual curve, and it is the only moment that reveals whether a provider has enough capacity. A weekday evening tells you nothing.",
  },
  {
    q: "How much should a UK IPTV subscription cost?",
    a: "Between roughly £3 and £9 per month depending on term length. Ours runs £25.99 for three months, £35.99 for six, £49.99 for twelve and £79.99 for twenty-four, with identical content on each and five simultaneous connections included throughout.",
  },
  {
    q: "What is timeshift and why should I check for it?",
    a: "Timeshift or +1 channels broadcast the same schedule an hour later. They are heavily used in British households and are commonly absent from services built for other markets — an omission most buyers only notice after paying.",
  },
  {
    q: "How many screens do UK households usually need?",
    a: "Five simultaneous connections cover most households comfortably, which is why that is included as standard. Count the screens that would realistically run at the same time on a Saturday evening rather than the number of devices you own.",
  },
  {
    q: "How do I check UK support quality before paying?",
    a: "Message the provider at an inconvenient UK hour — a Sunday evening or a bank holiday — with a specific question that cannot be answered from a template, then time the reply and judge whether it addresses what you asked. It costs nothing and predicts post-sales support well.",
  },
] as const;

export default function BestIptvSubscriptionUkPage() {
  return (
    <SeoLanding
      pagePath={PAGE_PATH}
      breadcrumbName="Best IPTV Subscription UK"
      badge="Best IPTV Subscription UK"
      h1Lead="Best IPTV Subscription UK —"
      h1Accent="The British-Specific Checks"
      intro={
        <p>
          The universal criteria for judging an IPTV service apply wherever you
          live. These are the ones that only matter if you are watching from
          Britain: regional variants, timeshift channels, a programme guide on
          UK time, capacity built for the unusually sharp Saturday peak, and
          support that is awake during a British evening. None of them appear
          on a feature list; all of them show up in your first month.
        </p>
      }
      sections={SECTIONS}
      midCtaAfter={3}
      midCtaText="Full UK coverage, regional variants, UK-routed capacity at peak."
      midCtaLabel="See UK Plans & Pricing"
      faqs={FAQS}
      faqHeading="Choosing a UK IPTV Subscription"
      closingLead="Test it on a Saturday,"
      closingAccent="not a Tuesday"
      closingBody={
        <p>
          Audit your own twenty channels, check the regional feed for your
          area, and watch through a peak weekend before deciding. Thirty days
          covers roughly four of them, and the terms are published on the{" "}
          <Link href="/refund" className={linkCls}>
            refund page
          </Link>{" "}
          so you can read them before you spend anything.
        </p>
      }
      ctaLabel="Start Your UK Subscription"
      secondaryHref="/uk-iptv-subscriptions"
      secondaryLabel="Or compare UK subscriptions side by side"
      serviceType="IPTV Subscription"
      pageTitle={PAGE_TITLE}
      pageDescription={PAGE_DESCRIPTION}
    />
  );
}
