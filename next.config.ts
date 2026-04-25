import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",

  images: {
    unoptimized: true, // important for GitHub Pages
  },

  // Only needed if your repo is NOT username.github.io
  basePath: "/codecraft_website",
  assetPrefix: "/codecraft_website/",
};

export default nextConfig;
