import type { ArticleData } from '../types';
import { estimateReadingTime } from '../types';

const sections: ArticleData['sections'] = [
  {
    id: 'the-big-picture',
    heading: "Pennsylvania's $66.1 Billion Federal Footprint",
    paragraphs: [
      "One week before this article was published, the Treasury delivered the opening verdict on the new fiscal year: the federal government ran a $404 billion deficit in October 2026, the first month of fiscal year 2027 — a record for the month and 42 percent above the October 2025 shortfall. Receipts fell $35 billion to $369 billion, dragged down by a 39 percent drop in customs collections to $19.2 billion, while outlays rose to a record $773 billion for an October. The Congressional Budget Office had estimated the gap at $409 billion three days earlier; the Treasury's own statement put the actual slightly lower, at $404 billion. Part of the jump is a calendar quirk, not new spending: benefit payments that would normally have gone out on November 1 were pulled into October because November 1 fell on a weekend. Adjusted for that timing shift, the Treasury puts the deficit at $285 billion — still $94 billion, or 49 percent, above the adjusted figure a year earlier. Either way, the year has started with the government borrowing roughly $100 billion a week, and gross national debt now stands above $40.5 trillion. That is the national backdrop for every state in this series — and Pennsylvania, the fifth-largest state in the country, absorbs roughly $66.1 billion of it.",
      "Our modeled figures put total federal spending flowing into Pennsylvania at about $66.1 billion for fiscal 2026 — roughly 0.89 percent of the $7.396 trillion national total, spread across 12.96 million Pennsylvanians at about $5,100 per resident. The composition is unusual: prime contracts dominate, at $36.36 billion or 55 percent of the total, with grants and assistance at $23.14 billion (35 percent) and other federal awards at $6.61 billion (10 percent). That contract-heavy mix reflects what Pennsylvania makes and maintains for the federal government — ships' propellers and naval foundry work in Philadelphia, electronics repair at Tobyhanna, missile and ground-system overhaul at Letterkenny — layered on top of the two biggest things Washington pays for everywhere: retirement checks and health coverage. See the state breakdown at /states/pennsylvania and the full national picture at /spending-breakdown.",
      "An important honesty note before we go further: state-level figures are modeled estimates for comparison, not audited award records. They show the order of magnitude and the composition of the federal footprint; they are not a cash register. And Pennsylvania exposes the model's limits immediately, in the same way Ohio and Illinois did: Social Security payments to Pennsylvanians alone run about $72.6 billion a year on an annualized basis, and the federal share of the state's Medicaid program adds roughly another $39.3 billion — together about $112 billion, already nearly $46 billion more than the entire $66.1 billion modeled total. The population-based model understates Pennsylvania, because entitlement dollars concentrate here beyond what headcount alone predicts. Treat the $66.1 billion as a floor and a comparison tool, not a ceiling. Where a figure comes from the Treasury's Monthly Treasury Statement (MTS), it is labeled FY2026 final — October 1, 2025 through September 30, 2026.",
    ],
    callout: {
      type: 'info',
      text: 'All FY2026 figures are finals from the September 2026 Monthly Treasury Statement (published October 16, 2026): $7.396 trillion in outlays, $5.403 trillion in receipts, a $1.992 trillion deficit. The CBO summary released November 9, 2026 confirms the same totals. The October 2026 deficit is a CBO estimate ($409 billion); the Treasury\'s October statement, released November 12, put the actual at $404 billion — $285 billion after adjusting for the November 1 benefit-payment timing shift.',
    },
  },
  {
    id: 'retirees',
    heading: '3.04 Million Checks: The Retirement Engine',
    paragraphs: [
      "The single largest federal flow into Pennsylvania is also the quietest: retirement checks. As of December 2025, 3,035,656 Pennsylvanians received Social Security benefits, according to the Social Security Administration — 2,319,503 retired workers, 337,653 disabled workers, 155,824 widow(er)s and parents, 68,857 spouses, and 153,819 children. The agency paid them a combined $6.05 billion per month, or about $72.6 billion on an annualized basis. That is 23.2 percent of everyone who lives in the state — nearly one in four Pennsylvanians — and it makes Social Security alone worth more than the state's entire modeled federal footprint. More than 2.47 million of the state's beneficiaries are aged 65 or older. Pennsylvania ranks fifth in the nation for total Social Security beneficiaries, behind only California, Florida, Texas, and New York.",
      "The scale reflects Pennsylvania's age profile and its industrial past. The retired-worker checks reflect a lifetime of covered earnings in the steel mills of Pittsburgh and the Lehigh Valley, the coal fields of the northeast, the factories of Philadelphia, and the farms of Lancaster County. On top of the retirement program, 324,626 Pennsylvanians received Supplemental Security Income (SSI), the federal cash program for low-income aged, blind, and disabled people, at $248.1 million a month — about $3.0 billion a year. Nationally, Social Security is the largest federal outlay by far — $1,667.1 billion in FY2026 finals — and Pennsylvania absorbs about 4.4 percent of it, roughly its share of the U.S. population. Category detail: /categories/social-security-spending.",
      "That ordinariness is the point. Pennsylvania is close to the national average on Social Security — which is exactly why the modeled total still undershoots: add Medicaid's $39.3 billion federal share and the two biggest programs alone exceed the model by about $46 billion. The retirement engine is not a quirk of Pennsylvania's federal story; it is the foundation, and everything else — the depots, the shipyards, the universities, the farms — sits on top of it.",
    ],
    chart: {
      title: 'Largest Federal Flows Into Pennsylvania, FY2026 ($B)',
      caption:
        'Social Security annualized from SSA December 2025 monthly benefits; Medicaid federal share from the site\'s state-level data (health function, FY2026); university research is federally financed R&D, NSF HERD FY2024; farm payments from USDA FSA, October 2026 announcement for the 2025 crop year.',
      type: 'bar',
      unit: '$B',
      data: [
        { label: 'Social Security (annualized)', value: 72.6 },
        { label: 'Medicaid federal share', value: 39.3 },
        { label: 'Federal R&D, 3 universities', value: 2.8 },
        { label: 'Farm safety net & conservation', value: 0.08 },
      ],
    },
  },
  {
    id: 'health',
    heading: "Medicaid: $39 Billion of Federal Money, Now Under Pressure",
    paragraphs: [
      "If Social Security is Pennsylvania's biggest federal flow, Medicaid is its most politically exposed. The program covers about 2.87 million Pennsylvanians as of August 2026 — roughly 23 percent of everyone in the state, including about 1.2 million children and about 750,000 adults covered under the Affordable Care Act expansion, which Pennsylvania adopted in 2015. More than 2.5 million people have received coverage through the expansion at some point since then. The site's state-level data puts the federal share of Pennsylvania's Medicaid spending at $39.3 billion — 4.3 percent of the national health function, which totaled $1,025.6 billion in FY2026 finals. The program pays for 34 percent of births in the state and covers 21 percent of adults aged 19 to 64 and 13 percent of seniors. Category detail: /categories/medicaid-spending.",
      "The One Big Beautiful Bill Act (H.R. 1), signed July 4, 2025, is now squeezing that flow from several directions at once. Pennsylvania Partnerships for Children estimates the state could lose $54.8 billion in federal Medicaid and SNAP funding by 2034 under the law's cuts, with more than 667,000 children depending on SNAP and nearly 1.2 million on Medicaid. New Medicaid work-reporting requirements and more frequent eligibility checks for certain adults take effect in January, and the organization notes that hospital uncompensated care is already 27.7 percent below its pre-expansion level — a gain that depends on the coverage staying in place. Work requirements for expansion adults, tighter rules on the provider taxes that help fund the state's share, and the shift of more SNAP administration costs onto the state all land on the same program at the same time.",
      "The scale of what is at stake is hard to overstate: Medicaid is the program that insures nearly a quarter of Pennsylvania, and its federal share alone is worth more than half of the state's entire modeled federal footprint. For Pennsylvania, the next two budget cycles will decide whether the state's second-largest federal flow keeps flowing at its current size — and whether the hospitals and clinics that serve its poorest counties can keep their doors open.",
    ],
    callout: {
      type: 'warning',
      text: 'Medicaid figures come from different vintages: enrollment is August 2026 (Pennsylvania Department of Human Services); the $39.3B federal share is the site\'s modeled state-level figure for FY2026; the $54.8B loss estimate is a Pennsylvania Partnerships for Children projection through 2034. Do not mix them into a single-year total.',
    },
  },
  {
    id: 'defense',
    heading: 'Shipyards and Depots: The Industrial Base',
    paragraphs: [
      "Pennsylvania's defense story is not about a single giant base. It is about an industrial base — three depots and a naval foundry that repair, rebuild, and manufacture the equipment the military already owns. In Tobyhanna, in the Pocono Mountains, sits the Tobyhanna Army Depot, the Defense Department's largest full-service electronics maintenance facility: the place where the Army's communications, radar, and electronic-warfare systems go to be repaired and modernized. In Chambersburg, the Letterkenny Army Depot overhauls tactical missiles, ground combat systems, and the air-defense equipment that has been in heavy demand in recent years. In Philadelphia, the Naval Foundry and Propeller Center — a detachment of Norfolk Naval Shipyard — casts the propellers and foundry components that keep the Navy's ships moving. Fort Indiantown Gap, near Harrisburg, is the Pennsylvania National Guard's main training center and one of the busiest Guard installations in the country.",
      "That work is why Pennsylvania's federal footprint is so contract-heavy: $36.36 billion in prime contracts, 55 percent of the modeled total, against $23.14 billion in grants. The depots are federal civilian workforces doing industrial work, and their order books rise and fall with defense maintenance budgets rather than with the big procurement headlines. Nationally, defense totaled $965.2 billion in FY2026 finals — the fourth-largest federal outlay, behind Social Security, Medicare ($1,072.6 billion), and the health function. Pennsylvania's share of that defense total does not crack the site's top five states — Texas ($67.1 billion), California ($60.8 billion), Virginia ($57.2 billion), Florida ($33.5 billion), and Maryland ($29.2 billion) rank ahead — because Pennsylvania's military story is about repair and sustainment, not the largest checkbook. Full category data: /categories/defense-military.",
      "The depot towns feel every budget decision in Washington directly. A maintenance contract delayed is a shift not worked; a modernization program funded is a hiring fair in Chambersburg or Tobyhanna. And the depots are unusually exposed to the same fiscal pressure that opened this article: when the deficit runs at $404 billion in a single month and Congress is staring at a government funding deadline in early December, the maintenance and overhaul lines that keep these facilities busy are among the first to be squeezed — and the last to be restored.",
    ],
    chart: {
      title: 'How Federal Money Reaches Pennsylvania, FY2026 ($B)',
      caption:
        'Modeled estimates from the site\'s Pennsylvania state page (usaspending.us/states/pennsylvania), FY2026. Prime contracts dominate the mix — the depots, the naval foundry, and defense contractors doing work in the state.',
      type: 'bar',
      unit: '$B',
      data: [
        { label: 'Prime contracts', value: 36.36 },
        { label: 'Grants & assistance', value: 23.14 },
        { label: 'Other federal awards', value: 6.61 },
      ],
    },
  },
  {
    id: 'research',
    heading: 'Three Universities, $2.8 Billion of Federal Research',
    paragraphs: [
      "No state outside the coasts concentrates as much federally funded university research in three institutions as Pennsylvania does. The University of Pennsylvania in Philadelphia recorded $2.17 billion in total research and development spending in fiscal 2024 — second in the nation, behind only Johns Hopkins — of which $1.02 billion was federally financed, overwhelmingly from the National Institutes of Health. The University of Pittsburgh spent $1.50 billion on research in fiscal 2024, 17th nationally, with $968 million from the federal government, again dominated by NIH funding for its medical center. Pennsylvania State University spent $1.30 billion, 25th nationally, with $859 million federally financed. Add the three together and the federal government funds about $2.85 billion a year of research at Pennsylvania's big three — against a national science function of $39.9 billion in FY2026 finals.",
      "Penn State's own annual report makes the defense connection explicit: in fiscal 2024-25 the university's research enterprise reached a record $1.44 billion in total expenditures, with $922.6 million from federal sources. The Department of Defense supplied $416.5 million of that, led by the Navy, and the university's Applied Research Laboratory — the Navy's undersea warfare lab — reported $415 million in expenditures, supporting work on sensors, autonomous platforms, and secure communications. The National Institutes of Health supplied $216.6 million through the College of Medicine. Penn State's federal research is, in large part, defense research done by a land-grant university.",
      "That concentration is also a vulnerability. Federal research funding is discretionary spending — the part of the budget Congress votes on every year — and it is the part most exposed when deficits run at $2 trillion and interest payments ($1,051.8 billion in FY2026 finals) now rival defense itself. A university research enterprise built on $2.85 billion a year of federal money is, in the end, a bet that Washington keeps choosing to fund science. Category detail: /categories/science-medical-research.",
    ],
    chart: {
      title: 'Federally Financed University R&D in Pennsylvania, FY2024 ($B)',
      caption:
        'NSF Higher Education R&D (HERD) Survey, FY2024 — federally financed R&D expenditures. Totals: Penn $2.17B, Pitt $1.50B, Penn State $1.30B; federal shares shown here.',
      type: 'bar',
      unit: '$B',
      data: [
        { label: 'U. Pennsylvania', value: 1.02 },
        { label: 'U. Pittsburgh', value: 0.97 },
        { label: 'Penn State', value: 0.86 },
      ],
    },
  },
  {
    id: 'farms',
    heading: 'Farmland and Food Aid: A $78 Million Harvest, a Shrinking Safety Net',
    paragraphs: [
      "Pennsylvania is not a corn-belt giant — its farms are smaller, more diverse, and closer to cities — but the federal farm safety net still paid out there this fall. The USDA's Farm Service Agency is delivering approximately $78.1 million in farm safety net and conservation program payments to Pennsylvania farmers, ranchers, and landowners for the 2025 crop year, part of a record $13.8 billion in Agriculture Risk Coverage (ARC) and Price Loss Coverage (PLC) payments nationwide, the largest annual payout since the programs were created in the 2014 Farm Bill. Eight Pennsylvania crops triggered a PLC payment for the 2025 crop year — barley, canola, corn, grain sorghum, oats, safflower, soybeans, and wheat — and for this crop year only, producers automatically receive the higher of the ARC or PLC rate regardless of their original election, under the Working Families Tax Cuts Act. The payment limit for the year is $160,000, and a 5.7 percent sequestration reduction applies to all ARC/PLC payments.",
      "The other end of the food system is moving in the opposite direction. Pennsylvania's SNAP participation stood at 1.71 million people in July 2026 — 13.05 percent of the state's population — down from 1.75 million in July 2019 and down sharply from the pandemic-era peak, as expanded work requirements under H.R. 1 took effect. More than 667,000 Pennsylvania children depend on SNAP. The state is also absorbing a larger share of the program's costs: from October 1, 2026, the federal government cut its share of SNAP administration costs from 50 percent to 25 percent, and from October 2027 states will have to pay a share of benefit costs based on their payment error rate. The farm safety net is paying out at record levels while the food safety net is shrinking — the same farm bill, two very different directions. More on SNAP: /blog/snap-food-assistance-spending-explained.",
      "Pennsylvania's agriculture function nationally is small — the agriculture and food assistance category totaled $52.6 billion in FY2026 finals, less than one percent of federal outlays — but in the counties where it lands, the $78.1 million matters. It is the difference between a farm family weathering a bad price year and not. And it arrives in the same year the state is being asked to pay more of the food-assistance bill itself.",
    ],
    callout: {
      type: 'info',
      text: 'Farm payment figures are gross ARC/PLC amounts before the 5.7% sequestration reduction required by statute. SNAP counts for July 2026 are labeled preliminary by USDA and subject to revision.',
    },
  },
  {
    id: 'per-resident',
    heading: 'Big Dollars, Modest Per-Person Numbers — With an Asterisk',
    paragraphs: [
      "By the population-based model, Pennsylvania looks moderately expensive per person: roughly $5,100 per resident, in the middle of the large states we have profiled — below Ohio ($5,900) and Illinois ($5,500), above Virginia ($5,100), New York ($4,700), Florida ($4,300), Texas ($3,900), and California ($3,500). The arithmetic is straightforward: 12.96 million people is a large denominator, and Pennsylvania concentrates an unusual amount of federal activity per head — three top-twenty-five research universities, the Defense Department's largest electronics depot, a naval foundry, a top-five Medicaid program, and a farm belt that just collected a record safety-net payout all sit inside one state.",
      "But Pennsylvania carries the same asterisk as Ohio and Illinois, in a louder form: the model undercounts it. Social Security ($72.6 billion annualized) plus the federal share of Medicaid ($39.3 billion) already exceeds the $66.1 billion modeled total by about $46 billion before a single dollar of defense, science, transit, or farm spending is counted. The real federal flow into Pennsylvania is larger than the model — how much larger, nobody can say precisely, because the Treasury does not publish a state-by-state cash register. That is the honest limit of this article and of every state spotlight in this series.",
      "For fair comparisons, benchmark Pennsylvania against other large states — Ohio, Illinois, Texas, California, Florida, New York — not small states where a single lab or base makes per-capita figures soar. And remember the category mix: Pennsylvania is the state where the federal government pays retirees, insures the poor, repairs the military's electronics, casts the Navy's propellers, funds three of the country's biggest research universities, and is currently paying farmers record sums while food assistance shrinks — all at once, in a year when the national deficit hit $2 trillion and the first month of the new fiscal year opened with a $404 billion shortfall. The $66.1 billion is the footprint. The story is what it is made of. Compare states at /states/pennsylvania and /states/ohio.",
    ],
  },
];

