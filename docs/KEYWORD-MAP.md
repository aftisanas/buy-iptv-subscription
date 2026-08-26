# buy-iptv-subscription.tv — keyword → URL map

Phase 0 deliverable, rebuilt 2026-08-26. Governs the Phase 2 cluster build.
Volumes are **measured UK impressions over 90 days from buy-iptv-uk.com's GSC
export** (a site that actually ranked these terms), not third-party estimates.
Difficulty is expressed as the best position that domain reached with no
legitimate backlinks.

---

## 1. Why this map is small

Two findings forced it.

**buy-iptv-uk.com's traffic was concentrated in three pages.**

```
 751   55% cum   /  (redirects to /buy-iptv-uk)
 240   72% cum   /iptv-subscription-uk
 132   82% cum   /buy-iptv-uk
  64 … 0         the remaining 12 pages — 242 clicks between them
```

Three URLs took **82%** of all clicks. The other twelve averaged **20 clicks
each over 90 days**. The 14-page cluster is not what made that site work.

**The network has already claimed almost every route it used.**

| Route | Already owned by |
|---|---|
| `/iptv-subscription-uk` | british-iptv-4k · iptv-uk-4k · *(head term of iptv-subscription-uk-4k)* |
| `/iptv-subscription` | cheap-iptv · iptv-uk-4k |
| `/best-iptv-uk` | iptv-uk-4k · *(head term of best-iptv-uk-subscription)* |
| `/iptv-free-trial-uk` | iptv-uk-4k · cheap-iptv (`/iptv-free-trial`) |
| `/iptv-provider-uk` | iptv-uk-4k |
| `/uk-sports-iptv` | iptv-uk-4k |
| `/is-iptv-legal-uk` | best-iptv-uk-subscription · fast-iptv |
| `/4k-iptv-uk`, `/iptv-for-firestick` | fast-iptv |
| `/tutorials/[device]` | best-iptv-uk-subscription · iptv-providers-uk · premium-iptv-uk |

**What is NOT claimed anywhere in the network: any `buy` or `purchase` route.**
The only one that ever existed was on buy-iptv-uk.com, which is dead. This
domain is also the sole exact-match for the family. That is the entire
uncontested opportunity, and it is where this site should stay.

---

## 2. The map

Scope narrowed 2026-08-26 (owner decision): **three terms only.** They are
near-synonyms sharing one SERP and one intent, so they take **one page**, not
three. `iptv subscription uk` and its variants belong to the sibling property.

| URL | Keywords | Impressions | Best pos | Role |
|---|---|---|---|---|
| `/` | **buy iptv uk** | 630 | **6.24** | Primary — title, H1 |
| | **buy iptv** | 1,096 | 12.32 | Secondary — H2s, body |
| | **buy iptv subscription** | 350 | 12.34 | Secondary — exact-match domain signal |
| | *supporting: iptv buy, buyiptv, buy iptv subscription uk* | 580 | 3.05–10.91 | Body, FAQ |
| **Total addressable** | | **≈2,656** | | |

**One page owns all three.** buy-iptv-uk.com's own data proves a single page
can hold the whole family — its homepage ranked simultaneously for `buy iptv`
(12.32), `buy iptv uk` (6.24) and `buy iptv subscription` (12.34). Splitting
them across URLs would create doorway pages, not a cluster.

Supporting routes, no keyword target: `/blog/*`, `/contact`, `/checkout` and
`/thanks` (both `noindex, nofollow`), legal pages.

---

## 3. Deliberately not built

- **`/iptv-subscription-uk`** — buy-iptv-uk.com's second-best page (240 clicks)
  but the head term of a live sibling. Owner's decision: leave it to the
  sibling. Its word-order variant `iptv uk subscription` (2,156 impressions)
  goes with it — the two share a SERP, so taking one takes both.
- **`/how-to-buy-iptv-uk` and `/iptv-for-sale-uk`** — proposed, then dropped
  when scope narrowed to the three head terms. Revisit only if the homepage
  plateaus and a genuinely distinct intent can be evidenced from GSC.
- **A duplicate homepage targeting a second head term.** buy-iptv-uk.com ran
  `/` and `/buy-iptv-uk` as near-duplicates and had to 301 one into the other.
  Two pages for synonymous queries split signals and win nothing.
- **Device / setup / legal pages** — covered by three or more siblings already.
- **Channel-category pages** (`/sports-iptv`, `/movies-iptv`) — proposed during
  the redesign review; rejected because they would compete with iptv-uk-4k's
  `/uk-sports-iptv` and dilute the buy-intent silo.

---

## 4. Anti-cannibalisation rules for Phase 2

1. **Test before building.** Pull the top 10 for any two proposed targets.
   Overlap above ~40% means one page, not two.
2. **Differentiate by intent, not vocabulary.** Synonyms of one query are one
   page. `buy iptv uk` / `purchase iptv uk` / `buy iptv subscription uk` are
   the same intent and must not become three URLs.
3. **Vary page type structurally.** If every page runs the same H2 sequence it
   reads as templated to a reviewer and a classifier alike, whatever the
   wording. One comparison-led, one walkthrough-led, one FAQ-led.
4. **Three good pages beat eight thin ones.** On a domain with no link equity
   and no verifiable trading entity, eight near-duplicate commercial pages is
   the textbook profile for a scaled-content-abuse action. One sibling has
   already been lost.
