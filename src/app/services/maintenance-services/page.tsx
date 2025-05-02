"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';


// Problems data with icons
const problems = [
    {
      id: "reduced-efficiency",
      title: "Reduced Efficiency",
      description: "Appliances operating inefficiently due to wear and tear, causing increased energy consumption and utility bills.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
        </svg>
      ),
      solutions: [
        "Comprehensive system cleaning",
        "Component lubrication",
        "Airflow optimization",
        "Seal inspection and replacement",
        "Energy efficiency testing"
      ]
    },
    {
      id: "premature-breakdown",
      title: "Premature Breakdown",
      description: "Unexpected appliance failures due to lack of routine maintenance leading to inconvenience and repair costs.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
        </svg>
      ),
      solutions: [
        "Preventative part replacement",
        "Wear-and-tear assessment",
        "Regular service schedules",
        "Critical component inspection",
        "Early problem detection"
      ]
    },
    {
      id: "poor-performance",
      title: "Poor Performance",
      description: "Diminished appliance functionality resulting in longer operation times and subpar results.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3" />
        </svg>
      ),
      solutions: [
        "Deep-cleaning services",
        "Calibration adjustment",
        "Filter replacement",
        "System diagnostics",
        "Performance optimization"
      ]
    },
    {
      id: "safety-hazards",
      title: "Safety Hazards",
      description: "Neglected appliances developing dangerous conditions including fire risks, gas leaks, or electrical issues.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
        </svg>
      ),
      solutions: [
        "Safety inspection",
        "Ventilation cleaning",
        "Gas line checking",
        "Electrical connection testing",
        "Carbon monoxide detection"
      ]
    },
    {
      id: "shortened-lifespan",
      title: "Shortened Lifespan",
      description: "Appliances failing prematurely resulting in the need for costly early replacement.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      solutions: [
        "Preventative maintenance plans",
        "Scheduled service visits",
        "Critical part monitoring",
        "Long-term care strategies",
        "Manufacturer-recommended service"
      ]
    }
];

// Benefits with Apple-style icons
const benefits = [
    {
      title: "Certified Technicians",
      description: "Factory-trained specialists certified to maintain all major appliance brands according to manufacturer specifications.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
        </svg>
      )
    },
    {
      title: "Preventative Care",
      description: "Regular maintenance to identify and address potential issues before they become costly repairs.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
        </svg>
      )
    },
    {
      title: "Customized Plans",
      description: "Tailored maintenance programs designed to meet your specific needs and appliance usage patterns.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
        </svg>
      )
    }
];

// Brands we service
const brands = [
    "Samsung", "LG", "Whirlpool", "GE", "Maytag", "Frigidaire", 
    "KitchenAid", "Kenmore", "Bosch", "Viking", "Electrolux", "Thermador"
];

// FAQs data
const faqs = [
    {
      question: "How often should appliances receive maintenance?",
      answer: "Most major appliances benefit from professional maintenance once or twice per year, depending on usage. High-use appliances like refrigerators and washing machines may require more frequent service, while others like ovens might need less. Our technicians can recommend the optimal maintenance schedule for your specific appliances."
    },
    {
      question: "What's included in a typical maintenance visit?",
      answer: "Our comprehensive maintenance includes cleaning internal components, checking and testing electrical connections, lubricating moving parts, inspecting for wear and tear, checking refrigerant levels (where applicable), calibrating controls, and conducting safety and performance tests. We also provide recommendations for improving efficiency and extending appliance life."
    },
    {
      question: "Do you offer maintenance plans or packages?",
      answer: "Yes, we offer several maintenance plan options ranging from single-visit service to comprehensive annual plans covering multiple appliances. Our plans include priority scheduling, discounted rates, and preventative part replacement. We can customize a plan to suit your specific needs and budget."
    },
    {
      question: "How long does a maintenance service take?",
      answer: "A typical maintenance service for a single appliance takes 45-90 minutes, depending on the type of appliance and its condition. Multiple appliance maintenance may require 2-4 hours. We work efficiently to minimize disruption to your home while ensuring thorough service."
    },
    {
      question: "Is regular maintenance really cost-effective?",
      answer: "Absolutely. Regular maintenance typically extends appliance lifespan by 30-50%, prevents costly emergency repairs, improves energy efficiency (saving 10-15% on utility bills), and helps avoid the inconvenience of unexpected breakdowns. Most customers find the cost of maintenance is far less than the combined costs of premature replacement and emergency repairs."
    }
];

