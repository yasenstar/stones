/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // added 2023-01-21 for disable this as it's conflict with `next export`
  },
}

module.exports = nextConfig
