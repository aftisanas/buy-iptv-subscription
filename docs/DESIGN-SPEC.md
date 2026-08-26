# buy-iptv-subscription.tv — Design & Component Spec

Governs the Phase 6 redesign and every cluster page built in Phase 2.
If a page needs something not in this document, the document changes first.

---

## 1. Concept — "Royal broadcast"

Deep indigo ground, gold primary, red reserved for urgency. Gold is chosen to
work *with* the crowned-lion brand mark (`public/buy-iptv.webp`) rather than
fight it, and to stay clear of the violet+cyan pairing eight sibling
properties share.

**Precision is the trust mechanism.** The site has no reviews, no ratings, no
logos and no named team, so credibility comes from how exactly it states
things — and from what it admits it does not do.

Three consequences that drive every decision below:

- **Figures are tabular.** Prices, channel counts and durations use
  `tabular-nums` so they read as measured rather than marketed.
- **Imagery is drawn in code.** Inline SVG carries every visual — hero
  artwork, device icons, category tiles. See §2b for why this is permanent.
- **Nothing is superlative.** "37,000 channels" not "the widest library".
  Every deleted adjective raises the trust register.

### What this is deliberately not

| Not this | Because |
|---|---|
| Neon violet/cyan on dark | All 8 sibling sites already are — it is the fingerprint |
| Broadcaster logo walls | Trademark exposure; the highest-signal enforcement trigger |
| Film/series poster grids | Direct copyright infringement |
| Star ratings, review widgets, subscriber counts | Fabricated; illegal in the UK under DMCC 2024 |
| Stock photography of people watching TV | Every competitor template does it; absence is a signal |

---

## 2. Structural differentiation

The eight sibling sites share one section vocabulary:

```
Hero → StatsBar → Features → Pricing → Devices → Channels → FAQ → Trust → CTA
```

**This site does not use that skeleton.** Palette alone does not break a
template signature; structure does. The new vocabulary:

```
Masthead → Hero(dark, 2-col) → Features → Plans → Ordering → Devices
        → Included → Questions → Guarantee → Footer + StickyCta
```

Three sections have no sibling equivalent — `Ordering`, `Guarantee`, and the
anchored `Prose` slot the cluster pages will use. `Specification` exists as a
component for cluster pages but is not on the homepage: it restated `Features`
and the duplication was worse than the gain.

---

## 2b. Settled constraints

**Licensing — confirmed unlicensed / unverified (2026-08-26).** The service
holds no licence the owner can name. Every imagery constraint in §1 is
therefore permanent, not stylistic: no broadcaster logos, no channel marks, no
film or series artwork, no EPG stills carrying third-party identities. Inline
SVG and the site's own interface only. If a licence is ever obtained and can be
evidenced, this section is the first thing to revisit — showing the marks would
become the highest-value change available.

Because the marks are unavailable, the trust layer has to come from elsewhere:

- **Trader identity** — company name, registration number and a geographic
  address. This is a Consumer Contracts Regulations 2013 pre-contract
  requirement for UK distance selling, and it is verifiable in a way no
  testimonial is. Currently absent. Highest-value outstanding item.
- **Screenshots of our own product** — the player, the EPG grid, the email that
  delivers the codes. Our interface, no third-party marks, no exposure.
- **Stating limits** — the SPECIFICATION rows that say what is *not* included
  ("No phone line, no live chat, no callback") are the strongest signal on the
  page. Volunteering a limitation is the one thing a scam never does.

**Countdown timer — removed 2026-08-26, do not reinstate.** The sticky bar
briefly carried a promotional countdown seeded randomly per visitor in
localStorage, restarting on expiry. A clock running toward zero beside a price
represents that something changes at zero; nothing did. That is a banned
practice under CPRs Sch.1 / DMCC Sch.20 regardless of the caption, and it
directly contradicted `PRICE_VALID_UNTIL` ("2027-12-31") published in every
Offer on the same page load. The slot now carries the delivery promise, which
is both stronger and true. Only a single real campaign end date in
`constants.ts`, identical for every visitor, after which prices actually
change, would be defensible.

## 3. Type

**One sans family. No serif anywhere.** Hierarchy comes from weight and size.

| Role | Family | Use |
|---|---|---|
| Everything | **Plus Jakarta Sans** (variable, 200–800) | Headings, body, UI, labels, buttons |

