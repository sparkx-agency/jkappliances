import { generateCanonicalUrl } from "@/utils/canonical";
import { Metadata } from "next";

// SEO Metadata
export const metadata: Metadata = {
    title: 'Professional Appliance Installation Services | Same-Day Service | JK Appliances',
    description: 'Expert appliance installation for all brands and models. Our certified technicians provide same-day service, proper setup, and guaranteed workmanship throughout Toronto and the GTA.',
    alternates: {
      canonical: generateCanonicalUrl('/services/installation-services'),
    },
    openGraph: {
      title: 'Professional Appliance Installation Services | Same-Day Service | JK Appliances',
      description: 'Expert appliance installation for all brands including Samsung, GE, Whirlpool, and more. Same-day service with certified technicians and competitive pricing.',
      url: generateCanonicalUrl('/services/installation-services'),
      siteName: 'JK Appliance Repair',
      images: [
        {
          url: '/images/services/appliance-installation.webp',
          width: 1200,
          height: 630,
          alt: 'Professional technician installing an appliance',
        },
      ],
      locale: 'en_CA',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Professional Appliance Installation Services | JK Appliances',
      description: 'Expert appliance installation with same-day service. We install refrigerators, washers, dryers, dishwashers, and more with guaranteed results.',
      images: ['/images/services/appliance-installation.webp'],
    },
    keywords: 'appliance installation, refrigerator installation, washer installation, dryer installation, dishwasher installation, stove installation, oven installation, range installation, Toronto appliance installation, GTA appliance installation, same-day appliance installation',
  };
  