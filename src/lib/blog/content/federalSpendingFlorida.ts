import type { ArticleData } from '../types';
import { estimateReadingTime } from '../types';

const sections: ArticleData['sections'] = [
  {
    id: 'the-big-picture',
    heading: "Florida's $97 Billion Federal Footprint",
    paragraphs: [
      'Florida sits at the intersection of America\'s biggest federal spending stories. Our modeled figures put total federal spending flowing into the state at roughly $97 billion for fiscal 2026 — about 1.43% of the $6.81 trillion national total, spread across 22.6 million Floridians at roughly $4,300 per resident. The three engines driving that footprint are exactly what the state is famous for: more retirees drawing Social Security than nearly anywhere else, one of the densest concentrations of military installations in the country, and the busiest spaceport on Earth.',
      'Unlike Texas, where the story is bases and border operations, or California, where it is defense contracts and health programs, Florida\'s federal relationship is dominated by entitlements — money that arrives automatically, every month, in the form of retirement checks and health coverage for 5.4 million Social Security beneficiaries. Layer on $33.5 billion in defense spending, the Kennedy Space Center\'s Artemis campaign, and a disaster-assistance bill that spikes every hurricane season, and you get one of the most varied federal footprints of any state. Explore the state breakdown at /states/florida and the full national budget at /spending-breakdown.',
      'An important honesty note before we go further: state-level figures are modeled estimates for comparison, not audited award records. They show the order of magnitude and the composition of the federal footprint; they are not a cash register. Where a figure comes from the Treasury\'s Monthly Treasury Statement (MTS), it is labeled FY2026 FYTD — October 1, 2025 through August 31, 2026, the latest published actuals. Social Security flows, by contrast, are annualized from Social Security Administration data, because they arrive on a calendar-month cycle rather than a fiscal one.',
    ],
    callout: {
      type: 'info',
      text: 'All FY2026 figures cover October 1, 2025 through August 31, 2026 (335 days) — the latest Monthly Treasury Statement published. Full-year totals will be higher.',
    },
  },
  {
    id: 'retirees',
    heading: '5.4 Million Checks: The Retiree Engine',
    paragraphs: [
      'No state concentrates federal entitlement dollars the way Florida does. As of October 2026, 5,403,638 Floridians received Social Security benefits, according to Social Security Administration data reported by USA Today\'s Florida network — one of the largest beneficiary populations of any state. The December 2025 breakdown tells the story in detail: 4,191,491 retired workers, 462,756 disabled workers, 260,003 widow(er)s and parents, 145,263 spouses, and 234,488 children. The agency paid those beneficiaries a combined $10.215 billion per month — roughly $123 billion on an annualized basis.',
      'That number deserves a pause, because it is bigger than the state\'s entire modeled federal footprint. Social Security payments to Floridians alone (~$123 billion annualized) exceed our population-based estimate of total federal spending in the state ($97 billion). The model, which assigns spending by population share, systematically understates Florida: the state has an outsized share of the country\'s retirees, so entitlement dollars concentrate here far beyond what headcount alone predicts. Nationally, Social Security is the single largest federal outlay — $1.526 trillion in FY2026 FYTD — and Florida absorbs about 7.1% of its beneficiary count with only 6.8% of the U.S. population.',
      'Health programs stack on top. Medicare is the second-largest federal outlay at $979.3 billion FYTD nationally, and Florida — with more than one in five residents over 65 — is one of its heaviest per-capita consumers. Medicaid and health flows add another $42.9 billion into Florida in FY2026 FYTD, 4.6% of the national total. Together, the retirement-and-health complex is the quiet majority of Florida\'s federal story: no ribbon-cuttings, no test ranges, just millions of monthly payments that make the state\'s economy one of the most federally cushioned in America. Category detail: /categories/social-security-spending and /categories/medicaid-spending.',
    ],
    chart: {
      title: "Largest Federal Flows Into Florida, FY2026 ($B)",
      caption:
        'usaspending.us MTS category data (FYTD through Aug 31, 2026) except Social Security, annualized from SSA monthly benefit totals, Dec 2025.',
      type: 'bar',
      unit: '$B',
      data: [
        { label: 'Social Security (annualized)', value: 122.6 },
        { label: 'Medicaid & health', value: 42.9 },
        { label: 'Defense-military', value: 33.5 },
        { label: 'Infrastructure & transport', value: 6.7 },
      ],
    },
  },
  {
    id: 'military-footprint',
    heading: 'Twenty Installations and a $102.6 Billion Ripple',
    paragraphs: [
      'Florida hosts 20 major military installations — a density matched by few states. The Florida Defense Support Commission\'s statewide summary puts the total economic impact of Florida\'s military and defense sector at $102.6 billion, supporting 865,937 direct and indirect jobs and accounting for 7.3% of the state\'s entire economy. The footprint is physical as well as financial: 66,971 active-duty military personnel and 32,950 civilian defense workers across 521,839 acres and 6,677 buildings, with a plant replacement value of $44.5 billion.',
      'The crown jewel is MacDill Air Force Base in Tampa — the only U.S. installation that hosts two four-star combatant commands, U.S. Central Command and U.S. Special Operations Command, alongside the 6th Air Refueling Wing\'s KC-135 tankers and more than 30 mission partners. SOCOM plans and enables special operations in more than 80 countries from its Tampa headquarters. The defense ecosystem around the base has become a regional growth engine in its own right: the Tampa Bay area\'s veteran workforce tops 80,000, the metro ranks fourth nationally for veterans, and defense-and-security employment grew 15% over five years through June 2026. Elsewhere, Eglin AFB is one of the largest Air Force bases on Earth and home to the 96th Test Wing and Air Force Research Laboratory; NAS Jacksonville and Naval Station Mayport anchor naval aviation and the surface fleet on the Atlantic; NAS Pensacola trains every naval aviator; Hurlburt Field is the heart of Air Force special operations; and Tyndall AFB is being rebuilt from the ground up as an F-35 hub after Hurricane Michael devastated it in 2018.',
      'The federal checkbook behind all of this: $33.5 billion in defense-military spending in Florida in FY2026 FYTD, 3.8% of the national total — the fourth-largest state share. An independent analysis by the Florida Office of Economic and Demographic Research found that federal defense contracts and payroll in the state exceeded $32.2 billion in FY2023, ranking Florida 4th nationally. And the FY2026 defense bill directed $851.7 million specifically to Florida\'s military bases — including $219.3 million for Eglin (F-35 developmental test hangars and barracks), $164 million for a consolidated dormitory at NAS Pensacola, $74 million for KC-46 tanker hangars at MacDill, and $50 million toward a command-and-control facility at NAS Key West. More than 90,000 active-duty and reserve members serve in the state, alongside over 1.5 million veterans. Full category data: /categories/defense-military.',
    ],
    chart: {
      title: 'Top States by Defense Spending, FY2026 FYTD ($B)',
      caption:
        'usaspending.us category data, derived from U.S. Treasury Monthly Treasury Statement, Table 9, through August 31, 2026.',
      type: 'bar',
      unit: '$B',
      data: [
        { label: 'Texas', value: 67.1 },
        { label: 'California', value: 60.8 },
        { label: 'Virginia', value: 57.2 },
        { label: 'Florida', value: 33.5 },
        { label: 'Maryland', value: 29.2 },
      ],
    },
  },
  {
    id: 'space-coast',
    heading: 'The Busiest Spaceport on Earth',
    paragraphs: [
      'One strip of Atlantic coastline in Florida launches more rockets than anywhere else on the planet. Kennedy Space Center and Cape Canaveral Space Force Station — operated for the military side by Space Launch Delta 45 — hosted a record 109 orbital launches in 2025, shattering the 2024 record of 93. For perspective, the record was 31 launches as recently as 2021. Through mid-October 2026 the coast had already logged 59 more, with the year tracking above the 2021 total despite a deliberate industry-wide slowdown as SpaceX focused on Starship infrastructure. The overwhelming majority are Falcon 9s, and most of those are Starlink missions — sometimes two or three in a single week from the same coastline.',
      'The Space Coast is also where NASA\'s return to the Moon is physically happening. Artemis II lifted off from Launch Complex 39B at Kennedy on April 1, 2026 — the first crewed deep-space mission since Apollo 17 in 1972, sending four astronauts on a 10-day lunar flyby to validate the Space Launch System and Orion before a landing attempt. The Artemis III hardware is converging fast: its 212-foot SLS core stage arrived at Kennedy by barge on April 27, 2026, and NASA completed stacking of the twin solid rocket boosters inside the Vehicle Assembly Building on September 30, 2026, ahead of a fueling rehearsal at Pad 39B.',
      'The federal money here flows through the Science, Space & Technology budget function — $36.2 billion nationally in FY2026 FYTD, a small line with an outsized Florida signature. Between NASA\'s Artemis operations and the Space Force\'s Eastern Range, Florida executes a disproportionate share of the nation\'s human-spaceflight and national-security launch spending. The commercial cadence riding on top of that federal infrastructure — 109 launches and counting — is what turns a budget line into a regional industry: contractors, range-support crews, and a launch cadence the rest of the world watches.',
    ],
    chart: {
      title: 'Space Coast Orbital Launches, 2021–2026',
      caption:
        'Launch-tracking data (US FTB schedule tracker). 2026 through October 13, 2026. Totals include Kennedy Space Center and Cape Canaveral Space Force Station.',
      type: 'line',
      unit: 'launches',
      data: [
        { label: '2021', value: 31 },
        { label: '2022', value: 57 },
        { label: '2023', value: 72 },
        { label: '2024', value: 93 },
        { label: '2025', value: 109 },
        { label: '2026*', value: 59 },
      ],
    },
  },
  {
    id: 'hurricanes',
    heading: 'The Storm Tax: Disasters as a Federal Budget Line',
    paragraphs: [
      'Every large state has an occasional disaster bill; Florida has a standing one. The 2024 season produced two landfalls that are still moving federal money today: Hurricane Helene, which struck the Gulf Coast as a Category 4 in September 2024, and Hurricane Milton, which crossed Florida as a Category 3 in October 2024. FEMA\'s National Flood Insurance Program had paid out more than $10 billion in estimated losses from the two storms by early 2026 — Helene alone generated over 57,400 flood-insurance claims worth about $4.5 billion, Milton another 21,100 claims worth roughly $740 million. The payouts were so large that FEMA had to borrow $2 billion from the U.S. Treasury to cover NFIP claims.',
      'The spending continues long after landfall. In late September 2026, FEMA approved more than $116 million for 88 projects across Florida for Milton and Tropical Storm Debby recovery — Manatee County alone received nearly $44 million for emergency response and the collection of over 1.2 million cubic yards of debris — while individual cities are still tracking dozens of public-assistance projects for reimbursement. Disaster spending lives mostly in the Department of Homeland Security budget rather than any single usaspending.us spending category, so it does not show up cleanly in the state\'s modeled totals — but it is real, recurring federal money that Florida depends on more than any other state.',
    ],
    callout: {
      type: 'warning',
      text: 'Disaster aid is event-driven, not a fixed annual budget line. It spikes in storm years and trails for years afterward — do not annualize a single season into Florida\'s yearly federal total.',
    },
  },
  {
    id: 'per-resident',
    heading: 'Big Dollars, Modest Per-Person Numbers — With an Asterisk',
    paragraphs: [
      'By the population-based model, Florida looks ordinary per person: roughly $4,300 per resident, ahead of Texas ($3,900) and California ($3,500) but behind New York ($4,700) and Virginia ($5,100). The arithmetic is straightforward — 22.6 million people is a huge denominator, and the state\'s diversified economy absorbs federal dollars into tourism, agriculture, and logistics alongside the federal footprint.',
      'But Florida carries an asterisk no other large state does: the model undercounts it. Because the model allocates spending by population, it misses the retiree skew — Social Security alone puts about $5,420 per resident back into Florida on an annualized basis, which is higher than the entire modeled per-resident figure. In other words, Florida is the state where the federal government\'s biggest program concentrates most intensely relative to population, and the generic model cannot see it.',
      'For fair comparisons, benchmark Florida against other large states — Texas ($97–119 billion range in modeled terms), California, New York — not small states where a single lab or base makes per-capita figures soar. And remember the category mix: Florida\'s defense ($33.5 billion, 4th nationally), health flows ($42.9 billion in Medicaid alone), infrastructure ($6.7 billion), and the one-of-a-kind Space Coast together make the state a top-tier federal customer in four different directions at once. Compare states at /states/florida and /states/texas.',
    ],
    chart: {
      title: 'Modeled Federal Spending Per Resident, Large States ($)',
      caption:
        'usaspending.us modeled estimates for comparison — not audited award records. Variation reflects state size, basing decisions, and program geography.',
      type: 'bar',
      unit: '$',
      data: [
        { label: 'Virginia', value: 5100 },
        { label: 'New York', value: 4700 },
        { label: 'Florida', value: 4300 },
        { label: 'Texas', value: 3900 },
        { label: 'California', value: 3500 },
      ],
    },
  },
];

