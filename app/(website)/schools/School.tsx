
"use client";

import {
  ArrowLeft,
  ArrowRight,
  GraduationCap,
  Star,
} from "lucide-react";

import { useLanguage } from "../../context/LanguageContext";
import { getSchoolsData } from "../../(website)/schools/data/schoolsData";

export default function SchoolsPage() {
  const { language } = useLanguage();
  const isArabic = language === "ar";

  const {
    schools,
    statistics,
    features,
    stages,
  } = getSchoolsData(isArabic);

  return (
    <main
      dir={isArabic ? "rtl" : "ltr"}
      className="min-h-screen overflow-hidden bg-slate-50 text-slate-900"
    >
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-[#053e50] px-5 py-24 text-white md:py-32">
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-cyan-300/20 blur-3xl" />
        <div className="absolute -bottom-40 -left-20 h-96 w-96 rounded-full bg-[#0e7490]/40 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm text-cyan-100 backdrop-blur">
              <Star size={16} className="text-cyan-300" />
              {isArabic
                ? "منظومة تعليمية تصنع المستقبل"
                : "An Educational System Building the Future"}
            </div>

            <h1 className="max-w-3xl text-4xl font-black leading-tight md:text-6xl">
              {isArabic ? (
                <>
                  مدارسنا...
                  <span className="block text-cyan-300">
                    مستقبل يبدأ من هنا
                  </span>
                </>
              ) : (
                <>
                  Our Schools...
                  <span className="block text-cyan-300">
                    Your Future Starts Here
                  </span>
                </>
              )}
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-9 text-slate-200">
              {isArabic
                ? "في مدارس الرواد الحديثة نؤمن أن التعليم ليس مجرد معلومات، بل رحلة لبناء العقول واكتشاف المواهب وصناعة جيل قادر على قيادة المستقبل."
                : "At Al Rowad Modern Schools, we believe education is more than information. It is a journey to build minds, discover talents and prepare future leaders."}
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#our-schools"
                className="inline-flex items-center gap-3 rounded-xl bg-[#0e7490] px-7 py-4 font-bold text-white shadow-lg shadow-black/20 transition hover:-translate-y-1 hover:bg-[#155e75]"
              >
                {isArabic ? "اكتشف مدارسنا" : "Explore Our Schools"}
                {isArabic ? <ArrowLeft size={19} /> : <ArrowRight size={19} />}
              </a>

              <a
                href="/contact"
                className="rounded-xl border border-white/30 px-7 py-4 font-bold text-white transition hover:bg-white hover:text-[#0e7490]"
              >
                {isArabic ? "تواصل معنا" : "Contact Us"}
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-5 rounded-[2rem] bg-cyan-400/20 blur-2xl" />

            <div className="relative rounded-[2rem] border border-white/15 bg-white/10 p-4 shadow-2xl backdrop-blur">
              <div className="flex min-h-[390px] flex-col justify-between rounded-3xl bg-gradient-to-br from-[#0e7490] via-[#155e75] to-[#083344] p-8">
                <div className="flex items-center justify-between">
                  <div className="rounded-2xl bg-white/15 p-4">
                    <GraduationCap size={38} />
                  </div>

                  <span className="rounded-full bg-white/15 px-4 py-2 text-sm">
                    AL ROWAD
                  </span>
                </div>

                <div>
                  <p className="mb-3 text-sm font-semibold tracking-widest text-cyan-200">
                    EDUCATION • INNOVATION • FUTURE
                  </p>

                  <h2 className="text-3xl font-black leading-relaxed md:text-4xl">
                    {isArabic
                      ? "نصنع المعرفة ونبني المستقبل"
                      : "Building Knowledge. Creating the Future."}
                  </h2>

                  <div className="mt-7 flex items-center gap-3 text-cyan-100">
                    <span className="h-1 w-12 rounded-full bg-cyan-300" />
                    <span className="text-sm">
                      {isArabic
                        ? "مدارس الرواد الحديثة"
                        : "Al Rowad Modern Schools"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATISTICS */}
      <section className="relative z-10 mx-auto -mt-10 max-w-7xl px-5">
        <div className="grid grid-cols-2 overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-xl md:grid-cols-4">
          {statistics.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="flex flex-col items-center justify-center border-b border-slate-100 p-7 text-center transition hover:bg-cyan-50 md:border-b-0 md:border-e"
              >
                <div className="mb-3 rounded-2xl bg-cyan-50 p-3 text-[#0e7490]">
                  <Icon size={25} />
                </div>

                <h3 className="text-3xl font-black text-slate-900">
                  {item.value}
                </h3>

                <p className="mt-2 text-sm font-semibold text-slate-500">
                  {item.label}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="mx-auto max-w-7xl px-5 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <span className="font-bold tracking-widest text-[#0e7490]">
            {isArabic ? "من نحن" : "WHO WE ARE"}
          </span>

          <h2 className="mt-4 text-3xl font-black leading-relaxed text-slate-900 md:text-5xl">
            {isArabic
              ? "منظومة تعليمية برؤية مختلفة"
              : "An Educational System With a Different Vision"}
          </h2>

          <p className="mt-6 text-lg leading-9 text-slate-500">
            {isArabic
              ? "نعمل على توفير تجربة تعليمية متكاملة تجمع بين المعرفة والقيم والتكنولوجيا، لنساعد كل طالب على اكتشاف إمكاناته وتحقيق طموحاته."
              : "We provide an integrated educational experience combining knowledge, values and technology, helping every student discover their potential and achieve their ambitions."}
          </p>
        </div>
      </section>

      {/* OUR SCHOOLS */}
      <section id="our-schools" className="bg-white px-5 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <span className="font-bold tracking-widest text-[#0e7490]">
                {isArabic ? "كياناتنا التعليمية" : "OUR EDUCATIONAL ENTITIES"}
              </span>

              <h2 className="mt-4 text-3xl font-black text-slate-900 md:text-5xl">
                {isArabic ? "اكتشف مدارسنا" : "Discover Our Schools"}
              </h2>
            </div>

            <p className="max-w-lg leading-8 text-slate-500">
              {isArabic
                ? "نقدم منظومة تعليمية تهتم بالطالب وتضع احتياجاته ومستقبله في مقدمة أولوياتها."
                : "We provide an educational system that puts students and their future at the heart of everything we do."}
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {schools.map((school) => {
              const Icon = school.icon;

              return (
                <article
                  key={school.id}
                  className="group overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-lg shadow-slate-200/50 transition duration-300 hover:-translate-y-3 hover:shadow-2xl"
                >
                  <div className="relative flex h-56 items-center justify-center overflow-hidden bg-gradient-to-br from-[#0e7490] to-[#083344]">
                    <div className="absolute -right-12 -top-12 h-48 w-48 rounded-full border-[25px] border-white/10" />
                    <div className="absolute -bottom-20 -left-10 h-56 w-56 rounded-full border-[30px] border-white/10" />

                    <span className="absolute start-6 top-6 text-5xl font-black text-white/20">
                      {school.number}
                    </span>

                    <div className="relative rounded-3xl border border-white/20 bg-white/15 p-7 text-white shadow-xl backdrop-blur transition group-hover:scale-110">
                      <Icon size={55} strokeWidth={1.5} />
                    </div>
                  </div>

                  <div className="p-8">
                    <span className="rounded-full bg-cyan-50 px-4 py-2 text-xs font-bold text-[#0e7490]">
                      {school.type}
                    </span>

                    <h3 className="mt-6 text-2xl font-black text-slate-900">
                      {school.name}
                    </h3>

                    <p className="mt-4 min-h-20 leading-8 text-slate-500">
                      {school.description}
                    </p>

                    <div className="mt-7 border-t border-slate-100 pt-5">
                      <a
                        href="/contact"
                        className="inline-flex items-center gap-2 font-bold text-[#0e7490] transition hover:gap-4"
                      >
                        {isArabic ? "اعرف المزيد" : "Learn More"}
                        {isArabic ? (
                          <ArrowLeft size={18} />
                        ) : (
                          <ArrowRight size={18} />
                        )}
                      </a>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* EDUCATIONAL STAGES */}
      <section className="bg-[#082f3a] px-5 py-24 text-white">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <span className="font-bold tracking-widest text-cyan-300">
              {isArabic ? "المراحل التعليمية" : "EDUCATIONAL STAGES"}
            </span>

            <h2 className="mt-4 text-3xl font-black md:text-5xl">
              {isArabic
                ? "رحلة تعليمية متكاملة"
                : "A Complete Learning Journey"}
            </h2>

            <p className="mt-6 leading-8 text-slate-300">
              {isArabic
                ? "نرافق أبناءنا في كل مرحلة تعليمية ونساعدهم على اكتساب المعرفة والمهارات المناسبة لأعمارهم."
                : "We support our students through every educational stage, helping them gain age-appropriate knowledge and skills."}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {stages.map((stage) => {
              const Icon = stage.icon;

              return (
                <div
                  key={stage.number}
                  className="group rounded-3xl border border-white/10 bg-white/[0.04] p-8 transition hover:-translate-y-2 hover:border-cyan-400/50 hover:bg-white/[0.08]"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-5xl font-black text-cyan-400/30">
                      {stage.number}
                    </span>

                    <div className="rounded-2xl bg-cyan-500/15 p-4 text-cyan-300 transition group-hover:bg-[#0e7490] group-hover:text-white">
                      <Icon size={30} />
                    </div>
                  </div>

                  <h3 className="mt-10 text-2xl font-black">
                    {stage.title}
                  </h3>

                  <p className="mt-4 text-slate-400">{stage.subtitle}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="px-5 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <span className="font-bold tracking-widest text-[#0e7490]">
              {isArabic ? "لماذا الرواد؟" : "WHY AL ROWAD?"}
            </span>

            <h2 className="mt-4 text-3xl font-black text-slate-900 md:text-5xl">
              {isArabic
                ? "ما الذي يميز مدارسنا؟"
                : "What Makes Our Schools Different?"}
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <div
                  key={index}
                  className="rounded-3xl border border-slate-100 bg-white p-7 shadow-lg shadow-slate-200/40 transition hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className="mb-6 inline-flex rounded-2xl bg-cyan-50 p-4 text-[#0e7490]">
                    <Icon size={30} />
                  </div>

                  <h3 className="text-xl font-black text-slate-900">
                    {feature.title}
                  </h3>

                  <p className="mt-4 leading-8 text-slate-500">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 pb-24">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-gradient-to-r from-[#0e7490] to-[#083344] px-7 py-16 text-center text-white md:px-16">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full border-[35px] border-white/10" />
          <div className="absolute -bottom-32 -left-10 h-72 w-72 rounded-full border-[40px] border-white/10" />

          <div className="relative">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15">
              <GraduationCap size={35} />
            </div>

            <h2 className="text-3xl font-black md:text-5xl">
              {isArabic
                ? "ابدأ مستقبل أبنائك مع الرواد"
                : "Start Your Children's Future With Al Rowad"}
            </h2>

            <p className="mx-auto mt-6 max-w-2xl leading-8 text-cyan-100">
              {isArabic
                ? "تعرف على مدارسنا وخدماتنا التعليمية، وكن جزءًا من رحلتنا نحو مستقبل أفضل."
                : "Discover our schools and educational services, and become part of our journey toward a better future."}
            </p>

            <a
              href="/contact"
              className="mt-9 inline-flex items-center gap-3 rounded-xl bg-white px-8 py-4 font-black text-[#0e7490] transition hover:-translate-y-1 hover:bg-cyan-50"
            >
              {isArabic ? "تواصل معنا الآن" : "Contact Us Now"}
              {isArabic ? (
                <ArrowLeft size={19} />
              ) : (
                <ArrowRight size={19} />
              )}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
