import type { ArticleData } from '../types';
import { estimateReadingTime } from '../types';

const sections: ArticleData['sections'] = [
  {
    id: 'the-short-answer',
    heading: 'How Much Is a Trillion Dollars? The Short Answer',
    paragraphs: [
      'One trillion dollars is $1,000,000,000,000 — a one followed by twelve zeros, or 10 to the power of 12. It is one thousand billion dollars, and also one million million dollars. Both descriptions are correct, and both fail to convey the size, because human brains did not evolve to feel the difference between a billion and a trillion. They sound like neighbouring words. They are not neighbouring numbers: a trillion is a thousand times bigger than a billion, and the gap between them is itself nearly the size of the entire annual federal budget of most countries.',
      'The fastest way to anchor it is against the federal budget, because that is where trillions actually live. In fiscal year 2026, the US federal government spent $7.396 trillion in total, according to the Treasury’s September 2026 Monthly Treasury Statement — the final statement of the fiscal year, published October 16, 2026. One trillion dollars is therefore about 13.5% of everything Washington spent in a year. Put the other way round, the federal government burns through a trillion dollars roughly every 49 days. At its fiscal 2026 pace of about $234,519 per second — $20.26 billion a day — a trillion is not an abstraction. It is seven weeks of running the country.',
      'Four individual pieces of the federal budget are each bigger than a trillion dollars on their own. Social Security cost $1.667 trillion in fiscal 2026, Medicare $1.073 trillion, net interest on the national debt $1.052 trillion, and Medicaid $1.026 trillion. National defense, at $965.2 billion, falls just short of the line — a useful reminder that “a trillion” is now the unit in which the biggest things government does are measured, not an extreme outlier. If you remember one sentence from this article, make it this one: a trillion dollars is about one-seventh of a year of the US federal government.',
    ],
    chart: {
      title: 'Federal Budget Items Measured Against One Trillion Dollars, FY2026 ($B)',
      caption:
        'Site data: Treasury Monthly Treasury Statement, September 2026 finals (fiscal year 2026, through September 30, 2026). The $1,000 billion reference bar is shown for scale; Social Security, Medicare, net interest, and Medicaid each exceed it.',
      type: 'bar',
      unit: '$B',
      data: [
        { label: 'Social Security', value: 1667.1 },
        { label: 'Medicare', value: 1072.6 },
        { label: 'Net interest', value: 1051.8 },
        { label: 'Medicaid', value: 1025.6 },
        { label: 'One trillion dollars', value: 1000 },
        { label: 'Defense', value: 965.2 },
      ],
    },
  },
  {
    id: 'time-is-the-best-ruler',
    heading: 'Time Is the Best Ruler: Seconds, Days, and Lifetimes',
    paragraphs: [
      'Mathematician John Allen Paulos, in his 1988 book “Innumeracy,” argued that the clearest way to feel a large number is to convert it into time. His ladder is still the best one ever written. A million seconds ago was less than two weeks ago — 11.6 days, to be precise. A billion seconds ago was about 31.7 years ago, in the mid-1990s. A trillion seconds ago was about 31,710 years ago — roughly 29,700 BC, long before farming, writing, or recorded history. Same unit, same counting, three utterly different eras. That is what a factor of a thousand, twice over, actually does.',
      'Spending rates tell the same story from the other direction. Spend a million dollars a day, every day, and a trillion dollars lasts about 2,740 years — you would have had to start before the Roman Republic to finish today. Spend $1,000 a day and it lasts about 2.7 million years, longer than the entire genus Homo has existed. Even at a million dollars an hour, around the clock, a trillion takes about 114 years to spend. These are not party tricks; they are the reason budget debates sound so strange. When a politician calls a $10 billion program “huge,” it is — for a person. For the federal government, it is less than half a day of spending.',
      'The per-person version is the most practical of all. A trillion dollars divided among roughly 342 million Americans is about $2,900 per person — every man, woman, and child. That is the right scale to keep in your head when a trillion-dollar figure flashes past in the news: ask what it means per person, and per day, and the number suddenly has edges. A trillion dollars is about $2,900 from each of us, or about 49 days of everything the federal government does.',
    ],
    bullets: [
      'A million seconds = 11.6 days. A billion seconds = 31.7 years. A trillion seconds = 31,710 years.',
      'Spending $1 million a day, a trillion lasts ~2,740 years. Spending $1,000 a day, it lasts ~2.7 million years.',
      'At the federal government’s fiscal 2026 pace ($234,519 per second), a trillion dollars lasts 49.4 days.',
      'Per person, a trillion dollars is about $2,900 for every American.',
    ],
  },
  {
    id: 'what-it-looks-like-in-cash',
    heading: 'What a Trillion Dollars Looks Like in Physical Cash',
    paragraphs: [
      'A single $100 bill is about 0.0043 inches thick — roughly the thickness of a sheet of good paper. Stack a million dollars in $100 bills and the pile stands about 3.6 feet tall, roughly waist height. Scale up to a billion and the stack is about 3,583 feet tall, higher than most mountains’ foothills and approaching the height of the tallest buildings several times over. Scale up once more, to a trillion, and the stack reaches about 679 miles into the sky — more than two and a half times the altitude of the International Space Station, and about eleven times the 62-mile boundary where the atmosphere gives way to space.',
      'Weight makes the same point differently. A US banknote weighs about a gram, whatever its denomination. A trillion dollars in $1 bills would weigh a million metric tons — about the weight of 150 Eiffel Towers, and far beyond anything that could ever be moved as cash. Even in $100 bills, a trillion weighs about 10,000 metric tons, which is why trillion-dollar sums exist only as ledger entries, never as physical money. Laid end to end rather than stacked, a trillion $1 bills would stretch roughly 97 million miles — farther than the distance from Earth to the Sun.',
      'None of this is how money actually works, of course, and that is part of the point. Physical analogies break down at this scale because the numbers were never physical to begin with. They are useful anyway, because they break the illusion that a billion and a trillion are “both just big.” One is a skyscraper. The other is low Earth orbit.',
    ],
    callout: {
      type: 'info',
      text: 'A billion dollars in $100 bills stacks about 0.68 miles high. A trillion stacks about 679 miles high. The jump from billion to trillion is not a step — it is a thousandfold leap, and every analogy in this article is just a different way of showing that same leap.',
    },
  },
  {
    id: 'a-trillion-in-the-federal-budget',
    heading: 'A Trillion Dollars Inside the Federal Budget',
    paragraphs: [
      'The federal budget is the one place where trillions are routine, which makes it the best measuring stick. Fiscal 2026 outlays of $7.396 trillion mean the government spent about $20.26 billion every day of the year. Measured in days of federal spending, Social Security alone consumed 82.3 days of the year, Medicare 52.9 days, net interest 51.9 days, and Medicaid 50.6 days. Defense, at 47.6 days, is the largest item that does not quite reach a trillion. A single trillion dollars buys 49.4 days — seven weeks — of the entire federal government, every agency, every program, every benefit check, all at once.',
      'The deficit gives a second measuring stick. The fiscal 2026 deficit was $1.992 trillion — the gap between $7.396 trillion spent and $5.403 trillion collected. In other words, the government borrowed almost exactly two trillion dollars in a single year, about 27% of everything it spent. When news reports say “the deficit is nearly $2 trillion,” they are saying the government overspent its income by two of the units this article is about. And the total national debt crossed $40 trillion in August 2026, closing the fiscal year at $40.17 trillion — roughly forty trillions stacked on top of each other, accumulated over the nation’s entire history.',
      'Smaller budget lines show the other end of the scale. The entire federal education and training budget was $107.6 billion in fiscal 2026 — about a tenth of a trillion. Science and medical research came to $39.9 billion, and federal transportation and infrastructure to $142.9 billion. These are enormous programs by any normal standard, and each one is a small fraction of a single trillion. That is why trillion-dollar debates feel so disconnected from daily life: the unit of account in Washington is roughly ten times the size of an entire cabinet department’s budget.',
    ],
    chart: {
      title: 'Days of FY2026 Federal Spending Each Item Represents',
      caption:
        'Site data: Treasury Monthly Treasury Statement, September 2026 finals. Days computed from fiscal 2026 outlays divided by the daily rate of $20.26 billion (total outlays $7.396 trillion over 365 days).',
      type: 'bar',
      unit: 'days',
      data: [
        { label: 'Social Security', value: 82.3 },
        { label: 'Medicare', value: 52.9 },
        { label: 'Net interest', value: 51.9 },
        { label: 'Medicaid', value: 50.6 },
        { label: 'One trillion dollars', value: 49.4 },
        { label: 'Defense', value: 47.6 },
      ],
    },
  },
  {
    id: 'how-fast-trillions-pile-up',
    heading: 'How Fast Trillions Pile Up: The Debt Story',
    paragraphs: [
      'If a trillion is hard to picture, the speed at which trillions now accumulate is harder still. The national debt grew by $2.53 trillion during fiscal 2026 alone, from $37.64 trillion to $40.17 trillion — roughly $6.9 billion a day, every day, for a year. It crossed the $40 trillion mark on August 18, 2026, and by late October 2026 Treasury’s daily record put it above $40.5 trillion. At that pace, a fresh trillion of debt arrives roughly every five months. The debt is not one trillion; it is forty of them, and the pile is growing by about two and a half trillions a year.',
      'Interest is where the pile starts to bite. Net interest payments of $1.052 trillion in fiscal 2026 — the Treasury’s function-level figure, which nets out interest income — already exceed the entire defense budget. Gross interest costs are higher still, because the government also pays interest to its own trust funds; the net figure is the one that counts as an outlay, and it is the one used throughout this site. Either way, the interest bill alone is now a trillion-dollar item, which means servicing past borrowing costs more than almost everything the government actually does in the present.',
      'The longer history puts the recent explosion in context. Total federal outlays were $4.108 trillion in fiscal 2018 and $4.447 trillion in 2019 — already unimaginably large, but barely more than half of today’s level. The pandemic years pushed spending to $6.552 trillion in 2020 and $6.818 trillion in 2021, and it never came back down: $6.272 trillion in 2022, $6.134 trillion in 2023, $6.752 trillion in 2024, $7.010 trillion in 2025, and $7.396 trillion in 2026. The federal government now spends more than seven trillions a year, every year. A trillion stopped being a record a long time ago; it is now the routine unit of American public finance.',
    ],
    chart: {
      title: 'Total Federal Outlays by Fiscal Year, 2018–2026 ($T)',
      caption:
        'Site data: Treasury Monthly Treasury Statement, Table 9, September finals for FY2018–FY2026. Fiscal 2026 is the final figure through September 30, 2026.',
      type: 'line',
      unit: '$T',
      data: [
        { label: '2018', value: 4.108 },
        { label: '2019', value: 4.447 },
        { label: '2020', value: 6.552 },
        { label: '2021', value: 6.818 },
        { label: '2022', value: 6.272 },
        { label: '2023', value: 6.134 },
        { label: '2024', value: 6.752 },
        { label: '2025', value: 7.01 },
        { label: '2026', value: 7.396 },
      ],
    },
  },
  {
    id: 'why-your-brain-gets-it-wrong',
    heading: 'Why Your Brain Gets Trillions Wrong — and How to Fix It',
    paragraphs: [
      'Paulos’s diagnosis was that humans think linearly and the world’s big numbers grow exponentially. A million, a billion, a trillion sound like a staircase with even steps. In reality each step multiplies the last by a thousand. Your intuition treats “a thousand times bigger” as “a bit bigger,” because in daily life a thousand times bigger than a coffee is a car, and a thousand times bigger than a car is still something you can picture. At the top of the ladder, a thousand times bigger than a skyscraper is the edge of space, and intuition has no picture for that at all.',
      'The practical fix is to never accept a trillion at face value. Convert it before you react. Ask how many days of federal spending it is (a trillion is 49). Ask what it is per person (about $2,900). Ask what familiar budget item it matches (roughly the defense budget, slightly less than Medicaid). Ask how long it would take to spend at a human rate (2,740 years at a million dollars a day). Any one of those conversions turns an abstract numeral into a comparison your brain can actually hold — and that is the whole skill. Nobody can feel a trillion. Everybody can feel 49 days, or $2,900, or a stack of bills reaching orbit.',
      'One last distinction matters, because the news will not always make it for you. A trillion dollars of spending, a trillion dollars of debt, and a trillion dollars of wealth are three different things. Spending is a flow — money going out in a year. Debt is a stock — money owed, accumulated over decades. Wealth is a stock too, but a private one, and the first trillion-dollar personal fortune would still be only one-fortieth of the national debt. When you see a trillion in a headline, the first question is always: a trillion of what, over what period? Answer that, convert it to days or dollars per person, and the number stops being noise.',
    ],
    callout: {
      type: 'tip',
      text: 'The three-question test for any trillion-dollar headline: (1) Of what — spending, debt, or wealth? (2) Over what period — one year, or all of history? (3) Per person — about $2,900 each. If a claim cannot answer all three, it is not yet a fact you can use.',
    },
  },
];

