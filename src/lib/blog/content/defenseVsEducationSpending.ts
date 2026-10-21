import type { ArticleData } from '../types';
import { estimateReadingTime } from '../types';

const sections: ArticleData['sections'] = [
  {
    id: 'the-answer',
    heading: 'Defense vs. Education Spending: The Answer',
    paragraphs: [
      'Defense spending is roughly 9.5 times federal education spending — one of the widest gaps in the federal budget. Through August 31, 2026, the first eleven months of fiscal year 2026, national defense outlays totaled $876.2 billion, while the education, training, and social services function recorded $92.0 billion. The gap between them is $784 billion: the difference alone is bigger than the entire annual budget of any other category except Social Security, net interest, Medicare, and health programs.',
      'Put it in daily terms: the Pentagon spends about $2.62 billion every day, while the federal education function spends about $275 million. One day of defense spending covers roughly nine and a half days of federal education spending. As shares of the whole budget, defense is 12.9% of all federal outlays — the fifth-largest category — while education is about 1.4%, ranking below even agriculture and food assistance. See the full budget picture: /blog/where-does-us-federal-budget-go.',
      'Both figures come from the U.S. Treasury Monthly Treasury Statement, Table 9 — the same source behind every number on this site. Two honesty notes before we go further: the defense figure is outlays for the national defense budget function, not the separate Veterans Affairs category (another $395.6 billion). And the education figure is noisy, distorted by student-loan accounting entries that swung it from $677 billion to $92 billion over four years — a story told in full at /blog/student-loan-accounting-education-spending.',
    ],
    chart: {
      title: 'Defense and Education Against the Biggest Budget Items, FY2026 FYTD ($B)',
      caption:
        'U.S. Treasury Monthly Treasury Statement, Table 9, through August 31, 2026, via this site\'s data. Defense is the fifth-largest category; education ranks eighth, below veterans benefits and infrastructure.',
      type: 'bar',
      unit: '$B',
      data: [
        { label: 'Social Security', value: 1525.9 },
        { label: 'Net Interest', value: 1017.0 },
        { label: 'Medicare', value: 979.3 },
        { label: 'Health', value: 925.7 },
        { label: 'Defense', value: 876.2 },
        { label: 'Veterans', value: 395.6 },
        { label: 'Education', value: 92.0 },
      ],
    },
    callout: {
      type: 'info',
      text: 'Dig into each side separately on their category pages: /categories/defense-military and /categories/education-training.',
    },
  },
  {
    id: 'why-education-is-so-small',
    heading: 'Why Federal Education Spending Is So Small: Washington Is a Minority Funder',
    paragraphs: [
      'The 9.5-to-1 ratio looks like a statement of priorities until you learn how American education is actually funded: the federal government pays for only a small slice of schooling. In fiscal 2024, public elementary and secondary schools drew $994.9 billion in revenue from all sources — and states provided 45.2%, local sources (mostly property taxes) provided 43.2%, while the federal government contributed just 11.6%, or $115.1 billion, down 4.4% from the prior year. For K-12, Washington is the smallest partner at the table.',
      'Federal education dollars are targeted, not dominant. The Department of Education exists to fill gaps state and local formulas miss: Title I grants for high-poverty schools, special education funding under the Individuals with Disabilities Education Act, Pell Grants for low-income college students, and career and technical education. Congress just settled the department\'s fiscal 2026 funding at $79 billion in discretionary funding — up slightly from $78.7 billion in 2025 — after rejecting a White House proposal to cut it 15.3% to $66.7 billion and eliminate programs like TRIO, GEAR UP, and work-study. The enacted deal flat-funded Pell Grants and blocked the administration from shifting department funds to other agencies.',
      'And the budget function itself is broader — and noisier — than the Department of Education. Budget function 500, "Education, Training, Employment, and Social Services," includes Labor Department workforce programs and, crucially, the federal student loan portfolio. Under the Federal Credit Reform Act, policy announcements about loan forgiveness are booked as hundreds of billions in spending the moment they are made — which is why this function recorded $676.6 billion in fiscal 2022 and $305.0 billion in 2024 before settling back toward its roughly $100-billion-a-year normal baseline in 2026. The headline number is real Treasury data, but it is not mostly classroom money.',
    ],
  },
  {
    id: 'why-defense-is-so-large',
    heading: 'Why Defense Is So Large: The $901 Billion Authorization',
    paragraphs: [
      'National defense is the largest thing the federal government buys from scratch every year — there is no state or local Pentagon. For fiscal 2026, Congress authorized $900.6 billion in national defense spending in the compromise National Defense Authorization Act, about $8 billion above what the White House requested. That authorization covers the Defense Department base budget plus Energy Department nuclear programs, and the Treasury\'s $876.2 billion in outlays through August puts actual spending on pace for a full-year total in the same neighborhood once September is counted.',
      'Where does it go? The House Armed Services Committee summary breaks the authorized funding into roughly five buckets: about $291 billion for operations and maintenance (keeping the force running), $234 billion for military personnel and healthcare, $162 billion for procurement (buying weapons and equipment), $146 billion for research, development, and testing, and $34 billion for nuclear programs, with the remainder for construction and housing. Enlisted service members received a 3.8% pay raise. This is not a monolith: personnel and day-to-day operations together consume about 60% of the defense budget before a single new weapon is purchased.',
      'The priorities reflect the moment. The bill funds next-generation weapons programs — the "Golden Dome" missile defense system, the Air Force\'s F-47 and Navy\'s F/A-XX fighters, the B-21 Raider stealth bomber — plus continued assistance to Ukraine and the Baltic states, and a push to rebuild the defense industrial base. Congress claims $20 billion in savings from Pentagon bureaucracy cuts, climate-program reductions, DEI eliminations, and consulting-contract cutbacks. Whether those savings materialize, the direction is clear: modernization and great-power competition, not contraction.',
    ],
    chart: {
      title: 'FY2026 NDAA: Where the $900.6B Authorization Goes ($B)',
      caption:
        'House Armed Services Committee summary of the FY2026 NDAA, via The Fiscal Times. Operations, maintenance, and personnel consume roughly 60% of defense spending before procurement.',
      type: 'bar',
      unit: '$B',
      data: [
        { label: 'Operations & maintenance', value: 291 },
        { label: 'Personnel & healthcare', value: 234 },
        { label: 'Procurement', value: 162 },
        { label: 'Research & testing', value: 146 },
        { label: 'Nuclear programs', value: 34 },
        { label: 'Construction & housing', value: 20 },
      ],
    },
  },
  {
    id: 'the-trend',
    heading: 'The Trend: Steady Growth vs. a $600 Billion Swing',
    paragraphs: [
      'The two lines have had very different decades. Defense outlays grew steadily: $664.7 billion in fiscal 2018, $726.2 billion in 2020, $766.6 billion in 2022, $874.1 billion in 2024, and $876.2 billion through the first eleven months of 2026 — a 32% increase over eight years, driven by pay raises, operations costs, and the modernization push. It is the textbook picture of a large, stable, growing budget line.',
      'Education\'s line, by contrast, is the most volatile in the federal budget. It was $93.9 billion in 2018, spiked to $236.7 billion in 2020 as COVID-era loan forbearance and relief measures were scored, then exploded to $676.6 billion in 2022 when the administration\'s one-time loan-cancellation announcement was booked as a $450.5 billion modification cost. After the Supreme Court struck down the plan in June 2023, the reversal was scored as a $207.2 billion negative entry, pulling 2024 down to $305.0 billion — and 2026\'s $92.0 billion year-to-date figure marks a return to the ordinary baseline. Strip out the loan-portfolio accounting, and "federal education spending" is essentially a flat $90–100 billion a year the whole time.',
      'That volatility is the single most important thing to understand about the comparison. The 9.5-to-1 ratio describes fiscal 2026; in fiscal 2022 the ratio was barely 1.1-to-1 — not because schools got six times richer, but because an announcement that never took effect moved $450 billion through the books. Year-to-year comparisons of education outlays that ignore the loan accounting are meaningless.',
    ],
    chart: {
      title: 'Defense vs. Education Outlays, FY2018–FY2026 ($B)',
      caption:
        'U.S. Treasury Monthly Treasury Statement, Table 9, via this site\'s data. FY2018–FY2024 are full-year actuals; FY2026 is year-to-date through August 31, 2026. Education\'s 2022 spike and 2023–2024 reversal are student-loan accounting, not classroom funding.',
      type: 'line',
      unit: '$B',
      data: [
        { label: 'FY2018', value: 664.7 },
        { label: 'FY2020', value: 726.2 },
        { label: 'FY2022', value: 766.6 },
        { label: 'FY2024', value: 874.1 },
        { label: 'FY2026*', value: 876.2 },
      ],
      series2Label: 'Education',
      series2Data: [
        { label: 'FY2018', value: 93.9 },
        { label: 'FY2020', value: 236.7 },
        { label: 'FY2022', value: 676.6 },
        { label: 'FY2024', value: 305.0 },
        { label: 'FY2026*', value: 92.0 },
      ],
    },
  },
  {
    id: 'apples-to-oranges',
    heading: 'Apples to Oranges: What Each Dollar Actually Funds',
    paragraphs: [
      'The honest comparison is narrower than the headline ratio suggests, because the two budgets buy entirely different things through entirely different machinery. Defense is overwhelmingly discretionary spending, debated and voted on every year: the NDAA sets policy and authorizes, and the defense appropriations bill provides the money. Education\'s grants flow mainly through the Labor-HHS-Education appropriations bill, but the function\'s headline number is dominated by the loan portfolio — an accounting construct that behaves like mandatory spending, moving with policy announcements rather than appropriations. Read how the two budget types work: /blog/what-is-mandatory-vs-discretionary-spending.',
      'The funding-structure difference cuts to the core of the debate. Every dollar of national defense is federal: no state or local government maintains an army, a navy, or a nuclear arsenal, so the 12.9% figure is the whole national picture. Education looks like a federal rounding error only because the comparison ignores the $880 billion that states and localities spend — money that never appears in the federal budget but pays for nearly every classroom, teacher, and school bus in America. Compare the federal government\'s contribution to its role in other areas, like interest on the debt: /blog/us-debt-interest-vs-defense-spending.',
      'Scale works both ways. Defense is the world\'s largest military budget, and it is also a uniquely American federal responsibility — policing sea lanes, deterring rivals, honoring alliance commitments. Education is overwhelmingly a state and local responsibility by constitutional design; the federal role is deliberately supplementary. The 9.5-to-1 ratio is real, but it measures two different jobs in two different fiscal universes.',
    ],
  },
  {
    id: 'what-the-ratio-means',
    heading: 'What the 9.5-to-1 Ratio Actually Means',
    paragraphs: [
      'Strip out the accounting noise and the ratio tells a simple story: the federal government spends roughly nine and a half dollars on national defense for every dollar on education. At the current pace, defense is on track for about $955 billion for the full fiscal year and education for about $100 billion — the gap between them, $784 billion year-to-date, is larger than the combined budgets of veterans benefits, infrastructure, science, and agriculture.',
      'Per person, the numbers are equally stark. Defense outlays run about $2,560 for every American per year; federal education outlays run about $270. For a sense of the discretionary choice involved: the $784 billion gap is more than seven times the entire Department of Education\'s $79 billion enacted budget, and it is growing — the Congressional Budget Office and Treasury data show net interest outlays surpassing defense itself in fiscal 2024, a reminder that the budget\'s fastest-growing "program" is the cost of past borrowing, not any current priority.',
      'None of this settles whether the ratio is right. Defense advocates note the U.S. spends only about 3% of GDP on defense — down from Cold War levels — and that the world\'s largest economy underwrites global security. Education advocates note the federal share of K-12 has been flat or falling while college costs rose, and that the $79 billion enacted for the Education Department was a fight Congress nearly lost to a 15% cut. The ratio is a fact; what to do about it is a values question. What is not a fact is the idea that the two numbers come from the same pot — they barely do.',
    ],
    callout: {
      type: 'tip',
      text: 'Compare this matchup with the others in the series: defense vs. interest, Medicare vs. Social Security, and the full budget breakdown — all linked from /blog.',
    },
  },
];