export default function MaintenanceServicesPage() {
  const [activeFaq, setActiveFaq] = React.useState<number | null>(null);
  
  return (
    <div className="bg-[#f5f5f7] pt-24 pb-20">
      {/* Hero Section */}
      <section className="bg-white pt-10 pb-16">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h1 className="text-5xl md:text-6xl font-semibold text-[#1d1d1f] mb-6 tracking-tight">
                Appliance<br />Maintenance Services
              </h1>
              <p className="text-xl text-[#424245] mb-8 leading-relaxed max-w-2xl">
                Our expert technicians provide preventative maintenance to extend the life of your appliances, improve efficiency, and prevent costly breakdowns.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-[#424245]">
                  <svg className="w-5 h-5 text-[#0071e3] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Comprehensive maintenance for all appliance brands</span>
                </li>
                <li className="flex items-center text-[#424245]">
                  <svg className="w-5 h-5 text-[#0071e3] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Customized maintenance plans available</span>
                </li>
                <li className="flex items-center text-[#424245]">
                  <svg className="w-5 h-5 text-[#0071e3] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Extend appliance lifespan by up to 50%</span>
                </li>
                <li className="flex items-center text-[#424245]">
                  <svg className="w-5 h-5 text-[#0071e3] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Improve energy efficiency and reduce utility bills</span>
                </li>
              </ul>
              <div className="flex flex-wrap gap-4">
                <Link 
                  href="/book" 
                  className="px-8 py-4 bg-[#0071e3] text-white rounded-full font-medium hover:bg-[#0077ed] transition-all shadow-lg"
                >
                  Book Maintenance
                </Link>
                <Link 
                  href="tel:6475608966" 
                  className="px-8 py-4 bg-[#f5f5f7] text-[#1d1d1f] rounded-full font-medium hover:bg-[#e5e5ea] transition-all"
                >
                  Call (647) 560-8966
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-3xl overflow-hidden">
                <Image
                  src="/images/services/appliance-maintenance.jpg"
                  alt="Appliance Maintenance Service"
                  width={600}
                  height={450}
                  priority
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-lg">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-[#0071e3] rounded-full flex items-center justify-center text-white mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs text-[#86868b]">Service Frequency</div>
                    <div className="text-sm font-medium text-[#1d1d1f]">Regular Scheduling</div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-lg">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-[#0071e3] rounded-full flex items-center justify-center text-white mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs text-[#86868b]">Customer Satisfaction</div>
                    <div className="text-sm font-medium text-[#1d1d1f]">100% Guaranteed</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-16">
            {brands.slice(0, 4).map((brand, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="bg-white border border-[#e5e5ea] rounded-xl p-3 flex items-center justify-center"
              >
                <span className="text-base font-medium text-[#1d1d1f]">{brand}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Introduction Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-semibold text-[#1d1d1f] mb-6">
              Expert Appliance Maintenance Services
            </h2>
            <p className="text-lg text-[#86868b] max-w-3xl mx-auto leading-relaxed">
              Regular maintenance is essential for ensuring the longevity, efficiency, and safe operation of your home appliances. Our preventative maintenance services help you avoid costly repairs, extend appliance lifespan, and keep your home running smoothly.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="flex flex-col justify-center"
            >
              <h3 className="text-2xl font-semibold text-[#1d1d1f] mb-4">
                Why Choose Our Maintenance Service
              </h3>
              <p className="text-[#424245] mb-4 leading-relaxed">
                Modern appliances represent a significant investment in your home. Preventative maintenance helps protect that investment by identifying and addressing potential issues before they lead to expensive repairs or premature appliance failure.
              </p>
              <p className="text-[#424245] mb-4 leading-relaxed">
                At JK Appliances, our comprehensive maintenance programs include thorough cleaning, inspection, testing, and tune-ups to keep your appliances operating at peak performance and efficiency.
              </p>
              <p className="text-[#424245] leading-relaxed">
                Regular maintenance not only extends appliance lifespan but also improves energy efficiency, saving you money on utility bills while reducing your environmental footprint.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="aspect-video rounded-2xl overflow-hidden">
                <Image 
                  src="/images/services/maintenance-technician.jpg" 
                  alt="Appliance maintenance technician at work"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Common Problems Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-semibold text-[#1d1d1f] mb-6">
              Common Appliance Problems We Fix
            </h2>
            <p className="text-lg text-[#86868b] max-w-3xl mx-auto">
              Our skilled technicians can diagnose and repair all appliance issues, from simple fixes to complex system failures.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {problems.map((problem, index) => (
              <motion.div
                key={problem.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#f5f5f7] rounded-3xl p-8 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 bg-[#0071e3] rounded-full flex items-center justify-center text-white mb-6">
                  {problem.icon}
                </div>
                <h3 className="text-xl font-semibold text-[#1d1d1f] mb-3">
                  {problem.title}
                </h3>
                <p className="text-[#86868b] mb-5">
                  {problem.description}
                </p>
                <ul className="space-y-2">
                  {problem.solutions.map((solution, i) => (
                    <li key={i} className="flex items-start">
                      <svg className="w-5 h-5 text-[#0071e3] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-[#424245] text-sm">{solution}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Maintenance Services Section */}
      <section className="py-24 bg-[#f5f5f7]">
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-semibold text-[#1d1d1f] mb-6">
              Appliance Maintenance Services We Provide
            </h2>
            <p className="text-lg text-[#86868b] max-w-3xl mx-auto">
              Our technicians provide comprehensive maintenance for all types of household appliances.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-3xl p-8 hover:shadow-lg transition-all"
            >
              <h3 className="text-xl font-semibold text-[#1d1d1f] mb-4">Refrigerator Maintenance</h3>
              <p className="text-[#424245] mb-4">
                Our refrigerator maintenance service includes cleaning condenser coils, checking refrigerant levels, inspecting door seals, cleaning filters, checking temperature settings, and ensuring proper airflow. Regular maintenance helps prevent costly breakdowns and keeps your food fresh.
              </p>
              <Image 
                src="/images/services/refrigerator-maintenance.jpg" 
                alt="Refrigerator maintenance"
                width={400}
                height={300}
                className="rounded-2xl w-full h-48 object-cover"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-3xl p-8 hover:shadow-lg transition-all"
            >
              <h3 className="text-xl font-semibold text-[#1d1d1f] mb-4">Washer & Dryer Maintenance</h3>
              <p className="text-[#424245] mb-4">
                We provide comprehensive maintenance for washers and dryers, including cleaning filters, checking hoses and connections, inspecting drum and motor bearings, cleaning lint traps, checking heating elements, and testing electronic controls to ensure efficient operation.
              </p>
              <Image 
                src="/images/services/washer-maintenance.jpg" 
                alt="Washer and dryer maintenance"
                width={400}
                height={300}
                className="rounded-2xl w-full h-48 object-cover"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-3xl p-8 hover:shadow-lg transition-all"
            >
              <h3 className="text-xl font-semibold text-[#1d1d1f] mb-4">Dishwasher Maintenance</h3>
              <p className="text-[#424245] mb-4">
                Our dishwasher maintenance includes cleaning filters and spray arms, checking water inlet valves, inspecting door seals, cleaning interior components, testing water temperature, and checking drain systems to ensure optimal cleaning performance.
              </p>
              <Image 
                src="/images/services/dishwasher-maintenance.jpg" 
                alt="Dishwasher maintenance"
                width={400}
                height={300}
                className="rounded-2xl w-full h-48 object-cover"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white rounded-3xl p-8 hover:shadow-lg transition-all"
            >
              <h3 className="text-xl font-semibold text-[#1d1d1f] mb-4">Oven & Range Maintenance</h3>
              <p className="text-[#424245] mb-4">
                We provide thorough maintenance for ovens and ranges, including cleaning burners and heating elements, checking gas connections, calibrating temperature controls, inspecting door hinges and seals, and testing safety systems for reliable cooking results.
              </p>
              <Image 
                src="/images/services/oven-maintenance.jpg" 
                alt="Oven and range maintenance"
                width={400}
                height={300}
                className="rounded-2xl w-full h-48 object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-semibold text-[#1d1d1f] mb-6">
              Why Choose JK Appliances
            </h2>
            <p className="text-lg text-[#86868b] max-w-3xl mx-auto">
              Our experienced technicians, comprehensive maintenance programs, and exceptional service make us the smart choice for appliance care.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#f5f5f7] rounded-3xl p-8 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 bg-[#0071e3] rounded-full flex items-center justify-center text-white mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-[#1d1d1f] mb-3">
                  {benefit.title}
                </h3>
                <p className="text-[#86868b]">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Maintenance Plans */}
      <section className="py-24 bg-[#f5f5f7]">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-semibold text-[#1d1d1f] mb-6">
              Our Maintenance Plans
            </h2>
            <p className="text-lg text-[#86868b] max-w-3xl mx-auto">
              Choose from our flexible maintenance plans to keep your appliances running at peak performance.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="flex flex-col justify-center"
            >
              <h3 className="text-2xl font-semibold text-[#1d1d1f] mb-4">
                Customized Service Plans
              </h3>
              <p className="text-[#424245] mb-4 leading-relaxed">
                We offer flexible maintenance plans designed to fit your specific needs and budget. Our basic plans include annual maintenance for essential appliances, while our comprehensive plans cover all your home appliances with bi-annual service visits.
              </p>
              <p className="text-[#424245] mb-4 leading-relaxed">
                Each plan includes thorough inspection, cleaning, testing, and tune-ups of your appliances. We also provide detailed reports with recommendations for improving efficiency and extending appliance life.
              </p>
              <p className="text-[#424245] leading-relaxed">
                Plan members receive priority scheduling, discounted rates on repairs, and exclusive access to our emergency service line for unexpected issues between maintenance visits.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="flex flex-col justify-center"
            >
              <h3 className="text-2xl font-semibold text-[#1d1d1f] mb-4">
                Benefits of Regular Maintenance
              </h3>
              <p className="text-[#424245] mb-4 leading-relaxed">
                Regular appliance maintenance provides numerous benefits beyond simple peace of mind. Our customers report 30-50% longer appliance lifespans, 10-15% reductions in energy costs, and significantly fewer emergency repairs.
              </p>
              <p className="text-[#424245] mb-4 leading-relaxed">
                By preventing major breakdowns and addressing small issues before they become expensive problems, our maintenance plans typically pay for themselves within the first year of service.
              </p>
              <p className="text-[#424245] leading-relaxed">
                Contact us today to discuss which maintenance plan is right for your home and schedule your first service visit.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Brands Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-semibold text-[#1d1d1f] mb-6">
              Brands We Service
            </h2>
            <p className="text-lg text-[#86868b] max-w-3xl mx-auto">
              Our technicians are certified to maintain all major appliance brands and models.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {brands.map((brand, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-[#f5f5f7] rounded-2xl p-6 text-center hover:shadow-md transition-all"
              >
                <span className="text-lg font-medium text-[#1d1d1f]">{brand}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Maintenance Services Grid */}
      <section className="py-24 bg-[#f5f5f7]">
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-semibold text-[#1d1d1f] mb-6">
              Maintenance Services We Provide
            </h2>
            <p className="text-lg text-[#86868b] max-w-3xl mx-auto">
              Our comprehensive maintenance services cover all aspects of appliance care.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{delay: 0.1}} className="bg-white p-4 rounded-2xl">
              <span className="text-[#424245]">Refrigerator maintenance</span>
            </motion.div>
            <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{delay: 0.15}} className="bg-white p-4 rounded-2xl">
              <span className="text-[#424245]">Washer maintenance</span>
            </motion.div>
            <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{delay: 0.2}} className="bg-white p-4 rounded-2xl">
              <span className="text-[#424245]">Dryer maintenance</span>
            </motion.div>
            <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{delay: 0.25}} className="bg-white p-4 rounded-2xl">
              <span className="text-[#424245]">Dishwasher maintenance</span>
            </motion.div>
            <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{delay: 0.3}} className="bg-white p-4 rounded-2xl">
              <span className="text-[#424245]">Oven maintenance</span>
            </motion.div>
            <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{delay: 0.35}} className="bg-white p-4 rounded-2xl">
              <span className="text-[#424245]">Range maintenance</span>
            </motion.div>
            <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{delay: 0.4}} className="bg-white p-4 rounded-2xl">
              <span className="text-[#424245]">Cooktop maintenance</span>
            </motion.div>
            <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{delay: 0.45}} className="bg-white p-4 rounded-2xl">
              <span className="text-[#424245]">Microwave maintenance</span>
            </motion.div>
            <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{delay: 0.5}} className="bg-white p-4 rounded-2xl">
              <span className="text-[#424245]">Freezer maintenance</span>
            </motion.div>
            <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{delay: 0.55}} className="bg-white p-4 rounded-2xl">
              <span className="text-[#424245]">Preventative parts replacement</span>
            </motion.div>
            <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{delay: 0.6}} className="bg-white p-4 rounded-2xl">
              <span className="text-[#424245]">Efficiency optimization</span>
            </motion.div>
            <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{delay: 0.65}} className="bg-white p-4 rounded-2xl">
              <span className="text-[#424245]">Safety inspections</span>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* FAQs Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-semibold text-[#1d1d1f] mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-[#86868b] max-w-3xl mx-auto">
              Get answers to common questions about appliance maintenance services.
            </p>
          </motion.div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#f5f5f7] rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                  className="w-full flex justify-between items-center p-6 text-left"
                >
                  <span className="text-lg font-medium text-[#1d1d1f]">{faq.question}</span>
                  <svg
                    className={`w-5 h-5 text-[#424245] transition-transform ${activeFaq === index ? 'rotate-180' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {activeFaq === index && (
                  <div className="px-6 pb-6 text-[#424245]">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-24 bg-[#0071e3]">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center"
          >
            <h2 className="text-4xl font-semibold text-white mb-6">
              Ready to Protect Your Appliance Investment?
            </h2>
            <p className="text-xl text-white/90 mb-10 max-w-3xl mx-auto">
              Our expert technicians are standing by to provide preventative maintenance services that extend appliance life and improve efficiency.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/book" 
                className="px-8 py-4 bg-white text-[#0071e3] rounded-full font-medium hover:bg-gray-100 transition-all shadow-lg"
              >
                Book Maintenance
              </Link>
              <Link 
                href="tel:6475608966" 
                className="px-8 py-4 bg-transparent text-white border-2 border-white rounded-full font-medium hover:bg-white/10 transition-all"
              >
                Call (647) 560-8966
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Appliance Maintenance",
            "provider": {
              "@type": "LocalBusiness",
              "name": "JK Appliances",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "18 Yonge St",
                "addressLocality": "Toronto",
                "addressRegion": "ON",
                "postalCode": "M5E 1Z8",
                "addressCountry": "CA"
              },
              "telephone": "+16475608966"
            },
            "description": "Expert appliance maintenance services in Toronto and GTA. Preventative care for all major brands including Samsung, LG, Whirlpool, and more.",
            "areaServed": "Greater Toronto Area",
            "serviceType": "Appliance Maintenance",
            "url": "https://jkappliances.ca/services/maintenance-services"
          })
        }}
      />
    </div>
  );
} 