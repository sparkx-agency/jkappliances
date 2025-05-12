"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import BrandsSliderSection from '@/components/sections/brands/BrandsSliderSection';
import { popularBrands } from '@/data/brandsData';


// Problems data with icons
const problems = [
    {
      id: "gas-leaks",
      title: "Gas Leaks",
      description: "Detection and repair of dangerous gas leaks requiring immediate professional attention.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
        </svg>
      ),
      solutions: [
        "Gas leak detection",
        "Gas line repair",
        "Valve replacement",
        "Connection sealing",
        "Safety inspection"
      ]
    },
    {
      id: "ignition-failure",
      title: "Ignition Problems",
      description: "Burners or pilots failing to light properly, causing functionality issues.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
        </svg>
      ),
      solutions: [
        "Igniter replacement",
        "Pilot assembly repair",
        "Thermocoupler replacement",
        "Electronic ignition repair",
        "Gas flow adjustment"
      ]
    },
    {
      id: "uneven-heating",
      title: "Uneven Heating",
      description: "Appliance producing inconsistent heat resulting in poor cooking or heating performance.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
        </svg>
      ),
      solutions: [
        "Burner cleaning",
        "Gas pressure adjustment",
        "Burner replacement",
        "Orifice cleaning",
        "Control valve repair"
      ]
    },
    {
      id: "strange-odors",
      title: "Gas Odors",
      description: "Unusual gas smells indicating potential leaks or combustion issues.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
        </svg>
      ),
      solutions: [
        "Combustion efficiency testing",
        "Ventilation system repair",
        "Gas leak detection and repair",
        "Carbon monoxide testing",
        "System cleaning"
      ]
    },
    {
      id: "control-issues",
      title: "Control Malfunctions",
      description: "Problems with thermostats, knobs, or electronic controls affecting safe operation.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
        </svg>
      ),
      solutions: [
        "Thermostat replacement",
        "Control board repair",
        "Wiring inspection",
        "Pressure regulator adjustment",
        "Safety valve replacement"
      ]
    }
];

// Benefits with Apple-style icons
const benefits = [
    {
      title: "Certified Gas Technicians",
      description: "Licensed specialists certified to repair all major gas appliance brands with safety as the top priority.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
        </svg>
      )
    },
    {
      title: "Emergency Response",
      description: "Fast response for gas appliance emergencies with 24/7 availability for critical situations.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Safety Guaranteed",
      description: "Comprehensive safety inspections with every repair ensuring your gas appliances meet all safety standards.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
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
      question: "How much does it typically cost to repair a gas appliance?",
      answer: "Gas appliance repair costs typically range from $150 to $500 depending on the issue, parts required, and model. We provide a detailed estimate before starting any work so you know exactly what to expect and prioritize safety in all repairs."
    },
    {
      question: "What should I do if I smell gas in my home?",
      answer: "If you smell gas, immediately evacuate everyone from the property without using any electrical switches, phones, or creating sparks. Once outside, call emergency services and then our emergency gas repair line. Do not return to the property until it has been declared safe."
    },
    {
      question: "How often should gas appliances be inspected?",
      answer: "Gas appliances should be professionally inspected at least once a year to ensure they're operating safely and efficiently. Regular maintenance helps identify potential issues before they become dangerous or require expensive repairs."
    },
    {
      question: "How quickly can you respond to a gas appliance emergency?",
      answer: "For gas-related emergencies, we offer priority scheduling with technicians typically arriving within 1-3 hours. For critical gas leak situations, we recommend first calling emergency services, then contacting our emergency line for immediate assistance."
    },
    {
      question: "Do your technicians have special certifications for gas appliance repair?",
      answer: "Yes, all of our technicians who work on gas appliances are licensed gas fitters with specific certifications required by local regulations. They undergo regular training on the latest safety protocols and appliance technologies."
    }
];

