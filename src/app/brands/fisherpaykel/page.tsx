"use client";

import BrandLayout from '@/components/layout/BrandLayout';
import { BrandInfo, Advantage, Testimonial, FAQItem } from '@/components/layout/BrandLayout';
import { BrandServiceItem } from '@/components/sections/brands/BrandServicesSection';

// Brand Information
const fisherPaykelInfo: BrandInfo = {
  id: 'fisher-paykel',
  name: 'Fisher & Paykel',
  logo: '/images/brands/Fisher-paykel.webp',
  description: 'Fisher & Paykel is a premium appliance brand known for its innovative design and advanced technology. Originating in New Zealand, the brand offers a range of high-quality home appliances that focus on user-centric design, including refrigerators, dishwashers, ovens, and cooking ranges.',
  history: 'Founded in 1934, Fisher & Paykel began as an importer of appliances and later transitioned to manufacturing. The brand has consistently focused on innovation, particularly in developing appliances that integrate seamlessly into the modern home.',
  expertise: 'Our technicians are specialists in Fisher & Paykel appliances, trained to handle their unique design and technological features. We are committed to using genuine Fisher & Paykel parts to maintain the quality and performance of your appliances.'
};

// Fisher & Paykel Services with Common Issues
const fisherPaykelServices: BrandServiceItem[] = [
  {
    id: 'refrigerator-repair',
    name: 'Fisher & Paykel Refrigerator Repair',
    description: 'Expert repair services for all Fisher & Paykel refrigerators, including French door, integrated, and column models.',
    commonIssues: [
      'Cooling problems',
      'Ice maker not working',
      'Water dispenser issues',
      'Temperature control issues',
      'Unusual noises',
      'Door seal issues'
    ],
    image: '/images/services/fridge-repair.png'
  },
  {
    id: 'dishwasher-repair',
    name: 'Fisher & Paykel Dishwasher Repair',
    description: 'Specialized repair services for all Fisher & Paykel dishwashers, including DishDrawer and integrated models.',
    commonIssues: [
      'Not cleaning well',
      'Not draining properly',
      'Water leaks',
      'Strange noises',
      'Door latch problems',
      'Error codes'
    ],
    image: '/images/services/dishwasher-repair.png'
  },
  {
    id: 'oven-repair',
    name: 'Fisher & Paykel Oven Repair',
    description: 'Expert repair for Fisher & Paykel ovens, including built-in, convection, and steam models.',
    commonIssues: [
      'Uneven cooking',
      'Temperature control issues',
      'Self-cleaning problems',
      'Door not sealing',
      'Error codes',
      'Not turning on'
    ],
    image: '/images/services/walloven-repair.png'
  },
  {
    id: 'stove-repair',
    name: 'Fisher & Paykel Stove Repair',
    description: 'Professional repair for all Fisher & Paykel cooktops and ranges, including gas and induction models.',
    commonIssues: [
      'Burners not igniting',
      'Temperature regulation problems',
      'Surface element malfunctions',
      'Induction issues',
      'Control panel errors',
      'Error codes'
    ],
    image: '/images/services/cooktop-repair.png'
  }
];

// Service Advantages
const advantages: Advantage[] = [
  {
    title: 'Specialized Fisher & Paykel Technicians',
    description: 'Our technicians have undergone specialized training to repair all models of Fisher & Paykel appliances.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  },
  {
    title: 'Genuine Fisher & Paykel Parts',
    description: 'We exclusively use authentic Fisher & Paykel parts to ensure your appliance functions correctly and lasts longer.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    )
  },
  {
    title: 'Comprehensive Fisher & Paykel Warranty',
    description: 'All our Fisher & Paykel repairs come with a detailed warranty, providing you with assurance and reliability.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  },
  {
    title: 'In-Depth Knowledge of Fisher & Paykel Innovation',
    description: 'We have in-depth knowledge of Fisher & Paykel’s unique designs and advanced features, ensuring precise repairs.',
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
    text: 'The technician did an amazing job repairing our Fisher & Paykel refrigerator. The service was professional, and the fridge works perfectly now.',
    author: 'Samantha R.',
    location: 'Toronto',
    rating: 5
  },
  {
    id: 2,
    text: 'Our Fisher & Paykel DishDrawer dishwasher was not cleaning well, but the repair team fixed it quickly. Excellent service!',
    author: 'Daniel K.',
    location: 'North York',
    rating: 5
  },
  {
    id: 3,
    text: 'I am very impressed with the repair service on my Fisher & Paykel oven. The technician was thorough and knowledgeable.',
    author: 'Michelle P.',
    location: 'Etobicoke',
    rating: 5
  }
];

// FAQ Items
const faqs: FAQItem[] = [
  {
    question: 'How quickly can you repair my Fisher & Paykel appliance?',
    answer: 'Most Fisher & Paykel appliance repairs are completed within a single visit, typically in 1-2 hours. We’ll give you a clear timeline for more complex repairs or if parts need to be ordered.'
  },
  {
    question: 'Do you repair Fisher & Paykel Smart Appliances?',
    answer: 'Yes, our technicians are fully equipped to repair Fisher & Paykel Smart Appliances, addressing both mechanical and technological issues.'
  },
  {
    question: 'What type of warranty do you offer on Fisher & Paykel repairs?',
    answer: 'We offer a 90-day warranty on both parts and labor for Fisher & Paykel appliance repairs. Should you experience the same issue within this period, we will rectify it at no additional cost.'
  },
  {
    question: 'Do you use genuine Fisher & Paykel parts for repairs?',
    answer: 'Yes, we exclusively use genuine Fisher & Paykel replacement parts to ensure optimal performance and to maintain your appliance’s warranty.'
  },
  {
    question: 'How do I know if my Fisher & Paykel appliance is worth repairing or if I should replace it?',
    answer: 'Our technicians will assess your appliance and provide you with an honest evaluation. We consider the appliance’s age, the cost of repair, and the availability of parts before making a recommendation.'
  }
];

// Related Brands
const relatedBrands = [
  'Samsung',
  'LG',
  'Bosch',
  'Miele',
  'Sub-Zero',
  'Thermador'
];

export default function FisherPaykelBrandPage() {
  return (
    <BrandLayout
      brandInfo={fisherPaykelInfo}
      services={fisherPaykelServices}
      advantages={advantages}
      testimonials={testimonials}
      faqs={faqs}
      relatedBrands={relatedBrands}
      primaryColor="#004881" 
      secondaryColor="#f5f5f7"
    />
  );
}