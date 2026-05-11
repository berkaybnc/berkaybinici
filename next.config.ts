import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Static export requires this for next/image
  },
  experimental: {
    // any experimental features if needed
  },
};

export default nextConfig;
