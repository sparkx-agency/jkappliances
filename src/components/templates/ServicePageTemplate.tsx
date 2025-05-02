"use client";

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import Button from '@/components/ui/Button';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { usePathname } from 'next/navigation';
import RelatedServicesSection from '@/components/sections/RelatedServicesSection';

interface CommonProblem {
  id: string;
  title: string;
  description: string;
  symptoms: string[];
  solutions: string[];
}

interface ServicePageProps {
  service: {
    title: string;
    description: string;
    imageSrc: string;
    imageAlt: string;
    problems: CommonProblem[];
    benefits: {
      title: string;
      description: string;
      icon: React.ReactNode;
    }[];
    brands?: string[];
    faqs?: {
      question: string;
      answer: string;
    }[];
  };
}

const ServicePageTemplate: React.FC<ServicePageProps> = ({ service }) => {
  const [expandedProblem, setExpandedProblem] = useState<string | null>(null);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const pathname = usePathname();

  // Refs for lazy loading sections
  const benefitsSectionRef = useRef<HTMLDivElement>(null);
  const brandsSectionRef = useRef<HTMLDivElement>(null);
  const faqsSectionRef = useRef<HTMLDivElement>(null);
  const ctaSectionRef = useRef<HTMLDivElement>(null);
  
  // Check if sections are in view
  const areBenefitsInView = useInView(benefitsSectionRef, { once: true, margin: "100px 0px" });
  const areBrandsInView = useInView(brandsSectionRef, { once: true, margin: "100px 0px" });
  const areFaqsInView = useInView(faqsSectionRef, { once: true, margin: "100px 0px" });

  const toggleProblem = (id: string) => {
    if (expandedProblem === id) {
      setExpandedProblem(null);
    } else {
      setExpandedProblem(id);
    }
  };

  const toggleFaq = (index: number) => {
    if (expandedFaq === index) {
      setExpandedFaq(null);
    } else {
      setExpandedFaq(index);
    }
  };

  // Generate breadcrumb items based on the current pathname
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { 
      label: service.title, 
      href: pathname, 
      isCurrent: true 
    }
  ];

  return (
    <div className="pt-20">
      {/* Breadcrumbs */}
      <div className="bg-gray-100">
        <div className="container mx-auto">
          <Breadcrumbs customItems={breadcrumbItems} />
        </div>
      </div>
      
      {/* Hero Section - Keep priority loading for above the fold content */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 py-20 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="lg:w-1/2">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl sm:text-5xl font-bold mb-6"
              >
                {service.title}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-lg text-blue-100 mb-8"
              >
                {service.description}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-wrap gap-4"
              >
                <Button href="/book" variant="primary">
                  Book Now
                </Button>
                <Button href="tel:647-560-8966" variant="outline">
                  Call Us
                </Button>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="lg:w-1/2"
            >
              <div className="relative h-[400px] w-full rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src={service.imageSrc}
                  alt={service.imageAlt}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="transform hover:scale-105 transition-transform duration-500"
                  priority={true} // Keep priority for hero image (above the fold)
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Common Problems Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Common {service.title.split(" ")[0]} Problems We Fix
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our certified technicians can diagnose and repair all types of {service.title.toLowerCase()} issues quickly and efficiently.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {service.problems.map((problem) => (
              <motion.div
                key={problem.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-xl shadow-sm overflow-hidden"
              >
                <button
                  onClick={() => toggleProblem(problem.id)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                >
                  <h3 className="text-xl font-semibold text-gray-900">{problem.title}</h3>
                  <span className={`transition-transform duration-300 ${expandedProblem === problem.id ? 'rotate-180' : ''}`}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </button>

                {expandedProblem === problem.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-6"
                  >
                    <p className="text-gray-700 mb-4">{problem.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="font-medium text-gray-900 mb-2">Common Symptoms:</h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-700">
                        {problem.symptoms.map((symptom, index) => (
                          <li key={index}>{symptom}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Our Solutions:</h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-700">
                        {problem.solutions.map((solution, index) => (
                          <li key={index}>{solution}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mt-6">
                      <Button href="/book" size="small">
                        Book a Repair
                      </Button>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section ref={benefitsSectionRef} className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Us for Your {service.title}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              JK Appliance Repair is your trusted partner for professional, reliable, and affordable appliance repair services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {areBenefitsInView && service.benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="h-14 w-14 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-700">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands Section (Optional) */}
      {service.brands && service.brands.length > 0 && (
        <section ref={brandsSectionRef} className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                Brands We Service
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Our technicians are trained to work with all major appliance brands.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-6 md:gap-10">
              {areBrandsInView && service.brands.map((brand, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="px-4 py-2 bg-white rounded-full shadow-sm text-gray-700 font-medium"
                >
                  {brand}
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQs Section (Optional) */}
      {service.faqs && service.faqs.length > 0 && (
        <section ref={faqsSectionRef} className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Get answers to common questions about our {service.title.toLowerCase()}.
              </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-6">
              {areFaqsInView && service.faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-gray-50 rounded-xl shadow-sm overflow-hidden"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full px-6 py-4 flex items-center justify-between text-left focus:outline-none"
                  >
                    <h3 className="font-medium text-gray-900">{faq.question}</h3>
                    <span className={`transition-transform duration-300 ${expandedFaq === index ? 'rotate-180' : ''}`}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </button>

                  {expandedFaq === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-6"
                    >
                      <p className="text-gray-700">{faq.answer}</p>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related Services Section */}
      <RelatedServicesSection />

      {/* CTA Section */}
      <section ref={ctaSectionRef} className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Fix Your {service.title.split(" ")[0]}?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Our expert technicians are just a call or click away. Book your repair service today!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                href="/book" 
                variant="primary" 
                size="large"
              >
                Book Your Repair Today
              </Button>
              <Button 
                href="tel:647-560-8966" 
                variant="outline"
                size="large"
              >
                Call 647-560-8966
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicePageTemplate; 