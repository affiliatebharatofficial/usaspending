import type { ArticleData } from '../types';
import { estimateReadingTime } from '../types';

const sections: ArticleData['sections'] = [
  {
    id: 'the-answer',
    heading: 'Federal Interest Payments vs. Agency Budgets: The Answer',
    paragraphs: [
      'In fiscal 2026, the federal government spent more on interest payments than on the entire military — and more than on education, infrastructure, science, and food assistance combined. Through August 31, 2026, the first eleven months of the fiscal year, net interest payments on the national debt totaled $1,017.0 billion, according to the U.S. Treasury Monthly Treasury Statement, Table 9 — the same source behind every number on this site. That is 14.9% of everything the government spent in those eleven months, making interest the second-largest item in the budget, behind only Social Security.',
      'The comparison that stops people cold is defense. National defense outlays in the same period were $876.2 billion — $140.8 billion less than the interest bill. The government now pays more to its creditors than to its armed forces, a line interest crossed in fiscal 2024 and has widened every year since. Interest is also 1.04 times Medicare ($979.3 billion) and 1.10 times health programs including Medicaid ($925.7 billion). Only Social Security, at $1,525.9 billion, costs more.',
      'The gap widens dramatically against the rest of the budget. Interest payments are 2.6 times veterans benefits ($395.6 billion), 8.0 times infrastructure and transportation ($126.4 billion), 11.1 times education and training ($92.0 billion), 19.9 times agriculture and food assistance ($51.0 billion), and 28.1 times science and medical research ($36.2 billion). Every dollar of interest buys nothing — no road, no classroom, no laboratory, no benefit check. It is the price of past borrowing, and in fiscal 2026 it became one of the largest prices the government pays. For the full budget picture, see /blog/where-does-us-federal-budget-go.',
    ],
    chart: {
      title: 'Net Interest vs. Other Budget Items, FY2026 FYTD ($B)',
      caption:
        'U.S. Treasury Monthly Treasury Statement, Table 9, through August 31, 2026, via this site\'s data. Interest ($1,017.0B) exceeds defense, veterans, infrastructure, education, science, and food assistance — and all of the last four combined.',
      type: 'bar',
      unit: '$B',
      data: [
        { label: 'Net Interest', value: 1017.0 },
        { label: 'Defense', value: 876.2 },
        { label: 'Veterans', value: 395.6 },
        { label: 'Infrastructure', value: 126.4 },
        { label: 'Education', value: 92.0 },
        { label: 'Food Assistance', value: 51.0 },
        { label: 'Science', value: 36.2 },
      ],
    },
    callout: {
      type: 'info',
      text: 'Net interest means gross interest on Treasury securities minus the interest the government pays itself — mainly to trust funds like Social Security — and other interest it collects. Gross interest in fiscal 2026 was about $1.36 trillion; the net figure is what taxpayers effectively pay to outside creditors.',
    },
  },
  {
    id: 'bigger-than-combinations',
    heading: 'Bigger Than Whole Combinations of Programs',
    paragraphs: [
      'Single-program comparisons understate the scale, because $1 trillion is large enough to swallow several programs at once. Net interest through August 2026 exceeds national defense and education combined ($876.2 billion + $92.0 billion = $968.1 billion) by $48.9 billion. In other words, the government could fund the entire military and the entire federal education effort, and still have money left over, for less than it pays in interest.',
      'The same arithmetic holds across the investment side of the budget. Education, infrastructure, science, and food assistance together cost $305.6 billion in the same period — interest is 3.3 times that entire bundle. Veterans benefits plus infrastructure plus science together come to $558.3 billion, barely more than half the interest bill. These are not small programs being compared to a giant; defense is the world\'s largest military budget, and interest still clears it with room to spare.',
      'There is a useful discipline in these comparisons: they measure what interest crowds out in principle, not what could be reallocated in practice. Interest is mandatory spending — it is owed under existing law to bondholders, and missing a payment is a default, not a policy choice. The government cannot simply vote to spend the interest money on schools instead; the only way to shrink the interest bill is to shrink the debt it is charged on, or to borrow at lower rates. That is what makes the number different from every other item it is compared with here. Read how mandatory and discretionary spending differ: /blog/what-is-mandatory-vs-discretionary-spending.',
    ],
  },
  {
    id: 'what-one-trillion-buys',
    heading: 'What $1 Trillion in Interest Could Buy Instead',
    paragraphs: [
      'Put the trillion in everyday rates and the scale becomes visceral. Through August 2026, net interest ran at about $3.04 billion every single day — roughly $35,100 every second, around the clock, for 335 days. One month of interest — about $91 billion — is two and a half times everything the government spent on science and medical research in the same eleven months. One week of interest, about $21.2 billion, is more than half of that eleven-month science total.',
      'Translated into program budgets, one year of interest at the fiscal 2026 pace would fund education eleven times over, infrastructure eight times over, food assistance twenty times over, and science twenty-eight times over. It would more than double veterans benefits and still leave over $220 billion unspent. It would cover the entire defense budget and leave about $141 billion — enough, on its own, to fund infrastructure and education together.',
      'Per person, the interest bill is about $2,970 for every American in just the first eleven months of the fiscal year — roughly $250 a month per person, paid not for any service received this year but for borrowing done in years past. For a family of four, that is nearly $12,000 a year of federal spending that buys nothing current. And because interest is paid before anything else is debated — it is not part of the annual appropriations fight at all — every dollar of it is a dollar that never reaches the table where Congress decides what to fund. See the category breakdown: /categories/net-interest-spending.',
    ],
    callout: {
      type: 'tip',
      text: 'A fair caveat: these are scale comparisons, not budget proposals. Paying down enough debt to free up $1 trillion a year in interest would itself require surpluses of trillions of dollars — the comparison shows the cost of the debt, not a pot of money waiting to be spent.',
    },
  },
  {
    id: 'how-interest-tripled',
    heading: 'How Interest Tripled in Eight Years',
    paragraphs: [
      'The interest bill did not creep up — it tripled. In fiscal 2018, net interest cost $324.7 billion. By fiscal 2024 it had reached $881.6 billion, and through August 2026 it stood at $1,017.0 billion: 3.1 times the 2018 figure in eight years. No other major budget category grew anything like that fast over the same period; defense, for comparison, grew about 32% from 2018 to the 2026 year-to-date figure.',
      'Two forces drove the tripling, and both are still pushing. The first is the sheer size of the debt: gross federal debt passed $40 trillion in August 2026, and debt held by the public — the part that actually pays market interest — climbed past $32 trillion, roughly $10 trillion more than just five years earlier. The second is the price of borrowing: the average interest rate on the federal debt reached 3.53% by the end of September 2026, up from 3.36% a year earlier and more than double the 1.47% average of five years earlier, before the Federal Reserve\'s tightening cycle.',
      'The combination is what fiscal analysts call the debt snowball, and the mechanics are unforgiving. About one-third of publicly held debt — more than $10 trillion — matures within the next twelve months and must be refinanced at today\'s higher rates, whatever Congress does. Each year of $2 trillion deficits adds new borrowing on top, and the interest on that borrowing becomes next year\'s mandatory spending. That is why interest is projected to be the fastest-growing part of the federal budget in coming years, even if rates fall: the debt stock being repriced is now so large that the bill keeps rising on volume alone. For the defense side of this matchup, see /blog/us-debt-interest-vs-defense-spending.',
    ],
    chart: {
      title: 'Net Interest Outlays, FY2018–FY2026 ($B)',
      caption:
        'U.S. Treasury Monthly Treasury Statement, Table 9, via this site\'s data. FY2018–FY2024 are full-year actuals; FY2026 is year-to-date through August 31, 2026. Net interest more than tripled, from $324.7B to $1,017.0B.',
      type: 'line',
      unit: '$B',
      data: [
        { label: 'FY2018', value: 324.7 },
        { label: 'FY2020', value: 344.7 },
        { label: 'FY2022', value: 475.1 },
        { label: 'FY2024', value: 881.6 },
        { label: 'FY2026*', value: 1017.0 },
      ],
    },
  },
  {
    id: 'the-first-trillion-dollar-year',
    heading: 'The First Trillion-Dollar Interest Year Is Now Official',
    paragraphs: [
      'When the fiscal year closed on September 30, 2026, the milestone the year-to-date figures pointed to became official: full-year net interest reached $1.052 trillion, up $81.4 billion — about 8% — from $970 billion in fiscal 2025, according to the September 2026 Monthly Treasury Statement. It was the first fiscal year in American history in which interest payments topped $1 trillion, and it made interest the third-largest item in the full-year budget, behind only Social Security ($1.667 trillion) and Medicare ($1.073 trillion) and ahead of defense ($965 billion).',
      'Measured against the economy, the record is just as stark. The Peter G. Peterson Foundation estimates net interest at 3.2% of GDP in fiscal 2026, surpassing the previous record of 3.16% set in 1991 — a year when the debt was far smaller but rates were far higher. On a full-year basis the bill ran at about $2.9 billion a day, and it grew faster than total spending (up about 6% to $7.396 trillion), faster than revenue (up about 3% to $5.403 trillion), and faster than GDP itself.',
      'The full-year numbers also confirm that this is not a one-year spike. Interest rose 8% in a year when the average borrowing rate rose only modestly, because so much old, cheap debt rolled over into new, expensive debt — a process that continues into fiscal 2027 regardless of what rates do next. Market yields have already run ahead of official forecasts: the 10-year Treasury yield recently climbed above 5%, past the Congressional Budget Office\'s earlier forecast of 4.1% for this year. If yields stay near current levels, next year\'s interest bill will be larger still, on a larger debt stock, at higher rates — the snowball, rolling. For the deficit context, see /blog/federal-deficit-2026-how-big.',
    ],
  },
  {
    id: 'why-it-matters',
    heading: 'Why a $1 Trillion Interest Bill Matters to Everyone Else',
    paragraphs: [
      'The interest bill matters most for what it quietly removes from every future budget debate. Interest consumed about 21% of all federal revenue through August 2026 — more than one dollar in five collected, gone before a single program is funded. As that share rises, the room for everything else shrinks: tax cuts must be financed with more borrowing, new programs compete against a growing mandatory bill, and recessions arrive with less fiscal space, because the interest must be paid in good years and bad alike.',
      'It also matters for borrowing costs beyond the government. Treasury yields set the floor for mortgages, corporate bonds, and state and local borrowing, so a government competing harder for capital pushes up rates for households and businesses too. Analysts warn of a feedback loop: bigger interest bills mean bigger deficits, which mean more borrowing, which can push yields higher still — each turn of the loop making the next interest bill larger. That loop is why ratings agencies have flagged downgrade pressure tied to the interest-to-revenue ratio and the debt-to-GDP path, not just to the deficit in any single year.',
      'None of this means the interest bill is about to cause a crisis on its own — Treasury auctions remain well-subscribed, and nominal GDP growth near 6% has so far kept the debt ratio from exploding. But the direction is now a structural fact rather than a forecast: the government pays more in interest than it spends defending the country, and roughly as much as it spends on the health care of tens of millions of people. The $1 trillion comparison is not really about what the money could buy instead. It is about a budget in which the past now costs more than almost anything the present is trying to do.',
    ],
    callout: {
      type: 'warning',
      text: 'Interest is the one budget item that cannot be cut by an appropriations bill. It falls only when the debt falls, when rates fall, or when growth outruns both — which is why debates about deficits are, in the end, debates about this number.',
    },
  },
];

