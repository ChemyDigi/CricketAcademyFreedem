import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Required for static hosting (Bluehost, cPanel, shared hosting)
  output: "export",

  // Disable Next.js image optimization (not supported on shared hosting)
  images: {
    unoptimized: true,
  },

  // Optional but recommended
  trailingSlash: true,

  // Disable TypeScript build errors blocking export (optional)
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
