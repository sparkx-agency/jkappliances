import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/api/',
        '/admin/',
        '/private/',
        '/temp/',
      ],
    },
    sitemap: 'https://jkappliancerepair.ca/sitemap.xml',
  };
} 