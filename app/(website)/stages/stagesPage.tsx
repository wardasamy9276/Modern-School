
"use client";

import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  GraduationCap,
  BookOpen,
} from "lucide-react";

import { useLanguage } from "../../context/LanguageContext";
import { getStagesData } from "../stages/data/stagesData";

export default function StagesPage() {
  const { language } = useLanguage();
  const isArabic = language === "ar";

  const { stages, benefits } = getStagesData(isArabic);

  return (
    <main
      dir={isArabic ? "rtl" : "ltr"}
      className="min-h-screen overflow-hidden bg-slate-50 text-slate-900"
    >
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#053e50] px-5 py-24 text-white md:py-32">
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-cyan-300/20 blur-3xl" />
        <div className="absolute -bottom-32 -left-20 h-96 w-96 rounded-full bg-[#0e7490]/40 blur-3xl" />

        <div className="relative mx-auto max-w-5xl text-center">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm text-cyan-100">
            <GraduationCap size={18} />
            {isArabic ? "رحلتنا التعليمية" : "OUR EDUCATIONAL JOURNEY"}
          </div>

          <h1 className="text-4xl font-black leading-tight md:text-6xl">
            {isArabic ? (
              <>
                المراحل التعليمية
                <span className="mt-3 block text-cyan-300">
                  نبني المعرفة خطوة بخطوة
                </span>
              </>
            ) : (
              <>
                Educational Stages
                <span className="mt-3 block text-cyan-300">
                  Building Knowledge Step by Step
                </span>
              </>
            )}
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-slate-200">
            {isArabic
              ? "نرافق أبناءنا في رحلة تعليمية متكاملة، من السنوات الأولى وحتى الاستعداد للجامعة، من خلال بيئة تعليمية تهتم بالمعرفة والإبداع وبناء الشخصية."
              : "We accompany our students through a complete educational journey, from their early years to university preparation, in an environment that values knowledge, creativity and personal growth."}
          </p>

          <a
            href="#stages"
            className="mt-9 inline-flex items-center gap-3 rounded-xl bg-[#0e7490] px-8 py-4 font-bold text-white transition hover:-translate-y-1 hover:bg-[#155e75]"
          >
            {isArabic ? "اكتشف المراحل" : "Explore Stages"}
            {isArabic ? <ArrowLeft size={20} /> : <ArrowRight size={20} />}
          </a>
        </div>
      </section>

      {/* INTRO */}
      <section className="mx-auto max-w-7xl px-5 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <span className="font-bold tracking-widest text-[#0e7490]">
            {isArabic ? "رحلة متكاملة" : "A COMPLETE JOURNEY"}
          </span>

          <h2 className="mt-4 text-3xl font-black md:text-5xl">
            {isArabic
              ? "كل مرحلة تصنع فرقًا في المستقبل"
              : "Every Stage Shapes the Future"}
          </h2>

          <p className="mt-6 text-lg leading-9 text-slate-500">
            {isArabic
              ? "لكل عمر احتياجاته، ولكل مرحلة أهدافها. لذلك نهتم بتقديم تجربة تعليمية مناسبة لنمو الطلاب وتطور قدراتهم."
              : "Every age has its needs and every stage has its goals. We provide an educational experience that supports students' growth and development."}
          </p>
        </div>
      </section>

      {/* STAGES */}
      <section id="stages" className="bg-white px-5 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <span className="font-bold tracking-widest text-[#0e7490]">
              {isArabic ? "مراحل التعليم" : "EDUCATION LEVELS"}
            </span>

            <h2 className="mt-4 text-3xl font-black md:text-5xl">
              {isArabic ? "اكتشف مراحلنا التعليمية" : "Discover Our Stages"}
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {stages.map((stage) => {
              const Icon = stage.icon;

              return (
                <article
                  key={stage.id}
                  className="group overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
                >
                  <div className="relative overflow-hidden bg-gradient-to-br from-[#0e7490] to-[#053e50] p-8 text-white">
                    <div className="absolute -bottom-16 -left-10 h-48 w-48 rounded-full border-[25px] border-white/10" />

                    <div className="relative flex items-center justify-between">
                      <span className="text-6xl font-black text-white/25">
                        {stage.number}
                      </span>

                      <div className="rounded-2xl border border-white/20 bg-white/15 p-5 backdrop-blur">
                        <Icon size={38} />
                      </div>
                    </div>

                    <h3 className="relative mt-8 text-2xl font-black md:text-3xl">
                      {stage.title}
                    </h3>

                    <p className="relative mt-3 text-cyan-100">
                      {stage.subtitle}
                    </p>
                  </div>

                  <div className="p-8">
                    <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-cyan-50 px-4 py-2 text-sm font-bold text-[#0e7490]">
                      <GraduationCap size={17} />
                      {stage.age}
                    </div>

                    <p className="leading-9 text-slate-500">
                      {stage.description}
                    </p>

                    <div className="mt-7 border-t border-slate-100 pt-6">
                      <h4 className="mb-5 flex items-center gap-2 text-lg font-black text-slate-900">
                        <BookOpen className="text-[#0e7490]" size={21} />
                        {isArabic ? "المواد والمهارات" : "Subjects & Skills"}
                      </h4>

                      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                        {stage.subjects.map((subject, index) => (
                          <div
                            key={index}
                            className="flex items-center gap-2 rounded-xl bg-slate-50 p-3 text-sm font-semibold text-slate-600 transition hover:bg-cyan-50 hover:text-[#0e7490]"
                          >
                            <CheckCircle2
                              size={17}
                              className="shrink-0 text-[#0e7490]"
                            />
                            {subject}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="bg-[#082f3a] px-5 py-24 text-white">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <span className="font-bold tracking-widest text-cyan-300">
              {isArabic ? "أسلوبنا التعليمي" : "OUR EDUCATIONAL APPROACH"}
            </span>

            <h2 className="mt-4 text-3xl font-black md:text-5xl">
              {isArabic
                ? "كيف نطور قدرات الطلاب؟"
                : "How Do We Develop Students?"}
            </h2>
          </div>

          <div className="grid gap-7 md:grid-cols-3">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;

              return (
                <div
                  key={index}
                  className="rounded-3xl border border-white/10 bg-white/[0.05] p-8 transition hover:-translate-y-2 hover:border-cyan-400/50 hover:bg-white/[0.08]"
                >
                  <div className="mb-6 inline-flex rounded-2xl bg-[#0e7490] p-4 text-white">
                    <Icon size={32} />
                  </div>

                  <h3 className="text-xl font-black">
                    {benefit.title}
                  </h3>

                  <p className="mt-4 leading-8 text-slate-300">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 py-24">
        <div className="mx-auto max-w-7xl rounded-[2rem] bg-gradient-to-r from-[#0e7490] to-[#053e50] px-7 py-16 text-center text-white md:px-16">
          <GraduationCap size={55} className="mx-auto mb-6 text-cyan-200" />

          <h2 className="text-3xl font-black md:text-5xl">
            {isArabic
              ? "ابدأ رحلة التعلم مع الرواد"
              : "Start Your Learning Journey With Al Rowad"}
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-cyan-100">
            {isArabic
              ? "تعرف على المزيد من خدماتنا التعليمية وتواصل معنا لمعرفة التفاصيل."
              : "Discover more about our educational services and contact us for further information."}
          </p>

          <a
            href="/contact"
            className="mt-9 inline-flex items-center gap-3 rounded-xl bg-white px-8 py-4 font-black text-[#0e7490] transition hover:-translate-y-1 hover:bg-cyan-50"
          >
            {isArabic ? "تواصل معنا" : "Contact Us"}
            {isArabic ? <ArrowLeft size={19} /> : <ArrowRight size={19} />}
          </a>
        </div>
      </section>
    </main>
  );
}
