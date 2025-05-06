import { BrandItem } from '@/components/sections/brands/BrandsSliderSection';

// Main brands data array
export const popularBrands: BrandItem[] = [
  {
    id: 'samsung',
    name: 'Samsung',
    logo: '/images/brands/samsung.webp',
    link: '/brands/samsung'
  },
  {
    id: 'lg',
    name: 'LG',
    logo: '/images/brands/lg.webp',
    link: '/brands/lg'
  },
  {
    id: 'whirlpool',
    name: 'Whirlpool',
    logo: '/images/brands/whirlpool.webp',
    link: '/brands/whirlpool'
  },
  {
    id: 'ge',
    name: 'GE',
    logo: '/images/brands/ge.webp',
    link: '/brands/ge'
  },
  {
    id: 'maytag',
    name: 'Maytag',
    logo: '/images/brands/maytag.webp',
    link: '/brands/maytag'
  },
  {
    id: 'kitchenaid',
    name: 'KitchenAid',
    logo: '/images/brands/kitchen-aid.webp',
    link: '/brands/kitchenaid'
  },
  {
    id: 'electrolux',
    name: 'Electrolux',
    logo: '/images/brands/electrolux.webp',
    link: '/brands/electrolux'
  },
  {
    id: 'bosch',
    name: 'Bosch',
    logo: '/images/brands/bosch.webp',
    link: '/brands/bosch'
  },
  {
    id: 'miele',
    name: 'Miele',
    logo: '/images/brands/miele.webp',
    link: '/brands/miele'
  },
  {
    id: 'frigidaire',
    name: 'Frigidaire',
    logo: '/images/brands/frigidaire.webp',
    link: '/brands/frigidaire'
  }
];

// Additional brands
export const additionalBrands: BrandItem[] = [
  {
    id: 'kenmore',
    name: 'Kenmore',
    logo: '/images/brands/kenmore.webp',
    link: '/brands/kenmore'
  },
  {
    id: 'sub-zero',
    name: 'Sub-Zero',
    logo: '/images/brands/sub-zero.webp',
    link: '/brands/sub-zero'
  },
  {
    id: 'wolf',
    name: 'Wolf',
    logo: '/images/brands/wolf.webp',
    link: '/brands/wolf'
  },
  {
    id: 'viking',
    name: 'Viking',
    logo: '/images/brands/viking.webp',
    link: '/brands/viking'
  },
  {
    id: 'thermador',
    name: 'Thermador',
    logo: '/images/brands/thermador.webp',
    link: '/brands/thermador'
  }
];

// Combined brands for comprehensive lists
export const allBrands: BrandItem[] = [...popularBrands, ...additionalBrands]; 