
"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { useLanguage } from "../../context/LanguageContext";

type ClassStatus = "live" | "upcoming" | "ended";

type LiveClass = {
  id: number;
  title: string;
  subject: string;
  teacher: string;
  stage: string;
  grade: string;
  date: string;
  time: string;
  duration: string;
  status: ClassStatus;
  meetingUrl: string;
  students: number;
};

const classes: LiveClass[] = [
  {
    id: 1,
    title: "مراجعة شاملة في مادة الرياضيات",
    subject: "الرياضيات",
    teacher: "أ. أحمد محمد",
    stage: "المرحلة الابتدائية",
    grade: "الصف السادس الابتدائي",
    date: "2026-11-13",
    time: "02:00 PM",
    duration: "60 دقيقة",
    status: "live",
    meetingUrl: "https://meet.google.com/",
    students: 85,
  },
  {
    id: 2,
    title: "شرح درس الجهاز الهضمي",
    subject: "العلوم",
    teacher: "أ. منى إبراهيم",
    stage: "المرحلة الإعدادية",
    grade: "الصف الأول الإعدادي",
    date: "2026-11-13",
    time: "04:00 PM",
    duration: "45 دقيقة",
    status: "upcoming",
    meetingUrl: "",
    students: 42,
  },
  {
    id: 3,
    title: "قواعد اللغة الإنجليزية",
    subject: "اللغة الإنجليزية",
    teacher: "أ. سارة محمود",
    stage: "المرحلة الابتدائية",
    grade: "الصف الخامس الابتدائي",
    date: "2026-11-13",
    time: "05:30 PM",
    duration: "50 دقيقة",
    status: "upcoming",
    meetingUrl: "",
    students: 36,
  },
  {
    id: 4,
    title: "مراجعة على الوحدة الأولى",
    subject: "اللغة العربية",
    teacher: "أ. منى إبراهيم",
    stage: "المرحلة الثانوية",
    grade: "الصف الأول الثانوي",
    date: "2026-11-12",
    time: "03:00 PM",
    duration: "60 دقيقة",
    status: "ended",
    meetingUrl: "",
    students: 64,
  },
  {
    id: 5,
    title: "مقدمة في البرمجة والتكنولوجيا",
    subject: "تكنولوجيا المعلومات",
    teacher: "أ. محمد علي",
    stage: "المرحلة الإعدادية",
    grade: "الصف الثالث الإعدادي",
    date: "2026-11-14",
    time: "06:00 PM",
    duration: "45 دقيقة",
    status: "upcoming",
    meetingUrl: "",
    students: 28,
  },
  {
    id: 6,
    title: "حل تدريبات على النحو",
    subject: "اللغة العربية",
    teacher: "أ. خالد حسن",
    stage: "المرحلة الثانوية",
    grade: "الصف الثاني الثانوي",
    date: "2026-11-11",
    time: "01:00 PM",
    duration: "50 دقيقة",
    status: "ended",
    meetingUrl: "",
    students: 51,
  },
];

