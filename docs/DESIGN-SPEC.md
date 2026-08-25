# buy-iptv-subscription.tv — Design & Component Spec

Governs the Phase 6 redesign and every cluster page built in Phase 2.
If a page needs something not in this document, the document changes first.

---

## 1. Concept — "The spec sheet"

A British utility aesthetic: departure boards, Ordnance Survey legends, a
well-made product datasheet. **Precision is the trust mechanism.** The site has
no reviews, no ratings, no logos and no named team, so credibility has to come
from how exactly it states things.

Three consequences that drive every decision below:

- **Numbers are typeset, not decorated.** Prices, channel counts, resolutions
  and durations render in monospace with tabular figures. They read as
  measured rather than marketed.
- **Rules replace imagery.** Horizontal rules, tables and legends carry the
  layout where competitors use broadcaster logos and film posters.
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
Masthead → Hero(dark) → Seam → Specification → Plans(table) → Ordering
        → Included → Compatibility → Prose(anchored) → Questions
        → Guarantee → Footer
```

Four sections have no sibling equivalent — `Specification`, `Ordering`,
`Prose`, `Guarantee` — and `Plans` renders as a comparison table on desktop
rather than a card row. That is the differentiation.

---

## 3. Type

| Role | Family | Weights | Use |
|---|---|---|---|
| Display | **Archivo** | 700, 800 | H1–H3, masthead, buttons |
| Body | **Source Serif 4** | 400, 600 | All prose, list copy |
| Data | system mono stack | — | Prices, counts, specs, eyebrows, table figures |

Serif body is the editorial inversion — it differentiates from every sibling
(all sans) and it is what long-form publications use, which is exactly the
1,500-word cluster-page problem. System mono for data costs zero bytes.

```css
--font-display: 'Archivo', system-ui, sans-serif;
--font-body:    'Source Serif 4', Georgia, serif;
--font-data:    ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
```

**Rules**
- Body prose: `1.0625rem/1.7` mobile, `1.125rem/1.7` desktop, measure capped at **68ch**
- Display: tracking `-0.02em` at H1/H2, never letter-spaced positive
- All figures use `font-variant-numeric: tabular-nums`
- Eyebrows: mono, `0.75rem`, `letter-spacing: 0.12em`, uppercase

---

## 4. Colour

Warm neutrals throughout. The siblings all use cool blue-whites (`#fafbff`);
warm paper is an immediate, structural break.

```css
--paper:        #FBFAF7   /* page ground */
--paper-sunk:   #F2EFE9   /* alternating sections, table stripes */
--ink:          #16130F   /* body text */
--ink-muted:    #5A5348   /* secondary text, captions */
--rule:         #DDD8CE   /* all borders and rules */
--orange:       #DC5B0E   /* single accent — CTA, active state, markers */
--orange-hover: #B84A0B
--night:        #14110D   /* hero ground — warm near-black */
--night-2:      #221D16   /* hero panels */
--night-rule:   rgba(255,255,255,0.14)
```

**One accent, used sparingly.** Orange marks actions and section boundaries.
It never fills a background larger than a button. No gradients on text, ever.

---

## 5. The seam

Dark hero to light body. All seven reference templates fumble this; it is
specified once here and reused verbatim.

- Hero ends on `--night`, flush, with **no gradient fade**
- A **4px `--orange` rule** spans full width at the boundary
- Body opens on `--paper` with `padding-top: 4rem`
- On the rule, a single mono caption sits left-aligned at container padding —
  e.g. `PLANS FROM £25.99 · 30-DAY MONEY-BACK`

A hard, deliberate edge reads as designed. A soft gradient reads as an accident.

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

Every image gets explicit `width`/`height`. Fonts use `display: swap` with the
display family preloaded — the H1 is the LCP element.

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
| Seam | ● | ● | ● |
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
- Section markers are **2px orange rules**, 3rem wide, above each H2.

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

The only checkout path. Presented as a deliberate choice, never apologetically.

- Label: **"Message us on WhatsApp"** — never "For payment please contact us"
- Orange button, `--orange`, with a small WhatsApp glyph. Not WhatsApp green —
  brand consistency beats channel recognition, and green admits single-channel
- Expectation line beneath, mono: `USUALLY REPLIES IN UNDER 15 MIN · 9AM–10PM UK`
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
  `--orange` on `--paper` is 4.6:1 — **orange is for large text and UI only**,
  never body copy
- Visible focus ring: 2px `--orange`, 2px offset
- Anchor rail is a `<nav aria-label="On this page">`
- All motion behind `prefers-reduced-motion: reduce`
- Tables use real `<th scope>`; the plans table is not a div grid
