import type { Metadata } from 'next';
import { generateCanonicalUrl } from '@/utils/canonical';

export const metadata: Metadata = {
  title: 'Aurora Appliance Repair | Same-Day Service | JK Appliances',
  description: 'Professional appliance repair in Aurora and surrounding areas. Expert technicians, same-day service, and competitive pricing for all major brands and models.',
  alternates: {
    canonical: generateCanonicalUrl('/appliance-repair-aurora'),
  },
  openGraph: {
    title: 'Aurora Appliance Repair Services | JK Appliances',
    description: 'Fast, reliable appliance repair in Aurora. Our certified technicians service all brands including Samsung, LG, Whirlpool, and more with same-day appointments available.',
    url: generateCanonicalUrl('/appliance-repair-aurora'),
    siteName: 'JK Appliances',
    locale: 'en_CA',
    type: 'website',
    images: [
      {
        url: '/images/areas/aurora-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Appliance repair services in Aurora'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Expert Appliance Repair in Aurora | JK Appliances',
    description: 'Professional appliance repair throughout Aurora. Same-day service, certified technicians, and all major brands repaired.',
    images: ['/images/areas/aurora-twitter.jpg']
  },
  keywords: [
    'Aurora appliance repair', 
    'appliance repair Aurora', 
    'Aurora refrigerator repair', 
    'Aurora washer repair', 
    'Aurora dryer repair', 
    'Aurora dishwasher repair', 
    'downtown Aurora appliance service', 
    'Aurora Highlands appliance repair',
    'same day appliance repair Aurora',
    'heritage home appliance repair Aurora'
  ]
}; 