import type { Metadata } from 'next';
import { generateCanonicalUrl } from '@/utils/canonical';

export const metadata: Metadata = {
  title: 'Kleinburg Appliance Repair | Same-Day Service | JK Appliances',
  description: 'Professional appliance repair in Kleinburg and surrounding areas. Expert technicians, same-day service, and competitive pricing for all major brands and models.',
  alternates: {
    canonical: generateCanonicalUrl('/appliance-repair-kleinburg'),
  },
  openGraph: {
    title: 'Kleinburg Appliance Repair Services | JK Appliances',
    description: 'Fast, reliable appliance repair in Kleinburg. Our certified technicians service all brands including Samsung, LG, Whirlpool, and more with same-day appointments available.',
    url: generateCanonicalUrl('/appliance-repair-kleinburg'),
    siteName: 'JK Appliances',
    locale: 'en_CA',
    type: 'website',
    images: [
      {
        url: '/images/areas/kleinburg-og.webp',
        width: 1200,
        height: 630,
        alt: 'Appliance repair services in Kleinburg'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Expert Appliance Repair in Kleinburg | JK Appliances',
    description: 'Professional appliance repair throughout Kleinburg. Same-day service, certified technicians, and all major brands repaired.',
    images: ['/images/areas/kleinburg-twitter.webp']
  },
  keywords: [
    'Kleinburg appliance repair', 
    'appliance repair Kleinburg', 
    'Copper Creek appliance repair', 
    'Old Kleinburg appliance repair', 
    'Nashville Kleinburg appliance repair', 
    'Kleinburg refrigerator repair', 
    'Kleinburg washer repair', 
    'Kleinburg dryer repair', 
    'Kleinburg dishwasher repair', 
    'luxury appliance repair Kleinburg',
    'high-end appliance service Kleinburg',
    'same day appliance repair Kleinburg'
  ]
}; 