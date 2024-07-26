/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost', 'clock-shop-backend.onrender.com'],
  },
  rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://clock-shop-backend.onrender.com/:path*',
      },
    ];
  },
};

module.exports = nextConfig;