import type { ArticleData } from '../types';
import { estimateReadingTime } from '../types';

const sections: ArticleData['sections'] = [
  {
    id: 'the-30-second-version',
    heading: 'How the Federal Budget Works: The 30-Second Version',
    paragraphs: [
      'On paper, the U.S. federal budget is built in five steps. The President sends Congress a budget request in February. The House and Senate write a budget resolution that sets an overall spending target. The Appropriations Committees divide that target among 12 subcommittees, each of which writes one funding bill. Both chambers pass all 12 bills and iron out the differences. And the President signs them before October 1, the day the federal fiscal year begins. This textbook sequence is called "regular order," and it is the process the Congressional Budget and Impoundment Control Act of 1974 prescribed.',
      'In practice, 2026 ran on the fallback playbook instead. January and February brought two shutdowns: a four-day lapse touching roughly half of all federal departments, then a 76-day shutdown of the Department of Homeland Security — the longest shutdown of a single department since the modern budget process began. Those followed a 43-day full shutdown in the fall of 2025, the longest at the time. And when fiscal 2027 began on October 1, 2026, Congress had finished none of the 12 regular appropriations bills, so the government opened the year on a continuing resolution that freezes funding at last year\'s levels through December 11. This article walks through the process as designed, the escape hatches used when it breaks down, and the part of the budget the process never actually touches.',
    ],
    callout: {
      type: 'info',
      text: 'All spending figures below are the site\'s verified Treasury actuals unless labeled otherwise: $6.81 trillion in outlays through August 31, 2026. The Treasury\'s September finals for full-year FY2026 — $7.396 trillion in outlays, $5.403 trillion in receipts, a $1.992 trillion deficit — were released October 16, 2026.',
    },
  },
  {
    id: 'step-one-the-presidents-request',
    heading: 'Step 1: The President Proposes (the Wish List)',
    paragraphs: [
      'The cycle starts inside the executive branch, almost a full year before the money flows. Around July, the White House Office of Management and Budget (OMB) gives every federal agency its funding guidance for the coming fiscal year. Agencies spend the fall building their requests; OMB adjudicates disputes and makes the final calls. Then the President submits a detailed budget request to Congress on or around the first Monday in February — the moment that officially kicks off the congressional budget season, per the National Science Foundation\'s account of the process.',
      'Here is the most misunderstood part: the President\'s budget is a proposal, not a law. The Constitution gives Congress — not the President — the power of the purse; no federal dollar can be spent without an appropriation. A President can ask for sweeping increases or cuts, and Congress is free to ignore them entirely. What the request does establish is the opening position: it tells Congress and the public what the administration wants, frames the year\'s debate, and gives the CBO a policy package to score against its economic baseline. Presidents almost never get what they ask for, and they are never entitled to it.',
      'The request also matters because it forces a number onto the table. The Treasury paid out $6.81 trillion through August 2026 — a number so large that every proposal is really an argument about the margins. The full picture of where those dollars go is at /spending-breakdown.',
    ],
  },
  {
    id: 'step-two-the-budget-resolution',
    heading: 'Step 2: Congress Sets the Top Line (the Budget Resolution)',
    paragraphs: [
      'Once the President\'s request lands, the House and Senate Budget Committees each draft a budget resolution — a blueprint that sets overall spending, revenue, and debt targets for the coming years. A conference committee reconciles the two chambers\' versions into a single concurrent resolution, which Congress is supposed to adopt by April 15. Crucially, this resolution never goes to the President\'s desk: it is not a law. It is Congress\'s internal agreement on how much it plans to spend, and it exists mostly to give the rest of the process a target to aim at.',
      'The resolution\'s most practical product is a number called the 302(a) allocation — the maximum discretionary spending the Appropriations Committees are allowed to hand out. That total is then divided among the 12 appropriations subcommittees into 302(b) allocations: the strict ceiling for each subcommittee\'s bill. If a subcommittee wants to add money to one program, it has to take it from another program under the same ceiling. This is the mechanism that turns the abstract top line into a zero-sum fight between programs.',
      'A budget resolution can also carry reconciliation instructions — the filibuster-proof fast track that lets the Senate change mandatory spending or taxes with a simple majority instead of 60 votes. That is how most big mandatory-program changes actually happen, and it is the reason the budget resolution is sometimes the most powerful document of the year even though it is not law.',
    ],
  },
  {
    id: 'step-three-the-12-appropriations-bills',
    heading: 'Step 3: The 12 Bills That Actually Move Money',
    paragraphs: [
      'This is the heart of the process. The House and Senate Appropriations Committees each run 12 subcommittees, one for each funding bill: Agriculture; Commerce, Justice and Science (which funds NASA and the NSF); Defense; Energy and Water; Financial Services; Homeland Security; Interior and Environment; Labor, Health and Human Services, and Education; the Legislative Branch; Military Construction and Veterans Affairs; State and Foreign Operations (renamed National Security, Department of State, and Related Programs in the 119th Congress); and Transportation, Housing and Urban Development. Each subcommittee holds hearings, "marks up" its bill with amendments, and the full committee approves it for a floor vote.',
      'Then each chamber debates and passes its versions of the 12 bills, and the differences have to be reconciled — through a formal conference committee or through amendments ping-ponging between chambers — so both houses pass identical text before it goes to the President. Because that is 12 bills times two chambers times countless amendments, Congress routinely bundles: several bills merged into a "minibus," or all of them into one giant "omnibus" spending package.',
      'One more distinction matters here: authorizing vs. appropriating. Authorizing committees (like Armed Services or Health, Education, Labor and Pensions) write the laws that create programs and set policies — and they can authorize funding levels. But the Appropriations Committees actually provide the money, and, as Taxpayers for Common Sense notes, they routinely ignore the authorization levels. Authorization without appropriation is a promise without a check. And the chart below shows the lopsided reality of what the appropriations process funds: defense dominates, because roughly half of all discretionary spending is defense spending.',
    ],
    chart: {
      title: 'What the Appropriations Process Funds: Largest Categories, FY2026 FYTD ($B)',
      caption:
        'U.S. Treasury Monthly Treasury Statement, Table 9, fiscal year-to-date through August 31, 2026. Outlay figures by category, not bill totals; defense outlays are almost entirely discretionary (CBO classification).',
      type: 'bar',
      unit: '$B',
      data: [
        { label: 'Defense / Military', value: 876.2 },
        { label: 'Veterans Affairs', value: 395.6 },
        { label: 'Infrastructure', value: 126.4 },
        { label: 'Education & Training', value: 92.0 },
        { label: 'Food Assistance', value: 51.0 },
        { label: 'Science & Research', value: 36.2 },
      ],
    },
  },
  {
    id: 'step-four-the-deadline-and-the-fallout',
    heading: 'Steps 4–5: Sign by October 1 — or the Fallbacks Kick In',
    paragraphs: [
      'The finish line is fixed: the federal fiscal year starts October 1, and all 12 bills are supposed to be signed into law by then. When that does not happen — which is now the norm rather than the exception — Congress has two fallback tools. The first is the continuing resolution (CR): a short-term bill that keeps funding agencies at roughly the prior year\'s levels until a full agreement is reached. CRs are how the government has started most recent fiscal years; they keep the lights on but freeze priorities in place, since agencies cannot start new programs or shift money to new needs under most CRs.',
      'The second fallback is the shutdown. If October 1 arrives with no appropriations and no CR, agencies lose legal authority to spend and must send non-essential workers home. Only the discretionary slice of the budget can shut down — mandatory programs like Social Security and Medicare keep paying because their authority comes from permanent law. 2026 provided a live demonstration. After the killing of Alex Pretti by Customs and Border Protection agents, Senate Democrats withdrew support for the Homeland Security appropriations bill, and a first shutdown ran January 31 to February 3, touching about half of all federal departments. When reform negotiations failed during the two-week extension, a second shutdown began February 14 — limited to the Department of Homeland Security but stretching 76 days until April 30, the longest shutdown of a single federal department since the modern budget process began in 1974.',
      'Then came the FY2027 deadline. Congress had passed none of the 12 regular appropriations bills on time — only three had cleared the House, and the Senate had not brought them to the floor — so lawmakers passed the Continuing Appropriations and Extensions Act, 2027 (H.R. 6500), signed in early September 2026 with overwhelming bipartisan votes: 90–6 in the Senate and 370–48 in the House. It funds the government at FY2026 levels through December 11, 2026. With Congress in recess until after the November midterms, the remaining 11 appropriations bills — or another stopgap — must clear between election day and December 11. The shutdown history behind all of this is part of the explainer at /blog/deficit-vs-debt-vs-interest-explained.',
    ],
    chart: {
      title: 'When the Process Broke: Shutdown Days, Fall 2025 – Spring 2026',
      caption:
        'Shutdown durations from Wikipedia\'s compilation of the 2026 federal government shutdowns and contemporary coverage. The DHS shutdown (Feb 14–Apr 30) was the longest single-department lapse since the 1974 budget process began.',
      type: 'bar',
      unit: 'days',
      data: [
        { label: 'Fall 2025 full shutdown (43 d)', value: 43 },
        { label: 'Jan–Feb 2026 partial (4 d)', value: 4 },
        { label: 'Feb–Apr 2026 DHS (76 d)', value: 76 },
      ],
    },
  },
  {
    id: 'the-part-the-process-never-touches',
    heading: 'The Part the Budget Process Never Touches: The Autopilot',
    paragraphs: [
      'Here is the twist that reframes everything above: the entire appropriations drama — the 12 bills, the subcommittees, the October deadline, the shutdown fights — is a battle over roughly one-quarter of the budget. Under the CBO\'s February 2026 baseline, fiscal 2026 outlays split into $4.53 trillion of mandatory spending (61%), $1.88 trillion of discretionary spending (25%), and $1.04 trillion of net interest (14%). Only the discretionary 25% goes through the appropriations process. Everything else runs on autopilot: benefit formulas for Social Security, Medicare, and Medicaid write their own checks, and interest on the debt is owed to bondholders no matter what Congress does.',
      'That means the process described in this article has enormous political weight and limited fiscal leverage. Congress can shut down the government over the appropriations bills — and in 2026 it repeatedly did — while three-quarters of federal spending continues exactly as the formulas dictate. Reforming the autopilot requires rewriting the underlying laws, usually through the reconciliation path from Step 2, not through the 12 appropriations bills.',
      'So when the next October deadline approaches — December 11, 2026, this time — the useful question is not just "will they pass the bills?" but "which quarter of the budget are they actually arguing about?" The answer, every year, is the smallest one. For the mechanics of that autopilot spending, see /blog/what-is-mandatory-vs-discretionary-spending; for the interest line that now rivals defense, see /blog/us-debt-interest-vs-defense-spending.',
    ],
    chart: {
      title: 'The Budget Congress Debates vs. the Autopilot ($T, FY2026 Projections)',
      caption:
        'Congressional Budget Office, The Budget and Economic Outlook: 2026 to 2036 (February 2026) — projected full-year FY2026 outlays of $7.45T. Only discretionary spending goes through the 12-bill appropriations process. CBO projections, not final results.',
      type: 'bar',
      unit: '$T',
      data: [
        { label: 'Mandatory (autopilot)', value: 4.53 },
        { label: 'Discretionary (the 12 bills)', value: 1.88 },
        { label: 'Net interest (owed)', value: 1.04 },
      ],
    },
  },
];

