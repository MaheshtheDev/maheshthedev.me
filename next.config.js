/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { hostname: "github.com" },
      { hostname: "is1-ssl.mzstatic.com" },
      { hostname: "d112y698adiu2z.cloudfront.net" },
    ],
  },
};

module.exports = nextConfig;
