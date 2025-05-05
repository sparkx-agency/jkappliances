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

// Newmarket area data
const newmarketData = {
  id: 'newmarket',
  name: 'Newmarket',
  fullName: 'Newmarket, Ontario',
  description: 'From historic homes in Old Newmarket to modern developments in Stonehaven, our appliance repair technicians provide prompt service throughout Newmarket with same-day appointments available.',
  heroImage: '/images/areas/areas-hero.webp',
  neighborhoodImage: '/images/newmarket-map.webp',
  mapImage: '/images/newmarket.webp',
  
  // Location information
  address: {
    street: '18 Yonge St',
    city: 'Toronto',
    province: 'ON',
    postalCode: 'M5E 1Z8',
  },
  
  // Service radius and coverage details
  serviceRadius: '25',
  responseTime: 'Same-day service available in all Newmarket neighborhoods',
  
  // Neighborhoods served
  neighborhoods: [
    'Old Newmarket',
    'Glenway',
    'Stonehaven',
    'Woodland Hills',
    'Summerhill',
    'College Manor',
    'Armitage',
    'Bristol',
    'Central Newmarket',
    'Gorham',
    'Huron Heights',
    'Leslie Valley',
    'Copper Hills',
    'Maple Leaf',
    'Quaker Village',
    'Crossland',
    'Fernbank',
    'Beechwood',
    'Bogarttown',
    'Longford',
    'Maryfield',
    'Newmarket Heights'
  ],
  
  // Most common services in this area
  popularServices: [
    {
      id: 'refrigerator-repair',
      name: 'Refrigerator Repair',
      image: '/images/services/refrigerator-repair.webp',
      description: 'Expert refrigerator repair for all major brands in Newmarket.'
    },
    {
      id: 'washer-repair',
      name: 'Washer Repair',
      image: '/images/services/washer-repair.webp',
      description: 'Professional washing machine repairs for homes throughout Newmarket.'
    },
    {
      id: 'dryer-repair',
      name: 'Dryer Repair',
      image: '/images/services/dryer-repair.webp',
      description: 'Fast, reliable dryer repair services throughout Newmarket.'
    },
    {
      id: 'dishwasher-repair',
      name: 'Dishwasher Repair',
      image: '/images/services/dishwasher-repair.webp',
      description: 'Expert dishwasher technicians serving the Newmarket area.'
    }
  ],
  
  // Recent projects in this area
  recentProjects: [
    {
      title: 'Historic Home Appliance Service',
      location: 'Old Newmarket',
      description: 'Complete appliance restoration and integration in a century home in Newmarket\'s historic district.',
      image: '/images/projects/newmarket-historic.webp'
    },
    {
      title: 'Restaurant Equipment Repair',
      location: 'Main Street, Newmarket',
      description: 'Commercial kitchen equipment repair for a popular restaurant in downtown Newmarket.',
      image: '/images/projects/newmarket-restaurant.webp'
    },
    {
      title: 'Smart Home Integration',
      location: 'Stonehaven, Newmarket',
      description: 'Installation and configuration of connected smart appliances for a modern family home in Stonehaven.',
      image: '/images/projects/newmarket-smarthome.webp'
    }
  ],
  
  // Local information - tailored for Newmarket
  localInfo: {
    applianceUsage: "Newmarket features a mix of historic homes in areas like Old Newmarket and Quaker Village, alongside family-friendly neighborhoods like Stonehaven and Woodland Hills. Our technicians are experienced with both vintage appliances in heritage homes and modern systems in newer properties.",
    commonIssues: "In Newmarket's established neighborhoods, we frequently address maintenance issues with well-maintained appliances in older homes. In newer communities like Stonehaven and Copper Hills, we often service higher-efficiency systems and smart appliances popular in modern family homes.",
    serviceNotes: "Our Newmarket technicians understand the town's blend of heritage charm and contemporary living. We provide reliable service to all neighborhoods from the historic downtown to the newer northern developments, with expertise in both traditional and modern appliances."
  }
};