export default function GasApplianceRepairPage() {
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
                Gas Appliance<br />Repair Services
              </h1>
              <p className="text-xl text-[#424245] mb-8 leading-relaxed max-w-2xl">
                Our certified gas technicians provide safe, reliable repair for all gas appliances with emergency service available when you need it most.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-[#424245]">
                  <svg className="w-5 h-5 text-[#0071e3] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Licensed gas technicians for all brands</span>
                </li>
                <li className="flex items-center text-[#424245]">
                  <svg className="w-5 h-5 text-[#0071e3] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Emergency response for gas leaks</span>
                </li>
                <li className="flex items-center text-[#424245]">
                  <svg className="w-5 h-5 text-[#0071e3] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Comprehensive safety inspections</span>
                </li>
                <li className="flex items-center text-[#424245]">
                  <svg className="w-5 h-5 text-[#0071e3] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Full warranty on all repairs</span>
                </li>
              </ul>
              <div className="flex flex-wrap gap-4">
                <Link 
                  href="/book" 
                  className="px-8 py-4 bg-[#0071e3] text-white rounded-full font-medium hover:bg-[#0077ed] transition-all shadow-lg"
                >
                  Book a Repair
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
                  src="/images/services/gas-cooktop.webp"
                  alt="Gas Appliance Repair Service"
                  width={600}
                  height={450}
                  priority
                  className="w-full h-full object-cover"
                  style={{ objectFit: "contain" }} />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-lg">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-[#0071e3] rounded-full flex items-center justify-center text-white mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs text-[#86868b]">Response Time</div>
                    <div className="text-sm font-medium text-[#1d1d1f]">Emergency Service</div>
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
              Expert Gas Appliance Repair Services
            </h2>
            <p className="text-lg text-[#86868b] max-w-3xl mx-auto leading-relaxed">
              Gas appliances require specialized knowledge and expertise to repair safely and effectively. Our certified technicians have the training and experience to service all types of gas appliances, from stoves and ovens to water heaters and fireplaces.
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
                Why Choose Our Gas Appliance Repair Service
              </h3>
              <p className="text-[#424245] mb-4 leading-relaxed">
                When it comes to gas appliances, safety is our top priority. Our licensed technicians follow strict protocols to ensure that every repair meets or exceeds safety standards, protecting your home and family.
              </p>
              <p className="text-[#424245] mb-4 leading-relaxed">
                At JK Appliances, we provide comprehensive diagnostics, addressing both immediate concerns and potential issues that could lead to safety hazards or expensive repairs in the future.
              </p>
              <p className="text-[#424245] leading-relaxed">
                We use only manufacturer-approved replacement parts and provide a full warranty on all repairs, giving you peace of mind that your gas appliances will operate safely and efficiently.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="aspect-full md:aspect-square aspect-video rounded-2xl overflow-hidden">
                <Image 
                  src="/images/services/stovess.jpg" 
                  alt="Licensed gas technician at work"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                  style={{ objectFit: "contain" }} />
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
              Common Gas Appliance Problems We Fix
            </h2>
            <p className="text-lg text-[#86868b] max-w-3xl mx-auto">
              Our skilled technicians can diagnose and repair all gas appliance issues, from simple fixes to complex system failures.
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

      {/* Gas Appliance Types Section */}
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
              Types of Gas Appliances We Service
            </h2>
            <p className="text-lg text-[#86868b] max-w-3xl mx-auto">
              Our licensed technicians are qualified to repair all types of gas appliances for your home.
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
              <h3 className="text-xl font-semibold text-[#1d1d1f] mb-4">Gas Stoves & Cooktops</h3>
              <p className="text-[#424245] mb-4">
                We repair all types of gas stoves and cooktops including freestanding ranges, built-in cooktops, and professional-grade ranges. Common issues include ignition problems, uneven heating, and gas valve malfunctions.
              </p>
              <Image 
                src="/images/services/gas-stove.webp" 
                alt="Gas stove repair"
                width={400}
                height={300}
                className="w-full h-48 object-cover rounded-xl"
                style={{ objectFit: "contain" }} />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-3xl p-8 hover:shadow-lg transition-all"
            >
              <h3 className="text-xl font-semibold text-[#1d1d1f] mb-4">Gas Ovens</h3>
              <p className="text-[#424245] mb-4">
                Our technicians are experienced in repairing gas ovens of all types including wall ovens and range ovens. We address issues like temperature inconsistencies, ignition problems, and thermostat malfunctions.
              </p>
              <Image 
                src="/images/services/gas-oven.webp" 
                alt="Gas oven repair"
                width={400}
                height={300}
                className="w-full h-48 object-cover rounded-xl"
                style={{ objectFit: "contain" }} />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-3xl p-8 hover:shadow-lg transition-all"
            >
              <h3 className="text-xl font-semibold text-[#1d1d1f] mb-4">Gas Water Heaters</h3>
              <p className="text-[#424245] mb-4">
                We provide comprehensive repairs for all types of gas water heaters, addressing issues like pilot light problems, insufficient hot water, leaks, and thermocouple failures with a focus on safety.
              </p>
              <Image 
                src="/images/services/gas-water-heater.webp" 
                alt="Gas water heater repair"
                width={400}
                height={300}
                className="w-full h-48 object-cover rounded-xl"
                style={{ objectFit: "contain" }} />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white rounded-3xl p-8 hover:shadow-lg transition-all"
            >
              <h3 className="text-xl font-semibold text-[#1d1d1f] mb-4">Gas Fireplaces & Heaters</h3>
              <p className="text-[#424245] mb-4">
                Our certified technicians can repair all types of gas fireplaces, space heaters, and furnaces. We address ignition issues, gas valve problems, thermostat malfunctions, and ensure proper ventilation for safety.
              </p>
              <Image 
                src="/images/services/fireplace.webp" 
                alt="Gas fireplace repair"
                width={400}
                height={300}
                className="w-full h-48 object-cover rounded-xl"
                style={{ objectFit: "contain" }} />
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <BrandsSliderSection
        title="Top Gas Appliance Brands We Fix"
        subtitle="Our technicians are certified to repair all major gas appliance brands and models."
        brands={popularBrands}
      />

      {/* Additional Benefits */}
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
              Our Service Advantages
            </h2>
            <p className="text-lg text-[#86868b] max-w-3xl mx-auto">
              Discover why customers consistently choose our gas appliance repair services.
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
                Experience You Can Trust
              </h3>
              <p className="text-[#424245] mb-4 leading-relaxed">
                JK Appliances has built a large customer base with hundreds of successfully repaired gas appliances. Our technicians use the latest equipment, firm tools, and methods that have been proven effective over years of service.
              </p>
              <p className="text-[#424245] mb-4 leading-relaxed">
                Before fixing any malfunction, we perform a comprehensive diagnostic to detect all possible issues with your gas appliance. When replacement parts are needed, we use only original manufacturer components to ensure lasting performance.
              </p>
              <p className="text-[#424245] leading-relaxed">
                Our efficient and high-quality service is why customers return to us for all their appliance repair needs.
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
                We Value Your Time
              </h3>
              <p className="text-[#424245] mb-4 leading-relaxed">
                In today's fast-paced world, time is precious. When it comes to gas appliance repairs, every moment counts—especially when gas leaks are involved or safety is at risk.
              </p>
              <p className="text-[#424245] mb-4 leading-relaxed">
                Our local technicians are always ready to respond, eliminating long wait times for customer service. We arrive promptly after your call and perform diagnostics and repairs as quickly and efficiently as possible.
              </p>
              <p className="text-[#424245] leading-relaxed">
                Contact us as soon as you notice any signs of gas appliance malfunction. The sooner we can address the issue, the more likely we can prevent further damage and expense.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
            
      {/* Common Issues Grid */}
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
              Common Gas Appliance Issues We Resolve
            </h2>
            <p className="text-lg text-[#86868b] max-w-3xl mx-auto">
              Our technicians can diagnose and fix all of these common gas appliance problems.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{delay: 0.1}} className="bg-white p-4 rounded-2xl">
              <span className="text-[#424245]">Smelly gas appliance</span>
            </motion.div>
            <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{delay: 0.15}} className="bg-white p-4 rounded-2xl">
              <span className="text-[#424245]">Gas appliance not heating</span>
            </motion.div>
            <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{delay: 0.2}} className="bg-white p-4 rounded-2xl">
              <span className="text-[#424245]">Gas appliance not producing heat</span>
            </motion.div>
            <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{delay: 0.25}} className="bg-white p-4 rounded-2xl">
              <span className="text-[#424245]">Gas appliance making strange noises</span>
            </motion.div>
            <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{delay: 0.3}} className="bg-white p-4 rounded-2xl">
              <span className="text-[#424245]">Gas appliance constantly running</span>
            </motion.div>
            <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{delay: 0.35}} className="bg-white p-4 rounded-2xl">
              <span className="text-[#424245]">Gas appliance leaking gas</span>
            </motion.div>
            <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{delay: 0.4}} className="bg-white p-4 rounded-2xl">
              <span className="text-[#424245]">Gas appliance not igniting</span>
            </motion.div>
            <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{delay: 0.45}} className="bg-white p-4 rounded-2xl">
              <span className="text-[#424245]">Gas appliance not producing hot water</span>
            </motion.div>
            <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{delay: 0.5}} className="bg-white p-4 rounded-2xl">
              <span className="text-[#424245]">Gas appliance not producing enough hot water</span>
            </motion.div>
            <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{delay: 0.55}} className="bg-white p-4 rounded-2xl">
              <span className="text-[#424245]">Gas appliance not producing cold water</span>
            </motion.div>
            <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{delay: 0.6}} className="bg-white p-4 rounded-2xl">
              <span className="text-[#424245]">Gas appliance not producing hot air</span>
            </motion.div>
            <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{delay: 0.65}} className="bg-white p-4 rounded-2xl">
              <span className="text-[#424245]">Gas appliance not producing cold air</span>
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
              Get answers to common questions about gas appliance repair services.
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
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-[#f2f7fd] rounded-3xl p-12 text-center"
          >
            <h2 className="text-4xl font-semibold text-[#1d1d1f] mb-6">
            Ready to Fix Your Gas Appliance?
            </h2>
            <p className="text-lg text-[#424245] max-w-3xl mx-auto mb-10 leading-relaxed">
              Our expert technicians are standing by to provide fast, reliable gas appliance repair services.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/book" 
                className="px-8 py-4 bg-[#0071e3] text-white rounded-full font-medium hover:bg-[#0077ed] transition-all shadow-lg"
              >
                Book a Repair
              </Link>
              <Link 
                href="tel:6475608966" 
                className="px-8 py-4 bg-[#e5e5ea] text-[#1d1d1f] rounded-full font-medium hover:bg-[#d1d1d6] transition-all"
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
            "name": "Gas Appliance Repair",
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
            "description": "Expert gas appliance repair services in Toronto and GTA. Fast, reliable repairs for all major brands including Samsung, LG, Whirlpool, and more.",
            "areaServed": "Greater Toronto Area",
            "serviceType": "Gas Appliance Repair",
            "url": "https://jkappliances.ca/gas-repair"
          })
        }}
      />
    </div>
  );
} 