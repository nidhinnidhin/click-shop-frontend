module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['localhost', 'clock-shop-backend.onrender.com'],
  },
  rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `${process.env.NEXT_PUBLIC_BACKEND_URL}/:path*`,
      },
    ];
  },
  serverRuntimeConfig: {
    port: process.env.PORT || 3000,
  },
  publicRuntimeConfig: {
    staticFolder: '/static',
  },
};