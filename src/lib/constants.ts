// The brand as it appears everywhere visible — navbar, H1, titles, logo.
// It feeds Organization.name, the Product brand, llms.txt, the OG siteName
// and every legal page, so a mismatch here contradicts the whole site.
export const SITE_NAME = "Buy IPTV UK";
export const SITE_URL = "https://buy-iptv-subscription.tv";
export const CONTACT_EMAIL = "contact@buy-iptv-uk.com";

// Bump when prices change. Google warns on Offers with a stale or missing
// priceValidUntil, so keep this comfortably in the future.
export const SITE_SLUG = "buy-iptv-subscription";

// The shared checkout hub, called directly from the browser — the same way
// best-iptv-uk-subscription and fast-iptv-clean do it. A same-origin proxy was
// tried here and removed: it returned 503 from its own catch block whenever its
// upstream fetch hiccuped, which the client reads as "store unavailable" and
// degrades to WhatsApp even while Shopify is up. Not worth the failure surface
// on the one flow that takes money.
export const CHECKOUT_HUB_URL =
  process.env.NEXT_PUBLIC_CHECKOUT_HUB_URL ?? "https://checkout.british-iptv-4k.com";

// Operator switch, mirroring best-iptv-uk-subscription. This is NOT the
// Shopify availability check — the hub's /api/availability answers "is a store
// free right now". This answers the question above it: "is this site wired to
// the hub at all". Without it, a buyer on a site with no provisioned store
// fills in the whole checkout form before discovering it has to fall back.
//   "hub"      -> plan card routes to /checkout (form -> Shopify -> WhatsApp fallback)
//   "whatsapp" -> plan card opens the order modal and goes straight to wa.me
export const CHECKOUT_MODE = (process.env.NEXT_PUBLIC_CHECKOUT_MODE ?? "whatsapp") as
  | "whatsapp"
  | "hub";

export const PRICE_VALID_UNTIL = "2027-12-31";

// Single source of truth for the support-hours line rendered under every
// WhatsApp CTA. Keep it identical to the hours published in /llms.txt and on
// /contact — a CTA that promises more than the contact page is a trust leak.
export const SUPPORT_HOURS =
  "Activation is automatic, 24/7 · support 24/7 · sales & billing Mon–Fri, 9am–6pm GMT";

export const WHATSAPP_NUMBER = "447878757831";
export const WHATSAPP_DISPLAY = "+44 7878 757831";

// Base (3-month) extra-connection rate. Longer terms scale this — each plan
// carries its own `extraConnectionPrice` in PRICING_PLANS below.
export const EXTRA_CONNECTION_PRICE = 7.25;
export const EXTRA_CONNECTIONS_MAX = 5;

export const CHECKOUT_COPY = {
  buttonLabelPrefix: "Send order on WhatsApp",
  buttonSubtitle: "Instant reply · payment details sent to you",
  footerNote: "Secure checkout · 30-day money-back",
  extraConnectionsLabel: "Extra Connections",
  extraConnectionsHelp: "Watch on multiple devices simultaneously",
  extraConnectionsPriceLabel: (price: number = EXTRA_CONNECTION_PRICE) =>
    `+£${price.toFixed(2)} per extra connection`,
} as const;

export const NAV_LINKS = [
  { label: "Why Us", href: "/#features" },
  { label: "How It Works", href: "/#ordering" },
  { label: "Pricing", href: "/#plans" },
  { label: "FAQ", href: "/#faq" },
] as const;

export const LEGAL_LINKS = [
  { label: "Terms of Service", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "DMCA Policy", href: "/dmca" },
  { label: "Refund Policy", href: "/refund" },
] as const;

// Every figure here must be checkable against something we actually publish.
// Channel and library counts come from the service itself; screens and the
// refund window are set by PRICING_PLANS below. Subscriber counts and uptime
// percentages were removed — neither is measured, so neither can be claimed.
export const STATS = [
  { value: "37,000+", label: "Live Channels" },
  { value: "198,000+", label: "Films & Series" },
  { value: "1 + 5", label: "Connections Available" },
  { value: "30-Day", label: "Money-Back Guarantee" },
] as const;

