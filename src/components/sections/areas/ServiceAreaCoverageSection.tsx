"use client";

import React from 'react';
import { motion } from 'framer-motion';
import GoogleMapComponent from '@/components/googlemapcomponent';

interface ServiceAreaInfo {
  applianceUsage: string;
  commonIssues: string;
  serviceNotes: string;
}

interface ServiceAreaCoverageSectionProps {
  areaName: string;
  mapImage?: string; // Kept for backwards compatibility with existing pages
  localInfo: ServiceAreaInfo;
  responseTime?: string;
}

const ServiceAreaCoverageSection = ({
  areaName,
  // mapImage not used as we're now using GoogleMapComponent
  localInfo,
  responseTime,
}: ServiceAreaCoverageSectionProps) => {
  return (
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
                <GoogleMapComponent 
                  area={areaName}
                  height="100%"
                  width="100%"
                  showCompanyMarker={true}
                />
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <h3 className="text-3xl font-semibold text-[#1d1d1f] mb-6">Our {areaName} Coverage</h3>
              <p className="text-[#424245] mb-6 leading-relaxed">
                {localInfo.applianceUsage}
              </p>
              <p className="text-[#424245] mb-8 leading-relaxed">
                {localInfo.commonIssues}
              </p>
              
              <div className="bg-[#f5f5f7] rounded-2xl p-6 mb-8">
                <h4 className="text-xl font-medium text-[#1d1d1f] mb-3">About Our {areaName} Service</h4>
                <p className="text-[#424245]">
                  {localInfo.serviceNotes}
                </p>
              </div>
              
              {responseTime && (
                <div className="flex items-center gap-4">
                  <div className="bg-[#0071e3] rounded-full p-3">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="text-[#1d1d1f] font-medium">
                    {responseTime}
                  </p>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreaCoverageSection; 