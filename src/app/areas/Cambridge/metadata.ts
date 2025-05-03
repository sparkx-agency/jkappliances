import type { Metadata } from 'next';
import { generateCanonicalUrl } from '@/utils/canonical';

export const metadata: Metadata = {
  title: 'Cambridge Appliance Repair | Same-Day Service | JK Appliances',
  description: 'Professional appliance repair in Cambridge and surrounding areas. Expert technicians, same-day service, and competitive pricing for all major brands and models.',
  alternates: {
    canonical: generateCanonicalUrl('/appliance-repair-cambridge'),
  },
  openGraph: {
    title: 'Cambridge Appliance Repair Services | JK Appliances',
    description: 'Fast, reliable appliance repair in Cambridge. Our certified technicians service all brands including Samsung, LG, Whirlpool, and more with same-day appointments available.',
    url: generateCanonicalUrl('/appliance-repair-cambridge'),
    siteName: 'JK Appliances',
    locale: 'en_CA',
    type: 'website',
    images: [
      {
        url: '/images/areas/cambridge-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Appliance repair services in Cambridge'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Expert Appliance Repair in Cambridge | JK Appliances',
    description: 'Professional appliance repair throughout Cambridge. Same-day service, certified technicians, and all major brands repaired.',
    images: ['/images/areas/cambridge-twitter.jpg']
  },
  keywords: [
    'Cambridge appliance repair', 
    'appliance repair Cambridge', 
    'Cambridge refrigerator repair', 
    'Cambridge washer repair', 
    'Cambridge dryer repair', 
    'Cambridge dishwasher repair', 
    'Galt appliance repair', 
    'Preston appliance repair',
    'Hespeler appliance repair',
    'same day appliance repair Cambridge',
    'heritage home appliance repair Cambridge'
  ]
}; 