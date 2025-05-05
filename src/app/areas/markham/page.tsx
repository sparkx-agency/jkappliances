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
import AppleTestimonialsSection from '@/components/sections/AppleTestimonialsSection';

// Markham area data
const markhamData = {
  id: 'markham',
  name: 'Markham',
  fullName: 'Markham, Ontario',
  description: 'From heritage streets of Old Markham to modern developments in Unionville, our appliance repair technicians provide prompt service throughout Markham with same-day appointments available.',
  heroImage: '/images/areas/areas-hero.webp',
  neighborhoodImage: '/images/markham-map.webp',
  mapImage: '/images/markham.webp',
  
  // Location information
  address: {
    street: '18 Yonge St',
    city: 'Toronto',
    province: 'ON',
    postalCode: 'M5E 1Z8',
  },
  
  // Service radius and coverage details
  serviceRadius: '25',
  responseTime: 'Same-day service available in all Markham neighborhoods',
  
  // Neighborhoods served
  neighborhoods: [
    'Unionville',
    'Thornhill',
    'Cornell',
    'Greensborough',
    'Berczy Village',
    'Cathedraltown',
    'Markham Village',
    'Old Markham',
    'Milliken Mills',
    'Rouge Fairways',
    'Wismer Commons',
    'Legacy',
    'German Mills',
    'Angus Glen',
    'Cachet',
    'Commerce Valley',
    'Buttonville',
    'Bayview Glen',
    'Victoria Square',
    'Vinegar Hill',
    'Raymerville',
    'Box Grove'
  ],
  
  // Most common services in this area
  popularServices: [
    {
      id: 'refrigerator-repair',
      name: 'Refrigerator Repair',
      image: '/images/services/refrigerator-repair.webp',
      description: 'Expert refrigerator repair for all major brands in Markham.'
    },
    {
      id: 'washer-repair',
      name: 'Washer Repair',
      image: '/images/services/washer-repair.webp',
      description: 'Professional washing machine repairs for homes throughout Markham.'
    },
    {
      id: 'dryer-repair',
      name: 'Dryer Repair',
      image: '/images/services/dryer-repair.webp',
      description: 'Fast, reliable dryer repair services throughout Markham.'
    },
    {
      id: 'dishwasher-repair',
      name: 'Dishwasher Repair',
      image: '/images/services/dishwasher-repair.webp',
      description: 'Expert dishwasher technicians serving the Markham area.'
    }
  ],
  
  // Recent projects in this area
  recentProjects: [
    {
      title: 'Luxury Home Appliance Suite',
      location: 'Unionville, Markham',
      description: 'Complete high-end appliance installation and configuration for a new luxury home in Unionville.',
      image: '/images/projects/markham-luxury.webp'
    },
    {
      title: 'Restaurant Equipment Repair',
      location: 'Main Street Markham',
      description: 'Commercial kitchen equipment repair for a popular restaurant in historic downtown Markham.',
      image: '/images/projects/markham-restaurant.webp'
    },
    {
      title: 'Smart Home Integration',
      location: 'Cornell, Markham',
      description: 'Installation and configuration of connected smart appliances for a modern home in Cornell.',
      image: '/images/projects/markham-smarthome.webp'
    }
  ],
  
  // Local information - tailored for Markham
  localInfo: {
    applianceUsage: "Markham residents enjoy a diverse range of housing from historic homes in Unionville and Markham Village to modern luxury houses in Angus Glen and new developments in Cornell. Our technicians are experienced with both heritage properties and cutting-edge smart homes.",
    commonIssues: "In Markham's newer communities like Cornell and Wismer Commons, we frequently address issues with high-end and smart appliances. Meanwhile, in established neighborhoods like Unionville and Old Markham, we often service premium appliances in heritage homes that may require specialized installation solutions.",
    serviceNotes: "Our Markham technicians are familiar with the city's blend of historic areas and modern developments, providing expert service across all neighborhoods with specialized knowledge of both luxury appliance brands and everyday models."
  }
};

