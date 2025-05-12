"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { popularBrands } from '@/data/brandsData';
import BrandsSliderSection from '@/components/sections/brands/BrandsSliderSection';


// Problems data with icons
const problems = [
    {
      id: "not-spinning",
      title: "Not Spinning Properly",
      description: "Washing machine drum won't spin or spins inconsistently, leaving clothes wet.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
        </svg>
      ),
      solutions: [
        "Drive belt inspection and replacement",
        "Motor coupler repair",
        "Clutch assembly diagnosis",
        "Lid switch or sensor repair",
        "Control board diagnostics"
      ]
    },
    {
      id: "water-leaking",
      title: "Water Leaking",
      description: "Water pooling around the machine during or after wash cycles.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3" />
        </svg>
      ),
      solutions: [
        "Door gasket/seal replacement",
        "Water pump inspection and repair",
        "Hose connection inspection",
        "Tub repair or replacement",
        "Water inlet valve repair"
      ]
    },
    {
      id: "excessive-vibration",
      title: "Excessive Vibration",
      description: "Machine shakes, moves, or makes loud noises during operation.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
        </svg>
      ),
      solutions: [
        "Shock absorber replacement",
        "Suspension spring adjustment",
        "Balance ring inspection",
        "Leveling leg adjustment",
        "Drum balancing and stabilization"
      ]
    },
    {
      id: "not-draining",
      title: "Drainage Issues",
      description: "Water remains in the machine after the cycle completes.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
        </svg>
      ),
      solutions: [
        "Drain pump inspection and repair",
        "Drain hose unclogging",
        "Filter cleaning and maintenance",
        "Coin trap inspection/cleaning",
        "Control board diagnostics"
      ]
    },
    {
      id: "unpleasant-odors",
      title: "Unpleasant Odors",
      description: "Mold, mildew, or musty smells coming from the washer.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
        </svg>
      ),
      solutions: [
        "Door seal/gasket cleaning or replacement",
        "Tub cleaning and sanitization",
        "Mold and mildew removal",
        "Detergent drawer cleaning",
        "Preventative maintenance guidance"
      ]
    },
    {
      id: "not-filling",
      title: "Not Filling with Water",
      description: "Machine doesn't fill or fills incompletely during wash cycles.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
        </svg>
      ),
      solutions: [
        "Water inlet valve repair",
        "Water level switch testing",
        "Pressure sensor inspection",
        "Water supply hose inspection",
        "Timer or control board diagnostics"
      ]
    }
];

// Benefits with Apple-style icons
const benefits = [
    {
      title: "Certified Technicians",
      description: "Expert washer repair specialists with over 5 years of experience in all washing machine brands.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
        </svg>
      )
    },
    {
      title: "Same-Day Service",
      description: "Fast response available any day of the week for washing machine emergencies.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Three-Month Warranty",
      description: "Complete warranty on all our washer repair services and replacement parts.",
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
      question: "How much does it typically cost to repair a washing machine?",
    answer: "Washing machine repair costs typically range from $150 to $400 depending on the issue, parts required, and model. We provide a detailed estimate before starting any work so you know exactly what to expect."
    },
    {
      question: "How long should a washing machine last?",
    answer: "Most modern washing machines have a lifespan of 10-15 years with proper maintenance. Regular service and timely repairs can extend the life of your appliance significantly."
    },
    {
      question: "Is it worth repairing an old washing machine?",
    answer: "If your washing machine is less than 8 years old, repair is usually more cost-effective than replacement. For older units, we'll provide an honest assessment of whether repair or replacement makes more sense economically."
    },
    {
      question: "How quickly can you repair my washing machine?",
    answer: "In most cases, we can complete washing machine repairs on the same day as diagnosis. For more complex issues requiring special parts, it may take 1-2 additional days to source parts and complete the repair."
    },
    {
      question: "Do you offer any maintenance plans for washing machines?",
    answer: "Yes, we offer annual maintenance plans that include cleaning coils, checking refrigerant levels, inspecting door seals, and other preventative measures to keep your washing machine running efficiently."
  }
];

