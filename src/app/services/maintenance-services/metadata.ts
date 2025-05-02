import { generateCanonicalUrl } from "@/utils/canonical";
import { Metadata } from "next";

// SEO Metadata
export const metadata: Metadata = {
    title: 'Professional Appliance Maintenance Services | Preventative Care | JK Appliances',
    description: 'Expert appliance maintenance for all brands and models. Our certified technicians provide preventative care and tune-ups to extend appliance lifespan and improve efficiency throughout Toronto and the GTA.',
    alternates: {
      canonical: generateCanonicalUrl('/services/maintenance-services'),
    },
    openGraph: {
      title: 'Professional Appliance Maintenance Services | Preventative Care | JK Appliances',
      description: 'Expert appliance maintenance for all brands including Samsung, GE, Whirlpool, and more. Preventative service plans with certified technicians and competitive pricing.',
      url: generateCanonicalUrl('/services/maintenance-services'),
      siteName: 'JK Appliance Repair',
      images: [
        {
          url: '/images/services/appliance-maintenance.jpg',
          width: 1200,
          height: 630,
          alt: 'Professional technician performing appliance maintenance',
        },
      ],
      locale: 'en_CA',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Professional Appliance Maintenance Services | JK Appliances',
      description: 'Expert appliance maintenance with comprehensive care plans. We service refrigerators, washers, dryers, dishwashers, and more to prevent breakdowns.',
      images: ['/images/services/appliance-maintenance.jpg'],
    },
    keywords: 'appliance maintenance, preventative maintenance, appliance tune-up, refrigerator maintenance, washer maintenance, dryer maintenance, dishwasher maintenance, appliance service plans, Toronto appliance maintenance, GTA appliance maintenance, appliance efficiency, extend appliance life',
  };
  