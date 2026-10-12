# usaspending.us — pre-research notes for the daily article cron

Format: dated entries, newest first. Verification labels: OFFICIAL PAGE / MTS DATA
(site canonical) / THIRD-PARTY / UNVERIFIED.

---

## 2026-10-11 (evening) — PRE-RESEARCH for the GATED topic `fy2026-federal-spending-final-numbers` ("FY2026 Final Numbers: The Year in 6 Charts", target keyword "fy2026 federal spending total")

Gate status as of 2026-10-11 ~21:05 IST: **September 2026 MTS is NOT yet live in the Treasury Fiscal Data API** — verified by running `node scripts/refresh-mts-data.mjs 2026-09-30` this evening (all category values null; history table stops at FY2025). The calendar gate stands: do NOT write this topic until the September MTS is live; estimates below are context ONLY and must never be presented as final.

Expected release: economic calendars list **Monday 2026-10-12, 14:00 ET** — but that is Columbus Day (US federal holiday; bond market closed per SIFMA), so expect a slip to **Tuesday 2026-10-13** (FRED 2026 calendar: MTS September 2026 on Tue Oct 13, 1:00 pm US Central). The year-end report usually ships with a joint Treasury + OMB statement, and the FY2024 edition arrived Oct 18, 2024 — so late-October is the outer bound.

### The headline numbers — CBO Monthly Budget Review, September 2026 (THIRD-PARTY, CBO — released 2026-10-08)

- Federal deficit FY2026 = **$2.0 trillion** — **$218B wider than FY2025's $1.8T**, ~$140B above CBO's own baseline projection.
- **$7.4 trillion of spending (+$386B, +6%)** vs **$5.4 trillion of revenue (+$169B, +3%)**.
- Deficit = **6.2% of GDP** (up from 5.8% in FY2025). Debt held by the public = **$32.4T (~100% of GDP)**.
- **Third-largest deficit in history** in nominal dollars — behind only the pandemic years FY2020 ($3.1T) and FY2021 ($2.8T). CRFB's verdict: "ranks among the highest deficits in our history – and the highest ever outside of a war or recession."
- Interest payments rose **$115B** year over year — the deficit widened even though revenue grew, because spending grew faster.
- **Third year in a row that net interest outran defense** on the standard budget-function definition (Pentagon + nuclear weapons work). Honesty note (from the same source): on the broader definition the site used for its Day-1 article (DoD + veterans programs, $1,293.3B vs $970.1B interest in FY2025), defense still wins — state the definition being used. This validates and extends the site's Day-1 thesis.
Sources: CBO Monthly Budget Review Sept 2026 via https://www.cbo.gov (search "Monthly Budget Review September 2026") ; AAF insight https://www.americanactionforum.org/insight/cbo-fy-2026-budget-deficit-totaled-2-trillion/ ; https://selfreliancecentral.com/2026/10/10/washington-took-in-169-billion-more-last-year-and-still-borrowed-2-trillion/ ; https://askwhy.news/us/economy/fy2026-deficit-interest-tops-defense-yields/ ; release timing via https://admiralmarkets.com/analytics/traders-blog/us-monthly-budget-statement-october-2026

### Suggested angle when the MTS lands (MTS DATA = site canonical once published)

- The site's `scripts/refresh-mts-data.mjs` will give official FYTD category totals and the history-table FY2026 final. Lead with official numbers; use CBO's $2.0T/$7.4T/$5.4T only to frame the "estimates vs official" story if they match.
- Chart ideas: (1) deficit history FY2006–2026 ($ and % of GDP); (2) FY2026 category bars vs FY2025; (3) interest vs defense, three-year trend with both definitions labeled.

---

## 2026-10-11 (morning) — PRE-RESEARCH for 2026-10-12 cron run: `student-loan-accounting-education-spending`

Topic (deterministic per docs/article-calendar.md): the first unchecked `[ ]`
queue item → slug `student-loan-accounting-education-spending` | "The $600 Billion
Swing in Federal Education Spending" | target keyword "federal education spending
by year" | pillar: Data Stories.

### The headline numbers — CBO Monthly Budget Review, September 2023 (THIRD-PARTY, CBO)
- Department of Education outlays: **FY2022 = $639B → FY2023 = −$41B**, a **−$680B (−106%)** swing.
- Calendar title says "$600 Billion Swing" — the real swing is $680B; frame the article as "nearly $700 billion" / "the $680 billion swing" and keep the slug.
Source: https://WWW.CBO.GOV/system/files/2023-10/59544.pdf (Table 3, "Department of Education 639 −41 −680 −680 −106")

### Why it happened — the accounting mechanics (OFFICIAL: ED FY2023 Agency Financial Report)
- **Aug 24, 2022:** Biden announces one-time student-loan debt relief (up to $10K/$20K per borrower). CBO's Sept 26, 2022 letter estimated **~$430B of debt canceled** (43M borrowers held $1.6T as of June 30, 2022).
- ED books the estimated cost in FY2022 under the Federal Credit Reform Act: Direct Loan **net modification +$425.8B**, FFEL +$24.6B → subtotal **+$450.5B** (CRS R48152 table).
- **June 30, 2023:** Supreme Court strikes the plan down 6–3 (Biden v. Nebraska).
- FY2023: ED records the reversal — Direct Loan net modification **−$202.6B**, distributed offsetting receipts **−$346.7B** (downward re-estimates); agency net outlays **$306.5B vs $668.5B in FY2022 (−$362B, −54.2%)**.
- Honesty note for the article: no cash ever moved for the forgiveness — it was a subsidy-cost estimate booked as outlays, then reversed. Negative outlays are an accounting artifact of credit-reform re-estimates, not the government "earning" money.
Sources: ED FY2023 AFR https://www.ed.gov/sites/ed/files/about/reports/annual/2023report/2c-mda-financial-highlights.pdf ; CRS https://www.congress.gov/crs-product/R48152 ; SCOTUS ruling https://www.wuga.org/2023-06-30/supreme-court-rules-against-bidens-student-debt-plan

