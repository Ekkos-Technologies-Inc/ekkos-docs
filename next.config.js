/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/introduction',
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;


