import type { Metadata } from 'next';
import { generateCanonicalUrl } from '@/utils/canonical';

export const metadata: Metadata = {
  title: 'Etobicoke Appliance Repair | Same-Day Service | JK Appliances',
  description: 'Professional appliance repair throughout Etobicoke. From lakefront properties in Mimico to family homes in The Kingsway and Rexdale. Expert service for all major brands and models.',
  alternates: {
    canonical: generateCanonicalUrl('/appliance-repair-etobicoke'),
  },
  openGraph: {
    title: 'Etobicoke Appliance Repair Services | JK Appliances',
    description: 'Fast, reliable appliance repair in Etobicoke. Our certified technicians service lakefront properties, established neighborhoods, and northern communities with same-day appointments available.',
    url: generateCanonicalUrl('/appliance-repair-etobicoke'),
    siteName: 'JK Appliances',
    locale: 'en_CA',
    type: 'website',
    images: [
      {
        url: '/images/areas/etobicoke-og.webp',
        width: 1200,
        height: 630,
        alt: 'Appliance repair services in Etobicoke'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Expert Appliance Repair in Etobicoke | JK Appliances',
    description: 'Professional appliance repair throughout Etobicoke. Same-day service, certified technicians, and expertise for lakefront condos to single-family homes.',
    images: ['/images/areas/etobicoke-twitter.webp']
  },
  keywords: [
    'Etobicoke appliance repair', 
    'appliance repair Etobicoke', 
    'The Kingsway appliance service',
    'Mimico appliance repair', 
    'Humber Bay appliance service',
    'Rexdale appliance repair',
    'Long Branch appliance service',
    'Alderwood appliance repair',
    'lakefront condo appliance repair',
    'Islington appliance service',
    'same day appliance repair Etobicoke',
    'refrigerator repair Etobicoke',
    'washer repair The Kingsway',
    'dryer repair Mimico',
    'dishwasher repair Etobicoke'
  ]
}; 