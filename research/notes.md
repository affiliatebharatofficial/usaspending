# usaspending.us — Pre-research notes

Research for upcoming daily articles (picked first-unchecked from docs/article-calendar.md).

---

## 2026-10-10 — `how-much-us-spends-per-second`

Topic for the 2026-10-11 ~10:19 IST run. Pillar: Explainers.

### Verified numbers (ALL from src/lib/data/spendingData.ts — canonical source of truth)

Coverage: FY2026 FYTD, Oct 1, 2025 – Aug 31, 2026 (335 elapsed days),
latest published Monthly Treasury Statement as of the October 2026 refresh.

- FY2026 FYTD total outlays: **$6,811,043,257,196**
- 335 days × 86,400 s = 28,944,000 seconds
- Per-second: **$235,317.97** (≈ $235,300/s — the headline number)
- Per-minute: $14,119,078.06 (≈ $14.1M)
- Per-hour: $847,144,683.73 (≈ $847M)
- Per-day: $20,331,472,409.54 (≈ $20.3B)

Per-category per-second (FYTD ÷ 28,944,000):
- Social Security: $52,717.97 (≈ $52,700/s)
- Net interest: $35,135.66 (≈ $35,100/s)
- Medicare: $33,834.31 (≈ $33,800/s)
- Medicaid: $31,982.37 (≈ $32,000/s)
- Defense/military: $30,270.98 (≈ $30,300/s)
- Veterans affairs: $13,669.38 (≈ $13,700/s)

Sanity checks performed 2026-10-10:
- Category per-second figures sum-check: social security + net interest +
  medicare + medicaid + defense + veterans = ~$199,700/s, well under the
  $235,300/s total — consistent (remaining ~$35,600/s covers SNAP, education,
  infrastructure, science, and other smaller categories)
- FY2025 full year $7,009,973,667,049 ÷ (365×86,400) = $222,284.81/s.
  The FY2026 FYTD rate ($235,318/s) is HIGHER — a genuine finding, but treat
  with care: FYTD daily average is not a full-year run rate (spending is lumpy
  across the fiscal year; September outlays are not yet in the FY2026 data).
  Frame as "running faster than the FY2025 average pace", NOT as "the full-year
  total will be X".

### Methodology caveats (honesty rules)
- These are DAILY AVERAGES over 335 days, not a live meter. Federal spending is
  lumpy — Treasury disburses on schedules (Social Security on Wednesdays,
  contract payments in batches); interest on the debt accrues continuously,
  which is why the per-second framing is more "real" for interest than for,
  say, defense contracts.
- Say what is known: the number is derived from published Treasury totals;
  nobody knows what the government spent in the literal last second.

### Chart suggestions (2-4 required by skill)
1. Bar chart: per-second spending by category (6 categories above, $/s unit)
2. Line/bar: FY2025 full-year per-second ($222,285/s) vs FY2026 FYTD
   ($235,318/s) — labels must state coverage ("FYTD through Aug 2026")
3. "Ladder" bar: per-second / per-minute / per-hour / per-day (log-scale or
   normalized) to make the scale visceral

### Citable sources (get exact URLs at write time via browser.search — DO NOT invent URLs)
- U.S. Treasury Monthly Treasury Statement (fiscal.treasury.gov) — Table 9
  outlays, September finals FY2018–FY2025, FY2026 FYTD through August 2026
- CBO (cbo.gov) for context on why spending is growing
- Reputable news on the debt/deficit trajectory as of Oct 2026

### Internal links to mention
- /blog/us-debt-interest-vs-defense-spending (day-1 article)
- /blog/federal-spending-texas (day-3 article)
- /categories/net-interest-spending

---

## 2026-10-11 — PRE-RESEARCH for `fy2026-federal-spending-final-numbers` (moved to FRONT of queue, gated on September 2026 MTS)

