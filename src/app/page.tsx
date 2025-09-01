import dynamic from 'next/dynamic';
import HeroSection from '@/components/sections/HeroSection';
import ServicesSection from '@/components/sections/ServicesSection';
import LazySection from '@/components/ui/LazySection';
import TestimonialsSliderSection from '@/components/sections/common/TestimonialsSliderSection';
import CommonCouponSection from '@/components/sections/common/CommonCouponSection';
import NewsletterSection from '@/components/sections/NewsletterSection';
import BrandsSliderSection from '@/components/sections/brands/BrandsSliderSection';
import { popularBrands } from '@/data/brandsData';
import ModernCTASection from '@/components/sections/common/ModernCTASection';
import UrgencySection from '@/components/sections/common/UrgencySection';
import TrustBadgesSection from '@/components/sections/common/TrustBadgesSection';


// Dynamically import sections that are below the fold for code splitting
const WhyChooseUsSection = dynamic(() => import('@/components/sections/WhyChooseUsSection'), {
  loading: () => <div className="h-96 bg-gray-50"></div>,
  ssr: true,
});

const ServiceAreasSection = dynamic(() => import('@/components/sections/areas/ServiceAreasSection'), {
  loading: () => <div className="h-96 bg-gray-50"></div>,
  ssr: true,
});

const BookingSection = dynamic(() => import('@/components/sections/BookingSection'), {
  loading: () => <div className="h-64 bg-gray-50"></div>,
  ssr: true,
});

const FAQSection = dynamic(() => import('@/components/sections/FAQSection'), {
  loading: () => <div className="h-96 bg-gray-50"></div>,
  ssr: true,
});

const ContactSection = dynamic(() => import('@/components/sections/ContactSection'), {
  loading: () => <div className="h-64 bg-gray-50"></div>,
  ssr: true,
});

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      
      <BrandsSliderSection 
        brands={popularBrands}
        title="Top Appliance Brands We Service"
        subtitle="Our certified technicians are experienced in repairing all major appliance brands"
      />
      
      <LazySection offset={200}>
        <WhyChooseUsSection />
      </LazySection>
      
      <TrustBadgesSection />
      
      <LazySection offset={200}>
      <TestimonialsSliderSection
        title="What Our Customers Say"
        subtitle="Hear from our satisfied clients"
        style="mixed"
      />
      </LazySection>
      
      <LazySection offset={200}>
        <ServiceAreasSection />
      </LazySection>
      
      <UrgencySection />
      
      <LazySection offset={200}>
        <CommonCouponSection />
      </LazySection>

      <LazySection offset={200}>
        <BookingSection />
      </LazySection>
      
      <LazySection offset={200}>
        <FAQSection />
      </LazySection>
      
      <LazySection offset={200}>
        <ContactSection />
      </LazySection>
      
      <LazySection offset={200}>
        <ModernCTASection 
          style="hybrid"
          title="Ready to Fix Your Appliance?"
          subtitle="Book our professional appliance repair service today. We provide transparent pricing and a 1-year parts and labor warranty."
          primaryButtonText="Book Your Repair"
          secondaryButtonText="Call Us"
        />
      </LazySection>

      <LazySection offset={200}>
        <NewsletterSection />
      </LazySection>
    </>
  );
}
