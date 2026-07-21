import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: [
    "@car-market/ui",
    "@car-market/config",
    "@car-market/api",
    "@car-market/types",
  ],
};

export default nextConfig;