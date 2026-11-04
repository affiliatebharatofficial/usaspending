import type { ArticleData } from '../types';
import { estimateReadingTime } from '../types';

const sections: ArticleData['sections'] = [
  {
    id: 'the-short-answer',
    heading: 'Federal vs. State Spending: The Short Answer',
    paragraphs: [
      'The federal government is the biggest spender in American public life, but it is not the only one — and for the services you touch most often, it is not even the main one. In fiscal year 2026, the federal government spent $7.396 trillion, according to the Treasury’s September 2026 Monthly Treasury Statement, the final statement of the fiscal year. State and local governments together spent $4.182 trillion in 2024, the most recent year for which the Bureau of Economic Analysis publishes a full annual total. Add those two numbers together and you get about $11.6 trillion — and that headline total is wrong, for a reason that matters more than the arithmetic.',
      'Roughly $1.1 trillion of federal spending is not spent by Washington at all. It is sent to states, cities, counties, and school districts as grants, and then spent by them — which means the same dollar shows up in both totals. The Office of Management and Budget publishes a consolidated figure that removes this double count: in fiscal 2025, combined federal, state, and local spending from all sources was $10.257 trillion. Of that, $7.010 trillion was federal outlays and about $3.247 trillion was state and local spending from their own sources — their own taxes, fees, and charges, with federal grants stripped out. That is the honest shape of American government: roughly two-thirds federal, one-third state and local, once you stop counting the same dollar twice.',
      'The division of labour underneath that split is just as important as the totals. The federal government pays for the things only a national government can do: national defense ($965.2 billion in fiscal 2026), Social Security ($1.667 trillion), Medicare ($1.073 trillion), and the interest on the national debt ($1.052 trillion). State and local governments pay for the things you can see from your front door: the public school down the street, the police and fire departments, the local roads, the water system, and the parks. Medicaid is the great exception — the one giant program both levels genuinely share — and it is where the arguments about who pays for what get loudest.',
    ],
    chart: {
      title: 'Combined Government Spending, FY2025, With No Double Counting ($B)',
      caption:
        'Source: Office of Management and Budget historical tables, consolidated measure for fiscal 2025 (combined $10.257 trillion). State and local own-source spending (~$3.247 trillion) is derived as the consolidated total minus federal outlays ($7.010 trillion), so federal grants are counted once, at the federal level.',
      type: 'bar',
      unit: '$B',
      data: [
        { label: 'Federal outlays', value: 7010 },
        { label: 'State & local, own sources', value: 3247 },
      ],
    },
  },
  {
    id: 'the-double-counting-trap',
    heading: 'The Double-Counting Trap: Why $7.4 Trillion Plus $4.2 Trillion Is Not $11.6 Trillion',
    paragraphs: [
      'Every comparison of federal and state spending runs into the same accounting trap, so it is worth understanding before any of the numbers that follow. When Washington sends a state $100 for highway construction, the federal budget records $100 of outlays, and the state budget records $100 of spending when the road is built. Both records are correct. Adding them together, though, counts one road twice. Any honest total has to pick a side: count grants at the federal level and strip them out of state and local spending, or count them where they are spent and strip them out of the federal total.',
      'The OMB consolidated measure used in this article takes the first route, which is why its state and local component — about $3.247 trillion for fiscal 2025 — is smaller than the $4.182 trillion BEA total for state and local spending in 2024. The BEA figure counts everything state and local governments spend, including money that arrived from Washington. The gap between the two concepts is essentially the grant pipeline: about $1.1 trillion a year flowing from the federal government to states and localities. Neither number is wrong; they answer different questions. “How much do state and local governments spend?” gives you $4.182 trillion. “How much do they spend of their own money?” gives you roughly $3.2 trillion.',
      'That distinction also explains why the two levels of government argue about money so often. From Washington’s perspective, the federal government is already paying for a large share of state priorities through grants. From a governor’s perspective, much of that money arrives with strings attached — it can only be spent on the program Congress specified, under rules Washington wrote. A dollar of grant money is not the same as a dollar of a state’s own tax revenue, even though both buy the same asphalt. Understanding the grants pipeline is the key to understanding almost every federal-state funding fight.',
    ],
    callout: {
      type: 'info',
      text: 'Rule of thumb: whenever you see a combined “all government spending” total, ask whether federal grants were removed. If they were not, the total double-counts roughly $1.1 trillion — about 10% of the whole.',
    },
  },
  {
    id: 'who-pays-for-what',
    heading: 'Who Pays for What: The Division of Labour',
    paragraphs: [
      'Start with what only the federal government does. National defense is almost entirely federal: $965.2 billion in fiscal 2026, and no state runs an army, a navy, or a nuclear arsenal. Social Security ($1.667 trillion) and Medicare ($1.073 trillion) are federal programs paid directly to individuals, with no state middleman. Net interest on the debt ($1.052 trillion) is federal by definition — states borrow too, but their debts are a rounding error next to Washington’s. Veterans’ benefits ($416.2 billion) are federal as well. Together, these federal-only items account for well over half of everything Washington spends, and they explain why the federal budget is so much bigger than any state budget: the biggest things government does in America are national by design.',
      'Now flip to the other end of daily life. In fiscal 2022, the most recent year with a detailed Census-based split, state governments spent $2,415.1 billion and local governments $2,322.4 billion — nearly equal partners, not a senior and a junior. Education is the clearest example of state and local dominance: state and local governments together spent $1,278.5 billion on education in 2022, against a federal education and training budget of just $107.6 billion in fiscal 2026. Within that, local governments alone spent $814.4 billion on pre-primary through secondary education — your local school district is, financially, a local institution first, a state institution second, and a federal institution barely at all.',
      'The same pattern holds for the services that define a neighbourhood. Police, fire protection, local roads, water and sewer systems, parks, libraries, and courts are overwhelmingly state and local responsibilities, funded mainly by state and local taxes. The federal government’s footprint in these areas is mostly grants and standards, not direct operation: federal highway money helps build interstate highways, but the street outside your house is maintained by your city or county. If you want to know who to hold accountable for a pothole, a school, or a 911 response time, the answer is almost always a mayor, a county executive, or a governor — not the president.',
    ],
    bullets: [
      'Federal-only: national defense ($965.2B FY2026), Social Security ($1.667T), Medicare ($1.073T), net interest ($1.052T), veterans’ benefits ($416.2B).',
      'State and local dominate: K-12 education (local governments alone: $814.4B in 2022), police and fire, local roads, water and sewer, parks, and libraries.',
      'Shared: Medicaid, highways, food assistance, and housing — funded by both levels, run mostly by the states under federal rules.',
      'Federal education spending ($107.6B FY2026) is less than a tenth of state and local education spending ($1,278.5B in 2022).',
    ],
  },
  {
    id: 'medicaid-the-shared-giant',
    heading: 'Medicaid: The Shared Giant That Breaks Every Simple Rule',
    paragraphs: [
      'Medicaid is the exception that proves how tangled the system is. It is the largest single item in most state budgets and the largest single grant program in the federal budget, and neither level can describe it without the other. In federal fiscal year 2024, total Medicaid spending was $919 billion, with the federal government paying nearly two-thirds — 65%, or $594 billion — and states paying the remaining 35%, or $325 billion, according to KFF’s analysis of federal data. The federal share is not a fixed number: it is set by a formula, the Federal Medical Assistance Percentage (FMAP), that gives poorer states a higher match. For fiscal 2027 the FMAP ranges from a 50% floor in higher-income states such as California, New York, and Connecticut to 77% in Mississippi, and adults covered through the Affordable Care Act expansion are matched at 90%.',
      'That formula is why Medicaid dominates state budget politics. In fiscal 2024, federal funds made up 34.2% of total state expenditures, and Medicaid alone accounted for 56% of all federal funds flowing to states, according to the National Association of State Budget Officers. When Washington changes the FMAP, trims the expansion match, or adds work requirements, the effects land immediately in state capitols, because states must either find the replacement money, cut benefits, or cut something else. Conversely, when states expand eligibility or raise provider payments, the federal government automatically owes more — Medicaid is an open-ended entitlement, not a capped grant, so there is no preset limit on the federal match.',
      'On this site’s Treasury basis, the federal Medicaid line is even larger: $1.026 trillion in fiscal 2026, reflecting the MTS health-function grouping and a later fiscal year than KFF’s 2024 figure. The two numbers differ in year and in definition, and the gap is a useful reminder to always check what a Medicaid figure includes before comparing it. Whichever definition you use, the structural point is the same: Medicaid is the one program where “federal vs. state spending” is genuinely the wrong question. The right question is what split the two levels have agreed — and right now that split is roughly two-thirds federal, one-third state, with the exact ratio depending on how rich or poor your state is. Readers can explore the federal side in detail on this site at /categories/medicaid-spending.',
    ],
    chart: {
      title: 'Who Paid for Medicaid, Federal Fiscal Year 2024 ($B)',
      caption:
        'Source: KFF, “Medicaid Financing: The Basics,” federal fiscal year 2024 totals: $919 billion overall, federal $594 billion (65%), state $325 billion (35%). This is a different year and definition from the site’s FY2026 MTS Medicaid figure of $1.026 trillion.',
      type: 'bar',
      unit: '$B',
      data: [
        { label: 'Federal share', value: 594 },
        { label: 'State share', value: 325 },
      ],
    },
  },
  {
    id: 'the-grants-pipeline',
    heading: 'The Grants Pipeline: $1.1 Trillion With Strings Attached',
    paragraphs: [
      'Federal grants to state and local governments are the connective tissue of American federalism, and they have grown enormously. In 1960, total federal grants were just $7.0 billion. By 1980 they were $91.4 billion, by 2000 $285.9 billion, and by 2010 $608.4 billion. The pandemic pushed them to $1,193.3 billion in 2022, and the Congressional Research Service estimated about $1.1 trillion for fiscal 2024 — the Office of Management and Budget’s outlay series puts the 2024 figure at $1,093.0 billion. In other words, roughly one dollar in every seven the federal government spends ends up being spent by a state or local government, under rules written in Washington.',
      'Not all grants work the same way, and the differences drive real policy fights. Categorical grants can only be spent on a specific program — highway construction, school lunches, clean water projects — and usually require the state to put up matching money of its own. Block grants give states broader discretion within a policy area, such as community development or social services, in exchange for a fixed pot of money. Medicaid is neither: it is an open-ended matching entitlement, which is why it behaves so differently from everything else in a recession, when enrolment rises automatically and both levels’ costs rise with it. The Infrastructure Investment and Jobs Act of 2021 added another large, time-limited wave of categorical grants for roads, bridges, broadband, and water systems — money that shows up in state budgets for years after the federal law that created it.',
      'Grants also explain why state budgets are more volatile than they look. When federal grant funding surges — as it did during the pandemic, when grants topped $1.19 trillion — state spending rises without any state tax increase. When it falls back, states face a “fiscal cliff”: programs built on temporary federal money that must now be funded locally, cut, or wound down. The pandemic cliff is still working its way through state budgets, and it is one reason state rainy-day funds and reserve balances get so much attention from budget watchers. A state’s fiscal health is never just about its own taxes; it is also about the reliability of the federal pipeline.',
    ],
    chart: {
      title: 'Federal Grants to State and Local Governments, 1960–2024 ($B)',
      caption:
        'Source: Office of Management and Budget, Budget FY2025 Table 12.1, outlays for grants to state and local governments. Figures are nominal dollars; 2024 is the OMB estimate from that vintage.',
      type: 'line',
      unit: '$B',
      data: [
        { label: '1960', value: 7.0 },
        { label: '1980', value: 91.4 },
        { label: '2000', value: 285.9 },
        { label: '2010', value: 608.4 },
        { label: '2022', value: 1193.3 },
        { label: '2024', value: 1093.0 },
      ],
    },
  },
  {
    id: 'who-pays-the-taxes',
    heading: 'Who Pays the Taxes: A Different Split for Revenue',
    paragraphs: [
      'The spending split only makes sense alongside the revenue split, because each level of government taxes different things — and that shapes who feels each tax. The federal government lives mainly on the individual income tax and payroll taxes, which fund Social Security and Medicare. States lean on income taxes and sales taxes, with wide variation: some states have no income tax at all, others no sales tax, and a few neither, relying instead on oil, gas, or tourism revenue. Local governments live mainly on the property tax, which is why a homeowner’s tax bill is mostly a local document, and why school funding varies so much between a wealthy suburb and a poorer city in the same state.',
      'That revenue structure is also why the three levels respond differently to recessions. Federal revenue falls when incomes fall, but the federal government can borrow to bridge the gap — it ran a $1.992 trillion deficit in fiscal 2026. States and localities mostly cannot: nearly every state has a balanced-budget requirement, so when sales and income tax revenue drops, they must cut spending, raise taxes, or drain reserves. This is exactly when federal grants matter most, and why Congress has repeatedly sent emergency aid to states during downturns — most recently during the pandemic, when grants jumped past $1.19 trillion. Federal borrowing, in effect, backstops state balanced budgets.',
      'So who pays for what, in the end? You pay all three levels, through different taxes, for different things. Your federal income tax mostly funds retirement, health care for seniors, defense, and interest on past borrowing. Your state income and sales taxes mostly fund schools, Medicaid’s state share, highways, and prisons. Your property tax mostly funds your local schools, police, fire department, and roads. The next time a budget headline quotes a single giant number, ask which level it belongs to — and whether the same dollars are being counted twice. That one question clears up most of the confusion in American public finance. To see the federal side in full, start at /spending, and for how the money lands in individual states, see the state spotlights on this site, such as /blog/federal-spending-texas and /blog/federal-spending-california.',
    ],
    callout: {
      type: 'tip',
      text: 'A quick accountability test: if it is a school, a local road, or a 911 call, look to your city, county, or state first. If it is a Social Security check, a Medicare claim, or a military base, look to Washington. If it is Medicaid, look at both — and check the FMAP for your state.',
    },
  },
];

