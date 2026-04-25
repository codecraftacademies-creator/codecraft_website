import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",

  images: {
    unoptimized: true, // important for GitHub Pages
  },

  // Only needed if your repo is NOT username.github.io
  basePath: "/your-repo-name",
  assetPrefix: "/your-repo-name/",
};

export default nextConfig;
