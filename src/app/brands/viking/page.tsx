"use client";

import BrandLayout from '@/components/layout/BrandLayout';
import { BrandInfo, Advantage, Testimonial, FAQItem } from '@/components/layout/BrandLayout';
import { BrandServiceItem } from '@/components/sections/brands/BrandServicesSection';

// Brand Information
const vikingInfo: BrandInfo = {
  id: 'viking',
  name: 'Viking',
  logo: '/images/brands/Viking.webp',
  description: 'Viking is a high-end appliance brand specializing in professional-grade kitchen appliances. Known for their durability, performance, and sleek design, Viking appliances are a favorite among serious home cooks and professional chefs.',
  history: 'Founded in 1984, Viking has a long history of producing top-of-the-line kitchen appliances. With a commitment to quality and innovation, Viking has become a leading brand in the luxury appliance market.',
  expertise: 'Our technicians are factory-trained and certified to service Viking appliances. We have extensive experience with their advanced features and technology, and we use genuine Viking replacement parts to ensure optimal performance and longevity.'
};

// Viking Services with Common Issues
const vikingServices: BrandServiceItem[] = [
  {
    id: 'oven-repair',
    name: 'Viking Oven Repair',
    description: 'Expert repair services for Viking ovens, including convection, range, and wall ovens.',
    commonIssues: [
      'Not heating properly',
      'Uneven cooking',
      'Ignition problems (gas ovens)',
      'Temperature control issues',
      'Self-cleaning malfunctions',
      'Electronic control failures',
      'Door not sealing properly'
    ],
    image: '/images/services/oven-repair.webp'
  },
  {
    id: 'cooktop-repair',
    name: 'Viking Cooktop Repair',
    description: 'Professional repair services for Viking cooktops, including gas, electric, and induction models.',
    commonIssues: [
      'Burners not igniting (gas cooktops)',
      'Elements not heating (electric cooktops)',
      'Induction cooktop failures',
      'Temperature control problems',
      'Electronic control issues',
      'Cracked glass cooktop',
      'Uneven heating'
    ],
    image: '/images/services/cooktop-repair.webp'
  },
  {
    id: 'refrigerator-repair',
    name: 'Viking Refrigerator Repair',
    description: 'Reliable repair services for Viking refrigerators, including built-in and freestanding models.',
    commonIssues: [
      'Cooling problems',
      'Ice maker malfunctions',
      'Water dispenser issues',
      'Temperature fluctuations',
      'Door seal failures',
      'Electronic control problems',
      'Unusual noises'
    ],
    image: '/images/services/refrigerator-repair.webp'
  }
];

// Service Advantages
const advantages: Advantage[] = [
  {
    title: 'Certified Technicians',
    description: 'Our technicians are factory-trained and certified to service Viking appliances, ensuring expert repairs.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  },
  {
    title: 'Genuine Viking Parts',
    description: 'We use only genuine Viking replacement parts to maintain the quality and performance of your appliance.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    )
  },
  {
    title: 'Specialized Expertise',
    description: 'We have the specialized knowledge and tools to properly diagnose and repair Viking appliances.',
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
    text: "The technician was very professional and knowledgeable about our Viking oven. He quickly diagnosed the problem and had it fixed in no time.",
    author: "Jennifer A.",
    location: "Toronto",
    rating: 5
  },
  {
    id: 2,
    text: "We had a problem with our Viking cooktop, and the repair team was able to resolve it quickly and efficiently. We are very satisfied with their service.",
    author: "Robert B.",
    location: "Mississauga",
    rating: 5
  },
  {
    id: 3,
    text: "We have been using this company for all our Viking appliance repairs, and they always provide excellent service. Highly recommended.",
    author: "Michelle K.",
    location: "Oakville",
    rating: 5
  }
];

// FAQ Items
const faqs: FAQItem[] = [
  {
    question: "How long does a typical Viking appliance repair take?",
    answer: "Most Viking appliance repairs can be completed in a single visit, usually within 1-2 hours. Complex repairs may require additional time to diagnose and repair."
  },
  {
    question: "Do you offer a warranty on Viking appliance repairs?",
    answer: "Yes, we offer a warranty on parts and labor for all Viking appliance repairs. If the same issue occurs within the warranty period, we will fix it at no additional cost."
  },
  {
    question: "Do you use genuine Viking replacement parts?",
    answer: "Yes, we use genuine Viking replacement parts to ensure the quality and reliability of our repairs."
  },
  {
    question: "How do I schedule a Viking appliance repair?",
    answer: "You can schedule a Viking appliance repair by calling our service hotline or filling out the contact form on our website. We offer flexible scheduling options to meet your needs."
  },
  {
    question: "What areas do you serve for Viking appliance repairs?",
    answer: "We provide Viking appliance repair services throughout the Greater Toronto Area (GTA) and surrounding regions. Contact us to confirm service availability in your area."
  }
];

// Related Brands
const relatedBrands = [
  "Sub-Zero",
  "Wolf",
  "Thermador",
  "Gaggenau",
  "Dacor"
];

export default function VikingBrandPage() {
  return (
    <BrandLayout
      brandInfo={vikingInfo}
      services={vikingServices}
      advantages={advantages}
      testimonials={testimonials}
      faqs={faqs}
      relatedBrands={relatedBrands}
      primaryColor="#b3243c"
      secondaryColor="#f0f0f0"
    />
  );
}