// Sample services data for Markham
const markhamServices: AreaServiceItem[] = [
  {
    id: 'refrigerator-repair',
    name: 'Refrigerator Repair',
    image: '/images/services/refrigerator-repair.webp',
    description: 'Our Markham refrigerator repair technicians can fix all brands and models of refrigerators. From cooling issues to ice maker problems, our experts can diagnose and repair your refrigerator quickly and efficiently. We service all Markham neighborhoods with same-day appointments available.',
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
    description: 'Our washer repair services in Markham cover all major brands and models. Whether your washing machine is leaking, not spinning, or making unusual noises, our skilled technicians can identify the problem and provide efficient, long-lasting repairs right in your Markham home.',
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
    description: 'When your dryer stops working properly in Markham, our expert technicians are just a call away. We repair all types of dryers including gas and electric models. From heating issues to strange noises, our Markham team can solve your dryer problems quickly and effectively.',
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
    description: 'Our Markham dishwasher repair services cover all brands and models. We fix common issues like poor cleaning performance, leaking, and drainage problems. Our experienced technicians provide fast, reliable dishwasher repairs throughout Markham, often on the same day you call.',
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
    description: 'For oven and stove repairs in Markham, our technicians are experienced with all types including gas, electric, and induction. Whether your oven isn\'t heating properly or your stove burners won\'t light, we provide expert diagnoses and repairs throughout the Markham area.',
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

// Brand data for Markham
const markhamBrands: BrandItem[] = [
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

// Markham testimonials
const markhamTestimonials: TestimonialItem[] = [
  {
    name: "Jennifer W.",
    location: "Unionville, Markham",
    rating: 5,
    text: "JK Appliance did an outstanding job with our Sub-Zero refrigerator. The technician was knowledgeable, professional, and fixed it on the first visit. Their attention to detail and respect for our home was impressive!",
    date: "May 2023"
  },
  {
    name: "David L.",
    location: "Cornell, Markham",
    rating: 5,
    text: "When our smart dishwasher stopped connecting to our home system, JK Appliance sent a technician who understood both the appliance and the technology. Fixed the issue and reconfigured everything perfectly. Great service!",
    date: "April 2023"
  },
  {
    name: "Sarah T.",
    location: "Markham Village",
    rating: 5,
    text: "Our vintage stove in our heritage home needed specialized repair. The technician from JK Appliance had the expertise to fix it while preserving its character. We were extremely impressed with their knowledge and care.",
    date: "June 2023"
  },
  {
    name: "Michael C.",
    location: "Greensborough, Markham",
    rating: 5,
    text: "JK Appliance has serviced all our home appliances over the past three years. Always professional, on time, and their repairs last. They're our go-to for any appliance issues - highly recommended for Markham residents!",
    date: "March 2023"
  }
];

// Custom Markham page
export default function MarkhamAreaPage() {
  // Convert string neighborhoods to AreaData format for NeighborhoodSection
  const neighborhoodAreas: AreaData[] = markhamData.neighborhoods.map((name, index) => ({
    id: `${markhamData.id}-neighborhood-${index}`,
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
                Appliance Repair in {markhamData.name}
              </h1>
              <p className="text-xl sm:text-2xl text-gray-500 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
                Fast, reliable appliance repair services throughout {markhamData.name} with same-day service available. Serving all neighborhoods in the {markhamData.fullName} area.
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
                  src={markhamData.heroImage}
                  alt={`${markhamData.name} Appliances`}
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
      <ServicesSectionArea areaName={markhamData.name} />
      
      {/* Markham Areas Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-semibold text-gray-900 mb-4">
                Serving All Markham Communities
              </h2>
              <p className="text-xl text-gray-500 max-w-3xl mx-auto">
                From historic Unionville to modern developments in Cornell, we provide expert appliance repair throughout Markham
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Historic Markham */}
              <div className="bg-[#f5f5f7] rounded-3xl overflow-hidden shadow-sm transition-all hover:shadow-md">
                <div className="relative h-64">
                  <Image 
                    src="/images/markham-historic.webp"
                    alt="Historic Markham"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-medium text-gray-900 mb-2">Historic Areas</h3>
                  <p className="text-gray-600">
                    We provide specialized service to Unionville, Markham Village, and Old Markham, with expertise in maintaining appliances in heritage homes that often require custom solutions while preserving architectural integrity.
                  </p>
                </div>
              </div>
              
              {/* Established Neighborhoods */}
              <div className="bg-[#f5f5f7] rounded-3xl overflow-hidden shadow-sm transition-all hover:shadow-md">
                <div className="relative h-64">
                  <Image 
                    src="/images/markham-established.webp"
                    alt="Established Markham Neighborhoods"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-medium text-gray-900 mb-2">Established Neighborhoods</h3>
                  <p className="text-gray-600">
                    Our technicians service Thornhill, Milliken Mills, German Mills, and other established communities, providing expert repairs for a wide range of appliances in these well-developed residential areas.
                  </p>
                </div>
              </div>
              
              {/* Modern Developments */}
              <div className="bg-[#f5f5f7] rounded-3xl overflow-hidden shadow-sm transition-all hover:shadow-md">
                <div className="relative h-64">
                  <Image 
                    src="/images/markham-modern.webp"
                    alt="Modern Markham Developments"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-medium text-gray-900 mb-2">Modern Developments</h3>
                  <p className="text-gray-600">
                    We provide prompt, reliable service to Cornell, Wismer Commons, Cathedraltown, and other newer communities, with technicians specially trained to work with smart appliances and high-efficiency systems in modern homes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our AreaServicesSection */}
      <AreaServicesSection 
        areaName="Markham"
        services={markhamServices}
      />
      
      {/* Brand Slider Section */}
      <BrandsSliderSection
        title="Top Appliance Brands We Fix"
        subtitle="Our certified Markham technicians are experienced in repairing all major appliance brands"
        brands={markhamBrands}
        locationName="Markham"
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
                    src={markhamData.mapImage}
                    alt={`${markhamData.name} Service Area Map`}
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
                <h3 className="text-3xl font-semibold text-[#1d1d1f] mb-6">Our {markhamData.name} Coverage</h3>
                <p className="text-[#424245] mb-6 leading-relaxed">
                  {markhamData.localInfo.applianceUsage}
                </p>
                <p className="text-[#424245] mb-8 leading-relaxed">
                  {markhamData.localInfo.commonIssues}
                </p>
                
                <div className="bg-[#f5f5f7] rounded-2xl p-6 mb-8">
                  <h4 className="text-xl font-medium text-[#1d1d1f] mb-3">About Our {markhamData.name} Service</h4>
                  <p className="text-[#424245]">
                    {markhamData.localInfo.serviceNotes}
                  </p>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="bg-[#0071e3] rounded-full p-3">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="text-[#1d1d1f] font-medium">
                    {markhamData.responseTime}
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <AppleTestimonialsSection
        title="What Our Markham Customers Say"
        subtitle="Read testimonials from satisfied customers across Markham neighborhoods"
        maxReviews={4}
      />

      {/* Neighborhoods Section */}
      <NeighborhoodSection 
        title={`${markhamData.name} Neighborhoods We Serve`}
        description={`From historic Unionville to modern Cornell, our technicians provide prompt, reliable service throughout ${markhamData.name}.`}
        areas={neighborhoodAreas}
        mapImage={markhamData.neighborhoodImage}
        companyName="JK"
        companyAddress={markhamData.address.street}
      />
      
      {/* Coupon Section */}
      <CouponSection 
        title="Special Offers for Markham Residents"
        subtitle="Use these exclusive coupons for same-day appliance repair service in Markham"
        mainCoupons={[
          {
            amount: "25",
            type: "Repair",
            forCustomer: "New Customer Discount",
            code: "MRK25",
            website: "jkappliancerepair.ca",
            phone: "647-560-8966",
            primaryColor: "#0071e3"
          },
          {
            amount: "15",
            type: "Repair",
            forCustomer: "For Returning Customers",
            code: "MRKRETURN15",
            website: "jkappliancerepair.ca",
            phone: "647-560-8966",
            primaryColor: "#0071e3"
          },
          {
            amount: "30",
            type: "Repair",
            forCustomer: "Senior Customer Discount",
            code: "MRKSENIOR30",
            website: "jkappliancerepair.ca",
            phone: "647-560-8966",
            primaryColor: "#0071e3"
          }
        ]}
        extraCoupons={[
          {
            amount: "35",
            type: "Refrigerator Repair",
            forCustomer: "Unionville Residents",
            code: "MRKUNION35",
            website: "jkappliancerepair.ca",
            phone: "647-560-8966",
            primaryColor: "#0071e3"
          },
          {
            amount: "25",
            type: "Washer Repair",
            forCustomer: "Cornell Residents",
            code: "MRKCORNELL25",
            website: "jkappliancerepair.ca",
            phone: "647-560-8966",
            primaryColor: "#0071e3"
          }
        ]}
      />
      
      {/* Blog Section */}
      <BlogSection 
        title="Appliance Tips for Markham Residents"
        subtitle="Helpful guides and maintenance tips specifically for Markham homeowners and residents"
        areaId="markham"
        showCategories={true}
        limit={3}
        viewAllLink={true}
      />
      
      {/* Booking Section */}
      <BookingSection />
    </div>
  );
} 