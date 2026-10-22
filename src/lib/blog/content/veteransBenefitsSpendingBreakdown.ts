import type { ArticleData } from '../types';
import { estimateReadingTime } from '../types';

const sections: ArticleData['sections'] = [
  {
    id: 'the-answer',
    heading: 'Veterans Benefits: Where $396 Billion Goes',
    paragraphs: [
      'Veterans benefits are the sixth-largest line item in the federal budget, and they have quietly become one of its fastest-growing. Through August 31, 2026 — the first eleven months of fiscal year 2026 — outlays for the veterans benefits and services budget function totaled $395.6 billion. That is 5.8% of every dollar the federal government has spent this fiscal year, and it works out to about $1.18 billion every single day, or roughly $22,500 for each of the 17.6 million living veterans so far this year.',
      'For perspective, the veterans category is larger than the entire federal functions for infrastructure and transportation ($126.4 billion), education ($92.0 billion), agriculture and food assistance ($51.0 billion), and science ($36.2 billion) — combined twice over. It is 45% the size of the defense budget. And veterans spending is separate from defense spending entirely: the $876.2 billion national defense figure you see elsewhere on this site does not include a cent of VA money. The full ranking: /blog/where-does-us-federal-budget-go.',
      'Three honesty notes before we go further. First, $395.6 billion is outlays — money actually paid — through August, not the full fiscal year. The September 2026 Treasury finals exist but the site\'s category data has not been refreshed past August; at the current pace, full-year veterans outlays would land around $431 billion. Second, the number you sometimes hear — $445.5 billion — is enacted budget authority (Congress\'s appropriation), which is a ceiling, not a spend; outlays trail it. Third, and most important: about 70% of VA spending is mandatory, meaning benefits like disability compensation and pensions flow to eligible veterans by law, not by annual congressional vote. See how that works: /blog/what-is-mandatory-vs-discretionary-spending.',
    ],
    chart: {
      title: 'The Six Largest Federal Budget Categories, FY2026 FYTD ($B)',
      caption:
        'U.S. Treasury Monthly Treasury Statement, Table 9, through August 31, 2026, via this site\'s data. Veterans benefits ($395.6B) rank sixth, larger than infrastructure, education, agriculture, and science combined.',
      type: 'bar',
      unit: '$B',
      data: [
        { label: 'Social Security', value: 1525.9 },
        { label: 'Net Interest', value: 1017.0 },
        { label: 'Medicare', value: 979.3 },
        { label: 'Health programs', value: 925.7 },
        { label: 'Defense', value: 876.2 },
        { label: 'Veterans', value: 395.6 },
      ],
    },
    callout: {
      type: 'info',
      text: 'Explore the full category with its own charts and state breakdowns: /categories/veterans-affairs-spending.',
    },
  },
  {
    id: 'three-buckets',
    heading: 'The VA Budget in Three Buckets: Benefits, Health Care, and the PACT Act Fund',
    paragraphs: [
      'The Department of Veterans Affairs is really three agencies in one: the Veterans Health Administration (VHA), which runs hospitals and clinics; the Veterans Benefits Administration (VBA), which writes the benefit checks; and the National Cemetery Administration (NCA), which maintains 158 national cemeteries. Congress\'s fiscal 2026 appropriation — the Military Construction, Veterans Affairs, and Related Agencies Appropriations Act, signed November 12, 2025 as part of the package reopening the government — made $445.5 billion available to the department, about 12.4% more than fiscal 2025.',
      'That $445.5 billion falls into three buckets. The largest is mandatory funding: $259.6 billion for disability compensation, pensions, education benefits, and other entitlements. These are not voted on each year — under statutes like 38 U.S.C. § 1110, any veteran with a service-connected disability is entitled to compensation, and the word \'shall\' in the law means the VA has no discretion to withhold payment from eligible veterans. Everyone who qualifies gets paid, automatically.',
      'The second bucket is discretionary: $133.2 billion for the things Congress must approve each year — running the health care system, maintaining facilities, IT systems, and administration. This is where the policy fights happen. The third bucket is the Toxic Exposures Fund (TEF), $52.7 billion in fiscal 2026, a 73% increase over the prior year. Created alongside the 2022 PACT Act, the TEF funds the care, staffing, IT, and benefits delivery for veterans exposed to burn pits, Agent Orange, and other environmental hazards — costs the original PACT Act estimates dramatically underestimated. All told, discretionary funding is just 30% of VA resources; the other 70% flows by law.',
    ],
    chart: {
      title: 'FY2026 VA Enacted Appropriation: Where $445.5B Comes From ($B)',
      caption:
        'Military Construction, Veterans Affairs, and Related Agencies Appropriations Act, 2026, via Federal Budget IQ. These are budget authority (appropriations), not Treasury outlays — actual spending trails them.',
      type: 'bar',
      unit: '$B',
      data: [
        { label: 'Mandatory benefits', value: 259.6 },
        { label: 'Discretionary', value: 133.2 },
        { label: 'Toxic Exposures Fund', value: 52.7 },
      ],
    },
  },
  {
    id: 'disability-compensation',
    heading: 'Disability Compensation: The Largest Single Benefit',
    paragraphs: [
      'The single biggest thing the VA buys is disability compensation — monthly, tax-free payments to veterans for injuries and illnesses connected to their service. During fiscal 2026 alone, the department paid out more than $207 billion in disability compensation and pension benefits to veterans and survivors, a figure Stars and Stripes reported from VA data this October. Roughly 6.5 million veterans currently receive compensation checks, and just over 2 million of them are rated 100% disabled.',
      'Payments scale with the disability rating, from 10% to 100%. In 2026, a veteran rated 100% with no dependents receives $3,938.58 per month — up 2.8% from 2025 under the cost-of-living adjustment that took effect December 1, 2025. Partial ratings pay proportionally less, and veterans with dependents, severe injuries, or unemployability status can receive more. Pensions are the smaller sibling program: about 191,000 wartime veterans and survivors with limited income received pensions in fiscal 2025, at a cost of roughly $3.1 billion — small in budget terms, but often the difference between poverty and stability for its recipients.',
      'The system moves enormous volume. The VA processed more than 3 million disability claims in fiscal 2025 — the most in history — and completed over 3.1 million more in fiscal 2026 at a record pace, while granting more than 60% of claims. Average decision time fell from 141.5 days in January 2025 to 75.6 days this September, and the backlog of pending claims dropped below 100,000 for the first time since 2020. Accuracy reached 94%, the highest in two years. The department is now aiming to push average processing times down to 30–40 days — though veterans\' advocates note that fast decisions and correct decisions are not the same thing, and only about 3% of VBA decisions are appealed to the Board of Veterans\' Appeals.',
    ],
  },
  {
    id: 'va-health-care',
    heading: 'VA Health Care: 8.6 Million Veterans Enrolled',
    paragraphs: [
      'The second pillar is health care, run by the Veterans Health Administration — the largest integrated health care system in the United States, with 1,388 care sites including 173 medical centers. Congress appropriated $113.8 billion specifically for VA medical care in fiscal 2026, and the administration\'s request put total health spending at $165.1 billion, a 17% increase driven largely by a 26%-plus surge in Medical Community Care — the program that pays for veterans to see private doctors when the VA can\'t see them in time.',
      'Enrollment keeps breaking records. About 8.62 million veterans are active enrollees in the VA health care system as of April 2026, and more than 270,000 veterans enrolled for the first time during 2026 alone — the fastest pace of new enrollment ever recorded. In fiscal 2025 the system completed a record 82.1 million direct-care appointments, up 4.1% from the prior year, alongside 60 million community-care appointments. It permanently housed nearly 52,000 homeless veterans — the highest total in seven years — and kept the total homeless-veteran count below 50,000 for the first time since tracking began. Mental health and suicide prevention remain a top priority: Congress flatly prohibited any reduction in staffing, hours, or services for the Veterans Crisis Line.',
      'Not everything in the health budget is smooth. The Electronic Health Record Modernization program — the VA\'s troubled attempt to replace its aging VistA system with Oracle Cerner — got $3.4 billion for 2026, $2.1 billion more than 2025, as deployments restarted at 13 new sites. Congress withheld 30% of that funding until the department delivers a facility-by-facility schedule, an updated life-cycle cost, and certified performance metrics — a sign of how little patience remains after years of cost overruns and clinician complaints.',
    ],
  },
  {
    id: 'growth-story',
    heading: 'Why Veterans Spending Doubled in Eight Years',
    paragraphs: [
      'Veterans outlays have grown relentlessly: $178.9 billion in fiscal 2018, $218.7 billion in 2020, $274.4 billion in 2022, $325.4 billion in 2024, and $395.6 billion through the first eleven months of 2026 — more than double in eight years, a 121% increase. Nothing about the defense or Medicare lines has grown that fast in the same span. Four forces explain it.',
      'First, the PACT Act of 2022. By extending benefits to millions of veterans exposed to burn pits, Agent Orange, and other toxic hazards — and making dozens of conditions presumptive, meaning veterans no longer have to prove the connection — the law triggered a surge of claims that is still compounding. Veterans have completed 2.36 million PACT Act-related claims, undergone 6.8 million toxic-exposure screenings, and nearly 900,000 post-9/11 veterans enrolled in health care under the law\'s expanded eligibility. The TEF\'s 73% funding jump in 2026 is the budget admitting the original cost estimates were wrong.',
      'Second, demographics: the veteran population is aging, and older veterans file more — and more expensive — claims. Third, cost-of-living adjustments compound automatically every year, lifting the per-recipient payment. Fourth, outreach has simply worked: more eligible veterans now know what they\'re entitled to, and the VA has cut the friction of claiming. The result is a budget line that behaves less like discretionary spending and more like a slow-moving entitlement — because, for the most part, that is exactly what it is.',
    ],
    chart: {
      title: 'Veterans Benefits Outlays, FY2018–FY2026 ($B)',
      caption:
        'U.S. Treasury Monthly Treasury Statement, Table 9, via this site\'s data. FY2018–FY2024 are full-year actuals; FY2026 is year-to-date through August 31, 2026. Veterans outlays have grown 121% since 2018.',
      type: 'line',
      unit: '$B',
      data: [
        { label: '2018', value: 178.9 },
        { label: '2020', value: 218.7 },
        { label: '2022', value: 274.4 },
        { label: '2024', value: 325.4 },
        { label: '2026*', value: 395.6 },
      ],
    },
  },
  {
    id: 'everything-else',
    heading: 'Everything Else: Education, Housing, Insurance, and Cemeteries',
    paragraphs: [
      'Disability checks and doctor visits dominate the dollars, but the VA\'s reach extends into education, housing, and end-of-life benefits. Education is the best-known: the GI Bill and related programs supported 949,308 education beneficiaries in fiscal 2025, with the fiscal 2026 budget requesting $16.2 billion for education and job training. About 117,000 veterans participated in vocational rehabilitation (Chapter 31) in fiscal 2025 — training and employment services for veterans with service-connected disabilities.',
      'The VA home loan program is one of the federal government\'s quietest successes: roughly 90% of VA-backed mortgages require no down payment, and 4.01 million veterans are active participants. Since 1944, the program has guaranteed more than 29 million home loans, with over 500,000 guaranteed in fiscal 2025 alone. The VA also supervises $1.5 trillion in life insurance face value for veterans and service members — a line item that rarely makes headlines but represents one of the largest insurance portfolios in the country.',
      'Then there are the obligations at life\'s other end. The National Cemetery Administration operates on just $480 million — a rounding error in a $445 billion department — yet maintains 158 national cemeteries and buries roughly 150,000 veterans and family members a year with full military honors. Survivors\' benefits matter too: 544,636 spouses receive Dependency and Indemnity Compensation. Put together, the picture is a department that touches veterans from the day they separate to the day they\'re buried — and that\'s why the money keeps growing.',
    ],
    callout: {
      type: 'tip',
      text: 'Want to see the entitlement mechanics behind that 70% mandatory figure? /blog/what-is-mandatory-vs-discretionary-spending explains how benefits that \\u2018just flow\\u2019 differ from programs Congress funds each year.',
    },
  },
];

