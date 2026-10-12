import type { ArticleData } from '../types';
import { estimateReadingTime } from '../types';

const sections: ArticleData['sections'] = [
  {
    id: 'the-600-billion-swing',
    heading: 'Federal Education Spending by Year: A $600 Billion Swing',
    paragraphs: [
      'In fiscal year 2022, the federal government\'s education, training, and social services function recorded $676.6 billion in outlays — the largest single-year education total in American history, by a margin so wide it looks like a data error. In fiscal year 2026 through August, the same function has recorded $92.0 billion. The swing between the peak and the present is roughly $585 billion: a sum bigger than the entire annual federal outlay on defense in most years.',
      'Here is the strange part: almost none of that swing touched a classroom. K-12 grants kept flowing, Pell Grants kept flowing, and school lunch programs kept operating through every year of it. The spike and the crash both happened inside a single, opaque corner of the budget: the accounting for the federal student loan portfolio, where policy announcements are scored as spending the moment they are made — even when no dollar moves. Read the full breakdown of where federal money goes: /spending-breakdown.',
      'This is the story of how one student loan announcement inflated fiscal 2022 spending by hundreds of billions, how a Supreme Court decision reversed it a year later, and why reading federal education spending by year requires knowing what is accounting and what is actual. All year-by-year figures below are drawn from the site\'s canonical data — the Treasury\'s Monthly Treasury Statement, Table 9 — with FY2026 figures year-to-date through August 31, 2026.',
    ],
    chart: {
      title: 'Federal Education Function Outlays by Fiscal Year ($B)',
      caption:
        'U.S. Treasury Monthly Treasury Statement, Table 9 (budget function: Education, Training, Employment, and Social Services), via this site\'s data. FY2026 is fiscal year-to-date through August 31, 2026; historical years are full-year MTS actuals.',
      type: 'bar',
      unit: '$B',
      data: [
        { label: 'FY2018', value: 93.9 },
        { label: 'FY2020', value: 236.7 },
        { label: 'FY2022', value: 676.6 },
        { label: 'FY2024', value: 305.0 },
        { label: 'FY2026 FYTD', value: 92.0 },
      ],
    },
    callout: {
      type: 'info',
      text: 'FY2026 figures cover October 1, 2025 through August 31, 2026 (335 days), the latest published Monthly Treasury Statement. At the current pace, the full year is on track for about $100 billion — the "normal" baseline this article keeps coming back to.',
    },
  },
  {
    id: 'what-counts-as-education-spending',
    heading: 'What Counts as "Federal Education Spending"',
    paragraphs: [
      'Before the swing, the baseline. The budget function behind these numbers — "Education, Training, Employment, and Social Services," budget function 500 — is broader than the Department of Education. It includes K-12 grants to states (Title I for low-income schools and special education, about $27.6 billion a year), higher education programs (about $18.4 billion, including Pell), and career, technical, and adult education (about $13.8 billion). The primary agencies are the Department of Education and the Department of Labor. See the current category view: /categories/education-training.',
      'In ordinary years, this function is one of the steadiest lines in the budget. In fiscal 2018 it totaled about $93.9 billion. Strip out the student loan portfolio accounting, and the grants, aid administration, and workforce programs that make up most of the function hum along at roughly $100 billion a year — exactly where FY2026\'s $92.0 billion year-to-date figure puts us now.',
      'The volatility lives entirely in the student loan programs. Federal student loans are not budgeted like grants. Under the Federal Credit Reform Act of 1990, a new loan is scored not at its face value but at its "subsidy cost" — the net present value of the government\'s expected gains and losses on it, which for student loans is usually a negative number (the government expects to profit). More importantly for this story, when the government changes the terms of outstanding loans — pausing payments, changing repayment rules, forgiving balances — the full change in expected value hits the budget immediately as a "modification." An announcement can move hundreds of billions through the budget without a single check being written. That is the machinery behind both the spike and the crash.',
    ],
  },
  {
    id: '2022-the-430-billion-entry',
    heading: '2022: The $430 Billion Entry That Was Never Spent',
    paragraphs: [
      'On August 24, 2022, the Biden administration announced a one-time student loan debt relief policy: cancellation of up to $10,000 in qualifying federal student loans for borrowers earning under $125,000 (individuals) or $250,000 (married couples), with up to $20,000 for Pell Grant recipients. About 43 million borrowers held $1.6 trillion in federal student loans, and the Congressional Budget Office estimated the plan would cost about $400 billion — with another $21 billion attached to the extension of the COVID-era payment pause.',
      'Under the Federal Credit Reform rules, that announcement had to be booked immediately. The Education Department estimated the modification cost at $337.3 billion for the Direct Loan program, $16.1 billion for the FFEL program, and $51 million for the TEACH Grant program. The full year\'s net modification costs across the student loan programs — including other payment-pause extensions and income-driven-repayment changes — totaled $450.5 billion: $425.8 billion in Direct Loans, $24.6 billion in FFEL, and small amounts in TEACH and HEAL.',
      'Because the announcement came in August, the entire entry landed in the final month of fiscal 2022. September 2022 — normally a surplus month, thanks to quarterly tax receipts — instead produced a $430 billion deficit, more than six times the prior September\'s $65 billion. Fiscal 2022 closed with $6.272 trillion in total outlays and a $1.375 trillion deficit; without the September loan-forgiveness entry, the year would have looked dramatically better on paper. The Department of Education alone reported $668.5 billion in total outlays for FY2022, a figure no real increase in classroom funding could ever explain.',
    ],
    chart: {
      title: 'Student Loan Net Modification Costs by Fiscal Year ($B)',
      caption:
        'U.S. Department of Education budget tables via Congressional Research Service report R48152. Positive values are upward modifications (costs); the FY2023 negative value is a downward modification — the reversal booked after the Supreme Court ruling.',
      type: 'bar',
      unit: '$B',
      data: [
        { label: 'FY2021', value: 77.0 },
        { label: 'FY2022', value: 450.5 },
        { label: 'FY2023', value: -207.2 },
      ],
    },
  },
  {
    id: '2023-the-207-billion-reversal',
    heading: '2023: The $207 Billion Reversal',
    paragraphs: [
      'The one-time relief policy never survived. Six states sued, and on June 30, 2023 — the last day of the Supreme Court term — the Court ruled 6-3 in Biden v. Nebraska that the Secretary of Education lacked authority under the HEROES Act of 2003 to cancel $430 billion in loan principal. No loans were ever canceled under the program; no borrower received the promised relief.',
      'But federal accounting does not care about outcomes — it cares about announced expectations. Just as the announcement was scored as a $450 billion cost in FY2022, the Court\'s preclusion of it was scored as a downward modification in FY2023: -$202.6 billion in the Direct Loan program, -$4.6 billion in FFEL, and small downward entries in TEACH, for a net of -$207.2 billion. It is one of the largest negative outlay entries ever booked in a single budget year.',
      'The effect on the headline numbers was immediate. The Office of Management and Budget\'s July 2023 Mid-Session Review cut its fiscal 2023 deficit forecast to $1.543 trillion, attributing $259 billion in reduced outlays largely to the student loan decision (partially offset by rule changes for income-driven repayments). The Department of Education\'s own books tell the same story: total outlays of $306.5 billion in FY2023 against $668.5 billion the year before — a $362 billion agency-level swing, nearly all of it the mirror image of an announcement that never took effect.',
    ],
    chart: {
      title: 'Department of Education Total Outlays: FY2022 vs. FY2023 ($B)',
      caption:
        'U.S. Department of Education FY 2023 Agency Financial Report, Management\'s Discussion and Analysis (outlays, net). The $362B drop is the reversal of the FY2022 loan-modification entry, not a cut to grants or aid.',
      type: 'bar',
      unit: '$B',
      data: [
        { label: 'FY2022', value: 668.5 },
        { label: 'FY2023', value: 306.5 },
      ],
    },
    callout: {
      type: 'warning',
      text: 'The $207 billion "saving" is an accounting reversal, not money returned to the Treasury. The FY2022 entry never represented cash spent, and the FY2023 reversal never represents cash collected. Both are revisions to estimated future loan values.',
    },
  },
  {
    id: '2024-through-today',
    heading: '2024 to Today: The Long Way Back to Normal',
    paragraphs: [
      'The story did not end with the Supreme Court ruling. Fiscal 2024 education function outlays stayed elevated at about $305.0 billion — three times the FY2018 baseline — because the administration kept announcing new loan policies through alternative legal routes: a new income-driven repayment plan (SAVE), targeted forgiveness for borrowers in public service and those affected by servicing errors, and the formal end of the multi-year payment pause in September 2023. Each announcement generated its own modification entries, keeping the line volatile even without the headline-grabbing $400 billion plan.',
      'That is why "federal education spending by year" has been unreadable at a glance for half a decade: the line mixes stable grant funding (K-12, Pell, workforce programs — roughly $100 billion a year) with the mark-to-market swings of a $1.6 trillion loan portfolio. In FY2020 the function ran at $236.7 billion on payment-pause accounting; in FY2021 and FY2023 the modifications ran positive then negative; in FY2024 the churn continued.',
      'By fiscal 2026, the noise has finally died down. With the September MTS not yet published, the year-to-date figure of $92.0 billion through August puts the function on pace for about $100 billion for the full year — almost exactly the pre-2020 baseline, adjusted for nothing but the passage of time. For the first time since 2019, the education line is boring again. Compare that with the other lines that have grown relentlessly instead of snapping back: /blog/us-debt-interest-vs-defense-spending.',
    ],
  },
  {
    id: 'reading-education-spending-honestly',
    heading: 'Reading Education Spending Honestly',
    paragraphs: [
      'Three lessons survive the swing. First, headline outlays are not classroom dollars. When someone cites the $676.6 billion FY2022 figure as proof that education spending exploded, or the $207 billion FY2023 reversal as proof of cuts, both claims are wrong — schools saw neither windfall. The grants that fund actual education were stable throughout; only the loan-portfolio accounting moved.',
      'Second, announcements are spending. This is the Federal Credit Reform Act working exactly as designed: it forces the government to recognize the cost of changing loan terms when the change happens, not decades later when the loans would have been repaid. The design is defensible — it stops administrations from booking free promises — but it means budget tables record the cost of intentions, and a court ruling six hundred days later erases it with a stroke.',
      'Third, the baseline is the story the numbers tell now. At about $92 billion year-to-date in FY2026, federal education spending is back where it belongs: a steady ~$100 billion-a-year function dominated by K-12 grants, Pell, and workforce training, plus the routine churn of a giant loan portfolio. The $600 billion swing — $676.6 billion at the FY2022 peak to $92.0 billion in the FY2026 year-to-date — is the largest policy-driven accounting round-trip in the modern budget. It changed almost nothing about American education. That gap between what the budget shows and what anyone experienced is worth remembering the next time any line spikes.',
    ],
    callout: {
      type: 'tip',
      text: 'The $600 billion swing in one sentence: FY2022 booked a $450.5B loan-modification cost for a forgiveness plan that was never implemented; FY2023 booked a $207.2B reversal when the Supreme Court struck it down. Actual grant and aid funding never moved.',
    },
  },
];

