"use client";

import BrandLayout from '@/components/layout/BrandLayout';
import { BrandInfo, Advantage, Testimonial, FAQItem } from '@/components/layout/BrandLayout';
import { BrandServiceItem } from '@/components/sections/brands/BrandServicesSection';

// Brand Information
const moffatInfo: BrandInfo = {
  id: 'moffat',
  name: 'Moffat',
  logo: '/images/brands/moffat.webp',
  description: 'Moffat is a brand known for its reliable and affordable appliances. Offering a range of refrigerators, ovens, and stoves, Moffat focuses on providing practical solutions for everyday needs.',
  history: 'Moffat has a long history of producing dependable appliances for the home. With a commitment to simplicity and functionality, Moffat appliances are designed to be user-friendly and durable.',
  expertise: 'Our technicians are experienced in servicing Moffat appliances and understand their design and functionality. We use quality replacement parts to ensure that your Moffat appliance continues to provide reliable performance.'
};

// Moffat Services with Common Issues
const moffatServices: BrandServiceItem[] = [
  {
    id: 'refrigerator-repair',
    name: 'Moffat Refrigerator Repair',
        description: 'Reliable repair services for Moffat refrigerators, including top-freezer and compact models.',
    commonIssues: [
      'Inadequate cooling',
      'Freezer not freezing',
      'Noisy operation',
      'Leaking water',
      'Faulty door seal',
      'Temperature fluctuations',
      'Light not working'
    ],
    image: '/images/services/fridge-repair.png'
  },
  {
    id: 'oven-repair',
    name: 'Moffat Oven Repair',
        description: 'Expert repair services for Moffat ovens, including electric and gas models.',
    commonIssues: [
      'Not heating properly',
      'Uneven cooking',
      'Faulty thermostat',
      'Burner not igniting (gas ovens)',
      'Self-cleaning issues',
      'Door not closing properly',
      'Temperature control problems'
    ],
    image: '/images/services/walloven-repair.png'
  },
  {
    id: 'stove-repair',
    name: 'Moffat Stove Repair',
        description: 'Professional repair services for Moffat stoves and cooktops, including gas and electric models.',
    commonIssues: [
      'Burners not igniting (gas stoves)',
      'Electric elements not heating',
      'Temperature control issues',
      'Cracked cooktop',
      'Faulty control knobs',
      'Uneven heating',
      'Indicator lights not working'
    ],
    image: '/images/services/cooktop-repair.png'
  }
];

// Service Advantages
const advantages: Advantage[] = [
  {
    title: 'Experienced Technicians',
    description: 'Our technicians have years of experience working with Moffat appliances.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  },
  {
    title: 'Quality Replacement Parts',
    description: 'We use quality replacement parts to ensure the reliability of our repairs.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    )
  },
  {
    title: 'Affordable Service',
    description: 'We offer competitive pricing on all Moffat appliance repairs.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  }
];

// Customer Testimonials
const testimonials: Testimonial[] = [
  {
    id: 1,
    text: "The technician quickly diagnosed and fixed our Moffat refrigerator. We appreciate the prompt and reliable service.",
    author: "Susan B.",
    location: "Hamilton",
    rating: 5
  },
  {
    id: 2,
    text: "Our Moffat stove wasn't heating evenly, and the repair team solved the problem efficiently. Great value for the price.",
    author: "David L.",
    location: "Oakville",
    rating: 4
  },
  {
    id: 3,
    text: "We've relied on this company for several Moffat appliance repairs. They always provide honest and dependable service.",
    author: "Karen S.",
    location: "Brampton",
    rating: 5
  }
];

// FAQ Items
const faqs: FAQItem[] = [
  {
    question: "How long does a typical Moffat appliance repair take?",
    answer: "Most Moffat appliance repairs can be completed in a single visit, usually within 1-2 hours. Complex repairs may require additional time or a second visit to order and install parts."
  },
  {
    question: "Do you offer a warranty on Moffat appliance repairs?",
    answer: "Yes, we provide a warranty on parts and labor for all Moffat appliance repairs. If the same issue arises within the warranty period, we will resolve it at no additional cost."
  },
  {
    question: "Do you use genuine Moffat replacement parts?",
    answer: "We strive to use genuine Moffat replacement parts whenever possible. In cases where they are unavailable, we use high-quality, compatible parts to ensure reliable performance."
  },
  {
    question: "How do I schedule a Moffat appliance repair?",
    answer: "You can easily schedule a Moffat appliance repair by calling our service hotline or filling out the contact form on our website. We offer flexible scheduling options to accommodate your needs."
  },
  {
    question: "What areas do you serve for Moffat appliance repairs?",
    answer: "We provide Moffat appliance repair services throughout the Greater Toronto Area (GTA) and surrounding regions. Contact us to confirm service availability in your location."
  }
];

// Related Brands
const relatedBrands = [
  "GE",
  "Hotpoint",
  "Frigidaire",
  "Amana",
  "Whirlpool"
];

export default function MoffatBrandPage() {
  return (
    <BrandLayout 
      brandInfo={moffatInfo}
      services={moffatServices}
      advantages={advantages}
      testimonials={testimonials}
      faqs={faqs}
      relatedBrands={relatedBrands}
      primaryColor="#003087"
      secondaryColor="#f0f0f0"
    />
  );
}
