/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["cdn.sanity.io"],
  },
  env: {
    stripe_public_key: process.env.STRIPE_PUBLISHABLE_KEY,
  },
};

module.exports = nextConfig;
