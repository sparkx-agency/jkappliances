import type { Metadata } from 'next';
import { generateCanonicalUrl } from '@/utils/canonical';

export const metadata: Metadata = {
  title: 'Newmarket Appliance Repair | Same-Day Service | JK Appliances',
  description: 'Professional appliance repair in Newmarket and surrounding areas. Expert technicians, same-day service, and competitive pricing for all major brands and models.',
  alternates: {
    canonical: generateCanonicalUrl('/appliance-repair-newmarket'),
  },
  openGraph: {
    title: 'Newmarket Appliance Repair Services | JK Appliances',
    description: 'Fast, reliable appliance repair in Newmarket. Our certified technicians service all brands including Samsung, LG, Whirlpool, and more with same-day appointments available.',
    url: generateCanonicalUrl('/appliance-repair-newmarket'),
    siteName: 'JK Appliances',
    locale: 'en_CA',
    type: 'website',
    images: [
      {
        url: '/images/areas/newmarket-og.webp',
        width: 1200,
        height: 630,
        alt: 'Appliance repair services in Newmarket'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Expert Appliance Repair in Newmarket | JK Appliances',
    description: 'Professional appliance repair throughout Newmarket. Same-day service, certified technicians, and all major brands repaired.',
    images: ['/images/areas/newmarket-twitter.webp']
  },
  keywords: [
    'Newmarket appliance repair', 
    'appliance repair Newmarket', 
    'Old Newmarket appliance repair', 
    'Stonehaven appliance repair', 
    'Woodland Hills appliance repair', 
    'Newmarket refrigerator repair', 
    'Newmarket washer repair', 
    'Newmarket dryer repair', 
    'Newmarket dishwasher repair', 
    'historic home appliance repair Newmarket',
    'smart appliance repair Newmarket',
    'same day appliance repair Newmarket'
  ]
}; 