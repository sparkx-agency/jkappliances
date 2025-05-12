/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    // Disable ESLint checking during builds - we'll fix these later
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
      },
    ],
  },
  // Add rewrites and redirects
  async rewrites() {
    return [
      // Service page rewrites - direct routes without /services/ prefix
      {
        source: '/refrigerator-repair',
        destination: '/services/refrigerator-repair',
      },
      {
        source: '/washer-repair',
        destination: '/services/washer-repair',
      },
      {
        source: '/dryer-repair',
        destination: '/services/dryer-repair',
      },
      {
        source: '/dishwasher-repair',
        destination: '/services/dishwasher-repair',
      },
      {
        source: '/oven-repair',
        destination: '/services/oven-repair',
      },
      {
        source: '/stove-repair',
        destination: '/services/stove-repair',
      },
      {
        source: '/freezer-repair',
        destination: '/services/freezer-repair',
      },
      {
        source: '/gas-appliance-repair',
        destination: '/services/gas-appliance-repair',
      },
      {
        source: '/maintenance-services',
        destination: '/services/maintenance-services',
      },
      {
        source: '/installation-services',
        destination: '/services/installation-services',
      },
      
      // Brand page rewrites - with appliance-repair suffix
      {
        source: '/samsung-appliance-repair',
        destination: '/brands/samsung',
      },
      {
        source: '/lg-appliance-repair',
        destination: '/brands/lg',
      },
      {
        source: '/whirlpool-appliance-repair',
        destination: '/brands/whirlpool',
      },
      {
        source: '/ge-appliance-repair',
        destination: '/brands/ge',
      },
      {
        source: '/bosch-appliance-repair',
        destination: '/brands/bosch',
      },
      {
        source: '/maytag-appliance-repair',
        destination: '/brands/maytag',
      },
      {
        source: '/kitchenaid-appliance-repair',
        destination: '/brands/kitchenAid',
      },
      {
        source: '/frigidaire-appliance-repair',
        destination: '/brands/frigidaire',
      },
      {
        source: '/kenmore-appliance-repair',
        destination: '/brands/kenmore',
      },
      {
        source: '/electrolux-appliance-repair',
        destination: '/brands/electrolux',
      },
      {
        source: '/miele-appliance-repair',
        destination: '/brands/miele',
      },
      {
        source: '/wolf-appliance-repair',
        destination: '/brands/wolf',
      },
      {
        source: '/subzero-appliance-repair',
        destination: '/brands/subZero',
      },
      {
        source: '/viking-appliance-repair',
        destination: '/brands/viking',
      },
      {
        source: '/thermador-appliance-repair',
        destination: '/brands/thermador',
      },
      {
        source: '/dacor-appliance-repair',
        destination: '/brands/dacor',
      },
      {
        source: '/asko-appliance-repair',
        destination: '/brands/asko',
      },
      {
        source: '/fisher-paykel-appliance-repair',
        destination: '/brands/fisherpaykel',
      },
      {
        source: '/jenn-air-appliance-repair',
        destination: '/brands/jennair',
      },
      {
        source: '/liebherr-appliance-repair',
        destination: '/brands/liebherr',
      },
      {
        source: '/inglis-appliance-repair',
        destination: '/brands/inglis',
      },
      {
        source: '/panasonic-appliance-repair',
        destination: '/brands/panasonic',
      },
      {
        source: '/moffat-appliance-repair',
        destination: '/brands/moffat',
      },
      {
        source: '/blomberg-appliance-repair',
        destination: '/brands/blomberg',
      },
      {
        source: '/aeg-appliance-repair',
        destination: '/brands/aeg',
      },
      {
        source: '/haier-appliance-repair',
        destination: '/brands/haier',
      },
      {
        source: '/amana-appliance-repair',
        destination: '/brands/amana',
      },
      {
        source: '/bartazzoni-appliance-repair',
        destination: '/brands/bertazzoni',
      },
      {
        source: '/fulgor-milano-appliance-repair',
        destination: '/brands/fulgormilano',
      },
      {
        source: '/gaggenau-appliance-repair',
        destination: '/brands/gaggenau',
      },
      
      // Rewrites for area pages - using exact directory casing
      {
        source: '/appliance-repair-ajax',
        destination: '/areas/ajax',
      },
      {
        source: '/appliance-repair-aurora',
        destination: '/areas/aurora',
      },
      {
        source: '/appliance-repair-brampton',
        destination: '/areas/brampton',
      },
      {
        source: '/appliance-repair-burlington',
        destination: '/areas/burlington',
      },
      {
        source: '/appliance-repair-caledon',
        destination: '/areas/caledon',
      },
      {
        source: '/appliance-repair-cambridge',
        destination: '/areas/cambridge',
      },
      {
        source: '/appliance-repair-claremont',
        destination: '/areas/claremont',
      },
      {
        source: '/appliance-repair-downtown-toronto',
        destination: '/areas/downtown-toronto',
      },
      {
        source: '/appliance-repair-east-york',
        destination: '/areas/east-york',
      },
      {
        source: '/appliance-repair-etobicoke',
        destination: '/areas/etobicoke',
      },
      {
        source: '/appliance-repair-georgetown',
        destination: '/areas/georgetown',
      },
      {
        source: '/appliance-repair-georgina',
        destination: '/areas/georgina',
      },
      {
        source: '/appliance-repair-halton-hills',
        destination: '/areas/halton-hills',
      },
      {
        source: '/appliance-repair-king-city',
        destination: '/areas/king-city',
      },
      {
        source: '/appliance-repair-kleinburg',
        destination: '/areas/kleinburg',
      },
      {
        source: '/appliance-repair-markham',
        destination: '/areas/markham',
      },
      {
        source: '/appliance-repair-milton',
        destination: '/areas/milton',
      },
      {
        source: '/appliance-repair-mississauga',
        destination: '/areas/mississauga',
      },
      {
        source: '/appliance-repair-newmarket',
        destination: '/areas/newmarket',
      },
      {
        source: '/appliance-repair-north-york',
        destination: '/areas/north-york',
      },
      {
        source: '/appliance-repair-oakville',
        destination: '/areas/oakville',
      },
      {
        source: '/appliance-repair-oshawa',
        destination: '/areas/oshawa',
      },
      {
        source: '/appliance-repair-pickering',
        destination: '/areas/pickering',
      },
      {
        source: '/appliance-repair-richmond-hill',
        destination: '/areas/richmond-hill',
      },
      {
        source: '/appliance-repair-scarborough',
        destination: '/areas/scarborough',
      },
      {
        source: '/appliance-repair-stouffville',
        destination: '/areas/stouffville',
      },
      {
        source: '/appliance-repair-thornhill',
        destination: '/areas/thornhill',
      },
      {
        source: '/appliance-repair-toronto',
        destination: '/areas/toronto',
      },
      {
        source: '/appliance-repair-vaughan',
        destination: '/areas/vaughan',
      },
      {
        source: '/appliance-repair-whitby',
        destination: '/areas/whitby',
      },
      {
        source: '/appliance-repair-woodbridge',
        destination: '/areas/woodbridge',
      },
      {
        source: '/appliance-repair-york',
        destination: '/areas/york',
      }
    ];
  },
};

export default nextConfig;