import type { ArticleData } from '../types';
import { estimateReadingTime } from '../types';

const sections: ArticleData['sections'] = [
  {
    id: 'three-words-one-budget',
    heading: 'Deficit vs. Debt vs. Interest: The 30-Second Version',
    paragraphs: [
      'The deficit is the gap in a single year: the government spent $6.81 trillion and collected $4.85 trillion in the first eleven months of fiscal 2026, so the deficit is about $1.97 trillion. The debt is the pile-up of every past deficit: roughly $40.34 trillion in total borrowing, the number that crossed the $40 trillion milestone in August 2026. Interest is the cost of carrying that pile: $1.02 trillion through August alone — the bill for past borrowing, due whether Congress passes a budget or not.',
      'Think of it this way: the deficit is how much deeper you dig this year, the debt is the depth of the hole, and interest is the price of the shovel. Mix up any two of the three and budget headlines stop making sense — but keep them straight and almost every fiscal story clicks into place. The numbers in this explainer come from the U.S. Treasury\'s Monthly Treasury Statement (through August 31, 2026), the site\'s canonical source, with full-year figures labeled as estimates from the Congressional Budget Office and the Committee for a Responsible Federal Budget.',
    ],
    callout: {
      type: 'info',
      text: 'FY2026 figures here cover October 1, 2025 through August 31, 2026 — the latest published Treasury actuals. The fiscal year ended September 30, 2026, but the final Treasury statement is not yet published; full-year numbers below are marked as estimates.',
    },
  },
  {
    id: 'the-deficit',
    heading: 'The Deficit: This Year\'s Gap Between Spending and Revenue',
    paragraphs: [
      'A deficit happens in one fiscal year whenever the government spends more than it collects. Through August 2026 — eleven months into fiscal 2026 — federal outlays totaled $6.81 trillion against $4.85 trillion in revenue, leaving a $1.97 trillion shortfall. The Congressional Budget Office\'s assessment of the complete fiscal year, released October 8, 2026, puts the full-year deficit at $1.993 trillion — essentially $2 trillion, the widest gap since 2021 and $218 billion larger than fiscal 2025\'s shortfall.',
      'What widened the gap was not collapsing revenue: receipts actually rose $169 billion (3%) to $5.4 trillion for the year. Spending just grew nearly twice as fast — outlays climbed $386 billion (6%) to $7.4 trillion. Individual income and payroll taxes brought in $255 billion more on rising wages, but corporate tax receipts fell $70 billion (16%) after the 2025 reconciliation act expanded investment write-offs, and tariff-related refunds cut customs collections by $22 billion. Every extra dollar of the deficit has to be borrowed by selling Treasury securities — which is how the deficit becomes the debt.',
      'Deficits of this size used to require a war, a recession, or a pandemic. The last time the federal government balanced its budget was fiscal 2001 — a quarter century ago. Running a $2 trillion deficit during a growing economy with low unemployment, as budget analysts at the Bipartisan Policy Center noted, is historically unusual: normally borrowing of this scale happens when something has gone wrong, not when everything is fine. Explore the revenue and spending sides at /spending-breakdown.',
    ],
    chart: {
      title: 'FY2026 FYTD: Spending vs. Revenue ($B)',
      caption:
        'U.S. Treasury Monthly Treasury Statement, Table 9, through August 31, 2026. The deficit is outlays minus receipts for the 11 months shown.',
      type: 'bar',
      unit: '$B',
      data: [
        { label: 'Outlays', value: 6811.0 },
        { label: 'Receipts', value: 4845.5 },
        { label: 'Deficit', value: 1965.6 },
      ],
    },
  },
  {
    id: 'deficit-history',
    heading: 'How Deficits Got This Big: A Short History',
    paragraphs: [
      'The current $2 trillion deficit did not appear overnight. After the 2008 financial crisis, annual shortfalls settled near $1 trillion. The pandemic then blew the lid off: fiscal 2020 ran a $3.13 trillion deficit and fiscal 2021 a $2.77 trillion one as emergency aid flooded out the door. Deficits receded to $1.38 trillion in 2022, but instead of continuing toward balance they climbed again — $1.70 trillion in 2023, $1.83 trillion in 2024, $1.78 trillion in 2025 — and now roughly $2.0 trillion in 2026. The Treasury figures tell a clear story: the pandemic spending spike lifted the budget onto a permanently higher plateau, and it has never come back down.',
      'Two engines keep the gap wide. The first is demography: Social Security spending rose $86 billion (5%) in fiscal 2026 to $1.654 trillion on the CBO\'s assessment, Medicare $77 billion (8%) to $1.069 trillion, and Medicaid $55 billion (8%) to $723 billion — more beneficiaries, higher benefits, rising health-care costs, every year. The second engine is interest on the debt, which is the subject of the next section and the fastest-growing cost in the budget. When the deficit persists year after year regardless of the business cycle, economists call it structural — baked in, not cyclical.',
    ],
    chart: {
      title: 'Annual Federal Deficit, FY2018–FY2026 ($B)',
      caption:
        'U.S. Treasury Monthly Treasury Statement: outlays minus receipts. September finals for FY2018–FY2025; FY2026 is fiscal year-to-date through August 31, 2026 (a full year would be larger; CBO\'s October assessment puts the full-year deficit at $1.99T).',
      type: 'line',
      unit: '$B',
      data: [
        { label: '2018', value: 779.0 },
        { label: '2019', value: 984.4 },
        { label: '2020', value: 3131.9 },
        { label: '2021', value: 2772.2 },
        { label: '2022', value: 1375.4 },
        { label: '2023', value: 1695.1 },
        { label: '2024', value: 1832.8 },
        { label: '2025', value: 1775.4 },
        { label: '2026*', value: 1965.6 },
      ],
    },
  },
  {
    id: 'the-debt',
    heading: 'The Debt: Every Deficit Ever, Added Up',
    paragraphs: [
      'The national debt is the running total of all the borrowing the federal government has done across its history, minus what it has repaid. Because deficits have been the norm for a quarter century, the total keeps climbing: Treasury\'s daily "Debt to the Penny" report put total public debt outstanding at $40.34 trillion on October 13, 2026. The $40 trillion milestone was crossed on August 18, 2026 — roughly four years earlier than the Congressional Budget Office projected before the pandemic.',
      'Not all of that $40.34 trillion is the same thing. About $32.5 trillion is debt held by the public — Treasury bonds owned by investors, pension funds, the Federal Reserve, and foreign governments, financed in open markets at prevailing interest rates. The remaining roughly $7.9 trillion is intragovernmental debt: the government owing itself, like the Social Security trust funds holding Treasury securities. The public-held portion is the economically meaningful one — it is what drives borrowing costs — and at about 100–101% of GDP it has reached a level last seen after World War II, except that time the debt was being paid down.',
      'The speed is the striking part. The debt took from the founding of the republic until September 2008 to reach $10 trillion. It hit $20 trillion in September 2017, $30 trillion in January 2022, $35 trillion in July 2024, and $40 trillion in August 2026. The last $10 trillion took barely four and a half years; roughly $2 trillion has been added since last fall. CBO\'s baseline projects publicly held debt climbing to 120% of GDP by 2036.',
    ],
    chart: {
      title: 'Where the $40.3T National Debt Sits, October 2026 ($T)',
      caption:
        'U.S. Treasury "Debt to the Penny" daily data, October 13, 2026. Debt held by the public is financed in open markets; intragovernmental holdings are owed to the government\'s own trust funds.',
      type: 'bar',
      unit: '$T',
      data: [
        { label: 'Total gross debt', value: 40.3 },
        { label: 'Held by the public', value: 32.5 },
        { label: 'Intragovernmental', value: 7.9 },
      ],
    },
  },
  {
    id: 'the-interest',
    heading: 'Interest: The Bill for Past Borrowing',
    paragraphs: [
      'Net interest is what the Treasury pays to the bondholders who financed those deficits — minus the interest the government earns on its own deposits. It is a budget line that funds nothing: no retirees, no patients, no soldiers, no roads. And it has exploded. Through August 2026, net interest totaled $1.02 trillion on the Treasury data — already larger than the entire defense budget ($876 billion) for the same period. The CBO\'s full-year assessment puts net interest at $1.143 trillion, up $115 billion (11%) in a single year, a record 3.3–3.4% of GDP.',
      'Put it in time terms: interest now costs more than $3 billion a day — roughly $37,000 every second, day and night. That is up 11–14% year over year because two forces are compounding: the debt is larger, and the Treasury is refinancing old bonds that were issued at near-zero pandemic-era rates at today\'s higher rates. As one fiscal analyst put it, even if the government stopped borrowing for new programs tomorrow, interest costs would keep climbing for years as existing debt rolls over at higher rates.',
      'This is where the three concepts fuse into a loop. The deficit adds to the debt; a bigger debt at higher rates raises the interest bill; a bigger interest bill widens the deficit. More than half of the fiscal 2026 deficit — $1.02 trillion of roughly $2 trillion — is the cost of financing past borrowing rather than new spending. The Concord Coalition\'s warning at year-end captured it: net interest set a record at $1.1 trillion, consuming over 20% of all federal tax dollars. The full story of the crossover: /blog/us-debt-interest-vs-defense-spending and the category page /categories/net-interest-spending.',
    ],
    bullets: [
      'FY2026 FYTD net interest: $1.02T (Treasury MTS) — vs. $876B for defense, the full-year interest bill is set to top $1.14T',
      'Growth: +$115B (+11%) in one year, driven by a larger debt and refinancing at higher rates',
      'Share of deficit: more than half of the ~$2T deficit is interest on past borrowing',
      'Trajectory: CBO projects net interest reaching $2.1T by 2036 — nearly one-fifth of all federal spending',
    ],
  },
  {
    id: 'why-it-matters',
    heading: 'Why the Distinction Matters',
    paragraphs: [
      'Confusing the deficit with the debt produces two opposite errors. Some people hear "$40 trillion debt" and demand it be paid off like a credit card — but the U.S. borrows in its own currency at long maturities, and what matters is not the headline total but whether the debt grows slower than the economy and stays affordable to service. Others hear "the deficit is only $2 trillion" and miss that the number compounds: every deficit is permanent, added forever to the debt, and each addition permanently raises the interest bill.',
      'The interest line is the part of the budget nobody voted for this year yet everybody pays for. Social Security, Medicare, and defense at least buy something the public wants; interest buys nothing except permission to keep the past funded. When net interest outpaces defense and Medicare — as the CRFB\'s fiscal 2026 estimate confirms — it starts competing directly with every other priority: each new dollar of interest is a dollar that cannot go to infrastructure, science, or tax relief. That crowding-out is the real cost of chronic deficits, quieter than any headline about $40 trillion but more consequential.',
      'The honest framing is this: the deficit is a choice made this year, the debt is the accumulation of decades of those choices, and interest is the invoice that arrives regardless. In fiscal 2026 the invoice hit $1.1 trillion — and the CBO expects it to roughly double within a decade. See the whole budget picture at /spending-breakdown or compare categories head-to-head with /compare.',
    ],
    callout: {
      type: 'tip',
      text: 'Quick memory aid: deficit = the year\'s shortfall (~$2T in FY2026), debt = the lifetime total (~$40.3T), interest = the carrying cost (~$1.1T per year and rising). If a headline sounds scary, check which of the three it is actually about.',
    },
  },
  {
    id: 'common-misconceptions',
    heading: 'Three Things People Get Wrong',
    paragraphs: [
      'First: "The debt must be paid off or the country goes bankrupt." No wealthy country eliminates its national debt; governments refinance it continuously, rolling old bonds into new ones. The danger is not the stock of debt but its trajectory — if debt grows faster than the economy indefinitely, interest consumes an ever-larger share of revenue, and fiscal room for crises shrinks. The U.S. is nowhere near unable to pay, but it is in territory where interest alone eats a fifth of tax revenue.',
      'Second: "Foreign countries, especially China, own most of it." Foreign investors hold a significant but minority share of the publicly held debt; the largest holders are American: the Federal Reserve, mutual funds, banks, pension funds, and households. Most of the "debt" conversation is really America owing money to itself — which still has real costs, because the interest must be paid from tax revenue.',
      'Third: "Balancing the budget would fix everything." A balanced budget stops the debt from growing, but it does nothing about the interest bill, which continues as long as the debt exists. And achieving balance today would require closing a $2 trillion annual gap — about a quarter of all spending — with some combination of tax increases and program cuts, during peacetime. That is why economists focus on stabilizing the debt-to-GDP ratio rather than eliminating the debt itself.',
    ],
  },
];

