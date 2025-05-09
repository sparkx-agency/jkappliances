"use client";

import BrandLayout from '@/components/layout/BrandLayout';
import { BrandInfo, Advantage, Testimonial, FAQItem } from '@/components/layout/BrandLayout';
import { BrandServiceItem } from '@/components/sections/brands/BrandServicesSection';

// Brand Information
const aegInfo: BrandInfo = {
  id: 'aeg',
  name: 'AEG',
  logo: '/images/brands/AEG.webp',
  description: 'AEG is a German appliance manufacturer known for its high-quality and innovative home appliances. Offering a range of products, including ovens, cooktops, washing machines, and dishwashers, AEG focuses on combining advanced technology with sleek design.',
  history: 'Founded in 1883 as Deutsche Edison-Gesellschaft, AEG has a long history of producing electrical equipment and appliances. With a commitment to innovation and engineering excellence, AEG has become a respected brand in the European appliance market.',
  expertise: 'Our technicians are experienced in servicing AEG appliances and understand their advanced features and technology. We use genuine AEG replacement parts to ensure that your AEG appliance continues to perform at its best.'
};

// AEG Services with Common Issues
const aegServices: BrandServiceItem[] = [
  {
    id: 'oven-repair',
    name: 'AEG Oven Repair',
    description: 'Expert repair services for AEG ovens, including steam ovens, convection ovens, and combination models.',
    commonIssues: [
      'Not heating properly',
      'Uneven cooking',
      'Temperature control problems',
      'Error codes',
      'Self-cleaning issues',
      'Steam function not working',
      'Door not sealing properly'
    ],
    image: '/images/services/oven-repair.webp'
  },
  {
    id: 'cooktop-repair',
    name: 'AEG Cooktop Repair',
    description: 'Professional repair services for AEG cooktops, including induction, electric, and gas models.',
    commonIssues: [
      'Induction cooktop not heating',
      'Electric elements not working',
      'Gas burners not igniting',
      'Temperature control problems',
      'Error codes',
      'Cracked glass cooktop',
      'Uneven heating'
    ],
    image: '/images/services/cooktop-repair.webp'
  },
  {
    id: 'washer-repair',
    name: 'AEG Washer Repair',
    description: 'Reliable repair services for AEG washing machines, including front-load and top-load models.',
    commonIssues: [
      'Not starting',
      'Not spinning',
      'Not draining',
      'Error codes',
      'Leaking water',
      'Excessive vibration',
      'Strange noises'
    ],
    image: '/images/services/washer-repair.webp'
  },
  {
    id: 'dishwasher-repair',
    name: 'AEG Dishwasher Repair',
    description: 'Complete repair solutions for AEG dishwashers, ensuring efficient cleaning and drying.',
    commonIssues: [
      'Not cleaning dishes properly',
      'Not draining',
      'Error codes',
      'Leaking water',
      'Unusual noises',
      'Dispenser problems',
      'Cloudy glassware'
    ],
    image: '/images/services/dishwasher-repair.webp'
  }
];

// Service Advantages
const advantages: Advantage[] = [
  {
    title: 'Experienced Technicians',
    description: 'Our technicians have experience repairing AEG appliances and are familiar with their advanced features and technology.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  },
  {
    title: 'Genuine AEG Parts',
    description: 'We use genuine AEG replacement parts to ensure the quality and reliability of our repairs.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    )
  },
  {
    title: 'Advanced Technology Expertise',
    description: 'We have the specialized knowledge to diagnose and repair AEG appliances with advanced features like steam ovens and induction cooktops.',
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
    text: "The technician was very knowledgeable and quickly fixed our AEG oven. I appreciate the prompt and professional service.",
    author: "Sophia R.",
    location: "Toronto",
    rating: 5
  },
  {
    id: 2,
    text: "Our AEG washing machine stopped working, and the repair team was able to fix it the same day. Great service and excellent communication!",
    author: "Daniel L.",
    location: "Mississauga",
    rating: 5
  },
  {
    id: 3,
    text: "We have been using this company for all our appliance repairs, and they always provide excellent service. Highly recommended for AEG appliances.",
    author: "Emily K.",
    location: "Oakville",
    rating: 5
  }
];

// FAQ Items
const faqs: FAQItem[] = [
  {
    question: "How long does a typical AEG appliance repair take?",
    answer: "Most AEG appliance repairs can be completed in a single visit, usually within 1-2 hours. Complex repairs may require additional time to diagnose and resolve."
  },
  {
    question: "Do you offer a warranty on AEG appliance repairs?",
    answer: "Yes, we offer a warranty on parts and labor for all AEG appliance repairs. If the same issue occurs within the warranty period, we will fix it at no additional cost."
  },
  {
    question: "Do you use genuine AEG replacement parts?",
    answer: "Yes, we use genuine AEG replacement parts to ensure the quality and reliability of our repairs."
  },
  {
    question: "How do I schedule an AEG appliance repair?",
    answer: "You can easily schedule an AEG appliance repair by calling our service hotline or filling out the contact form on our website. We offer flexible scheduling options to accommodate your needs."
  },
  {
    question: "What areas do you serve for AEG appliance repairs?",
    answer: "We provide AEG appliance repair services throughout the Greater Toronto Area (GTA) and surrounding regions. Contact us to confirm service availability in your area."
  }
];

// Related Brands
const relatedBrands = [
  "Bosch",
  "Siemens",
  "Miele",
  "Gaggenau",
  "Liebherr"
];

export default function AEGBrandPage() {
  return (
    <BrandLayout
      brandInfo={aegInfo}
      services={aegServices}
      advantages={advantages}
      testimonials={testimonials}
      faqs={faqs}
      relatedBrands={relatedBrands}
      primaryColor="#005293"
      secondaryColor="#f0f0f0"
    />
  );
}