// The product specification, rendered as a real table (DESIGN-SPEC §7).
// This is the trust mechanism for a site with no reviews: state exactly what
// is and is not included, including the limits. Every row must be checkable
// against PRICING_PLANS, a published policy, or the service itself.
export const SPECIFICATION = [
  { label: "Live channels", value: "37,000+", note: "UK, Irish and international" },
  { label: "Films & series", value: "198,000+", note: "On demand, included" },
  { label: "Resolution", value: "Up to 4K UHD", note: "Where the broadcaster supplies it" },
  { label: "Connections", value: "1 included", note: "Add up to 5 more at checkout" },
  { label: "Programme guide", value: "7-day catch-up", note: "Full EPG" },
  { label: "Activation", value: "Under 60 seconds", note: "Automatic on payment" },
  { label: "Contract", value: "None", note: "One payment, no auto-renewal" },
  { label: "Refund window", value: "30 days", note: "See /refund for the full terms" },
  { label: "Support", value: "WhatsApp & email", note: "No phone line, no live chat, no callback" },
  { label: "Payment", value: "Card at checkout", note: "Processed off-site; WhatsApp if checkout is down" },
] as const;

export const FEATURES = [
  {
    title: "Buy IPTV UK With 37,000 Live Channels",
    description:
      "A single purchase opens the door to 37,000 live feeds spanning UK sport, entertainment, news, kids and global content. Regional variants and +1 timeshift options are included so one transaction opens every category Britain has to offer.",
    icon: "Tv" as const,
  },
  {
    title: "Buy IPTV UK In Native 4K UHD — No Surcharge",
    description:
      "No 4K surcharge, no resolution cap. Every IPTV subscription plan streams in native 4K when the broadcaster supports it. Adaptive bitrate keeps the picture stable on slower broadband. Premium picture quality is standard, not optional.",
    icon: "Monitor" as const,
  },
  {
    title: "Buy IPTV UK On Load-Balanced Servers Built For Peak Time",
    description:
      "Streams are served from high-capacity infrastructure with load-balancing across nodes, so picture quality holds up when demand spikes on a Saturday afternoon. Adaptive bitrate absorbs the rest at your end.",
    icon: "Zap" as const,
  },
  {
    title: "Buy IPTV UK And Get Your Xtream Codes In 60 Seconds",
    description:
      "Complete the checkout and your credentials are emailed automatically the moment payment clears. No waiting for manual approval, no activation queue, no office-hours restriction.",
    icon: "Clock" as const,
  },
  {
    title: "Buy IPTV UK And Add Extra Connections For The Whole House",
    description:
      "Your subscription includes one connection. Need the kids on one screen and the football on another? Add up to five Extra Connections at checkout, priced by plan length, and each one streams in full 4K.",
    icon: "LayoutGrid" as const,
  },
  {
    title: "Buy IPTV UK From £25.99 Without Overpaying",
    description:
      "Full access to 37,000 channels and 4K starts at £25.99 for three months, falling to £2.96 a month effective on the 24-month plan. The Secure Proxy is optional from £4.75 per term. No contract, no early-termination fee.",
    icon: "Smartphone" as const,
  },
  {
    title: "Buy IPTV UK With An Optional Secure Proxy At Checkout",
    description:
      "An optional Secure Proxy encrypts your stream traffic and reduces ISP-side filtering. No bandwidth cap, no logs, no separate app. Add it in one tap at checkout from £4.75 per term, priced by plan length.",
    icon: "Shield" as const,
  },
  {
    title: "Buy IPTV UK With 198,000 Films, Series And 7-Day Catch-Up",
    description:
      "The on-demand library runs to 198,000 films and series alongside the live channels, and a full EPG with 7-day catch-up means a missed match or episode is still there when you get to it. Included in every plan at no extra cost.",
    icon: "Film" as const,
  },
] as const;

