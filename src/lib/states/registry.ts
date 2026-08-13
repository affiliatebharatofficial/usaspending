export interface StateDefinition {
  id: string;
  name: string;
  code: string;
  slug: string;
  population: number;
  isTerritory: boolean;
  isActive: boolean;
}

export const STATE_REGISTRY: StateDefinition[] = [
  { id: 'ca', name: 'California', code: 'CA', slug: 'california', population: 38_965_193, isTerritory: false, isActive: true },
  { id: 'tx', name: 'Texas', code: 'TX', slug: 'texas', population: 30_503_301, isTerritory: false, isActive: true },
  { id: 'fl', name: 'Florida', code: 'FL', slug: 'florida', population: 22_610_726, isTerritory: false, isActive: true },
  { id: 'ny', name: 'New York', code: 'NY', slug: 'new-york', population: 19_571_216, isTerritory: false, isActive: true },
  { id: 'pa', name: 'Pennsylvania', code: 'PA', slug: 'pennsylvania', population: 12_961_683, isTerritory: false, isActive: true },
  { id: 'il', name: 'Illinois', code: 'IL', slug: 'illinois', population: 12_549_689, isTerritory: false, isActive: true },
  { id: 'oh', name: 'Ohio', code: 'OH', slug: 'ohio', population: 11_785_935, isTerritory: false, isActive: true },
  { id: 'ga', name: 'Georgia', code: 'GA', slug: 'georgia', population: 11_029_227, isTerritory: false, isActive: true },
  { id: 'nc', name: 'North Carolina', code: 'NC', slug: 'north-carolina', population: 10_835_491, isTerritory: false, isActive: true },
  { id: 'mi', name: 'Michigan', code: 'MI', slug: 'michigan', population: 10_037_261, isTerritory: false, isActive: true },
  { id: 'nj', name: 'New Jersey', code: 'NJ', slug: 'new-jersey', population: 9_290_841, isTerritory: false, isActive: true },
  { id: 'va', name: 'Virginia', code: 'VA', slug: 'virginia', population: 8_715_698, isTerritory: false, isActive: true },
  { id: 'wa', name: 'Washington', code: 'WA', slug: 'washington', population: 7_812_880, isTerritory: false, isActive: true },
  { id: 'az', name: 'Arizona', code: 'AZ', slug: 'arizona', population: 7_431_344, isTerritory: false, isActive: true },
  { id: 'tn', name: 'Tennessee', code: 'TN', slug: 'tennessee', population: 7_126_489, isTerritory: false, isActive: true },
  { id: 'ma', name: 'Massachusetts', code: 'MA', slug: 'massachusetts', population: 7_001_399, isTerritory: false, isActive: true },
  { id: 'in', name: 'Indiana', code: 'IN', slug: 'indiana', population: 6_862_199, isTerritory: false, isActive: true },
  { id: 'mo', name: 'Missouri', code: 'MO', slug: 'missouri', population: 6_196_156, isTerritory: false, isActive: true },
  { id: 'md', name: 'Maryland', code: 'MD', slug: 'maryland', population: 6_180_253, isTerritory: false, isActive: true },
  { id: 'wi', name: 'Wisconsin', code: 'WI', slug: 'wisconsin', population: 5_910_955, isTerritory: false, isActive: true },
  { id: 'co', name: 'Colorado', code: 'CO', slug: 'colorado', population: 5_877_610, isTerritory: false, isActive: true },
  { id: 'mn', name: 'Minnesota', code: 'MN', slug: 'minnesota', population: 5_737_915, isTerritory: false, isActive: true },
  { id: 'sc', name: 'South Carolina', code: 'SC', slug: 'south-carolina', population: 5_373_555, isTerritory: false, isActive: true },
  { id: 'al', name: 'Alabama', code: 'AL', slug: 'alabama', population: 5_108_468, isTerritory: false, isActive: true },
  { id: 'la', name: 'Louisiana', code: 'LA', slug: 'louisiana', population: 4_573_749, isTerritory: false, isActive: true },
  { id: 'ky', name: 'Kentucky', code: 'KY', slug: 'kentucky', population: 4_526_154, isTerritory: false, isActive: true },
  { id: 'or', name: 'Oregon', code: 'OR', slug: 'oregon', population: 4_233_358, isTerritory: false, isActive: true },
  { id: 'ok', name: 'Oklahoma', code: 'OK', slug: 'oklahoma', population: 4_053_824, isTerritory: false, isActive: true },
  { id: 'ct', name: 'Connecticut', code: 'CT', slug: 'connecticut', population: 3_617_176, isTerritory: false, isActive: true },
  { id: 'ut', name: 'Utah', code: 'UT', slug: 'utah', population: 3_417_734, isTerritory: false, isActive: true },
  { id: 'ia', name: 'Iowa', code: 'IA', slug: 'iowa', population: 3_207_004, isTerritory: false, isActive: true },
  { id: 'nv', name: 'Nevada', code: 'NV', slug: 'nevada', population: 3_194_176, isTerritory: false, isActive: true },
  { id: 'ar', name: 'Arkansas', code: 'AR', slug: 'arkansas', population: 3_067_732, isTerritory: false, isActive: true },
  { id: 'ks', name: 'Kansas', code: 'KS', slug: 'kansas', population: 2_940_546, isTerritory: false, isActive: true },
  { id: 'ms', name: 'Mississippi', code: 'MS', slug: 'mississippi', population: 2_939_690, isTerritory: false, isActive: true },
  { id: 'nm', name: 'New Mexico', code: 'NM', slug: 'new-mexico', population: 2_114_371, isTerritory: false, isActive: true },
  { id: 'ne', name: 'Nebraska', code: 'NE', slug: 'nebraska', population: 1_978_379, isTerritory: false, isActive: true },
  { id: 'id', name: 'Idaho', code: 'ID', slug: 'idaho', population: 1_964_726, isTerritory: false, isActive: true },
  { id: 'wv', name: 'West Virginia', code: 'WV', slug: 'west-virginia', population: 1_770_071, isTerritory: false, isActive: true },
  { id: 'hi', name: 'Hawaii', code: 'HI', slug: 'hawaii', population: 1_435_138, isTerritory: false, isActive: true },
  { id: 'nh', name: 'New Hampshire', code: 'NH', slug: 'new-hampshire', population: 1_402_054, isTerritory: false, isActive: true },
  { id: 'me', name: 'Maine', code: 'ME', slug: 'maine', population: 1_395_722, isTerritory: false, isActive: true },
  { id: 'mt', name: 'Montana', code: 'MT', slug: 'montana', population: 1_132_812, isTerritory: false, isActive: true },
  { id: 'ri', name: 'Rhode Island', code: 'RI', slug: 'rhode-island', population: 1_095_962, isTerritory: false, isActive: true },
  { id: 'de', name: 'Delaware', code: 'DE', slug: 'delaware', population: 1_031_890, isTerritory: false, isActive: true },
  { id: 'sd', name: 'South Dakota', code: 'SD', slug: 'south-dakota', population: 919_318, isTerritory: false, isActive: true },
  { id: 'nd', name: 'North Dakota', code: 'ND', slug: 'north-dakota', population: 783_926, isTerritory: false, isActive: true },
  { id: 'ak', name: 'Alaska', code: 'AK', slug: 'alaska', population: 733_406, isTerritory: false, isActive: true },
  { id: 'dc', name: 'District of Columbia', code: 'DC', slug: 'district-of-columbia', population: 678_972, isTerritory: false, isActive: true },
  { id: 'vt', name: 'Vermont', code: 'VT', slug: 'vermont', population: 647_464, isTerritory: false, isActive: true },
  { id: 'wy', name: 'Wyoming', code: 'WY', slug: 'wyoming', population: 584_057, isTerritory: false, isActive: true },

  // Territories
  { id: 'pr', name: 'Puerto Rico', code: 'PR', slug: 'puerto-rico', population: 3_205_691, isTerritory: true, isActive: true },
  { id: 'gu', name: 'Guam', code: 'GU', slug: 'guam', population: 153_836, isTerritory: true, isActive: true },
  { id: 'vi', name: 'U.S. Virgin Islands', code: 'VI', slug: 'us-virgin-islands', population: 87_146, isTerritory: true, isActive: true },
  { id: 'as', name: 'American Samoa', code: 'AS', slug: 'american-samoa', population: 43_914, isTerritory: true, isActive: true },
  { id: 'mp', name: 'Northern Mariana Islands', code: 'MP', slug: 'northern-mariana-islands', population: 47_329, isTerritory: true, isActive: true },
];

export function getStateBySlug(slug: string): StateDefinition | undefined {
  const normalized = slug.toLowerCase().replace(/^\//, '');
  return STATE_REGISTRY.find((s) => s.slug === normalized || s.code.toLowerCase() === normalized);
}
