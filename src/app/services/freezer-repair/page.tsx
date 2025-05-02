"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';


// Problems data with icons
const problems = [
    {
      id: "not-freezing",
      title: "Not Freezing Properly",
      description: "Insufficient freezing leading to food spoilage and temperature inconsistency issues.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
        </svg>
      ),
      solutions: [
        "Compressor diagnosis and repair",
        "Thermostat calibration",
        "Condenser coil cleaning",
        "Refrigerant level check",
        "Temperature sensor replacement"
      ]
    },
    {
      id: "frost-buildup",
      title: "Excessive Frost Buildup",
      description: "Abnormal ice accumulation affecting freezer performance and storage capacity.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
        </svg>
      ),
      solutions: [
        "Defrost system repair",
        "Timer replacement",
        "Heating element testing",
        "Door seal inspection",
        "Drain system unclogging"
      ]
    },
    {
      id: "strange-noises",
      title: "Unusual Noises",
      description: "Buzzing, clicking, or knocking sounds indicating mechanical problems.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
        </svg>
      ),
      solutions: [
        "Compressor mounting repair",
        "Fan motor replacement",
        "Condenser fan cleaning",
        "Evaporator fan repair",
        "Component lubrication"
      ]
    },
    {
      id: "water-leaking",
      title: "Water Leakage",
      description: "Water puddles around or underneath your freezer requiring immediate attention.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3" />
        </svg>
      ),
      solutions: [
        "Defrost drain unclogging",
        "Water inlet valve repair",
        "Drain pan cleaning",
        "Ice maker connection sealing",
        "Door seal replacement"
      ]
    },
    {
      id: "temperature-fluctuations",
      title: "Temperature Inconsistency",
      description: "Varying freezer temperatures causing food quality issues and energy waste.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
        </svg>
      ),
      solutions: [
        "Thermostat replacement",
        "Temperature control board repair",
        "Sensor calibration",
        "Door seal repair",
        "Airflow system optimization"
      ]
    }
];

// Benefits with Apple-style icons
const benefits = [
    {
      title: "Certified Technicians",
      description: "Factory-trained specialists certified to repair all major freezer brands with expertise in advanced cooling systems.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
        </svg>
      )
    },
    {
      title: "Same-Day Service",
      description: "Fast response for freezer emergencies to minimize food loss and prevent costly damage.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Transparent Pricing",
      description: "Upfront quotes with no hidden fees or surprise charges after repairs for complete peace of mind.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 01-.75.75h-.75m-6-1.5H4.5m0 0l-3-3m3 3l3-3" />
        </svg>
      )
    }
];

// Brands we service
const brands = [
    "Samsung", "LG", "Whirlpool", "GE", "Maytag", "Frigidaire", 
    "KitchenAid", "Kenmore", "Bosch", "Sub-Zero", "Electrolux", "Haier"
];

// FAQs data
const faqs = [
    {
      question: "How much does it typically cost to repair a freezer?",
      answer: "Freezer repair costs typically range from $150 to $400 depending on the issue, parts required, and model. We provide a detailed estimate before starting any work so you know exactly what to expect and can make an informed decision."
    },
    {
      question: "How long should a freezer last?",
      answer: "Most modern freezers have a lifespan of 10-15 years with proper maintenance. Regular service and timely repairs can extend the life of your freezer significantly, especially for higher-end models."
    },
    {
      question: "Is it worth repairing an old freezer?",
      answer: "If your freezer is less than 8 years old, repair is usually more cost-effective than replacement. For older units, we'll provide an honest assessment of whether repair or replacement makes more sense economically, considering energy efficiency improvements in newer models."
    },
    {
      question: "How quickly can you repair my freezer?",
      answer: "In most cases, we can complete freezer repairs on the same day as diagnosis. For more complex issues requiring special parts, it may take 1-2 additional days to source parts and complete the repair. We prioritize minimizing food loss during the repair process."
    },
    {
      question: "What are signs that my freezer needs repair?",
      answer: "Common signs include inconsistent freezing, excessive frost buildup, unusual noises, water leakage, the freezer running constantly, and rising energy bills. If you notice any of these issues, it's best to call for professional service to prevent food loss and more extensive damage."
    }
];

