
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import {
  FaFacebookF,
  FaTelegramPlane,
  FaWhatsapp,
  FaYoutube,
  FaArrowLeft,
  FaGraduationCap,
} from "react-icons/fa";

import { useLanguage } from "../context/LanguageContext";

export default function Footer() {
  const { t, language } = useLanguage();

  const isRtl = language === "ar";

  const [currentYear, setCurrentYear] = useState<number | null>(null);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  // =========================
  // Footer Sections
  // =========================

  const footerSections = [
    {
      title: isRtl ? "عن المدرسة" : "About School",
      links: [
        { label: t.home, href: "/"},
        { label: t.about, href: "/about"},
        { label: t.features, href: "/features"},
        // { label: t.schools, href: "/school"},
        { label: t.schools, href: "/schools" },
        {
          label: isRtl ? "المراحل التعليمية" : "Academic Stages",
          href: "/stages",
        },
        {
          label: isRtl ? "المعلمون" : "teachers",
          href: "/teachers",
        },
        {
          label: isRtl ? "شركاؤنا" : "Our Partners",
          href: "/partners",
        },
        {
          label: isRtl ? "رؤيتنا ورسالتنا" : "Our Vision & Mission",
          href: "/about",
        },
      ],
    },

    {
      title: isRtl ? "الخدمات التعليمية" : "Educational Services",
      links: [
        { label: t.student_info, href: "/students" },
        {
          label: isRtl ? "أولياء الأمور" : "Parents",
          href: "/parents",
        },
        {
          label: isRtl ? "الكورسات التعليمية" : "Educational Courses",
          href: "/courses",
        },
        {
          label: isRtl ? "الأنشطة المدرسية" : "School Activities",
          href: "/activities",
        },
        {
          label: isRtl ? "الفصول الدراسية" : "Classes",
          href: "/classes",
        },
        {
          label: isRtl ? "نتائج الامتحانات" : "Exam Results",
          href: "/results",
        },
        {
          label: isRtl ? "المكتبة التعليمية" : "Educational Library",
          href: "/library",
        },
        {
          label: isRtl ? "التعلم الإلكتروني" : "E-Learning",
          href: "/elearning",
        },
        {
          label: isRtl ? "المحاضرات المباشرة" : "Live Classes",
          href: "/live-classes",
        },
      ],
    },

    {
      title: isRtl ? "اكتشف وتواصل معنا" : "Explore & Contact",
      links: [
        { label: t.blog, href: "/blog" },
        {
          label: isRtl ? "الأخبار المدرسية" : "School News",
          href: "/news",
        },
        {
          label: isRtl ? "معرض الصور" : "Photo Gallery",
          href: "/gallery",
        },
        {
          label: isRtl ? "التقويم الدراسي" : "Academic Calendar",
          href: "/calendar",
        },
        {
          label: isRtl ? "الأسئلة الشائعة" : "Frequently Asked Questions",
          href: "/faq",
        },
        {
          label: isRtl ? "الوظائف المتاحة" : "Careers",
          href: "/careers",
        },
        {
          label: isRtl ? "الدعم الفني" : "Technical Support",
          href: "/support",
        },
        {
          label: isRtl ? "سياسة الخصوصية" : "Privacy Policy",
          href: "/privacy",
        },
        {
          label: isRtl ? "الشروط والأحكام" : "Terms & Conditions",
          href: "/terms",
        },
      ],
    },
  ];

  // =========================
  // Social Media
  // =========================

  const socialLinks = [
    { icon: FaFacebookF, href: "#", label: "Facebook" },
    { icon: FaTelegramPlane, href: "#", label: "Telegram" },
    { icon: FaWhatsapp, href: "#", label: "WhatsApp" },
    { icon: FaYoutube, href: "#", label: "YouTube" },
  ];

  // =========================
  // Link Style
  // =========================

  const linkStyle = `
    group relative inline-flex items-center gap-1
    text-slate-300 text-sm
    transition-colors duration-300
    hover:text-[#9E7C2F] w-fit
    after:absolute after:-bottom-1 after:start-0
    after:h-[2px] after:w-0
    after:bg-[#9E7C2F]
    after:transition-all after:duration-300
    hover:after:w-full
  `;

  // =========================
  // Render
  // =========================

  return (
    <footer
      dir={t.dir}
      className="relative overflow-hidden bg-[#030712] text-white pt-12 pb-6"
    >

      {/* Background Gradients */}

      <div className="absolute top-0 start-1/4 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-[#9E7C2F]/15 blur-[140px] pointer-events-none" />

      <div className="absolute bottom-0 end-10 h-[500px] w-[500px] rounded-full bg-amber-600/10 blur-[140px] pointer-events-none" />

      {/* Grid Pattern */}

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293710_1px,transparent_1px),linear-gradient(to_bottom,#1f293710_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* =========================
          Pre Footer CTA
      ========================= */}

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-16">

        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-slate-900/90 via-[#0a1120]/80 to-slate-900/90 p-8 md:p-12 backdrop-blur-xl shadow-2xl shadow-black/50">

          <div className="absolute -top-24 -end-24 h-60 w-60 rounded-full bg-[#9E7C2F]/20 blur-3xl pointer-events-none" />

          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 relative z-10">

            {/* CTA Text */}

            <div className="text-center ltr:lg:text-left rtl:lg:text-right space-y-3">

              <div className="inline-flex items-center gap-2 rounded-full border border-[#9E7C2F]/30 bg-[#9E7C2F]/10 px-4 py-1.5 text-xs font-semibold text-[#d4af37]">

                <FaGraduationCap size={16} />

                <span>{t.footer_cta_badge}</span>

              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white">

                {t.footer_cta_title}{" "}

                <span className="text-[#9E7C2F]">
                  {t.footer_cta_title_highlight}
                </span>{" "}

                {t.footer_cta_title_end}

              </h2>

              <p className="text-slate-300 text-sm sm:text-base max-w-2xl">
                {t.footer_cta_desc}
              </p>

            </div>

            {/* CTA Buttons */}

            <div className="flex flex-col sm:flex-row gap-4 shrink-0 w-full lg:w-auto justify-center">

              <Link
                href="/admission"
                className="group flex items-center justify-center gap-3 rounded-2xl bg-[#9E7C2F] px-7 py-4 font-bold text-slate-950 transition-all duration-300 hover:bg-[#b8923a] hover:scale-105 shadow-lg shadow-[#9E7C2F]/25"
              >

                <span>{t.footer_apply_now}</span>

                <span
                  className={`transition-transform duration-300 ${
                    isRtl
                      ? "group-hover:-translate-x-1"
                      : "group-hover:translate-x-1 rotate-180"
                  }`}
                >
                  <FaArrowLeft />
                </span>

              </Link>

              <Link
                href="/contact"
                className="flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-7 py-4 font-bold text-white transition-all duration-300 hover:bg-white/10 hover:border-white/30"
              >
                <span>{t.footer_contact_admission}</span>
              </Link>

            </div>

          </div>
        </div>
      </div>

      {/* =========================
          Main Footer
      ========================= */}

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8 pb-12 border-b border-white/10">

          {/* Brand Information */}

          <div className="lg:col-span-4 space-y-6 text-center ltr:md:text-left rtl:md:text-right">

            <div className="flex flex-col items-center ltr:md:items-start rtl:md:items-start">

              <div className="relative p-2 rounded-2xl bg-white/5 border border-white/10 shadow-xl backdrop-blur-md mb-4 inline-block">

                <Link href="/">
                  <img
                    src="/assets/imgLogo/school.webp"
                    alt={t.logoAlt}
                    className="w-36 h-auto object-contain"
                  />
                </Link>

              </div>

              <p className="text-slate-300 text-sm leading-relaxed max-w-sm mt-2">
                {t.footer_brand_desc}
              </p>

            </div>

            {/* Social Media */}

            <div className="pt-2 flex flex-col items-center ltr:md:items-start rtl:md:items-start">

              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block mb-3">
                {t.footer_follow_us}
              </span>

              <div className="flex gap-3">

                {socialLinks.map((item) => {

                  const Icon = item.icon;

                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      aria-label={item.label}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition-all duration-300 hover:border-[#9E7C2F] hover:bg-[#9E7C2F]/10 hover:text-[#9E7C2F] hover:-translate-y-1"
                    >
                      <Icon size={20} />
                    </a>
                  );

                })}

              </div>

            </div>
          </div>

          {/* =========================
              Footer Navigation
          ========================= */}

          <div className="lg:col-span-8">

            <h3 className="text-lg font-bold text-white mb-8 flex items-center justify-center ltr:md:justify-start rtl:md:justify-start gap-2">

              <span className="h-2.5 w-2.5 rounded-full bg-[#9E7C2F]"></span>

              {t.footer_quick_links_title}

            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center md:text-start">

              {footerSections.map((section, index) => (

                <div
                  key={index}
                  className="flex flex-col items-center md:items-start"
                >

                  <h4 className="text-white font-bold text-base mb-5">
                    {section.title}
                  </h4>

                  <div className="flex flex-col gap-4 items-center md:items-start">

                    {section.links.map((link) => (

                      <Link
                        key={link.href}
                        href={link.href}
                        className={linkStyle}
                      >
                        {link.label}
                      </Link>

                    ))}

                  </div>

                </div>

              ))}

            </div>
          </div>
        </div>

        {/* =========================
            Copyright
        ========================= */}

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center text-xs md:text-sm text-slate-400">

          <p>
            {currentYear ?? ""} {t.footer_all_rights_reserved}
          </p>

          <div className="flex flex-wrap justify-center gap-6">

            <Link
              href="/privacy"
              className="hover:text-[#9E7C2F] transition-colors duration-300"
            >
              {t.footer_privacy_policy}
            </Link>

            <Link
              href="/terms"
              className="hover:text-[#9E7C2F] transition-colors duration-300"
            >
              {t.footer_terms_conditions}
            </Link>

          </div>
        </div>
      </div>
    </footer>
  );
}
