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

// Clarington area data
const claringtonData = {
  id: 'clarington',
  name: 'Clarington',
  fullName: 'Clarington, Ontario',
  description: 'From the historic communities of Bowmanville and Newcastle to the growing areas of Courtice and rural charm of Orono, our appliance repair technicians provide prompt service throughout Clarington with same-day appointments available.',
  heroImage: '/images/clarington-skyline.jpg',
  neighborhoodImage: '/images/clarington-map.jpg',
  mapImage: '/images/clarington.jpg',
  
  // Location information
  address: {
    street: '18 Yonge St',
    city: 'Toronto',
    province: 'ON',
    postalCode: 'M5E 1Z8',
  },
  
  // Service radius and coverage details
  serviceRadius: '25',
  responseTime: 'Same-day service available in most Clarington communities',
  
  // Neighborhoods and communities served
  neighborhoods: [
    'Bowmanville',
    'Courtice',
    'Newcastle',
    'Orono',
    'Hampton',
    'Newtonville',
    'Mitchell Corners',
    'Maple Grove',
    'Brownsville',
    'Enniskillen',
    'Leskard',
    'Haydon',
    'Burketon',
    'Darlington',
    'Kendal',
    'Port Darlington',
    'Port Granby',
    'Solina',
    'Tyrone',
    'Bond Head'
  ],
  
  // Most common services in this area
  popularServices: [
    {
      id: 'refrigerator-repair',
      name: 'Refrigerator Repair',
      image: '/images/services/refrigerator-repair.jpg',
      description: 'Expert refrigerator repair for all major brands in Clarington.'
    },
    {
      id: 'washer-repair',
      name: 'Washer Repair',
      image: '/images/services/washer-repair.jpg',
      description: 'Professional washing machine repairs for homes throughout Clarington.'
    },
    {
      id: 'dryer-repair',
      name: 'Dryer Repair',
      image: '/images/services/dryer-repair.jpg',
      description: 'Fast, reliable dryer repair services throughout Clarington.'
    },
    {
      id: 'dishwasher-repair',
      name: 'Dishwasher Repair',
      image: '/images/services/dishwasher-repair.jpg',
      description: 'Expert dishwasher technicians serving the Clarington area.'
    }
  ],
  
  // Recent projects in this area
  recentProjects: [
    {
      title: 'Heritage Home Appliance Update',
      location: 'Newcastle, Clarington',
      description: 'Complete kitchen appliance renovation in a historic home while preserving the traditional aesthetic.',
      image: '/images/projects/clarington-heritage.jpg'
    },
    {
      title: 'New Development Installation',
      location: 'Courtice, Clarington',
      description: 'Appliance installation package for a new housing development in growing Courtice area.',
      image: '/images/projects/clarington-development.jpg'
    },
    {
      title: 'Restaurant Equipment Service',
      location: 'Bowmanville, Clarington',
      description: 'Commercial kitchen equipment repair and maintenance for downtown Bowmanville restaurants.',
      image: '/images/projects/clarington-restaurant.jpg'
    }
  ],
  
  // Testimonials specific to this area
  testimonials: [
    {
      text: "JK Appliance fixed our refrigerator after another company couldn't figure out the problem. They were punctual, professional, and got it working perfectly. Will definitely use them again!",
      author: "Thomas R.",
      location: "Bowmanville, Clarington",
      rating: 5
    },
    {
      text: "As a new homeowner in Courtice, I was stressed when my washing machine broke down. JK Appliance came the same day, identified the issue quickly, and had it fixed within an hour. Fantastic service!",
      author: "Lisa M.",
      location: "Courtice, Clarington",
      rating: 5
    },
    {
      text: "Living in Newcastle, it can sometimes be hard to get prompt service. JK Appliance was at our home within hours of calling to fix our dishwasher. Very impressed with their knowledge and efficiency.",
      author: "James K.",
      location: "Newcastle, Clarington",
      rating: 5
    }
  ],
  
  // Local information - tailored for Clarington
  localInfo: {
    applianceUsage: "Clarington residents live in a mix of historic homes in established communities like Bowmanville and Newcastle, newer developments in Courtice, and rural properties in areas like Orono. This diverse housing stock requires versatility in appliance repair expertise.",
    commonIssues: "In Clarington, we frequently service a combination of newer high-efficiency appliances in growing communities like Courtice, alongside older models in established homes in Bowmanville, Newcastle, and rural areas. Each community presents unique repair challenges that our technicians are prepared to handle.",
    serviceNotes: "Our Clarington technicians are familiar with all areas from urban centers to rural properties. We maintain inventory specifically for the most common brands and models found in Clarington homes, ensuring faster service and repairs throughout the municipality."
  }
};

