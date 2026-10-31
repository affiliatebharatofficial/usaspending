import type { ArticleData } from '../types';
import { estimateReadingTime } from '../types';

const sections: ArticleData['sections'] = [
  {
    id: 'the-big-picture',
    heading: "Alaska's $9,304 Per Resident: No. 1 in America",
    paragraphs: [
      "Alaska is the smallest state by population and the largest by land, and that combination produces the most extreme federal-spending ratio in the country. In fiscal 2024, the federal government obligated $9,304 in grant money for every Alaskan resident — more than any other state and about 2.7 times the national average of $3,437, according to an analysis of USAspending.gov award data. The total was $6.9 billion in grants alone, before counting defense contracts, military payroll, Social Security checks, or Medicare payments.",
      "That ranking is not a quirk of one dataset. A broader measure that also counts federal and military payroll, FEMA obligations, and direct payments puts Alaska first as well, at $18,123 per resident — the highest of any state — and names it the state most dependent on federal funds, followed by Maryland and Virginia. The exact dollar figure moves a lot depending on what you count, which is why this article reports three different per-resident numbers and labels each one. What does not move is the ranking: on grants alone and on the broadest measure, Alaska comes first.",
      "Our own site model tells the same story in miniature. It puts modeled federal spending flowing into Alaska at roughly $4.03 billion for fiscal 2026 — about $5,500 per resident across 733,406 Alaskans, or 0.05% of the $7.396 trillion national total. That modeled figure is a comparison tool, not a cash register: it allocates spending by a formula and understates states with unusual footprints, as it does for Florida. The real award data is higher, because Alaska's footprint is genuinely unusual. Explore the state breakdown at /states/alaska and the full national budget at /spending-breakdown.",
    ],
    callout: {
      type: 'info',
      text: 'Three per-resident figures appear in this article because they measure different things: $5,500 is our modeled comparison estimate, $9,304 is FY2024 federal grants only, and $18,123 is a broad measure including payroll and direct payments. Compare rankings within one measure, never across them.',
    },
  },
  {
    id: 'why-per-capita-soars',
    heading: 'Why the Denominator Does All the Work',
    paragraphs: [
      "Per-capita rankings reward small populations, and Alaska's is tiny: 733,406 people, fewer than the city of Seattle, spread across a state more than twice the size of Texas. Any fixed federal presence — a base, a hospital system, a highway program — divides by a denominator that barely exists. That is the whole trick, and it explains why the top of every per-capita ranking is dominated by small, remote, or heavily federal states rather than the big economies that receive the most dollars in total.",
      "The federal government is also Alaska's landlord on a scale no other state matches. Roughly 61% of Alaska's land — about 223.8 million acres, the largest federal holding in any state — is federally owned and managed, including national parks, wildlife refuges, national forests, military reservations, and the National Petroleum Reserve. Managing that estate, and serving communities scattered across it, costs money that has no equivalent in a compact state: air transport where there are no roads, fuel delivered by barge, clinics and schools in villages of a few hundred people.",
      "Distance is a budget line in Alaska in a way it is not anywhere else. A dollar of federal service delivered in Anchorage costs roughly what it costs anywhere; the same dollar delivered in a village off the road system can cost several times more once transport, housing for staff, and fuel are counted. Per-capita spending is therefore partly a measure of geography, not generosity: Alaska is expensive to govern, and the federal government is, for historical and constitutional reasons, the entity doing much of the governing.",
    ],
    chart: {
      title: 'Federal Grants Per Resident, FY2024 ($)',
      caption:
        'Granted AI analysis of USAspending.gov FY2024 grant obligations (block, formula, project grants and cooperative agreements; excludes contracts, loans and direct payments), divided by Census Vintage 2024 population estimates.',
      type: 'bar',
      unit: '$',
      data: [
        { label: 'Alaska', value: 9304 },
        { label: 'New Mexico', value: 5921 },
        { label: 'New York', value: 5632 },
        { label: 'West Virginia', value: 5328 },
        { label: 'Vermont', value: 5137 },
        { label: 'U.S. average', value: 3437 },
      ],
    },
  },
  {
    id: 'military-arctic',
    heading: 'The Arctic Arsenal: $4.5 Billion in Defense Spending',
    paragraphs: [
      "The single biggest reason Alaska's federal footprint is so large is that it is America's Arctic military platform. In fiscal 2024, Alaska received $4.5 billion in defense spending, including $2.2 billion in defense contracts, according to the Pentagon's Readiness and Environmental Protection Integration program — and that figure covers personnel salaries, contracts, and construction, not the full economic ripple. Nearly 28,500 military personnel were stationed in the state as of 2022, with their families, across nine military installations.",
      "The anchor is Joint Base Elmendorf-Richardson (JBER) in Anchorage, the state's largest military installation, joined in the Interior by Fort Wainwright near Fairbanks and Eielson Air Force Base near North Pole. Eielson has been transformed by the arrival of 44 F-35A Lightning II fighters and about 2,765 new service members, plus a growing KC-135 tanker squadron — a buildup that has made the Fairbanks area one of the few parts of Alaska gaining population while the rest of the state shrinks. The 2025 National Defense Authorization Act added $723.3 million in military construction for Alaska, mostly at JBER, including a $126 million Joint Integrated Test and Training Center, $120 million for family housing, and a $67 million National Guard readiness center.",
      "Then there is the mission no other state holds: homeland missile defense. Fort Greely, about 100 miles southeast of Fairbanks, is one of only two U.S. sites housing Ground-Based Interceptors designed to destroy incoming intercontinental ballistic missiles, and it sits near the great-circle route from North Korea to the continental United States. A Boeing-led team completed 20 new silos there in 2025, growing the site's silo count from 40 to 60 for the Ground-Based Midcourse Defense system. That is a national mission that happens to be located in Alaska — and its payroll, contracts, and construction all count in Alaska's per-capita totals. Category detail: /categories/defense-military.",
    ],
    chart: {
      title: 'FY2025 Defense Construction for Alaska, by Project ($M)',
      caption:
        '2025 National Defense Authorization Act military construction authorizations for Alaska, as reported from the bill. Projects listed are the largest named items; the $723.3M total includes additional smaller projects.',
      type: 'bar',
      unit: '$M',
      data: [
        { label: 'JBER training center', value: 126 },
        { label: 'JBER family housing', value: 120 },
        { label: 'Guard readiness center', value: 67 },
        { label: 'JBER fuels facility', value: 55 },
        { label: 'Fort Wainwright range', value: 23 },
        { label: 'JBER rescue simulator', value: 19 },
        { label: 'Eielson fuel facility', value: 14 },
      ],
    },
  },
  {
    id: 'native-communities',
    heading: '229 Tribes and a Health System Like No Other',
    paragraphs: [
      "The second pillar of Alaska's federal footprint is the federal trust responsibility to Alaska Native peoples. Alaska is home to 229 federally recognized Tribes — more than any other state — and its Native governance looks nothing like the reservation system in the lower 48 states. Under the Alaska Native Claims Settlement Act of 1971, Congress extinguished aboriginal land claims in exchange for about 44 million acres conveyed to newly created Native corporations and $962.5 million in compensation, creating 12 regional corporations and more than 200 village corporations. Only one traditional reservation, the Annette Island Reserve of the Metlakatla Indian Community, remains.",
      "Health care is where that trust responsibility becomes a budget line. The Indian Health Service, with a national budget of roughly $7 billion serving about 2.8 million American Indians and Alaska Natives across 574 federally recognized Tribes, funds clinical care, public health, and sanitation-facilities construction — water, sewage, and waste systems that many remote Alaska villages still lack. The President's fiscal 2026 budget proposed $8.1 billion for the Indian Health Service, prioritizing direct health services and staffing for new facilities. In Alaska, much of that care is delivered by Tribal health organizations rather than by the federal government directly, but the money is federal either way, and it concentrates in a state where Native communities are a far larger share of the population than anywhere else.",
      "Grants data captures part of this story and misses part of it. Alaska's competitive grant share — 48% of its FY2024 grant dollars arriving through project grants and cooperative agreements that organizations apply for — is roughly double the national average of 23%. That reflects a state where Tribal organizations, universities, and nonprofits compete for and win federal project funding at an unusual rate, on top of the formula grants (led by Medicaid) that flow to every state by statute. It is one more reason Alaska tops a grants ranking specifically: it is not just receiving formula money, it is winning competitive money too.",
    ],
    callout: {
      type: 'warning',
      text: 'Alaska Native corporations are for-profit companies created by the 1971 settlement, not tribal governments. The 229 federally recognized Tribes and the Native corporations are overlapping but distinct systems — do not conflate them when reading Alaska funding data.',
    },
  },
  {
    id: 'three-measures',
    heading: 'One Ranking, Three Very Different Numbers',
    paragraphs: [
      "Readers who compare per-capita figures across articles will notice something confusing: Alaska's per-resident federal spending is quoted as $5,500, $9,304, and $18,123 in different places, including this one. All three are defensible, and none of them is 'the' number, because each counts a different slice of federal activity. Our site model ($5,500) is a formula-based comparison estimate built for ranking states on a consistent basis. The grants figure ($9,304) counts only federal financial assistance awards in FY2024 — no contracts, no direct payments like Social Security, no salaries. The broad dependency figure ($18,123) counts nearly everything that reaches residents, governments, and workers, including payroll and FEMA obligations.",
      "What matters is that Alaska ranks first on the two independent external measures, and the gap to second place is large: on grants, Alaska's $9,304 is 57% above runner-up New Mexico's $5,921. That is not a rounding error or a one-year blip; it is the structural result of a huge federal land estate, a major military presence, and a large Native population served through federal programs, all divided by America's smallest state population. For context, the national FY2026 budget behind all of this totals $7.396 trillion in outlays — Social Security $1.667 trillion, Medicare $1.073 trillion, health programs including Medicaid $1.026 trillion, net interest $1.052 trillion, and defense $965.2 billion — against $5.403 trillion in receipts, a $1.992 trillion deficit. Alaska's share of that total is a rounding error; its share per person is the story.",
      "For fair comparisons, benchmark Alaska against other small, high-federal-footprint states — New Mexico, West Virginia, Vermont, Montana — not against Texas or Florida, where tens of millions of residents dilute even enormous totals (Florida ranks last on grants per resident at $1,894, Texas second-to-last at $1,990, despite receiving $44.3 billion and $62.3 billion respectively). And remember the caveat that applies to every state spotlight on this site: state-level figures are estimates for comparison, built from award locations and formulas, not an audited register of every dollar spent inside state lines. Compare states at /states/alaska, /states/texas, and /states/florida.",
    ],
    chart: {
      title: 'Alaska Per Resident Under Three Measures ($)',
      caption:
        'Three different scopes, not a trend: site modeled estimate (FY2026 comparison formula), FY2024 federal grants only (Granted AI / USAspending.gov), and a broad dependency measure including payroll, FEMA and direct payments (Pioneer Institute / USDataLabs).',
      type: 'bar',
      unit: '$',
      data: [
        { label: 'Site modeled estimate', value: 5500 },
        { label: 'FY2024 grants only', value: 9304 },
        { label: 'Broad measure', value: 18123 },
      ],
    },
  },
  {
    id: 'what-it-means',
    heading: "What Alaska's No. 1 Ranking Actually Means",
    paragraphs: [
      "It is tempting to read 'most federal money per person' as a verdict — either that Alaska is unusually dependent, or unusually favored. The evidence supports a less dramatic reading: Alaska is unusually federal. The federal government owns most of its land, stations a disproportionate share of the Arctic military there, and carries trust responsibilities to more Tribes than any other state, all while serving a population smaller than a mid-sized city. Any accounting that divides federal activity by residents will put Alaska first, because the numerator is built for a continent-sized strategic territory and the denominator is a small state.",
      "That also means Alaska is unusually exposed to federal decisions. A defense buildup, a missile-defense expansion, a change in Indian Health Service funding, or a shift in land policy moves Alaska's economy in ways that barely register in larger states. The same forces that make its per-capita numbers soar — remoteness, federal land, military strategy, Native programs — also make it sensitive to Washington in both directions. When the federal government spends more, Alaska feels it first per person; when it spends less, Alaska feels that first too.",
      "The honest bottom line: Alaska does receive more federal money per resident than any other state, on the best available grant data and on the broadest dependency measure. The exact figure depends on what you count, and anyone quoting a single number without saying what it includes is oversimplifying. But the ranking itself is robust — and it is driven less by any single program than by the fact that Alaska, uniquely, is a state where the federal government is landlord, employer, health provider, and military command all at once.",
    ],
  },
];

