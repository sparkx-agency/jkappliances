import type { Metadata } from 'next';
import { generateCanonicalUrl } from '@/utils/canonical';

export const metadata: Metadata = {
  title: 'York Appliance Repair | Same-Day Service | JK Appliances',
  description: 'Professional appliance repair in York and surrounding areas. Expert technicians, same-day service, and competitive pricing for all major brands and models.',
  alternates: {
    canonical: generateCanonicalUrl('/appliance-repair-york'),
  },
  openGraph: {
    title: 'York Appliance Repair Services | JK Appliances',
    description: 'Fast, reliable appliance repair in York. Our certified technicians service all brands including Samsung, LG, Whirlpool, and more with same-day appointments available.',
    url: generateCanonicalUrl('/appliance-repair-york'),
    siteName: 'JK Appliances',
    locale: 'en_CA',
    type: 'website',
    images: [
      {
        url: '/images/areas/toronto-og.webp', // Using Toronto image as fallback
        width: 1200,
        height: 630,
        alt: 'Appliance repair services in York'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Expert Appliance Repair in York | JK Appliances',
    description: 'Professional appliance repair throughout York. Same-day service, certified technicians, and all major brands repaired.',
    images: ['/images/areas/toronto-twitter.webp'] // Using Toronto image as fallback
  },
  keywords: [
    'York appliance repair', 
    'appliance repair York', 
    'York refrigerator repair', 
    'York washer repair', 
    'York dryer repair', 
    'York dishwasher repair', 
    'Weston appliance service', 
    'Junction Triangle appliance repair',
    'same day appliance repair York',
    'heritage home appliance repair York'
  ]
}; 