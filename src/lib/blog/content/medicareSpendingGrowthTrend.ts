import type { ArticleData } from '../types';
import { estimateReadingTime } from '../types';

const sections: ArticleData['sections'] = [
  {
    id: 'the-979-billion-number',
    heading: 'Medicare Spending Growth: The $979 Billion Number',
    paragraphs: [
      'In the first eleven months of fiscal year 2026, the federal government spent $979.3 billion on Medicare. That is the figure in the U.S. Treasury Monthly Treasury Statement, Table 9, through August 31, 2026 — the latest data in this site\'s dataset — and it already makes Medicare one of the largest items in the entire federal budget. At $2.92 billion every single day, Medicare alone absorbed 14.4% of all federal spending in the period, more than national defense ($876.2 billion) and more than the whole health function including Medicaid ($925.7 billion). Only Social Security ($1,525.9 billion) and net interest on the debt ($1,017.0 billion) cost more.',
      'Put it in human terms: Medicare covers about 68.5 million people — roughly 90% of them aged 65 and older, the rest people with disabilities — so $979.3 billion over eleven months works out to roughly $14,300 per enrollee. That is not a premium anyone pays; it is the average cost of the hospital stays, doctor visits, and prescriptions the program paid for on each enrollee\'s behalf, net of the premiums and other collections that offset part of the bill. Gross Medicare spending is higher: the Medicare trustees reported total program expenditures of $1,122.1 billion in calendar 2024, a figure that counts spending before those offsetting receipts are subtracted.',
      'One important asterisk on the headline number: fiscal 2026 was not over when this data was published. The $979.3 billion covers October 1, 2025 through August 31, 2026 — 335 days, not a full year. The completed fiscal year, which ended September 30, 2026, pushed the full-year Medicare total to $1.073 trillion, as reported in our companion article on interest payments. The $979 billion figure is therefore a floor, not a ceiling: even with a month missing, Medicare had already passed the trillion-dollar pace.',
    ],
    chart: {
      title: 'Largest Federal Budget Categories, FY2026 FYTD ($B)',
      caption:
        'U.S. Treasury Monthly Treasury Statement, Table 9, through August 31, 2026. Medicare ranks third, ahead of defense and all health programs combined.',
      type: 'bar',
      unit: '$B',
      data: [
        { label: 'Social Security', value: 1525.9 },
        { label: 'Net Interest', value: 1017.0 },
        { label: 'Medicare', value: 979.3 },
        { label: 'Health (incl. Medicaid)', value: 925.7 },
        { label: 'Defense', value: 876.2 },
      ],
    },
  },
  {
    id: 'eight-years-of-growth',
    heading: 'Eight Years of Medicare Spending Growth, in One Chart',
    paragraphs: [
      'Medicare has not always been a trillion-dollar program. In fiscal 2018, Medicare outlays were $588.8 billion. By fiscal 2026 year-to-date they had reached $979.3 billion — a 66% increase in eight years, even before the final month of fiscal 2026 is counted. No other major budget category grew that fast over the same stretch except net interest, which nearly tripled as borrowing costs soared. Social Security, by comparison, grew about 54% over the same period.',
      'The path was not a smooth climb. Medicare spending jumped to $776.2 billion in fiscal 2020, then dipped to $755.1 billion in 2022, before resuming its rise to $874.1 billion in 2024 and $979.3 billion in the first eleven months of 2026. The 2020–2022 pattern reflects the pandemic era\'s unusual timing effects on care and payments, and it is a useful reminder that a single year\'s figure can mislead: the trend, not any one year, is the story. And the trend points relentlessly upward — roughly $390 billion higher than in 2018, with the final month of fiscal 2026 still to add.',
      'Growth in percentage terms tells the same story from a different angle. The Congressional Budget Office has reported Medicare outlays rising around 8% in a single fiscal year on higher enrollment and higher payment rates — faster, in percentage terms, than Social Security\'s growth. When a program already approaching $1 trillion grows at 8%, that is roughly $80 billion of new spending in one year — more than the entire annual budget of most federal agencies.',
    ],
    chart: {
      title: 'Medicare Outlays, FY2018–FY2026 ($B)',
      caption:
        'U.S. Treasury Monthly Treasury Statement, Table 9. FY2018–FY2024 are September finals; FY2026 is fiscal year-to-date through August 31, 2026, so the final 2026 bar will be higher (full-year: $1.073 trillion).',
      type: 'line',
      unit: '$B',
      data: [
        { label: '2018', value: 588.8 },
        { label: '2020', value: 776.2 },
        { label: '2022', value: 755.1 },
        { label: '2024', value: 874.1 },
        { label: '2026*', value: 979.3 },
      ],
    },
  },
  {
    id: 'why-medicare-keeps-growing',
    heading: 'Why Medicare Spending Keeps Growing',
    paragraphs: [
      'Three forces drive Medicare spending growth, and all three are still pushing in the same direction. The first is demographics: every day, roughly 10,000 baby boomers reach retirement age, and the Centers for Medicare & Medicaid Services (CMS) projects that by 2034, 22% of the entire U.S. population will be covered by Medicare. Enrollment growth alone would raise spending even if the cost of care never changed.',
      'The second force is how much care each enrollee uses, and what it costs. CMS\'s latest National Health Expenditure projections, published in June 2026, attribute the near-term acceleration in Medicare spending growth — from 7.7% in 2025 to 9.2% in 2026 — largely to higher use of hospital-based (Part A) services and to higher Part D prescription-drug spending linked to Inflation Reduction Act provisions that limit premium increases for beneficiaries. Health care prices themselves have been relatively tame — the health spending price index grew 2.6% in 2025, about the same as overall inflation — so most of the growth is more care and more expensive drugs, not general inflation.',
      'The third force is the structure of the program itself. More than half of eligible beneficiaries — over 51% — are now enrolled in private Medicare Advantage plans rather than traditional Medicare, and the Medicare Payment Advisory Commission has reported that Medicare Advantage coverage costs about 20% more per enrollee than traditional Medicare. That shift toward private plans, plus the prescription-drug benefit\'s $2,000 annual out-of-pocket cap for beneficiaries (which shifts drug costs from enrollees to the program), keeps upward pressure on federal outlays even as it protects individual beneficiaries.',
    ],
    bullets: [
      'Enrollment: about 68.5 million people covered as of February 2025, rising as baby boomers age in.',
      'Per-enrollee spending: CMS projects per-enrollee Medicare spending growth rising to 8.2% in 2026.',
      'Drug spending: high-cost retail prescription drugs are a leading driver of growth in 2025–2026.',
      'Medicare Advantage: over 51% of beneficiaries in private plans, at roughly 20% higher cost per enrollee than traditional Medicare.',
    ],
  },
  {
    id: 'what-medicare-buys',
    heading: 'What Medicare Actually Buys',
    paragraphs: [
      'Medicare is not one program but several, and the budget figure bundles them together. Part A (Hospital Insurance) pays for inpatient hospital stays, hospice, skilled nursing, and some home health care, financed mainly by a 2.9% payroll tax. Part B pays for doctor visits and outpatient care, and Part D pays for prescription drugs; those two are financed mostly from general federal revenue, with enrollee premiums covering roughly a quarter of the cost. Part C, Medicare Advantage, is not a separate benefit but a private-plan alternative: the government pays private insurers a monthly amount per enrollee to deliver the same Parts A and B benefits, usually with drug coverage included.',
      'That financing split matters for understanding the budget number. Because Parts B and D draw heavily on general revenue, Medicare\'s growth directly competes with every other priority funded from the same pot — defense, infrastructure, education, and interest payments. Part A, by contrast, has its own dedicated payroll tax and its own trust fund, which is why its finances get a separate report card from the trustees (more on that below). When you see the $979.3 billion figure on this site\'s category page at /categories/medicare-spending, you are seeing the net budget outlay: gross spending minus premiums and other offsetting collections.',
      'For scale, compare Medicare with the rest of the health system. Total national health spending reached $5.7 trillion in 2025 and is projected to hit $6.0 trillion in 2026 and $9.0 trillion by 2034, rising from 18.4% of GDP to 20.6%. Medicare is the fastest-growing major payer in that total: CMS projects it will grow 7.7% a year on average from 2025 to 2034, against 5% each for Medicaid and private insurance, and will make up 26% of all national health spending by 2034.',
    ],
    chart: {
      title: 'Projected Average Annual Spending Growth, 2025–2034 (%)',
      caption:
        'CMS National Health Expenditure Projections, 2025–2034 (June 2026). Medicare grows fastest of the three major payers, driven by enrollment and per-person spending.',
      type: 'bar',
      unit: '%',
      data: [
        { label: 'Medicare', value: 7.7 },
        { label: 'Medicaid', value: 5.0 },
        { label: 'Private insurance', value: 5.0 },
      ],
    },
  },
  {
    id: 'the-2033-deadline',
    heading: 'The 2033 Deadline Hanging Over Medicare',
    paragraphs: [
      'The most consequential number in Medicare\'s future is not a spending total but a date: 2033. The Medicare Board of Trustees\' 2025 annual report projects that the Hospital Insurance (Part A) trust fund will be depleted in 2033 — three years earlier than the 2024 report projected — because 2024 expenditures came in higher than expected and the trustees raised their assumptions for inpatient and hospice spending growth. After depletion, continuing payroll-tax income would cover only about 89% of scheduled Part A benefits: an 11% shortfall for hospital, nursing-home, and hospice coverage unless Congress acts.',
      'That deadline is narrower than it sounds. Only Part A faces depletion: the Supplementary Medical Insurance trust fund that finances Parts B and D is re-set every year from general revenue and premiums, so it cannot "run out" — but its rising costs land directly on beneficiaries (through premiums) and taxpayers (through general revenue). The trustees\' message is blunt: Medicare "still faces a substantial financial shortfall that needs to be addressed with further legislation." Congress has never allowed the Hospital Insurance fund to actually be depleted, but every year of delay narrows the options and raises the eventual cost.',
      'The arithmetic behind the deadline is demographic. The Medicare Payment Advisory Commission reported to Congress that only 2.5 workers per beneficiary will be paying into the program in 2029, down from 2.8 in 2023, while Medicare costs are expected to nearly double from about $1 trillion in 2023 to $1.9 trillion in 2032. Fewer workers supporting more beneficiaries, each using more care, is the definition of a structural squeeze — and it is why Medicare\'s growth story is also a fiscal-policy story, not just a health-care story.',
    ],
    callout: {
      type: 'warning',
      text: 'Depletion does not mean Medicare ends in 2033. It means the Part A trust fund\'s reserves run out and payroll taxes alone would pay only about 89% of scheduled hospital benefits. Congress has always acted before that point — but the longer it waits, the sharper the fix.',
    },
  },
  {
    id: 'what-this-means',
    heading: 'What Medicare\'s Growth Means for the Federal Budget',
    paragraphs: [
      'Medicare\'s growth is the single most important long-term force in the federal budget after interest on the debt — and the two are linked. As Medicare and Social Security grow, deficits grow; as deficits grow, the debt grows; and as the debt grows, interest payments grow. In fiscal 2026 year-to-date, Medicare ($979.3 billion), Social Security ($1,525.9 billion), and net interest ($1,017.0 billion) together consumed $3.522 trillion — more than half of all federal spending. That is the budget in one sentence: three items, mostly driven by demographics and past borrowing, now outweigh everything else the government does combined.',
      'For readers, the practical takeaway is that Medicare\'s trajectory is largely set by forces already in motion: the age structure of the population, the price and volume of medical care, and the design choices Congress has already made, like the Part D out-of-pocket cap. Policy can bend the curve — through payment reforms, Medicare Advantage payment changes, and drug-price negotiation, all of which analysts regularly propose — but it cannot repeal demographics. CMS projects Medicare will keep growing faster than the economy in every year through 2034, and the trustees\' 2033 date gives that projection a deadline.',
      'If you want to follow the numbers yourself, start with the category page at /categories/medicare-spending, compare it with /categories/social-security-spending and /categories/net-interest-spending, and read our earlier comparison of the two giant entitlement programs at /blog/medicare-vs-social-security-spending. The data behind every chart in this article comes from the same source: the Treasury Monthly Treasury Statement, Table 9, the government\'s own monthly ledger.',
    ],
  },
];

