import type { Metadata } from 'next';
import { generateCanonicalUrl } from '@/utils/canonical';

export const metadata: Metadata = {
  title: 'Markham Appliance Repair | Same-Day Service | JK Appliances',
  description: 'Professional appliance repair in Markham and surrounding areas. Expert technicians, same-day service, and competitive pricing for all major brands and models.',
  alternates: {
    canonical: generateCanonicalUrl('/appliance-repair-markham'),
  },
  openGraph: {
    title: 'Markham Appliance Repair Services | JK Appliances',
    description: 'Fast, reliable appliance repair in Markham. Our certified technicians service all brands including Samsung, LG, Whirlpool, and more with same-day appointments available.',
    url: generateCanonicalUrl('/appliance-repair-markham'),
    siteName: 'JK Appliances',
    locale: 'en_CA',
    type: 'website',
    images: [
      {
        url: '/images/areas/toronto-og.webp', // Using Toronto image as fallback
        width: 1200,
        height: 630,
        alt: 'Appliance repair services in Markham'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Expert Appliance Repair in Markham | JK Appliances',
    description: 'Professional appliance repair throughout Markham. Same-day service, certified technicians, and all major brands repaired.',
    images: ['/images/areas/toronto-twitter.webp'] // Using Toronto image as fallback
  },
  keywords: [
    'Markham appliance repair', 
    'appliance repair Markham', 
    'Markham refrigerator repair', 
    'Markham washer repair', 
    'Markham dryer repair', 
    'Markham dishwasher repair', 
    'Unionville appliance service', 
    'Thornhill appliance repair',
    'same day appliance repair Markham',
    'smart appliance repair Markham'
  ]
}; 