"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import NeighborhoodSection, { AreaData } from '@/components/sections/NeighborhoodSection';
import ServicesSectionArea from '@/components/sections/ServicesSectionArea';
import BookingSection from '@/components/sections/BookingSection';
import AreaServicesSection from '@/components/sections/AreaServicesSection';
import type { AreaServiceItem } from '@/components/sections/AreaServicesSection';
import BrandsSliderSection from '@/components/sections/BrandsSliderSection';
import type { BrandItem } from '@/components/sections/BrandsSliderSection';
import BlogSection from '@/components/sections/BlogSection';
import CouponSection from '@/components/sections/CouponSection';
import TestimonialsSection, { TestimonialItem } from '@/components/sections/TestimonialsSection';

// Georgetown area data
const georgetownData = {
  id: 'georgetown',
  name: 'Georgetown',
  fullName: 'Georgetown, Halton Hills',
  description: 'From historic downtown to newer suburban neighborhoods, our appliance repair technicians provide prompt service throughout Georgetown with same-day appointments available.',
  heroImage: '/images/georgetown-skyline.webp',
  neighborhoodImage: '/images/georgetown-map.webp',
  mapImage: '/images/georgetown.webp',
  
  // Location information
  address: {
    street: '18 Yonge St',
    city: 'Toronto',
    province: 'ON',
    postalCode: 'M5E 1Z8',
  },
  
  // Service radius and coverage details
  serviceRadius: '25',
  responseTime: 'Same-day service available in most Georgetown neighborhoods',
  
  // Neighborhoods served
  neighborhoods: [
    'Downtown Georgetown',
    'Georgetown South',
    'Delrex',
    'Moore Park',
    'Trafalgar Country',
    'Arbour Glen',
    'Stewart\'s Mills',
    'Four Corners',
    'Glen Williams',
    'Norval',
    'Limehouse',
    'Stewarttown'
  ],
  
  // Most common services in this area
  popularServices: [
    {
      id: 'refrigerator-repair',
      name: 'Refrigerator Repair',
      image: '/images/services/refrigerator-repair.webp',
      description: 'Expert refrigerator repair for all major brands in Georgetown.'
    },
    {
      id: 'washer-repair',
      name: 'Washer Repair',
      image: '/images/services/washer-repair.webp',
      description: 'Professional washing machine repairs for Georgetown homes.'
    },
    {
      id: 'dryer-repair',
      name: 'Dryer Repair',
      image: '/images/services/dryer-repair.webp',
      description: 'Fast, reliable dryer repair services throughout Georgetown.'
    },
    {
      id: 'dishwasher-repair',
      name: 'Dishwasher Repair',
      image: '/images/services/dishwasher-repair.webp',
      description: 'Expert dishwasher technicians serving the Georgetown area.'
    }
  ],
  
  // Recent projects in this area
  recentProjects: [
    {
      title: 'Home Appliance Overhaul',
      location: 'Downtown Georgetown',
      description: 'Complete appliance maintenance for a historic home in Georgetown\'s downtown core.',
      image: '/images/projects/georgetown-home.webp'
    },
    {
      title: 'Restaurant Equipment Repair',
      location: 'Main Street, Georgetown',
      description: 'Commercial kitchen equipment repair for a popular restaurant in downtown Georgetown.',
      image: '/images/projects/georgetown-restaurant.webp'
    },
    {
      title: 'Multi-Unit Home Service',
      location: 'Georgetown South',
      description: 'Regular maintenance program for appliances in a multi-unit residential property in Georgetown South.',
      image: '/images/projects/georgetown-multiunit.webp'
    }
  ],
  
  // Local information - tailored for Georgetown
  localInfo: {
    applianceUsage: "Georgetown residents live in a mix of historic homes in the downtown core, established residential neighborhoods like Delrex and Moore Park, and newer developments in Georgetown South. This diverse housing requires our technicians to be familiar with both older model appliances and the latest high-efficiency units.",
    commonIssues: "In Georgetown's historic downtown, we frequently address issues with appliances in older homes that may have unique space constraints or electrical requirements. In newer developments like Georgetown South, we often service smart appliances and high-efficiency units that require specialized expertise.",
    serviceNotes: "Our Georgetown technicians are familiar with the area's distinct neighborhoods, from the historic downtown core to the newer developments in Georgetown South. We maintain inventory specifically for models common in Georgetown homes to ensure faster service and repairs."
  }
};

