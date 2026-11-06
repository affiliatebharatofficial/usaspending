import type { ArticleData } from '../types';
import { estimateReadingTime } from '../types';

const sections: ArticleData['sections'] = [
  {
    id: 'the-39-9-billion-year',
    heading: 'Federal Science Spending 2026: The $39.9 Billion Year',
    paragraphs: [
      'The federal government spent $39.9 billion on general science, space, and technology in fiscal year 2026 — the budget function that covers NASA, the National Science Foundation, the Department of Energy\'s Office of Science, and the smaller civilian science agencies. That is the final figure from the September 2026 Monthly Treasury Statement (MTS), Table 9, the source behind every number on this site. It works out to about $109 million a day, or roughly $3,464 every second, and about $117 for every person in the country.',
      'The striking thing about the number is not its size but its smallness. Science, space, and technology took just 0.54% of the $7,395.8 billion the federal government spent in fiscal 2026 — about half a cent of every dollar. Social Security alone cost 41.8 times as much. Net interest on the national debt cost 26.4 times as much. National defense cost 24.2 times as much. Even veterans benefits, at $416.2 billion, were more than ten times the entire civilian science budget. For the full budget picture, see /blog/where-does-us-federal-budget-go.',
      'Fiscal 2026 was also the year science funding became a political fight rather than a quiet consensus. The White House budget request proposed cutting NASA by about 24% and the National Science Foundation by more than half. Congress rejected nearly all of it, funding NASA at $24.44 billion and NSF at about $9 billion. But the money Congress appropriated and the money that actually reached researchers turned out to be two different stories — and the gap between them is the real story of science funding in 2026.',
    ],
    chart: {
      title: 'Science vs. the Budget Giants, FY2026 Final ($B)',
      caption:
        'U.S. Treasury Monthly Treasury Statement, Table 9, September 2026 finals, via this site\'s data. Science, space, and technology ($39.9B) is 0.54% of the $7,395.8B federal total.',
      type: 'bar',
      unit: '$B',
      data: [
        { label: 'Social Security', value: 1667.1 },
        { label: 'Net Interest', value: 1051.8 },
        { label: 'Defense', value: 965.2 },
        { label: 'Veterans', value: 416.2 },
        { label: 'Science & Space', value: 39.9 },
      ],
    },
    callout: {
      type: 'info',
      text: 'Explore the category in detail on its page: /categories/science-medical-research.',
    },
  },
  {
    id: 'where-the-money-goes',
    heading: 'Where the Money Goes: NASA Takes Nearly Two-Thirds',
    paragraphs: [
      'Inside the $39.9 billion, one agency dominates. NASA accounts for about $24.6 billion of the function\'s outlays — 61.7% of the total — according to this site\'s modeled breakdown of MTS function 250. The National Science Foundation is next at about $9.1 billion, or 22.8%. Everything else — the Department of Energy\'s Office of Science, the National Institute of Standards and Technology, NOAA research, and smaller programs — makes up the remaining $6.2 billion, about 15.5%.',
      'That split is worth pausing on, because it shapes every debate about science funding. When people argue about "the science budget," they are mostly arguing about NASA — and within NASA, mostly about the Artemis Moon program versus robotic science missions. The NSF, which funds most basic university research in the country, is less than a tenth of one percent of federal spending on its own. And the DOE Office of Science, which runs the national laboratory system, is smaller still in outlay terms, even though its appropriation for fiscal 2026 was $8.4 billion.',
      'One clarification matters before going further: appropriations and outlays are not the same thing. An appropriation is what Congress authorizes an agency to spend; an outlay is cash that actually left the Treasury during the fiscal year. Multi-year appropriations spend out over several years, so an agency\'s outlays in a given year can be higher or lower than that year\'s appropriation. The $39.9 billion in this article is outlays — money actually spent in fiscal 2026. Agency figures quoted below are appropriations unless stated otherwise, which is why they do not always add up to the outlay total.',
    ],
    chart: {
      title: 'General Science, Space & Technology Outlays, FY2026 ($B)',
      caption:
        'This site\'s modeled breakdown of MTS function 250 outlays ($39.9B total). "Other" covers the DOE Office of Science and smaller civilian science programs.',
      type: 'bar',
      unit: '$B',
      data: [
        { label: 'NASA', value: 24.6 },
        { label: 'NSF', value: 9.1 },
        { label: 'Other science', value: 6.2 },
      ],
    },
    bullets: [
      'NASA: about $24.6B in outlays (61.7%) — human spaceflight and space science dominate.',
      'NSF: about $9.1B (22.8%) — the main funder of basic university research.',
      'Other science programs: about $6.2B (15.5%) — DOE Office of Science, NIST, NOAA research, and more.',
      'Not included here: NIH medical research, which is counted under the health function, and defense R&D, which is counted under defense.',
    ],
  },
  {
    id: 'nasa-artemis-and-science',
    heading: 'NASA: Congress Saved Artemis — and Science With It',
    paragraphs: [
      'NASA\'s fiscal 2026 story is a tale of two budgets. The White House request, submitted in May 2025, proposed cutting the agency by about 24% to roughly $18.8 billion, including a cut of about 47% to the Science Mission Directorate that would have ended dozens of missions. Congress rejected nearly all of it. The final appropriation, passed in January 2026 as part of Public Law 119-74, gave NASA about $24.44 billion — slightly below the $24.9 billion enacted for fiscal 2025, but $5.63 billion above the request.',
      'Within that total, the Exploration account that funds Artemis received $7.78 billion, about 32% of NASA\'s budget, plus roughly $2.8 billion more from the reconciliation law for SLS, Orion, and Gateway work. The Science Mission Directorate was restored to $7.25 billion, only slightly below its prior level — a rescue for a division that had faced near-halving. Aeronautics stayed at $935 million and STEM engagement survived at $143 million. The one major casualty was Mars Sample Return: Congress did not fund the existing program, providing $110 million instead for a smaller Mars Future Missions effort.',
      'The program itself kept moving. Artemis II, the first crewed deep-space mission in more than half a century, flew in April 2026. In February 2026 NASA restructured the follow-on missions, turning Artemis III into a 2027 crewed Earth-orbit test of rendezvous and docking with the commercial lunar landers, with the first lunar landing now targeted for Artemis IV in 2028. The fight is not over: the fiscal 2027 request, released in April 2026, again proposes about $18.8 billion for NASA with science cut by roughly 46% to about $3.9 billion. Congress has now rejected that cut twice in spirit, but the final fiscal 2027 figure is still undecided.',
    ],
    callout: {
      type: 'info',
      text: 'NASA\'s $24.44B appropriation is about 0.3% of all federal spending — the Planetary Society puts it at roughly three-tenths of one percent of the budget.',
    },
  },
  {
    id: 'nsf-budget-survived-grants-didnt',
    heading: 'NSF: The Budget Survived, but the Grants Did Not',
    paragraphs: [
      'The National Science Foundation\'s fiscal 2026 looks, on paper, like a narrow escape. The White House proposed cutting NSF by more than half, to about $3.9 billion from $9.06 billion enacted in fiscal 2024. The Senate Appropriations Committee allocated $9.0 billion instead, keeping the main Research and Related Activities account flat at $7.18 billion, and the final budget approved by Congress decreased by only about 3% from fiscal 2025. For an agency that funds most basic research at American universities, flat funding in a year of proposed 57% cuts counts as a win.',
      'But the money Congress provided did not all reach researchers. The NSF withheld about $1.4 billion — roughly one-fifth of its primary research budget — during fiscal 2026, carrying the funds over to fiscal 2027 for what the agency described as priorities aligned with administration initiatives. The result shows up in the award data: NSF made 6,237 awards in fiscal 2026, 45% fewer than the 11,387 annual average for fiscal 2021–2024. In the mathematical and physical sciences directorate, the agency awarded 34% fewer grants than the 2000–2024 average, and in the social, behavioral, and economic sciences directorate, awards fell 89%.',
      'The damage was not only financial. More than a thousand NSF awards were terminated in the spring of 2025, some 1,400 grants remained disrupted into fiscal 2026, and the agency lost about a third of its staff since January 2025, including senior leadership. Early-career scientists were hit hardest: they are the researchers most dependent on new grants, and new grants are exactly what stopped. The lesson of fiscal 2026 for NSF is that an appropriation is a promise, not a payment — and the gap between the two can be as consequential as the topline number itself.',
    ],
    bullets: [
      'Proposed cut: NSF to $3.9B (-57%) in the White House request; Congress funded about $9.0B instead.',
      'Withheld: about $1.4B, one-fifth of the research budget, held back during FY2026.',
      'Awards: 6,237 in FY2026, down 45% from the 11,387 FY2021–2024 average.',
      'Hardest hit: social and behavioral sciences (-89% of awards); physical sciences (-34% of grants vs. the 2000–2024 average).',
    ],
  },
  {
    id: 'doe-office-of-science',
    heading: 'DOE Office of Science: Fusion, AI, and the National Labs',
    paragraphs: [
      'The Department of Energy\'s Office of Science is the smallest of the three big pieces in appropriation terms, but it runs the largest physical research infrastructure in the country: 17 national laboratories and 27 user facilities serving more than 39,000 researchers a year. Its fiscal 2026 appropriation was $8.40 billion, up $160 million (about 2%) from fiscal 2025 — and well above the administration\'s request of $7.09 billion, a proposed 14% cut that Congress rejected.',
      'The Office of Science funds the basic physical sciences — fusion energy, high-energy and nuclear physics, materials science, and large-scale computation. Fusion Energy Sciences received about $805.7 million in the final fiscal 2026 bill, continuing work under the long-range fusion plan and supporting a growing private fusion sector. The request had protected fusion, artificial intelligence, quantum information science, and critical minerals even while cutting elsewhere, and Congress kept those priorities while restoring the broader portfolio.',
      'The labs are also where the administration\'s new Genesis Mission lands: using AI for science, energy, and national security, built on the Office of Science\'s supercomputing facilities. That is the bet behind the fiscal 2026 numbers — that the same laboratory system built for particle physics and fusion can now be pointed at AI-driven discovery. Whether that bet pays off depends on the same thing the NSF story shows: appropriations only matter if the money actually flows to the researchers and facilities it was voted for.',
    ],
    callout: {
      type: 'tip',
      text: 'Appropriations vs. outlays: DOE\'s Office of Science was appropriated $8.4B for FY2026, but outlays — cash actually spent in the year — lag appropriations, which is why agency appropriations and the $39.9B outlay total do not simply add up.',
    },
  },
  {
    id: 'the-trend-line',
    heading: 'The Trend Line: Growth, Then a Slip',
    paragraphs: [
      'Set against the last eight years, fiscal 2026 looks like a pause rather than a collapse. General science, space, and technology outlays were $31.6 billion in fiscal 2018, $34.1 billion in 2020, $37.5 billion in 2022, and $41.6 billion in 2024 — before slipping to $39.9 billion in 2026, a 4.0% decline from the 2024 peak. Over the full eight years, the function still grew 26.2%, but the direction changed in the last two years, and it changed while total federal spending grew 5.5% in fiscal 2026 alone. Science is getting a smaller slice of a growing pie.',
      'The context for that slice is what makes the number matter. Total federal research and development is far larger than $39.9 billion — the figure here covers only the civilian general-science function. Add NIH medical research, counted under health, and defense research and development, counted under defense, and the federal R&D total is several times larger. But the $39.9 billion is the part that funds the Moon program, the telescopes, the particle accelerators, and the university labs — the visible frontier of American science.',
      'What happens next is mostly a fiscal 2027 question. The administration has again requested about $18.8 billion for NASA with science nearly halved, and again proposed deep cuts at NSF; a stopgap continuing resolution signed in September 2026 keeps NASA at its fiscal 2026 level until December 11, 2026, but no full-year fiscal 2027 budget has passed. Congress rejected the same cuts a year ago. Whether it does so again — and whether the money it appropriates actually reaches researchers this time — will decide whether fiscal 2026 was a one-year scare or the start of a smaller American science enterprise. For how the deficit that frames all of this is measured, see /blog/federal-deficit-2026-how-big, and for why science spending is discretionary while Social Security is not, see /blog/what-is-mandatory-vs-discretionary-spending.',
    ],
    chart: {
      title: 'General Science, Space & Technology Outlays, FY2018–FY2026 ($B)',
      caption:
        'U.S. Treasury Monthly Treasury Statement, Table 9, via this site\'s data. Full-year actuals; up 26.2% since FY2018 but down 4.0% from the FY2024 peak of $41.6B.',
      type: 'line',
      unit: '$B',
      data: [
        { label: 'FY2018', value: 31.6 },
        { label: 'FY2020', value: 34.1 },
        { label: 'FY2022', value: 37.5 },
        { label: 'FY2024', value: 41.6 },
        { label: 'FY2026', value: 39.9 },
      ],
    },
  },
];

