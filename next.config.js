module.exports = {
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
  serverRuntimeConfig: {
    // Will only be available on the server side
    mySecret: process.env.MY_SECRET,
    // Set the port number
    port: process.env.PORT || 3000,
  },
  publicRuntimeConfig: {
    // Will be available on both server and client
    staticFolder: '/static',
  },
};