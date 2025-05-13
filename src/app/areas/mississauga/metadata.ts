import type { Metadata } from 'next';
import { generateCanonicalUrl } from '@/utils/canonical';

export const metadata: Metadata = {
  title: 'Mississauga Appliance Repair | Same-Day Service | JK Appliances',
  description: 'Professional appliance repair in Mississauga and surrounding areas. Expert technicians, same-day service, and competitive pricing for all major brands and models.',
  alternates: {
    canonical: generateCanonicalUrl('/appliance-repair-mississauga'),
  },
  openGraph: {
    title: 'Mississauga Appliance Repair Services | JK Appliances',
    description: 'Fast, reliable appliance repair in Mississauga. Our certified technicians service all brands including Samsung, LG, Whirlpool, and more with same-day appointments available.',
    url: generateCanonicalUrl('/appliance-repair-mississauga'),
    siteName: 'JK Appliances',
    locale: 'en_CA',
    type: 'website',
    images: [
      {
        url: '/images/areas/mississauga-og.webp',
        width: 1200,
        height: 630,
        alt: 'Appliance repair services in Mississauga'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Expert Appliance Repair in Mississauga | JK Appliances',
    description: 'Professional appliance repair throughout Mississauga. Same-day service, certified technicians, and all major brands repaired.',
    images: ['/images/areas/mississauga-twitter.webp']
  },
  keywords: [
    'Mississauga appliance repair', 
    'appliance repair Mississauga', 
    'Mississauga refrigerator repair', 
    'Mississauga washer repair', 
    'Mississauga dryer repair', 
    'Mississauga dishwasher repair', 
    'Square One appliance service', 
    'Port Credit appliance repair',
    'same day appliance repair Mississauga',
    'condo appliance repair Mississauga'
  ]
}; 