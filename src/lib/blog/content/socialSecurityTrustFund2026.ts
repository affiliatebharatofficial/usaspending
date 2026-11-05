import type { ArticleData } from '../types';
import { estimateReadingTime } from '../types';

const sections: ArticleData['sections'] = [
  {
    id: 'the-1-67-trillion-year',
    heading: 'Social Security Spending 2026: The $1.67 Trillion Year',
    paragraphs: [
      'Social Security spent $1,667.1 billion in fiscal year 2026 — the largest single line in the federal budget, and the largest annual total the program has ever recorded. That is 22.5 cents of every dollar the federal government spent, out of a $7,395.8 billion total, according to the final September 2026 Monthly Treasury Statement (MTS), Table 9, the source behind every number on this site. Put it in daily terms: about $4.57 billion went out every single day of the year, or roughly $52,900 every second, to retirees, disabled workers, and survivors.',
      'The scale is hard to grasp until it is set against the rest of the budget. Social Security alone cost 1.7 times as much as national defense ($965.2 billion), 1.6 times as much as net interest on the debt ($1,051.8 billion), and 1.6 times as much as Medicare ($1,072.6 billion). It is bigger than defense and veterans benefits combined, and bigger than the entire federal government was in 2018 — when total federal spending was $4,107.7 billion, Social Security alone now accounts for more than 40% of that whole budget. See the full budget picture: /blog/where-does-us-federal-budget-go.',
      'The year also marked a turning point in how the program is talked about. For decades, Social Security was described as a program with a distant funding problem. The 2026 Trustees Report, released in June 2026, moved that problem into the near term: the retirement trust fund is now projected to be able to pay full scheduled benefits only until the fourth quarter of 2032. Fiscal 2026 is therefore best understood as two stories at once — a record year of benefits paid, and the year the countdown to the trust fund deadline dropped below six years.',
    ],
    chart: {
      title: 'The Biggest Budget Items, FY2026 Final ($B)',
      caption:
        'U.S. Treasury Monthly Treasury Statement, Table 9, September 2026 finals, via this site\'s data. Social Security leads the next-largest item, Medicare, by $594.5 billion.',
      type: 'bar',
      unit: '$B',
      data: [
        { label: 'Social Security', value: 1667.1 },
        { label: 'Medicare', value: 1072.6 },
        { label: 'Net Interest', value: 1051.8 },
        { label: 'Medicaid', value: 1025.6 },
        { label: 'Defense', value: 965.2 },
        { label: 'Veterans', value: 416.2 },
      ],
    },
    callout: {
      type: 'info',
      text: 'Explore the program in detail on its category page: /categories/social-security-spending.',
    },
  },
  {
    id: 'how-the-trust-funds-work',
    heading: 'How the Trust Funds Actually Work',
    paragraphs: [
      'Social Security is not one fund but two, and the distinction matters for everything that follows. The Old-Age and Survivors Insurance (OASI) Trust Fund pays retirement and survivor benefits; the much smaller Disability Insurance (DI) Trust Fund pays disabled workers and their families. Together they are known as OASDI. The funds are legally separate: money cannot move between them without an act of Congress, which is why the trustees report two depletion dates rather than one.',
      'The funding mechanism is a payroll tax of 12.4% on wages — split evenly between workers and employers — up to a taxable maximum of $184,500 in 2026. When payroll tax revenue exceeded benefit payments, as it did for decades, the surplus was credited to the trust funds in the form of special-issue Treasury securities: essentially, IOUs from the Treasury to Social Security, earning interest. At the end of 2025, the combined trust funds held about $2.56 trillion in those securities. That sounds enormous, and it is — but it covers only about eighteen months of benefit payments at the fiscal 2026 pace.',
      'Since 2021, the OASI fund has been running in the other direction: benefit payments exceed payroll tax and other income, so the fund redeems its Treasury securities to make up the difference, and its reserves shrink each year. That drawdown is the mechanical reason a depletion date exists at all. The trust funds are not a savings account the government raided; they are a buffer that was designed to absorb exactly this demographic bulge, and the buffer is now draining on schedule — faster, in the latest projections, than previously expected.',
    ],
    bullets: [
      'OASI Trust Fund: retirement and survivor benefits — the fund with the 2032 deadline.',
      'DI Trust Fund: disability benefits — projected to pay full benefits through the entire 75-year projection window.',
      'Combined OASDI: a hypothetical measure only — the two funds cannot legally be combined without Congress acting.',
      'Reserves: about $2.56 trillion in Treasury securities at the end of 2025, against $1,667.1 billion in annual outlays.',
    ],
  },
  {
    id: 'the-growth-story',
    heading: 'The Growth Story: From $988 Billion to $1.67 Trillion in Eight Years',
    paragraphs: [
      'Social Security spending has grown by $679 billion since fiscal 2018 — a 68.7% increase in eight years. The path was steady, not sudden: $988.0 billion in 2018, $1,095.9 billion in 2020, $1,218.7 billion in 2022, $1,460.9 billion in 2024, and $1,667.1 billion in 2026, all from MTS Table 9 actuals in this site\'s data. The two biggest jumps came in the last two years of that run, as the baby-boom generation\'s retirement wave collided with high inflation adjustments.',
      'Two forces drive the growth, and neither is a policy decision made in the year the money goes out. The first is demographics: every year, more Americans reach retirement age and claim benefits, while the workforce paying for them grows more slowly. The second is the annual cost-of-living adjustment (COLA), which raises every beneficiary\'s check with inflation — 2.8% in January 2026. Add more beneficiaries and a bigger check per beneficiary, and the total rises even in a year when Congress changes nothing at all. For comparison with the other giant mandatory program, see /blog/medicare-vs-social-security-spending.',
      'That arithmetic also explains why Social Security keeps pulling away from the rest of the budget. Defense spending grows when Congress votes to grow it; Social Security spending grows because the population ages and prices rise. Over the same eight years, defense grew from $664.7 billion to $965.2 billion (45.2%) — fast, but far slower than Social Security\'s 68.7%. The gap between the two programs widened from $323.2 billion in 2018 to $701.9 billion in 2026. See the head-to-head: /blog/social-security-vs-defense-spending.',
    ],
    chart: {
      title: 'Social Security Outlays, FY2018–FY2026 ($B)',
      caption:
        'U.S. Treasury Monthly Treasury Statement, Table 9, via this site\'s data. Full-year actuals; growth of 68.7% over eight years, driven by retirements and inflation adjustments.',
      type: 'line',
      unit: '$B',
      data: [
        { label: 'FY2018', value: 988.0 },
        { label: 'FY2020', value: 1095.9 },
        { label: 'FY2022', value: 1218.7 },
        { label: 'FY2024', value: 1460.9 },
        { label: 'FY2026', value: 1667.1 },
      ],
    },
  },
  {
    id: 'the-2032-clock',
    heading: 'The 2032 Clock: What the 2026 Trustees Report Actually Says',
    paragraphs: [
      'The headline of the 2026 Trustees Report is precise, and it is worth quoting exactly rather than paraphrasing loosely: the OASI Trust Fund will be able to pay 100% of total scheduled benefits until the fourth quarter of 2032, one quarter earlier than projected in the 2025 report. At that point, the fund\'s reserves will be depleted and continuing program income — payroll taxes plus taxation of benefits — will be sufficient to pay 78% of total scheduled benefits. That is an automatic, across-the-board cut of about 22% if Congress has not acted by then.',
      'Three changes drove the date earlier. First, the trustees lowered their long-run fertility assumption from 1.9 children per woman to 1.75, aligning with the Congressional Budget Office and Census Bureau — fewer future workers per retiree. Second, they sharply reduced projected immigration, particularly of temporary or unlawfully present immigrants in the near term. Third, the One Big Beautiful Bill Act, enacted July 4, 2025, reduced future revenue from income taxes on Social Security benefits, because its provisions lower tax liability for beneficiaries. Together, these revisions pushed the 75-year shortfall to about $30.3 trillion, up from $26.1 trillion a year earlier, and the actuarial deficit to 4.42% of taxable payroll.',
      'The combined picture is only slightly more comfortable. Counting the OASI and DI funds together — which, again, requires a change in law — reserves would last until the third quarter of 2034, with about 83% of scheduled benefits payable after that. The DI fund alone is projected to remain solvent through 2100. And the most important clarification: depletion is not bankruptcy. Payroll taxes keep arriving every month, so checks keep going out; what ends is the ability to pay 100% of the scheduled amount. Anyone claiming Social Security "runs out of money" in 2032 is misreading the report.',
    ],
    callout: {
      type: 'warning',
      text: 'Depletion does not mean benefits stop. After late 2032, continuing income would still cover about 78% of scheduled OASI benefits — a painful 22% cut, not a shutdown.',
    },
  },
  {
    id: 'who-gets-the-money',
    heading: 'Who Gets the Money: 71 Million Beneficiaries',
    paragraphs: [
      'Behind the $1.67 trillion are people, and the September 2026 snapshot from the Social Security Administration puts a scale on them: 71.6 million beneficiaries in total. Retired workers dominate — 55.1 million of them, receiving an average of $2,089 a month. The overall average across all beneficiaries was $1,943 a month in September 2026. Spouses, children, survivors, and disabled workers make up the rest, each with a different average shaped by their earnings history and benefit category.',
      'That average check is the reason the trust-fund math translates into real household pain. A 22% cut applied to a $2,089 monthly retirement benefit would mean about $460 less per month, or roughly $5,500 a year. For a two-beneficiary household, analyses of the trustees\' figures put the combined annual loss above $10,000. Social Security is the single largest source of income for most retirees, so a cut of that size is not an abstraction — it is rent, groceries, and medicine.',
      'The worker-to-beneficiary ratio explains why the pressure only grows. In 1960, there were five workers paying Social Security taxes per OASI beneficiary. By 2026, that ratio has fallen to 2.9-to-1, and the trustees project it will decline further to 2.2-to-1 by the 2070s. Life expectancy at 65 has risen more than 50% since 1940, so each retiree also collects for longer. Fewer workers, longer retirements, and a payroll tax rate unchanged at 12.4% for more than 40 years: that is the whole long-run story in one paragraph.',
    ],
    chart: {
      title: 'Workers per OASI Beneficiary, 1960–2070s (ratio)',
      caption:
        'Social Security Administration, 2026 Trustees Report analysis. The ratio falls from 5.0 in 1960 to 2.9 in 2026 and a projected 2.2 by the 2070s.',
      type: 'line',
      unit: 'workers',
      data: [
        { label: '1960', value: 5.0 },
        { label: '2026', value: 2.9 },
        { label: '2070s', value: 2.2 },
      ],
    },
  },
  {
    id: 'what-fixing-it-would-take',
    heading: 'What Fixing It Would Take — and Why Delay Costs More',
    paragraphs: [
      'The menu of fixes is well known because Congress has used versions of it before, most recently in the 1983 reforms that last put the program on a sustainable path. On the revenue side: raise the 12.4% payroll tax rate, raise or eliminate the $184,500 taxable earnings cap (in 1983, 90% of covered wages were taxed; today only about 83% are, because top incomes have grown faster than the cap), or broaden the tax base. On the benefit side: adjust the benefit formula, change the inflation index, or raise the full retirement age. A bipartisan commission package a decade ago showed a balanced mix of both sides could restore solvency while protecting the lowest-earning workers — the people for whom Social Security matters most.',
      'The actuarial deficit gives a sense of the size of the fix: 4.42% of taxable payroll over 75 years. Closing the gap immediately would require the equivalent of roughly a 4.42-percentage-point payroll tax increase, an equivalent benefit reduction, or a combination of the two. Spread across decades and shared between workers and beneficiaries, that is a manageable adjustment. Concentrated on the eve of depletion, it is not: the longer Congress waits, the larger and more abrupt the required change becomes, because fewer years of higher revenue or lower benefits remain to close the same gap.',
      'That is why the fiscal 2026 numbers matter beyond the record total. At $1,667.1 billion and 22.5% of all federal spending, Social Security is now too large for its financing to be an afterthought — and at a depletion date inside six years, it is too urgent for another decade of delay. The program does not need to be saved from collapse; it needs its parameters updated for a country with fewer workers per retiree, longer retirements, and a tax base that no longer covers the share of earnings it did in 1983. The longer that update waits, the more of it lands on retirees rather than being shared. For how the deficit that surrounds this debate is measured, see /blog/federal-deficit-2026-how-big, and for how mandatory spending like this differs from the annual budget fights, see /blog/what-is-mandatory-vs-discretionary-spending.',
    ],
    callout: {
      type: 'tip',
      text: 'The honest summary: Social Security is not going bankrupt, it is not disappearing, and it is not self-fixing. It is a $1.67 trillion promise with a 2032 deadline for its funding formula.',
    },
  },
];

