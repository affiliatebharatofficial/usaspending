import type { ArticleData } from '../types';
import { estimateReadingTime } from '../types';

const sections: ArticleData['sections'] = [
  {
    id: 'the-final-scoreboard',
    heading: 'The Final Scoreboard: $7.396 Trillion Spent, $5.403 Trillion Collected',
    paragraphs: [
      'The books are closed on fiscal year 2026. On October 16, 2026, the U.S. Treasury published the September 2026 Monthly Treasury Statement — the official end-of-year tally — and it confirmed what analysts expected: the federal government spent a record $7.396 trillion and collected a record $5.403 trillion in the 12 months ending September 30, 2026. The difference is the final federal deficit for fiscal 2026: $1.992 trillion, the third-largest annual shortfall in American history, behind only the pandemic years of 2020 ($3.13T) and 2021 ($2.77T).',
      'The final numbers landed almost exactly where the Congressional Budget Office projected a week earlier ($1.993T estimated on October 8), which tells you the year-end assessment was solid. Compared with fiscal 2025, outlays grew $386 billion — about 6% — while receipts grew only $169 billion, or 3%. That gap between the two growth rates is the entire story of fiscal 2026: revenue did not collapse, but spending sprinted, widening the deficit by $217 billion, or roughly 12%, in a single year.',
      'To feel the scale, spread it over the year: the federal government spent about $20.3 billion per day — roughly $845 million an hour, $14 million a minute — for 365 straight days. The deficit alone accumulated at $5.5 billion per day, weekends and holidays included. Every dollar of it becomes debt, which is why the year also ended with the national debt past the $40 trillion mark it crossed in August 2026. The mechanics of how deficits become debt and debt becomes interest are explained in /blog/deficit-vs-debt-vs-interest-explained; this article is the raw scoreboard.',
    ],
    chart: {
      title: 'Fiscal 2026 Final: Outlays, Receipts, Deficit ($T)',
      caption:
        'U.S. Treasury, Monthly Treasury Statement Table 9, record_date 2026-09-30 (final FY2026 figures, published Oct 16, 2026). Deficit = outlays minus receipts.',
      type: 'bar',
      unit: '$T',
      data: [
        { label: 'Outlays', value: 7.396 },
        { label: 'Receipts', value: 5.403 },
        { label: 'Deficit', value: 1.992 },
      ],
    },
    callout: {
      type: 'info',
      text: 'These are final figures, not estimates. The September 2026 Monthly Treasury Statement closed the fiscal year on October 16, 2026, replacing every FYTD estimate — including the August-based numbers this site previously carried — with audited final outlays and receipts.',
    },
  },
  {
    id: 'where-7-trillion-went',
    heading: 'Where the $7.4 Trillion Went: Five Programs Eat Three-Quarters',
    paragraphs: [
      'Five lines in the budget consumed roughly three-quarters of everything the government spent. Social Security led at $1.667 trillion (22.5% of all outlays), followed by Medicare at $1.073 trillion (14.5%), net interest on the debt at $1.052 trillion (14.2%), health programs including Medicaid at $1.026 trillion (13.9%), and national defense at $965.2 billion (13.0%). Everything else — veterans benefits, transportation, education, agriculture, science, the entire operating machinery of the federal government — fits inside the remaining quarter.',
      'The concentration is the consequence of the budget running on autopilot. Social Security, Medicare, and Medicaid are mandatory programs: their costs are set by eligibility rules and demographics, not by annual votes in Congress. They grew a combined $217 billion in a single year, according to CBO\'s year-end analysis — $86 billion for Social Security on larger average benefits and more beneficiaries, $77 billion for Medicare on higher enrollment and payment rates, and $55 billion for Medicaid on rising costs per enrollee. An aging population does not negotiate.',
      'The remaining categories tell their own stories. Veterans benefits reached $416.2 billion — more than the entire annual federal budget was in the early 1980s — as a larger share of veterans claimed benefits. Transportation outlays were $142.9 billion, education $107.6 billion (swollen by a $41 billion student-loan accounting swing rather than new programs), agriculture $52.6 billion, and general science, space, and technology $39.9 billion. For a program-by-program look, see /spending-breakdown, or compare any two head-to-head at /compare.',
    ],
    chart: {
      title: 'FY2026 Final Outlays by Budget Function ($B)',
      caption:
        'U.S. Treasury, Monthly Treasury Statement Table 9, record_date 2026-09-30 (final FY2026 figures). "Health" is the Health function, shown on this site as health programs including Medicaid.',
      type: 'bar',
      unit: '$B',
      data: [
        { label: 'Social Security', value: 1667.1 },
        { label: 'Medicare', value: 1072.6 },
        { label: 'Net interest', value: 1051.8 },
        { label: 'Health (Medicaid)', value: 1025.6 },
        { label: 'National defense', value: 965.2 },
        { label: 'Veterans benefits', value: 416.2 },
        { label: 'Transportation', value: 142.9 },
        { label: 'Education', value: 107.6 },
        { label: 'Agriculture', value: 52.6 },
        { label: 'Science & tech', value: 39.9 },
      ],
    },
  },
  {
    id: 'the-interest-bill',
    heading: 'The Interest Bill: $1.05 Trillion — or $1.36 Trillion, Depending on How You Count',
    paragraphs: [
      'Here is the number that should worry you most. In fiscal 2026 the government paid more than $1 trillion just to service debt it already borrowed. Net interest — the figure the Treasury\'s Monthly Treasury Statement reports and the one this site tracks by budget function — came in at a final $1.052 trillion, or 14.2 cents of every federal dollar spent. Interest is now the third-largest line in the entire budget, bigger than national defense at $965.2 billion. Paying for past borrowing costs more than defending the country.',
      'News coverage of the same release often cites a larger figure: $1.36 trillion in "debt service costs," up $144 billion (12%) and also a record. Both numbers are real — they measure different things. The $1.36 trillion is gross interest paid out; the $1.052 trillion is net interest after subtracting the interest income the government collects (mostly from trust funds holding Treasury securities). This site\'s category pages, including /categories/net-interest-spending, use the net figure, consistent with the Treasury\'s Table 9 function classification. Either way, interest grew roughly 11–12% in a single year — the fastest-growing line in the budget.',
      'Why it keeps climbing: the debt is bigger ($40 trillion and rising), and the Treasury keeps refinancing bonds issued cheaply during the low-rate years at today\'s higher rates. The Bipartisan Policy Center\'s deficit tracker notes that long-term rates have reached levels not seen since before the Great Recession. CBO\'s long-term baseline projects net interest nearly doubling to about $2.1 trillion a year by 2036 — at which point the interest bill alone could rival Social Security as the largest thing the government does.',
    ],
    chart: {
      title: 'Net Interest vs. Other Major Spending Lines, FY2026 ($B)',
      caption:
        'U.S. Treasury, Monthly Treasury Statement Table 9, record_date 2026-09-30 (final FY2026 figures). All values are net outlays by budget function.',
      type: 'bar',
      unit: '$B',
      data: [
        { label: 'Net interest', value: 1051.8 },
        { label: 'National defense', value: 965.2 },
        { label: 'Veterans benefits', value: 416.2 },
        { label: 'Transportation', value: 142.9 },
        { label: 'Education', value: 107.6 },
        { label: 'Science & tech', value: 39.9 },
      ],
    },
    bullets: [
      'Net interest ($1.052T) is the Treasury Table 9 figure this site tracks; gross debt-service outlays ($1.36T, reported by Treasury/Reuters) are larger before offsetting receipts',
      'Interest consumed 14.2% of all federal spending — up from about 6% a decade ago, per CBO',
      'It grew ~11% in one year, the fastest-growing major budget line, on a bigger debt refinanced at higher rates',
    ],
  },
  {
    id: 'where-revenue-came-from',
    heading: 'Where the $5.4 Trillion Came From: Workers Paid for Most of It',
    paragraphs: [
      'Fiscal 2026 set an all-time record for federal revenue: $5.403 trillion, up $169 billion (3%) from $5.235 trillion in 2025. But the composition reveals a budget funded overwhelmingly by working people. Individual income taxes contributed about $2.8 trillion and payroll taxes — the ones withheld from every paycheck to fund Social Security and Medicare — added roughly $1.8 trillion. Together, taxes on wages and salaries supplied about 85% of all federal revenue. Everything else — corporate income taxes, excise taxes, tariffs, Federal Reserve earnings — fit into the remaining $803 billion.',
      'The revenue story of 2026 is really a story about tariffs backfiring. Tariffs were supposed to narrow the deficit; instead, refunds widened it. In February 2026 the Supreme Court struck down a large portion of the tariffs imposed under the International Emergency Economic Powers Act, triggering roughly $145 billion in tariff refunds over the fiscal year. Net customs receipts fell $22 billion (11%) to about $173 billion — even as gross collections were strong early in the year. September was the first month after the ruling in which the government collected net tariff revenue at something like a normal rate again.',
      'Corporate income taxes were the other drag on the revenue side: receipts fell an estimated $70 billion (16%) because the 2025 reconciliation act expanded deductions companies can take for certain investments, wiping out the revenue that rising corporate income would otherwise have delivered. Individual and payroll taxes did their job — up a combined $255 billion (6%) on rising wages — but the tax base cannot cover a budget where one program\'s interest bill alone is $1 trillion.',
    ],
    chart: {
      title: 'FY2026 Final Receipts by Source ($T)',
      caption:
        'U.S. Treasury, Monthly Treasury Statement (record_date 2026-09-30); individual income tax (~$2.8T) and payroll tax (~$1.8T) splits reported by The Fiscal Times, Oct 16, 2026. "All other" is the computed remainder of the $5.403T total.',
      type: 'bar',
      unit: '$T',
      data: [
        { label: 'Individual income taxes', value: 2.8 },
        { label: 'Payroll taxes', value: 1.8 },
        { label: 'All other receipts', value: 0.8 },
      ],
    },
  },
  {
    id: 'historical-context',
    heading: 'History: Third-Largest Deficit Ever — With No Emergency to Blame',
    paragraphs: [
      'Put the $1.992 trillion deficit on the timeline and the picture is stark. Fiscal 2018 ran a $779 billion deficit; it grew to $984 billion in 2019. The pandemic then shattered every record — $3.13 trillion in 2020, $2.77 trillion in 2021. The shortfall receded to $1.38 trillion in 2022, but instead of continuing toward balance it climbed again: $1.70 trillion in 2023, $1.83 trillion in 2024, $1.78 trillion in 2025, and now $1.99 trillion in 2026. This is the largest deficit in five years, and the country has now run an annual deficit for 25 straight years — the last surplus was fiscal 2001.',
      'What makes 2026 historically unusual is not the size alone but the absence of an excuse. Deficits of this magnitude used to require an emergency: a war, a recession, a pandemic. Fiscal 2026 had none — the economy was growing, unemployment was low, and no crisis demanded emergency spending. Yet the shortfall equaled roughly 6.2% of GDP, up from about 5.8% in 2025 and far above the roughly 3.8% average of the past half century. A 6%-of-GDP deficit during an expansion is a level economists normally associate with recessions.',
      'Fiscal watchdogs were blunt about it. The Committee for a Responsible Federal Budget called the numbers a reminder that the country needs to change its fiscal course, and has pushed for a bipartisan fiscal commission with a goal of bringing deficits back toward about 3% of the economy. CBO\'s February baseline — the last full projection before the finals — saw deficits growing from here to $3.1 trillion by 2036, with publicly held debt climbing to 120% of GDP. None of that is destiny; it is what the arithmetic produces if tax and spending policy does not change.',
    ],
    chart: {
      title: 'Annual Federal Deficit, FY2018–FY2026 ($T)',
      caption:
        'U.S. Treasury Monthly Treasury Statements (September finals, FY2018–FY2026); deficit = outlays minus receipts. Values compiled via usadebtnow.org/deficit and cross-checked against the Treasury Fiscal Data API.',
      type: 'line',
      unit: '$T',
      data: [
        { label: '2018', value: 0.779 },
        { label: '2019', value: 0.984 },
        { label: '2020', value: 3.132 },
        { label: '2021', value: 2.772 },
        { label: '2022', value: 1.375 },
        { label: '2023', value: 1.695 },
        { label: '2024', value: 1.833 },
        { label: '2025', value: 1.775 },
        { label: '2026', value: 1.992 },
      ],
    },
  },
  {
    id: 'september-finish-and-next',
    heading: 'How September Finished the Year — and What to Watch Next',
    paragraphs: [
      'The final month almost masked the year\'s story. September is usually a surplus month, because quarterly tax payments land in Treasury coffers. September 2026 instead ran a modest $26.9 billion deficit — record receipts of $557.9 billion against $584.8 billion in outlays. Compare that with September 2025\'s $197.9 billion surplus, and the swing looks dramatic, but most of it is calendar noise: September 1, 2025 fell on a holiday, which pushed federal payments into August and inflated that month\'s surplus. The Bipartisan Policy Center\'s timing-adjusted comparison puts the real September change at a $28 billion deficit versus a $110 billion adjusted surplus a year earlier — still a deterioration, but not the headline swing.',
      'Strip out the monthly noise and the year-over-year picture is cleaner. Receipts rose from $5.235 trillion to $5.403 trillion (+3%), outlays from $7.010 trillion to $7.396 trillion (+6%), and the deficit from $1.775 trillion to $1.992 trillion (+12%). Three lines, all records, all moving the wrong way relative to each other. September detail also confirmed the education accounting swing — a $119 billion year-over-year increase at the Education Department driven by student-loan cost re-estimates rather than new spending — which is exactly the kind of figure that makes single-month comparisons treacherous.',
      'What to watch from here: the October Treasury statement, due in November, opens fiscal 2027 and will show whether the new year starts with the same 6%-growth spending pace. Congress faces appropriations decisions that will determine whether the deficit bends back toward 5% of GDP or keeps climbing. And the structural drivers — an aging population pushing Social Security and Medicare up, a $40 trillion debt being refinanced at higher rates — are all still pointed the same way. Fiscal 2026 is now a matter of record: $7.396 trillion spent, $5.403 trillion collected, $1.992 trillion borrowed. The only question is what fiscal 2027 does about it.',
    ],
    chart: {
      title: 'FY2025 vs. FY2026 Final: Receipts, Outlays, Deficit ($T)',
      caption:
        'U.S. Treasury, Monthly Treasury Statements (record_date 2025-09-30 and 2026-09-30, final figures). All three measures set records in FY2026.',
      type: 'bar',
      unit: '$T',
      data: [
        { label: 'Receipts FY2025', value: 5.235 },
        { label: 'Receipts FY2026', value: 5.403 },
        { label: 'Outlays FY2025', value: 7.01 },
        { label: 'Outlays FY2026', value: 7.396 },
        { label: 'Deficit FY2025', value: 1.775 },
        { label: 'Deficit FY2026', value: 1.992 },
      ],
    },
    callout: {
      type: 'tip',
      text: 'FY2026 figures on this page are the official September 2026 Treasury finals, verified against the Treasury Fiscal Data API on October 17, 2026. They replace all prior FYTD estimates for the fiscal year across this site\'s data.',
    },
  },
];

