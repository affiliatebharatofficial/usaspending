import { calculateDailyRate, calculateHourlyRate, calculateSecondRate, calculatePercentage, getFiscalYearDays } from '../src/lib/calculations/index.ts';

console.log('==================================================');
console.log('USA SPENDING — PHASE 2 AUTOMATED UNIT TEST ENGINE');
console.log('==================================================\n');

let passes = 0;
let fails = 0;

function assert(condition, message) {
  if (condition) {
    console.log(`✓ PASS: ${message}`);
    passes++;
  } else {
    console.error(`❌ FAIL: ${message}`);
    fails++;
  }
}

// Test 1: Fiscal Year Leap Year Calculation
assert(getFiscalYearDays(2024) === 366, 'FY2024 contains 366 days (Leap Year)');
assert(getFiscalYearDays(2026) === 365, 'FY2026 contains 365 days (Standard Year)');

// Test 2: Rate Calculations
const annual = 365_000_000_000;
const daily = calculateDailyRate(annual, 2026);
assert(daily === 1_000_000_000, 'Daily rate calculation is $1 Billion / day for $365B annual');

const hourly = calculateHourlyRate(annual, 2026);
assert(Math.round(hourly) === Math.round(1_000_000_000 / 24), 'Hourly rate calculation is $41.67M / hour');

const secondRate = calculateSecondRate(annual, 2026);
assert(secondRate > 0, 'Per-second rate calculation generates positive non-zero number');

// Test 3: Percentage Calculation
const pct = calculatePercentage(10, 100);
assert(pct === 10, 'Percentage calculation correctly returns 10%');

// Test 4: Calculation Engine Bounds Safety
assert(calculateDailyRate(0, 2026) === 0, 'Zero budget returns zero daily rate');
assert(calculatePercentage(50, 0) === 0, 'Zero total denominator safely returns 0% without division by zero crash');

console.log(`\n==================================================`);
console.log(`TEST SUMMARY: ${passes} Passed | ${fails} Failed`);
console.log(`==================================================`);

if (fails > 0) {
  process.exit(1);
}
