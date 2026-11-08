
"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "../../context/LanguageContext";
import { getTeachersData } from "./data/teachersData";

import {
  GraduationCap,
  BookOpen,
  Award,
  Users,
  ArrowLeft,
  ArrowRight,
  Sparkles,
  Mail,
  Star,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

// =====================================
// Animated Counter
// =====================================

function Counter({ value }: { value: string | number }) {
  const target = Number(String(value).replace(/[^0-9]/g, ""));
  const suffix = String(value).replace(/[0-9]/g, "");

  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!target) return;

    let animationFrame: number;
    let startTime = performance.now();

    const duration = 2500;
    const pauseDuration = 900;

    let isPaused = false;
    let pauseStart = 0;

    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);

      const eased = 1 - Math.pow(1 - progress, 3);

      setCount(Math.floor(eased * target));

      if (progress >= 1) {
        if (!isPaused) {
          isPaused = true;
          pauseStart = now;
        }

        if (now - pauseStart >= pauseDuration) {
          setCount(0);
          startTime = now;
          isPaused = false;
        }
      }

      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [target]);

  return (
    <span className="tabular-nums">
      {count.toLocaleString("en-US")}
      {suffix}
    </span>
  );
}

// =====================================
// Teachers Page
// =====================================

export default function TeachersPage() {
  const { language } = useLanguage();
  const isArabic = language === "ar";

  const data = getTeachersData(isArabic);

  const statsIcons = [
    Users,
    BookOpen,
    Award,
    GraduationCap,
  ];

  return (
    <main
      dir={isArabic ? "rtl" : "ltr"}
      className="min-h-screen overflow-hidden bg-[#f5f8fa] text-slate-800"
    >
      {/* =====================================
          HERO SECTION
      ===================================== */}

      <section className="relative overflow-hidden bg-[#062f40]">

        <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full border border-cyan-400/10" />

        <div className="absolute -right-20 -top-20 h-[350px] w-[350px] rounded-full border border-cyan-400/10" />

        <div className="absolute -bottom-40 -left-20 h-[450px] w-[450px] rounded-full bg-[#0e7490]/20 blur-3xl" />

        <div className="relative mx-auto grid max-w-[1500px] items-center gap-16 px-6 py-28 lg:grid-cols-2 lg:py-36">

          {/* Hero Text */}

          <div>
            <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-6 py-3 text-base font-bold text-cyan-200">

              <Sparkles size={20} />

              {isArabic
                ? "نخبة من الكفاءات التعليمية"
                : "Our Professional Educators"}

            </div>

            <h1 className="text-5xl font-black leading-tight text-white md:text-7xl">

              {isArabic ? (
                <>
                  معلمونا...
                  <span className="mt-4 block text-cyan-400">
                    صُنّاع المستقبل
                  </span>
                </>
              ) : (
                <>
                  Our Teachers...
                  <span className="mt-4 block text-cyan-400">
                    Future Makers
                  </span>
                </>
              )}

            </h1>

            <p className="mt-9 max-w-2xl text-xl leading-10 text-slate-300">

              {isArabic
                ? "نؤمن أن التعليم المتميز يبدأ بمعلم متميز. لذلك نحرص على توفير فريق تعليمي يجمع بين الخبرة والكفاءة والشغف بالتعليم."
                : "We believe excellent education begins with excellent teachers. Our team combines experience, expertise, and a passion for learning."}

            </p>

            <div className="mt-12 flex flex-wrap gap-5">

              <a
                href="#teachers-list"
                className="inline-flex items-center gap-3 rounded-2xl bg-[#0e7490] px-9 py-5 text-lg font-bold text-white shadow-xl shadow-cyan-950/20 transition duration-300 hover:-translate-y-1 hover:bg-cyan-700"
              >

                {isArabic ? "اكتشف فريقنا" : "Meet Our Team"}

                {isArabic ? (
                  <ArrowLeft size={22} />
                ) : (
                  <ArrowRight size={22} />
                )}

              </a>

              <a
                href="/contact"
                className="inline-flex items-center gap-3 rounded-2xl border border-white/20 px-9 py-5 text-lg font-bold text-white transition hover:bg-white/10"
              >

                <Mail size={21} />

                {isArabic ? "تواصل معنا" : "Contact Us"}

              </a>

            </div>
          </div>

          {/* Hero Visual */}

          <div className="relative mx-auto w-full max-w-xl">

            <div className="relative rounded-[45px] border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur">

              <div className="rounded-[35px] bg-gradient-to-br from-[#0e7490] to-[#073b50] px-8 py-16 text-center">

                <div className="mx-auto flex h-44 w-44 items-center justify-center rounded-full border-4 border-white/30 bg-white/10 shadow-2xl">

                  <GraduationCap
                    size={105}
                    strokeWidth={1.3}
                    className="text-white"
                  />

                </div>

                <h2 className="mt-10 text-4xl font-black text-white">

                  {isArabic
                    ? "التميز يبدأ هنا"
                    : "Excellence Starts Here"}

                </h2>

                <p className="mt-5 text-lg leading-8 text-cyan-100">

                  {isArabic
                    ? "معًا من أجل جيل واعٍ ومبدع"
                    : "Together for a creative generation"}

                </p>

                <div className="mt-9 flex justify-center gap-3">

                  {[1, 2, 3, 4, 5].map((item) => (
                    <Star
                      key={item}
                      size={25}
                      fill="currentColor"
                      className="text-yellow-300"
                    />
                  ))}

                </div>

              </div>
            </div>

            {/* Floating Card */}

            <div className="absolute -bottom-8 -left-5 rounded-3xl bg-white p-6 shadow-2xl md:-left-12">

              <div className="flex items-center gap-4">

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-50 text-[#0e7490]">

                  <Users size={34} />

                </div>

                <div>

                  <p className="text-3xl font-black text-[#053e50]">
                    85+
                  </p>

                  <p className="mt-1 text-sm font-bold text-slate-500">
                    {isArabic ? "عضو هيئة تدريس" : "Teachers"}
                  </p>

                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =====================================
          STATISTICS SECTION
      ===================================== */}

      <section className="relative z-10 mx-auto max-w-[1500px] px-6 py-24">

        <div className="mb-14 text-center">

          <span className="inline-block rounded-full bg-cyan-100 px-7 py-3 text-base font-black text-[#0e7490]">

            {isArabic ? "أرقامنا وإنجازاتنا" : "Our Achievements"}

          </span>

          <h2 className="mt-7 text-4xl font-black text-[#053e50] md:text-6xl">

            {isArabic ? "التميز بالأرقام" : "Excellence in Numbers"}

          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-9 text-slate-500">

            {isArabic
              ? "نعمل كل يوم على تطوير بيئة تعليمية متميزة من خلال فريقنا وخبراتنا."
              : "Every day, we work to build an exceptional educational environment."}

          </p>

        </div>

        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">

          {data.stats.map((stat, index) => {

            const Icon = statsIcons[index] || Award;

            return (

              <div
                key={stat.id}
                className="group relative min-h-[310px] overflow-hidden rounded-[35px] border border-cyan-100 bg-white p-9 shadow-lg transition-all duration-500 hover:-translate-y-3 hover:border-[#0e7490] hover:shadow-2xl"
              >

                <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-cyan-50 transition-all duration-500 group-hover:scale-150" />

                <div className="relative">

                  <div className="flex items-center justify-between">

                    <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-[#e8f5f8] text-[#0e7490] transition-all duration-500 group-hover:bg-[#0e7490] group-hover:text-white">

                      <Icon size={38} strokeWidth={1.8} />

                    </div>

                    <span className="text-2xl font-black text-cyan-100">
                      0{index + 1}
                    </span>

                  </div>

                  <h2 className="mt-10 text-5xl font-black tracking-tight text-[#053e50] md:text-6xl">

                    <Counter value={stat.number} />

                  </h2>

                  <p className="mt-5 text-lg font-extrabold text-slate-600">

                    {stat.title}

                  </p>

                  <div className="mt-7 h-2 overflow-hidden rounded-full bg-slate-100">

                    <div
                      className="h-full rounded-full bg-gradient-to-r from-[#0e7490] to-cyan-400"
                      style={{ width: `${85 + index * 5}%` }}
                    />

                  </div>

                </div>
              </div>

            );

          })}

        </div>
      </section>

      {/* =====================================
          TEACHERS INTRO
      ===================================== */}

      <section
        id="teachers-list"
        className="mx-auto max-w-[1500px] px-6 pb-12 pt-20"
      >

        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">

          <div>

            <span className="font-black uppercase tracking-widest text-[#0e7490]">
              {isArabic ? "فريق العمل التعليمي" : "Our Faculty"}
            </span>

            <h2 className="mt-5 text-4xl font-black text-[#053e50] md:text-6xl">

              {isArabic
                ? "تعرف على معلمينا"
                : "Meet Our Teachers"}

            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-9 text-slate-500">

              {isArabic
                ? "نخبة من المعلمين المتخصصين الذين يعملون على بناء شخصية الطالب وتنمية مهاراته."
                : "A team of dedicated educators helping students build confidence and develop their skills."}

            </p>

          </div>

          <div className="flex items-center gap-3 rounded-2xl bg-white px-6 py-4 shadow-sm">

            <CheckCircle2 size={25} className="text-[#0e7490]" />

            <span className="font-bold text-slate-600">

              {isArabic
                ? "فريق تعليمي متخصص"
                : "Qualified Educators"}

            </span>

          </div>

        </div>
      </section>

      {/* =====================================
          TEACHERS CARDS
      ===================================== */}

      <section className="mx-auto max-w-[1500px] px-6 pb-28">

        <div className="grid gap-9 sm:grid-cols-2 lg:grid-cols-3">

          {data.teachers.map((teacher, index) => (

            <article
              key={teacher.id}
              className="group overflow-hidden rounded-[35px] border border-slate-100 bg-white shadow-md transition duration-500 hover:-translate-y-3 hover:shadow-2xl"
            >

              {/* Teacher Image Area */}

              <div className="relative flex h-80 items-center justify-center overflow-hidden bg-[#073b50]">

                <div className="absolute inset-0 bg-gradient-to-br from-[#0e7490] to-[#062f40]" />

                <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full border border-white/10 transition duration-700 group-hover:scale-125" />

                <div className="absolute -bottom-20 -left-12 h-72 w-72 rounded-full border border-white/10" />

                <div className="relative flex h-40 w-40 items-center justify-center rounded-full border-4 border-white/30 bg-white/10 text-5xl font-black text-white shadow-2xl backdrop-blur">

                  {teacher.initials}

                </div>

                <div className="absolute bottom-6 right-6 rounded-full bg-white/15 px-5 py-3 text-sm font-bold text-white backdrop-blur">

                  {isArabic ? "المعلم" : "Teacher"} #{index + 1}

                </div>

                <div className="absolute bottom-6 left-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#0e7490]">

                  <GraduationCap size={27} />

                </div>

              </div>

              {/* Teacher Information */}

              <div className="p-9">

                <div className="mb-5 flex flex-wrap items-center justify-between gap-3">

                  <span className="rounded-full bg-cyan-50 px-5 py-3 text-sm font-bold text-[#0e7490]">

                    {teacher.subject}

                  </span>

                  <div className="flex items-center gap-1 text-yellow-500">

                    <Star size={17} fill="currentColor" />

                    <span className="text-sm font-bold text-slate-500">

                      {isArabic ? "متميز" : "Featured"}

                    </span>

                  </div>

                </div>

                <h3 className="text-3xl font-black text-[#053e50] transition group-hover:text-[#0e7490]">

                  {teacher.name}

                </h3>

                <p className="mt-5 min-h-20 text-base leading-8 text-slate-500">

                  {teacher.description}

                </p>

                <div className="mt-7 flex items-center justify-between border-t border-slate-100 pt-6">

                  <div className="flex items-center gap-3 text-sm font-bold text-slate-600">

                    <Award size={22} className="text-[#0e7490]" />

                    {teacher.experience}

                  </div>

                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#e8f5f8] text-[#0e7490] transition group-hover:bg-[#0e7490] group-hover:text-white">

                    {isArabic ? (
                      <ChevronLeft size={23} />
                    ) : (
                      <ChevronRight size={23} />
                    )}

                  </div>

                </div>

              </div>

            </article>

          ))}

        </div>
      </section>

      {/* =====================================
          FINAL CTA
      ===================================== */}

      <section className="relative mx-6 mb-24 overflow-hidden rounded-[40px] bg-[#062f40] px-6 py-24 text-center md:mx-auto md:max-w-[1450px]">

        <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-[#0e7490]/20 blur-3xl" />

        <div className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />

        <div className="relative">

          <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-3xl bg-white/10 text-cyan-300">

            <GraduationCap size={55} />

          </div>

          <h2 className="mt-9 text-4xl font-black text-white md:text-6xl">

            {isArabic
              ? "معًا نصنع مستقبلًا أفضل"
              : "Together, We Build a Better Future"}

          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-9 text-cyan-100">

            {isArabic
              ? "نؤمن أن التعاون بين المعلم والمدرسة والأسرة هو سر نجاح العملية التعليمية."
              : "We believe collaboration between teachers, schools, and families is the key to educational success."}

          </p>

          <a
            href="/contact"
            className="mt-11 inline-flex items-center gap-4 rounded-2xl bg-white px-10 py-5 text-lg font-black text-[#053e50] shadow-xl transition duration-300 hover:-translate-y-1 hover:bg-cyan-50"
          >

            <Mail size={22} />

            {isArabic ? "تواصل معنا" : "Contact Us"}

            {isArabic ? (
              <ArrowLeft size={22} />
            ) : (
              <ArrowRight size={22} />
            )}

          </a>

        </div>
      </section>

    </main>
  );
}
