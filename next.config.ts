import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/shop", destination: "/work", permanent: false },
      { source: "/shop/p/:slug", destination: "/work/:slug", permanent: false },
    ];
  },
  images: {
    loader: "custom",
    loaderFile: "./src/lib/squarespace-loader.ts",
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.squarespace-cdn.com",
        pathname: "/content/**",
      },
    ],
  },
};

export default nextConfig;
