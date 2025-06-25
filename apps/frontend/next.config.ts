import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "cms",
        port: "1337",
        pathname: "/uploads/**/*",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "1337",
        pathname: "/uploads/**/*",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/admin",
        destination: `${process.env.NEXT_PUBLIC_STRAPI_URL!}/admin`,
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/uploads/:path*",
        destination: `http://cms:1337/uploads/:path*`,
      },
    ];
  },
};

export default nextConfig;
