import { generateCanonicalUrl } from "@/utils/canonical";
import { Metadata } from "next";

// SEO Metadata
export const metadata: Metadata = {
    title: 'Expert Refrigerator Repair Services | Same-Day Repairs | JK Appliances',
    description: 'Professional refrigerator repair for all brands and models. Our certified technicians provide same-day service, affordable pricing, and guaranteed repairs throughout Toronto and the GTA.',
    alternates: {
      canonical: generateCanonicalUrl('/services/refrigerator-repair'),
    },
    openGraph: {
      title: 'Expert Refrigerator Repair Services | Same-Day Repairs | JK Appliances',
      description: 'Professional refrigerator repair for all brands including Samsung, LG, Whirlpool, and more. Same-day service with certified technicians and affordable pricing.',
      url: generateCanonicalUrl('/services/refrigerator-repair'),
      siteName: 'JK Appliance Repair',
      images: [
        {
          url: '/images/services/refrigerator-repair.jpg',
          width: 1200,
          height: 630,
          alt: 'Professional technician repairing a refrigerator',
        },
      ],
      locale: 'en_CA',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Expert Refrigerator Repair Services | JK Appliances',
      description: 'Professional refrigerator repair with same-day service. We fix cooling issues, water leaks, ice makers, and more with guaranteed results.',
      images: ['/images/services/refrigerator-repair.jpg'],
    },
    keywords: 'refrigerator repair, fridge repair, appliance repair, Samsung refrigerator repair, LG refrigerator repair, Whirlpool repair, fridge not cooling, refrigerator service, same-day repair, Toronto refrigerator repair',
  };
  