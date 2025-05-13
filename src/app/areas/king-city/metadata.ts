import type { Metadata } from 'next';
import { generateCanonicalUrl } from '@/utils/canonical';

export const metadata: Metadata = {
  title: 'King City Appliance Repair | Same-Day Service | JK Appliances',
  description: 'Professional appliance repair in King City and surrounding areas. Expert technicians, same-day service, and competitive pricing for all major brands and models.',
  alternates: {
    canonical: generateCanonicalUrl('/appliance-repair-king-city'),
  },
  openGraph: {
    title: 'King City Appliance Repair Services | JK Appliances',
    description: 'Fast, reliable appliance repair in King City. Our certified technicians service all brands including Samsung, LG, Whirlpool, and more with same-day appointments available.',
    url: generateCanonicalUrl('/appliance-repair-king-city'),
    siteName: 'JK Appliances',
    locale: 'en_CA',
    type: 'website',
    images: [
      {
        url: '/images/areas/toronto-og.webp',
        width: 1200,
        height: 630,
        alt: 'Appliance repair services in King City'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Expert Appliance Repair in King City | JK Appliances',
    description: 'Professional appliance repair throughout King City. Same-day service, certified technicians, and all major brands repaired.',
    images: ['/images/areas/toronto-twitter.webp']
  },
  keywords: [
    'King City appliance repair', 
    'appliance repair King City', 
    'King City refrigerator repair', 
    'King City washer repair', 
    'King City dryer repair', 
    'King City dishwasher repair', 
    'Kingscross Estates appliance service', 
    'King Heights appliance repair',
    'same day appliance repair King City',
    'luxury appliance repair King City'
  ]
}; 