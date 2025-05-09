"use client";

import BrandLayout from '@/components/layout/BrandLayout';
import { BrandInfo, Advantage, Testimonial, FAQItem } from '@/components/layout/BrandLayout';
import { BrandServiceItem } from '@/components/sections/brands/BrandServicesSection';

// Brand Information
const bertazzoniInfo: BrandInfo = {
  id: 'bertazzoni',
  name: 'Bertazzoni',
  logo: '/images/brands/bertazzoni.webp',
  description: "Bertazzoni is an Italian brand known for its stylish and high-performance cooking appliances.",
  history: "With a legacy spanning over 130 years, Bertazzoni has been producing high-quality cooking appliances in Italy, combining traditional craftsmanship with modern engineering.",
  expertise: "Our technicians specialize in Bertazzoni appliances, understanding their unique Italian design and engineering. We provide meticulous repairs to maintain the performance and elegance of your Bertazzoni appliances."
};

// Bertazzoni Services with Common Issues
const bertazzoniServices: BrandServiceItem[] = [
  {
    id: 'refrigerator-repair',
    name: 'Bertazzoni Refrigerator Repair',
    description: 'Expert repair services for Bertazzoni refrigerators, ensuring optimal cooling and performance.',
    commonIssues: [
      'Cooling problems',
      'Temperature fluctuations',
      'Door issues'
    ],
    image: '/images/services/fridge-repair.png'
  },
  {
    id: 'oven-repair',
    name: 'Bertazzoni Oven Repair',
    description: 'Professional repair for Bertazzoni ovens, maintaining their high cooking performance.',
    commonIssues: [
      'Not heating',
      'Uneven cooking',
      'Control panel issues',
      'Error codes'
    ],
    image: '/images/services/walloven-repair.png'
  },
  {
    id: 'stove-repair',
    name: 'Bertazzoni Stove Repair',
    description: 'Specialized repair services for Bertazzoni stoves, including gas and electric models.',
    commonIssues: [
      'Burners not igniting',
      'Temperature control issues',
      'Surface element not working'
    ],
    image: '/images/services/cooktop-repair.png'
  }
];

// Service Advantages
const advantages: Advantage[] = [
  {
    title: 'Bertazzoni Specialists',
    description: 'Our technicians are specially trained to handle the unique design and engineering of Bertazzoni appliances.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  },
  {
    title: 'Precision Repairs',
    description: 'We provide meticulous repairs to ensure the continued performance and elegance of your Bertazzoni appliances.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    )
  },
  {
    title: 'Genuine Parts',
    description: 'We use only genuine Bertazzoni replacement parts to maintain the integrity of your appliance.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  },
  {
    title: 'Warranty Protection',
    description: 'Our repairs maintain your Bertazzoni warranty coverage and come with our own service guarantee.',
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
    text: "The repair team was excellent in fixing our Bertazzoni oven. They knew exactly how to handle it.",
    author: "Maria L.",
    location: "Toronto",
    rating: 5
  },
  {
    id: 2,
    text: "Our Bertazzoni stove needed service, and we were very pleased with the repair expertise and attention to detail.",
    author: "Giovanni R.",
    location: "Mississauga",
    rating: 5
  },
  {
    id: 3,
    text: "We appreciate the specialized knowledge of Bertazzoni appliances. They kept our oven running like new.",
    author: "Sofia K.",
    location: "Etobicoke",
    rating: 5
  }
];

// FAQ Items
const faqs: FAQItem[] = [
  {
    question: "How long does a Bertazzoni appliance repair take?",
    answer: "Most Bertazzoni appliance repairs are completed within one visit, typically lasting 1-2 hours. More complex issues or parts orders may require additional time."
  },
  {
    question: "Do you repair all Bertazzoni appliance models?",
    answer: "Yes, our technicians are trained to repair all models of Bertazzoni refrigerators, ovens, and stoves."
  },
  {
    question: "What kind of warranty do you offer on Bertazzoni appliance repairs?",
    answer: "We offer a 90-day warranty on parts and labor for all Bertazzoni repairs. If the same issue occurs within this period, we will fix it at no additional cost."
  },
  {
    question: "Do you use genuine Bertazzoni replacement parts?",
    answer: "Yes, we exclusively use genuine Bertazzoni replacement parts to ensure the highest quality and maintain the appliance's performance."
  },
  {
    question: "How can I maintain the appearance of my Bertazzoni appliance?",
    answer: "Regular cleaning with gentle, non-abrasive cleaners is recommended. Avoid harsh chemicals that could damage the finish. Refer to your appliance manual for specific cleaning instructions."
  }
];

// Related Brands
const relatedBrands = [
  "LG",
  "Whirlpool",
  "GE",
  "Maytag",
  "Bosch",
  "KitchenAid"
];

export default function BertazzoniBrandPage() {
  return (
    <BrandLayout
      brandInfo={bertazzoniInfo}
      services={bertazzoniServices}
      advantages={advantages}
      testimonials={testimonials}
      faqs={faqs}
      relatedBrands={relatedBrands}
      primaryColor="#9e2a2b" // Bertazzoni red
      secondaryColor="#f8f8f8"
    />
  );
}