export const data: ArticleData = {
  slug: 'federal-spending-alaska',
  title: 'Federal Spending in Alaska: Highest Per Capita in US',
  description:
    'Federal spending in Alaska hits $9,304 per resident in grants alone — No. 1 among states. Why the small-population big state tops per-capita rankings.',
  keyword: 'federal spending in alaska',
  category: 'State Spotlights',
  datePublished: '2026-10-31',
  dateModified: '2026-10-31',
  readingTime: estimateReadingTime(sections),
  quickTakeaways: [
    { label: '$9,304', text: 'Federal grants per Alaskan resident in FY2024 — No. 1 of all 50 states, 2.7x the $3,437 national average, on $6.9B in grants alone.' },
    { label: '$18,123', text: 'Alaska per resident on the broadest measure (including payroll, FEMA and direct payments) — also No. 1, and the most federally dependent state.' },
    { label: '$4.5B defense', text: 'Defense spending in Alaska in FY2024, including $2.2B in contracts, across nine installations and nearly 28,500 personnel.' },
    { label: '229 Tribes', text: 'Federally recognized Tribes in Alaska — more than any other state — served through the Indian Health Service and the 1971 ANCSA settlement.' },
  ],
  sections,
  faqs: [
    {
      question: 'How much federal spending does Alaska receive per person?',
      answer:
        'It depends on what you count. Federal grants alone were $9,304 per resident in FY2024 ($6.9 billion total), the highest of any state and 2.7 times the $3,437 national average. A broader measure that also includes federal and military payroll, FEMA obligations, and direct payments puts Alaska at $18,123 per resident — again No. 1. Our site model, a formula-based comparison estimate, puts it at $5,500 per resident. Compare rankings within one measure, never across them.',
    },
    {
      question: 'Why is federal spending per capita so high in Alaska?',
      answer:
        'Three structural reasons, divided by a tiny population of 733,406 people. First, the federal government owns about 61% of Alaska — 223.8 million acres, the largest federal holding in any state. Second, Alaska hosts a major Arctic military presence: nine installations, nearly 28,500 personnel, and the Fort Greely missile-defense site. Third, Alaska has 229 federally recognized Tribes, more than any state, served through Indian Health Service and other trust-responsibility programs. Remoteness also raises the cost of delivering every service.',
    },
    {
      question: 'How much does the military spend in Alaska?',
      answer:
        'Alaska received $4.5 billion in defense spending in fiscal 2024, including $2.2 billion in defense contracts, according to the Pentagon REPI program. The 2025 National Defense Authorization Act added $723.3 million in military construction, mostly at Joint Base Elmendorf-Richardson, including a $126 million joint training center and $120 million for family housing. Fort Greely also gained 20 new missile-defense silos in 2025, growing its count from 40 to 60.',
    },
    {
      question: 'What is the Alaska Native Claims Settlement Act?',
      answer:
        'ANCSA, signed in 1971, settled Alaska Native land claims by extinguishing aboriginal title in exchange for about 44 million acres conveyed to newly created Native corporations and $962.5 million in compensation. It created 12 regional corporations and more than 200 village corporations — a corporate model unique in federal Indian policy, replacing the reservation system used elsewhere. Only one traditional reservation, the Annette Island Reserve, remains in Alaska.',
    },
    {
      question: 'Is Alaska a net recipient of federal money?',
      answer:
        'Yes, by a wide per-person margin. Alaska receives far more in federal spending than its residents and businesses pay in federal taxes, because its tax base is small while its federal footprint — military, federal land management, and Native programs — is large. That makes Alaska unusually sensitive to federal budget decisions in both directions: defense buildups and health funding increases reach Alaskans faster per person than anywhere else, and cuts do too.',
    },
  ],
  sources: [
    {
      name: 'Granted AI — Which States Win the Most Federal Grant Money Per Capita (FY2024)',
      url: 'https://grantedai.com/research/federal-grants-per-capita-by-state',
    },
    {
      name: 'Pioneer Institute / USDataLabs — Dependency Index: Alaska Most Dependent on Federal Funds',
      url: 'https://pioneerinstitute.org/inaugural-us-datalabs-ranking-finds-alaska-the-state-most-dependent-on-federal-funds-idaho-the-least/',
    },
    {
      name: 'DoD REPI Program — Alaska State Fact Sheet (FY2024 Defense Spending)',
      url: 'https://www.repi.mil/Portals/44/Alaska_StateFacts.pdf',
    },
    {
      name: 'Defense News — Boeing Grows Alaska-Based Homeland Missile Defense Silo Count by 20',
      url: 'https://www.defensenews.com/air-warfare/2025/03/04/boeing-grows-alaska-based-homeland-missile-defense-silo-count-by-20/',
    },
    {
      name: 'Construction Owners — National Defense Bill Allocates $723M for Alaska Military Projects',
      url: 'https://www.constructionowners.com/news/national-defense-bill-to-allocate-723m-for-alaska-military-projects',
    },
    {
      name: 'HHS Office of Inspector General — Indian Health and Human Services',
      url: 'https://oig.hhs.gov/reports/featured/ihs/',
    },
  ],
  relatedSlugs: ['federal-spending-texas', 'federal-spending-florida', 'where-does-us-federal-budget-go'],
};
