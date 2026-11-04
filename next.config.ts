/** @type {import('next').NextConfig} */
const isGitHubPages = process.env.GITHUB_PAGES === "true";

const nextConfig = {
  output: "export",

  ...(isGitHubPages && {
    basePath: "/Modern-School",
    assetPrefix: "/Modern-School/",
  }),

  images: {
    unoptimized: true,
  },

  trailingSlash: true,
  
  // تم إزالة turbopack rules اليدوية لأنها قد تتعارض مع Tailwind v4 وتحجب ملفات الـ CSS
};

export default nextConfig;