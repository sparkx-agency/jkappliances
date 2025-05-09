"use client";

import BrandLayout from '@/components/layout/BrandLayout';
import { BrandInfo, Advantage, Testimonial, FAQItem } from '@/components/layout/BrandLayout';
import { BrandServiceItem } from '@/components/sections/brands/BrandServicesSection';

// Brand Information
const electroluxInfo: BrandInfo = {
  id: 'electrolux',
  name: 'Electrolux',
  logo: '/images/brands/electrolux.webp',
  description: 'Electrolux is a globally recognized brand known for its innovative and high-quality home appliances. With a strong emphasis on design and sustainability, Electrolux offers a range of products that enhance the home living experience. Their appliances, including refrigerators, washers, dryers, dishwashers, and ovens, are engineered to deliver superior performance and efficiency.',
  history: 'Founded in 1919, Electrolux has a rich history of innovation in the appliance industry. Originating in Sweden, the company has grown to become a leading global manufacturer, consistently setting new standards in home appliance design and technology.',
  expertise: 'Our technicians are extensively trained to handle the intricacies of Electrolux appliances. We use genuine Electrolux parts to ensure every repair maintains the high standards of the brand. Our team is adept at servicing all models, ensuring your appliances perform as intended.'
};

// Electrolux Services with Common Issues
const electroluxServices: BrandServiceItem[] = [
  {
    id: 'refrigerator-repair',
    name: 'Electrolux Refrigerator Repair',
    description: 'Expert repair services for all Electrolux refrigerator models, including French door, side-by-side, and built-in refrigerators.',
    commonIssues: [
      'Cooling issues',
     'Ice maker not working',
      'Water dispenser problems',
      'Temperature fluctuations',
      'Noise',
      'Door seal issues'
    ],
    image: '/images/services/fridge-repair.png'
  },
  {
    id: 'washer-repair',
    name: 'Electrolux Washer Repair',
    description: 'Comprehensive repair for all Electrolux washing machines, including front-load and top-load models.',
    commonIssues: [
      'Not starting',
      'Not spinning',
      'Leaking',
      'Error codes',
      'Drainage issues',
      'Excessive vibration'
    ],
    image: '/images/services/washing-machine-repair.png'
  },
  {
    id: 'dryer-repair',
    name: 'Electrolux Dryer Repair',
    description: 'Reliable repair services for Electrolux dryers, including gas and electric models.',
    commonIssues: [
      'Not heating',
      'Overheating',
      'Drum not turning',
      'Timer issues',
      'Strange noises',
      'Not starting'
    ],
    image: '/images/services/dryer-repair.png'
  },
  {
    id: 'dishwasher-repair',
    name: 'Electrolux Dishwasher Repair',
    description: 'Effective repair solutions for all Electrolux dishwashers, including built-in and portable models.',
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
    name: 'Electrolux Oven Repair',
    description: 'Expert repair services for Electrolux ovens, including convection, steam, and built-in models.',
    commonIssues: [
      'Uneven heating',
      'Temperature control issues',
      'Self-cleaning problems',
      'Door not closing properly',
      'Error codes',
      'Not turning on'
    ],
    image: '/images/services/walloven-repair.png'
  },
  {
    id: 'stove-repair',
    name: 'Electrolux Stove Repair',
    description: 'Professional repair services for all Electrolux cooktops and ranges, including gas, electric, and induction models.',
    commonIssues: [
      'Burners not lighting',
      'Temperature regulation issues',
      'Surface element problems',
      'Control panel errors',
      'Induction not working',
      'Error codes'
    ],
    image: '/images/services/cooktop-repair.png'
  }
];

// Service Advantages
const advantages: Advantage[] = [
  {
    title: 'Electrolux Certified Technicians',
    description: 'Our team comprises technicians certified to repair Electrolux appliances, ensuring high-quality service.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  },
  {
    title: 'Genuine Electrolux Replacement Parts',
    description: 'We use only authentic Electrolux parts, guaranteeing perfect fit and appliance longevity.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    )
  },
  {
    title: 'Warranty on All Electrolux Repairs',
    description: 'Our repairs are backed by a comprehensive warranty, offering you peace of mind.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  },
  {
    title: 'Advanced Electrolux Technology Expertise',
    description: 'We possess specialized knowledge in Electrolux’s advanced appliance technology and features.',
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
    text: "The technician did an excellent job fixing our Electrolux refrigerator. It's running perfectly now, and the service was fast and friendly.",
    author: "Emily D.",
    location: "North York",
    rating: 5
  },
  {
    id: 2,
    text: "Our Electrolux washer was leaking, and the service team fixed it quickly. They were very knowledgeable about Electrolux appliances.",
    author: "David L.",
    location: "Scarborough",
    rating: 5
  },
  {
    id: 3,
    text: "I'm so impressed with the service we received for our Electrolux oven. The technician was efficient and professional.",
    author: "Jessica M.",
    location: "Richmond Hill",
    rating: 5
  }
];

// FAQ Items
const faqs: FAQItem[] = [
  {
    question: "How long does a typical Electrolux appliance repair take?",
    answer: "Most Electrolux appliance repairs are completed within one visit, generally taking 1-2 hours. We provide a clear timeline for any repairs that may require more time or parts."
  },
  {
    question: "Do you repair Electrolux Smart Appliances?",
    answer: "Yes, our technicians are trained to handle the latest Electrolux Smart Appliances, addressing both mechanical and digital functionality."
  },
  {
    question: "What warranty is offered on Electrolux appliance repairs?",
    answer: "We offer a 90-day warranty on parts and labor for all Electrolux appliance repairs. If the same issue occurs within this period, we'll repair it at no extra charge."
  },
  {
    question: "Do you use genuine Electrolux replacement parts?",
    answer: "We exclusively use genuine Electrolux replacement parts to ensure optimal performance and to maintain your appliance's warranty."
  },
  {
    question: "How do I know if my Electrolux appliance should be repaired or replaced?",
    answer: "Our technicians will thoroughly assess your appliance and provide an honest recommendation. We consider factors such as the appliance's age, repair costs, and parts availability."
  }
];

// Related Brands
const relatedBrands = [
  "Samsung",
  "LG",
  "Whirlpool",
  "GE",
  "Bosch",
  "Frigidaire"
];

export default function ElectroluxBrandPage() {
  return (
    <BrandLayout
      brandInfo={electroluxInfo}
      services={electroluxServices}
      advantages={advantages}
      testimonials={testimonials}
      faqs={faqs}
      relatedBrands={relatedBrands}
      primaryColor="#00539e" 
      secondaryColor="#f5f5f5"
    />
  );
}