export const data: ArticleData = {
  slug: 'federal-spending-florida',
  title: 'Federal Spending in Florida: Retirees, Bases, Space Coast',
  description:
    "Federal spending in Florida runs about $97B a year — Social Security for 5.4M retirees, $33.5B in defense, and the busiest spaceport on Earth.",
  keyword: 'federal spending in florida',
  category: 'State Spotlights',
  datePublished: '2026-10-23',
  dateModified: '2026-10-23',
  readingTime: estimateReadingTime(sections),
  quickTakeaways: [
    { label: '$97B', text: 'Modeled federal spending flowing into Florida in FY2026 — about $4,300 per resident across 22.6 million Floridians.' },
    { label: '~$123B', text: 'Social Security paid to 5.4 million Floridians on an annualized basis — more than the entire modeled state footprint.' },
    { label: '$102.6B ripple', text: "Florida's military and defense sector generated $102.6B in economic impact and 866,000 jobs (Florida Defense Support Commission)." },
    { label: '109 launches', text: 'The Space Coast set the world record with 109 orbital launches in 2025 — up from just 31 in 2021.' },
  ],
  sections,
  faqs: [
    {
      question: 'How much federal spending does Florida receive?',
      answer:
        'Our modeled estimate puts total federal spending flowing into Florida at roughly $97 billion in FY2026 — about 1.43% of national outlays, or $4,300 per resident across 22.6 million Floridians. State-level figures are modeled estimates for comparison, not audited award records. Notably, the model understates Florida: Social Security payments to Floridians alone run about $123 billion a year on an annualized basis, well above the modeled total.',
    },
    {
      question: 'Why do retirees matter so much to Florida\'s federal footprint?',
      answer:
        'As of October 2026, 5,403,638 Floridians received Social Security benefits — including 4.19 million retired workers — and the Social Security Administration paid them a combined $10.2 billion per month. That is roughly $123 billion annualized, making Social Security alone larger than the state\'s entire modeled federal footprint. Nationally, Social Security is the biggest federal outlay at $1.526 trillion FY2026 FYTD, and Florida absorbs a disproportionate share because of its retiree-heavy population.',
    },
    {
      question: 'What is the real size of Florida\'s military economy?',
      answer:
        'Two different numbers, and they measure different things. Actual federal defense outlays in Florida were $33.5 billion in FY2026 FYTD — the fourth-largest state share. But the Florida Defense Support Commission\'s statewide study found the military and defense sector generated $102.6 billion in total economic impact and supported 865,937 direct and indirect jobs (7.3% of the state economy) — that is output, including base payroll plus the ripple through contractors and local businesses, not the federal checkbook.',
    },
    {
      question: 'Why is the Space Coast called the busiest spaceport in the world?',
      answer:
        'Kennedy Space Center and Cape Canaveral Space Force Station hosted a record 109 orbital launches in 2025 — up from 93 in 2024 and just 31 in 2021 — more than any other launch range on Earth. Most are SpaceX Falcon 9 missions, but the federal side is just as active: Artemis II launched from the coast in April 2026, the first crewed lunar flyby since 1972, and Artemis III hardware completed booster stacking at Kennedy in September 2026.',
    },
    {
      question: 'How do hurricanes change Florida\'s federal spending picture?',
      answer:
        'Disaster aid is event-driven, not a fixed budget line. Hurricanes Helene and Milton in 2024 generated more than 78,000 National Flood Insurance Program claims with estimated losses topping $10 billion — forcing FEMA to borrow $2 billion from the Treasury to pay claims — and recovery reimbursements (like $116 million approved in September 2026 for 88 Florida projects) trail for years afterward. Never annualize one storm season into Florida\'s yearly federal total.',
    },
  ],
  sources: [
    {
      name: 'Florida Defense Support Commission — 2024 Florida Military and Defense Economic Impact Summary',
      url: 'https://floridavets.org/wp-content/uploads/2024/12/2024-Florida-Military-and-Defense-Economic-Impact-Summary.pdf',
    },
    {
      name: 'Social Security Administration — Congressional Statistics, Florida 2025',
      url: 'https://www.ssa.gov/policy/docs/factsheets/cong_stats/2025/fl.pdf',
    },
    {
      name: 'Sen. Ashley Moody — $851.7M for Florida Military Bases in FY2026 Defense Bill',
      url: 'https://www.moody.senate.gov/press-releases/news-release-senator-moody-secures-major-victories-for-floridas-military-bases-through-passage-of-national-defense-authorization-act/',
    },
    {
      name: 'NASA — Artemis Blog (Artemis III Booster Stacking, Artemis II Status)',
      url: 'https://www.nasa.gov/blogs/artemis/2026/10/',
    },
    {
      name: 'US FTB — Space Coast Launch Schedule (launch cadence 2021–2026)',
      url: 'https://usftb.blog/space-coast-launch-schedule/',
    },
    {
      name: 'Florida Trend — FEMA Borrowing $2B to Pay Flood Claims After Helene and Milton',
      url: 'https://www.floridatrend.com/article/42515/after-multiple-hurricanes-fema-is-borrowing-billions-to-pay-flood-claims/',
    },
  ],
  relatedSlugs: ['where-does-us-federal-budget-go', 'us-debt-interest-vs-defense-spending', 'federal-spending-texas'],
};

