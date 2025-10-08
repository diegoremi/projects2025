import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    viewTransitions: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;