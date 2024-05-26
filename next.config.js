/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { hostname: "github.com" },
      { hostname: "is1-ssl.mzstatic.com" },
    ],
  },
};

module.exports = nextConfig;
