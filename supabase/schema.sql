-- =========================================================
-- USA SPENDING — PHASE 2 SUPABASE POSTGRESQL SCHEMA MIGRATION
-- =========================================================

-- 1. Fiscal Years Table
CREATE TABLE IF NOT EXISTS fiscal_years (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  year INTEGER NOT NULL UNIQUE,
  label VARCHAR(50) NOT NULL,
  is_current BOOLEAN DEFAULT false,
  start_date DATE NOT NULL,
  end_date DATE NOT NULL,
  status VARCHAR(20) DEFAULT 'ACTIVE',
  source VARCHAR(100) DEFAULT 'USAspending.gov',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Government Spending Table
CREATE TABLE IF NOT EXISTS government_spending (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  fiscal_year INTEGER NOT NULL REFERENCES fiscal_years(year) ON DELETE CASCADE,
  spending_type VARCHAR(50) NOT NULL, -- e.g. 'Outlays', 'Obligations', 'Budgetary Resources'
  amount NUMERIC(20, 2) NOT NULL,
  source VARCHAR(100) DEFAULT 'USAspending.gov',
  source_url VARCHAR(255),
  last_updated TIMESTAMPTZ DEFAULT NOW(),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  CONSTRAINT unique_gov_spending_fy_type UNIQUE (fiscal_year, spending_type)
);

-- 3. Spending Categories Table
CREATE TABLE IF NOT EXISTS spending_categories (
  id VARCHAR(100) PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  slug VARCHAR(255) NOT NULL UNIQUE,
  description TEXT,
  source_identifier VARCHAR(100),
  parent_id VARCHAR(100) REFERENCES spending_categories(id),
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 4. Category Spending Table
CREATE TABLE IF NOT EXISTS category_spending (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  category_id VARCHAR(100) NOT NULL REFERENCES spending_categories(id) ON DELETE CASCADE,
  fiscal_year INTEGER NOT NULL REFERENCES fiscal_years(year) ON DELETE CASCADE,
  amount NUMERIC(20, 2) NOT NULL,
  percentage NUMERIC(6, 2) NOT NULL,
  spending_type VARCHAR(50) DEFAULT 'Outlays',
  source VARCHAR(100) DEFAULT 'USAspending.gov',
  source_url VARCHAR(255),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  CONSTRAINT unique_category_fy_type UNIQUE (fiscal_year, category_id, spending_type)
);

-- 5. Agencies Table
CREATE TABLE IF NOT EXISTS agencies (
  id VARCHAR(100) PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  slug VARCHAR(255) NOT NULL UNIQUE,
  agency_code VARCHAR(50) NOT NULL,
  description TEXT,
  source_identifier VARCHAR(100),
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 6. Agency Spending Table
CREATE TABLE IF NOT EXISTS agency_spending (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  agency_id VARCHAR(100) NOT NULL REFERENCES agencies(id) ON DELETE CASCADE,
  fiscal_year INTEGER NOT NULL REFERENCES fiscal_years(year) ON DELETE CASCADE,
  amount NUMERIC(20, 2) NOT NULL,
  spending_type VARCHAR(50) DEFAULT 'Outlays',
  source VARCHAR(100) DEFAULT 'USAspending.gov',
  source_url VARCHAR(255),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  CONSTRAINT unique_agency_fy_type UNIQUE (fiscal_year, agency_id, spending_type)
);

-- 7. States Table
CREATE TABLE IF NOT EXISTS states (
  id VARCHAR(100) PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  slug VARCHAR(100) NOT NULL UNIQUE,
  state_code VARCHAR(10) NOT NULL UNIQUE,
  is_territory BOOLEAN DEFAULT false,
  is_active BOOLEAN DEFAULT true
);

-- 8. State Spending Table
CREATE TABLE IF NOT EXISTS state_spending (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  state_id VARCHAR(100) NOT NULL REFERENCES states(id) ON DELETE CASCADE,
  fiscal_year INTEGER NOT NULL REFERENCES fiscal_years(year) ON DELETE CASCADE,
  amount NUMERIC(20, 2) NOT NULL,
  spending_type VARCHAR(50) DEFAULT 'Outlays',
  award_type VARCHAR(50) DEFAULT 'All',
  source VARCHAR(100) DEFAULT 'USAspending.gov',
  source_url VARCHAR(255),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  CONSTRAINT unique_state_fy_type UNIQUE (fiscal_year, state_id, spending_type, award_type)
);

-- 9. Recipients Table
CREATE TABLE IF NOT EXISTS recipients (
  id VARCHAR(100) PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  slug VARCHAR(255) NOT NULL UNIQUE,
  source_identifier VARCHAR(100),
  recipient_type VARCHAR(100),
  uei VARCHAR(50),
  cage_code VARCHAR(50),
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 10. Recipient Spending Table
CREATE TABLE IF NOT EXISTS recipient_spending (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  recipient_id VARCHAR(100) NOT NULL REFERENCES recipients(id) ON DELETE CASCADE,
  fiscal_year INTEGER NOT NULL REFERENCES fiscal_years(year) ON DELETE CASCADE,
  amount NUMERIC(20, 2) NOT NULL,
  award_count INTEGER DEFAULT 1,
  award_type VARCHAR(50) DEFAULT 'Contracts',
  source VARCHAR(100) DEFAULT 'USAspending.gov',
  source_url VARCHAR(255),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  CONSTRAINT unique_recipient_fy_type UNIQUE (fiscal_year, recipient_id, spending_type, award_type)
);

-- 11. Data Sync Logs Table
CREATE TABLE IF NOT EXISTS data_sync_logs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  source VARCHAR(100) NOT NULL,
  dataset VARCHAR(100) NOT NULL,
  started_at TIMESTAMPTZ DEFAULT NOW(),
  completed_at TIMESTAMPTZ,
  status VARCHAR(20) DEFAULT 'pending', -- pending, running, completed, partial, failed
  records_processed INTEGER DEFAULT 0,
  records_inserted INTEGER DEFAULT 0,
  records_updated INTEGER DEFAULT 0,
  records_failed INTEGER DEFAULT 0,
  error_message TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS (Row Level Security) for public read access
ALTER TABLE fiscal_years ENABLE ROW LEVEL SECURITY;
ALTER TABLE government_spending ENABLE ROW LEVEL SECURITY;
ALTER TABLE spending_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE category_spending ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read access to fiscal_years" ON fiscal_years FOR SELECT USING (true);
CREATE POLICY "Allow public read access to government_spending" ON government_spending FOR SELECT USING (true);
CREATE POLICY "Allow public read access to spending_categories" ON spending_categories FOR SELECT USING (true);
CREATE POLICY "Allow public read access to category_spending" ON category_spending FOR SELECT USING (true);
