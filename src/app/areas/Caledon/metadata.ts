import type { Metadata } from 'next';
import { generateCanonicalUrl } from '@/utils/canonical';

export const metadata: Metadata = {
  title: 'Caledon Appliance Repair | Same-Day Service | JK Appliances',
  description: 'Professional appliance repair in Caledon, Bolton, Caledon East, and scenic villages. Same-day service for rural homes and properties across Caledon with expert technicians for all major brands.',
  alternates: {
    canonical: generateCanonicalUrl('/appliance-repair-caledon'),
  },
  openGraph: {
    title: 'Caledon Appliance Repair Services | JK Appliances',
    description: 'Fast, reliable appliance repair throughout Caledon including Bolton, Caledon Village, Belfountain, and rural areas. Our certified technicians service both heritage homes and modern properties with same-day appointments available.',
    url: generateCanonicalUrl('/appliance-repair-caledon'),
    siteName: 'JK Appliances',
    locale: 'en_CA',
    type: 'website',
    images: [
      {
        url: '/images/areas/caledon-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Appliance repair services in Caledon'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Expert Appliance Repair in Caledon | JK Appliances',
    description: 'Professional appliance repair throughout Bolton, Caledon Village, Belfountain, and all of Caledon. Same-day service, certified technicians, and expertise in both rural and urban properties.',
    images: ['/images/areas/caledon-twitter.jpg']
  },
  keywords: [
    'Caledon appliance repair', 
    'appliance repair Caledon', 
    'Bolton appliance service',
    'Caledon East appliance repair', 
    'Caledon Village repair service',
    'Belfountain appliance repair',
    'Alton appliance service',
    'Inglewood appliance repair',
    'rural home appliance repair',
    'heritage home appliances Caledon',
    'same day appliance repair Caledon',
    'refrigerator repair Bolton',
    'washer repair Caledon East',
    'dryer repair Belfountain',
    'dishwasher repair Caledon'
  ]
}; 