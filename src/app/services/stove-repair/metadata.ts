import { generateCanonicalUrl } from "@/utils/canonical";
import { Metadata } from "next";

// SEO Metadata
export const metadata: Metadata = {
    title: 'Professional Stove Repair Services | Same-Day Repairs | JK Appliances',
    description: 'Expert stove and range repair for all brands and models. Our certified technicians provide same-day service, affordable pricing, and guaranteed repairs throughout Toronto and the GTA.',
    alternates: {
      canonical: generateCanonicalUrl('/services/stove-repair'),
    },
    openGraph: {
      title: 'Professional Stove Repair Services | Same-Day Repairs | JK Appliances',
      description: 'Expert stove and range repair for all brands including Samsung, GE, Whirlpool, and more. Same-day service with certified technicians and competitive pricing.',
      url: generateCanonicalUrl('/services/stove-repair'),
      siteName: 'JK Appliance Repair',
      images: [
        {
          url: '/images/services/stove-repair.jpg',
          width: 1200,
          height: 630,
          alt: 'Professional technician repairing a stove',
        },
      ],
      locale: 'en_CA',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Professional Stove Repair Services | JK Appliances',
      description: 'Expert stove and range repair with same-day service. We fix heating elements, ignition problems, temperature issues, and more with guaranteed results.',
      images: ['/images/services/stove-repair.jpg'],
    },
    keywords: 'stove repair, range repair, oven repair, cooktop repair, appliance repair, electric stove repair, gas stove repair, heating element replacement, ignition repair, burner repair, same-day repair, Toronto stove repair',
  };
  