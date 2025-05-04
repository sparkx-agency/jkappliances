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

// Mississauga area data
const mississaugaData = {
  id: 'mississauga',
  name: 'Mississauga',
  fullName: 'Mississauga, Ontario',
  description: 'From lakefront homes to urban condos, our appliance repair technicians provide prompt service throughout Mississauga with same-day appointments available.',
  heroImage: '/images/mississauga-skyline.webp',
  neighborhoodImage: '/images/mississauga-map.webp',
  mapImage: '/images/mississauga.webp',
  
  // Location information
  address: {
    street: '18 Yonge St',
    city: 'Toronto',
    province: 'ON',
    postalCode: 'M5E 1Z8',
  },
  
  // Service radius and coverage details
  serviceRadius: '25',
  responseTime: 'Same-day service available in most Mississauga neighborhoods',
  
  // Neighborhoods served
  neighborhoods: [
    'Port Credit',
    'Clarkson',
    'Lorne Park',
    'Erin Mills',
    'Central Erin Mills',
    'Meadowvale',
    'Streetsville',
    'Lisgar',
    'Churchill Meadows',
    'Hurontario',
    'City Centre',
    'Cooksville',
    'Mississauga Valley',
    'Fairview',
    'Applewood',
    'Rathwood',
    'Creditview',
    'Malton',
    'East Credit',
    'Lakeview',
    'Sheridan',
    'Dixie'
  ],
  
  // Most common services in this area
  popularServices: [
    {
      id: 'refrigerator-repair',
      name: 'Refrigerator Repair',
      image: '/images/services/refrigerator-repair.webp',
      description: 'Expert refrigerator repair for all major brands in Mississauga.'
    },
    {
      id: 'washer-repair',
      name: 'Washer Repair',
      image: '/images/services/washer-repair.webp',
      description: 'Professional washing machine repairs for condos and homes throughout Mississauga.'
    },
    {
      id: 'dryer-repair',
      name: 'Dryer Repair',
      image: '/images/services/dryer-repair.webp',
      description: 'Fast, reliable dryer repair services throughout Mississauga.'
    },
    {
      id: 'dishwasher-repair',
      name: 'Dishwasher Repair',
      image: '/images/services/dishwasher-repair.webp',
      description: 'Expert dishwasher technicians serving the Mississauga area.'
    }
  ],
  
  // Recent projects in this area
  recentProjects: [
    {
      title: 'Square One Condo Complex Service',
      location: 'City Centre, Mississauga',
      description: 'Regular maintenance program for appliances in multiple high-rise condo buildings near Square One Shopping Centre.',
      image: '/images/projects/mississauga-condo.webp'
    },
    {
      title: 'Restaurant Equipment Installation',
      location: 'Port Credit, Mississauga',
      description: 'Commercial kitchen equipment installation for waterfront restaurants in the Port Credit area.',
      image: '/images/projects/mississauga-restaurant.webp'
    },
    {
      title: 'Multi-Unit Property Maintenance',
      location: 'Erin Mills, Mississauga',
      description: 'Ongoing appliance service contract for a residential property management company with multiple buildings.',
      image: '/images/projects/mississauga-property.webp'
    }
  ],
  
  // Testimonials specific to this area
  testimonials: [
    {
      text: "JK Appliance technicians arrived on time and fixed our washing machine on the first visit. Extremely professional and knowledgeable.",
      author: "Jennifer P.",
      location: "Port Credit, Mississauga",
      rating: 5
    },
    {
      text: "We've used JK for all our appliance repairs since moving to Mississauga. Their service is consistently excellent and their pricing transparent.",
      author: "Robert M.",
      location: "Meadowvale, Mississauga",
      rating: 5
    },
    {
      text: "When our refrigerator stopped working during a heatwave, JK came the same day and had it running perfectly by evening. Lifesavers!",
      author: "Samantha K.",
      location: "City Centre, Mississauga",
      rating: 5
    }
  ],
  
  // Local information - tailored for Mississauga
  localInfo: {
    applianceUsage: "Mississauga residents own a diverse range of appliances, from high-end smart appliances in luxury condos near Square One to family-sized units in suburban neighborhoods like Erin Mills and Meadowvale.",
    commonIssues: "In Mississauga, we frequently service issues with refrigerator cooling systems, especially in waterfront areas like Port Credit where humidity can be a factor. Condo residents often require specialized dishwasher and compact appliance repairs.",
    serviceNotes: "Our Mississauga technicians are familiar with the various building types across the city, from high-rise condos to detached homes, and maintain specialized equipment for both residential and commercial appliance service."
  }
};