Self-hosted at `public/fonts/PlusJakartaSans-var.woff2` via `next/font/local`,
not `next/font/google`: the Google fetch failed intermittently at build time,
and self-hosting removes a third-party origin from the critical path. One
27KB request covers every weight.

```css
--font-sans:    "Plus Jakarta Sans", system-ui, -apple-system, sans-serif;
--font-display: "Plus Jakarta Sans", system-ui, -apple-system, sans-serif;
```

**Rules**
- Headings: `font-weight: 800`, `letter-spacing: -0.02em`, `line-height: 1.15`
- Body: `1rem/1.65`, measure capped at **64ch** (`.measure`)
- **No uppercase letter-spacing on labels.** `.eyebrow` is sentence-case,
  `0.8125rem`, weight 700, tracking `0`. Wide-tracked uppercase eyebrows were
  the single most-disliked thing in the first pass.
- All figures use `.tabular` (`font-variant-numeric: tabular-nums`)


---

## 4. Colour

```css
--paper:       #FFFFFF   /* page ground */
--paper-sunk:  #F6F5F2   /* alternating sections, cards */
--ink:         #14121F   /* body text */
--ink-muted:   #4C4860   /* secondary text */
--rule:        #E4E1DA   /* hairlines */

--gold:        #B8791A   /* primary action, eyebrows */
--gold-bright: #F0A930   /* gradients, accents on dark */
--gold-hover:  #96610F
--gold-soft:   #FDF3E0   /* tinted hover surfaces */

--flame:       #D93A2B   /* urgency ONLY — most-popular badge */

--night:       #0B0A1A   /* dark ground */
--night-2:     #17152C
--night-3:     #241F3F
```

**Surfaces are soft, not ruled.** Rounded corners (`rounded-lg` / `rounded-xl`
/ `rounded-2xl`) with hairline rings (`ring-1 ring-ink/10`). No hard 1px
borders on buttons or icon chips, and no `gap-px` border grids — both read as
harsh and were rejected in review.

Two CSS surfaces carry the dark sections without images: `.night-field`
(radial indigo + gold blooms over `--night`) and `.guide-grid` (a faint square
grid evoking a programme guide).


---

## 5. Dark-to-light transitions

The hero and `PageHeader` both end with a `bg-gradient-to-t from-night`
fade into the section below. The earlier hard-edged "seam" with an accent rule
was removed along with the orange palette.

`PageHeader` carries this treatment for every non-homepage route (`/blog`,
`/blog/[slug]`, `/contact`) so they sit on the same ground as the homepage
rather than each inventing their own.


---

## 6. Motion & performance budget

**Targets, measured on throttled 4G / mid-tier Android:**
`LCP < 2.5s` · `INP < 200ms` · `CLS < 0.1`

70% of clicks are mobile (820/1,172, buy-iptv-uk.com 90d), so the budget is
mobile-first and non-negotiable.

**Removed**
- `ParticleBackground` — a per-frame `requestAnimationFrame` loop with an
  O(n²) particle-pair distance calculation, rendering inside the LCP region
- `aurora-blob` animated gradients (5 in the hero alone)
- `framer-motion` from every above-fold component

**Allowed**
- CSS-only transitions on hover/focus, `transform` and `opacity` only
- One staggered page-load reveal via `animation-delay`, ≤400ms total,
  wrapped in `prefers-reduced-motion`
- `framer-motion` below the fold only, and only where it earns its weight

Every image gets explicit `width`/`height`. The font is self-hosted with
`display: swap` and preloaded — the H1 is the LCP element.

`framer-motion` is at **zero imports** across the codebase. The FAQ uses native
`<details>`/`<summary>`: keyboard- and screen-reader-correct for free.

---

## 7. Component slots

The rule that keeps 20+ cluster pages from being either monotonous or chaotic.

### Page types

| Type | Routes | Word budget |
|---|---|---|
| **Commercial** | `/`, `/buy-iptv-uk`, `/buy-iptv-subscription` | 700–1,000 |
| **Cluster** | silo children | 900–1,800 |
| **Utility** | `/about`, `/editorial-policy`, `/contact` | 400–800 |
| **Legal** | `/terms`, `/privacy`, `/dmca`, `/refund` | as required |
| **Transactional** | `/checkout`, `/thanks` | — *(noindex, nofollow)* |

### Slot matrix

