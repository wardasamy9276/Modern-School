
"use client";

import { useState } from "react";
import { useLanguage } from "../../context/LanguageContext";

import {
  Trophy,
  GraduationCap,
  Search,
  Award,
  BookOpen,
  Users,
  CheckCircle2,
  CalendarDays,
  ArrowLeft,
  ArrowRight,
  Sparkles,
  Medal,
  FileText,
  Star,
  TrendingUp,
  School,
} from "lucide-react";

// ==========================================
// تعريف نوع بيانات نتيجة الطالب
// Student Result Type
// ==========================================

type StudentResult = {
  seatNumber: string;
  nameAr: string;
  nameEn: string;
  stage: string;
  grade: string;
  percentage: number;
  subjects: {
    nameAr: string;
    nameEn: string;
    score: number;
    total: number;
  }[];
};

// ==========================================
// بيانات الطلاب التجريبية
// Sample Students Data
// ==========================================

const students: StudentResult[] = [
  {
    seatNumber: "2026001",
    nameAr: "أحمد محمد علي",
    nameEn: "Ahmed Mohamed Ali",
    stage: "middle",
    grade: "grade1",
    percentage: 96.5,
    subjects: [
      { nameAr: "اللغة العربية", nameEn: "Arabic", score: 97, total: 100 },
      { nameAr: "اللغة الإنجليزية", nameEn: "English", score: 95, total: 100 },
      { nameAr: "الرياضيات", nameEn: "Mathematics", score: 98, total: 100 },
      { nameAr: "العلوم", nameEn: "Science", score: 96, total: 100 },
      { nameAr: "الدراسات", nameEn: "Social Studies", score: 96, total: 100 },
    ],
  },
  {
    seatNumber: "2026002",
    nameAr: "سارة أحمد محمود",
    nameEn: "Sara Ahmed Mahmoud",
    stage: "middle",
    grade: "grade1",
    percentage: 98,
    subjects: [
      { nameAr: "اللغة العربية", nameEn: "Arabic", score: 99, total: 100 },
      { nameAr: "اللغة الإنجليزية", nameEn: "English", score: 98, total: 100 },
      { nameAr: "الرياضيات", nameEn: "Mathematics", score: 97, total: 100 },
      { nameAr: "العلوم", nameEn: "Science", score: 98, total: 100 },
      { nameAr: "الدراسات", nameEn: "Social Studies", score: 98, total: 100 },
    ],
  },
  {
    seatNumber: "2026003",
    nameAr: "مريم خالد حسن",
    nameEn: "Mariam Khaled Hassan",
    stage: "primary",
    grade: "grade6",
    percentage: 94,
    subjects: [
      { nameAr: "اللغة العربية", nameEn: "Arabic", score: 95, total: 100 },
      { nameAr: "اللغة الإنجليزية", nameEn: "English", score: 93, total: 100 },
      { nameAr: "الرياضيات", nameEn: "Mathematics", score: 94, total: 100 },
      { nameAr: "العلوم", nameEn: "Science", score: 94, total: 100 },
      { nameAr: "الدراسات", nameEn: "Social Studies", score: 94, total: 100 },
    ],
  },
];

// ==========================================
// أوائل الطلاب التجريبيون
// Top Students Data
// ==========================================

const topStudents = [
  {
    nameAr: "سارة أحمد محمود",
    nameEn: "Sara Ahmed",
    percentage: 98,
    rank: 1,
    grade: "الأول الإعدادي",
  },
  {
    nameAr: "أحمد محمد علي",
    nameEn: "Ahmed Mohamed",
    percentage: 96.5,
    rank: 2,
    grade: "الأول الإعدادي",
  },
  {
    nameAr: "مريم خالد حسن",
    nameEn: "Mariam Khaled",
    percentage: 94,
    rank: 3,
    grade: "السادس الابتدائي",
  },
];

// ==========================================
// صفحة نتائج الطلاب
// Results Page Component
// ==========================================