// Sample services data for Newmarket
const newmarketServices: AreaServiceItem[] = [
  {
    id: 'refrigerator-repair',
    name: 'Refrigerator Repair',
    image: '/images/services/refrigerator-repair.webp',
    description: 'Our Newmarket refrigerator repair technicians can fix all brands and models of refrigerators. From cooling issues to ice maker problems, our experts can diagnose and repair your refrigerator quickly and efficiently. We service all Newmarket neighborhoods with same-day appointments available.',
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
    description: 'Our washer repair services in Newmarket cover all major brands and models. Whether your washing machine is leaking, not spinning, or making unusual noises, our skilled technicians can identify the problem and provide efficient, long-lasting repairs right in your Newmarket home.',
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
    description: 'When your dryer stops working properly in Newmarket, our expert technicians are just a call away. We repair all types of dryers including gas and electric models. From heating issues to strange noises, our Newmarket team can solve your dryer problems quickly and effectively.',
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
    description: 'Our Newmarket dishwasher repair services cover all brands and models. We fix common issues like poor cleaning performance, leaking, and drainage problems. Our experienced technicians provide fast, reliable dishwasher repairs throughout Newmarket, often on the same day you call.',
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
    description: 'For oven and stove repairs in Newmarket, our technicians are experienced with all types including gas, electric, and induction. Whether your oven isn\'t heating properly or your stove burners won\'t light, we provide expert diagnoses and repairs throughout the Newmarket area.',
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

// Brand data for Newmarket
const newmarketBrands: BrandItem[] = [
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

// Newmarket testimonials
const newmarketTestimonials: TestimonialItem[] = [
  {
    name: "Linda S.",
    location: "Old Newmarket",
    rating: 5,
    text: "JK Appliance provided exceptional service for our historic home. The technician understood the challenges of integrating modern appliances with our heritage kitchen and provided solutions that preserved the character of our home.",
    date: "May 2023"
  },
  {
    name: "David R.",
    location: "Stonehaven, Newmarket",
    rating: 5,
    text: "When our refrigerator stopped cooling right before hosting a family gathering, JK Appliance sent a technician within hours. They diagnosed the problem quickly, had the parts on hand, and fixed it on the spot. Saved our weekend!",
    date: "April 2023"
  },
  {
    name: "Jennifer T.",
    location: "Woodland Hills, Newmarket",
    rating: 5,
    text: "We've used JK Appliance for our family's washer, dryer, and dishwasher repairs. Their service is always reliable, honest, and their technicians are knowledgeable and professional. Our go-to for all appliance repairs in Newmarket.",
    date: "June 2023"
  },
  {
    name: "Matthew P.",
    location: "Copper Hills, Newmarket",
    rating: 5,
    text: "Our new smart home had connectivity issues with the appliances. JK Appliance sent a technician who really understood both the tech and the appliances. He got everything working seamlessly and took time to show us how to optimize settings.",
    date: "March 2023"
  }
];

// Custom Newmarket page
export default function NewmarketAreaPage() {
  // Convert string neighborhoods to AreaData format for NeighborhoodSection
  const neighborhoodAreas: AreaData[] = newmarketData.neighborhoods.map((name, index) => ({
    id: `${newmarketData.id}-neighborhood-${index}`,
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
                Appliance Repair in {newmarketData.name}
              </h1>
              <p className="text-xl sm:text-2xl text-gray-500 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
                Fast, reliable appliance repair services throughout {newmarketData.name} with same-day service available. Serving all neighborhoods in the {newmarketData.fullName} area.
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
                  src={newmarketData.heroImage}
                  alt={`${newmarketData.name} Appliances`}
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
      <ServicesSectionArea areaName={newmarketData.name} />
      
      {/* Newmarket Areas Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-semibold text-gray-900 mb-4">
                Serving All Newmarket Communities
              </h2>
              <p className="text-xl text-gray-500 max-w-3xl mx-auto">
                From historic downtown to family neighborhoods, we provide expert appliance repair throughout Newmarket
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Historic & Downtown Areas */}
              <div className="bg-[#f5f5f7] rounded-3xl overflow-hidden shadow-sm transition-all hover:shadow-md">
                <div className="relative h-64">
                  <Image 
                    src="/images/newmarket-historic.webp"
                    alt="Historic Newmarket"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-medium text-gray-900 mb-2">Historic & Downtown Areas</h3>
                  <p className="text-gray-600">
                    We provide specialized service to Old Newmarket, Quaker Village, and Central Newmarket, with expertise in maintaining appliances in heritage homes while respecting their historic character and unique requirements.
                  </p>
                </div>
              </div>
              
              {/* Established Neighborhoods */}
              <div className="bg-[#f5f5f7] rounded-3xl overflow-hidden shadow-sm transition-all hover:shadow-md">
                <div className="relative h-64">
                  <Image 
                    src="/images/newmarket-established.webp"
                    alt="Established Newmarket Neighborhoods"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-medium text-gray-900 mb-2">Established Neighborhoods</h3>
                  <p className="text-gray-600">
                    Our technicians service Glenway, Armitage, Gorham, and other established communities, providing expert repairs for family homes in these well-developed residential areas of Newmarket.
                  </p>
                </div>
              </div>
              
              {/* Newer Developments */}
              <div className="bg-[#f5f5f7] rounded-3xl overflow-hidden shadow-sm transition-all hover:shadow-md">
                <div className="relative h-64">
                  <Image 
                    src="/images/newmarket-newer.webp"
                    alt="New Newmarket Developments"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-medium text-gray-900 mb-2">Newer Developments</h3>
                  <p className="text-gray-600">
                    We provide prompt, reliable service to Stonehaven, Copper Hills, Woodland Hills, and other newer neighborhoods, with technicians specially trained to work with smart appliances and high-efficiency systems in modern homes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our AreaServicesSection */}
      <AreaServicesSection 
        areaName="Newmarket"
        services={newmarketServices}
      />
      
      {/* Brand Slider Section */}
      <BrandsSliderSection
        title="Top Appliance Brands We Fix"
        subtitle="Our certified Newmarket technicians are experienced in repairing all major appliance brands"
        brands={newmarketBrands}
        locationName="Newmarket"
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
                    src={newmarketData.mapImage}
                    alt={`${newmarketData.name} Service Area Map`}
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
                <h3 className="text-3xl font-semibold text-[#1d1d1f] mb-6">Our {newmarketData.name} Coverage</h3>
                <p className="text-[#424245] mb-6 leading-relaxed">
                  {newmarketData.localInfo.applianceUsage}
                </p>
                <p className="text-[#424245] mb-8 leading-relaxed">
                  {newmarketData.localInfo.commonIssues}
                </p>
                
                <div className="bg-[#f5f5f7] rounded-2xl p-6 mb-8">
                  <h4 className="text-xl font-medium text-[#1d1d1f] mb-3">About Our {newmarketData.name} Service</h4>
                  <p className="text-[#424245]">
                    {newmarketData.localInfo.serviceNotes}
                  </p>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="bg-[#0071e3] rounded-full p-3">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="text-[#1d1d1f] font-medium">
                    {newmarketData.responseTime}
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <AppleTestimonialsSection
        title="What Our Newmarket Customers Say"
        subtitle="Read testimonials from satisfied customers across Newmarket neighborhoods"
        maxReviews={4}
      />

      {/* Neighborhoods Section */}
      <NeighborhoodSection 
        title={`${newmarketData.name} Neighborhoods We Serve`}
        description={`From historic downtown to modern developments, our technicians provide prompt, reliable service throughout ${newmarketData.name}.`}
        areas={neighborhoodAreas}
        mapImage={newmarketData.neighborhoodImage}
        companyName="JK"
        companyAddress={newmarketData.address.street}
      />
      
      {/* Coupon Section */}
      <CouponSection 
        title="Special Offers for Newmarket Residents"
        subtitle="Use these exclusive coupons for same-day appliance repair service in Newmarket"
        mainCoupons={[
          {
            amount: "25",
            type: "Repair",
            forCustomer: "New Customer Discount",
            code: "NM25",
            website: "jkappliancerepair.ca",
            phone: "647-560-8966",
            primaryColor: "#0071e3"
          },
          {
            amount: "15",
            type: "Repair",
            forCustomer: "For Returning Customers",
            code: "NMRETURN15",
            website: "jkappliancerepair.ca",
            phone: "647-560-8966",
            primaryColor: "#0071e3"
          },
          {
            amount: "30",
            type: "Repair",
            forCustomer: "Senior Customer Discount",
            code: "NMSENIOR30",
            website: "jkappliancerepair.ca",
            phone: "647-560-8966",
            primaryColor: "#0071e3"
          }
        ]}
        extraCoupons={[
          {
            amount: "35",
            type: "Refrigerator Repair",
            forCustomer: "Old Newmarket Residents",
            code: "NMOLD35",
            website: "jkappliancerepair.ca",
            phone: "647-560-8966",
            primaryColor: "#0071e3"
          },
          {
            amount: "25",
            type: "Washer Repair",
            forCustomer: "Stonehaven Residents",
            code: "NMSTONE25",
            website: "jkappliancerepair.ca",
            phone: "647-560-8966",
            primaryColor: "#0071e3"
          }
        ]}
      />
      
      {/* Blog Section */}
      <BlogSection 
        title="Appliance Tips for Newmarket Residents"
        subtitle="Helpful guides and maintenance tips specifically for Newmarket homeowners and residents"
        areaId="newmarket"
        showCategories={true}
        limit={3}
        viewAllLink={true}
      />
      
      {/* Booking Section */}
      <BookingSection />
    </div>
  );
} 