export const data: ArticleData = {
  slug: 'federal-spending-pennsylvania',
  title: 'Federal Spending in Pennsylvania: Steel Towns and Shipyards',
  description:
    'Federal spending in Pennsylvania runs about $66.1B a year — Social Security for 3.0M people, $39.3B in Medicaid, shipyards and research universities.',
  keyword: 'federal spending in pennsylvania',
  category: 'State Spotlights',
  datePublished: '2026-11-16',
  dateModified: '2026-11-16',
  readingTime: estimateReadingTime(sections),
  quickTakeaways: [
    { label: '$66.1B', text: 'Modeled federal spending flowing into Pennsylvania in FY2026 — about $5,100 per resident across 12.96 million Pennsylvanians, with prime contracts (55%) dominating the mix.' },
    { label: '~$72.6B', text: 'Social Security paid to 3.04 million Pennsylvanians on an annualized basis — more than the entire modeled state footprint, before Medicaid is counted.' },
    { label: '$404B October deficit', text: 'The Treasury put the first month of FY2027 at a record $404 billion deficit — $285 billion after adjusting for the November 1 benefit-payment timing shift; the CBO estimate was $409 billion.' },
    { label: '$2.85B research', text: 'Federal R&D funding at Pennsylvania\'s big three universities — Penn ($1.02B), Pitt ($0.97B), Penn State ($0.86B) — in FY2024, led by NIH and the Navy.' },
  ],
  sections,
  faqs: [
    {
      question: 'How much federal spending does Pennsylvania receive?',
      answer:
        'Our modeled estimate puts total federal spending flowing into Pennsylvania at roughly $66.1 billion in FY2026 — about 0.89% of the $7.396 trillion national total, or $5,100 per resident across 12.96 million Pennsylvanians. State-level figures are modeled estimates for comparison, not audited award records. The model understates Pennsylvania: Social Security ($72.6 billion annualized) plus the federal share of Medicaid ($39.3 billion) already exceeds the modeled total on their own.',
    },
    {
      question: 'How many people in Pennsylvania get Social Security?',
      answer:
        'As of December 2025, 3,035,656 Pennsylvanians received Social Security benefits — 2,319,503 retired workers, 337,653 disabled workers, and the rest survivors, spouses, and children — and the Social Security Administration paid them $6.05 billion per month, about $72.6 billion annualized. That is 23.2% of the state\'s population. Another 324,626 Pennsylvanians received Supplemental Security Income (SSI).',
    },
    {
      question: 'How big is Pennsylvania’s Medicaid program?',
      answer:
        'As of August 2026, about 2.87 million Pennsylvanians were enrolled in Medicaid — roughly 23% of the state, including about 1.2 million children and 750,000 adults covered under the ACA expansion. The site\'s state-level data puts the federal share at $39.3 billion. Pennsylvania Partnerships for Children estimates the state could lose $54.8 billion in federal Medicaid and SNAP funding by 2034 under H.R. 1.',
    },
    {
      question: 'What are Tobyhanna and Letterkenny Army Depots?',
      answer:
        'Tobyhanna Army Depot, in the Pocono Mountains, is the Defense Department\'s largest full-service electronics maintenance facility — the place where the Army\'s communications, radar, and electronic-warfare systems are repaired and modernized. Letterkenny Army Depot in Chambersburg overhauls tactical missiles, ground combat systems, and air-defense equipment. Both are federal civilian workforces doing industrial work, and their order books rise and fall with defense maintenance budgets.',
    },
    {
      question: 'How much federal research funding do Pennsylvania universities get?',
      answer:
        'In fiscal 2024, the federal government financed about $2.85 billion of research at Pennsylvania\'s big three universities: the University of Pennsylvania ($1.02 billion, mostly NIH), the University of Pittsburgh ($968 million, mostly NIH), and Pennsylvania State University ($859 million, led by the Navy and the Department of Defense). Penn ranked second nationally in total R&D spending at $2.17 billion.',
    },
    {
      question: 'How many Pennsylvanians use SNAP?',
      answer:
        'USDA data put Pennsylvania SNAP participation at 1.71 million people in July 2026 — 13.05% of the state\'s population, down from 1.75 million in July 2019 — including more than 667,000 children. From October 2026, the federal government pays a smaller share of SNAP administration costs, and from October 2027 states will owe a share of benefit costs based on their payment error rate.',
    },
  ],
  sources: [
    {
      name: 'Congressional Budget Office — Monthly Budget Review: Summary for Fiscal Year 2026 (Nov 9, 2026)',
      url: 'https://www.cbo.gov/publication/61986',
    },
    {
      name: 'Social Security Administration — Congressional Statistics, December 2025: Pennsylvania',
      url: 'http://www.ssa.gov/policy/docs/factsheets/cong_stats/2025/pa.html',
    },
    {
      name: 'Pennsylvania Department of Human Services — Data Dashboards & Reports (Medicaid, August 2026)',
      url: 'https://www.pa.gov/agencies/dhs/resources/sandbox/proofs/proof-data-reports',
    },
    {
      name: 'NSF HERD Survey FY2024 — Table 6: Total and Federally Financed Higher Education R&D',
      url: 'https://ncses.nsf.gov/pubs/nsf26304/assets/data-tables/tables/nsf26304-tab006.pdf',
    },
    {
      name: 'USDA Farm Service Agency — Pennsylvania: $78 Million in Safety Net and Conservation Payments (Oct 19, 2026)',
      url: 'https://www.fsa.usda.gov/news-events/news/10-19-2026/usda-boosts-pennsylvania-agricultural-economy-78-million-safety-net',
    },
    {
      name: 'Pennsylvania Partnerships for Children — Congress Should Reverse the Cuts (Nov 5, 2026)',
      url: 'https://www.papartnerships.org/pennsylvania-partnerships-for-children-tells-congress-to-reverse-the-cuts-give-pennsylvania-families-breathing-room/',
    },
    {
      name: 'Reuters — US Starts 2027 Fiscal Year With Record October Budget Deficit of $404 Billion (Nov 12, 2026)',
      url: 'https://mix929.com/2026/11/12/us-starts-2027-fiscal-year-with-record-october-budget-deficit-of-404-billion/',
    },
  ],
  relatedSlugs: ['where-does-us-federal-budget-go', 'federal-deficit-2026-how-big', 'federal-spending-ohio'],
};
