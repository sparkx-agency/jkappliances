"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';


// Problems data with icons
const problems = [
    {
      id: "improper-installation",
      title: "Improper Installation",
      description: "Incorrect setup leading to appliance damage, inefficient operation, and safety hazards.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
        </svg>
      ),
      solutions: [
        "Professional assessment",
        "Proper leveling and alignment",
        "Correct connection setup",
        "Ventilation verification",
        "Safety testing"
      ]
    },
    {
      id: "incorrect-placement",
      title: "Incorrect Placement",
      description: "Poor positioning causing ventilation problems, noise issues, and reduced appliance lifespan.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3" />
        </svg>
      ),
      solutions: [
        "Optimal location planning",
        "Clearance measurement",
        "Heat source consideration",
        "Accessibility optimization",
        "Counter/floor reinforcement"
      ]
    },
    {
      id: "connection-issues",
      title: "Connection Issues",
      description: "Faulty water, gas, or electrical connections leading to leaks, electrical hazards, or poor performance.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
        </svg>
      ),
      solutions: [
        "Professional water line connection",
        "Secure electrical wiring",
        "Proper gas line installation",
        "Leak testing",
        "Safety switch verification"
      ]
    },
    {
      id: "unleveled-appliances",
      title: "Unleveled Appliances",
      description: "Improperly balanced units causing excessive noise, vibration, and premature mechanical failure.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
        </svg>
      ),
      solutions: [
        "Precision leveling",
        "Floor reinforcement",
        "Anti-vibration pad installation",
        "Stabilizing bracket mounting",
        "Load distribution adjustment"
      ]
    },
    {
      id: "code-violations",
      title: "Code Violations",
      description: "Installation not meeting local building codes or manufacturer specifications creating safety risks.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
        </svg>
      ),
      solutions: [
        "Code-compliant installation",
        "Permit acquisition",
        "Ventilation requirements",
        "Proper spacing verification",
        "Safety standard adherence"
      ]
    }
];

// Benefits with Apple-style icons
const benefits = [
    {
      title: "Certified Technicians",
      description: "Factory-trained specialists certified to install all major appliance brands according to manufacturer specifications.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
        </svg>
      )
    },
    {
      title: "Same-Day Service",
      description: "Fast response for appliance installation needs with appointments available when you need them most.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Quality Guaranteed",
      description: "All installations include a comprehensive warranty and follow-up service to ensure optimal performance.",
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
      question: "How much does appliance installation typically cost?",
      answer: "Appliance installation costs range from $100 to $300 depending on the type of appliance, complexity of installation, and any additional work required (such as electrical upgrades or new water lines). We provide a detailed estimate before starting any work so you know exactly what to expect."
    },
    {
      question: "Do you remove and dispose of old appliances?",
      answer: "Yes, we offer complete removal and environmentally-responsible disposal of your old appliances as part of our installation service. This saves you the hassle of arranging separate disposal and ensures your old unit is recycled properly."
    },
    {
      question: "What preparation should I do before my installation appointment?",
      answer: "To ensure a smooth installation, clear a path to the installation location, ensure the space is clean and measured correctly for the new appliance, and disconnect the old appliance if possible. If you have specific questions about preparing for your particular installation, our customer service team is happy to provide guidance."
    },
    {
      question: "How long does a typical appliance installation take?",
      answer: "Most standard appliance installations take 1-2 hours to complete. More complex installations involving gas lines, water lines, or built-in appliances may take 2-4 hours. We'll provide a time estimate when scheduling your appointment."
    },
    {
      question: "Do you handle both residential and commercial appliance installations?",
      answer: "Yes, our certified technicians are experienced in both residential and commercial appliance installations. We understand the unique requirements of commercial kitchen equipment and can ensure proper installation according to commercial building codes and regulations."
    }
];

