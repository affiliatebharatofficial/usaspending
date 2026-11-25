import type { ArticleData } from '../types';
import { estimateReadingTime } from '../types';

const sections: ArticleData['sections'] = [
  {
    id: 'the-big-picture',
    heading: "Michigan's $43.16 Billion Federal Footprint",
    paragraphs: [
      "On October 27, 2026, General Motors announced it will invest more than $2 billion in the Lansing region over the next several years, including preparing its Lansing Delta Township Assembly plant for future hybrid-electric vehicle production. The plant currently builds the Buick Enclave, Chevrolet Traverse, and GMC Acadia — three of GM's best-selling three-row SUVs — and the announcement is the clearest signal yet that the auto industry's electric-vehicle pivot is bending back toward hybrids. That is the news hook for this article, and it matters for a federal-spending story for a specific reason: GM and the U.S. Department of Energy are restructuring a previously awarded $500 million Domestic Manufacturing Conversion Grant, granted in 2024 and never released, so the money goes to Lansing Delta Township for hybrid production instead. The $2 billion is GM's money, not Washington's — but the federal grant sitting underneath it is. Michigan is the state where the federal government, the auto industry, and the Great Lakes all meet, and this article follows the money through all three.",
      "Our modeled figures put total federal spending flowing into Michigan at about $43.16 billion on a fiscal 2026 basis — roughly 0.58 percent of the $7.396 trillion national total, spread across 10.04 million Michiganders at about $4,300 per resident. The mix is contract-heavy, at $23.74 billion in prime contracts (55 percent), $15.11 billion in grants and assistance (35 percent), and $4.32 billion in other federal awards (10 percent). That profile reflects what Michigan is for the federal government: an auto state whose factories draw federal manufacturing grants, a defense state with the Army's ground-vehicle hub and a fighter base being rebuilt for a new mission, a research state with the country's fourth-largest university research enterprise, a farm state, and the state that owns the most economically important 1,200 feet of waterway in America — the Soo Locks. See the state breakdown at /states/michigan and the full national picture at /spending-breakdown.",
      "An important honesty note before we go further: state-level figures are modeled estimates for comparison, not audited award records. They show the order of magnitude and the composition of the federal footprint; they are not a cash register. And Michigan exposes the model's limits immediately, in the same way Ohio, Illinois, Pennsylvania, Georgia, and North Carolina did. Social Security payments to Michiganders alone run about $56.9 billion a year on an annualized basis, and the federal share of the state's Medicaid program is roughly another $21.6 billion — together about $78.5 billion, more than $35 billion above the entire $43.16 billion modeled total. The population-based model understates Michigan, because entitlement dollars concentrate here beyond what headcount alone predicts. Treat the $43.16 billion as a floor and a comparison tool, not a ceiling. Where a figure comes from the Treasury's Monthly Treasury Statement (MTS), it is labeled FY2026 final — October 1, 2025 through September 30, 2026. One distinction to keep straight throughout this article: GM's $2 billion-plus is a company investment, and the $1.25 billion inside it belongs to a different plant — Lansing Grand River Assembly — not to the Delta Township hybrid project. The two plants, the two sums, and the federal grant are three separate things.",
    ],
    callout: {
      type: 'info',
      text: 'All FY2026 figures are finals from the September 2026 Monthly Treasury Statement (published October 16, 2026): $7.396 trillion in outlays, $5.403 trillion in receipts, a $1.992 trillion deficit. The CBO summary released November 9, 2026 confirms the same totals. The October 2026 deficit — the first month of FY2027 — was $404 billion by the Treasury\'s own statement, released November 12, a record for the month.',
    },
    chart: {
      title: 'How Federal Money Reaches Michigan, FY2026 Basis ($B)',
      caption:
        'Modeled estimates from the site\'s Michigan state page (usaspending.us/states/michigan), FY2026 basis. Prime contracts dominate the mix — the auto plants, the defense installations, and the research universities doing work in the state.',
      type: 'bar',
      unit: '$B',
      data: [
        { label: 'Prime contracts', value: 23.74 },
        { label: 'Grants & assistance', value: 15.11 },
        { label: 'Other federal awards', value: 4.32 },
      ],
    },
  },
  {
    id: 'retirees',
    heading: '2.38 Million Checks: The Retirement Engine',
    paragraphs: [
      "The single largest federal flow into Michigan is also the quietest: retirement checks. As of December 2025, 2,381,255 Michiganders received Social Security benefits, according to the Social Security Administration — 1,786,475 retired workers, 280,455 disabled workers, 122,832 widow(er)s and parents, 52,935 spouses, and 134,942 children. The agency paid them a combined $4.74 billion per month, or about $56.9 billion on an annualized basis. That is 23.5 percent of everyone who lives in the state — nearly one in four Michiganders — and 91.0 percent of the state's population aged 65 or older. More than 1.89 million of the state's beneficiaries are aged 65 or older. Nationally, Social Security is the largest federal outlay by far — $1,667.1 billion in FY2026 finals — and Michigan absorbs about 3.4 percent of it. Category detail: /categories/social-security-spending.",
      "The scale reflects Michigan's age profile and its working past. The retired-worker checks reflect a lifetime of covered earnings on the auto assembly lines of Detroit, Flint, and Lansing, in the parts plants scattered across the state, in the furniture factories of Grand Rapids, and in the hospitals and universities of Ann Arbor and East Lansing. The 2.8 percent cost-of-living adjustment for 2026 added about $56 a month to the average retired worker's check nationally, and the standard Medicare Part B premium rose to $202.90 — a reminder that the retirement check and the health premium move together. On top of the retirement program, 247,605 Michiganders received federally administered Supplemental Security Income payments in December 2025, totaling $187.7 million for the month — the safety net underneath the safety net.",
      "That ordinariness is the point. Michigan is above the national average on Social Security — 23.5 percent of residents receive benefits, against about 20.7 percent nationally — which is exactly why the modeled total still undershoots: add Medicaid's roughly $21.6 billion federal share and the two biggest programs alone exceed the model by about $35 billion. The retirement engine is not a quirk of Michigan's federal story; it is the foundation, and everything else — the auto plants, the bases, the labs, the farms, the locks — sits on top of it.",
    ],
    chart: {
      title: 'Largest Federal Flows Into Michigan, FY2026 ($B)',
      caption:
        'Social Security annualized from SSA December 2025 monthly benefits; Medicaid federal share from the state\'s fiscal 2026-27 Medical Services and Behavioral Health budget (federal $21.6B of $31.1B gross); Rural Health Transformation Year 2 award from CMS, November 9, 2026; farm payments from USDA FSA, October 2026 announcement for the 2025 crop year.',
      type: 'bar',
      unit: '$B',
      data: [
        { label: 'Social Security (annualized)', value: 56.9 },
        { label: 'Medicaid federal share (state FY2026-27 budget)', value: 21.6 },
        { label: 'Rural Health Transformation, Year 2', value: 0.17 },
        { label: 'Farm safety net & conservation', value: 0.18 },
      ],
    },
  },
  {
    id: 'autos',
    heading: "The Auto State: GM's $2 Billion Bet on Hybrids",
    paragraphs: [
      "General Motors' October 27 announcement is the biggest Michigan business story of the fall, and it is worth reading precisely, because the numbers have been mangled in much of the coverage. GM said it plans to invest more than $2 billion in the Lansing region over the next several years. That total includes a previously announced $1.25 billion to prepare Lansing Grand River Assembly for future vehicle production — a separate plant, a separate project, already announced. The new part is Lansing Delta Township Assembly, which GM intends to prepare for future hybrid-electric vehicle production. GM has not confirmed which nameplates will be built there or when production will start, saying details will come closer to launch. What is confirmed is the direction: after years of all-electric messaging, GM is spending real money to build hybrids in Michigan.",
      "The federal piece is the grant. GM was awarded a $500 million Domestic Manufacturing Conversion Grant in July 2024 to prepare a Lansing plant for electric-vehicle production. Those funds were never released. GM and the Department of Energy are now restructuring the grant so the money goes to Lansing Delta Township for future hybrid production instead. The restructure is still ongoing — the money has not moved yet, and no new federal dollars have been announced. The distinction matters: the $2 billion is GM's capital spending, the $1.25 billion is part of that total for a different plant, and the $500 million is a federal grant from 2024 being redirected, not a new award. Reporting around the announcement suggests hybrid versions of the three SUVs Delta Township already builds — the Traverse, Enclave, and Acadia — with production roughly three years out, but GM itself has confirmed none of that.",
      "The Lansing investment sits inside a much larger federal-auto relationship. Michigan is where the government buys, funds, and regulates the vehicles it also helps build: the Army's Ground Vehicle Systems Center in Warren develops the military's next generation of vehicles (see the defense section below), and the state's four research universities do federally funded work on batteries, autonomy, and materials. The GM announcement is a private bet that hybrid demand will outlast the current EV slowdown — but it is a bet Washington is underwriting with a restructured grant, and its success will show up first in Lansing hiring, then in the supplier towns across the state. If the hybrids sell, the $2 billion becomes the anchor of Michigan's next auto decade; if they do not, it is a reminder that even the biggest private investment in the state still leans on a federal grant to pencil out.",
      "The workforce side of that transition got its own federal check two weeks after the GM announcement. On November 10, 2026, Michigan secured a $6.6 million U.S. Department of Labor Rapid Reskill National Dislocated Worker Grant for the Michigan Rapid Reskill Initiative, which connects workers who have lost their jobs or face layoffs with employer-driven training, industry-recognized credentials, and work-based learning — aiming to place each participant in a job or a Registered Apprenticeship within six months. The training targets advanced manufacturing, construction, and energy, the same sectors the auto transition is reshaping, and services run through the state's Michigan Works! agencies in partnership with the Michigan Workforce Development Institute. The payoff for the apprenticeship path is real: Michigan workers who completed a Registered Apprenticeship in 2024 and were still employed a year later earned a median annual income of $89,260. Michigan's grant was one of 20 projects in 17 states sharing $95.5 million announced by the Labor Department on October 19 — a small grant, but one aimed squarely at the workers the GM announcement is supposed to employ.",
    ],
  },
  {
    id: 'rural-health',
    heading: 'Rural Health: $170.6 Million Arrives, and a $9.1 Million Grant Opens',
    paragraphs: [
      "Michigan's rural-health story this month has two new checks, both from the same federal program. On November 9, 2026, the Centers for Medicare & Medicaid Services awarded Michigan $170,613,270 for year two of the Rural Health Transformation Program, down slightly from $173.1 million in year one, bringing the state's total under the five-year, $50 billion program to about $343.7 million. The award is part of $10 billion in second-year awards to all 50 states, and future years are scored in part on each state's progress. Michigan's program funds four initiatives — partnerships, workforce, technology, and community-based care — plus a 5 percent share of each year's funds set aside for the state's tribes.",
      "The second check is smaller, newer, and still open. On November 18, 2026, the Michigan High-Speed Internet Office, working with the Michigan Department of Health and Human Services, opened applications for the Rural Health Access and Connectivity Grant Program — about $9 million to help rural health providers upgrade digital systems, data exchange, and connectivity. The money comes from a $9,104,425 federal award from CMS, part of Michigan's Rural Health Transformation Program funding. Applications close December 10, 2026 at 3 p.m. Eastern — still open as this article is published — with awards expected to range from $200,000 to $1 million each for projects running February 1 through September 30, 2027. Every Michigan county qualifies except eight: Jackson, Kalamazoo, Kent, Macomb, Monroe, Muskegon, Ottawa, and St. Clair. The money cannot be used for new construction or major renovations, so it cannot lay fiber — it pays for the systems and connections that ride on top of it.",
      "Both grants arrive as Medicaid — the program that actually pays for most rural care — faces its biggest change in a decade. About 2.5 million Michigan residents receive Medicaid coverage, and about 625,000 of them are enrolled in the Healthy Michigan Plan, the state's Medicaid expansion for adults. Starting January 1, 2027, the 2025 reconciliation law (H.R. 1) requires Healthy Michigan Plan members aged 19 to 64 to meet new work requirements or qualify for an exemption to keep coverage — earning at least $580 or completing at least 80 hours of approved activities in a month — and most members will move from annual renewals to renewals every six months. The Michigan Department of Health and Human Services launched a screening tool, MI WEST, in October to help enrollees navigate the new rules. The state's fiscal 2026-27 budget puts Medical Services and Behavioral Health at $31.1 billion gross, of which $21.6 billion — 70 percent — is federal revenue, almost entirely Medicaid matching funds. The $170.6 million rural-health award and the Medicaid squeeze are the same story told twice: Washington is sending targeted grants to rural Michigan while the entitlement that pays for most rural care gets harder to keep. Category detail: /categories/medicaid-spending.",
    ],
    callout: {
      type: 'warning',
      text: 'Two figures circulate for the connectivity grant: the program page cites a $9,104,425 federal award from CMS, while the request for proposals lists $6,742,391 available for awards. The RFP governs what applicants can actually receive; the difference had not been explained by the state as of publication.',
    },
  },
  {
    id: 'defense',
    heading: 'The Defense State: Selfridge Gets New Jets, Grayling Gets a New Mission',
    paragraphs: [
      "Michigan's defense story is about a base being rebuilt for a new mission. Selfridge Air National Guard Base in Macomb County — home to about 5,000 jobs and nearly 4,000 military families — is slated to receive 21 F-15EX Eagle II fighter jets to replace its aging A-10 Thunderbolts, plus a squadron of 12 KC-46A Pegasus refueling tankers to replace its KC-135s. The A-10s are planned to retire by the end of fiscal 2026-27, with the first F-15EX deliveries expected in fiscal 2028 and the tankers arriving from 2029. Congress has moved to fund the transition: the House approved $162 million for Selfridge in the military construction bill — $110 million to improve and extend the runway, $24 million for taxiway Bravo, and $28 million for taxiway Alpha — and the Senate Armed Services Committee's fiscal 2026 defense bill adds $14 million in military construction at Selfridge plus $4.4 million for a new joint training complex at Camp Grayling. The same Senate bill prohibits the Air Force from retiring A-10s in fiscal 2026 and provides $303 million to keep them operating. The base commander has put the total upgrade cost at around $1 billion over several years.",
      "The rest of Michigan's defense footprint is quieter but just as federal. Camp Grayling, in the northern Lower Peninsula, is the National All-Domain Warfighting Center and home of the annual Northern Strike exercise — the Defense Department's large-scale drone and multi-domain training event, which Michigan's delegation is pushing to fund permanently. In Warren, the Army's Ground Vehicle Systems Center develops the military's next generation of ground vehicles, and the Senate defense bill includes $7 million for next-generation autonomous vehicle work there plus $10 million for manufacturing research supporting Michigan-based work. The Detroit Arsenal in Warren remains the Army's hub for ground combat systems. And Michigan is home to more than 473,000 veterans, according to the Michigan Veterans Affairs Agency — a population the state serves through three veterans homes and a network of county counselors. Nationally, defense totaled $965.2 billion in FY2026 finals. Full category data: /categories/defense-military.",
      "The base towns feel every budget decision in Washington directly. A runway project approved is a construction crew hired in Macomb County; a bill stalled in the Senate is a hangar delayed in Harrison Township. And the installations are unusually exposed to the same fiscal pressure that opened this article: when the deficit runs at $404 billion in a single month and Congress faces a federal funding deadline on December 11, the construction and maintenance lines that keep these bases modern are among the first to be squeezed — and the last to be restored. Selfridge's $1 billion rebuild is a bet that the mission stays; the F-15EX jets arriving in 2028 are the proof.",
    ],
    chart: {
      title: 'House-Approved Selfridge Construction Funding, FY2026 ($M)',
      caption:
        'The $162 million for Selfridge in the House-passed Military Construction and Veterans Affairs appropriations bill (400-15). The funding still needs Senate passage and signature, and the state is expected to contribute as a partner. Source: Office of Rep. John James.',
      type: 'bar',
      unit: '$M',
      data: [
        { label: 'Runway improvements', value: 110 },
        { label: 'Taxiway Alpha', value: 28 },
        { label: 'Taxiway Bravo', value: 24 },
      ],
    },
  },
  {
    id: 'research',
    heading: 'The Labs: $3.46 Billion of University Research',
    paragraphs: [
      "No other state in the Midwest concentrates research spending the way Michigan does. The University of Michigan, Ann Arbor spent $2.11 billion on research and development in fiscal 2024 — fourth in the country — of which the federal government financed $1.17 billion, or 55.2 percent, the third-largest federal total of any university in America. Michigan State University spent $931.8 million, ranking 38th nationally, with $474.8 million federally financed. Wayne State University spent $291.7 million. Together, Michigan's four R1 public research universities — Michigan, Michigan State, Wayne State, and Michigan Technological University — generated $3.46 billion in academic research in fiscal 2024, according to the Research Universities for Michigan alliance. Against a national science function of $39.9 billion in FY2026 finals, Michigan's big three alone absorb a striking share of the country's federally financed university research.",
      "The research is not abstract. Michigan State hosts the Facility for Rare Isotope Beams, a Department of Energy user facility for nuclear physics, and in October 2026 received a $20 million National Science Foundation grant to build a facility testing diamond semiconductors for space electronics. The University of Michigan is home to the nation's top-ranked nuclear engineering graduate program. Between 2021 and 2025, the four research universities received more than $390 million in defense-funded research awards, and Michigan State runs a five-year mobility research initiative with the Army's Ground Vehicle Systems Center in Warren, launched in 2023, developing lightweight autonomous vehicles. An independent analysis found the four universities generated $35.8 billion in net new economic activity statewide in fiscal 2024 and supported more than 100,000 jobs.",
      "That concentration is also a vulnerability. Federal research funding is discretionary spending — the part of the budget Congress votes on every year — and it is the part most exposed when deficits run at $2 trillion and interest payments ($1,051.8 billion in FY2026 finals) now rival defense itself. A research enterprise built on more than $1.6 billion a year of federal money at just two universities is in the end a bet that Washington keeps choosing to fund science. Category detail: /categories/science-medical-research.",
    ],
    chart: {
      title: 'University R&D Spending in Michigan, FY2024 ($B)',
      caption:
        'NSF Higher Education R&D (HERD) Survey, FY2024 — total R&D expenditures, all sources. Federal shares: University of Michigan $1.17B (55.2%), Michigan State $474.8M. Wayne State total $291.7M.',
      type: 'bar',
      unit: '$B',
      data: [
        { label: 'University of Michigan, Ann Arbor', value: 2.11 },
        { label: 'Michigan State University', value: 0.93 },
        { label: 'Wayne State University', value: 0.29 },
      ],
    },
  },
  {
    id: 'farms',
    heading: 'Farmland and Food Aid: A $176 Million Harvest, a Shrinking Safety Net',
    paragraphs: [
      "Michigan is a farm state in a way the coastal states are not — corn and soybeans, dry beans, sugar beets, apples and cherries, dairy, and potatoes — and this fall the federal farm safety net paid out at record levels there. The USDA's Farm Service Agency is delivering approximately $176.3 million in farm safety net and conservation program payments to Michigan farmers, ranchers, and landowners for the 2025 crop year, part of a record $13.8 billion in Agriculture Risk Coverage (ARC) and Price Loss Coverage (PLC) payments nationwide, the largest annual payout since the programs were created in the 2014 Farm Bill. Eleven Michigan crops triggered a PLC payment for the 2025 crop year — including corn, soybeans, wheat, barley, oats, and canola — and for this crop year only, producers automatically receive the higher of the ARC or PLC rate regardless of their original election, under the Working Families Tax Cuts Act. The payment limit for the year is $160,000, and a 5.7 percent sequestration reduction applies to all ARC/PLC payments. Michigan also gained 1,032,296 new base acres under the law, which will count toward the programs starting with the 2026 crop year, and Conservation Reserve Program payments cover 107,830 acres in the state.",
      "The other end of the food system is moving in the opposite direction. Michigan had 699,084 SNAP households in July 2026 — down 13.9 percent from 811,802 a year earlier — and about 1.35 million people received benefits in May 2026, down 8.2 percent from the year before. Benefits in the state totaled $227.3 million in July 2026, averaging $325.20 per household. The drop follows the same law that boosted farm payments: expanded work requirements under H.R. 1 now apply to able-bodied adults aged 18 to 64 without dependents under 14, and state officials say some people are losing benefits because they do not understand the new rules or miss the paperwork. The state is also absorbing a larger share of the program's costs: from October 1, 2026, the federal government cut its share of SNAP administration costs from 50 percent to 25 percent, leaving Michigan to pay 75 percent — an estimated $95 million a year. The farm safety net is paying out at record levels while the food safety net is shrinking — the same farm bill, two very different directions. More on SNAP: /blog/snap-food-assistance-spending-explained.",
      "Michigan's agriculture function nationally is small — the agriculture and food assistance category totaled $52.6 billion in FY2026 finals, less than one percent of federal outlays — but in the counties where it lands, the $176.3 million matters. It is the difference between a farm family weathering a bad price year and not. And it arrives in the same year the state is being asked to pay more of the food-assistance bill itself.",
    ],
    callout: {
      type: 'info',
      text: 'Farm payment figures are gross ARC/PLC amounts before the 5.7% sequestration reduction required by statute. SNAP counts for June and July 2026 are labeled preliminary by USDA and subject to significant revision.',
    },
  },
  {
    id: 'lakes',
    heading: 'The Lakes: A Second Poe-Sized Lock, Half Built',
    paragraphs: [
      "The most economically important construction project in Michigan is not a factory or a base — it is a lock. The Soo Locks at Sault Ste. Marie let ships navigate the St. Marys River between Lake Superior and the lower Great Lakes, and a single lock, the Poe, carries nearly all the large freighters. A six-month unscheduled outage at the Soo would cost an estimated 11 million jobs and a $1.1 trillion hit to the economy, according to the Army Corps of Engineers figures cited by Senator Gary Peters — which is why Congress authorized a second Poe-sized lock, first in 1986 and again in 2022 at about $3.2 billion.",
      "The new lock is now half built. On September 29, 2026, the Army Corps of Engineers announced that Phase 3 — the lock chamber itself — had passed 50 percent complete, with $975 million of work finished through the end of August 2026 and 140,198 cubic yards of concrete placed out of roughly 400,000 the project will need. The Corps' latest certified cost estimate, from July 2025, is $2.619 billion — 13 percent below the $3.219 billion authorized — and the project remains on schedule for completion in summer 2030. Congress has already appropriated more than $2.2 billion, including $479 million from the bipartisan infrastructure law in January 2022 and $450 million secured in the fiscal 2025 Energy and Water bill. The new lock will mirror the Poe's dimensions — 1,200 feet long, 110 feet wide, 32 feet deep — and when it opens, the single point of failure that has haunted Great Lakes shipping for decades finally gets a backup.",
    ],
    chart: {
      title: 'New Lock at the Soo: Cost and Progress ($B)',
      caption:
        'Authorized cost from the Water Resources Development Act of 2022; certified cost estimate from the Army Corps of Engineers, July 2025; work completed through August 2026 (Phase 3 at 50%). Source: U.S. Army Corps of Engineers / Engineering News-Record.',
      type: 'bar',
      unit: '$B',
      data: [
        { label: 'Authorized cost (WRDA 2022)', value: 3.22 },
        { label: 'Certified cost estimate (July 2025)', value: 2.62 },
        { label: 'Work completed (Aug 2026)', value: 0.98 },
      ],
    },
  },
  {
    id: 'per-resident',
    heading: 'Big Dollars, Modest Per-Person Numbers — With an Asterisk',
    paragraphs: [
      "By the population-based model, Michigan looks upper-middle per person: roughly $4,300 per resident, tied with Florida — below Ohio ($5,900), Illinois ($5,500), Pennsylvania ($5,100), Virginia ($5,100), and New York ($4,700), and above Texas and North Carolina ($3,900 each) and Georgia and California ($3,500 each). The arithmetic is straightforward: 10.04 million people is a large denominator, and Michigan concentrates an unusual amount of federal activity per head — the country's fourth-largest university research enterprise, a fighter base being rebuilt for a new mission, the Army's ground-vehicle hub, a farm belt that just collected a record safety-net payout, and the largest civil-works project in Great Lakes history — all inside one state. But the per-resident number is mostly a modeling artifact: the formula assigns every state a per-capita figure in a narrow band, and Michigan drew the upper-middle of it.",
      "But Michigan carries the same asterisk as Ohio, Illinois, Pennsylvania, Georgia, and North Carolina, in a louder form: the model undercounts it. Social Security ($56.9 billion annualized) plus the federal share of Medicaid (about $21.6 billion) already exceeds the $43.16 billion modeled total by about $35 billion before a single dollar of defense, science, transit, or farm spending is counted. The real federal flow into Michigan is larger than the model — how much larger, nobody can say precisely, because the Treasury does not publish a state-by-state cash register. That is the honest limit of this article and of every state spotlight in this series.",
      "For fair comparisons, benchmark Michigan against other large states — Ohio, Illinois, Texas, California, Florida, New York — not small states where a single lab or base makes per-capita figures soar. And remember the category mix: Michigan is the state where the federal government pays retirees, insures the poor, funds the country's fourth-largest research university, is rebuilding a fighter base for the F-15EX while keeping the A-10s flying, is paying farmers record sums while food assistance shrinks, and is building a second lock at the Soo while GM bets $2 billion that hybrids are the future — all at once, in a year when the national deficit hit $2 trillion and the first month of the new fiscal year opened with a $404 billion shortfall. The $43.16 billion is the footprint. The story is what it is made of. Compare states at /states/michigan and /states/ohio.",
    ],
  },
];

