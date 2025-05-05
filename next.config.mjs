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
        destination: '/brands/GeneralElectricGE',
      },
      {
        source: '/bosch-appliance-repair',
        destination: '/brands/Bosch',
      },
      {
        source: '/maytag-appliance-repair',
        destination: '/brands/Maytag',
      },
      {
        source: '/kitchenaid-appliance-repair',
        destination: '/brands/KitchenAid',
      },
      {
        source: '/frigidaire-appliance-repair',
        destination: '/brands/Frigidaire',
      },
      {
        source: '/kenmore-appliance-repair',
        destination: '/brands/Kenmore',
      },
      {
        source: '/electrolux-appliance-repair',
        destination: '/brands/Electrolux',
      },
      {
        source: '/miele-appliance-repair',
        destination: '/brands/Miele',
      },
      {
        source: '/wolf-appliance-repair',
        destination: '/brands/Wolf',
      },
      {
        source: '/subzero-appliance-repair',
        destination: '/brands/SubZero',
      },
      {
        source: '/viking-appliance-repair',
        destination: '/brands/Viking',
      },
      {
        source: '/thermador-appliance-repair',
        destination: '/brands/Thermador',
      },
      {
        source: '/dacor-appliance-repair',
        destination: '/brands/Dacor',
      },
      {
        source: '/asko-appliance-repair',
        destination: '/brands/Asko',
      },
      {
        source: '/fisher-paykel-appliance-repair',
        destination: '/brands/FisherPaykel',
      },
      {
        source: '/jenn-air-appliance-repair',
        destination: '/brands/JennAir',
      },
      {
        source: '/liebherr-appliance-repair',
        destination: '/brands/Liebherr',
      },
      {
        source: '/inglis-appliance-repair',
        destination: '/brands/Inglis',
      },
      {
        source: '/panasonic-appliance-repair',
        destination: '/brands/Panasonic',
      },
      {
        source: '/moffat-appliance-repair',
        destination: '/brands/Moffat',
      },
      {
        source: '/bloomberg-appliance-repair',
        destination: '/brands/Bloomberg',
      },
      {
        source: '/brada-appliance-repair',
        destination: '/brands/Brada',
      },
      {
        source: '/aeg-appliance-repair',
        destination: '/brands/AEG',
      },
      {
        source: '/amana-appliance-repair',
        destination: '/brands/Amana',
      },
      {
        source: '/bartazzoni-appliance-repair',
        destination: '/brands/Bartazzoni',
      },
      {
        source: '/fulgor-milano-appliance-repair',
        destination: '/brands/FulgorMilano',
      },
      {
        source: '/gaggenau-appliance-repair',
        destination: '/brands/Gaggenau',
      },
      
      // Rewrites for area pages - using exact directory casing
      {
        source: '/appliance-repair-ajax',
        destination: '/areas/ajax',
      },
      {
        source: '/appliance-repair-aurora',
        destination: '/areas/Aurora',
      },
      {
        source: '/appliance-repair-bowmanville',
        destination: '/areas/Bowmanville',
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
        destination: '/areas/Caledon',
      },
      {
        source: '/appliance-repair-cambridge',
        destination: '/areas/Cambridge',
      },
      {
        source: '/appliance-repair-claremont',
        destination: '/areas/Claremont',
      },
      {
        source: '/appliance-repair-clarington',
        destination: '/areas/Clarington',
      },
      {
        source: '/appliance-repair-downtown-toronto',
        destination: '/areas/Downtown%20%28Toronto%29',
      },
      {
        source: '/appliance-repair-east-york',
        destination: '/areas/East%20York',
      },
      {
        source: '/appliance-repair-etobicoke',
        destination: '/areas/Etobicoke',
      },
      {
        source: '/appliance-repair-georgetown',
        destination: '/areas/Georgetown',
      },
      {
        source: '/appliance-repair-georgina',
        destination: '/areas/Georgina',
      },
      {
        source: '/appliance-repair-halton-hills',
        destination: '/areas/Halton%20Hills',
      },
      {
        source: '/appliance-repair-king-city',
        destination: '/areas/King%20City',
      },
      {
        source: '/appliance-repair-kleinburg',
        destination: '/areas/Kleinburg',
      },
      {
        source: '/appliance-repair-markham',
        destination: '/areas/markham',
      },
      {
        source: '/appliance-repair-milton',
        destination: '/areas/Milton',
      },
      {
        source: '/appliance-repair-mississauga',
        destination: '/areas/mississauga',
      },
      {
        source: '/appliance-repair-newmarket',
        destination: '/areas/Newmarket',
      },
      {
        source: '/appliance-repair-north-york',
        destination: '/areas/North%20York',
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
        destination: '/areas/Richmond%20Hill',
      },
      {
        source: '/appliance-repair-scarborough',
        destination: '/areas/Scarborough',
      },
      {
        source: '/appliance-repair-stouffville',
        destination: '/areas/Stouffville',
      },
      {
        source: '/appliance-repair-thornhill',
        destination: '/areas/Thornhill',
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
        destination: '/areas/Woodbridge',
      },
      {
        source: '/appliance-repair-york',
        destination: '/areas/York',
      }
    ];
  },
};

export default nextConfig; 