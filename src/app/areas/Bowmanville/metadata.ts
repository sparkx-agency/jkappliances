import type { Metadata } from 'next';
import { generateCanonicalUrl } from '@/utils/canonical';

export const metadata: Metadata = {
  title: 'Bowmanville Appliance Repair | Same-Day Service | JK Appliances',
  description: 'Professional appliance repair in Bowmanville and surrounding areas. Expert technicians, same-day service, and competitive pricing for all major brands and models.',
  alternates: {
    canonical: generateCanonicalUrl('/appliance-repair-bowmanville'),
  },
  openGraph: {
    title: 'Bowmanville Appliance Repair Services | JK Appliances',
    description: 'Fast, reliable appliance repair in Bowmanville. Our certified technicians service all brands including Samsung, LG, Whirlpool, and more with same-day appointments available.',
    url: generateCanonicalUrl('/appliance-repair-bowmanville'),
    siteName: 'JK Appliances',
    locale: 'en_CA',
    type: 'website',
    images: [
      {
        url: '/images/areas/bowmanville-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Appliance repair services in Bowmanville'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Expert Appliance Repair in Bowmanville | JK Appliances',
    description: 'Professional appliance repair throughout Bowmanville. Same-day service, certified technicians, and all major brands repaired.',
    images: ['/images/areas/bowmanville-twitter.jpg']
  },
  keywords: [
    'Bowmanville appliance repair', 
    'appliance repair Bowmanville', 
    'Bowmanville refrigerator repair', 
    'Bowmanville washer repair', 
    'Bowmanville dryer repair', 
    'Bowmanville dishwasher repair', 
    'downtown Bowmanville appliance service', 
    'North Bowmanville appliance repair',
    'same day appliance repair Bowmanville',
    'Clarington appliance repair service'
  ]
}; 