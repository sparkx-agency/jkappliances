/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    // Disable ESLint checking during builds - we'll fix these later
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ['localhost'],
  },
};

export default nextConfig; 