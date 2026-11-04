import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // ضروري لإنشاء ملفات Static لـ GitHub Pages
  basePath: "/rowad-modern-school", // ضع هنا اسم مستودع الجيت هاب الخاص بك بالضبط
  assetPrefix: "/rowad-modern-school/",
  images: {
    unoptimized: true, // ضروري لأن GitHub Pages لا يدعم Next.js Image Optimization الديناميكي
  },
};

export default nextConfig;