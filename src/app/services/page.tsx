"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';

const services = [
  {
    id: 'refrigerator',
    name: 'Refrigerator Repair',
    description: 'Expert repair for all refrigerator brands, including cooling issues, ice maker problems, and more.',
    longDescription: 'We service all major refrigerator brands and models, including side-by-side, French door, bottom freezer, top freezer, and built-in units. Our technicians can diagnose and repair cooling problems, ice maker issues, water leaks, strange noises, frost buildup, and temperature regulation problems.',
    icon: '❄️',
    image: '/images/services/refrigerator-repair.webp',
    commonIssues: [
      'Refrigerator not cooling properly',
      'Ice maker not working',
      'Water leaking on the floor',
      'Unusual noises or buzzing',
      'Frost buildup in freezer',
      'Temperature fluctuations',
      'Door seal issues'
    ]
  },
  {
    id: 'washer',
    name: 'Washer Repair',
    description: 'Fix leaking, noisy washing machines, drainage problems, and other washer related issues.',
    longDescription: 'Our technicians are experienced in repairing all types of washing machines, including top-loading, front-loading, high-efficiency, and compact models. We diagnose and fix issues like leaks, drainage problems, excessive noise, failure to spin, door lock malfunctions, and control panel errors.',
    icon: '🧺',
    image: '/images/services/washer-repair.webp',
    commonIssues: [
      'Washer leaking water',
      'Not draining properly',
      'Excessive vibration or noise',
      'Not spinning or agitating',
      'Door or lid won\'t lock',
      'Control panel not working',
      'Washer won\'t start or stops mid-cycle'
    ]
  },
  {
    id: 'dryer',
    name: 'Dryer Repair',
    description: 'Resolve heating problems, noisy operation, and other dryer malfunctions quickly and effectively.',
    longDescription: 'We repair electric and gas dryers of all major brands. Our services address heating element failures, thermostat issues, drum problems, belt replacements, motor malfunctions, and vent cleaning to improve efficiency and prevent fire hazards.',
    icon: '👕',
    image: '/images/services/dryer-repair.webp',
    commonIssues: [
      'Dryer not heating',
      'Takes too long to dry clothes',
      'Makes loud noises when running',
      'Drum not turning',
      'Overheating and shutting off',
      'Burning smell during operation',
      'Tripping circuit breaker'
    ]
  },
  {
    id: 'dishwasher',
    name: 'Dishwasher Repair',
    description: "Professional repair for dishwashers that won't drain, clean properly, or start.",
    longDescription: 'Our dishwasher repair services cover all common problems, including drainage issues, poor cleaning performance, pump failures, spray arm malfunctions, water filling problems, and door seal replacements. We work with all major brands to restore your dishwasher to optimal performance.',
    icon: '🍽️',
    image: '/images/services/dishwasher-repair.webp',
    commonIssues: [
      'Dishwasher not draining',
      'Dishes not getting clean',
      'Leaking water onto floor',
      'Not filling with water',
      'Unusual noises during cycle',
      'Door not latching properly',
      'Soap dispenser malfunction'
    ]
  },
  {
    id: 'oven',
    name: 'Oven & Stove Repair',
    description: 'Fix heating elements, temperature control issues, and other oven and stove problems.',
    longDescription: 'We provide comprehensive repair services for all types of ovens, stoves, and ranges, including electric, gas, dual-fuel, wall ovens, and cooktops. Our technicians repair heating elements, ignition systems, temperature sensors, control boards, door issues, and burner problems.',
    icon: '🔥',
    image: '/images/services/oven-repair.webp',
    commonIssues: [
      'Oven not heating evenly',
      'Burners won\'t light or heat',
      'Temperature inaccuracy',
      'Self-cleaning feature not working',
      'Control panel malfunction',
      'Gas smell around appliance',
      'Door not closing properly'
    ]
  },
  {
    id: 'installation',
    name: 'Appliance Installation',
    description: 'Professional installation of new appliances to ensure safe and optimal performance.',
    longDescription: 'Our expert technicians provide professional installation services for all major appliances. We ensure proper connections to electrical, gas, and water lines, level the appliance correctly, and verify everything is working safely. We also remove and dispose of old appliances upon request.',
    icon: '🔧',
    image: '/images/services/appliance-installation.webp',
    commonServices: [
      'Refrigerator installation with water line connection',
      'Washer and dryer setup with proper venting',
      'Dishwasher installation with plumbing connection',
      'Range and oven installation with gas line hookup',
      'Garbage disposal installation',
      'Microwave and range hood mounting',
      'Old appliance removal and disposal'
    ]
  },
];

const ServicesPage = () => {
  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="relative py-16 bg-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6"
            >
              Our Services
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg text-gray-600"
            >
              Professional repair and installation services for all major appliance brands.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="space-y-16">
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
                >
                  <div className={`${index % 2 === 1 ? 'md:order-2' : ''}`}>
                    <div className="flex items-center mb-4">
                      <span className="text-3xl mr-3">{service.icon}</span>
                      <h2 className="text-3xl font-bold text-gray-900">{service.name}</h2>
                    </div>
                    <p className="text-gray-600 mb-6">
                      {service.longDescription}
                    </p>
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">
                        {service.id === 'installation' ? 'Our Installation Services Include:' : 'Common Issues We Repair:'}
                      </h3>
                      <ul className="space-y-2">
                        {(service.commonIssues || service.commonServices)?.map((item, i) => (
                          <li key={i} className="flex items-start">
                            <svg className="h-5 w-5 text-blue-600 mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button href="/book" leftIcon={<span className="text-lg">📅</span>}>
                        Book Service
                      </Button>
                      <Button href="/contact" variant="outline">
                        Contact Us
                      </Button>
                    </div>
                  </div>
                  <div className={`${index % 2 === 1 ? 'md:order-1' : ''}`}>
                    <div className="rounded-xl overflow-hidden shadow-md">
                      <Image 
                        src={service.image} 
                        alt={service.name} 
                        className="w-full h-auto"
                        width={500}
                        height={300}
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold text-gray-900 mb-4"
            >
              Ready to Fix Your Appliance?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg text-gray-600 mb-8"
            >
              Our expert technicians are just a call away. Contact us today to schedule your service appointment.
            </motion.p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/book" size="large">
                Schedule a Repair
              </Button>
              <Button href="tel:6475608966" variant="outline" size="large" leftIcon={
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              }>
                Call (647) 560-8966
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage; 