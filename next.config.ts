import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // One 37 KB stylesheet was the only render-blocking request on mobile
  // (Lighthouse: ~300 ms of LCP). Inline it into each page instead.
  experimental: { inlineCss: true },
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
