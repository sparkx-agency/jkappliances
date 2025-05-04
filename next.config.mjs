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
  // Add rewrites to handle area page routing
  async rewrites() {
    return [
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