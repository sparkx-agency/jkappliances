"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

// Service data type
type ServiceData = {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  href: string;
};

// All services data
const allServices: ServiceData[] = [
  {
    id: 'refrigerator-repair',
    title: 'Refrigerator Repair',
    description: 'Expert refrigerator repair for all major brands. Fast, reliable service to keep your food fresh.',
    imageSrc: '/images/services/refrigerator-repair.webp',
    href: '/services/refrigerator-repair',
  },
  {
    id: 'dishwasher-repair',
    title: 'Dishwasher Repair',
    description: 'Professional dishwasher repair services. We fix leaks, drainage issues, and performance problems.',
    imageSrc: '/images/services/dishwasher-repair.webp',
    href: '/services/dishwasher-repair',
  },
  {
    id: 'washer-repair',
    title: 'Washer Repair',
    description: 'Washing machine repair for all types and brands. Fix leaks, spin cycles, and error codes.',
    imageSrc: '/images/services/washer-repair.webp',
    href: '/services/washer-repair',
  },
  {
    id: 'dryer-repair',
    title: 'Dryer Repair',
    description: 'Dryer not heating or turning on? Our experts can diagnose and fix any dryer issue quickly.',
    imageSrc: '/images/services/dryer-repair.webp',
    href: '/services/dryer-repair',
  },
  {
    id: 'stove-repair',
    title: 'Stove & Cooktop Repair',
    description: 'Repair services for all types of stoves and cooktops. Gas, electric, and induction repairs.',
    imageSrc: '/images/services/stove-cooktop-repair.webp',
    href: '/services/stove-repair',
  },
  {
    id: 'oven-repair',
    title: 'Oven Repair',
    description: 'Professional oven repair services. We fix temperature issues, heating elements, and more.',
    imageSrc: '/images/services/oven-repair.webp',
    href: '/services/oven-repair',
  },
  {
    id: 'freezer-repair',
    title: 'Freezer Repair',
    description: 'Expert freezer repair for all models. Fix temperature issues, frost buildup, and more.',
    imageSrc: '/images/services/freezer-repair.webp',
    href: '/services/freezer-repair',
  },
  {
    id: 'gas-appliance-repair',
    title: 'Gas Appliance Repair',
    description: 'Safe, certified repair of all gas appliances. Our technicians are trained in gas safety protocols.',
    imageSrc: '/images/services/gas-appliance-repair.webp',
    href: '/services/gas-appliance-repair',
  },
  {
    id: 'installation',
    title: 'Installation Services',
    description: 'Professional installation of all major appliances. Proper setup ensures longer life and better performance.',
    imageSrc: '/images/services/installation.webp',
    href: '/services/installation',
  },
  {
    id: 'maintenance',
    title: 'Maintenance Services',
    description: 'Preventative maintenance plans to keep your appliances running efficiently and prevent costly repairs.',
    imageSrc: '/images/services/maintenance.webp',
    href: '/services/maintenance',
  },
];

// Service relationships - each service is related to specific other services
const serviceRelationships: Record<string, string[]> = {
  'refrigerator-repair': ['freezer-repair', 'installation', 'maintenance'],
  'dishwasher-repair': ['installation', 'maintenance', 'gas-appliance-repair'],
  'washer-repair': ['dryer-repair', 'installation', 'maintenance'],
  'dryer-repair': ['washer-repair', 'installation', 'maintenance'],
  'stove-cooktop-repair': ['oven-repair', 'gas-appliance-repair', 'maintenance'],
  'oven-repair': ['stove-cooktop-repair', 'gas-appliance-repair', 'maintenance'],
  'freezer-repair': ['refrigerator-repair', 'installation', 'maintenance'],
  'gas-appliance-repair': ['stove-cooktop-repair', 'oven-repair', 'maintenance'],
  'installation': ['maintenance', 'refrigerator-repair', 'dishwasher-repair'],
  'maintenance': ['installation', 'refrigerator-repair', 'washer-repair'],
  'business-solutions': ['commercial-repair', 'maintenance', 'installation'],
};

interface RelatedServicesSectionProps {
  currentServiceId?: string;
  maxServices?: number;
}

const RelatedServicesSection: React.FC<RelatedServicesSectionProps> = ({ 
  currentServiceId, 
  maxServices = 3 
}) => {
  const pathname = usePathname();
  const [relatedServices, setRelatedServices] = useState<ServiceData[]>([]);
  
  useEffect(() => {
    // Get current service ID from pathname if not provided
    let serviceId = currentServiceId;
    if (!serviceId) {
      const pathParts = pathname.split('/');
      serviceId = pathParts[pathParts.length - 1];
    }
    
    // Find related services based on the relationships defined
    let relatedIds = serviceRelationships[serviceId] || [];
    
    // If no relationships defined or found, show a default set of popular services
    if (relatedIds.length === 0) {
      relatedIds = ['refrigerator-repair', 'washer-repair', 'dishwasher-repair'];
    }
    
    // Get the service data for the related IDs
    const filteredServices = allServices.filter(service => 
      relatedIds.includes(service.id) && service.id !== serviceId
    ).slice(0, maxServices);
    
    setRelatedServices(filteredServices);
  }, [pathname, currentServiceId, maxServices]);

  if (relatedServices.length === 0) return null;

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Related Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our other appliance repair services that might be helpful for your home
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {relatedServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link 
                href={service.href}
                className="block h-full bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={service.imageSrc}
                    alt={service.title}
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                  <div className="mt-4 text-blue-600 font-medium flex items-center">
                    Learn more
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedServicesSection; 