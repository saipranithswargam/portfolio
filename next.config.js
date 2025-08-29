/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/content',
        destination: '/',
        permanent: false,
      },
      {
        source: '/community',
        destination: '/',
        permanent: false,
      },
    ];
  },
}

module.exports = nextConfig
