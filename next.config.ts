
import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  output: "export",

  ...(isGitHubPages && {
    basePath: "/Modern-School",
    assetPrefix: "/Modern-School/",
  }),

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