export default function WashingMachineRepairPage() {
  const [activeFaq, setActiveFaq] = React.useState<number | null>(null);
  
  return (
    <div className="bg-[#f5f5f7] pt-24  ">
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
                Washing Machine<br />Repair Service
              </h1>
              <p className="text-xl text-[#424245] mb-8 leading-relaxed max-w-2xl">
                Our expert technicians can fix any brand of washing machine with same-day service at the most affordable prices on the market.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-[#424245]">
                  <svg className="w-5 h-5 text-[#0071e3] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Certified technicians repair all washing machine brands</span>
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
                  src="/images/services/washer.webp"
                  alt="Washing Machine Repair Service"
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
              Expert Washing Machine Repair Services
            </h2>
            <p className="text-lg text-[#86868b] max-w-3xl mx-auto leading-relaxed">
              Your washing machine is an essential appliance in your modern home. We understand how disruptive a malfunctioning washing machine can be to your daily life, which is why our expert technicians provide fast, reliable repair services for all major brands and models.
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
                Why Choose Our Washing Machine Repair Service
              </h3>
              <p className="text-[#424245] mb-4 leading-relaxed">
                Today's washing machines are designed to last 5-10 years with proper care, but even the highest quality appliances can develop issues due to improper maintenance or factory defects. When problems arise, our experienced technicians can diagnose and fix your washing machine quickly and efficiently.
              </p>
              <p className="text-[#424245] mb-4 leading-relaxed">
                At JK Appliances, we use the latest equipment and proven repair methods to ensure your washing machine works like new. Our comprehensive diagnostic process identifies both immediate issues and potential future problems, allowing us to provide a complete solution.
              </p>
              <p className="text-[#424245] leading-relaxed">
                We only use original manufacturer parts and stand behind our work with a complete warranty, giving you peace of mind that your repair will last.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="relative h-[300px] md:h-[400px] w-full rounded-3xl overflow-hidden shadow-xl">
                <Image 
                  src="/images/services/washerss.jpg" 
                  alt="Washing Machine repair technician at work"
                  fill
                  style={{ objectFit: 'cover' }}
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
              Common Washing Machine Problems We Fix
            </h2>
            <p className="text-lg text-[#86868b] max-w-3xl mx-auto">
              Our skilled technicians can diagnose and repair all washing machine issues, from simple fixes to complex system failures.
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

      {/* Washing Machine Types Section */}
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
              Types of Washing Machines We Service
            </h2>
            <p className="text-lg text-[#86868b] max-w-3xl mx-auto">
              Our experienced technicians are qualified to repair all styles and configurations of washing machines.
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
              <h3 className="text-xl font-semibold text-[#1d1d1f] mb-4">Top-Loading Washing Machines</h3>
              <p className="text-[#424245] mb-4">
                These popular models often experience issues with water leakage, excessive vibration, and draining problems. Our technicians have the specialized equipment needed to diagnose and repair these problems quickly.
              </p>
              <Image 
                src="/images/services/top-load-washer.webp" 
                alt="Top-loading washing machine"
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
              <h3 className="text-xl font-semibold text-[#1d1d1f] mb-4">Front-Loading Washing Machines</h3>
              <p className="text-[#424245] mb-4">
                These integrated models can be challenging to repair due to their installation complexity and top-mounted motors that are prone to overheating. Our specialists have the expertise to access and repair these units without damaging surrounding cabinetry.
              </p>
              <Image 
                src="/images/services/front-load-washer.webp" 
                alt="Front-loading washing machine"
                width={400}
                height={300}
                className="w-full h-48 object-cover rounded-xl"
              style={{ objectFit: "contain" }} />
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
              Our experienced technicians, quality parts, and exceptional service make us the smart choice for washing machine repair.
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
              Our Service Advantages
            </h2>
            <p className="text-lg text-[#86868b] max-w-3xl mx-auto">
              Discover why customers consistently choose our washing machine repair services.
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
                JK Appliances has built a large customer base with hundreds of successfully repaired washing machines. Our technicians use the latest equipment, firm tools, and methods that have been proven effective over years of service.
              </p>
              <p className="text-[#424245] mb-4 leading-relaxed">
                Before fixing any malfunction, we perform a comprehensive diagnostic to detect all possible issues with your washing machine. When replacement parts are needed, we use only original manufacturer components to ensure lasting performance.
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
                In today's fast-paced world, time is precious. When it comes to washing machine repairs, every moment counts—especially when water is leaking onto your floor or clothes are at risk of damage.
              </p>
              <p className="text-[#424245] mb-4 leading-relaxed">
                Our local technicians are always ready to respond, eliminating long wait times for customer service. We arrive promptly after your call and perform diagnostics and repairs as quickly and efficiently as possible.
              </p>
              <p className="text-[#424245] leading-relaxed">
                Contact us as soon as you notice any signs of washing machine malfunction. The sooner we can address the issue, the more likely we can prevent further damage and expense.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Brands Section */}
      <BrandsSliderSection
        title="Top Washing Machine Brands We Fix"
        subtitle="Our technicians are certified to repair all major washing machine brands and models."
        brands={popularBrands}
      />
      
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
              Common Washing Machine Issues We Resolve
            </h2>
            <p className="text-lg text-[#86868b] max-w-3xl mx-auto">
              Our technicians can diagnose and fix all of these common washing machine problems.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{delay: 0.1}} className="bg-white p-4 rounded-2xl">
              <span className="text-[#424245]">Smelly washing machine</span>
            </motion.div>
            <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{delay: 0.15}} className="bg-white p-4 rounded-2xl">
              <span className="text-[#424245]">Washing machine not filling with water</span>
            </motion.div>
            <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{delay: 0.2}} className="bg-white p-4 rounded-2xl">
              <span className="text-[#424245]">Washing machine not spinning</span>
            </motion.div>
            <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{delay: 0.25}} className="bg-white p-4 rounded-2xl">
              <span className="text-[#424245]">Washing machine shaking or making loud noises</span>
            </motion.div>
            <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{delay: 0.3}} className="bg-white p-4 rounded-2xl">
              <span className="text-[#424245]">Washing machine leaking water</span>
            </motion.div>
            <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{delay: 0.35}} className="bg-white p-4 rounded-2xl">
              <span className="text-[#424245]">Washing machine not draining</span>
            </motion.div>
            <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{delay: 0.4}} className="bg-white p-4 rounded-2xl">
              <span className="text-[#424245]">Washing machine not agitating</span>
            </motion.div>
            <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{delay: 0.45}} className="bg-white p-4 rounded-2xl">
              <span className="text-[#424245]">Washing machine not drying</span>
            </motion.div>
            <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{delay: 0.5}} className="bg-white p-4 rounded-2xl">
              <span className="text-[#424245]">Washing machine not cleaning</span>
            </motion.div>
            <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{delay: 0.55}} className="bg-white p-4 rounded-2xl">
              <span className="text-[#424245]">Washing machine not heating</span>
            </motion.div>
            <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{delay: 0.6}} className="bg-white p-4 rounded-2xl">
              <span className="text-[#424245]">Washing machine not starting</span>
            </motion.div>
            <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{delay: 0.65}} className="bg-white p-4 rounded-2xl">
              <span className="text-[#424245]">Washing machine not draining</span>
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
              Get answers to common questions about washing machine repair services.
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
            Ready to Fix Your Washing Machine?
            </h2>
            <p className="text-lg text-[#424245] max-w-3xl mx-auto mb-10 leading-relaxed">
              Our expert technicians are standing by to provide fast, reliable washing machine repair services.
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
            "name": "Washing Machine Repair",
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
            "description": "Expert washing machine repair services in Toronto and GTA. Fast, reliable repairs for all major brands including Samsung, LG, Whirlpool, and more.",
            "areaServed": "Greater Toronto Area",
            "serviceType": "Washing Machine Repair",
            "url": "https://jkappliances.ca/washing-machine-repair"
          })
        }}
      />
    </div>
  );
} 