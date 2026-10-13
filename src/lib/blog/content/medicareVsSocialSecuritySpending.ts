import type { ArticleData } from '../types';
import { estimateReadingTime } from '../types';

const sections: ArticleData['sections'] = [
  {
    id: 'the-answer',
    heading: 'Medicare vs. Social Security Spending: The Answer',
    paragraphs: [
      'Social Security costs more — and it is not close. Through August 31, 2026, the first eleven months of fiscal year 2026, Social Security outlays totaled $1.526 trillion, compared with $979 billion for Medicare. The gap is roughly $547 billion. For every dollar the federal government spends on Medicare, it spends about $1.56 on Social Security — roughly 56% more.',
      'At human scale: Social Security pays out about $4.55 billion every single day, while Medicare spends about $2.92 billion per day. Together, the two programs moved $2.505 trillion in eleven months — $7.5 billion a day — accounting for 36.8% of all federal spending. More than one in three dollars the government spends goes to one of these two programs.',
      'Both figures come from the U.S. Treasury Monthly Treasury Statement, Table 9 — the same source behind every number on this site. One honesty note: Medicare\'s figure is net of offsetting receipts — premiums paid by beneficiaries and other collections are subtracted — so gross Medicare spending is somewhat higher than the $979 billion shown in the budget.',
    ],
    chart: {
      title: 'Largest Federal Budget Categories, FY2026 FYTD ($B)',
      caption:
        'U.S. Treasury Monthly Treasury Statement, Table 9, through August 31, 2026. Social Security is by far the largest budget item; Medicare ranks fourth.',
      type: 'bar',
      unit: '$B',
      data: [
        { label: 'Social Security', value: 1525.9 },
        { label: 'Net Interest', value: 1017.0 },
        { label: 'Medicare', value: 979.3 },
        { label: 'Health', value: 925.7 },
        { label: 'Defense', value: 876.2 },
      ],
    },
  },
  {
    id: 'why-the-gap',
    heading: 'Why Social Security Costs So Much More',
    paragraphs: [
      'The gap exists because the two programs do fundamentally different things. Social Security is a cash-benefit program: it sends monthly checks to retirees, disabled workers, and survivors of deceased workers. The Old-Age and Survivors Insurance trust fund alone pays retirement and survivor benefits to over 60 million Americans, and tens of millions more receive disability benefits. When benefits rise — through cost-of-living adjustments or a growing beneficiary population — outlays rise in lockstep with the number of checks written.',
      'Medicare, by contrast, is health insurance. It covers hospital stays (Part A), doctor visits and outpatient care (Part B), and prescription drugs (Part D) for roughly 69 million enrollees — about 61 million Americans aged 65 and older plus 7.6 million people with disabilities. Instead of writing checks to beneficiaries, Medicare pays doctors, hospitals, and insurers, and its spending tracks the price of medical care rather than the number of beneficiaries alone.',
      'That structural difference is the whole story. The average Social Security retirement benefit is paid in full every month to every eligible person, while Medicare only pays when an enrollee actually uses care — and beneficiaries themselves shoulder part of the cost through premiums, deductibles, and copays. A check written to everyone is simply more expensive than insurance that pays only when care is used.',
    ],
    callout: {
      type: 'info',
      text: 'Explore each program in detail on its category page: /categories/social-security-spending and /categories/medicare-spending.',
    },
  },
  {
    id: 'how-they-are-funded',
    heading: 'How Each Program Is Funded — and Why It Matters',
    paragraphs: [
      'The two programs are financed by different taxes, flowing into different trust funds — a distinction that explains why their financial futures look so different. Social Security is funded almost entirely by a 12.4% payroll tax on wages (6.2% from the worker, 6.2% from the employer), up to an annual earnings cap. The money goes into the Old-Age, Survivors, and Disability Insurance trust funds, which pay benefits and invest surpluses in special-issue Treasury bonds.',
      'Medicare\'s financing is a patchwork. Hospital Insurance (Part A) draws on a 2.9% payroll tax (1.45% each from worker and employer) with no earnings cap, plus an additional 0.9% tax on high earners. But Parts B and D — physician services and drugs — are financed mostly by general federal revenue, with enrollee premiums covering roughly a quarter of the cost. That is why Part B premiums and general tax dollars, not just payroll taxes, determine Medicare\'s budget footprint.',
      'Both programs are classified as mandatory spending, meaning their outlays are set by eligibility rules rather than annual appropriations. Together with the rest of mandatory spending, they make up about three-quarters of the federal budget — which is why budget debates keep circling back to them. Congress can\'t trim them in an appropriations bill; changing them requires changing the underlying law.',
    ],
  },
  {
    id: 'growth-story',
    heading: 'The Growth Story: Medicare Is Catching Up',
    paragraphs: [
      'Social Security may lead today, but Medicare has been gaining ground. In fiscal 2018, Social Security spent $988 billion against Medicare\'s $589 billion — Social Security was 68% larger. By fiscal 2026 year-to-date, the lead has narrowed to 56%. Over those eight years, Medicare outlays grew 66% while Social Security grew 54%.',
      'The drivers differ. Social Security\'s growth comes from demographics and inflation: more beneficiaries as baby boomers retire, plus annual cost-of-living adjustments — including the large 2023 COLA of 8.7% — that compound into permanently higher benefit levels. The Social Security Fairness Act, enacted in January 2025, also lifted benefits for millions of public-sector workers, contributing to fiscal 2026\'s increase.',
      'Medicare\'s faster growth is driven by the rising price of medical care, higher payment rates for services, and steady enrollment growth. The Congressional Budget Office reported that in fiscal 2026 alone, Medicare outlays rose $77 billion (8%) on higher enrollment and payment rates, outpacing Social Security\'s $86 billion (5%) increase in percentage terms. Healthcare inflation is a more powerful escalator than benefit COLAs.',
    ],
    chart: {
      title: 'Social Security vs. Medicare Outlays, FY2018–FY2026 ($B)',
      caption:
        'U.S. Treasury Monthly Treasury Statement, Table 9. FY2018–FY2024 are September finals; FY2026 is fiscal year-to-date through August 31, 2026. Medicare has grown faster than Social Security since 2018.',
      type: 'line',
      unit: '$B',
      data: [
        { label: '2018', value: 987.8 },
        { label: '2020', value: 1095.9 },
        { label: '2022', value: 1218.7 },
        { label: '2024', value: 1460.9 },
        { label: '2026*', value: 1525.9 },
      ],
      series2Label: 'Medicare',
      series2Data: [
        { label: '2018', value: 588.8 },
        { label: '2020', value: 776.2 },
        { label: '2022', value: 755.1 },
        { label: '2024', value: 874.1 },
        { label: '2026*', value: 979.3 },
      ],
    },
  },
  {
    id: 'trust-fund-deadlines',
    heading: 'The Trust Fund Deadlines: 2032 and 2033',
    paragraphs: [
      'The comparison gets more urgent when you look at the trust funds. According to the 2026 Social Security and Medicare Trustees Reports, released in June 2026, the Old-Age and Survivors Insurance trust fund\'s reserves will be depleted in the fourth quarter of 2032 — moved up one quarter from last year\'s projection. The combined Social Security trust funds would be depleted in 2034. Medicare\'s Hospital Insurance trust fund faces depletion in 2033.',
      'Here is what "depletion" actually means — and it is widely misunderstood. The programs do not disappear. Payroll taxes keep flowing in, so even with empty reserves, incoming revenue would cover about 78% of scheduled Social Security retirement benefits after 2032 (a roughly 22% automatic cut) and about 89% of Medicare hospital costs after 2033. The checks get smaller; they do not stop.',
      'The actuaries\' message, repeated every year, is that delay makes the fix harder: every year Congress waits, the required tax increase or benefit adjustment grows. The 2026 reports found both programs "continue to face significant financing issues," in the trustees\' words — a quiet way of saying the arithmetic is not improving on its own.',
    ],
    chart: {
      title: 'Program Growth Since 2018 (%)',
      caption:
        'U.S. Treasury Monthly Treasury Statement, Table 9. Medicare outlays grew 66% from FY2018 to FY2026 year-to-date; Social Security grew 54%.',
      type: 'bar',
      unit: '%',
      data: [
        { label: 'Social Security', value: 54.5 },
        { label: 'Medicare', value: 66.3 },
      ],
    },
    callout: {
      type: 'warning',
      text: 'Trust fund depletion dates are projections, not certainties. They assume current law and the trustees\' intermediate economic and demographic assumptions — legislation, recessions, or immigration changes could move the dates in either direction.',
    },
  },
  {
    id: 'why-it-matters',
    heading: 'Why the Comparison Matters for the Deficit',
    paragraphs: [
      'Step back, and the two programs together define the federal budget. At $2.505 trillion through August 2026, Social Security and Medicare are larger than defense, interest, and every other category combined — they are 36.8% of everything the government spends. Any serious conversation about the deficit, which the CBO put at $1.993 trillion for full fiscal 2026, runs through these two programs.',
      'Their full-year scale is even larger than the year-to-date figures suggest: the CBO\'s October 2026 estimates put complete fiscal 2026 Social Security outlays at $1.654 trillion and Medicare at $1.069 trillion, against $7.4 trillion in total spending. And the pressure is structural — an aging population means more beneficiaries drawing benefits while relatively fewer workers pay the payroll taxes that fund them.',
      'That is the real answer to "which costs more." Today it is Social Security, by more than half a trillion dollars. But the more important number is the combined one: $2.5 trillion and climbing, in programs whose costs are written into law and whose trust funds have countdown clocks. For the full budget picture, see our breakdown of where the federal budget goes: /blog/where-does-us-federal-budget-go.',
    ],
    bullets: [
      'Social Security: $1.526T (22.4% of federal spending) vs. Medicare: $979B (14.4%) — FYTD Aug 2026',
      'Combined $2.505T = 36.8% of all federal outlays, about $7.5B per day',
      'Medicare grew faster since 2018 (+66%) than Social Security (+54%)',
      'Trust fund deadlines: Social Security retirement fund late 2032, Medicare hospital fund 2033',
    ],
  },
];

