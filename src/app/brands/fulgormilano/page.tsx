"use client";

import BrandLayout from '@/components/layout/BrandLayout';
import { BrandInfo, Advantage, Testimonial, FAQItem } from '@/components/layout/BrandLayout';
import { BrandServiceItem } from '@/components/sections/brands/BrandServicesSection';

// Brand Information
const fulgorMilanoInfo: BrandInfo = {
  id: 'fulgor-milano',
  name: 'Fulgor Milano',
  logo: '/images/brands/FulgorMilano.webp',
  description: 'Fulgor Milano is a premium Italian brand specializing in high-end cooking appliances. Known for blending cutting-edge technology with elegant Italian design, Fulgor Milano offers ranges, cooktops, ovens, and more. Their appliances are designed for those who appreciate superior craftsmanship and sophisticated style.',
  history: 'Established in Italy in 1949, Fulgor Milano has a rich history of producing high-performance cooking appliances. The brand is dedicated to innovation and continues to develop advanced cooking solutions that cater to the needs of discerning chefs.',
  expertise: 'Our technicians are specially trained to work with Fulgor Milano appliances, understanding their advanced features and sophisticated design. We use only genuine Fulgor Milano parts to ensure your appliances maintain their high performance and elegant appearance.'
};

// Fulgor Milano Services with Common Issues
const fulgorMilanoServices: BrandServiceItem[] = [
  {
    id: 'oven-repair',
    name: 'Fulgor Milano Oven Repair',
    description: 'Expert repair services for Fulgor Milano ovens, including built-in, steam, and convection models.',
    commonIssues: [
      'Uneven heating',
      'Temperature control issues',
      'Self-cleaning malfunctions',
      'Door not sealing',
      'Error codes',
      'Not turning on'
    ],
    image: '/images/services/walloven-repair.png'
  },
  {
    id: 'stove-repair',
    name: 'Fulgor Milano Stove Repair',
    description: 'Professional repair for all Fulgor Milano cooktops and ranges, including gas, electric, and induction models.',
    commonIssues: [
      'Burners not lighting',
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
    title: 'Certified Fulgor Milano Technicians',
    description: 'Our team includes technicians specifically certified to repair Fulgor Milano appliances, ensuring specialized care.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  },
  {
    title: 'Genuine Fulgor Milano Replacement Parts',
    description: 'We use authentic Fulgor Milano parts to guarantee the integrity and performance of your appliances.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    )
  },
  {
    title: 'Comprehensive Warranty on Fulgor Milano Repairs',
    description: 'Our Fulgor Milano repairs come with a comprehensive warranty, offering you added confidence and assurance.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  },
  {
    title: 'Expertise in Fulgor Milano’s Design and Technology',
    description: 'We are deeply familiar with Fulgor Milano’s unique designs and high-end features, ensuring effective and careful repairs.',
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
    text: 'The technician who repaired our Fulgor Milano oven was incredibly knowledgeable. He fixed it quickly, and it\'s working perfectly now.',
    author: 'Isabella G.',
    location: 'Toronto',
    rating: 5
  },
  {
    id: 2,
    text: 'I was impressed with the repair service for my Fulgor Milano cooktop. The technician was professional and efficient.',
    author: 'Marco D.',
    location: 'Vaughan',
    rating: 5
  },
  {
    id: 3,
    text: 'The team did a fantastic job repairing our Fulgor Milano oven. We were very pleased with the prompt service and expertise.',
    author: 'Sofia L.',
    location: 'Richmond Hill',
    rating: 5
  }
];

// FAQ Items
const faqs: FAQItem[] = [
  {
    question: 'How soon can you repair my Fulgor Milano appliance?',
    answer: 'Most Fulgor Milano appliance repairs are completed within one visit, usually in 1-2 hours. We will provide a detailed timeline for more complex repairs or if parts need to be ordered.'
  },
  {
    question: 'Do you repair Fulgor Milano’s high-end appliances?',
    answer: 'Yes, our technicians are skilled in repairing Fulgor Milano’s high-end appliances, addressing both their sophisticated features and basic mechanical issues.'
  },
  {
    question: 'What kind of warranty do you offer on Fulgor Milano appliance repairs?',
    answer: 'We offer a 90-day warranty on both parts and labor for all Fulgor Milano repairs. If the same issue arises within this period, we’ll fix it at no extra cost.'
  },
  {
    question: 'Do you use genuine Fulgor Milano replacement parts?',
    answer: 'Yes, we always use genuine Fulgor Milano replacement parts to maintain the optimal performance and integrity of your appliances.'
  },
  {
    question: 'How do I know if my Fulgor Milano appliance is worth repairing or should be replaced?',
    answer: 'Our technicians will thoroughly assess your appliance and provide an honest recommendation. We consider factors like the appliance\'s age, the cost of repair, and parts availability.'
  }
];

// Related Brands
const relatedBrands = [
  'Thermador',
  'Wolf',
  'Viking',
  'Gaggenau',
  'Miele',
  'Sub-Zero'
];

export default function FulgorMilanoBrandPage() {
  return (
    <BrandLayout
      brandInfo={fulgorMilanoInfo}
      services={fulgorMilanoServices}
      advantages={advantages}
      testimonials={testimonials}
      faqs={faqs}
      relatedBrands={relatedBrands}
      primaryColor="#000000"
      secondaryColor="#f5f5f5"
    />
  );
}