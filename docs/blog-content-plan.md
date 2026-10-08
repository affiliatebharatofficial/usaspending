# USAspending.us — Weekly Blog Content Plan

**Goal:** Give Google a freshness + depth signal it currently lacks, and win long-tail
queries the data pages alone can't capture. One article per week, ~1,200–2,000 words,
each built around the site's real MTS data with 2–4 original charts.

**Status (Oct 2026):** No blog route exists yet. Recommended: `src/app/blog/[slug]/page.tsx`
(MDX or TSX per article), index at `/blog`, auto-added to `sitemap.ts`.

---

## Content pillars

### Pillar 1 — Data stories (news hooks, link bait)
Timely pieces built on the refreshed MTS numbers. These earn backlinks from
journalists, Reddit, and newsletters.

### Pillar 2 — Evergreen explainers (SEO workhorses)
"What is / how much" queries with steady search volume. Update yearly.

### Pillar 3 — State spotlights (local SEO + editorial depth)
Pairs with `src/lib/states/editorial.ts`. Each spotlight is a candidate to become
that state's editorial entry later.

### Pillar 4 — Comparisons (high-engagement, shareable)
Head-to-head numbers people argue about.

---

## 12-week calendar (starting week of Oct 12, 2026)

### Week 1 — Pillar 1
**Title:** "America Now Spends More on Debt Interest Than on Defense"
**Keyword:** `us debt interest vs defense spending`
**Angle:** Net interest hit $1.017T FYTD — 14.9% of outlays, ahead of National
Defense ($876B). Chart the crossover year (2024→2026). This is the site's
strongest news hook from the October refresh.
**Internal links:** `/categories/net-interest-spending`, `/categories/defense-military`, `/spending-by-year`

### Week 2 — Pillar 2
**Title:** "Where Does the US Federal Budget Go? The 2026 Breakdown"
**Keyword:** `where does the us federal budget go`
**Angle:** Plain-English walkthrough of the 10 categories with the pie chart.
Ends with per-second/per-day rates for scale.
**Internal links:** `/spending-breakdown`, `/calculators/spending-rate`

### Week 3 — Pillar 3
**Title:** "Federal Spending in Texas: Bases, NASA, and the Border"
**Keyword:** `federal spending in texas`
**Angle:** Publish the Texas editorial content as a feature story; link to the
Texas state page. Template for all future state spotlights.
**Internal links:** `/states/texas`, `/compare/california-vs-texas`

### Week 4 — Pillar 1
**Title:** "The $600 Billion Swing: What Student-Loan Accounting Did to Education Spending"
**Keyword:** `federal education spending by year`
**Angle:** Real MTS data: Education function went $677B (FY2022) → –$3B (FY2023)
→ $305B (FY2024) → $92B (FY2026 FYTD) on loan-forgiveness accounting. A
data-integrity story only this site's historical series can tell simply.
**Internal links:** `/categories/education-training`, `/spending-by-year`

### Week 5 — Pillar 2
**Title:** "How Much Does the US Government Spend Per Second?"
**Keyword:** `how much does the us spend per second`
**Angle:** $235,318/second FYTD. Build the interactive feel with the live clock
embed; answer the featured-snippet directly in the first 50 words.
**Internal links:** `/` (clock), `/calculators/amount-to-time`

### Week 6 — Pillar 4
**Title:** "Social Security vs. Everything Else: The Budget in One Chart"
**Keyword:** `largest us federal spending categories`
**Angle:** Social Security ($1.53T, 22.4%) is bigger than defense + veterans
combined. Stacked-bar visual.
**Internal links:** `/categories/social-security-spending`, `/spending`

### Week 7 — Pillar 3
**Title:** "Federal Spending in Virginia: The Defense Corridor"
**Keyword:** `federal spending in virginia`
**Angle:** Pentagon, Norfolk naval base, NoVA contractors. Second state spotlight.
**Internal links:** `/states/virginia`, `/agencies/department-of-defense`

### Week 8 — Pillar 1
**Title:** "FY2026 Is Over: The Final Numbers in 6 Charts"
**Keyword:** `fy2026 federal spending total`
**Angle:** Publish when the September 2026 MTS final drops (mid-October).
Run `scripts/refresh-mts-data.mjs`, update the site, then publish the story.
**Internal links:** `/spending-by-year`, `/methodology`

### Week 9 — Pillar 2
**Title:** "Deficit vs. Debt vs. Interest: What's the Difference?"
**Keyword:** `deficit vs debt vs interest explained`
**Angle:** Evergreen explainer using real FY2026 numbers ($1.97T deficit FYTD,
$1.02T interest). High school / civics search traffic.
**Internal links:** `/categories/net-interest-spending`, `/history`

### Week 10 — Pillar 4
**Title:** "Medicare vs. Social Security: Which Costs More?"
**Keyword:** `medicare vs social security spending`
**Angle:** $979B vs $1.53T, with per-beneficiary context and 9-year trends.
**Internal links:** `/compare/medicare-vs-social-security`, both category pages

### Week 11 — Pillar 3
**Title:** "Federal Spending in California: Health Dollars and Defense Contracts"
**Keyword:** `federal spending in california`
**Angle:** Largest state by modeled federal flow; Medicaid-heavy, big defense
contractor presence (San Diego).
**Internal links:** `/states/california`, `/compare/california-vs-texas`

### Week 12 — Pillar 1
**Title:** "3 Charts That Explain the FY2027 Budget Debate"
**Keyword:** `fy2027 federal budget`
**Angle:** Forward-looking: use FY2026 actuals as the baseline for the FY2027
debate. Timely for fall budget news cycle.
**Internal links:** `/`, `/spending-by-year`

---

## Article template (every post)

1. **Hook (first 50 words):** answer the target query directly — featured-snippet bait.
2. **2–4 original charts** (reuse site chart components; unique images = image search traffic).
3. **"The numbers" box:** source line — "U.S. Treasury Monthly Treasury Statement, Table 9, FYTD through Aug 31, 2026."
4. **3–5 internal links** to data pages (see per-week suggestions).
5. **Methodology footnote** linking `/methodology`.
6. **FAQ schema** (3–4 Q&As) — reuse `FAQSection`.

## Publishing checklist

- [ ] Slug under `/blog/`, added to sitemap (auto via `sitemap.ts` once route exists)
- [ ] Title ≤ 60 chars, meta description with the target keyword
- [ ] Article schema (JSON-LD) + FAQ schema
- [ ] 2–4 charts with descriptive alt text and filenames
- [ ] Internal links to ≥3 data pages
- [ ] "Last updated" date shown; refresh top performers yearly
- [ ] Share to r/dataisbeautiful, relevant subreddits, and data newsletters

## Cadence

Weekly, same weekday (e.g., every Tuesday). If a week is missed, publish the
next scheduled piece — don't double up; consistency beats volume.
