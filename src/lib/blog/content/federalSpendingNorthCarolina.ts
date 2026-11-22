import type { ArticleData } from '../types';
import { estimateReadingTime } from '../types';

const sections: ArticleData['sections'] = [
  {
    id: 'the-big-picture',
    heading: "North Carolina's $42.3 Billion Federal Footprint",
    paragraphs: [
      "Two federal checks landed in western North Carolina in the space of a month, and together they say a lot about what federal spending looks like in this state right now. On October 20, 2026, the Federal Highway Administration announced $873 million in emergency relief to finish repairing roads and bridges wrecked by Hurricane Helene — bringing the agency's total investment in North Carolina's Helene recovery to $2.9 billion. Then on November 19, the Economic Development Administration announced a $33.2 million Disaster Supplemental grant to the Western North Carolina Life Sciences Cluster, led by Durham-based RTI International, to build a biotech hub in the same mountains Helene flooded: a 34,000-square-foot wet lab and training facility in Caldwell County, water infrastructure for the Great Meadows Industrial Site in Burke County, and startup training across the region. One check rebuilds what the storm broke; the other tries to build something the region never had. That is the news hook for this article — and the rest of North Carolina's federal story is much bigger than disaster aid.",
      "Our modeled figures put total federal spending flowing into North Carolina at about $42.26 billion on a fiscal 2026 basis — roughly 0.57 percent of the $7.396 trillion national total, spread across 10.84 million North Carolinians at about $3,900 per resident. The mix is contract-heavy, at $23.24 billion in prime contracts (55 percent), $14.79 billion in grants and assistance (35 percent), and $4.23 billion in other federal awards (10 percent). That profile reflects what North Carolina is for the federal government: a military state with the Army's largest installation and one of its biggest Marine bases, a research state with three of the country's top federally funded universities, a farm state, and — since September 2024 — a disaster-recovery state. See the state breakdown at /states/north-carolina and the full national picture at /spending-breakdown.",
      "An important honesty note before we go further: state-level figures are modeled estimates for comparison, not audited award records. They show the order of magnitude and the composition of the federal footprint; they are not a cash register. And North Carolina exposes the model's limits immediately, in the same way Ohio, Illinois, Pennsylvania, and Georgia did — only louder. Social Security payments to North Carolinians alone run about $55.2 billion a year on an annualized basis, and the federal share of the state's Medicaid program adds roughly another $25 billion — together about $80.2 billion, nearly $38 billion more than the entire $42.26 billion modeled total. The population-based model understates North Carolina, because entitlement dollars concentrate here beyond what headcount alone predicts. Treat the $42.26 billion as a floor and a comparison tool, not a ceiling. Where a figure comes from the Treasury's Monthly Treasury Statement (MTS), it is labeled FY2026 final — October 1, 2025 through September 30, 2026. One naming note for this article: the calendar title said 'Fort Liberty,' but the Army's largest installation is Fort Bragg again — renamed back from Fort Liberty on March 7, 2025, this time in honor of Pfc. Roland L. Bragg, a World War II paratrooper. We use Fort Bragg (formerly Fort Liberty) throughout.",
    ],
    callout: {
      type: 'info',
      text: 'All FY2026 figures are finals from the September 2026 Monthly Treasury Statement (published October 16, 2026): $7.396 trillion in outlays, $5.403 trillion in receipts, a $1.992 trillion deficit. The CBO summary released November 9, 2026 confirms the same totals. The October 2026 deficit — the first month of FY2027 — was $404 billion by the Treasury\'s own statement, released November 12, a record for the month.',
    },
    chart: {
      title: 'How Federal Money Reaches North Carolina, FY2026 Basis ($B)',
      caption:
        'Modeled estimates from the site\'s North Carolina state page (usaspending.us/states/north-carolina), FY2026 basis. Prime contracts dominate the mix — the bases, the Research Triangle, and defense contractors doing work in the state.',
      type: 'bar',
      unit: '$B',
      data: [
        { label: 'Prime contracts', value: 23.24 },
        { label: 'Grants & assistance', value: 14.79 },
        { label: 'Other federal awards', value: 4.23 },
      ],
    },
  },
  {
    id: 'retirees',
    heading: '2.39 Million Checks: The Retirement Engine',
    paragraphs: [
      "The single largest federal flow into North Carolina is also the quietest: retirement checks. As of December 2025, 2,385,531 North Carolinians received Social Security benefits, according to the Social Security Administration — 1,827,895 retired workers, 275,659 disabled workers, 110,681 widow(er)s and parents, 72,873 survivor children, 38,612 spouses, and 21,432 retired children. The agency paid them a combined $4.60 billion per month, or about $55.2 billion on an annualized basis. That is 21.3 percent of everyone who lives in the state — more than one in five North Carolinians — and 89.4 percent of the state's population aged 65 or older. More than 1.89 million of the state's beneficiaries are aged 65 or older. Nationally, Social Security is the largest federal outlay by far — $1,667.1 billion in FY2026 finals — and North Carolina absorbs about 3.3 percent of it. Category detail: /categories/social-security-spending.",
      "The scale reflects North Carolina's age profile and its working past. The retired-worker checks reflect a lifetime of covered earnings in the furniture factories of the Piedmont, the textile mills that once lined the same towns, the tobacco fields of the coastal plain, the banks of Charlotte, the Research Triangle's labs, and the military bases that have anchored Fayetteville, Jacksonville, and Goldsboro for generations. The 2.8 percent cost-of-living adjustment for 2026 added about $56 a month to the average retired worker's check nationally, and the standard Medicare Part B premium rose to $202.90 — a reminder that the retirement check and the health premium move together.",
      "That ordinariness is the point. North Carolina is close to the national average on Social Security — which is exactly why the modeled total still undershoots: add Medicaid's roughly $25 billion federal share and the two biggest programs alone exceed the model by about $38 billion. The retirement engine is not a quirk of North Carolina's federal story; it is the foundation, and everything else — the bases, the Triangle, the farms, the disaster recovery — sits on top of it.",
    ],
    chart: {
      title: 'Largest Federal Flows Into North Carolina, FY2026 ($B)',
      caption:
        'Social Security annualized from SSA December 2025 monthly benefits; Medicaid federal share from the state\'s FY2025 program cost (federal $25B of $36B); farm payments from USDA FSA, October 2026 announcement for the 2025 crop year; Rural Health Transformation Year 2 award from CMS, November 9, 2026.',
      type: 'bar',
      unit: '$B',
      data: [
        { label: 'Social Security (annualized)', value: 55.2 },
        { label: 'Medicaid federal share (FY2025)', value: 25.0 },
        { label: 'Rural Health Transformation, Year 2', value: 0.22 },
        { label: 'Farm safety net & conservation', value: 0.2 },
      ],
    },
  },
  {
    id: 'helene',
    heading: 'Helene, Two Years On: $873 Million for Roads, $33.2 Million for a New Economy',
    paragraphs: [
      "Hurricane Helene struck western North Carolina in September 2024, and two years later the federal money is still arriving — now in two distinct forms. The bigger check is for repair. On October 20, 2026, Transportation Secretary Sean P. Duffy announced $873 million in Federal Highway Administration emergency relief to finish rebuilding roads and bridges damaged by the storm, part of a $1.6 billion nationwide relief package. The storm left more than 9,000 damage sites and more than 1,400 road closures across the state, and the new money brings the FHWA's total Helene investment in North Carolina to $2.9 billion, out of $3.4 billion across all impacted states. Nearly 99 percent of state roads had reopened as of the state Department of Public Safety's September 25, 2026 recovery update. The hardest single job is Interstate 40 through the Pigeon River Gorge, a major freight corridor near the Tennessee line: the estimated $2.8 billion reconstruction is expected to restore all four lanes by 2029.",
      "The smaller check is for reinvention. On November 19, 2026, the Economic Development Administration announced it intends to award $33.2 million in Disaster Supplemental funding to the Western North Carolina Life Sciences Cluster, led by RTI International, the nonprofit research institute based in Research Triangle Park. The award, drawn from the EDA's $1.45 billion FY2025 Disaster Supplemental Grant Program for 2023 and 2024 disasters, is backed by $18.8 million in additional partner commitments. Eight regional partners will carry out five projects: a governing board and regional strategy run by RTI and the North Carolina Biotechnology Center; a 34,000-square-foot wet lab, clean room, and training facility at Caldwell Community College and Technical Institute — the first wet-lab incubator space west of Interstate 77; a LaunchPad run by First Flight Venture Center and NC IDEA to train and mentor entrepreneurs; water infrastructure from Burke Development and the city of Morganton to serve the Great Meadows Industrial Site, a 1,350-acre site being renamed the NC Business Park on Interstate 40; and regional marketing by the Economic Development Partnership of North Carolina. The idea is explicit: rather than only rebuilding what the storm broke, anchor higher-wage biotech and medical-technology work in a region that has been losing traditional manufacturing for years.",
      "The two awards sit inside a much larger recovery bill. The state itself has committed $3.1 billion to Helene recovery, and in July 2026 the EDA awarded the state another $34.2 million in grants, including $29.2 million for the Western North Carolina Futures Factory. Governor Josh Stein's administration says it has supported more than 20 EDA applications since the storm. None of this is the end of the story: the governor's June 2026 federal funding request ran to roughly $10 billion, including about $3 billion for housing. The $873 million and the $33.2 million are the newest installments, not the total — and the test of the smaller one is whether a wet lab in Caldwell County can do what two years of repair money cannot: give the mountains an industry that outlasts the rebuild.",
    ],
    chart: {
      title: 'Federal Helene Recovery Money for North Carolina ($M)',
      caption:
        'FHWA totals from the October 20, 2026 announcement (the $873M is part of the $2.9B total); EDA figures from the November 19, 2026 announcement and the July 2026 awards. State commitment of $3.1B is North Carolina\'s own money, not federal.',
      type: 'bar',
      unit: '$M',
      data: [
        { label: 'FHWA total to NC', value: 2900 },
        { label: 'FHWA Oct 2026 award', value: 873 },
        { label: 'EDA July 2026 grants', value: 34.2 },
        { label: 'EDA Nov 2026 grant', value: 33.2 },
      ],
    },
  },
  {
    id: 'rural-health',
    heading: "Rural Health: $216.8 Million Arrives as Medicaid Faces Its Biggest Test",
    paragraphs: [
      "North Carolina's rural-health story this month has two halves that point in opposite directions. The first half is a grant. On November 9, 2026, the Centers for Medicare & Medicaid Services awarded North Carolina $216,824,573 for year two of the Rural Health Transformation Program, up from $213.0 million in year one and bringing the state's total under the five-year, $50 billion program past $429.8 million. The North Carolina Department of Health and Human Services runs the program, which funds six initiatives — regional care hubs, prevention and chronic disease, behavioral health, workforce, value-based payment, and digital health — across 85 of the state's 100 counties that have rural areas. The award is part of $10 billion in second-year awards to all 50 states, and future years are scored in part on each state's progress. It is real money for real clinics, and it is the second-largest single rural-health grant the state has ever received in one year.",
      "The second half is a squeeze. Medicaid covers more than 3 million North Carolinians — one in four people in the state. North Carolina expanded Medicaid in December 2023, and nearly 740,000 people gained coverage through expansion, cutting the uninsured rate from 16.8 percent in 2010 to 8.6 percent in 2024. The program cost $36 billion in the state's fiscal 2025, of which the federal government paid about $25 billion. But starting January 1, 2027, the 2025 reconciliation law (H.R. 1) forces the state to check Medicaid eligibility twice as frequently and to condition expansion-group eligibility on work requirements for the first time in the program's history. Governor Josh Stein warned Congress in October that more than 250,000 North Carolinians could lose coverage, and that the state's rural hospitals alone are projected to lose $3.7 billion over the next ten years. The same letter is blunt about the arithmetic: the Rural Health Transformation Program over five years 'will not come close to making up the difference in lost Medicaid funding over 10 years.'",
      "The pressure is already visible. The state faced a $319 million Medicaid funding shortfall for its fiscal 2026, closed by legislation signed April 30, 2026, and the federal share of the program is shrinking as the state grows wealthier. At the same time, the Affordable Care Act marketplace is contracting in the state: North Carolina saw the largest drop in ACA enrollments of any state, with 214,000 fewer enrollments in 2026 than in 2025, and premiums rose nearly 30 percent. The $216.8 million rural-health award and the Medicaid squeeze are the same story told twice — Washington is sending targeted grants to rural North Carolina while the entitlement that actually pays for most rural care gets harder to keep. Category detail: /categories/medicaid-spending.",
    ],
    callout: {
      type: 'warning',
      text: 'Medicaid figures come from different vintages: enrollment is from Governor Stein\'s October 2026 letter to the congressional delegation; the $36B program cost and $25B federal share are the state\'s fiscal 2025 figures; the 250,000 coverage-loss estimate and $3.7B rural-hospital projection are the governor\'s estimates of H.R. 1\'s effects. Do not mix them into a single-year total.',
    },
  },
  {
    id: 'defense',
    heading: 'The Military State: Fort Bragg, Lejeune, and a Stalled $800 Million',
    paragraphs: [
      "North Carolina's defense story is about scale and geography. The state is home to an estimated 90,000 active-duty servicemembers, about 43,000 National Guard members and reservists, and roughly 615,000 veterans. Its six major military installations span the map: Fort Bragg outside Fayetteville — the Army's largest installation, home to the XVIII Airborne Corps and Army special operations forces, with Pope Army Airfield alongside it; Seymour Johnson Air Force Base in Goldsboro; Marine Corps Base Camp Lejeune and Marine Corps Air Station New River on the coast near Jacksonville; Marine Corps Air Station Cherry Point in Havelock; and two Coast Guard bases at Elizabeth City, plus the Military Ocean Terminal Sunny Point on the southern coast. Fort Bragg's name itself changed twice in two years — renamed Fort Liberty in 2023, then renamed back to Fort Bragg on March 7, 2025, this time in honor of Pfc. Roland L. Bragg, a World War II paratrooper who earned the Silver Star at the Battle of the Bulge.",
      "That footprint is in line for a building boom that has not yet cleared Congress. The House passed the fiscal 2027 National Defense Authorization Act, authorizing $1.15 trillion in national defense discretionary spending, with more than $800 million ticketed for North Carolina installations — but the package has stalled in the Senate. The North Carolina items include, at Camp Lejeune, an $80 million Marine Raider Battalion Operations Facility, a $72 million operational support facility, a $141.9 million combat water survival training facility, and a $77.5 million 10th Marines operational complex; at Cherry Point, an $89.1 million F-35 Sustainment Center, a $62.6 million maintenance facility and Marine air group headquarters, and a $47.6 million aircraft maintenance hangar; and at Fort Bragg, a $69 million aircraft maintenance hangar addition for the North Carolina National Guard and a Special Operations Forces ammunition supply point. The bill also authorizes pay raises of 7 percent for junior enlisted personnel, 6 percent for mid-level enlisted and junior officers, and 5 percent for senior officers. Nationally, defense totaled $965.2 billion in FY2026 finals. Full category data: /categories/defense-military.",
      "The base towns feel every budget decision in Washington directly. A barracks project authorized is a construction crew hired in Jacksonville; a bill stalled in the Senate is a hangar delayed in Fayetteville. And the bases are unusually exposed to the same fiscal pressure that opened this article: when the deficit runs at $404 billion in a single month and Congress faces a federal funding deadline on December 11, the construction and maintenance lines that keep these installations modern are among the first to be squeezed — and the last to be restored. North Carolina businesses executed $8.93 billion in federal prime contracts in fiscal 2022, including $5.51 billion in Defense Department prime contracts, according to the North Carolina Military Business Center — a reminder that the defense footprint is also a jobs program spread across 95 of the state's 100 counties.",
    ],
    chart: {
      title: 'House-Passed FY2027 NDAA Funds for North Carolina Bases ($M)',
      caption:
        'Authorizations in the House-passed FY2027 National Defense Authorization Act (216-212); the package has stalled in the Senate, so these are authorized, not yet appropriated. Source: The Center Square via The Wilmington Standard.',
      type: 'bar',
      unit: '$M',
      data: [
        { label: 'Camp Lejeune combat water survival training', value: 141.9 },
        { label: 'Cherry Point F-35 Sustainment Center', value: 89.1 },
        { label: 'Camp Lejeune Raider Battalion facility', value: 80.0 },
        { label: 'Camp Lejeune 10th Marines complex', value: 77.5 },
        { label: 'Camp Lejeune Raider support facility', value: 72.0 },
        { label: 'Fort Bragg hangar (NC National Guard)', value: 69.0 },
      ],
    },
  },
  {
    id: 'research',
    heading: 'The Research Triangle: $2.31 Billion of Federal Science',
    paragraphs: [
      "No other state packs three top-tier research universities into a single metro cluster the way North Carolina does. Duke University, the University of North Carolina at Chapel Hill, and North Carolina State University sit within a half-hour of each other in the Research Triangle, and together they spent $3.90 billion on research and development in fiscal 2024, of which the federal government financed $2.31 billion. Duke led on federal money: $1.04 billion of its $1.58 billion in total R&D spending came from Washington, including $580.2 million from the National Institutes of Health alone across 1,008 awards. UNC-Chapel Hill spent the most overall — $1.60 billion, ranking 11th nationally — with $949.9 million federally financed, 59.4 percent of its total. NC State spent $717.0 million, with $316.1 million from the federal government. Against a national science function of $39.9 billion in FY2026 finals, the Triangle's big three alone absorb nearly 6 percent of the country's federally financed university research.",
      "The Triangle is more than its universities. Research Triangle Park itself hosts major federal laboratories, including the Environmental Protection Agency's largest research campus and the National Institutes of Health's National Institute of Environmental Health Sciences — which is why Durham County, not the base counties, usually leads the state in federal prime contracts. RTI International, the nonprofit institute leading the western North Carolina life-sciences grant, is itself a Triangle institution, founded in 1958 as the park's first tenant. The federal footprint here is a loop: Washington funds the research, the research trains the workforce, and the workforce staffs the labs and companies that win the next round of federal contracts.",
      "That concentration is also a vulnerability. Federal research funding is discretionary spending — the part of the budget Congress votes on every year — and it is the part most exposed when deficits run at $2 trillion and interest payments ($1,051.8 billion in FY2026 finals) now rival defense itself. A research enterprise built on $2.31 billion a year of federal money is in the end a bet that Washington keeps choosing to fund science. Category detail: /categories/science-medical-research.",
    ],
    chart: {
      title: 'Federally Financed University R&D in North Carolina, FY2024 ($B)',
      caption:
        'NSF Higher Education R&D (HERD) Survey, FY2024 — federally financed R&D expenditures. Totals: Duke $1.58B, UNC-Chapel Hill $1.60B, NC State $717M; federal shares shown here.',
      type: 'bar',
      unit: '$B',
      data: [
        { label: 'Duke University', value: 1.04 },
        { label: 'UNC-Chapel Hill', value: 0.95 },
        { label: 'NC State University', value: 0.32 },
      ],
    },
  },
  {
    id: 'farms',
    heading: 'Farmland and Food Aid: A $203 Million Harvest, a Shrinking Safety Net',
    paragraphs: [
      "North Carolina is a farm state in a way the coastal states are not — hogs and poultry, tobacco, sweet potatoes, cotton, and soybeans — and this fall the federal farm safety net paid out at record levels there. The USDA's Farm Service Agency is delivering approximately $203 million in farm safety net and conservation program payments to North Carolina farmers, ranchers, and landowners for the 2025 crop year, part of a record $13.8 billion in Agriculture Risk Coverage (ARC) and Price Loss Coverage (PLC) payments nationwide, the largest annual payout since the programs were created in the 2014 Farm Bill. Nine North Carolina crops triggered a PLC payment for the 2025 crop year — including corn, soybeans, wheat, seed cotton, and grain sorghum — and for this crop year only, producers automatically receive the higher of the ARC or PLC rate regardless of their original election, under the Working Families Tax Cuts Act. The payment limit for the year is $160,000, and a 5.7 percent sequestration reduction applies to all ARC/PLC payments. North Carolina also gained about 573,817 new base acres under the law, which will count toward the programs starting with the 2026 crop year, and Conservation Reserve Program rental payments cover 15,189 acres in the state.",
      "The other end of the food system is moving in the opposite direction. North Carolina's SNAP participation stood at about 1.24 million people in July 2026 — 11.1 percent of the state's population — down 8.1 percent from 1.35 million a year earlier, across 624,112 households. Applications have not fallen — the state received about the same number in the first eight months of 2026 as in the same months of 2025 — but eligibility is tightening as expanded work requirements under H.R. 1 take effect. The state is also absorbing a larger share of the program's costs: from October 1, 2026, the federal government cut its share of SNAP administration costs from 50 percent to 25 percent, leaving North Carolina's counties to pay 75 percent, and from October 2027 states will have to pay a share of benefit costs based on their payment error rate. The farm safety net is paying out at record levels while the food safety net is shrinking — the same farm bill, two very different directions. More on SNAP: /blog/snap-food-assistance-spending-explained.",
      "North Carolina's agriculture function nationally is small — the agriculture and food assistance category totaled $52.6 billion in FY2026 finals, less than one percent of federal outlays — but in the counties where it lands, the $203 million matters. It is the difference between a farm family weathering a bad price year and not. And it arrives in the same year the state is being asked to pay more of the food-assistance bill itself.",
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
      "By the population-based model, North Carolina looks mid-pack per person: roughly $3,900 per resident, tied with Texas — below Ohio ($5,900), Illinois ($5,500), Pennsylvania ($5,100), Virginia ($5,100), New York ($4,700), and Florida ($4,300), and above Georgia and California ($3,500 each). The arithmetic is straightforward: 10.84 million people is a large denominator, and North Carolina concentrates an unusual amount of federal activity per head — the Army's largest installation, the Marine Corps' biggest East Coast base complex, three of the country's top research universities, a farm belt that just collected a record safety-net payout, and a disaster-recovery program still paying out two years after the storm — all inside one state. But the per-resident number is mostly a modeling artifact: the formula assigns every state a per-capita figure in a narrow band, and North Carolina drew the middle of it.",
      "But North Carolina carries the same asterisk as Ohio, Illinois, Pennsylvania, and Georgia, in a louder form: the model undercounts it. Social Security ($55.2 billion annualized) plus the federal share of Medicaid (about $25 billion) already exceeds the $42.26 billion modeled total by about $38 billion before a single dollar of defense, science, transit, or farm spending is counted. The real federal flow into North Carolina is larger than the model — how much larger, nobody can say precisely, because the Treasury does not publish a state-by-state cash register. That is the honest limit of this article and of every state spotlight in this series.",
      "For fair comparisons, benchmark North Carolina against other large states — Ohio, Illinois, Texas, California, Florida, New York — not small states where a single lab or base makes per-capita figures soar. And remember the category mix: North Carolina is the state where the federal government pays retirees, insures the poor, defends the country from its largest Army post and its biggest Marine base, funds three of the country's biggest research universities, is currently rebuilding an entire mountain region's roads while seeding it a new biotech industry, and is paying farmers record sums while food assistance shrinks — all at once, in a year when the national deficit hit $2 trillion and the first month of the new fiscal year opened with a $404 billion shortfall. The $42.26 billion is the footprint. The story is what it is made of. Compare states at /states/north-carolina and /states/georgia.",
    ],
  },
];

