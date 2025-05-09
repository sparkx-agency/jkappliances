"use client";

import BrandLayout from '@/components/layout/BrandLayout';
import { BrandInfo, Advantage, Testimonial, FAQItem } from '@/components/layout/BrandLayout';
import { BrandServiceItem } from '@/components/sections/brands/BrandServicesSection';

// Brand Information
const thermadorInfo: BrandInfo = {
  id: 'thermador',
  name: 'Thermador',
  logo: '/images/brands/Thermador.webp',
  description: 'Thermador is a luxury appliance brand renowned for its high-performance cooking appliances. With a focus on innovation and design, Thermador offers a range of ovens, cooktops, and dishwashers that cater to the needs of passionate cooks.',
  history: 'Founded in 1916, Thermador has a long history of producing innovative and high-quality appliances. With a commitment to culinary excellence, Thermador has become a leading brand in the luxury appliance market.',
  expertise: 'Our technicians are factory-trained and certified to service Thermador appliances. We have extensive experience with their advanced features and technology, and we use genuine Thermador replacement parts to ensure optimal performance and longevity.'
};

// Thermador Services with Common Issues
const thermadorServices: BrandServiceItem[] = [
  {
    id: 'oven-repair',
    name: 'Thermador Oven Repair',
    description: 'Expert repair services for Thermador ovens, including convection, steam, and wall ovens.',
    commonIssues: [
      'Not heating properly',
      'Uneven cooking',
      'Self-cleaning problems',
      'Temperature control issues',
      'Ignition problems (gas ovens)',
      'Electronic control failures',
      'Door not sealing properly'
    ],
    image: '/images/services/oven-repair.webp'
  },
  {
    id: 'cooktop-repair',
    name: 'Thermador Cooktop Repair',
    description: 'Professional repair services for Thermador cooktops, including gas, electric, and induction models.',
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
    id: 'dishwasher-repair',
    name: 'Thermador Dishwasher Repair',
    description: 'Reliable repair services for Thermador dishwashers, ensuring optimal cleaning performance.',
    commonIssues: [
      'Not cleaning dishes properly',
      'Not draining',
      'Leaking water',
      'Error codes',
      'Dispenser problems',
      'Unusual noises',
      'Electronic control failures'
    ],
    image: '/images/services/dishwasher-repair.webp'
  }
];

// Service Advantages
const advantages: Advantage[] = [
  {
    title: 'Certified Technicians',
    description: 'Our technicians are factory-trained and certified to service Thermador appliances, ensuring expert repairs.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  },
  {
    title: 'Genuine Thermador Parts',
    description: 'We use only genuine Thermador replacement parts to maintain the quality and performance of your appliance.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    )
  },
  {
    title: 'Specialized Expertise',
    description: 'We have the specialized knowledge and tools to properly diagnose and repair Thermador appliances.',
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
    text: "The technician was very professional and knowledgeable about our Thermador oven. He quickly diagnosed the problem and had it fixed in no time.",
    author: "Susan L.",
    location: "Toronto",
    rating: 5
  },
  {
    id: 2,
    text: "We had a problem with our Thermador cooktop, and the repair team was able to resolve it quickly and efficiently. We are very satisfied with their service.",
    author: "David M.",
    location: "Mississauga",
    rating: 5
  },
  {
    id: 3,
    text: "We have been using this company for all our Thermador appliance repairs, and they always provide excellent service. Highly recommended.",
    author: "Karen P.",
    location: "Oakville",
    rating: 5
  }
];

// FAQ Items
const faqs: FAQItem[] = [
  {
    question: "How long does a typical Thermador appliance repair take?",
    answer: "Most Thermador appliance repairs can be completed in a single visit, usually within 1-2 hours. Complex repairs may require additional time to diagnose and repair."
  },
  {
    question: "Do you offer a warranty on Thermador appliance repairs?",
    answer: "Yes, we offer a warranty on parts and labor for all Thermador appliance repairs. If the same issue occurs within the warranty period, we will fix it at no additional cost."
  },
  {
    question: "Do you use genuine Thermador replacement parts?",
    answer: "Yes, we use genuine Thermador replacement parts to ensure the quality and reliability of our repairs."
  },
  {
    question: "How do I schedule a Thermador appliance repair?",
    answer: "You can schedule a Thermador appliance repair by calling our service hotline or filling out the contact form on our website. We offer flexible scheduling options to meet your needs."
  },
  {
    question: "What areas do you serve for Thermador appliance repairs?",
    answer: "We provide Thermador appliance repair services throughout the Greater Toronto Area (GTA) and surrounding regions. Contact us to confirm service availability in your area."
  }
];

// Related Brands
const relatedBrands = [
  "Bosch",
  "Gaggenau",
  "Miele",
  "Sub-Zero",
  "Wolf"
];

export default function ThermadorBrandPage() {
  return (
    <BrandLayout
      brandInfo={thermadorInfo}
      services={thermadorServices}
      advantages={advantages}
      testimonials={testimonials}
      faqs={faqs}
      relatedBrands={relatedBrands}
      primaryColor="#003a70"
      secondaryColor="#f0f0f0"
    />
  );
}