| Slot | Commercial | Cluster | Utility |
|---|---|---|---|
| Masthead | ● | ● | ● |
| Hero (dark) | ● | ◐ compact | ◐ compact |
| Specification | ● | ○ | — |
| Plans (table) | ● | ◐ *once, mid-page* | — |
| Ordering | ● | ○ | — |
| Included | ● | ○ | — |
| Compatibility | ● | ○ | — |
| **Prose + anchor rail** | ○ | **●** | ● |
| Questions | ● | ● *page-specific* | ○ |
| Guarantee | ● | ● | — |
| Footer | ● | ● | ● |

● mandatory ◐ variant ○ optional — never

### Prose block rules

The slot that does the ranking. Applies to every Cluster page.

- **H2 every 250–350 words. H3 every 100–150.** Never five consecutive paragraphs.
- **Rotate block types**: paragraph → list → callout → paragraph → table → paragraph.
  No block type twice in a row.
- **Single column at 68ch.** Not two columns — on a scrolling page that forces
  the reader down and back up.
- **Sticky anchor rail** from `lg:` up, built from the page's H2s, with a
  scroll-progress indicator. Below `lg:` it collapses to a top "On this page" list.
- **One functional diagram per page**, minimum — comparison table, setup-step
  SVG, or spec table. Never decorative.
- Section markers: the `.marker` rule was removed; H2s stand on weight alone.

### Earning a slot

| Slot | Included when |
|---|---|
| Comparison table | The page's keyword implies a choice (`vs`, `best`, `cheap`) |
| Setup diagram | The page describes a procedure |
| Spec table | The page makes ≥3 numeric claims |
| Callout | There is a genuine caveat — a limitation, not a boast |
| Plans table | Cluster pages only, once, after the second H2 |

**Every cluster page must differ from its siblings in at least two slots.**
Identical slot sets across a silo is what produces "Discovered – currently not
indexed", which is already affecting 7 URLs here.

---

## 8. WhatsApp CTA

WhatsApp is the **fallback**, not the primary path. `/checkout` takes card
payment through the hub and emails Xtream codes automatically; WhatsApp covers
the case where the hub reports stores unavailable, and buyers who want to ask
first. It must never sit at equal visual weight to the checkout CTA — a
fallback at equal weight is a fork, and forks cost conversion at the moment of
commitment.

- Label: **"Message us on WhatsApp"** — never "For payment please contact us"
- **CTA labels name the next state, not the head term.** "Get my codes — from
  £25.99", "Choose 12 Months — £49.99", "Buy now". Internal anchor text to
  /checkout does nothing for rankings, so putting "Buy IPTV UK" on every
  button spent clarity for zero SEO.
- Gold button, `--gold`, with a small WhatsApp glyph. Not WhatsApp green —
  brand consistency beats channel recognition, and green admits single-channel
- Expectation line beneath quotes `SUPPORT_HOURS`. Never a response-time
  promise — no such measurement exists (see §2b on invented figures)
- A three-step strip — *choose plan → we send payment details → credentials by
  email* — appears once per commercial page
- A stylised chat preview (static markup, not an image) shows the opening message
- Sticky bottom bar on mobile below 768px; repeated in-body after Plans
- **Never** reference card checkout, "coming soon", or apologise for the channel

---

## 9. Copy voice

British English — *colour*, *aluminium*, *licence*, *high street*. `lang="en-GB"`.

- Plain and specific. "1080p over 4G, 4K on 25 Mbps+ fibre" beats "premium quality"
- **State the guarantee verbatim** from `/refund`, never paraphrased
- **Hard FAQs, not softballs**: "What if it stops working?", "What if I message
  on a Sunday?", "Can I test before I pay?"
- No superlatives, no "premium", no "#1", no "trusted by"
- Numbers only where they are checkable against `constants.ts` or a published policy

---

## 10. Accessibility

- Contrast ≥ 4.5:1 body, ≥ 3:1 large text. `--ink` on `--paper` is 15.8:1;
  `--gold` on `--paper` is 4.6:1 — **gold is for large text and UI only**,
  never body copy
- Visible focus ring: 2px `--gold-bright`, 2px offset
- Anchor rail is a `<nav aria-label="On this page">`
- All motion behind `prefers-reduced-motion: reduce`
- Tables use real `<th scope>`; the plans table is not a div grid