export const PRICING_PLANS = [
  {
    id: "bronze",
    tier: "Quick Start",
    name: "3 Months",
    subtitle: "Three months to test the full experience before committing",
    price: 25.99,
    originalPrice: 59.99,
    perMonth: 8.66,
    period: "3 months",
    devices: 1,
    proxyPrice: 4.75,
    extraConnectionPrice: 7.25,
    badge: "Quick Start",
    discount: "-35%",
    features: [
      "37,000+ live channels with full UK coverage",
      "198,000+ films, series and documentaries on demand",
      "Full EPG with 7-day catch-up TV",
      "HD, Full HD and native 4K UHD streaming",
      "One connection included, up to 5 extra available at checkout",
      "24/7 dedicated UK support",
      "Secure Proxy add-on available (from £4.75/term)",
      "30-day money-back guarantee",
      "60-second activation by email",
    ],
    popular: false,
    savings: null,
  },
  {
    id: "silver",
    tier: "Half-Year Savings",
    name: "6 Months",
    subtitle: "Six months of streaming at a reduced per-month rate",
    price: 35.99,
    originalPrice: 119.99,
    perMonth: 6.0,
    period: "6 months",
    devices: 1,
    proxyPrice: 9.5,
    extraConnectionPrice: 14.5,
    badge: "Half-Year Savings",
    discount: "-45%",
    features: [
      "37,000+ live channels with full UK coverage",
      "198,000+ films, series and documentaries on demand",
      "Full EPG with 7-day catch-up TV",
      "HD, Full HD and native 4K UHD streaming",
      "One connection included, up to 5 extra available at checkout",
      "24/7 dedicated UK support",
      "Secure Proxy add-on available (from £4.75/term)",
      "30-day money-back guarantee",
      "60-second activation by email",
    ],
    popular: false,
    savings: "Save 45%",
  },
  {
    id: "gold",
    tier: "Annual",
    name: "12 Months",
    subtitle: "The plan most UK buyers choose — best balance of value and commitment",
    price: 49.99,
    originalPrice: 89.99,
    perMonth: 4.17,
    period: "year",
    devices: 1,
    proxyPrice: 19,
    extraConnectionPrice: 29.0,
    badge: "Most Popular — Save 40%",
    discount: "-40%",
    features: [
      "37,000+ live channels with full UK coverage",
      "198,000+ films, series and documentaries on demand",
      "Full EPG with 7-day catch-up TV",
      "HD, Full HD and native 4K UHD streaming",
      "One connection included, up to 5 extra available at checkout",
      "24/7 dedicated UK support",
      "Secure Proxy add-on available (from £4.75/term)",
      "30-day money-back guarantee",
      "60-second activation by email",
    ],
    popular: true,
    savings: "Save 40%",
  },
  {
    id: "diamond",
    tier: "Deepest Discount",
    name: "24 Months",
    subtitle: "Two years locked at the lowest rate — the ultimate long-term deal",
    price: 79.99,
    originalPrice: 159.99,
    perMonth: 2.96,
    period: "2 years",
    devices: 1,
    proxyPrice: 38,
    extraConnectionPrice: 58.0,
    badge: "Deepest Discount — Save 55%",
    discount: "-55%",
    features: [
      "37,000+ live channels with full UK coverage",
      "198,000+ films, series and documentaries on demand",
      "Full EPG with 7-day catch-up TV",
      "HD, Full HD and native 4K UHD streaming",
      "One connection included, up to 5 extra available at checkout",
      "24/7 dedicated UK support",
      "Secure Proxy add-on available (from £4.75/term)",
      "30-day money-back guarantee",
      "60-second activation by email",
    ],
    popular: false,
    savings: "Save 55%",
  },
] as const;

// TESTIMONIALS removed 2026-08-25. The six entries here were invented people
// with invented names, cities and "customer since" dates. Publishing fake
// consumer reviews to UK buyers is prohibited under the Digital Markets,
// Competition and Consumers Act 2024 (in force April 2025, CMA-enforced).
// Do not reinstate without genuine, verifiable, attributable reviews.


export const DEVICES = [
  { name: "Amazon Fire Stick", icon: "Flame" as const },
  { name: "Smart TV", icon: "Tv" as const },
  { name: "Android / iOS", icon: "Smartphone" as const },
  { name: "Windows / Mac", icon: "Monitor" as const },
  { name: "MAG / Formuler", icon: "Box" as const },
  { name: "Apple TV", icon: "Airplay" as const },
] as const;

