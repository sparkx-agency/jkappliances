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

// Brampton area data
const bramptonData = {
  id: 'brampton',
  name: 'Brampton',
  fullName: 'Brampton, Ontario',
  description: 'From new suburban developments to established neighborhoods, our appliance repair technicians provide prompt service throughout Brampton with same-day appointments available.',
  heroImage: '/images/brampton-skyline.jpg',
  neighborhoodImage: '/images/brampton-map.jpg',
  mapImage: '/images/brampton.jpg',
  
  // Location information
  address: {
    street: '18 Yonge St',
    city: 'Toronto',
    province: 'ON',
    postalCode: 'M5E 1Z8',
  },
  
  // Service radius and coverage details
  serviceRadius: '20',
  responseTime: 'Same-day service available in most Brampton neighborhoods',
  
  // Neighborhoods served
  neighborhoods: [
    'Bramalea',
    'Heart Lake', 
    'Mount Pleasant',
    'Downtown Brampton',
    'Springdale',
    'Northgate',
    'Westgate',
    'Southgate',
    'Madoc',
    'Fletchers Creek',
    'Sandalwood',
    'Snelgrove',
    'Castlemore',
    'Goreway Drive',
    'Brampton East',
    'Brampton West',
    'Brampton North',
    'Peel Village',
    'Churchville',
    'Credit Valley',
    'Bram West',
    'Bram East'
  ],
  
  // Most common services in this area
  popularServices: [
    {
      id: 'refrigerator-repair',
      name: 'Refrigerator Repair',
      image: '/images/services/refrigerator-repair.jpg',
      description: 'Expert refrigerator repair for all major brands in Brampton.'
    },
    {
      id: 'washer-repair',
      name: 'Washer Repair',
      image: '/images/services/washer-repair.jpg',
      description: 'Professional washing machine repairs for homes throughout Brampton.'
    },
    {
      id: 'dryer-repair',
      name: 'Dryer Repair',
      image: '/images/services/dryer-repair.jpg',
      description: 'Fast, reliable dryer repair services throughout Brampton.'
    },
    {
      id: 'dishwasher-repair',
      name: 'Dishwasher Repair',
      image: '/images/services/dishwasher-repair.jpg',
      description: 'Expert dishwasher technicians serving the Brampton area.'
    }
  ],
  
  // Recent projects in this area
  recentProjects: [
    {
      title: 'New Development Installation',
      location: 'Mount Pleasant, Brampton',
      description: 'Installation of premium appliances for a new housing development with efficient setup and service.',
      image: '/images/projects/brampton-development.jpg'
    },
    {
      title: 'Commercial Kitchen Retrofit',
      location: 'Downtown Brampton',
      description: 'Complete retrofit of commercial kitchen equipment for a restaurant in the downtown core.',
      image: '/images/projects/brampton-commercial.jpg'
    },
    {
      title: 'Community Center Equipment',
      location: 'Bramalea, Brampton',
      description: 'Maintenance and repair program for appliances at a community center serving Brampton residents.',
      image: '/images/projects/brampton-community.jpg'
    }
  ],
  
  // Testimonials specific to this area
  testimonials: [
    {
      text: "The technician came to our house in Brampton within hours of our call and fixed our fridge quickly. Outstanding service!",
      author: "Rajiv S.",
      location: "Springdale, Brampton",
      rating: 5
    },
    {
      text: "I've had JK repair three different appliances in our home, and each time they've been professional, on-time, and effective.",
      author: "Allison T.",
      location: "Mount Pleasant, Brampton",
      rating: 5
    },
    {
      text: "When our dishwasher broke right before a family gathering, JK came the same day and saved our event. Highly recommend!",
      author: "Miguel C.",
      location: "Downtown Brampton",
      rating: 5
    }
  ],
  
  // Local information - tailored for Brampton
  localInfo: {
    applianceUsage: "Brampton's growing population means many homes have newer appliances, particularly in areas like Mount Pleasant and Springdale. Families in Brampton typically have larger capacity appliances to meet household needs.",
    commonIssues: "In Brampton, we often address issues with high-usage family appliances including large-capacity washers and refrigerators. The city's newer developments sometimes experience installation-related problems that require professional adjustment.",
    serviceNotes: "Our Brampton technicians are familiar with the various neighborhoods across the city and can provide quick service to both newly built communities and established areas. We maintain specialized inventory for the brands most common in Brampton homes."
  }
};