export const data: ArticleData = {
  slug: 'how-federal-budget-process-works',
  title: 'How the Federal Budget Process Actually Works',
  description:
    "How does the federal budget work? The five steps from the President's February request to 12 appropriations bills — and why FY2027 runs on a stopgap.",
  keyword: 'how does the federal budget work',
  category: 'Explainers',
  datePublished: '2026-10-24',
  dateModified: '2026-10-24',
  readingTime: estimateReadingTime(sections),
  quickTakeaways: [
    {
      label: 'The 5 steps',
      text: "President's February request → congressional budget resolution → 12 appropriations bills → both chambers reconcile → President signs by October 1. That is the textbook version; 2026 did not follow it.",
    },
    {
      label: 'Only 25% is debated',
      text: 'Under the CBO\'s FY2026 projection, 61% of spending is mandatory autopilot and 14% is interest. The entire appropriations process — all 12 bills — is a fight over the remaining 25%.',
    },
    {
      label: 'Right now',
      text: 'FY2027 began October 1, 2026 with none of the 12 regular bills passed. The government is running on a continuing resolution (H.R. 6500) at FY2026 levels through December 11, 2026.',
    },
    {
      label: "2026's record",
      text: 'Two shutdowns in 2026: four days in Jan–Feb touching half of all departments, then a 76-day DHS shutdown — the longest single-department lapse since the modern budget process began in 1974.',
    },
  ],
  sections,
  faqs: [
    {
      question: 'What happens if Congress misses the October 1 budget deadline?',
      answer:
        'Two fallbacks exist. Congress can pass a continuing resolution (CR) that keeps funding agencies at roughly last year\'s levels temporarily — this is how FY2027 started, with a CR running through December 11, 2026. If there is no CR either, agencies lose spending authority and the government shuts down: non-essential workers are furloughed until appropriations resume. Only discretionary spending can shut down.',
    },
    {
      question: "What's the difference between a budget resolution and an appropriations bill?",
      answer:
        'A budget resolution is Congress\'s internal spending blueprint: it sets overall targets and is never signed by the President, so it is not law. Appropriations bills are laws — one per subcommittee, 12 in total — that actually grant agencies the legal authority to spend. The resolution sets the ceiling; the bills hand out the money under it.',
    },
    {
      question: 'What is a continuing resolution?',
      answer:
        'A continuing resolution is a short-term funding bill that keeps federal agencies operating at roughly the prior fiscal year\'s funding levels while Congress negotiates the full appropriations bills. The current one, the Continuing Appropriations and Extensions Act, 2027 (H.R. 6500), funds the government through December 11, 2026. CRs prevent shutdowns but freeze priorities — agencies generally cannot start new programs under them.',
    },
    {
      question: 'What is the difference between authorizing and appropriating?',
      answer:
        'Authorizing laws create programs, set their policies, and can authorize funding levels — handled by committees like Armed Services or Health, Education, Labor and Pensions. Appropriations bills actually provide the money, handled by the Appropriations Committees. Appropriators routinely ignore authorization levels, so a program can be fully authorized and still unfunded.',
    },
    {
      question: 'How much of the budget does the annual budget process actually decide?',
      answer:
        'About 25% — the discretionary slice, roughly $1.88 trillion of $7.45 trillion in projected FY2026 outlays (CBO February 2026 baseline). Mandatory spending ($4.53 trillion, including Social Security and Medicare) runs on autopilot under permanent law, and net interest ($1.04 trillion) is owed to bondholders regardless. The annual fight is over the smallest bucket.',
    },
    {
      question: 'When does the federal fiscal year start?',
      answer:
        'October 1. The federal fiscal year runs October 1 through September 30, so FY2027 began October 1, 2026 and ends September 30, 2027. Congress is supposed to finish all 12 appropriations bills by the October 1 start date — a deadline it has missed for most recent fiscal years, relying instead on continuing resolutions or facing shutdowns.',
    },
  ],
  sources: [
    {
      name: 'National Science Foundation — "The Federal Budgeting and Appropriations Process"',
      url: 'https://www.nsf.gov/about/budget/process',
    },
    {
      name: 'USAFacts — "What are congressional appropriations (spending) bills and how are they approved?"',
      url: 'https://usafacts.org/articles/what-are-appropriations-bills-and-how-are-they-approved/',
    },
    {
      name: 'ASME — "Congress Prevents Government Shutdown and Delays OMB Rule" (H.R. 6500 details)',
      url: 'https://www.asme.org/government-relations/policy-impact/congress-prevents-government-shutdown-and-delays-omb-rule',
    },
    {
      name: 'Ballotpedia News — "Stopgap funding bill delays OMB grants rule until December 11"',
      url: 'https://news.ballotpedia.org/2026/09/25/stopgap-funding-bill-delayes-omb-grants-rule-until-december-11/',
    },
  ],
  relatedSlugs: [
    'what-is-mandatory-vs-discretionary-spending',
    'deficit-vs-debt-vs-interest-explained',
    'federal-deficit-2026-how-big',
  ],
};
