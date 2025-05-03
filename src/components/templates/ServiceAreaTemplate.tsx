"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import dynamic from 'next/dynamic';
import NeighborhoodSection, { AreaData } from '@/components/sections/NeighborhoodSection';
import ServicesSectionArea from '@/components/sections/ServicesSectionArea';
import BlogSection from '../sections/BlogSection';

// Dynamic imports for below-the-fold sections
const BookingSection = dynamic(() => import('@/components/sections/BookingSection'), {
  loading: () => <div className="h-64 bg-gray-50"></div>,
  ssr: true,
});

// Define the interface for neighborhood data
export interface Neighborhood {
  name: string;
}

// Define the interface for service data
export interface ServiceData {
  id: string;
  name: string;
  image: string;
  description: string;
}

// Define the interface for project data
export interface ProjectData {
  title: string;
  location: string;
  description: string;
  image: string;
}

// Define the interface for testimonial data
export interface TestimonialData {
  text: string;
  author: string;
  location: string;
  rating: number;
}

// Define the interface for local information
export interface LocalInfo {
  applianceUsage: string;
  commonIssues: string;
  serviceNotes: string;
}

// Define the interface for address data
export interface Address {
  street: string;
  city: string;
  province: string;
  postalCode: string;
}

// Define the main interface for service area data
export interface ServiceAreaData {
  id: string;
  name: string;
  fullName: string;
  description: string;
  heroImage: string;
  neighborhoodImage: string;
  mapImage: string;
  address: Address;
  serviceRadius: string;
  responseTime: string;
  neighborhoods: string[];
  popularServices: ServiceData[];
  recentProjects: ProjectData[];
  testimonials: TestimonialData[];
  localInfo: LocalInfo;
}

interface ServiceAreaTemplateProps {
  areaData: ServiceAreaData;
}

