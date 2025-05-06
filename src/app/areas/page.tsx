import ServiceAreasSection from '@/components/sections/areas/ServiceAreasSection';
import ServicesTabSection from '@/components/sections/common/ServicesTabSection';
import { createStandardServices } from '@/data/servicesData';

const ServiceAreasPage = () => {
  return (
    <div className="pt-24">
      <ServiceAreasSection />
    </div>
  );
};

export default ServiceAreasPage; 