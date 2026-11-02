import type { ArticleData } from '../types';
import { estimateReadingTime } from '../types';

const sections: ArticleData['sections'] = [
  {
    id: 'the-short-answer',
    heading: 'Federal Infrastructure Spending: The Short Answer',
    paragraphs: [
      'In fiscal year 2026, the federal government spent $142.9 billion on transportation and infrastructure — about 1.9 cents of every federal dollar, out of $7.396 trillion in total outlays. That works out to roughly $391 million a day, or about $4,530 every second, spent on the country\u2019s roads, bridges, buses, trains, airports, and waterways.',
      'One clarification up front: you will often see a smaller number, $126.4 billion, quoted for federal infrastructure spending. That is the Department of Transportation\u2019s share alone. The full transportation function in the Treasury\u2019s September 2026 Monthly Treasury Statement also includes spending outside DOT — most notably the Army Corps of Engineers\u2019 waterway and flood-control work — bringing the total to $142.9 billion. Both numbers are real; they just draw the boundary differently. This article uses the full $142.9 billion figure, and flags the DOT-only figure wherever it matters.',
      'The single most important thing to understand about this money is that Washington mostly does not build things itself. The federal government writes checks — overwhelmingly as grants to state and local governments — and states, counties, transit agencies, and airport authorities do the actual building. Federal infrastructure spending is therefore best understood as a funding pipeline, not a construction company.',
    ],
    chart: {
      title: 'Where the Department of Transportation\u2019s $126.4 Billion Went, FY2026 ($B)',
      caption:
        'Site data: Department of Transportation agency total and program breakdown, fiscal year 2026 (final, through September 30, 2026). Shares are of the DOT total; the remaining $16.5 billion of the $142.9 billion transportation function sits with other agencies.',
      type: 'bar',
      unit: '$B',
      data: [
        { label: 'Highway grants (FHWA)', value: 58.5 },
        { label: 'Transit grants (FTA)', value: 23.2 },
        { label: 'Aviation (FAA)', value: 20.7 },
        { label: 'Maritime & pipeline safety', value: 13.3 },
        { label: 'Rail & Amtrak (FRA)', value: 10.7 },
      ],
    },
  },
  {
    id: 'where-the-money-goes',
    heading: 'Where the Money Goes: Highways First, Everything Else Second',
    paragraphs: [
      'Highways dominate. Federal Highway Administration grants to states came to $58.5 billion in fiscal 2026 — 46.3% of the DOT total, and more than transit and aviation combined. That money flows through the Federal-Aid Highway Program, which reimburses states for construction, resurfacing, and bridge work on the Interstate system and other federally eligible roads. States choose the projects; Washington sets the rules and pays most of the bill, typically 80% of a project\u2019s cost, and 90% for Interstate work.',
      'Public transit is the second-largest slice at $23.2 billion (18.4%), distributed by the Federal Transit Administration to bus systems, subways, light rail, and commuter rail. Aviation follows at $20.7 billion (16.4%) through the Federal Aviation Administration, covering air-traffic control, airport grants, and safety programs. The remaining DOT dollars go to maritime programs and pipeline safety ($13.3 billion) and to rail, including Amtrak ($10.7 billion).',
      'The geography of this spending tracks population and economic size, but with a twist: big states get the biggest checks, yet the money matters most, per person, in places with long road networks and small populations. California received the largest state share at $13.3 billion (10.5% of the DOT total), followed by Texas at $11.1 billion, New York at $8.9 billion, Florida at $6.7 billion, and Illinois at $5.7 billion. Those five states together took about 36% of DOT funding.',
      'A useful comparison for scale: at $142.9 billion, transportation is a mid-sized federal function. It is roughly one-seventh the size of defense ($965.2 billion) and about one-seventh of net interest payments ($1.052 trillion), but larger than the entire federal education and training budget ($107.6 billion). It is also small next to what states and localities spend themselves — the federal government is a major funder of infrastructure, but state and local governments still pay the majority of total public infrastructure costs in America.',
    ],
    chart: {
      title: 'Top 5 States by Federal Transportation Funding, FY2026 ($B)',
      caption:
        'Site data: state shares of Department of Transportation funding, fiscal year 2026 (final). State-level figures on this site are modeled estimates — see the methodology page for how they are derived.',
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
    id: 'how-the-money-moves',
    heading: 'How the Money Actually Moves: Formula Grants, Competitive Grants, and Loans',
    paragraphs: [
      'Most federal highway and transit money arrives as formula grants: Congress sets a formula — based on lane-miles, vehicle-miles traveled, population, and similar factors — and each state gets its share automatically. States then program the money into projects through their own transportation departments, subject to federal planning and environmental rules. This is why a federal highway dollar can take years to become asphalt: the money is obligated when a project is approved, but it is only spent — counted as an outlay — as construction progresses and contractors are paid.',
      'A smaller but high-profile slice is awarded competitively. Programs like INFRA (Nationally Significant Multimodal Freight and Highway Projects) let the Department of Transportation pick individual projects on merit. In October 2026, for example, DOT awarded $426 million through INFRA to projects in 12 states, including $85.1 million for an eight-mile, four-lane highway in Kentucky and $85 million to add lanes along about 20 miles of Interstate 4 in Florida. Competitive grants are where the politics of infrastructure becomes visible: every award announcement is a ribbon-cutting in waiting.',
      'A third channel is financing rather than grants. The Transportation Infrastructure Finance and Innovation Act (TIFIA) program offers low-interest federal loans and loan guarantees, and the tax exemption for municipal bonds lets state and local governments borrow more cheaply. These tools do not show up as large outlays in the year they are issued — a loan is mostly repaid — but they leverage far more construction than the grant dollars alone would support. The federal role, in other words, is part checkbook, part bank.',
    ],
    bullets: [
      'Formula grants: the bulk of highway and transit funding, allocated by statute to every state.',
      'Competitive grants (e.g. INFRA, RAISE): DOT picks individual projects; $426 million awarded in October 2026 alone.',
      'Loans and tax preferences (TIFIA, municipal bonds): smaller outlays, larger leverage on total construction.',
    ],
  },
  {
    id: 'who-pays',
    heading: 'Who Pays: A Gas Tax Frozen Since 1993',
    paragraphs: [
      'Surface transportation is supposed to be paid for by its users. The Highway Trust Fund, created in 1956, collects federal fuel taxes — 18.3 cents per gallon on gasoline and 24.3 cents per gallon on diesel credited to the fund, plus a 0.1-cent surcharge for underground storage tank cleanup, for totals of 18.4 and 24.4 cents — and spends them on highways and transit. Of each gallon of gasoline taxed, 2.86 cents goes to the mass transit account and the rest to highways. Fuel taxes supply roughly 85% of what highway users pay into the fund.',
      'The problem is that those rates have not changed since 1993. They are fixed cents-per-gallon charges, not percentages of the price, so they do not rise with inflation or with fuel prices. Revenue grows only when more gallons are sold — and that link is breaking. Cars are more fuel-efficient than they were in 1993, electric vehicles pay no federal fuel tax at all, and the Federal Highway Administration projects vehicle-miles traveled will grow only about 0.6% a year through 2053, down from 1.8% a year in 1990–2019.',
      'Since 2001, dedicated revenues have stopped growing faster than spending. Congress has bridged the gap with transfers from the Treasury\u2019s general fund — $275.2 billion in total since 2008, including $118 billion authorized in the Infrastructure Investment and Jobs Act (IIJA) of 2021. The trust fund is no longer self-financing, and has not been for nearly two decades. Every dollar of general-fund transfer is a dollar that comes from income taxes rather than from road users.',
    ],
    callout: {
      type: 'warning',
      text: 'The federal gas tax has been 18.4 cents per gallon since 1993. Because it is not indexed to inflation, its purchasing power has steadily eroded while the cost of asphalt, steel, and labor has risen — the core reason the Highway Trust Fund now depends on general-fund transfers.',
    },
  },
  {
    id: 'the-trend',
    heading: 'The Trend: A COVID-Era Spike, Then a Plateau',
    paragraphs: [
      'Transportation spending has been remarkably flat in real terms for a decade, with one conspicuous exception. In fiscal 2018 it stood at about $93.2 billion. It jumped to $146.2 billion in fiscal 2020 — the pandemic year, when emergency relief and accelerated outlays pushed the function above its normal level — then settled back to $131.6 billion in 2022 and $137.1 billion in 2024, before reaching $142.9 billion in fiscal 2026.',
      'That plateau is deceptive, because it hides a composition change. The IIJA, enacted in November 2021, was the largest surface-transportation authorization in decades: $365.5 billion for highways over fiscal 2022–2026 ($303.5 billion from the Highway Trust Fund, $47.3 billion in advance general-fund appropriations, and $14.7 billion subject to future appropriations), plus $106.9 billion for transit. But authorizations are not outlays. Much of that money is still working its way through state project pipelines, which is why the outlay figures rise gradually rather than jumping the year the law passed.',
      'The IIJA also matters for what it did not do: it did not fix the Highway Trust Fund. Its $118 billion general-fund transfer was the largest single infusion yet, but it was a bridge, not a repair. When the IIJA\u2019s authorization expired at the end of fiscal 2026, the structural gap remained — and the next reauthorization inherits it.',
    ],
    chart: {
      title: 'Federal Transportation Spending by Fiscal Year ($B)',
      caption:
        'Site data: Monthly Treasury Statement Table 9 transportation-function outlays, fiscal years 2018–2026 (FY2026 final, through September 30, 2026). The FY2020 spike reflects pandemic-era outlays.',
      type: 'line',
      unit: '$B',
      data: [
        { label: '2018', value: 93.2 },
        { label: '2020', value: 146.2 },
        { label: '2022', value: 131.6 },
        { label: '2024', value: 137.1 },
        { label: '2026', value: 142.9 },
      ],
    },
  },
  {
    id: 'what-comes-next',
    heading: 'What Comes Next: The Reauthorization Cliff',
    paragraphs: [
      'The central question for fiscal 2027 and beyond is whether Congress will refill the Highway Trust Fund, shrink the program, or keep muddling through with general-fund transfers. The Congressional Budget Office\u2019s June 2026 baseline projects highway-account outlays of $62.2 billion in fiscal 2026 against receipts of only $41.6 billion, with the gap persisting every year after. The Congressional Research Service puts the five-year reauthorization gap at about $166 billion, and a six-year bill at about $199 billion, assuming spending stays at today\u2019s level adjusted for inflation.',
      'The House Transportation and Infrastructure Committee\u2019s answer, the BUILD America 250 Act, would authorize about $75 billion a year in Highway Trust Fund contract authority over five years, with no advance general-fund appropriations of the kind the IIJA included. It would also create a new revenue stream: an annual registration fee of $130 for battery-electric vehicles, rising to $150 by 2032, and $35 for plug-in hybrids, rising to $50 by 2031. Supporters frame it as fairness — EV drivers use the same roads without paying fuel tax. Critics note that, as written, the bill does not require the fee revenue to be deposited in the Highway Trust Fund at all.',
      'Other options on the table include raising the fuel tax — the CBO estimates that adding 15 cents per gallon and indexing it to inflation would raise roughly $21–23 billion a year through 2034 — shifting to mileage-based user fees, or simply accepting a smaller federal program and pushing more of the burden onto states. Whatever Congress chooses, the stakes are concrete: the trust fund balance is projected to approach zero by fiscal 2028, and without action, the Federal Transit Administration could have to delay payments in the third quarter of fiscal 2027, with highway payments at risk from early fiscal 2028.',
      'For readers trying to follow this story, the numbers to watch are simple: the trust fund balance, the annual gap between receipts and outlays, and the size of the next authorization. The $142.9 billion spent in fiscal 2026 is the baseline the next debate starts from — and the gas tax that was supposed to pay for it has not moved in 33 years.',
    ],
    bullets: [
      'Watch the trust fund balance: projected to approach zero by fiscal 2028 without action.',
      'Watch the reauthorization: a five-year bill faces a roughly $166 billion funding gap.',
      'Watch the revenue idea that wins: higher fuel taxes, EV fees, mileage fees, or more general-fund transfers.',
    ],
  },
];

export const data: ArticleData = {
  slug: 'highway-infrastructure-spending-explained',
  title: 'Federal Infrastructure Spending: How $143 Billion Moves',
  description:
    'Federal infrastructure spending hit $142.9 billion in FY2026 — highways, transit, airports — and why the Highway Trust Fund is running dry.',
  keyword: 'federal infrastructure spending',
  category: 'Data Stories',
  datePublished: '2026-11-02',
  dateModified: '2026-11-02',
  readingTime: estimateReadingTime(sections),
  quickTakeaways: [
    { label: 'FY2026 total', text: '$142.9 billion — 1.9% of all federal spending, or about $391 million a day.' },
    { label: 'Biggest slice', text: 'Highway grants at $58.5 billion, 46.3% of the Department of Transportation total.' },
    { label: 'Who pays', text: 'A gas tax frozen at 18.4 cents per gallon since 1993 — now propped up by $275 billion in general-fund transfers since 2008.' },
    { label: 'What is next', text: 'A $166 billion gap faces any five-year reauthorization; the trust fund balance nears zero by FY2028.' },
  ],
  sections,
  faqs: [
    {
      question: 'How much does the federal government spend on infrastructure?',
      answer:
        'In fiscal year 2026, federal transportation and infrastructure outlays totaled $142.9 billion, according to the Treasury\u2019s September 2026 Monthly Treasury Statement. The Department of Transportation accounted for $126.4 billion of that; the rest sits with other agencies, mainly the Army Corps of Engineers. That is about 1.9% of the $7.396 trillion federal budget.',
    },
    {
      question: 'What is the Highway Trust Fund?',
      answer:
        'The Highway Trust Fund, created in 1956, is the dedicated account that finances most federal highway and transit spending. It collects federal fuel taxes — 18.3 cents per gallon on gasoline and 24.3 cents on diesel — split between a highway account and a mass transit account (2.86 cents per gallon of gasoline). Since 2008 it has also received $275.2 billion in transfers from the Treasury\u2019s general fund because fuel-tax revenue no longer covers spending.',
    },
    {
      question: 'Why hasn\u2019t the gas tax kept up with road spending?',
      answer:
        'The federal gas tax is a fixed cents-per-gallon charge, not a percentage of the price, so it does not rise with inflation or fuel prices — and Congress has not raised it since 1993. Meanwhile, cars burn less fuel per mile, electric vehicles pay no fuel tax, and growth in driving has slowed. Revenue grows only when more gallons are sold, and that link is weakening every year.',
    },
    {
      question: 'Does the federal government build highways itself?',
      answer:
        'Almost never. Washington funds highways mainly through grants to state governments — $58.5 billion in fiscal 2026 via the Federal Highway Administration — and states design, contract, and build the projects, typically with the federal government paying 80% of the cost (90% for Interstate work). The federal role is funding, standards, and oversight, not construction crews.',
    },
    {
      question: 'What happens if the Highway Trust Fund runs out?',
      answer:
        'By law the fund cannot go negative, so without new revenue or transfers, payments would have to slow. The Congressional Research Service projects the Federal Transit Administration could face payment delays in the third quarter of fiscal 2027 and the Federal Highway Administration from early fiscal 2028. Congress has always intervened before that point so far — usually with another general-fund transfer.',
    },
    {
      question: 'How big was the Infrastructure Investment and Jobs Act?',
      answer:
        'The IIJA authorized $365.5 billion for highways over fiscal 2022–2026 and $106.9 billion for transit, the largest surface-transportation authorization in decades. But authorizations are not outlays: the money flows out gradually as states design and build projects, which is why federal transportation outlays rose to $142.9 billion in fiscal 2026 rather than jumping in 2022.',
    },
  ],
  sources: [
    { name: 'U.S. Treasury, Monthly Treasury Statement (FiscalData)', url: 'https://fiscaldata.treasury.gov/' },
    { name: 'Congressional Research Service, Funding and Financing Highways Under the IIJA', url: 'https://www.EveryCrsReport.com/reports/R47573.html' },
    { name: 'Congressional Budget Office, Highway Trust Fund Baseline Projections (June 2026)', url: 'https://www.cbo.gov/system/files/2026-06/51300-2026-06-highwaytrustfund.pdf' },
    { name: 'Federal Highway Administration, Federal Sources of Transportation Revenue', url: 'https://www.fhwa.dot.gov/ipd/value_capture/traditional_transportation_revenue/federal.aspx' },
  ],
  relatedSlugs: ['where-does-us-federal-budget-go', 'how-much-us-spends-per-second', 'what-is-debt-ceiling'],
};
