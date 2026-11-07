import type { ArticleData } from '../types';
import { estimateReadingTime } from '../types';

const sections: ArticleData['sections'] = [
  {
    id: 'the-headline',
    heading: 'Florida vs. Texas: The Headline Numbers',
    paragraphs: [
      'Florida and Texas are the two states most often compared in American politics — the biggest red-state economies, the fastest-growing Sun Belt giants, and the two largest states by population after California. But when the federal government writes checks, the two states tell very different stories. Our modeled estimates put total federal spending flowing into Texas at roughly $119 billion in fiscal 2026, against roughly $97 billion for Florida. Texas wins on the total because it has 8 million more people; Florida wins per person, at about $4,300 per resident against Texas\'s $3,900. Both numbers are modeled estimates for comparison, not audited award records — and the gap between them is smaller than the gap in what the money is actually for.',
      'A second, independent count tells the same story with bigger numbers. USAspending.gov award data for fiscal 2025 — contracts, grants, loans, and direct payments actually obligated by recipient location — puts Florida second among all states at $325.1 billion and Texas third at $311.4 billion, behind only California\'s $485.6 billion. The award count is larger than our modeled totals because it counts different things: it includes the full value of multi-year awards and direct payments as obligated, while our model allocates national outlays by population. The two lenses agree on the ranking that matters — Florida ahead of Texas per person ($15,092 vs. $10,686 in award data), Texas ahead on the total — which is why the per-person result is worth trusting even though the absolute dollars differ. Explore the state breakdowns at /states/florida and /states/texas, and the full national budget at /spending-breakdown.',
      'The national context frames everything that follows. In fiscal 2026 the federal government spent $7,395.8 billion in final outlays, according to the September 2026 Monthly Treasury Statement (MTS), Table 9 — the source behind every national figure on this site. Social Security led at $1,667.1 billion, followed by Medicare ($1,072.6 billion), net interest ($1,051.8 billion), Medicaid ($1,025.6 billion), and defense ($965.2 billion). Florida and Texas divide that pie in opposite ways: Florida\'s share is heavy on the first four items, Texas\'s on the fifth. That single difference explains most of what follows.',
    ],
    callout: {
      type: 'info',
      text: 'State-level figures on this site are modeled estimates for comparison, not audited award records. Where a figure comes from the Treasury MTS it is labeled FY2026 final (October 1, 2025 – September 30, 2026); state defense figures are FY2026 FYTD through August 31, 2026, as published in our state profiles.',
    },
    chart: {
      title: 'Federal Awards by State, FY2025 ($B)',
      caption:
        'USAspending.gov award data via PlainSpending, FY2025. Counts contracts, grants, loans, and direct payments obligated by recipient location — a different measure than Treasury outlays.',
      type: 'bar',
      unit: '$B',
      data: [
        { label: 'California', value: 485.6 },
        { label: 'Florida', value: 325.1 },
        { label: 'Texas', value: 311.4 },
        { label: 'New York', value: 262.2 },
      ],
    },
  },
  {
    id: 'the-demographic-split',
    heading: 'The Demographic Split: 22.8% vs. 14.9% Over 65',
    paragraphs: [
      'The deepest difference between the two states is not political — it is age. According to the Census Bureau\'s QuickFacts, 22.8% of Floridians are 65 or older, against 14.9% of Texans. Florida is the oldest large state in the country; Texas, despite its size, is one of the youngest. Because the two largest federal programs — Social Security and Medicare — pay out by age almost by definition, that eight-point gap is the single biggest structural fact in this comparison. It is why Florida absorbs a disproportionate share of entitlement dollars and why Texas, with a younger workforce, absorbs a disproportionate share of defense and payroll-driven spending.',
      'The populations behind those percentages are moving in the same direction but at different speeds. Census Vintage 2025 estimates put Texas at 31,709,821 residents on July 1, 2025 — the second-largest state — and Florida at 23,462,518, the third-largest. Both grew about 9% since the 2020 census (Texas +8.8%, Florida +8.9%), but Texas added more people in the most recent year: 391,243 new residents in 2024–25 (+1.25%) against Florida\'s 196,680 (+0.85%). Texas is pulling away in headcount, which widens its lead in total federal dollars even as Florida\'s older population keeps its per-person lead.',
      'The economies underneath are different sizes, too. Bureau of Economic Analysis data for calendar 2025 puts Texas GDP at $2.932 trillion — the second-largest state economy, 9.4% of U.S. GDP — against Florida\'s $1.806 trillion, fourth-largest. Yet Florida edges Texas on per capita personal income: $78,345 against $73,156. That combination — a smaller but richer-per-person economy in Florida, a bigger and faster-growing one in Texas — is the backdrop for everything the federal government does in each state. Federal dollars follow people, bases, and retirees, not GDP, which is why the spending rankings and the GDP rankings do not line up neatly.',
    ],
    bullets: [
      'Population (July 1, 2025): Texas 31.7M (2nd), Florida 23.5M (3rd) — Census Vintage 2025.',
      'Share 65 and older: Florida 22.8%, Texas 14.9% — Census QuickFacts.',
      'Growth since 2020: Texas +8.8%, Florida +8.9%; 2024–25 adds: Texas +391,243, Florida +196,680.',
      'GDP 2025: Texas $2.932T (2nd), Florida $1.806T (4th); per capita personal income: Florida $78,345, Texas $73,156 — BEA.',
    ],
  },
  {
    id: 'defense-head-to-head',
    heading: 'Defense: Texas Doubles Florida',
    paragraphs: [
      'Defense is where Texas\'s lead is most lopsided. Our category data puts defense-military spending in Texas at $67.1 billion in fiscal 2026 through August 31 — the largest share of any state, 7.7% of the national defense total — against $33.5 billion in Florida, fourth nationally at 3.8%. Texas spends roughly twice what Florida does on defense, and the reason is structural: Texas hosts 15 major military installations plus Army Futures Command headquarters in Austin, and it builds the Pentagon\'s flagship weapons. Florida hosts 20 installations, but fewer of the very largest ones, and no equivalent of the F-35 production line.',
      'The hardware tells the story. The F-35 Lightning II — the Pentagon\'s largest procurement program, with lifetime costs estimated above $2 trillion — is assembled at Lockheed Martin\'s plant in Fort Worth, and in September 2025 the Pentagon finalized production Lots 18 and 19 with Lockheed for up to 296 jets. On the basing side, Fort Cavazos (formerly Fort Hood) anchors multiple armored divisions, Joint Base San Antonio combines Lackland, Randolph, and Brooke Army Medical Center into one of the Defense Department\'s largest joint installations, and Fort Bliss near El Paso is one of the Army\'s largest posts. Florida\'s crown jewel is different in kind: MacDill Air Force Base in Tampa is the only U.S. installation hosting two four-star combatant commands, U.S. Central Command and U.S. Special Operations Command — headquarters, not divisions.',
      'The economic ripples are enormous in both states, and both are routinely confused with the federal checkbook. A 2024 Texas Comptroller study found the state\'s 15 installations contributed at least $151.2 billion to the Texas economy in 2023 and supported more than 677,000 direct and indirect jobs — Joint Base San Antonio alone accounted for $55.1 billion. The Florida Defense Support Commission\'s study put Florida\'s military and defense sector at $102.6 billion in economic impact and 865,937 jobs, 7.3% of the state\'s economy. Those are measures of total output — base payroll plus contractors plus the local businesses they support — not federal outlays. The outlays are the smaller numbers: $67.1 billion and $33.5 billion. Full category data: /categories/defense-military.',
    ],
    chart: {
      title: 'Top States by Defense Spending, FY2026 FYTD ($B)',
      caption:
        'usaspending.us category data, derived from U.S. Treasury Monthly Treasury Statement, Table 9, through August 31, 2026. Texas leads every state; Florida ranks fourth.',
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
    id: 'entitlements-and-health',
    heading: 'Entitlements and Health: Florida\'s Retiree Engine',
    paragraphs: [
      'Flip the lens to entitlements and Florida dominates. As of October 2026, 5,403,638 Floridians received Social Security benefits — including 4,191,491 retired workers — and the Social Security Administration paid them a combined $10.215 billion per month, roughly $123 billion on an annualized basis. That single flow is larger than our modeled estimate of Florida\'s entire federal footprint ($97 billion), which is the clearest sign that the population-based model understates Florida: the state holds about 7.1% of the nation\'s Social Security beneficiaries with only about 6.9% of its population, and its retirees are concentrated enough that entitlement dollars land here far beyond what headcount predicts. Nationally, Social Security is the biggest federal outlay at $1,667.1 billion in FY2026 finals — 22.5 cents of every federal dollar — and Florida is where that program is most visible. See the head-to-head: /blog/social-security-vs-defense-spending.',
      'Health programs stack on top of the retirement checks. Medicare is the second-largest federal outlay at $1,072.6 billion in FY2026 finals, and Florida — with more than one in five residents over 65 — is one of its heaviest per-capita consumers. Medicaid and health flows add another $42.9 billion into Florida in FY2026 FYTD, 4.6% of the national total. Texas, by contrast, is the bigger Medicaid state in absolute terms: $66.2 billion in Medicaid-related flows, 7.1% of the national total, reflecting a much larger low-income population and a state government that runs one of the country\'s biggest Medicaid programs. The split captures the two models neatly: Florida\'s health dollars follow age, Texas\'s follow population and poverty. Category detail: /categories/social-security-spending and /categories/medicaid-spending.',
      'The grant picture sharpens the contrast further. Federal grants per capita in fiscal 2025 averaged $2,939 nationally, according to the Federal Funds Information for States (FFIS) analysis of 200+ formula grant programs — but Florida received just $1,623 per person, the lowest of any state. That sounds contradictory next to Florida\'s high per-person award total, and it is the key to reading the state correctly: Florida\'s federal money arrives mostly as direct payments to individuals (Social Security checks, Medicare reimbursements), not as grants to state and local government. Texas\'s mix is more balanced between individual benefits, defense payroll, and grants. Neither state is "winning" federal money; they are receiving different kinds of it.',
    ],
    callout: {
      type: 'warning',
      text: 'Do not compare the $123 billion annualized Social Security flow to Florida with the $97 billion modeled state total as if one should fit inside the other. The modeled total allocates national outlays by population share and systematically understates retiree-heavy states — the two numbers come from different methods.',
    },
  },
  {
    id: 'the-one-offs',
    heading: 'The One-Offs: Borders, Hurricanes, and Rockets',
    paragraphs: [
      'Some of the biggest federal flows into these states are not annual programs at all — they are events, and each state has its own signature event. For Texas it is the border. After the state spent more than $10 billion of its own money on National Guard and Department of Public Safety border operations since 2021, Congress created the State Border Security Reinforcement Fund in its July 2025 reconciliation law — $10 billion at the Department of Homeland Security and $3.5 billion at the Justice Department for states that spent on border enforcement. Texas applied in June 2026, and on September 18 the Department of Homeland Security confirmed a $7.5 billion award: three-quarters of the entire DHS fund in a single grant. It is a one-time reimbursement, not recurring spending, and it belongs to no other state in anything like this size.',
      'For Florida it is the weather. Hurricanes Helene and Milton in 2024 generated more than 78,000 National Flood Insurance Program claims with estimated losses topping $10 billion — so large that FEMA had to borrow $2 billion from the U.S. Treasury to pay claims — and recovery reimbursements trail for years: in late September 2026 FEMA approved more than $116 million for 88 Florida projects for Milton and Tropical Storm Debby recovery. Disaster aid is event-driven, not a budget line, and it spikes in storm years. It also lives mostly inside the Department of Homeland Security budget rather than any single spending category, so it never shows up cleanly in the state\'s modeled totals. Texas has its own disaster bill — Hurricane Harvey\'s recovery ran for years — but no state\'s federal relationship is as storm-dependent as Florida\'s.',
      'And then there is space, where the two states split the federal program between them. Houston\'s Johnson Space Center — home of Mission Control and astronaut training since the 1960s — leads International Space Station operations and the Orion and Gateway lunar programs. Florida\'s Kennedy Space Center and Cape Canaveral Space Force Station hosted a record 109 orbital launches in 2025, and Artemis II lifted off from Launch Complex 39B on April 1, 2026, the first crewed deep-space mission since Apollo 17. Nationally the Science, Space & Technology function is small — $39.9 billion in FY2026 finals, about half a percent of the federal total — but Texas and Florida together execute a disproportionate share of it: one state flies the missions, the other launches them.',
    ],
  },
  {
    id: 'per-person-verdict',
    heading: 'Per Person, the Winner Depends on How You Count',
    paragraphs: [
      'So who gets more? On the total, Texas: roughly $119 billion modeled against Florida\'s $97 billion, and the gap will widen as Texas adds roughly twice as many new residents each year. On defense, Texas by two to one. On retiree and health dollars per person, Florida by a wide margin. And on federal awards per resident, Florida leads $15,092 to $10,686 in FY2025 data — while on the site\'s modeled per-resident basis the lead is narrower, $4,300 to $3,900. Every measure points the same direction per person, but the size of Florida\'s lead depends entirely on which measure you pick, because the measures count different things: outlays allocated by population, awards obligated by location, or grants to governments.',
      'The honest conclusion is that there is no single winner, because the two states are not competing for the same federal money. Texas\'s federal footprint is built on decisions the government made about where to put soldiers, build jets, and guard a border — choices that are durable for decades and hard to move. Florida\'s is built on decisions millions of individuals made about where to retire — choices that arrive one moving van at a time and compound every year as the 65-and-over share grows. One footprint is anchored in concrete and contracts; the other in demographics. Compare the individual state profiles at /blog/federal-spending-florida and /blog/federal-spending-texas.',
      'What to watch next: Texas\'s lead in total dollars will keep growing with its population, but Florida\'s per-person lead is protected by arithmetic — its retiree share is still rising, and Social Security\'s cost-of-living adjustments raise every check automatically. The wild cards are the one-offs: whether Congress repeats a border-reimbursement fund, and whether the next hurricane season forces another round of FEMA borrowing. The structural story, though, will not change soon: two Sun Belt giants, two different models of what the federal government is for.',
    ],
    chart: {
      title: 'Federal Dollars Per Resident: Two Ways to Count ($)',
      caption:
        'Modeled estimates: usaspending.us state profiles, FY2026 (population-allocated outlays). Award totals: USAspending.gov FY2025 obligations via PlainSpending (2020 Census populations). Different methods — compare within each pair, not across them.',
      type: 'bar',
      unit: '$',
      data: [
        { label: 'Florida (modeled)', value: 4300 },
        { label: 'Texas (modeled)', value: 3900 },
        { label: 'Florida (awards)', value: 15092 },
        { label: 'Texas (awards)', value: 10686 },
      ],
    },
  },
];

export const data: ArticleData = {
  slug: 'federal-spending-florida-vs-texas',
  title: 'Florida vs. Texas: Two Models of Federal Spending',
  description:
    'Florida vs. Texas federal spending compared: Texas leads on defense, Florida on retirees — and the per-person winner depends on how you count.',
  keyword: 'florida vs texas federal spending',
  category: 'Comparisons',
  datePublished: '2026-11-07',
  dateModified: '2026-11-07',
  readingTime: estimateReadingTime(sections),
  quickTakeaways: [
    { label: '$119B vs $97B', text: 'Modeled federal spending: Texas ~$119B, Florida ~$97B in FY2026 — Texas leads on the total, Florida leads per person ($4,300 vs $3,900).' },
    { label: '2x on defense', text: 'Texas gets $67.1B in defense spending — double Florida\'s $33.5B — with the F-35 plant and the Army\'s biggest posts.' },
    { label: '~$123B in checks', text: 'Social Security pays 5.4M Floridians about $123B a year — more than Florida\'s entire modeled federal footprint.' },
    { label: '22.8% vs 14.9%', text: 'Florida has 22.8% of its population 65+, Texas 14.9% — the age gap behind the two states\' different federal models.' },
  ],
  sections,
  faqs: [
    {
      question: 'Which state gets more federal money, Florida or Texas?',
      answer:
        'Texas gets more in total — roughly $119 billion modeled against Florida\'s $97 billion in FY2026 — because it has about 8 million more people. But Florida gets more per person: about $4,300 per resident vs. Texas\'s $3,900 on our modeled basis, and $15,092 vs. $10,686 in FY2025 federal award data. Both measures agree on the direction; the size of Florida\'s per-person lead depends on which measure you use.',
    },
    {
      question: 'Why does Florida get more federal money per person than Texas?',
      answer:
        'Age. 22.8% of Floridians are 65 or older, against 14.9% of Texans (Census QuickFacts). The two largest federal programs — Social Security ($1,667.1B nationally in FY2026) and Medicare ($1,072.6B) — pay out by age, so Florida\'s retiree-heavy population pulls in far more per resident. Social Security alone pays 5.4 million Floridians about $123 billion a year on an annualized basis.',
    },
    {
      question: 'Which state gets more defense spending, Florida or Texas?',
      answer:
        'Texas, by about two to one. Defense-military spending in Texas was $67.1 billion in FY2026 through August 31 — the largest share of any state — against $33.5 billion in Florida, fourth nationally. Texas hosts 15 major installations including Fort Cavazos and Joint Base San Antonio, plus the F-35 assembly plant in Fort Worth; Florida hosts 20 installations, led by MacDill AFB\'s two combatant-command headquarters.',
    },
    {
      question: 'Why do different sources give such different totals for each state?',
      answer:
        'They count different things. Our modeled totals ($119B Texas, $97B Florida) allocate national Treasury outlays by population for comparison. USAspending.gov award data ($311.4B Texas, $325.1B Florida in FY2025) counts contracts, grants, loans, and direct payments actually obligated by recipient location, including multi-year awards at full value. Both are accurate within their own definitions — compare within one method, never across methods.',
    },
    {
      question: 'What is the biggest single federal flow into each state?',
      answer:
        'For Florida it is Social Security: about $123 billion a year annualized to 5.4 million beneficiaries. For Texas it is defense: $67.1 billion in FY2026 through August 31, the largest state defense total in the country. Florida\'s biggest flow is an entitlement that arrives automatically every month; Texas\'s is the product of basing decisions and the F-35 production line in Fort Worth.',
    },
    {
      question: 'Do one-time events like the border grant or hurricanes change the comparison?',
      answer:
        'They move a single year\'s numbers but not the structural picture. Texas\'s $7.5 billion DHS border reimbursement (September 2026) was a one-time grant, not recurring spending. Florida\'s hurricane recovery — over $10 billion in flood-insurance losses from Helene and Milton — trails for years but spikes in storm years. Strip out the one-offs and the underlying models remain: Texas is defense and scale, Florida is retirees and health.',
    },
  ],
  sources: [
    {
      name: 'U.S. Census Bureau — QuickFacts, Florida and Texas (population, 65+ share)',
      url: 'https://www.census.gov/quickfacts/fact/table/FL,TX,WI,NE,UT/PST120224',
    },
    {
      name: 'PlainSpending — Federal Spending by State, FY2025 (USAspending.gov award data)',
      url: 'https://plainspending.com/',
    },
    {
      name: 'Visual Capitalist — America\'s $31 Trillion Economy by State (BEA 2025 GDP)',
      url: 'https://www.visualcapitalist.com/americas-31-trillion-economy-by-state/',
    },
    {
      name: 'Federal Funds Information for States — Federal Grants Per Capita, FY2025',
      url: 'https://ffis.org/special-analysis/percapitafy2025/',
    },
  ],
  relatedSlugs: ['federal-spending-florida', 'federal-spending-texas', 'social-security-vs-defense-spending', 'where-does-us-federal-budget-go'],
};
