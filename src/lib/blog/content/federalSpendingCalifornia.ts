import type { ArticleData } from '../types';
import { estimateReadingTime } from '../types';

const sections: ArticleData['sections'] = [
  {
    id: 'the-big-picture',
    heading: "California's $136 Billion Federal Footprint",
    paragraphs: [
      'California is the largest consumer of federal dollars in America, and it isn\'t close. Our modeled figures put total federal spending flowing into the state at roughly $136.4 billion for fiscal 2026 — the biggest total of any state, spread across 38.9 million residents at about $3,500 per person. The paradox that defines California is visible in those two numbers: the largest absolute footprint in the country, paired with one of the most modest per-resident figures among large states.',
      'Two engines drive the footprint. The first is health: California\'s Medicaid program, Medi-Cal, pulls in $143.2 billion in federal funds — 15.5% of all federal Medicaid spending in the country, far ahead of runner-up New York ($101.8 billion). The second is defense: $60.8 billion flows into the state\'s military bases, aerospace factories, and research labs — second only to Texas\'s $67.1 billion. Add the nation\'s top share of federal infrastructure grants ($13.3 billion, 10.5% of the category) and a federal land estate covering nearly half the state, and you get a federal relationship no other state replicates. Compare the state at /states/california and the full national breakdown at /spending-breakdown.',
      'An important honesty note before we go further: state-level figures are modeled estimates for comparison, not audited award records. They show the order of magnitude and the composition of the federal footprint; they are not a cash register. Where a figure comes from the Treasury\'s Monthly Treasury Statement (MTS), it is labeled FY2026 FYTD — October 1, 2025 through August 31, 2026, the latest published actuals.',
    ],
    callout: {
      type: 'info',
      text: 'All FY2026 figures cover October 1, 2025 through August 31, 2026 (335 days) — the latest Monthly Treasury Statement published. Full-year totals will be higher.',
    },
  },
  {
    id: 'medi-cal',
    heading: 'Medi-Cal: The $143 Billion Engine',
    paragraphs: [
      'Medi-Cal is the single largest channel through which federal money enters California. As of June 2025, the program covered 14.8 million Californians — nearly one in three state residents — making it by far the largest Medicaid program in the country. The federal government bankrolls roughly 60% of Medi-Cal\'s costs, and our FY2026 FYTD data puts the federal share flowing to California at $143.2 billion out of roughly $926 billion in national Medicaid outlays. No state comes close: New York is next at $101.8 billion, Texas at $66.2 billion. See the full category data at /categories/medicaid-spending.',
      'That scale is now the center of a national policy fight. The July 2025 reconciliation law (H.R. 1) requires states to condition Medicaid eligibility for ACA expansion adults on meeting work requirements — 80 hours a month of work, education, or community engagement — starting January 1, 2027. About five million expansion enrollees in California could be affected, and the state estimates up to 1.4 million people could be disenrolled over the implementation period. The same law cuts federal funding for refugees, asylees, and other lawfully present groups, which California chose to backfill with $365 million in state money through mid-2027.',
      'The federal-state relationship is already under strain. In July 2026, federal health officials deferred roughly $867.5 million in Medicaid payments to California after reviews flagged high-risk claims — mostly around in-home supportive services, where state spending jumped 24% in two fiscal years. The deferral is temporary (the state must document the claims to release the funds), but it shows the direction of travel: Washington is auditing California\'s program aggressively even as the 2027 work-requirement deadline forces the state to rebuild eligibility systems, retrain county workers, and run outreach in 19 languages.',
      'California\'s governor projects the reconciliation law alone will cost the state $1.1 billion in General Fund Medicaid spending in FY 2027, inside a projected $3 billion structural deficit expected to grow to $22 billion by FY 2028. Medi-Cal already accounts for about 40% of the state budget and 20% of General Fund spending. Federal health dollars are California\'s biggest fiscal prize — and increasingly its biggest fiscal risk.',
    ],
    chart: {
      title: 'Top States by Federal Medicaid Spending, FY2026 FYTD ($B)',
      caption:
        'usaspending.us category data, derived from U.S. Treasury Monthly Treasury Statement, Table 9, through August 31, 2026.',
      type: 'bar',
      unit: '$B',
      data: [
        { label: 'California', value: 143.2 },
        { label: 'New York', value: 101.8 },
        { label: 'Texas', value: 66.2 },
        { label: 'Florida', value: 42.9 },
        { label: 'Pennsylvania', value: 39.3 },
      ],
    },
  },
  {
    id: 'defense-corridor',
    heading: 'The Aerospace Corridor and the Pacific Fleet',
    paragraphs: [
      'California\'s defense footprint is split between two poles: the Pacific Fleet\'s homeport in San Diego and the aerospace industrial corridor stretching from Los Angeles through the Antelope Valley. Our category data puts California second among states at $60.8 billion in defense spending, 6.9% of the national defense total. The money arrives through base payroll, procurement contracts, and research awards — not a single channel, and concentrated in a handful of metro areas.',
      'The biggest current industrial story is the B-21 Raider. On September 29, 2026, the Air Force and Northrop Grumman broke ground on a $4.5 billion expansion of the final assembly line at Air Force Plant 42 in Palmdale, funded through the One Big Beautiful Bill — more than a million square feet of new facilities to build the Pentagon\'s next stealth bomber. Palmdale is also home to Lockheed Martin\'s Skunk Works, and the September defense contract cycle included a $66 million Northrop Grumman order (mostly executed in Hayward and San Diego) for Triton drone retrofits for the Navy and Australia\'s air force.',
      'San Diego is the other pole: the Navy\'s principal homeport on the West Coast, operating since 1922, supporting more than 60 ships and some 250 shore commands — the fleet\'s center of gravity for the Indo-Pacific. Just up the coast, Camp Pendleton is the Marine Corps\' largest West Coast expeditionary training facility, spanning more than 125,000 acres. Inland, Edwards Air Force Base hosts the Air Force\'s flight-test enterprise in the Mojave Desert, and Vandenberg Space Force Base on the Central Coast is one of the nation\'s primary space launch ranges.',
      'This is the deep structure of California\'s defense dollars: long-term basing decisions and industrial clusters, not one-off projects. Full category data: /categories/defense-military. And for the contrast case — Texas leads with $67.1 billion — read /blog/federal-spending-texas.',
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
    id: 'science-labs',
    heading: 'A Federal Science Density No Other State Matches',
    paragraphs: [
      'Few states host California\'s density of federal science. NASA\'s Jet Propulsion Laboratory in Pasadena — managed by Caltech and NASA\'s only federally funded research and development center — is the agency\'s hub for robotic space exploration: the Mars rovers, the Voyager probes, and the Deep Space Network that talks to spacecraft across the solar system are run from here. JPL launched Explorer 1, America\'s first satellite, in 1958, and its spacecraft have since visited every planet in the solar system.',
      'The Department of Energy\'s presence is equally distinctive: Lawrence Livermore National Laboratory, central to nuclear stockpile stewardship research, sits east of the Bay Area alongside Lawrence Berkeley National Laboratory and SLAC National Accelerator Laboratory. NASA\'s Ames Research Center is in Mountain View. Nationally, Science, Space & Technology is a small budget line — $36.2 billion in FY2026 FYTD — but in California\'s Bay Area and Los Angeles corridors, federal research funding is a defining industry rather than a footnote.',
      'The science footprint also shows up in the numbers: California leads all states in federal infrastructure and transportation grants at $13.3 billion (10.5% of the national total), money that funds everything from highway grants to transit systems across a state where federal labs and defense installations sit alongside some of the country\'s most congested commutes.',
    ],
    callout: {
      type: 'tip',
      text: 'California leads the nation in federal transportation and infrastructure grants ($13.3B, 10.5%) — a number that often surprises people who think of the state\'s federal footprint as purely military or medical.',
    },
  },
  {
    id: 'federal-land',
    heading: 'Half the State Is Federally Owned',
    paragraphs: [
      'Roughly 48 percent of California — nearly 48 million acres — belongs to the federal government, managed mostly by the Forest Service, the Bureau of Land Management, the National Park Service, and the Defense Department. The Forest Service alone manages more than 20 million acres here, and Washington owns roughly 58 percent of the state\'s 33 million acres of forestland. Much of it is mountains, desert, and forest that were never homesteaded — but the practical consequence is that wildfire and forest-health policy in California is substantially federal policy.',
      'That ownership shapes spending in ways that don\'t appear in any single budget line. California has spent nearly half a billion dollars in wildfire resilience and forest-health grants on federal lands since Governor Newsom took office — state money working the federal estate because, as Cal Fire\'s vegetation management chief put it, "wildfires don\'t stop at boundaries." Three new agreements Cal Fire signed with the Forest Service let the state clear fuels, replant burned lands, and manage timber on national forests; the Forest Service contributed $4 million to those agreements, but officials acknowledge the need far exceeds the federal funds.',
      'The land relationship is also a friction point. The federal government proposed in 2026 to rescind the Roadless Rule nationwide, stripping protections from 4.4 million acres of California\'s national forests; California\'s attorney general called it a coordinated attack on public lands, while federal officials argued local managers need flexibility to reduce wildfire risk. However that fight resolves, the underlying fact is durable: no other large state has this much of its territory under direct federal ownership, and that makes federal land management one of the biggest invisible channels of Washington\'s money into California.',
    ],
    callout: {
      type: 'warning',
      text: 'Wildfire spending lives across many budgets — federal suppression, state grants, FEMA disaster relief, utility settlements — so there is no single "wildfire budget" number. The $13.3B infrastructure figure above is grants and agency programs, not disaster spending.',
    },
  },
  {
    id: 'per-resident',
    heading: 'Big State, Big Dollars, Modest Per-Person Numbers',
    paragraphs: [
      'California receives the largest absolute federal flows in the country — and has the most modest per-resident figure among the big states. Our modeled estimate puts California at roughly $3,500 per resident, below Florida ($4,300), New York ($4,700), and Virginia ($5,100). That is mostly arithmetic: 38.9 million people is an enormous denominator, and the country\'s largest state economy absorbs federal dollars into technology, entertainment, agriculture, and logistics alongside the federal footprint.',
      'The statewide average also hides concentration. Defense-adjacent metro areas show how localized the effects are: San Diego\'s economy is structurally tied to the Navy\'s Pacific Fleet homeport; Palmdale and the Antelope Valley track aerospace employment and the B-21 plant expansion; parts of the Bay Area live off the national laboratories. In these metros, federal money is the economy\'s backbone — even when the statewide per-person number looks ordinary.',
      'For a fair comparison, always benchmark California against other large states — Texas ($119 billion modeled total), Florida, New York — not against small states where a single lab or base makes per-capita figures soar. And remember the category mix: California\'s health spending ($143.2 billion in Medicaid-related flows, 15.5% of the national total) dwarfs everything else, defense contracts ($60.8 billion, 6.9%) are second, and transportation grants ($13.3 billion, 10.5%) round out a footprint no other state matches. California isn\'t just a defense state or a health state to the federal budget — it\'s the budget\'s largest customer, period. Compare states at /states/california and /states/texas.',
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
  slug: 'federal-spending-california',
  title: 'Federal Spending in California: Health and Defense Dollars',
  description:
    "Federal spending in California runs $136B modeled — led by Medi-Cal's $143B federal share, Pacific Fleet bases, and the B-21 bomber plant.",
  keyword: 'federal spending in california',
  category: 'State Spotlights',
  datePublished: '2026-10-18',
  dateModified: '2026-10-18',
  readingTime: estimateReadingTime(sections),
  quickTakeaways: [
    { label: '$136.4B', text: 'Modeled federal spending flowing into California in FY2026 — the largest total of any state, about $3,500 per resident.' },
    { label: '#1 in Medicaid', text: '$143.2B in federal Medicaid funds (15.5% of the national total) — Medi-Cal covers 14.8M Californians, nearly 1 in 3 residents.' },
    { label: '#2 in defense', text: '$60.8B in defense spending — San Diego\'s Pacific Fleet homeport, Camp Pendleton, and the $4.5B B-21 plant expansion in Palmdale.' },
    { label: '48% federal land', text: 'Nearly half the state is federally owned — wildfire and forest policy in California is substantially federal policy.' },
  ],
  sections,
  faqs: [
    {
      question: 'How much federal spending does California receive?',
      answer:
        'Our modeled estimate puts total federal spending flowing into California at roughly $136.4 billion in FY2026 — the largest total of any state, about $3,500 per resident across 38.9 million Californians. State-level figures are modeled estimates for comparison, not audited award records. California ranks first among states in Medicaid spending ($143.2 billion) and second in defense ($60.8 billion).',
    },
    {
      question: 'Why does California get so much federal Medicaid money?',
      answer:
        'Scale. Medi-Cal covers 14.8 million Californians — nearly one in three residents — making it by far the largest Medicaid program in the country, and the federal government funds roughly 60% of its costs. Federal Medicaid funds flowing to California total $143.2 billion, 15.5% of the national Medicaid total. New federal work requirements and eligibility changes taking effect in 2027 could remove up to 1.4 million people from the program.',
    },
    {
      question: 'What is the B-21 Raider expansion in Palmdale?',
      answer:
        'On September 29, 2026, the Air Force and Northrop Grumman broke ground on a $4.5 billion expansion of the B-21 Raider final assembly line at Air Force Plant 42 in Palmdale, California — more than a million square feet of new facilities, funded through the One Big Beautiful Bill. The B-21 is the Pentagon\'s next-generation stealth bomber, and the plant cements Southern California\'s role in military aerospace.',
    },
    {
      question: 'Why is so much of California federally owned land?',
      answer:
        'About 48 percent of the state — nearly 48 million acres — belongs to the federal government, managed mostly by the Forest Service, the Bureau of Land Management, the National Park Service, and the Defense Department. Much of it is mountains, desert, and forest that were never homesteaded. A practical consequence: wildfire and forest-health policy in California is substantially federal policy, since Washington owns roughly 58 percent of the state\'s forestland.',
    },
    {
      question: 'How should I interpret California\'s per-resident figure?',
      answer:
        'California has the largest state population in the country (about 39 million), so any per-resident figure is spread across a huge denominator. Compare California against other large states (Texas, Florida, New York) rather than small states with one dominant federal installation, and remember the state-level numbers are modeled estimates for comparison, not audited award records.',
    },
  ],
  sources: [
    {
      name: 'KFF — California\'s Plans to Implement Medicaid Work Requirements Amid Budget Shortfalls (April 2026)',
      url: 'https://www.kff.org/medicaid/a-closer-look-at-californias-plans-to-implement-work-requirements-while-facing-major-budget-shortfalls-amid-cuts-in-federal-medicaid-funding/',
    },
    {
      name: 'Manufacturing Dive — Northrop Grumman, Air Force start on $4.5B facility expansion (Oct 2026)',
      url: 'https://www.manufacturingdive.com/news/northrop-grumman-air-force-expansion-plant-42/832844/',
    },
    {
      name: 'Becker\'s Payer Issues — HHS defers $1B+ in Medicaid funds to Minnesota, California (July 2026)',
      url: 'https://www.beckerspayer.com/payer/medicaid/hhs-defers-1b-in-medicaid-funds-to-minnesota-california/',
    },
    {
      name: 'CalMatters (via Lookout) — Federal wildfire crews are stretched thin; California is stepping in (Aug 2026)',
      url: 'https://lookout.co/federal-wildfire-crews-are-stretched-thin-california-is-stepping-in-to-help/story',
    },
  ],
  relatedSlugs: ['federal-spending-texas', 'medicare-vs-social-security-spending', 'us-debt-interest-vs-defense-spending'],
};
