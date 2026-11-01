import type { ArticleData } from '../types';
import { estimateReadingTime } from '../types';

const sections: ArticleData['sections'] = [
  {
    id: 'the-short-answer',
    heading: 'Where Do Federal Taxes Go? The Short Answer',
    paragraphs: [
      'In fiscal year 2026, the federal government collected $5.403 trillion in taxes and other receipts — and spent $7.396 trillion. That gap is the whole story in one sentence: your federal taxes paid for about 73 cents of every dollar the government spent, and borrowing covered the other 27 cents. So when you ask where your federal taxes go, the honest answer is that they go everywhere the government spends, mixed together with borrowed money, because the Treasury does not stamp your tax payment and follow it to a single program.',
      'Still, the proportions are remarkably stable, and they tell you a lot about what the country actually prioritizes. Of every dollar spent in fiscal 2026, about 22.5 cents went to Social Security, 14.5 cents to Medicare, 13.9 cents to Medicaid and other health programs, 14.2 cents to interest on the national debt, and 13.1 cents to national defense. Those five items alone consumed more than 78 cents of every dollar. Everything else the federal government does — veterans\' benefits, highways, education, food assistance, courts, embassies, science, disaster relief — shared the remaining 22 cents.',
      'There is one important exception to the "mixed together" rule. Payroll taxes — the Social Security and Medicare taxes taken out of your paycheck — are earmarked by law for those two programs\' trust funds. Your income tax, by contrast, flows into the general fund and pays for everything else, from fighter jets to food assistance to interest payments. Understanding that split is the key to understanding where your money actually goes.',
    ],
    chart: {
      title: 'Where Each Dollar of Federal Spending Went, FY2026 (cents)',
      caption:
        'U.S. Treasury Monthly Treasury Statement, September 2026 finals. Shares of $7.396 trillion in total outlays; "all other programs" is the residual after the site\'s tracked categories.',
      type: 'bar',
      unit: '¢',
      data: [
        { label: 'Social Security', value: 22.5 },
        { label: 'Medicare', value: 14.5 },
        { label: 'Net interest', value: 14.2 },
        { label: 'Health (incl. Medicaid)', value: 13.9 },
        { label: 'Defense', value: 13.1 },
        { label: 'Veterans', value: 5.6 },
        { label: 'Transport', value: 1.9 },
        { label: 'Education', value: 1.5 },
        { label: 'Agriculture', value: 0.7 },
        { label: 'Science', value: 0.5 },
        { label: 'All other programs', value: 11.6 },
      ],
    },
  },
  {
    id: 'where-the-money-comes-from',
    heading: 'First, Where the Money Comes From',
    paragraphs: [
      'Before tracing where taxes go, it helps to see which taxes actually fund the government — because "federal taxes" is not one thing. Individual income taxes are by far the largest source: $2.846 trillion in fiscal 2026, about 52.7% of all receipts, up 7% from the year before on higher wages and salaries. If you file a tax return, this is the tax you feel most directly.',
      'Payroll taxes are the second pillar, at roughly $1.77 trillion, or about 33% of receipts. These are the Social Security payroll tax (12.4% of wages, split between worker and employer) and the Medicare payroll tax (2.9%), plus smaller retirement contributions. Social Security payroll taxes alone brought in about $1.3 trillion, and Medicare payroll taxes about $406 billion. Unlike income tax, payroll taxes are dedicated: by law they flow into the Social Security and Medicare trust funds, not the general fund.',
      'Everything else is small by comparison. Corporate income taxes fell to $381 billion in fiscal 2026, down from $452 billion the year before — a 16% drop that the Congressional Budget Office attributes to business tax changes in the 2025 reconciliation bill, which let companies take larger deductions for certain investments. Customs duties came to $173 billion, excise taxes (on fuel, tobacco, air travel, and the like) to $106 billion, and estate and gift taxes to $39 billion. The often-debated corporate tax, in other words, funds about 7 cents of every federal dollar collected; individual income and payroll taxes together fund about 86 cents.',
    ],
    chart: {
      title: 'Where Federal Revenue Came From, FY2026 (% of receipts)',
      caption:
        'U.S. Treasury Monthly Treasury Statement, September 2026 finals, via American Action Forum analysis. Shares of $5.403 trillion in total receipts; "other" includes Federal Reserve remittances and miscellaneous receipts.',
      type: 'bar',
      unit: '%',
      data: [
        { label: 'Individual income tax', value: 52.7 },
        { label: 'Payroll taxes', value: 32.8 },
        { label: 'Corporate income tax', value: 7.1 },
        { label: 'Customs duties', value: 3.2 },
        { label: 'Excise taxes', value: 2.0 },
        { label: 'Estate & gift taxes', value: 0.7 },
        { label: 'Other receipts', value: 1.5 },
      ],
    },
  },
  {
    id: 'the-big-three',
    heading: 'The Big Three: Retirement and Health Care Eat Half the Budget',
    paragraphs: [
      'Social Security is the single largest thing your taxes pay for: $1.667 trillion in fiscal 2026, or 22.5 cents of every dollar spent. That money goes almost entirely to monthly benefit checks for about 68 million retirees, survivors, and disabled workers. Because Social Security has its own payroll tax and trust funds, its financing is often debated separately from the rest of the budget — but in spending terms, it is simply the biggest line item, full stop. You can follow its numbers on this site at /categories/social-security-spending.',
      'Medicare is next at $1.073 trillion (14.5 cents), covering hospital stays, doctor visits, and prescription drugs for about 68.5 million people, mostly aged 65 and older. Part A hospital insurance is funded mainly by the Medicare payroll tax; Parts B and D — doctor visits and drugs — draw heavily on general revenue, which is why Medicare growth competes directly with every other priority funded from income taxes. Our companion article on Medicare\'s growth story at /blog/medicare-spending-growth-trend explains why the program keeps getting more expensive.',
      'Add Medicaid and other health programs — $1.026 trillion, or 13.9 cents — and the picture sharpens: Social Security plus health care consumed $3.766 trillion in fiscal 2026, just over half of everything the federal government spent. That is the structural reality of the modern federal budget. It is driven less by annual political choices than by demographics — an aging population drawing benefits and using more health care — and it is why debates about "cutting spending" rarely touch the largest categories: they are set by existing law, not by each year\'s appropriations bills. Our explainer at /blog/what-is-mandatory-vs-discretionary-spending breaks down that distinction.',
    ],
    bullets: [
      'Social Security: $1.667 trillion — 22.5¢ of every dollar spent.',
      'Medicare: $1.073 trillion — 14.5¢, covering about 68.5 million people.',
      'Medicaid and other health: $1.026 trillion — 13.9¢.',
      'Combined: $3.766 trillion, or 51% of all federal spending.',
    ],
  },
  {
    id: 'defense-interest-veterans',
    heading: 'Defense, Interest, and Veterans: The Next Tier',
    paragraphs: [
      'National defense cost $965 billion in fiscal 2026 — 13.1 cents of every dollar. That covers military pay and operations, weapons procurement, research, and the nuclear weapons program, and it is almost entirely discretionary spending: Congress votes on it fresh each year, which is why defense dominates the annual appropriations debate even though it is only the fifth-largest item overall.',
      'Here is the number that surprises most people: interest on the national debt cost more than defense. Net interest payments reached $1.052 trillion in fiscal 2026 — 14.2 cents of every dollar, and the first time interest has ever passed the trillion-dollar mark. That is the cost of servicing roughly $32 trillion of debt held by the public, at higher interest rates than the government enjoyed for most of the last decade. Interest is not a program anyone voted to expand; it is the bill for past deficits, and it now rivals the entire defense budget. We compared what a trillion dollars in interest could buy instead at /blog/interest-payments-vs-agency-budgets.',
      'Veterans\' benefits and services took another $416 billion (5.6 cents): disability compensation, pensions, VA health care, and education benefits for people who served. Together, defense, interest, and veterans account for about 33 cents of every dollar — and interest is the only one of the three that grows automatically, without any new decision, whenever rates rise or the debt grows.',
    ],
    chart: {
      title: 'The Next Tier: Defense, Interest, and Veterans, FY2026 ($B)',
      caption:
        'U.S. Treasury Monthly Treasury Statement, Table 9, September 2026 finals. Net interest passed $1 trillion for the first time in fiscal 2026, exceeding defense spending.',
      type: 'bar',
      unit: '$B',
      data: [
        { label: 'Net interest', value: 1051.8 },
        { label: 'Defense', value: 965.2 },
        { label: 'Veterans', value: 416.2 },
      ],
    },
  },
  {
    id: 'everything-else',
    heading: 'Everything Else: The 22 Cents That Cover the Rest of Government',
    paragraphs: [
      'After the five giants, the rest of the federal government shares about 22 cents of every dollar. Transportation and infrastructure took $143 billion (1.9 cents): highways, air traffic control, transit grants, and the Army Corps of Engineers\' water projects. Education, training, and social services took $108 billion (1.5 cents) — and note that this figure reflects a quirk of student-loan accounting that has swung education spending wildly in recent years, which we explained at /blog/student-loan-accounting-education-spending. Agriculture and food assistance took $53 billion (0.7 cents), and science, space, and technology $40 billion (0.5 cents).',
      'The remaining roughly 12 cents covers income security programs — unemployment insurance, retirement benefits for federal workers, and housing assistance — plus international affairs, the federal courts and law enforcement, disaster relief, and the basic machinery of government itself. One persistent myth is worth correcting here: international affairs, including foreign aid, is under 1% of the federal budget, even though surveys consistently find Americans guessing it is 20% or more. The things people argue about most loudly are often the smallest lines in the ledger.',
      'That distribution also explains why the federal budget feels so hard to change. Roughly two-thirds of spending is mandatory — set by existing law for Social Security, Medicare, Medicaid, and interest — and Congress only actively votes on the discretionary third each year. Cutting or expanding a small discretionary program, however visible, barely moves the total; the total moves when demographics, health costs, interest rates, or tax law change.',
    ],
    callout: {
      type: 'info',
      text: 'State-level figures on this site are modeled estimates, not Treasury data — but every national figure in this article comes from the Treasury Monthly Treasury Statement, September 2026 finals, the government\'s own ledger.',
    },
  },
  {
    id: 'why-taxes-dont-cover-it',
    heading: 'Why Your Taxes Don\'t Cover All of It',
    paragraphs: [
      'The final piece of the puzzle is the $1.992 trillion deficit: the difference between the $5.403 trillion collected and the $7.396 trillion spent. When spending exceeds receipts, the Treasury borrows the difference by selling bonds, and future taxpayers pay the interest — which is exactly why interest is now the third-largest budget item. The deficit grew by $217 billion from fiscal 2025\'s $1.775 trillion, because spending rose 5.5% while receipts rose only 3.2%.',
      'So the most accurate way to answer "where do my federal taxes go" is in two parts. Your payroll taxes go to Social Security and Medicare, by law, into their trust funds. Your income taxes go into the general fund, where they join corporate taxes, excise taxes, and customs duties — and, crucially, borrowed money — to pay for everything else, in roughly the proportions above: about 22 cents of each dollar to Social Security, 14 to Medicare, 14 to health programs, 14 to interest, 13 to defense, and the rest spread across everything else government does.',
      'If you want to check the numbers yourself, start with the Treasury\'s Monthly Treasury Statement data, then compare the category pages on this site — /categories/social-security-spending, /categories/medicare-spending, and /categories/net-interest-spending — and read our breakdown of the full-year totals at /blog/fy2026-federal-spending-final-numbers. The budget is public, the ledger is monthly, and the proportions change slowly — which is precisely why they are worth knowing.',
    ],
    callout: {
      type: 'warning',
      text: 'Every "cents per dollar" figure in this article is a share of spending, not of taxes. Because receipts covered only 73% of spending in fiscal 2026, a category that took 22.5¢ of each dollar spent was effectively funded about three-quarters by taxes and one-quarter by borrowing.',
    },
  },
];