export default function ResultsPage() {
  const { language } = useLanguage();
  const isArabic = language === "ar";

  // حالات البحث عن النتيجة
  const [seatNumber, setSeatNumber] = useState("");
  const [stage, setStage] = useState("all");
  const [grade, setGrade] = useState("all");
  const [result, setResult] = useState<StudentResult | null>(null);
  const [searched, setSearched] = useState(false);

  // ==========================================
  // النصوص العربية والإنجليزية
  // Translations
  // ==========================================

  const t = {
    title: isArabic ? "نتائج الطلاب" : "Student Results",
    subtitle: isArabic
      ? "تابع نتائجك الأكاديمية واكتشف مستوى تقدمك الدراسي"
      : "Track your academic results and discover your progress.",
    searchTitle: isArabic ? "استعلم عن نتيجتك الآن" : "Check Your Results",
    searchDescription: isArabic
      ? "أدخل رقم الجلوس واختر المرحلة والصف الدراسي لعرض النتيجة"
      : "Enter your seat number and select your academic stage and grade.",
    seat: isArabic ? "رقم الجلوس" : "Seat Number",
    seatPlaceholder: isArabic ? "مثال: 2026001" : "Example: 2026001",
    stage: isArabic ? "المرحلة التعليمية" : "Academic Stage",
    grade: isArabic ? "الصف الدراسي" : "Grade",
    allStages: isArabic ? "كل المراحل" : "All Stages",
    allGrades: isArabic ? "كل الصفوف" : "All Grades",
    primary: isArabic ? "المرحلة الابتدائية" : "Primary Stage",
    middle: isArabic ? "المرحلة الإعدادية" : "Preparatory Stage",
    secondary: isArabic ? "المرحلة الثانوية" : "Secondary Stage",
    search: isArabic ? "عرض النتيجة" : "Show Result",
    success: isArabic ? "نتيجة الطالب" : "Student Result",
    percentage: isArabic ? "النسبة المئوية" : "Percentage",
    gradeLabel: isArabic ? "التقدير" : "Grade",
    passed: isArabic ? "ناجح" : "Passed",
    failed: isArabic ? "غير ناجح" : "Failed",
    subjects: isArabic ? "تفاصيل المواد الدراسية" : "Subject Details",
    subject: isArabic ? "المادة" : "Subject",
    score: isArabic ? "الدرجة" : "Score",
    total: isArabic ? "النهاية العظمى" : "Total",
    noResult: isArabic
      ? "لم يتم العثور على نتيجة بهذا الرقم. تأكد من رقم الجلوس والاختيارات."
      : "No result found. Please check your seat number and selections.",
    leaders: isArabic ? "أوائل الطلاب" : "Top Students",
    leadersDescription: isArabic
      ? "نحتفي بطلابنا المتفوقين وإنجازاتهم المميزة"
      : "Celebrating our outstanding students and their achievements.",
    rank: isArabic ? "المركز" : "Rank",
    viewAll: isArabic
      ? "نتائج مشرفة ومستقبل مشرق"
      : "Outstanding Results, Bright Futures",
    academicYear: isArabic
      ? "العام الدراسي 2026 / 2027"
      : "Academic Year 2026 / 2027",
    stats: isArabic ? "مؤشرات النجاح" : "Academic Highlights",
    successRate: isArabic ? "نسبة النجاح" : "Success Rate",
    studentsCount: isArabic ? "عدد الطلاب" : "Students",
    excellence: isArabic ? "طلاب متفوقون" : "Outstanding Students",
    average: isArabic ? "متوسط الدرجات" : "Average Score",
    selectStage: isArabic ? "اختر المرحلة" : "Select Stage",
    selectGrade: isArabic ? "اختر الصف" : "Select Grade",
  };

  // ==========================================
  // الصفوف الدراسية حسب المرحلة التعليمية
  // Grade Options By Academic Stage
  // ==========================================

  const gradeOptions: Record<
    string,
    { value: string; ar: string; en: string }[]
  > = {
    // ----------------------------------------
    // المرحلة الابتدائية | Primary Stage
    // من الصف الأول الابتدائي حتى الصف السادس
    // ----------------------------------------

    primary: [
      {
        value: "grade1",
        ar: "الصف الأول الابتدائي",
        en: "Grade 1 - Primary",
      },
      {
        value: "grade2",
        ar: "الصف الثاني الابتدائي",
        en: "Grade 2 - Primary",
      },
      {
        value: "grade3",
        ar: "الصف الثالث الابتدائي",
        en: "Grade 3 - Primary",
      },
      {
        value: "grade4",
        ar: "الصف الرابع الابتدائي",
        en: "Grade 4 - Primary",
      },
      {
        value: "grade5",
        ar: "الصف الخامس الابتدائي",
        en: "Grade 5 - Primary",
      },
      {
        value: "grade6",
        ar: "الصف السادس الابتدائي",
        en: "Grade 6 - Primary",
      },
    ],

    // ----------------------------------------
    // المرحلة الإعدادية | Preparatory Stage
    // من الصف الأول الإعدادي حتى الصف الثالث
    // ----------------------------------------

    middle: [
      {
        value: "grade1",
        ar: "الصف الأول الإعدادي",
        en: "Grade 7 - Preparatory",
      },
      {
        value: "grade2",
        ar: "الصف الثاني الإعدادي",
        en: "Grade 8 - Preparatory",
      },
      {
        value: "grade3",
        ar: "الصف الثالث الإعدادي",
        en: "Grade 9 - Preparatory",
      },
    ],

    // ----------------------------------------
    // المرحلة الثانوية | Secondary Stage
    // من الصف الأول الثانوي حتى الصف الثالث
    // ----------------------------------------

    secondary: [
      {
        value: "grade1",
        ar: "الصف الأول الثانوي",
        en: "Grade 10 - Secondary",
      },
      {
        value: "grade2",
        ar: "الصف الثاني الثانوي",
        en: "Grade 11 - Secondary",
      },
      {
        value: "grade3",
        ar: "الصف الثالث الثانوي",
        en: "Grade 12 - Secondary",
      },
    ],
  };

  // ==========================================
  // البحث عن اسم الصف الدراسي
  // Get Grade Name
  // ==========================================

  const getGradeName = (value: string) => {
    const options = Object.values(gradeOptions).flat();

    const item = options.find((option) => option.value === value);

    return item ? (isArabic ? item.ar : item.en) : value;
  };

  // ==========================================
  // تنفيذ البحث عن نتيجة الطالب
  // Search Student Result
  // ==========================================

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setSearched(true);
    setResult(null);

    const found = students.find((student) => {
      const matchesSeat = student.seatNumber === seatNumber.trim();

      const matchesStage =
        stage === "all" || student.stage === stage;

      const matchesGrade =
        grade === "all" || student.grade === grade;

      return matchesSeat && matchesStage && matchesGrade;
    });

    setResult(found || null);
  };

  // ==========================================
  // تحديد التقدير حسب النسبة المئوية
  // Calculate Student Rating
  // ==========================================

  const getRating = (percentage: number) => {
    if (percentage >= 90) return isArabic ? "ممتاز" : "Excellent";
    if (percentage >= 80) return isArabic ? "جيد جداً" : "Very Good";
    if (percentage >= 65) return isArabic ? "جيد" : "Good";
    if (percentage >= 50) return isArabic ? "مقبول" : "Pass";

    return isArabic ? "ضعيف" : "Needs Improvement";
  };

  // تحديد اتجاه السهم حسب اللغة
  const Arrow = isArabic ? ArrowLeft : ArrowRight;

  return (
    <main
      dir={isArabic ? "rtl" : "ltr"}
      className="min-h-screen bg-[#f5fafb] text-[#053e50]"
    >
      {/* ======================================
          HERO SECTION
          القسم الرئيسي
      ====================================== */}

      <section className="relative overflow-hidden bg-gradient-to-br from-[#042f40] via-[#07566b] to-[#0e7490] px-5 py-24 text-white md:py-32">
        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-white/5 blur-2xl" />

        <div className="absolute -bottom-32 -left-20 h-96 w-96 rounded-full bg-cyan-300/10 blur-3xl" />

        <div className="relative mx-auto max-w-6xl text-center">
          <div className="mx-auto mb-7 flex h-20 w-20 items-center justify-center rounded-3xl border border-white/20 bg-white/10 shadow-2xl backdrop-blur">
            <GraduationCap size={42} />
          </div>

          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-bold">
            <Sparkles size={17} />
            {t.academicYear}
          </span>

          <h1 className="mb-6 text-4xl font-black leading-tight md:text-6xl">
            {t.title}
          </h1>

          <p className="mx-auto max-w-2xl text-base leading-8 text-white/80 md:text-xl">
            {t.subtitle}
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <a
              href="#search"
              className="inline-flex items-center gap-3 rounded-xl bg-white px-8 py-4 font-black text-[#07566b] shadow-xl transition hover:-translate-y-1 hover:bg-cyan-50"
            >
              <Search size={20} />
              {t.search}
              <Arrow size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* ======================================
          STATISTICS SECTION
          إحصائيات ومؤشرات النجاح
      ====================================== */}

      <section className="relative z-10 mx-auto -mt-10 max-w-6xl px-5">
        <div className="grid grid-cols-2 gap-4 rounded-3xl border border-[#dcebef] bg-white p-5 shadow-xl md:grid-cols-4 md:p-8">
          {[
            { icon: TrendingUp, value: "98%", label: t.successRate },
            { icon: Users, value: "1,650+", label: t.studentsCount },
            { icon: Trophy, value: "250+", label: t.excellence },
            { icon: Star, value: "95%", label: t.average },
          ].map((item, index) => {
            const Icon = item.icon;

            return (
              <div key={index} className="p-3 text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#e8f5f8] text-[#0e7490]">
                  <Icon size={27} />
                </div>

                <h3 className="text-2xl font-black text-[#07566b] md:text-3xl">
                  {item.value}
                </h3>

                <p className="mt-2 text-sm font-bold text-slate-500">
                  {item.label}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ======================================
          SEARCH SECTION
          قسم الاستعلام عن النتيجة
      ====================================== */}

      <section
        id="search"
        className="mx-auto max-w-5xl scroll-mt-24 px-5 py-20"
      >
        <div className="mb-9 text-center">
          <span className="mb-3 inline-flex items-center gap-2 rounded-full bg-[#e8f5f8] px-4 py-2 text-sm font-bold text-[#0e7490]">
            <Search size={16} />
            {isArabic
              ? "خدمة الاستعلام الإلكتروني"
              : "Online Result Inquiry"}
          </span>

          <h2 className="text-3xl font-black md:text-4xl">
            {t.searchTitle}
          </h2>

          <p className="mt-4 text-slate-500">
            {t.searchDescription}
          </p>
        </div>

        <form
          onSubmit={handleSearch}
          className="rounded-3xl border border-[#dcebef] bg-white p-6 shadow-xl md:p-10"
        >
          <div className="grid gap-6 md:grid-cols-2">
            {/* رقم الجلوس */}
            <div>
              <label className="mb-3 block text-sm font-black">
                {t.seat}
              </label>

              <div className="relative">
                <FileText
                  className={`absolute top-1/2 -translate-y-1/2 text-[#0e7490] ${
                    isArabic ? "right-4" : "left-4"
                  }`}
                  size={20}
                />

                <input
                  required
                  type="text"
                  inputMode="numeric"
                  value={seatNumber}
                  onChange={(e) => setSeatNumber(e.target.value)}
                  placeholder={t.seatPlaceholder}
                  className={`w-full rounded-xl border border-slate-200 bg-[#f8fbfc] py-4 text-sm font-bold outline-none transition focus:border-[#0e7490] focus:ring-4 focus:ring-[#0e7490]/10 ${
                    isArabic
                      ? "pr-12 pl-4"
                      : "pl-12 pr-4"
                  }`}
                />
              </div>
            </div>

            {/* اختيار المرحلة التعليمية */}
            <div>
              <label className="mb-3 block text-sm font-black">
                {t.stage}
              </label>

              <select
                value={stage}
                onChange={(e) => {
                  setStage(e.target.value);
                  setGrade("all");
                }}
                className="w-full rounded-xl border border-slate-200 bg-[#f8fbfc] px-4 py-4 text-sm font-bold outline-none transition focus:border-[#0e7490]"
              >
                <option value="all">{t.allStages}</option>
                <option value="primary">{t.primary}</option>
                <option value="middle">{t.middle}</option>
                <option value="secondary">{t.secondary}</option>
              </select>
            </div>

            {/* اختيار الصف الدراسي */}
            <div className="md:col-span-2">
              <label className="mb-3 block text-sm font-black">
                {t.grade}
              </label>

              <select
                value={grade}
                onChange={(e) => setGrade(e.target.value)}
                className="w-full rounded-xl border border-slate-200 bg-[#f8fbfc] px-4 py-4 text-sm font-bold outline-none transition focus:border-[#0e7490]"
              >
                <option value="all">{t.allGrades}</option>

                {(stage === "all"
                  ? Object.values(gradeOptions).flat()
                  : gradeOptions[stage] || []
                ).map((item, index) => (
                  <option
                    key={`${item.value}-${index}`}
                    value={item.value}
                  >
                    {isArabic ? item.ar : item.en}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* زر البحث */}
          <button
            type="submit"
            className="mt-8 flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-[#07566b] to-[#0e7490] py-4 font-black text-white shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
          >
            <Search size={21} />
            {t.search}
          </button>

          {/* رسالة عدم وجود نتيجة */}
          {searched && !result && (
            <div className="mt-6 flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 p-4 text-sm font-bold leading-7 text-red-700">
              <CheckCircle2 size={21} className="mt-1 shrink-0" />
              {t.noResult}
            </div>
          )}
        </form>

        {/* ======================================
            STUDENT RESULT
            عرض نتيجة الطالب
        ====================================== */}

        {result && (
          <div className="mt-10 overflow-hidden rounded-3xl border border-[#dcebef] bg-white shadow-xl">
            <div className="bg-gradient-to-r from-[#053e50] to-[#0e7490] p-7 text-white md:p-9">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <span className="text-sm font-bold text-white/70">
                    {t.success}
                  </span>

                  <h3 className="mt-2 text-2xl font-black md:text-3xl">
                    {isArabic ? result.nameAr : result.nameEn}
                  </h3>

                  <p className="mt-3 text-sm text-white/80">
                    {t.seat}: {result.seatNumber}
                  </p>
                </div>

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/20 bg-white/10">
                  <GraduationCap size={35} />
                </div>
              </div>
            </div>

            {/* النسبة والتقدير والحالة */}
            <div className="grid gap-4 p-6 md:grid-cols-3 md:p-8">
              <div className="rounded-2xl bg-[#e8f5f8] p-5 text-center">
                <TrendingUp
                  className="mx-auto mb-3 text-[#0e7490]"
                  size={27}
                />

                <p className="text-sm font-bold text-slate-500">
                  {t.percentage}
                </p>

                <p className="mt-2 text-3xl font-black text-[#07566b]">
                  {result.percentage}%
                </p>
              </div>

              <div className="rounded-2xl bg-[#f0fdf4] p-5 text-center">
                <Award
                  className="mx-auto mb-3 text-green-600"
                  size={27}
                />

                <p className="text-sm font-bold text-slate-500">
                  {t.gradeLabel}
                </p>

                <p className="mt-2 text-2xl font-black text-green-700">
                  {getRating(result.percentage)}
                </p>
              </div>

              <div className="rounded-2xl bg-[#fff7ed] p-5 text-center">
                <CheckCircle2
                  className="mx-auto mb-3 text-orange-500"
                  size={27}
                />

                <p className="text-sm font-bold text-slate-500">
                  {isArabic ? "حالة الطالب" : "Status"}
                </p>

                <p className="mt-2 text-2xl font-black text-green-700">
                  {result.percentage >= 50 ? t.passed : t.failed}
                </p>
              </div>
            </div>

            {/* جدول درجات المواد */}
            <div className="px-6 pb-8 md:px-8">
              <h4 className="mb-5 flex items-center gap-3 text-xl font-black">
                <BookOpen className="text-[#0e7490]" />
                {t.subjects}
              </h4>

              <div className="overflow-x-auto rounded-xl border border-slate-100">
                <table className="w-full min-w-[450px] text-sm">
                  <thead className="bg-[#e8f5f8] text-[#053e50]">
                    <tr>
                      <th className="p-4 text-start">
                        {t.subject}
                      </th>

                      <th className="p-4 text-center">
                        {t.score}
                      </th>

                      <th className="p-4 text-center">
                        {t.total}
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {result.subjects.map((subject, index) => (
                      <tr
                        key={index}
                        className="border-t border-slate-100"
                      >
                        <td className="p-4 font-bold">
                          {isArabic
                            ? subject.nameAr
                            : subject.nameEn}
                        </td>

                        <td className="p-4 text-center font-black text-[#0e7490]">
                          {subject.score}
                        </td>

                        <td className="p-4 text-center font-bold text-slate-500">
                          {subject.total}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* ======================================
          TOP STUDENTS SECTION
          قسم أوائل الطلاب
      ====================================== */}

      <section className="bg-white px-5 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <span className="mb-3 inline-flex items-center gap-2 rounded-full bg-[#fff7ed] px-4 py-2 text-sm font-bold text-orange-600">
              <Trophy size={17} />
              {isArabic ? "نخبة المتفوقين" : "Our Top Achievers"}
            </span>

            <h2 className="text-3xl font-black md:text-4xl">
              {t.leaders}
            </h2>

            <p className="mt-4 text-slate-500">
              {t.leadersDescription}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {topStudents.map((student) => (
              <div
                key={student.rank}
                className={`relative overflow-hidden rounded-3xl border p-7 text-center transition duration-300 hover:-translate-y-2 hover:shadow-xl ${
                  student.rank === 1
                    ? "border-yellow-200 bg-gradient-to-b from-yellow-50 to-white"
                    : "border-[#dcebef] bg-[#f8fbfc]"
                }`}
              >
                <div className="absolute left-0 top-0 h-24 w-24 rounded-full bg-[#0e7490]/5 blur-2xl" />

                <div
                  className={`mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl ${
                    student.rank === 1
                      ? "bg-yellow-100 text-yellow-600"
                      : "bg-[#e8f5f8] text-[#0e7490]"
                  }`}
                >
                  {student.rank === 1 ? (
                    <Trophy size={32} />
                  ) : (
                    <Medal size={32} />
                  )}
                </div>

                <span className="mb-3 inline-block rounded-full bg-white px-4 py-2 text-xs font-black text-[#0e7490] shadow-sm">
                  {t.rank} {student.rank}
                </span>

                <h3 className="text-xl font-black">
                  {isArabic ? student.nameAr : student.nameEn}
                </h3>

                <p className="mt-2 text-sm text-slate-500">
                  {student.grade}
                </p>

                <div className="mt-6 text-4xl font-black text-[#0e7490]">
                  {student.percentage}%
                </div>

                <p className="mt-2 text-sm font-bold text-slate-400">
                  {isArabic ? "النسبة المئوية" : "Percentage"}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================
          CONTACT SECTION
          القسم الختامي والتواصل
      ====================================== */}

      <section className="relative overflow-hidden bg-[#053e50] px-5 py-20 text-center text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-[#053e50] to-[#0e7490] opacity-90" />

        <div className="relative mx-auto max-w-3xl">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10">
            <School size={34} />
          </div>

          <h2 className="text-3xl font-black md:text-4xl">
            {t.viewAll}
          </h2>

          <p className="mt-5 leading-8 text-white/70">
            {isArabic
              ? "نسعى دائمًا لدعم طلابنا وتحفيزهم لتحقيق أفضل النتائج والتميز في جميع المراحل التعليمية."
              : "We always strive to support our students and encourage excellence at every academic stage."}
          </p>

          <a
            href="/contact"
            className="mt-8 inline-flex items-center gap-3 rounded-xl bg-white px-8 py-4 font-black text-[#053e50] transition hover:-translate-y-1 hover:bg-cyan-50"
          >
            {isArabic ? "تواصل معنا" : "Contact Us"}
            <Arrow size={19} />
          </a>
        </div>
      </section>
    </main>
  );
}
