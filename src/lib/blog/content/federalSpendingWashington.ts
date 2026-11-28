import type { ArticleData } from '../types';
import { estimateReadingTime } from '../types';

const sections: ArticleData['sections'] = [
  {
    id: 'the-big-picture',
    heading: "Washington's $42.97 Billion Federal Footprint",
    paragraphs: [
      "On November 24, 2026, the U.S. Air Force awarded Boeing a $2,819,046,560 contract modification for 15 additional KC-46A Pegasus tankers — production Lot 13, the final lot of the original 2011 tanker contract. The work will be done in Seattle, and the award takes the Air Force to its 188-aircraft ceiling under that contract. The $2.82 billion figure comes from the Pentagon's contract notice; Boeing's own announcement the same day gave no dollar value at all. That is the news hook for this article, and it is a fitting one for Washington: no state is more entangled with a single federal contract than Washington is with Boeing, and no federal contract illustrates the cost of Washington's defense economy better than the KC-46A — a program on which Boeing has now lost more than $7 billion under a fixed-price deal it signed fifteen years ago. This article follows the federal money through the tankers, the submarine base, the nuclear cleanup, the dams, and the retirement checks.",
      "Our modeled figures put total federal spending flowing into Washington at about $42.97 billion on a fiscal 2026 basis — roughly 0.58 percent of the $7.396 trillion national total, spread across 7.81 million Washingtonians at about $5,500 per resident. The mix is contract-heavy, at $23.63 billion in prime contracts (55 percent), $15.04 billion in grants and assistance (35 percent), and $4.30 billion in other federal awards (10 percent). That profile reflects what Washington is for the federal government: a defense-manufacturing state where Boeing builds the tankers, a naval state with the Pacific Fleet's ballistic-missile submarine force, a cleanup state with the most contaminated nuclear site in the country, a hydropower state where the federal government owns the dams and sells the electricity, and a research state with one of the largest federally funded universities in America. See the state breakdown at /states/washington and the full national picture at /spending-breakdown.",
      "An important honesty note before we go further: state-level figures are modeled estimates for comparison, not audited award records. They show the order of magnitude and the composition of the federal footprint; they are not a cash register. And Washington exposes the model's limits immediately, in the same way Ohio, Illinois, Pennsylvania, Georgia, North Carolina, and Michigan did. Social Security payments to Washingtonians alone run about $37.8 billion a year on an annualized basis, and the federal share of the state's Medicaid program is more than $13 billion a year — together about $51 billion, more than $8 billion above the entire $42.97 billion modeled total. The population-based model understates Washington, because entitlement dollars concentrate here beyond what headcount alone predicts. Treat the $42.97 billion as a floor and a comparison tool, not a ceiling. Where a figure comes from the Treasury's Monthly Treasury Statement (MTS), it is labeled FY2026 final — October 1, 2025 through September 30, 2026. One distinction to keep straight throughout this article: the $2.82 billion is the Pentagon's figure from its contract notice, not Boeing's — Boeing's release did not state a value — and the $188 million per aircraft is an average that includes maintenance support, subscriptions, and licenses, not a bare flyaway price.",
    ],
    callout: {
      type: 'info',
      text: 'All FY2026 figures are finals from the September 2026 Monthly Treasury Statement (published October 16, 2026): $7.396 trillion in outlays, $5.403 trillion in receipts, a $1.992 trillion deficit. The CBO summary released November 9, 2026 confirms the same totals. The October 2026 deficit — the first month of FY2027 — was $404 billion by the Treasury\'s own statement, released November 12, a record for the month.',
    },
    chart: {
      title: 'How Federal Money Reaches Washington, FY2026 Basis ($B)',
      caption:
        'Modeled estimates from the site\'s Washington state page (usaspending.us/states/washington), FY2026 basis. Prime contracts dominate the mix — Boeing, the naval bases, and the Hanford cleanup contractors doing work in the state.',
      type: 'bar',
      unit: '$B',
      data: [
        { label: 'Prime contracts', value: 23.63 },
        { label: 'Grants & assistance', value: 15.04 },
        { label: 'Other federal awards', value: 4.3 },
      ],
    },
  },
  {
    id: 'retirees',
    heading: '1.53 Million Checks: The Retirement Engine',
    paragraphs: [
      "The single largest federal flow into Washington is also the quietest: retirement checks. As of December 2025, 1,526,417 Washingtonians received Social Security benefits, according to the Social Security Administration — 1,216,514 retired workers, 132,137 disabled workers, 69,367 widow(er)s and parents, 41,142 spouses, and 67,257 children. The agency paid them a combined $3.15 billion per month, or about $37.8 billion on an annualized basis. That is 19.5 percent of everyone who lives in the state — nearly one in five Washingtonians. Nationally, Social Security is the largest federal outlay by far — $1,667.1 billion in FY2026 finals — and Washington absorbs about 2.3 percent of it. Category detail: /categories/social-security-spending.",
      "Washington's checks run larger than most states'. The average retired worker in Washington received $2,199 a month in December 2025 — the seventh-highest average in the country, against a national average of $2,071 — reflecting a lifetime of covered earnings in the state's high-wage economy: Boeing machinists and engineers, Microsoft and Amazon tech workers, longshore workers on the Puget Sound docks, and federal employees at the bases and labs. The 2.8 percent cost-of-living adjustment for 2026 added about $56 a month to the average retired worker's check nationally, and the standard Medicare Part B premium rose to $202.90 — a reminder that the retirement check and the health premium move together. On top of the retirement program, 134,335 Washingtonians received federally administered Supplemental Security Income payments in December 2025, totaling $105.7 million for the month — the safety net underneath the safety net.",
      "That ordinariness is the point. Washington is close to the national average on Social Security — 19.5 percent of residents receive benefits, against about 20.7 percent nationally — which is exactly why the modeled total still undershoots: add Medicaid's more than $13 billion federal share and the two biggest programs alone exceed the model by about $8 billion. The retirement engine is not a quirk of Washington's federal story; it is the foundation, and everything else — the tankers, the submarines, the cleanup, the dams, the labs — sits on top of it.",
    ],
    chart: {
      title: 'Largest Federal Flows Into Washington, FY2026 ($B)',
      caption:
        'Social Security annualized from SSA December 2025 monthly benefits; Medicaid federal share from Washington state budget and Health Care Authority reporting (over $13B federal in 2023); Rural Health Transformation Year 2 award from CMS, November 9, 2026; farm payments from USDA FSA, October 16, 2026.',
      type: 'bar',
      unit: '$B',
      data: [
        { label: 'Social Security (annualized)', value: 37.8 },
        { label: 'Medicaid federal share (2023)', value: 13.0 },
        { label: 'Rural Health Transformation, Year 2', value: 0.18 },
        { label: 'Farm safety net & conservation', value: 0.26 },
      ],
    },
  },
  {
    id: 'tanker',
    heading: "The Tanker: Boeing's $2.82 Billion Final Lot — and $7 Billion in Losses",
    paragraphs: [
      "The November 24 award is the last chapter of a fifteen-year contract. Lot 13 covers 15 KC-46A Pegasus tankers, built on the 767 airframe in Everett, with work expected to be complete by June 30, 2030. The full $2.82 billion comes from fiscal 2027 aircraft procurement funds and was obligated at award. With this batch, Boeing says 203 KC-46As are now on contract or in service worldwide — 116 delivered to the U.S. Air Force, six to Japan, and two to Israel — and the Air Force's own program of record under the 2011 deal is complete at 188 aircraft. The previous lot, Lot 12, was awarded on November 25, 2025 for approximately $2.47 billion. The per-aircraft average has climbed steeply: about $158.67 million under Lot 11 in November 2024, $164.66 million under Lot 12, and $187.94 million under Lot 13 — an 18.5 percent increase in two years, though the figure bundles maintenance support, subscriptions, and licenses alongside the airframes.",
      "The reason the price keeps rising is the reason the program is famous: Boeing signed a firm-fixed-price contract in 2011, so every cost overrun lands on Boeing, not the taxpayer. The company has now recorded more than $7 billion in losses on the tanker, including a $565 million charge disclosed in January 2026 that Boeing blamed on higher supply-chain costs and extra production support at its Everett plant. The total cost overrun on the fixed-price deal has been put at $9.55 billion. The technical troubles center on the refueling boom and the Remote Vision System — the cameras the boom operator uses to steer the boom into a receiving jet, replacing the rear-facing window on the older KC-135. In some lighting the original system does not give operators a clear view of the receptacle, and the fleet has lost two booms in flight within a year. The fix, Remote Vision System 2.0, adds better cameras, color video, and improved depth perception; it was originally due in 2023, slipped to October 2025, then to 2026, and the Air Force now projects fielding in summer 2027.",
      "That history is why the next order is not yet an order. The Air Force plans to buy up to 75 more KC-46As through a program called Tanker Production Extension, which would take its fleet to 263 aircraft and fully replace the KC-135s built in the 1950s and early 1960s. But the service has said it will not sign that contract until Boeing clears the tanker's most serious flaws — the Category 1 deficiencies in the boom and the vision system. Air Force Vice Chief of Staff Gen. John Lamontagne told a Senate Armed Services subcommittee in March 2026 that the service is 'not going to get a new contract for another 75 KC-46s until we work through some of those deficiencies,' and said a decision was likely about two years away. A June 2026 Government Accountability Office report found tanker availability and mission-capable rates have stayed below Air Force standards. For Washington, the stakes are direct: the KC-46 line in Everett is the state's largest single federal contract stream — Boeing took $9.18 billion in contract obligations for work performed in Washington in fiscal 2026, 47 percent of all federal contract obligations in the state — and whether the 75-aircraft extension lands in Everett depends on fixes made in Everett.",
    ],
    chart: {
      title: 'KC-46A Average Cost Per Aircraft by Production Lot ($M)',
      caption:
        'Lot 11 (November 2024), Lot 12 (November 2025), Lot 13 (November 24, 2026). Averages include maintenance support, subscriptions, and licenses bundled in each contract modification, not bare airframe prices. Sources: DoD contract announcements; Army Recognition.',
      type: 'bar',
      unit: '$M',
      data: [
        { label: 'Lot 11 (Nov 2024)', value: 158.67 },
        { label: 'Lot 12 (Nov 2025)', value: 164.66 },
        { label: 'Lot 13 (Nov 2026)', value: 187.94 },
      ],
    },
  },
  {
    id: 'defense',
    heading: 'The Defense State: Submarines, Strykers, and Growlers',
    paragraphs: [
      "Washington hosts 10 publicly tracked military installations and roughly 59,000 active-duty personnel — sixth in the nation — plus 494,383 veterans as of September 2025, according to the Washington Department of Veterans Affairs. Joint Base Lewis-McChord, south of Tacoma, is the largest joint base west of the Rockies at nearly 87,000 acres, home to I Corps, the 7th Infantry Division, the 1st Special Forces Group, and the 62nd Airlift Wing; it supports about 56,000 jobs and $7 billion in economic activity in Pierce County alone, and is the most-requested separation duty station in the U.S. Army. Across Puget Sound, Naval Base Kitsap combines the ballistic-missile submarine force at Bangor, the surface fleet at Bremerton, and the Puget Sound Naval Shipyard — the only dry dock on the West Coast capable of handling a Nimitz-class aircraft carrier. Naval Air Station Whidbey Island is the master jet base for West Coast electronic attack, home to the EA-18G Growler squadrons; Naval Station Everett and Fairchild Air Force Base near Spokane, home to the 92nd Air Refueling Wing's KC-135s, complete the map. Nationally, defense totaled $965.2 billion in FY2026 finals. Full category data: /categories/defense-military.",
      "The contract dollars follow the bases. Federal contract obligations for work performed in Washington totaled $19.53 billion in fiscal 2026, and the Department of Defense accounted for $12.77 billion of it — 65.4 percent. Boeing led all recipients at $9.18 billion, followed by the Department of Energy's contractors. The prior year tells the same story at a smaller scale: $8.9 billion in fiscal 2025 Defense Department prime awards to Washington, with Boeing and Leidos leading. Washington taxpayers, for their part, contributed an estimated $31.3 billion to the fiscal 2026 defense budget under a tax-share allocation — 3.0 percent of the national total against 2.3 percent of the population — ranking the state 10th nationally. The state is a net contributor to the defense budget and a major recipient of defense contracts at the same time, and both facts are true because the money flows through different channels: Washingtonians pay federal income tax, and the Pentagon buys airplanes built in Everett.",
      "The base towns feel every budget decision in Washington directly. A runway project approved is a construction crew hired in Pierce County; a shipyard availability delayed is a workforce idled in Bremerton. And the installations are unusually exposed to the same fiscal pressure that opened this article: when the deficit runs at $404 billion in a single month and Congress faces a federal funding deadline on December 11, the construction and maintenance lines that keep these bases modern are among the first to be squeezed — and the last to be restored. The KC-46A extension decision, likely two years away, is the largest single question hanging over the state's defense economy.",
    ],
    chart: {
      title: 'Federal Contract Obligations in Washington by Agency, FY2026 ($B)',
      caption:
        'Contract obligations for work performed in Washington, fiscal year 2026 (October 1, 2025 to September 30, 2026), from USAspending.gov data. Defense dominates; Energy is second on the strength of Hanford. Source: uxcontract.com state profile.',
      type: 'bar',
      unit: '$B',
      data: [
        { label: 'Department of Defense', value: 12.77 },
        { label: 'Department of Energy', value: 4.52 },
        { label: 'Homeland Security', value: 0.53 },
        { label: 'Agriculture', value: 0.52 },
        { label: 'Veterans Affairs', value: 0.38 },
      ],
    },
  },
  {
    id: 'hanford',
    heading: 'Hanford: A Record $3.2 Billion to Clean Up the Most Contaminated Site in America',
    paragraphs: [
      "The second-largest federal contract stream in Washington has nothing to do with airplanes. It is the cleanup of the Hanford Site, the 586-square-mile former plutonium production complex on the Columbia River — one of the world's most contaminated and complex nuclear cleanup projects. In January 2026, Congress approved a record budget for Hanford cleanup: more than $3.2 billion for fiscal year 2026, an increase of more than $200 million over each of the prior two years. The money funds the Office of River Protection's vitrification plant, which turns liquid tank waste into glass, and Richland Operations, which manages the site's 177 underground waste tanks. Bechtel National took $1.19 billion in Washington contract obligations in fiscal 2026, and Hanford Tank Waste Operations & Closure took $979.8 million — both Hanford contractors.",
      "The record is still less than half of what the cleanup legally requires. The Washington Department of Ecology estimates a compliant budget — the amount needed to meet cleanup milestones under the legally binding Tri-Party Agreement — of $6.15 billion for fiscal year 2026, and $6.76 billion for 2027. Ecology's analysis argues the federal government ultimately saves taxpayers tens of billions by funding the cleanup at the compliant level, because missed milestones mean more waste sitting in aging tanks for longer. The gap between $3.2 billion and $6.15 billion is the central fact of Hanford's federal story: Congress keeps setting records that still fall short, and the shortfall compounds every year the tanks age.",
      "The same Department of Energy footprint extends to the Pacific Northwest National Laboratory in Richland, operated by Battelle Memorial Institute, which took $1.63 billion in Washington contract obligations in fiscal 2026 — the state's second-largest single recipient after Boeing. PNNL is one of the Energy Department's ten national laboratories, doing work in energy storage, grid modernization, nuclear nonproliferation, and environmental science. Together, Hanford and PNNL make the Tri-Cities the most federally dependent metro area in the state: a region whose economy runs on cleanup dollars and laboratory dollars, both appropriated one year at a time in a Congress that is running a $2 trillion deficit.",
    ],
  },
  {
    id: 'rural-health',
    heading: 'Rural Health: $177.1 Million Arrives as Medicaid Faces Its Biggest Change in a Decade',
    paragraphs: [
      "Washington's rural-health story this month has a new check and a gathering squeeze. On November 9, 2026, the Centers for Medicare & Medicaid Services awarded Washington $177,060,212 for year two of the Rural Health Transformation Program, down $4.2 million — 2.3 percent — from $181,257,515 in year one, bringing the state's total under the five-year, $50 billion program to about $358.3 million. The award is part of $10 billion in second-year awards to all 50 states, and future years are scored in part on each state's progress. Washington's program funds six initiatives across rural hospitals, community care, Tribal health, technology, workforce, and behavioral health.",
      "The award arrives as Medicaid — the program that actually pays for most rural care — faces its biggest change in a decade. Nearly 2 million Washington residents are enrolled in Apple Health, the state's Medicaid program, including more than 850,000 children, and Washington receives over $13 billion a year in federal Medicaid funding, with the state adding about $8 billion of its own — the largest single category in the state budget. The 2025 reconciliation law (H.R. 1) requires most adult enrollees to meet new work requirements — at least 80 hours a month of work, study, or volunteering — and restricts coverage for many immigrants, with the deepest changes rolling out through 2026 and 2027. The Health Care Authority predicts more than 620,000 residents will be affected, and one analysis estimates 430,000 Washingtonians could lose insurance by 2034 as a result of H.R. 1, the lapse of enhanced marketplace subsidies, and related policies. The state's 2026 supplemental budget proposes more than $155 million in state funds to protect safety-net programs against the federal changes, including preserving benefits for about 30,000 people losing federal SNAP eligibility and retaining services for 500 of the highest-acuity noncitizens losing Medicaid and long-term-care access. The $177.1 million rural-health award and the Medicaid squeeze are the same story told twice: Washington is sending targeted grants to rural Washington while the entitlement that pays for most rural care gets harder to keep. Category detail: /categories/medicaid-spending.",
      "The food side of the safety net is moving in the same direction. About 904,000 Washingtonians received food aid through SNAP, a third of them children, according to the state Department of Social and Health Services in July 2026 — and 29,594 fewer people received SNAP between July 2025 and February 2026, as expanded work requirements under H.R. 1 took effect. From October 1, 2026, the federal government cut its share of SNAP administration costs from 50 percent to 25 percent, leaving Washington to pay 75 percent, and from October 2027 states will start paying a share of benefit costs themselves, up to 15 percent depending on payment error rates. More on SNAP: /blog/snap-food-assistance-spending-explained.",
    ],
    callout: {
      type: 'warning',
      text: 'Medicaid figures mix vintages: the federal share of over $13 billion a year is a 2023 figure from state reporting, while enrollment of nearly 2 million is current as of early 2026. The state\'s 2025-27 biennial medical-assistance budget is about $31 billion, state plus federal combined. Treat the $13 billion as the most recent published federal-only figure, not a fiscal 2026 final.',
    },
  },
  {
    id: 'research',
    heading: 'The Labs: A $1.69 Billion Research Engine, Now Squeezed',
    paragraphs: [
      "No university in the Northwest concentrates research spending the way the University of Washington does. UW Seattle spent $1.69 billion on research and development in fiscal 2024 — eighth in the country — of which the federal government financed $1.14 billion, or 67 percent. In fiscal 2025 the total rebounded to $1.8 billion, with $1.2 billion federal, and UW held its eighth-place national rank while ranking fourth nationally in federal funding. The federal money is concentrated in medicine and the life sciences — UW Medicine, the Institute for Health Metrics and Evaluation, oceanography, and atmospheric sciences — and it makes the university the state's largest single recipient of federal research dollars by a wide margin. Against a national science function of $39.9 billion in FY2026 finals, UW alone absorbs a striking share of the country's federally financed university research.",
      "That concentration is also a vulnerability, and the squeeze is already visible in the university's own reporting. In March 2026, UW's provost reported that federal directs were down 3 percent year over year, full-time positions supported by federal grants were down 12 percent, new applications were down 21 percent, and initial award amounts were down 53 percent. The university has fallen from second to third place in overall research funding in fiscal 2024, and from second to fifth in federal funding. The National Institutes of Health issued 84 funding notices this year against 787 last year, and delays in the release of funds by the Office of Management and Budget have slowed award setup — $48 million in research spending was delayed from fiscal 2024 to fiscal 2025 by administrative friction alone. Seven federal grants have been reactivated since January, worth about $26.8 million, many in substance-abuse research — a small offset against a much larger slowdown.",
      "Federal research funding is discretionary spending — the part of the budget Congress votes on every year — and it is the part most exposed when deficits run at $2 trillion and net interest payments ($1,051.8 billion in FY2026 finals) now rival defense itself. A research enterprise built on more than $1.1 billion a year of federal money at a single university is in the end a bet that Washington keeps choosing to fund science. Category detail: /categories/science-medical-research.",
    ],
  },
  {
    id: 'dams-farms-transit',
    heading: 'The Dams, the Farms, and the Trains: Federal Washington Beyond Boeing',
    paragraphs: [
      "The oldest federal presence in Washington is the one most residents never see as federal at all: the dams. Grand Coulee Dam on the Columbia River, completed in 1941, is the largest power-generating complex in the United States — 6,809 megawatts of installed capacity, more than 20 billion kilowatt-hours a year, enough to power roughly 2 million homes, and about a quarter of all generation in the Federal Columbia River Power System. It is one of 31 federal dams whose power the Bonneville Power Administration markets at cost to more than 140 Northwest utilities, over 15,000 circuit miles of high-voltage lines, providing nearly a third of all the power generated in the Northwest. About 60 percent of Washington's electricity comes from hydroelectric dams — more than any other state — and the state produces about a quarter of all hydroelectric power in the United States. The federal dams are also the reason Washington's electricity is among the cheapest in the country: BPA sells wholesale federal hydropower at cost to public utilities, which pass the savings to ratepayers. The dams are a New Deal inheritance that still pays a dividend every month on every electric bill in the state — and a reminder that the federal footprint is not only contracts and checks, but infrastructure that has been generating returns for eighty years.",
      "East of the Cascades, the federal money arrives as farm payments. On October 16, 2026, the USDA's Farm Service Agency announced approximately $255 million in farm safety net and conservation program payments to Washington farmers, ranchers, and landowners for the 2025 crop year — part of a record $13.8 billion in Agriculture Risk Coverage and Price Loss Coverage payments nationwide, the largest annual payout since the programs were created in the 2014 Farm Bill. Eleven Washington crops triggered a Price Loss Coverage payment — canola, chickpeas, corn, dry peas, flaxseed, lentils, safflower, sorghum, soybeans, and wheat — and for this crop year only, producers automatically receive the higher of the ARC or PLC rate regardless of their original election, under the Working Families Tax Cuts Act. Conservation Reserve Program payments cover 737,753 acres in the state. The payment limit for the year is $160,000, and a 5.7 percent sequestration reduction applies to all ARC/PLC payments. Washington's agriculture function nationally is small — the agriculture and food assistance category totaled $52.6 billion in FY2026 finals, less than one percent of federal outlays — but in the wheat counties of the Palouse and the Columbia Basin, the $255 million matters. It is the difference between a farm family weathering a bad price year and not.",
      "And in the Puget Sound corridor, the federal money arrives as trains. Sound Transit's Lynnwood Link Extension — 8.5 miles of light rail from Northgate to Lynnwood, opened in 2024 — cost $3.1 billion, of which up to $1.17 billion came from a Full Funding Grant Agreement executed by the Federal Transit Administration in December 2018, plus a $658 million low-interest TIFIA loan from the Department of Transportation. The extension carries the 1 Line across a county boundary for the first time, into Snohomish County, and the full 2 Line and the Federal Way extension that followed it have more than doubled the size of the region's light rail system in a few years. Senator Patty Murray, the Senate Appropriations chair, personally defended the Capital Investment Grants funding for the project in negotiations. The transit story is the mirror image of the tanker story: the same federal government that buys $2.82 billion of airplanes from Boeing also underwrites a third of a light rail line — and both depend on Congress choosing to keep paying.",
    ],
    callout: {
      type: 'info',
      text: 'Farm payment figures are gross ARC/PLC amounts before the 5.7% sequestration reduction required by statute. The $255 million is the USDA announcement for the 2025 crop year, not a fiscal-year total.',
    },
  },
  {
    id: 'per-resident',
    heading: 'Big Dollars, High Per-Person Numbers — With an Asterisk',
    paragraphs: [
      "By the population-based model, Washington looks high per person: roughly $5,500 per resident, tied with Illinois — below Ohio ($5,900) and above Pennsylvania ($5,100), Virginia ($5,100), New York ($4,700), Michigan and Florida ($4,300 each), Texas and North Carolina ($3,900 each), and Georgia and California ($3,500 each). The arithmetic is straightforward: 7.81 million people is a mid-sized denominator, and Washington concentrates an unusual amount of federal activity per head — the country's largest hydroelectric dam, the Pacific Fleet's submarine force, the largest joint base west of the Rockies, the most contaminated nuclear cleanup in America, and one of the largest federally funded research universities — all inside one state. But the per-resident number is mostly a modeling artifact: the formula assigns every state a per-capita figure in a narrow band, and Washington drew near the top of it.",
      "But Washington carries the same asterisk as Ohio, Illinois, Pennsylvania, Georgia, North Carolina, and Michigan: the model undercounts it. Social Security ($37.8 billion annualized) plus the federal share of Medicaid (more than $13 billion) already exceeds the $42.97 billion modeled total by about $8 billion before a single dollar of defense, science, transit, or farm spending is counted. The real federal flow into Washington is larger than the model — how much larger, nobody can say precisely, because the Treasury does not publish a state-by-state cash register. That is the honest limit of this article and of every state spotlight in this series.",
      "For fair comparisons, benchmark Washington against other large states — Ohio, Illinois, Texas, California, Florida, New York — not small states where a single lab or base makes per-capita figures soar. And remember the category mix: Washington is the state where the federal government pays retirees, insures the poor, buys tankers from Boeing while the company absorbs $7 billion in losses on them, berths the submarine force that carries the nuclear deterrent, is cleaning up the most contaminated site in the country at less than half the legally required pace, funds one of the largest research universities in America, and sells electricity from dams it built eighty years ago — all at once, in a year when the national deficit hit $2 trillion and the first month of the new fiscal year opened with a $404 billion shortfall. The $42.97 billion is the footprint. The story is what it is made of. Compare states at /states/washington and /states/oregon.",
    ],
  },
];

