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
