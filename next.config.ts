
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",

  basePath: "/Modern-School",

  images: {
    unoptimized: true,
  },

  trailingSlash: true,

  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
