import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import BrandDetailHeader from '@/components/sections/BrandDetailHeader';
import BrandServicesList from '@/components/sections/BrandServicesList';
import BlogSection from '@/components/sections/BlogSection';
import BrandFAQSection from '@/components/BrandFAQSection';
import ServiceCTA from '@/components/sections/ServiceCTA';

export async function generateMetadata({ params }: { params: { brandId: string } }): Promise<Metadata> {
  // Here you would typically fetch brand data based on brandId
  // For now, using a static example
  const brandName = params.brandId.charAt(0).toUpperCase() + params.brandId.slice(1);
  
  return {
    title: `${brandName} Appliance Repair Services | JK Appliance Repair`,
    description: `Expert ${brandName} appliance repair for all models. Same-day service available with certified technicians and genuine ${brandName} parts.`,
  };
}

export default function BrandDetailPage({ params }: { params: { brandId: string } }) {
  const brandId = params.brandId;
  const brandName = brandId.charAt(0).toUpperCase() + brandId.slice(1);
  
  // In a real app, you would fetch this data from an API or database
  const brandData = {
    id: brandId,
    name: brandName,
    description: `JK Appliance Repair specializes in ${brandName} appliance repairs across the Greater Toronto Area. Our certified technicians have extensive experience with all ${brandName} products and use genuine manufacturer parts to ensure your appliances work like new again.`,
    logo: `/images/brands/${brandId}.png`,
    services: [
      {
        id: 'refrigerator-repair',
        name: `${brandName} Refrigerator Repair`,
        description: `Expert repair services for all ${brandName} refrigerator models, including French door, side-by-side, bottom freezer, and smart refrigerators.`,
        image: '/images/services/refrigerator.webp',
      },
      {
        id: 'washer-repair',
        name: `${brandName} Washer Repair`,
        description: `Professional repairs for ${brandName} washing machines, including front-load, top-load, and smart washers with diagnostic technology.`,
        image: '/images/services/washer.webp',
      },
      {
        id: 'dryer-repair',
        name: `${brandName} Dryer Repair`,
        description: `Fast, reliable repair services for all ${brandName} dryer models, including electric, gas, and heat pump dryers.`,
        image: '/images/services/dryer.webp',
      },
      {
        id: 'dishwasher-repair',
        name: `${brandName} Dishwasher Repair`,
        description: `Expert dishwasher repair for all ${brandName} models, including built-in, portable, and smart dishwashers with modern features.`,
        image: '/images/services/dishwasher.webp',
      },
    ],
    commonIssues: [
      `${brandName} refrigerator not cooling or freezing issues`,
      `${brandName} washing machine not draining or spinning`,
      `${brandName} dryer not heating or turning on`,
      `${brandName} dishwasher not cleaning properly or leaking`,
      `${brandName} oven temperature inaccuracies or not heating`,
      `${brandName} microwave turntable issues or not heating`,
      `${brandName} smart appliance connectivity problems`,
      `${brandName} ice maker not working or producing ice`,
    ],
    faqs: [
      {
        question: `How quickly can you repair my ${brandName} appliance?`,
        answer: `In most cases, we can schedule same-day or next-day service for ${brandName} appliance repairs. Many common issues can be fixed in a single visit as our vans are stocked with genuine ${brandName} parts.`
      },
      {
        question: `Do you use genuine ${brandName} replacement parts?`,
        answer: `Yes, we use genuine ${brandName} replacement parts for all repairs to ensure optimal performance and reliability. This also preserves your manufacturer's warranty when applicable.`
      },
      {
        question: `Are your technicians certified to repair ${brandName} appliances?`,
        answer: `Absolutely. Our technicians are factory-trained and certified to repair all ${brandName} appliance models. They regularly receive updated training on the latest ${brandName} technologies and smart appliances.`
      },
      {
        question: `How much does it cost to repair a ${brandName} appliance?`,
        answer: `Repair costs vary depending on the specific issue and model. We charge a standard diagnostic fee which is waived if you proceed with the repair. After diagnosis, we provide a transparent, no-obligation quote before any work begins.`
      },
      {
        question: `Do you offer a warranty on ${brandName} appliance repairs?`,
        answer: `Yes, we provide a 90-day warranty on all parts and labor for ${brandName} appliance repairs. If you experience the same issue within this period, we'll return and fix it at no additional cost.`
      }
    ]
  };

  return (
    <div className="pt-24">
      <BrandDetailHeader
        brandName={brandData.name}
        description={brandData.description}
        logo={brandData.logo}
      />
      
      <BrandServicesList
        brandName={brandData.name}
        services={brandData.services}
        commonIssues={brandData.commonIssues}
      />
      
      {/* Blog Section - Brand specific articles */}
      <BlogSection
        title={`${brandData.name} Appliance Tips & Guides`}
        subtitle={`Expert advice on maintaining and troubleshooting your ${brandData.name} appliances`}
        brandId={brandData.id}
        showCategories={true}
        limit={3}
      />
      
      <BrandFAQSection
        brandName={brandData.name}
        faqs={brandData.faqs}
      />
      
      <ServiceCTA
        title={`Expert ${brandData.name} Appliance Repair`}
        subtitle={`Book your ${brandData.name} appliance repair today with our certified technicians`}
      />
    </div>
  );
} 