export const data: ArticleData = {
  slug: 'medicare-spending-growth-trend',
  title: 'Medicare Spending Growth: The $979 Billion Story',
  description:
    'Medicare spending growth hit $979.3B in FY2026 year-to-date, up 66% since 2018, with the Part A trust fund projected to run out in 2033.',
  keyword: 'medicare spending growth',
  category: 'Data Stories',
  datePublished: '2026-10-30',
  dateModified: '2026-10-30',
  readingTime: estimateReadingTime(sections),
  quickTakeaways: [
    {
      label: 'The headline',
      text: 'Medicare cost $979.3 billion in the first 11 months of FY2026 — $2.92 billion a day, 14.4% of all federal spending.',
    },
    {
      label: 'The growth',
      text: 'Up 66% since fiscal 2018 ($588.8B), outpacing Social Security and every category except net interest.',
    },
    {
      label: 'The outlook',
      text: 'CMS projects Medicare will grow 7.7% a year through 2034 — fastest of all major payers — reaching 26% of national health spending.',
    },
    {
      label: 'The deadline',
      text: 'The Part A hospital trust fund is projected to be depleted in 2033, after which payroll taxes cover only ~89% of scheduled benefits.',
    },
  ],
  sections,
  faqs: [
    {
      question: 'How much does the US spend on Medicare per year?',
      answer:
        'Through August 31, 2026 — the first eleven months of fiscal 2026 — Medicare outlays totaled $979.3 billion, according to the Treasury Monthly Treasury Statement. The completed fiscal year ended September 30, 2026 with full-year Medicare spending of $1.073 trillion. Gross Medicare spending, before beneficiary premiums are subtracted, is higher: the trustees reported $1,122.1 billion in total expenditures for calendar 2024.',
    },
    {
      question: 'Why is Medicare spending growing so fast?',
      answer:
        'Three forces combine: more enrollees as baby boomers retire (about 68.5 million people covered, rising to a projected 22% of the population by 2034), more care per enrollee, and higher drug spending. CMS projects Medicare spending growth accelerating from 7.7% in 2025 to 9.2% in 2026, driven by hospital-service use and Part D drug spending, and averaging 7.7% a year through 2034 — faster than Medicaid or private insurance.',
    },
    {
      question: 'Will Medicare run out of money in 2033?',
      answer:
        'Not entirely. The trustees project that the Hospital Insurance (Part A) trust fund — which pays for hospital stays — will be depleted in 2033, three years earlier than previously projected. After that, payroll taxes would still cover about 89% of scheduled Part A benefits. Parts B and D are funded annually from general revenue and premiums, so they do not face depletion, though their rising costs fall on beneficiaries and taxpayers. Congress has never let the Part A fund actually run out.',
    },
    {
      question: 'Is Medicare bigger than defense spending?',
      answer:
        'Yes. Through August 2026, Medicare ($979.3 billion) exceeded national defense outlays ($876.2 billion) by about $103 billion. Medicare is the third-largest item in the federal budget, behind only Social Security ($1,525.9 billion) and net interest on the debt ($1,017.0 billion). On a full-year basis, Medicare ($1.073 trillion) also stayed ahead of defense ($965 billion).',
    },
    {
      question: 'How many people are on Medicare?',
      answer:
        'As of February 2025, Medicare covered 68.5 million people, about 90% of them aged 65 and older and the rest people with disabilities or end-stage renal disease. More than 51% of eligible beneficiaries are enrolled in private Medicare Advantage plans rather than traditional Medicare. CMS projects Medicare enrollment will keep growing as younger baby boomers age into the program.',
    },
    {
      question: 'What share of the federal budget is Medicare?',
      answer:
        'Through August 31, 2026, Medicare\'s $979.3 billion was 14.4% of total federal spending of $6,811.0 billion. Together, Medicare, Social Security, and net interest consumed $3.522 trillion — more than half of everything the federal government spent in the period. CMS projects Medicare will make up 26% of all national health spending by 2034.',
    },
  ],
  sources: [
    {
      name: 'U.S. Department of the Treasury — Fiscal Data (Monthly Treasury Statement)',
      url: 'https://fiscaldata.treasury.gov/',
    },
    {
      name: 'Committee for a Responsible Federal Budget — National Health Expenditures Continue to Rise',
      url: 'https://www.crfb.org/blogs/national-health-expenditures-continue-rise',
    },
    {
      name: 'AARP — Medicare’s Financial Health Worsens in 2025 Report',
      url: 'https://www.aarp.org/medicare/trustees-report-2025/',
    },
    {
      name: 'Peterson-KFF Health System Tracker — How Much Is Health Spending Expected to Grow?',
      url: 'https://www.healthsystemtracker.org/chart-collection/how-much-is-health-spending-expected-to-grow/',
    },
  ],
  relatedSlugs: [
    'medicare-vs-social-security-spending',
    'interest-payments-vs-agency-budgets',
    'federal-deficit-2026-how-big',
  ],
};
