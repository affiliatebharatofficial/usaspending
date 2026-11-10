import type { ArticleData } from '../types';
import { estimateReadingTime } from '../types';

const sections: ArticleData['sections'] = [
  {
    id: 'the-big-picture',
    heading: "Illinois' $69 Billion Federal Footprint",
    paragraphs: [
      "Nine days before this article was published, the Congressional Budget Office delivered the verdict on the year just ended: the federal budget deficit totaled $2.0 trillion in fiscal year 2026, up $217 billion — 12 percent — from the year before. The deficit equaled 6.2 percent of GDP, up from 5.8 percent, and federal debt held by the public reached 100 percent of GDP, the highest since 1946. The Treasury's own final numbers, published in the September 2026 Monthly Treasury Statement, tell the same story to the dollar: $7.396 trillion spent, $5.403 trillion collected, a $1.992 trillion gap. That is the national backdrop for every state in this series — and Illinois, the sixth-largest state in the country, absorbs roughly $69 billion of it.",
      "Our modeled figures put total federal spending flowing into Illinois at about $69.0 billion for fiscal 2026 — roughly 0.93 percent of the $7.396 trillion national total, spread across 12.55 million Illinoisans at about $5,500 per resident. That per-resident figure is the highest of any large state we have profiled so far — above Virginia ($5,100), New York ($4,700), Florida ($4,300), Texas ($3,900), and California ($3,500). The reason is not that Illinois is swimming in federal contracts. It is that Illinois concentrates the two biggest things Washington pays for — retirement checks and health coverage — alongside two of the nation's premier science laboratories, the Navy's only boot camp, and the busiest transit system in the Midwest. See the state breakdown at /states/illinois and the full national picture at /spending-breakdown.",
      "An important honesty note before we go further: state-level figures are modeled estimates for comparison, not audited award records. They show the order of magnitude and the composition of the federal footprint; they are not a cash register. And Illinois exposes the model's limits immediately: Social Security payments to Illinoisans alone run about $57.9 billion a year, and the federal share of the state's Medicaid program adds another $20.9 billion — together $78.8 billion, already more than the entire $69 billion modeled total. The population-based model understates Illinois, because entitlement dollars concentrate here beyond what headcount alone predicts. Treat the $69 billion as a floor and a comparison tool, not a ceiling. Where a figure comes from the Treasury's Monthly Treasury Statement (MTS), it is labeled FY2026 final — October 1, 2025 through September 30, 2026.",
    ],
    callout: {
      type: 'info',
      text: 'All FY2026 figures are finals from the September 2026 Monthly Treasury Statement (published October 16, 2026): $7.396 trillion in outlays, $5.403 trillion in receipts, a $1.992 trillion deficit. The CBO summary released November 9, 2026 confirms the same totals.',
    },
  },
  {
    id: 'retirees',
    heading: '2.45 Million Checks: The Retirement Engine',
    paragraphs: [
      "The single largest federal flow into Illinois is also the quietest: retirement checks. As of December 2025, 2,454,005 Illinoisans received Social Security benefits, according to the Social Security Administration — 1,886,306 retired workers, 227,744 disabled workers, 137,812 widow(er)s and parents, 77,275 spouses, and 124,868 children. The agency paid them a combined $4.83 billion per month, or about $57.9 billion on an annualized basis. That is roughly 19.5 percent of everyone who lives in the state — about one in five Illinoisans — and it makes Social Security alone worth 84 percent of the state's entire modeled federal footprint.",
      "The scale reflects Illinois' age profile and its industrial past. More than 2 million of the state's beneficiaries are aged 65 or older, and the retired-worker checks reflect a lifetime of covered earnings in Chicago's factories, downstate manufacturing towns, and the farm economy. On top of the retirement program, 244,025 Illinoisans received Supplemental Security Income (SSI), the federal cash program for low-income aged, blind, and disabled people. Nationally, Social Security is the largest federal outlay by far — $1,667.1 billion in FY2026 finals — and Illinois absorbs about 3.5 percent of it, almost exactly its share of the U.S. population. Category detail: /categories/social-security-spending.",
      "That ordinariness is the point. Unlike Florida, where retirees skew the numbers wildly upward, Illinois is close to the national average on Social Security — which is exactly why the modeled total still undershoots: add Medicaid's $20.9 billion federal share and the two biggest programs alone exceed the model. The retirement engine is not a quirk of Illinois' federal story; it is the foundation, and everything else — the labs, the bases, the trains — sits on top of it.",
    ],
    chart: {
      title: 'Largest Federal Flows Into Illinois, FY2026 ($B)',
      caption:
        'Social Security annualized from SSA December 2025 monthly benefits; Medicaid federal share FY2025 (Illinois HFS); infrastructure from usaspending.us MTS category data; farm payments from USDA FSA, October 2026 announcement for the 2025 crop year.',
      type: 'bar',
      unit: '$B',
      data: [
        { label: 'Social Security (annualized)', value: 57.9 },
        { label: 'Medicaid federal share', value: 20.9 },
        { label: 'Infrastructure & transport', value: 5.7 },
        { label: 'Farm safety net & conservation', value: 1.1 },
      ],
    },
  },
  {
    id: 'health',
    heading: "Medicaid: $20.9 Billion of Federal Money, Now Under Pressure",
    paragraphs: [
      "If Social Security is Illinois' biggest federal flow, Medicaid is its most politically exposed. In July 2026, 2.93 million Illinoisans were enrolled in Medicaid and CHIP — 2.55 million in Medicaid and another 382,650 children in CHIP — roughly one in four state residents. In state fiscal year 2025, the program spent $33.7 billion in total, of which $20.9 billion, or 62 percent, was federal money. The federal share is generous because of the Affordable Care Act expansion: Illinois covers the traditional Medicaid population at a 51 percent federal match, but the more than 770,000 adults covered under the ACA expansion are matched at 90 percent. That expansion population is now the fault line.",
      "The One Big Beautiful Bill Act (H.R. 1), signed July 4, 2025, squeezes the funding tools Illinois uses to draw down those federal dollars. Provider taxes — the hospital and managed-care assessments that fund the state's share — are capped at 6 percent of net patient revenue today, but that cap falls gradually from fiscal 2028 until it reaches 3.5 percent in fiscal 2032. The Institute of Government and Public Affairs estimates the total impact at $3.3 to $5.3 billion a year by fiscal 2033. Separately, Manatt projects about 330,000 Illinoisans could lose coverage under the law's changes, work requirements for adults take effect January 1, 2027, and roughly 10,000 noncitizens were expected to lose coverage when immigrant-eligibility rules narrowed on October 1, 2026.",
      "Illinois has one more tripwire no other expansion state can ignore: its 2013 trigger law ends the ACA expansion automatically if the federal match falls below 90 percent. The national Medicaid function totaled $1,025.6 billion in FY2026 finals — the third-largest federal outlay after Social Security and Medicare ($1,072.6 billion) — so the stakes are national as well as local. For Illinois, the next two budget cycles will decide whether the state's second-largest federal flow keeps flowing at its current size. Category detail: /categories/medicaid-spending.",
    ],
    callout: {
      type: 'warning',
      text: 'Medicaid enrollment and funding figures come from different vintages: enrollment is July 2026 (KFF), the $33.7B/$20.9B split is Illinois state fiscal year 2025 (HFS). Do not mix them into a single-year total.',
    },
  },
  {
    id: 'labs',
    heading: 'Two National Labs on the Prairie',
    paragraphs: [
      "No state hosts two Department of Energy national laboratories twenty miles apart — except Illinois. Argonne National Laboratory in Lemont, founded in 1946, employs about 3,400 people, including 1,400 scientists and engineers, on a 1,500-acre campus 25 miles southwest of Chicago, running an operating budget of around $1 billion across more than 200 research projects. Twenty miles away in Batavia sits Fermi National Accelerator Laboratory, the nation's particle-physics flagship and home of the Deep Underground Neutrino Experiment. Together they anchor the Illinois Technology and Research Corridor, and together they are Illinois' most distinctive claim on the federal science budget.",
      "The funding picture is strong but no longer comfortable. In the Department of Energy's Office of Science funding-by-site detail, Argonne received $619.5 million in fiscal 2024 and $652.6 million in fiscal 2025; Fermilab received $727.5 million and $762.5 million in the same years. The administration's fiscal 2026 budget request proposed cutting both — Argonne to $587.1 million and Fermilab to $691.5 million — and the House-passed fiscal 2026 minibus instead provided $8.4 billion for the Office of Science as a whole, rejecting the deepest cuts. The labs' futures are being negotiated in the same appropriations process that produced the $2 trillion deficit — science is a small line, $39.9 billion nationally in FY2026 finals, but in Illinois it is the line that employs thousands of Ph.D.s. Category detail: /categories/science-medical-research.",
      "The labs also illustrate how federal money multiplies locally. Argonne's management contractor, UChicago Argonne LLC, recorded $1.3 billion in federal contract obligations in the twelve months through October 2026, and the laboratory's user facilities — the Advanced Photon Source, the Argonne Leadership Computing Facility — draw tens of thousands of visiting researchers to the Chicago suburbs every year. Fermilab's neutrino program, meanwhile, is a multi-decade construction effort that keeps federal construction dollars flowing into DuPage and Kane counties long after the ribbon-cuttings.",
    ],
    chart: {
      title: 'Argonne and Fermilab DOE Science Funding, FY2024–FY2026 ($M)',
      caption:
        'U.S. Department of Energy, Office of Science, Funding by Site detail (FY2026 Congressional Justification). FY2026 is the President\'s budget request, not enacted funding.',
      type: 'line',
      unit: '$M',
      data: [
        { label: '2024', value: 619.5 },
        { label: '2025', value: 652.6 },
        { label: '2026*', value: 587.1 },
      ],
      series2Label: 'Fermilab',
      series2Data: [
        { label: '2024', value: 727.5 },
        { label: '2025', value: 762.5 },
        { label: '2026*', value: 691.5 },
      ],
    },
  },
  {
    id: 'transit',
    heading: "Chicago's $2 Billion Transit Fight",
    paragraphs: [
      "The most dramatic federal-spending story in Illinois right now is not a budget line — it is a lawsuit. The CTA's Red Line Extension, the largest transit project in Chicago in a generation, will extend the city's busiest rail line 5.5 miles south from 95th Street to 130th Street, adding four stations for about 100,000 residents of the Far South Side, at a total cost of $5.7 billion with service targeted for 2030. The Federal Transit Administration signed a Full Funding Grant Agreement on January 10, 2025, committing $1.973 billion in federal money — the single largest federal transit grant in CTA history. Then, on October 3, 2025, the White House Office of Management and Budget paused $2.1 billion in Chicago infrastructure funding, freezing the extension and the Red & Purple Modernization project together.",
      "The CTA sued the U.S. Department of Transportation and the FTA on March 20, 2026, asking a federal court to release money it says was already obligated. Four days later, federal judge Thomas M. Durkin granted a temporary restraining order requiring the administration to temporarily unfreeze nearly $2 billion — though the order was stayed until the following Friday to allow an appeal. The case turns on a question that matters far beyond Chicago: once Congress appropriates money and an agency signs a grant agreement, can the executive branch pause it? For Illinois, the answer decides whether the Far South Side gets its first new rail service in half a century.",
      "The fight sits inside a much larger transit flow. Illinois receives $5.7 billion in infrastructure and transportation spending in the site's category data — 4.5 percent of the national total, fifth among states — driven by federal highway grants, transit grants, and the FAA's presence at O'Hare, one of the world's busiest airports. Nationally the transportation function totaled $142.9 billion in FY2026 finals. The Red Line Extension is the visible tip of that iceberg: most of the $5.7 billion arrives quietly, in highway apportionments and formula transit grants, while the $2 billion fight makes the headlines. Category detail: /categories/infrastructure-transport.",
    ],
    chart: {
      title: 'Top States by Infrastructure & Transport Spending, FY2026 ($B)',
      caption:
        'usaspending.us category data (site stateRefs), derived from U.S. Treasury Monthly Treasury Statement, Table 9, FY2026 finals.',
      type: 'bar',
      unit: '$B',
      data: [
        { label: 'California', value: 13.3 },
        { label: 'Texas', value: 11.1 },
        { label: 'New York', value: 8.9 },
        { label: 'Florida', value: 6.7 },
        { label: 'Illinois', value: 5.7 },
      ],
    },
  },
  {
    id: 'military',
    heading: 'Three Bases, One Boot Camp, and a Global Airlift Hub',
    paragraphs: [
      "Illinois hosts just three major military installations, but each one is singular. Naval Station Great Lakes, on 1,600 acres north of Chicago, is the Navy's largest training installation and the home of its only boot camp — every enlisted sailor in the U.S. Navy starts there. In fiscal 2024 the station turned 42,000 civilians into sailors, with 46,000 expected the following year, and more than 20,000 sailors, Marines, soldiers, and civilians live and work on the installation. The Navy puts the station's contribution to Illinois' GDP at $4.6 billion. Scott Air Force Base, near Belleville in the Metro East, is headquarters of U.S. Transportation Command — the organization that moves American troops and cargo worldwide — alongside Air Mobility Command. And Rock Island Arsenal, on an island in the Mississippi River, is the largest government-owned weapons manufacturing facility in the United States, an Army installation that has made ordnance since the 1880s.",
      "The three bases anchor a military economy that a 2014 statewide study — the most recent comprehensive one — put at 150,000 jobs and $13.3 billion in economic activity, with the bases alone supporting 85,000 jobs and $9.1 billion. That study is old, and its numbers are economic impact (output and ripple effects), not the federal checkbook — do not confuse the two. What is current and verifiable is the footprint: three installations, three services, and a training pipeline that touches every sailor in the fleet. Illinois does not appear in the site's top five states for defense spending, which is dominated by Texas ($67.1 billion), California ($60.8 billion), and Virginia ($57.2 billion) — Illinois' military story is about irreplaceable functions, not the largest dollar total. Full category data: /categories/defense-military.",
    ],
  },
  {
    id: 'farmland',
    heading: 'Farmland and Food Aid: A $1.1 Billion Harvest Safety Net',
    paragraphs: [
      "South of Chicago, Illinois is a different state: the nation's top corn-and-soybean belt, where federal farm programs are a working part of the economy rather than an abstraction. On October 21, 2026, the USDA's Farm Service Agency announced $1,107,718,082 in farm safety net and conservation payments to Illinois farmers, ranchers, and landowners for the 2025 crop year — part of a record $13.8 billion in Agriculture Risk Coverage (ARC) and Price Loss Coverage (PLC) payments nationwide, the largest annual payout since the programs were created in the 2014 Farm Bill. Fourteen Illinois crops triggered PLC payments, including corn and soybeans, and Conservation Reserve Program payments cover 770,682 acres under active contracts in the state.",
      "The safety net is actually two payments stacked together. Alongside ARC/PLC, the USDA announced $12 billion in Farmer Bridge Assistance in December 2025 — $11 billion for row crops — to offset low prices, high production costs, and trade disputes, with estimated rates around $46 per acre for corn and $25 per acre for soybeans. The programs exist because the economics are brutal: farmdoc daily at the University of Illinois estimated that even with the assistance, 2025 returns for a 50-50 corn-soybean rotation were barely above breakeven in northern and central Illinois and still negative in the south. The federal money is the difference between a bad year and a ruinous one.",
      "The other end of the food system is moving in the opposite direction. SNAP participation in Illinois fell to 1.48 million people in July 2026 — down from 1.89 million a year earlier, a 21.6 percent drop and the lowest in a decade — after expanded work requirements under H.R. 1 took effect in May 2026, when about 88,500 Illinoisans lost benefits in a single month. In fiscal 2025, before the drop, Illinois recipients received $4.46 billion in SNAP benefits, averaging 1.90 million people a month at $195.90 per person. Chicago alone accounts for about a third of the state's recipients, and Pulaski County, at the southern tip of the state, has the highest participation rate at nearly 27 percent. The farm safety net is paying out at record levels while the food safety net is shrinking — the same farm bill, two very different directions. More on SNAP: /blog/snap-food-assistance-spending-explained.",
    ],
    callout: {
      type: 'info',
      text: 'SNAP figures are USDA Food and Nutrition Service data; the July 2026 counts are labeled preliminary and subject to revision. Farm payments are gross ARC/PLC and CRP amounts before the 5.7% sequestration reduction required by statute.',
    },
  },
  {
    id: 'per-resident',
    heading: 'Big Dollars, Modest Per-Person Numbers — With an Asterisk',
    paragraphs: [
      "By the population-based model, Illinois looks expensive per person: roughly $5,500 per resident, the highest modeled figure among the large states — ahead of Virginia ($5,100), New York ($4,700), Florida ($4,300), Texas ($3,900), and California ($3,500). The arithmetic is straightforward: 12.55 million people is a large denominator, but Illinois concentrates an unusual amount of federal activity per head — two national labs, the Navy's only boot camp, a global transportation command, and a top-three Medicaid program all sit inside one state.",
      "But Illinois carries the same asterisk as Florida, in a quieter form: the model undercounts it. Social Security ($57.9 billion annualized) plus the federal share of Medicaid ($20.9 billion) already exceeds the $69 billion modeled total before a single dollar of defense, science, transit, or farm spending is counted. The real federal flow into Illinois is larger than the model — how much larger, nobody can say precisely, because the Treasury does not publish a state-by-state cash register. That is the honest limit of this article and of every state spotlight in this series.",
      "For fair comparisons, benchmark Illinois against other large states — Texas, California, Florida, New York — not small states where a single lab or base makes per-capita figures soar. And remember the category mix: Illinois is the state where the federal government pays retirees, insures the poor, runs two physics labs, trains every sailor, and is currently being sued over a train line — all at once, in a year when the national deficit hit $2 trillion and the debt crossed 100 percent of GDP. The $69 billion is the footprint. The story is what it is made of. Compare states at /states/illinois and /states/texas.",
    ],
  },
];

