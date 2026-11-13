
"use client";

import Link from "next/link";
import { useState } from "react";

const menus = [
  {
    title: "أدوات الواقع المعزز",
    href: "/ar/gate/ar-tools",
    items: [
      "تجربة المنتجات افتراضياً",
      "تجربة المكياج الافتراضية",
      "تجربة النظارات",
      "تجربة العدسات",
      "تجربة ألوان الشعر",
      "تجربة قصات الشعر",
      "تجربة الملابس",
      "تجربة الإكسسوارات",
      "تجربة المجوهرات",
      "تجربة الأحذية",
      "تجربة الحقائب",
      "تجربة الأثاث",
      "معاينة المنتجات",
      "تجربة الألوان",
      "تجربة الديكور",
      "التجربة ثلاثية الأبعاد",
      "غرف القياس الافتراضية",
      "محاكاة المنتجات",
      "التصوير الافتراضي",
      "استوديو الواقع المعزز",
    ],
  },
  {
    title: "أدوات الذكاء الاصطناعي",
    href: "/ar/gate/ai-tech",
    items: [
      "محور البشرة",
      "تحليل البشرة بالذكاء الاصطناعي",
      "مكتشف لون البشرة",
      "محاكاة البشرة",
      "مجموعة تقييم البشرة",
      "محور الوجه",
      "تحليل الوجه",
      "تحديد شكل الوجه",
      "تحليل ملامح الوجه",
      "محور الإطلالات",
      "منسق الإطلالات",
      "مساعد المكياج الذكي",
      "تحليل الألوان",
      "مكتشف الألوان المناسبة",
      "مساعد العناية بالبشرة",
      "مساعد الجمال الذكي",
      "تحليل الصور",
      "مولد الصور بالذكاء الاصطناعي",
      "مساعد التوصيات",
      "المساعد الذكي",
    ],
  },
  {
    title: "الخدمات",
    href: "/ar/services",
    items: [
      "تصميم المواقع",
      "تطوير المتاجر الإلكترونية",
      "تطوير تطبيقات الويب",
      "تطوير تطبيقات الهاتف",
      "تصميم واجهات المستخدم",
      "تجربة المستخدم UX",
      "التسويق الإلكتروني",
      "إدارة المحتوى",
      "تحسين محركات البحث",
      "إدارة الحملات الإعلانية",
      "الهوية البصرية",
      "تصميم الشعارات",
      "تصميم الجرافيك",
      "إنتاج الفيديو",
      "التصوير الاحترافي",
      "الاستشارات التقنية",
      "حلول التجارة الإلكترونية",
      "الدعم الفني",
      "استضافة المواقع",
      "الصيانة والتحديث",
    ],
  },
  {
    title: "التقنيات",
    href: "/ar/technologies",
    items: [
      "الذكاء الاصطناعي",
      "الواقع المعزز",
      "الواقع الافتراضي",
      "الواقع المختلط",
      "التعلم الآلي",
      "التعلم العميق",
      "الرؤية الحاسوبية",
      "معالجة اللغة الطبيعية",
      "تحليل البيانات",
      "البيانات الضخمة",
      "إنترنت الأشياء",
      "الحوسبة السحابية",
      "تقنية البلوك تشين",
      "التوأم الرقمي",
      "تقنية ثلاثية الأبعاد",
      "التعرف على الوجه",
      "التعرف على الصور",
      "الأتمتة الذكية",
      "الروبوتات",
      "تقنيات المستقبل",
    ],
  },
  {
    title: "الحلول",
    href: "/ar/solutions",
    items: [
      "حلول قطاع التجميل",
      "حلول المتاجر الإلكترونية",
      "حلول الشركات",
      "حلول المؤسسات",
      "حلول التعليم",
      "حلول الرعاية الصحية",
      "حلول العقارات",
      "حلول الأزياء",
      "حلول الصالونات",
      "حلول العيادات",
      "حلول التسويق",
      "حلول التجارة",
      "حلول المطاعم",
      "حلول الفنادق",
      "حلول السياحة",
      "حلول المصانع",
      "حلول الخدمات",
      "حلول الأعمال",
      "حلول التحول الرقمي",
      "حلول الذكاء الاصطناعي",
    ],
  },
  {
    title: "الباقات",
    href: "/ar/packages",
    items: [
      "الباقة المجانية",
      "الباقة الأساسية",
      "الباقة الاحترافية",
      "الباقة المؤسسية",
      "باقة الشركات",
      "باقة المتاجر",
      "باقة التجميل",
      "باقة الذكاء الاصطناعي",
      "باقة الواقع المعزز",
      "باقة التصميم",
      "باقة التسويق",
      "باقة الأعمال",
      "باقة المؤسسات",
      "باقة المطورين",
      "باقة المبتدئين",
      "باقة النمو",
      "باقة الأعمال المتقدمة",
      "الباقة السنوية",
      "الباقة الشهرية",
      "الباقات المخصصة",
    ],
  },
];

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState<number | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header
      dir="rtl"
      className="relative z-50 mx-auto mt-4 w-[96%] rounded-[30px] border border-white/10 bg-[#0b101b]/95 text-white shadow-2xl backdrop-blur-xl"
    >
      {/* TOP NAVBAR */}
      <div className="flex min-h-[100px] items-center justify-between gap-4 px-5 md:px-8">

        {/* LOGO */}
        <Link
          href="/"
          className="flex items-center gap-3 text-3xl font-extrabold tracking-tight md:text-4xl"
        >
          <span>نوفاجيتس</span>
          <span className="text-4xl text-green-400 drop-shadow-[0_0_15px_#00ff88]">
            ✧
          </span>
        </Link>

        {/* BRAND */}
        <div className="hidden items-center rounded-full bg-white/10 p-1 lg:flex">
          <Link
            href="/"
            className="rounded-full bg-gradient-to-r from-green-500/20 to-cyan-500/20 px-6 py-3 font-bold text-green-400"
          >
            نوفا تك
          </Link>
          <Link
            href="/ar"
            className="px-5 py-3 font-bold text-cyan-400"
          >
            نوفا كوم
          </Link>
        </div>

        {/* SEARCH + LANGUAGE */}
        <div className="hidden items-center gap-5 md:flex">
          <button
            onClick={() => setSearchOpen(!searchOpen)}
            className="text-2xl text-gray-300 transition hover:text-cyan-400"
            aria-label="بحث"
          >
            ⌕
          </button>

          <button className="text-gray-300 transition hover:text-green-400">
            🌐 العربية
          </button>

          <Link
            href="/login"
            className="rounded-full border border-white/10 px-6 py-3 transition hover:border-cyan-400 hover:text-cyan-400"
          >
            تسجيل الدخول
          </Link>

          <Link
            href="/demo"
            className="rounded-full border border-green-400 px-6 py-3 text-cyan-400 transition hover:bg-green-400/10"
          >
            متجر العرض التوضيحي
          </Link>
        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-3xl text-green-400 md:hidden"
          aria-label="فتح القائمة"
        >
          {mobileOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* SEARCH INPUT */}
      {searchOpen && (
        <div className="border-t border-white/10 p-4">
          <input
            type="search"
            placeholder="ابحث عن خدمة أو تقنية..."
            className="w-full rounded-xl border border-cyan-400/30 bg-[#111827] px-5 py-3 text-white outline-none focus:border-cyan-400"
          />
        </div>
      )}

      {/* DESKTOP NAVIGATION */}
      <nav className="hidden border-t border-white/10 md:block">
        <div className="flex flex-wrap items-center justify-center gap-1 px-4 py-3">

          {menus.map((menu, index) => (
            <div
              key={menu.title}
              className="relative"
              onMouseEnter={() => setActiveMenu(index)}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <button
                onClick={() =>
                  setActiveMenu(activeMenu === index ? null : index)
                }
                className={`flex items-center gap-2 rounded-xl px-4 py-3 text-base transition ${
                  activeMenu === index
                    ? "bg-green-400/10 text-green-400"
                    : "text-white hover:bg-white/5 hover:text-green-400"
                }`}
              >
                {menu.title}
                <span className="text-xs">⌄</span>
              </button>

              {/* DROPDOWN */}
              {activeMenu === index && (
                <div className="absolute right-0 top-full z-50 w-[600px] rounded-2xl border border-green-400/20 bg-[#0d1422] p-5 shadow-[0_10px_50px_rgba(0,255,150,0.12)]">
                  <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-4">
                    <h3 className="text-xl font-bold text-green-400">
                      {menu.title}
                    </h3>

                    <Link
                      href={menu.href}
                      onClick={() => setActiveMenu(null)}
                      className="text-sm text-cyan-400 hover:underline"
                    >
                      عرض الكل ←
                    </Link>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    {menu.items.map((item, i) => (
                      <Link
                        key={item}
                        href={`${menu.href}/${i + 1}`}
                        onClick={() => setActiveMenu(null)}
                        className="rounded-lg border border-transparent px-3 py-3 text-sm text-gray-300 transition hover:border-green-400/20 hover:bg-green-400/10 hover:text-green-400"
                      >
                        <span className="ml-2 text-cyan-400">✧</span>
                        {item}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}

          <Link
            href="/ar/blog"
            className="rounded-xl px-5 py-3 text-white transition hover:bg-white/5 hover:text-green-400"
          >
            المدونة
          </Link>
        </div>
      </nav>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <nav className="max-h-[75vh] overflow-y-auto border-t border-white/10 p-4 md:hidden">
          <div className="flex flex-col gap-2">
            {menus.map((menu, index) => (
              <div
                key={menu.title}
                className="rounded-xl border border-white/10"
              >
                <button
                  onClick={() =>
                    setActiveMenu(activeMenu === index ? null : index)
                  }
                  className="flex w-full items-center justify-between p-4 text-right font-semibold hover:text-green-400"
                >
                  {menu.title}
                  <span>{activeMenu === index ? "−" : "+"}</span>
                </button>

                {activeMenu === index && (
                  <div className="grid grid-cols-1 gap-1 border-t border-white/10 p-2">
                    {menu.items.map((item, i) => (
                      <Link
                        key={item}
                        href={`${menu.href}/${i + 1}`}
                        onClick={() => {
                          setMobileOpen(false);
                          setActiveMenu(null);
                        }}
                        className="rounded-lg p-3 text-sm text-gray-300 hover:bg-green-400/10 hover:text-green-400"
                      >
                        {item}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <Link
              href="/ar/blog"
              className="rounded-xl p-4 hover:text-green-400"
            >
              المدونة
            </Link>

            <Link
              href="/login"
              className="rounded-xl border border-green-400 p-4 text-center text-green-400"
            >
              تسجيل الدخول
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