export const data: ArticleData = {
  slug: 'social-security-trust-fund-2026',
  title: 'Social Security Spending 2026: The $1.67 Trillion Year',
  description:
    'Social security spending 2026 hit $1,667.1B — 22.5% of the budget — while the 2026 Trustees Report puts OASI depletion in late 2032. Real MTS data.',
  keyword: 'social security spending 2026',
  category: 'Data Stories',
  datePublished: '2026-11-05',
  dateModified: '2026-11-05',
  readingTime: estimateReadingTime(sections),
  quickTakeaways: [
    {
      label: 'The record year',
      text: 'Social Security outlays hit $1,667.1B in FY2026 — 22.5% of all federal spending, about $4.57B per day.',
    },
    {
      label: 'The deadline',
      text: 'The 2026 Trustees Report: the OASI fund pays full benefits only until Q4 2032, then about 78% — a 22% cut if Congress does not act.',
    },
    {
      label: 'The growth',
      text: 'Spending rose 68.7% since FY2018 ($988.0B), driven by retirements and the 2.8% COLA for 2026 — not by a single policy change.',
    },
    {
      label: 'The people',
      text: '71.6 million beneficiaries in September 2026; retired workers averaged $2,089 a month, with only 2.9 workers per beneficiary.',
    },
  ],
  sections,
  faqs: [
    {
      question: 'How much did Social Security spend in 2026?',
      answer:
        'Social Security outlays totaled $1,667.1 billion in fiscal year 2026 (October 2025 through September 2026), according to the final September 2026 Monthly Treasury Statement. That is 22.5% of the $7,395.8 billion federal total — the largest single budget item — and works out to about $4.57 billion per day.',
    },
    {
      question: 'When will the Social Security trust fund run out?',
      answer:
        'Under the 2026 Trustees Report, the Old-Age and Survivors Insurance (OASI) Trust Fund will be able to pay 100% of scheduled benefits until the fourth quarter of 2032. After that, continuing payroll tax income would cover about 78% of scheduled benefits. Counting the disability fund together with it — which requires a change in law — reserves would last until the third quarter of 2034, with about 83% payable.',
    },
    {
      question: 'Does trust fund depletion mean Social Security goes bankrupt?',
      answer:
        'No. Depletion means the trust fund reserves are exhausted, not that the program stops. Payroll taxes keep flowing in every month, so benefits keep being paid — at about 78% of the scheduled amount for OASI benefits after late 2032, unless Congress acts first. The disability fund is separately projected to pay full benefits through the entire 75-year window.',
    },
    {
      question: 'Why is the depletion date earlier than previously projected?',
      answer:
        'Three main reasons in the 2026 Trustees Report: the long-run fertility assumption was lowered from 1.9 to 1.75 children per woman, projected immigration was reduced, and the One Big Beautiful Bill Act of 2025 reduced future revenue from income taxes on Social Security benefits. Together they pushed the 75-year shortfall to about $30.3 trillion, up from $26.1 trillion a year earlier.',
    },
    {
      question: 'How many people receive Social Security, and how much do they get?',
      answer:
        'In September 2026, 71.6 million people received Social Security benefits, averaging $1,943 a month overall. Retired workers — 55.1 million people — averaged $2,089 a month. The program is funded mainly by a 12.4% payroll tax on wages up to $184,500 in 2026, and there were 2.9 covered workers per OASI beneficiary in 2026, down from 5.0 in 1960.',
    },
    {
      question: 'What would it take to fix Social Security\'s finances?',
      answer:
        'The 75-year actuarial deficit is 4.42% of taxable payroll, so closing the gap immediately would require the equivalent of roughly a 4.42-percentage-point payroll tax increase, an equivalent benefit reduction, or a mix of both. Options include raising the tax rate, raising or eliminating the $184,500 earnings cap, adjusting the benefit formula, or raising the retirement age. Delay makes the fix larger and more abrupt.',
    },
  ],
  sources: [
    {
      name: 'Social Security Administration — Summary of the 2026 Trustees Reports',
      url: 'https://www.ssa.gov/oact/TRSUM/tr26summary.pdf',
    },
    {
      name: 'Bipartisan Policy Center — 2026 Social Security Trustees Report, Explained',
      url: 'https://bipartisanpolicy.org/explainer/2026-social-security-trustees-report-explained/',
    },
    {
      name: 'Social Security Administration — Monthly Statistical Snapshot, September 2026',
      url: 'https://www.ssa.gov/policy/docs/quickfacts/stat_snapshot/2026-09.pdf',
    },
    {
      name: 'Social Security Administration — Fact Sheet on the OASDI Program (June 2026)',
      url: 'https://www.ssa.gov/OACT/FACTS/fs2026_06.pdf',
    },
  ],
  relatedSlugs: [
    'medicare-vs-social-security-spending',
    'social-security-vs-defense-spending',
    'what-is-mandatory-vs-discretionary-spending',
    'federal-deficit-2026-how-big',
  ],
};
