"use client";

import BrandLayout from '@/components/layout/BrandLayout';
import { BrandInfo, Advantage, Testimonial, FAQItem } from '@/components/layout/BrandLayout';
import { BrandServiceItem } from '@/components/sections/brands/BrandServicesSection';

// Brand Information
const haierInfo: BrandInfo = {
  id: 'haier',
  name: 'Haier',
  logo: '/images/brands/Haier.webp',
  description: 'Haier is a global appliance brand known for its innovative and energy-efficient home appliances. Offering a range of products, including refrigerators, freezers, washers, dryers, and air conditioners, Haier focuses on providing smart and practical solutions for modern living.',
  history: "Founded in 1984, Haier has grown to become one of the world's largest appliance manufacturers. With a commitment to quality and technological advancement, Haier has become a popular brand in the global appliance market.",
  expertise: 'Our technicians are experienced in servicing Haier appliances and understand their unique features and technology. We use quality replacement parts to ensure that your Haier appliance continues to perform efficiently.'
};

// Haier Services with Common Issues
const haierServices: BrandServiceItem[] = [
  {
    id: 'refrigerator-repair',
    name: 'Haier Refrigerator Repair',
    description: 'Reliable repair services for Haier refrigerators, including top-freezer, bottom-freezer, side-by-side, and compact models.',
    commonIssues: [
      'Cooling problems',
      'Ice maker malfunctions',
      'Water dispenser issues',
      'Temperature fluctuations',
      'Unusual noises',
      'Faulty door seals',
      'Control panel issues'
    ],
    image: '/images/services/refrigerator-repair.webp'
  },
  {
    id: 'washer-repair',
    name: 'Haier Washer Repair',
    description: 'Professional repair services for Haier washing machines, including front-load, top-load, and portable models.',
    commonIssues: [
      'Not starting',
      'Not spinning',
      'Not draining',
      'Leaking water',
      'Error codes',
      'Excessive vibration',
      'Strange noises'
    ],
    image: '/images/services/washer-repair.webp'
  },
  {
    id: 'dryer-repair',
    name: 'Haier Dryer Repair',
    description: 'Expert repair services for Haier dryers, including electric and compact models.',
    commonIssues: [
      'Not heating',
      'Not tumbling',
      'Not starting',
      'Excessive noise',
      'Taking too long to dry',
      'Burning smell',
      'Error codes'
    ],
    image: '/images/services/dryer-repair.webp'
  },
  {
    id: 'freezer-repair',
    name: 'Haier Freezer Repair',
    description: 'Specialized repair services for Haier freezers, including chest and upright models.',
    commonIssues: [
      'Not freezing',
      'Temperature fluctuations',
      'Excessive frost buildup',
      'Unusual noises',
      'Door not sealing properly',
      'Power failure issues',
      'Faulty compressor'
    ],
    image: '/images/services/freezer-repair.webp'
  }
];

// Service Advantages
const advantages: Advantage[] = [
  {
    title: 'Experienced Technicians',
    description: 'Our technicians have experience repairing Haier appliances and are familiar with their common issues.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  },
  {
    title: 'Quality Parts',
    description: 'We use quality replacement parts to ensure the reliability and efficiency of our Haier appliance repairs.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    )
  },
  {
    title: 'Affordable Service',
    description: 'We offer competitive pricing on all Haier appliance repairs, providing cost-effective solutions for our customers.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    )
  }
];

// Customer Testimonials
const testimonials: Testimonial[] = [
  {
    id: 1,
    text: "The technician was prompt and efficient in repairing our Haier refrigerator. We appreciate the quick and reliable service.",
    author: "Linda M.",
    location: "Toronto",
    rating: 5
  },
  {
    id: 2,
    text: "Our Haier washing machine stopped working, and the repair team was able to fix it quickly and at a reasonable price. Great service!",
    author: "David P.",
    location: "Mississauga",
    rating: 5
  },
  {
    id: 3,
    text: "We have been using this company for our appliance repairs, and they always provide excellent service. Highly recommended for Haier appliances.",
    author: "Sarah L.",
    location: "Oakville",
    rating: 5
  }
];

// FAQ Items
const faqs: FAQItem[] = [
  {
    question: "How long does a typical Haier appliance repair take?",
    answer: "Most Haier appliance repairs can be completed in a single visit, usually within 1-2 hours. Complex repairs may require additional time to diagnose and resolve."
  },
  {
    question: "Do you offer a warranty on Haier appliance repairs?",
    answer: "Yes, we offer a warranty on parts and labor for all Haier appliance repairs. If the same issue occurs within the warranty period, we will fix it at no additional cost."
  },
  {
    question: "Do you use genuine Haier replacement parts?",
    answer: "We use quality replacement parts that meet or exceed Haier's specifications to ensure the reliability of our repairs."
  },
  {
    question: "How do I schedule a Haier appliance repair?",
    answer: "You can easily schedule a Haier appliance repair by calling our service hotline or filling out the contact form on our website. We offer flexible scheduling options to accommodate your needs."
  },
  {
    question: "What areas do you serve for Haier appliance repairs?",
    answer: "We provide Haier appliance repair services throughout the Greater Toronto Area (GTA) and surrounding regions. Contact us to confirm service availability in your area."
  }
];

// Related Brands
const relatedBrands = [
  "GE",
  "Samsung",
  "LG",
  "Hisense",
  "RCA"
];

export default function HaierBrandPage() {
  return (
    <BrandLayout
      brandInfo={haierInfo}
      services={haierServices}
      advantages={advantages}
      testimonials={testimonials}
      faqs={faqs}
      relatedBrands={relatedBrands}
      primaryColor="#003a63"
      secondaryColor="#f0f0f0"
    />
  );
}
