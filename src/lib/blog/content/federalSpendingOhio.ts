import type { ArticleData } from '../types';
import { estimateReadingTime } from '../types';

const sections: ArticleData['sections'] = [
  {
    id: 'the-big-picture',
    heading: "Ohio's $69.5 Billion Federal Footprint",
    paragraphs: [
      "Four days before this article was published, the Congressional Budget Office delivered the opening verdict on the new fiscal year: the federal government ran an estimated $409 billion deficit in October 2026, the first month of fiscal year 2027 — $125 billion more than the shortfall recorded in October 2025. Revenues came in $36 billion lower than a year earlier, at about $369 billion, while outlays ran $89 billion higher, at about $778 billion. Two days later the Treasury's own October statement put the actual deficit slightly lower, at $404 billion. Either way, the year has started with the government borrowing more than $100 billion a week. That is the national backdrop for every state in this series — and Ohio, the seventh-largest state in the country, absorbs roughly $69.5 billion of it.",
      "Our modeled figures put total federal spending flowing into Ohio at about $69.5 billion for fiscal 2026 — roughly 0.94 percent of the $7.396 trillion national total, spread across 11.79 million Ohioans at about $5,900 per resident. That per-resident figure is the highest of any large state we have profiled so far — above Illinois ($5,500), Virginia ($5,100), New York ($4,700), Florida ($4,300), Texas ($3,900), and California ($3,500). The reason is not that Ohio is swimming in federal contracts. It is that Ohio concentrates the two biggest things Washington pays for — retirement checks and health coverage — alongside the Air Force's research headquarters, a NASA center fighting for its budget, one of the largest university research operations in America, and some of the richest farmland in the country. See the state breakdown at /states/ohio and the full national picture at /spending-breakdown.",
      "An important honesty note before we go further: state-level figures are modeled estimates for comparison, not audited award records. They show the order of magnitude and the composition of the federal footprint; they are not a cash register. And Ohio exposes the model's limits immediately: Social Security payments to Ohioans alone run about $58.9 billion a year, and the federal share of the state's Medicaid program adds another $27.0 billion — together $85.9 billion, already more than the entire $69.5 billion modeled total. The population-based model understates Ohio, because entitlement dollars concentrate here beyond what headcount alone predicts. Treat the $69.5 billion as a floor and a comparison tool, not a ceiling. Where a figure comes from the Treasury's Monthly Treasury Statement (MTS), it is labeled FY2026 final — October 1, 2025 through September 30, 2026.",
    ],
    callout: {
      type: 'info',
      text: 'All FY2026 figures are finals from the September 2026 Monthly Treasury Statement (published October 16, 2026): $7.396 trillion in outlays, $5.403 trillion in receipts, a $1.992 trillion deficit. The CBO summary released November 9, 2026 confirms the same totals. The October 2026 deficit is a CBO estimate ($409 billion); the Treasury\'s October statement, released November 12, put the actual at $404 billion.',
    },
  },
  {
    id: 'retirees',
    heading: '2.61 Million Checks: The Retirement Engine',
    paragraphs: [
      "The single largest federal flow into Ohio is also the quietest: retirement checks. As of December 2025, 2,611,577 Ohioans received Social Security benefits, according to the Social Security Administration — 1,900,292 retired workers, 299,284 disabled workers, 169,406 widow(er)s and parents, 98,465 spouses, and 144,130 children. The agency paid them a combined $4.91 billion per month, or about $58.9 billion on an annualized basis. That is roughly 22 percent of everyone who lives in the state — more than one in five Ohioans — and it makes Social Security alone worth 85 percent of the state's entire modeled federal footprint. More than 2 million of the state's beneficiaries are aged 65 or older.",
      "The scale reflects Ohio's age profile and its industrial past. The retired-worker checks reflect a lifetime of covered earnings in the factories of Cleveland, Cincinnati, Akron, and Toledo, in the auto plants and steel mills, and in the farm economy of the state's 88 counties. On top of the retirement program, 288,906 Ohioans received Supplemental Security Income (SSI), the federal cash program for low-income aged, blind, and disabled people, at $218.7 million a month. Nationally, Social Security is the largest federal outlay by far — $1,667.1 billion in FY2026 finals — and Ohio absorbs about 3.5 percent of it, almost exactly its share of the U.S. population. Category detail: /categories/social-security-spending.",
      "That ordinariness is the point. Unlike Florida, where retirees skew the numbers wildly upward, Ohio is close to the national average on Social Security — which is exactly why the modeled total still undershoots: add Medicaid's $27.0 billion federal share and the two biggest programs alone exceed the model by $16 billion. The retirement engine is not a quirk of Ohio's federal story; it is the foundation, and everything else — the bases, the labs, the farms — sits on top of it.",
    ],
    chart: {
      title: 'Largest Federal Flows Into Ohio, FY2026 ($B)',
      caption:
        'Social Security annualized from SSA December 2025 monthly benefits; Medicaid federal share FY2024 (Ohio Legislative Service Commission); Ohio State federal research FY2024 (NSF HERD); farm payments from USDA FSA, October 2026 announcement for the 2025 crop year.',
      type: 'bar',
      unit: '$B',
      data: [
        { label: 'Social Security (annualized)', value: 58.9 },
        { label: 'Medicaid federal share', value: 27.0 },
        { label: 'Ohio State federal research', value: 0.8 },
        { label: 'Farm safety net & conservation', value: 0.6 },
      ],
    },
  },
  {
    id: 'health',
    heading: "Medicaid: $27 Billion of Federal Money, Now Under Pressure",
    paragraphs: [
      "If Social Security is Ohio's biggest federal flow, Medicaid is its most politically exposed. The program covers more than 3 million Ohioans — roughly one in four state residents — including more than 705,000 adults covered under the Affordable Care Act expansion. In state fiscal year 2024, the program spent $38.88 billion in total, of which $26.95 billion, or 69.3 percent, was federal money: $12.60 billion through the General Revenue Fund and $14.35 billion in non-GRF federal funds. The federal share is generous because Ohio's traditional Medicaid population is matched at 64.6 percent (the FFY 2025 FMAP), while the expansion population is matched at 90 percent. By fiscal 2025 the combined program had grown past $43 billion a year. The national Medicaid function totaled $1,025.6 billion in FY2026 finals — the third-largest federal outlay after Social Security and Medicare ($1,072.6 billion). Category detail: /categories/medicaid-spending.",
      "The One Big Beautiful Bill Act (H.R. 1), signed July 4, 2025, is now squeezing that flow from several directions at once. The Kaiser Family Foundation estimates Ohio will lose about $33 billion in federal Medicaid funding over the next decade — a range of $24 billion to $41 billion — as provider taxes and state directed payments are restricted. Rural Ohio alone stands to lose an estimated $5.62 billion over ten years, the seventh-highest rural loss in the country. A separate analysis puts $6.5 billion to $13 billion of Ohio Medicaid funding at risk over the decade from the provider-tax and payment restrictions alone. Work requirements for expansion adults take effect January 1, 2027, and from that month counties must also renew Medicaid eligibility twice as often. Between July 2025 and July 2026, Ohio's Medicaid enrollment already fell by 200,000 people.",
      "Ohio's veterans sit inside the same program: about 65,435 veterans are enrolled in Medicaid's Group VIII expansion population. And the state has one more tripwire worth watching — its provider taxes, the hospital and managed-care assessments that fund the state's share, draw down more than $20 billion in federal funds every year. When the federal rules governing those taxes tighten, the money at stake is not abstract: it is the financing of the program that insures a quarter of the state. For Ohio, the next two budget cycles will decide whether the state's second-largest federal flow keeps flowing at its current size.",
    ],
    callout: {
      type: 'warning',
      text: 'Medicaid figures come from different vintages: the $38.88B/$26.95B split is state fiscal year 2024 (Ohio Legislative Service Commission); the $43B+ program total is FY2025; enrollment is July 2026. Do not mix them into a single-year total.',
    },
  },
  {
    id: 'defense',
    heading: 'Wright-Patterson: The Base That Is a City',
    paragraphs: [
      "Ohio hosts one military installation that dwarfs everything else in the state: Wright-Patterson Air Force Base, outside Dayton. With about 38,000 employees before the recent workforce reductions, it is the largest single-site employer in the state of Ohio — bigger than any private company campus — and the headquarters of the Air Force Research Laboratory (AFRL), the Air Force Institute of Technology, and the 711th Human Performance Wing, alongside the Naval Medical Research Unit Dayton. AFRL is where the Air Force invents its future: sensors, propulsion, materials, and the hypersonic aircraft programs that now dominate defense research. The base is also home to the National Museum of the U.S. Air Force, the world's largest military aviation museum.",
      "The fiscal 2026 National Defense Authorization Act, passed in December 2025, carried $60 million in Ohio-specific provisions secured by Senator Jon Husted: $45 million to build a new Human Performance Wing Laboratory at Wright-Patterson, $15 million in planning and design funding for a full refurbishment of the base's deteriorating primary runway, $2.8 million to begin designing an artificial-intelligence supercomputing center, and $10 million for Project Pele, the effort to build a portable micronuclear reactor for the military. The House version added $20 million for reusable hypersonic aircraft research at AFRL and $2.5 million for lighter, stronger metals. One caution: the NDAA authorizes programs and sets policy; it does not appropriate the money. Separate spending bills still have to fund each line.",
      "The defense footprint extends well beyond Dayton. NASA Glenn's Neil Armstrong Test Facility in Sandusky hosts the hypersonic tunnel work the NDAA specifically protected, and Anduril Industries is building a new manufacturing facility at the Rickenbacker Air National Guard installation near Columbus. In Cincinnati, GE Aerospace's Evendale plant builds the jet engines that power much of the military's fleet. What Ohio does not have is a top-five defense dollar total: the site's category data ranks Texas ($67.1 billion), California ($60.8 billion), Virginia ($57.2 billion), Florida ($33.5 billion), and Maryland ($29.2 billion) ahead of it. Ohio's military story is about research and engineering concentration, not the largest checkbook. Nationally, defense totaled $965.2 billion in FY2026 finals. Full category data: /categories/defense-military.",
    ],
    chart: {
      title: 'FY2026 NDAA Ohio Provisions ($M)',
      caption:
        'Fiscal Year 2026 National Defense Authorization Act, Ohio provisions announced by Senator Jon Husted and the House Armed Services Committee (December 2025). Authorization, not appropriation — separate spending bills fund each line.',
      type: 'bar',
      unit: '$M',
      data: [
        { label: 'Human Performance Wing Lab', value: 45 },
        { label: 'Hypersonics R&D (AFRL)', value: 20 },
        { label: 'Runway refurbishment design', value: 15 },
        { label: 'Project Pele microreactor', value: 10 },
        { label: 'AI supercomputing center design', value: 2.8 },
        { label: 'Lightweight metals research', value: 2.5 },
      ],
    },
  },
  {
    id: 'research',
    heading: 'NASA Glenn and Ohio State: A $1.7 Billion Research Corridor',
    paragraphs: [
      "No state outside the coasts concentrates as much federally funded research in one corridor as Ohio does. At one end sits NASA Glenn Research Center in Cleveland, founded in 1941 to study aircraft propulsion and now the agency's lead center for spacecraft power, in-space propulsion, and advanced communications. Its director oversees more than 2,580 civil servants and contractors on an annual budget of approximately $900 million, and Cleveland State University's economic-impact work puts the center's footprint at roughly $2 billion a year and more than 9,000 jobs across Ohio. In August 2025, NASA designated Glenn as the agency's lead for Fission Surface Power — the nuclear reactors meant to power a sustained presence on the Moon and Mars — with $500 million of program work attached.",
      "That position is now under direct threat. The administration's fiscal 2026 budget proposed cutting NASA Glenn's budget by 38 percent and its civil-service staffing from 1,391 to 837 — a loss of 554 jobs — as part of a proposed $6 billion-plus cut to NASA's $24.8 billion budget. Governor Mike DeWine wrote to Vice President JD Vance in July 2026 warning that the cuts would hit programs with direct national-security implications, and renewed Ohio's call for NASA headquarters itself to move to Cleveland. A Cleveland State study of the proposed cuts estimates more than $101.8 million in lost labor income and value added, and more than $143.4 million in lost direct output, from the job losses alone. The fight over Glenn is the clearest example in Ohio of how a national budget decision lands on a single city.",
      "At the other end of the corridor, The Ohio State University recorded $1.58 billion in research expenditures in fiscal 2024 — 12th in the nation, a university record — of which $774.2 million came from the federal government. The National Institutes of Health supplied $400 million, the National Science Foundation more than $81 million, and the Department of Defense $74.9 million, up 31 percent on the year before. Life sciences dominate at $1.1 billion, or 68 percent of the total. Together, Glenn's $900 million budget and Ohio State's $774 million in federal research add up to about $1.7 billion a year of federally funded science in one state — against a national science function of $39.9 billion in FY2026 finals. Category detail: /categories/science-medical-research.",
    ],
  },
  {
    id: 'farmland',
    heading: 'Farmland and Food Aid: A $594 Million Harvest, a Shrinking Safety Net',
    paragraphs: [
      "Northwest and west-central Ohio is corn-and-soybean country, and the federal farm safety net paid out at record levels there this fall. The USDA's Farm Service Agency is delivering approximately $594 million in farm safety net and conservation payments to Ohio farmers, producers, and landowners for the 2025 crop year — part of a record $13.8 billion in Agriculture Risk Coverage (ARC) and Price Loss Coverage (PLC) payments nationwide, the largest annual payout since the programs were created in the 2014 Farm Bill. Ohio State University's farm-office analysis puts the crop breakdown at about $301 million for corn, $171 million for soybeans, and $50 million for wheat, with 224,572 acres under Conservation Reserve Program contracts. Nine Ohio crops triggered a payment, and for the 2025 crop year only, producers automatically receive the higher of the ARC or PLC rate regardless of their original election, under the Working Families Tax Cuts Act. The payment limit for the year is $160,000, and a 5.7 percent sequestration reduction applies to all ARC/PLC payments.",
      "The other end of the food system is moving in the opposite direction. Ohio's SNAP caseload averaged 1.44 million people a month in fiscal 2025; by May 2026 it had fallen to 1,281,674 recipients, with $242.2 million issued that month at an average of $189 per person, and USDA data put July 2026 at 1.32 million. The Ohio Poverty Law Center, citing USDA data, reports that nearly 129,000 Ohioans lost SNAP benefits between May 2025 and June 2026, after expanded work requirements under H.R. 1 took effect in May 2026. The approval rate for applications fell from 57 percent in July 2025 to 48 percent in July 2026, and the share of applications decided within the required 30 days fell from 95 percent to 87.7 percent. The farm safety net is paying out at record levels while the food safety net is shrinking — the same farm bill, two very different directions.",
      "And the squeeze is about to get more expensive for the state itself. From October 1, 2026, the federal government cut its share of SNAP administration costs from 50 percent to 25 percent; Ohio is losing an estimated $60 million to $70 million a year from that change alone, about $38 million of it falling on the counties that administer the program, and the state legislature earmarked about $12.5 million in March to offset part of it. The Ohio Department of Job and Family Services puts the immediate loss at $67 million. From October 2027, states will also have to pay a share of SNAP benefit costs based on their payment error rate — Ohio's was 6.76 percent in federal fiscal year 2025, and at that rate the state could owe more than $300 million a year in benefit costs for the first time. More on SNAP: /blog/snap-food-assistance-spending-explained.",
    ],
    chart: {
      title: 'Ohio Farm Safety Net Payments by Crop, 2025 Crop Year ($M)',
      caption:
        'USDA Farm Service Agency, October 2026 announcement ($594M total including conservation payments); crop breakdown from Ohio State University farm-office estimates. Gross amounts before the 5.7% sequestration reduction.',
      type: 'bar',
      unit: '$M',
      data: [
        { label: 'Corn', value: 301 },
        { label: 'Soybeans', value: 171 },
        { label: 'Wheat', value: 50 },
      ],
    },
    callout: {
      type: 'info',
      text: 'Farm payment figures are gross ARC/PLC amounts before the 5.7% sequestration reduction required by statute. SNAP counts for July 2026 are labeled preliminary by USDA and subject to revision.',
    },
  },
  {
    id: 'per-resident',
    heading: 'Big Dollars, Modest Per-Person Numbers — With an Asterisk',
    paragraphs: [
      "By the population-based model, Ohio looks expensive per person: roughly $5,900 per resident, the highest modeled figure among the large states — ahead of Illinois ($5,500), Virginia ($5,100), New York ($4,700), Florida ($4,300), Texas ($3,900), and California ($3,500). The arithmetic is straightforward: 11.79 million people is a large denominator, but Ohio concentrates an unusual amount of federal activity per head — the Air Force's research headquarters, a NASA center, a top-twelve research university, a top-ten Medicaid program, and a farm belt that just collected a record safety-net payout all sit inside one state.",
      "But Ohio carries the same asterisk as Illinois, in a louder form: the model undercounts it. Social Security ($58.9 billion annualized) plus the federal share of Medicaid ($27.0 billion) already exceeds the $69.5 billion modeled total by $16 billion before a single dollar of defense, science, transit, or farm spending is counted. The real federal flow into Ohio is larger than the model — how much larger, nobody can say precisely, because the Treasury does not publish a state-by-state cash register. That is the honest limit of this article and of every state spotlight in this series.",
      "For fair comparisons, benchmark Ohio against other large states — Illinois, Texas, California, Florida, New York — not small states where a single lab or base makes per-capita figures soar. And remember the category mix: Ohio is the state where the federal government pays retirees, insures the poor, runs the Air Force's research lab, may cut its NASA center by more than a third, and is currently paying farmers record sums while food assistance shrinks — all at once, in a year when the national deficit hit $2 trillion and the first month of the new fiscal year opened with a $409 billion shortfall. The $69.5 billion is the footprint. The story is what it is made of. Compare states at /states/ohio and /states/illinois.",
    ],
  },
];

