import type { Metadata } from 'next';
import { generateCanonicalUrl } from '@/utils/canonical';

export const metadata: Metadata = {
  title: 'Vaughan Appliance Repair | Same-Day Service | JK Appliances',
  description: 'Professional appliance repair in Vaughan and surrounding areas. Expert technicians, same-day service, and competitive pricing for all major brands and models.',
  alternates: {
    canonical: generateCanonicalUrl('/appliance-repair-vaughan'),
  },
  openGraph: {
    title: 'Vaughan Appliance Repair Services | JK Appliances',
    description: 'Fast, reliable appliance repair in Vaughan. Our certified technicians service all brands including Samsung, LG, Whirlpool, and more with same-day appointments available.',
    url: generateCanonicalUrl('/appliance-repair-vaughan'),
    siteName: 'JK Appliances',
    locale: 'en_CA',
    type: 'website',
    images: [
      {
        url: '/images/areas/vaughan-og.webp',
        width: 1200,
        height: 630,
        alt: 'Appliance repair services in Vaughan'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Expert Appliance Repair in Vaughan | JK Appliances',
    description: 'Professional appliance repair throughout Vaughan. Same-day service, certified technicians, and all major brands repaired.',
    images: ['/images/areas/vaughan-twitter.webp']
  },
  keywords: [
    'Vaughan appliance repair', 
    'appliance repair Vaughan', 
    'Woodbridge appliance repair', 
    'Maple appliance repair', 
    'Thornhill appliance repair', 
    'Kleinburg appliance repair', 
    'high-end appliance repair Vaughan', 
    'luxury appliance repair Vaughan',
    'same day appliance repair Vaughan',
    'refrigerator repair Vaughan',
    'washer repair Vaughan',
    'dryer repair Vaughan'
  ]
}; 