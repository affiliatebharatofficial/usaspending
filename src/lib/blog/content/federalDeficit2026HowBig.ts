import type { ArticleData } from '../types';
import { estimateReadingTime } from '../types';

const sections: ArticleData['sections'] = [
  {
    id: 'the-2-trillion-answer',
    heading: 'The 2026 Federal Deficit in One Number: $1.993 Trillion',
    paragraphs: [
      'The United States ran a federal budget deficit of $1.993 trillion in fiscal year 2026, according to the Congressional Budget Office\'s year-end assessment released October 8, 2026. That is essentially $2 trillion — the largest annual shortfall since the pandemic spending of 2021, and $218 billion (about 12%) wider than the deficit recorded in fiscal 2025. In plain terms: the government spent $1.99 trillion more than it collected in the 12 months ending September 30, 2026.',
      'One important honesty note before the numbers: this is CBO\'s estimate, not the Treasury\'s official final. The September 2026 Monthly Treasury Statement — the official scoreboard — had not been published as of October 16, 2026, so CBO built its tally from the August 2026 Treasury statement plus September\'s daily Treasury reports. The Treasury\'s official final may differ by a few billion dollars either way, but it will not change the story: fiscal 2026 ended with roughly a $2 trillion deficit. Figures sourced from the Treasury\'s published statements below are marked as actuals; full-year totals are CBO estimates.',
      'To feel the scale, divide by the year: $1.993 trillion works out to about $5.5 billion of red ink per day, roughly $227 million per hour, and around $63,200 every second of fiscal 2026 — weekends and holidays included. That pace is what makes the number matter, because the deficit does not reset: every dollar of it becomes debt, and every dollar of debt carries an interest bill. The mechanics of that loop are laid out in /blog/deficit-vs-debt-vs-interest-explained.',
    ],
    callout: {
      type: 'info',
      text: 'Fiscal 2026 ran October 1, 2025 through September 30, 2026. Treasury actuals on this page cover through August 31, 2026; full-year totals are CBO estimates from the October 8, 2026 Monthly Budget Review, pending the official September Treasury statement.',
    },
  },
  {
    id: 'where-the-gap-came-from',
    heading: 'Why the Gap Widened: Spending Rose Twice as Fast as Revenue',
    paragraphs: [
      'The deficit did not widen because revenue collapsed — it widened because spending sprinted. Revenues actually grew $169 billion (3%) to $5.4 trillion in fiscal 2026. But outlays climbed $386 billion (6%) to $7.4 trillion, more than twice as fast. The entire $218 billion expansion of the deficit is the gap between those two growth rates.',
      'On the revenue side, the story is a split. Collections of individual income and payroll taxes rose by $255 billion (6%), reflecting rising wages and salaries — the tax base did its job. But corporate income tax receipts fell by $70 billion (16%), because the 2025 reconciliation act let companies take larger deductions for certain investments, offsetting the revenue growth that rising corporate income would otherwise have delivered. And customs duties, which include tariffs, fell by $22 billion (11%) — tariff collections grew early in the year but declined after May, when the administration began issuing roughly $130 billion in refunds tied to a February 2026 Supreme Court decision on tariffs imposed under the International Emergency Economic Powers Act.',
      'So the revenue engine produced $169 billion more than last year — but it needed to produce nearly $400 billion more just to stand still. It never had a chance.',
    ],
    chart: {
      title: 'FY2026 Full-Year Estimate: Outlays vs. Receipts ($B)',
      caption:
        'Congressional Budget Office, Monthly Budget Review: September 2026 (Oct 8, 2026), based on the August 2026 Treasury statement and September daily Treasury data. Official September Treasury finals not yet published.',
      type: 'bar',
      unit: '$B',
      data: [
        { label: 'Outlays', value: 7396.0 },
        { label: 'Receipts', value: 5403.0 },
        { label: 'Deficit', value: 1993.0 },
      ],
    },
  },
  {
    id: 'what-drove-spending',
    heading: 'What Drove the $386 Billion Spending Jump',
    paragraphs: [
      'Almost the entire increase came from the budget\'s autopilot programs — the ones that grow without annual votes in Congress. The three largest mandatory programs — Social Security, Medicare, and Medicaid — rose by a combined $217 billion (7%) in a single year. Social Security benefits climbed $86 billion (5%) on larger average benefits and more beneficiaries; Medicare outlays rose $77 billion (8%) on higher enrollment and payment rates; Medicaid grew $55 billion (8%) largely from rising costs per enrollee. Demography does not negotiate.',
      'The second engine was interest on the national debt: net interest rose $115 billion (11%) to a record $1.143 trillion for the year, because the debt was larger than in 2025 and the Treasury kept refinancing pandemic-era cheap bonds at higher rates. As covered in /blog/us-debt-interest-vs-defense-spending, interest now costs more than the entire defense budget. Defense itself rose $48 billion (5%) to about $916 billion, driven by research and development and military personnel costs. Veterans Affairs spending grew $39 billion (10%) as more veterans received benefits, and the Education Department recorded a $41 billion increase — an accounting swing in student-loan cost estimates rather than new spending programs.',
      'There were offsets on the other side. EPA spending fell $20 billion (53%) as a one-time 2024 clean-energy grant wave rolled off, the Commerce Department spent $15 billion less on semiconductor subsidies, pandemic-era employer tax credits dropped $13 billion as they wound down, and food assistance spending fell $11 billion (8%) as SNAP caseloads declined. Those savings totaled about $70 billion — barely a dent in the $386 billion increase.',
    ],
    chart: {
      title: 'Largest Year-over-Year Outlay Increases, FY2025→FY2026 ($B)',
      caption:
        'Congressional Budget Office, Monthly Budget Review: September 2026 (Oct 8, 2026). Full-year estimates; official September Treasury finals pending.',
      type: 'bar',
      unit: '$B',
      data: [
        { label: 'Net interest', value: 115.0 },
        { label: 'Social Security', value: 86.0 },
        { label: 'Medicare', value: 77.0 },
        { label: 'Medicaid', value: 55.0 },
        { label: 'Defense', value: 48.0 },
        { label: 'Education', value: 41.0 },
        { label: 'Veterans Affairs', value: 39.0 },
      ],
    },
    bullets: [
      'Mandatory benefits + interest = $332B of the $386B increase (86%) — the deficit is driven by autopilot, not annual appropriations',
      'Corporate tax cuts from the 2025 reconciliation act cost $70B in lost receipts; tariff refunds cost another $22B',
      'Every offsets-and-savings line the administration touted totaled under $70B — one-fifth of the spending increase',
    ],
  },
  {
    id: 'the-september-twist',
    heading: 'The September Twist: A $28 Billion Monthly Deficit',
    paragraphs: [
      'The year\'s final month almost masked the story. September is usually a surplus month, because quarterly tax payments land in Treasury coffers. But CBO estimates September 2026 instead ran a $28 billion deficit — compared with a $198 billion surplus in September 2025, a swing of $226 billion in a single month. Revenues were up $14 billion year over year, but outlays surged $240 billion (69%).',
      'Most of that surge is noise, not signal. September 1, 2025 fell on a holiday, which pushed some federal payments out of that month and into August — so September 2025\'s surplus was artificially inflated. Adjusted for that timing shift, the underlying surplus last September was closer to $110 billion, and the real year-over-year change in outlays was about $152 billion rather than $240 billion. Still a large jump — Education Department loan-cost accounting and tariff-related spending drove much of it — but a one-month blip, not the year\'s story.',
      'The cleaner measure is the full year: revenue up 3%, outlays up 6%, deficit up 12%. Months swing; the trend does not.',
    ],
  },
  {
    id: 'historical-context',
    heading: 'History: The Biggest Deficit Since 2021 — in a Healthy Economy',
    paragraphs: [
      'Treasury actuals put the recent deficit path in stark relief. Fiscal 2018 ran a $779 billion deficit; it grew to $984 billion in 2019. The pandemic then blew the record apart — $3.13 trillion in 2020 and $2.77 trillion in 2021. The shortfall receded to $1.38 trillion in 2022, but then, instead of continuing toward balance, it climbed again: $1.70 trillion in 2023, $1.83 trillion in 2024, $1.78 trillion in 2025, and now about $1.99 trillion in 2026.',
      'That history is why the 2026 number worries fiscal analysts even though it is smaller than the pandemic peaks. Deficits of this size used to require an emergency — a war, a recession, a pandemic. Fiscal 2026 had none of those: the economy was growing, unemployment was low, and there was no new crisis. As analysts at the Bipartisan Policy Center put it, running $2 trillion deficits in a growing economy with low unemployment and no major emergency is an unsustainable trend. The last balanced federal budget was fiscal 2001 — a quarter century ago.',
      'Measured against the size of the economy, the deficit equaled roughly 6.2% of GDP in fiscal 2026, up from about 5.8% the prior year — far above the roughly 3.8% average of the past 50 years. Deficit hawks at the Concord Coalition noted the companion milestone: debt held by the public now stands about as large as the entire economy, and net interest set a record at $1.1 trillion, consuming over 20% of every tax dollar collected. When one dollar in five of revenue goes to servicing old borrowing, the budget is funding the past more than the future.',
    ],
    chart: {
      title: 'Annual Federal Deficit, FY2018–FY2026 ($B)',
      caption:
        'U.S. Treasury Monthly Treasury Statement: outlays minus receipts. September finals for FY2018–FY2025; FY2026 is CBO\'s October 8, 2026 full-year estimate (official Treasury finals pending).',
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
        { label: '2026*', value: 1993.0 },
      ],
    },
  },
  {
    id: 'what-happens-next',
    heading: 'What Happens Next — and What to Watch',
    paragraphs: [
      'Two numbers will sharpen the picture in the coming weeks. First, the Treasury\'s official September 2026 Monthly Treasury Statement, which should confirm — or slightly adjust — CBO\'s $1.993 trillion estimate and lock in the official totals this site\'s data will use going forward. Watch for that release before treating any full-year breakdown as final. Second, the fiscal 2027 picture is already forming: Congress\'s own spending decisions and any further tariff or tax-policy changes will decide whether the deficit bends back down or keeps climbing.',
      'The structural forces, meanwhile, all point the same way. Social Security and Medicare grow with an aging population. Defense has restarted its post-pandemic climb. And interest is the fastest-growing line in the budget — CBO\'s long-term baseline projects net interest nearly doubling to about $2.1 trillion by 2036, with the total deficit reaching $3.1 trillion and publicly held debt climbing to 120% of GDP. None of that is a forecast of what will happen; it is what happens if policy does not change.',
      'For the fuller revenue-and-spending picture, see /spending-breakdown and compare any two programs head-to-head at /compare. The honest bottom line on fiscal 2026: the government collected a record $5.4 trillion, spent a record $7.4 trillion, and the $2 trillion gap between them is the widest the country has ever run outside a war, a recession, or a pandemic.',
    ],
    callout: {
      type: 'tip',
      text: 'Keep the two labels straight: CBO\'s $1.993 trillion is an estimate built from August Treasury actuals plus September daily data; the Treasury\'s official September finals had not been published as of October 16, 2026. This article will be updated against the official statement when it lands.',
    },
  },
];

