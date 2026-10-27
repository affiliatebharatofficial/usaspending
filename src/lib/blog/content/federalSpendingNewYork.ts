import type { ArticleData } from '../types';
import { estimateReadingTime } from '../types';

const sections: ArticleData['sections'] = [
  {
    id: 'the-big-picture',
    heading: "New York's $92 Billion Federal Footprint",
    paragraphs: [
      'New York absorbs federal money differently from any other large state. Our modeled figures put total federal spending flowing into the state at roughly $92 billion for fiscal 2026 — about 1.35% of the $6.81 trillion national total, spread across 19.57 million New Yorkers at roughly $4,700 per resident. That per-resident figure is the second-highest among the big states, behind only Virginia. The reason is not a single mega-base or one dominant program: it is the stack. The nation\'s second-largest Medicaid footprint, nearly 4 million Social Security checks a month, the biggest transit capital program in American history, and a research corridor that pulls in billions of NIH dollars all land in the same state.',
      'The shape of the footprint is civilian, not military. Unlike Texas or Virginia, where defense installations drive the story, New York\'s federal relationship is built on health coverage, retirement income, and infrastructure — the programs that touch ordinary households and the daily commute. New York City alone concentrates most of it: the Medicaid rolls, the subway capital plan, the medical schools, and the federal offices that regulate the financial system all sit within the five boroughs, while upstate contributes the military anchor at Fort Drum and the research labs that dot the Hudson Valley and Long Island. Explore the state breakdown at /states/new-york and the full national budget at /spending-breakdown.',
      'An important honesty note before we go further: state-level figures are modeled estimates for comparison, not audited award records. They show the order of magnitude and the composition of the federal footprint; they are not a cash register. Where a figure comes from the Treasury\'s Monthly Treasury Statement (MTS), it is labeled FY2026 FYTD — October 1, 2025 through August 31, 2026, the latest published actuals. Social Security flows, by contrast, are annualized from Social Security Administration monthly data, because they arrive on a calendar-month cycle rather than a fiscal one.',
    ],
    callout: {
      type: 'info',
      text: 'All FY2026 figures cover October 1, 2025 through August 31, 2026 (335 days) — the latest Monthly Treasury Statement published. Full-year totals will be higher.',
    },
  },
  {
    id: 'health-dollars',
    heading: 'The Health Colossus: $101.8 Billion in Medicaid and Health Flows',
    paragraphs: [
      'No category defines New York\'s federal footprint like health. Medicaid and health flows into the state total $101.8 billion in FY2026 FYTD — 11.0% of the national total, the second-largest state share behind only California ($143.2 billion) and well ahead of Texas ($66.2 billion). That is bigger than the state\'s entire modeled federal footprint, and the reason is the same measurement gap that shows up in Florida: the population-based model spreads national spending by headcount, while Medicaid dollars concentrate where enrollment and health-care costs are highest. New York runs one of the largest and most generous Medicaid programs in the country, covering millions of low-income residents in a state where a hospital bed costs far more than the national average.',
      'The federal-state split is where New York\'s wealth works against it. Under the Federal Medical Assistance Percentage (FMAP) formula, the federal government matches state Medicaid spending at a rate tied to per-capita income, with a statutory floor of 50%. For fiscal 2026, New York sits at that floor — every dollar the state spends on Medicaid draws exactly one federal dollar, while Mississippi draws $3.33. Wealthy states get the minimum match by design, which means New York\'s $101.8 billion in federal health flows rests on an equally large state and local contribution. An Urban Institute analysis of the FMAP system put New York\'s federal Medicaid spending at $52.0 billion for 2026 under its narrower definition — a reminder that "Medicaid spending" covers different baskets depending on whether marketplace subsidies, CHIP, and public-health programs are counted alongside the core matching payments. Category detail: /categories/medicaid-spending.',
      'The research side of the health story is just as concentrated. New York received $3,411 million in NIH grant funding in fiscal 2025, according to Research!America\'s state-by-state tally, and four of the country\'s top-25 NIH-funded medical schools sit in New York City: Columbia University Health Sciences ($592.8 million), the Icahn School of Medicine at Mount Sinai ($475.1 million), NYU School of Medicine ($437.0 million), and Cornell\'s Weill Medical College ($316.5 million). That concentration is now a vulnerability as much as a strength: STAT reported that New York had $2.8 billion in NIH funding terminated in 2025 according to SciMap tracking, and state medical-school leaders have responded with a $6 billion proposal for an Empire Biomedical Research Institute to backstop the research workforce. The federal health dollar in New York is therefore two stories at once — the biggest safety-net program in the Northeast, and a research engine whose future funding is suddenly uncertain. Related: /categories/science-medical-research.',
    ],
    chart: {
      title: 'Top States by Medicaid & Health Flows, FY2026 FYTD ($B)',
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
    id: 'retirees',
    heading: '3.9 Million Checks: The Retirement Engine',
    paragraphs: [
      'Beneath the health numbers sits the quietest giant in New York\'s federal story: Social Security. As of December 2025, 3,924,458 New Yorkers received Old-Age, Survivors, and Disability Insurance benefits, according to the Social Security Administration\'s congressional statistics — 3,000,986 retired workers, 411,652 disabled workers, 186,832 widow(er)s and parents, 123,026 spouses, and 201,962 children. The agency paid those beneficiaries a combined $7.667 billion per month, roughly $92 billion on an annualized basis.',
      'Note the coincidence: annualized Social Security payments to New Yorkers (~$92 billion) are essentially equal to the state\'s entire modeled federal footprint ($92 billion). The two numbers measure different things — one is a single program\'s cash benefits, the other a population-share model of all federal spending — but the comparison captures something real. New York is old enough, and its benefit levels high enough (a reflection of lifetime earnings in a high-wage state), that retirement income alone matches what the generic model attributes to the state across every program combined. Nationally, Social Security is the single largest federal outlay at $1.526 trillion in FY2026 FYTD, and New York\'s 3.9 million beneficiaries are the third-largest state caseload in the country.',
      'Supplemental Security Income adds a second, smaller layer for the lowest-income residents: 552,719 New Yorkers received federally administered SSI payments in December 2025, worth about $405 million per month — roughly $4.9 billion annualized — with the heaviest concentrations in New York City, where more than half of the state\'s recipients live. SSI is means-tested and federally funded, so unlike Medicaid it does not depend on a state match; it is a direct federal transfer to aged, blind, and disabled residents with little or no other income. Together, OASDI and SSI put roughly $97 billion a year into New York households before a single highway grant or research award is counted. Category detail: /categories/social-security-spending.',
    ],
    chart: {
      title: 'Largest Federal Flows Into New York, FY2026 ($B)',
      caption:
        'usaspending.us MTS category data (FYTD through Aug 31, 2026) except Social Security, annualized from SSA monthly benefit totals, Dec 2025.',
      type: 'bar',
      unit: '$B',
      data: [
        { label: 'Medicaid & health', value: 101.8 },
        { label: 'Social Security (annualized)', value: 92.0 },
        { label: 'Infrastructure & transport', value: 8.9 },
      ],
    },
  },
  {
    id: 'infrastructure-transit',
    heading: 'The Tunnel and the Subway: Infrastructure as a Federal Story',
    paragraphs: [
      'If health is New York\'s biggest federal flow, infrastructure is its most visible one. Federal infrastructure and transport spending in the state totals $8.9 billion in FY2026 FYTD — 7.0% of the national total, third behind California ($13.3 billion) and Texas ($11.1 billion). But the annual flow understates the commitment, because New York is currently the site of the largest federally backed rail project in American history. The Hudson Tunnel Project — the Gateway Program\'s centerpiece — is a $16 billion effort to build a new two-tube rail tunnel under the Hudson River and rehabilitate the existing 115-year-old tubes, which were badly damaged by Superstorm Sandy in 2012 and carry more than 200,000 passengers a day on over 450 Amtrak and NJ Transit trains.',
      'The federal commitment behind the tunnel is about $12 billion, anchored by a $6.88 billion Full Funding Grant Agreement with the Federal Transit Administration and roughly $4.06 billion in Railroad Rehabilitation and Improvement Financing loans supporting the local share. After a months-long funding freeze in late 2025 that briefly halted work — and a lawsuit by New York and New Jersey that forced the money\'s release — tunnel boring finally began on September 28, 2026, when the first of two German-built boring machines, each weighing more than 1,680 tons, started chewing through the Palisades cliffs. Governor Hochul has said the project "will be done" by 2034; other officials say 2035. Either way, the tunnel is the rare federal project whose price tag rivals a small agency\'s annual budget — and whose failure, officials warn, would cost the national economy roughly $100 billion for a single day\'s shutdown of the existing tubes.',
      'Inside the city, the Metropolitan Transportation Authority\'s 2025–2029 capital plan — $68.4 billion, the largest in MTA history — leans on about $14 billion in anticipated federal funding alongside congestion-pricing revenue, payroll mobility taxes, and city and state contributions. The plan funds 1,500 new subway cars, signal modernization, accessibility upgrades at more than 65 stations, and the Second Avenue Subway\'s Phase 2 extension, a $6.9 billion project with $3.4 billion in agreed federal support and a $307.3 million fiscal 2026 request. The federal role here is the classic one: Washington does not run the subway, but without its grants and loans the century-old system\'s renewal would be arithmetically impossible. Full category data: /categories/infrastructure-transport.',
    ],
  },
  {
    id: 'military-finance',
    heading: 'Fort Drum, West Point, and the Finance Exception',
    paragraphs: [
      'Defense is the one major category where New York punches below its weight. The state does not appear among the top five states for defense-military spending — Texas ($67.1 billion), California ($60.8 billion), Virginia ($57.2 billion), Florida ($33.5 billion), and Maryland ($29.2 billion) take those slots — which means New York\'s military footprint is real but not nationally dominant. Its anchor is Fort Drum in the North Country, home of the 10th Mountain Division: the largest Army post north of the Carolinas and east of the Mississippi, home to more than 30,000 soldiers and family members, the state\'s largest single-site employer, and an engine that pumps nearly $2 billion a year into the regional economy while supporting more than 26,000 jobs. The U.S. Military Academy at West Point adds the officer pipeline, but neither installation gives New York the defense-contractor economy that defines Virginia or California.',
      'What New York has instead is a federal presence no other state can replicate: the financial system\'s plumbing. The Federal Reserve Bank of New York sits at the center of the Treasury market, executes open-market operations for the entire Federal Reserve System, and supervises some of the country\'s largest banks — a federal function that does not show up as "spending in New York" in any state table, because its balance sheet is national. The same is true of the federal courts, the U.S. Attorney\'s Southern District, and the Securities and Exchange Commission\'s largest regional office, all headquartered in Manhattan. Counting only grants, contracts, and benefit checks therefore understates New York\'s federal importance in the same way the population model understates Florida\'s retirees: the state hosts federal power, not just federal money.',
      'That distinction is the honest frame for the whole article. New York\'s $92 billion modeled footprint is already the second-highest per resident among large states, and it still misses the two things that make the state uniquely federal — the Fed\'s market operations and the regulatory apparatus of Wall Street. When the state\'s boosters say New York sends more to Washington than it gets back, they are usually right in cash terms: a high-income state pays far more in federal taxes than any plausible measure of federal spending returns. The footprint documented here is the return leg — and it is dominated, as it should be in a state of 19.6 million people, by the programs that pay for health care, retirement, and the ride to work.',
    ],
    callout: {
      type: 'warning',
      text: 'State defense rankings come from usaspending.us category state shares, which cover the top five states only. New York\'s absence from that top five means its defense spending is below Maryland\'s $29.2 billion — not that it is zero.',
    },
  },
  {
    id: 'per-resident',
    heading: 'Big Dollars, High Per-Person Numbers — and Why',
    paragraphs: [
      'By the population-based model, New York looks expensive per person: roughly $4,700 per resident, ahead of Florida ($4,300), Texas ($3,900), and California ($3,500) and behind only Virginia ($5,100). The arithmetic is straightforward — 19.57 million people is a huge denominator, and the state\'s diversified economy absorbs federal dollars into health care, transit, and research alongside everything else. But unlike Florida, where the model undercounts the state, New York\'s modeled figure arguably understates it less: the state\'s high Medicaid costs, high benefit levels, and transit megaprojects all push real federal dollars above a simple population share, while the model\'s $4,700 already sits near the top of the large-state range.',
      'For fair comparisons, benchmark New York against other large states — Virginia, Florida, Texas, California — not small states where a single lab or base makes per-capita figures soar. And remember the category mix: New York\'s Medicaid and health flows ($101.8 billion, second nationally), Social Security for 3.9 million beneficiaries (~$92 billion annualized), infrastructure ($8.9 billion, third nationally), and the $16 billion Hudson Tunnel together make the state a top-tier federal customer in four different directions at once — with a research corridor and a military anchor on top. Compare states at /states/new-york and /states/virginia.',
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
  slug: 'federal-spending-new-york',
  title: 'Federal Spending in New York: Health, Transit, Research',
  description:
    'Federal spending in New York runs about $92B a year — led by $101.8B in Medicaid and health flows and $8.9B in infrastructure.',
  keyword: 'federal spending in new york',
  category: 'State Spotlights',
  datePublished: '2026-10-27',
  dateModified: '2026-10-27',
  readingTime: estimateReadingTime(sections),
  quickTakeaways: [
    { label: '$92B', text: 'Modeled federal spending flowing into New York in FY2026 — about $4,700 per resident across 19.57 million New Yorkers.' },
    { label: '$101.8B health', text: 'Medicaid and health flows into New York in FY2026 FYTD — 11.0% of the national total, second only to California.' },
    { label: '3.9M checks', text: 'Social Security paid 3,924,458 New Yorkers $7.67 billion in December 2025 — about $92 billion annualized.' },
    { label: '$16B tunnel', text: 'The Hudson Tunnel Project began boring on Sept 28, 2026, backed by about $12 billion in federal commitments.' },
  ],
  sections,
  faqs: [
    {
      question: 'How much federal spending does New York receive?',
      answer:
        'Our modeled estimate puts total federal spending flowing into New York at roughly $92 billion in FY2026 — about 1.35% of national outlays, or $4,700 per resident across 19.57 million New Yorkers. State-level figures are modeled estimates for comparison, not audited award records. The biggest single flows are Medicaid and health ($101.8 billion FYTD) and Social Security (about $92 billion annualized), which together exceed the modeled total because they are measured differently.',
    },
    {
      question: 'Why is Medicaid so big in New York?',
      answer:
        'New York runs one of the largest and most generous Medicaid programs in the country, in a state where health care costs far more than the national average. Federal Medicaid and health flows into the state total $101.8 billion in FY2026 FYTD — 11.0% of the national total, second only to California. Because New York is a wealthy state, its federal match sits at the 50% statutory floor: every state Medicaid dollar draws exactly one federal dollar, while lower-income states draw far more.',
    },
    {
      question: 'What is the Hudson Tunnel Project, and how much is federal money?',
      answer:
        'The Hudson Tunnel Project is the Gateway Program\'s $16 billion effort to build a new two-tube rail tunnel under the Hudson River and rehabilitate the existing 115-year-old tubes, which carry more than 200,000 passengers a day. About $12 billion of the total is a federal commitment, anchored by a $6.88 billion Federal Transit Administration grant and roughly $4.06 billion in federal railroad loans. Tunnel boring began on September 28, 2026, with completion targeted for 2034–2035.',
    },
    {
      question: 'How many New Yorkers receive Social Security?',
      answer:
        'As of December 2025, 3,924,458 New Yorkers received Social Security benefits — 3,000,986 retired workers, 411,652 disabled workers, 186,832 widow(er)s and parents, 123,026 spouses, and 201,962 children — according to the Social Security Administration. The agency paid them $7.67 billion in that month alone, roughly $92 billion on an annualized basis. Another 552,719 New Yorkers received Supplemental Security Income, worth about $4.9 billion a year.',
    },
    {
      question: 'Is New York a big defense-spending state?',
      answer:
        'Relatively speaking, no. New York does not rank among the top five states for defense-military spending — Texas, California, Virginia, Florida, and Maryland take those slots, with Maryland fifth at $29.2 billion. New York\'s military anchor is Fort Drum, home of the 10th Mountain Division, which pumps nearly $2 billion a year into the North Country economy. The state\'s federal footprint is dominated instead by health care, retirement income, transit, and research.',
    },
  ],
  sources: [
    {
      name: 'Social Security Administration — Congressional Statistics, New York 2025',
      url: 'https://www.ssa.gov/policy/docs/factsheets/cong_stats/2025/ny.pdf',
    },
    {
      name: '6sqft — Tunnel Boring for $16B Hudson River Tunnel Project Begins (Sept 28, 2026)',
      url: 'https://www.6sqft.com/tunnel-boring-for-16b-hudson-river-tunnel-project-begins/',
    },
    {
      name: 'Governor of New York — FY 2026 Budget Fully Funds MTA Transit Improvements',
      url: 'https://www.governor.ny.gov/news/governor-hochul-signs-legislation-fully-fund-improvements-transit-riders-part-fy-2026-budget',
    },
    {
      name: 'Research!America — FY25 NIH Fact Sheet (state grant funding)',
      url: 'https://www.researchamerica.org/wp-content/uploads/2026/03/FY25-NIH-Fact-Sheet.pdf',
    },
    {
      name: 'DVIDS — New York State Legislators, 10th Mountain Division Leaders Celebrate Fort Drum Day',
      url: 'https://www.dvidshub.net/news/564455/new-york-state-legislators-10th-mountain-division-leaders-celebrate-fort-drum-day',
    },
  ],
  relatedSlugs: ['federal-spending-florida', 'federal-spending-texas', 'where-does-us-federal-budget-go'],
};
