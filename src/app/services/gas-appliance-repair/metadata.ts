import { generateCanonicalUrl } from "@/utils/canonical";
import { Metadata } from "next";

// SEO Metadata
export const metadata: Metadata = {
    title: 'Professional Gas Appliance Repair Services | Same-Day Service | JK Appliances',
    description: 'Expert gas appliance repair for all brands and models. Our certified technicians provide same-day service, affordable pricing, and guaranteed repairs throughout Toronto and the GTA.',
    alternates: {
      canonical: generateCanonicalUrl('/services/gas-appliance-repair'),
    },
    openGraph: {
      title: 'Professional Gas Appliance Repair Services | Same-Day Service | JK Appliances',
      description: 'Expert gas appliance repair for all brands including Samsung, GE, Whirlpool, and more. Same-day service with certified technicians and competitive pricing.',
      url: generateCanonicalUrl('/services/gas-appliance-repair'),
      siteName: 'JK Appliance Repair',
      images: [
        {
          url: '/images/services/gas-appliance-repair.webp',
          width: 1200,
          height: 630,
          alt: 'Professional technician repairing a gas appliance',
        },
      ],
      locale: 'en_CA',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Professional Gas Appliance Repair Services | JK Appliances',
      description: 'Expert gas appliance repair with same-day service. We fix gas stoves, ovens, water heaters, and more with guaranteed results.',
      images: ['/images/services/gas-appliance-repair.webp'],
    },
    keywords: 'gas appliance repair, gas stove repair, gas oven repair, gas water heater repair, gas fireplace repair, gas line repair, gas leak detection, gas appliance installation, gas appliance maintenance, Toronto gas appliance repair',
  };
  