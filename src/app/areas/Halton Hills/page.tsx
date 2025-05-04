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

// Halton Hills area data
const haltonHillsData = {
  id: 'haltonhills',
  name: 'Halton Hills',
  fullName: 'Halton Hills, Ontario',
  description: 'From historic homes in Georgetown to rural properties in Acton, our appliance repair technicians provide prompt service throughout Halton Hills with same-day appointments available.',
  heroImage: '/images/haltonhills-skyline.webp',
  neighborhoodImage: '/images/haltonhills-map.webp',
  mapImage: '/images/haltonhills.webp',
  
  // Location information
  address: {
    street: '18 Yonge St',
    city: 'Toronto',
    province: 'ON',
    postalCode: 'M5E 1Z8',
  },
  
  // Service radius and coverage details
  serviceRadius: '25',
  responseTime: 'Same-day service available in all Halton Hills communities',
  
  // Neighborhoods served
  neighborhoods: [
    'Georgetown',
    'Acton',
    'Glen Williams',
    'Limehouse',
    'Norval',
    'Terra Cotta',
    'Ballinafad',
    'Stewarttown',
    'Ashgrove',
    'Maple Creek',
    'Georgetown South',
    'Hungry Hollow',
    'Trafalgar',
    'Cedarvale',
    'Moore Park',
    'Delrex',
    'Mountainview',
    'Downtown Georgetown',
    'Silver Creek',
    'Credit River',
    'Blue Springs',
    'Crewsons Corners'
  ],
  
  // Most common services in this area
  popularServices: [
    {
      id: 'refrigerator-repair',
      name: 'Refrigerator Repair',
      image: '/images/services/refrigerator-repair.webp',
      description: 'Expert refrigerator repair for all major brands in Halton Hills.'
    },
    {
      id: 'washer-repair',
      name: 'Washer Repair',
      image: '/images/services/washer-repair.webp',
      description: 'Professional washing machine repairs for homes throughout Halton Hills.'
    },
    {
      id: 'dryer-repair',
      name: 'Dryer Repair',
      image: '/images/services/dryer-repair.webp',
      description: 'Fast, reliable dryer repair services throughout Halton Hills.'
    },
    {
      id: 'dishwasher-repair',
      name: 'Dishwasher Repair',
      image: '/images/services/dishwasher-repair.webp',
      description: 'Expert dishwasher technicians serving the Halton Hills area.'
    }
  ],
  
  // Recent projects in this area
  recentProjects: [
    {
      title: 'Heritage Home Appliance Service',
      location: 'Downtown Georgetown, Halton Hills',
      description: 'Custom appliance installation and repair services for a beautifully preserved century home in historic Georgetown.',
      image: '/images/projects/haltonhills-heritage.webp'
    },
    {
      title: 'Restaurant Equipment Repair',
      location: 'Acton, Halton Hills',
      description: 'Commercial kitchen equipment repair for a popular family restaurant in Acton.',
      image: '/images/projects/haltonhills-restaurant.webp'
    },
    {
      title: 'Smart Home Integration',
      location: 'Georgetown South, Halton Hills',
      description: 'Installation and configuration of connected smart appliances for a newly built home in Georgetown South.',
      image: '/images/projects/haltonhills-smarthome.webp'
    }
  ],
  
  // Local information - tailored for Halton Hills
  localInfo: {
    applianceUsage: "Halton Hills features a mix of historic homes in areas like Downtown Georgetown and Glen Williams, alongside newer developments in Georgetown South and Mountainview. Our technicians are experienced with both traditional appliances in heritage properties and modern systems in newer homes.",
    commonIssues: "In Halton Hills' established neighborhoods, we frequently service older, well-maintained appliances that require specialized parts and knowledge. In newer developments, we often address issues with high-efficiency appliances and smart home systems popular in modern family homes.",
    serviceNotes: "Our Halton Hills technicians understand the unique mix of urban, suburban, and rural properties in the area. We provide reliable service to all communities from Georgetown and Acton to rural hamlets, with expertise in both traditional and cutting-edge appliances."
  }
};

