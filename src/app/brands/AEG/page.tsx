tsx
import { Metadata } from 'next';
import { BrandLayout } from '@/components/layout/BrandLayout';
import {
  BrandFAQSection,
  BrandServicesSection,
  BrandsSliderSection,
} from '@/components/sections/brands';
import { ApplianceRepairStructuredData } from '@/components/seo/ApplianceRepairStructuredData';
import { CommonCouponSection } from '@/components/sections/common/CommonCouponSection';
import { ModernCTASection } from '@/components/sections/common/ModernCTASection';
import { ServicesTabSection } from '@/components/sections/common/ServicesTabSection';
import { TestimonialsSliderSection } from '@/components/sections/common/TestimonialsSliderSection';

export const metadata: Metadata = {
  title: 'AEG Appliance Repair Services',
  description: 'Expert AEG appliance repair services for all models. Certified technicians and genuine AEG parts.',
};

const brandData = {
  id: 'AEG',
  name: 'AEG',
  logo: '/images/brands/AEG.webp',
  description:
    'AEG is a distinguished German brand renowned for its high-quality home appliances that blend innovative technology with sleek, functional design. They are committed to creating appliances that are both aesthetically pleasing and efficient.',
  history:
    'Founded in 1883 in Berlin, AEG initially focused on electrical goods and later expanded into home appliances. It has since become synonymous with German engineering precision and reliability, shaping the landscape of modern home appliances with numerous innovations.',
  expertise:
    'Our technicians are highly skilled and certified to repair all AEG appliances. We have extensive experience with AEG products, from their latest smart appliances to their classic designs. We use only genuine AEG replacement parts to ensure the longevity and optimal performance of your appliance.',
};

const services = [
  {
    id: 'refrigerator-repair',
    name: 'AEG Refrigerator Repair',
    description:
      'Comprehensive repair services for all AEG refrigerator models, including advanced cooling systems and energy-efficient designs.',
    commonIssues:
      'Cooling problems, Ice maker failures, Temperature inconsistencies, Noisy operation, Water dispenser issues, Lighting problems, Door seal issues',
    image: '/images/services/fridge-repair.png',
  },
  {
    id: 'washer-repair',
    name: 'AEG Washer Repair',
    description:
      'Professional repair of AEG washing machines, addressing both mechanical and electronic malfunctions.',
    commonIssues:
      'Not spinning, Leaking, Unusual noises, Error codes, Failure to start, Water not draining, Poor wash quality',
    image: '/images/services/washing-machine-repair.png',
  },
  {
    id: 'dryer-repair',
    name: 'AEG Dryer Repair',
    description:
      'Reliable repair services for AEG dryers, including sensor dryers and heat pump models.',
    commonIssues:
      'Not heating, Overheating, Noisy operation, Not starting, Tumble failures, Sensor issues, Long drying times',
    image: '/images/services/dryer-repair.png',
  },
  {
    id: 'dishwasher-repair',
    name: 'AEG Dishwasher Repair',
    description:
      'Expert repair services for all AEG dishwasher models, ensuring efficient cleaning and drying.',
    commonIssues:
      'Not cleaning dishes, Draining issues, Unusual noises, Leaking, Failure to start, Water not heating, Error codes',
    image: '/images/services/dishwasher-repair.png',
  },
  {
    id: 'oven-repair',
    name: 'AEG Oven Repair',
    description:
      'Specialized repair for all AEG ovens, including steam ovens and combi-ovens.',
    commonIssues:
      'Uneven cooking, Temperature inaccuracies, Self-cleaning failures, Door problems, Control panel malfunctions, Heating element issues, Failure to heat',
    image: '/images/services/walloven-repair.png',
  },
  {
    id: 'stove-repair',
    name: 'AEG Stove Repair',
    description:
      'Professional repair for all AEG cooktops, ranges, and induction hobs.',
    commonIssues:
      'Burner not igniting, Uneven heating, Induction hob failures, Control panel issues, Timer problems, Error codes, Broken knobs',
    image: '/images/services/cooktop-repair.png',
  },
];

const advantages = [
  {
    title: 'AEG Certified Technicians',
    description:
      'Our technicians are factory-certified to perform repairs on all AEG appliance models.',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
  },
  {
    title: 'Genuine AEG Parts',
    description:
      'We exclusively use original AEG parts to ensure the best performance and compatibility.',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
        />
      </svg>
    ),
  },
  {
    title: 'Comprehensive Warranty',
    description:
      'Our repairs are backed by a warranty that covers both parts and labor.',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
  },
  {
    title: 'Advanced Technology Expertise',
    description:
      'We are proficient in the advanced technologies that AEG incorporates into its appliances.',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  },
];

const testimonials = [
  {
    text: 'The technician who repaired our AEG refrigerator was knowledgeable and efficient. They fixed the cooling issue quickly, and now our fridge works perfectly.',
    author: 'Laura M.',
    location: 'Toronto',
    rating: 5,
  },
  {
    text: 'Our AEG washing machine had a major leak. The repair team was very responsive and fixed it with no issues. Highly recommend!',
    author: 'Peter K.',
    location: 'Vaughan',
    rating: 5,
  },
  {
    text: 'I was impressed by the professionalism of the AEG dryer repair service. They were able to fix the sensor issue that no one else could.',
    author: 'Emily S.',
    location: 'Markham',
    rating: 5,
  },
];

const faqs = [
  {
    question: 'How quickly can you repair my AEG appliance?',
    answer:
      'We offer prompt service for AEG appliance repairs. Most repairs are completed within the first visit, often within a few hours.',
  },
  {
    question: 'Do you offer warranty on your AEG repairs?',
    answer:
      'Yes, we provide a comprehensive warranty on all parts and labor for AEG appliance repairs.',
  },
  {
    question: 'Can you repair integrated or built-in AEG appliances?',
    answer:
      'Yes, our technicians have extensive experience with all types of AEG appliances, including built-in models.',
  },
  {
    question: 'Are your technicians certified to repair AEG appliances?',
    answer:
      'All our technicians are certified and continuously trained on the latest AEG models and technologies.',
  },
  {
    question: 'What types of AEG appliance issues do you handle?',
    answer:
      'We handle a wide range of issues for all AEG appliances, from simple fixes to complex repairs.',
  },
];

const relatedBrands = ['Bosch', 'Miele', 'Thermador', 'Gaggenau', 'Liebherr', 'Sub-Zero'];

const AEGBrandPage = () => {
  return (
    <BrandLayout
      brand={brandData.name}
      brandLogo={brandData.logo}
      brandDescription={brandData.description}
      brandHistory={brandData.history}
      expertise={brandData.expertise}
      primaryColor="#003057"
      secondaryColor="#f2f2f2"
    >
      <ApplianceRepairStructuredData
        brandName={brandData.name}
        services={services.map((service) => service.name)}
      />
      <BrandServicesSection services={services} />
      <ServicesTabSection services={services} advantages={advantages} />
      <CommonCouponSection primaryColor="#003057" secondaryColor="#f2f2f2" />
      <ModernCTASection primaryColor="#003057" secondaryColor="#f2f2f2" />
      <TestimonialsSliderSection testimonials={testimonials} />
      <BrandFAQSection faqs={faqs} />
      <BrandsSliderSection brands={relatedBrands} />
    </BrandLayout>
  );
};

export default AEGBrandPage;