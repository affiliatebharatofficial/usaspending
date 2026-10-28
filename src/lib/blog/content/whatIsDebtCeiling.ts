import type { ArticleData } from '../types';
import { estimateReadingTime } from '../types';

const sections: ArticleData['sections'] = [
  {
    id: 'the-30-second-version',
    heading: 'The Debt Ceiling in 30 Seconds',
    paragraphs: [
      'The debt ceiling is a legal cap, set by Congress, on the total amount of money the U.S. Treasury may borrow. It does not approve new spending, and it does not limit any single program. It limits borrowing to pay for spending Congress has already authorized in earlier laws. Think of it this way: Congress orders the meal in the budget process, then separately votes on whether to pay the credit card bill.',
      'Right now the ceiling stands at $41.104 trillion, set by the One Big Beautiful Bill Act of July 2025, which raised the limit by a record $5 trillion. Total federal debt closed fiscal 2026 at almost $40.2 trillion, according to the Bipartisan Policy Center, leaving roughly $0.9 trillion of headroom. At the current pace of borrowing, analysts expect the limit to bind again during 2027, which means another debt ceiling fight is less than a year away.',
      'When the ceiling is hit, the Treasury does not immediately default. It deploys accounting maneuvers called extraordinary measures that buy several months of breathing room. If Congress still has not acted when those run out, the government would be unable to borrow — and unable to pay some of its bills on time. That has never happened, and every standoff so far has ended with the ceiling raised or suspended before the deadline. The full story of the deficit that keeps pushing debt toward the ceiling is at /blog/federal-deficit-2026-how-big.',
    ],
    callout: {
      type: 'info',
      text: 'The ceiling covers gross federal debt: debt held by the public (sold to investors) plus intragovernmental holdings (securities held by government accounts such as the Social Security trust funds). A few tiny categories, such as some old U.S. Notes, are excluded.',
    },
  },
  {
    id: 'what-it-is-and-isnt',
    heading: 'What the Debt Ceiling Is — and What It Is Not',
    paragraphs: [
      'Four terms get tangled together in every debt ceiling story, so it helps to separate them. The budget is the plan: the spending and tax laws Congress passes each year. The deficit is the annual shortfall when spending exceeds revenue — about $2 trillion in fiscal 2026. The national debt is the running total of all past deficits minus surpluses, plus the borrowing needed to roll over maturing securities. The debt ceiling is the legal cap on that running total.',
      'The Government Accountability Office puts the distinction bluntly: the debt limit does not control or limit the ability of the federal government to run deficits or incur obligations. Rather, it is a limit on the ability to pay obligations already incurred. Refusing to raise the ceiling does not cancel a single dollar of spending Congress already approved; it only blocks the borrowing needed to pay for it.',
      'That is why economists across the political spectrum call the ceiling a backward-looking vote. The spending decisions were already made — Social Security benefits, military pay, interest on existing bonds, payments to contractors and hospitals. The ceiling vote decides whether the Treasury may borrow to honor them. It is also why the ceiling has no equivalent in most other countries: nearly everywhere else, authorizing spending automatically authorizes the borrowing to pay for it.',
      'The ceiling also does not work the way a household credit limit works. A household that hits its limit can stop spending. The federal government mostly cannot: benefit formulas, contracts, and interest payments are legal obligations that continue whether or not new borrowing is allowed. That mismatch — spending that cannot stop, borrowing that cannot start — is what makes a standoff dangerous.',
    ],
    chart: {
      title: 'How Close Is the Debt to the Ceiling? ($T)',
      caption:
        'Statutory limit $41.104T (One Big Beautiful Bill Act, July 2025); total public debt outstanding almost $40.2T at the close of FY2026, September 30, 2026 (Bipartisan Policy Center Deficit Tracker). Headroom of roughly $0.9T.',
      type: 'bar',
      unit: '$T',
      data: [
        { label: 'Total debt, Sep 2026', value: 40.2 },
        { label: 'Debt ceiling', value: 41.1 },
      ],
    },
  },
  {
    id: 'a-brief-history',
    heading: 'A Brief History: From $11.5 Billion to $41 Trillion',
    paragraphs: [
      'Before 1917 there was no debt ceiling at all. Congress authorized each loan individually, which worked fine when the government borrowed rarely. World War I changed that: financing the war required constant borrowing, so the Second Liberty Bond Act of 1917 let the Treasury issue bonds up to a set aggregate limit without asking Congress each time. The first ceiling was $11.5 billion.',
      'In 1939 Congress consolidated the patchwork of limits into a single cap on total debt, initially $45 billion. From there the ceiling grew with the country and its wars and recessions: about $300 billion after World War II, $1 trillion by 1981, $16.4 trillion in 2011, $31.4 trillion in 2021, and $41.1 trillion in 2025. All told, Congress has raised, extended, or suspended the limit roughly 100 times since 1917, under presidents of both parties — 18 times under Ronald Reagan, 8 times under Bill Clinton, 8 times under George W. Bush, and 3 suspensions under Donald Trump\'s first term alone.',
      'For most of that history the vote was routine. Things changed in the 1990s, when the ceiling became a bargaining chip: the 1995-96 standoff helped trigger two government shutdowns, and the Gephardt Rule — a House procedure that automatically deemed the ceiling raised when a budget passed — was repealed in 1995 after serving since 1979. Since 2013 Congress has mostly used suspensions rather than dollar-figure increases: a suspension lifts the cap until a set date, after which the ceiling resets to whatever the debt happens to be at that moment.',
      'The 2023 episode set the modern template. The government hit its $31.4 trillion ceiling in January 2023, the Treasury ran on extraordinary measures for five months, and the Fiscal Responsibility Act of June 2023 suspended the limit until January 2025. The 2025 reconciliation act then broke the pattern by raising the ceiling outright, by $5 trillion — the largest single increase in history, and the first dollar-figure raise since 2021.',
    ],
    chart: {
      title: 'The Debt Ceiling, Selected Milestones ($T)',
      caption:
        'Statutory debt limits at selected dates, 1917-2025. Early values are small relative to later ones — that is the point: the ceiling has grown roughly 3,500-fold. Sources: Congressional Research Service; U.S. Treasury.',
      type: 'line',
      unit: '$T',
      data: [
        { label: '1917', value: 0.01 },
        { label: '1939', value: 0.05 },
        { label: '1981', value: 1.0 },
        { label: '2011', value: 16.4 },
        { label: '2021', value: 31.4 },
        { label: '2025', value: 41.1 },
      ],
    },
  },
  {
    id: 'extraordinary-measures',
    heading: 'Extraordinary Measures: How the Treasury Buys Time',
    paragraphs: [
      'When debt approaches the ceiling, the Treasury Secretary notifies Congress and starts using extraordinary measures — a set of accounting tools Congress has authorized for exactly this situation. The main ones suspend certain investments: the Treasury stops reinvesting securities held by federal retirement funds and the Exchange Stabilization Fund, and suspends the daily reinvestment of the government securities fund used by federal employees\' retirement savings. Each move frees up room under the ceiling without changing what the government owes.',
      'These measures do not create money. They shuffle internal accounts to create borrowing headroom, and every dollar of suspended investment must be restored — with lost interest — once the ceiling is raised. They typically buy several months: since 2011, extraordinary measures have lasted anywhere from about five weeks to more than seven months, depending on tax receipts and spending. The date they run out is called the X-date, and it is genuinely uncertain until weeks beforehand, because it depends on the daily flow of tax revenue into the Treasury.',
      'The X-date is where the politics gets dangerous. Treasury secretaries warn of it in increasingly urgent letters, markets start pricing in risk, and the deadline can move suddenly — a strong April tax season can push it back by months, a weak one can pull it forward. In 2023 the X-date landed in early June; in 2011 the standoff ran until August 2, the day Treasury said it would run out of cash. The uncertainty itself has a cost: the Government Accountability Office estimated the 2011 delay added about $1.3 billion to federal borrowing costs, because investors demanded higher yields on Treasury securities during the standoff.',
    ],
    callout: {
      type: 'warning',
      text: 'Extraordinary measures are a countdown, not a solution. They do not reduce the debt, and once exhausted, the Treasury cannot borrow at all — it can only spend the cash it has on hand.',
    },
  },
  {
    id: 'what-happens-if-no-deal',
    heading: 'What Happens If Congress Does Not Act?',
    paragraphs: [
      'If the ceiling is not raised before the X-date, the Treasury would have to delay some payments — interest to bondholders, Social Security checks, military pay, payments to doctors, hospitals, and contractors. The Treasury has said it is not set up to prioritize payments, and it is unclear whether prioritizing would even be legal. In practice, bills would go unpaid in the order they came due.',
      'The United States has never defaulted on its debt obligations, and economists warn that doing so would be uniquely damaging because Treasury securities are the foundation of the global financial system. They are the asset banks, pension funds, and foreign central banks treat as risk-free; a missed payment would force a repricing of everything built on top of them. During the 2013 standoff, economists estimated that a prolonged payment freeze could contract GDP by around 7 percent — a larger contraction than during the Great Recession.',
      'Even stopping short of default has already cost the country. The 2011 standoff produced the first-ever downgrade of the U.S. credit rating, when Standard & Poor\'s cut the AAA rating to AA+ on August 5, 2011, citing political brinkmanship and a deficit deal that fell short of a comprehensive bargain. The Dow Jones Industrial Average fell 635 points the next trading day, one of its worst days on record. Fitch followed with a downgrade in 2023, and Moody\'s in 2025 — so by the time the current $41.1 trillion ceiling was set, the United States no longer held a top rating from any of the three major agencies.',
      'None of this is an argument that the ceiling is meaningless — it is the argument that it is a poor tool for its stated purpose. A vote meant to restrain borrowing arrives only after the borrowing has been committed to, and the penalty for voting no falls on people who had nothing to do with the spending: retirees, soldiers, bondholders, and federal workers. That is why proposals to abolish or reform the ceiling — from automatic increases tied to budget passage to letting the Treasury borrow to pay obligations Congress already approved — have supporters in both parties, even though none has passed.',
    ],
  },
  {
    id: 'why-it-keeps-coming-back',
    heading: 'Why the Ceiling Keeps Coming Back — and What to Watch',
    paragraphs: [
      'The ceiling returns because the deficit never went away. Through August 31, 2026, the Treasury collected $4.85 trillion and spent $6.81 trillion, a fiscal-year-to-date gap of about $1.97 trillion that had to be borrowed — see the full breakdown at /blog/fy2026-federal-spending-final-numbers. As long as the government runs deficits near $2 trillion a year, total debt grows by roughly that amount annually, and any fixed ceiling gets hit again within a few years. The $5 trillion increase of 2025 bought more time than usual, but at the current pace it covers only about two to three years of borrowing.',
      'The deeper driver is the interest bill itself. The Treasury paid $1.017 trillion in net interest through August 2026 — more than the entire defense budget for the same period — and interest has tripled since 2018. Every dollar of interest is itself borrowed money when the government runs a deficit, so the debt compounds: borrowing to pay interest on past borrowing. The crossover story is told in full at /blog/us-debt-interest-vs-defense-spending and /categories/net-interest-spending.',
      'What to watch next: the Treasury\'s monthly statements will show debt grinding toward $41.104 trillion through 2027, and the first warning letters from the Treasury Secretary will mark the start of the next standoff. The questions that matter are the same ones that mattered in 2011, 2013, and 2023: whether Congress raises or suspends the ceiling cleanly, whether it attaches spending conditions, and how close to the X-date the deal lands. The ceiling itself will not decide how much America spends — the budget does that. It only decides whether America pays the bills it already ran up.',
    ],
    chart: {
      title: 'Net Interest: The Bill That Pushes Debt Up ($B)',
      caption:
        'U.S. Treasury Monthly Treasury Statement, Table 9. FY2026 figure is fiscal-year-to-date through August 31, 2026 ($1,017B); earlier years are September finals derived from the site\'s MTS data. Interest has roughly tripled since 2018.',
      type: 'bar',
      unit: '$B',
      data: [
        { label: '2018', value: 325 },
        { label: '2020', value: 345 },
        { label: '2022', value: 475 },
        { label: '2024', value: 882 },
        { label: '2026 FYTD', value: 1017 },
      ],
    },
  },
];