### The story continues (THIRD-PARTY, ED FY2027 congressional justification)
- ED's FY2027 budget docs note the FY2026 Direct Loan total is driven by a **net downward re-estimate of −$50.5B** — the student-loan accounting keeps swinging year to year. Good closing angle: this volatility is structural, not a one-off.
Source: https://www.ed.gov/media/document/fy-2027-congressional-justification-student-loans-overview-113549.pdf

### How to use the site's own data (MTS DATA — site canonical, src/lib/data/spendingData.ts)
- `education-training` category: FY2026 FYTD **$91,952,446,165**; FY factors (MTS Table 9 actuals): 2018: 1.0209, 2020: 2.5744, **2022: 7.3581**, 2024: 3.3172 → FY2022 ≈ **$676.6B** (functional-category basis; close to CBO's $639B department figure — the scopes differ, say so).
- **Limitation:** the site carries NO FY2023 category actuals (factors exist only for 2018/2020/2022/2024/2026). For FY2023 use CBO's −$41B with explicit "Treasury/CBO basis" attribution and note FY2023 is outside the site's chart data. Do NOT mix the functional series and the department series in one chart without labeling.
- Suggested visuals: (1) bar chart — Dept. of Education outlays FY2022 $639B vs FY2023 −$41B (CBO); (2) waterfall/timeline — announcement → booked cost → SCOTUS reversal → negative outlays.

---

## 2026-10-10 (afternoon) — PRE-RESEARCH for 2026-10-11 cron run: `how-much-us-spends-per-second`

Topic (deterministic per docs/article-calendar.md): the first unchecked `[ ]`
queue item → slug `how-much-us-spends-per-second` | "How Much Does the US
Government Spend Per Second?" | target keyword "how much does the us spend per
second" | pillar: Explainers. The 3 prior entries are checked/published
(2026-10-08 through 2026-10-10).

### Verified per-second rates — MTS DATA (site canonical, src/lib/data/spendingData.ts, checked 2026-10-10)

All figures from `ANNUAL_TOTAL_BUDGET` (MTS Table 9, September finals for
FY2018–FY2025; FY2026 is FYTD through Aug 31, 2026) and
`CATEGORY_OUTLAYS_FY2026`. Division: total ÷ (elapsed days × 86,400).

| Measure | Value |
|---|---|
| FY2026 FYTD total (335 days, Oct 1 2025 – Aug 31 2026) | $6,811,043,257,196 |
| **FY2026 FYTD per second** | **$235,318** |
| per minute (FYTD) | $14,119,078 |
| per hour (FYTD) | $847,144,684 |
| per day (FYTD) | $20,331,472,410 |
| FY2025 final total (365 days) | $7,009,973,667,049 |
| FY2025 per second (most recent COMPLETE year) | $222,285 |

Category per-second rates (FYTD 2026, same method):
- Social Security: $52,718/s ($1,525,869,028,279)
- Net Interest: $35,136/s ($1,016,966,437,408) — the site's day-1 article number
- Medicare: $33,834/s ($979,300,323,725)
- Medicaid: $31,985/s ($925,697,746,444)
- Defense/Military: $30,258/s ($876,163,147,483)

Yearly per-second rates (full FY, September finals — good for a line chart):
- 2018: $130,264/s | 2019: $141,012/s | 2020: $207,779/s | 2021: $216,242/s
- 2022: $198,907/s | 2023: $194,531/s | 2024: $214,094/s | 2025: $222,285/s
- 2026 FYTD: $235,318/s (335 days — label as FYTD, not a full year)

### Honesty / methodology notes (must appear in the article)
- A per-second figure is an AVERAGE RATE, not how money actually flows —
  spending is lumpy (payrolls, benefit checks, debt-interest payments).
  Say this explicitly; don't imply a ticking meter.
- Always pair the headline $235,318/s with its coverage: "fiscal-year-to-date
  through August 31, 2026" (335 days, the latest published Monthly Treasury
  Statement). Lead or quick-take with the FY2025 final ($222,285/s) as the
  most recent complete-year anchor.
- Do NOT annualize the FYTD rate into a "projected FY2026 total" — mark any
  such number as an estimate, not MTS data.
- State pages' figures are modeled estimates — irrelevant here, but don't
  borrow per-second rates for states.
- If the September 2026 MTS final (FY2026 complete year) has been released
  since this note, prefer `scripts/refresh-mts-data.mjs` numbers and re-verify
  before publishing (operating rule 4: adapt the angle, keep the slug).

### Chart suggestions (from real MTS numbers above)
1. Line chart: per-second spending by year 2018–2026 (values above; mark
   2026 as FYTD). Caption: "Monthly Treasury Statement, Table 9; FY2026
   through Aug 31, 2026."
2. Bar chart: per-second by category (Social Security / Interest / Medicare /
   Medicaid / Defense). Caption with same source line.
3. Optional callout box: per-second → per-minute → per-hour → per-day ladder.

### Internal links to mention naturally
- /blog/us-debt-interest-vs-defense-spending (interest crossed defense — day-1 article)
- /blog/where-does-us-federal-budget-go (the category breakdown — day-2 article)
- /categories/net-interest-spending (or the site's equivalent category path)

### Do NOT claim
- A live "national debt clock" style ticking figure — the site has no
  real-time data; per-second here is an average of published MTS totals.
- The $235,318/s figure as a full-year FY2026 rate — it's 335-day FYTD.
