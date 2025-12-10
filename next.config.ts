import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn-posko.kitabisa.com',
        pathname: '/images/**',
      },
    ]
  },
};

export default nextConfig;
