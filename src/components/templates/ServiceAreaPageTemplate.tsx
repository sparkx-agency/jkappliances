"use client";

import React from 'react';
import NeighborhoodSection, { AreaData } from '@/components/sections/areas/NeighborhoodSection';
import ServicesSectionArea from '@/components/sections/areas/ServicesSectionArea';
import BookingSection from '@/components/sections/BookingSection';
import AreaServicesSection from '@/components/sections/common/ServicesTabSection';
import type { ServiceItem } from '@/components/sections/common/ServicesTabSection';
import BrandsSliderSection from '@/components/sections/brands/BrandsSliderSection';
import type { BrandItem } from '@/components/sections/brands/BrandsSliderSection';
import BlogSection from '@/components/sections/BlogSection';
import CommonCouponSection from '@/components/sections/common/CommonCouponSection';
import ServiceAreaHeroSection from '@/components/sections/areas/ServiceAreaHeroSection';
import ServiceAreaCoverageSection from '@/components/sections/areas/ServiceAreaCoverageSection';
import type { ServiceAreaData } from '@/types/serviceArea';
import TestimonialsSliderSection from '@/components/sections/common/TestimonialsSliderSection';
import NewsletterSection from '@/components/sections/NewsletterSection';
import ModernCTASection from '@/components/sections/common/ModernCTASection';



interface ServiceAreaPageTemplateProps {
  areaData: ServiceAreaData;
  services: ServiceItem[];
  brands: BrandItem[];
}

/**
 * Template for creating service area pages.
 * 
 * Usage example:
 * ```tsx
 * // src/app/areas/your-area/page.tsx
 * import ServiceAreaPageTemplate from '@/templates/ServiceAreaPageTemplate';
 * import { yourAreaData } from './data';
 * import { yourAreaServices } from './services';
 * import { yourAreaBrands } from './brands';
 * 
 * export default function YourAreaPage() {
 *   return (
 *     <ServiceAreaPageTemplate
 *       areaData={yourAreaData}
 *       services={yourAreaServices}
 *       brands={yourAreaBrands}
 *     />
 *   );
 * }
 * ```
 */
const ServiceAreaPageTemplate: React.FC<ServiceAreaPageTemplateProps> = ({
  areaData,
  services,
  brands
}) => {
  // Convert string neighborhoods to AreaData format for NeighborhoodSection
  const neighborhoodAreas: AreaData[] = areaData.neighborhoods.map((name, index) => ({
    id: `${areaData.id}-neighborhood-${index}`,
    name
  }));
  
  return (
    <div className="bg-[#f5f5f7]">
      {/* Hero Section */}
      <ServiceAreaHeroSection 
        areaName={areaData.name}
        fullAreaName={areaData.fullName}
        heroImage={areaData.heroImage}
        description={areaData.description}
      />
      
      {/* Services Section */}
      <ServicesSectionArea areaName={areaData.name} />
      
      {/* Area Services Section */}
      <AreaServicesSection 
        mode="area"
        contextName={areaData.name}
        services={services}
      />
      
      {/* Brand Slider Section */}
      <BrandsSliderSection
        title="Top Appliance Brands We Fix"
        subtitle={`Our certified ${areaData.name} technicians are experienced in repairing all major appliance brands`}
        brands={brands}
        locationName={areaData.name}
      />
      
      {/* Service Area Coverage Section */}
      <ServiceAreaCoverageSection 
        areaName={areaData.name}
        mapImage={areaData.mapImage}
        localInfo={areaData.localInfo}
        responseTime={areaData.responseTime}
      />
      
      {/* Neighborhoods Section */}
      <NeighborhoodSection 
        title={`${areaData.name} Neighborhoods We Serve`}
        description={`From downtown to the suburbs, our technicians provide prompt, reliable service throughout ${areaData.name}.`}
        areas={neighborhoodAreas}
        mapImage={areaData.neighborhoodImage}
        companyName="JK"
        companyAddress={areaData.address.street}
      />
      
      {/* Common Coupon Section */}
      <CommonCouponSection 
        title="Save on Your Appliance Repair"
        subtitle="Use these exclusive coupons for same-day service across the Greater Toronto Area"
      />
      
      {/* Booking Section */}
      <BookingSection />

      {/* Testimonials Section */}
      <TestimonialsSliderSection
        title="What Our Customers Say"
        subtitle="Hear from our satisfied clients"
        style="mixed"
      />

      {/* Blog Section */}
      <BlogSection 
        title={`Appliance Tips for ${areaData.name} Residents`}
        subtitle={`Helpful guides and maintenance tips specifically for ${areaData.name} homeowners and residents`}
        areaId={areaData.id}
        showCategories={true}
        limit={3}
        viewAllLink={true}
      />
      
      {/* Modern CTA Section */}
      <ModernCTASection 
        style="apple"
        title={`Fast Appliance Repair in ${areaData.name}`}
        subtitle={`Our certified technicians are available for same-day service throughout ${areaData.name}. We repair all major appliance brands and models.`}
        primaryButtonText="Book a Repair"
        secondaryButtonText={`Serving ${areaData.name}`}
        secondaryButtonLink={`/areas/${areaData.id}#neighborhoods`}
      />
      
      {/* Newsletter Section */}
      <NewsletterSection />
    </div>
  );
};

export default ServiceAreaPageTemplate; 