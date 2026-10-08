/**
 * State editorial content overrides.
 *
 * State pages are template-rendered, which risks "scaled content" treatment
 * by search engines. This file holds hand-written, state-specific editorial
 * content. When an entry exists for a slug, the state page renders these
 * unique sections INSTEAD of the generic template paragraphs.
 *
 * Rules for new entries:
 *  - Every factual claim must be verifiable (installations, programs, history).
 *  - NEVER invent dollar figures. Use only the modeled estimate numbers from
 *    STATES_DATA (labeled as estimates) or cite a real published source.
 *  - Write 2-4 overview paragraphs, 3-5 installations, 3 "did you know" facts,
 *    and 3-4 genuinely state-specific FAQs.
 */

export interface StateInstallation {
  name: string;
  detail: string;
}

export interface StateEditorialContent {
  slug: string;
  tagline: string;
  overview: string[];
  keyInstallations: StateInstallation[];
  economicContext: string;
  didYouKnow: string[];
  faqs: { question: string; answer: string }[];
}

const TEXAS: StateEditorialContent = {
  slug: 'texas',
  tagline: 'Military bases, NASA human spaceflight, and border operations make Texas one of the largest federal footprints in the country.',
  overview: [
    `Texas hosts one of the densest concentrations of federal activity of any U.S. state. The drivers are structural, not cyclical: some of the country's largest Army and Air Force installations, NASA's human spaceflight headquarters, a 1,250-mile international border, and a defense manufacturing base anchored by the F-35 fighter production line in Fort Worth. That combination means federal dollars flow into Texas through payroll at bases, procurement contracts, civil-service employment, and grants — not just a single channel.`,
    `The military footprint is the most visible part. Fort Cavazos (formerly Fort Hood) in Central Texas is among the largest active-duty Army installations in the world, home to tens of thousands of soldiers plus civilian employees. Joint Base San Antonio combines Lackland, Randolph, and Brooke Army Medical Center into one of the Defense Department's largest joint installations. Naval Air Station Corpus Christi and Fort Bliss near El Paso add Army and aviation training missions that have operated for generations.`,
    `The civilian federal footprint is just as distinctive. NASA's Johnson Space Center in Houston has been the home of U.S. human spaceflight operations since 1961 — Mission Control, astronaut training, and the International Space Station program are run from here. Along the southern border, Customs and Border Protection and related agencies maintain a large operational presence across Border Patrol sectors headquartered in Texas cities including El Paso, Del Rio, Laredo, and the Rio Grande Valley.`,
  ],
  keyInstallations: [
    {
      name: 'NASA Johnson Space Center — Houston',
      detail: 'Home of Mission Control and astronaut training since 1961; the operational hub of U.S. human spaceflight, including International Space Station operations and the Artemis lunar program.',
    },
    {
      name: 'Fort Cavazos — Central Texas',
      detail: 'One of the largest U.S. Army installations worldwide, hosting multiple armored divisions and tens of thousands of active-duty personnel plus a large civilian workforce.',
    },
    {
      name: 'Joint Base San Antonio',
      detail: 'Combines Lackland AFB (Air Force basic training), Randolph AFB, and Brooke Army Medical Center — one of the Defense Department\'s largest medical and training complexes.',
    },
    {
      name: 'Lockheed Martin F-35 Plant — Fort Worth',
      detail: 'Final assembly site for the F-35 Lightning II, the Pentagon\'s largest procurement program, supporting a deep supply chain across North Texas.',
    },
    {
      name: 'Border Patrol Sectors — El Paso, Del Rio, Laredo, Rio Grande Valley',
      detail: 'Four of the nine southwest Border Patrol sectors are headquartered in Texas, reflecting the state\'s 1,250-mile border with Mexico.',
    },
  ],
  economicContext:
    `Texas has the second-largest state economy in the U.S., so federal spending lands in a large, diversified base — energy, technology, manufacturing, and agriculture all operate alongside the federal footprint. That cuts both ways for interpretation: Texas receives very large absolute federal flows because of its bases, contracts, and border operations, but its per-resident figures look modest next to smaller states with outsized federal installations. Defense-adjacent metro areas — San Antonio ("Military City USA"), Killeen-Temple near Fort Cavazos, and the Dallas–Fort Worth defense corridor — show how concentrated the local economic effects can be even when statewide averages look ordinary.`,
  didYouKnow: [
    'Mission Control in Houston has overseen every NASA crewed spaceflight since Gemini — the famous "Houston, we\'ve had a problem" call from Apollo 13 was answered here.',
    'San Antonio is nicknamed "Military City USA" — Joint Base San Antonio is one of the largest joint-service installations in the Defense Department.',
    'The F-35 fighter jet — the most expensive weapons program in history — is assembled in Fort Worth, Texas.',
  ],
  faqs: [
    {
      question: 'Why does Texas receive so much federal defense spending?',
      answer:
        'Three structural reasons: Texas hosts several of the military\'s largest installations (Fort Cavazos, Joint Base San Antonio, Fort Bliss), it is home to major defense manufacturing including the F-35 assembly plant in Fort Worth, and its 1,250-mile border with Mexico requires a large Customs and Border Protection presence. These are long-term basing and industrial decisions, so the flows are relatively stable year to year.',
    },
    {
      question: 'What is NASA\'s role in federal spending in Texas?',
      answer:
        'NASA\'s Johnson Space Center in Houston is the agency\'s center for human spaceflight — Mission Control, astronaut training, and space station operations. While NASA\'s budget is small compared with defense or health programs nationally, the center makes Houston one of the few places where federal science spending is a defining local industry, with a large contractor workforce around it.',
    },
    {
      question: 'Does border security spending show up in Texas federal figures?',
      answer:
        'Yes. The Department of Homeland Security — principally Customs and Border Protection — maintains thousands of personnel across four Border Patrol sectors headquartered in Texas, plus ports of entry, air and marine operations, and related facilities. This operational spending is part of why Texas\'s federal footprint differs from states without an international border.',
    },
    {
      question: 'How should I interpret the per-resident figure for Texas?',
      answer:
        'With the second-largest U.S. population, Texas\'s per-resident federal figure will always look lower than small states that host a major lab or base — the denominator is huge. Compare Texas against other large states (California, Florida, New York) for a fair read, and remember the state-level numbers on this page are modeled estimates for comparison, not audited award records.',
    },
  ],
};

export const STATE_EDITORIAL_CONTENT: Record<string, StateEditorialContent> = {
  texas: TEXAS,
  // Add more states here following the TEXAS example.
};

export function getStateEditorialContent(slug: string): StateEditorialContent | undefined {
  return STATE_EDITORIAL_CONTENT[slug.toLowerCase()];
}