export const data: ArticleData = {
  slug: 'federal-spending-north-carolina',
  title: 'Federal Spending in North Carolina: Bases, Labs, and Helene',
  description:
    'Federal spending in North Carolina runs about $42.3B a year — Social Security for 2.39M people, $873M in Helene road repairs, and Fort Bragg, back to its old name.',
  keyword: 'federal spending in north carolina',
  category: 'State Spotlights',
  datePublished: '2026-11-22',
  dateModified: '2026-11-22',
  readingTime: estimateReadingTime(sections),
  quickTakeaways: [
    { label: '$42.26B', text: 'Modeled federal spending flowing into North Carolina on a FY2026 basis — about $3,900 per resident across 10.84 million North Carolinians, with prime contracts (55%) dominating the mix.' },
    { label: '~$55.2B', text: 'Social Security paid to 2.39 million North Carolinians on an annualized basis — more than the entire modeled state footprint, before Medicaid is counted.' },
    { label: '$873M Helene roads', text: 'FHWA emergency relief announced October 20, 2026 for Hurricane Helene road and bridge repairs, bringing the agency\'s total Helene investment in North Carolina to $2.9 billion.' },
    { label: '$33.2M biotech hub', text: 'EDA Disaster Supplemental grant announced November 19, 2026 for a western North Carolina life sciences cluster led by RTI International — 8 partners, 5 projects, a 34,000 sq ft wet lab in Caldwell County.' },
  ],
  sections,
  faqs: [
    {
      question: 'How much federal spending does North Carolina receive?',
      answer:
        'Our modeled estimate puts total federal spending flowing into North Carolina at roughly $42.26 billion on a fiscal 2026 basis — about 0.57% of the $7.396 trillion national total, or $3,900 per resident across 10.84 million North Carolinians. State-level figures are modeled estimates for comparison, not audited award records. The model understates North Carolina: Social Security ($55.2 billion annualized) plus the federal share of Medicaid (about $25 billion) already exceeds the modeled total on their own.',
    },
    {
      question: 'How many people in North Carolina get Social Security?',
      answer:
        'As of December 2025, 2,385,531 North Carolinians received Social Security benefits — 1,827,895 retired workers, 275,659 disabled workers, and the rest survivors, spouses, and children — and the Social Security Administration paid them $4.60 billion per month, about $55.2 billion annualized. That is 21.3% of the state\'s population, and 89.4% of North Carolinians aged 65 or older receive benefits.',
    },
    {
      question: 'How much federal Hurricane Helene recovery money has North Carolina received?',
      answer:
        'The Federal Highway Administration has invested $2.9 billion in North Carolina\'s Helene recovery, including $873 million announced October 20, 2026 to finish repairing roads and bridges — the storm left more than 9,000 damage sites and 1,400 road closures, and nearly 99% of state roads had reopened by late September 2026. Separately, the Economic Development Administration announced a $33.2 million grant on November 19, 2026 to build a life sciences hub in western North Carolina, plus $34.2 million in EDA grants in July 2026. The state itself has committed $3.1 billion to recovery.',
    },
    {
      question: 'What is North Carolina’s Rural Health Transformation Program award?',
      answer:
        'CMS awarded North Carolina $216,824,573 for year two of the Rural Health Transformation Program on November 9, 2026, up from $213.0 million in year one, bringing the state\'s total past $429.8 million. The program, run by the North Carolina Department of Health and Human Services, funds six initiatives across 85 of the state\'s 100 counties that have rural areas. It arrives as Medicaid — covering more than 3 million North Carolinians — faces work requirements and eligibility checks under H.R. 1 from January 1, 2027, with more than 250,000 people estimated at risk of losing coverage.',
    },
    {
      question: 'What military bases are in North Carolina?',
      answer:
        'North Carolina hosts Fort Bragg (the Army\'s largest installation, outside Fayetteville, with Pope Army Airfield), Seymour Johnson Air Force Base, Marine Corps Base Camp Lejeune, Marine Corps Air Station New River, Marine Corps Air Station Cherry Point, and Coast Guard bases at Elizabeth City, plus the Military Ocean Terminal Sunny Point. About 90,000 active-duty servicemembers, 43,000 Guard members and reservists, and 615,000 veterans are connected to the state. Fort Bragg was renamed Fort Liberty in 2023 and renamed back to Fort Bragg on March 7, 2025, now honoring Pfc. Roland L. Bragg.',
    },
    {
      question: 'How much federal research funding do North Carolina universities get?',
      answer:
        'In fiscal 2024, the federal government financed about $2.31 billion of research at North Carolina\'s big three universities: Duke University ($1.04 billion), the University of North Carolina at Chapel Hill ($949.9 million), and North Carolina State University ($316.1 million). Their combined research spending was $3.90 billion. Research Triangle Park also hosts major federal labs, including the EPA\'s largest research campus and the NIH\'s National Institute of Environmental Health Sciences.',
    },
  ],
  sources: [
    {
      name: 'U.S. Economic Development Administration — U.S. Department of Commerce Intends to Invest $33.2 Million in Disaster Supplemental Funding to Support the Healthcare and Medical Industries in North Carolina (Nov 19, 2026)',
      url: 'https://www.eda.gov/news/press-release/2026/11/19/us-department-commerce-intends-invest-33.2-million-disaster',
    },
    {
      name: 'Federal Highway Administration — Trump’s Transportation Secretary Sean P. Duffy Announces $873 Million in Emergency Rescue Funds to Finish Repairing Road & Bridge Damage in Western North Carolina From Hurricane Helene (Oct 20, 2026)',
      url: 'https://highways.dot.gov/newsroom/trumps-transportation-secretary-sean-p-duffy-announces-873-million-emergency-rescue-funds',
    },
    {
      name: 'Centers for Medicare & Medicaid Services — Trump Administration Announces $10 Billion in Second Year of Rural Health Transformation Awards to All 50 States (Nov 9, 2026)',
      url: 'http://www.cms.gov/newsroom/press-releases/trump-administration-announces-10-billion-second-year-rural-health-transformation-awards-all-50',
    },
    {
      name: 'Social Security Administration — OASDI Beneficiaries by State and County, 2025: North Carolina (December 2025)',
      url: 'https://www.ssa.gov/policy/docs/statcomps/oasdi_sc/2025/nc.pdf',
    },
    {
      name: 'Governor Josh Stein — Letter to the North Carolina Congressional Delegation on H.R. 1 Medicaid impacts (Oct 13, 2026)',
      url: 'https://governor.nc.gov/october-13-2026-letter-governor-stein-north-carolina-congressional-delegation',
    },
    {
      name: 'National Science Foundation — Higher Education Research and Development: Fiscal Year 2024 (NSF 26-304), Tables 14 and 16',
      url: 'https://ncsesdata.nsf.gov/profiles/site?method=report&tin=U3369001&id=h1',
    },
    {
      name: 'USDA Farm Service Agency — USDA Boosts North Carolina Agricultural Economy Through $203 Million in Safety Net and Conservation Program Payments (Oct 20, 2026)',
      url: 'https://www.fsa.usda.gov/news-events/news/10-20-2026/usda-boosts-north-carolina-agricultural-economy-203-million-safety-net',
    },
    {
      name: 'USDA Food and Nutrition Service — SNAP Number of Persons Participating (data as of Oct 9, 2026)',
      url: 'https://fna-bwbufwdzbabpezgc.z01.azurefd.us/sites/default/files/resource-files/snap-persons-10.pdf',
    },
    {
      name: 'U.S. Army — Fort Liberty becomes Fort Bragg, renamed for Battle of Bulge hero (Mar 7, 2025)',
      url: 'https://www.army.mil/article/283622/fort_liberty_becomes_fort_bragg_renamed_for_battle_of_bulge_hero',
    },
    {
      name: 'Healthcare Financial Management Association — Medicaid budget growth, enrollment decline (2026)',
      url: 'https://www.hfma.org/fast-finance/medicaid-budget-growth-enrollment-decline/',
    },
    {
      name: 'Congressional Budget Office — Monthly Budget Review: Summary for Fiscal Year 2026 (Nov 9, 2026)',
      url: 'https://www.cbo.gov/publication/61986',
    },
  ],
  relatedSlugs: ['where-does-us-federal-budget-go', 'federal-deficit-2026-how-big', 'federal-spending-georgia'],
};
