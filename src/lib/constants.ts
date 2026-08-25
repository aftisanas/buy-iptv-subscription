export const SITE_NAME = "Buy IPTV Subscription";
export const SITE_URL = "https://buy-iptv-subscription.tv";
export const CONTACT_EMAIL = "support@buy-iptv-subscription.tv";

// Bump when prices change. Google warns on Offers with a stale or missing
// priceValidUntil, so keep this comfortably in the future.
export const PRICE_VALID_UNTIL = "2027-12-31";

export const WHATSAPP_NUMBER = "447878757831";
export const WHATSAPP_DISPLAY = "+44 7878 757831";

// Base (3-month) extra-connection rate. Longer terms scale this — each plan
// carries its own `extraConnectionPrice` in PRICING_PLANS below.
export const EXTRA_CONNECTION_PRICE = 7.25;
export const EXTRA_CONNECTIONS_MAX = 5;

export const CHECKOUT_COPY = {
  buttonLabelPrefix: "Complete Order on WhatsApp",
  buttonSubtitle: "Instant reply · payment details sent to you",
  footerNote: "Secure checkout · 30-day money-back",
  extraConnectionsLabel: "Extra Connections",
  extraConnectionsHelp: "Watch on multiple devices simultaneously",
  extraConnectionsPriceLabel: (price: number = EXTRA_CONNECTION_PRICE) =>
    `+£${price.toFixed(2)} per extra connection`,
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Why Us", href: "/#features" },
  { label: "Pricing", href: "/#pricing" },
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
  { value: "5", label: "Screens Included" },
  { value: "30-Day", label: "Money-Back Guarantee" },
] as const;

