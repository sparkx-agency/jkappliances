import type { Metadata } from 'next';
import { generateCanonicalUrl } from '@/utils/canonical';

export const metadata: Metadata = {
  title: 'Clarington Appliance Repair | Same-Day Service | JK Appliances',
  description: 'Professional appliance repair in Clarington and surrounding areas. Expert technicians, same-day service, and competitive pricing for all major brands and models.',
  alternates: {
    canonical: generateCanonicalUrl('/appliance-repair-clarington'),
  },
  openGraph: {
    title: 'Clarington Appliance Repair Services | JK Appliances',
    description: 'Fast, reliable appliance repair in Bowmanville, Courtice, Newcastle, Orono and all of Clarington. Our certified technicians service all brands including Samsung, LG, Whirlpool, and more with same-day appointments available.',
    url: generateCanonicalUrl('/appliance-repair-clarington'),
    siteName: 'JK Appliances',
    locale: 'en_CA',
    type: 'website',
    images: [
      {
        url: '/images/areas/clarington-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Appliance repair services in Clarington'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Expert Appliance Repair in Clarington | JK Appliances',
    description: 'Professional appliance repair throughout Clarington. Same-day service, certified technicians, and all major brands repaired.',
    images: ['/images/areas/clarington-twitter.jpg']
  },
  keywords: [
    'Clarington appliance repair', 
    'appliance repair Clarington', 
    'Bowmanville appliance service',
    'Courtice appliance repair', 
    'Newcastle appliance repair',
    'Orono appliance service',
    'Durham Region appliance repair',
    'same day appliance repair Clarington',
    'refrigerator repair Clarington',
    'dishwasher repair Bowmanville',
    'washing machine repair Clarington'
  ]
}; 