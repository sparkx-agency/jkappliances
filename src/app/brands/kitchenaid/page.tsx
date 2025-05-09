"use client";

import BrandLayout from '@/components/layout/BrandLayout';
import { BrandInfo, Advantage, Testimonial, FAQItem } from '@/components/layout/BrandLayout';
import { BrandServiceItem } from '@/components/sections/brands/BrandServicesSection';

// Brand Information
const kitchenaidInfo: BrandInfo = {
  id: 'kitchenaid',
  name: 'KitchenAid',
  logo: '/images/brands/kitchen-aid.webp',
  description: 'KitchenAid is a premier American brand known for its high-quality, stylish, and durable kitchen appliances. Offering a wide range of products, including refrigerators, dishwashers, ovens, and cooktops, KitchenAid appliances are designed for both performance and aesthetic appeal, catering to the needs of passionate home cooks.',
  history: 'Founded in 1919, KitchenAid has a long history of innovation in the kitchen appliance industry. They have consistently delivered appliances that blend performance with iconic design, making them a favorite among home cooks and culinary enthusiasts.',
  expertise: 'Our technicians are highly trained in repairing KitchenAid appliances, understanding their design features and advanced technologies. We use only genuine KitchenAid parts to ensure your appliances maintain their exceptional performance and style.'
};

// KitchenAid Services with Common Issues
const kitchenaidServices: BrandServiceItem[] = [
  {
    id: 'refrigerator-repair',
    name: 'KitchenAid Refrigerator Repair',
    description: 'Expert repair services for KitchenAid refrigerators, including French door, side-by-side, and built-in models.',
    commonIssues: [
      'Cooling issues',
      'Ice maker malfunctions',
      'Water dispenser problems',
      'Temperature fluctuations',
      'Unusual noises',
      'Door seal issues'
    ],
    image: '/images/services/fridge-repair.png'
  },
  {
    id: 'dishwasher-repair',
    name: 'KitchenAid Dishwasher Repair',
    description: 'Specialized repair services for all KitchenAid dishwashers, including built-in and panel-ready models.',
    commonIssues: [
      'Not cleaning well',
      'Not draining',
      'Water leaks',
      'Strange noises',
      'Door latch problems',
      'Error codes'
    ],
    image: '/images/services/dishwasher-repair.png'
  },
  {
    id: 'oven-repair',
    name: 'KitchenAid Oven Repair',
    description: 'Comprehensive repair services for KitchenAid ovens, including convection, steam, and wall models.',
    commonIssues: [
      'Uneven cooking',
      'Temperature control issues',
      'Self-cleaning problems',
      'Door not closing',
      'Error codes',
      'Not turning on'
    ],
    image: '/images/services/walloven-repair.png'
  },
  {
    id: 'stove-repair',
    name: 'KitchenAid Stove Repair',
    description: 'Professional repair services for KitchenAid cooktops and ranges, including gas, electric, and induction models.',
    commonIssues: [
      'Burners not igniting',
      'Temperature regulation issues',
      'Surface element problems',
      'Induction issues',
      'Control panel malfunctions',
      'Error codes'
    ],
    image: '/images/services/cooktop-repair.png'
  }
];

// Service Advantages
const advantages: Advantage[] = [
  {
    title: 'Certified KitchenAid Repair Technicians',
    description: 'Our technicians are certified to repair all types of KitchenAid appliances, ensuring expert care.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  },
  {
    title: 'Genuine KitchenAid Parts',
    description: 'We exclusively use authentic KitchenAid replacement parts to maintain the high quality and performance of your appliances.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    )
  },
  {
    title: 'Warranty-Backed KitchenAid Repairs',
    description: 'All our KitchenAid repairs are backed by a comprehensive warranty, providing you with peace of mind.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  },
  {
    title: 'In-Depth Knowledge of KitchenAid Design and Technology',
    description: 'We have detailed knowledge of KitchenAid’s designs and advanced features, ensuring precise repairs.',
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
    text: 'The technician was excellent in repairing our KitchenAid refrigerator. The service was efficient, and the fridge is now working perfectly.',
    author: 'Michael W.',
    location: 'Toronto',
    rating: 5
  },
  {
    id: 2,
    text: 'I was very impressed with the repair service for my KitchenAid dishwasher. The technician was very professional and knowledgeable.',
    author: 'Lisa B.',
    location: 'Vaughan',
    rating: 5
  },
  {
    id: 3,
    text: 'The team did a fantastic job repairing our KitchenAid oven. The service was prompt and courteous.',
    author: 'Jennifer R.',
    location: 'Richmond Hill',
    rating: 5
  }
];

// FAQ Items
const faqs: FAQItem[] = [
  {
    question: 'How soon can you repair my KitchenAid appliance?',
    answer: 'Most KitchenAid appliance repairs are completed within one visit, typically in 1-2 hours. We will provide a detailed timeline for more complex repairs or if parts need to be ordered.'
  },
  {
    question: 'Do you repair KitchenAid’s high-end appliances?',
    answer: 'Yes, our technicians are fully trained to handle KitchenAid’s high-end appliances, addressing both mechanical and advanced technological features.'
  },
  {
    question: 'What warranty do you offer on KitchenAid appliance repairs?',
    answer: 'We offer a 90-day warranty on both parts and labor for KitchenAid appliance repairs. If the same issue occurs within this period, we will fix it at no extra cost.'
  },
  {
    question: 'Do you use genuine KitchenAid replacement parts?',
    answer: 'Yes, we always use genuine KitchenAid replacement parts to maintain the high standards and performance of your appliances.'
  },
  {
    question: 'How do I decide if my KitchenAid appliance should be repaired or replaced?',
    answer: 'Our technicians will thoroughly assess your appliance and give you an honest recommendation. We consider factors such as the appliance’s age, the cost of repair, and the availability of parts.'
  }
];

// Related Brands
const relatedBrands = [
  'JennAir',
  'Whirlpool',
  'Maytag',
  'Bosch',
  'Thermador',
  'Viking'
];

export default function KitchenAidBrandPage() {
  return (
    <BrandLayout
      brandInfo={kitchenaidInfo}
      services={kitchenaidServices}
      advantages={advantages}
      testimonials={testimonials}
      faqs={faqs}
      relatedBrands={relatedBrands}
      primaryColor="#b71c1c" 
      secondaryColor="#f5f5f5"
    />
  );
}