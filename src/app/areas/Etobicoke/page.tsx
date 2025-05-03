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

// Etobicoke area data
const etobicokeData = {
  id: 'etobicoke',
  name: 'Etobicoke',
  fullName: 'Etobicoke, Toronto',
  description: 'From lakefront residences to family homes in quiet neighborhoods, our appliance repair technicians provide prompt service throughout Etobicoke with same-day appointments available.',
  heroImage: '/images/etobicoke-skyline.jpg',
  neighborhoodImage: '/images/etobicoke-map.jpg',
  mapImage: '/images/etobicoke.jpg',
  
  // Location information
  address: {
    street: '18 Yonge St',
    city: 'Toronto',
    province: 'ON',
    postalCode: 'M5E 1Z8',
  },
  
  // Service radius and coverage details
  serviceRadius: '25',
  responseTime: 'Same-day service available in most Etobicoke neighborhoods',
  
  // Neighborhoods served
  neighborhoods: [
    'The Kingsway',
    'Mimico',
    'New Toronto',
    'Long Branch',
    'Alderwood',
    'Humber Bay',
    'Islington-City Centre West',
    'Eringate-Centennial-West Deane',
    'Princess Gardens',
    'Markland Wood',
    'Sunnylea',
    'Stonegate-Queensway',
    'Humber Valley Village',
    'Rexdale',
    'Thistletown',
    'West Humber-Clairville',
    'Humber Heights',
    'Kingsview Village',
    'Mount Olive',
    'Richview',
    'Smithfield',
    'Willowridge'
  ],
  
  // Most common services in this area
  popularServices: [
    {
      id: 'refrigerator-repair',
      name: 'Refrigerator Repair',
      image: '/images/services/refrigerator-repair.jpg',
      description: 'Expert refrigerator repair for all major brands in Etobicoke.'
    },
    {
      id: 'washer-repair',
      name: 'Washer Repair',
      image: '/images/services/washer-repair.jpg',
      description: 'Professional washing machine repairs for homes throughout Etobicoke.'
    },
    {
      id: 'dryer-repair',
      name: 'Dryer Repair',
      image: '/images/services/dryer-repair.jpg',
      description: 'Fast, reliable dryer repair services throughout Etobicoke.'
    },
    {
      id: 'dishwasher-repair',
      name: 'Dishwasher Repair',
      image: '/images/services/dishwasher-repair.jpg',
      description: 'Expert dishwasher technicians serving the Etobicoke area.'
    }
  ],
  
  // Recent projects in this area
  recentProjects: [
    {
      title: 'Lakefront Condo Appliance Service',
      location: 'Humber Bay, Etobicoke',
      description: 'Complete appliance overhaul for a luxury condominium on the waterfront.',
      image: '/images/projects/etobicoke-condo.jpg'
    },
    {
      title: 'Restaurant Equipment Repair',
      location: 'The Kingsway, Etobicoke',
      description: 'Commercial kitchen equipment repair for a popular restaurant in The Kingsway area.',
      image: '/images/projects/etobicoke-restaurant.jpg'
    },
    {
      title: 'Multi-Unit Home Service',
      location: 'Mimico, Etobicoke',
      description: 'Complete appliance maintenance for a multi-unit residential property in Mimico.',
      image: '/images/projects/etobicoke-multiunit.jpg'
    }
  ],
  
  // Local information - tailored for Etobicoke
  localInfo: {
    applianceUsage: "Etobicoke residents live in a mix of single-family homes, townhouses, and lakefront condominiums. This diverse housing requires our technicians to be familiar with both standard home appliances and high-end luxury models common in waterfront properties.",
    commonIssues: "In Etobicoke's lakefront areas like Mimico and Humber Bay, we frequently address issues related to humidity affecting appliances. The older established neighborhoods like The Kingsway often require service for classic models, while newer developments feature smart appliances requiring specialized expertise.",
    serviceNotes: "Our Etobicoke technicians are familiar with the area's unique layout, from the lakefront communities to northern neighborhoods like Rexdale. We maintain inventory specifically for models common in Etobicoke homes to ensure faster service and repairs."
  }
};

