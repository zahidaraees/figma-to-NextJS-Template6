import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Domains are not needed for local images in the `public` folder.
    unoptimized: true, // Add this if you're serving images from the `public` directory without optimization.
  },
  // Any other configuration options can go here.
};

export default nextConfig;