// Sample services data for Brampton
const bramptonServices: AreaServiceItem[] = [
  {
    id: 'refrigerator-repair',
    name: 'Refrigerator Repair',
    image: '/images/services/refrigerator-repair.jpg',
    description: 'Our Brampton refrigerator repair technicians can fix all brands and models of refrigerators. From cooling issues to ice maker problems, our experts can diagnose and repair your refrigerator quickly and efficiently. We service all Brampton neighborhoods with same-day appointments available.',
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
    description: 'Our washer repair services in Brampton cover all major brands and models. Whether your washing machine is leaking, not spinning, or making unusual noises, our skilled technicians can identify the problem and provide efficient, long-lasting repairs right in your Brampton home.',
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
    description: 'When your dryer stops working properly in Brampton, our expert technicians are just a call away. We repair all types of dryers including gas and electric models. From heating issues to strange noises, our Brampton team can solve your dryer problems quickly and effectively.',
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
    description: 'Our Brampton dishwasher repair services cover all brands and models. We fix common issues like poor cleaning performance, leaking, and drainage problems. Our experienced technicians provide fast, reliable dishwasher repairs throughout Brampton, often on the same day you call.',
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
    description: 'For oven and stove repairs in Brampton, our technicians are experienced with all types including gas, electric, and induction. Whether your oven isn\'t heating properly or your stove burners won\'t light, we provide expert diagnoses and repairs throughout the Brampton area.',
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

// Brand data for Brampton
const bramptonBrands: BrandItem[] = [
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

// Custom Brampton page that includes both the standard sections and our new area services section
export default function BramptonAreaPage() {
  // Convert string neighborhoods to AreaData format for NeighborhoodSection
  const neighborhoodAreas: AreaData[] = bramptonData.neighborhoods.map((name, index) => ({
    id: `${bramptonData.id}-neighborhood-${index}`,
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
                Appliance Repair in {bramptonData.name}
              </h1>
              <p className="text-xl sm:text-2xl text-gray-500 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
                Fast, reliable appliance repair services throughout {bramptonData.name} with same-day service available. Serving all neighborhoods in the {bramptonData.fullName} area.
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
                  src={bramptonData.heroImage}
                  alt={`${bramptonData.name} Appliances`}
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
      <ServicesSectionArea areaName={bramptonData.name} />
      
      {/* Our new AreaServicesSection */}
      <AreaServicesSection 
        areaName="Brampton"
        services={bramptonServices}
      />
      
      {/* Brand Slider Section */}
      <BrandsSliderSection
        title="Top Appliance Brands We Fix"
        subtitle="Our certified Brampton technicians are experienced in repairing all major appliance brands"
        brands={bramptonBrands}
        locationName="Brampton"
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
                    src={bramptonData.mapImage}
                    alt={`${bramptonData.name} Service Area Map`}
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
                <h3 className="text-3xl font-semibold text-[#1d1d1f] mb-6">Our {bramptonData.name} Coverage</h3>
                <p className="text-[#424245] mb-6 leading-relaxed">
                  {bramptonData.localInfo.applianceUsage}
                </p>
                <p className="text-[#424245] mb-8 leading-relaxed">
                  {bramptonData.localInfo.commonIssues}
                </p>
                
                <div className="bg-[#f5f5f7] rounded-2xl p-6 mb-8">
                  <h4 className="text-xl font-medium text-[#1d1d1f] mb-3">About Our {bramptonData.name} Service</h4>
                  <p className="text-[#424245]">
                    {bramptonData.localInfo.serviceNotes}
                  </p>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="bg-[#0071e3] rounded-full p-3">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="text-[#1d1d1f] font-medium">
                    {bramptonData.responseTime}
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      

      {/* Neighborhoods Section */}
      <NeighborhoodSection 
        title={`${bramptonData.name} Neighborhoods We Serve`}
        description={`From newer developments to established communities, our technicians provide prompt, reliable service throughout ${bramptonData.name}.`}
        areas={neighborhoodAreas}
        mapImage={bramptonData.neighborhoodImage}
        companyName="JK"
        companyAddress={bramptonData.address.street}
      />
      
      {/* Coupon Section */}
      <CouponSection 
        title="Special Offers for Brampton Residents"
        subtitle="Use these exclusive coupons for same-day appliance repair service in Brampton"
        mainCoupons={[
          {
            amount: "30",
            type: "Repair",
            forCustomer: "New Customer Discount",
            code: "BRNEW30",
            website: "jkappliancerepair.ca",
            phone: "647-560-8966",
            primaryColor: "#0071e3"
          },
          {
            amount: "15",
            type: "Repair",
            forCustomer: "For Returning Customers",
            code: "BRRETURN15",
            website: "jkappliancerepair.ca",
            phone: "647-560-8966",
            primaryColor: "#0071e3"
          },
          {
            amount: "30",
            type: "Repair",
            forCustomer: "Senior Customer Discount",
            code: "BRSENIOR30",
            website: "jkappliancerepair.ca",
            phone: "647-560-8966",
            primaryColor: "#0071e3"
          }
        ]}
        extraCoupons={[
          {
            amount: "35",
            type: "Refrigerator Repair",
            forCustomer: "For Mount Pleasant Area",
            code: "BRFRIDGE35",
            website: "jkappliancerepair.ca",
            phone: "647-560-8966",
            primaryColor: "#0071e3"
          },
          {
            amount: "25",
            type: "Washer Repair",
            forCustomer: "Springdale Residents",
            code: "BRWASH25",
            website: "jkappliancerepair.ca",
            phone: "647-560-8966",
            primaryColor: "#0071e3"
          }
        ]}
      />
      
      {/* Blog Section */}
      <BlogSection 
        title="Appliance Tips for Brampton Residents"
        subtitle="Helpful guides and maintenance tips specifically for Brampton homeowners and residents"
        areaId="brampton"
        showCategories={true}
        limit={3}
        viewAllLink={true}
      />
      
      {/* Booking Section */}
      <BookingSection />
    </div>
  );
} 