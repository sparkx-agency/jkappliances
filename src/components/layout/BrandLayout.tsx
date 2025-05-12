"use client";

import { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import BrandFAQSection from '@/components/sections/brands/BrandFAQSection';
import BrandServicesSection, { BrandServiceItem } from '@/components/sections/brands/BrandServicesSection';
import TestimonialsSliderSection from '../sections/common/TestimonialsSliderSection';
import ModernCTASection from '../sections/common/ModernCTASection';
import { BrandItem } from '../sections/brands/BrandsSliderSection';

export interface Advantage {
  title: string;
  description: string;
  icon: ReactNode;
}

export interface Testimonial {
  id: number;
  text: string;
  author: string;
  location: string;
  rating: number;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface BrandInfo {
  id: string;
  name: string;
  logo: string;
  description: string;
  history: string;
  expertise: string;
}

export interface BrandLayoutProps {
  brandInfo: BrandInfo;
  services: BrandServiceItem[];
  advantages: Advantage[];
  relatedBrands: string[];
  testimonials: Testimonial[];
  faqs: FAQItem[];
  primaryColor?: string;
  secondaryColor?: string;
}

const BrandLayout: React.FC<BrandLayoutProps> = ({ 
  brandInfo, 
  services, 
  advantages, 
  relatedBrands, 
  testimonials, 
  faqs,
  primaryColor = "#000", 
  secondaryColor = "#f5f5f7" 
}) => {
  // Convert relatedBrands string array to BrandItem array
  const relatedBrandItems: BrandItem[] = relatedBrands.map(brandName => ({
    id: brandName.toLowerCase().replace(/\s+/g, '-'),
    name: brandName,
    logo: `/images/brands/${brandName.toLowerCase().replace(/\s+/g, '-')}.webp`,
    link: `/brands/${brandName.toLowerCase().replace(/\s+/g, '-')}`
  }));

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section - Apple-style minimalist hero with large typography */}
      <section className="pt-32 pb-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-center mb-20"
            >
              <h1 className="text-6xl sm:text-7xl font-semibold text-gray-900 tracking-tight mb-8">
                {brandInfo.name} Appliance Repair
              </h1>
              <p className="text-xl sm:text-2xl text-gray-500 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
                Expert repair services for all {brandInfo.name} home appliances by certified technicians.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link 
                  href="/book" 
                  className="px-8 py-4 rounded-full bg-black text-white font-medium transition-all hover:bg-gray-800 shadow-sm text-lg"
                >
                  Book a Repair
                </Link>
                <Link 
                  href="tel:647-560-8966" 
                  className="px-8 py-4 rounded-full bg-gray-100 text-gray-900 font-medium transition-all hover:bg-gray-200 text-lg"
                >
                  Call 647-560-8966
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="flex justify-center"
            >
              <div className="relative h-[600px] w-full max-w-5xl rounded-3xl overflow-hidden shadow-xl">
                <Image
                  src={`/images/brands/brands-hero.webp`}
                  alt={`${brandInfo.name} Appliances`}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="transition-transform hover:scale-105 duration-700"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Brand Overview - Clean, spacious layout with subtle background */}
      <section className="py-32 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-center mb-16"
            >
              <Image
                src={brandInfo.logo}
                alt={`${brandInfo.name} logo`}
                width={120}
                height={60}
                className="mx-auto mb-12"
              />
              <h2 className="text-5xl font-semibold text-gray-900 mb-12">
                About {brandInfo.name} Appliances
              </h2>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <p className="text-xl text-gray-600 mb-12 leading-relaxed font-light">
                {brandInfo.description}
              </p>
              <p className="text-xl text-gray-600 mb-16 leading-relaxed font-light">
                {brandInfo.history}
              </p>
              
              <div className="bg-white rounded-3xl p-10 mb-8 shadow-sm">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Our {brandInfo.name} Expertise</h3>
                <p className="text-gray-600 text-lg font-light">{brandInfo.expertise}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section - Using the new component */}
      <BrandServicesSection brandName={brandInfo.name} services={services} />

      {/* Feature Details - Side-by-side content and image layout */}
      <section className="py-32 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="space-y-8"
            >
              <h2 className="text-4xl font-semibold text-gray-900">
                Professional {brandInfo.name} Appliance Technicians
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed font-light">
                Our highly skilled technicians are factory-trained and certified to repair all {brandInfo.name} appliance models, from refrigerators and washers to ovens and dishwashers.
              </p>
              <div className="space-y-8">
                {advantages.slice(0, 2).map((advantage, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 h-12 w-12 bg-black text-white rounded-full flex items-center justify-center">
                      {advantage.icon}
                    </div>
                    <div className="ml-6">
                      <h3 className="text-xl font-medium text-gray-900">{advantage.title}</h3>
                      <p className="mt-2 text-gray-600 font-light">{advantage.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="relative h-[600px] w-full rounded-3xl overflow-hidden shadow-xl">
                <Image
                  src="/images/technician-repairing.webp"
                  alt="Technician repairing appliance"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Advantages - Modern, clean card-based layout */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl font-semibold text-gray-900 mb-8">
              Why Choose Our {brandInfo.name} Repairs
            </h2>
            <p className="text-xl text-gray-500 max-w-3xl mx-auto font-light">
              We provide specialized repair services with a focus on quality and reliability.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {advantages.map((advantage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                className="bg-gray-50 rounded-3xl p-8 shadow-sm hover:shadow-md transition-all"
              >
                <div className="h-14 w-14 bg-black text-white rounded-full flex items-center justify-center mb-6">
                  {advantage.icon}
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-4">{advantage.title}</h3>
                <p className="text-gray-600 font-light">{advantage.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/*Testimonials Section*/}
      <TestimonialsSliderSection 
        title="What Our Customers Say"
        subtitle="Hear from our valued customers about their experience with our services."
      />

      {/* FAQ Section */}
      <BrandFAQSection 
        brandName={brandInfo.name}
        faqs={faqs}
      />

      
      {/* Modern CTA Section */}
      <ModernCTASection 
        style="google"
        title={`Ready to Fix Your ${brandInfo.name} Appliance?`}
        subtitle={`Book your repair service today with our certified ${brandInfo.name} specialists. We'll get your appliance running like new!`}
        primaryButtonText="Book a Repair"
        secondaryButtonText="Call Now"
        imageUrl={`/images/cta/cta-appliances.jpg`}
      />
    </div>
  );
};

export default BrandLayout; 