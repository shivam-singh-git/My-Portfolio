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
  basePath: process.env.NODE_ENV === 'production' ? '/My-Portfolio' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/My-Portfolio/' : '',
};

export default nextConfig;
