"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import ModernCTASection from '@/components/sections/common/ModernCTASection';
import TestimonialsSliderSection from '@/components/sections/common/TestimonialsSliderSection';

// Placeholder data for new sections, to be filled with actual content or props
const companyStats = [
  { label: "Since", value: "1997", description: "We Work From" },
  { label: "Over", value: "500+", description: "Technicians" },
  { label: "Serving", value: "200+", description: "Cities in Canada" },
  { label: "Customer Satisfaction", value: "92%", description: "Recommended by Customers" },
  { label: "Served Over", value: "610,000+", description: "Satisfied Customers" }
];

const companyAdvantages = [
  { title: "Same-Day Service", description: "We provide fast, reliable appliance repair service, ensuring your appliances are up and running the day you call us.", icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> },
  { title: "Emergency Repair", description: "We are available 24/7 for urgent appliance issues. No matter the time, we've got you covered.", icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" /></svg> },
  { title: "Customer Satisfaction", description: "Our top priority is your satisfaction with our repair services. We listen attentively and tailor our services to your needs.", icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" /></svg> },
  { title: "Affordable Pricing", description: "We offer clear, upfront pricing and free estimates for all our services. No hidden costs for your appliance repairs.", icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 01-.75.75h-.75m-6-1.5H4.5m0 0l-3-3m3 3l3-3" /></svg> },
  { title: "Warranty on Parts & Labor", description: "Rest assured with our service guarantee. You can enjoy peace of mind knowing your appliances are in good hands.", icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" /></svg> },
  { title: "Licensed Technicians", description: "Our certified and experienced professionals are always ready to assist you with your appliance repair needs.", icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 9V5.25A2.25 2.25 0 0012.75 3h-3.75A2.25 2.25 0 006.75 5.25V9m6 0v4.5m0-4.5l-2.25-2.25M15 9l2.25-2.25m0 0l2.25 2.25M17.25 6.75v4.5m0 0l-2.25 2.25M17.25 11.25l2.25 2.25M4.5 9.75v10.125a2.25 2.25 0 002.25 2.25h9.375a2.25 2.25 0 002.25-2.25V9.75L12 15.75l-7.5-6z" /></svg> },
];

const servicesOffered = [
  "Refrigerator & Freezer Repair",
  "Washing Machine Repair",
  "Dryer Repair",
  "Oven Repair",
  "Stove Repair",
  "Dishwasher Repair",
  "Appliance Installation",
  "Appliance Maintenance"
];

export default function AboutUsPage() {
  return (
    <div className="bg-[#f5f5f7] pt-24">
      {/* Hero Section - About Us */}
      <section className="bg-white pt-16 pb-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h1 className="text-5xl md:text-6xl font-semibold text-[#1d1d1f] mb-8 tracking-tight">
                About Us
              </h1>
              <p className="text-xl text-[#424245] mb-6 leading-relaxed">
                JK Appliance Repair provides expert home care for household and commercial customers. We repair, service, and install appliances of any brand and model. Our company has proudly served our communities with integrity and professionalism since 2015.
              </p>
              <div className="space-y-4 text-[#424245] mb-8">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                  <p><span className="font-semibold">100% Transparent:</span> No extra surprise bills for "additional services". You'll always know the restoration cost upfront.</p>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                  <p><span className="font-semibold">Personal Approach:</span> Our call center is available 24/7 to stay in touch with customers at all times.</p>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                  <p><span className="font-semibold">Guaranteed Quality:</span> We stand by the real results of our work. Every repair comes with a comprehensive warranty.</p>
                </div>
              </div>
              {/* Placeholder for Google/HomeStars ratings */}
              <div className="flex space-x-8 items-center">
                <div>
                  <p className="text-sm text-gray-500">Google Reviews</p>
                  <p className="text-lg font-semibold text-[#1d1d1f]">4.8 Stars (150+ Reviews)</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">HomeStars</p>
                  <p className="text-lg font-semibold text-[#1d1d1f]">95% Score (370+ Reviews)</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-lg">
                <Image
                  src="/images/about.jpg" // Using existing hero image, can be changed to a more generic team photo
                  alt="JK Appliance Repair Team Meeting"
                  width={600}
                  height={450}
                  priority
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Our Story Section */}
      <section className="py-24 bg-[#f5f5f7]">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-4xl font-semibold text-[#1d1d1f] mb-6">Our Story</h2>
            <p className="text-lg text-[#424245] max-w-3xl mx-auto leading-relaxed mb-8">
              JK Appliance Repair is your guarantee of efficient appliance operation. To make your experience even more pleasant, our call center is available 24/7 to assist you in an emergency. Schedule an appointment, and our expert technicians will be at your doorstep promptly. We have also developed an extensive system of discounts and special offers, making JK Appliance Repair your trusted partner in any circumstance.
            </p>
            {/* Placeholder for a general team image */}
            <div className="aspect-[16/9] md:aspect-[2/1] rounded-2xl overflow-hidden shadow-md max-w-4xl mx-auto">
              <Image
                src="/images/story.jpg" // Placeholder image path
                alt="JK Appliance Repair Team"
                width={800}
                height={450}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why People Choose Us Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-semibold text-[#1d1d1f] mb-6">Why People Choose JK Appliance Repair</h2>
            <p className="text-lg text-[#86868b] max-w-3xl mx-auto">
              We are the best of the best. At JK Appliance Repair, we understand the inconvenience of a broken appliance. That's why we strive to offer reliable, fast, efficient, and affordable service with no hidden charges. Our team uses the most advanced tools and techniques to ensure your appliance is working its best.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <div className="lg:col-span-1 p-8 bg-[#f5f5f7] rounded-2xl">
              <h3 className="text-2xl font-semibold text-[#1d1d1f] mb-4">Services We Offer:</h3>
              <ul className="space-y-3">
                {servicesOffered.map((service, index) => (
                  <li key={index} className="flex items-center text-[#424245]">
                    <svg className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                    {service}
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-2 relative aspect-[16/9] rounded-2xl overflow-hidden shadow-md">
               <Image
                  src="/images/appliances.png" // Placeholder for general appliances image
                  alt="Various home appliances"
                  fill
                  className="object-cover"
                />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Advantages Section */}
      <section className="py-24 bg-[#f5f5f7]">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-semibold text-[#1d1d1f] mb-6">Our Advantages</h2>
            <p className="text-lg text-[#86868b] max-w-3xl mx-auto">
              When you choose us for appliance repairs, you get quality service from skilled and licensed technicians. We offer reliable solutions and provide emergency and same-day options to make things easier for you.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {companyAdvantages.map((advantage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-md transition-all"
              >
                <div className="h-16 w-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
                  {advantage.icon}
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-4">{advantage.title}</h3>
                <p className="text-gray-600">{advantage.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interesting Facts About Us Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-semibold text-[#1d1d1f] mb-6">Interesting Facts About Us</h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
            {companyStats.slice(0,3).map((stat, index) => ( // First 3 stats
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#f5f5f7] p-8 rounded-2xl"
              >
                <p className="text-5xl font-bold text-blue-600 mb-2">{stat.value}</p>
                <p className="text-xl text-[#1d1d1f] font-medium">{stat.description}</p>
                {stat.label !== "Over" && stat.label !== "Serving" && <p className="text-sm text-gray-500">{stat.label}</p>}
              </motion.div>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-center mt-8">
             {companyStats.slice(3).map((stat, index) => ( // Last 2 stats
              <motion.div
                key={index + 3}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (index + 3) * 0.1 }}
                className="bg-[#f5f5f7] p-8 rounded-2xl"
              >
                <p className="text-5xl font-bold text-blue-600 mb-2">{stat.value}</p>
                <p className="text-xl text-[#1d1d1f] font-medium">{stat.label}</p>
                 <p className="text-sm text-gray-500">{stat.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Our Values - Apple-inspired cards */}
      <section className="py-24 bg-[#f5f5f7]">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-semibold text-[#1d1d1f] mb-6">
              Our Values
            </h2>
            <p className="text-lg text-[#86868b] max-w-3xl mx-auto">
              These core principles guide everything we do at JK Appliance Repair.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Technical Excellence",
                description: "We invest in continuous training and certification for our technicians to ensure they're experts in the latest appliance technologies.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714a2.25 2.25 0 001.5 2.25m0 0v5.714a2.25 2.25 0 01-1.5 2.25m0 0a24.301 24.301 0 01-4.5 0m0 0v-5.714a2.25 2.25 0 001.5-2.25m-1.5 2.25c.249-.023.499-.05.749-.082m0 0a24.301 24.301 0 004.5 0" />
                  </svg>
                )
              },
              {
                title: "Customer First",
                description: "We believe in transparent pricing, clear communication, and going above and beyond to ensure customer satisfaction.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
                  </svg>
                )
              },
              {
                title: "Integrity",
                description: "We only recommend repairs that are necessary and always provide honest assessments of your appliance's condition.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-md transition-all"
              >
                <div className="h-16 w-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Our Growth Timeline - Google Material inspired */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-semibold text-[#1d1d1f] mb-6">
              Our Journey
            </h2>
            <p className="text-lg text-[#86868b] max-w-3xl mx-auto">
              Key milestones in our company's growth and development.
            </p>
          </motion.div>
          
          <div className="space-y-12">
            {[
              {
                year: "2010",
                title: "JK Appliance Repair Founded",
                description: "Started operations in Toronto with a focus on refrigerator and washer repairs."
              },
              {
                year: "2013",
                title: "Expanded Service Area",
                description: "Added service coverage to the entire Greater Toronto Area with a team of 5 technicians."
              },
              {
                year: "2016",
                title: "Certification Milestone",
                description: "Became certified repair partners with major appliance manufacturers including Samsung and LG."
              },
              {
                year: "2019",
                title: "Digital Transformation",
                description: "Launched our online booking system and real-time technician tracking for customer convenience."
              },
              {
                year: "2022",
                title: "Training Academy",
                description: "Established our in-house training program to develop the next generation of appliance repair technicians."
              }
            ].map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex"
              >
                <div className="flex-shrink-0 w-24 pt-1">
                  <span className="text-2xl font-semibold text-blue-600">{milestone.year}</span>
                </div>
                <div className="relative pl-8 pb-8 border-l-2 border-gray-200">
                  <div className="absolute -left-[9px] top-2 h-4 w-4 rounded-full bg-blue-600"></div>
                  <h3 className="text-xl font-medium text-gray-900 mb-2">{milestone.title}</h3>
                  <p className="text-gray-600">{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Team Section - Apple-inspired */}
      <section className="py-24 bg-[#f5f5f7]">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-semibold text-[#1d1d1f] mb-6">
              Our Leadership Team
            </h2>
            <p className="text-lg text-[#86868b] max-w-3xl mx-auto">
              Meet the people who drive our mission forward every day.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Vivek P.",
                title: "Founder & CEO",
                bio: "With over 10 years of experience in appliance repair, John leads our company with technical expertise and a customer-first philosophy.",
              },
              {
                name: "Sarah Chen",
                title: "Operations Director",
                bio: "Sarah ensures our day-to-day operations run smoothly, optimizing our service delivery and customer experience.",
              },
              {
                name: "Michael Rodriguez",
                title: "Lead Technician",
                bio: "Michael oversees our technical team, training programs, and quality assurance to maintain our high service standards.",
              }
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-3xl overflow-hidden shadow-sm"
              >
                
                <div className="p-6">
                  <h3 className="text-xl font-medium text-gray-900">{member.name}</h3>
                  <p className="text-blue-600 mb-3">{member.title}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <TestimonialsSliderSection
        title="What Our Customers Say"
        subtitle="Hear from our satisfied clients across the Greater Toronto Area"
        style="apple"
      />
      
      {/* CTA Section */}
      <ModernCTASection 
        style="apple"
        title="Ready to Experience Our Service?"
        subtitle="Book your appliance repair today and see why homeowners across the GTA trust JK Appliance Repair."
        primaryButtonText="Book a Repair"
        secondaryButtonText="Contact Us"
        secondaryButtonLink="/contact"
      />

    
     

      {/* Feedback CTA (Placeholder) */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-3xl text-center">
            <h2 className="text-3xl font-semibold text-[#1d1d1f] mb-4">Do You Have Complaints or Suggestions?</h2>
            <p className="text-lg text-[#424245] mb-8">
                We value your feedback and are always open for communication. We are ready to listen to your problems and accept proposals.
            </p>
            <Link href="/contact#feedback-form" legacyBehavior>
                <a className="inline-block bg-gray-200 text-[#1d1d1f] font-medium py-3 px-8 rounded-lg hover:bg-gray-300 transition-colors">
                    Share Your Feedback
                </a>
            </Link>
        </div>
      </section>
    </div>
  );
}