export const data: ArticleData = {
  slug: 'federal-spending-washington',
  title: 'Federal Spending in Washington: Tankers, Submarines, and Dams',
  description:
    'Federal spending in Washington runs about $43B a year — a $2.82B KC-46A tanker order, Social Security for 1.53M people, a record $3.2B Hanford cleanup, and the dams that power the Northwest.',
  keyword: 'federal spending in washington',
  category: 'State Spotlights',
  datePublished: '2026-11-28',
  dateModified: '2026-11-28',
  readingTime: estimateReadingTime(sections),
  quickTakeaways: [
    { label: '$42.97B', text: 'Modeled federal spending flowing into Washington on a FY2026 basis — about $5,500 per resident across 7.81 million Washingtonians, with prime contracts (55%) dominating the mix.' },
    { label: '$2.82B tanker order', text: 'On November 24, 2026 the Air Force awarded Boeing $2.82 billion for 15 KC-46A tankers — Lot 13, the final lot of the 2011 contract, taking the fleet to its 188-aircraft ceiling. Boeing has lost $7B+ on the fixed-price deal, and the next 75 tankers are on hold until boom and vision-system defects are fixed.' },
    { label: '~$37.8B', text: 'Social Security paid to 1.53 million Washingtonians on an annualized basis — more than the entire modeled state footprint, before Medicaid is counted. Retired workers average $2,199 a month, 7th-highest in the country.' },
    { label: '$3.2B+ Hanford', text: 'Congress approved a record $3.2 billion-plus for Hanford cleanup in FY2026 — still less than half the $6.15 billion the state says is needed to meet legally binding cleanup milestones.' },
  ],
  sections,
  faqs: [
    {
      question: 'How much federal spending does Washington receive?',
      answer:
        'Our modeled estimate puts total federal spending flowing into Washington at roughly $42.97 billion on a fiscal 2026 basis — about 0.58% of the $7.396 trillion national total, or $5,500 per resident across 7.81 million Washingtonians. State-level figures are modeled estimates for comparison, not audited award records. The model understates Washington: Social Security ($37.8 billion annualized) plus the federal share of Medicaid (more than $13 billion) already exceeds the modeled total on their own.',
    },
    {
      question: 'How many people in Washington get Social Security?',
      answer:
        'As of December 2025, 1,526,417 Washingtonians received Social Security benefits — 1,216,514 retired workers, 132,137 disabled workers, and the rest survivors, spouses, and children — and the Social Security Administration paid them $3.15 billion per month, about $37.8 billion annualized. That is 19.5% of the state\'s population. Retired workers in Washington average $2,199 a month, the seventh-highest average in the country.',
    },
    {
      question: 'What is the $2.82 billion KC-46A contract?',
      answer:
        'On November 24, 2026, the U.S. Air Force awarded Boeing a $2,819,046,560 contract modification for 15 KC-46A Pegasus tankers — production Lot 13, the final lot of the original 2011 contract, built in Everett, Washington, with completion expected by June 30, 2030. The $2.82 billion figure comes from the Pentagon\'s contract notice; Boeing\'s own announcement gave no dollar value. The award takes the Air Force to its 188-aircraft ceiling under the 2011 deal. Boeing has lost more than $7 billion on the fixed-price program, and the Air Force will not order up to 75 more tankers until Boeing fixes the refueling boom and Remote Vision System defects.',
    },
    {
      question: 'How much is the Hanford cleanup costing?',
      answer:
        'Congress approved more than $3.2 billion for Hanford cleanup in fiscal year 2026 — a record, up more than $200 million from each of the prior two years. But the Washington Department of Ecology estimates a compliant budget of $6.15 billion is needed to meet cleanup milestones under the legally binding Tri-Party Agreement, and $6.76 billion for 2027. The record appropriation is still less than half of what the cleanup legally requires.',
    },
    {
      question: 'How big is Washington’s Medicaid program?',
      answer:
        'Nearly 2 million Washington residents are enrolled in Apple Health, the state\'s Medicaid program, including more than 850,000 children. Washington receives over $13 billion a year in federal Medicaid funding, with the state adding about $8 billion of its own. The 2025 reconciliation law (H.R. 1) adds work requirements and restricts coverage for many immigrants; the Health Care Authority predicts more than 620,000 residents will be affected, and one analysis estimates 430,000 Washingtonians could lose insurance by 2034.',
    },
    {
      question: 'What is Grand Coulee Dam’s role in federal spending?',
      answer:
        'Grand Coulee Dam on the Columbia River is the largest power-generating complex in the United States — 6,809 megawatts, more than 20 billion kilowatt-hours a year, about a quarter of all generation in the Federal Columbia River Power System. It is one of 31 federal dams whose power the Bonneville Power Administration markets at cost to more than 140 Northwest utilities. About 60% of Washington\'s electricity comes from hydroelectric dams, and the state produces about a quarter of all U.S. hydroelectric power.',
    },
  ],
  sources: [
    {
      name: 'Military Times — US Air Force buys final KC-46 lot under Boeing’s original tanker deal (Nov 25, 2026)',
      url: 'https://www.militarytimes.com/news/your-military/2026/11/25/us-air-force-buys-final-kc-46-lot-under-boeings-original-tanker-deal/',
    },
    {
      name: 'Boeing — Boeing to Build 15 Additional U.S. Air Force KC-46A Tankers (Nov 24, 2026)',
      url: 'https://boeing.mediaroom.com/news-releases-statements?item=131737&asPDF=1',
    },
    {
      name: 'The Aviationist — USAF Contracts Final KC-46 Lot of Original Production Deal (Nov 26, 2026)',
      url: 'https://theaviationist.com/2026/11/26/usaf-contracts-final-kc-46-lot-of-original-production-deal/',
    },
    {
      name: 'Army Recognition — US Air Force orders 15 Boeing KC-46A Pegasus tankers for $2.82 billion (Nov 2026)',
      url: 'https://www.armyrecognition.com/news/aerospace-news/2026/us-air-force-orders-15-boeing-kc-46a-pegasus-tankers-for-2-82-billion-to-replace-ageing-kc-135s',
    },
    {
      name: 'Social Security Administration — Congressional Statistics, 2025: Washington (December 2025)',
      url: 'http://www.ssa.gov/policy/docs/factsheets/cong_stats/2025/wa.pdf',
    },
    {
      name: 'Washington State Department of Ecology — Hanford cleanup gets record $3.2 billion budget (Jan 15, 2026)',
      url: 'https://ecology.wa.gov/about-us/who-we-are/news/2026/jan-15-hanford-cleanup-gets-record-3-2-billion-budget',
    },
    {
      name: 'uxcontract — Federal Contracts in Washington (FY2026), from USAspending.gov',
      url: 'https://uxcontract.com/states/washington',
    },
    {
      name: 'U.S. Department of Health and Human Services — Trump Administration Announces $10 Billion in Second Year of Rural Health Transformation Awards (Nov 9, 2026)',
      url: 'https://www.hhs.gov/press-room/trump-administration-awards-10-billion-rural-health-transformation-program-year-two.html',
    },
    {
      name: 'USDA Farm Service Agency — USDA Boosts Washington Agricultural Economy Through $255 Million in Safety Net and Conservation Program Payments (Oct 16, 2026)',
      url: 'https://www.fsa.usda.gov/news-events/news/10-16-2026/usda-boosts-washington-agricultural-economy-255-million-safety-net',
    },
    {
      name: 'Bonneville Power Administration — Generators like new again at nation’s largest hydroelectric producer (Grand Coulee Dam)',
      url: 'https://www.bpa.gov/about/newsroom/news-articles/2022/20220302-generators-like-new-again-at-nations-largest-hydroelectric-producer',
    },
    {
      name: 'NSF HERD Survey — University of Washington, Seattle research expenditures FY2025',
      url: 'https://streamlyne.com/herd-visualizer/institutions/university-of-washington-seattle/',
    },
    {
      name: 'Federal Transit Administration — $1.17 Billion Full Funding Grant Agreement for Lynnwood Link (Dec 20, 2018)',
      url: 'https://www.transit.dot.gov/about/news/us-department-transportation-announces-1-billion-grant-agreement-658-million-loan',
    },
    {
      name: 'Washington Department of Veterans Affairs — Veterans by County, 2025',
      url: 'https://www.dva.wa.gov/resources/county-map',
    },
    {
      name: 'Congressional Budget Office — Monthly Budget Review: Summary for Fiscal Year 2026 (Nov 9, 2026)',
      url: 'https://www.cbo.gov/publication/61986',
    },
  ],
  relatedSlugs: ['where-does-us-federal-budget-go', 'federal-deficit-2026-how-big', 'federal-spending-michigan'],
};

export { data as federalSpendingWashington };
