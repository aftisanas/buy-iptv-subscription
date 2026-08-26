# buy-iptv-subscription.tv — SEO audit

Phase 7. Run 2026-08-26 against the **live site**, first crawl since deployment.
12 indexable URLs, all reachable.

## Health score: **84 / 100**

| Category | Weight | Score | Note |
|---|---:|---:|---|
| Technical SEO | 22% | 92 | Clean. Minor header duplication from Cloudflare |
| Content quality | 23% | 68 | **Lowest.** No trader identity, no bylines, two thin posts |
| On-page SEO | 20% | 88 | Titles, meta, H1s all correct. Blog under-linked |
| Schema | 10% | 90 | Every page typed. No fabricated Review markup |
| Performance | 10% | 80 | *Provisional — CWV not measurable, see §5* |
| AI readiness | 10% | 85 | llms.txt accurate after this audit's fix |
| Images | 5% | 95 | All WebP, all alt-texted, `next/image` with sizes |

**No critical issues. Nothing blocks indexing.**

---

## 1. Crawl results

All 12 sitemap URLs return 200. Every page has exactly **one H1**, a
**canonical**, a **meta description within range**, and **valid JSON-LD**.
Zero images missing alt text.

| Page | Words | Title | Desc | H1 | Schema |
|---|---:|---:|---:|---:|---|
| `/` | 2,249 | 52 | 152 | 1 | Organization, WebSite, WebPage, Product, FAQPage, Breadcrumb |
| `/blog/best-iptv-uk-guide-2026` | 1,860 | 53 | 136 | 1 | Article, Breadcrumb |
| `/blog/how-to-setup-iptv-firestick` | 1,575 | 46 | 137 | 1 | Article, Breadcrumb |
| `/about` | 645 | 42 | 130 | 1 | AboutPage, Breadcrumb |
| `/blog/iptv-vs-traditional-tv` | 593 | 50 | 135 | 1 | Article, Breadcrumb |
| `/blog/premier-league-streaming-guide` | 546 | 44 | 140 | 1 | Article, Breadcrumb |
| `/blog` | 371 | 47 | 108 | 1 | Blog, Breadcrumb |
| `/terms` | 368 | 30 | 141 | 1 | WebPage, Breadcrumb |
| `/privacy` | 327 | 28 | 148 | 1 | WebPage, Breadcrumb |
| `/dmca` | 288 | 25 | 151 | 1 | WebPage, Breadcrumb |
| `/refund` | 273 | 27 | 157 | 1 | WebPage, Breadcrumb |
| `/contact` | 229 | 33 | 126 | 1 | ContactPage, Breadcrumb |

Titles run 25–53 characters — all inside the SERP budget, none truncating.

---

## 2. Technical — clean

- `http://` → 301 → `https://`; `www.` → 301 → apex. **One canonical host**, no
  split signals. This is frequently broken at launch and is not here.
- `robots.txt` allows all, disallows `/api/`, `/_next/`, `/admin/`, declares the
  sitemap.
- `/checkout` and `/thanks` correctly `noindex, nofollow` and correctly absent
  from the sitemap.
- Sitemap is an explicit allow-list of 12 URLs, no globbing.
- HSTS with preload, CSP enforced, `nosniff`, `X-Frame-Options: SAMEORIGIN`.

**One defect:** `referrer-policy` is sent **twice** with conflicting values —
`strict-origin-when-cross-origin` from `next.config.ts` and `same-origin` from
Cloudflare. Browsers honour the last, so Cloudflare's wins and ours is dead
config. `x-content-type-options` and `vary` are also duplicated. Harmless but
untidy; resolve in the Cloudflare Transform Rules, not in the app.

---

## 3. Content — the weakest category, for one reason

**No trader identity anywhere.** No company name, registration number or
geographic address. This is:

- a **Consumer Contracts Regulations 2013** requirement for UK distance selling
  (identity and geographic address before the contract concludes), and
- the strongest E-E-A-T signal available to a site that by design has no
  reviews, no licence and no third-party marks.

Everything else in the credibility layer is now solid — real customer threads,
stated limits, verbatim guarantee, honest specification. This is the one gap
left, and it is the single highest-value fix on the site.

**Secondary:** Article schema names `#organization` as author. There is no
person, no byline and no `sameAs`. For "buy iptv uk" that matters little; for
the blog it caps how far the content can travel.

**Two thin posts** — `iptv-vs-traditional-tv` (593) and
`premier-league-streaming-guide` (546). Both are half the length of the two
strong guides. The four legal/utility pages at 229–368 words are fine; that is
normal for their type.

---

## 4. On-page — one structural gap

Navigation and footer give every top-level page **12 inbound internal links**
(one from each crawled page). Solid.

