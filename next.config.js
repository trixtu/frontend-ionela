/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['theodor12-next-ecommerce.s3.amazonaws.com'],
  },
}

module.exports = nextConfig

module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['theodor12-next-ecommerce.s3.amazonaws.com'],
  },
  experimental: {
    serverActions: true,
    serverComponentsExternalPackages: ['mongoose'],
  },
}
