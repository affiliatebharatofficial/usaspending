/**
 * refresh-mts-data.mjs
 *
 * Pulls the latest U.S. Treasury Monthly Treasury Statement (MTS) Table 9
 * outlay data and prints a refresh report for usaspending.us.
 *
 * Usage:
 *   node scripts/refresh-mts-data.mjs            # latest published MTS month
 *   node scripts/refresh-mts-data.mjs 2026-09-30 # a specific record date
 *
 * What it does:
 *  1. Fetches MTS Table 9 (outlays by budget function) for the target
 *     record_date from https://api.fiscaldata.treasury.gov
 *  2. Prints the function-level FYTD outlay figures mapped to this site's
 *     canonical categories, plus the national total and receipts.
 *  3. Prints September finals for FY2018..FY2025 for the history tables.
 *
 * The printed values are then copied into:
 *   - src/lib/data/spendingData.ts  (ANNUAL_TOTAL_BUDGET, ANNUAL_TOTAL_RECEIPTS,
 *                                      CATEGORY_OUTLAYS_FY2026, CATEGORY_FY_FACTORS)
 *   - src/lib/services/dataService.ts (DEFAULT_METADATA.lastUpdated, CURRENT_TOTAL_BUDGET)
 *
 * No API key required. Source: api.fiscaldata.treasury.gov (public domain).
 */

// Canonical category -> MTS Table 9 budget function classification_desc
const CATEGORY_MAP = {
  'social-security-spending': 'Social Security',
  'medicare-spending': 'Medicare',
  'defense-military': 'National Defense',
  'medicaid-spending': 'Health', // shown as "Health Programs (incl. Medicaid)"
  'veterans-affairs-spending': 'Veterans Benefits and Services',
  'education-training': 'Education, Training, Employment, and Social Services',
  'agriculture-food-assistance': 'Agriculture',
  'infrastructure-transport': 'Transportation',
  'science-medical-research': 'General Science, Space, and Technology',
  'net-interest-spending': 'Net Interest',
};

const API = 'https://api.fiscaldata.treasury.gov/services/api/fiscal_service/v1/accounting/mts/mts_table_9';
const FIELDS = 'classification_desc,current_fytd_rcpt_outly_amt,parent_id,sequence_level_nbr';

async function fetchTable(recordDate) {
  const url = `${API}?filter=record_date:eq:${recordDate}&page[size]=100&fields=${FIELDS}`;
  const res = await fetch(url, { headers: { 'User-Agent': 'usaspending.us data-refresh' } });
  if (!res.ok) throw new Error(`HTTP ${res.status} for ${recordDate}`);
  const json = await res.json();
  return json.data || [];
}

function toMap(rows) {
  const m = {};
  for (const r of rows) {
    if (r.sequence_level_nbr !== '2') continue;
    m[r.classification_desc.replace(/\s+/g, ' ').trim()] = {
      amount: r.current_fytd_rcpt_outly_amt === 'null' ? null : Number(r.current_fytd_rcpt_outly_amt),
      parent: r.parent_id,
    };
  }
  return m;
}

const fmtUSD = (n) => (n === null ? 'n/a' : '$' + Number(n).toLocaleString('en-US'));
const fmtCode = (n) => (n === null ? 'null' : `${Math.round(n)}`.replace(/\B(?=(\d{3})+(?!\d))/g, '_'));

async function latestRecordDate() {
  const url = `${API}?sort=-record_date&page[size]=1&fields=record_date`;
  const res = await fetch(url, { headers: { 'User-Agent': 'usaspending.us data-refresh' } });
  const json = await res.json();
  return json.data[0].record_date;
}

async function main() {
  const target = process.argv[2] || (await latestRecordDate());
  console.log(`# MTS Table 9 refresh — record_date=${target}\n`);

  const rows = toMap(await fetchTable(target));
  const outlays = Object.entries(rows).filter(([, v]) => v.parent && v.amount !== null);

  // National totals: outlay total vs receipts total distinguished by parent id.
  // (The two "Total" rows have different parent_ids; print both with parents.)
  console.log('## National totals');
  for (const [desc, v] of outlays) {
    if (desc === 'Total') console.log(`- Total (parent ${v.parent}): ${fmtUSD(v.amount)}`);
  }

  console.log('\n## Category mapping (FYTD outlays)');
  for (const [slug, funcName] of Object.entries(CATEGORY_MAP)) {
    const v = rows[funcName];
    console.log(`- '${slug}': ${fmtCode(v?.amount ?? null)}  // ${funcName} = ${fmtUSD(v?.amount ?? null)}`);
  }

  console.log('\n## September finals (history table)');
  const years = [2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025];
  for (const y of years) {
    try {
      const r = toMap(await fetchTable(`${y}-09-30`));
      const totals = Object.entries(r).filter(([d]) => d === 'Total');
      const line = totals.map(([, v]) => `${fmtCode(v.amount)} (parent ${v.parent})`).join(' / ');
      console.log(`- FY${y} (record ${y}-09-30): ${line}`);
    } catch (e) {
      console.log(`- FY${y}: FAILED (${e.message})`);
    }
  }

  console.log('\nDone. Copy the values above into src/lib/data/spendingData.ts and');
  console.log('update DEFAULT_METADATA.lastUpdated in src/lib/services/dataService.ts.');
}

main().catch((e) => { console.error('Refresh failed:', e.message); process.exit(1); });
