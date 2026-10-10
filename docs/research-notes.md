# usaspending.us — pre-research notes for the daily article cron

Format: dated entries, newest first. Verification labels: OFFICIAL PAGE / MTS DATA
(site canonical) / THIRD-PARTY / UNVERIFIED.

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
