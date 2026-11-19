import type { ArticleData } from '../types';
import { estimateReadingTime } from '../types';

const sections: ArticleData['sections'] = [
  {
    id: 'the-big-picture',
    heading: "Georgia's $38.6 Billion Federal Footprint",
    paragraphs: [
      "Ten days before this article was published, Washington sent Georgia a check that says a lot about where federal health money is going. On November 9, 2026, the Centers for Medicare & Medicaid Services (CMS) awarded Georgia $221.7 million for the second year of the Rural Health Transformation Program — up from $218.9 million in year one, bringing the state's total under the five-year program past $440.5 million. The award is part of $10 billion in second-year awards to all 50 states, the second tranche of a $50 billion program created by the Working Families Tax Cuts Act. Georgia's share, run by the Department of Community Health as the GREAT Health Program, funds five initiatives across 126 rural and partly rural counties — hospital payment reform, chronic and behavioral care, access to care, workforce training, and health technology. It is the newest and most visible federal flow into the state, and it lands in a state where rural health care has been under strain for years. That is the news hook for this article — and the rest of Georgia's federal story is much bigger than one grant.",
      "Our modeled figures put total federal spending flowing into Georgia at about $38.6 billion for fiscal 2026 — roughly 0.52 percent of the $7.396 trillion national total, spread across 11.03 million Georgians at about $3,500 per resident. The mix is contract-heavy, at $21.23 billion in prime contracts (55 percent), $13.51 billion in grants and assistance (35 percent), and $3.86 billion in other federal awards (10 percent). That profile reflects what Georgia is for the federal government: a military state with some of the largest Army and Air Force installations in the country, the home of the Centers for Disease Control and Prevention, a top-ten university research state, and one of the biggest farm states in the South. See the state breakdown at /states/georgia and the full national picture at /spending-breakdown.",
      "An important honesty note before we go further: state-level figures are modeled estimates for comparison, not audited award records. They show the order of magnitude and the composition of the federal footprint; they are not a cash register. And Georgia exposes the model's limits immediately, in the same way Ohio, Illinois, and Pennsylvania did: Social Security payments to Georgians alone run about $46.8 billion a year on an annualized basis, and the federal share of the state's Medicaid program adds roughly another $9.8 billion — together about $56.6 billion, already nearly $18 billion more than the entire $38.6 billion modeled total. The population-based model understates Georgia, because entitlement dollars concentrate here beyond what headcount alone predicts. Treat the $38.6 billion as a floor and a comparison tool, not a ceiling. Where a figure comes from the Treasury's Monthly Treasury Statement (MTS), it is labeled FY2026 final — October 1, 2025 through September 30, 2026. And one correction to the title of this article: Georgia's film industry, famous as it is, runs on the state's film tax credit, not on federal dollars — so it barely registers in the federal ledger below.",
    ],
    callout: {
      type: 'info',
      text: 'All FY2026 figures are finals from the September 2026 Monthly Treasury Statement (published October 16, 2026): $7.396 trillion in outlays, $5.403 trillion in receipts, a $1.992 trillion deficit. The CBO summary released November 9, 2026 confirms the same totals. The October 2026 deficit — the first month of FY2027 — was $404 billion by the Treasury\'s own statement, released November 12, a record for the month.',
    },
  },
  {
    id: 'retirees',
    heading: '2.08 Million Checks: The Retirement Engine',
    paragraphs: [
      "The single largest federal flow into Georgia is also the quietest: retirement checks. As of December 2025, 2,081,735 Georgians received Social Security benefits, according to the Social Security Administration — 1,559,957 retired workers, 234,325 disabled workers, 110,316 widow(er)s and parents, 46,470 spouses, and 130,667 children. The agency paid them a combined $3.90 billion per month, or about $46.8 billion on an annualized basis. That is 18.4 percent of everyone who lives in the state — nearly one in five Georgians — and it makes Social Security alone worth more than the state's entire modeled federal footprint. More than 1.63 million of the state's beneficiaries are aged 65 or older. Nationally, Social Security is the largest federal outlay by far — $1,667.1 billion in FY2026 finals — and Georgia absorbs about 2.8 percent of it. Category detail: /categories/social-security-spending.",
      "The scale reflects Georgia's age profile and its working past. The retired-worker checks reflect a lifetime of covered earnings in the poultry plants of Gainesville, the carpet mills of Dalton, the auto plants and logistics hubs around Atlanta and Savannah, the peanut and cotton fields of the south, and the military bases that have anchored towns like Columbus, Hinesville, and Warner Robins for generations. On top of the retirement program, 241,467 Georgians received Supplemental Security Income (SSI), the federal cash program for low-income aged, blind, and disabled people, at $182.5 million a month — about $2.2 billion a year. The 2.8 percent cost-of-living adjustment for 2026 added about $56 a month to the average retired worker's check nationally, and the standard Medicare Part B premium rose to $202.90 — a reminder that the retirement check and the health premium move together.",
      "That ordinariness is the point. Georgia is close to the national average on Social Security — which is exactly why the modeled total still undershoots: add Medicaid's roughly $9.8 billion federal share and the two biggest programs alone exceed the model by about $18 billion. The retirement engine is not a quirk of Georgia's federal story; it is the foundation, and everything else — the bases, the CDC, the universities, the farms — sits on top of it.",
    ],
    chart: {
      title: 'Largest Federal Flows Into Georgia, FY2026 ($B)',
      caption:
        'Social Security annualized from SSA December 2025 monthly benefits; Medicaid federal share annualized from CMS-64 data for the quarter ended March 31, 2025; farm payments from USDA FSA, October 2026 announcement for the 2025 crop year; GREAT Health Year 2 award from CMS, November 9, 2026.',
      type: 'bar',
      unit: '$B',
      data: [
        { label: 'Social Security (annualized)', value: 46.8 },
        { label: 'Medicaid federal share (annualized)', value: 9.8 },
        { label: 'Farm safety net & conservation', value: 0.41 },
        { label: 'GREAT Health, Year 2 award', value: 0.22 },
      ],
    },
  },
  {
    id: 'rural-health',
    heading: "Rural Health: $221.7 Million Arrives, Medicaid Stays on a Knife's Edge",
    paragraphs: [
      "If Social Security is Georgia's biggest federal flow, rural health is its most urgent. The GREAT Health Program — the Georgia Rural Enhancement and Transformation of Health program — is the state's vehicle for the federal Rural Health Transformation Program, and its second-year award of $221,731,766, announced November 9, 2026, is the largest single rural-health grant the state has ever received in one year. The program funds 29 projects across five initiatives: hospital payment reform, chronic and behavioral care, access to care, workforce development, and health technology. The money is already reaching the ground: on November 16, Sharecare's AskMD platform was named a subgrantee to help rural Georgians understand their coverage, find in-network and virtual care, and take earlier preventive steps. CMS says the year-two awards reflect, in part, each state's progress in implementing its approved plan — Georgia's increase over year one is a small vote of confidence in the first year's work. The program runs through 2030, with $30 billion still to be awarded nationally over its remaining three years.",
      "The grant arrives against a Medicaid program that covers about 2.17 million Georgians — roughly one in five residents — as of July 2024, the latest state-reported count in the federal dataset. Georgia is one of the few states that has never adopted the Affordable Care Act's Medicaid expansion, and its substitute — Pathways to Coverage, a work-requirement waiver launched in July 2023 — has covered far fewer people than expansion would have. After three years, only 18,527 Georgians were actively enrolled in Pathways as of June 30, 2026, and 43 percent of everyone who enrolled between July 2023 and June 2026 had lost coverage. The program has cost $165.7 million in total since approval, of which the federal government paid $128.4 million — and more than 46 percent of the spending went to administration, not health care. The federal share of Georgia's Medicaid program overall runs about $9.8 billion a year on an annualized basis, at the state's 66.86 percent federal match rate. Category detail: /categories/medicaid-spending.",
      "The next two years will reshape that picture. Georgia has asked CMS to raise the federal match on Pathways to 90 percent and to let the program grow to nearly 120,000 people by June 2028, at a projected cost of $1.43 billion over 18 months — but the waiver's current federal approval expires December 31, 2026, and no public decision on the extension had been announced as of this writing. At the same time, the Working Families Tax Cuts Act's new Medicaid work-reporting requirements take effect in January 2027, and Georgia's own filing says residents should start keeping proof of work activity in December. The $221.7 million GREAT Health award is real money for real clinics — but it is a grant program, not an entitlement, and it sits alongside a Medicaid system whose rules are about to change for hundreds of thousands of people.",
    ],
    callout: {
      type: 'warning',
      text: 'Medicaid figures come from different vintages: enrollment is July 2024 (CMS data.medicaid.gov); the $9.8B federal share is annualized from CMS-64 data for the quarter ended March 31, 2025, and is approximate — quarterly spending varies. Pathways figures are from the Georgia Budget and Policy Institute\'s October 2026 three-year analysis. Do not mix them into a single-year total.',
    },
  },
  {
    id: 'defense',
    heading: 'The Military State: Bases From the Mountains to the Coast',
    paragraphs: [
      "Georgia's defense story is about scale and geography. Roughly 70,000 active-duty servicemembers and 27,000 reservists are based in the state, and one in ten Georgians is connected to the armed forces, according to the state's senators. Fort Benning, outside Columbus, is the Army's maneuver center of excellence — the home of the infantry and armor schools. Fort Stewart, near Hinesville, is the largest Army installation east of the Mississippi and home to the 3rd Infantry Division. Robins Air Force Base in Warner Robins is the Air Force's largest industrial complex, overhauling the C-5, C-17, and C-130 fleets. Moody Air Force Base near Valdosta flies combat search-and-rescue and is preparing to receive the F-35. Naval Submarine Base Kings Bay, on the Atlantic coast, is the East Coast home of the Navy's ballistic-missile submarine fleet. Dobbins Air Reserve Base, Hunter Army Airfield in Savannah, and Fort Gillem outside Atlanta round out a footprint that touches nearly every corner of the state.",
      "That footprint is getting a building boom. A military construction package signed into law on November 12, 2025 delivered $556 million for Georgia installations — the largest military construction investment in the state since 2010. The biggest single item is $166 million for an evidence storage facility at Fort Gillem, home to the Army's criminal investigation laboratory. Kings Bay gets $119 million to expand its Trident refit facility for the new Columbia-class submarines. Fort Stewart gets $45 million for barracks renovations and $8 million to design an aircraft maintenance hangar; Robins gets $28 million for a new air traffic control tower; Moody gets $17.5 million for a security forces operations facility and $3.7 million to design an F-35 simulator; the Savannah Combat Readiness Training Center gets $27 million for a dining hall and $11.4 million for a C-130 corrosion control facility; and Fort Benning gets $127 million for a new Dexter Elementary School for military families. A separate defense authorization added more than $320 million for projects in Georgia's First Congressional District alone, including $105 million more for Fort Stewart barracks. Nationally, defense totaled $965.2 billion in FY2026 finals — the fourth-largest federal outlay, behind Social Security, Medicare ($1,072.6 billion), and the health function. Full category data: /categories/defense-military.",
      "The base towns feel every budget decision in Washington directly. A barracks renovation delayed is a construction crew not hired in Hinesville; a simulator funded is a training pipeline secured in Valdosta. And the bases are unusually exposed to the same fiscal pressure that opened this article: when the deficit runs at $404 billion in a single month and Congress faces a government funding deadline in early December, the construction and maintenance lines that keep these installations modern are among the first to be squeezed — and the last to be restored.",
    ],
    chart: {
      title: 'How Federal Money Reaches Georgia, FY2026 ($B)',
      caption:
        'Modeled estimates from the site\'s Georgia state page (usaspending.us/states/georgia), FY2026. Prime contracts dominate the mix — the bases, the CDC, and defense contractors doing work in the state.',
      type: 'bar',
      unit: '$B',
      data: [
        { label: 'Prime contracts', value: 21.23 },
        { label: 'Grants & assistance', value: 13.51 },
        { label: 'Other federal awards', value: 3.86 },
      ],
    },
  },
  {
    id: 'research',
    heading: 'The CDC and $2.2 Billion of Federal Research',
    paragraphs: [
      "No other state hosts the headquarters of a federal agency as consequential as the one in Atlanta. The Centers for Disease Control and Prevention — the agency that tracks outbreaks, sets vaccination guidance, and runs the nation's public-health surveillance — is headquartered in Atlanta, and its budget is the single largest federal health-science line in the state. The bipartisan fiscal 2026 Labor-HHS appropriations bill released in January 2026 provides $9.147 billion for CDC, essentially level with the prior year and far above the President's budget request of $4.243 billion, which would have cut the agency by more than half. The bill rejects the proposed restructuring of the Department of Health and Human Services and keeps the agency's structure intact — a decision that matters in Atlanta more than anywhere else in the country, because the CDC's workforce, its labs, and its contractors are a permanent part of the city's economy.",
      "Georgia's universities add another $2.2 billion a year of federally financed research. Georgia Tech is the headline: $1.53 billion in total research spending in fiscal 2024, of which $1.21 billion was federally financed — ranking second in the nation for federally sponsored research, behind only Johns Hopkins, and first among universities without a medical school. Emory University spent $1.2 billion on research in fiscal 2024, with $744.6 million from the federal government, overwhelmingly from the National Institutes of Health for its medical school. The University of Georgia topped $600 million in research spending for the first time in fiscal 2024 — $628.1 million in total, with federal research spending of $255.1 million, up 15 percent in a single year, led by the Departments of Commerce and Agriculture. Add the three together and the federal government funds about $2.21 billion a year of research at Georgia's big three — against a national science function of $39.9 billion in FY2026 finals. The state as a whole topped $4 billion in university research spending for the first time and ranks eighth nationally.",
      "That concentration is also a vulnerability. Federal research funding is discretionary spending — the part of the budget Congress votes on every year — and it is the part most exposed when deficits run at $2 trillion and interest payments ($1,051.8 billion in FY2026 finals) now rival defense itself. A research enterprise built on $2.2 billion a year of federal money, plus a public-health agency whose budget was nearly halved in a presidential request this year, is in the end a bet that Washington keeps choosing to fund science and public health. Category detail: /categories/science-medical-research.",
    ],
    chart: {
      title: 'Federally Financed University R&D in Georgia, FY2024 ($B)',
      caption:
        'NSF Higher Education R&D (HERD) Survey, FY2024 — federally financed R&D expenditures. Totals: Georgia Tech $1.53B, Emory $1.2B, University of Georgia $628.1M; federal shares shown here.',
      type: 'bar',
      unit: '$B',
      data: [
        { label: 'Georgia Tech', value: 1.21 },
        { label: 'Emory University', value: 0.74 },
        { label: 'University of Georgia', value: 0.26 },
      ],
    },
  },
  {
    id: 'farms',
    heading: 'Farmland and Food Aid: A $413 Million Harvest, a Shrinking Safety Net',
    paragraphs: [
      "Georgia is a farm state in a way the coastal states are not — peanuts, cotton, poultry, and pecans — and this fall the federal farm safety net paid out at record levels there. The USDA's Farm Service Agency is delivering approximately $413 million in farm safety net and conservation program payments to Georgia farmers, ranchers, and landowners for the 2025 crop year, part of a record $13.8 billion in Agriculture Risk Coverage (ARC) and Price Loss Coverage (PLC) payments nationwide, the largest annual payout since the programs were created in the 2014 Farm Bill. Fifteen Georgia crops triggered a PLC payment for the 2025 crop year — including peanuts, seed cotton, corn, soybeans, and wheat — and for this crop year only, producers automatically receive the higher of the ARC or PLC rate regardless of their original election, under the Working Families Tax Cuts Act. The payment limit for the year is $160,000, and a 5.7 percent sequestration reduction applies to all ARC/PLC payments. Georgia also gained about 451,500 new base acres under the law, which will count toward the programs starting with the 2026 crop year, and Conservation Reserve Program rental payments cover 118,798 acres in the state.",
      "The other end of the food system is moving in the opposite direction. Georgia's SNAP participation stood at about 1.33 million people in July 2026 — 11.86 percent of the state's population — down from 1.37 million in July 2019, and down sharply from the pandemic-era peak, as expanded work requirements under H.R. 1 took effect. Households on SNAP numbered 650,067 in July 2026, down 9.7 percent from a year earlier, and the average benefit was $375.60 per household that month. The state is also absorbing a larger share of the program's costs: from October 1, 2026, the federal government cut its share of SNAP administration costs from 50 percent to 25 percent, and from October 2027 states will have to pay a share of benefit costs based on their payment error rate. The farm safety net is paying out at record levels while the food safety net is shrinking — the same farm bill, two very different directions. More on SNAP: /blog/snap-food-assistance-spending-explained.",
      "Georgia's agriculture function nationally is small — the agriculture and food assistance category totaled $52.6 billion in FY2026 finals, less than one percent of federal outlays — but in the counties where it lands, the $413 million matters. It is the difference between a farm family weathering a bad price year and not. And it arrives in the same year the state is being asked to pay more of the food-assistance bill itself.",
    ],
    callout: {
      type: 'info',
      text: 'Farm payment figures are gross ARC/PLC amounts before the 5.7% sequestration reduction required by statute. SNAP counts for July 2026 are labeled preliminary by USDA and subject to significant revision.',
    },
  },
  {
    id: 'per-resident',
    heading: 'Big Dollars, Modest Per-Person Numbers — With an Asterisk',
    paragraphs: [
      "By the population-based model, Georgia looks cheap per person: roughly $3,500 per resident, tied with California for the lowest figure among the large states we have profiled so far — below Ohio ($5,900), Illinois ($5,500), Pennsylvania ($5,100), Virginia ($5,100), New York ($4,700), Florida ($4,300), and Texas ($3,900). The arithmetic is straightforward: 11.03 million people is a large denominator, and Georgia concentrates an unusual amount of federal activity per head — the CDC headquarters, the Defense Department's largest industrial complex at Robins, the ballistic-missile submarine base at Kings Bay, a top-ten research university system, and a farm belt that just collected a record safety-net payout all sit inside one state. But the low per-resident number is mostly a modeling artifact: the formula assigns every state a per-capita figure in a narrow band, and Georgia drew the bottom of it.",
      "But Georgia carries the same asterisk as Ohio, Illinois, and Pennsylvania, in a louder form: the model undercounts it. Social Security ($46.8 billion annualized) plus the federal share of Medicaid (about $9.8 billion) already exceeds the $38.6 billion modeled total by about $18 billion before a single dollar of defense, science, transit, or farm spending is counted. The real federal flow into Georgia is larger than the model — how much larger, nobody can say precisely, because the Treasury does not publish a state-by-state cash register. That is the honest limit of this article and of every state spotlight in this series.",
      "For fair comparisons, benchmark Georgia against other large states — Ohio, Illinois, Texas, California, Florida, New York — not small states where a single lab or base makes per-capita figures soar. And remember the category mix: Georgia is the state where the federal government pays retirees, insures the poor, defends the country from its largest Army posts and its submarine base, runs the nation's public-health agency, funds three of the country's biggest research universities, and is currently paying farmers record sums while food assistance shrinks — all at once, in a year when the national deficit hit $2 trillion and the first month of the new fiscal year opened with a $404 billion shortfall. The $38.6 billion is the footprint. The story is what it is made of. Compare states at /states/georgia and /states/florida.",
    ],
  },
];

