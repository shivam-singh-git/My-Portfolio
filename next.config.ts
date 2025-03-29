/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'source.unsplash.com',
        pathname: '/**',
      },
    ],
  },
  basePath: '/portfolio',
  assetPrefix: '/portfolio/',
  // Add other config options here
};

export default nextConfig;
