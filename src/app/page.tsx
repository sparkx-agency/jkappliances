import dynamic from 'next/dynamic';
import HeroSection from '@/components/sections/HeroSection';
import ServicesSection from '@/components/sections/ServicesSection';
import LazySection from '@/components/ui/LazySection';

// Dynamically import sections that are below the fold for code splitting
const WhyChooseUsSection = dynamic(() => import('@/components/sections/WhyChooseUsSection'), {
  loading: () => <div className="h-96 bg-gray-50"></div>,
  ssr: true,
});

const TestimonialsSection = dynamic(() => import('@/components/sections/TestimonialsSection'), {
  loading: () => <div className="h-96 bg-gray-50"></div>,
  ssr: true,
});

const ServiceAreasSection = dynamic(() => import('@/components/sections/ServiceAreasSection'), {
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
      
      <LazySection offset={200}>
        <WhyChooseUsSection />
      </LazySection>
      
      <LazySection offset={200}>
        <TestimonialsSection />
      </LazySection>
      
      <LazySection offset={200}>
        <ServiceAreasSection />
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
    </>
  );
}