export const data: ArticleData = {
  slug: 'federal-vs-state-government-spending',
  title: 'Federal vs. State Spending: Who Pays for What?',
  description:
    'FY2026 federal spending was $7.396T; state and local governments spent $4.182T — but $1.1T is counted in both. Who really pays for what?',
  keyword: 'federal vs state spending',
  category: 'Explainers',
  datePublished: '2026-11-04',
  dateModified: '2026-11-04',
  readingTime: estimateReadingTime(sections),
  quickTakeaways: [
    { label: 'The honest total', text: 'Combined government spending was $10.257 trillion in FY2025 once federal grants are counted once — about two-thirds federal, one-third state and local.' },
    { label: 'Federal-only giants', text: 'Social Security ($1.667T), Medicare ($1.073T), net interest ($1.052T), and defense ($965.2B) in FY2026 are run and paid for by Washington alone.' },
    { label: 'State and local turf', text: 'K-12 schools, police and fire, local roads, and water systems are overwhelmingly state and local — local governments alone spent $814.4B on K-12 in 2022.' },
    { label: 'The shared exception', text: 'Medicaid cost $919B in FFY2024, split roughly two-thirds federal ($594B) and one-third state ($325B), with the federal share set by each state’s FMAP.' },
  ],
  sections,
  faqs: [
    {
      question: 'How much does the federal government spend compared to state governments?',
      answer:
        'In fiscal 2026 the federal government spent $7.396 trillion. State and local governments together spent $4.182 trillion in 2024 (the latest full BEA annual total). But the two totals overlap by about $1.1 trillion in federal grants, so the honest combined figure for fiscal 2025 is $10.257 trillion — roughly $7.010 trillion federal and $3.247 trillion state and local from their own sources.',
    },
    {
      question: 'What do state and local governments spend the most on?',
      answer:
        'Education is by far the largest state and local category: state and local governments spent $1,278.5 billion on education in 2022, most of it on K-12 schools run by local districts. Health care — dominated by Medicaid’s state share — is the next largest, followed by police and fire protection, highways and local roads, water and sewer systems, and public welfare programs.',
    },
    {
      question: 'What does the federal government pay for that states do not?',
      answer:
        'National defense, Social Security, Medicare, veterans’ benefits, and interest on the national debt are essentially federal-only. No state runs an army, pays retirement benefits nationally, or services $40 trillion of debt. These federal-only items account for well over half of federal spending, which is why the federal budget dwarfs any single state budget.',
    },
    {
      question: 'How much of state spending comes from the federal government?',
      answer:
        'In fiscal 2024, federal funds made up about 34.2% of total state expenditures, according to the National Association of State Budget Officers, and the vast majority of those funds are grants. Medicaid alone accounts for 56% of all federal funds flowing to states. The share varies widely by state: states with lower incomes receive a higher federal Medicaid match and tend to rely more heavily on federal funds overall.',
    },
    {
      question: 'Who pays for Medicaid, the federal government or the states?',
      answer:
        'Both. Medicaid is jointly financed: in federal fiscal year 2024 it cost $919 billion, with the federal government paying $594 billion (65%) and states paying $325 billion (35%). The federal share is set by the FMAP formula, which ranges from 50% in higher-income states to 77% in Mississippi for fiscal 2027, with a 90% match for adults covered through the Affordable Care Act expansion.',
    },
    {
      question: 'Why do federal and state spending totals double-count money?',
      answer:
        'Because federal grants are recorded twice: once as a federal outlay when Washington sends the money, and again as state or local spending when the recipient government spends it. Adding the two headline totals together counts roughly $1.1 trillion twice. Consolidated measures, such as the OMB’s $10.257 trillion figure for fiscal 2025, remove grants from the state and local side so each dollar is counted once.',
    },
  ],
  sources: [
    { name: 'U.S. Treasury, Monthly Treasury Statement — FY2026 finals (via Joint Economic Committee Monthly Fiscal Update)', url: 'https://www.jec.senate.gov/public/index.cfm/republicans/newsroom?ID=38949B39-5001-4D6E-BD91-29E11A06E325' },
    { name: 'U.S. Bureau of Economic Analysis, State and Local Government Expenditures (via YCharts)', url: 'https://ycharts.com/indicators/us_state_and_local_government_total_expenditures_yearly' },
    { name: 'Congressional Research Service, Federal Grants to State and Local Governments: Trends and Issues', url: 'https://www.EveryCRSReport.com/reports/R40638.html' },
    { name: 'KFF, Medicaid Financing: The Basics', url: 'https://www.kff.org/medicaid/medicaid-financing-the-basics/' },
  ],
  relatedSlugs: ['where-does-us-federal-budget-go', 'where-do-federal-taxes-go', 'what-is-mandatory-vs-discretionary-spending'],
};