export const data: ArticleData = {
  slug: 'medicare-vs-social-security-spending',
  title: 'Medicare vs. Social Security Spending: Which Costs More?',
  description:
    'Medicare vs. Social Security spending: Social Security costs $1.53T vs. Medicare\u2019s $979B (FYTD 2026) — 56% more. Why the gap, and what trustees project.',
  keyword: 'medicare vs social security spending',
  category: 'Comparisons',
  datePublished: '2026-10-13',
  dateModified: '2026-10-13',
  readingTime: estimateReadingTime(sections),
  quickTakeaways: [
    {
      label: 'The winner',
      text: 'Social Security costs $1.526T vs. Medicare\u2019s $979B through Aug 2026 — about 56% more, a $547B gap.',
    },
    {
      label: 'The share',
      text: 'Together they are $2.505T — 36.8% of all federal spending, or about $7.5B per day.',
    },
    {
      label: 'The growth',
      text: 'Medicare outlays grew 66% since 2018 vs. 54% for Social Security — the gap is narrowing.',
    },
    {
      label: 'The deadlines',
      text: 'The 2026 trustees project the Social Security retirement fund depleted in late 2032 and Medicare\u2019s hospital fund in 2033.',
    },
  ],
  sections,
  faqs: [
    {
      question: 'Which costs more, Social Security or Medicare?',
      answer:
        'Social Security, by a wide margin. Through August 31, 2026, Social Security outlays totaled $1.526 trillion versus $979 billion for Medicare — about 56% more. Social Security is 22.4% of all federal spending; Medicare is 14.4%.',
    },
    {
      question: 'What is the difference between Social Security and Medicare?',
      answer:
        'Social Security is a cash-benefit program that sends monthly checks to retirees, disabled workers, and survivors. Medicare is health insurance that pays for hospital care (Part A), doctor visits (Part B), and prescription drugs (Part D) for about 69 million Americans, mostly aged 65 and older.',
    },
    {
      question: 'Are Social Security and Medicare funded by the same taxes?',
      answer:
        'No. Social Security is funded by a 12.4% payroll tax (split between worker and employer) up to an annual cap, flowing into the OASDI trust funds. Medicare Part A uses a separate 2.9% payroll tax with no cap, while Parts B and D are financed mostly by general federal revenue plus enrollee premiums.',
    },
    {
      question: 'Will Social Security and Medicare run out of money?',
      answer:
        'The 2026 trustees project the Social Security retirement trust fund depleted in late 2032 and Medicare\u2019s hospital fund in 2033. But "depleted" does not mean bankrupt: payroll taxes would still cover about 78% of scheduled Social Security benefits and 89% of Medicare hospital costs. Avoiding automatic cuts requires legislation.',
    },
    {
      question: 'Is Medicare part of Social Security?',
      answer:
        'No — they are separate programs with separate laws, trust funds, and funding sources. They are often discussed together because both are mandatory spending programs serving older Americans, and Medicare premiums are frequently deducted from Social Security checks, which creates the impression of a single program.',
    },
    {
      question: 'How much of the federal budget goes to Social Security and Medicare combined?',
      answer:
        'About 36.8% — $2.505 trillion through August 2026, or roughly $7.5 billion per day. They are by far the two largest budget categories, ahead of net interest ($1.017T), health programs ($926B), and national defense ($876B).',
    },
  ],
  sources: [
    {
      name: 'U.S. Department of the Treasury — Monthly Treasury Statement (Fiscal Data)',
      url: 'https://fiscaldata.treasury.gov/',
    },
    {
      name: 'Congressional Budget Office — FY 2026 Budget Review (via AAF)',
      url: 'https://www.americanactionforum.org/insight/cbo-fy-2026-budget-deficit-totaled-2-trillion/',
    },
    {
      name: '401(k) Specialist — 2026 Social Security Trustees Report',
      url: 'https://401kspecialistmag.com/2026-social-security-trustees-report-moves-insolvency-to-2032/',
    },
    {
      name: 'AEI — Political Insights from the 2026 Social Security and Medicare Trustees\u2019 Reports',
      url: 'https://www.aei.org/economics/health-care/political-insights-from-the-2026-social-security-and-medicare-trustees-reports/',
    },
  ],
  relatedSlugs: [
    'us-debt-interest-vs-defense-spending',
    'where-does-us-federal-budget-go',
    'how-much-us-spends-per-second',
  ],
};
