import type { ArticleData } from '../types';
import { estimateReadingTime } from '../types';

const sections: ArticleData['sections'] = [
  {
    id: 'the-big-picture',
    heading: 'The $6.81 Trillion Budget in One Picture',
    paragraphs: [
      'Through August 31, 2026 — eleven months into fiscal year 2026 — the U.S. federal government has spent $6.81 trillion. That is about $20.3 billion every single day, or roughly $235,000 every second, running continuously whether Congress is in session or not. Over the same period, the government collected $4.85 trillion in revenue, leaving a gap — the deficit — of about $1.97 trillion.',
      'The cleanest way to understand where that money goes is to divide the budget into three buckets. Mandatory spending pays for programs that run on autopilot: Social Security checks, Medicare benefits, and food assistance are set by law, not by an annual vote. Discretionary spending is what Congress actually debates each year: defense, courts, science, highways. And then there is net interest — the cost of servicing past borrowing, which is now one of the largest things the government does. Explore the full numbers on our spending breakdown page or compare categories head-to-head with the comparison tool: /spending-breakdown and /compare.',
      'One note on the numbers: every figure in this article comes from the U.S. Treasury\'s Monthly Treasury Statement, Table 9 — the official record of what the government actually spent, not projections. Fiscal 2026 ended on September 30, and the Congressional Budget Office\'s final estimate (published October 8, 2026) puts full-year outlays at $7.4 trillion and the deficit at $2.0 trillion. The Treasury data here is the latest published actuals.',
    ],
    callout: {
      type: 'info',
      text: 'FY2026 figures cover October 1, 2025 through August 31, 2026 (335 days) — the latest Monthly Treasury Statement published. Full-year totals are higher.',
    },
  },
  {
    id: 'where-every-dollar-goes',
    heading: 'Where Every Dollar Goes: The 10 Categories',
    paragraphs: [
      'Three categories absorb more than half of all federal spending. Social Security is the giant at $1.53 trillion — 22.4 cents of every dollar. Net interest on the debt comes second at $1.02 trillion (14.9%), and Medicare third at $979 billion (14.4%). Together, just three line items account for 51% of the entire federal budget.',
      'The next tier: Health Programs — Medicaid, CHIP, and marketplace subsidies — at $926 billion (13.6%), followed by Defense & Military at $876 billion (12.9%), and Veterans Affairs at $396 billion (5.8%). After that the numbers fall off quickly: Infrastructure & Transportation ($126 billion, 1.9%), Education & Training ($92 billion, 1.4%), Agriculture & Food Assistance ($51 billion, 0.7%), and Science, Space & Technology ($36 billion, 0.5%). The remaining 11.5% — about $786 billion — is everything else combined: courts and law enforcement, diplomacy, general government operations, minus offsetting receipts.',
      'The surprise for most people is defense. Ask Americans where the money goes and defense is usually the first answer — but it ranks fifth. The entire Defense Department budget ($876 billion) is smaller than the interest bill ($1.02 trillion), and the whole federal science, space, and technology budget ($36 billion) equals roughly twelve days of interest payments. Category pages with full histories: /categories/social-security-spending, /categories/medicare-spending, /categories/defense-military, /categories/net-interest-spending.',
    ],
    chart: {
      title: 'All 10 Federal Budget Categories, FY2026 FYTD ($B)',
      caption:
        'U.S. Treasury Monthly Treasury Statement, Table 9, through August 31, 2026. Categories are usaspending.us canonical groupings; "Health Programs" includes Medicaid and other health functions.',
      type: 'bar',
      unit: '$B',
      data: [
        { label: 'Social Security', value: 1525.9 },
        { label: 'Net Interest', value: 1017.0 },
        { label: 'Medicare', value: 979.3 },
        { label: 'Health Programs', value: 925.7 },
        { label: 'Defense', value: 876.2 },
        { label: 'Veterans', value: 395.6 },
        { label: 'Infrastructure', value: 126.4 },
        { label: 'Education', value: 92.0 },
        { label: 'Agriculture', value: 51.0 },
        { label: 'Science', value: 36.2 },
      ],
    },
  },
  {
    id: 'the-big-three',
    heading: 'The Big Three: Retirement, Health, and the Debt',
    paragraphs: [
      'Social Security ($1.53 trillion) is the budget\'s anchor. It pays monthly benefits to roughly one in five Americans — retirees, survivors, and people with disabilities — and it keeps growing because benefits rise with inflation each year and the number of beneficiaries keeps climbing. Spending rose about 5% in fiscal 2026 on cost-of-living adjustments and the Social Security Fairness Act of 2023, which increased payments to certain recipients starting in March 2025.',
      'Health care is the budget\'s other gravitational force. Medicare ($979 billion) and Health Programs ($926 billion) together total $1.9 trillion — 28% of all federal spending, a bigger share than Social Security itself. An aging population plus rising health-care costs per person make this the most structurally relentless part of the budget: enrollment grows and each enrollee costs more every year.',
      'Then there is the newcomer at the top: net interest. At $1.02 trillion through August, debt service now exceeds defense by about $141 billion — a crossover that first happened in fiscal 2025 and widened in 2026. Interest is unique among the big three because it funds nothing: no retirees, no patients, no soldiers. It is the bill for past borrowing, and it arrives on its own schedule. Read the full story: /blog/us-debt-interest-vs-defense-spending.',
    ],
    bullets: [
      'Social Security: $1.53T (22.4%) — the single largest budget item',
      'Health (Medicare + Health Programs): $1.9T (28.0%) — the largest combined area',
      'Net interest: $1.02T (14.9%) — now larger than defense, the fastest-growing major category',
      'Together: $4.45T of $6.81T — nearly two-thirds of the budget',
    ],
  },
  {
    id: 'mandatory-vs-discretionary',
    heading: 'Mandatory vs. Discretionary: The Budget Is on Autopilot',
    paragraphs: [
      'Here is the fact that changes how you see the whole budget: only about one dollar in four is discretionary — voted on by Congress each year. The rest runs on autopilot. In the CBO\'s February 2026 baseline, full-year fiscal 2026 outlays break down as $4.53 trillion mandatory (about 61%), $1.88 trillion discretionary (about 25%), and $1.04 trillion in net interest (about 14%). Mandatory spending plus interest — the part nobody votes on annually — is roughly three-quarters of the budget.',
      'That is a historic inversion. The Brookings Budget Chartbook 2026 shows that in 1965, mandatory spending was about a third of the budget while defense alone was 43% and domestic discretionary programs 12%. Six decades later, the shares have flipped: autopilot spending squeezed the part of the budget Congress actively controls.',
      'What does that shrunken discretionary quarter actually fund? Defense is roughly half of it — the $876 billion defense budget lives inside that $1.88 trillion. The other half covers everything else the government visibly does: the FBI and federal courts, NASA and medical research ($36 billion), highways and airports ($126 billion), the EPA, diplomacy, disaster relief, and national parks. When people imagine "cutting government spending," they are usually imagining cuts to this quarter of the budget — the only part a single appropriations vote can touch.',
    ],
    chart: {
      title: 'How the FY2026 Budget Splits: Mandatory, Discretionary, Interest ($B)',
      caption:
        'Congressional Budget Office, "The Budget and Economic Outlook: 2026 to 2036 — By the Numbers," February 2026 baseline. Full-year FY2026 projections (not FYTD actuals). Interest is shown separately though it is technically mandatory.',
      type: 'bar',
      unit: '$B',
      data: [
        { label: 'Mandatory', value: 4529 },
        { label: 'Discretionary', value: 1880 },
        { label: 'Net Interest', value: 1039 },
      ],
    },
  },
  {
    id: 'the-shift',
    heading: 'How the Budget\'s Center of Gravity Moved Since 2018',
    paragraphs: [
      'The budget did not just grow — it changed shape. Total outlays climbed from $4.11 trillion in fiscal 2018 to $7.01 trillion in fiscal 2025, spiked by pandemic spending in 2020–2021, and settled onto a higher plateau. Fiscal 2026 is on track for about $7.4 trillion for the full year. But the more revealing story is in the shares.',
      'Net interest nearly doubled its share of the budget in eight years — from 7.9% in fiscal 2018 to 14.9% in fiscal 2026 — while defense\'s share fell from 16.2% to 12.9% even though defense dollars kept rising. Social Security\'s share actually eased slightly, from 24.1% to 22.4%, despite growing $538 billion in dollar terms: everything else, especially interest, grew faster. Medicare held almost exactly steady at about 14.3–14.4%.',
      'The lesson: the budget\'s growth over the past decade has been driven overwhelmingly by the autopilot categories. Defense grew in dollars but shrank in importance; interest tripled in dollars and doubled in share. Whatever the next decade brings, the trajectory is set by demography, debt, and interest rates — not by annual appropriations battles.',
    ],
    chart: {
      title: 'Share of the Budget: FY2018 vs. FY2026 FYTD (%)',
      caption:
        'U.S. Treasury Monthly Treasury Statement, Table 9. FY2018 is the September final; FY2026 is fiscal year-to-date through August 31, 2026. Interest nearly doubled its share; defense\'s share fell even as its dollars rose.',
      type: 'bar',
      unit: '%',
      data: [
        { label: 'Social Security', value: 24.1 },
        { label: 'Net Interest', value: 7.9 },
        { label: 'Medicare', value: 14.3 },
        { label: 'Defense', value: 16.2 },
      ],
      series2Label: 'FY2026 FYTD',
      series2Data: [
        { label: 'Social Security', value: 22.4 },
        { label: 'Net Interest', value: 14.9 },
        { label: 'Medicare', value: 14.4 },
        { label: 'Defense', value: 12.9 },
      ],
    },
  },
  {
    id: 'where-the-money-comes-from',
    heading: 'Where the Money Comes From — and the $1.97 Trillion Gap',
    paragraphs: [
      'The other half of the picture is revenue. Through August, the government collected $4.85 trillion — about $1.97 trillion less than it spent. For the full fiscal year, CBO\'s final estimate (October 8, 2026) puts revenue at $5.4 trillion against $7.4 trillion in outlays: a $2.0 trillion deficit. Where does the money come from? Mostly from paychecks. Per OMB projections published in April 2026, individual income taxes are the largest source at about 35% of revenue, followed by payroll (Social Security and Medicare) taxes at about 25%. Corporate income taxes contribute about 5% — collections fell 16% in fiscal 2026 after the 2025 reconciliation bill expanded investment write-offs — with customs duties and fees at about 5%, a share that has grown sharply.',
      'The deficit itself deserves a plain reading. Revenues actually grew in fiscal 2026 — up about $169 billion, or 3% — but spending grew more than twice as fast, up $386 billion (6%). The three largest mandatory programs (Social Security, Medicare, Medicaid) added $217 billion; interest added $115 billion (11%) to a full-year record of $1.1 trillion; defense added $48 billion (5%). As Bipartisan Policy Center analyst Shai Akabas told the Wall Street Journal, "Running $2 trillion deficits in a growing economy with low unemployment and no major emergency situation going on is an unsustainable trend."',
      'Deficits are not just a scorecard — they feed the machine. Every dollar of deficit adds to the national debt, and a larger debt at higher rates means a larger interest bill next year, which widens the deficit further. That self-reinforcing loop is exactly why interest went from a budget footnote to the second-largest spending line in less than a decade.',
    ],
    chart: {
      title: 'Total Federal Outlays, FY2018–FY2026 ($B)',
      caption:
        'U.S. Treasury Monthly Treasury Statement, Table 9. September finals for FY2018–FY2025; FY2026 is fiscal year-to-date through August 31, 2026 (a full year would be higher). The 2020–2021 pandemic spike lifted spending onto a permanently higher plateau.',
      type: 'line',
      unit: '$B',
      data: [
        { label: '2018', value: 4107.7 },
        { label: '2019', value: 4446.6 },
        { label: '2020', value: 6551.9 },
        { label: '2021', value: 6818.2 },
        { label: '2022', value: 6271.5 },
        { label: '2023', value: 6134.4 },
        { label: '2024', value: 6751.6 },
        { label: '2025', value: 7010.0 },
        { label: '2026*', value: 6811.0 },
      ],
    },
  },
  {
    id: 'why-it-matters',
    heading: 'Why This Breakdown Matters',
    paragraphs: [
      'Most budget debates are fought over the wrong quarter of the budget. Politicians argue about discretionary programs — the part Congress votes on — while the three-quarters that runs on autopilot quietly decides the trajectory. Social Security, health care, and interest are driven by formulas, demography, and debt, not by any single vote. Understanding the breakdown means understanding what can actually change and what cannot.',
      'It also reframes what "expensive" means. The $36 billion science, space, and technology budget sounds large until you learn it is half a percent of federal spending — twelve days of interest payments. Defense at $876 billion is the budget line most associated with bigness, yet it ranks fifth. And the fastest-growing line is the one that buys nothing: interest on money already spent.',
      'The budget is a statement of priorities written in dollars — mostly priorities set decades ago, compounding on autopilot. The numbers above will update as new Treasury data arrives; track any category on its page (/categories/social-security-spending, /categories/medicare-spending, /categories/defense-military, /categories/net-interest-spending), or see the whole picture at /spending-breakdown.',
    ],
    callout: {
      type: 'tip',
      text: 'Of every federal dollar spent in FY2026 so far: ~22¢ to Social Security, ~15¢ to interest, ~14¢ to Medicare, ~14¢ to Health Programs, ~13¢ to defense, ~6¢ to veterans, ~2¢ to infrastructure, ~1¢ each to education, agriculture, and science — and ~12¢ to everything else.',
    },
  },
];

