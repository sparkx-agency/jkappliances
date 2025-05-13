import { ServiceItem } from '@/components/sections/common/ServicesTabSection';

// Define the standard service IDs that match our priority order
export const standardServiceIds = [
  'refrigerator-repair',
  'washer-repair',
  'dryer-repair',
  'stove-repair',
  'oven-repair',
  'dishwasher-repair'
];

// Standard images for each service type
export const serviceImageMap: Record<string, string> = {
  'refrigerator-repair': '/images/servicestab/1.webp',
  'washer-repair': '/images/servicestab/2.webp',
  'dryer-repair': '/images/servicestab/3.webp',
  'dishwasher-repair': '/images/servicestab/6.webp',
  'oven-repair': '/images/servicestab/5.webp',
  'stove-repair': '/images/servicestab/4.webp',
};

// Standard service descriptions that can be reused across areas
export const standardServiceDescriptions: Record<string, string> = {
  'refrigerator-repair': 'Our expert technicians specialize in diagnosing and repairing all refrigerator issues. From temperature regulation problems to ice maker malfunctions, we handle all refrigerator brands and models with professional care and attention to detail.',
  'washer-repair': 'We provide comprehensive washing machine repair services for all major brands. Our technicians are skilled at fixing issues like unusual noises, water leaks, drainage problems, and electronic control malfunctions.',
  'dryer-repair': "Our professional dryer repair service addresses all common problems including units that won't heat, strange noises, excessive vibration, and sensor malfunctions. We service both gas and electric models from all major manufacturers.",
  'stove-repair': "Our stove repair services cover all types of cooktops and ranges. We fix issues with burners that won't heat, temperature regulation problems, electronic control failures, and gas connection issues.",
  'oven-repair': "We provide expert oven repair services for all types of ovens including conventional, convection, and dual-fuel models. Our technicians fix heating elements, temperature inaccuracies, door issues, and control panel problems.",
  'dishwasher-repair': "Our dishwasher repair service addresses all common issues like inadequate cleaning, leaks, drainage problems, and unusual noises. We service all major brands and ensure your dishwasher runs efficiently.",
};

// Standard common services that can be customized per area
export const standardCommonServices: Record<string, string[]> = {
  'refrigerator-repair': [
    'Temperature regulation issues',
    'Ice maker repairs',
    'Water dispenser problems',
    'Unusual noises and vibrations',
    'Door seal replacement',
    'Compressor and fan motor repairs'
  ],
  'washer-repair': [
    'Leaking and drainage problems',
    'Excessive vibration and noise',
    'Spin cycle malfunctions',
    'Control board repairs',
    'Door latch and seal issues',
    'Water inlet valve replacement'
  ],
  'dryer-repair': [
    'No heat or inadequate heating',
    'Excessive noise or vibration',
    'Drum not turning properly',
    'Thermostat and sensor issues',
    'Vent cleaning and maintenance',
    'Belt and motor repairs'
  ],
  'stove-repair': [
    'Burner failure or uneven heating',
    'Gas connection issues',
    'Electronic ignition problems',
    'Temperature control issues',
    'Control panel malfunctions',
    'Power supply issues'
  ],
  'oven-repair': [
    'Temperature inaccuracy',
    'Heating element replacement',
    'Door hinge and seal repairs',
    'Self-cleaning function issues',
    'Sensor and thermostat calibration',
    'Control panel malfunctions'
  ],
  'dishwasher-repair': [
    'Poor cleaning performance',
    'Leaking issues',
    'Drainage problems',
    'Unusual noise during operation',
    'Dispenser malfunctions',
    'Door latch and seal repairs'
  ]
};

// Function to create a complete set of standard services
export function createStandardServices(areaName: string): ServiceItem[] {
  return standardServiceIds.map(id => ({
    id,
    name: `${id.split('-')[0].charAt(0).toUpperCase() + id.split('-')[0].slice(1)} Repair`,
    description: standardServiceDescriptions[id],
    commonServices: standardCommonServices[id]
  }));
}

// Function to get service image based on service ID
export function getServiceImage(serviceId: string, providedImage?: string): string {
  // If image is provided, use that
  if (providedImage) {
    return providedImage;
  }
  
  // Return mapped image or default if not found
  return serviceImageMap[serviceId] || '/images/servicestab/appliance-repair-default.webp';
} 