const faqs: ArticleData['faqs'] = [
  {
    question: 'What is the 2026 federal deficit exactly?',
    answer:
      'The Congressional Budget Office estimates the fiscal 2026 deficit at $1.993 trillion — essentially $2 trillion — from about $7.396 trillion in outlays against $5.403 trillion in receipts. It is the largest deficit since 2021 and $218 billion wider than fiscal 2025\'s $1.775 trillion shortfall.',
  },
  {
    question: 'Is the $2 trillion deficit figure official yet?',
    answer:
      'Not quite. It is CBO\'s estimate from the October 8, 2026 Monthly Budget Review, built on the August 2026 Treasury statement plus September daily Treasury reports. The Treasury\'s official September 2026 Monthly Treasury Statement had not been published as of October 16, 2026; the final number may differ by a few billion dollars but will not change the roughly-$2-trillion story.',
  },
  {
    question: 'Why did the deficit grow in 2026 if the economy was doing well?',
    answer:
      'Spending grew twice as fast as revenue: outlays rose $386 billion (6%) while receipts rose only $169 billion (3%). The three big mandatory programs — Social Security, Medicare, Medicaid — grew $217 billion together, interest on the debt rose $115 billion, and corporate tax receipts fell $70 billion after the 2025 reconciliation act expanded investment write-offs. Growth in the economy did not produce growth in the budget balance.',
  },
  {
    question: 'How big is the 2026 deficit compared to the size of the economy?',
    answer:
      'Roughly 6.2% of GDP in fiscal 2026, up from about 5.8% the prior year. That is far above the roughly 3.8% average deficit-to-GDP ratio of the past 50 years, and it is a level normally seen only during recessions, wars, or pandemics — not during an expansion with low unemployment.',
  },
  {
    question: 'Is $2 trillion the biggest deficit in U.S. history?',
    answer:
      'No — fiscal 2020 holds the record at $3.13 trillion, followed by $2.77 trillion in 2021, both driven by pandemic emergency spending. Fiscal 2026\'s roughly $2 trillion is the largest deficit since 2021, and it is unusual because it occurred without a war, recession, or pandemic driving it.',
  },
  {
    question: 'Will the deficit keep growing?',
    answer:
      'CBO\'s long-term baseline projects the deficit reaching about $3.1 trillion by 2036 if policy does not change, driven by rising Social Security and Medicare costs and by net interest nearly doubling to roughly $2.1 trillion a year. Publicly held debt would climb to about 120% of GDP. That is a baseline scenario, not a forecast — Congress\'s tax and spending choices in the coming years will decide the actual path.',
  },
];

