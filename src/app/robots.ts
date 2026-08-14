import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/admin', '/api/', '/*?*'], // Prevent thin duplicate parameter URLs
    },
    sitemap: 'https://www.usaspending.us/sitemap.xml',
  };
}
