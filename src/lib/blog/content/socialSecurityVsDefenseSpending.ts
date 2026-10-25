import type { ArticleData } from '../types';
import { estimateReadingTime } from '../types';

const sections: ArticleData['sections'] = [
  {
    id: 'the-answer',
    heading: 'Social Security vs. Defense Spending: The Answer',
    paragraphs: [
      'Social Security costs about 1.7 times as much as national defense — the largest gap between any two programs in the federal budget. Through August 31, 2026, the first eleven months of fiscal year 2026, Social Security outlays totaled $1,525.9 billion, while national defense outlays totaled $876.2 billion. The gap between them is $649.7 billion: the difference alone is larger than the entire annual budget of veterans benefits, infrastructure, or science, and nearly as large as the whole defense budget itself.',
      'As shares of everything the government spent, Social Security is 22.4% of all federal outlays — the single largest budget item — while defense is 12.9%, ranking fifth behind net interest and Medicare as well. Put it in daily terms: Social Security pays out about $4.55 billion every day, while the Pentagon spends about $2.62 billion. One day of Social Security checks equals roughly a day and three-quarters of defense spending. See the full budget picture: /blog/where-does-us-federal-budget-go.',
      'Both figures come from the U.S. Treasury Monthly Treasury Statement, Table 9 — the same source behind every number on this site. And the story did not change when the fiscal year closed: the final September 2026 statement put full-year Social Security at $1,667.1 billion (22.5% of the $7.396 trillion total) and defense at $965.2 billion (13.0%). The full-year ratio is 1.73 — almost identical to the year-to-date figure, which means this is a structural fact about the budget, not a quirk of the calendar.',
    ],
    chart: {
      title: 'The Biggest Budget Items, FY2026 FYTD ($B)',
      caption:
        'U.S. Treasury Monthly Treasury Statement, Table 9, through August 31, 2026, via this site\'s data. Social Security leads by $509 billion over the next-largest item; defense ranks fifth.',
      type: 'bar',
      unit: '$B',
      data: [
        { label: 'Social Security', value: 1525.9 },
        { label: 'Net Interest', value: 1017.0 },
        { label: 'Medicare', value: 979.3 },
        { label: 'Health', value: 925.7 },
        { label: 'Defense', value: 876.2 },
        { label: 'Veterans', value: 395.6 },
      ],
    },
    callout: {
      type: 'info',
      text: 'Dig into each side separately on their category pages: /categories/social-security-spending and /categories/defense-military.',
    },
  },
  {
    id: 'why-social-security-is-bigger',
    heading: 'Why Social Security Is So Much Bigger: It Pays Tens of Millions of People',
    paragraphs: [
      'The size gap has a simple cause: Social Security is a cash-benefit program that pays monthly checks to retirees, disabled workers, and survivors, while defense buys a military. Every dollar of Social Security goes, in the end, to a person\'s bank account — retirement benefits for former workers, disability insurance for workers who can no longer work, and survivor benefits for the families of deceased workers. The program\'s scale is the scale of the American retired population, and that population keeps growing as the baby-boom generation retires.',
      'That growth is visible in the year-over-year numbers. Full-year fiscal 2026 Social Security spending rose $86 billion, or 5%, over fiscal 2025, driven by the 2.8% cost-of-living adjustment for 2026 and an increase in the number of beneficiaries, according to the American Action Forum\'s analysis of the Treasury data. Defense, for comparison, rose $49 billion, or 5%, on higher military personnel and research spending. Both grew at the same percentage rate — but 5% of a $1.6 trillion program is nearly twice as many dollars as 5% of a $900 billion one, so the gap widened by about $37 billion in a single year.',
      'The funding machinery is just as different as the purpose. Social Security is financed mainly by a 12.4% payroll tax on wages, split between workers and employers, up to a yearly wage cap ($184,500 in 2026). It is mandatory spending: the checks go out because the law says who qualifies and how much they get, not because Congress votes on it each year. Defense is the opposite — discretionary spending, debated and voted on annually through the National Defense Authorization Act and the defense appropriations bill. Read how the two budget types work: /blog/what-is-mandatory-vs-discretionary-spending.',
    ],
  },
  {
    id: 'the-trend',
    heading: 'The Trend: A Gap That Doubled in Eight Years',
    paragraphs: [
      'The gap has not always been this wide. In fiscal 2018, Social Security outlays were $987.9 billion and defense outlays were $664.7 billion — a gap of $323.2 billion. By fiscal 2024, Social Security had reached $1,460.9 billion against defense\'s $874.1 billion, a gap of $586.8 billion. Through August 2026, the gap is $649.7 billion. In eight years, the distance between the two programs roughly doubled.',
      'The two lines grew at very different speeds. Social Security grew 54.5% from 2018 to the 2026 year-to-date figure; defense grew 31.8%. The reason is demographics, not policy generosity: every year, more Americans reach retirement age and claim benefits, and each year\'s benefits are adjusted for inflation. Defense spending, meanwhile, grows when Congress decides to grow it — through pay raises, operations costs, and modernization programs — and it can also be held flat by a single appropriations decision.',
      'That asymmetry is the most important thing to understand about the comparison. Defense spending is a choice Congress revisits every year; Social Security spending is, in the short run, arithmetic. The number of retirees, their earnings histories, and the inflation adjustment determine the total, and no annual vote changes it. A president and Congress can freeze the defense budget in an afternoon. Freezing Social Security would require rewriting the benefit formula itself — a political fight of a different order entirely.',
    ],
    chart: {
      title: 'Social Security vs. Defense Outlays, FY2018–FY2026 ($B)',
      caption:
        'U.S. Treasury Monthly Treasury Statement, Table 9, via this site\'s data. FY2018–FY2024 are full-year actuals; FY2026 is year-to-date through August 31, 2026. The gap widened from $323B in 2018 to $650B in 2026.',
      type: 'line',
      unit: '$B',
      data: [
        { label: 'FY2018', value: 987.9 },
        { label: 'FY2020', value: 1095.9 },
        { label: 'FY2022', value: 1218.7 },
        { label: 'FY2024', value: 1460.9 },
        { label: 'FY2026*', value: 1525.9 },
      ],
      series2Label: 'Defense',
      series2Data: [
        { label: 'FY2018', value: 664.7 },
        { label: 'FY2020', value: 726.2 },
        { label: 'FY2022', value: 766.6 },
        { label: 'FY2024', value: 874.1 },
        { label: 'FY2026*', value: 876.2 },
      ],
    },
  },
  {
    id: 'apples-to-oranges',
    heading: 'Apples to Oranges: What Each Dollar Actually Buys',
    paragraphs: [
      'The honest comparison is narrower than the headline ratio suggests, because the two budgets buy entirely different things through entirely different machinery. Defense spending buys people, operations, and hardware: for fiscal 2026, Congress authorized $900.6 billion in the compromise National Defense Authorization Act, including roughly $291 billion for operations and maintenance, $234 billion for military personnel and healthcare, $162 billion for procurement, and $146 billion for research and testing. It is the world\'s largest military budget, and it is also a uniquely federal responsibility — no state maintains an army, a navy, or a nuclear arsenal.',
      'Social Security buys nothing at all in that sense. It transfers income: from today\'s workers, through the payroll tax, to today\'s retirees and other beneficiaries. There is no procurement, no inventory, no research program — just a formula that converts a worker\'s 35 highest-earning years into a monthly check, adjusted annually for inflation. That is why the two numbers sit in different universes: one is the cost of an institution, the other is the cost of a promise made to tens of millions of people.',
      'Scale works both ways. Defense is about 3% of GDP — down from Cold War levels — and its advocates note that the U.S. underwrites global security for allies who spend far less. Social Security is about 5% of GDP and rising with the age structure of the population; its advocates note that it is the single largest source of income for most retirees, and that cutting it means cutting checks people planned their retirements around. The 1.7-to-1 ratio is real, but it measures a benefits program against an institution, not two versions of the same thing. For the other big matchup in this series, see defense vs. interest: /blog/us-debt-interest-vs-defense-spending.',
    ],
  },
  {
    id: 'the-trust-fund-clock',
    heading: 'The Trust-Fund Clock: The One Deadline Defense Does Not Have',
    paragraphs: [
      'There is one more difference, and it is the one that makes this comparison genuinely urgent: Social Security has a deadline, and defense does not. The program\'s reserves are held in special-issue Treasury securities, and under the 2026 Trustees Report, the Old-Age and Survivors Insurance (OASI) Trust Fund — the fund that pays retirement and survivor benefits — is projected to be able to pay 100% of scheduled benefits only until the fourth quarter of 2032, one quarter earlier than projected last year. After that, continuing payroll tax income would cover about 78% of scheduled benefits: an automatic, across-the-board cut of roughly 22% if Congress has not acted.',
      'The combined picture is only slightly more comfortable. If the retirement fund and the Disability Insurance fund were counted together — something that would require a change in the law, since the funds are legally separate — the combined reserves would last until the third quarter of 2034, with about 83% of scheduled benefits payable after that. The disability fund on its own is projected to pay full benefits through the entire 75-year projection period. The long-run shortfall, measured over 75 years, widened to 4.42% of taxable payroll in the 2026 report, up from 3.82% a year earlier, driven by lower assumed fertility, lower immigration, and the 2025 tax law\'s deduction for seniors.',
      'The demographic math behind the clock is stark: the number of covered workers per beneficiary fell from 3.2–3.4 in the 1974–2008 period to about 2.6 in 2025, and is projected to reach 2.3 by 2040. Fewer workers supporting each retiree is precisely why Social Security outpaces defense year after year — and why the trust-fund deadline, unlike the defense budget, cannot be postponed by an appropriations bill. Defense has no equivalent cliff: its budget is re-decided every year, for better or worse.',
    ],
    callout: {
      type: 'warning',
      text: 'Depletion does not mean Social Security "goes bankrupt" or stops paying. Payroll taxes keep flowing in every month; what ends is the ability to pay 100% of scheduled benefits.',
    },
  },
  {
    id: 'what-the-ratio-means',
    heading: 'What the 1.7-to-1 Ratio Actually Means',
    paragraphs: [
      'Strip out the caveats and the ratio tells a simple story: the federal government spends roughly $1.74 on Social Security for every $1 on national defense. Per person, that is about $4,460 a year in Social Security benefits for every American, versus about $2,560 for defense. The full-year fiscal 2026 finals confirm the picture rather than changing it: $1,667.1 billion against $965.2 billion, a $701.9 billion gap, with Social Security at 22.5% of all spending and defense at 13.0%.',
      'The gap is also the reason the two programs play such different roles in deficit debates. Because Social Security is mandatory and self-financed through the payroll tax, it is usually debated separately from the annual budget — through trust-fund reform proposals like raising the payroll tax cap, adjusting the benefit formula, or raising the retirement age. Defense is debated inside the annual budget, where it competes with everything from the FBI to NASA to highways for a share of the discretionary quarter of spending. One debate is about a promise; the other is about a purchase.',
      'None of this settles whether the ratio is right. Defense advocates argue the U.S. spends too little for the world it polices; Social Security advocates argue benefits are already modest relative to what workers paid in. The ratio is a fact; what to do about it is a values question. What is not a fact is the idea that the two numbers come from the same pot — they barely do. One is funded by a dedicated tax and governed by a formula; the other is funded by general revenue and governed by an annual vote. Understanding that split is the whole point of the comparison.',
    ],
    callout: {
      type: 'tip',
      text: 'Compare this matchup with the others in the series: Medicare vs. Social Security, defense vs. education, and defense vs. interest — all linked from /blog.',
    },
  },
];

