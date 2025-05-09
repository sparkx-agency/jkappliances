"use client";

import BrandLayout from '@/components/layout/BrandLayout';
import { BrandInfo, Advantage, Testimonial, FAQItem } from '@/components/layout/BrandLayout';
import { BrandServiceItem } from '@/components/sections/brands/BrandServicesSection';

// Brand Information
const dacorInfo: BrandInfo = {
  id: 'dacor',
  name: 'Dacor',
  logo: '/images/brands/dacor.webp',
  description: "Dacor is an American luxury appliance brand known for its high-end cooking and refrigeration appliances.",
  history: "For over 50 years, Dacor has been setting the standard for luxury kitchen appliances, blending innovative features with elegant design.",
  expertise: "Our technicians are specially trained in Dacor appliances, understanding their unique high-end design and functionality. We provide top-quality repairs using genuine Dacor parts."
};

// Dacor Services with Common Issues
const dacorServices: BrandServiceItem[] = [
  {
    id: 'refrigerator-repair',
    name: 'Dacor Refrigerator Repair',
    description: 'Expert repair services for Dacor luxury refrigerators, including built-in, column, and French door models.',
    commonIssues: [
      'Cooling problems',
      'Temperature fluctuations',
      'Door issues',
      'Ice maker malfunction'
    ],
    image: '/images/services/fridge-repair.png'
  },
  {
    id: 'oven-repair',
    name: 'Dacor Oven Repair',
    description: 'Professional repair services for all Dacor oven models, including wall ovens, ranges, and steam ovens.',
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
    name: 'Dacor Stove Repair',
    description: 'Specialized repair services for Dacor cooktops and ranges, including gas, electric, and induction models.',
    commonIssues: [
      'Burners not igniting',
      'Temperature control issues',
      'Surface element not working'
    ],
    image: '/images/services/cooktop-repair.png'
  },
];

// Service Advantages
const advantages: Advantage[] = [
  {
    title: 'Dacor Luxury Service',
    description: 'Our technicians are experts in Dacor\'s high-end design and functionality, providing luxury service.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  },
  {
    title: 'Expert Repairs',
    description: 'We offer precise and thorough repairs, ensuring your Dacor appliance maintains its high performance.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    )
  },
  {
    title: 'Genuine Parts',
    description: 'We use only genuine Dacor replacement parts to ensure the optimal performance and longevity of your appliances.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  },
  {
    title: 'Warranty Protection',
    description: 'Our repairs maintain your Dacor warranty coverage and come with our own service guarantee.',
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
    text: "The technician was extremely professional and knowledgeable about our Dacor oven. We were very impressed.",
    author: "Emily L.",
    location: "Toronto",
    rating: 5
  },
  {
    id: 2,
    text: "Our Dacor refrigerator needed repair, and the team handled it with great expertise and care.",
    author: "John P.",
    location: "Mississauga",
    rating: 5
  },
  {
    id: 3,
    text: "We appreciate the high-quality service provided for our Dacor appliances. They are always very thorough.",
    author: "Sophia K.",
    location: "Oakville",
    rating: 5
  }
];

// FAQ Items
const faqs: FAQItem[] = [
  {
    question: "How long does a Dacor appliance repair take?",
    answer: "Most Dacor appliance repairs are completed within one visit, typically lasting 1-2 hours. For more complex issues, we will provide a detailed timeline."
  },
  {
    question: "Do you repair all Dacor appliance models?",
    answer: "Yes, our technicians are trained to repair all models of Dacor refrigerators, ovens, and stoves."
  },
  {
    question: "What kind of warranty do you offer on Dacor appliance repairs?",
    answer: "We offer a 90-day warranty on all Dacor appliance repairs, covering both parts and labor."
  },
  {
    question: "Do you use genuine Dacor replacement parts?",
    answer: "Yes, we use only genuine Dacor replacement parts to maintain the luxury and performance of your appliance."
  },
  {
    question: "How can I maintain the high performance of my Dacor appliances?",
    answer: "Regular maintenance and cleaning are key. We can provide advice during our service visits to help keep your Dacor appliances in top condition."
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

export default function DacorBrandPage() {
  return (
    <BrandLayout
      brandInfo={dacorInfo}
      services={dacorServices}
      advantages={advantages}
      testimonials={testimonials}
      faqs={faqs}
      relatedBrands={relatedBrands}
      primaryColor="#000000" 
      secondaryColor="#f5f5f5"
    />
  );
}