// Sample services data for Georgetown
const georgetownServices: AreaServiceItem[] = [
  {
    id: 'refrigerator-repair',
    name: 'Refrigerator Repair',
    image: '/images/services/refrigerator-repair.webp',
    description: 'Our Georgetown refrigerator repair technicians can fix all brands and models of refrigerators. From cooling issues to ice maker problems, our experts can diagnose and repair your refrigerator quickly and efficiently. We service all Georgetown neighborhoods with same-day appointments available.',
    commonServices: [
      'Temperature regulation issues',
      'Ice maker repairs',
      'Water dispenser problems',
      'Strange noises or leaking',
      'Compressor and condenser repairs',
      'Door seal replacement'
    ]
  },
  {
    id: 'washer-repair',
    name: 'Washer Repair',
    image: '/images/services/washer-repair.webp',
    description: 'Our washer repair services in Georgetown cover all major brands and models. Whether your washing machine is leaking, not spinning, or making unusual noises, our skilled technicians can identify the problem and provide efficient, long-lasting repairs right in your Georgetown home.',
    commonServices: [
      'Drum and agitator problems',
      'Drainage and pump issues',
      'Water inlet and leaking repairs',
      'Control board and timer repairs',
      'Door latch and lock issues',
      'Bearing and motor replacements'
    ]
  },
  {
    id: 'dryer-repair',
    name: 'Dryer Repair',
    image: '/images/services/dryer-repair.webp',
    description: 'When your dryer stops working properly in Georgetown, our expert technicians are just a call away. We repair all types of dryers including gas and electric models. From heating issues to strange noises, our Georgetown team can solve your dryer problems quickly and effectively.',
    commonServices: [
      'Heating element replacements',
      'Drum and belt repairs',
      'Thermostat and sensor calibration',
      'Vent cleaning and maintenance',
      'Motor and bearing replacements',
      'Control panel and timer repairs'
    ]
  },
  {
    id: 'dishwasher-repair',
    name: 'Dishwasher Repair',
    image: '/images/services/dishwasher-repair.webp',
    description: 'Our Georgetown dishwasher repair services cover all brands and models. We fix common issues like poor cleaning performance, leaking, and drainage problems. Our experienced technicians provide fast, reliable dishwasher repairs throughout Georgetown, often on the same day you call.',
    commonServices: [
      'Spray arm repairs and replacements',
      'Pump and motor servicing',
      'Water inlet valve repairs',
      'Drainage system unclogging',
      'Control board and panel repairs',
      'Door seal replacements'
    ]
  },
  {
    id: 'oven-repair',
    name: 'Oven & Stove Repair',
    image: '/images/services/oven-repair.webp',
    description: 'For oven and stove repairs in Georgetown, our technicians are experienced with all types including gas, electric, and induction. Whether your oven isn\'t heating properly or your stove burners won\'t light, we provide expert diagnoses and repairs throughout the Georgetown area.',
    commonServices: [
      'Heating element replacements',
      'Temperature sensor calibration',
      'Burner and igniter repairs',
      'Control board troubleshooting',
      'Door hinge and seal replacements',
      'Gas line and connection safety checks'
    ]
  }
];

// Brand data for Georgetown
const georgetownBrands: BrandItem[] = [
  {
    id: 'samsung',
    name: 'Samsung',
    logo: '/images/brands/samsung.webp',
    link: '/brands/samsung'
  },
  {
    id: 'lg',
    name: 'LG',
    logo: '/images/brands/lg.webp',
    link: '/brands/lg'
  },
  {
    id: 'whirlpool',
    name: 'Whirlpool',
    logo: '/images/brands/whirlpool.webp',
    link: '/brands/whirlpool'
  },
  {
    id: 'ge',
    name: 'GE',
    logo: '/images/brands/ge.webp',
    link: '/brands/ge'
  },
  {
    id: 'maytag',
    name: 'Maytag',
    logo: '/images/brands/maytag.webp',
    link: '/brands/maytag'
  },
  {
    id: 'kitchenaid',
    name: 'KitchenAid',
    logo: '/images/brands/kitchen-aid.webp',
    link: '/brands/kitchenaid'
  },
  {
    id: 'electrolux',
    name: 'Electrolux',
    logo: '/images/brands/electrolux.webp',
    link: '/brands/electrolux'
  },
  {
    id: 'bosch',
    name: 'Bosch',
    logo: '/images/brands/bosch.webp',
    link: '/brands/bosch'
  },
  {
    id: 'miele',
    name: 'Miele',
    logo: '/images/brands/miele.webp',
    link: '/brands/miele'
  },
  {
    id: 'frigidaire',
    name: 'Frigidaire',
    logo: '/images/brands/frigidaire.webp',
    link: '/brands/frigidaire'
  }
];