export const data: ArticleData = {
  slug: 'where-does-us-federal-budget-go',
  title: 'Where Does the US Federal Budget Go? 2026 Breakdown',
  description:
    'Social Security, Medicare, defense, interest: where every dollar of the $6.81T FY2026 federal budget goes, with verified Treasury data.',
  keyword: 'where does the us federal budget go',
  category: 'Explainers',
  datePublished: '2026-10-09',
  dateModified: '2026-10-09',
  readingTime: estimateReadingTime(sections),
  quickTakeaways: [
    {
      label: 'The total',
      text: '$6.81T spent through August 31, 2026 — about $20.3B per day, or ~$235,000 every second.',
    },
    {
      label: 'The top three',
      text: 'Social Security (22.4%), net interest (14.9%), and Medicare (14.4%) absorb 51% of the budget.',
    },
    {
      label: 'The autopilot',
      text: 'Only ~1 in 4 dollars is discretionary; mandatory programs plus interest are ~75% of spending.',
    },
    {
      label: 'The gap',
      text: '$4.85T in revenue vs. $6.81T in spending — a $1.97T deficit through August.',
    },
  ],
  sections,
  faqs: [
    {
      question: 'What is the largest expense in the US federal budget?',
      answer:
        'Social Security, at $1.53 trillion through August 2026 — 22.4% of all federal spending. It has been the single largest budget item for decades, paying monthly benefits to retirees, survivors, and people with disabilities.',
    },
    {
      question: 'How much of the federal budget goes to defense?',
      answer:
        'About $876 billion through August 2026, or 12.9% of outlays — the fifth-largest category. Defense spending has grown in dollars but shrunk as a share of the budget, and net interest on the debt has exceeded it since fiscal 2025.',
    },
    {
      question: 'What percentage of the federal budget is mandatory spending?',
      answer:
        'About 61% of FY2026 outlays are mandatory (Social Security, Medicare, Medicaid and other programs that run automatically), with another ~14% going to net interest — so roughly three-quarters of the budget is on autopilot. Only about 25% is discretionary spending Congress votes on each year.',
    },
    {
      question: 'Where does the federal government get its money?',
      answer:
        'Mostly from paychecks. Individual income taxes supply about 35% of revenue and payroll taxes about 25%. Corporate income taxes contribute about 5%, with customs duties and fees at about 5%. In FY2026, $5.4 trillion in revenue covered only about three-quarters of $7.4 trillion in spending.',
    },
    {
      question: 'What is the difference between the deficit and the national debt?',
      answer:
        'The deficit is the annual gap between spending and revenue — about $2.0 trillion for fiscal 2026. The debt is the accumulated total of all past deficits. Net interest ($1.02 trillion) is the cost of carrying that debt, and it is now one of the largest budget items precisely because past deficits compounded.',
    },
    {
      question: 'Is federal spending still growing?',
      answer:
        'Yes, in dollars: outlays rose from $4.11 trillion in FY2018 to $7.01 trillion in FY2025, and FY2026 is on track for about $7.4 trillion. The growth is driven overwhelmingly by mandatory programs and net interest, which nearly doubled its budget share since 2018.',
    },
  ],
  sources: [
    {
      name: 'U.S. Department of the Treasury — Monthly Treasury Statement, August 2026',
      url: 'https://fiscaldata.treasury.gov/static-data/published-reports/mts/MonthlyTreasuryStatement_202508.pdf',
    },
    {
      name: 'Congressional Budget Office — The Budget and Economic Outlook: 2026 to 2036, By the Numbers',
      url: 'https://www.cbo.gov/system/files/2026-02/61882-By-the-Numbers.pdf',
    },
    {
      name: 'The Fiscal Times — "Deficit Rose to $2 Trillion for 2026 Fiscal Year: CBO"',
      url: 'https://www.thefiscaltimes.com:443/2026/10/08/Deficit-Rose-2-Trillion-2026-Fiscal-Year-CBO',
    },
    {
      name: 'Brookings Institution — Budget Chartbook 2026',
      url: 'https://www.brookings.edu/wp-content/uploads/2026/04/BudgetChartBook-2026.pdf',
    },
  ],
  relatedSlugs: ['us-debt-interest-vs-defense-spending'],
};
