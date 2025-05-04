import type { Metadata } from 'next';
import { generateCanonicalUrl } from '@/utils/canonical';

export const metadata: Metadata = {
  title: 'North York Appliance Repair | Same-Day Service | JK Appliances',
  description: 'Professional appliance repair in North York and surrounding areas. Expert technicians, same-day service, and competitive pricing for all major brands and models.',
  alternates: {
    canonical: generateCanonicalUrl('/appliance-repair-north-york'),
  },
  openGraph: {
    title: 'North York Appliance Repair Services | JK Appliances',
    description: 'Fast, reliable appliance repair in North York. Our certified technicians service all brands including Samsung, LG, Whirlpool, and more with same-day appointments available.',
    url: generateCanonicalUrl('/appliance-repair-north-york'),
    siteName: 'JK Appliances',
    locale: 'en_CA',
    type: 'website',
    images: [
      {
        url: '/images/areas/northyork-og.webp',
        width: 1200,
        height: 630,
        alt: 'Appliance repair services in North York'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Expert Appliance Repair in North York | JK Appliances',
    description: 'Professional appliance repair throughout North York. Same-day service, certified technicians, and all major brands repaired.',
    images: ['/images/areas/northyork-twitter.webp']
  },
  keywords: [
    'North York appliance repair', 
    'appliance repair North York', 
    'North York refrigerator repair', 
    'North York washer repair', 
    'North York dryer repair', 
    'North York dishwasher repair', 
    'Willowdale appliance repair', 
    'Bayview Village appliance repair',
    'Bridle Path appliance repair',
    'luxury appliance repair North York',
    'condo appliance repair North York',
    'same day appliance repair North York'
  ]
}; 