import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false, 
  webpack(config, { dev }) {
    if (dev) {
      config.infrastructureLogging = { level: 'warn' };
    }
    return config;
  },
};

export default nextConfig;
