import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  // React 19 support and other optimizations
  experimental: {
    // any experimental features if needed
  },
};

export default nextConfig;
