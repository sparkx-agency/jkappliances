import { generateCanonicalUrl } from "@/utils/canonical";
import { Metadata } from "next";

// SEO Metadata
export const metadata: Metadata = {
    title: 'Expert Washer Repair Services | Same-Day Repairs | JK Appliances',
    description: 'Professional washing machine repair for all brands and models. Our certified technicians provide same-day service, affordable pricing, and guaranteed repairs throughout Toronto and the GTA.',
    alternates: {
      canonical: generateCanonicalUrl('/services/washer-repair'),
    },
    openGraph: {
      title: 'Expert Washer Repair Services | Same-Day Repairs | JK Appliances',
      description: 'Professional washing machine repair for all brands including Samsung, LG, Whirlpool, and more. Same-day service with certified technicians and affordable pricing.',
      url: generateCanonicalUrl('/services/washer-repair'),
      siteName: 'JK Appliance Repair',
      images: [
        {
          url: '/images/services/washer-repair.webp',
          width: 1200,
          height: 630,
          alt: 'Professional technician repairing a washing machine',
        },
      ],
      locale: 'en_CA',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Expert Washer Repair Services | JK Appliances',
      description: 'Professional washing machine repair with same-day service. We fix spinning issues, water leaks, excessive vibration, drainage problems, and more with guaranteed results.',
      images: ['/images/services/washer-repair.webp'],
    },
    keywords: 'washer repair, washing machine repair, appliance repair, Samsung washer repair, LG washer repair, Whirlpool washer repair, washer not spinning, washer leaking water, washing machine service, same-day repair, Toronto washer repair',
  };
  