export const data: ArticleData = {
  slug: 'federal-spending-illinois',
  title: 'Federal Spending in Illinois: Transit, Labs, and Farmland',
  description:
    'Federal spending in Illinois runs about $69B a year — Social Security for 2.45M people, $20.9B in Medicaid, two national labs, and a $2B transit fight.',
  keyword: 'federal spending in illinois',
  category: 'State Spotlights',
  datePublished: '2026-11-10',
  dateModified: '2026-11-10',
  readingTime: estimateReadingTime(sections),
  quickTakeaways: [
    { label: '$69B', text: 'Modeled federal spending flowing into Illinois in FY2026 — about $5,500 per resident across 12.55 million Illinoisans, the highest per-resident figure of any large state.' },
    { label: '~$57.9B', text: 'Social Security paid to 2.45 million Illinoisans on an annualized basis — 84% of the entire modeled state footprint, before Medicaid is counted.' },
    { label: '$2B frozen', text: 'The CTA sued after the White House paused $2.1B in Chicago transit funding; a federal judge ordered a temporary unfreeze in March 2026.' },
    { label: '$1.1B harvest', text: 'USDA paid Illinois farmers a record $1.1B in ARC/PLC and conservation payments for the 2025 crop year, while SNAP rolls fell to a decade low.' },
  ],
  sections,
  faqs: [
    {
      question: 'How much federal spending does Illinois receive?',
      answer:
        'Our modeled estimate puts total federal spending flowing into Illinois at roughly $69 billion in FY2026 — about 0.93% of the $7.396 trillion national total, or $5,500 per resident across 12.55 million Illinoisans. State-level figures are modeled estimates for comparison, not audited award records. The model understates Illinois: Social Security ($57.9 billion annualized) plus the federal share of Medicaid ($20.9 billion) already exceeds the modeled total on their own.',
    },
    {
      question: 'How many people in Illinois get Social Security?',
      answer:
        'As of December 2025, 2,454,005 Illinoisans received Social Security benefits — 1,886,306 retired workers, 227,744 disabled workers, and the rest survivors, spouses, and children — and the Social Security Administration paid them $4.83 billion per month, about $57.9 billion annualized. That is roughly one in five state residents. Another 244,025 Illinoisans received Supplemental Security Income (SSI).',
    },
    {
      question: 'What happened to the CTA Red Line Extension funding?',
      answer:
        'The Federal Transit Administration signed a Full Funding Grant Agreement on January 10, 2025, committing $1.973 billion toward the $5.7 billion extension of the Red Line to 130th Street. On October 3, 2025, the White House budget office paused $2.1 billion in Chicago infrastructure funding, freezing the project. The CTA sued in federal court on March 20, 2026, and four days later a judge ordered the administration to temporarily unfreeze nearly $2 billion while the case proceeds.',
    },
    {
      question: 'How big is Illinois’ Medicaid program?',
      answer:
        'In July 2026, 2.93 million Illinoisans were enrolled in Medicaid and CHIP — about one in four residents. In state fiscal year 2025 the program spent $33.7 billion, of which $20.9 billion (62%) was federal money. The federal share is high because the ACA expansion population is matched at 90%. New federal rules under H.R. 1 are squeezing the provider taxes that fund the state share, with an estimated impact of $3.3–$5.3 billion a year by fiscal 2033.',
    },
    {
      question: 'What do Argonne and Fermilab cost taxpayers?',
      answer:
        'In the Department of Energy’s Office of Science funding, Argonne National Laboratory received $652.6 million in fiscal 2025 and Fermilab $762.5 million; the administration’s fiscal 2026 request proposed cutting both, to $587.1 million and $691.5 million. Argonne’s full operating budget is around $1 billion a year across more than 200 research projects, with about 3,400 employees. The two labs sit about 20 miles apart in the Chicago suburbs.',
    },
  ],
  sources: [
    {
      name: 'Congressional Budget Office — Monthly Budget Review: Summary for Fiscal Year 2026 (Nov 9, 2026)',
      url: 'https://www.cbo.gov/publication/61986',
    },
    {
      name: 'Social Security Administration — Congressional Statistics, December 2025: Illinois',
      url: 'http://www.ssa.gov/policy/docs/factsheets/cong_stats/2025/il.html',
    },
    {
      name: 'Chicago Transit Authority — CTA Sues Federal Government Over Paused Red Line Extension Funding',
      url: 'https://www.transitchicago.com/chicago-transit-authority-sues-federal-government-over-paused-red-line-extension-and-red--purple-modernization-project-funding/?keyword=signal',
    },
    {
      name: 'USDA Farm Service Agency — $1,107,718,082 in Safety Net and Conservation Payments to Illinois (Oct 21, 2026)',
      url: 'https://www.fsa.usda.gov/news-events/news/10-21-2026/usda-boosts-illinois-agricultural-economy-1107718082-dollars-safety-net',
    },
    {
      name: 'U.S. Department of Energy — Office of Science Funding by Site, FY2026 Congressional Justification',
      url: 'https://science.osti.gov/-/media/budget/pdf/sc-budget-request-to-congress/2026/Funding-by-Appropriation-by-Site.pdf',
    },
  ],
  relatedSlugs: ['where-does-us-federal-budget-go', 'federal-deficit-2026-how-big', 'federal-spending-florida-vs-texas'],
};
