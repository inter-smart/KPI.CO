import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: process.cwd(),
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "blogadmin.kpi.co",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;