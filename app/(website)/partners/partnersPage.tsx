
"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "../../context/LanguageContext";
import { getPartnersData } from "./data/partnersData";

import {
  Handshake,
  ArrowLeft,
  ArrowRight,
  Sparkles,
  Building2,
  Globe,
  Award,
  Users,
  CheckCircle2,
  Mail,
  Star,
  HeartHandshake,
  Lightbulb,
  Target,
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
// Partners Page
// =====================================

export default function PartnersPage() {
  const { language } = useLanguage();
  const isArabic = language === "ar";

  const data = getPartnersData(isArabic);

  const statIcons = [Handshake, Globe, Award, Star];

  const benefitIcons = [Target, Lightbulb, HeartHandshake];

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
                ? "معًا نصنع النجاح"
                : "Together We Create Success"}

            </div>

            <h1 className="text-5xl font-black leading-tight text-white md:text-7xl">

              {isArabic ? (
                <>
                  شركاؤنا...
                  <span className="mt-4 block text-cyan-400">
                    شركاء النجاح
                  </span>
                </>
              ) : (
                <>
                  Our Partners...
                  <span className="mt-4 block text-cyan-400">
                    Partners in Success
                  </span>
                </>
              )}

            </h1>

            <p className="mt-9 max-w-2xl text-xl leading-10 text-slate-300">

              {isArabic
                ? "نؤمن أن النجاح الحقيقي يتحقق بالتعاون وتبادل الخبرات. لذلك نعتز بشراكاتنا التي تساعدنا على تقديم تجربة تعليمية أفضل وبناء مستقبل مشرق لأبنائنا."
                : "We believe true success comes through collaboration and shared expertise. We value partnerships that help us deliver better education and build a brighter future."}

            </p>

            <div className="mt-12 flex flex-wrap gap-5">

              <a
                href="#partners-list"
                className="inline-flex items-center gap-3 rounded-2xl bg-[#0e7490] px-9 py-5 text-lg font-bold text-white shadow-xl transition duration-300 hover:-translate-y-1 hover:bg-cyan-700"
              >

                {isArabic ? "اكتشف شركاءنا" : "Discover Partners"}

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

                <Handshake size={22} />

                {isArabic ? "كن شريكًا لنا" : "Become a Partner"}

              </a>

            </div>

          </div>

          {/* Hero Visual */}

          <div className="relative mx-auto w-full max-w-xl">

            <div className="relative rounded-[45px] border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur">

              <div className="rounded-[35px] bg-gradient-to-br from-[#0e7490] to-[#073b50] px-8 py-16 text-center">

                <div className="mx-auto flex h-44 w-44 items-center justify-center rounded-full border-4 border-white/30 bg-white/10 shadow-2xl">

                  <Handshake
                    size={105}
                    strokeWidth={1.3}
                    className="text-white"
                  />

                </div>

                <h2 className="mt-10 text-4xl font-black text-white">

                  {isArabic
                    ? "قوة التعاون"
                    : "The Power of Partnership"}

                </h2>

                <p className="mt-5 text-lg leading-8 text-cyan-100">

                  {isArabic
                    ? "شراكات اليوم تصنع إنجازات الغد"
                    : "Today's partnerships build tomorrow's achievements"}

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

                  <Building2 size={34} />

                </div>

                <div>

                  <p className="text-3xl font-black text-[#053e50]">
                    25+
                  </p>

                  <p className="mt-1 text-sm font-bold text-slate-500">

                    {isArabic ? "شريك نجاح" : "Success Partners"}

                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* =====================================
          STATISTICS
      ===================================== */}

      <section className="relative z-10 mx-auto max-w-[1500px] px-6 py-24">

        <div className="mb-14 text-center">

          <span className="inline-block rounded-full bg-cyan-100 px-7 py-3 text-base font-black text-[#0e7490]">

            {isArabic ? "شراكاتنا بالأرقام" : "Our Partnerships in Numbers"}

          </span>

          <h2 className="mt-7 text-4xl font-black text-[#053e50] md:text-6xl">

            {isArabic ? "معًا نحقق المزيد" : "Together We Achieve More"}

          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-9 text-slate-500">

            {isArabic
              ? "نفخر بعلاقات التعاون التي تساهم في تطوير بيئتنا التعليمية."
              : "We are proud of the partnerships that contribute to our educational development."}

          </p>

        </div>

        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">

          {data.stats.map((stat, index) => {

            const Icon = statIcons[index] || Award;

            return (

              <div
                key={stat.id}
                className="group relative min-h-[310px] overflow-hidden rounded-[35px] border border-cyan-100 bg-white p-9 shadow-lg transition-all duration-500 hover:-translate-y-3 hover:border-[#0e7490] hover:shadow-2xl"
              >

                <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-cyan-50 transition-all duration-500 group-hover:scale-150" />

                <div className="relative">

                  <div className="flex items-center justify-between">

                    <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-[#e8f5f8] text-[#0e7490] transition-all duration-500 group-hover:bg-[#0e7490] group-hover:text-white">

                      <Icon size={38} />

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
          PARTNERS INTRO
      ===================================== */}

      <section
        id="partners-list"
        className="mx-auto max-w-[1500px] px-6 pb-12 pt-20"
      >

        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">

          <div>

            <span className="font-black uppercase tracking-widest text-[#0e7490]">

              {isArabic ? "شبكة شركائنا" : "Our Partner Network"}

            </span>

            <h2 className="mt-5 text-4xl font-black text-[#053e50] md:text-6xl">

              {isArabic ? "شركاء رحلتنا" : "Partners in Our Journey"}

            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-9 text-slate-500">

              {isArabic
                ? "نعمل مع مختلف القطاعات لبناء علاقات تعاون تدعم التعليم والتكنولوجيا والابتكار."
                : "We work across different sectors to build partnerships that support education, technology, and innovation."}

            </p>

          </div>

          <div className="flex items-center gap-3 rounded-2xl bg-white px-6 py-4 shadow-sm">

            <CheckCircle2 size={25} className="text-[#0e7490]" />

            <span className="font-bold text-slate-600">

              {isArabic ? "التعاون يصنع الفرق" : "Collaboration Makes a Difference"}

            </span>

          </div>

        </div>

      </section>

      {/* =====================================
          PARTNERS CARDS
      ===================================== */}

      <section className="mx-auto max-w-[1500px] px-6 pb-28">

        <div className="grid gap-9 sm:grid-cols-2 lg:grid-cols-3">

          {data.partners.map((partner, index) => {

            const Icon = partner.icon;

            return (

              <article
                key={partner.id}
                className="group relative overflow-hidden rounded-[35px] border border-slate-100 bg-white p-9 shadow-md transition duration-500 hover:-translate-y-3 hover:border-cyan-200 hover:shadow-2xl"
              >

                {/* Background Decoration */}

                <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-cyan-50 transition duration-700 group-hover:scale-150" />

                <div className="relative">

                  {/* Partner Icon */}

                  <div className="flex items-center justify-between">

                    <div className="flex h-24 w-24 items-center justify-center rounded-[28px] bg-gradient-to-br from-[#0e7490] to-[#053e50] text-white shadow-xl transition duration-500 group-hover:rotate-6 group-hover:scale-110">

                      <Icon size={45} strokeWidth={1.7} />

                    </div>

                    <span className="text-3xl font-black text-cyan-100">

                      0{index + 1}

                    </span>

                  </div>

                  {/* Partner Initials */}

                  <div className="mt-9 flex items-center justify-between">

                    <span className="text-2xl font-black tracking-wider text-[#0e7490]">

                      {partner.initials}

                    </span>

                    <span className="rounded-full bg-cyan-50 px-4 py-2 text-xs font-bold text-[#0e7490]">

                      {partner.category}

                    </span>

                  </div>

                  {/* Partner Name */}

                  <h3 className="mt-7 text-2xl font-black text-[#053e50] transition group-hover:text-[#0e7490]">

                    {partner.name}

                  </h3>

                  {/* Description */}

                  <p className="mt-5 min-h-24 text-base leading-8 text-slate-500">

                    {partner.description}

                  </p>

                  {/* Bottom */}

                  <div className="mt-8 flex items-center justify-between border-t border-slate-100 pt-6">

                    <div className="flex items-center gap-2 text-sm font-bold text-[#0e7490]">

                      <CheckCircle2 size={19} />

                      {isArabic ? "شراكة وتعاون" : "Partnership"}

                    </div>

                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#e8f5f8] text-[#0e7490] transition group-hover:bg-[#0e7490] group-hover:text-white">

                      {isArabic ? (
                        <ArrowLeft size={22} />
                      ) : (
                        <ArrowRight size={22} />
                      )}

                    </div>

                  </div>

                </div>

              </article>

            );

          })}

        </div>

      </section>

      {/* =====================================
          BENEFITS SECTION
      ===================================== */}

      <section className="bg-white py-24">

        <div className="mx-auto max-w-[1500px] px-6">

          <div className="mb-16 text-center">

            <span className="font-black tracking-widest text-[#0e7490]">

              {isArabic ? "قيمة الشراكة" : "Partnership Value"}

            </span>

            <h2 className="mt-5 text-4xl font-black text-[#053e50] md:text-5xl">

              {isArabic ? "لماذا نتعاون؟" : "Why We Collaborate"}

            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-9 text-slate-500">

              {isArabic
                ? "نؤمن أن العمل المشترك يفتح آفاقًا جديدة للتعلم والتطوير."
                : "We believe working together opens new opportunities for learning and development."}

            </p>

          </div>

          <div className="grid gap-8 md:grid-cols-3">

            {data.benefits.map((benefit, index) => {

              const Icon = benefitIcons[index] || Award;

              return (

                <div
                  key={benefit.id}
                  className="group rounded-[32px] border border-slate-100 bg-[#f7fafb] p-10 text-center transition duration-500 hover:-translate-y-3 hover:bg-white hover:shadow-xl"
                >

                  <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-[30px] bg-[#e5f4f7] text-[#0e7490] transition duration-500 group-hover:bg-[#0e7490] group-hover:text-white">

                    <Icon size={43} />

                  </div>

                  <h3 className="mt-8 text-2xl font-black text-[#053e50]">

                    {benefit.title}

                  </h3>

                  <p className="mt-5 text-base leading-8 text-slate-500">

                    {benefit.description}

                  </p>

                </div>

              );

            })}

          </div>

        </div>

      </section>

      {/* =====================================
          FINAL CTA
      ===================================== */}

      <section className="relative mx-6 my-24 overflow-hidden rounded-[40px] bg-[#062f40] px-6 py-24 text-center md:mx-auto md:max-w-[1450px]">

        <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-[#0e7490]/20 blur-3xl" />

        <div className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />

        <div className="relative">

          <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-3xl bg-white/10 text-cyan-300">

            <Handshake size={55} />

          </div>

          <h2 className="mt-9 text-4xl font-black text-white md:text-6xl">

            {isArabic
              ? "هل ترغب في أن تكون شريك نجاح؟"
              : "Would You Like to Become a Partner?"}

          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-9 text-cyan-100">

            {isArabic
              ? "نسعد بالتعاون مع المؤسسات والشركات التي تشاركنا رؤيتنا في تطوير التعليم وصناعة مستقبل أفضل."
              : "We welcome organizations and companies that share our vision of improving education and building a better future."}

          </p>

          <a
            href="/contact"
            className="mt-11 inline-flex items-center gap-4 rounded-2xl bg-white px-10 py-5 text-lg font-black text-[#053e50] shadow-xl transition duration-300 hover:-translate-y-1 hover:bg-cyan-50"
          >

            <Mail size={22} />

            {isArabic ? "تواصل معنا للشراكة" : "Contact Us for Partnership"}

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
