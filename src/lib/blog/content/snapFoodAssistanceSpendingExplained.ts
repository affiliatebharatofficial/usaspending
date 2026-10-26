import type { ArticleData } from '../types';
import { estimateReadingTime } from '../types';

const sections: ArticleData['sections'] = [
  {
    id: 'the-answer',
    heading: 'SNAP Spending Explained: The $102 Billion Food Program',
    paragraphs: [
      'The Supplemental Nutrition Assistance Program — SNAP, once called food stamps — is the largest food assistance program in the United States, and one of the largest cash-like benefit programs in the federal budget. In fiscal year 2025, federal SNAP spending totaled $101.7 billion, serving an average of 42.1 million people a month. That is about 12.3% of the U.S. population receiving help buying groceries in an average month, and SNAP alone accounts for roughly 69% of all USDA nutrition assistance spending.',
      'Almost all of that money goes directly to groceries. Of the $101.7 billion in fiscal 2025, $95.0 billion funded benefits loaded onto recipients’ EBT cards, while $6.7 billion covered the federal share of administrative costs and other expenses. In other words, about 93 cents of every SNAP dollar becomes food money for a low-income household; the rest pays for running the program — processing applications, checking eligibility, and preventing errors. The average benefit was $187.94 per person per month, or roughly $6.22 per person per meal, according to USDA data cited by the Center on Budget and Policy Priorities.',
      'SNAP is mandatory spending, not an annual appropriation Congress votes on each year. Anyone who meets the eligibility rules can enroll, and the program automatically grows when need grows — in a recession, for example — and shrinks when need falls. That design is why SNAP is called a countercyclical program: it is one of the few parts of the budget that expands on its own exactly when households are hurting. Read how mandatory spending differs from the discretionary budget: /blog/what-is-mandatory-vs-discretionary-spending.',
    ],
    chart: {
      title: 'Where SNAP Money Goes, FY2025 ($B)',
      caption:
        'USDA Economic Research Service, Food and Nutrition Assistance Landscape FY2025. Benefits dominate: $95.0B of the $101.7B total went to households; $6.7B covered administration and other costs.',
      type: 'bar',
      unit: '$B',
      data: [
        { label: 'Benefits to households', value: 95.0 },
        { label: 'Admin & other costs', value: 6.7 },
      ],
    },
  },
  {
    id: 'how-benefits-are-set',
    heading: 'How a SNAP Benefit Is Calculated: Maximum Minus 30% of Net Income',
    paragraphs: [
      'There is no flat SNAP payment. A household’s benefit equals the maximum benefit for its size, minus 30% of its net monthly income. The logic is that a family is expected to spend about 30% of its own resources on food, so SNAP fills the gap between that contribution and the cost of a basic diet. A household with no net income gets the maximum; as income rises, the benefit falls by 30 cents for each extra dollar, until it phases out entirely.',
      'The maximum benefit itself is built from the Thrifty Food Plan, the government’s estimate of what a nutritious, budget-friendly diet costs for a family of four, adjusted for household size and updated for food-price inflation every year. From October 1, 2026, the maximum monthly benefit in the 48 contiguous states and Washington, D.C. is $306 for a single person and $1,023 for a household of four — up $8 and $29 respectively from the prior year. Alaska, Hawaii, Guam, and the Virgin Islands have higher maximums because food costs more there.',
      'Eligibility starts with income. In general, a household’s gross monthly income must be at or below 130% of the federal poverty line, and net income — after deductions for things like housing, childcare, and medical costs over $35 a month for seniors and people with disabilities — must be at or below the poverty line itself. States have some flexibility: many use broader categorical eligibility rules, and deductions vary, so the exact cutoff depends on where you live. Eligible one- and two-person households always qualify for at least a minimum benefit, $25 a month in fiscal 2027 for the 48 states and D.C.',
      'Two features of the formula matter for understanding the averages. First, 37% of SNAP households receive the maximum benefit for their size, and 9% receive the minimum — the rest fall somewhere in between, which is why the average ($187.94) sits well below the maximums. Second, benefits are indexed to food prices, not wages: when grocery prices rise, maximums rise with them, but a household whose income rises faster than food prices can see its benefit shrink even as its grocery bill grows.',
    ],
    callout: {
      type: 'info',
      text: 'The 30% rule is the whole formula in one line: maximum benefit for your household size, minus 30% of your net income. Everything else — deductions, the Thrifty Food Plan, annual inflation updates — just sets those two numbers.',
    },
  },
  {
    id: 'who-gets-snap',
    heading: 'Who Gets SNAP: Children, Workers, Seniors, and People With Disabilities',
    paragraphs: [
      'SNAP is not targeted at a single group the way WIC targets mothers and young children or school lunch targets students. Anyone low-income who meets the rules can qualify, and the caseload reflects that breadth. In fiscal 2024, adults aged 18–59 made up the largest share of participants at 41%, followed by children at about 39%, and adults aged 60 and older at 20%. Nearly two in five recipients are children — a fact that shapes almost every debate about the program’s cuts.',
      'The popular image of SNAP households as workless does not match the data. In fiscal 2024, 28% of SNAP households had earned income, and among households with children, 54% had earned income. Another 62% received unearned income from sources like Social Security, Supplemental Security Income, or Temporary Assistance for Needy Families, and 19% reported no income at all from either source. In short, most SNAP households combine low-wage work, modest benefits from other programs, or both — and SNAP tops up what those incomes cannot cover at the grocery store.',
      'Geography matters enormously. In fiscal 2025, the share of residents receiving SNAP in an average month ranged from 21.9% in the highest-participation state down to 4.7% in the lowest — a nearly fivefold spread driven by poverty rates, state policy choices, and local wages. California alone pays out more than $1 billion a month in SNAP benefits, the largest state total by far, simply because of its population. That state variation is also why national averages hide so much: the same federal formula produces very different caseloads in New Mexico, Wyoming, New York, and Mississippi.',
    ],
    chart: {
      title: 'Who Receives SNAP, by Age Group, FY2024 (%)',
      caption:
        'USDA Economic Research Service, SNAP Key Statistics. Children are about 39% of participants; working-age adults 41%; seniors 20%.',
      type: 'bar',
      unit: '%',
      data: [
        { label: 'Adults 18–59', value: 41 },
        { label: 'Children under 18', value: 39 },
        { label: 'Adults 60+', value: 20 },
      ],
    },
  },
  {
    id: 'not-the-51-billion',
    heading: 'A Number to Get Right: SNAP Is Not the $51 Billion Farm Figure',
    paragraphs: [
      'Readers of this site may notice a confusing number: our category pages list “agriculture-food-assistance” at $51.0 billion for fiscal 2026 year-to-date through August 31, 2026. That is not SNAP. That $51.0 billion is the Treasury’s Agriculture budget function, and its components are farm commodity and conservation programs ($20.4 billion), crop insurance and risk management ($17.9 billion), agricultural research and services ($7.7 billion), and rural development and other programs ($5.0 billion). SNAP is counted elsewhere in the federal accounts, under food and nutrition assistance — which is why its $101.7 billion fiscal 2025 total is roughly double the entire Agriculture function.',
      'The distinction matters because the two budgets answer different questions. The $51 billion farm figure tells you what the government spends supporting agriculture; the $102 billion SNAP figure tells you what it spends helping low-income households buy food. Conflating them understates food assistance by half and overstates farm support by double. See the farm-side breakdown on its own page: /categories/agriculture-food-assistance.',
      'For scale, SNAP’s $101.7 billion in fiscal 2025 was about 1.5% of the $7.01 trillion the federal government spent that year. Put against this site’s fiscal 2026 year-to-date Treasury figures — Social Security at $1,525.9 billion, net interest at $1,017.0 billion, Medicare at $979.3 billion, defense at $876.2 billion — SNAP is a mid-sized program: roughly one-ninth the size of defense, and about a tenth of what the government pays just in interest on the national debt. It is large in human terms — 42 million people — and modest in budget terms. Both facts are true at once, and both matter for judging any proposal to change it.',
    ],
    chart: {
      title: 'SNAP in Context: Major Budget Items ($B)',
      caption:
        'Treasury Monthly Treasury Statement, Table 9, FY2026 year-to-date through August 31, 2026, via this site’s data — except SNAP, which is the USDA full-year FY2025 figure ($101.7B), since the site’s categories do not break out SNAP separately.',
      type: 'bar',
      unit: '$B',
      data: [
        { label: 'Social Security', value: 1525.9 },
        { label: 'Net Interest', value: 1017.0 },
        { label: 'Medicare', value: 979.3 },
        { label: 'Defense', value: 876.2 },
        { label: 'SNAP (FY2025)', value: 101.7 },
      ],
    },
  },
  {
    id: 'what-changed-in-2026',
    heading: 'What Changed in 2026: The Largest SNAP Cut in History',
    paragraphs: [
      'SNAP in 2026 looks very different from SNAP in 2025, because of the 2025 reconciliation law (P.L. 119-21, often called the “One Big Beautiful Bill Act”). The Congressional Budget Office estimated the law would cut SNAP by $187 billion — about 20% — through 2034, the largest reduction to food assistance in U.S. history. The cuts come through several channels at once: stricter work requirements, narrower eligibility for immigrants, and a historic shift of program costs from the federal government to the states.',
      'The work-requirement changes are the biggest single driver. The law extended SNAP’s time limit for adults without dependents to people up to age 65 (from 54), extended it to parents and caregivers of children aged 14 and older, narrowed states’ ability to waive the limit in areas with few jobs, and eliminated exemptions for veterans, people experiencing homelessness, and former foster youth. CBO estimated this provision alone would remove an average of 2.4 million people from SNAP over the 2025–2034 period. A separate provision narrowed eligibility for many immigrants living lawfully in the U.S. under humanitarian protections, which CBO estimated would cut about 90,000 people.',
      'The cost shift to states is the slower-moving but potentially larger change. From October 1, 2026, the federal government covers only 25% of SNAP’s administrative costs, down from 50% — a shift USDA estimated would save the federal government $16.9 billion over five years, with states and counties picking up the rest. Then, starting in fiscal 2028, states will also have to pay 5% to 15% of benefit costs, depending on their payment error rates — roughly $9 billion a year across all states, according to CBO. States that cannot absorb those costs face a choice between raising revenue, cutting other services, or restricting SNAP itself.',
      'Early results show the cuts arriving faster than CBO predicted. According to the Center on Budget and Policy Priorities’ October 22, 2026 analysis of USDA data, about 5.5 million people lost SNAP entirely in the year since the law’s enactment — including about 2 million children, who were not targeted by the law’s eligibility restrictions — and SNAP spending in fiscal 2026 fell nearly $11 billion, or 10.3%, below the prior year. CBO had projected a $6 billion drop and 2.8 million fewer participants in an average month of 2026; USDA data for July 2026 showed just under 36.1 million participants, putting the fiscal 2026 average on track for about 37.6 million, or 4.5 million below fiscal 2025’s average. CBPP argues the main reason is the coming state cost shift: states, knowing their 2025–2026 error rates will determine what they owe from 2028, have tightened paperwork, shortened certification periods, and added reviews — pushing eligible people off the program through delays and procedural denials. Those figures are CBPP’s analysis of USDA data, and the pattern is worth watching rather than treating as settled: more losses are expected as the law’s provisions phase in through 2028.',
    ],
    callout: {
      type: 'warning',
      text: 'The 5.5 million figure counts people who lost SNAP entirely. It does not include millions more whose benefits were reduced but not eliminated — the full human impact of the 2025 law is larger than the headline caseload drop.',
    },
  },
  {
    id: 'why-it-matters',
    heading: 'Why SNAP Matters Beyond the Grocery Bill',
    paragraphs: [
      'SNAP’s effects reach beyond the households that receive it. USDA’s Economic Research Service has found that SNAP receipt reduces food insecurity — households’ food security deteriorates in the days before benefits arrive and improves afterward — and that past benefit increases reduced food insecurity while benefit decreases raised it. SNAP benefits also reduce the depth and severity of poverty, especially for children, who experience higher poverty rates than the population at large.',
      'There is also a macroeconomic case. Because SNAP expands automatically in downturns — more people qualify, and existing recipients’ benefits rise as their incomes fall — it acts as an automatic stabilizer, supporting spending precisely when private spending collapses. ERS research estimated a multiplier of 1.54 during a slowing economy: each $1 billion in SNAP benefits increases GDP by $1.54 billion and supports about 13,560 jobs, with spending flowing through grocers, food processors, distributors, and their employees. That is why economists across the political spectrum often treat food assistance as one of the most effective forms of recession relief per dollar spent.',
      'What happens next is largely a state story. The fiscal 2028 benefit cost shift will force 50 separate decisions about how much of SNAP each state is willing to fund, and early evidence from 2026 suggests many states are already restricting access in anticipation. Watch three things: whether Congress delays the cost shift, as CBPP has urged; how states set their fiscal 2028 budgets for SNAP administration and benefits; and whether participation stabilizes near the July 2026 level of about 36 million or keeps falling as the remaining provisions phase in. The $101.7 billion of fiscal 2025 is already history — the question now is how much smaller the program that replaces it will be, and who bears that difference. For the full-year federal picture, see /blog/federal-deficit-2026-how-big and /blog/where-does-us-federal-budget-go.',
    ],
  },
];

