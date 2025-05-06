"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { 
  getServiceImage as getServiceImageFromData,
  standardServiceDescriptions,
  standardCommonServices
} from '@/data/servicesData';

export interface ServiceItem {
  id: string;
  name: string;
  image?: string; // Now optional since we'll generate it internally if not provided
  description: string;
  commonItems?: string[]; // For brand services (common issues)
  commonServices?: string[]; // For area services
  icon?: string; // Optional icon path for mobile view
}

interface ServicesTabSectionProps {
  mode: 'brand' | 'area'; // Determines the context: brand appliances or service area
  contextName: string; // Either the brand name or the area name
  services: ServiceItem[];
  showIcons?: boolean; // Whether to show icons in mobile view
  ctaLink?: string; // Optional custom CTA link path
  ctaText?: string; // Optional custom CTA text
  title?: string; // Optional custom title
  subtitle?: string; // Optional custom subtitle
}

/**
 * A unified component for displaying service tabs that works for both brand and area contexts.
 * 
 * Example usage for brand:
 * ```tsx
 * <ServicesTabSection
 *   mode="brand"
 *   contextName="Samsung"
 *   services={samsungServices}
 * />
 * ```
 * 
 * Example usage for area:
 * ```tsx
 * <ServicesTabSection
 *   mode="area"
 *   contextName="Toronto"
 *   services={torontoServices}
 * />
 * ```
 */