export const data: ArticleData = {
  slug: 'social-security-vs-defense-spending',
  title: 'Social Security vs. Defense Spending: The 1.7x Gap',
  description:
    'Social Security vs. defense spending: $1,526B vs. $876B in FY2026 — Social Security costs 1.7x more. Real MTS data, the trend, and the trust-fund clock.',
  keyword: 'social security vs defense spending',
  category: 'Comparisons',
  datePublished: '2026-10-25',
  dateModified: '2026-10-25',
  readingTime: estimateReadingTime(sections),
  quickTakeaways: [
    {
      label: 'The ratio',
      text: 'Social Security outlays are $1,525.9B vs. defense\u2019s $876.2B through Aug 2026 — about 1.7 times more, a $649.7B gap.',
    },
    {
      label: 'The shares',
      text: 'Social Security is 22.4% of all federal spending, the largest single item; defense is 12.9%, ranking fifth.',
    },
    {
      label: 'The trend',
      text: 'The gap doubled in eight years, from $323B in 2018 to $650B in 2026 — Social Security grew 54.5%, defense 31.8%.',
    },
    {
      label: 'The deadline',
      text: 'The 2026 Trustees Report: the retirement trust fund pays full benefits only until late 2032, then about 78% — defense has no such cliff.',
    },
  ],
  sections,
  faqs: [
    {
      question: 'How much does the US spend on Social Security vs. defense?',
      answer:
        'Through August 31, 2026, Social Security outlays totaled $1,525.9 billion — 22.4% of all federal spending — while national defense outlays totaled $876.2 billion, or 12.9%. Social Security costs about 1.7 times as much as defense, a gap of $649.7 billion. Full-year fiscal 2026 finals tell the same story: $1,667.1 billion vs. $965.2 billion.',
    },
    {
      question: 'Why is Social Security spending so much larger than defense spending?',
      answer:
        'Because Social Security pays monthly cash benefits to tens of millions of retirees, disabled workers, and survivors, while defense funds a military. The program\'s size tracks the retired population, which grows every year as more Americans reach retirement age. Defense, by contrast, is set by an annual congressional decision — the fiscal 2026 authorization was $900.6 billion — and it is a uniquely federal institution no state duplicates.',
    },
    {
      question: 'Is Social Security mandatory or discretionary spending?',
      answer:
        'Mandatory. Social Security benefits are set by eligibility rules and a benefit formula in law, not by an annual vote, and the program is financed mainly by a 12.4% payroll tax on wages up to a yearly cap ($184,500 in 2026). Defense is discretionary: Congress debates and votes on it every year through the National Defense Authorization Act and appropriations bills.',
    },
    {
      question: 'Will Social Security run out of money in 2032?',
      answer:
        'No — it will not stop paying. Under the 2026 Trustees Report, the Old-Age and Survivors Insurance Trust Fund is projected to be able to pay 100% of scheduled benefits until the fourth quarter of 2032; after that, continuing payroll tax income would cover about 78% of scheduled benefits, an automatic cut of roughly 22% if Congress has not acted. Counted together with the disability fund, reserves would last until the third quarter of 2034, with about 83% payable.',
    },
    {
      question: 'Is defense the biggest item in the federal budget?',
      answer:
        'No — it ranks fifth. Social Security ($1,525.9B), net interest ($1,017.0B), Medicare ($979.3B), and health programs including Medicaid ($925.7B) are all larger through August 2026. Notably, net interest payments surpassed defense spending in fiscal 2024 for the first time, and the gap has widened since.',
    },
    {
      question: 'How fast is the Social Security-defense gap growing?',
      answer:
        'Quickly. The gap was $323.2 billion in fiscal 2018, $586.8 billion in fiscal 2024, and $649.7 billion through August 2026 — roughly doubling in eight years. Social Security grew 54.5% over that period against defense\'s 31.8%, driven by demographics: covered workers per beneficiary fell from 3.2–3.4 in 1974–2008 to about 2.6 in 2025.',
    },
  ],
  sources: [
    {
      name: 'U.S. Department of the Treasury — Monthly Treasury Statement (Fiscal Data)',
      url: 'https://fiscaldata.treasury.gov/',
    },
    {
      name: 'Social Security Administration — 2026 Trustees Report Summary',
      url: 'https://www.ssa.gov/oact/trsum/',
    },
    {
      name: 'American Action Forum — U.S. Treasury: FY 2026 Deficit Totaled $2 Trillion',
      url: 'https://www.americanactionforum.org/insight/u-s-treasury-fy-2026-deficit-totaled-2-trillion/',
    },
    {
      name: 'The Fiscal Times — US Records Third-Highest Budget Deficit in History',
      url: 'https://www.thefiscaltimes.com/2026/10/16/US-Records-Third-Highest-Budget-Deficit-History',
    },
  ],
  relatedSlugs: [
    'medicare-vs-social-security-spending',
    'us-debt-interest-vs-defense-spending',
    'what-is-mandatory-vs-discretionary-spending',
  ],
};