// Testimonials specific to Georgetown
const georgetownTestimonials: TestimonialItem[] = [
  {
    name: "Daniel W.",
    location: "Downtown Georgetown",
    rating: 5,
    text: "The team at JK Appliance was fantastic when our refrigerator stopped cooling right before a holiday weekend. They arrived quickly, identified the problem, and had it fixed the same day. Friendly, knowledgeable service that saved our holiday plans!",
    date: "June 2023"
  },
  {
    name: "Laura M.",
    location: "Georgetown South",
    rating: 5,
    text: "I've used JK Appliance Repair twice now - once for my washing machine and recently for my dishwasher. Both times they were prompt, professional, and fixed the issues quickly. Their technicians explain everything clearly and the pricing is fair. Definitely recommend!",
    date: "May 2023"
  },
  {
    name: "Richard K.",
    location: "Delrex, Georgetown",
    rating: 5,
    text: "As a longtime Georgetown resident, I've tried several appliance repair services over the years. JK Appliance stands out for their reliability and expertise. They repaired our 10-year-old dryer that other companies said needed replacement. It's been working perfectly ever since!",
    date: "April 2023"
  },
  {
    name: "Michelle T.",
    location: "Moore Park, Georgetown",
    rating: 5,
    text: "When our oven stopped working right before a dinner party, JK Appliance came to the rescue with same-day service. The technician was professional, efficient, and even helped me understand how to prevent similar issues in the future. Outstanding customer service!",
    date: "March 2023"
  }
];

