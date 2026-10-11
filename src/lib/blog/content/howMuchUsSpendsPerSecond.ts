import type { ArticleData } from '../types';
import { estimateReadingTime } from '../types';

const sections: ArticleData['sections'] = [
  {
    id: 'the-headline-number',
    heading: 'The Headline Number: $235,318 Every Second',
    paragraphs: [
      'Between October 1, 2025 and August 31, 2026 — the first 335 days of fiscal year 2026 — the U.S. federal government spent $6,811,043,257,196, according to the Treasury\'s Monthly Treasury Statement, Table 9. Those 335 days contain 28,944,000 seconds. Divide one by the other and you get $235,317.97. Call it $235,318 per second — every second, for nearly a year, through weekends, holidays, and every congressional recess.',
      'The same rate reads as $14.1 million every minute, $847.1 million every hour, and $20.3 billion every day. By the time you finish reading this article — roughly five minutes — the government will have spent about $70 million. Converting the abstraction of trillions into ticks of a clock makes one thing concrete that budget tables never can: the sheer velocity at which federal money moves, continuously.',
      'A word on what this number is: it is derived from official data, not a live meter. The Monthly Treasury Statement is the Treasury\'s own record of what it actually spent — not a projection — and it is the same source behind every number on this site. No private estimate, no think-tank model. What follows is that record, divided by time.',
    ],
    callout: {
      type: 'info',
      text: 'All figures use FY2026 fiscal year-to-date actuals: October 1, 2025 through August 31, 2026 (335 days), the latest Monthly Treasury Statement published. Per-second figures are daily averages over that period, not a live meter.',
    },
  },
  {
    id: 'how-the-math-works',
    heading: 'How the Per-Second Number Is Calculated (and What It Isn\'t)',
    paragraphs: [
      'The math itself is simple: total outlays ($6.81 trillion) divided by elapsed seconds (335 days × 86,400). It is an average, the way "average speed" describes a road trip. You did not travel exactly 60 mph every second of the drive, but the average tells you how fast the trip really was. The per-second spending rate works the same way — and it is worth knowing what the average smooths over.',
      'Federal spending is lumpy. Treasury disburses on schedules: Social Security benefits go out on Wednesdays, defense contractors are paid in batches, and benefit-payment timing shifts can move billions across a month boundary. August 2026 is a textbook example: August 1 fell on a Saturday, so Medicare and Social Security payments that would normally land on the first of the month were paid in July instead — which made August\'s reported deficit look 52% lower than a year earlier while changing nothing about the underlying pace. That is exactly why this article divides a 335-day total, not a single month.',
      'The one line item where "per second" is almost literally true is interest on the national debt: about $35,136 a second, accruing genuinely continuously. Debt does not pause for weekends. For defense contracts or science grants, the per-second framing is a statistical convenience; for interest, it is closer to reality. Read the full interest story: /blog/us-debt-interest-vs-defense-spending.',
      'Two more rates complete the picture. On the revenue side, the government collected $4.85 trillion over the same 335 days — $167,408 every second. Outlays minus receipts leaves a deficit of about $1.97 trillion, or $67,910 a second. In plain terms: roughly 29 cents of every second\'s spending is borrowed, and the national-debt clock gains a million dollars every 14.7 seconds.',
    ],
  },
  {
    id: 'where-each-second-goes',
    heading: 'Where Each Second\'s Money Goes',
    paragraphs: [
      'Split the $235,318 second into its destinations and a familiar hierarchy emerges — the same one as the annual budget, just at a different tempo. Social Security is the largest line at $52,718 a second: 22.4 cents of every second\'s spending, paying monthly benefits to retirees, survivors, and people with disabilities. Net interest comes second at $35,136 a second (14.9%), followed by Medicare at $33,834 and Medicaid/Health Programs at $31,982.',
      'Defense and military spending runs at $30,271 a second — the fifth-largest line, smaller than the interest bill. Veterans Affairs accounts for $13,669 a second. Together those six lines cover about $199,700 of each second; the remaining roughly $35,600 goes to everything else: infrastructure ($4,368/s), education and training ($3,177/s), agriculture and food assistance ($1,762/s), science, space and technology ($1,252/s), courts, diplomacy, disaster relief, and general government operations.',
      'Two of these rates deserve a second look. First, the interest rate is pure overhead: $35,136 a second funds nothing — no patients, no soldiers, no retirees. It is the carrying cost of past borrowing, and it now exceeds the entire defense rate. Second, compare Social Security\'s $52,718 a second with the whole science budget\'s $1,252: the federal government spends on retirement benefits in about two seconds what it spends on science, space, and technology in a minute.',
    ],
    chart: {
      title: 'Federal Spending Per Second by Category, FY2026 FYTD ($/s)',
      caption:
        'U.S. Treasury Monthly Treasury Statement, Table 9, category outlays through August 31, 2026 (335 days) divided by 28,944,000 seconds. Rounded to whole dollars.',
      type: 'bar',
      unit: '$/s',
      data: [
        { label: 'Social Security', value: 52718 },
        { label: 'Net Interest', value: 35136 },
        { label: 'Medicare', value: 33834 },
        { label: 'Medicaid/Health', value: 31982 },
        { label: 'Defense', value: 30271 },
        { label: 'Veterans', value: 13669 },
      ],
    },
  },
  {
    id: 'what-it-feels-like',
    heading: 'What $235,318 a Second Actually Feels Like',
    paragraphs: [
      'Abstract numbers become real when you attach them to time. At $235,318 a second, the government spends $1 million every 4.25 seconds and $1 billion roughly every 71 minutes. A full day burns $20.3 billion — more than the entire annual federal science budget ($36 billion) vanishes in under 43 hours. That is the visceral version of "the budget is big": everything Washington does fits inside a day.',
      'For historical perspective, the Congressional Research Service ran this same exercise for fiscal year 2006: the government then spent $84,203 a second, and it took 11.9 seconds to spend $1 million. Today\'s rate is 2.8 times that — the $1 million benchmark now passes every 4.25 seconds. Twenty years of nominal growth, pandemic-era spending that reset the baseline higher, and structurally growing entitlements and interest costs are all inside that 2.8×.',
      'The borrowing clock has accelerated even faster. In fiscal 2006 the deficit grew by about $7,900 a second — roughly $1 million every 2.1 minutes. Today\'s $67,910 a second means the debt gains a million dollars every 14.7 seconds, more than eight times the 2006 pace. Spending nearly tripled per second; the deficit grew more than eightfold. That gap — revenue growing slower than outlays — is the story of the modern budget in a single comparison.',
    ],
    chart: {
      title: 'Government Spending Per Second: FY2006 vs. FY2026 FYTD ($/s)',
      caption:
        'FY2006 per-second rate from the Congressional Research Service, RS22508 (OMB data, 365-day year). FY2026 is the Treasury Monthly Treasury Statement FYTD rate through August 31, 2026 (335 days).',
      type: 'bar',
      unit: '$/s',
      data: [
        { label: 'FY2006', value: 84203 },
        { label: 'FY2026 FYTD', value: 235318 },
      ],
    },
  },
  {
    id: 'is-it-speeding-up',
    heading: 'Is the Spending Rate Speeding Up?',
    paragraphs: [
      'For a full-year comparison, take fiscal 2025: $7.01 trillion over 365 days, or $222,285 a second. The fiscal 2026 year-to-date rate of $235,318 is about 6% faster than last year\'s average pace. That is a genuine finding — but it comes with the honesty rules. A year-to-date daily average is not a full-year run rate: September\'s data (with quarterly tax receipts and end-of-year outlays) was not yet in the published numbers, and spending is seasonal. "Running faster than the FY2025 average pace" is accurate; "the full year will total X" would be guessing.',
      'The full-year estimate that does exist points the same direction. The Congressional Budget Office\'s final estimate for fiscal 2026, published October 8, 2026, puts full-year outlays at about $7.4 trillion — which spread over a full year implies roughly $235,000 a second, squarely consistent with the year-to-date rate. The rate is not an artifact of the 335-day window.',
      'What is pushing the rate up? The American Action Forum\'s August 2026 review of the Monthly Treasury Statement breaks it down: fiscal 2026 spending rose $147 billion (2%) over the same period a year earlier, driven by higher entitlement spending and larger interest payments on the debt — interest alone added $84 billion (9%) as a larger debt rolled over at higher rates. Revenue actually grew slightly faster in dollar terms ($154 billion), but it started from a $2 trillion gap. Entitlements plus interest are the engine; everything else is noise. For the full context of the gap: /blog/where-does-us-federal-budget-go.',
    ],
    chart: {
      title: 'Average Spending Per Second: FY2025 Full Year vs. FY2026 FYTD ($/s)',
      caption:
        'U.S. Treasury Monthly Treasury Statement, Table 9. FY2025 uses the September final ($7.01T over 365 days); FY2026 is fiscal year-to-date through August 31, 2026 ($6.81T over 335 days). September 2026 data was not yet published.',
      type: 'bar',
      unit: '$/s',
      data: [
        { label: 'FY2025 full year', value: 222285 },
        { label: 'FY2026 FYTD (335 days)', value: 235318 },
      ],
    },
  },
  {
    id: 'why-the-second-matters',
    heading: 'Why the Second Matters',
    paragraphs: [
      'The per-second lens is not a gimmick — it is an accountability tool. Budgets expressed in trillions are designed, however unintentionally, to be un-graspable; "$6.81 trillion" and "$6.85 trillion" feel identical, while "$235,000 a second" and "$239,000 a second" register as different. When the Congressional Research Service wrote that the government spent "$84,200 a second" in 2006, it chose that unit precisely because dollars that large lose their meaning in the trillions.',
      'It also reorders the debate. Interest at $35,136 a second, ticking whether Congress acts or not, versus discretionary programs that legislators fight over line by line: the per-second breakdown shows where the budget\'s momentum actually lives. Mandatory programs and interest run on autopilot; the fights are over the quarter of the budget Congress votes on. The full breakdown: /spending-breakdown.',
      'One number to watch: September. The September 2026 Monthly Treasury Statement completes fiscal 2026 — September brings quarterly tax receipts, and last September (fiscal 2025) even produced a $197.9 billion surplus month. Once the final is published, this site\'s FYTD rate gives way to the full-year rate, and the per-second number gets its final value for fiscal 2026. Where the full-year money went, state by state: /blog/federal-spending-texas.',
    ],
    callout: {
      type: 'tip',
      text: 'Every second: $52,718 to Social Security, $35,136 to debt interest, $33,834 to Medicare, $31,982 to Medicaid/health, $30,271 to defense, $13,669 to veterans — and $67,910 borrowed on top of what\'s collected.',
    },
  },
];

