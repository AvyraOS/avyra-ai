import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Configure allowed image qualities
    qualities: [25, 50, 75, 100],
    // Add any other image configuration as needed
    formats: ['image/webp', 'image/avif'],
  },
};

export default nextConfig;