export default function InstallationServicesPage() {
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
                Appliance<br />Installation Services
              </h1>
              <p className="text-xl text-[#424245] mb-8 leading-relaxed max-w-2xl">
                Our expert technicians provide professional installation for all types of appliances, ensuring optimal performance and safety.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-[#424245]">
                  <svg className="w-5 h-5 text-[#0071e3] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Certified technicians for all appliance brands</span>
                </li>
                <li className="flex items-center text-[#424245]">
                  <svg className="w-5 h-5 text-[#0071e3] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Same-day installation available</span>
                </li>
                <li className="flex items-center text-[#424245]">
                  <svg className="w-5 h-5 text-[#0071e3] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Code-compliant installation guaranteed</span>
                </li>
                <li className="flex items-center text-[#424245]">
                  <svg className="w-5 h-5 text-[#0071e3] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Old appliance removal and disposal</span>
                </li>
              </ul>
              <div className="flex flex-wrap gap-4">
                <Link 
                  href="/book" 
                  className="px-8 py-4 bg-[#0071e3] text-white rounded-full font-medium hover:bg-[#0077ed] transition-all shadow-lg"
                >
                  Book Installation
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
                  src="/images/services/appliance-installation.jpg"
                  alt="Appliance Installation Service"
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
                    <div className="text-xs text-[#86868b]">Response Time</div>
                    <div className="text-sm font-medium text-[#1d1d1f]">Same-Day Service</div>
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
              Expert Appliance Installation Services
            </h2>
            <p className="text-lg text-[#86868b] max-w-3xl mx-auto leading-relaxed">
              Proper installation is crucial for the performance, efficiency, and longevity of your appliances. Our skilled technicians provide professional installation services for all types of home appliances, ensuring they operate safely and efficiently from day one.
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
                Why Choose Our Installation Service
              </h3>
              <p className="text-[#424245] mb-4 leading-relaxed">
                Modern appliances are complex machines that require proper installation to function correctly. Our technicians have the specialized training and tools required to install all types of appliances according to manufacturer specifications.
              </p>
              <p className="text-[#424245] mb-4 leading-relaxed">
                At JK Appliances, we handle everything from unboxing and placement to connection, testing, and cleanup. We also ensure that all installations meet local building codes and safety standards.
              </p>
              <p className="text-[#424245] leading-relaxed">
                Our complete installation service includes removal and disposal of your old appliance, saving you time and hassle while ensuring environmentally responsible recycling.
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
                  src="/images/services/installation-technician.jpg" 
                  alt="Appliance installation technician at work"
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
              Common Appliance Installation Problems We Fix
            </h2>
            <p className="text-lg text-[#86868b] max-w-3xl mx-auto">
              Our skilled technicians can diagnose and repair all appliance installation issues, from simple fixes to complex system failures.
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

      {/* Appliance Types Section */}
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
              Types of Appliances We Install
            </h2>
            <p className="text-lg text-[#86868b] max-w-3xl mx-auto">
              Our experienced technicians are qualified to install all types of household and commercial appliances.
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
              <h3 className="text-xl font-semibold text-[#1d1d1f] mb-4">Refrigerators & Freezers</h3>
              <p className="text-[#424245] mb-4">
                We install all types of refrigeration units including standard refrigerators, French door models, side-by-side designs, built-in refrigerators, and standalone freezers. Our service includes water line connection, leveling, and door alignment.
              </p>
              <Image 
                src="/images/services/refrigerator-installation.jpg" 
                alt="Refrigerator installation"
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
              <h3 className="text-xl font-semibold text-[#1d1d1f] mb-4">Washers & Dryers</h3>
              <p className="text-[#424245] mb-4">
                From standard top-loading washers to front-loading machines and stackable units, we provide expert installation including water and drain connections, vent hookups, and proper leveling to minimize vibration and noise.
              </p>
              <Image 
                src="/images/services/washer-installation.jpg" 
                alt="Washer and dryer installation"
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
              <h3 className="text-xl font-semibold text-[#1d1d1f] mb-4">Dishwashers</h3>
              <p className="text-[#424245] mb-4">
                Our technicians are experienced in installing both built-in and portable dishwashers, connecting water and drain lines, ensuring proper electrical connections, and testing for leaks and proper operation.
              </p>
              <Image 
                src="/images/services/dishwasher-installation.jpg" 
                alt="Dishwasher installation"
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
              <h3 className="text-xl font-semibold text-[#1d1d1f] mb-4">Ranges, Ovens & Cooktops</h3>
              <p className="text-[#424245] mb-4">
                We install all types of cooking appliances including freestanding ranges, built-in ovens, cooktops, and range hoods. Our services include gas line connection, electrical wiring, and ventilation system setup.
              </p>
              <Image 
                src="/images/services/stove-installation.jpg" 
                alt="Range and oven installation"
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
              Our experienced technicians, quality workmanship, and exceptional service make us the smart choice for appliance installation.
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
              Our Installation Advantages
            </h2>
            <p className="text-lg text-[#86868b] max-w-3xl mx-auto">
              Discover why customers consistently choose our appliance installation services.
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
                JK Appliances has built a large customer base with hundreds of successfully installed appliances. Our technicians use the latest tools, methods, and follow manufacturer guidelines to ensure proper installation every time.
              </p>
              <p className="text-[#424245] mb-4 leading-relaxed">
                Before completing any installation, we perform comprehensive testing to ensure your appliance is functioning correctly, safely, and efficiently. We also take the time to show you how to operate your new appliance and answer any questions.
              </p>
              <p className="text-[#424245] leading-relaxed">
                Our efficient and high-quality service is why customers return to us for all their appliance installation needs.
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
                In today's fast-paced world, time is precious. When it comes to appliance installation, every moment counts—especially when you're waiting to use your new appliance.
              </p>
              <p className="text-[#424245] mb-4 leading-relaxed">
                Our local technicians are always ready to respond, eliminating long wait times for installation services. We arrive promptly at the scheduled time with all necessary tools and materials to complete the installation efficiently.
              </p>
              <p className="text-[#424245] leading-relaxed">
                Contact us as soon as you purchase your new appliance, and we'll schedule a convenient installation time, often as soon as the same day your appliance is delivered.
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
              Our technicians are certified to install all major appliance brands and models.
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
              Installation Services We Provide
            </h2>
            <p className="text-lg text-[#86868b] max-w-3xl mx-auto">
              Our technicians handle all aspects of appliance installation from start to finish.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{delay: 0.1}} className="bg-white p-4 rounded-2xl">
              <span className="text-[#424245]">Refrigerator installation</span>
            </motion.div>
            <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{delay: 0.15}} className="bg-white p-4 rounded-2xl">
              <span className="text-[#424245]">Washer installation</span>
            </motion.div>
            <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{delay: 0.2}} className="bg-white p-4 rounded-2xl">
              <span className="text-[#424245]">Dryer installation</span>
            </motion.div>
            <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{delay: 0.25}} className="bg-white p-4 rounded-2xl">
              <span className="text-[#424245]">Dishwasher installation</span>
            </motion.div>
            <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{delay: 0.3}} className="bg-white p-4 rounded-2xl">
              <span className="text-[#424245]">Range installation</span>
            </motion.div>
            <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{delay: 0.35}} className="bg-white p-4 rounded-2xl">
              <span className="text-[#424245]">Oven installation</span>
            </motion.div>
            <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{delay: 0.4}} className="bg-white p-4 rounded-2xl">
              <span className="text-[#424245]">Cooktop installation</span>
            </motion.div>
            <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{delay: 0.45}} className="bg-white p-4 rounded-2xl">
              <span className="text-[#424245]">Range hood installation</span>
            </motion.div>
            <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{delay: 0.5}} className="bg-white p-4 rounded-2xl">
              <span className="text-[#424245]">Microwave installation</span>
            </motion.div>
            <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{delay: 0.55}} className="bg-white p-4 rounded-2xl">
              <span className="text-[#424245]">Freezer installation</span>
            </motion.div>
            <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{delay: 0.6}} className="bg-white p-4 rounded-2xl">
              <span className="text-[#424245]">Wine cooler installation</span>
            </motion.div>
            <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{delay: 0.65}} className="bg-white p-4 rounded-2xl">
              <span className="text-[#424245]">Water line installation</span>
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
              Get answers to common questions about appliance installation services.
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
              Ready to Install Your New Appliance?
            </h2>
            <p className="text-xl text-white/90 mb-10 max-w-3xl mx-auto">
              Our expert technicians are standing by to provide fast, reliable appliance installation services.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/book" 
                className="px-8 py-4 bg-white text-[#0071e3] rounded-full font-medium hover:bg-gray-100 transition-all shadow-lg"
              >
                Book Installation
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
            "name": "Appliance Installation",
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
            "description": "Expert appliance installation services in Toronto and GTA. Fast, reliable installation for all major brands including Samsung, LG, Whirlpool, and more.",
            "areaServed": "Greater Toronto Area",
            "serviceType": "Appliance Installation",
            "url": "https://jkappliances.ca/services/installation-services"
          })
        }}
      />
    </div>
  );
} 