export const data: ArticleData = {
  slug: 'snap-food-assistance-spending-explained',
  title: 'SNAP Spending Explained: $102 Billion in Food Aid',
  description:
    'SNAP spending explained: $101.7B in FY2025, 42.1M people, $188 a month — who gets it, how benefits are set, and what the 2025 law changed.',
  keyword: 'snap spending explained',
  category: 'Data Stories',
  datePublished: '2026-10-26',
  dateModified: '2026-10-26',
  readingTime: estimateReadingTime(sections),
  quickTakeaways: [
    { label: 'Total spending', text: 'Federal SNAP spending was $101.7 billion in FY2025 — $95.0B in benefits, $6.7B in administration and other costs.' },
    { label: 'People served', text: 'An average of 42.1 million people a month, or 12.3% of U.S. residents, at an average benefit of $187.94 per person per month.' },
    { label: 'How benefits work', text: 'Maximum benefit for household size minus 30% of net income, based on the Thrifty Food Plan; from Oct 2026 the max is $306 (single) and $1,023 (family of four).' },
    { label: 'The 2026 shock', text: 'The 2025 reconciliation law is projected by CBO to cut $187B through 2034; CBPP reports 5.5M people already lost SNAP and FY2026 spending fell ~$11B.' },
  ],
  sections,
  faqs: [
    {
      question: 'How much does the US spend on SNAP?',
      answer:
        'Federal SNAP spending totaled $101.7 billion in fiscal year 2025, according to USDA’s Economic Research Service. Of that, $95.0 billion funded benefits to households and $6.7 billion covered the federal share of administrative costs and other expenses. The program served an average of 42.1 million people per month at an average benefit of $187.94 per person per month.',
    },
    {
      question: 'How is a SNAP benefit calculated?',
      answer:
        'A household’s benefit equals the maximum benefit for its size minus 30% of its net monthly income. The maximum is based on the Thrifty Food Plan, the government’s estimate of a nutritious, budget-friendly diet, and is updated annually for food-price inflation. From October 1, 2026, the maximum is $306 a month for a single person and $1,023 for a household of four in the 48 contiguous states and D.C.',
    },
    {
      question: 'Who qualifies for SNAP?',
      answer:
        'Generally, households with gross monthly income at or below 130% of the federal poverty line and net income at or below the poverty line, after deductions for housing, childcare, and medical costs. States have flexibility in the details, so exact cutoffs vary. In fiscal 2024, about 39% of participants were children, 41% were adults aged 18–59, and 20% were aged 60 and older.',
    },
    {
      question: 'Is SNAP the same as the $51 billion agriculture spending figure?',
      answer:
        'No. The $51.0 billion “agriculture-food-assistance” figure on this site is the Treasury’s Agriculture budget function for fiscal 2026 year-to-date — farm commodity programs, crop insurance, agricultural research, and rural development. SNAP is counted separately under food and nutrition assistance and cost $101.7 billion in fiscal 2025, roughly double the entire Agriculture function.',
    },
    {
      question: 'What did the 2025 reconciliation law change about SNAP?',
      answer:
        'The law (P.L. 119-21) extended work requirements to adults up to age 65 and parents of children 14 and older, narrowed waivers and exemptions, restricted eligibility for many immigrants, cut the federal share of administrative costs from 50% to 25% from October 2026, and requires states to pay 5–15% of benefit costs from fiscal 2028 based on error rates. CBO estimated the law would cut SNAP by $187 billion through 2034.',
    },
    {
      question: 'How many people lost SNAP in 2026?',
      answer:
        'According to the Center on Budget and Policy Priorities’ October 2026 analysis of USDA data, about 5.5 million people lost SNAP entirely in the year since the 2025 law’s enactment, including about 2 million children — more than CBO had projected. USDA data for July 2026 showed just under 36.1 million participants, down from a fiscal 2025 monthly average of 42.1 million, and fiscal 2026 SNAP spending fell nearly $11 billion (10.3%) below the prior year.',
    },
  ],
  sources: [
    {
      name: 'USDA Economic Research Service — SNAP Key Statistics and Research',
      url: 'https://www.ers.usda.gov/topics/food-nutrition-assistance/supplemental-nutrition-assistance-program-snap/key-statistics-and-research?ref=foodsafetynews.com',
    },
    {
      name: 'USDA Economic Research Service — The Food and Nutrition Assistance Landscape: Fiscal Year 2025',
      url: 'https://ers.usda.gov/media/29245/eib-304.pdf?v=43177',
    },
    {
      name: 'Center on Budget and Policy Priorities — Congress Must Delay SNAP Cost Shift (Oct 22, 2026)',
      url: 'https://www.cbpp.org/blog/congress-must-delay-snap-cost-shift-to-stanch-snap-participation-losses-which-far-exceed-cbos',
    },
    {
      name: 'Center on Budget and Policy Priorities — A Quick Guide to SNAP Eligibility and Benefits',
      url: 'https://www.cbpp.org/research/food-assistance/a-quick-guide-to-snap-eligibility-and-benefits',
    },
  ],
  relatedSlugs: [
    'what-is-mandatory-vs-discretionary-spending',
    'federal-deficit-2026-how-big',
    'where-does-us-federal-budget-go',
  ],
};