export const data: ArticleData = {
  slug: 'defense-vs-education-spending',
  title: 'Defense vs. Education Spending: The 9.5x Gap Explained',
  description:
    'Defense vs. education spending: defense costs $876B vs. education\u2019s $92B in FY2026 — 9.5x apart. Real MTS data, why the gap, and what each dollar buys.',
  keyword: 'defense vs education spending',
  category: 'Comparisons',
  datePublished: '2026-10-21',
  dateModified: '2026-10-21',
  readingTime: estimateReadingTime(sections),
  quickTakeaways: [
    {
      label: 'The ratio',
      text: 'Defense outlays are $876.2B vs. education\u2019s $92.0B through Aug 2026 — about 9.5 times more, a $784B gap.',
    },
    {
      label: 'The catch',
      text: 'Washington funds only ~12% of K-12 schooling; states and localities pay the other 90% ($995B in FY2024, per Census).',
    },
    {
      label: 'The noise',
      text: 'Education\u2019s function swung from $677B (2022) to $92B (2026) on student-loan accounting — the real baseline is ~$100B a year.',
    },
    {
      label: 'The authorization',
      text: 'The FY2026 NDAA authorized $900.6B for defense: ~$291B operations, $234B personnel, $162B procurement, $146B research.',
    },
  ],
  sections,
  faqs: [
    {
      question: 'How much does the US spend on defense vs. education?',
      answer:
        'Through August 31, 2026, national defense outlays totaled $876.2 billion — 12.9% of all federal spending — while the education, training, and social services function recorded $92.0 billion, about 1.4%. Defense spending is roughly 9.5 times federal education spending, a gap of $784 billion.',
    },
    {
      question: 'Why is federal education spending so much smaller than defense spending?',
      answer:
        'Because the federal government is not the main funder of education. States and localities provide more than 90% of public school revenue — $994.9 billion in fiscal 2024, per the Census Bureau — with the federal government contributing just 11.6%. National defense, by contrast, is an entirely federal responsibility: no state maintains an army.',
    },
    {
      question: 'What is the US defense budget for fiscal 2026?',
      answer:
        'Congress authorized $900.6 billion in national defense spending in the fiscal 2026 National Defense Authorization Act, about $8 billion above the White House request. Treasury outlay data shows $876.2 billion actually spent through August 2026, putting the full year on pace near $955 billion. The breakdown: about $291B operations and maintenance, $234B personnel and healthcare, $162B procurement, and $146B research.',
    },
    {
      question: 'Does federal education spending include student loans?',
      answer:
        'Yes — the education budget function includes the federal student loan portfolio, and that distorts the headline number. Policy announcements like the 2022 loan-cancellation plan are scored as hundreds of billions in spending immediately, which is why the function swung from $676.6 billion in 2022 to $92.0 billion in 2026. Stripping out the accounting, the normal baseline is about $90–100 billion a year.',
    },
    {
      question: 'Is defense the biggest item in the federal budget?',
      answer:
        'No — it ranks fifth. Social Security ($1.526T), net interest ($1.017T), Medicare ($979B), and health programs including Medicaid ($926B) are all larger through August 2026. Notably, net interest payments surpassed defense spending in fiscal 2024 for the first time in history, and the gap has widened since.',
    },
    {
      question: 'How much federal money goes to K-12 schools specifically?',
      answer:
        'The federal government contributed about $115.1 billion to public elementary and secondary school revenue in fiscal 2024, 11.6% of the $994.9 billion total, according to the Census Bureau — and that share fell 4.4% from the prior year. It flows through targeted programs like Title I grants for high-poverty schools, special education funding, and school nutrition programs.',
    },
  ],
  sources: [
    {
      name: 'U.S. Department of the Treasury — Monthly Treasury Statement (Fiscal Data)',
      url: 'https://fiscaldata.treasury.gov/',
    },
    {
      name: 'The Fiscal Times — Defense Spending Tops $900 Billion in Compromise 2026 NDAA',
      url: 'https://www.thefiscaltimes.com/2025/12/08/Defense-Spending-Tops-900-Billion-Compromise-2026-NDAA',
    },
    {
      name: 'NASFAA — ED\u2019s Funding for FY 2026 Enacted After House Passage of Revised Spending Deal',
      url: 'https://www.nasfaa.org/news-item/38146/ED_s_Funding_for_FY_2026_Enacted_After_House_Passage_of_Revised_Spending_Deal',
    },
    {
      name: 'U.S. Census Bureau — Public School Spending Per Pupil Reaches Historic High in 2024',
      url: 'https://www.census.gov/newsroom/press-releases/2026/school-system-finances.html',
    },
  ],
  relatedSlugs: [
    'us-debt-interest-vs-defense-spending',
    'student-loan-accounting-education-spending',
    'what-is-mandatory-vs-discretionary-spending',
  ],
};