const ServiceAreaTemplate: React.FC<ServiceAreaTemplateProps> = ({ areaData }) => {
  // For parallax scrolling effect
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 200]);
  
  // Convert string neighborhoods to AreaData format for NeighborhoodSection
  const neighborhoodAreas: AreaData[] = areaData.neighborhoods.map((name, index) => ({
    id: `${areaData.id}-neighborhood-${index}`,
    name
  }));
  
  return (
    <div className="bg-[#f5f5f7] pt-20">
      {/* Hero Section - Apple-style with large typography */}
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
                Appliance Repair in {areaData.name}
              </h1>
              <p className="text-xl sm:text-2xl text-gray-500 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
                Fast, reliable appliance repair services throughout {areaData.name} with same-day service available. Serving all neighborhoods in the {areaData.fullName} area.
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
                  src={`/images/brands/${areaData.id}-hero.jpg`}
                  alt={`${areaData.name} Appliances`}
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
      
      {/* Service Area Overview - Apple-style spacious layout */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
                       
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-lg">
                  <Image
                    src={areaData.mapImage}
                    alt={`${areaData.name} Service Area Map`}
                    width={600}
                    height={450}
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <h3 className="text-3xl font-semibold text-[#1d1d1f] mb-6">Our {areaData.name} Coverage</h3>
                <p className="text-[#424245] mb-6 leading-relaxed">
                  {areaData.localInfo.applianceUsage}
                </p>
                <p className="text-[#424245] mb-8 leading-relaxed">
                  {areaData.localInfo.commonIssues}
                </p>
                
                <div className="bg-[#f5f5f7] rounded-2xl p-6 mb-8">
                  <h4 className="text-xl font-medium text-[#1d1d1f] mb-3">About Our {areaData.name} Service</h4>
                  <p className="text-[#424245]">
                    {areaData.localInfo.serviceNotes}
                  </p>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="bg-[#0071e3] rounded-full p-3">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="text-[#1d1d1f] font-medium">
                    {areaData.responseTime}
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
{/* Services Section - using reusable component */}
      <ServicesSectionArea areaName={areaData.name} />

      {/* Neighborhoods Section - using reusable component */}
      <NeighborhoodSection 
        title={`${areaData.name} Neighborhoods We Serve`}
        description={`From downtown to the suburbs, our technicians provide prompt, reliable service throughout ${areaData.name}.`}
        areas={neighborhoodAreas}
        mapImage={areaData.neighborhoodImage}
        companyName="JK"
        companyAddress={areaData.address.street}
      />
      
      {/* Recent Projects Section */}
      {areaData.recentProjects && areaData.recentProjects.length > 0 && (
        <section className="py-32 bg-[#f5f5f7]">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="text-center mb-20"
              >
                <h2 className="text-5xl font-semibold text-[#1d1d1f] mb-8 tracking-tight">
                  Recent Projects in {areaData.name}
                </h2>
                <p className="text-xl text-[#6e6e73] max-w-3xl mx-auto leading-relaxed font-light">
                  A selection of our recent appliance repair and maintenance projects in {areaData.name}.
                </p>
              </motion.div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {areaData.recentProjects.map((project, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-all"
                  >
                    <div className="aspect-[4/3] relative">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-8">
                      <div className="flex items-center mb-3">
                        <svg className="w-5 h-5 text-[#0071e3] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span className="text-sm text-[#6e6e73] font-medium">{project.location}</span>
                      </div>
                      <h3 className="text-xl font-medium text-[#1d1d1f] mb-2">
                        {project.title}
                      </h3>
                      <p className="text-[#424245]">{project.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
      
      {/* Testimonials */}
      {areaData.testimonials && areaData.testimonials.length > 0 && (
        <section className="py-32 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="text-center mb-20"
              >
                <h2 className="text-5xl font-semibold text-[#1d1d1f] mb-8 tracking-tight">
                  What {areaData.name} Customers Say
                </h2>
                <p className="text-xl text-[#6e6e73] max-w-3xl mx-auto leading-relaxed font-light">
                  Read reviews from satisfied customers in the {areaData.name} area.
                </p>
              </motion.div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {areaData.testimonials.map((testimonial, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    className="bg-[#f5f5f7] rounded-3xl p-8 shadow-sm hover:shadow-md transition-all"
                  >
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className={`w-5 h-5 ${i < testimonial.rating ? 'text-[#0071e3]' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-[#424245] mb-6 italic">"{testimonial.text}"</p>
                    <div className="flex items-center">
                      <div className="bg-[#e5e5ea] w-10 h-10 rounded-full flex items-center justify-center text-[#1d1d1f] font-semibold mr-3">
                        {testimonial.author.split(' ')[0][0]}{testimonial.author.split(' ')[1]?.[0] || ''}
                      </div>
                      <div>
                        <p className="text-[#1d1d1f] font-medium">{testimonial.author}</p>
                        <p className="text-sm text-[#6e6e73]">{testimonial.location}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="text-center mt-16"
              >
                <Link 
                  href="/reviews" 
                  className="inline-flex items-center text-[#0071e3] font-medium hover:underline"
                >
                  Read more customer reviews
                  <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>
      )}
      
      {/* Contact & Booking CTA */}
      <section className="py-24 bg-[#f5f5f7]">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto bg-[#0071e3] rounded-3xl p-12 md:p-16 text-center text-white overflow-hidden relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative z-10"
            >
              <h2 className="text-4xl md:text-5xl font-semibold mb-6 tracking-tight">
                Need Appliance Repair in {areaData.name}?
              </h2>
              <p className="text-xl text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                Our expert technicians are ready to help with fast, reliable service throughout the {areaData.name} area.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link 
                  href="/book" 
                  className="px-8 py-4 rounded-full bg-white text-[#0071e3] font-medium transition-all hover:bg-gray-100 shadow-lg text-lg"
                >
                  Book a Repair
                </Link>
                <Link 
                  href="tel:647-560-8966" 
                  className="px-8 py-4 rounded-full bg-white/20 backdrop-blur-sm text-white font-medium transition-all hover:bg-white/30 text-lg"
                >
                  Call 647-560-8966
                </Link>
              </div>
            </motion.div>
            
            {/* Abstract shapes in background - Apple style */}
            <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-white/10 -translate-x-1/2 -translate-y-1/2 blur-2xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-white/10 translate-x-1/3 translate-y-1/3 blur-3xl"></div>
          </div>
        </div>
      </section>
      
      {/* Booking Section */}
      <BookingSection />

      {/*Blog Section*/}
      <BlogSection 
        areaId={areaData.id}
        showCategories={true}
        limit={3}
        viewAllLink={true}
      />
    </div>
  );
};

export default ServiceAreaTemplate; 