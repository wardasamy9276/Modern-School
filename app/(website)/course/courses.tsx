"use client";

import { useState } from "react";
import { useLanguage } from "../../context/LanguageContext";
import { getCoursesData } from "./data/coursesData";

import {
  BookOpen,
  GraduationCap,
  Clock,
  Users,
  Search,
  ArrowLeft,
  ArrowRight,
  Sparkles,
  PlayCircle,
  BookMarked,
  Award,
  Star,
  CheckCircle2,
} from "lucide-react";

export default function CoursesPage() {
  const { language } = useLanguage();
  const isArabic = language === "ar";

  const data = getCoursesData(isArabic);

  const [activeCategory, setActiveCategory] = useState("all");
  const [search, setSearch] = useState("");

  const filteredCourses = data.courses.filter((course) => {
    const matchesCategory =
      activeCategory === "all" || course.category === activeCategory;

    const matchesSearch =
      course.title.toLowerCase().includes(search.toLowerCase()) ||
      course.description.toLowerCase().includes(search.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <main
      dir={isArabic ? "rtl" : "ltr"}
      className="min-h-screen overflow-hidden bg-white text-[#053e50]"
    >
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#053e50] via-[#07566b] to-[#0e7490] px-5 py-24 text-white md:py-32">
        <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-cyan-300/10 blur-3xl" />
        <div className="absolute -bottom-32 -left-20 h-96 w-96 rounded-full bg-white/5 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 md:grid-cols-2">
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm">
              <BookOpen size={18} />
              {isArabic ? "البرامج التعليمية" : "Learning Programs"}
            </div>

            <h1 className="mb-7 text-4xl font-black leading-tight md:text-6xl">
              {isArabic ? (
                <>
                  اكتشف عالم
                  <span className="mt-3 block text-cyan-300">
                    المعرفة والتعلم
                  </span>
                </>
              ) : (
                <>
                  Explore the World of
                  <span className="mt-3 block text-cyan-300">
                    Knowledge & Learning
                  </span>
                </>
              )}
            </h1>

            <p className="mb-9 max-w-xl text-lg leading-9 text-white/80">
              {isArabic
                ? "نوفر برامج تعليمية متنوعة تساعد الطلاب على اكتساب المعرفة وتطوير المهارات والاستعداد لمستقبل أكثر تميزًا."
                : "We provide diverse learning programs that help students gain knowledge, develop skills and prepare for a brighter future."}
            </p>

            <a
              href="#courses-list"
              className="inline-flex items-center gap-3 rounded-xl bg-white px-8 py-4 font-bold text-[#053e50] shadow-lg transition hover:-translate-y-1"
            >
              {isArabic ? "استكشف الكورسات" : "Explore Courses"}
              {isArabic ? <ArrowLeft size={20} /> : <ArrowRight size={20} />}
            </a>
          </div>

          <div className="relative mx-auto w-full max-w-lg">
            <div className="absolute inset-0 rotate-6 rounded-[40px] bg-cyan-300/20" />

            <div className="relative rounded-[40px] border border-white/20 bg-white/10 p-8 shadow-2xl backdrop-blur-xl md:p-12">
              <div className="mb-8 flex items-center justify-between">
                <div className="rounded-2xl bg-white/15 p-4">
                  <GraduationCap size={44} className="text-cyan-300" />
                </div>
                <Sparkles size={30} className="text-cyan-300" />
              </div>

              <h2 className="mb-4 text-3xl font-black">
                {isArabic ? "تعلم بلا حدود" : "Learning Without Limits"}
              </h2>

              <p className="leading-8 text-white/75">
                {isArabic
                  ? "كل كورس هو خطوة جديدة نحو اكتشاف القدرات وبناء مستقبل ناجح."
                  : "Every course is a new step toward discovering potential and building a successful future."}
              </p>

              <div className="mt-9 grid grid-cols-2 gap-4">
                <div className="rounded-2xl bg-white/10 p-5">
                  <BookMarked className="mb-3 text-cyan-300" size={28} />
                  <p className="font-bold">
                    {isArabic ? "محتوى متنوع" : "Diverse Content"}
                  </p>
                </div>

                <div className="rounded-2xl bg-white/10 p-5">
                  <Award className="mb-3 text-cyan-300" size={28} />
                  <p className="font-bold">
                    {isArabic ? "مهارات المستقبل" : "Future Skills"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="relative z-10 mx-auto -mt-10 max-w-6xl px-5">
        <div className="grid grid-cols-2 gap-4 rounded-3xl border border-slate-100 bg-white p-6 shadow-xl md:grid-cols-4 md:p-9">
          {data.stats.map((stat, index) => (
            <div key={index} className="py-4 text-center">
              <h3 className="mb-3 text-3xl font-black text-[#0e7490] md:text-4xl">
                {stat.number}
              </h3>
              <p className="text-sm font-bold text-slate-500 md:text-base">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* INTRO */}
      <section className="px-5 py-24 text-center">
        <div className="mx-auto max-w-4xl">
          <span className="mb-4 inline-block rounded-full bg-[#e8f5f8] px-5 py-2 text-sm font-bold text-[#0e7490]">
            {isArabic ? "تعلم واكتشف" : "Learn & Discover"}
          </span>

          <h2 className="mb-6 text-3xl font-black md:text-5xl">
            {isArabic
              ? "اختر طريقك نحو التميز"
              : "Choose Your Path to Excellence"}
          </h2>

          <p className="text-lg leading-9 text-slate-500">
            {isArabic
              ? "مجموعة من البرامج التعليمية المصممة لدعم الطلاب في مختلف المجالات والمراحل الدراسية."
              : "A collection of educational programs designed to support students across different subjects and learning stages."}
          </p>
        </div>
      </section>

      {/* COURSES */}
      <section id="courses-list" className="bg-[#f4fafb] px-5 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col justify-between gap-7 lg:flex-row lg:items-end">
            <div>
              <span className="mb-4 inline-block rounded-full bg-white px-5 py-2 text-sm font-bold text-[#0e7490] shadow-sm">
                {isArabic ? "مكتبة الكورسات" : "Courses Library"}
              </span>

              <h2 className="text-3xl font-black md:text-5xl">
                {isArabic ? "استكشف جميع الكورسات" : "Explore All Courses"}
              </h2>
            </div>

            <div className="relative w-full lg:max-w-sm">
              <Search
                size={20}
                className={`absolute top-1/2 -translate-y-1/2 text-slate-400 ${
                  isArabic ? "right-4" : "left-4"
                }`}
              />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder={isArabic ? "ابحث عن كورس..." : "Search courses..."}
                className={`w-full rounded-xl border border-slate-200 bg-white py-4 text-slate-700 outline-none transition focus:border-[#0e7490] ${
                  isArabic ? "pr-12 pl-4" : "pl-12 pr-4"
                }`}
              />
            </div>
          </div>

          {/* FILTERS */}
          <div className="mb-10 flex flex-wrap gap-3">
            {data.categories.map((category) => (
              <button
                key={category.value}
                onClick={() => setActiveCategory(category.value)}
                className={`rounded-xl px-6 py-3 text-sm font-bold transition ${
                  activeCategory === category.value
                    ? "bg-[#0e7490] text-white shadow-lg"
                    : "border border-slate-200 bg-white text-slate-600 hover:border-[#0e7490] hover:text-[#0e7490]"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* CARDS */}
          {filteredCourses.length > 0 ? (
            <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
              {filteredCourses.map((course) => {
                const Icon = course.icon;

                return (
                  <article
                    key={course.id}
                    className="group overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
                  >
                    <div
                      className={`relative flex h-48 items-center justify-center bg-gradient-to-br ${course.color}`}
                    >
                      <div className="absolute inset-0 bg-black/5" />

                      <div className="relative flex h-24 w-24 items-center justify-center rounded-3xl border border-white/30 bg-white/20 text-white shadow-xl backdrop-blur-md transition duration-300 group-hover:scale-110">
                        <Icon size={48} />
                      </div>

                      {course.featured && (
                        <div className="absolute right-5 top-5 flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-black text-[#0e7490] shadow-lg">
                          <Star size={14} fill="currentColor" />
                          {isArabic ? "مميز" : "Featured"}
                        </div>
                      )}

                      <div className="absolute bottom-4 left-5 rounded-full bg-black/20 px-4 py-2 text-xs font-bold text-white backdrop-blur-md">
                        {course.categoryName}
                      </div>
                    </div>

                    <div className="p-7">
                      <h3 className="mb-4 text-xl font-black transition group-hover:text-[#0e7490]">
                        {course.title}
                      </h3>

                      <p className="mb-7 min-h-20 leading-8 text-slate-500">
                        {course.description}
                      </p>

                      <div className="mb-6 space-y-4 border-t border-slate-100 pt-6">
                        <div className="flex items-center gap-3 text-sm text-slate-500">
                          <Users size={18} className="text-[#0e7490]" />
                          <span>{course.teacher}</span>
                        </div>

                        <div className="flex flex-wrap justify-between gap-3">
                          <span className="flex items-center gap-2 text-sm text-slate-500">
                            <GraduationCap size={18} className="text-[#0e7490]" />
                            {course.level}
                          </span>

                          <span className="flex items-center gap-2 text-sm text-slate-500">
                            <Clock size={18} className="text-[#0e7490]" />
                            {course.duration}
                          </span>
                        </div>
                      </div>

                      <a
                        href="/contact"
                        className="flex w-full items-center justify-center gap-3 rounded-xl bg-[#e8f5f8] px-5 py-4 font-bold text-[#0e7490] transition hover:bg-[#0e7490] hover:text-white"
                      >
                        {isArabic ? "استفسر عن الكورس" : "Enquire About Course"}
                        {isArabic ? (
                          <ArrowLeft size={19} />
                        ) : (
                          <ArrowRight size={19} />
                        )}
                      </a>
                    </div>
                  </article>
                );
              })}
            </div>
          ) : (
            <div className="rounded-3xl bg-white px-6 py-16 text-center shadow-sm">
              <BookOpen size={48} className="mx-auto mb-5 text-[#0e7490]" />
              <h3 className="text-xl font-black">
                {isArabic ? "لا توجد كورسات مطابقة" : "No Matching Courses"}
              </h3>
              <p className="mt-3 text-slate-500">
                {isArabic
                  ? "جربي البحث بكلمة مختلفة أو اختاري تصنيفًا آخر."
                  : "Try another search term or choose a different category."}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* BENEFITS */}
      <section className="px-5 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <span className="mb-4 inline-block rounded-full bg-[#e8f5f8] px-5 py-2 text-sm font-bold text-[#0e7490]">
              {isArabic ? "لماذا نحن؟" : "Why Choose Us?"}
            </span>

            <h2 className="text-3xl font-black md:text-5xl">
              {isArabic ? "تجربة تعليمية مختلفة" : "A Different Learning Experience"}
            </h2>
          </div>

          <div className="grid gap-7 md:grid-cols-3">
            {[
              {
                icon: GraduationCap,
                title: isArabic ? "تنوع المحتوى" : "Diverse Learning",
                text: isArabic
                  ? "مجالات تعليمية متعددة تلبي احتياجات الطلاب."
                  : "Multiple subjects designed to meet students' needs.",
              },
              {
                icon: PlayCircle,
                title: isArabic ? "تعلم تفاعلي" : "Interactive Learning",
                text: isArabic
                  ? "تجربة تعلم تشجع على المشاركة والاستكشاف."
                  : "A learning experience that encourages participation and discovery.",
              },
              {
                icon: CheckCircle2,
                title: isArabic ? "تطوير المهارات" : "Skill Development",
                text: isArabic
                  ? "محتوى يدعم المعرفة والتفكير والإبداع."
                  : "Content that supports knowledge, critical thinking and creativity.",
              },
            ].map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="rounded-3xl border border-slate-100 bg-white p-9 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#e8f5f8] text-[#0e7490]">
                    <Icon size={32} />
                  </div>

                  <h3 className="mb-4 text-xl font-black">{item.title}</h3>
                  <p className="leading-8 text-slate-500">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#053e50] px-5 py-20 text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 text-center md:flex-row md:text-start">
          <div>
            <h2 className="mb-5 text-3xl font-black md:text-4xl">
              {isArabic
                ? "ابدأ رحلتك التعليمية اليوم"
                : "Start Your Learning Journey Today"}
            </h2>

            <p className="max-w-2xl leading-8 text-white/70">
              {isArabic
                ? "تواصل معنا لمعرفة المزيد عن البرامج التعليمية والكورسات المتاحة."
                : "Contact us to learn more about our educational programs and available courses."}
            </p>
          </div>

          <a
            href="/contact"
            className="inline-flex shrink-0 items-center gap-3 rounded-xl bg-white px-8 py-4 font-bold text-[#053e50] transition hover:-translate-y-1"
          >
            {isArabic ? "تواصل معنا" : "Contact Us"}
            {isArabic ? <ArrowLeft size={20} /> : <ArrowRight size={20} />}
          </a>
        </div>
      </section>
    </main>
  );
}