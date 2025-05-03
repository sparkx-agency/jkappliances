import type { Metadata } from 'next';
import { generateCanonicalUrl } from '@/utils/canonical';

export const metadata: Metadata = {
  title: 'Ajax Appliance Repair | Same-Day Service | JK Appliances',
  description: 'Professional appliance repair in Ajax and surrounding areas. Expert technicians, same-day service, and competitive pricing for all major brands and models.',
  alternates: {
    canonical: generateCanonicalUrl('/appliance-repair-ajax'),
  },
  openGraph: {
    title: 'Ajax Appliance Repair Services | JK Appliances',
    description: 'Fast, reliable appliance repair in Ajax. Our certified technicians service all brands including Samsung, LG, Whirlpool, and more with same-day appointments available.',
    url: generateCanonicalUrl('/appliance-repair-ajax'),
    siteName: 'JK Appliances',
    locale: 'en_CA',
    type: 'website',
    images: [
      {
        url: '/images/areas/ajax-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Appliance repair services in Ajax'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Expert Appliance Repair in Ajax | JK Appliances',
    description: 'Professional appliance repair throughout Ajax. Same-day service, certified technicians, and all major brands repaired.',
    images: ['/images/areas/ajax-twitter.jpg']
  },
  keywords: [
    'Ajax appliance repair', 
    'appliance repair Ajax', 
    'Ajax refrigerator repair', 
    'Ajax washer repair', 
    'Ajax dryer repair', 
    'Ajax dishwasher repair', 
    'Downtown Ajax appliance service', 
    'Westney Heights appliance repair',
    'same day appliance repair Ajax',
    'Lakeside appliance repair Ajax'
  ]
}; 