const faqs: ArticleData['faqs'] = [
  {
    question: 'What was total U.S. federal spending in FY2026?',
    answer:
      'A record $7.396 trillion, according to the final September 2026 Monthly Treasury Statement published October 16, 2026. The five largest lines were Social Security ($1.667T), Medicare ($1.073T), net interest ($1.052T), health programs including Medicaid ($1.026T), and national defense ($965.2B) — together about three-quarters of all spending.',
  },
  {
    question: 'When were the final FY2026 numbers released?',
    answer:
      'October 16, 2026, when the Treasury published the September 2026 Monthly Treasury Statement — the official end-of-year tally. CBO had released its own estimate a week earlier (October 8) at $1.993 trillion, which the Treasury finals confirmed almost to the dollar at $1.992 trillion.',
  },
  {
    question: 'Is the $1.99 trillion deficit the biggest in U.S. history?',
    answer:
      'No — it is the third-largest. Fiscal 2020 holds the record at $3.13 trillion, followed by $2.77 trillion in 2021, both driven by pandemic emergency spending. FY2026 is the largest deficit in five years and is unusual because it occurred without a war, recession, or pandemic — during a growing economy with low unemployment.',
  },
  {
    question: 'What is the difference between the $1.05T and $1.36T interest figures?',
    answer:
      'Both describe fiscal 2026. The $1.052 trillion is net interest — the Treasury Table 9 budget-function figure this site tracks — after subtracting interest income the government collects. The $1.36 trillion is gross debt-service outlays before those offsets, reported in Treasury/Reuters coverage. Either way, interest is the fastest-growing major budget line and now exceeds the entire defense budget on a net basis.',
  },
  {
    question: 'How did tariffs affect the FY2026 deficit?',
    answer:
      'They made it worse. After the Supreme Court struck down large portions of the IEEPA tariffs in February 2026, the government paid roughly $145 billion in tariff refunds over the year. Net customs receipts fell $22 billion (11%) to about $173 billion. Tariffs were supposed to narrow the gap; the refunds helped widen it.',
  },
  {
    question: 'Will the deficit keep growing in FY2027?',
    answer:
      'CBO\'s long-term baseline projects deficits rising toward $3.1 trillion by 2036 if policy does not change, driven by Social Security, Medicare, and net interest nearly doubling to about $2.1 trillion a year. That is a baseline scenario, not a forecast — Congress\'s tax and spending choices, starting with the FY2027 appropriations round, will decide the actual path.',
  },
];

