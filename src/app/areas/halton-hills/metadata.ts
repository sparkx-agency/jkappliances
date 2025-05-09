import type { Metadata } from 'next';
import { generateCanonicalUrl } from '@/utils/canonical';

export const metadata: Metadata = {
  title: 'Halton Hills Appliance Repair | Same-Day Service | JK Appliances',
  description: 'Professional appliance repair in Halton Hills and surrounding areas. Expert technicians, same-day service, and competitive pricing for all major brands and models.',
  alternates: {
    canonical: generateCanonicalUrl('/appliance-repair-halton-hills'),
  },
  openGraph: {
    title: 'Halton Hills Appliance Repair Services | JK Appliances',
    description: 'Fast, reliable appliance repair in Halton Hills. Our certified technicians service all brands including Samsung, LG, Whirlpool, and more with same-day appointments available.',
    url: generateCanonicalUrl('/appliance-repair-halton-hills'),
    siteName: 'JK Appliances',
    locale: 'en_CA',
    type: 'website',
    images: [
      {
        url: '/images/areas/haltonhills-og.webp',
        width: 1200,
        height: 630,
        alt: 'Appliance repair services in Halton Hills'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Expert Appliance Repair in Halton Hills | JK Appliances',
    description: 'Professional appliance repair throughout Halton Hills. Same-day service, certified technicians, and all major brands repaired.',
    images: ['/images/areas/haltonhills-twitter.webp']
  },
  keywords: [
    'Halton Hills appliance repair', 
    'appliance repair Halton Hills', 
    'Georgetown appliance repair', 
    'Acton appliance repair', 
    'Glen Williams appliance repair', 
    'Halton Hills refrigerator repair', 
    'Halton Hills washer repair', 
    'Halton Hills dryer repair', 
    'Halton Hills dishwasher repair', 
    'Heritage home appliance repair',
    'same day appliance repair Halton Hills',
    'rural appliance repair Halton Hills'
  ]
}; 