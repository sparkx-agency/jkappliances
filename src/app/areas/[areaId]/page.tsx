import { Metadata } from 'next';
import AreaHero from '@/components/sections/AreaHero';
import AreaServicesSection from '@/components/sections/AreaServicesSection';
import BlogSection from '@/components/sections/BlogSection';
import ServiceCTA from '@/components/sections/ServiceCTA';
import BrandsSliderSection from '@/components/sections/BrandsSliderSection';

export async function generateMetadata({ params }: { params: { areaId: string } }): Promise<Metadata> {
  // Here you would typically fetch area data based on areaId
  // For now, using a static example
  const areaName = formatAreaName(params.areaId);
  
  return {
    title: `Appliance Repair in ${areaName} | JK Appliance Repair`,
    description: `Fast, reliable appliance repair services in ${areaName}. Expert technicians, same-day service, and affordable rates for all major appliance brands.`,
  };
}

// Helper function to format area name from URL slug
function formatAreaName(areaId: string): string {
  // Convert "area-name" to "Area Name"
  return areaId
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

export default function AreaDetailPage({ params }: { params: { areaId: string } }) {
  const areaId = params.areaId;
  const areaName = formatAreaName(areaId);
  
  // Sample data for services offered in this area
  const areaServices = [
    {
      id: 'refrigerator-repair',
      name: 'Refrigerator Repair',
      image: '/images/services/refrigerator.webp',
      description: `Expert refrigerator repair in ${areaName}. Our certified technicians can diagnose and fix any refrigerator issue, from cooling problems to ice maker failures, for all major brands.`,
      commonServices: [
        'Cooling system repairs',
        'Ice maker troubleshooting',
        'Temperature control issues',
        'Water dispenser repairs',
        'Seal and gasket replacement',
        'Compressor diagnostics and repair'
      ],
      icon: '/images/icons/fridge.png'
    },
    {
      id: 'washer-repair',
      name: 'Washer Repair',
      image: '/images/services/washer.webp',
      description: `Professional washing machine repair services throughout ${areaName}. We fix all types of washers including front-load, top-load, and high-efficiency models from all major brands.`,
      commonServices: [
        'Spin cycle problems',
        'Drainage issues',
        'Motor and belt repairs',
        'Door latch problems',
        'Control board diagnostics',
        'Bearing and drum repairs'
      ],
      icon: '/images/icons/washer.png'
    },
    {
      id: 'dryer-repair',
      name: 'Dryer Repair',
      image: '/images/services/dryer.webp',
      description: `Fast, reliable dryer repair service in ${areaName}. Our technicians can fix all common dryer issues including heating problems, excessive noise, and sensor malfunctions.`,
      commonServices: [
        'Heating element replacement',
        'Vent cleaning and repair',
        'Drum belt replacement',
        'Thermostat and sensor repairs',
        'Timer and control issues',
        'Motor and bearing replacements'
      ],
      icon: '/images/icons/dryer.png'
    },
    {
      id: 'dishwasher-repair',
      name: 'Dishwasher Repair',
      image: '/images/services/dishwasher.webp',
      description: `Expert dishwasher repair services for ${areaName} residents. We resolve issues like poor cleaning performance, leaks, drainage problems, and unusual noises for all major brands.`,
      commonServices: [
        'Leak detection and repair',
        'Drainage system unclogging',
        'Spray arm repairs',
        'Pump and motor issues',
        'Door seal replacements',
        'Control panel troubleshooting'
      ],
      icon: '/images/icons/dishwasher.png'
    },
    {
      id: 'oven-repair',
      name: 'Oven Repair',
      image: '/images/services/oven.webp',
      description: `Professional oven and range repair in ${areaName}. Our technicians can fix temperature issues, ignition problems, heating elements, and control panels for all oven types.`,
      commonServices: [
        'Heating element replacement',
        'Temperature sensor calibration',
        'Igniter repairs for gas ovens',
        'Control board diagnostics',
        'Door hinge and seal repairs',
        'Self-cleaning feature issues'
      ],
      icon: '/images/icons/stove.png'
    }
  ];
  
  // Sample data for brands serviced in this area
  const brands = [
    { id: 'samsung', name: 'Samsung', logo: '/images/brands/samsung.png', link: '/brands/samsung' },
    { id: 'lg', name: 'LG', logo: '/images/brands/lg.png', link: '/brands/lg' },
    { id: 'whirlpool', name: 'Whirlpool', logo: '/images/brands/whirlpool.png', link: '/brands/whirlpool' },
    { id: 'ge', name: 'GE', logo: '/images/brands/ge.png', link: '/brands/ge' },
    { id: 'maytag', name: 'Maytag', logo: '/images/brands/maytag.png', link: '/brands/maytag' },
    { id: 'bosch', name: 'Bosch', logo: '/images/brands/bosch.png', link: '/brands/bosch' },
    { id: 'kitchenaid', name: 'KitchenAid', logo: '/images/brands/kitchenaid.png', link: '/brands/kitchenaid' },
    { id: 'frigidaire', name: 'Frigidaire', logo: '/images/brands/frigidaire.png', link: '/brands/frigidaire' }
  ];

  return (
    <div className="pt-24">
      <AreaHero 
        areaName={areaName}
        subtitle={`Fast, Reliable Appliance Repair Services in ${areaName}`}
        description={`We provide expert appliance repair throughout ${areaName} with same-day service, certified technicians, and affordable rates. All repairs are backed by our satisfaction guarantee.`}
      />
      
      <AreaServicesSection 
        areaName={areaName} 
        services={areaServices} 
      />
      
      <BrandsSliderSection 
        brands={brands}
        locationName={areaName}
      />
      
      {/* Blog Section - Area specific articles */}
      <BlogSection
        title={`Appliance Tips & Guides for ${areaName} Residents`}
        subtitle={`Expert advice on maintaining and troubleshooting your appliances in ${areaName}`}
        areaId={areaId}
        showCategories={false}
        limit={3}
      />
      
      <ServiceCTA 
        title={`Book Your Appliance Repair in ${areaName}`}
        subtitle="Our certified technicians are ready to help with same-day service"
      />
    </div>
  );
} 