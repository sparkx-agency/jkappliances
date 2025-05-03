import type { Metadata } from 'next';
import { generateCanonicalUrl } from '@/utils/canonical';

export const metadata: Metadata = {
  title: 'Burlington Appliance Repair | Same-Day Service | JK Appliances',
  description: 'Professional appliance repair in Burlington and surrounding areas. Expert technicians, same-day service, and competitive pricing for all major brands and models.',
  alternates: {
    canonical: generateCanonicalUrl('/appliance-repair-burlington'),
  },
  openGraph: {
    title: 'Burlington Appliance Repair Services | JK Appliances',
    description: 'Fast, reliable appliance repair in Burlington. Our certified technicians service all brands including Samsung, LG, Whirlpool, and more with same-day appointments available.',
    url: generateCanonicalUrl('/appliance-repair-burlington'),
    siteName: 'JK Appliances',
    locale: 'en_CA',
    type: 'website',
    images: [
      {
        url: '/images/areas/burlington-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Appliance repair services in Burlington'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Expert Appliance Repair in Burlington | JK Appliances',
    description: 'Professional appliance repair throughout Burlington. Same-day service, certified technicians, and all major brands repaired.',
    images: ['/images/areas/burlington-twitter.jpg']
  },
  keywords: [
    'Burlington appliance repair', 
    'appliance repair Burlington', 
    'Burlington refrigerator repair', 
    'Burlington washer repair', 
    'Burlington dryer repair', 
    'Burlington dishwasher repair', 
    'downtown Burlington appliance service', 
    'Aldershot appliance repair',
    'same day appliance repair Burlington',
    'lakefront home appliance repair Burlington'
  ]
}; 