But **each blog post has exactly one inbound link** — from `/blog`. Nothing on
the homepage, in `/about`, or between posts. Those four articles hold the site's
two longest pieces of content and are close to orphaned in link terms. Given
seven URLs previously sat in *"Discovered — currently not indexed"*, weak
internal linking is a plausible contributor.

Cheapest fix on the whole list: cross-link the posts to each other and surface
two from the homepage.

---

## 5. Performance — could not be measured

PageSpeed Insights returned `Quota exceeded` on the shared unauthenticated
pool, for both strategies. **No CWV field or lab data was obtained.** The score
above is provisional and inferred from the resource profile:

| Resource | Size |
|---|---|
| HTML (gzipped on the wire) | **22.8 KB** |
| CSS (render-blocking) | 48.8 KB |
| JS total | **669.9 KB** |
| Largest chunk | 227.3 KB (`react-dom`) |
| Font (self-hosted, preloaded) | 27.3 KB |
| Logo | 20.9 KB |

The JS is **overwhelmingly framework, not application waste** — chunks were
downloaded and inspected; there is no framer-motion, no icon-library bloat, no
duplicated vendor code. On a page whose only interactivity is a nav toggle and a
sticky bar, 670 KB is still the largest lever available if CWV turns out poor.

The LCP element (H1) is server-rendered, the font is preloaded and self-hosted
so there is no third-party origin on the critical path, and there is no canvas
loop or scroll-driven motion. Structurally this should score well.

**Action:** get real numbers from CrUX or PSI with an API key once the site has
traffic. Until then, treat 80 as unverified.

---

## 6. Schema — strong, and correctly incomplete

Every page carries typed JSON-LD referencing shared `#organization` and
`#website` nodes, so the site resolves to one entity. `Product` carries four
`Offer`s with `priceValidUntil` and a `MerchantReturnPolicy`.

**No `Review` or `AggregateRating`, deliberately.** The customer threads shown
on the homepage are real but anonymised, so there is no author to attribute and
no verifiable rating. Marking them up would be fabricated structured data. This
is correct and should stay that way until there is a genuine, attributable
review source.

Missing but low priority: `sameAs` on Organization (no social profiles exist),
and `legalName`/`address` (blocked on §3).

---

## 7. Dependencies

`npm audit` reported **7 vulnerabilities (6 high, 1 low)**. `npm audit fix`
resolved three transitive ones. The remaining three — a **Next.js DoS in Server
Components**, PostCSS XSS, and sharp/libvips CVEs — all resolve with
`next@16.3.3`, a **non-major** bump from 16.2.2.

`framer-motion` was still declared in `package.json` despite **zero imports**
since the redesign. Removed — it was not being bundled, but it was install
weight and supply-chain surface.

---

## 8. Fixed during this audit

- **`llms.txt` was stale and wrong.** Its opening paragraph still said *"orders
  are completed over WhatsApp"* — contradicting the automated card checkout the
  rest of the site describes, in the one file written specifically for AI
  answer engines. Corrected to describe the automated checkout with WhatsApp as
  fallback.
- `framer-motion` removed.
- Three transitive vulnerabilities patched.

---

## 9. Action plan

**High — this week**

1. **Publish trader identity** (§3). Company or trading name, number if one
   exists, and a geographic address. Add to `/about`, the footer, `/terms`, and
   as `legalName` + `address` on the Organization node.
2. **Upgrade to `next@16.3.3`** (§7). Non-major; clears all three remaining
   high-severity advisories including a live DoS vector.
3. **Cross-link the blog** (§4). Related-posts block on each article, two
   surfaced from the homepage.

**Medium — this month**

4. Expand `iptv-vs-traditional-tv` and `premier-league-streaming-guide` toward
   1,200+ words, or merge them into the two stronger guides.
5. Resolve the duplicate `referrer-policy` in Cloudflare (§2).
6. `SITE_NAME` is still `"Buy IPTV Subscription"` while the visible brand,
   title and H1 all say **Buy IPTV UK**. It feeds `Organization.name`,
   `llms.txt` and the OG `siteName`. Align it.
7. Get real CWV data once traffic exists (§5).

**Low**

8. Add `sameAs` to Organization if social profiles are ever created.
9. Author bylines on blog posts, if a real person can be named.

---

## 10. What this audit could not check

- **Core Web Vitals** — PSI quota exhausted, no CrUX key.
- **Indexation status** — needs Search Console; the site was deployed hours ago
  and the sitemap had not yet been submitted at audit time.
- **Rankings** — no Ahrefs subscription; GSC will show these once impressions
  accumulate.
- **Checkout end-to-end** — the hub reports `{"available":true}` for this slug,
  but a real card payment through to Xtream delivery has not been observed from
  production.
