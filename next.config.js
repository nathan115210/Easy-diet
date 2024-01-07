/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.epicurious.com",
        port: "",
        pathname: "/photos/5c745a108918ee7ab68daf79/**",
      },
    ],
  },
};

module.exports = nextConfig;
