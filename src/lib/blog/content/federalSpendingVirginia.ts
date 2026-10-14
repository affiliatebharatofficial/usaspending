import type { ArticleData } from '../types';
import { estimateReadingTime } from '../types';

const sections: ArticleData['sections'] = [
  {
    id: 'the-big-picture',
    heading: "The Defense Corridor: Virginia's Federal Footprint in Numbers",
    paragraphs: [
      'Virginia is the most defense-weighted state in America. Our category data puts $57.2 billion of defense-military spending in Virginia in FY2026 FYTD — 6.5% of the national defense total of $876.2 billion — ranking the commonwealth third among states, behind only Texas ($67.1 billion) and California ($60.8 billion). No other state packs this much of the military-industrial complex into 8.7 million people: the Pentagon, the world\'s largest naval base, the only shipyard that builds nuclear aircraft carriers, and five of the world\'s six largest defense contractors are all inside one state\'s borders.',
      'There is one number in this article that needs an honesty warning up front. The state pages on this site use a population-based model that puts Virginia\'s total federal spending at roughly $44.5 billion — about $5,100 per resident. But the category data shows $57.2 billion in defense spending alone. Both figures come from our data; they just measure different things, and the mismatch itself is informative: the population model assumes an average state, and Virginia is anything but average. Defense concentrates here far beyond what headcount math predicts, so treat the modeled total as a conservative floor and the defense figure as the real story. Explore the state data at /states/virginia and the national defense category at /categories/defense-military.',
      'The shape of the footprint follows one geographic logic. A corridor running roughly along interstates 95 and 64 — from the contractor towers of Northern Virginia, past Richmond, to the naval bases and shipyards of Hampton Roads — carries the federal government\'s spending like a river. Virginians call it the Golden Crescent. What flows through it is payroll for hundreds of thousands of military and civilian personnel, procurement contracts that build aircraft carriers, and the everyday economic engine of the federal government\'s largest missions.',
    ],
    callout: {
      type: 'info',
      text: 'All FY2026 figures cover October 1, 2025 through August 31, 2026 (335 days) — the latest Monthly Treasury Statement published. Full-year totals will be higher.',
    },
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
    id: 'hampton-roads',
    heading: "Hampton Roads: America's Military Metro",
    paragraphs: [
      'Start in the southeast, where Virginia\'s federal footprint is heaviest. Hampton Roads — the metro spanning Norfolk, Virginia Beach, Newport News, and Hampton — hosts 19 military installations and roughly 100,000 active-duty service members, one of the largest concentrations of armed forces in the United States. Naval Station Norfolk is the world\'s largest naval base, the operational hub of the U.S. Navy\'s Atlantic Fleet, with dozens of ships and squadrons homeported there. Around it sit the Norfolk Naval Shipyard, Naval Air Station Oceana, Joint Expeditionary Base Little Creek–Fort Story, Naval Weapons Station Yorktown, and the Norfolk Naval Shipyard — plus Joint Base Langley–Eustis, home to Air Force fighter wings and Army training commands.',
      'The money follows the uniforms. More than $15 billion in federal contracts and grants flow into the Hampton Roads region annually, about 90% of it from the Department of Defense, and all ten of the largest U.S. defense contractors have a presence there. On the personnel side, the region holds more than 80,000 active-duty service members and about 60,000 federal civilian workers — base payroll that ripples through every diner, dealership, and hospital in the metro. This is why Virginia ranks first among states in defense spending per capita: nowhere else does this much federal money sit this close to this many people.',
      'The relationship runs in the other direction too: the region depends on Washington more than Washington depends on it. Economists at the Dragas Center for Economic Analysis and Policy have warned that Hampton Roads is dangerously concentrated — defense spending there increased in 2024, but if the federal government ever cuts, the region would be exceptionally vulnerable. Federal civilian wages in Virginia run about 1.6 times private-sector wages, so every lost federal job needs nearly two private-sector jobs to replace it. That asymmetry is the price of being America\'s military metro.',
    ],
  },
  {
    id: 'shipbuilding',
    heading: 'The Shipyard That Builds America\u2019s Carriers',
    paragraphs: [
      'A few miles up the water from Norfolk sits Virginia\'s single most distinctive federal asset: Newport News Shipbuilding, the Huntington Ingalls Industries division that is the only shipyard in the United States that designs, builds, and refuels nuclear-powered aircraft carriers, and one of only two that can build nuclear-powered submarines. Every Nimitz-class and Ford-class carrier — the core of American naval power for the last half century and the next — was built on this waterfront. The yard is the state\'s largest industrial employer and the anchor of a shipbuilding and repair ecosystem across Hampton Roads.',
      'The workload is enormous and measured in decades. The shipyard is currently building three Ford-class carriers with seven more in the pipeline, alongside Virginia-class attack submarines built in partnership with General Dynamics Electric Boat. Carrier construction is the longest-lead industrial program in the federal budget: the Ford herself took years of design and a decade-plus of construction, and each hull sustains tens of thousands of direct and supply-chain jobs in the region. When people say defense spending is "jobs," this is the most literal version — welders, pipefitters, and nuclear engineers turning federal contracts into steel.',
      'The fragility of that arrangement was on display in 2026. In an August memorandum, the White House directed the Navy to develop plans replacing the Ford-class carriers\' modern electromagnetic catapults and advanced weapons elevators with 1950s-era steam and hydraulic systems — a redesign experts warned could cost billions and delay deliveries of the ships already under construction at Newport News. Whatever one thinks of the engineering debate, the episode illustrates Virginia\'s peculiar position: decisions made in a single memo in Washington move the economy of an entire American shipbuilding city.',
    ],
    chart: {
      title: 'Defense Outlay vs. Economic Ripple in Virginia ($B)',
      caption:
        '$57.2B: usaspending.us category data, MTS Table 9, FY2026 FYTD through Aug 31, 2026. $103.7B: value-added statewide economic impact, Matrix Design Group study for Virginia (~2021 data). $131.2B: defense contract dollars to Virginia contractors, FY2022–2023 combined (Virginia Business). Different measures, different years — shown to convey scale, not as a time series.',
      type: 'bar',
      unit: '$B',
      data: [
        { label: 'FY22–23 contractor dollars (2 yrs)', value: 131.2 },
        { label: 'Statewide economic impact (2021 study)', value: 103.7 },
        { label: 'Defense outlay FY2026 FYTD', value: 57.2 },
      ],
    },
  },
  {
    id: 'golden-crescent',
    heading: 'Northern Virginia: The Pentagon\u2019s Contractor Capital',
    paragraphs: [
      'The other end of the Golden Crescent is Northern Virginia — the Beltway suburbs where the federal footprint is made of office towers rather than dry docks. Five of the world\'s six largest defense contractors have their U.S. headquarters here, and four of the top five aerospace and defense prime contractors keep corporate headquarters in Virginia. General Dynamics sits in Reston; Northrop Grumman in the Falls Church area; Leidos and SAIC in Reston; Booz Allen Hamilton in the Tysons/McLean corridor. For fiscal years 2022 and 2023, Virginia ranked first and second among states for defense spending, with federal contractors pulling in a combined $131.2 billion in defense dollars over the two years.',
      'The anchor tenant is the Pentagon itself, across the Potomac in Arlington — the world\'s largest office building and the headquarters of the Department of Defense. Around it cluster the service headquarters, the Defense Technical Information Center, and the federal civilian workforce: more than 140,000 federal employees live largely in Northern Virginia. Add the intelligence community — the CIA\'s headquarters at Langley, Rivanna Station in Charlottesville, the National Reconnaissance Office in Chantilly — plus Marine Corps Base Quantico (home of the FBI Academy) and Fort Gregg-Adams, and the picture is complete: this is the command-and-control node of the entire federal security apparatus.',
      'Northern Virginia also hosts the civilian research end of the federal footprint. NASA\'s Langley Research Center — the agency\'s oldest center, where the Project Mercury astronauts began their training — and the Department of Energy\'s Jefferson Lab in Newport News keep federal science spending in the state, even though science is a small slice of the national budget ($36.2 billion FY2026 FYTD). In Virginia, though, federal science mostly means national security science: modeling, simulation, and the intelligence-adjacent research that the contractor corridor exists to serve.',
    ],
    callout: {
      type: 'warning',
      text: 'The $103.7 billion "economic impact" figure is value-added output — base payroll plus contractor spending plus the ripple through local businesses — not the federal government\'s outlay. The federal defense outlay in Virginia is the smaller $57.2 billion figure.',
    },
  },
  {
    id: 'the-vulnerability',
    heading: 'The Flip Side: A State Built on Federal Dollars',
    paragraphs: [
      'There is a well-documented vulnerability running underneath all of this. Virginia is so dependent on federal spending that the state\'s economy moves when Washington sneezes. In 2025, federal workforce reductions hit Northern Virginia particularly hard: WARN notices showed Virginia companies shed nearly 7,000 jobs that year, up almost 70% from 2024, and the layoffs contributed to Virginia losing its spot as the top-ranked state for business. Economists noted that replacing lost federal wages is structurally hard — with the 1.6-to-1 wage ratio, the private sector must grow disproportionately just to stand still.',
      'The scale of dependence is what makes it distinctive. A state-commissioned study put the statewide value-added economic impact of defense-related spending at $103.7 billion — 19% of Virginia\'s entire economy — supporting more than 870,000 jobs. Virginia\'s installations employ over 250,000 active-duty, civilian, Guard, and reserve personnel, and more than 780,000 veterans and military retirees call the commonwealth home. One Virginian in roughly eleven is a veteran or retiree; defense touches every one of the state\'s 95 counties and 38 independent cities. No federal policy lever — base closures, contract cancellations, workforce cuts — lands on Virginia the way it lands on other states.',
      'The open question for 2026 is whether the defense side of the footprint can offset the civilian side\'s contraction. Defense spending in Hampton Roads increased in 2024 and military spending nationally remains high, but economists caution that with the federal deficit projected at roughly $2 trillion in FY2026, it is unknown how long defense spending can keep rising at its current pace. Virginia has ridden the federal tiger for eighty years. The ride has been very good. It has also never been more clear what the tiger can do.',
    ],
  },
  {
    id: 'per-resident',
    heading: 'Big Footprint, Small Denominator: $5,100 Per Resident',
    paragraphs: [
      'Virginia\'s population-based model puts federal spending at about $5,100 per resident — the highest of any large state, ahead of New York ($4,700), Florida ($4,300), Texas ($3,900), and California ($3,500). That ordering is the opposite of what raw population would predict: California has more than four times Virginia\'s people, but its per-resident federal figure is a third lower. The reason is the defense concentration: Virginia captures 6.5% of national defense outlays with about 2.6% of the national population.',
      'That concentration is also why the modeled total ($44.5 billion) undershoots the category reality ($57.2 billion in defense alone). Population-based models work for states whose federal footprint looks average — Social Security checks and Medicare payments track headcount reasonably well. Virginia breaks the model because basing decisions and contract awards are political and strategic choices, not demographic ones. The Pentagon is in Arlington because Washington is across the river; the carriers are built in Newport News because the shipyard is there. These are path-dependent facts about American history, and they will shape federal dollars in Virginia for decades.',
      'For a fair comparison, benchmark Virginia against other defense-heavy states — Texas, California, Florida, Maryland — not against small states where one lab inflates per-capita figures, and always read state-level numbers as modeled estimates for comparison, not audited award records. What the numbers do show, reliably, is a state whose economy and the federal government\'s largest missions are woven together more tightly than anywhere else in America. Compare at /states/virginia, /states/texas, and /states/california, and see the full budget context at /spending-breakdown.',
    ],
    chart: {
      title: 'Modeled Federal Spending Per Resident, Large States ($)',
      caption:
        'usaspending.us modeled estimates for comparison — not audited award records. Based on state populations and the site\'s population-based model.',
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
  slug: 'federal-spending-virginia',
  title: 'Federal Spending in Virginia: The Defense Corridor',
  description:
    'Federal spending in Virginia runs on defense: $57.2B in military dollars, the world\u2019s largest naval base, and the shipyard that builds U.S. carriers.',
  keyword: 'federal spending in virginia',
  category: 'State Spotlights',
  datePublished: '2026-10-14',
  dateModified: '2026-10-14',
  readingTime: estimateReadingTime(sections),
  quickTakeaways: [
    { label: '$57.2B', text: 'Defense spending in Virginia in FY2026 FYTD — 6.5% of the national defense total, third among states behind Texas and California.' },
    { label: '$103.7B', text: 'Value-added statewide economic impact of defense in Virginia — 19% of the state economy, supporting 870,000+ jobs (2021 study).' },
    { label: '#1', text: 'Virginia ranks first among states in DoD contracts as a share of its economy — and first in defense spending per capita.' },
    { label: '$5,100', text: 'Modeled federal spending per resident — the highest of any large state; Virginia captures 6.5% of defense dollars with 2.6% of the population.' },
  ],
  sections,
  faqs: [
    {
      question: 'How much federal spending does Virginia receive?',
      answer:
        'Our category data puts defense-military spending in Virginia at $57.2 billion in FY2026 FYTD (through August 31, 2026) — 6.5% of the national defense total, ranking third behind Texas and California. A population-based model puts total federal spending at roughly $44.5 billion ($5,100 per resident), but the model understates Virginia\'s defense-heavy footprint. State-level figures are modeled estimates for comparison, not audited award records.',
    },
    {
      question: 'Why is Virginia called the Defense Corridor?',
      answer:
        'The "Golden Crescent" runs roughly along interstates 95 and 64 from Northern Virginia to Hampton Roads: the Pentagon and five of the world\'s six largest defense contractors\' headquarters at one end, and Naval Station Norfolk, 19 military installations, and the Newport News shipyard at the other. A 2021 state-commissioned study found defense-related activity worth $103.7 billion in value-added economic impact — 19% of Virginia\'s economy, supporting 870,000+ jobs.',
    },
    {
      question: 'Is Naval Station Norfolk really the world\u2019s largest naval base?',
      answer:
        'Yes. Naval Station Norfolk is the world\'s largest naval base, the homeport of the U.S. Navy\'s Atlantic Fleet with dozens of ships and aircraft squadrons. It anchors a Hampton Roads region that hosts 19 military installations, roughly 100,000 active-duty personnel, and receives over $15 billion in federal contracts annually — about 90% from the Department of Defense.',
    },
    {
      question: 'What does Newport News Shipbuilding build?',
      answer:
        'Newport News Shipbuilding — a Huntington Ingalls Industries division — is the only U.S. shipyard that designs, builds, and refuels nuclear-powered aircraft carriers, and one of only two that build nuclear-powered submarines. It is building three Ford-class carriers with seven more in the pipeline, plus Virginia-class submarines with General Dynamics Electric Boat. It is Virginia\'s largest industrial employer.',
    },
    {
      question: 'How do federal budget cuts affect Virginia?',
      answer:
        'Disproportionately. Virginia\'s economy is so defense- and federal-workforce-dependent that federal layoffs hit it harder than other states — 2025 WARN notices showed Virginia companies shed nearly 7,000 jobs, up ~70% from 2024, and the state lost its #1 business ranking. Federal civilian wages run about 1.6x private-sector wages, so each lost federal job takes nearly two private jobs to replace. The $2 trillion FY2026 deficit projection adds uncertainty to future defense spending growth.',
    },
  ],
  sources: [
    {
      name: 'Association of Defense Communities — $103.7B statewide defense economic impact study (2021)',
      url: 'https://defensecommunities.org/2021/03/defense-spending-provides-103-billion-economic-impact-to-virginia/',
    },
    {
      name: 'Virginia Business — "Making Virginia grate again": the Golden Crescent and $131.2B in defense dollars (2025)',
      url: 'https://virginiabusiness.com/making-virginia-grate-again/',
    },
    {
      name: 'Hampton Roads Alliance — Hampton Roads defense: 19 installations, $15B+ in federal contracts',
      url: 'https://hamptonroadsalliance.com/defense/',
    },
    {
      name: 'Virginia Business — Proposed Ford-class carrier redesign could delay Newport News Shipbuilding (Oct 2026)',
      url: 'https://virginiabusiness.com/proposed-aircraft-carrier-redesign-could-delay-nns-construction/',
    },
    {
      name: 'Rep. Rob Wittman — 870,000 jobs, 780,000+ veterans, defense personnel in Virginia',
      url: 'https://wittman.house.gov/news/documentsingle.aspx?DocumentID=4898',
    },
  ],
  relatedSlugs: ['us-debt-interest-vs-defense-spending', 'federal-spending-texas'],
};
