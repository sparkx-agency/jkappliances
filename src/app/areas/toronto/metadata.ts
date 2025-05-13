import type { Metadata } from 'next';
import { generateCanonicalUrl } from '@/utils/canonical';

export const metadata: Metadata = {
  title: 'Toronto Appliance Repair | Same-Day Service | JK Appliances',
  description: 'Professional appliance repair in Toronto and surrounding areas. Expert technicians, same-day service, and competitive pricing for all major brands and models.',
  alternates: {
    canonical: generateCanonicalUrl('/appliance-repair-toronto'),
  },
  openGraph: {
    title: 'Toronto Appliance Repair Services | JK Appliances',
    description: 'Fast, reliable appliance repair in Toronto. Our certified technicians service all brands including Samsung, LG, Whirlpool, and more with same-day appointments available.',
    url: generateCanonicalUrl('/appliance-repair-toronto'),
    siteName: 'JK Appliances',
    locale: 'en_CA',
    type: 'website',
    images: [
      {
        url: '/images/areas/toronto-og.webp',
        width: 1200,
        height: 630,
        alt: 'Appliance repair services in Toronto'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Expert Appliance Repair in Toronto | JK Appliances',
    description: 'Professional appliance repair throughout Toronto. Same-day service, certified technicians, and all major brands repaired.',
    images: ['/images/areas/toronto-twitter.webp']
  },
  keywords: [
    'Toronto appliance repair', 
    'appliance repair Toronto', 
    'Toronto refrigerator repair', 
    'Toronto washer repair', 
    'Toronto dryer repair', 
    'Toronto dishwasher repair', 
    'downtown Toronto appliance service', 
    'North York appliance repair',
    'same day appliance repair Toronto',
    'condo appliance repair Toronto'
  ]
}; 