import type { Metadata } from "next";
import Link from "next/link";
import SeoLanding, {
  linkCls,
  type SeoFaq,
  type SeoSection,
} from "@/components/SeoLanding";
import { buildLandingMetadata } from "@/lib/seo";

/* Primary keyword: "cheap iptv uk".
   Angle: the British household comparison — what UK families actually spend
   on television, where the saving comes from, and an honest account of what
   you give up. The economics of cheapness sit on /cheap-iptv. */

const PAGE_PATH = "/cheap-iptv-uk";
const PAGE_TITLE = "Cheap IPTV UK — What British Households Actually Save";
const PAGE_DESCRIPTION =
  "What UK households spend on television, what an IPTV subscription costs instead, where the saving genuinely comes from, and an honest account of what you give up.";

export const metadata: Metadata = buildLandingMetadata({
  path: PAGE_PATH,
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  imageAlt: "Cheap IPTV UK — cost comparison for British households",
});

const SECTIONS: SeoSection[] = [
  {
    id: "what-uk-pays",
    h2: "What a British household actually spends on television",
    body: (
      <>
        <p>
          Most UK homes do not pay for television once. They pay for it in
          layers, and the layers accumulate quietly enough that few people
          could state their annual total from memory.
        </p>
        <p>
          There is usually a core pay-TV package covering entertainment. On top
          of that sits a sports tier, which is typically the single largest
          line and often bought seasonally then forgotten about. A film tier
          may be bundled or separate. Then come the streaming services — rarely
          one, usually two or three, each individually small enough not to
          trigger a cancellation and collectively substantial. Somewhere in the
          mix there may be a set-top box charge, and the whole arrangement
          usually sits inside an eighteen or twenty-four month contract with a
          price rise built into the second year.
        </p>
        <p>
          Add those together and a household following entertainment, sport and
          film through conventional routes is commonly spending somewhere
          between £60 and £110 a month. The precise figure varies enormously
          with what you take and what promotional rate you are on, which is why
          the honest thing to do is not to quote a headline saving but to tell
          you to add up your own direct debits before reading any further.
        </p>
      </>
    ),
  },
  {
    id: "the-comparison",
    h2: "The same viewing, priced differently",
    body: (
      <>
        <p>
          An IPTV subscription here costs £25.99 for three months, £35.99 for
          six, £49.99 for twelve or £79.99 for twenty-four. As a monthly figure
          that is £8.66, £6.00, £4.17 or £2.96 respectively.
        </p>
        <p>
          Taken over a year, the twelve-month plan comes to £49.99 and the
          twenty-four-month plan works out at roughly £40 a year. Against a
          conventional arrangement running £60 to £110 a month — call it £720
          to £1,320 a year — the difference is not marginal. For a household at
          the upper end, the annual gap is well over a thousand pounds.
        </p>
        <p>
          Two caveats keep that comparison honest. First, you are comparing
          against your own actual spend, not against a worst case someone else
          constructed. Second, a like-for-like comparison has to account for
          what is genuinely different between the two, which is the subject of
          the next section rather than something to bury in a footnote.
        </p>
      </>
    ),
  },
  {
    id: "where-saving-comes-from",
    h2: "Where the saving genuinely comes from",
    body: (
      <>
        <p>
          It is not a discount on the same product. The cost structure is
          different in specific, identifiable ways.
        </p>
        <p>
          <strong className="text-foreground font-semibold">
            No distribution network.
          </strong>{" "}
          Traditional providers maintain satellite or cable infrastructure
          across the country. IPTV rides on the broadband connection you
          already pay for, so that entire cost line does not exist.
        </p>
        <p>
          <strong className="text-foreground font-semibold">
            No hardware programme.
          </strong>{" "}
          No boxes to manufacture, warehouse, ship, install or recover, and no
          engineer visits to schedule. That is a large operational cost that
          simply is not incurred.
        </p>
        <p>
          <strong className="text-foreground font-semibold">
            No retail or contract machinery.
          </strong>{" "}
          No shops, no credit checks, no debt recovery on early terminations,
          no eighteen-month amortisation schedule to administer. The contract
          in conventional pay-TV exists largely to recover hardware and
          acquisition costs over time — remove those costs and the contract
          loses its purpose.
        </p>
        <p>
          <strong className="text-foreground font-semibold">
            No original commissioning.
          </strong>{" "}
          This one cuts both ways and belongs in the honest column as much as
          this one. Traditional broadcasters fund original British programming.
          A distribution service does not, and that is a genuine difference in
          what your money supports.
        </p>
      </>
    ),
  },
  {
    id: "what-you-give-up",
    h2: "What you give up — stated honestly",
    body: (
      <>
        <p>
          A page arguing you should spend less with a conventional provider
          should be straight about the trade, so here it is without softening.
        </p>
        <p>
          <strong className="text-foreground font-semibold">
            You depend entirely on your broadband.
          </strong>{" "}
          If the line goes down, television goes down with it. A satellite
          dish does not care about your router. Households with unreliable
          connections should weigh this seriously rather than dismissing it.
        </p>
        <p>
          <strong className="text-foreground font-semibold">
            There is no engineer to send.
          </strong>{" "}
          Support is remote. For most problems that is faster, but if you want
          somebody to arrive at the house and fix something physically, that is
          not on offer.
        </p>
        <p>
          <strong className="text-foreground font-semibold">
            You are not funding British production.
          </strong>{" "}
          Some people care about this and it is a reasonable thing to care
          about.
        </p>
        <p>
          <strong className="text-foreground font-semibold">
            Nothing renews automatically.
          </strong>{" "}
          This is deliberate and most people prefer it, but if you like never
          thinking about a bill, you will have to think about this one when the
          term ends.
        </p>
        <p>
          What you do not give up is the viewing itself: the channel coverage,
          the regional variants, the timeshift feeds, the programme guide with
          catch-up and native 4K where the broadcast is genuinely 4K. The{" "}
          <Link href="/best-iptv-subscription-uk" className={linkCls}>
            UK selection guide
          </Link>{" "}
          covers how to verify all of that against your own channel list.
        </p>
      </>
    ),
  },
  {
    id: "cheap-not-nasty",
    h2: "Cheap without the usual catches",
    body: (
      <>
        <p>
          The catches that normally accompany a low headline price in this
          market are worth naming, because their absence is the point.
        </p>
        <p>
          There is no reduced tier — the £25.99 plan carries exactly the same
          line-up as the £79.99 one. There is no sports add-on and no per-event
          charge for headline fixtures. There is no equipment fee, no
          activation fee and no delivery charge, because there is nothing to
          deliver. Five simultaneous connections are included rather than sold
          back to you one at a time, which is the most common way a cheap
          headline price becomes an expensive subscription. And the price you
          are quoted at renewal is the price published at that time, not an
          introductory rate that quietly steps up.
        </p>
        <p>
          The two genuine extras are additional simultaneous connections beyond
          five and the Secure Proxy add-on, both priced per term and both
          optional in the ordinary sense of the word rather than the marketing
          sense.
        </p>
      </>
    ),
  },
  {
    id: "making-the-switch",
    h2: "Switching without stranding yourself",
    body: (
      <>
        <p>
          The sensible approach is to overlap rather than to jump, and it costs
          very little to do it properly.
        </p>
        <p>
          Take the three-month plan at £25.99 while your existing arrangement
          is still running. Spend the first few weeks watching normally on both
          — particularly across a couple of peak weekends, since that is where
          any capacity problem will surface. Audit your own twenty
          most-watched channels against the new line-up rather than trusting a
          headline count. Check the regional feed for your area and the +1
          variants your household actually uses.
        </p>
        <p>
          If it holds up, cancel the conventional package at its next
          break point and move to a longer IPTV term to drop the monthly rate.
          If it does not, you are inside the thirty-day window and you ask for
          the £25.99 back. The overlap costs you one month of double payment in
          the worst case, which is a reasonable price for not stranding your
          household on a service you have not tested.
        </p>
      </>
    ),
  },
  {
    id: "which-term",
    h2: "Which term makes sense for a UK household",
    body: (
      <p>
        If you are switching from a conventional package, start on three months
        and run the overlap described above. If you already know IPTV works in
        your home and on your connection, the twelve-month plan at £49.99 is
        the point where the monthly rate stops falling steeply — £4.17 against
        £6.00 for six months. The twenty-four-month plan at £79.99 brings it to
        £2.96 and is the right call only if you are confident about the next
        two years, though the thirty-day guarantee applies to it identically,
        so the early risk is the same on all four. The arithmetic behind those
        steps is set out on the{" "}
        <Link href="/cheap-iptv-subscription" className={linkCls}>
          cheap IPTV subscription page
        </Link>
        , and the total cost including hardware and broadband on the{" "}
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
    q: "How much can a UK household save with IPTV?",
    a: "It depends entirely on what you currently pay. Households running entertainment, sport, film and two or three streaming services commonly spend £60–£110 a month. An IPTV subscription runs £2.96–£8.66 a month depending on term. Add up your own direct debits rather than trusting a headline saving figure.",
  },
  {
    q: "Why is cheap IPTV in the UK so much less than a TV package?",
    a: "Different cost structure rather than a discount. No satellite or cable network to maintain, no hardware to manufacture or install, no engineer visits, no retail estate and no contract machinery to administer. It also does not fund original British commissioning, which is a genuine difference.",
  },
  {
    q: "What do I give up by switching?",
    a: "You depend on your broadband — if the line drops, so does television. There is no engineer to send to the house. You are not funding British production. And nothing renews automatically, so you have to think about it when the term ends. You do not give up channel coverage, regional variants, timeshift or 4K.",
  },
  {
    q: "Is the cheapest plan missing channels?",
    a: "No. The £25.99 three-month plan carries the same roughly 37,000 channels, 198,000 on-demand titles, five connections, 4K delivery and support as the £79.99 plan. There is no reduced tier, no sports add-on and no per-event charge.",
  },
  {
    q: "What is the safest way to switch from a traditional package?",
    a: "Overlap rather than jump. Take the three-month plan while your existing service still runs, test across a couple of peak weekends, and audit your own most-watched channels. If it holds up, cancel at your next break point. If not, you are inside the thirty-day refund window.",
  },
  {
    q: "Will the price go up at renewal?",
    a: "You pay whatever is published at the time you choose to renew — there is no introductory rate that steps up automatically, and no stored card, because nothing renews on its own.",
  },
  {
    q: "Are there hidden fees?",
    a: "No equipment fee, activation fee or delivery charge, since there is nothing to deliver. The only extras are additional simultaneous connections beyond the five included, and the optional Secure Proxy add-on, both priced per term and shown before you pay.",
  },
  {
    q: "Which term is best value for a UK household?",
    a: "Twelve months at £49.99 is where the monthly rate stops falling steeply — £4.17 against £6.00 for six months. Twenty-four months reaches £2.96 but only makes sense if you are confident about the next two years. If you are switching from a conventional package, start on three months.",
  },
] as const;

export default function CheapIptvUkPage() {
  return (
    <SeoLanding
      pagePath={PAGE_PATH}
      breadcrumbName="Cheap IPTV UK"
      badge="Cheap IPTV UK"
      h1Lead="Cheap IPTV UK —"
      h1Accent="Run the Numbers on Your Own Bill"
      intro={
        <p>
          Before comparing anything, add up what your household actually pays
          for television across every line — package, sport, film, streaming
          services and any box charge. Most people are surprised by the total.
          This page sets that figure against what an IPTV subscription costs,
          explains where the difference genuinely comes from, and is honest
          about what you give up in exchange.
        </p>
      }
      sections={SECTIONS}
      midCtaAfter={2}
      midCtaText="From £2.96 a month on the two-year term — same line-up on every plan."
      midCtaLabel="Compare the Four Terms"
      faqs={FAQS}
      faqHeading="Cheap IPTV UK"
      closingLead="Test it alongside what you have,"
      closingAccent="then decide"
      closingBody={
        <p>
          Three months at £25.99 while your current package is still running is
          the low-risk way to do this. Watch through a couple of peak weekends,
          audit your own channels, and if it does not hold up the{" "}
          <Link href="/refund" className={linkCls}>
            thirty-day guarantee
          </Link>{" "}
          means you are not committed to anything.
        </p>
      }
      ctaLabel="Start From £25.99"
      secondaryHref="/iptv-cost"
      secondaryLabel="Or see the full cost breakdown"
      serviceType="IPTV Subscription"
      pageTitle={PAGE_TITLE}
      pageDescription={PAGE_DESCRIPTION}
    />
  );
}