export const data: ArticleData = {
  slug: 'student-loan-accounting-education-spending',
  title: 'Federal Education Spending by Year: The $600B Swing',
  description:
    'Federal education spending swung from $676.6B in FY2022 to $92B FYTD in FY2026 — how student loan accounting, not classrooms, drove the swing.',
  keyword: 'federal education spending by year',
  category: 'Data Stories',
  datePublished: '2026-10-12',
  dateModified: '2026-10-12',
  readingTime: estimateReadingTime(sections),
  quickTakeaways: [
    {
      label: 'The swing',
      text: 'Education function outlays: $676.6B in FY2022 vs. $92.0B FYTD in FY2026 — a roughly $585B peak-to-present swing, the largest in the modern budget.',
    },
    {
      label: 'The spike',
      text: 'FY2022 booked $450.5B in student loan modification costs for the August 2022 one-time forgiveness plan — scored as spending the moment it was announced.',
    },
    {
      label: 'The reversal',
      text: 'After the Supreme Court struck the plan down 6-3 on June 30, 2023 (Biden v. Nebraska), FY2023 booked a -$207.2B downward modification.',
    },
    {
      label: 'The reality',
      text: 'Classroom funding never moved: K-12 grants, Pell, and workforce programs held at roughly $100B a year throughout. The swings were pure loan accounting.',
    },
  ],
  sections,
  faqs: [
    {
      question: 'How much does the federal government spend on education each year?',
      answer:
        'In ordinary years, about $100 billion a year — K-12 grants, Pell Grants, and workforce programs. The line swung wildly from 2020 to 2024 because of student loan accounting: $676.6 billion in FY2022 and $305.0 billion in FY2024, both driven by loan-modification entries rather than classroom funding. FY2026 is back to about $92 billion year-to-date.',
    },
    {
      question: 'Why did federal education spending spike to $676 billion in 2022?',
      answer:
        'It was an accounting entry, not real spending. When the Biden administration announced one-time student loan forgiveness in August 2022, federal credit-reform rules required the Education Department to book the expected $400+ billion cost immediately. Net loan-modification costs for FY2022 totaled $450.5 billion, and September 2022 — normally a surplus month — instead posted a $430 billion deficit.',
    },
    {
      question: 'Was the $430 billion in student loan forgiveness ever actually spent?',
      answer:
        'No. The Supreme Court struck down the forgiveness plan 6-3 on June 30, 2023 (Biden v. Nebraska), ruling the Education Secretary lacked authority under the HEROES Act. No loans were canceled under the program and no money was disbursed. The $450.5 billion was booked as an expected cost and later reversed with a -$207.2 billion entry in FY2023.',
    },
    {
      question: 'Why did education spending fall after 2022?',
      answer:
        'Because the FY2022 spike was an estimate that got canceled. The Supreme Court\'s June 2023 ruling forced the Education Department to reverse the forgiveness cost as a "downward modification" of -$207.2 billion, which OMB said cut FY2023 outlays by $259 billion. The Department\'s total outlays fell from $668.5 billion in FY2022 to $306.5 billion in FY2023 — a reversal of accounting, not a cut to schools.',
    },
    {
      question: 'What is a loan modification in federal budget accounting?',
      answer:
        'Under the Federal Credit Reform Act of 1990, federal loans are budgeted at their "subsidy cost" — the net present value of expected cash flows. When the government changes loan terms (forgiveness, payment pauses, new repayment plans), the full change in expected value is recorded immediately as a "modification." That is why a forgiveness announcement can add $450 billion to outlays in the month it is announced, years before any cash would have moved.',
    },
    {
      question: 'How much is the federal government spending on education now?',
      answer:
        'About $92 billion year-to-date in FY2026 (through August 31, 2026), putting the full year on pace for roughly $100 billion — essentially the pre-2020 baseline. The student loan portfolio churn that drove the 2020-2024 swings has quieted, so the line is dominated again by K-12 grants, higher education programs, and career and technical education.',
    },
  ],
  sources: [
    {
      name: 'Congressional Research Service — "Biden Administration Executive Actions Resulting in Modifications for the Federal Student Loan Programs" (R48152)',
      url: 'https://www.congress.gov/crs-product/R48152',
    },
    {
      name: 'U.S. Department of Education — FY 2023 Agency Financial Report, Management\u2019s Discussion and Analysis',
      url: 'https://www.ed.gov/sites/ed/files/about/reports/annual/2023report/2c-mda-financial-highlights.pdf',
    },
    {
      name: 'Reuters — "U.S. FY 2022 budget deficit halves to $1.375 trln despite student loan costs" (Oct 21, 2022)',
      url: 'https://d2233.cms.socastsrm.com/2022/10/21/u-s-fy-2022-budget-deficit-halves-to-1-375-trln-despite-student-loan-costs/',
    },
    {
      name: 'Reuters — "White House cuts 2023 US deficit forecast after student loan forgiveness struck down" (Jul 28, 2023)',
      url: 'https://kwsn.com/2023/07/28/white-house-cuts-2023-us-deficit-forecast-after-student-loan-forgiveness-struck-down/',
    },
  ],
  relatedSlugs: ['how-much-us-spends-per-second', 'us-debt-interest-vs-defense-spending'],
};
