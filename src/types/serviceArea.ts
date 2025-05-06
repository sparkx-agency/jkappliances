// Service area data types

export interface ServiceAreaAddress {
  street: string;
  city: string;
  province: string;
  postalCode: string;
}

export interface ServiceAreaLocalInfo {
  applianceUsage: string;
  commonIssues: string;
  serviceNotes: string;
}

export interface ServiceAreaTestimonial {
  text: string;
  author: string;
  location: string;
  rating: number;
}

export interface ServiceAreaProject {
  title: string;
  location: string;
  description: string;
  image: string;
}

export interface PopularService {
  id: string;
  name: string;
  image: string;
  description: string;
}

export interface ServiceAreaData {
  id: string;
  name: string;
  fullName: string;
  description: string;
  heroImage: string;
  neighborhoodImage: string;
  mapImage: string;
  
  // Location information
  address: ServiceAreaAddress;
  
  // Service radius and coverage details
  serviceRadius: string;
  responseTime: string;
  
  // Neighborhoods served
  neighborhoods: string[];
  
  // Most common services in this area
  popularServices: PopularService[];
  
  // Recent projects in this area
  recentProjects: ServiceAreaProject[];
  
  // Testimonials specific to this area
  testimonials: ServiceAreaTestimonial[];
  
  // Local information - can be tailored per service area
  localInfo: ServiceAreaLocalInfo;
} 