"use client";

import BrandLayout from '@/components/layout/BrandLayout';
import { BrandInfo, Advantage, Testimonial, FAQItem } from '@/components/layout/BrandLayout';
import { BrandServiceItem } from '@/components/sections/brands/BrandServicesSection';

// Brand Information
const gaggenauInfo: BrandInfo = {
  id: 'gaggenau',
  name: 'Gaggenau',
  logo: '/images/brands/gaggenau.webp',
  description: 'Gaggenau is a luxury brand known for its professional-grade home appliances. With a focus on culinary excellence and innovative technology, Gaggenau offers a range of high-performance ovens, cooktops, refrigerators, and more. Their appliances are favored by chefs and those passionate about cooking.',
  history: 'Founded in Germany in 1683, Gaggenau began as an ironworks and transitioned to producing high-end appliances in the late 19th century. They have since been at the forefront of culinary appliance innovation, setting new standards for quality and design.',
  expertise: 'Our technicians are highly trained in the intricacies of Gaggenau appliances, understanding their advanced technology and high-end design. We use only genuine Gaggenau parts to maintain the exceptional quality and performance of your appliances.'
};

// Gaggenau Services with Common Issues
const gaggenauServices: BrandServiceItem[] = [
  {
    id: 'refrigerator-repair',
    name: 'Gaggenau Refrigerator Repair',
    description: 'Expert repair services for Gaggenau refrigerators, including built-in, wine storage, and cooling systems.',
    commonIssues: [
      'Cooling issues',
      'Temperature fluctuations',
      'Ice maker not working',
      'Water dispenser problems',
      'Unusual noises',
      'Door seal issues'
    ],
    image: '/images/services/fridge-repair.png'
  },
  {
    id: 'oven-repair',
    name: 'Gaggenau Oven Repair',
    description: 'Specialized repair services for all Gaggenau ovens, including combi-steam, convection, and wall ovens.',
    commonIssues: [
      'Uneven heating',
      'Temperature control issues',
      'Self-cleaning not working',
      'Door not closing',
      'Error codes',
      'Not turning on'
    ],
    image: '/images/services/walloven-repair.png'
  },
  {
    id: 'stove-repair',
    name: 'Gaggenau Stove Repair',
    description: 'Professional repair services for Gaggenau cooktops and ranges, including gas, electric, and induction models.',
    commonIssues: [
      'Burners not igniting',
      'Temperature regulation issues',
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
    title: 'Certified Gaggenau Specialists',
    description: 'Our technicians are factory-trained and certified to repair Gaggenau appliances, ensuring expert service.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  },
  {
    title: 'Genuine Gaggenau Parts',
    description: 'We use only genuine Gaggenau replacement parts to maintain the high quality and performance of your appliances.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    )
  },
  {
    title: 'Warranty-Backed Gaggenau Repairs',
    description: 'All our Gaggenau appliance repairs are backed by a comprehensive warranty, offering you peace of mind.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  },
  {
    title: 'Expertise in Gaggenau’s Advanced Technology',
    description: 'We are well-versed in Gaggenau’s advanced culinary technology, ensuring your appliances receive the best care.',
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
    text: 'The technician who repaired our Gaggenau refrigerator was incredibly skilled. The service was prompt, and the fridge is working perfectly now.',
    author: 'Thomas B.',
    location: 'Toronto',
    rating: 5
  },
  {
    id: 2,
    text: 'I am very satisfied with the repair service on my Gaggenau oven. The technician was knowledgeable and efficient.',
    author: 'Eleanor W.',
    location: 'Vaughan',
    rating: 5
  },
  {
    id: 3,
    text: 'Our Gaggenau cooktop was having issues, but the repair team fixed it quickly. They clearly understood the technology behind Gaggenau appliances.',
    author: 'David C.',
    location: 'Richmond Hill',
    rating: 5
  }
];

// FAQ Items
const faqs: FAQItem[] = [
  {
    question: 'How long does a typical Gaggenau appliance repair take?',
    answer: 'Most Gaggenau appliance repairs are completed within a single visit, typically lasting 1-2 hours. We provide a clear timeline if your repair requires more time or special parts.'
  },
  {
    question: 'Do you repair Gaggenau’s high-end appliances?',
    answer: 'Yes, our technicians are specially trained to repair Gaggenau’s high-end appliances, addressing both their sophisticated technology and basic mechanical issues.'
  },
  {
    question: 'What warranty do you offer on Gaggenau appliance repairs?',
    answer: 'We provide a 90-day warranty on both parts and labor for all Gaggenau appliance repairs. If the same issue recurs within this period, we will resolve it at no additional cost.'
  },
  {
    question: 'Do you use genuine Gaggenau parts for repairs?',
    answer: 'Yes, we exclusively use genuine Gaggenau replacement parts to maintain the high performance and reliability of your appliances.'
  },
  {
    question: 'How do I determine if my Gaggenau appliance is worth repairing or should be replaced?',
    answer: 'Our technicians will assess your appliance and provide an honest recommendation. We consider factors such as the appliance\'s age, repair costs, and the availability of parts.'
  }
];

// Related Brands
const relatedBrands = [
  'Wolf',
  'Sub-Zero',
  'Thermador',
  'Miele',
  'Viking',
  'Fulgor Milano'
];

export default function GaggenauBrandPage() {
  return (
    <BrandLayout
      brandInfo={gaggenauInfo}
      services={gaggenauServices}
      advantages={advantages}
      testimonials={testimonials}
      faqs={faqs}
      relatedBrands={relatedBrands}
      primaryColor="#000000" 
      secondaryColor="#f5f5f7"
    />
  );
}