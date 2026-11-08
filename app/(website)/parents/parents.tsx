
"use client";

import { useLanguage } from "../../context/LanguageContext";

import {
  Users,
  GraduationCap,
  BookOpen,
  CalendarDays,
  MessageCircle,
  ClipboardCheck,
  Bell,
  ShieldCheck,
  ArrowLeft,
  ArrowRight,
  Sparkles,
  HeartHandshake,
  School,
  UserRoundCheck,
  BookOpenCheck,
  Clock,
  Mail,
  Phone,
  CheckCircle2,
} from "lucide-react";

export default function ParentsPage() {
  const { language } = useLanguage();
  const isArabic = language === "ar";

  const services = [
    {
      icon: BookOpen,
      title: isArabic ? "متابعة المستوى الدراسي" : "Academic Progress",
      description: isArabic
        ? "تابع المستوى الدراسي والنتائج والتقييمات الخاصة بأبنائك."
        : "Follow your children's academic performance, grades and assessments.",
    },
    {
      icon: CalendarDays,
      title: isArabic ? "الجدول الدراسي" : "School Schedule",
      description: isArabic
        ? "تعرف على مواعيد الحصص والاختبارات والأنشطة المدرسية."
        : "Stay informed about classes, exams and school activities.",
    },
    {
      icon: MessageCircle,
      title: isArabic ? "التواصل مع المدرسة" : "School Communication",
      description: isArabic
        ? "تواصل مع إدارة المدرسة والمعلمين لمتابعة كل ما يخص أبنائك."
        : "Communicate with school management and teachers.",
    },
    {
      icon: ClipboardCheck,
      title: isArabic ? "متابعة الحضور والغياب" : "Attendance Tracking",
      description: isArabic
        ? "تابع الحضور والغياب وسجل انتظام أبنائك الدراسي."
        : "Monitor attendance and your children's school records.",
    },
    {
      icon: Bell,
      title: isArabic ? "الإشعارات المدرسية" : "School Notifications",
      description: isArabic
        ? "احصل على تحديثات وإعلانات المدرسة والمواعيد المهمة."
        : "Receive important school announcements and updates.",
    },
    {
      icon: ShieldCheck,
      title: isArabic ? "بيئة تعليمية آمنة" : "Safe Learning Environment",
      description: isArabic
        ? "نعمل على توفير بيئة تعليمية آمنة تدعم نمو الطلاب وتطورهم."
        : "We work to provide a safe environment that supports student growth.",
    },
  ];

  const steps = [
    {
      number: "01",
      title: isArabic ? "تسجيل الدخول" : "Sign In",
      description: isArabic
        ? "ادخل إلى حساب ولي الأمر باستخدام بيانات الدخول الخاصة بك."
        : "Access your parent account using your login credentials.",
    },
    {
      number: "02",
      title: isArabic ? "اختيار الطالب" : "Select Student",
      description: isArabic
        ? "اختر ملف ابنك أو ابنتك للاطلاع على المعلومات الدراسية."
        : "Select your child's profile to view school information.",
    },
    {
      number: "03",
      title: isArabic ? "متابعة التفاصيل" : "Stay Updated",
      description: isArabic
        ? "تابع النتائج والحضور والإعلانات والتواصل مع المدرسة."
        : "Follow grades, attendance, announcements and communication.",
    },
  ];

  return (
    <main
      dir={isArabic ? "rtl" : "ltr"}
      className="min-h-screen overflow-hidden bg-white text-[#053e50]"
    >
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#053e50] via-[#07566b] to-[#0e7490] px-5 py-24 text-white md:py-32">
        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-white/5 blur-2xl" />
        <div className="absolute -bottom-32 -left-20 h-96 w-96 rounded-full bg-cyan-300/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 md:grid-cols-2">
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm">
              <Users size={18} />
              {isArabic ? "بوابة أولياء الأمور" : "Parents Portal"}
            </div>

            <h1 className="mb-7 text-4xl font-black leading-tight md:text-6xl">
              {isArabic ? (
                <>
                  أنتم شركاؤنا في
                  <span className="mt-3 block text-cyan-300">
                    رحلة النجاح
                  </span>
                </>
              ) : (
                <>
                  You Are Our Partners
                  <span className="mt-3 block text-cyan-300">
                    in Every Success
                  </span>
                </>
              )}
            </h1>

            <p className="mb-9 max-w-xl text-lg leading-9 text-white/80">
              {isArabic
                ? "في مدرسة الرواد الحديثة نؤمن أن التواصل المستمر بين الأسرة والمدرسة هو أساس بناء مستقبل تعليمي متميز لأبنائنا."
                : "At Al Rowad Modern School, we believe that strong communication between families and school is the foundation of a successful educational journey."}
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="/login"
                className="inline-flex items-center gap-3 rounded-xl bg-white px-7 py-4 font-bold text-[#053e50] shadow-lg transition hover:-translate-y-1 hover:bg-cyan-50"
              >
                {isArabic ? "دخول ولي الأمر" : "Parent Login"}
                {isArabic ? <ArrowLeft size={20} /> : <ArrowRight size={20} />}
              </a>

              <a
                href="/contact"
                className="inline-flex items-center gap-3 rounded-xl border border-white/40 px-7 py-4 font-bold transition hover:bg-white/10"
              >
                {isArabic ? "تواصل معنا" : "Contact Us"}
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-lg">
            <div className="absolute inset-0 rotate-6 rounded-[40px] bg-cyan-300/20" />

            <div className="relative rounded-[40px] border border-white/20 bg-white/10 p-8 shadow-2xl backdrop-blur-xl md:p-12">
              <div className="mb-8 flex items-center justify-between">
                <div className="rounded-2xl bg-white/15 p-4">
                  <HeartHandshake size={42} className="text-cyan-300" />
                </div>
                <Sparkles size={30} className="text-cyan-300" />
              </div>

              <h2 className="mb-4 text-3xl font-black">
                {isArabic ? "معًا نصنع المستقبل" : "Together We Build The Future"}
              </h2>

              <p className="leading-8 text-white/75">
                {isArabic
                  ? "نضع أولياء الأمور في قلب العملية التعليمية، ونعمل معًا لتحقيق أفضل تجربة تعليمية لكل طالب."
                  : "Parents are at the heart of our educational journey. Together, we create a better learning experience for every student."}
              </p>

              <div className="mt-9 grid grid-cols-2 gap-4">
                <div className="rounded-2xl bg-white/10 p-5">
                  <GraduationCap className="mb-3 text-cyan-300" size={28} />
                  <p className="font-bold">
                    {isArabic ? "تعليم متميز" : "Quality Education"}
                  </p>
                </div>

                <div className="rounded-2xl bg-white/10 p-5">
                  <Users className="mb-3 text-cyan-300" size={28} />
                  <p className="font-bold">
                    {isArabic ? "شراكة مستمرة" : "Strong Partnership"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="px-5 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <span className="mb-4 inline-block rounded-full bg-[#e8f5f8] px-5 py-2 text-sm font-bold text-[#0e7490]">
            {isArabic ? "الأسرة والمدرسة" : "Family & School"}
          </span>

          <h2 className="mb-6 text-3xl font-black md:text-5xl">
            {isArabic
              ? "رحلة تعليمية ننجح فيها معًا"
              : "An Educational Journey We Share"}
          </h2>

          <p className="text-lg leading-9 text-slate-600">
            {isArabic
              ? "نؤمن أن ولي الأمر شريك أساسي في نجاح الطالب، لذلك نسعى لتوفير قنوات تواصل واضحة وخدمات تساعد الأسرة على متابعة الرحلة التعليمية بكل سهولة."
              : "We believe parents are essential partners in student success. We provide clear communication channels and useful services to help families stay involved."}
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-[#f4fafb] px-5 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <span className="mb-4 inline-block rounded-full bg-white px-5 py-2 text-sm font-bold text-[#0e7490] shadow-sm">
              {isArabic ? "خدماتنا" : "Our Services"}
            </span>

            <h2 className="text-3xl font-black md:text-5xl">
              {isArabic ? "كل ما تحتاجه أسرتك" : "Everything Your Family Needs"}
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-500">
              {isArabic
                ? "مجموعة من الخدمات التي تساعد أولياء الأمور على متابعة أبنائهم والتواصل مع المدرسة."
                : "Services designed to help parents follow their children’s progress and stay connected with school."}
            </p>
          </div>

          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <div
                  key={index}
                  className="group rounded-3xl border border-slate-100 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-[#0e7490]/30 hover:shadow-xl"
                >
                  <div className="mb-7 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#e8f5f8] text-[#0e7490] transition group-hover:bg-[#0e7490] group-hover:text-white">
                    <Icon size={32} />
                  </div>

                  <h3 className="mb-4 text-xl font-black">
                    {service.title}
                  </h3>

                  <p className="leading-8 text-slate-500">
                    {service.description}
                  </p>

                  <div className="mt-7 flex items-center gap-2 text-sm font-bold text-[#0e7490]">
                    <CheckCircle2 size={18} />
                    {isArabic ? "معًا من أجل أبنائنا" : "Together for Our Children"}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="px-5 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <span className="mb-4 inline-block rounded-full bg-[#e8f5f8] px-5 py-2 text-sm font-bold text-[#0e7490]">
              {isArabic ? "خطوات بسيطة" : "Simple Steps"}
            </span>

            <h2 className="text-3xl font-black md:text-5xl">
              {isArabic ? "كيف تبدأ؟" : "How Does It Work?"}
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="relative rounded-3xl border border-slate-100 bg-white p-9 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
              >
                <span className="mb-7 block text-5xl font-black text-[#0e7490]/20">
                  {step.number}
                </span>

                <h3 className="mb-4 text-2xl font-black">
                  {step.title}
                </h3>

                <p className="leading-8 text-slate-500">
                  {step.description}
                </p>

                <div className="mt-7 flex h-12 w-12 items-center justify-center rounded-xl bg-[#e8f5f8] text-[#0e7490]">
                  {index === 0 ? (
                    <UserRoundCheck size={25} />
                  ) : index === 1 ? (
                    <School size={25} />
                  ) : (
                    <BookOpenCheck size={25} />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNERSHIP */}
      <section className="bg-[#053e50] px-5 py-20 text-white">
        <div className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-2">
          <div>
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-cyan-300">
              <HeartHandshake size={32} />
            </div>

            <h2 className="mb-6 text-3xl font-black leading-tight md:text-4xl">
              {isArabic
                ? "شراكتكم تصنع فرقًا في مستقبل أبنائنا"
                : "Your Partnership Makes a Difference"}
            </h2>

            <p className="max-w-xl leading-9 text-white/70">
              {isArabic
                ? "نرحب دائمًا بملاحظاتكم واستفساراتكم ومشاركتكم في تطوير البيئة التعليمية. نجاح أبنائنا مسؤولية مشتركة."
                : "We always welcome your feedback, questions and participation in improving the learning environment. Student success is a shared responsibility."}
            </p>
          </div>

          <div className="flex flex-wrap gap-4 md:justify-end">
            <a
              href="/contact"
              className="inline-flex items-center gap-3 rounded-xl bg-white px-7 py-4 font-bold text-[#053e50] transition hover:-translate-y-1"
            >
              <Mail size={20} />
              {isArabic ? "تواصل مع المدرسة" : "Contact the School"}
            </a>

            <a
              href="/login"
              className="inline-flex items-center gap-3 rounded-xl border border-white/30 px-7 py-4 font-bold transition hover:bg-white/10"
            >
              <Users size={20} />
              {isArabic ? "حساب ولي الأمر" : "Parent Account"}
            </a>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="px-5 py-16">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-6 rounded-3xl border border-slate-100 bg-[#f4fafb] p-8 md:flex-row md:p-12">
          <div>
            <h2 className="mb-3 text-2xl font-black">
              {isArabic ? "هل لديك استفسار؟" : "Have a Question?"}
            </h2>

            <p className="leading-8 text-slate-500">
              {isArabic
                ? "فريق المدرسة يسعده استقبال استفساراتكم ومساعدتكم."
                : "Our school team will be happy to assist you."}
            </p>
          </div>

          <a
            href="/contact"
            className="inline-flex items-center gap-3 rounded-xl bg-[#0e7490] px-8 py-4 font-bold text-white shadow-lg transition hover:bg-[#053e50]"
          >
            <Phone size={20} />
            {isArabic ? "اتصل بنا" : "Get in Touch"}
            {isArabic ? <ArrowLeft size={20} /> : <ArrowRight size={20} />}
          </a>
        </div>
      </section>
    </main>
  );
}
