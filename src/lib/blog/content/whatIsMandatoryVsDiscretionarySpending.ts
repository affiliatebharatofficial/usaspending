import type { ArticleData } from '../types';
import { estimateReadingTime } from '../types';

const sections: ArticleData['sections'] = [
  {
    id: 'the-30-second-version',
    heading: 'Mandatory vs. Discretionary: The 30-Second Version',
    paragraphs: [
      'Of the roughly $7.45 trillion the federal government is projected to spend in fiscal 2026, about $4.53 trillion — 61% — is mandatory: spending set by permanent law that runs on autopilot. Another $1.88 trillion — 25% — is discretionary: the part Congress actually votes on each year through its appropriations bills. The remaining $1.04 trillion — 14% — is net interest on the debt, technically mandatory but always reported on its own line. Those splits come from the Congressional Budget Office\'s February 2026 budget baseline, the official source for the mandatory-versus-discretionary classification.',
      'The labels have nothing to do with how important a program is — they describe the legal mechanism that releases the money. "Mandatory" means an authorizing law already told the Treasury to pay: anyone who qualifies gets the benefit, whether or not Congress passes a budget this year. "Discretionary" means Congress must pass a law each year, or the money stops. Mix the two up and every budget headline — shutdowns, "spending cuts," trillion-dollar deficits — reads backwards. Keep them straight and almost every fiscal fight suddenly makes sense.',
    ],
    callout: {
      type: 'info',
      text: 'The 61/25/14 split is the CBO\'s February 2026 full-year projection. The Treasury\'s own published actuals — $6.81 trillion in outlays through August 31, 2026 — don\'t divide spending into these buckets; only the CBO classifies it this way. Individual program figures in this article use Treasury actuals unless labeled otherwise.',
    },
  },
  {
    id: 'what-mandatory-means',
    heading: 'What "Mandatory" Actually Means: The Autopilot Budget',
    paragraphs: [
      'Mandatory spending — also called direct spending — is money the government is legally required to spend because an authorizing statute says so. Social Security is the classic case: the law sets eligibility rules (age, work credits, disability status) and a benefit formula, and checks go out to everyone who qualifies. Congress never votes on the Social Security total for the year; it emerges from the formula. Through August 2026 the Treasury paid out $1.526 trillion in Social Security benefits — the single largest budget line, larger than the entire defense budget for the same period.',
      'The big three dominate the bucket. Medicare ran $979 billion and Medicaid $926 billion through August on the Treasury data, and the CBO\'s full-year projections put Social Security at $1.67 trillion, Medicare at $1.06 trillion, and Medicaid plus health subsidies at $0.85 trillion. Add veterans\' disability compensation and pensions, SNAP food assistance, federal retirement benefits, and unemployment insurance — roughly $960 billion of "other mandatory" — and you have the 61%. More than half of all mandatory dollars go to Social Security and Medicare alone, per USAFacts\' analysis of fiscal 2025 actuals ($4.2 trillion mandatory, $1.9 trillion discretionary, $970 billion net interest).',
      'Here is the twist that trips people up: some mandatory programs do get voted on every year. Medicaid, SNAP, and veterans\' disability compensation are funded through annual appropriations bills — but the amounts aren\'t chosen by the appropriators. The underlying law requires the government to pay benefits to everyone eligible, so the appropriation just funds whatever the formula produces. The CBO calls this "appropriated mandatory spending." The label follows the legal commitment, not the paperwork — which is why the annual budget debate can\'t touch these programs without first rewriting the laws behind them.',
    ],
    chart: {
      title: 'The Largest Mandatory Programs, FY2026 FYTD ($B)',
      caption:
        'U.S. Treasury Monthly Treasury Statement, Table 9, fiscal year-to-date through August 31, 2026. Social Security, Medicare, and Medicaid are the three largest mandatory programs (CBO classification).',
      type: 'bar',
      unit: '$B',
      data: [
        { label: 'Social Security', value: 1525.9 },
        { label: 'Medicare', value: 979.3 },
        { label: 'Medicaid', value: 925.7 },
      ],
    },
  },
  {
    id: 'what-discretionary-means',
    heading: 'What "Discretionary" Actually Means: The Part Congress Votes On',
    paragraphs: [
      'Discretionary spending is whatever Congress funds through the annual appropriations process — the 12 regular appropriations bills that are supposed to be finished by October 1, when the fiscal year starts. Defense is the giant in this bucket: $876 billion through August, nearly all of it discretionary, roughly half of all discretionary spending. Everything else — education, transportation, NASA and science, the FBI, national parks, federal salaries — shares what\'s left. The CBO\'s full-year projection puts nondefense discretionary at about $1.0 trillion.',
      'This is the only part of the budget that can be shut down. When appropriations lapse, agencies funded by discretionary dollars furlough workers and close offices — but Social Security checks keep going out and Medicare keeps paying doctors, because those run on mandatory authority. Continuing resolutions, which extend last year\'s funding temporarily, are the standard patch when Congress misses the October 1 deadline, which is most years.',
      'And the discretionary slice has been shrinking for decades relative to the economy: 5.9% of GDP in fiscal 2026, below the 50-year average of 7.8%, per the Congressional Research Service\'s summary of the CBO baseline. Congress used to operate under statutory caps — the Budget Control Act of 2011 limited most discretionary budget authority from 2012 to 2021 — but no caps are in effect now; the Fiscal Responsibility Act set top-line numbers only through fiscal 2025. Explore the full breakdown at /spending-breakdown.',
    ],
    chart: {
      title: 'Inside the Discretionary Bucket: Treasury Actuals, FYTD ($B)',
      caption:
        'U.S. Treasury Monthly Treasury Statement, Table 9, through August 31, 2026. Defense is almost entirely discretionary (CBO); education and science are largely discretionary. CBO projects total discretionary outlays of $1.88T for full-year FY2026.',
      type: 'bar',
      unit: '$B',
      data: [
        { label: 'Defense / Military', value: 876.2 },
        { label: 'Education & Training', value: 92.0 },
        { label: 'Science & Medical Research', value: 36.2 },
      ],
    },
  },
  {
    id: 'the-three-buckets',
    heading: 'The Three Buckets, Side by Side',
    paragraphs: [
      'The CBO\'s official framework actually has three lines, not two: mandatory, discretionary, and net interest — reported separately because it\'s the cost of past borrowing rather than a current policy choice. At $1.04 trillion projected for fiscal 2026, interest now rivals Medicare as a budget line and exceeds defense. Through August alone the Treasury paid $1.017 trillion in net interest. It\'s the one part of the budget nobody voted for this year and everybody pays for — the full story of the crossover is at /blog/us-debt-interest-vs-defense-spending and /categories/net-interest-spending.',
      'Two facts make the whole picture click. First, the part of the budget Congress argues about every fall — the discretionary appropriations — is the smallest of the three buckets: one quarter of the total. Second, that means the annual budget debate is largely about the margins. Roughly three-quarters of federal spending will happen next year at whatever the formulas and the bond market dictate, no matter what the appropriations bills say.',
    ],
    chart: {
      title: 'FY2026 Projected Outlays: The Three Buckets ($T)',
      caption:
        'Congressional Budget Office, The Budget and Economic Outlook: 2026 to 2036 (February 2026) — projected full-year FY2026 outlays of $7.45T. CBO projections, not final results.',
      type: 'bar',
      unit: '$T',
      data: [
        { label: 'Mandatory', value: 4.53 },
        { label: 'Discretionary', value: 1.88 },
        { label: 'Net interest', value: 1.04 },
      ],
    },
  },
  {
    id: 'how-the-balance-flipped',
    heading: 'How Mandatory Took Over the Budget',
    paragraphs: [
      'This wasn\'t always the shape of the budget. In the early 1970s, the proportions were nearly reversed: about 60% of federal outlays were discretionary and about 30% mandatory. Today mandatory is about 60% and discretionary about 30%, with the remaining roughly 10% being net interest (CBO, via USAFacts). The flip took fifty years and had three engines: demography (more retirees living longer — Social Security and Medicare grow every year on formula), health-care costs rising faster than the economy, and the compounding of permanent programs created in the 1960s — Medicare and Medicaid date to 1965, and their enrollment and costs have grown for six decades.',
      'Meanwhile discretionary spending was repeatedly squeezed — sequestration cuts in 2013, a decade of Budget Control Act caps through 2021 — while mandatory programs, shielded by their authorizing statutes, kept growing on formula. The Congressional Research Service\'s summary of the FY2026 baseline is blunt: "over time, the share of mandatory outlays has increased and that of discretionary spending has decreased." In GDP terms, mandatory outlays are now 14.2% of the economy versus 5.9% for discretionary.',
      'And the boundary between the buckets is a legal classification Congress can redraw at will. The 2025 reconciliation act moved roughly $70 billion of border-security and immigration-enforcement funding into the mandatory column, per the CBO\'s analysis of the President\'s 2027 budget. Same dollars, different label — because reconciliation bills can create mandatory spending that the annual appropriations process never touches. The bucket a dollar sits in tells you how it was authorized, not what it buys.',
    ],
    chart: {
      title: 'Mandatory Up, Discretionary Down: Share of Federal Outlays (%)',
      caption:
        'CBO, via USAFacts: early-1970s versus recent shares of total federal outlays. Net interest (the remainder, ~10%) is excluded for clarity.',
      type: 'line',
      unit: '%',
      data: [
        { label: '1972', value: 30 },
        { label: '2025', value: 60 },
      ],
      series2Label: 'Discretionary share',
      series2Data: [
        { label: '1972', value: 60 },
        { label: '2025', value: 30 },
      ],
    },
  },
  {
    id: 'why-it-matters',
    heading: 'Why the Distinction Decides Every Budget Fight',
    paragraphs: [
      'First, it sets the math of deficit reduction. The fiscal 2026 deficit is about $2 trillion, and total projected discretionary spending is $1.88 trillion. Even eliminating every discretionary program — the entire military, every park, every federal salary — would barely close this year\'s gap. Any serious plan to shrink the deficit has to touch the mandatory side: benefit formulas, eligibility rules, or revenues. That\'s why budget analysts say the appropriations debate, for all its noise, is the least important part of fiscal policy.',
      'Second, it explains what a shutdown can and can\'t do. A lapse in appropriations stops only discretionary spending — roughly a quarter of the budget. The mandatory three-quarters keep flowing. Promises to "shut down the government until spending is cut" threaten the smaller bucket while the deficit engine runs untouched — which is why shutdowns are expensive political theater that barely moves the fiscal needle.',
      'Third, it determines which laws matter. Annual appropriations bills can only move discretionary dollars. Changing mandatory spending requires changing the authorizing law — usually through reconciliation, the filibuster-proof process behind most major fiscal shifts of the last four decades. And there\'s a guardrail in the other direction: the Statutory Pay-As-You-Go Act of 2010 can trigger automatic across-the-board cuts — sequestration — to mandatory programs when new laws add to the deficit without offsets. Compare categories head-to-head with /compare.',
    ],
    callout: {
      type: 'tip',
      text: 'When you hear "spending cuts" in the news, ask: discretionary or mandatory? If it\'s an appropriations bill, it\'s the 25%. The 61% can only move when Congress rewrites the underlying law — a much heavier lift.',
    },
  },
  {
    id: 'common-misconceptions',
    heading: 'Three Things People Get Wrong',
    paragraphs: [
      '"Congress votes on the whole budget every year." It doesn\'t — not even close. The appropriations bills Congress fights over each fall cover about a quarter of spending. The rest is set by permanent law and flows whether or not a single budget bill passes. The annual budget drama is real, but it governs the minority share.',
      '"Cutting small programs will fix the deficit." Nondefense discretionary spending is about $1 trillion total — education, science, parks, foreign aid, all of it combined. Federal science and medical research ran $36 billion through August — about half a percent of outlays. You could zero out NASA, the National Park Service, and foreign aid and barely dent a $2 trillion deficit. The arithmetic forces the conversation toward the big mandatory programs and taxes — which is exactly why the conversation rarely happens.',
      '"Mandatory means unchangeable." It doesn\'t — it means changeable only by changing the law, which is harder but entirely possible. Congress rewrites mandatory programs regularly: Social Security\'s retirement age was raised in 1983, Medicare added prescription-drug coverage in 2003, the Affordable Care Act reshaped Medicaid in 2010. "Mandatory" describes how the money flows, not whether Congress has the power to redirect it — it just has to do the harder work of rewriting statutes instead of the easier work of writing appropriations.',
    ],
  },
];