export const data: ArticleData = {
  slug: 'science-space-technology-budget',
  title: 'Federal Science Spending: The $39.9B Budget',
  description:
    'Federal science spending hit $39.9B in FY2026 — NASA, NSF, and DOE labs — after Congress rejected deep cuts. Real MTS data, charts, and the outlook.',
  keyword: 'federal science spending',
  category: 'Data Stories',
  datePublished: '2026-11-06',
  dateModified: '2026-11-06',
  readingTime: estimateReadingTime(sections),
  quickTakeaways: [
    {
      label: 'The total',
      text: 'General science, space, and technology cost $39.9B in FY2026 — 0.54% of the $7,395.8B federal budget, about $109M per day.',
    },
    {
      label: 'NASA dominates',
      text: 'NASA took about $24.6B (61.7%) of the total; Congress funded it at $24.44B after rejecting a proposed 24% cut, restoring science to $7.25B.',
    },
    {
      label: 'The NSF gap',
      text: 'NSF was funded at about $9B, but withheld $1.4B of its research budget and made 45% fewer awards than the FY2021–2024 average.',
    },
    {
      label: 'The trend',
      text: 'Science outlays are up 26.2% since FY2018 but down 4.0% from the FY2024 peak of $41.6B — a smaller slice of a growing budget.',
    },
  ],
  sections,
  faqs: [
    {
      question: 'How much does the federal government spend on science?',
      answer:
        'In fiscal year 2026, federal outlays for general science, space, and technology (budget function 250) totaled $39.9 billion, according to the final September 2026 Monthly Treasury Statement. That is 0.54% of the $7,395.8 billion federal total — about $109 million per day, or roughly $117 per American.',
    },
    {
      question: 'What is budget function 250?',
      answer:
        'Budget function 250, "General science, space, and technology," is the Treasury category covering NASA, the National Science Foundation, the Department of Energy\'s Office of Science, and smaller civilian science agencies. It does not include NIH medical research, which is counted under the health function, or defense research and development, which is counted under defense — so total federal R&D is several times larger than $39.9 billion.',
    },
    {
      question: 'How much of the science budget goes to NASA?',
      answer:
        'NASA accounts for about $24.6 billion of the $39.9 billion in fiscal 2026 outlays — 61.7% of the total. Congress appropriated $24.44 billion for NASA in fiscal 2026, including $7.78 billion for the Artemis Exploration account and $7.25 billion for science, after rejecting a White House proposal to cut the agency by about 24%.',
    },
    {
      question: 'Why was NSF funding in the news in 2026?',
      answer:
        'The White House proposed cutting the National Science Foundation by more than half, to $3.9 billion; Congress funded it at about $9 billion instead. But NSF withheld about $1.4 billion — one-fifth of its research budget — during fiscal 2026, and made 45% fewer awards (6,237) than the fiscal 2021–2024 average of 11,387. Appropriations and money actually reaching researchers turned out to be different things.',
    },
    {
      question: 'Does the $39.9 billion include medical research?',
      answer:
        'No. Medical research funded by the National Institutes of Health is counted under the health budget function, not general science. The $39.9 billion covers NASA, the NSF, the DOE Office of Science, NIST, NOAA research, and other civilian science programs. NIH obligated about 99% of its own research budget in fiscal 2026, but its funding sits in a different part of the budget.',
    },
    {
      question: 'Is federal science spending growing or shrinking?',
      answer:
        'Both, depending on the window. Outlays grew 26.2% from $31.6 billion in fiscal 2018 to $39.9 billion in fiscal 2026, but they fell 4.0% from the fiscal 2024 peak of $41.6 billion — while total federal spending grew 5.5% in fiscal 2026 alone. Science is getting a smaller share of a growing budget, and the fiscal 2027 request proposes cutting NASA and NSF again.',
    },
  ],
  sources: [
    {
      name: 'SpaceNexus — NASA Budget 2026: Where the $24.4 Billion Goes',
      url: 'https://spacenexus.us/blog/nasa-budget-2026-breakdown-analysis',
    },
    {
      name: 'Physics Today — The shrinking NSF support for the physical sciences',
      url: 'https://physicstoday.aip.org/news/the-shrinking-nsf-support-for-the-physical-sciences',
    },
    {
      name: 'ASME — Congress Finalizes Most FY 2026 Appropriations',
      url: 'https://www.asme.org/government-relations/policy-impact/congress-finalizes-most-fy-2026-appropriations',
    },
    {
      name: 'American Astronomical Society — Senate FY2026 CJS Appropriations Report: NASA and NSF Details',
      url: 'https://aas.org/posts/news/2025/07/senate-fy2026-cjs-appropriations-report-nasa-and-nsf-details',
    },
  ],
  relatedSlugs: [
    'fy2026-federal-spending-final-numbers',
    'where-does-us-federal-budget-go',
    'interest-payments-vs-agency-budgets',
    'what-is-mandatory-vs-discretionary-spending',
  ],
};