export const FEATURES = [
  {
    title: "Buy IPTV With 37,000 Live Channels — The Widest IPTV UK Library",
    description:
      "A single purchase opens the door to 37,000 live feeds spanning UK sport, entertainment, news, kids and global content. Regional variants and +1 timeshift options are included so one transaction opens every category Britain has to offer.",
    icon: "Tv" as const,
  },
  {
    title: "Premium IPTV Quality In Native 4K UHD — Included In Every Plan",
    description:
      "No 4K surcharge, no resolution cap. Every IPTV subscription plan streams in native 4K when the broadcaster supports it. Adaptive bitrate keeps the picture stable on slower broadband. Premium picture quality is standard, not optional.",
    icon: "Monitor" as const,
  },
  {
    title: "Load-Balanced IPTV Servers — Built For Peak-Time Demand",
    description:
      "Streams are served from high-capacity infrastructure with load-balancing across nodes, so picture quality holds up when demand spikes on a Saturday afternoon. Adaptive bitrate absorbs the rest at your end.",
    icon: "Zap" as const,
  },
  {
    title: "Fast IPTV Activation — Buy IPTV And Stream In Under 60 Seconds",
    description:
      "Complete the checkout and your credentials are emailed automatically the moment payment clears. No waiting for manual approval, no activation queue, no office-hours restriction.",
    icon: "Clock" as const,
  },
  {
    title: "Best IPTV UK Deal For Households — Five Screens On One Purchase",
    description:
      "One transaction, five simultaneous streams. Parents, children and housemates each pick their own channel in 4K without a single clash. Need more? Extra Connections are available at checkout, priced by plan length.",
    icon: "LayoutGrid" as const,
  },
  {
    title: "Cheap IPTV Subscription From £25.99 — Buy IPTV Without Overpaying",
    description:
      "Full access to 37,000 channels and 4K starts at £25.99 for three months, falling to £2.96 a month effective on the 24-month plan. The Secure Proxy is optional from £4.75 per term. No contract, no early-termination fee.",
    icon: "Smartphone" as const,
  },
  {
    title: "Secure Proxy Add-On — Optional Privacy Layer At Checkout",
    description:
      "An optional Secure Proxy encrypts your stream traffic and reduces ISP-side filtering. No bandwidth cap, no logs, no separate app. Add it in one tap at checkout from £4.75 per term, priced by plan length.",
    icon: "Shield" as const,
  },
  {
    title: "198,000 Films And Series On Demand — Plus 7-Day Catch-Up TV",
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
    devices: 5,
    proxyPrice: 4.75,
    extraConnectionPrice: 7.25,
    badge: "Quick Start",
    discount: "-35%",
    accentColor: "violet",
    features: [
      "37,000+ live channels with full UK coverage",
      "198,000+ films, series and documentaries on demand",
      "Full EPG with 7-day catch-up TV",
      "HD, Full HD and native 4K UHD streaming",
      "Five simultaneous screens, extra connections available as add-ons",
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
    devices: 5,
    proxyPrice: 9.5,
    extraConnectionPrice: 14.5,
    badge: "Half-Year Savings",
    discount: "-45%",
    accentColor: "violet",
    features: [
      "37,000+ live channels with full UK coverage",
      "198,000+ films, series and documentaries on demand",
      "Full EPG with 7-day catch-up TV",
      "HD, Full HD and native 4K UHD streaming",
      "Five simultaneous screens, extra connections available as add-ons",
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
    devices: 5,
    proxyPrice: 19,
    extraConnectionPrice: 29.0,
    badge: "Most Popular — Save 40%",
    discount: "-40%",
    accentColor: "blue",
    features: [
      "37,000+ live channels with full UK coverage",
      "198,000+ films, series and documentaries on demand",
      "Full EPG with 7-day catch-up TV",
      "HD, Full HD and native 4K UHD streaming",
      "Five simultaneous screens, extra connections available as add-ons",
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
    devices: 5,
    proxyPrice: 38,
    extraConnectionPrice: 58.0,
    badge: "Deepest Discount — Save 55%",
    discount: "-55%",
    accentColor: "violet",
    features: [
      "37,000+ live channels with full UK coverage",
      "198,000+ films, series and documentaries on demand",
      "Full EPG with 7-day catch-up TV",
      "HD, Full HD and native 4K UHD streaming",
      "Five simultaneous screens, extra connections available as add-ons",
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
    question: "How do I buy IPTV from this website?",
    answer:
      "Choose a plan from the pricing grid, add the Secure Proxy or extra connections if you want them, then complete your order on WhatsApp. Payment details come back instantly and your credentials arrive by email in under sixty seconds.",
  },
  {
    question: "What IPTV subscription plans can I buy?",
    answer:
      "Four options: 3-month, 6-month, 12-month and 24-month. Every plan includes 37,000 channels, 4K UHD, five screens and instant activation, with the Secure Proxy and extra connections available at checkout. Longer plans unlock deeper discounts.",
  },
  {
    question: "Is it safe to buy IPTV online in the UK?",
    answer:
      "Buy from a provider with an SSL-secured checkout, a clear refund policy, responsive support and published legal terms. This site runs checkout over HTTPS, publishes its Terms, Privacy, DMCA and Refund policies in full, answers support 24/7, and backs every plan with a 30-day money-back guarantee.",
  },
  {
    question: "How fast is activation after I buy IPTV?",
    answer:
      "Under sixty seconds. Your M3U link and app login arrive by email the instant payment clears. No manual review, no office-hours restriction.",
  },
  {
    question: "Can I buy IPTV and watch on five devices?",
    answer:
      "Yes. Every plan supports five simultaneous streams. Each device runs in full 4K where available, with no throttling regardless of how many connections are active. Need more than five? Add up to five Extra Connections at checkout — from £7.25 each on the 3-month plan, scaled by term length.",
  },
  {
    question: "Is there a money-back guarantee when I buy IPTV?",
    answer:
      "Every plan includes a 30-day full refund. Contact support within 30 days and every penny returns same-day. No forms, no retention calls.",
  },
  {
    question: "Does the IPTV subscription I buy include a VPN?",
    answer:
      "Privacy comes as an optional Secure Proxy add-on rather than a bundled VPN. It encrypts your stream traffic and reduces ISP-side filtering, with no bandwidth cap, no logs and no separate app. Pricing is tiered by term: £4.75, £9.50, £19 and £38 for the 3, 6, 12 and 24-month plans.",
  },
  {
    question: "What is the best IPTV UK plan to buy?",
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
      "37,000 channels, 198,000 films and series, native 4K, five simultaneous screens, automatic 60-second activation, 24/7 UK support, an optional Secure Proxy and a 30-day money-back guarantee — from £25.99, with no contract and no auto-renewal.",
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
