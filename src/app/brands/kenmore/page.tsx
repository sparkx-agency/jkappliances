"use client";

import BrandLayout from '@/components/layout/BrandLayout';
import { BrandInfo, Advantage, Testimonial, FAQItem } from '@/components/layout/BrandLayout';
import { BrandServiceItem } from '@/components/sections/brands/BrandServicesSection';

// Brand Information
const kenmoreInfo: BrandInfo = {
  id: 'kenmore',
  name: 'Kenmore',
  logo: '/images/brands/Kenmore.webp',
  description: 'Kenmore is a trusted American brand that has been providing reliable home appliances for decades. Known for their durability and value, Kenmore offers a wide range of products including refrigerators, washers, dryers, dishwashers, and ovens that cater to various household needs.',
  history: 'First introduced in 1913, Kenmore has a long history of innovation and reliability in the appliance industry. Over the years, Kenmore has become a household name, known for providing dependable and affordable appliances.',
  expertise: 'Our technicians have extensive experience repairing Kenmore appliances, from their classic designs to the latest models. We use genuine Kenmore parts to ensure your appliances continue to perform reliably.'
};

// Kenmore Services with Common Issues
const kenmoreServices: BrandServiceItem[] = [
  {
    id: 'refrigerator-repair',
    name: 'Kenmore Refrigerator Repair',
    description: 'Dependable repair services for Kenmore refrigerators, including top-freezer, bottom-freezer, and side-by-side models.',
    commonIssues: [
      'Cooling issues',
      'Ice maker problems',
      'Water dispenser not working',
      'Temperature inconsistencies',
      'Unusual noises',
      'Door seal problems'
    ],
    image: '/images/services/fridge-repair.png'
  },
  {
    id: 'washer-repair',
    name: 'Kenmore Washer Repair',
    description: 'Comprehensive repair services for Kenmore washers, covering top-load and front-load models.',
    commonIssues: [
      'Not starting',
      'Not spinning',
      'Leaking',
      'Error codes',
      'Drainage issues',
      'Excessive shaking'
    ],
    image: '/images/services/washing-machine-repair.png'
  },
  {
    id: 'dryer-repair',
    name: 'Kenmore Dryer Repair',
    description: 'Reliable repair solutions for Kenmore dryers, including gas and electric models.',
    commonIssues: [
      'Not heating',
      'Overheating',
      'Drum not turning',
      'Timer malfunctions',
      'Strange noises',
      'Not starting'
    ],
    image: '/images/services/dryer-repair.png'
  },
  {
    id: 'dishwasher-repair',
    name: 'Kenmore Dishwasher Repair',
    description: 'Effective repair services for all Kenmore dishwashers, including built-in and portable models.',
    commonIssues: [
      'Not cleaning dishes well',
      'Not draining',
      'Water leaks',
      'Unusual sounds',
      'Door latch problems',
      'Error codes'
    ],
    image: '/images/services/dishwasher-repair.png'
  },
  {
    id: 'oven-repair',
    name: 'Kenmore Oven Repair',
    description: 'Skilled repair services for Kenmore ovens, including electric and gas models.',
    commonIssues: [
      'Uneven cooking',
      'Temperature control issues',
      'Self-cleaning not working',
      'Door not sealing',
      'Error codes',
      'Not turning on'
    ],
    image: '/images/services/walloven-repair.png'
  },
  {
    id: 'stove-repair',
    name: 'Kenmore Stove Repair',
    description: 'Competent repair services for Kenmore cooktops and ranges, handling gas and electric models.',
    commonIssues: [
      'Burners not igniting',
      'Inconsistent heating',
      'Surface element malfunctions',
      'Control panel problems',
      'Oven not heating',
      'Error codes'
    ],
    image: '/images/services/cooktop-repair.png'
  }
];

// Service Advantages
const advantages: Advantage[] = [
  {
    title: 'Kenmore Appliance Repair Specialists',
    description: 'Our team is highly trained in Kenmore appliance repair, ensuring professional and effective service.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  },
  {
    title: 'Genuine Kenmore Replacement Parts',
    description: 'We use only authentic Kenmore parts, ensuring optimal performance and reliability for your appliances.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    )
  },
  {
    title: 'Warranty-Backed Kenmore Repairs',
    description: 'All our Kenmore repairs are backed by a comprehensive warranty, offering you added peace of mind.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  },
  {
    title: 'Extensive Experience with All Kenmore Models',
    description: 'We have extensive experience repairing both new and older Kenmore models, understanding their specific designs and common issues.',
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
    text: 'The technician was great! He quickly fixed our Kenmore refrigerator, and it\'s working perfectly now.',
    author: 'Emily R.',
    location: 'North York',
    rating: 5
  },
  {
    id: 2,
    text: 'Our Kenmore washer was having some issues, but the repair team solved it efficiently. Very professional.',
    author: 'David S.',
    location: 'Scarborough',
    rating: 5
  },
  {
    id: 3,
    text: 'I was very impressed with the service on my Kenmore oven. The technician was knowledgeable and got the job done right.',
    author: 'Jessica M.',
    location: 'Etobicoke',
    rating: 5
  }
];

// FAQ Items
const faqs: FAQItem[] = [
  {
    question: 'How long does a typical Kenmore appliance repair take?',
    answer: 'Most Kenmore appliance repairs are completed in a single visit, generally taking 1-2 hours. We’ll give you a clear timeline if your repair needs more time or special parts.'
  },
  {
    question: 'Do you repair both old and new Kenmore appliance models?',
    answer: 'Yes, our technicians are experienced in repairing a wide range of Kenmore appliances, from older models to the latest designs.'
  },
  {
    question: 'What kind of warranty do you offer on Kenmore appliance repairs?',
    answer: 'We offer a 90-day warranty on both parts and labor for all Kenmore appliance repairs. If the same issue recurs within this period, we’ll fix it at no extra cost.'
  },
  {
    question: 'Do you use genuine Kenmore parts for repairs?',
    answer: 'Yes, we always use genuine Kenmore replacement parts to ensure the best performance and to keep your appliance’s warranty intact.'
  },
  {
    question: 'How do I decide between repairing and replacing my Kenmore appliance?',
    answer: 'Our technicians will thoroughly assess your appliance and provide an honest recommendation. We consider factors like the appliance\'s age, repair costs, and parts availability.'
  }
];

// Related Brands
const relatedBrands = [
  'Whirlpool',
  'GE',
  'Maytag',
  'Samsung',
  'Frigidaire',
  'LG'
];

export default function KenmoreBrandPage() {
  return (
    <BrandLayout
      brandInfo={kenmoreInfo}
      services={kenmoreServices}
      advantages={advantages}
      testimonials={testimonials}
      faqs={faqs}
      relatedBrands={relatedBrands}
      primaryColor="#1E5897" 
      secondaryColor="#f5f5f7"
    />
  );
}