export default function LiveClassesPage() {
  const { language } = useLanguage();
  const isArabic = language === "ar";

  const [activeFilter, setActiveFilter] = useState("all");
  const [search, setSearch] = useState("");

  const content = {
    ar: {
      eyebrow: "التعلم التفاعلي",
      title: "المحاضرات المباشرة",
      subtitle:
        "تعلم مباشرة مع أفضل المعلمين، وشارك في الشرح والمناقشات التفاعلية من أي مكان.",
      liveNow: "محاضرات مباشرة الآن",
      upcoming: "محاضرات قادمة",
      ended: "محاضرات سابقة",
      teachers: "معلمون متميزون",
      all: "كل المحاضرات",
      live: "مباشر الآن",
      upcomingFilter: "القادمة",
      endedFilter: "المنتهية",
      search: "ابحث عن محاضرة أو مادة أو معلم...",
      join: "انضم للمحاضرة",
      waiting: "في انتظار البداية",
      finished: "انتهت المحاضرة",
      details: "تفاصيل المحاضرة",
      teacher: "المعلم",
      subject: "المادة",
      stage: "المرحلة",
      grade: "الصف الدراسي",
      date: "التاريخ",
      time: "موعد المحاضرة",
      duration: "المدة",
      students: "طالب مسجل",
      noResults: "لا توجد محاضرات مطابقة للبحث",
      noResultsDesc: "جرب البحث بكلمة مختلفة أو اختر تصنيفًا آخر.",
      scheduleTitle: "جدول المحاضرات",
      scheduleDesc: "تابع مواعيد الحصص القادمة واستعد للحضور.",
      ctaTitle: "لا تفوّت محاضراتك القادمة",
      ctaDesc:
        "تابع جدولك باستمرار وكن مستعدًا للمشاركة والتفاعل مع معلميك.",
      viewAll: "عرض كل المحاضرات",
      backHome: "العودة للرئيسية",
      minutes: "دقيقة",
      sample: "بيانات تجريبية للعرض",
    },
    en: {
      eyebrow: "Interactive Learning",
      title: "Live Classes",
      subtitle:
        "Learn with our best teachers and participate in interactive lessons from anywhere.",
      liveNow: "Live Classes Now",
      upcoming: "Upcoming Classes",
      ended: "Previous Classes",
      teachers: "Expert Teachers",
      all: "All Classes",
      live: "Live Now",
      upcomingFilter: "Upcoming",
      endedFilter: "Ended",
      search: "Search by class, subject, or teacher...",
      join: "Join Class",
      waiting: "Waiting to Start",
      finished: "Class Ended",
      details: "Class Details",
      teacher: "Teacher",
      subject: "Subject",
      stage: "Stage",
      grade: "Grade",
      date: "Date",
      time: "Class Time",
      duration: "Duration",
      students: "Registered Students",
      noResults: "No matching classes found",
      noResultsDesc: "Try another search term or select a different filter.",
      scheduleTitle: "Class Schedule",
      scheduleDesc: "Check upcoming class times and get ready to attend.",
      ctaTitle: "Don't Miss Your Next Class",
      ctaDesc:
        "Keep track of your schedule and get ready to interact with your teachers.",
      viewAll: "View All Classes",
      backHome: "Back to Home",
      minutes: "minutes",
      sample: "Sample display data",
    },
  };

  const t = content[isArabic ? "ar" : "en"];

  const filteredClasses = useMemo(() => {
    return classes.filter((item) => {
      const matchesFilter =
        activeFilter === "all" || item.status === activeFilter;

      const searchText = search.toLowerCase();

      const matchesSearch = [
        item.title,
        item.subject,
        item.teacher,
        item.stage,
        item.grade,
      ].some((value) => value.toLowerCase().includes(searchText));

      return matchesFilter && matchesSearch;
    });
  }, [activeFilter, search]);

  const liveCount = classes.filter((item) => item.status === "live").length;
  const upcomingCount = classes.filter(
    (item) => item.status === "upcoming"
  ).length;
  const endedCount = classes.filter(
    (item) => item.status === "ended"
  ).length;

  const formatDate = (date: string) => {
    return new Date(`${date}T12:00:00`).toLocaleDateString(
      isArabic ? "ar-EG" : "en-US",
      {
        day: "numeric",
        month: "long",
        year: "numeric",
      }
    );
  };

  const statusLabel = (status: ClassStatus) => {
    if (status === "live") return t.live;
    if (status === "upcoming") return t.upcomingFilter;
    return t.endedFilter;
  };

  return (
    <main
      dir={isArabic ? "rtl" : "ltr"}
      className="min-h-screen bg-slate-50 text-slate-800"
    >
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-900 px-5 py-20 text-white md:py-28">
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-blue-400/10 blur-3xl" />
        <div className="absolute -bottom-24 left-10 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-blue-100">
            <span className="h-2 w-2 rounded-full bg-green-400" />
            {t.eyebrow}
          </div>

          <h1 className="mb-6 text-4xl font-extrabold leading-tight md:text-6xl">
            {t.title}
            <span className="mt-2 block text-cyan-300">
              {isArabic ? "مدرسة الرواد الحديثة" : "Al Rowad Modern School"}
            </span>
          </h1>

          <p className="max-w-2xl text-base leading-8 text-blue-100 md:text-lg">
            {t.subtitle}
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#classes"
              className="rounded-xl bg-cyan-400 px-7 py-3.5 font-bold text-blue-950 transition hover:bg-cyan-300"
            >
              {t.viewAll}
            </a>

            <Link
              href="/"
              className="rounded-xl border border-white/30 px-7 py-3.5 font-bold text-white transition hover:bg-white/10"
            >
              {t.backHome}
            </Link>
          </div>

          <p className="mt-6 text-xs text-blue-200/70">{t.sample}</p>
        </div>
      </section>

      {/* Statistics */}
      <section className="relative z-10 mx-auto -mt-8 max-w-7xl px-5">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              label: t.liveNow,
              value: liveCount,
              icon: "🔴",
              color: "text-red-500",
            },
            {
              label: t.upcoming,
              value: upcomingCount,
              icon: "📅",
              color: "text-blue-600",
            },
            {
              label: t.ended,
              value: endedCount,
              icon: "✓",
              color: "text-green-600",
            },
            {
              label: t.teachers,
              value: new Set(classes.map((item) => item.teacher)).size,
              icon: "👨‍🏫",
              color: "text-purple-600",
            },
          ].map((stat, index) => (
            <div
              key={index}
              className="rounded-2xl border border-slate-100 bg-white p-6 shadow-lg shadow-slate-200/50"
            >
              <div className="mb-3 flex items-center justify-between">
                <span className="text-sm font-medium text-slate-500">
                  {stat.label}
                </span>
                <span className="text-2xl">{stat.icon}</span>
              </div>
              <p className={`text-3xl font-extrabold ${stat.color}`}>
                {stat.value}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Classes Section */}
      <section id="classes" className="mx-auto max-w-7xl px-5 py-20">
        <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <span className="mb-3 block font-bold text-blue-600">
              {t.eyebrow}
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 md:text-4xl">
              {t.scheduleTitle}
            </h2>
            <p className="mt-3 text-slate-500">{t.scheduleDesc}</p>
          </div>

          <div className="relative w-full md:max-w-sm">
            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder={t.search}
              className="w-full rounded-xl border border-slate-200 bg-white px-5 py-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
            />
            <span
              className={`pointer-events-none absolute top-1/2 -translate-y-1/2 text-xl text-slate-400 ${
                isArabic ? "left-4" : "right-4"
              }`}
            >
              ⌕
            </span>
          </div>
        </div>

        {/* Filters */}
        <div className="mb-8 flex flex-wrap gap-3">
          {[
            { id: "all", label: t.all },
            { id: "live", label: t.live },
            { id: "upcoming", label: t.upcomingFilter },
            { id: "ended", label: t.endedFilter },
          ].map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`rounded-xl px-5 py-3 text-sm font-bold transition ${
                activeFilter === filter.id
                  ? "bg-blue-700 text-white shadow-lg shadow-blue-200"
                  : "border border-slate-200 bg-white text-slate-600 hover:border-blue-300 hover:text-blue-700"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Classes Grid */}
        {filteredClasses.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredClasses.map((item) => (
              <article
                key={item.id}
                className="group overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative flex h-36 items-center justify-center overflow-hidden bg-gradient-to-br from-blue-800 to-indigo-950">
                  <div className="absolute -right-8 -top-10 h-40 w-40 rounded-full border-[20px] border-white/5" />
                  <div className="absolute -bottom-14 -left-5 h-36 w-36 rounded-full border-[18px] border-white/5" />

                  <span className="relative text-6xl">
                    {item.subject === "الرياضيات"
                      ? "📐"
                      : item.subject === "العلوم"
                        ? "🔬"
                        : item.subject === "اللغة الإنجليزية"
                          ? "🌍"
                          : item.subject === "تكنولوجيا المعلومات"
                            ? "💻"
                            : "📚"}
                  </span>

                  <span
                    className={`absolute top-4 rounded-full px-3 py-1.5 text-xs font-bold ${
                      isArabic ? "right-4" : "left-4"
                    } ${
                      item.status === "live"
                        ? "bg-red-500 text-white"
                        : item.status === "upcoming"
                          ? "bg-cyan-300 text-blue-950"
                          : "bg-slate-200 text-slate-700"
                    }`}
                  >
                    {item.status === "live" && (
                      <span className="me-1 inline-block h-2 w-2 animate-pulse rounded-full bg-white" />
                    )}
                    {statusLabel(item.status)}
                  </span>
                </div>

                <div className="p-6">
                  <div className="mb-3 flex items-center justify-between gap-3">
                    <span className="rounded-lg bg-blue-50 px-3 py-1.5 text-xs font-bold text-blue-700">
                      {item.subject}
                    </span>
                    <span className="text-xs text-slate-400">
                      {item.duration}
                    </span>
                  </div>

                  <h3 className="mb-4 min-h-14 text-lg font-extrabold leading-7 text-slate-900 transition group-hover:text-blue-700">
                    {isArabic
                      ? item.title
                      : item.id === 1
                        ? "Comprehensive Mathematics Revision"
                        : item.id === 2
                          ? "The Digestive System"
                          : item.id === 3
                            ? "English Grammar"
                            : item.id === 4
                              ? "Revision on Unit One"
                              : item.id === 5
                                ? "Introduction to Programming"
                                : "Grammar Practice"}
                  </h3>

                  <div className="mb-5 space-y-3 border-b border-slate-100 pb-5 text-sm text-slate-600">
                    <div className="flex items-center gap-3">
                      <span>👨‍🏫</span>
                      <span>{item.teacher}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span>🎓</span>
                      <span>{item.grade}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span>📅</span>
                      <span>{formatDate(item.date)}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span>🕒</span>
                      <span>{item.time}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span>👥</span>
                      <span>
                        {item.students} {t.students}
                      </span>
                    </div>
                  </div>

                  {item.status === "live" ? (
                    <a
                      href={item.meetingUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full rounded-xl bg-red-500 px-5 py-3.5 text-center font-bold text-white transition hover:bg-red-600"
                    >
                      <span className="me-2">▶</span>
                      {t.join}
                    </a>
                  ) : (
                    <button
                      disabled
                      className="w-full cursor-not-allowed rounded-xl bg-slate-100 px-5 py-3.5 font-bold text-slate-400"
                    >
                      {item.status === "upcoming" ? t.waiting : t.finished}
                    </button>
                  )}
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-slate-300 bg-white px-5 py-16 text-center">
            <div className="mb-4 text-5xl">🔍</div>
            <h3 className="mb-2 text-xl font-bold text-slate-800">
              {t.noResults}
            </h3>
            <p className="text-slate-500">{t.noResultsDesc}</p>
          </div>
        )}
      </section>

      {/* Call To Action */}
      <section className="px-5 pb-20">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-gradient-to-r from-blue-900 to-indigo-900 px-7 py-12 text-center text-white md:px-16 md:py-16">
          <div className="mb-5 text-5xl">🎓</div>
          <h2 className="mb-4 text-2xl font-extrabold md:text-4xl">
            {t.ctaTitle}
          </h2>
          <p className="mx-auto mb-8 max-w-2xl leading-8 text-blue-100">
            {t.ctaDesc}
          </p>
          <Link
            href="/"
            className="inline-block rounded-xl bg-cyan-400 px-8 py-3.5 font-bold text-blue-950 transition hover:bg-cyan-300"
          >
            {t.backHome}
          </Link>
        </div>
      </section>
    </main>
  );
}
