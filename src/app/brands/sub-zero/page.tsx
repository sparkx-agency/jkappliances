"use client";

import BrandLayout from '@/components/layout/BrandLayout';
import { BrandInfo, Advantage, Testimonial, FAQItem } from '@/components/layout/BrandLayout';
import { BrandServiceItem } from '@/components/sections/brands/BrandServicesSection';

// Brand Information
const subzeroInfo: BrandInfo = {
  id: 'subzero',
  name: 'Sub-Zero',
  logo: '/images/brands/Sub-zero.webp',
  description: 'Sub-Zero is a luxury appliance brand specializing in high-end refrigeration and wine storage solutions. Known for their superior quality, innovative technology, and exceptional design, Sub-Zero appliances are a favorite among discerning homeowners.',
  history: 'Founded in 1945, Sub-Zero has a long history of producing top-of-the-line refrigeration products. With a commitment to excellence and customer satisfaction, Sub-Zero has become a leading brand in the luxury appliance market.',
  expertise: 'Our technicians are factory-trained and certified to service Sub-Zero appliances. We have extensive experience with their advanced features and technology, and we use genuine Sub-Zero replacement parts to ensure optimal performance and longevity.'
};

// Sub-Zero Services with Common Issues
const subzeroServices: BrandServiceItem[] = [
  {
    id: 'refrigerator-repair',
    name: 'Sub-Zero Refrigerator Repair',
    description: 'Expert repair services for Sub-Zero refrigerators, including built-in, integrated, and wine storage models.',
    commonIssues: [
      'Cooling problems',
      'Ice maker malfunctions',
      'Water dispenser issues',
      'Temperature fluctuations',
      'Sealed system failures',
      'Electronic control problems',
      'Unusual noises'
    ],
    image: '/images/services/refrigerator-repair.webp'
  },
  {
    id: 'wine-storage-repair',
    name: 'Sub-Zero Wine Storage Repair',
    description: 'Professional repair services for Sub-Zero wine storage units, ensuring optimal temperature and humidity control.',
    commonIssues: [
      'Temperature control issues',
      'Humidity problems',
      'Door seal failures',
      'Compressor issues',
      'Electronic control malfunctions',
      'Unusual vibrations',
      'Lighting problems'
    ],
    image: '/images/services/wine-cooler.webp'
  }
];

// Service Advantages
const advantages: Advantage[] = [
  {
    title: 'Certified Technicians',
    description: 'Our technicians are factory-trained and certified to service Sub-Zero appliances, ensuring expert repairs.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  },
  {
    title: 'Genuine Sub-Zero Parts',
    description: 'We use only genuine Sub-Zero replacement parts to maintain the quality and performance of your appliance.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    )
  },
  {
    title: 'Specialized Expertise',
    description: 'We have the specialized knowledge and tools to properly diagnose and repair Sub-Zero appliances.',
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
    text: "The technician was prompt, professional, and knowledgeable about our Sub-Zero refrigerator. He quickly diagnosed the problem and had it fixed in no time.",
    author: "Laura P.",
    location: "Toronto",
    rating: 5
  },
  {
    id: 2,
    text: "We had a problem with our Sub-Zero wine storage unit, and the repair team was able to resolve it quickly and efficiently. We are very satisfied with their service.",
    author: "Michael S.",
    location: "Mississauga",
    rating: 5
  },
  {
    id: 3,
    text: "We have been using this company for all our Sub-Zero appliance repairs, and they always provide excellent service. Highly recommended.",
    author: "Jennifer K.",
    location: "Oakville",
    rating: 5
  }
];

// FAQ Items
const faqs: FAQItem[] = [
  {
    question: "How long does a typical Sub-Zero appliance repair take?",
    answer: "Most Sub-Zero appliance repairs can be completed in a single visit, usually within 1-2 hours. Complex repairs may require additional time to diagnose and repair."
  },
  {
    question: "Do you offer a warranty on Sub-Zero appliance repairs?",
    answer: "Yes, we offer a warranty on parts and labor for all Sub-Zero appliance repairs. If the same issue occurs within the warranty period, we will fix it at no additional cost."
  },
  {
    question: "Do you use genuine Sub-Zero replacement parts?",
    answer: "Yes, we use genuine Sub-Zero replacement parts to ensure the quality and reliability of our repairs."
  },
  {
    question: "How do I schedule a Sub-Zero appliance repair?",
    answer: "You can schedule a Sub-Zero appliance repair by calling our service hotline or filling out the contact form on our website. We offer flexible scheduling options to meet your needs."
  },
  {
    question: "What areas do you serve for Sub-Zero appliance repairs?",
    answer: "We provide Sub-Zero appliance repair services throughout the Greater Toronto Area (GTA) and surrounding regions. Contact us to confirm service availability in your area."
  }
];

// Related Brands
const relatedBrands = [
  "Wolf",
  "Thermador",
  "Viking",
  "Gaggenau",
  "Miele"
];

export default function SubzeroBrandPage() {
  return (
    <BrandLayout
      brandInfo={subzeroInfo}
      services={subzeroServices}
      advantages={advantages}
      testimonials={testimonials}
      faqs={faqs}
      relatedBrands={relatedBrands}
      primaryColor="#004a8f"
      secondaryColor="#f0f0f0"
    />
  );
}