export const data: ArticleData = {
  slug: 'deficit-vs-debt-vs-interest-explained',
  title: 'Deficit vs. Debt vs. Interest: What\'s the Difference?',
  description:
    'The deficit is the year\'s gap (~$2T), the debt is the $40.3T pile-up, interest (~$1.02T) is the cost. What each means, with verified Treasury data.',
  keyword: 'deficit vs debt vs interest',
  category: 'Explainers',
  datePublished: '2026-10-15',
  dateModified: '2026-10-15',
  readingTime: estimateReadingTime(sections),
  quickTakeaways: [
    {
      label: 'The deficit',
      text: '~$1.97T through August 2026 ($1.99T for the full year per CBO) — spending of $6.81T vs. revenue of $4.85T.',
    },
    {
      label: 'The debt',
      text: '$40.34T total as of October 13, 2026; $32.5T held by the public — about 100% of GDP, a post-WWII level.',
    },
    {
      label: 'The interest',
      text: '$1.02T through August — larger than defense, and more than half of the entire deficit.',
    },
    {
      label: 'The loop',
      text: 'Deficits add to debt, debt raises interest, interest widens deficits. The last budget surplus was FY2001.',
    },
  ],
  sections,
  faqs: [
    {
      question: 'What is the difference between the deficit and the national debt?',
      answer:
        'The deficit is the annual gap between what the federal government spends and what it collects in revenue — about $2 trillion for fiscal 2026. The national debt is the accumulation of all past deficits minus any surpluses: roughly $40.34 trillion as of October 2026. Each year\'s deficit is added to the debt; the debt never shrinks unless the government runs a surplus, which last happened in fiscal 2001.',
    },
    {
      question: 'How much interest does the US pay on the national debt?',
      answer:
        'Net interest totaled $1.02 trillion in the first eleven months of fiscal 2026, and the Congressional Budget Office\'s full-year assessment puts it at $1.143 trillion — a record 3.3–3.4% of GDP, or more than $3 billion a day. Interest now exceeds defense spending and rivals Medicare, and the CBO projects it will roughly double to $2.1 trillion by 2036.',
    },
    {
      question: 'Who owns the US national debt?',
      answer:
        'Of the $40.34 trillion total, about $32.5 trillion is debt held by the public — Treasury bonds owned by American investors, the Federal Reserve, pension funds, banks, and foreign governments, all financed in open markets. The remaining roughly $7.9 trillion is intragovernmental debt the government owes to its own trust funds, like Social Security.',
    },
    {
      question: 'What was the federal deficit in 2026?',
      answer:
        'The Congressional Budget Office\'s October 8, 2026 assessment puts the fiscal 2026 deficit at $1.993 trillion — about $2 trillion, the widest since 2021. Federal outlays were $7.4 trillion (up 6%) and revenue $5.4 trillion (up 3%). The gap widened because spending grew nearly twice as fast as tax collections. (The Treasury\'s final statement for the fiscal year is not yet published; the CBO figure is an assessment.)',
    },
    {
      question: 'Does the US have to pay off its national debt?',
      answer:
        'No country realistically eliminates its national debt; governments continuously refinance maturing bonds with new ones. What matters is the debt-to-GDP ratio — whether the economy grows faster than the debt. At about 100% of GDP, the US is approaching its post-WWII peak, and the CBO projects 120% by 2036. The real risk is not default but the interest bill crowding out everything else.',
    },
    {
      question: 'What is debt-to-GDP and what is the US ratio?',
      answer:
        'Debt-to-GDP compares the national debt to the size of the economy, measuring whether the burden is affordable. Using debt held by the public — the CBO\'s standard measure — the US ratio is about 100–101% of GDP in 2026, matching the peak reached financing World War II. Measured against total gross debt, the ratio is higher, around 123–125%. CBO projects the public-debt ratio climbing to 120% by 2036.',
    },
  ],
  sources: [
    {
      name: 'U.S. Department of the Treasury — Monthly Treasury Statement, August 2026',
      url: 'https://fiscaldata.treasury.gov/static-data/published-reports/mts/MonthlyTreasuryStatement_202508.pdf',
    },
    {
      name: 'The Fiscal Times — "Deficit Rose to $2 Trillion for 2026 Fiscal Year: CBO"',
      url: 'https://www.thefiscaltimes.com/newsletter/20261008-2026-Deficit-Rose-2-Trillion-CBO',
    },
    {
      name: 'Committee for a Responsible Federal Budget — "U.S. Ran a $2 Trillion Deficit Last Year, We Estimate"',
      url: 'https://www.crfb.org/blogs/us-ran-2-trillion-deficit-last-year-we-estimate',
    },
    {
      name: 'U.S. Treasury "Debt to the Penny" — record $40.34 trillion, October 13, 2026 (via IndexBox)',
      url: 'https://www.indexbox.io/blog/us-public-debt-outstanding-hits-record-4034-trillion-on-2026-10-13/',
    },
  ],
  relatedSlugs: ['us-debt-interest-vs-defense-spending', 'where-does-us-federal-budget-go'],
};