const sources: ArticleData['sources'] = [
  {
    name: 'CBO — Monthly Budget Review: September 2026 (Oct 8, 2026)',
    url: 'https://www.cbo.gov/system/files/2026-10/61985-MBR.pdf',
  },
  {
    name: 'The Fiscal Times — "Deficit Rose to $2 Trillion for 2026 Fiscal Year: CBO" (Oct 8, 2026)',
    url: 'https://www.thefiscaltimes.com:443/2026/10/08/Deficit-Rose-2-Trillion-2026-Fiscal-Year-CBO',
  },
  {
    name: 'CBO — The Budget and Economic Outlook: 2026 to 2036',
    url: 'https://web.archive.org/web/20260213145245/https://www.cbo.gov/publication/62105',
  },
  {
    name: 'Seoul Economic Daily — "U.S. Budget Deficit Nears $2 Trillion, Largest Since 2021" (Oct 9, 2026)',
    url: 'https://en.sedaily.com/international/2026/10/09/us-budget-deficit-nears-2-trillion-largest-since-2021',
  },
];

export const data: ArticleData = {
  slug: 'federal-deficit-2026-how-big',
  title: '2026 Federal Deficit: How Big Is It? ($2 Trillion)',
  description:
    'The 2026 federal deficit hit $1.993 trillion — the largest since 2021. CBO\'s year-end tally: what pushed outlays to $7.4T, and the historical context.',
  keyword: '2026 federal deficit',
  category: 'Data Stories',
  datePublished: '2026-10-16',
  dateModified: '2026-10-16',
  readingTime: estimateReadingTime(sections),
  quickTakeaways: [
    {
      label: 'The number',
      text: 'FY2026 deficit ≈ $1.993T (CBO estimate, Oct 8, 2026) — outlays $7.396T vs. receipts $5.403T; Treasury official finals still pending.',
    },
    {
      label: 'The change',
      text: '$218B wider than FY2025 (~12%): spending grew $386B (6%) while revenue grew only $169B (3%).',
    },
    {
      label: 'The drivers',
      text: 'Big-three mandatory programs +$217B, net interest +$115B, defense +$48B; corporate taxes −$70B and tariff refunds −$22B on the revenue side.',
    },
    {
      label: 'The context',
      text: 'Largest deficit since 2021 — run during a growing economy with low unemployment, at roughly 6.2% of GDP vs. a 3.8% 50-year average.',
    },
  ],
  sections,
  faqs,
  sources,
  relatedSlugs: [
    'us-debt-interest-vs-defense-spending',
    'deficit-vs-debt-vs-interest-explained',
    'where-does-us-federal-budget-go',
  ],
};
