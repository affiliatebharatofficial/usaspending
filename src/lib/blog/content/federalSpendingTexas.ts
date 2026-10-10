import type { ArticleData } from '../types';
import { estimateReadingTime } from '../types';

const sections: ArticleData['sections'] = [
  {
    id: 'the-big-picture',
    heading: "Texas's $119 Billion Federal Footprint",
    paragraphs: [
      'Texas is one of the largest recipients of federal money in America. Our modeled figures put total federal spending flowing into the state at roughly $119 billion for fiscal 2026 — about 1.75% of the $6.81 trillion national total, spread across 30.5 million Texans at roughly $3,900 per resident. That absolute number is enormous; the per-person figure looks ordinary. Both facts are true at once, and understanding why is the key to reading Texas\'s federal footprint.',
      'The drivers are structural, not cyclical: some of the military\'s largest installations, NASA\'s human spaceflight headquarters, a 1,250-mile international border, and a defense manufacturing base anchored by the F-35 fighter production line in Fort Worth. Federal dollars reach Texas through base payroll, procurement contracts, civil-service employment, and grants — not a single channel. Explore the state breakdown at /states/texas and the full national budget at /spending-breakdown.',
      'An important honesty note before we go further: state-level figures are modeled estimates for comparison, not audited award records. They show the order of magnitude and the composition of the federal footprint; they are not a cash register. Where a figure comes from the Treasury\'s Monthly Treasury Statement (MTS), it is labeled FY2026 FYTD — October 1, 2025 through August 31, 2026, the latest published actuals.',
    ],
    callout: {
      type: 'info',
      text: 'All FY2026 figures cover October 1, 2025 through August 31, 2026 (335 days) — the latest Monthly Treasury Statement published. Full-year totals will be higher.',
    },
  },
  {
    id: 'military-footprint',
    heading: 'Fifteen Installations and a $151 Billion Ripple',
    paragraphs: [
      'Texas is home to 15 major U.S. military installations plus the Army Futures Command headquarters in Austin. A 2024 study by the Texas Comptroller of Public Accounts — commissioned by the Texas Military Preparedness Commission — found that these installations contributed at least $151.2 billion to the Texas economy in 2023 and supported more than 677,000 direct and indirect jobs across the state. Joint Base San Antonio alone accounted for $55.1 billion and 240,403 jobs; Fort Cavazos (formerly Fort Hood) in Central Texas contributed $39.1 billion and 173,730 jobs; Fort Bliss near El Paso added $27.9 billion and nearly 127,000 jobs.',
      'Be careful reading that number: $151.2 billion is economic output — the total ripple of base payroll, contractor spending, and the local businesses those support — not the federal government\'s checkbook outlay. It is a measure of how much Texas\'s economy depends on the federal military presence, not how much Washington spent. The actual defense outlay flowing to Texas is captured by a different figure: our defense category data puts $67.1 billion of defense spending in Texas in FY2026 FYTD, 7.7% of the national defense total — the largest share of any state.',
      'The installation list reads like a catalog of American military power. Fort Cavazos hosts multiple armored divisions and tens of thousands of active-duty personnel. Joint Base San Antonio combines Lackland Air Force Base — where every Air Force recruit trains — Randolph AFB, and Brooke Army Medical Center into one of the Defense Department\'s largest joint installations. Naval Air Station Corpus Christi and Naval Air Station Joint Reserve Base Fort Worth anchor naval aviation, while Dyess AFB, Sheppard AFB, Laughlin AFB, and Goodfellow AFB cover bombing, training, and intelligence missions. Red River Army Depot and the Corpus Christi Army Depot handle maintenance and overhaul. Full category data: /categories/defense-military.',
    ],
    chart: {
      title: 'Economic Impact of Texas Military Installations, 2023 ($B)',
      caption:
        'Texas Comptroller of Public Accounts study, 2023 data. Figures measure total economic output (direct, indirect, and induced effects) — not federal outlays.',
      type: 'bar',
      unit: '$B',
      data: [
        { label: 'Joint Base San Antonio', value: 55.1 },
        { label: 'Fort Cavazos', value: 39.1 },
        { label: 'Fort Bliss', value: 27.9 },
        { label: 'NAS JRB Fort Worth', value: 4.9 },
        { label: 'NAS Corpus Christi', value: 4.7 },
      ],
    },
  },
  {
    id: 'defense-manufacturing',
    heading: 'The Arsenal: F-35s Built in Fort Worth',
    paragraphs: [
      'Texas doesn\'t just host soldiers — it builds the weapons. The F-35 Lightning II, the Pentagon\'s largest procurement program and the most expensive weapons program in U.S. history (with lifetime costs estimated above $2 trillion), is assembled at Lockheed Martin\'s plant in Fort Worth. The factory supports a deep supply chain across North Texas, and in September 2025 the Pentagon finalized production Lots 18 and 19 with Lockheed — up to 296 jets, with deliveries beginning in 2026.',
      'That manufacturing weight shows up in the contractor numbers. Nationally, Lockheed Martin is the Defense Department\'s largest contractor at $48.5 billion, and procurement of weapon systems runs $168.4 billion nationwide — about a fifth of all defense spending. Boeing also has a meaningful Texas presence: $2.8 billion of its federal awards land in Texas, 9.9% of the company\'s national total, spanning sustainment work and aircraft programs.',
      'The result: Texas leads every state in defense-military spending at $67.1 billion, ahead of California ($60.8 billion) and Virginia ($57.2 billion). Defense operations and maintenance alone — the day-to-day cost of running bases and flying hours — is a $313 billion national category, and a large slice of it is spent keeping Texas installations running.',
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
    id: 'nasa-houston',
    heading: 'Houston: The Home of Human Spaceflight',
    paragraphs: [
      'The civilian federal footprint in Texas is defined by one institution: NASA\'s Lyndon B. Johnson Space Center in Houston. Established in 1961 as the Manned Spacecraft Center and renamed in 1973 for the late president and Texas native, Johnson has been the hub of U.S. human spaceflight for more than six decades — home of Mission Control, astronaut training, and the operational leadership of the International Space Station program.',
      'Every NASA crewed mission since Gemini IV in 1965 has been monitored in real time by flight controllers in Houston, including the Apollo Moon landings and 135 Space Shuttle missions between 1981 and 2011. Today the center leads International Space Station operations and development of the Orion spacecraft and the Gateway lunar outpost program, alongside the agency\'s Commercial Crew work. The 1,620-acre Clear Lake complex, with Ellington Field next door for astronaut training flights, anchors an aerospace ecosystem of contractors across the greater Houston area.',
      'Nationally, Science, Space & Technology is a small budget line — $36.2 billion in FY2026 FYTD, about half a percent of the federal total. Texas is where a disproportionate share of the human-spaceflight piece of that $36 billion is actually executed. It is the clearest case in the country of federal science spending as a defining local industry.',
    ],
  },
  {
    id: 'border',
    heading: 'The Border: A Federal Mission Unlike Any Other State',
    paragraphs: [
      'No other state shapes the federal budget map quite like Texas\'s 1,250-mile border with Mexico. Four of the nine southwest Border Patrol sectors are headquartered in Texas cities — El Paso, Del Rio, Laredo, and the Rio Grande Valley — and the Department of Homeland Security maintains thousands of personnel, ports of entry, and air and marine operations along the border. This operational footprint is a durable, decades-long commitment: it does not rise and fall with administrations the way funding debates suggest.',
      'In September 2026, the border produced a new kind of federal money flow in reverse: reimbursement. After Texas spent more than $10 billion of its own money on National Guard and Department of Public Safety border operations since 2021, Congress created the State Border Security Reinforcement Fund in the July 2025 reconciliation law — $10 billion at DHS and $3.5 billion at the Justice Department for states that spent on border enforcement. Texas submitted its reimbursement application in June 2026, and on September 18 the Department of Homeland Security confirmed a $7.5 billion award — three-quarters of the entire DHS fund in a single grant.',
      'The $7.5 billion is a one-time reimbursement, not recurring program spending, but it illustrates a truth about Texas\'s federal relationship: the border makes the state a uniquely large consumer of homeland security operations, and occasionally a uniquely large recipient of homeland security money. Border operations live inside the DHS budget rather than defense, but they are part of why Texas\'s federal footprint looks different from every other large state.',
    ],
    callout: {
      type: 'warning',
      text: 'The $7.5 billion border reimbursement is a one-time grant — not recurring annual spending. Do not annualize it into Texas\'s yearly federal total.',
    },
  },
  {
    id: 'per-resident',
    heading: 'Big State, Big Dollars, Modest Per-Person Numbers',
    paragraphs: [
      'Texas receives some of the largest absolute federal flows in the country — and has one of the most modest per-resident figures among large states. Our modeled estimate puts Texas at roughly $3,900 per resident, below Florida ($4,300), New York ($4,700), and Virginia ($5,100). That is mostly arithmetic: 30.5 million people is an enormous denominator, and a state with Texas\'s diversified economy absorbs federal dollars into energy, technology, manufacturing, and agriculture alongside the federal footprint.',
      'The statewide average also hides concentration. Defense-adjacent metro areas show how localized the effects are: San Antonio\'s "Military City USA" identity is built on Joint Base San Antonio\'s $55 billion economic footprint; Killeen-Temple exists largely in Fort Cavazos\'s orbit; the Dallas–Fort Worth corridor hosts the F-35 line and naval air installations. In these metros, federal money is the economy\'s backbone — even when the statewide per-person number looks ordinary.',
      'For a fair comparison, always benchmark Texas against other large states — California ($136.4 billion modeled total), Florida, New York — not against small states where a single lab or base makes per-capita figures soar. And remember the category mix: Texas\'s health spending ($66.2 billion in Medicaid-related flows, 7.1% of the national total) and transportation grants ($11.1 billion, 8.7%) ride alongside the famous bases and the space center. Texas isn\'t just a military state to the federal budget — it\'s a large, diverse customer of nearly everything the government does. Compare states at /states/texas and /states/california.',
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
  slug: 'federal-spending-texas',
  title: 'Federal Spending in Texas: Bases, NASA, and the Border',
  description:
    "Federal spending in Texas runs about $119B a year — from Fort Cavazos and the F-35 plant to NASA's Johnson Space Center and the 1,250-mile border.",
  keyword: 'federal spending in texas',
  category: 'State Spotlights',
  datePublished: '2026-10-10',
  dateModified: '2026-10-10',
  readingTime: estimateReadingTime(sections),
  quickTakeaways: [
    { label: '$119B', text: 'Modeled federal spending flowing into Texas in FY2026 — among the largest totals of any state.' },
    { label: '#1 in defense', text: '$67.1B in defense spending — the largest share of any state, with Fort Cavazos, JBSA, and the Fort Worth F-35 plant.' },
    { label: '$151B ripple', text: "Texas's 15 military installations generated $151.2B in economic output and 677,000 jobs in 2023 (Comptroller study)." },
    { label: '$7.5B border grant', text: 'DHS approved a $7.5B border-security reimbursement to Texas in September 2026 — three-quarters of a national fund.' },
  ],
  sections,
  faqs: [
    {
      question: 'How much federal spending does Texas receive?',
      answer:
        'Our modeled estimate puts total federal spending flowing into Texas at roughly $119 billion in FY2026 — about $3,900 per resident across 30.5 million Texans. State-level figures are modeled estimates for comparison, not audited award records. Texas ranks first among states in defense spending ($67.1 billion) and is a top-three recipient in Medicaid-related flows ($66.2 billion).',
    },
    {
      question: 'Why does Texas get so much federal defense spending?',
      answer:
        'Three structural reasons: Texas hosts 15 major military installations including some of the largest (Fort Cavazos, Joint Base San Antonio, Fort Bliss), it is home to major defense manufacturing including the F-35 assembly plant in Fort Worth, and its 1,250-mile border with Mexico requires a large Customs and Border Protection presence. These are long-term basing and industrial decisions, so the flows are stable year to year.',
    },
    {
      question: 'What does the $151 billion military figure actually mean?',
      answer:
        'It is economic output, not federal spending. The Texas Comptroller\'s 2023 study estimated that the population and employees affiliated with Texas military installations contributed $151.2 billion to the state economy and supported 677,022 jobs — counting base payroll plus the ripple through contractors and local businesses. The actual federal defense outlay in Texas is a different, smaller number ($67.1 billion FY2026 FYTD).',
    },
    {
      question: 'What is NASA\'s role in federal spending in Texas?',
      answer:
        'NASA\'s Johnson Space Center in Houston — established in 1961, home of Mission Control and astronaut training — is the agency\'s center for human spaceflight, leading International Space Station operations and the Orion and Gateway lunar programs. While NASA\'s national budget is small next to defense or health programs, the center makes Houston one of the few places where federal science spending is a defining local industry.',
    },
    {
      question: 'What is the $7.5 billion Texas border reimbursement?',
      answer:
        'After Texas spent over $10 billion of its own money on border operations since 2021, Congress created a $10 billion DHS reimbursement fund in its July 2025 reconciliation law. Texas applied in June 2026, and the Department of Homeland Security confirmed a $7.5 billion award on September 18, 2026. It is a one-time grant, not recurring annual spending.',
    },
    {
      question: 'How should I interpret the per-resident figure for Texas?',
      answer:
        'With the second-largest U.S. population, Texas\'s per-resident federal figure will always look lower than small states that host a major lab or base — the denominator is huge. Compare Texas against other large states (California, Florida, New York) for a fair read, and remember the state-level numbers are modeled estimates for comparison, not audited award records.',
    },
  ],
  sources: [
    {
      name: 'Office of the Texas Governor — $151.2B Economic Impact of Military Installations in Texas (2024)',
      url: 'https://gov.texas.gov/news/post/governor-abbott-announces-151.2-billion-economic-impact-of-military-installations-in-texas',
    },
    {
      name: 'NASA — About Johnson Space Center',
      url: 'https://www.nasa.gov/johnson/about-johnson/',
    },
    {
      name: 'Texans for Fiscal Responsibility — Texas Secures $7.5 Billion Federal Reimbursement (2026)',
      url: 'https://texastaxpayers.com/texas-secures-7-5-billion-federal-reimbursement/',
    },
    {
      name: 'Wikipedia — Lockheed Martin F-35 Lightning II (program cost and Fort Worth production)',
      url: 'https://en.wikipedia.org/wiki/Lockheed_Martin_F-35_Lightning_II',
    },
  ],
  relatedSlugs: ['us-debt-interest-vs-defense-spending', 'where-does-us-federal-budget-go'],
};