export const data: ArticleData = {
  slug: 'how-much-is-one-trillion-dollars',
  title: 'How Much Is a Trillion Dollars, Really?',
  description:
    'One trillion dollars is $1,000,000,000,000 — 13.5% of FY2026 federal spending, 49 days of government, and a stack of $100 bills 679 miles high.',
  keyword: 'how much is a trillion dollars',
  category: 'Explainers',
  datePublished: '2026-11-03',
  dateModified: '2026-11-03',
  readingTime: estimateReadingTime(sections),
  quickTakeaways: [
    { label: 'The definition', text: '$1,000,000,000,000 — one thousand billion, or one million million. The gap between a billion and a trillion is itself nearly $1 trillion.' },
    { label: 'In government time', text: '13.5% of FY2026 federal spending ($7.396 trillion) — the government spends a trillion roughly every 49 days.' },
    { label: 'Per person', text: 'About $2,900 for every American — or 2,740 years of spending $1 million a day.' },
    { label: 'In physical cash', text: 'A stack of $100 bills worth $1 trillion would stand about 679 miles tall, past the International Space Station.' },
  ],
  sections,
  faqs: [
    {
      question: 'How much is a trillion dollars in numbers?',
      answer:
        'One trillion is 1,000,000,000,000 — a one followed by twelve zeros. It equals one thousand billion dollars, or one million million dollars. Written out, it has four times as many zeros as a billion (nine) and twice as many as a million (six), which is why the jump from billion to trillion feels small in words and is enormous in reality.',
    },
    {
      question: 'How long would it take to spend a trillion dollars?',
      answer:
        'It depends entirely on the rate. Spending $1 million a day, a trillion lasts about 2,740 years. Spending $1,000 a day, it lasts about 2.7 million years. Counting it out at one dollar per second would take about 31,710 years. But the US federal government, spending about $234,519 per second in fiscal 2026, goes through a trillion dollars in about 49 days.',
    },
    {
      question: 'How big is a trillion dollars compared to the US budget?',
      answer:
        'In fiscal year 2026 the federal government spent $7.396 trillion, so one trillion is about 13.5% of a year of federal spending. Four budget items each exceed a trillion on their own: Social Security ($1.667 trillion), Medicare ($1.073 trillion), net interest ($1.052 trillion), and Medicaid ($1.026 trillion). The fiscal 2026 deficit alone was $1.992 trillion — nearly two trillions.',
    },
    {
      question: 'How tall is a stack of a trillion dollars in $100 bills?',
      answer:
        'About 679 miles. A $100 bill is roughly 0.0043 inches thick, so a million dollars in $100 bills stacks about 3.6 feet high, a billion stacks about 0.68 miles high, and a trillion stacks about 679 miles high — more than two and a half times the altitude of the International Space Station. In $1 bills, a trillion would weigh about a million metric tons.',
    },
    {
      question: 'How much is a trillion dollars per person in the US?',
      answer:
        'About $2,900 per person, dividing $1 trillion among roughly 342 million Americans. For comparison, the national debt of about $40.17 trillion at the end of fiscal 2026 works out to roughly $117,000 per person. Per-person figures are the quickest way to make any trillion-dollar headline concrete.',
    },
    {
      question: 'Is a trillion dollars a lot for the US government?',
      answer:
        'It is a lot, but it is no longer exceptional. The government spends more than seven trillions a year, borrows about two trillions a year, and owes about forty trillions in total. A trillion is now the routine unit of federal finance — roughly the size of the defense budget, and about one-seventh of annual spending. That is precisely why it is worth understanding: trillions are no longer rare events.',
    },
  ],
  sources: [
    { name: 'U.S. Treasury, Monthly Treasury Statement — FY2026 finals (via Joint Economic Committee Monthly Fiscal Update)', url: 'https://www.jec.senate.gov/public/index.cfm/republicans/newsroom?ID=38949B39-5001-4D6E-BD91-29E11A06E325' },
    { name: 'Dispatch Times, How Big Is a Trillion? The Number in Words and Graphics', url: 'https://dispatchtimes.com/how-big-is-a-trillion-the-number-in-words-and-graphics/' },
    { name: 'GovFacts, National Debt Tracker (Treasury Debt to the Penny)', url: 'https://govfacts.org/tools/national-debt-tracker/' },
    { name: 'Dave Manuel, Where the Money Went: Fiscal 2026 in Ten Charts', url: 'https://www.davemanuel.com/2026/10/24/where-the-money-went-fiscal-2026-in-ten-charts/' },
  ],
  relatedSlugs: ['how-much-us-spends-per-second', 'where-does-us-federal-budget-go', 'federal-deficit-2026-how-big'],
};
