"use client";

import BrandLayout from '@/components/layout/BrandLayout';
import { BrandInfo, Advantage, Testimonial, FAQItem } from '@/components/layout/BrandLayout';
import { BrandServiceItem } from '@/components/sections/brands/BrandServicesSection';

// Brand Information
const electroluxInfo: BrandInfo = {
  id: 'electrolux',
  name: 'Electrolux',
  logo: '/images/brands/Electrolux.webp',
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
```
```
tsx
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Electrolux Appliance Repair in Toronto & GTA | Expert Service',
  description: 'Reliable Electrolux appliance repair services in Toronto and the GTA. Our certified technicians provide expert repair for refrigerators, washers, dryers, ovens, and more.',
  keywords: ['Electrolux repair', 'appliance repair', 'Toronto', 'GTA', 'refrigerator repair', 'washer repair', 'dryer repair', 'oven repair', 'dishwasher repair', 'expert service'],
  openGraph: {
    title: 'Electrolux Appliance Repair in Toronto & GTA | Expert Service',
    description: 'Get top-quality Electrolux appliance repair services in Toronto and the Greater Toronto Area. Our experienced technicians are ready to fix your Electrolux appliances.',
    url: 'https://www.example.com/brands/electrolux',
    siteName: 'Your Appliance Repair',
    images: [
      {
        url: '/images/brands/Electrolux.webp',
        width: 800,
        height: 600,
        alt: 'Electrolux Appliance Repair',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Electrolux Appliance Repair in Toronto & GTA | Expert Service',
    description: 'Get top-quality Electrolux appliance repair services in Toronto and the Greater Toronto Area. Our experienced technicians are ready to fix your Electrolux appliances.',
    images: ['/images/brands/Electrolux.webp'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};
```
```
print(default_api.create_file(path = "src/app/brands/electrolux/page.tsx", content = "\"use client\";\n\nimport BrandLayout from '@/components/layout/BrandLayout';\nimport { BrandInfo, Advantage, Testimonial, FAQItem } from '@/components/layout/BrandLayout';\nimport { BrandServiceItem } from '@/components/sections/brands/BrandServicesSection';\n\n// Brand Information\nconst electroluxInfo: BrandInfo = {\n  id: 'electrolux',\n  name: 'Electrolux',\n  logo: '/images/brands/Electrolux.webp',\n  description: 'Electrolux is a globally recognized brand known for its innovative and high-quality home appliances. With a strong emphasis on design and sustainability, Electrolux offers a range of products that enhance the home living experience. Their appliances, including refrigerators, washers, dryers, dishwashers, and ovens, are engineered to deliver superior performance and efficiency.',\n  history: 'Founded in 1919, Electrolux has a rich history of innovation in the appliance industry. Originating in Sweden, the company has grown to become a leading global manufacturer, consistently setting new standards in home appliance design and technology.',\n  expertise: 'Our technicians are extensively trained to handle the intricacies of Electrolux appliances. We use genuine Electrolux parts to ensure every repair maintains the high standards of the brand. Our team is adept at servicing all models, ensuring your appliances perform as intended.'\n};\n\n// Electrolux Services with Common Issues\nconst electroluxServices: BrandServiceItem[] = [\n  {\n    id: 'refrigerator-repair',\n    name: 'Electrolux Refrigerator Repair',\n    description: 'Expert repair services for all Electrolux refrigerator models, including French door, side-by-side, and built-in refrigerators.',\n    commonIssues: [\n      'Cooling issues',\n      'Ice maker not working',\n      'Water dispenser problems',\n      'Temperature fluctuations',\n      'Noise',\n      'Door seal issues'\n    ],\n    image: '/images/services/fridge-repair.png'\n  },\n  {\n    id: 'washer-repair',\n    name: 'Electrolux Washer Repair',\n    description: 'Comprehensive repair for all Electrolux washing machines, including front-load and top-load models.',\n    commonIssues: [\n      'Not starting',\n      'Not spinning',\n      'Leaking',\n      'Error codes',\n      'Drainage issues',\n      'Excessive vibration'\n    ],\n    image: '/images/services/washing-machine-repair.png'\n  },\n  {\n    id: 'dryer-repair',\n    name: 'Electrolux Dryer Repair',\n    description: 'Reliable repair services for Electrolux dryers, including gas and electric models.',\n    commonIssues: [\n      'Not heating',\n      'Overheating',\n      'Drum not turning',\n      'Timer issues',\n      'Strange noises',\n      'Not starting'\n    ],\n    image: '/images/services/dryer-repair.png'\n  },\n  {\n    id: 'dishwasher-repair',\n    name: 'Electrolux Dishwasher Repair',\n    description: 'Effective repair solutions for all Electrolux dishwashers, including built-in and portable models.',\n    commonIssues: [\n      'Not cleaning well',\n      'Not draining',\n      'Water leaks',\n      'Strange noises',\n      'Door latch problems',\n      'Error codes'\n    ],\n    image: '/images/services/dishwasher-repair.png'\n  },\n  {\n    id: 'oven-repair',\n    name: 'Electrolux Oven Repair',\n    description: 'Expert repair services for Electrolux ovens, including convection, steam, and built-in models.',\n    commonIssues: [\n      'Uneven heating',\n      'Temperature control issues',\n      'Self-cleaning problems',\n      'Door not closing properly',\n      'Error codes',\n      'Not turning on'\n    ],\n    image: '/images/services/walloven-repair.png'\n  },\n  {\n    id: 'stove-repair',\n    name: 'Electrolux Stove Repair',\n    description: 'Professional repair services for all Electrolux cooktops and ranges, including gas, electric, and induction models.',\n    commonIssues: [\n      'Burners not lighting',\n      'Temperature regulation issues',\n      'Surface element problems',\n      'Control panel errors',\n      'Induction not working',\n      'Error codes'\n    ],\n    image: '/images/services/cooktop-repair.png'\n  }\n];\n\n// Service Advantages\nconst advantages: Advantage[] = [\n  {\n    title: 'Electrolux Certified Technicians',\n    description: 'Our team comprises technicians certified to repair Electrolux appliances, ensuring high-quality service.',\n    icon: (\n      <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" className=\"w-6 h-6\">\n        <path strokeLinecap=\"round\" strokeLinejoin=\"round\" strokeWidth={2} d=\"M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z\" />\n      </svg>\n    )\n  },\n  {\n    title: 'Genuine Electrolux Replacement Parts',\n    description: 'We use only authentic Electrolux parts, guaranteeing perfect fit and appliance longevity.',\n    icon: (\n      <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" className=\"w-6 h-6\">\n        <path strokeLinecap=\"round\" strokeLinejoin=\"round\" strokeWidth={2} d=\"M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4\" />\n      </svg>\n    )\n  },\n  {\n    title: 'Warranty on All Electrolux Repairs',\n    description: 'Our repairs are backed by a comprehensive warranty, offering you peace of mind.',\n    icon: (\n      <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" className=\"w-6 h-6\">\n        <path strokeLinecap=\"round\" strokeLinejoin=\"round\" strokeWidth={2} d=\"M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z\" />\n      </svg>\n    )\n  },\n  {\n    title: 'Advanced Electrolux Technology Expertise',\n    description: 'We possess specialized knowledge in Electrolux’s advanced appliance technology and features.',\n    icon: (\n      <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" className=\"w-6 h-6\">\n        <path strokeLinecap=\"round\" strokeLinejoin=\"round\" strokeWidth={2} d=\"M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z\" />\n      </svg>\n    )\n  }\n];\n\n// Customer Testimonials\nconst testimonials: Testimonial[] = [\n  {\n    id: 1,\n    text: \"The technician did an excellent job fixing our Electrolux refrigerator. It's running perfectly now, and the service was fast and friendly.\",\n    author: \"Emily D.\",\n    location: \"North York\",\n    rating: 5\n  },\n  {\n    id: 2,\n    text: \"Our Electrolux washer was leaking, and the service team fixed it quickly. They were very knowledgeable about Electrolux appliances.\",\n    author: \"David L.\",\n    location: \"Scarborough\",\n    rating: 5\n  },\n  {\n    id: 3,\n    text: \"I'm so impressed with the service we received for our Electrolux oven. The technician was efficient and professional.\",\n    author: \"Jessica M.\",\n    location: \"Richmond Hill\",\n    rating: 5\n  }\n];\n\n// FAQ Items\nconst faqs: FAQItem[] = [\n  {\n    question: \"How long does a typical Electrolux appliance repair take?\",\n    answer: \"Most Electrolux appliance repairs are completed within one visit, generally taking 1-2 hours. We provide a clear timeline for any repairs that may require more time or parts.\"\n  },\n  {\n    question: \"Do you repair Electrolux Smart Appliances?\",\n    answer: \"Yes, our technicians are trained to handle the latest Electrolux Smart Appliances, addressing both mechanical and digital functionality.\"\n  },\n  {\n    question: \"What warranty is offered on Electrolux appliance repairs?\",\n    answer: \"We offer a 90-day warranty on parts and labor for all Electrolux appliance repairs. If the same issue occurs within this period, we'll repair it at no extra charge.\"\n  },\n  {\n    question: \"Do you use genuine Electrolux replacement parts?\",\n    answer: \"We exclusively use genuine Electrolux replacement parts to ensure optimal performance and to maintain your appliance's warranty.\"\n  },\n  {\n    question: \"How do I know if my Electrolux appliance should be repaired or replaced?\",\n    answer: \"Our technicians will thoroughly assess your appliance and provide an honest recommendation. We consider factors such as the appliance's age, repair costs, and parts availability.\"\n  }\n];\n\n// Related Brands\nconst relatedBrands = [\n  \"Samsung\",\n  \"LG\",\n  \"Whirlpool\",\n  \"GE\",\n  \"Bosch\",\n  \"Frigidaire\"\n];\n\nexport default function ElectroluxBrandPage() {\n  return (\n    <BrandLayout\n      brandInfo={electroluxInfo}\n      services={electroluxServices}\n      advantages={advantages}\n      testimonials={testimonials}\n      faqs={faqs}\n      relatedBrands={relatedBrands}\n      primaryColor=\"#00539e\" \n      secondaryColor=\"#f5f5f5\"\n    />\n  );\n}\n"))
```
```
print(default_api.create_file(path = "src/app/brands/electrolux/metadata.ts", content = "import { Metadata } from 'next';\n\nexport const metadata: Metadata = {\n  title: 'Electrolux Appliance Repair in Toronto & GTA | Expert Service',\n  description: 'Reliable Electrolux appliance repair services in Toronto and the GTA. Our certified technicians provide expert repair for refrigerators, washers, dryers, ovens, and more.',\n  keywords: ['Electrolux repair', 'appliance repair', 'Toronto', 'GTA', 'refrigerator repair', 'washer repair', 'dryer repair', 'oven repair', 'dishwasher repair', 'expert service'],\n  openGraph: {\n    title: 'Electrolux Appliance Repair in Toronto & GTA | Expert Service',\n    description: 'Get top-quality Electrolux appliance repair services in Toronto and the Greater Toronto Area. Our experienced technicians are ready to fix your Electrolux appliances.',\n    url: 'https://www.example.com/brands/electrolux',\n    siteName: 'Your Appliance Repair',\n    images: [\n      {\n        url: '/images/brands/Electrolux.webp',\n        width: 800,\n        height: 600,\n        alt: 'Electrolux Appliance Repair',\n      },\n    ],\n    locale: 'en_US',\n    type: 'website',\n  },\n  twitter: {\n    card: 'summary_large_image',\n    title: 'Electrolux Appliance Repair in Toronto & GTA | Expert Service',\n    description: 'Get top-quality Electrolux appliance repair services in Toronto and the Greater Toronto Area. Our experienced technicians are ready to fix your Electrolux appliances.',\n    images: ['/images/brands/Electrolux.webp'],\n  },\n  robots: {\n    index: true,\n    follow: true,\n    googleBot: {\n      index: true,\n      follow: true,\n      'max-video-preview': -1,\n      'max-image-preview': 'large',\n      'max-snippet': -1,\n    },\n  },\n};\n"))