export const data: ArticleData = {
  slug: 'veterans-benefits-spending-breakdown',
  title: 'Veterans Benefits: Where $396 Billion Goes',
  description:
    'Veterans benefits spending reached $395.6B in FY2026 — 70% mandatory, doubled since 2018. Where the money goes: disability, health care, PACT Act.',
  keyword: 'veterans benefits spending',
  category: 'Data Stories',
  datePublished: '2026-10-22',
  dateModified: '2026-10-22',
  readingTime: estimateReadingTime(sections),
  quickTakeaways: [
    {
      label: '$395.6 billion',
      text: 'FY2026 outlays through Aug 31 — the 6th-largest federal budget category, 5.8% of all spending, about $1.18B per day.',
    },
    {
      label: '~70% mandatory',
      text: 'Disability compensation and pensions flow by law to 6.5M recipients; only about 30% of VA resources need annual congressional approval.',
    },
    {
      label: 'Doubled since 2018',
      text: 'Veterans outlays grew 121% in eight years — the PACT Act, aging veterans, COLA, and record claims processing all compounding.',
    },
    {
      label: '$207B+ in checks',
      text: 'Paid in disability compensation and pensions during FY2026, at a record pace with 94% decision accuracy.',
    },
  ],
  sections,
  faqs: [
    {
      question: 'How much does the US spend on veterans benefits in 2026?',
      answer:
        'Through August 31, 2026, Treasury outlays for veterans benefits and services totaled $395.6 billion — the sixth-largest federal budget category at 5.8% of all spending. Congress separately appropriated $445.5 billion in VA budget authority for fiscal 2026. At the current pace, full-year outlays would land around $431 billion.',
    },
    {
      question: 'Why did veterans spending double since 2018?',
      answer:
        'Outlays rose from $178.9 billion in 2018 to $395.6 billion (FYTD) in 2026, a 121% increase. The 2022 PACT Act expanded eligibility for toxic-exposure veterans and triggered millions of new claims; the veteran population is aging and filing more expensive claims; annual cost-of-living adjustments compound; and successful outreach brought hundreds of thousands of new veterans into the system.',
    },
    {
      question: 'Is VA disability compensation mandatory or discretionary spending?',
      answer:
        'Mandatory. Under statutes like 38 U.S.C. § 1110, eligible veterans are entitled to compensation by law — Congress does not vote on the amount each year. About 70% of all VA resources are mandatory; only the roughly 30% covering medical care operations, facilities, IT, and administration is discretionary and subject to annual appropriations.',
    },
    {
      question: 'How many veterans receive VA benefits?',
      answer:
        'About 6.5 million veterans receive disability compensation and 8.62 million are enrolled in VA health care, out of 17.6 million living veterans. Another 949,000 used VA education benefits in fiscal 2025, 4 million participate in the VA home loan program, and 545,000 spouses receive Dependency and Indemnity Compensation.',
    },
    {
      question: 'What is the difference between VA health care and VA benefits?',
      answer:
        'VA health care, run by the Veterans Health Administration, is medical treatment at 1,388 VA care sites or via community providers — funded at $113.8 billion in discretionary appropriations for 2026. VA benefits, run by the Veterans Benefits Administration, are the checks and programs: disability compensation, pensions, GI Bill education, and home loans — mostly mandatory spending totaling $259.6 billion appropriated in 2026.',
    },
    {
      question: 'How does veterans spending compare to defense spending?',
      answer:
        'They are separate budget categories. Veterans benefits ($395.6 billion FYTD) are about 45% the size of national defense outlays ($876.2 billion FYTD) — roughly a 2.2-to-1 ratio. Defense covers active-duty forces, weapons, and operations; veterans spending covers the obligations to those who already served.',
    },
  ],
  sources: [
    {
      name: 'U.S. Department of the Treasury — Monthly Treasury Statement (Fiscal Data)',
      url: 'https://fiscaldata.treasury.gov/',
    },
    {
      name: 'Federal Budget IQ — Robust VA Funding Crosses the Finish Line (FY26 enacted details)',
      url: 'https://federalbudgetiq.com/insights/robust-va-funding-crosses-the-finish-line/',
    },
    {
      name: 'U.S. Department of Veterans Affairs — VA Benefits & Health Care Utilization Pocket Card, FY2026 Q2',
      url: 'https://www.va.gov/VETDATA/docs/pocketcards/FY2026Q2.pdf',
    },
    {
      name: 'Military.com — 200,000 Veterans Have Enrolled in VA Health Care in 2026',
      url: 'https://www.military.com/200000-veterans-have-enrolled-in-va-health-care-this-year-will-you-be-next',
    },
  ],
  relatedSlugs: [
    'what-is-mandatory-vs-discretionary-spending',
    'defense-vs-education-spending',
    'federal-deficit-2026-how-big',
    'us-debt-interest-vs-defense-spending',
  ],
};