export const data: ArticleData = {
  slug: 'interest-payments-vs-agency-budgets',
  title: 'Federal Interest Payments vs. Agency Budgets: $1T Compared',
  description:
    'Net interest hit $1.05T in FY2026 — more than defense, 11x education, 28x science. Here\'s what $1 trillion in interest could buy instead.',
  keyword: 'federal interest payments comparison',
  category: 'Comparisons',
  datePublished: '2026-10-29',
  dateModified: '2026-10-29',
  readingTime: estimateReadingTime(sections),
  quickTakeaways: [
    {
      label: 'The headline',
      text: 'Net interest totaled $1,017.0B through Aug 2026 — 14.9% of all federal spending and more than the entire defense budget ($876.2B).',
    },
    {
      label: 'The multiples',
      text: 'Interest is 11.1x education, 8.0x infrastructure, 19.9x food assistance, 28.1x science, and 2.6x veterans benefits.',
    },
    {
      label: 'The combos',
      text: 'Interest exceeds defense + education combined ($968.1B), and is 3.3x education + infrastructure + science + food assistance together.',
    },
    {
      label: 'The milestone',
      text: 'Full-year FY2026 net interest closed at $1.052T — the first trillion-dollar interest year ever, 3.2% of GDP, a record since 1991.',
    },
  ],
  sections,
  faqs: [
    {
      question: 'How much does the US pay in interest on the national debt?',
      answer:
        'Through August 31, 2026, net interest payments totaled $1,017.0 billion — about $3.04 billion a day, or roughly $35,100 a second. For the full fiscal year ended September 30, 2026, net interest reached $1.052 trillion, up 8% from $970 billion in fiscal 2025. It was the first fiscal year in which interest payments topped $1 trillion.',
    },
    {
      question: 'Is interest really bigger than defense spending?',
      answer:
        'Yes. Through August 2026, net interest ($1,017.0 billion) exceeded national defense outlays ($876.2 billion) by $140.8 billion. The full-year figures confirm it: $1.052 trillion in interest vs. $965 billion for defense. Interest passed defense in fiscal 2024 and the gap has widened every year since, making interest the third-largest budget item behind only Social Security and Medicare.',
    },
    {
      question: 'What is the difference between net interest and gross interest?',
      answer:
        'Gross interest is everything the Treasury pays on its securities — about $1.36 trillion in fiscal 2026. Net interest subtracts the interest the government pays to itself, mainly interest credited to trust funds such as Social Security, and other interest it collects, leaving about $1.052 trillion. The net figure is what taxpayers effectively pay to outside creditors, and it is the figure used in budget comparisons.',
    },
    {
      question: 'Why did interest payments triple since 2018?',
      answer:
        'Two forces combined. First, the debt grew enormously: gross federal debt passed $40 trillion in August 2026, and debt held by the public climbed past $32 trillion, roughly $10 trillion more than five years earlier. Second, borrowing got much more expensive: the average rate on the debt reached 3.53% by September 2026, more than double the 1.47% average of five years earlier. More debt at higher rates tripled the bill from $324.7 billion in 2018 to over $1 trillion in 2026.',
    },
    {
      question: 'Could the government spend the interest money on something else instead?',
      answer:
        'No — not directly. Interest is mandatory spending owed to bondholders under existing law; missing a payment would be a default. The government cannot vote to redirect interest payments to schools or roads. The interest bill only shrinks if the debt itself shrinks, if borrowing rates fall, or if economic growth outruns both. That is why the comparisons in this article measure the cost of past borrowing, not a pot of money available to spend.',
    },
    {
      question: 'How much of federal revenue goes to interest payments?',
      answer:
        'Through August 2026, net interest consumed about 21% of all federal receipts — more than one dollar in five collected. On a full-year basis, $1.052 trillion in interest against $5.403 trillion in receipts is about 19.5%. The Peter G. Peterson Foundation estimates net interest at 3.2% of GDP in fiscal 2026, surpassing the previous record of 3.16% set in 1991.',
    },
  ],
  sources: [
    {
      name: 'U.S. Department of the Treasury — Fiscal Data (Monthly Treasury Statement)',
      url: 'https://fiscaldata.treasury.gov/',
    },
    {
      name: 'Crowdfund Insider — Federal Interest Costs Reach $3 Billion Daily',
      url: 'https://www.crowdfundinsider.com/2026/10/319283-federal-interest-costs-reach-3-billion-daily-as-us-household-debt-widens-affordability-gaps/',
    },
    {
      name: 'IndexBox — U.S. Deficit Hits $1.99 Trillion in Fiscal 2026 as Interest Costs Climb',
      url: 'https://www.indexbox.io/blog/us-budget-deficit-widens-to-199-trillion-in-fiscal-2026-as-interest-costs-surge/',
    },
    {
      name: 'SourceFirstNews — US Budget Deficit Hits $1.99 Trillion in Fiscal 2026',
      url: 'https://sourcefirstnews.com/us-budget-deficit-fiscal-2026-interest-1-trillion',
    },
  ],
  relatedSlugs: [
    'us-debt-interest-vs-defense-spending',
    'federal-deficit-2026-how-big',
    'what-is-debt-ceiling',
  ],
};