// Sample services data for Etobicoke
const etobicokeServices: AreaServiceItem[] = [
  {
    id: 'refrigerator-repair',
    name: 'Refrigerator Repair',
    image: '/images/services/refrigerator-repair.jpg',
    description: 'Our Etobicoke refrigerator repair technicians can fix all brands and models of refrigerators. From cooling issues to ice maker problems, our experts can diagnose and repair your refrigerator quickly and efficiently. We service all Etobicoke neighborhoods with same-day appointments available.',
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
    image: '/images/services/washer-repair.jpg',
    description: 'Our washer repair services in Etobicoke cover all major brands and models. Whether your washing machine is leaking, not spinning, or making unusual noises, our skilled technicians can identify the problem and provide efficient, long-lasting repairs right in your Etobicoke home.',
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
    image: '/images/services/dryer-repair.jpg',
    description: 'When your dryer stops working properly in Etobicoke, our expert technicians are just a call away. We repair all types of dryers including gas and electric models. From heating issues to strange noises, our Etobicoke team can solve your dryer problems quickly and effectively.',
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
    image: '/images/services/dishwasher-repair.jpg',
    description: 'Our Etobicoke dishwasher repair services cover all brands and models. We fix common issues like poor cleaning performance, leaking, and drainage problems. Our experienced technicians provide fast, reliable dishwasher repairs throughout Etobicoke, often on the same day you call.',
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
    image: '/images/services/oven-repair.jpg',
    description: 'For oven and stove repairs in Etobicoke, our technicians are experienced with all types including gas, electric, and induction. Whether your oven isn\'t heating properly or your stove burners won\'t light, we provide expert diagnoses and repairs throughout the Etobicoke area.',
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

// Brand data for Etobicoke
const etobicokeBrands: BrandItem[] = [
  {
    id: 'samsung',
    name: 'Samsung',
    logo: '/images/brands/samsung.svg',
    link: '/brands/samsung'
  },
  {
    id: 'lg',
    name: 'LG',
    logo: '/images/brands/lg.svg',
    link: '/brands/lg'
  },
  {
    id: 'whirlpool',
    name: 'Whirlpool',
    logo: '/images/brands/whirlpool.svg',
    link: '/brands/whirlpool'
  },
  {
    id: 'ge',
    name: 'GE',
    logo: '/images/brands/ge.svg',
    link: '/brands/ge'
  },
  {
    id: 'maytag',
    name: 'Maytag',
    logo: '/images/brands/maytag.svg',
    link: '/brands/maytag'
  },
  {
    id: 'kitchenaid',
    name: 'KitchenAid',
    logo: '/images/brands/kitchen-aid.svg',
    link: '/brands/kitchenaid'
  },
  {
    id: 'electrolux',
    name: 'Electrolux',
    logo: '/images/brands/electrolux.svg',
    link: '/brands/electrolux'
  },
  {
    id: 'bosch',
    name: 'Bosch',
    logo: '/images/brands/bosch.svg',
    link: '/brands/bosch'
  },
  {
    id: 'miele',
    name: 'Miele',
    logo: '/images/brands/miele.svg',
    link: '/brands/miele'
  },
  {
    id: 'frigidaire',
    name: 'Frigidaire',
    logo: '/images/brands/frigidaire.svg',
    link: '/brands/frigidaire'
  }
];

// Testimonials specific to Etobicoke
const etobicokeTestimonials: TestimonialItem[] = [
  {
    name: "Robert M.",
    location: "The Kingsway, Etobicoke",
    rating: 5,
    text: "After several unsuccessful attempts to get our high-end refrigerator fixed, JK Appliance solved the problem on their first visit. Their technician was knowledgeable and professional. Excellent service from start to finish!",
    date: "May 2023"
  },
  {
    name: "Jennifer L.",
    location: "Mimico, Etobicoke",
    rating: 5,
    text: "When our dishwasher stopped mid-cycle, JK Appliance was able to send a technician the same day. He quickly diagnosed the issue, had the parts on hand, and had it running again within an hour. Highly recommended!",
    date: "April 2023"
  },
  {
    name: "James P.",
    location: "Humber Bay, Etobicoke",
    rating: 5,
    text: "As a property manager for several lakefront condos, I've been using JK Appliance for all our maintenance needs. Their service is consistently reliable, and they're always available for emergency repairs. Fantastic company to work with.",
    date: "June 2023"
  },
  {
    name: "Samantha T.",
    location: "Alderwood, Etobicoke",
    rating: 5,
    text: "My dryer stopped heating properly, and JK Appliance came the next morning. The technician was friendly, explained everything clearly, and completed the repair efficiently. Fair pricing and great service!",
    date: "March 2023"
  }
];

// Custom Etobicoke page
export default function EtobicokeAreaPage() {
  // Convert string neighborhoods to AreaData format for NeighborhoodSection
  const neighborhoodAreas: AreaData[] = etobicokeData.neighborhoods.map((name, index) => ({
    id: `${etobicokeData.id}-neighborhood-${index}`,
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
                Appliance Repair in {etobicokeData.name}
              </h1>
              <p className="text-xl sm:text-2xl text-gray-500 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
                Fast, reliable appliance repair services throughout {etobicokeData.name} with same-day service available. Serving all neighborhoods in the {etobicokeData.fullName} area.
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
                  src={etobicokeData.heroImage}
                  alt={`${etobicokeData.name} Appliances`}
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
      <ServicesSectionArea areaName={etobicokeData.name} />
      
      {/* Etobicoke Regions Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-semibold text-gray-900 mb-4">
                Serving All Etobicoke Regions
              </h2>
              <p className="text-xl text-gray-500 max-w-3xl mx-auto">
                From lakefront communities to northern neighborhoods, we provide expert appliance repair throughout Etobicoke
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Lakefront Communities */}
              <div className="bg-[#f5f5f7] rounded-3xl overflow-hidden shadow-sm transition-all hover:shadow-md">
                <div className="relative h-64">
                  <Image 
                    src="/images/etobicoke-lakefront.jpg"
                    alt="Lakefront Communities in Etobicoke"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-medium text-gray-900 mb-2">Lakefront Communities</h3>
                  <p className="text-gray-600">
                    We provide specialized service to Mimico, New Toronto, Long Branch, and Humber Bay areas, with expertise in maintaining appliances in waterfront properties that face unique challenges due to humidity and environmental factors.
                  </p>
                </div>
              </div>
              
              {/* Central Etobicoke */}
              <div className="bg-[#f5f5f7] rounded-3xl overflow-hidden shadow-sm transition-all hover:shadow-md">
                <div className="relative h-64">
                  <Image 
                    src="/images/etobicoke-central.jpg"
                    alt="Central Etobicoke"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-medium text-gray-900 mb-2">Central Etobicoke</h3>
                  <p className="text-gray-600">
                    Our technicians service the established neighborhoods of Islington-City Centre West, The Kingsway, Sunnylea, and Stonegate-Queensway, providing expert repairs for both traditional and modern appliances in these well-established areas.
                  </p>
                </div>
              </div>
              
              {/* Northern Etobicoke */}
              <div className="bg-[#f5f5f7] rounded-3xl overflow-hidden shadow-sm transition-all hover:shadow-md">
                <div className="relative h-64">
                  <Image 
                    src="/images/etobicoke-north.jpg"
                    alt="Northern Etobicoke"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-medium text-gray-900 mb-2">Northern Etobicoke</h3>
                  <p className="text-gray-600">
                    We provide prompt, reliable service to Rexdale, Thistletown, West Humber-Clairville, and all northern Etobicoke neighborhoods, with technicians who understand the specific needs of these diverse communities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our new AreaServicesSection */}
      <AreaServicesSection 
        areaName="Etobicoke"
        services={etobicokeServices}
      />
      
      {/* Brand Slider Section */}
      <BrandsSliderSection
        title="Top Appliance Brands We Fix"
        subtitle="Our certified Etobicoke technicians are experienced in repairing all major appliance brands"
        brands={etobicokeBrands}
        locationName="Etobicoke"
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
                    src={etobicokeData.mapImage}
                    alt={`${etobicokeData.name} Service Area Map`}
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
                <h3 className="text-3xl font-semibold text-[#1d1d1f] mb-6">Our {etobicokeData.name} Coverage</h3>
                <p className="text-[#424245] mb-6 leading-relaxed">
                  {etobicokeData.localInfo.applianceUsage}
                </p>
                <p className="text-[#424245] mb-8 leading-relaxed">
                  {etobicokeData.localInfo.commonIssues}
                </p>
                
                <div className="bg-[#f5f5f7] rounded-2xl p-6 mb-8">
                  <h4 className="text-xl font-medium text-[#1d1d1f] mb-3">About Our {etobicokeData.name} Service</h4>
                  <p className="text-[#424245]">
                    {etobicokeData.localInfo.serviceNotes}
                  </p>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="bg-[#0071e3] rounded-full p-3">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="text-[#1d1d1f] font-medium">
                    {etobicokeData.responseTime}
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <TestimonialsSection
        title="What Our Etobicoke Customers Say"
        subtitle="Read testimonials from satisfied customers across Etobicoke neighborhoods"
        testimonials={etobicokeTestimonials}
      />

      {/* Neighborhoods Section */}
      <NeighborhoodSection 
        title={`${etobicokeData.name} Neighborhoods We Serve`}
        description={`From lakefront communities to northern neighborhoods, our technicians provide prompt, reliable service throughout ${etobicokeData.name}.`}
        areas={neighborhoodAreas}
        mapImage={etobicokeData.neighborhoodImage}
        companyName="JK"
        companyAddress={etobicokeData.address.street}
      />
      
      {/* Coupon Section */}
      <CouponSection 
        title="Special Offers for Etobicoke Residents"
        subtitle="Use these exclusive coupons for same-day appliance repair service in Etobicoke"
        mainCoupons={[
          {
            amount: "25",
            type: "Repair",
            forCustomer: "New Customer Discount",
            code: "ET25",
            website: "jkappliancerepair.ca",
            phone: "647-560-8966",
            primaryColor: "#0071e3"
          },
          {
            amount: "15",
            type: "Repair",
            forCustomer: "For Returning Customers",
            code: "ETRETURN15",
            website: "jkappliancerepair.ca",
            phone: "647-560-8966",
            primaryColor: "#0071e3"
          },
          {
            amount: "30",
            type: "Repair",
            forCustomer: "Senior Customer Discount",
            code: "ETSENIOR30",
            website: "jkappliancerepair.ca",
            phone: "647-560-8966",
            primaryColor: "#0071e3"
          }
        ]}
        extraCoupons={[
          {
            amount: "35",
            type: "Refrigerator Repair",
            forCustomer: "Lakefront Residents",
            code: "ETLAKE35",
            website: "jkappliancerepair.ca",
            phone: "647-560-8966",
            primaryColor: "#0071e3"
          },
          {
            amount: "25",
            type: "Washer Repair",
            forCustomer: "Kingsway Residents",
            code: "ETKINGSWAY25",
            website: "jkappliancerepair.ca",
            phone: "647-560-8966",
            primaryColor: "#0071e3"
          }
        ]}
      />
      
      {/* Blog Section */}
      <BlogSection 
        title="Appliance Tips for Etobicoke Residents"
        subtitle="Helpful guides and maintenance tips specifically for Etobicoke homeowners and residents"
        areaId="etobicoke"
        showCategories={true}
        limit={3}
        viewAllLink={true}
      />
      
      {/* Booking Section */}
      <BookingSection />
    </div>
  );
} 