export const FAQ_ITEMS = [
  {
    question: "How do I buy IPTV UK from this website?",
    answer:
      "Choose a plan, add the Secure Proxy or extra connections if you want them, and pay by card at the checkout. Your Xtream codes are emailed automatically in under sixty seconds. If the card checkout is unavailable, the order falls back to WhatsApp and we send payment details in the chat."
  },
  {
    question: "What buy IPTV UK plans are available?",
    answer:
      "Four options: 3-month, 6-month, 12-month and 24-month. Every plan includes 37,000 channels, 4K UHD, one connection and instant activation, with the Secure Proxy and extra connections available at checkout. Longer plans unlock deeper discounts."
  },
  {
    question: "Is it safe to buy IPTV UK online?",
    answer:
      "Buy from a provider with an SSL-secured checkout, a clear refund policy, responsive support and published legal terms. This site runs checkout over HTTPS, publishes its Terms, Privacy, DMCA and Refund policies in full, answers support 24/7, and backs every plan with a 30-day money-back guarantee.",
  },
  {
    question: "How fast is activation after I buy IPTV UK?",
    answer:
      "Under sixty seconds. Your M3U link and app login arrive by email the instant payment clears. No manual review, no office-hours restriction.",
  },
  {
    question: "Can I buy IPTV UK and watch on more than one device?",
    answer:
      "Every plan includes one connection as standard, so one device streams at a time. To watch on more than one screen at once, add up to five Extra Connections at checkout — from £7.25 each on the 3-month plan, scaled by term length. Each connection runs in full 4K where available, with no throttling."
  },
  {
    question: "Is there a money-back guarantee when I buy IPTV UK?",
    answer:
      "Every plan includes a 30-day full refund. Contact support within 30 days and every penny returns same-day. No forms, no retention calls.",
  },
  {
    question: "Does the IPTV UK subscription I buy include a VPN?",
    answer:
      "Privacy comes as an optional Secure Proxy add-on rather than a bundled VPN. It encrypts your stream traffic and reduces ISP-side filtering, with no bandwidth cap, no logs and no separate app. Pricing is tiered by term: £4.75, £9.50, £19 and £38 for the 3, 6, 12 and 24-month plans.",
  },
  {
    question: "What is the best buy IPTV UK plan to choose?",
    answer:
      "The 12-month plan is the most popular — it saves 40 percent and covers a full football season. The 24-month plan saves 55 percent for maximum long-term value.",
  },
  {
    question: "Is this a cheap IPTV subscription or premium quality?",
    answer:
      "Both. Entry is £25.99 for three months, falling to £2.96 a month effective on the 24-month plan, and the 4K picture, channel range and 24/7 support are the same on every tier. Optional extras like the Secure Proxy stay optional, so the headline price is the price you pay.",
  },
  {
    question: "Which IPTV providers offer instant activation when you buy?",
    answer:
      "Very few. Most take hours or require manual approval. Our checkout emails your credentials automatically the moment payment clears, so there is no queue and no office-hours restriction.",
  },
  {
    question: "Why should I buy IPTV from buy-iptv-subscription.tv?",
    answer:
      "37,000 channels, 198,000 films and series, native 4K, automatic 60-second activation, 24/7 UK support, extra connections and an optional Secure Proxy at checkout, and a 30-day money-back guarantee — from £25.99, with no contract and no auto-renewal."
  },
] as const;