### Why this topic, why now
- The September 2026 Monthly Treasury Statement is the OFFICIAL close of FY2026 (fiscal year ended Sept 30, 2026). It was sitting 25 topics deep in the calendar (~3.5 weeks out) — it would have missed the entire news cycle. Moved to first unchecked position 2026-10-11 with a GATE note in the calendar.
- **Status as of 2026-10-11 ~13:55 IST: NOT yet published.** Verified two ways: (1) `node scripts/refresh-mts-data.mjs 2026-09-30` returns nulls for all FY2026 categories (script works — prior-year September finals return fine); (2) economic calendars list **Monday Oct 12, 2026 ~2pm ET** as the expected release, but Oct 12 is Columbus Day (US federal holiday, bond market closed) — it may slip to Oct 13. The year-end MTS often lands mid-to-late October (FY2024's came Oct 18).
- Gate behavior: the Oct 12 daily run (10:19 IST = ~12:49am ET, before the release) will most likely find it not-live → SKIP to next topic per the calendar gate note. The Oct 13 run should find it live → write the finals article with REAL numbers.

### Numbers already in circulation — ALL ESTIMATES, never present as final
- **CBO Monthly Budget Review for FY2026 (published Oct 8, 2026):** deficit **$2.0T** — $218B above FY2025's $1.8T deficit, $140B above CBO's latest baseline. Outlays **$7.4T**, revenue **$5.4T**. Spending rose $386B; revenue rose $169B. (Source: AAF summary of CBO MBR, Oct 8 2026.)
- **CRFB preliminary estimate** (day after fiscal year closed): deficit ~$2.0T; revenue $5.4T (16.7% of GDP); spending $7.4T (22.9% of GDP); gap ~6.2% of GDP — "highest debt-to-GDP since WWII" framing in press.
- OMB Mid-Session Review: $2.2T deficit. CRS/CBO-June-reestimate-based figure: $2.1T (6.6% of GDP). CEA projected ~$305B lower than CRFB. Spread reflects growth assumptions, not data.
- **Debt:** $40.17T outstanding at Sept 30 close (+$2.53T in FY2026, +6.7%); debt held by public $32.43T (+$2.15T); first closed above $40T on Aug 18. (Treasury Daily "Debt to the Penny".)
- **Interest:** CRFB estimate net interest topped **$1.1T** for FY2026 (site's FYTD figure through Aug: $1.017T).
- Context anchors: FY2025 final = $7.01T outlays / $1.8T deficit. Sept 2025 was a $197.9B SURPLUS month (quarterly receipts) — September seasonality cuts both ways; don't annualize the month.

### Per-second update math (for the article's through-line with the Oct-11 piece)
- If MTS confirms ~$7.4T: $7.4T / 365 days = **~$234,700/s** full-year rate — squarely consistent with the FYTD $235,318/s. Frame as "the rate held."
- Deficit per second: $2.0T / 365 ≈ **$63,400/s** borrowed (vs FYTD $67,910/s through Aug).

### Honesty constraints (mandatory)
- CBO MBR = early estimate; **only the Treasury MTS is official**. If writing before MTS lands (shouldn't happen per gate, but if): label every FY2026 full-year figure "CBO/CRFB estimate, pending Treasury's official September statement."
- When MTS is live: run `node scripts/refresh-mts-data.mjs 2026-09-30`, use the printed Table 9 category FYTD outlays as the article's source numbers. The SITE-WIDE data refresh (spendingData.ts + dataService.ts + redeploy) is a separate job in the Oct-8 pattern — the article cites the numbers; it does not perform the refresh (skill forbids editing non-blog files).
- September finals history: the script also prints FY2018–FY2025 September finals; FY2026's final joins that series once published.
- Target keyword: "fy2026 federal spending total". Internal links: /blog/how-much-us-spends-per-second, /blog/us-debt-interest-vs-defense-spending, /blog/where-does-us-federal-budget-go, /spending-breakdown.
