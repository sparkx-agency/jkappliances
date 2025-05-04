import type { Metadata } from 'next';
import { generateCanonicalUrl } from '@/utils/canonical';

export const metadata: Metadata = {
  title: 'Brampton Appliance Repair | Same-Day Service | JK Appliances',
  description: 'Professional appliance repair in Brampton and surrounding areas. Expert technicians, same-day service, and competitive pricing for all major brands and models.',
  alternates: {
    canonical: generateCanonicalUrl('/appliance-repair-brampton'),
  },
  openGraph: {
    title: 'Brampton Appliance Repair Services | JK Appliances',
    description: 'Fast, reliable appliance repair in Brampton. Our certified technicians service all brands including Samsung, LG, Whirlpool, and more with same-day appointments available.',
    url: generateCanonicalUrl('/appliance-repair-brampton'),
    siteName: 'JK Appliances',
    locale: 'en_CA',
    type: 'website',
    images: [
      {
        url: '/images/areas/brampton-og.webp',
        width: 1200,
        height: 630,
        alt: 'Appliance repair services in Brampton'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Expert Appliance Repair in Brampton | JK Appliances',
    description: 'Professional appliance repair throughout Brampton. Same-day service, certified technicians, and all major brands repaired.',
    images: ['/images/areas/brampton-twitter.webp']
  },
  keywords: [
    'Brampton appliance repair', 
    'appliance repair Brampton', 
    'Brampton refrigerator repair', 
    'Brampton washer repair', 
    'Brampton dryer repair', 
    'Brampton dishwasher repair', 
    'Mount Pleasant appliance service', 
    'Springdale appliance repair',
    'same day appliance repair Brampton',
    'family home appliance repair Brampton'
  ]
}; 