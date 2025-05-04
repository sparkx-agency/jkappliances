import type { Metadata } from 'next';
import { generateCanonicalUrl } from '@/utils/canonical';

export const metadata: Metadata = {
  title: 'Oakville Appliance Repair | Same-Day Service | JK Appliances',
  description: 'Professional appliance repair in Oakville and surrounding areas. Expert technicians, same-day service, and competitive pricing for all major brands and models.',
  alternates: {
    canonical: generateCanonicalUrl('/appliance-repair-oakville'),
  },
  openGraph: {
    title: 'Oakville Appliance Repair Services | JK Appliances',
    description: 'Fast, reliable appliance repair in Oakville. Our certified technicians service all brands including Samsung, LG, Whirlpool, and more with same-day appointments available.',
    url: generateCanonicalUrl('/appliance-repair-oakville'),
    siteName: 'JK Appliances',
    locale: 'en_CA',
    type: 'website',
    images: [
      {
        url: '/images/areas/oakville-og.webp',
        width: 1200,
        height: 630,
        alt: 'Appliance repair services in Oakville'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Expert Appliance Repair in Oakville | JK Appliances',
    description: 'Professional appliance repair throughout Oakville. Same-day service, certified technicians, and all major brands repaired.',
    images: ['/images/areas/oakville-twitter.webp']
  },
  keywords: [
    'Oakville appliance repair', 
    'appliance repair Oakville', 
    'Oakville refrigerator repair', 
    'Oakville washer repair', 
    'Oakville dryer repair', 
    'Oakville dishwasher repair', 
    'Glen Abbey appliance repair', 
    'Old Oakville appliance repair',
    'Bronte appliance repair',
    'luxury appliance repair Oakville',
    'same day appliance repair Oakville',
    'high-end appliance repair Oakville'
  ]
}; 