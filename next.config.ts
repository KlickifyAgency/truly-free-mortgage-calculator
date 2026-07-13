import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/blog/15-year-vs-30-year-mortgage",
        destination: "/blog/30-year-vs-15-year-mortgage-guide",
        permanent: true,
      },
      {
        source: "/blog/arm-vs-fixed-rate-mortgage-2026",
        destination: "/blog/arm-vs-fixed-rate",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