export const data: ArticleData = {
  slug: 'what-is-debt-ceiling',
  title: 'The Debt Ceiling, Explained in Plain English',
  description:
    'What is the debt ceiling? A plain-English explainer: the $41.1 trillion limit, why Congress keeps raising it, and what happens if it does not.',
  keyword: 'what is the debt ceiling',
  category: 'Explainers',
  datePublished: '2026-10-28',
  dateModified: '2026-10-28',
  readingTime: estimateReadingTime(sections),
  quickTakeaways: [
    {
      label: 'The limit',
      text: 'The debt ceiling is $41.104 trillion, set by the July 2025 reconciliation act — a record $5 trillion increase.',
    },
    {
      label: 'The headroom',
      text: 'Total debt closed FY2026 at almost $40.2 trillion, leaving roughly $0.9 trillion before the ceiling binds, expected during 2027.',
    },
    {
      label: 'What it is not',
      text: 'It does not control spending. It limits borrowing to pay obligations Congress already approved — the GAO calls it a limit on paying, not on incurring.',
    },
    {
      label: 'The stakes',
      text: 'The U.S. has never defaulted, but the 2011 standoff cost a AAA downgrade and an estimated $1.3 billion in extra borrowing costs.',
    },
  ],
  sections,
  faqs: [
    {
      question: 'What is the debt ceiling in simple terms?',
      answer:
        'It is a law that caps the total amount the U.S. Treasury may borrow. When the national debt reaches the cap, the Treasury cannot issue new debt until Congress raises or suspends the limit. It is a cap on paying past bills, not a vote on future spending — the spending was already approved in earlier budget laws.',
    },
    {
      question: 'What is the current U.S. debt ceiling?',
      answer:
        'Since July 2025, the debt ceiling is $41.104 trillion, after the One Big Beautiful Bill Act raised it by $5 trillion — the largest single increase in history. Total federal debt stood at almost $40.2 trillion at the close of fiscal 2026 on September 30, 2026, leaving roughly $0.9 trillion of headroom.',
    },
    {
      question: 'What happens when the U.S. hits the debt ceiling?',
      answer:
        'First, the Treasury uses extraordinary measures — suspending certain internal investments — to keep paying bills, typically buying several months. If Congress still has not acted when those run out (the X-date), the Treasury cannot borrow and would have to delay payments, including interest to bondholders, Social Security checks, and military pay.',
    },
    {
      question: 'Has the U.S. ever defaulted on its debt?',
      answer:
        'No. The United States has never defaulted on its debt obligations, and every debt ceiling standoff so far — including 2011, 2013, and 2023 — ended with the ceiling raised or suspended before the deadline. The closest call was 2011, which still produced the first-ever downgrade of the U.S. credit rating by Standard & Poor\'s.',
    },
    {
      question: 'How often has the debt ceiling been raised?',
      answer:
        'Roughly 100 times since the first ceiling was set in 1917 at $11.5 billion, under presidents of both parties. Since 2013 Congress has mostly used suspensions instead of dollar-figure increases: a suspension lifts the cap until a set date, then resets the ceiling to the debt outstanding at that moment.',
    },
    {
      question: 'Does raising the debt ceiling increase the deficit?',
      answer:
        'No. Raising the ceiling neither increases nor decreases the deficit — the deficit is set by spending and tax laws. The ceiling only controls whether the Treasury can borrow to cover a deficit Congress has already created. That is why the Government Accountability Office describes it as a limit on the ability to pay obligations already incurred.',
    },
  ],
  sources: [
    {
      name: 'Wikipedia — "United States debt ceiling"',
      url: 'https://en.wikipedia.org/wiki/United_States_debt_ceiling',
    },
    {
      name: 'Bipartisan Policy Center — Deficit Tracker',
      url: 'https://bipartisanpolicy.org/report/deficit-tracker/',
    },
    {
      name: 'Congressional Research Service — "Votes on Measures to Adjust the Statutory Debt Limit, 1978 to Present"',
      url: 'https://www.everycrsreport.com/files/20180510_R41814_53a8ef2b8396aff45a4a5b7b81e6dc91ae2c3d33.html',
    },
    {
      name: 'U.S. Senate Committee on the Budget — "Debt Limit Extraordinary Measures"',
      url: 'http://www.budget.senate.gov/chairman/newsroom/budget-bulletins/debt-limit-extraordinary-measures',
    },
  ],
  relatedSlugs: [
    'deficit-vs-debt-vs-interest-explained',
    'federal-deficit-2026-how-big',
    'us-debt-interest-vs-defense-spending',
    'how-federal-budget-process-works',
  ],
};
