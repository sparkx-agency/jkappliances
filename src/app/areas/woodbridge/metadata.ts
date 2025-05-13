import type { Metadata } from 'next';
import { generateCanonicalUrl } from '@/utils/canonical';

export const metadata: Metadata = {
  title: 'Woodbridge Appliance Repair | Same-Day Service | JK Appliances',
  description: 'Professional appliance repair in Woodbridge and surrounding areas. Expert technicians, same-day service, and competitive pricing for all major brands and models.',
  alternates: {
    canonical: generateCanonicalUrl('/appliance-repair-woodbridge'),
  },
  openGraph: {
    title: 'Woodbridge Appliance Repair Services | JK Appliances',
    description: 'Fast, reliable appliance repair in Woodbridge. Our certified technicians service all brands including Samsung, LG, Whirlpool, and more with same-day appointments available.',
    url: generateCanonicalUrl('/appliance-repair-woodbridge'),
    siteName: 'JK Appliances',
    locale: 'en_CA',
    type: 'website',
    images: [
      {
        url: '/images/areas/woodbridge-og.webp',
        width: 1200,
        height: 630,
        alt: 'Appliance repair services in Woodbridge'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Expert Appliance Repair in Woodbridge | JK Appliances',
    description: 'Professional appliance repair throughout Woodbridge. Same-day service, certified technicians, and all major brands repaired.',
    images: ['/images/areas/woodbridge-twitter.webp']
  },
  keywords: [
    'Woodbridge appliance repair', 
    'appliance repair Woodbridge', 
    'Woodbridge refrigerator repair', 
    'Woodbridge washer repair', 
    'Woodbridge dryer repair', 
    'Woodbridge dishwasher repair', 
    'Islington Woods appliance repair', 
    'Vellore Village appliance repair',
    'Vaughan appliance repair',
    'same day appliance repair Woodbridge',
    'luxury appliance repair Woodbridge',
    'smart appliance repair Woodbridge'
  ]
}; 