export const data: ArticleData = {
  slug: 'where-do-federal-taxes-go',
  title: 'Where Do Federal Taxes Go? The 2026 Breakdown',
  description:
    'FY2026 taxes brought in $5.40T, but the government spent $7.40T. See where every tax dollar goes, from Social Security to interest.',
  keyword: 'where do federal taxes go',
  category: 'Explainers',
  datePublished: '2026-11-01',
  dateModified: '2026-11-01',
  readingTime: estimateReadingTime(sections),
  quickTakeaways: [
    {
      label: 'The headline',
      text: 'Federal receipts were $5.403 trillion in FY2026, but spending was $7.396 trillion — taxes covered 73¢ of each dollar spent, borrowing the other 27¢.',
    },
    {
      label: 'Where it comes from',
      text: 'Individual income tax supplied 52.7% of receipts ($2.846T) and payroll taxes 32.8% (~$1.77T); corporate tax was just 7.1%.',
    },
    {
      label: 'Where it goes',
      text: 'Social Security 22.5¢, Medicare 14.5¢, health programs 13.9¢, interest 14.2¢, and defense 13.1¢ of every dollar spent — over 78¢ combined.',
    },
    {
      label: 'The surprise',
      text: 'Interest on the debt ($1.052T) cost more than national defense ($965B) for the first time ever in FY2026.',
    },
  ],
  sections,
  faqs: [
    {
      question: 'Where do most federal tax dollars go?',
      answer:
        'Social Security is the largest destination at $1.667 trillion in fiscal 2026, or 22.5 cents of every dollar spent. Medicare (14.5 cents), Medicaid and other health programs (13.9 cents), interest on the national debt (14.2 cents), and national defense (13.1 cents) follow. Those five items together consumed more than 78 cents of every dollar the federal government spent.',
    },
    {
      question: 'Do my income taxes pay for Social Security?',
      answer:
        'Not directly. Social Security is funded mainly by payroll taxes — the 12.4% Social Security tax on wages — which flow by law into the Social Security trust funds. Your income tax goes into the general fund and pays for everything else: defense, health programs, veterans\' benefits, interest on the debt, and the rest of government. Medicare Part A works the same way via its payroll tax, while Medicare Parts B and D draw heavily on general revenue.',
    },
    {
      question: 'Why doesn\'t tax revenue cover all federal spending?',
      answer:
        'Because Congress authorizes more spending than the tax system collects. In fiscal 2026, receipts were $5.403 trillion against $7.396 trillion in spending — a $1.992 trillion deficit, up from $1.775 trillion in fiscal 2025. The Treasury borrows the difference by selling bonds, and the interest on that borrowing is itself now the third-largest budget item at $1.052 trillion.',
    },
    {
      question: 'What percentage of federal taxes goes to defense?',
      answer:
        'National defense took 13.1 cents of every dollar the government spent in fiscal 2026 ($965 billion). Because taxes covered only 73% of spending, the defense share of tax revenue alone is slightly higher in proportional terms — but the standard, comparable figure is the share of spending, which is how the Treasury and CBO report it. Defense is the fifth-largest budget item, behind Social Security, Medicare, interest, and health programs.',
    },
    {
      question: 'How much of the federal budget goes to foreign aid?',
      answer:
        'Far less than most people guess. International affairs — which includes embassies, diplomacy, and foreign aid — is under 1% of federal spending, even though surveys consistently find Americans estimating it at 20% or more. It sits inside the roughly 12 cents of each dollar that covers all programs outside the largest categories, alongside income security, courts, and disaster relief.',
    },
    {
      question: 'What is the difference between mandatory and discretionary spending?',
      answer:
        'Mandatory spending is set by existing law and paid automatically — Social Security, Medicare, Medicaid, and interest on the debt — and makes up roughly two-thirds of the budget. Discretionary spending is voted fresh by Congress each year through appropriations bills, and includes defense (the largest discretionary item) plus education, infrastructure, science, and agency operations. That is why most of the budget is not actually up for debate in any given year.',
    },
  ],
  sources: [
    {
      name: 'U.S. Department of the Treasury — Fiscal Data (Monthly Treasury Statement)',
      url: 'https://fiscaldata.treasury.gov/',
    },
    {
      name: 'American Action Forum — U.S. Treasury: FY 2026 Deficit Totaled $2 Trillion',
      url: 'https://www.americanactionforum.org/insight/u-s-treasury-fy-2026-deficit-totaled-2-trillion/',
    },
    {
      name: 'Dave Manuel — Where Your Tax Dollars Go: Complete Federal Budget Breakdown',
      url: 'https://www.davemanuel.com/where-tax-dollars-go-federal-budget-breakdown.php',
    },
    {
      name: 'Bipartisan Policy Center — Deficit Tracker',
      url: 'https://bipartisanpolicy.org/report/deficit-tracker/?ref=readtangle.com',
    },
  ],
  relatedSlugs: [
    'fy2026-federal-spending-final-numbers',
    'federal-deficit-2026-how-big',
    'what-is-mandatory-vs-discretionary-spending',
    'medicare-spending-growth-trend',
  ],
};