export const data: ArticleData = {
  slug: 'federal-spending-ohio',
  title: 'Federal Spending in Ohio: Bases, Factories, and Research',
  description:
    'Federal spending in Ohio runs about $69.5B a year — Social Security for 2.6M people, $27B in Medicaid, Wright-Patterson AFB, and NASA Glenn.',
  keyword: 'federal spending in ohio',
  category: 'State Spotlights',
  datePublished: '2026-11-13',
  dateModified: '2026-11-13',
  readingTime: estimateReadingTime(sections),
  quickTakeaways: [
    { label: '$69.5B', text: 'Modeled federal spending flowing into Ohio in FY2026 — about $5,900 per resident across 11.79 million Ohioans, the highest per-resident figure of any large state profiled so far.' },
    { label: '~$58.9B', text: 'Social Security paid to 2.61 million Ohioans on an annualized basis — 85% of the entire modeled state footprint, before Medicaid is counted.' },
    { label: '$409B October deficit', text: 'The CBO estimates the first month of FY2027 ran a $409 billion deficit — $125 billion more than October 2025; the Treasury\'s actual was $404 billion, with timing shifts distorting both.' },
    { label: '$594M harvest', text: 'USDA paid Ohio farmers a record $594M in ARC/PLC and conservation payments for the 2025 crop year, while SNAP rolls fell to 1.32 million.' },
  ],
  sections,
  faqs: [
    {
      question: 'How much federal spending does Ohio receive?',
      answer:
        'Our modeled estimate puts total federal spending flowing into Ohio at roughly $69.5 billion in FY2026 — about 0.94% of the $7.396 trillion national total, or $5,900 per resident across 11.79 million Ohioans. State-level figures are modeled estimates for comparison, not audited award records. The model understates Ohio: Social Security ($58.9 billion annualized) plus the federal share of Medicaid ($27.0 billion) already exceeds the modeled total on their own.',
    },
    {
      question: 'How many people in Ohio get Social Security?',
      answer:
        'As of December 2025, 2,611,577 Ohioans received Social Security benefits — 1,900,292 retired workers, 299,284 disabled workers, and the rest survivors, spouses, and children — and the Social Security Administration paid them $4.91 billion per month, about $58.9 billion annualized. That is roughly one in five state residents. Another 288,906 Ohioans received Supplemental Security Income (SSI).',
    },
    {
      question: 'How big is Wright-Patterson Air Force Base?',
      answer:
        'With about 38,000 employees, Wright-Patterson Air Force Base outside Dayton is the largest single-site employer in Ohio. It hosts the Air Force Research Laboratory, the Air Force Institute of Technology, and the 711th Human Performance Wing. The fiscal 2026 defense authorization act carried $60 million in Ohio provisions, including $45 million for a new Human Performance Wing Laboratory and $15 million to design a refurbishment of the base\'s primary runway.',
    },
    {
      question: 'What is happening to NASA Glenn’s funding?',
      answer:
        'The administration\'s fiscal 2026 budget proposed cutting NASA Glenn Research Center\'s budget by 38% and its civil-service staffing from 1,391 to 837 — a loss of 554 jobs — as part of a proposed $6 billion-plus cut to NASA. Governor Mike DeWine wrote to Vice President JD Vance in July 2026 opposing the cuts. Glenn, with a roughly $900 million annual budget and about 2,580 staff, was designated NASA\'s lead center for Fission Surface Power in August 2025.',
    },
    {
      question: 'How big is Ohio’s Medicaid program?',
      answer:
        'In state fiscal year 2024, Ohio Medicaid spent $38.88 billion, of which $26.95 billion (69.3%) was federal money. The program covers more than 3 million Ohioans, including 705,000+ adults under the ACA expansion, matched at 90% federally. The Kaiser Family Foundation estimates Ohio will lose about $33 billion in federal Medicaid funding over the next decade under H.R. 1, with rural Ohio losing an estimated $5.62 billion.',
    },
    {
      question: 'How many Ohioans use SNAP?',
      answer:
        'USDA data put Ohio SNAP participation at 1.32 million people in July 2026, down from a 1.44 million monthly average in fiscal 2025. Nearly 129,000 Ohioans lost SNAP benefits between May 2025 and June 2026 after expanded work requirements under H.R. 1 took effect. From October 2026, Ohio also pays a larger share of SNAP administration costs — an estimated $60–70 million a year — and from October 2027 it may owe a share of benefit costs too.',
    },
  ],
  sources: [
    {
      name: 'Congressional Budget Office — Monthly Budget Review: Summary for Fiscal Year 2026 (Nov 9, 2026)',
      url: 'https://www.cbo.gov/publication/61986',
    },
    {
      name: 'Social Security Administration — Congressional Statistics, December 2025: Ohio',
      url: 'https://www.ssa.gov/policy/docs/factsheets/cong_stats/2025/oh.html',
    },
    {
      name: 'Ohio Legislative Service Commission — Ohio’s Medicaid Financial Landscape (Jan 2025)',
      url: 'https://lsc.ohio.gov/assets/organizations/legislative-service-commission/files/ohios-medicaid-financial-landscape-and-fmap.pdf',
    },
    {
      name: 'USDA Farm Service Agency — Record $13.8 Billion in ARC/PLC Payments for 2025 Crop Year (Oct 7, 2026)',
      url: 'https://www.fsa.usda.gov/news-events/news/10-07-2026/usda-announces-record-payments-138-billion-2025-crop-year-revenue-price',
    },
    {
      name: 'Ohio Department of Job and Family Services — Caseload Summary Statistics Report, May 2026',
      url: 'https://dam.assets.ohio.gov/image/upload/jfs.ohio.gov/pams/CaseloadSummaryReportMay2026.pdf',
    },
    {
      name: 'Cleveland State University — Mission Interrupted: The Economic Aftermath of Job Losses at NASA Glenn (2026)',
      url: 'https://engagedscholarship.csuohio.edu/urban_facpub/1877/',
    },
  ],
  relatedSlugs: ['where-does-us-federal-budget-go', 'federal-deficit-2026-how-big', 'federal-spending-illinois'],
};