// Custom Georgetown page
export default function GeorgetownAreaPage() {
  // Convert string neighborhoods to AreaData format for NeighborhoodSection
  const neighborhoodAreas: AreaData[] = georgetownData.neighborhoods.map((name, index) => ({
    id: `${georgetownData.id}-neighborhood-${index}`,
    name
  }));
  
  return (
    <div className="bg-[#f5f5f7]">
      {/* Hero Section */}
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
                Appliance Repair in {georgetownData.name}
              </h1>
              <p className="text-xl sm:text-2xl text-gray-500 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
                Fast, reliable appliance repair services throughout {georgetownData.name} with same-day service available. Serving all neighborhoods in the {georgetownData.fullName} area.
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
                  src={georgetownData.heroImage}
                  alt={`${georgetownData.name} Appliances`}
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
      
      {/* Services Section */}
      <ServicesSectionArea areaName={georgetownData.name} />
      
      {/* Georgetown Regions Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-semibold text-gray-900 mb-4">
                Serving All Georgetown Communities
              </h2>
              <p className="text-xl text-gray-500 max-w-3xl mx-auto">
                From historic downtown to newer developments, we provide expert appliance repair throughout Georgetown
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Historic Downtown */}
              <div className="bg-[#f5f5f7] rounded-3xl overflow-hidden shadow-sm transition-all hover:shadow-md">
                <div className="relative h-64">
                  <Image 
                    src="/images/georgetown-downtown.webp"
                    alt="Historic Downtown Georgetown"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-medium text-gray-900 mb-2">Historic Downtown</h3>
                  <p className="text-gray-600">
                    We provide specialized service to Georgetown's charming downtown core and surrounding historic neighborhoods, with expertise in servicing appliances in heritage homes that often have unique requirements and space constraints.
                  </p>
                </div>
              </div>
      
              {/* Established Neighborhoods */}
              <div className="bg-[#f5f5f7] rounded-3xl overflow-hidden shadow-sm transition-all hover:shadow-md">
                <div className="relative h-64">
                  <Image 
                    src="/images/georgetown-established.webp"
                    alt="Established Georgetown Neighborhoods"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-medium text-gray-900 mb-2">Established Neighborhoods</h3>
                  <p className="text-gray-600">
                    Our technicians service the established neighborhoods of Delrex and Moore Park, providing expert repairs for a wide range of appliances in these well-established residential areas developed in the 1950s and 1960s.
                  </p>
                </div>
              </div>
              
              {/* Georgetown South */}
              <div className="bg-[#f5f5f7] rounded-3xl overflow-hidden shadow-sm transition-all hover:shadow-md">
                <div className="relative h-64">
                  <Image 
                    src="/images/georgetown-south.webp"
                    alt="Georgetown South"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-medium text-gray-900 mb-2">Georgetown South</h3>
                  <p className="text-gray-600">
                    We provide prompt, reliable service to Georgetown South and newer developments like Stewart's Mills and Trafalgar Country, with technicians who understand the specific needs of modern homes and high-efficiency appliances.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our AreaServicesSection */}
      <AreaServicesSection 
        areaName="Georgetown"
        services={georgetownServices}
      />
      
      {/* Brand Slider Section */}
      <BrandsSliderSection
        title="Top Appliance Brands We Fix"
        subtitle="Our certified Georgetown technicians are experienced in repairing all major appliance brands"
        brands={georgetownBrands}
        locationName="Georgetown"
      />
      
      {/* Service Area Overview */}
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
                    src={georgetownData.mapImage}
                    alt={`${georgetownData.name} Service Area Map`}
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
                <h3 className="text-3xl font-semibold text-[#1d1d1f] mb-6">Our {georgetownData.name} Coverage</h3>
                <p className="text-[#424245] mb-6 leading-relaxed">
                  {georgetownData.localInfo.applianceUsage}
                </p>
                <p className="text-[#424245] mb-8 leading-relaxed">
                  {georgetownData.localInfo.commonIssues}
                </p>
                
                <div className="bg-[#f5f5f7] rounded-2xl p-6 mb-8">
                  <h4 className="text-xl font-medium text-[#1d1d1f] mb-3">About Our {georgetownData.name} Service</h4>
                  <p className="text-[#424245]">
                    {georgetownData.localInfo.serviceNotes}
                  </p>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="bg-[#0071e3] rounded-full p-3">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="text-[#1d1d1f] font-medium">
                    {georgetownData.responseTime}
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <TestimonialsSection
        title="What Our Georgetown Customers Say"
        subtitle="Read testimonials from satisfied customers across Georgetown neighborhoods"
        testimonials={georgetownTestimonials}
      />

      {/* Neighborhoods Section */}
      <NeighborhoodSection 
        title={`${georgetownData.name} Neighborhoods We Serve`}
        description={`From historic downtown to suburban neighborhoods, our technicians provide prompt, reliable service throughout ${georgetownData.name}.`}
        areas={neighborhoodAreas}
        mapImage={georgetownData.neighborhoodImage}
        companyName="JK"
        companyAddress={georgetownData.address.street}
      />
      
      {/* Coupon Section */}
      <CouponSection 
        title="Special Offers for Georgetown Residents"
        subtitle="Use these exclusive coupons for same-day appliance repair service in Georgetown"
        mainCoupons={[
          {
            amount: "25",
            type: "Repair",
            forCustomer: "New Customer Discount",
            code: "GE25",
            website: "jkappliancerepair.ca",
            phone: "647-560-8966",
            primaryColor: "#0071e3"
          },
          {
            amount: "15",
            type: "Repair",
            forCustomer: "For Returning Customers",
            code: "GERETURN15",
            website: "jkappliancerepair.ca",
            phone: "647-560-8966",
            primaryColor: "#0071e3"
          },
          {
            amount: "30",
            type: "Repair",
            forCustomer: "Senior Customer Discount",
            code: "GESENIOR30",
            website: "jkappliancerepair.ca",
            phone: "647-560-8966",
            primaryColor: "#0071e3"
          }
        ]}
        extraCoupons={[
          {
            amount: "35",
            type: "Refrigerator Repair",
            forCustomer: "Downtown Residents",
            code: "GEDOWNTOWN35",
            website: "jkappliancerepair.ca",
            phone: "647-560-8966",
            primaryColor: "#0071e3"
          },
          {
            amount: "25",
            type: "Washer Repair",
            forCustomer: "Georgetown South Residents",
            code: "GESOUTH25",
            website: "jkappliancerepair.ca",
            phone: "647-560-8966",
            primaryColor: "#0071e3"
          }
        ]}
      />
      
      {/* Blog Section */}
      <BlogSection 
        title="Appliance Tips for Georgetown Residents"
        subtitle="Helpful guides and maintenance tips specifically for Georgetown homeowners and residents"
        areaId="georgetown"
        showCategories={true}
        limit={3}
        viewAllLink={true}
      />
      
      {/* Booking Section */}
      <BookingSection />
    </div>
  );
} 