export default function FreezerRepairPage() {
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
                Freezer<br />Repair Service
              </h1>
              <p className="text-xl text-[#424245] mb-8 leading-relaxed max-w-2xl">
                Our expert technicians can fix any brand of freezer with same-day service at competitive prices, preventing food loss and restoring optimal performance.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-[#424245]">
                  <svg className="w-5 h-5 text-[#0071e3] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Certified technicians repair all freezer brands</span>
                </li>
                <li className="flex items-center text-[#424245]">
                  <svg className="w-5 h-5 text-[#0071e3] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Most repairs completed same-day</span>
                </li>
                <li className="flex items-center text-[#424245]">
                  <svg className="w-5 h-5 text-[#0071e3] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Affordable pricing with no hidden fees</span>
                </li>
                <li className="flex items-center text-[#424245]">
                  <svg className="w-5 h-5 text-[#0071e3] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Full warranty on all parts and labor</span>
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
                  src="/images/services/freezer-repair.jpg"
                  alt="Freezer Repair Service"
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
              Expert Freezer Repair Services
            </h2>
            <p className="text-lg text-[#86868b] max-w-3xl mx-auto leading-relaxed">
              Your freezer is essential for food preservation and meal planning. When it malfunctions, it can lead to significant food waste and disruption. Our skilled technicians provide fast, reliable repair services for all freezer types and brands.
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
                Why Choose Our Freezer Repair Service
              </h3>
              <p className="text-[#424245] mb-4 leading-relaxed">
                Modern freezers feature sophisticated cooling systems and electronic controls that require specialized knowledge to repair properly. Our technicians have the training and expertise to diagnose and fix these complex systems efficiently.
              </p>
              <p className="text-[#424245] mb-4 leading-relaxed">
                At JK Appliances, we understand the urgency of freezer repairs. Our comprehensive diagnostic process identifies both immediate issues and potential future problems, allowing us to provide complete solutions that prevent recurring failures.
              </p>
              <p className="text-[#424245] leading-relaxed">
                We use only manufacturer-approved replacement parts and provide a full warranty on all repairs, ensuring your freezer operates reliably for years to come.
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
                  src="/images/services/freezer-technician.jpg" 
                  alt="Freezer repair technician at work"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Freezer Repair",
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
            "description": "Expert freezer repair services in Toronto and GTA. Fast, reliable repairs for all major brands including Samsung, LG, Whirlpool, and more.",
            "areaServed": "Greater Toronto Area",
            "serviceType": "Freezer Repair",
            "url": "https://jkappliances.ca/services/freezer-repair"
          })
        }}
      />
      
      {/* Common Problems Section */}
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
              Common Freezer Problems We Fix
            </h2>
            <p className="text-lg text-[#86868b] max-w-3xl mx-auto leading-relaxed">
              Our technicians are skilled at diagnosing and repairing all types of freezer issues, from simple fixes to complex system failures.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {problems.map((problem, index) => (
              <motion.div
                key={problem.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-[#f2f7fd] text-[#0071e3] rounded-full flex items-center justify-center mb-6">
                  {problem.icon}
                </div>
                <h3 className="text-xl font-semibold text-[#1d1d1f] mb-3">
                  {problem.title}
                </h3>
                <p className="text-[#424245] mb-5">
                  {problem.description}
                </p>
                <div>
                  <h4 className="text-sm font-medium text-[#86868b] mb-3">Our Solutions:</h4>
                  <ul className="space-y-2">
                    {problem.solutions.map((solution, i) => (
                      <li key={i} className="text-sm text-[#424245] flex items-start">
                        <svg className="w-4 h-4 text-[#0071e3] mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{solution}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Freezer Types Section */}
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
              Freezer Types We Service
            </h2>
            <p className="text-lg text-[#86868b] max-w-3xl mx-auto leading-relaxed">
              Our skilled technicians are experienced in repairing all types of freezers, ensuring optimal performance regardless of your freezer style or configuration.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="bg-[#f5f5f7] rounded-2xl overflow-hidden"
            >
              <div className="aspect-[4/3]">
                <Image 
                  src="/images/services/upright-freezer.png" 
                  alt="Upright Freezer Repair"
                  width={600}
                  height={450}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-[#1d1d1f] mb-3">
                  Upright Freezers
                </h3>
                <p className="text-[#424245] mb-5">
                  We provide comprehensive repair services for upright freezers of all brands, addressing temperature control issues, door seal problems, compressor failures, and electronic control malfunctions.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="text-sm text-[#424245] flex items-start">
                    <svg className="w-4 h-4 text-[#0071e3] mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Temperature sensor replacement</span>
                  </li>
                  <li className="text-sm text-[#424245] flex items-start">
                    <svg className="w-4 h-4 text-[#0071e3] mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Control board diagnosis and repair</span>
                  </li>
                  <li className="text-sm text-[#424245] flex items-start">
                    <svg className="w-4 h-4 text-[#0071e3] mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Door seal and hinge repair</span>
                  </li>
                </ul>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="bg-[#f5f5f7] rounded-2xl overflow-hidden"
            >
              <div className="aspect-[4/3]">
                <Image 
                  src="/images/services/chest-freezer.jpg" 
                  alt="Chest Freezer Repair"
                  width={600}
                  height={450}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-[#1d1d1f] mb-3">
                  Chest Freezers
                </h3>
                <p className="text-[#424245] mb-5">
                  Our technicians specialize in chest freezer repairs, handling drain system issues, lid problems, compressor failures, and defrost system malfunctions for all major brands.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="text-sm text-[#424245] flex items-start">
                    <svg className="w-4 h-4 text-[#0071e3] mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Lid seal and support repair</span>
                  </li>
                  <li className="text-sm text-[#424245] flex items-start">
                    <svg className="w-4 h-4 text-[#0071e3] mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Drain system unclogging</span>
                  </li>
                  <li className="text-sm text-[#424245] flex items-start">
                    <svg className="w-4 h-4 text-[#0071e3] mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Compressor and cooling system repair</span>
                  </li>
                </ul>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="bg-[#f5f5f7] rounded-2xl overflow-hidden"
            >
              <div className="aspect-[4/3]">
                <Image 
                  src="/images/services/built-in-freezer.jpg" 
                  alt="Built-in Freezer Repair"
                  width={600}
                  height={450}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-[#1d1d1f] mb-3">
                  Built-in Freezers
                </h3>
                <p className="text-[#424245] mb-5">
                  We provide expert repair services for premium built-in freezers, addressing ventilation issues, temperature control problems, and the unique cooling systems of these high-end appliances.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="text-sm text-[#424245] flex items-start">
                    <svg className="w-4 h-4 text-[#0071e3] mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Airflow and ventilation optimization</span>
                  </li>
                  <li className="text-sm text-[#424245] flex items-start">
                    <svg className="w-4 h-4 text-[#0071e3] mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Control panel and display repair</span>
                  </li>
                  <li className="text-sm text-[#424245] flex items-start">
                    <svg className="w-4 h-4 text-[#0071e3] mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Drawer and rail system repair</span>
                  </li>
                </ul>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="bg-[#f5f5f7] rounded-2xl overflow-hidden"
            >
              <div className="aspect-[4/3]">
                <Image 
                  src="/images/services/freezer-refrigerator.jpg" 
                  alt="Refrigerator Freezer Combination Repair"
                  width={600}
                  height={450}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-[#1d1d1f] mb-3">
                  Refrigerator Freezer Combinations
                </h3>
                <p className="text-[#424245] mb-5">
                  We repair the freezer compartments in refrigerator-freezer combinations, including top-freezer, bottom-freezer, and side-by-side models, addressing temperature control and defrost system issues.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="text-sm text-[#424245] flex items-start">
                    <svg className="w-4 h-4 text-[#0071e3] mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Dual temperature control repair</span>
                  </li>
                  <li className="text-sm text-[#424245] flex items-start">
                    <svg className="w-4 h-4 text-[#0071e3] mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Defrost system optimization</span>
                  </li>
                  <li className="text-sm text-[#424245] flex items-start">
                    <svg className="w-4 h-4 text-[#0071e3] mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Air circulation system repair</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Benefits Section */}
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
              The JK Appliances Advantage
            </h2>
            <p className="text-lg text-[#86868b] max-w-3xl mx-auto leading-relaxed">
              When you choose our freezer repair service, you benefit from our commitment to excellence, expertise, and customer satisfaction.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="bg-white rounded-2xl p-8 shadow-sm"
              >
                <div className="w-12 h-12 bg-[#f2f7fd] text-[#0071e3] rounded-full flex items-center justify-center mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-[#1d1d1f] mb-3">
                  {benefit.title}
                </h3>
                <p className="text-[#424245]">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mt-12 bg-white rounded-2xl p-8 shadow-sm"
          >
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="w-16 h-16 bg-[#f2f7fd] text-[#0071e3] rounded-full flex items-center justify-center flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#1d1d1f] mb-2">
                  90-Day Repair Warranty
                </h3>
                <p className="text-[#424245]">
                  We stand behind our work with a comprehensive 90-day warranty on all repairs. If you experience any issues with the same problem within 90 days of our service, we'll return and fix it at no additional cost. This warranty covers both parts and labor, giving you complete peace of mind.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Brands We Service Section */}
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
              Brands We Service
            </h2>
            <p className="text-lg text-[#86868b] max-w-3xl mx-auto leading-relaxed">
              Our technicians are certified to repair all major freezer brands, with specialized knowledge of each manufacturer's unique systems and components.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
              {brands.map((brand, index) => (
                <div 
                  key={index}
                  className="bg-[#f5f5f7] rounded-xl p-6 flex items-center justify-center"
                >
                  <span className="text-lg font-medium text-[#1d1d1f]">{brand}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* FAQs Section */}
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
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-[#86868b] max-w-3xl mx-auto leading-relaxed">
              Get answers to common questions about our freezer repair services and what to expect during the repair process.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-4"
          >
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between"
                >
                  <span className="text-lg font-medium text-[#1d1d1f]">{faq.question}</span>
                  <span className={`transform transition-transform ${activeFaq === index ? 'rotate-180' : ''}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </button>
                {activeFaq === index && (
                  <div className="px-8 pb-6">
                    <p className="text-[#424245]">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* Call to Action Section */}
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
              Ready to Fix Your Freezer?
            </h2>
            <p className="text-lg text-[#424245] max-w-3xl mx-auto mb-10 leading-relaxed">
              Don't let freezer problems lead to food spoilage and inconvenience. Our certified technicians are ready to provide fast, reliable repairs for all freezer brands and models.
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
    </div>
  );
} 