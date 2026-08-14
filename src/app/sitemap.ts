import { MetadataRoute } from 'next';
import { CANONICAL_CATEGORIES, CANONICAL_AGENCIES, CANONICAL_RECIPIENTS } from '@/lib/config/entities';
import { STATES_DATA } from '@/lib/data/spendingData';

const BASE_URL = 'https://usa-spending.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/`, lastModified: new Date(), changeFrequency: 'daily', priority: 1.0 },
    { url: `${BASE_URL}/spending`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.9 },
    { url: `${BASE_URL}/spending-breakdown`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.9 },
    { url: `${BASE_URL}/spending-by-year`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE_URL}/explorer`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE_URL}/calculator`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE_URL}/categories`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE_URL}/agencies`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE_URL}/states`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE_URL}/recipients`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE_URL}/data-sources`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
  ];

  const categoryRoutes: MetadataRoute.Sitemap = CANONICAL_CATEGORIES.map((c) => ({
    url: `${BASE_URL}${c.canonicalUrl}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  const agencyRoutes: MetadataRoute.Sitemap = CANONICAL_AGENCIES.map((a) => ({
    url: `${BASE_URL}${a.canonicalUrl}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  const recipientRoutes: MetadataRoute.Sitemap = CANONICAL_RECIPIENTS.map((r) => ({
    url: `${BASE_URL}${r.canonicalUrl}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  const stateRoutes: MetadataRoute.Sitemap = STATES_DATA.map((s) => ({
    url: `${BASE_URL}/states/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  return [
    ...staticRoutes,
    ...categoryRoutes,
    ...agencyRoutes,
    ...recipientRoutes,
    ...stateRoutes,
  ];
}