export const data: ArticleData = {
  slug: 'federal-spending-michigan',
  title: 'Federal Spending in Michigan: Autos, Lakes, and Labs',
  description:
    'Federal spending in Michigan runs about $43.2B a year — Social Security for 2.38M people, GM\'s $2B+ hybrid bet in Lansing, and a second Poe-sized lock at the Soo.',
  keyword: 'federal spending in michigan',
  category: 'State Spotlights',
  datePublished: '2026-11-25',
  dateModified: '2026-11-25',
  readingTime: estimateReadingTime(sections),
  quickTakeaways: [
    { label: '$43.16B', text: 'Modeled federal spending flowing into Michigan on a FY2026 basis — about $4,300 per resident across 10.04 million Michiganders, with prime contracts (55%) dominating the mix.' },
    { label: '~$56.9B', text: 'Social Security paid to 2.38 million Michiganders on an annualized basis — more than the entire modeled state footprint, before Medicaid is counted.' },
    { label: '$2B+ GM bet', text: 'GM announced October 27, 2026 it will invest more than $2 billion in the Lansing region, readying Delta Township for future hybrid production — with a $500M federal DOE grant being restructured to support it.' },
    { label: '$170.6M rural health', text: 'CMS awarded Michigan $170,613,270 for year two of the Rural Health Transformation Program on November 9, 2026, and a $9.1M rural connectivity grant opened for applications November 18, closing December 10.' },
  ],
  sections,
  faqs: [
    {
      question: 'How much federal spending does Michigan receive?',
      answer:
        'Our modeled estimate puts total federal spending flowing into Michigan at roughly $43.16 billion on a fiscal 2026 basis — about 0.58% of the $7.396 trillion national total, or $4,300 per resident across 10.04 million Michiganders. State-level figures are modeled estimates for comparison, not audited award records. The model understates Michigan: Social Security ($56.9 billion annualized) plus the federal share of Medicaid (about $21.6 billion) already exceeds the modeled total on their own.',
    },
    {
      question: 'How many people in Michigan get Social Security?',
      answer:
        'As of December 2025, 2,381,255 Michiganders received Social Security benefits — 1,786,475 retired workers, 280,455 disabled workers, and the rest survivors, spouses, and children — and the Social Security Administration paid them $4.74 billion per month, about $56.9 billion annualized. That is 23.5% of the state\'s population, and 91.0% of Michiganders aged 65 or older receive benefits.',
    },
    {
      question: 'What is GM investing in Lansing, Michigan?',
      answer:
        'On October 27, 2026, GM announced it will invest more than $2 billion in the Lansing region over the next several years, including preparing Lansing Delta Township Assembly for future hybrid-electric vehicle production. The total includes a previously announced $1.25 billion for Lansing Grand River Assembly — a separate plant. GM has not confirmed which models will be built or when production starts. GM and the Department of Energy are restructuring a $500 million federal grant awarded in 2024, never released, so the money goes to Delta Township for hybrid production.',
    },
    {
      question: 'What is Michigan’s Rural Health Transformation Program award?',
      answer:
        'CMS awarded Michigan $170,613,270 for year two of the Rural Health Transformation Program on November 9, 2026, down from $173.1 million in year one, bringing the state\'s total past $343.7 million. Separately, Michigan opened applications on November 18, 2026 for a Rural Health Access and Connectivity Grant Program backed by a $9,104,425 federal award from CMS; applications close December 10, 2026, with awards of $200,000 to $1 million each. It arrives as Medicaid — covering about 2.5 million Michiganders — faces new work requirements under H.R. 1 from January 1, 2027.',
    },
    {
      question: 'What is happening at Selfridge Air National Guard Base?',
      answer:
        'Selfridge in Macomb County is slated to receive 21 F-15EX Eagle II fighter jets to replace its A-10 Thunderbolts and 12 KC-46A Pegasus tankers to replace its KC-135s, with the first jets expected in fiscal 2028. The House approved $162 million for the base — $110 million for the runway, $24 million for taxiway Bravo, $28 million for taxiway Alpha — and the Senate defense bill adds $14 million in military construction plus $4.4 million for a joint training complex at Camp Grayling. The base supports about 5,000 jobs and nearly 4,000 military families, and the total upgrade is expected to cost around $1 billion.',
    },
    {
      question: 'How much did Michigan farmers receive in federal payments?',
      answer:
        'The USDA Farm Service Agency is delivering approximately $176.3 million in farm safety net and conservation program payments to Michigan farmers, ranchers, and landowners for the 2025 crop year, announced October 19, 2026 — part of a record $13.8 billion nationwide. Eleven Michigan crops triggered a Price Loss Coverage payment, and Michigan gained 1,032,296 new base acres under the Working Families Tax Cuts Act. Figures are gross amounts before the 5.7% sequestration reduction.',
    },
  ],
  sources: [
    {
      name: 'General Motors — GM to invest in Lansing Delta Township’s future (Oct 27, 2026)',
      url: 'https://news.gm.com/home.detail.html/Pages/news/us/en/2026/oct/1027-gm-invest-lansing-delta-township.html',
    },
    {
      name: 'TechCrunch — GM is embracing hybrids now (Oct 27, 2026)',
      url: 'https://techcrunch.com/2026/10/27/gm-is-embracing-hybrids-now/',
    },
    {
      name: 'Centers for Medicare & Medicaid Services — Trump Administration Announces $10 Billion in Second Year of Rural Health Transformation Awards to All 50 States (Nov 9, 2026)',
      url: 'https://www.cms.gov/newsroom/press-releases/trump-administration-announces-10-billion-second-year-rural-health-transformation-awards-all-50',
    },
    {
      name: 'Telecompetitor — Michigan announces $9M in rural healthcare connectivity grants (Nov 20, 2026)',
      url: 'https://www.telecompetitor.com/michigan-announces-9m-in-rural-healthcare-connectivity-grants/',
    },
    {
      name: 'Michigan Department of Labor and Economic Opportunity — Michigan secures $6.6 million to help dislocated workers train for in-demand jobs (Nov 10, 2026)',
      url: 'https://www.michigan.gov/leo/news/2026/11/10/michigan-secures-over-six-million-dollars-to-help-dislocated-workers-train-for-in-demand-jobs',
    },
    {
      name: 'Social Security Administration — Congressional Statistics, 2025: Michigan (December 2025)',
      url: 'https://www.ssa.gov/policy/docs/factsheets/cong_stats/2025/mi.pdf',
    },
    {
      name: 'Michigan Department of Health and Human Services — MDHHS launches tool to help Healthy Michigan Plan beneficiaries navigate new federal work requirements (Oct 22, 2026)',
      url: 'https://www.michigan.gov/mdhhs/inside-mdhhs/newsroom/2026/10/22/hmp-tool',
    },
    {
      name: 'Michigan House Fiscal Agency — FY 2026-27 Budget Briefing: DHHS Medical Services and Behavioral Health (Sep 2026)',
      url: 'https://www.house.mi.gov/hfa/PDF/Briefings/HHS_Medicaid_BudgetBriefing_fy26-27.pdf',
    },
    {
      name: 'Office of Rep. John James — U.S. House approves Rep. John James request for $162 million for Selfridge (2026)',
      url: 'https://james.house.gov/news/documentsingle.aspx?DocumentID=1297',
    },
    {
      name: 'Senator Elissa Slotkin — Slotkin Secures 40+ Wins in FY26 Pentagon Budget (Jul 11, 2025)',
      url: 'https://www.slotkin.senate.gov/2025/07/11/slotkin-secures-40-wins-in-fy26-pentagon-budget-focusing-on-new-missions-new-tech-and-new-jobs-for-michigan/',
    },
    {
      name: 'National Science Foundation — Higher Education R&D Survey, FY2024, Table 14 (NSF 26-304)',
      url: 'https://ncses.nsf.gov/pubs/nsf26304/assets/data-tables/tables/nsf26304-tab014.pdf',
    },
    {
      name: 'USDA Farm Service Agency — USDA Boosts Michigan Agricultural Economy Through $176.3 Million in Safety Net and Conservation Program Payments (Oct 19, 2026)',
      url: 'https://www.fsa.usda.gov/print/pdf/node/14897',
    },
    {
      name: 'USDA Food and Nutrition Service — SNAP Number of Households Participating (data as of Oct 9, 2026)',
      url: 'https://fna-bwbufwdzbabpezgc.z01.azurefd.us/sites/default/files/resource-files/snap-households-10.pdf',
    },
    {
      name: 'U.S. Army Corps of Engineers — New Lock at the Soo Phase 3 reaches 50% complete milestone (Sep 29, 2026)',
      url: 'https://www.dvidshub.net/news/575917/new-lock-soo-phase-3-reaches-50-complete-milestone',
    },
    {
      name: 'Engineering News-Record — Soo Lock Expansion Cost Revised Down to $2.62B (Sep 2025)',
      url: 'https://www.enr.com/articles/61357-soo-lock-expansion-cost-revised-down-to-262b',
    },
    {
      name: 'Michigan Veterans Affairs Agency — MVAA hosts 7th annual Veterans Day Recognition Ceremony (Nov 12, 2026)',
      url: 'https://www.michigan.gov/mvaa/news/2026/11/18/mvaa-hosts-7th-annual-veterans-day-recognition-ceremony-at-capitol',
    },
    {
      name: 'Congressional Budget Office — Monthly Budget Review: Summary for Fiscal Year 2026 (Nov 9, 2026)',
      url: 'https://www.cbo.gov/publication/61986',
    },
  ],
  relatedSlugs: ['where-does-us-federal-budget-go', 'federal-deficit-2026-how-big', 'federal-spending-ohio'],
};
