import type { Metadata } from 'next';
import { generateCanonicalUrl } from '@/utils/canonical';

export const metadata: Metadata = {
  title: 'Richmond Hill Appliance Repair | Same-Day Service | JK Appliances',
  description: 'Professional appliance repair in Richmond Hill and surrounding areas. Expert technicians, same-day service, and competitive pricing for all major brands and models.',
  alternates: {
    canonical: generateCanonicalUrl('/appliance-repair-richmond-hill'),
  },
  openGraph: {
    title: 'Richmond Hill Appliance Repair Services | JK Appliances',
    description: 'Fast, reliable appliance repair in Richmond Hill. Our certified technicians service all brands including Samsung, LG, Whirlpool, and more with same-day appointments available.',
    url: generateCanonicalUrl('/appliance-repair-richmond-hill'),
    siteName: 'JK Appliances',
    locale: 'en_CA',
    type: 'website',
    images: [
      {
        url: '/images/areas/richmondhill-og.webp',
        width: 1200,
        height: 630,
        alt: 'Appliance repair services in Richmond Hill'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Expert Appliance Repair in Richmond Hill | JK Appliances',
    description: 'Professional appliance repair throughout Richmond Hill. Same-day service, certified technicians, and all major brands repaired.',
    images: ['/images/areas/richmondhill-twitter.webp']
  },
  keywords: [
    'Richmond Hill appliance repair', 
    'appliance repair Richmond Hill', 
    'Richmond Hill refrigerator repair', 
    'Richmond Hill washer repair', 
    'Richmond Hill dryer repair', 
    'Richmond Hill dishwasher repair', 
    'Bayview Hill appliance repair', 
    'Oak Ridges appliance repair',
    'luxury appliance repair Richmond Hill',
    'same day appliance repair Richmond Hill',
    'high-end appliance repair Richmond Hill',
    'smart appliance repair Richmond Hill'
  ]
}; 