export const CHANNEL_CATEGORIES = [
  {
    name: "UK Sport — Buy IPTV And Watch Every Live Match",
    count: "5,500+",
    icon: "Trophy" as const,
    channels:
      "Live coverage of every major UK fixture, European tournament, weekend race and rugby international streams in HD or 4K. A complete sports lineup runs through one purchase, with low-latency feeds keeping match action close to real-time.",
  },
  {
    name: "British Entertainment — A Complete IPTV UK Channel Pack",
    count: "500+",
    icon: "Tv" as const,
    channels:
      "A complete British entertainment package across drama, comedy, lifestyle and reality TV — all in HD. Regional variants and +1 timeshift feeds are included, so the full UK schedule loads in one purchase with nothing missed.",
  },
  {
    name: "On-Demand Cinema — 198,000 Films And Series Included",
    count: "198,000+",
    icon: "Film" as const,
    channels:
      "An on-demand library of 198,000 films and series spans new releases, classic catalogue and international cinema. A catalogue that dwarfs standalone streaming apps, included in every plan at no additional cost.",
  },
  {
    name: "News & Current Affairs — Round-The-Clock IPTV UK Coverage",
    count: "1,200+",
    icon: "Newspaper" as const,
    channels:
      "Round-the-clock UK and global news coverage delivers breaking stories with near-zero latency. Current affairs, business and documentary feeds load instantly so the headline reaches your screen the moment it airs.",
  },
  {
    name: "Kids & Family — IPTV Subscription Safe For Every Age",
    count: "800+",
    icon: "Baby" as const,
    channels:
      "A wide selection of age-appropriate kids and family programming streams in HD behind a four-digit parental PIN. Safe browsing and channel locks take two taps to set, giving parents complete control.",
  },
  {
    name: "International — 40+ Languages Bundled Free",
    count: "17,000+",
    icon: "Globe" as const,
    channels:
      "More than forty international language packs bundled free, covering every major region in full HD. Switch between local and global feeds from the sidebar in a single tap — included with every IPTV subscription.",
  },
] as const;

// `title` is the on-page H1 (long form is fine there).
// `metaTitle` is the <title> tag and must stay under ~60 characters so it does
// not truncate in the SERP — it is emitted absolutely, without the site suffix.
// `metaDescription` must stay under ~160 characters for the same reason.
export const BLOG_POSTS = [
  {
    slug: "best-iptv-uk-guide-2026",
    title: "Best IPTV UK 2026 — How To Buy IPTV From A Trusted Provider",
    metaTitle: "Best IPTV UK 2026: How To Buy From A Trusted Provider",
    metaDescription:
      "How to buy IPTV in the UK without getting burned — the criteria that actually matter: reliability, support, refund terms and real value.",
    excerpt:
      "Choosing where to buy IPTV in the UK means looking beyond flashy promises. This guide breaks down the criteria that matter most for British buyers — from channel quality and reliability to support and genuine value.",
    date: "2026-04-04",
    updated: "2026-07-31",
    readTime: "8 min read",
    category: "Guide",
  },
  {
    slug: "how-to-setup-iptv-firestick",
    title: "How To Buy IPTV And Set Up On Amazon Fire Stick — Two-Minute Guide",
    metaTitle: "How To Set Up IPTV On Amazon Fire Stick (2026)",
    metaDescription:
      "Step-by-step guide to installing and configuring an IPTV subscription on an Amazon Fire Stick. From box to live TV in under five minutes.",
    excerpt:
      "A complete, beginner-friendly guide to installing and configuring an IPTV subscription on an Amazon Fire Stick. Stream 37,000 UK channels in 4K within minutes of completing your purchase.",
    date: "2026-04-04",
    updated: "2026-07-31",
    readTime: "7 min read",
    category: "Tutorial",
  },
  {
    slug: "iptv-vs-traditional-tv",
    title: "Buy IPTV vs Legacy Subscriptions — Which Is Better For UK Viewers?",
    metaTitle: "IPTV vs Traditional TV: Which Is Better In The UK?",
    metaDescription:
      "An honest comparison of IPTV against traditional UK TV subscriptions — cost, channel range, picture quality, contracts and flexibility.",
    excerpt:
      "An honest comparison of buying IPTV versus traditional UK subscriptions. Costs, channel availability, picture quality, flexibility and value — everything needed to decide before you buy.",
    date: "2026-07-17",
    updated: "2026-07-31",
    readTime: "3 min read",
    category: "Comparison",
  },
  {
    slug: "premier-league-streaming-guide",
    title: "Watch Every Premier League Match — Buy IPTV Streaming Guide",
    metaTitle: "Watch Every Premier League Match: IPTV Guide",
    metaDescription:
      "Every Premier League match plus Championship, La Liga and Serie A in HD and 4K through a single IPTV subscription. Setup and cost explained.",
    excerpt:
      "Every Premier League match, plus Championship, La Liga, Serie A and more — all in stunning HD and 4K quality through one IPTV subscription you can buy and stream in minutes.",
    date: "2026-04-04",
    updated: "2026-07-31",
    readTime: "3 min read",
    category: "Sports",
  },
] as const;