export const data: ArticleData = {
  slug: 'federal-spending-georgia',
  title: 'Federal Spending in Georgia: CDC, Bases, and Rural Health',
  description:
    'Federal spending in Georgia runs about $38.6B a year — Social Security for 2.08M people, $221.7M in new rural health funding, and the CDC in Atlanta.',
  keyword: 'federal spending in georgia',
  category: 'State Spotlights',
  datePublished: '2026-11-19',
  dateModified: '2026-11-19',
  readingTime: estimateReadingTime(sections),
  quickTakeaways: [
    { label: '$38.6B', text: 'Modeled federal spending flowing into Georgia in FY2026 — about $3,500 per resident across 11.03 million Georgians, with prime contracts (55%) dominating the mix.' },
    { label: '~$46.8B', text: 'Social Security paid to 2.08 million Georgians on an annualized basis — more than the entire modeled state footprint, before Medicaid is counted.' },
    { label: '$221.7M rural health', text: 'CMS awarded Georgia $221.7 million on November 9, 2026 for year two of the Rural Health Transformation Program — up from $218.9 million in year one, past $440.5 million total.' },
    { label: '$2.21B research', text: 'Federal R&D funding at Georgia\'s big three universities — Georgia Tech ($1.21B), Emory ($0.74B), University of Georgia ($0.26B) — in FY2024, plus the CDC headquarters in Atlanta.' },
  ],
  sections,
  faqs: [
    {
      question: 'How much federal spending does Georgia receive?',
      answer:
        'Our modeled estimate puts total federal spending flowing into Georgia at roughly $38.6 billion in FY2026 — about 0.52% of the $7.396 trillion national total, or $3,500 per resident across 11.03 million Georgians. State-level figures are modeled estimates for comparison, not audited award records. The model understates Georgia: Social Security ($46.8 billion annualized) plus the federal share of Medicaid (about $9.8 billion) already exceeds the modeled total on their own.',
    },
    {
      question: 'How many people in Georgia get Social Security?',
      answer:
        'As of December 2025, 2,081,735 Georgians received Social Security benefits — 1,559,957 retired workers, 234,325 disabled workers, and the rest survivors, spouses, and children — and the Social Security Administration paid them $3.90 billion per month, about $46.8 billion annualized. That is 18.4% of the state\'s population. Another 241,467 Georgians received Supplemental Security Income (SSI).',
    },
    {
      question: 'What is the GREAT Health Program in Georgia?',
      answer:
        'GREAT Health — the Georgia Rural Enhancement and Transformation of Health program — is Georgia\'s vehicle for the federal Rural Health Transformation Program, a $50 billion, five-year investment created by the Working Families Tax Cuts Act. CMS awarded Georgia $221.7 million for year two on November 9, 2026, up from $218.9 million in year one, bringing the state\'s total past $440.5 million. The program funds 29 projects across five initiatives in 126 rural and partly rural counties.',
    },
    {
      question: 'How big is Georgia’s Medicaid program?',
      answer:
        'About 2.17 million Georgians were enrolled in Medicaid as of July 2024 — roughly one in five residents. Georgia has never adopted the ACA Medicaid expansion; its substitute, Pathways to Coverage, had only 18,527 people actively enrolled as of June 30, 2026 after three years. The federal share of the state\'s Medicaid spending runs about $9.8 billion a year on an annualized basis, at a 66.86% federal match rate.',
    },
    {
      question: 'What military bases are in Georgia?',
      answer:
        'Georgia hosts Fort Benning (the Army\'s maneuver center, outside Columbus), Fort Stewart (the largest Army installation east of the Mississippi), Robins Air Force Base (the Air Force\'s largest industrial complex), Moody Air Force Base (combat search-and-rescue, preparing for the F-35), Naval Submarine Base Kings Bay (East Coast home of the ballistic-missile submarine fleet), Dobbins Air Reserve Base, and Hunter Army Airfield. Roughly 70,000 active-duty servicemembers and 27,000 reservists are based in the state.',
    },
    {
      question: 'How much federal research funding do Georgia universities get?',
      answer:
        'In fiscal 2024, the federal government financed about $2.21 billion of research at Georgia\'s big three universities: Georgia Tech ($1.21 billion, ranked second nationally for federally sponsored research), Emory University ($744.6 million, mostly NIH), and the University of Georgia ($255.1 million). Georgia also hosts the CDC headquarters in Atlanta, funded at $9.147 billion in the bipartisan FY2026 Labor-HHS bill.',
    },
    {
      question: 'How many Georgians use SNAP?',
      answer:
        'USDA data put Georgia SNAP participation at about 1.33 million people in July 2026 — 11.86% of the state\'s population, down from 1.37 million in July 2019 — across 650,067 households, with an average benefit of $375.60 per household that month. July 2026 counts are labeled preliminary by USDA and subject to revision.',
    },
  ],
  sources: [
    {
      name: 'Georgia Department of Community Health — Georgia Receives $221.7 Million Award for Year Two of Rural Health Transformation (Nov 12, 2026)',
      url: 'https://dch.georgia.gov/announcement/2026-11-12/georgia-receives-2217-million-award-year-two-rural-health-transformation',
    },
    {
      name: 'U.S. Department of Health and Human Services — Trump Administration Announces $10 Billion in Second Year of Rural Health Transformation Awards (Nov 9, 2026)',
      url: 'https://aka-www.hhs.gov/press-room/trump-administration-awards-10-billion-rural-health-transformation-program-year-two.html',
    },
    {
      name: 'Social Security Administration — Congressional Statistics, December 2025: Georgia',
      url: 'http://www.ssa.gov/policy/docs/factsheets/cong_stats/2025/ga.html',
    },
    {
      name: 'Congressional Budget Office — Monthly Budget Review: Summary for Fiscal Year 2026 (Nov 9, 2026)',
      url: 'https://www.cbo.gov/publication/61986',
    },
    {
      name: 'Georgia Budget and Policy Institute — Pathways to Coverage: Three Years of Enrollment (Oct 2026)',
      url: 'https://gbpi.org/pathways-to-coverage-three-years/',
    },
    {
      name: 'Georgia Tech — Georgia Tech Climbs to No. 2 University in Federally Sponsored Research Expenditures (Jan 5, 2026)',
      url: 'https://www.gatech.edu/news/2026/01/05/georgia-tech-climbs-no-2-university-federally-sponsored-research-expenditures',
    },
    {
      name: 'University of Georgia — UGA Tops $600M in R&D Expenditures for First Time in FY 2024 (Feb 2025)',
      url: 'https://savannahceo.com/news/2025/02/uga-tops-600m-rd-expenditures-first-time-fy-2024/',
    },
    {
      name: 'USDA Farm Service Agency — USDA Boosts Georgia Agricultural Economy Through $413 Million in Safety Net and Conservation Program Payments (Oct 22, 2026)',
      url: 'https://www.fsa.usda.gov/news-events/news/10-22-2026/usda-boosts-georgia-agricultural-economy-413-million-safety-net',
    },
    {
      name: 'USDA Food and Nutrition Service — SNAP Number of Persons Participating (data as of Oct 9, 2026)',
      url: 'https://fns-prod.azureedge.us/sites/default/files/resource-files/snap-persons-10.pdf',
    },
    {
      name: 'NACCHO — Congress Releases Bicameral Fiscal Year 2026 Labor-HHS Appropriations Bill (Jan 2026)',
      url: 'https://www.naccho.org/blog/articles/congress-releases-bicameral-fiscal-year-2026-labor-hhs-appropriations-bill',
    },
  ],
  relatedSlugs: ['where-does-us-federal-budget-go', 'federal-deficit-2026-how-big', 'federal-spending-florida'],
};
