
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

const initialClasses: LiveClass[] = [
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

  const [classes, setClasses] = useState<LiveClass[]>(initialClasses);
  const [activeFilter, setActiveFilter] = useState("all");
  const [search, setSearch] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const [formData, setFormData] = useState({
    title: "",
    subject: "",
    teacher: "",
    stage: "",
    grade: "",
    date: "",
    time: "",
    duration: "45",
    meetingUrl: "",
    students: "0",
  });

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
      join: "الدخول إلى Google Meet",
      waiting: "في انتظار البداية",
      finished: "انتهت المحاضرة",
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
      sample: "بيانات تجريبية للعرض",
      addClass: "إضافة محاضرة جديدة",
      hideForm: "إغلاق النموذج",
      formTitle: "بيانات المحاضرة الجديدة",
      classTitle: "عنوان المحاضرة",
      subjectName: "اسم المادة",
      teacherName: "اسم المعلم",
      stageName: "المرحلة التعليمية",
      gradeName: "الصف الدراسي",
      classDate: "تاريخ المحاضرة",
      classTime: "وقت المحاضرة",
      classDuration: "مدة المحاضرة بالدقائق",
      meetingLink: "رابط Google Meet",
      studentsCount: "عدد الطلاب المسجلين",
      addButton: "إضافة المحاضرة",
      cancel: "إلغاء",
      success: "تم إضافة المحاضرة بنجاح!",
      required: "من فضلك املأ جميع البيانات المطلوبة.",
      online: "محاضرة أونلاين",
      minutes: "دقيقة",
      choose: "اختر",
      primary: "المرحلة الابتدائية",
      preparatory: "المرحلة الإعدادية",
      secondary: "المرحلة الثانوية",
      onlineLinkHint: "أضيفي رابط Google Meet حتى يتمكن الطلاب من الدخول.",
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
      join: "Join Google Meet",
      waiting: "Waiting to Start",
      finished: "Class Ended",
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
      sample: "Sample display data",
      addClass: "Add New Class",
      hideForm: "Close Form",
      formTitle: "New Class Information",
      classTitle: "Class Title",
      subjectName: "Subject",
      teacherName: "Teacher Name",
      stageName: "Educational Stage",
      gradeName: "Grade",
      classDate: "Class Date",
      classTime: "Class Time",
      classDuration: "Duration in Minutes",
      meetingLink: "Google Meet Link",
      studentsCount: "Registered Students",
      addButton: "Add Class",
      cancel: "Cancel",
      success: "Class added successfully!",
      required: "Please fill in all required fields.",
      online: "Online Class",
      minutes: "minutes",
      choose: "Choose",
      primary: "Primary Stage",
      preparatory: "Preparatory Stage",
      secondary: "Secondary Stage",
      onlineLinkHint: "Add a Google Meet link so students can join.",
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
  }, [classes, activeFilter, search]);

  const liveCount = classes.filter((item) => item.status === "live").length;
  const upcomingCount = classes.filter(
    (item) => item.status === "upcoming"
  ).length;
  const endedCount = classes.filter(
    (item) => item.status === "ended"
  ).length;

  const teacherCount = new Set(classes.map((item) => item.teacher)).size;

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

  const updateField = (field: string, value: string) => {
    setFormData((previous) => ({
      ...previous,
      [field]: value,
    }));
  };

  const resetForm = () => {
    setFormData({
      title: "",
      subject: "",
      teacher: "",
      stage: "",
      grade: "",
      date: "",
      time: "",
      duration: "45",
      meetingUrl: "",
      students: "0",
    });
  };

  const handleAddClass = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      !formData.title.trim() ||
      !formData.subject.trim() ||
      !formData.teacher.trim() ||
      !formData.stage ||
      !formData.grade.trim() ||
      !formData.date ||
      !formData.time ||
      !formData.duration
    ) {
      setSuccessMessage(t.required);
      return;
    }

    const newClass: LiveClass = {
      id: Date.now(),
      title: formData.title.trim(),
      subject: formData.subject.trim(),
      teacher: formData.teacher.trim(),
      stage: formData.stage,
      grade: formData.grade.trim(),
      date: formData.date,
      time: formData.time,
      duration: `${formData.duration} ${t.minutes}`,
      status: "upcoming",
      meetingUrl: formData.meetingUrl.trim(),
      students: Math.max(0, Number(formData.students) || 0),
    };

    setClasses((previous) => [newClass, ...previous]);
    setActiveFilter("all");
    setSearch("");
    resetForm();
    setShowForm(false);
    setSuccessMessage(t.success);

    window.setTimeout(() => {
      setSuccessMessage("");
    }, 4000);
  };

  const subjectIcon = (subject: string) => {
    if (
      subject.includes("رياضيات") ||
      subject.toLowerCase().includes("math")
    )
      return "📐";

    if (subject.includes("علوم") || subject.toLowerCase().includes("science"))
      return "🔬";

    if (
      subject.includes("إنجليزية") ||
      subject.toLowerCase().includes("english")
    )
      return "🌍";

    if (
      subject.includes("تكنولوجيا") ||
      subject.toLowerCase().includes("technology")
    )
      return "💻";

    return "📚";
  };

  return (
    <main
      dir={isArabic ? "rtl" : "ltr"}
      className="min-h-screen bg-[#f5f9fa] text-[#073b4c]"
    >
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#062f3b] via-[#075568] to-[#0e7490] px-5 py-20 text-white md:py-28">
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-teal-300/10 blur-3xl" />
        <div className="absolute -bottom-24 left-10 h-80 w-80 rounded-full bg-cyan-300/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-teal-100">
            <span className="h-2 w-2 rounded-full bg-teal-300" />
            {t.eyebrow}
          </div>

          <h1 className="mb-6 text-4xl font-extrabold leading-tight md:text-6xl">
            {t.title}
            <span className="mt-2 block text-teal-200">
              {isArabic ? "مدرسة الرواد الحديثة" : "Al Rowad Modern School"}
            </span>
          </h1>

          <p className="max-w-2xl text-base leading-8 text-teal-50 md:text-lg">
            {t.subtitle}
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#classes"
              className="rounded-xl bg-teal-300 px-7 py-3.5 font-bold text-[#062f3b] transition hover:bg-teal-200"
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

          <p className="mt-6 text-xs text-teal-100/70">{t.sample}</p>
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
              color: "text-rose-500",
            },
            {
              label: t.upcoming,
              value: upcomingCount,
              icon: "📅",
              color: "text-[#0e7490]",
            },
            {
              label: t.ended,
              value: endedCount,
              icon: "✓",
              color: "text-teal-600",
            },
            {
              label: t.teachers,
              value: teacherCount,
              icon: "👨‍🏫",
              color: "text-[#075568]",
            },
          ].map((stat, index) => (
            <div
              key={index}
              className="rounded-2xl border border-[#dcebed] bg-white p-6 shadow-lg shadow-[#075568]/5"
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

      {/* Classes */}
      <section id="classes" className="mx-auto max-w-7xl px-5 py-20">
        <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <span className="mb-3 block font-bold text-[#0e7490]">
              {t.eyebrow}
            </span>
            <h2 className="text-3xl font-extrabold text-[#062f3b] md:text-4xl">
              {t.scheduleTitle}
            </h2>
            <p className="mt-3 text-slate-500">{t.scheduleDesc}</p>
          </div>

          <div className="flex w-full flex-col gap-3 md:max-w-sm">
            <button
              type="button"
              onClick={() => {
                setShowForm(!showForm);
                setSuccessMessage("");
              }}
              className="rounded-xl bg-[#075568] px-5 py-3.5 font-bold text-white shadow-lg shadow-[#075568]/15 transition hover:bg-[#062f3b]"
            >
              {showForm ? "− " + t.hideForm : "+ " + t.addClass}
            </button>

            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder={t.search}
              className="w-full rounded-xl border border-[#d5e7e9] bg-white px-5 py-4 text-sm text-[#073b4c] outline-none transition placeholder:text-slate-400 focus:border-[#0e7490] focus:ring-4 focus:ring-teal-100"
            />
          </div>
        </div>

        {/* Success Message */}
        {successMessage && (
          <div
            className={`mb-6 rounded-xl border px-5 py-4 font-bold ${
              successMessage === t.success
                ? "border-teal-200 bg-teal-50 text-teal-800"
                : "border-red-200 bg-red-50 text-red-700"
            }`}
          >
            {successMessage === t.success ? "✓ " : "⚠ "}
            {successMessage}
          </div>
        )}

        {/* Add Class Form */}
        {showForm && (
          <div className="mb-10 overflow-hidden rounded-3xl border border-[#d5e7e9] bg-white shadow-xl shadow-[#075568]/5">
            <div className="bg-gradient-to-r from-[#062f3b] to-[#0e7490] px-6 py-6 text-white md:px-8">
              <h3 className="text-2xl font-extrabold">{t.formTitle}</h3>
              <p className="mt-2 text-sm text-teal-100">{t.online}</p>
            </div>

            <form onSubmit={handleAddClass} className="p-6 md:p-8">
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                <div>
                  <label className="mb-2 block text-sm font-bold text-[#073b4c]">
                    {t.classTitle} *
                  </label>
                  <input
                    required
                    value={formData.title}
                    onChange={(e) => updateField("title", e.target.value)}
                    placeholder={t.classTitle}
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-[#0e7490] focus:ring-2 focus:ring-teal-100"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-bold text-[#073b4c]">
                    {t.subjectName} *
                  </label>
                  <input
                    required
                    value={formData.subject}
                    onChange={(e) => updateField("subject", e.target.value)}
                    placeholder={t.subjectName}
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-[#0e7490] focus:ring-2 focus:ring-teal-100"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-bold text-[#073b4c]">
                    {t.teacherName} *
                  </label>
                  <input
                    required
                    value={formData.teacher}
                    onChange={(e) => updateField("teacher", e.target.value)}
                    placeholder={t.teacherName}
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-[#0e7490] focus:ring-2 focus:ring-teal-100"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-bold text-[#073b4c]">
                    {t.stageName} *
                  </label>
                  <select
                    required
                    value={formData.stage}
                    onChange={(e) => updateField("stage", e.target.value)}
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none focus:border-[#0e7490] focus:ring-2 focus:ring-teal-100"
                  >
                    <option value="">{t.choose}</option>
                    <option value={t.primary}>{t.primary}</option>
                    <option value={t.preparatory}>{t.preparatory}</option>
                    <option value={t.secondary}>{t.secondary}</option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-bold text-[#073b4c]">
                    {t.gradeName} *
                  </label>
                  <input
                    required
                    value={formData.grade}
                    onChange={(e) => updateField("grade", e.target.value)}
                    placeholder={t.gradeName}
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-[#0e7490] focus:ring-2 focus:ring-teal-100"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-bold text-[#073b4c]">
                    {t.classDate} *
                  </label>
                  <input
                    required
                    type="date"
                    value={formData.date}
                    onChange={(e) => updateField("date", e.target.value)}
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-[#0e7490] focus:ring-2 focus:ring-teal-100"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-bold text-[#073b4c]">
                    {t.classTime} *
                  </label>
                  <input
                    required
                    type="time"
                    value={formData.time}
                    onChange={(e) => updateField("time", e.target.value)}
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-[#0e7490] focus:ring-2 focus:ring-teal-100"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-bold text-[#073b4c]">
                    {t.classDuration} *
                  </label>
                  <input
                    required
                    type="number"
                    min="1"
                    value={formData.duration}
                    onChange={(e) => updateField("duration", e.target.value)}
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-[#0e7490] focus:ring-2 focus:ring-teal-100"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-bold text-[#073b4c]">
                    {t.studentsCount}
                  </label>
                  <input
                    type="number"
                    min="0"
                    value={formData.students}
                    onChange={(e) => updateField("students", e.target.value)}
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-[#0e7490] focus:ring-2 focus:ring-teal-100"
                  />
                </div>

                <div className="md:col-span-2 lg:col-span-3">
                  <label className="mb-2 block text-sm font-bold text-[#073b4c]">
                    {t.meetingLink}
                  </label>
                  <input
                    type="url"
                    value={formData.meetingUrl}
                    onChange={(e) => updateField("meetingUrl", e.target.value)}
                    placeholder="https://meet.google.com/..."
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-[#0e7490] focus:ring-2 focus:ring-teal-100"
                  />
                  <p className="mt-2 text-xs text-slate-400">
                    {t.onlineLinkHint}
                  </p>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <button
                  type="submit"
                  className="rounded-xl bg-[#075568] px-8 py-3.5 font-bold text-white transition hover:bg-[#062f3b]"
                >
                  ✓ {t.addButton}
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setShowForm(false);
                    resetForm();
                    setSuccessMessage("");
                  }}
                  className="rounded-xl border border-slate-200 px-8 py-3.5 font-bold text-slate-600 transition hover:bg-slate-50"
                >
                  {t.cancel}
                </button>
              </div>
            </form>
          </div>
        )}

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
                  ? "bg-[#075568] text-white shadow-lg shadow-[#075568]/20"
                  : "border border-[#d5e7e9] bg-white text-[#075568] hover:border-[#0e7490] hover:bg-teal-50"
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
                className="group overflow-hidden rounded-2xl border border-[#e0edef] bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative flex h-36 items-center justify-center overflow-hidden bg-gradient-to-br from-[#075568] to-[#062f3b]">
                  <div className="absolute -right-8 -top-10 h-40 w-40 rounded-full border-[20px] border-white/5" />
                  <div className="absolute -bottom-14 -left-5 h-36 w-36 rounded-full border-[18px] border-white/5" />

                  <span className="relative text-6xl">
                    {subjectIcon(item.subject)}
                  </span>

                  <span
                    className={`absolute top-4 rounded-full px-3 py-1.5 text-xs font-bold ${
                      isArabic ? "right-4" : "left-4"
                    } ${
                      item.status === "live"
                        ? "bg-rose-500 text-white"
                        : item.status === "upcoming"
                          ? "bg-teal-200 text-[#062f3b]"
                          : "bg-slate-200 text-slate-700"
                    }`}
                  >
                    {item.status === "live" && (
                      <span className="me-1 inline-block h-2 w-2 animate-pulse rounded-full bg-white" />
                    )}
                    {statusLabel(item.status)}
                  </span>

                  <span className="absolute bottom-3 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs text-white">
                    {t.online}
                  </span>
                </div>

                <div className="p-6">
                  <div className="mb-3 flex items-center justify-between gap-3">
                    <span className="rounded-lg bg-teal-50 px-3 py-1.5 text-xs font-bold text-[#075568]">
                      {item.subject}
                    </span>
                    <span className="text-xs text-slate-400">
                      {item.duration}
                    </span>
                  </div>

                  <h3 className="mb-4 min-h-14 text-lg font-extrabold leading-7 text-[#062f3b] transition group-hover:text-[#0e7490]">
                    {item.title}
                  </h3>

                  <div className="mb-5 space-y-3 border-b border-slate-100 pb-5 text-sm text-slate-600">
                    <div className="flex items-center gap-3">
                      <span>👨‍🏫</span>
                      <span>{item.teacher}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span>🎓</span>
                      <span>{item.stage} - {item.grade}</span>
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

                  {item.meetingUrl ? (
                    <a
                      href={item.meetingUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full rounded-xl bg-[#075568] px-5 py-3.5 text-center font-bold text-white transition hover:bg-[#062f3b]"
                    >
                      <span className="me-2">▶</span>
                      {t.join}
                    </a>
                  ) : item.status === "ended" ? (
                    <button
                      disabled
                      className="w-full cursor-not-allowed rounded-xl bg-slate-100 px-5 py-3.5 font-bold text-slate-400"
                    >
                      {t.finished}
                    </button>
                  ) : (
                    <button
                      disabled
                      className="w-full cursor-not-allowed rounded-xl bg-teal-50 px-5 py-3.5 font-bold text-[#0e7490]"
                    >
                      {t.waiting}
                    </button>
                  )}
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-[#b9d5d9] bg-white px-5 py-16 text-center">
            <div className="mb-4 text-5xl">🔍</div>
            <h3 className="mb-2 text-xl font-bold text-[#062f3b]">
              {t.noResults}
            </h3>
            <p className="text-slate-500">{t.noResultsDesc}</p>
          </div>
        )}
      </section>

      {/* Call To Action */}
      <section className="px-5 pb-20">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-gradient-to-r from-[#062f3b] to-[#0e7490] px-7 py-12 text-center text-white md:px-16 md:py-16">
          <div className="mb-5 text-5xl">🎓</div>
          <h2 className="mb-4 text-2xl font-extrabold md:text-4xl">
            {t.ctaTitle}
          </h2>
          <p className="mx-auto mb-8 max-w-2xl leading-8 text-teal-50">
            {t.ctaDesc}
          </p>
          <Link
            href="/"
            className="inline-block rounded-xl bg-teal-300 px-8 py-3.5 font-bold text-[#062f3b] transition hover:bg-teal-200"
          >
            {t.backHome}
          </Link>
        </div>
      </section>
    </main>
  );
}