export const data: ArticleData = {
  slug: 'how-much-us-spends-per-second',
  title: 'How Much Does the US Government Spend Per Second?',
  description:
    'The U.S. government spends about $235,318 every second — $6.81T over 335 days of FY2026, verified against Treasury\'s Monthly Treasury Statement.',
  keyword: 'how much does the us spend per second',
  category: 'Explainers',
  datePublished: '2026-10-11',
  dateModified: '2026-10-11',
  readingTime: estimateReadingTime(sections),
  quickTakeaways: [
    {
      label: 'The number',
      text: '$235,318 per second — $6.81T in outlays over 335 days of FY2026, divided by 28,944,000 seconds.',
    },
    {
      label: 'The ladder',
      text: '$14.1M per minute, $847M per hour, $20.3B per day. $1 million goes by every 4.25 seconds.',
    },
    {
      label: 'Where it goes',
      text: 'Social Security $52,718/s, interest $35,136/s, Medicare $33,834/s — the top three eat 51% of every second.',
    },
    {
      label: 'The borrowing',
      text: 'Revenue runs at $167,408/s vs. $235,318/s in outlays — a $67,910-a-second deficit.',
    },
  ],
  sections,
  faqs: [
    {
      question: 'How much does the US government spend per day?',
      answer:
        'About $20.3 billion a day — the FY2026 fiscal year-to-date average through August 31, 2026, from Treasury\'s Monthly Treasury Statement. That is the daily average over the 335 days elapsed, not what any single day\'s cash actually moved.',
    },
    {
      question: 'How much does the US military spend per second?',
      answer:
        'About $30,271 a second: $876 billion in defense and military outlays over the 335 days of FY2026 through August. That makes defense the fifth-largest spending line per second — smaller than the $35,136-a-second interest bill.',
    },
    {
      question: 'How much does the government spend on debt interest per second?',
      answer:
        'About $35,136 a second — net interest totaled $1.017 trillion over the FY2026 year-to-date. Interest is the one line item where "per second" is almost literal: debt accrues continuously, even on weekends. It has exceeded defense spending since fiscal 2025.',
    },
    {
      question: 'How is the per-second spending number calculated?',
      answer:
        'Total federal outlays from the Treasury\'s Monthly Treasury Statement, Table 9, divided by the number of seconds elapsed. For FY2026: $6.81 trillion over 335 days (28,944,000 seconds) = about $235,318 a second. It is a daily average, not a live meter — real spending is lumpy, disbursed on schedules.',
    },
    {
      question: 'Is the government spending more than it collects?',
      answer:
        'Yes. Federal revenue ran at about $167,408 a second through August 2026 while outlays ran at $235,318 a second. The gap — about $67,910 a second, or roughly 29 cents of every second\'s spending — is the deficit, borrowed on top of taxes collected.',
    },
    {
      question: 'How much did the US government spend per second 20 years ago?',
      answer:
        'In fiscal 2006, the Congressional Research Service calculated the government spent $84,203 a second — $1 million every 11.9 seconds. Today\'s $235,318-a-second rate is 2.8 times that, with the borrowing clock accelerating even faster: from $7,900 a second of deficit to $67,910.',
    },
  ],
  sources: [
    {
      name: 'U.S. Department of the Treasury — Monthly Treasury Statement, August 2026',
      url: 'https://fiscaldata.treasury.gov/static-data/published-reports/mts/MonthlyTreasuryStatement_202508.pdf',
    },
    {
      name: 'American Action Forum — Debt and Deficit (Lack of) Progress Report: August 2026',
      url: 'https://www.americanactionforum.org/insight/debt-and-deficit-lack-of-progress-report-august-2026/',
    },
    {
      name: 'Congressional Research Service — RS22508, "Spending and Receipts in FY2006, by Time Period"',
      url: 'https://www.EveryCRSReport.com/reports/RS22508.html',
    },
    {
      name: 'Reuters — "US budget deficit shrinks in August, year-to-date flat at $1.97 trillion"',
      url: 'https://froggyweb.com/2026/09/11/us-budget-deficit-shrinks-in-august-year-to-date-flat-at-1-97-trillion/',
    },
  ],
  relatedSlugs: ['us-debt-interest-vs-defense-spending', 'where-does-us-federal-budget-go'],
};