const sources: ArticleData['sources'] = [
  {
    name: 'The Fiscal Times — "US Records Third-Highest Budget Deficit in History" (Oct 16, 2026)',
    url: 'https://www.thefiscaltimes.com/2026/10/16/US-Records-Third-Highest-Budget-Deficit-History',
  },
  {
    name: 'IndexBox — "US Fiscal 2026 Budget Deficit Reaches $1.99 Trillion" (Oct 16, 2026)',
    url: 'https://www.indexbox.io/blog/us-budget-deficit-hits-199-trillion-in-fiscal-2026-largest-in-five-years/',
  },
  {
    name: 'CBO — Monthly Budget Review: September 2026',
    url: 'https://www.cbo.gov/publication/61985',
  },
  {
    name: 'Bipartisan Policy Center — Deficit Tracker (September 2026)',
    url: 'https://bipartisanpolicy.org/report/deficit-tracker/',
  },
];

export const data: ArticleData = {
  slug: 'fy2026-federal-spending-final-numbers',
  title: 'FY2026 Federal Spending: Final Numbers in 6 Charts',
  description:
    'Final FY2026 federal spending total: $7.40 trillion spent, $5.40 trillion collected — a $1.99T deficit. The year in six charts, from official Treasury finals.',
  keyword: 'fy2026 federal spending total',
  category: 'Data Stories',
  datePublished: '2026-10-17',
  dateModified: '2026-10-17',
  readingTime: estimateReadingTime(sections),
  quickTakeaways: [
    {
      label: 'The finals',
      text: 'FY2026 (final, Sept 2026 MTS): outlays $7.396T, receipts $5.403T, deficit $1.992T — all records, released Oct 16, 2026.',
    },
    {
      label: 'The gap',
      text: 'Spending grew $386B (~6%) while revenue grew only $169B (3%) — the 12% deficit widening is the difference between those growth rates.',
    },
    {
      label: 'The drivers',
      text: 'Social Security $1.667T, Medicare $1.073T, net interest $1.052T, health $1.026T, defense $965.2B — five lines eat three-quarters of the budget.',
    },
    {
      label: 'The twist',
      text: 'A Supreme Court tariff ruling triggered ~$145B in refunds, cutting net tariff income to ~$173B; interest is now the fastest-growing budget line.',
    },
  ],
  sections,
  faqs,
  sources,
  relatedSlugs: [
    'federal-deficit-2026-how-big',
    'us-debt-interest-vs-defense-spending',
    'deficit-vs-debt-vs-interest-explained',
    'where-does-us-federal-budget-go',
  ],
};
