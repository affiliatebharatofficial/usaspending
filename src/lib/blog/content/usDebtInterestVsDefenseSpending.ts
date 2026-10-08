import type { ArticleData } from '../types';
import { estimateReadingTime } from '../types';

const sections: ArticleData['sections'] = [
  {
    id: 'the-crossover',
    heading: 'The Crossover: Interest Just Passed Defense',
    paragraphs: [
      'For the first time in modern budget history, the United States spends more servicing its debt than it does on national defense. Through August 31, 2026 — eleven months into fiscal year 2026 — net interest payments totaled $1.017 trillion, compared with $876 billion for national defense. The gap is roughly $141 billion, and it is widening.',
      'This was not a sudden event. Interest costs have been climbing for four straight years while defense spending grew modestly. In fiscal 2022, net interest was just $475 billion — less than two-thirds of the defense budget. By fiscal 2025, interest had reached $970 billion against $917 billion for defense: the crossover year. Fiscal 2026 simply confirmed the new order.',
      'Net interest is now the third-largest thing the federal government does, behind only Social Security ($1.53 trillion) and ahead of Medicare ($979 billion). It consumes about 15 cents of every federal dollar spent — before a single program receives funding.',
    ],
    chart: {
      title: 'Net Interest vs. National Defense, FY2018–FY2026 ($B)',
      caption:
        'Annual outlays from the U.S. Treasury Monthly Treasury Statement, Table 9. FY2026 is fiscal year-to-date through August 31, 2026. The lines cross in FY2025.',
      type: 'line',
      unit: '$B',
      data: [
        { label: '2018', value: 324.7 },
        { label: '2019', value: 375.6 },
        { label: '2020', value: 344.7 },
        { label: '2021', value: 352.3 },
        { label: '2022', value: 475.1 },
        { label: '2023', value: 659.2 },
        { label: '2024', value: 881.7 },
        { label: '2025', value: 970.4 },
        { label: '2026*', value: 1017.0 },
      ],
      series2Label: 'National defense',
      series2Data: [
        { label: '2018', value: 664.7 },
        { label: '2019', value: 687.6 },
        { label: '2020', value: 726.2 },
        { label: '2021', value: 754.8 },
        { label: '2022', value: 766.7 },
        { label: '2023', value: 820.7 },
        { label: '2024', value: 874.0 },
        { label: '2025', value: 916.6 },
        { label: '2026*', value: 876.2 },
      ],
    },
  },
  {
    id: 'how-we-got-here',
    heading: 'How We Got Here: The Fastest-Doubling Bill in the Budget',
    paragraphs: [
      'Net interest is the fastest-growing major budget category of the past decade. From $325 billion in fiscal 2018, it more than tripled in eight years. No other large category comes close to that growth rate: over the same period, defense spending rose about 38%, and Social Security about 55%.',
      'The surge has two causes, and both hit at once. First, the stock of debt exploded — pandemic-era borrowing, chronic deficits, and tax changes pushed total federal debt past $40 trillion in 2026, with debt held by the public now exceeding the size of the entire U.S. economy. Second, interest rates rose sharply from their near-zero pandemic lows, so every dollar of refinanced debt costs more to carry.',
      'The timing matters. Trillions in low-rate debt issued during 2020–2021 are rolling over into today\'s higher-rate environment. That refinancing conveyor belt is why interest costs keep climbing even in years when the deficit itself stabilizes — the bill for past borrowing arrives on its own schedule.',
    ],
    chart: {
      title: 'Federal Net Interest Outlays, FY2018–FY2026 ($B)',
      caption:
        'U.S. Treasury Monthly Treasury Statement, Table 9. FY2026 is fiscal year-to-date through August 31, 2026. Interest costs more than tripled in eight years.',
      type: 'bar',
      unit: '$B',
      data: [
        { label: '2018', value: 324.7 },
        { label: '2019', value: 375.6 },
        { label: '2020', value: 344.7 },
        { label: '2021', value: 352.3 },
        { label: '2022', value: 475.1 },
        { label: '2023', value: 659.2 },
        { label: '2024', value: 881.7 },
        { label: '2025', value: 970.4 },
        { label: '2026*', value: 1017.0 },
      ],
    },
  },
  {
    id: 'what-a-trillion-means',
    heading: 'What $1 Trillion in Interest Actually Means',
    paragraphs: [
      'Big numbers go numb fast, so here is the interest bill at human scale. At $1.017 trillion over the 335 days elapsed in fiscal 2026, the government pays about $3.04 billion in interest every single day — roughly $126 million per hour, or about $35,000 every second. That is the cost of past borrowing alone, running continuously whether Congress is in session or not.',
      'Another way to see it: roughly one dollar of every four the government collects in revenue now goes straight to bondholders. Debt service is deducted before any debate about programs, salaries, or investments even begins. Economists call this the "fiscal space" problem — each year, a growing slice of the budget is pre-committed to the past.',
      'Compare it with what the money could otherwise fund. The entire federal science, space, and technology budget is $36 billion — interest payments cover that nearly 30 times over. Annual transportation spending ($126 billion) equals about six weeks of interest. These comparisons are not policy proposals; they are a measure of how much past borrowing now constrains present choices.',
    ],
    bullets: [
      '$3.04 billion per day in interest — every day, including weekends',
      '$126 million per hour, about $35,000 per second',
      '14.9% of all federal outlays — nearly 1 in 7 dollars spent',
      'Roughly $141 billion more than national defense in FY2026 to date',
    ],
    callout: {
      type: 'info',
      text: 'FY2026 figures cover October 1, 2025 through August 31, 2026 (335 days) — the latest data published in the Monthly Treasury Statement. Full-year totals will be higher.',
    },
  },
  {
    id: 'where-it-ranks',
    heading: 'Where Interest Ranks in the FY2026 Budget',
    paragraphs: [
      'To put the $1.017 trillion in context, here are the five largest federal budget categories so far in fiscal 2026. Social Security remains the giant at $1.53 trillion. But interest has pulled clearly ahead of Medicare and defense — categories that most Americans would name first if asked where the money goes.',
      'This ranking would have looked absurd a decade ago. In fiscal 2018, net interest ($325 billion) was smaller than every major category — less than half of defense spending and barely a fifth of Social Security. The budget\'s center of gravity has shifted from programs people use to payments on money already spent.',
      'Explore the full breakdown on our spending breakdown page, or compare categories head-to-head with the comparison tool: /spending-breakdown and /compare.',
    ],
    chart: {
      title: 'Largest Federal Budget Categories, FY2026 FYTD ($B)',
      caption:
        'U.S. Treasury Monthly Treasury Statement, Table 9, through August 31, 2026. Net interest is now the second-largest category shown here and third overall.',
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
    id: 'what-happens-next',
    heading: 'What Happens Next: The CBO Projection',
    paragraphs: [
      'The Congressional Budget Office projects that net interest will roughly double again — from about $1.0 trillion in fiscal 2026 to approximately $2.1 trillion by fiscal 2036. Measured against the economy, interest costs would climb from 3.3% to 4.6% of GDP, nearly matching all discretionary spending combined.',
      'That is the baseline scenario, built on current law — not a worst case. It assumes no recession, no new wars, and no major policy changes. Any of those would push the number higher. The Committee for a Responsible Federal Budget has warned that delaying action risks leaving "damage that can\'t be undone" for future generations.',
      'The mechanism is self-reinforcing: more borrowing means more interest, which widens the deficit, which requires more borrowing. Breaking the cycle requires some combination of higher revenue, slower spending growth, lower interest rates, or faster economic growth — and the math gets harder every year the debt compounds.',
    ],
    callout: {
      type: 'warning',
      text: 'CBO projections are estimates based on current law and economic assumptions — they are not predictions. Actual outcomes depend on future legislation, economic performance, and Federal Reserve policy.',
    },
  },
  {
    id: 'why-it-matters',
    heading: 'Why This Matters for the Budget Debate',
    paragraphs: [
      'Interest is unique among budget categories: it buys nothing. Defense spending funds a military, Social Security funds retirees, Medicare funds healthcare. Interest payments fund the past. Every dollar of interest is a dollar that cannot be spent on infrastructure, research, education, or tax relief — and unlike program spending, it cannot be reformed, only refinanced.',
      'This is also why the deficit debate has shifted. In September 2026, the CBO reported the deficit had already hit $2 trillion with a month left in the fiscal year, driven substantially by surging interest costs — up 14% ($117 billion) in the first ten months. Interest is no longer a footnote in deficit discussions; it is one of the main drivers.',
      'Understanding this number is the starting point for any serious budget conversation. Our live spending clock shows the national total ticking in real time, and the net interest category page tracks this figure as new Treasury data arrives: /categories/net-interest-spending.',
    ],
  },
];

export const data: ArticleData = {
  slug: 'us-debt-interest-vs-defense-spending',
  title: 'US Debt Interest Now Costs More Than Defense',
  description:
    'Net interest hit $1.02T in FY2026 — about $141B more than defense spending. How debt service became America\'s third-largest budget item.',
  keyword: 'us debt interest vs defense spending',
  category: 'Data Stories',
  datePublished: '2026-10-08',
  dateModified: '2026-10-08',
  readingTime: estimateReadingTime(sections),
  quickTakeaways: [
    {
      label: 'The crossover',
      text: 'Net interest ($1.017T) now exceeds national defense ($876B) — a $141B gap through August 2026.',
    },
    {
      label: 'The growth',
      text: 'Interest costs more than tripled since FY2018 ($325B), the fastest growth of any major budget category.',
    },
    {
      label: 'The trajectory',
      text: 'CBO projects net interest roughly doubling again to ~$2.1T by 2036, near 4.6% of GDP.',
    },
    {
      label: 'The data',
      text: 'All figures from the U.S. Treasury Monthly Treasury Statement, Table 9 — verified against primary sources.',
    },
  ],
  sections,
  faqs: [
    {
      question: 'How much does the US pay in interest on the national debt?',
      answer:
        'Through August 31, 2026, the federal government paid $1.017 trillion in net interest — about $3.04 billion per day. That is 14.9% of all federal outlays, making interest the third-largest budget category behind Social Security and Medicare.',
    },
    {
      question: 'When did interest payments exceed defense spending?',
      answer:
        'Fiscal 2025 was the crossover year: net interest reached $970 billion versus $917 billion for national defense. In fiscal 2026 the gap widened substantially, with interest at $1.017 trillion against $876 billion for defense through August.',
    },
    {
      question: 'Why are federal interest payments rising so fast?',
      answer:
        'Two forces combined: the national debt surpassed $40 trillion, and interest rates rose from near-zero pandemic lows. Trillions in cheap debt issued in 2020–2021 are now refinancing at higher rates, so the cost of carrying past borrowing keeps climbing automatically.',
    },
    {
      question: 'What is the difference between net interest and gross interest?',
      answer:
        'Net interest is what the Treasury actually pays out after offsetting interest income — it is the figure that appears in the budget and the Monthly Treasury Statement. Gross interest is larger but includes intragovernmental payments (e.g., interest credited to trust funds) that net out.',
    },
    {
      question: 'How much of US tax revenue goes to debt interest?',
      answer:
        'Roughly one dollar in four. With net interest near $1 trillion against roughly $4 trillion-plus in annual revenue, debt service consumes about a quarter of every revenue dollar before any program is funded.',
    },
  ],
  sources: [
    {
      name: 'U.S. Department of the Treasury — Monthly Treasury Statement (Fiscal Data)',
      url: 'https://fiscaldata.treasury.gov/',
    },
    {
      name: 'Congressional Budget Office',
      url: 'https://www.cbo.gov/',
    },
    {
      name: 'Committee for a Responsible Federal Budget',
      url: 'https://www.crfb.org/',
    },
    {
      name: 'AINVEST — "Your Tax Dollars Now Pay More Interest Than the Military"',
      url: 'https://www.ainvest.com/news/tax-dollars-pay-interest-military-bill-bigger-fast-2609/',
    },
  ],
};
