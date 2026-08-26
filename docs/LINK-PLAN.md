# buy-iptv-subscription.tv — pre-link hygiene & anchor plan

Phase 5. Written 2026-08-26. Read this before buying a single placement.

---

## 1. This domain has already been attacked

`disvow-files/disavow-buy-iptv-subscription.txt` (dated 2026-07-23) lists
**55 domains**, effectively all of them `.shop` PBNs — `rankgoods.shop`,
`seolinkkart.shop`, `backlinkzeno.shop` and so on. Its own header calls it a
*"Full July .shop PBN wave (network-wide attack pattern)"*.

Scale across the network, same wave:

| Domain | Disavowed |
|---|---|
| buy-iptv-uk (**now deindexed**) | 313 |
| british-iptv-4k | 292 |
| iptv-providers-uk | 254 |
| iptv-subscription-uk-4k | 248 |
| best-iptv-uk-subscription | 246 |
| cheap-iptv | 76 |
| fast-iptv | 56 |
| **buy-iptv-subscription** | **55** |
| iptv-premium-uk | 42 |

So the answer to "does this domain have the same problem" is **yes, but at a
tenth the volume of the property that died**. Whether that is because the
attacker deprioritised it or because it was caught early is unknown.

### Status

**The disavow is uploaded** (owner, confirmed 2026-08-26 — submitted roughly a
month ago). So those 55 domains are already discounted by Google and the
immediate risk is contained.

**The list is known to be incomplete.** The file ends with
`# Add any remaining new low-DR .shop from latest export`, so it was partial
when written on 2026-07-23. Any `.shop` domains that appeared since are still
counting.

### Monitoring without Ahrefs

The Ahrefs subscription has lapsed, but Search Console covers this for free and
is the same dataset Google acts on:

> **Search Console → Links → External links → Top linking sites** → Export

Run it monthly. Anything matching the wave's signature — `.shop` TLD, names
built from *seo / rank / link / backlink* + a retail noun (`kart`, `depot`,
`stash`, `outlet`, `crate`) — goes straight into the disavow file, which is
then re-uploaded in full. Disavow submissions replace the previous file rather
than appending, so always upload the complete list.

Slower to refresh than Ahrefs and it gives no DR, but for "which new spam
domains appeared since July" it is sufficient.

### What the residual risk actually is

With the disavow live, the spam is discounted. The remaining issue is
narrower: this domain has close to **zero organic referring domains**, so every
link it gains from here will be a purchased one. A profile made entirely of
bought placements is thin and unnatural even when none of it is toxic — which
is what the pacing and anchor rules in §2 exist to manage.

---

## 2. Anchor-text allocation

Target split, per owner: **50% brand · 30% naked/generic · 15% partial ·
5% exact**. Over a first tranche of 20 links that is:

| Class | Share | Links | Examples |
|---|---|---|---|
| **Brand** | 50% | 10 | Buy IPTV Subscription · BuyIPTVSubscription · Buy IPTV Subscription (UK) |
| **Naked / generic** | 30% | 6 | buy-iptv-subscription.tv · https://buy-iptv-subscription.tv · this IPTV provider · their site · here · read the full breakdown |
| **Partial match** | 15% | 3 | buying an IPTV subscription in the UK · UK IPTV subscription plans · where to buy IPTV in Britain |
| **Exact match** | 5% | **1** | buy iptv uk |

**Rules**

- **Never exceed one exact-match anchor per twenty links.** On a domain with
  ~zero legitimate links, two exact-match anchors is already a visible pattern.
- Naked URLs count toward the naked/generic bucket, not brand.
- No anchor should repeat verbatim more than twice across the whole profile.
- Deep-link at least a third of placements to `/about` or a blog post rather
  than the homepage. An all-homepage profile is a paid-link signature.
- Vary surrounding sentence structure — templated sentences around varied
  anchors are as detectable as templated anchors.

**Sequencing.** Start brand-only. The first five links should carry brand or
naked anchors exclusively; introduce the partial matches from link six, and
place the single exact-match anchor last, on the highest-quality domain in the
tranche.

---

## 3. Prospect list — inherited, needs re-verification

`additionals/seo-backlinks-recap.md` (26 April 2026) carries eight prospects,
none contacted:

| # | Domain | DR | Traffic | UK relevance | Note |
|---|---|---:|---:|---|---|
| 1 | ventsmagazine.co.uk | 63 | 120K | 100% UK | |
| 2 | programminginsider.com | 70 | 10K | Global | Active in this niche |
| 3 | ivacy.com | 70 | 8.9K | Global | |
| 4 | funuploads.com | 47 | 7.3K | Global | |
| 5 | bestdroidplayer.com | 61 | 3.9K | Global | |
| 6 | outragemag.com | 39 | 557 | Global | Thin traffic |
| 7 | geekvibesnation.com | 60 | 18.7K | 18.5% UK | Paid placement |
| 8 | shatao.co.uk | 4.2 | 3.4K | 97% UK | Low DR, high UK fit |

**Caveats before spending anything:**

- The list is four months old. DR and traffic need re-checking — several IPTV
  "authority" sites in that research were themselves flagged as PBN suspects.
- The outreach templates in that document pitch **buy-iptv-uk.com**, which is
  dead. They must be rewritten for this domain before use.
- The recap's own finding stands: *"Sites with DR 30+ and traffic 0 = PBN."*
  Apply it to iCopify inventory too — marketplace listings frequently are
  exactly that.
- Prefer domains with real UK traffic over raw DR. `shatao.co.uk` at DR 4.2
  with 97% UK traffic is likelier to help than a DR 50 global site with no
  British readership.

---

## 4. Order of operations

1. Confirm the disavow is uploaded to Search Console for this property
2. Refresh the disavow from a current referring-domains export
3. Re-verify the eight prospects; drop anything with DR/traffic mismatch
4. Rewrite the outreach templates for buy-iptv-subscription.tv
5. Begin placements, brand-anchor first, per §2
6. Re-check the referring-domain profile after every five placements

**Do not** start at step 5.