// Sample services data for Mississauga
const mississaugaServices: AreaServiceItem[] = [
  {
    id: 'refrigerator-repair',
    name: 'Refrigerator Repair',
    image: '/images/services/refrigerator-repair.webp',
    description: 'Our Mississauga refrigerator repair technicians can fix all brands and models of refrigerators. From cooling issues to ice maker problems, our experts can diagnose and repair your refrigerator quickly and efficiently. We service all Mississauga neighborhoods with same-day appointments available.',
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
    description: 'Our washer repair services in Mississauga cover all major brands and models. Whether your washing machine is leaking, not spinning, or making unusual noises, our skilled technicians can identify the problem and provide efficient, long-lasting repairs right in your Mississauga home.',
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
    description: 'When your dryer stops working properly in Mississauga, our expert technicians are just a call away. We repair all types of dryers including gas and electric models. From heating issues to strange noises, our Mississauga team can solve your dryer problems quickly and effectively.',
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
    description: 'Our Mississauga dishwasher repair services cover all brands and models. We fix common issues like poor cleaning performance, leaking, and drainage problems. Our experienced technicians provide fast, reliable dishwasher repairs throughout Mississauga, often on the same day you call.',
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
    description: 'For oven and stove repairs in Mississauga, our technicians are experienced with all types including gas, electric, and induction. Whether your oven isn\'t heating properly or your stove burners won\'t light, we provide expert diagnoses and repairs throughout the Mississauga area.',
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

// Brand data for Mississauga
const mississaugaBrands: BrandItem[] = [
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

// Custom Mississauga page that includes both the standard sections and our new area services section
export default function MississaugaAreaPage() {
  // Convert string neighborhoods to AreaData format for NeighborhoodSection
  const neighborhoodAreas: AreaData[] = mississaugaData.neighborhoods.map((name, index) => ({
    id: `${mississaugaData.id}-neighborhood-${index}`,
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
                Appliance Repair in {mississaugaData.name}
              </h1>
              <p className="text-xl sm:text-2xl text-gray-500 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
                Fast, reliable appliance repair services throughout {mississaugaData.name} with same-day service available. Serving all neighborhoods in the {mississaugaData.fullName} area.
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
                  src={mississaugaData.heroImage}
                  alt={`${mississaugaData.name} Appliances`}
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
      <ServicesSectionArea areaName={mississaugaData.name} />
      
      {/* Our new AreaServicesSection */}
      <AreaServicesSection 
        areaName="Mississauga"
        services={mississaugaServices}
      />
      
      {/* Brand Slider Section */}
      <BrandsSliderSection
        title="Top Appliance Brands We Fix"
        subtitle="Our certified Mississauga technicians are experienced in repairing all major appliance brands"
        brands={mississaugaBrands}
        locationName="Mississauga"
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
                    src={mississaugaData.mapImage}
                    alt={`${mississaugaData.name} Service Area Map`}
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
                <h3 className="text-3xl font-semibold text-[#1d1d1f] mb-6">Our {mississaugaData.name} Coverage</h3>
                <p className="text-[#424245] mb-6 leading-relaxed">
                  {mississaugaData.localInfo.applianceUsage}
                </p>
                <p className="text-[#424245] mb-8 leading-relaxed">
                  {mississaugaData.localInfo.commonIssues}
                </p>
                
                <div className="bg-[#f5f5f7] rounded-2xl p-6 mb-8">
                  <h4 className="text-xl font-medium text-[#1d1d1f] mb-3">About Our {mississaugaData.name} Service</h4>
                  <p className="text-[#424245]">
                    {mississaugaData.localInfo.serviceNotes}
                  </p>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="bg-[#0071e3] rounded-full p-3">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="text-[#1d1d1f] font-medium">
                    {mississaugaData.responseTime}
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      

      {/* Neighborhoods Section */}
      <NeighborhoodSection 
        title={`${mississaugaData.name} Neighborhoods We Serve`}
        description={`From urban centers to suburban communities, our technicians provide prompt, reliable service throughout ${mississaugaData.name}.`}
        areas={neighborhoodAreas}
        mapImage={mississaugaData.neighborhoodImage}
        companyName="JK"
        companyAddress={mississaugaData.address.street}
      />
      
      {/* Coupon Section */}
      <CouponSection 
        title="Special Offers for Mississauga Residents"
        subtitle="Use these exclusive coupons for same-day appliance repair service in Mississauga"
        mainCoupons={[
          {
            amount: "30",
            type: "Repair",
            forCustomer: "New Customer Discount",
            code: "MSNEW30",
            website: "jkappliancerepair.ca",
            phone: "647-560-8966",
            primaryColor: "#0071e3"
          },
          {
            amount: "15",
            type: "Repair",
            forCustomer: "For Returning Customers",
            code: "MSRETURN15",
            website: "jkappliancerepair.ca",
            phone: "647-560-8966",
            primaryColor: "#0071e3"
          },
          {
            amount: "30",
            type: "Repair",
            forCustomer: "Senior Customer Discount",
            code: "MSSENIOR30",
            website: "jkappliancerepair.ca",
            phone: "647-560-8966",
            primaryColor: "#0071e3"
          }
        ]}
        extraCoupons={[
          {
            amount: "35",
            type: "Refrigerator Repair",
            forCustomer: "For Square One Area",
            code: "MSFRIDGE35",
            website: "jkappliancerepair.ca",
            phone: "647-560-8966",
            primaryColor: "#0071e3"
          },
          {
            amount: "25",
            type: "Washer Repair",
            forCustomer: "Port Credit Residents",
            code: "MSWASH25",
            website: "jkappliancerepair.ca",
            phone: "647-560-8966",
            primaryColor: "#0071e3"
          }
        ]}
      />
      
      {/* Blog Section */}
      <BlogSection 
        title="Appliance Tips for Mississauga Residents"
        subtitle="Helpful guides and maintenance tips specifically for Mississauga homeowners and residents"
        areaId="mississauga"
        showCategories={true}
        limit={3}
        viewAllLink={true}
      />
      
      {/* Booking Section */}
      <BookingSection />
    </div>
  );
} 