export const data: ArticleData = {
  slug: 'what-is-mandatory-vs-discretionary-spending',
  title: 'Mandatory vs. Discretionary Spending, Explained',
  description:
    'About 61% of federal spending is mandatory — set by law, not voted on yearly. How the three budget buckets work, with CBO and Treasury numbers.',
  keyword: 'mandatory vs discretionary spending',
  category: 'Explainers',
  datePublished: '2026-10-20',
  dateModified: '2026-10-20',
  readingTime: estimateReadingTime(sections),
  quickTakeaways: [
    {
      label: 'Mandatory: ~$4.5T (61%)',
      text: 'Runs on autopilot — Social Security, Medicare, Medicaid and other programs set by permanent law. Congress doesn\'t vote on the total each year.',
    },
    {
      label: 'Discretionary: ~$1.9T (25%)',
      text: 'The part Congress debates annually — defense plus education, science, parks and federal salaries. Defense is about half of it.',
    },
    {
      label: 'Net interest: ~$1.0T (14%)',
      text: 'Technically mandatory but reported separately — the cost of past borrowing, due no matter what Congress passes.',
    },
    {
      label: 'The 50-year flip',
      text: 'Mandatory rose from ~30% of outlays in the early 1970s to ~60% today; discretionary fell from ~60% to ~30%. The annual budget fight is about the shrinking slice.',
    },
  ],
  sections,
  faqs: [
    {
      question: 'What is the difference between mandatory and discretionary spending?',
      answer:
        'Mandatory (direct) spending is set by authorizing laws — eligibility rules and benefit formulas decide the total, so it runs automatically. Social Security, Medicare, and Medicaid are the big ones. Discretionary spending is chosen each year in appropriations bills — defense, education, science, federal salaries. The CBO reports net interest separately. The FY2026 split (CBO projections): about 61% mandatory, 25% discretionary, 14% interest.',
    },
    {
      question: 'What are examples of mandatory spending?',
      answer:
        'Social Security ($1.67T projected for FY2026), Medicare ($1.06T), and Medicaid plus health subsidies ($0.85T) are the three largest. Veterans\' disability compensation and pensions, SNAP food assistance, federal retirement benefits, and unemployment insurance make up roughly $960 billion of "other mandatory." Some, like Medicaid and SNAP, are funded through annual appropriations but still count as mandatory because the law requires paying eligible beneficiaries.',
    },
    {
      question: 'What percentage of the federal budget is discretionary?',
      answer:
        'About 25% in fiscal 2026 — $1.88 trillion of $7.45 trillion in projected outlays (CBO February 2026 baseline) — down from roughly 60% in the early 1970s. Defense is about half of it ($876 billion through August per Treasury actuals); the rest covers everything from education to national parks. As a share of the economy it\'s 5.9% of GDP, below the 50-year average of 7.8%.',
    },
    {
      question: 'Does a government shutdown stop mandatory spending?',
      answer:
        'No. Shutdowns happen when discretionary appropriations lapse, so they affect only the roughly 25% of spending Congress votes on annually — furloughed workers, closed parks, paused services. Mandatory programs keep paying because their authority comes from permanent law, not the appropriations bills: Social Security checks, Medicare payments, and interest on the debt all continue.',
    },
    {
      question: 'Is interest on the national debt mandatory spending?',
      answer:
        'Technically yes, but the CBO always reports it separately as net interest. At about $1.04 trillion projected for FY2026 (14% of outlays; $1.017 trillion already paid through August per Treasury actuals), it must be paid regardless of what Congress does — it\'s the bill for past borrowing, not a policy choice made this year. It\'s also the fastest-growing line in the budget.',
    },
    {
      question: 'How can Congress reduce mandatory spending?',
      answer:
        'By changing the authorizing law — benefit formulas, eligibility rules, or program structure — usually through reconciliation, the filibuster-proof budget process. Examples: raising Social Security\'s retirement age (1983), Medicare prescription-drug coverage (2003), the Affordable Care Act\'s Medicaid changes (2010). There\'s also a backstop: the 2010 Statutory PAYGO Act can trigger automatic sequestration cuts to mandatory programs when new legislation adds to the deficit without offsets.',
    },
  ],
  sources: [
    {
      name: 'Congressional Budget Office — "Common Budgetary Terms Explained"',
      url: 'https://www.cbo.gov/publication/57660',
    },
    {
      name: 'USAFacts — "What is US Federal Government Mandatory Spending"',
      url: 'https://usafacts.org/articles/mandatory-spending-definition/',
    },
    {
      name: 'Congressional Research Service — "Overview of Fiscal Spending Projections: FY2027 Budget Cycle" (via LegiStorm)',
      url: 'https://www.Legistorm.com/reports/view/crs/675512/Overview_of_Fiscal_Spending_Projections_FY2027_Budget_Cycle.html',
    },
    {
      name: 'The Daily Ledger — "Federal Budget Breakdown 2026" (CBO Feb 2026 projections)',
      url: 'https://www.thedailyledgerhq.com/federal-budget-breakdown-2026.html',
    },
  ],
  relatedSlugs: [
    'where-does-us-federal-budget-go',
    'deficit-vs-debt-vs-interest-explained',
    'federal-deficit-2026-how-big',
  ],
};
