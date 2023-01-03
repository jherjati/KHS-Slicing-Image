/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    //enter the domain or subdomain where you have WordPress installed
    domains: ["www.handalselaras.com"],
  },
};

module.exports = nextConfig;
