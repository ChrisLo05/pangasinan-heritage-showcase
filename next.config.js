/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  eslint: {
    // Don't block build on ESLint errors during deployment
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig
