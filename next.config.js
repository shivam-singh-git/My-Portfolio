/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/My-Portfolio',
  assetPrefix: '/My-Portfolio/',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ['localhost'],
  },
};

module.exports = nextConfig; 