// Sample services data for Halton Hills
const haltonHillsServices: AreaServiceItem[] = [
  {
    id: 'refrigerator-repair',
    name: 'Refrigerator Repair',
    image: '/images/services/refrigerator-repair.webp',
    description: 'Our Halton Hills refrigerator repair technicians can fix all brands and models of refrigerators. From cooling issues to ice maker problems, our experts can diagnose and repair your refrigerator quickly and efficiently. We service all Halton Hills communities with same-day appointments available.',
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
    description: 'Our washer repair services in Halton Hills cover all major brands and models. Whether your washing machine is leaking, not spinning, or making unusual noises, our skilled technicians can identify the problem and provide efficient, long-lasting repairs right in your Halton Hills home.',
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
    description: 'When your dryer stops working properly in Halton Hills, our expert technicians are just a call away. We repair all types of dryers including gas and electric models. From heating issues to strange noises, our Halton Hills team can solve your dryer problems quickly and effectively.',
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
    description: 'Our Halton Hills dishwasher repair services cover all brands and models. We fix common issues like poor cleaning performance, leaking, and drainage problems. Our experienced technicians provide fast, reliable dishwasher repairs throughout Halton Hills, often on the same day you call.',
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
    description: 'For oven and stove repairs in Halton Hills, our technicians are experienced with all types including gas, electric, and induction. Whether your oven isn\'t heating properly or your stove burners won\'t light, we provide expert diagnoses and repairs throughout the Halton Hills area.',
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

// Brand data for Halton Hills
const haltonHillsBrands: BrandItem[] = [
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

// Halton Hills testimonials
const haltonHillsTestimonials: TestimonialItem[] = [
  {
    name: "Elizabeth R.",
    location: "Downtown Georgetown, Halton Hills",
    rating: 5,
    text: "JK Appliance provided exceptional service for our century home. The technician understood the challenges of working with older systems and provided solutions that preserved the character of our home while ensuring modern functionality.",
    date: "May 2023"
  },
  {
    name: "James W.",
    location: "Acton, Halton Hills",
    rating: 5,
    text: "When our fridge stopped working before a holiday weekend, JK Appliance came to the rescue with same-day service. Their technician was professional, knowledgeable, and had our refrigerator working perfectly in no time.",
    date: "April 2023"
  },
  {
    name: "Samantha K.",
    location: "Georgetown South, Halton Hills",
    rating: 5,
    text: "We've used JK Appliance for our home's kitchen and laundry appliances. Their service is always reliable, and their technicians always take time to explain what they're doing and offer maintenance tips.",
    date: "June 2023"
  },
  {
    name: "Michael T.",
    location: "Glen Williams, Halton Hills",
    rating: 5,
    text: "Our washing machine needed a complex repair that two other companies couldn't fix. JK Appliance's technician diagnosed the problem correctly and had the part in stock. Excellent service and expertise!",
    date: "March 2023"
  }
];

// Custom Halton Hills page
export default function HaltonHillsAreaPage() {
  // Convert string neighborhoods to AreaData format for NeighborhoodSection
  const neighborhoodAreas: AreaData[] = haltonHillsData.neighborhoods.map((name, index) => ({
    id: `${haltonHillsData.id}-neighborhood-${index}`,
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
                Appliance Repair in {haltonHillsData.name}
              </h1>
              <p className="text-xl sm:text-2xl text-gray-500 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
                Fast, reliable appliance repair services throughout {haltonHillsData.name} with same-day service available. Serving all communities in the {haltonHillsData.fullName} area.
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
                  src={haltonHillsData.heroImage}
                  alt={`${haltonHillsData.name} Appliances`}
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
      <ServicesSectionArea areaName={haltonHillsData.name} />
      
      {/* Halton Hills Areas Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-semibold text-gray-900 mb-4">
                Serving All Halton Hills Communities
              </h2>
              <p className="text-xl text-gray-500 max-w-3xl mx-auto">
                From historic Georgetown to rural hamlets, we provide expert appliance repair throughout Halton Hills
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Historic Towns & Villages */}
              <div className="bg-[#f5f5f7] rounded-3xl overflow-hidden shadow-sm transition-all hover:shadow-md">
                <div className="relative h-64">
                  <Image 
                    src="/images/haltonhills-historic.webp"
                    alt="Historic Halton Hills"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-medium text-gray-900 mb-2">Historic Towns & Villages</h3>
                  <p className="text-gray-600">
                    We provide specialized service to Downtown Georgetown, Glen Williams, Limehouse, and other historic areas, with expertise in maintaining appliances in heritage homes while preserving their character and charm.
                  </p>
                </div>
              </div>
              
              {/* Established Neighborhoods */}
              <div className="bg-[#f5f5f7] rounded-3xl overflow-hidden shadow-sm transition-all hover:shadow-md">
                <div className="relative h-64">
                  <Image 
                    src="/images/haltonhills-established.webp"
                    alt="Established Halton Hills Neighborhoods"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-medium text-gray-900 mb-2">Established Neighborhoods</h3>
                  <p className="text-gray-600">
                    Our technicians service Delrex, Moore Park, Cedarvale, Hungry Hollow, and other established communities, providing expert repairs for a wide range of quality appliances in these well-developed residential areas.
                  </p>
                </div>
              </div>
              
              {/* Growing Communities */}
              <div className="bg-[#f5f5f7] rounded-3xl overflow-hidden shadow-sm transition-all hover:shadow-md">
                <div className="relative h-64">
                  <Image 
                    src="/images/haltonhills-newer.webp"
                    alt="New Halton Hills Developments"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-medium text-gray-900 mb-2">Growing Communities</h3>
                  <p className="text-gray-600">
                    We provide prompt, reliable service to Georgetown South, Mountainview, and other developing areas, with technicians specially trained to work with smart appliances and high-efficiency systems in modern homes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our AreaServicesSection */}
      <AreaServicesSection 
        areaName="Halton Hills"
        services={haltonHillsServices}
      />
      
      {/* Brand Slider Section */}
      <BrandsSliderSection
        title="Top Appliance Brands We Fix"
        subtitle="Our certified Halton Hills technicians are experienced in repairing all major appliance brands"
        brands={haltonHillsBrands}
        locationName="Halton Hills"
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
                    src={haltonHillsData.mapImage}
                    alt={`${haltonHillsData.name} Service Area Map`}
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
                <h3 className="text-3xl font-semibold text-[#1d1d1f] mb-6">Our {haltonHillsData.name} Coverage</h3>
                <p className="text-[#424245] mb-6 leading-relaxed">
                  {haltonHillsData.localInfo.applianceUsage}
                </p>
                <p className="text-[#424245] mb-8 leading-relaxed">
                  {haltonHillsData.localInfo.commonIssues}
                </p>
                
                <div className="bg-[#f5f5f7] rounded-2xl p-6 mb-8">
                  <h4 className="text-xl font-medium text-[#1d1d1f] mb-3">About Our {haltonHillsData.name} Service</h4>
                  <p className="text-[#424245]">
                    {haltonHillsData.localInfo.serviceNotes}
                  </p>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="bg-[#0071e3] rounded-full p-3">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="text-[#1d1d1f] font-medium">
                    {haltonHillsData.responseTime}
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <TestimonialsSection
        title="What Our Halton Hills Customers Say"
        subtitle="Read testimonials from satisfied customers across Halton Hills communities"
        testimonials={haltonHillsTestimonials}
      />

      {/* Neighborhoods Section */}
      <NeighborhoodSection 
        title={`${haltonHillsData.name} Communities We Serve`}
        description={`From historic Georgetown to rural Acton, our technicians provide prompt, reliable service throughout ${haltonHillsData.name}.`}
        areas={neighborhoodAreas}
        mapImage={haltonHillsData.neighborhoodImage}
        companyName="JK"
        companyAddress={haltonHillsData.address.street}
      />
      
      {/* Coupon Section */}
      <CouponSection 
        title="Special Offers for Halton Hills Residents"
        subtitle="Use these exclusive coupons for same-day appliance repair service in Halton Hills"
        mainCoupons={[
          {
            amount: "25",
            type: "Repair",
            forCustomer: "New Customer Discount",
            code: "HH25",
            website: "jkappliancerepair.ca",
            phone: "647-560-8966",
            primaryColor: "#0071e3"
          },
          {
            amount: "15",
            type: "Repair",
            forCustomer: "For Returning Customers",
            code: "HHRETURN15",
            website: "jkappliancerepair.ca",
            phone: "647-560-8966",
            primaryColor: "#0071e3"
          },
          {
            amount: "30",
            type: "Repair",
            forCustomer: "Senior Customer Discount",
            code: "HHSENIOR30",
            website: "jkappliancerepair.ca",
            phone: "647-560-8966",
            primaryColor: "#0071e3"
          }
        ]}
        extraCoupons={[
          {
            amount: "35",
            type: "Refrigerator Repair",
            forCustomer: "Georgetown Residents",
            code: "HHGTOWN35",
            website: "jkappliancerepair.ca",
            phone: "647-560-8966",
            primaryColor: "#0071e3"
          },
          {
            amount: "25",
            type: "Washer Repair",
            forCustomer: "Acton Residents",
            code: "HHACTON25",
            website: "jkappliancerepair.ca",
            phone: "647-560-8966",
            primaryColor: "#0071e3"
          }
        ]}
      />
      
      {/* Blog Section */}
      <BlogSection 
        title="Appliance Tips for Halton Hills Residents"
        subtitle="Helpful guides and maintenance tips specifically for Halton Hills homeowners and residents"
        areaId="haltonhills"
        showCategories={true}
        limit={3}
        viewAllLink={true}
      />
      
      {/* Booking Section */}
      <BookingSection />
    </div>
  );
} 