// Sample services data for Clarington
const claringtonServices: AreaServiceItem[] = [
  {
    id: 'refrigerator-repair',
    name: 'Refrigerator Repair',
    image: '/images/services/refrigerator-repair.jpg',
    description: 'Our Clarington refrigerator repair technicians can fix all brands and models of refrigerators. From cooling issues to ice maker problems, our experts can diagnose and repair your refrigerator quickly and efficiently. We service all Clarington communities with same-day appointments available.',
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
    description: 'Our washer repair services in Clarington cover all major brands and models. Whether your washing machine is leaking, not spinning, or making unusual noises, our skilled technicians can identify the problem and provide efficient, long-lasting repairs right in your Clarington home.',
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
    description: 'When your dryer stops working properly in Clarington, our expert technicians are just a call away. We repair all types of dryers including gas and electric models. From heating issues to strange noises, our Clarington team can solve your dryer problems quickly and effectively.',
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
    description: 'Our Clarington dishwasher repair services cover all brands and models. We fix common issues like poor cleaning performance, leaking, and drainage problems. Our experienced technicians provide fast, reliable dishwasher repairs throughout Clarington, often on the same day you call.',
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
    description: 'For oven and stove repairs in Clarington, our technicians are experienced with all types including gas, electric, and induction. Whether your oven isn\'t heating properly or your stove burners won\'t light, we provide expert diagnoses and repairs throughout the Clarington area.',
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

// Brand data for Clarington
const claringtonBrands: BrandItem[] = [
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

// Testimonials specific to Clarington
const claringtonTestimonials: TestimonialItem[] = [
  {
    name: "Thomas R.",
    location: "Bowmanville, Clarington",
    rating: 5,
    text: "JK Appliance fixed our refrigerator after another company couldn't figure out the problem. They were punctual, professional, and got it working perfectly. Will definitely use them again!",
    date: "May 2023"
  },
  {
    name: "Lisa M.",
    location: "Courtice, Clarington",
    rating: 5,
    text: "As a new homeowner in Courtice, I was stressed when my washing machine broke down. JK Appliance came the same day, identified the issue quickly, and had it fixed within an hour. Fantastic service!",
    date: "March 2023"
  },
  {
    name: "James K.",
    location: "Newcastle, Clarington",
    rating: 5,
    text: "Living in Newcastle, it can sometimes be hard to get prompt service. JK Appliance was at our home within hours of calling to fix our dishwasher. Very impressed with their knowledge and efficiency.",
    date: "April 2023"
  },
  {
    name: "Margaret P.",
    location: "Orono, Clarington",
    rating: 5,
    text: "Even though we're in a more rural part of Clarington, JK Appliance showed up right on time to repair our oven. The technician was courteous, knowledgeable, and fixed the issue for a reasonable price.",
    date: "June 2023"
  }
];

// Custom Clarington page that includes both the standard sections and our area services section
export default function ClaringtonAreaPage() {
  // Convert string neighborhoods to AreaData format for NeighborhoodSection
  const neighborhoodAreas: AreaData[] = claringtonData.neighborhoods.map((name, index) => ({
    id: `${claringtonData.id}-neighborhood-${index}`,
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
                Appliance Repair in {claringtonData.name}
              </h1>
              <p className="text-xl sm:text-2xl text-gray-500 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
                Fast, reliable appliance repair services throughout {claringtonData.name} with same-day service available. Serving Bowmanville, Courtice, Newcastle, Orono and all communities in the {claringtonData.fullName} area.
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
                  src={claringtonData.heroImage}
                  alt={`${claringtonData.name} Appliances`}
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
      <ServicesSectionArea areaName={claringtonData.name} />
      
      {/* Communities Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-semibold text-gray-900 mb-4">
                Serving All Clarington Communities
              </h2>
              <p className="text-xl text-gray-500 max-w-3xl mx-auto">
                From urban centers to rural properties, we provide expert appliance repair throughout Clarington
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Bowmanville */}
              <div className="bg-[#f5f5f7] rounded-3xl overflow-hidden shadow-sm transition-all hover:shadow-md">
                <div className="relative h-64">
                  <Image 
                    src="/images/clarington-bowmanville.jpg"
                    alt="Bowmanville, Clarington"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-medium text-gray-900 mb-2">Bowmanville</h3>
                  <p className="text-gray-600">
                    As Clarington's largest community, we provide appliance repair throughout Bowmanville's historic downtown and residential neighborhoods. From traditional homes to new developments, our technicians service all appliance brands and models.
                  </p>
                </div>
              </div>
              
              {/* Courtice */}
              <div className="bg-[#f5f5f7] rounded-3xl overflow-hidden shadow-sm transition-all hover:shadow-md">
                <div className="relative h-64">
                  <Image 
                    src="/images/clarington-courtice.jpg"
                    alt="Courtice, Clarington"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-medium text-gray-900 mb-2">Courtice</h3>
                  <p className="text-gray-600">
                    Rapid growth in Courtice has brought many new homes with modern appliances. Our technicians are experts in the latest models and smart technology, providing prompt service to all Courtice neighborhoods.
                  </p>
                </div>
              </div>
              
              {/* Newcastle */}
              <div className="bg-[#f5f5f7] rounded-3xl overflow-hidden shadow-sm transition-all hover:shadow-md">
                <div className="relative h-64">
                  <Image 
                    src="/images/clarington-newcastle.jpg"
                    alt="Newcastle, Clarington"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-medium text-gray-900 mb-2">Newcastle</h3>
                  <p className="text-gray-600">
                    Newcastle's historic charm comes with unique appliance needs. Our technicians understand the challenges of heritage homes and can service both vintage and modern appliances throughout Newcastle and surrounding areas.
                  </p>
                </div>
              </div>
              
              {/* Orono */}
              <div className="bg-[#f5f5f7] rounded-3xl overflow-hidden shadow-sm transition-all hover:shadow-md">
                <div className="relative h-64">
                  <Image 
                    src="/images/clarington-orono.jpg"
                    alt="Orono, Clarington"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-medium text-gray-900 mb-2">Orono</h3>
                  <p className="text-gray-600">
                    Despite its rural setting, Orono residents receive the same prompt, reliable service as urban areas. Our technicians travel throughout Orono and surrounding rural communities to provide expert appliance repair when you need it.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our new AreaServicesSection */}
      <AreaServicesSection 
        areaName="Clarington"
        services={claringtonServices}
      />
      
      {/* Brand Slider Section */}
      <BrandsSliderSection
        title="Top Appliance Brands We Fix"
        subtitle="Our certified Clarington technicians are experienced in repairing all major appliance brands"
        brands={claringtonBrands}
        locationName="Clarington"
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
                    src={claringtonData.mapImage}
                    alt={`${claringtonData.name} Service Area Map`}
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
                <h3 className="text-3xl font-semibold text-[#1d1d1f] mb-6">Our {claringtonData.name} Coverage</h3>
                <p className="text-[#424245] mb-6 leading-relaxed">
                  {claringtonData.localInfo.applianceUsage}
                </p>
                <p className="text-[#424245] mb-8 leading-relaxed">
                  {claringtonData.localInfo.commonIssues}
                </p>
                
                <div className="bg-[#f5f5f7] rounded-2xl p-6 mb-8">
                  <h4 className="text-xl font-medium text-[#1d1d1f] mb-3">About Our {claringtonData.name} Service</h4>
                  <p className="text-[#424245]">
                    {claringtonData.localInfo.serviceNotes}
                  </p>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="bg-[#0071e3] rounded-full p-3">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="text-[#1d1d1f] font-medium">
                    {claringtonData.responseTime}
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <TestimonialsSection 
        title="What Our Clarington Customers Say"
        subtitle="Read testimonials from satisfied customers across Clarington communities"
        testimonials={claringtonTestimonials}
      />

      {/* Neighborhoods Section */}
      <NeighborhoodSection 
        title={`${claringtonData.name} Communities We Serve`}
        description={`From urban centers to rural areas, our technicians provide prompt, reliable service throughout ${claringtonData.name}.`}
        areas={neighborhoodAreas}
        mapImage={claringtonData.neighborhoodImage}
        companyName="JK"
        companyAddress={claringtonData.address.street}
      />
      
      {/* Coupon Section */}
      <CouponSection 
        title="Special Offers for Clarington Residents"
        subtitle="Use these exclusive coupons for same-day appliance repair service in Clarington"
        mainCoupons={[
          {
            amount: "25",
            type: "Repair",
            forCustomer: "New Customer Discount",
            code: "CL25",
            website: "jkappliancerepair.ca",
            phone: "647-560-8966",
            primaryColor: "#0071e3"
          },
          {
            amount: "15",
            type: "Repair",
            forCustomer: "For Returning Customers",
            code: "CLRETURN15",
            website: "jkappliancerepair.ca",
            phone: "647-560-8966",
            primaryColor: "#0071e3"
          },
          {
            amount: "30",
            type: "Repair",
            forCustomer: "Senior Customer Discount",
            code: "CLSENIOR30",
            website: "jkappliancerepair.ca",
            phone: "647-560-8966",
            primaryColor: "#0071e3"
          }
        ]}
        extraCoupons={[
          {
            amount: "35",
            type: "Refrigerator Repair",
            forCustomer: "Bowmanville Residents",
            code: "CLBOWL35",
            website: "jkappliancerepair.ca",
            phone: "647-560-8966",
            primaryColor: "#0071e3"
          },
          {
            amount: "25",
            type: "Washer Repair",
            forCustomer: "Courtice Residents",
            code: "CLCOURT25",
            website: "jkappliancerepair.ca",
            phone: "647-560-8966",
            primaryColor: "#0071e3"
          }
        ]}
      />
      
      {/* Blog Section */}
      <BlogSection 
        title="Appliance Tips for Clarington Residents"
        subtitle="Helpful guides and maintenance tips specifically for Clarington homeowners and residents"
        areaId="clarington"
        showCategories={true}
        limit={3}
        viewAllLink={true}
      />
      
      {/* Booking Section */}
      <BookingSection />
    </div>
  );
} 