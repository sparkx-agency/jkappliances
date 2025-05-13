import type { Metadata } from 'next';
import { generateCanonicalUrl } from '@/utils/canonical';

export const metadata: Metadata = {
  title: 'Georgetown Appliance Repair | Same-Day Service | JK Appliances',
  description: 'Professional appliance repair in Georgetown, Halton Hills and surrounding areas. Expert technicians, same-day service, and competitive pricing for all major brands and models.',
  alternates: {
    canonical: generateCanonicalUrl('/appliance-repair-georgetown'),
  },
  openGraph: {
    title: 'Georgetown Appliance Repair Services | JK Appliances',
    description: 'Fast, reliable appliance repair in Georgetown. Our certified technicians service all brands including Samsung, LG, Whirlpool, and more with same-day appointments available.',
    url: generateCanonicalUrl('/appliance-repair-georgetown'),
    siteName: 'JK Appliances',
    locale: 'en_CA',
    type: 'website',
    images: [
      {
        url: '/images/areas/georgetown-og.webp',
        width: 1200,
        height: 630,
        alt: 'Appliance repair services in Georgetown'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Expert Appliance Repair in Georgetown | JK Appliances',
    description: 'Professional appliance repair throughout Georgetown. Same-day service, certified technicians, and all major brands repaired.',
    images: ['/images/areas/georgetown-twitter.webp']
  },
  keywords: [
    'Georgetown appliance repair', 
    'appliance repair Georgetown', 
    'Georgetown refrigerator repair', 
    'Georgetown washer repair', 
    'Georgetown dryer repair', 
    'Georgetown dishwasher repair', 
    'Halton Hills appliance repair', 
    'Downtown Georgetown appliance service',
    'same day appliance repair Georgetown',
    'appliance repair Delrex Georgetown',
    'Georgetown South appliance repair'
  ]
}; 