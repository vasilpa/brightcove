/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["bcbolt446c5271-a.akamaihd.net"],
    formats: ["image/webp"],
},
}

module.exports = nextConfig