const ServicesTabSection: React.FC<ServicesTabSectionProps> = ({ 
  mode, 
  contextName, 
  services, 
  showIcons = mode === 'area', 
  ctaLink = '/services',
  ctaText = 'View All Our Services',
  title,
  subtitle
}) => {
  // Define priority service types in the exact order we want to display them
  const priorityServiceIds = [
    'refrigerator-repair',
    'washer-repair',
    'dryer-repair',
    'stove-repair',
    'oven-repair', 
    'dishwasher-repair'
  ];
  
  // Create a map to hold our filtered services in the correct order
  const orderedServices: { [key: string]: ServiceItem | undefined } = {
    'refrigerator-repair': undefined,
    'washer-repair': undefined,
    'dryer-repair': undefined,
    'stove-repair': undefined,
    'oven-repair': undefined,
    'dishwasher-repair': undefined
  };
  
  // First try to find exact matches for our priority IDs
  priorityServiceIds.forEach(priorityId => {
    const exactMatch = services.find(service => service.id === priorityId);
    if (exactMatch) {
      orderedServices[priorityId] = exactMatch;
    }
  });
  
  // For any remaining slots, try to find services with similar names/IDs
  priorityServiceIds.forEach(priorityId => {
    if (!orderedServices[priorityId]) {
      const baseType = priorityId.replace('-repair', '');
      
      // Try to find a service with a similar ID or name
      const similarService = services.find(service => 
        !Object.values(orderedServices).includes(service) && // Don't reuse services already assigned
        (service.id.includes(baseType) || service.name.toLowerCase().includes(baseType))
      );
      
      if (similarService) {
        orderedServices[priorityId] = similarService;
      }
    }
  });
  
  // Handle special case for combined oven & stove services
  const combinedOvenStoveService = services.find(service => 
    (service.id.includes('oven') && service.id.includes('stove')) || 
    (service.name.toLowerCase().includes('oven') && service.name.toLowerCase().includes('stove'))
  );
  
  if (combinedOvenStoveService) {
    // If we have a combined service, duplicate it for both oven and stove slots
    if (!orderedServices['oven-repair']) {
      orderedServices['oven-repair'] = {...combinedOvenStoveService, id: 'oven-repair-split'};
    }
    if (!orderedServices['stove-repair']) {
      orderedServices['stove-repair'] = {...combinedOvenStoveService, id: 'stove-repair-split'};
    }
  }
  
  // If we still have empty slots, fill them with any remaining services
  const usedServices = Object.values(orderedServices).filter(Boolean) as ServiceItem[];
  const remainingServices = services.filter(service => 
    !usedServices.some(s => s.id === service.id) // Don't include services already used
  );
  
  priorityServiceIds.forEach(priorityId => {
    if (!orderedServices[priorityId] && remainingServices.length > 0) {
      orderedServices[priorityId] = remainingServices.shift();
    }
  });
  
  // Convert our ordered map back to a sorted array, ensuring exact order
  const filteredServices = priorityServiceIds
    .map(id => orderedServices[id])
    .filter(Boolean) as ServiceItem[];
  
  // Ensure we have 6 slots by adding dummy services if needed
  while (filteredServices.length < 6 && services.length > 0) {
    const missingServiceIndex = filteredServices.length;
    const missingServiceId = priorityServiceIds[missingServiceIndex];
    
    // Create a proper dummy service based on the missing service ID
    const dummyService = {
      id: missingServiceId || `dummy-${missingServiceIndex}`,
      name: (missingServiceId ? missingServiceId.split('-')[0] : `service-${missingServiceIndex}`).charAt(0).toUpperCase() 
           + (missingServiceId ? missingServiceId.split('-')[0] : `service-${missingServiceIndex}`).slice(1) + ' Repair',
      description: standardServiceDescriptions[missingServiceId] || 'Service description not available.',
      commonServices: standardCommonServices[missingServiceId] || []
    };
    
    filteredServices.push(dummyService);
  }
  
  // Format tab names
  const formatTabName = (service: ServiceItem): string => {
    let name = service.name;
    
    // Remove contextName and "Repair" from the name
    if (mode === 'brand') {
      name = name.replace(`${contextName} `, '').replace(' Repair', '');
    } else {
      name = name.replace(' Repair', '');
    }
    
    // Check if this is a split service from a combined one
    if (service.id === 'oven-repair-split') {
      return 'Oven';
    } else if (service.id === 'stove-repair-split') {
      return 'Stove';  
    }
    
    // Simplify names for consistency
    if (name.toLowerCase().includes('refrigerator')) return 'Refrigerator';
    if (name.toLowerCase().includes('dishwasher')) return 'Dishwasher';
    if (name.toLowerCase().includes('washer')) return 'Washer';
    if (name.toLowerCase().includes('dryer')) return 'Dryer';
    if (name.toLowerCase().includes('oven')) return 'Oven';
    if (name.toLowerCase().includes('stove')) return 'Stove';
    
    return name.trim();
  };
  
  const [activeTab, setActiveTab] = useState<string>(filteredServices[0]?.id || '');
  const [isMobile, setIsMobile] = useState(false);
  
  // Default titles based on mode if not provided
  const defaultTitle = mode === 'brand' 
    ? `${contextName} Appliances We Repair`
    : `Appliance Repair Services in ${contextName}`;
    
  const defaultSubtitle = mode === 'brand'
    ? `Our certified technicians are experts in all ${contextName} appliance models.`
    : `Our certified technicians provide expert appliance repair throughout ${contextName}.`;
  
  const displayTitle = title || defaultTitle;
  const displaySubtitle = subtitle || defaultSubtitle;
  
  // Function to get service image path based on service ID
  const getServiceImage = (serviceId: string, providedImage?: string): string => {
    return getServiceImageFromData(serviceId, providedImage);
  }
  
  // Check if on mobile
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Set initial value
    handleResize();
    
    // Add resize listener
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Find active service - handle the split service case
  const activeService = filteredServices.find(service => service.id === activeTab) ||
    (activeTab === 'oven-repair-split' || activeTab === 'stove-repair-split' ? 
      services.find(s => 
        (s.id.includes('oven') && s.id.includes('stove')) || 
        (s.name.toLowerCase().includes('oven') && s.name.toLowerCase().includes('stove'))
      ) : 
      undefined);

  // Get appropriate heading based on mode
  const getServiceHeading = () => {
    if (mode === 'brand') {
      return `${contextName} ${activeService?.name.replace(`${contextName} `, '')}`;
    } else {
      return `${activeService?.name} in ${contextName}`;
    }
  };

  // Get appropriate list heading based on mode
  const getListHeading = () => {
    if (mode === 'brand') {
      return 'Common Issues We Fix';
    } else {
      return `Our ${activeService?.name.replace('Repair', '').trim()} Services`;
    }
  };

  // Get appropriate info box heading based on mode
  const getInfoBoxHeading = () => {
    if (mode === 'brand') {
      return "Don't see your issue listed?";
    } else {
      return `Need service in ${contextName}?`;
    }
  };

  // Get appropriate info box content based on mode
  const getInfoBoxContent = () => {
    if (mode === 'brand') {
      return `We can still help! Our technicians are trained to handle all ${contextName} appliance problems, even uncommon ones.`;
    } else {
      return `Our technicians are available for same-day service throughout ${contextName} for all major appliance brands.`;
    }
  };

  // Get appropriate secondary info box heading based on mode
  const getSecondaryInfoHeading = () => {
    if (mode === 'brand') {
      return `All ${contextName} Models Supported`;
    } else {
      return `Fast Service in ${contextName}`;
    }
  };

  // Get appropriate secondary info box content based on mode
  const getSecondaryInfoContent = () => {
    if (mode === 'brand' && activeService) {
      return `Our technicians are certified to repair all ${contextName} ${activeService.name.replace(`${contextName} `, '').replace('Repair', '')} models, from the newest smart appliances to older models.`;
    } else if (activeService) {
      return `We provide rapid response times for ${activeService.name.toLowerCase()} throughout ${contextName}, with same-day service available for most repairs.`;
    }
    return '';
  };

  // Get the appropriate list items based on service type
  const getListItems = (service: ServiceItem): string[] => {
    // For area services, use commonServices, for brand services use commonItems
    return mode === 'area' ? (service.commonServices || []) : (service.commonItems || []);
  };

  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-semibold text-gray-900 mb-8">
            {displayTitle}
          </h2>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto font-light">
            {displaySubtitle}
          </p>
        </motion.div>

        {/* Tabs Navigation - Always show 6 tabs */}
        <div className="flex justify-center mb-6">
          <div className="max-w-full overflow-x-auto py-3 no-scrollbar">
            <ul className="flex space-x-1 sm:space-x-2 px-1">
              {filteredServices.map((service) => (
                <li key={service.id} className="flex-shrink-0">
                  <button
                    onClick={() => setActiveTab(service.id)}
                    className={`relative transition-all whitespace-nowrap py-3 px-4 sm:px-6 rounded-full text-sm sm:text-base ${
                      activeTab === service.id
                        ? 'bg-gray-900 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {formatTabName(service)}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Content Area */}
        <AnimatePresence mode="wait">
          {activeService && (
            <motion.div
              key={activeService.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 lg:grid-cols-5 gap-8 md:gap-12 mt-4"
            >
              {/* Text Content - Takes up 3 columns on large screens */}
              <div className="lg:col-span-3 order-2 lg:order-1">
                <h2 className="text-3xl font-semibold text-gray-900 mb-6">
                  {getServiceHeading()}
                </h2>
                
                <div className="prose prose-lg max-w-none mb-10">
                  <p className="text-gray-600 font-light leading-relaxed">
                    {activeService.description}
                  </p>
                </div>
                
                <div className="mb-10">
                  <h3 className="text-xl font-medium text-gray-900 mb-6">
                    {getListHeading()}
                  </h3>
                  <ul className="space-y-4">
                    {getListItems(activeService).map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="flex-shrink-0 h-6 w-6 bg-gray-900 rounded-full flex items-center justify-center mr-4 mt-0.5">
                          <svg className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-gray-50 rounded-2xl p-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">
                    {getInfoBoxHeading()}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {getInfoBoxContent()}
                  </p>
                  <Link 
                    href={`/services/${activeService.id}`}
                    className="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors"
                  >
                    <span>Book a Repair</span>
                    <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>
              
              {/* Image - Takes up 2 columns on large screens */}
              <div className="lg:col-span-2 order-1 lg:order-2">
                <div className="relative h-[500px] w-full rounded-3xl overflow-hidden shadow-sm hidden md:block">
                  <Image
                    src={getServiceImage(activeService.id, activeService.image)}
                    alt={mode === 'brand' ? activeService.name : `${activeService.name} in ${contextName}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 40vw"
                    className="object-cover"
                    priority
                  />
                </div>
                
                {/* Secondary info box */}
                <div className="mt-8 bg-gray-50 p-6 rounded-2xl hidden md:block">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">
                    {getSecondaryInfoHeading()}
                  </h3>
                  <p className="text-gray-600">
                    {getSecondaryInfoContent()}
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-20 text-center"
        >
          <Link 
            href={ctaLink}
            className="inline-flex items-center px-8 py-4 rounded-full bg-gray-900 text-white font-medium hover:bg-gray-800 transition-colors shadow-sm text-lg"
          >
            {ctaText}
            <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesTabSection; 