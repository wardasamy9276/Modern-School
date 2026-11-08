
"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import {
  Users,
  UserCheck,
  UserX,
  GraduationCap,
  Search,
  Plus,
  Download,
  Eye,
  Trash2,
  Pencil,
  X,
  Filter,
  UserRound,
  BookOpen,
  TrendingUp,
  School,
  Printer,
} from "lucide-react";

import { useLanguage } from "../../context/LanguageContext";

import {
  Student,
  INITIAL_STUDENTS,
  getStudents,
  saveStudents,
} from "../../dashboard/students/data/StudentsPage";

/* =========================================
   Arabic names transliteration
========================================= */

// أسماء شائعة بكتابة إنجليزية أدق
const commonNames: Record<string, string> = {
  "أحمد": "Ahmed",
  "احمد": "Ahmed",
  "محمد": "Mohamed",
  "محمود": "Mahmoud",
  "مصطفى": "Mostafa",
  "علي": "Ali",
  "عمر": "Omar",
  "يوسف": "Youssef",
  "إبراهيم": "Ibrahim",
  "ابراهيم": "Ibrahim",
  "إسماعيل": "Ismail",
  "اسماعيل": "Ismail",
  "عبدالله": "Abdullah",
  "عبد الله": "Abdullah",
  "عبدالرحمن": "Abdelrahman",
  "عبد الرحمن": "Abdelrahman",
  "كريم": "Karim",
  "خالد": "Khaled",
  "طارق": "Tarek",
  "عمرو": "Amr",
  "حسن": "Hassan",
  "حسين": "Hussein",
  "سعيد": "Saeed",
  "وائل": "Wael",
  "هاني": "Hany",
  "شريف": "Sherif",
  "سامح": "Sameh",
  "رامي": "Ramy",
  "زياد": "Ziad",
  "ياسين": "Yassin",
  "مالك": "Malek",
  "أنس": "Anas",
  "انس": "Anas",
  "فارس": "Fares",
  "نور": "Nour",
  "ملك": "Malak",
  "مريم": "Mariam",
  "سارة": "Sara",
  "ساره": "Sara",
  "سلمى": "Salma",
  "سلمي": "Salma",
  "آية": "Aya",
  "ايه": "Aya",
  "أية": "Aya",
  "ندى": "Nada",
  "نورا": "Noura",
  "نورهان": "Nourhan",
  // "ملك": "Malak",
  "رحمة": "Rahma",
  "رحمه": "Rahma",
  "منة": "Menna",
  "منه": "Menna",
  "مي": "Mai",
  "دينا": "Dina",
  "هبة": "Heba",
  "هبه": "Heba",
  "ياسمين": "Yasmin",
  "إسراء": "Esraa",
  "اسراء": "Esraa",
  "بسملة": "Basmala",
  "بسمله": "Basmala",
  "فاطمة": "Fatma",
  "فاطمه": "Fatma",
  "أسماء": "Asmaa",
  "اسماء": "Asmaa",
  "إيمان": "Eman",
  "ايمان": "Eman",
  "دعاء": "Doaa",
  "ضحى": "Doha",
  "شروق": "Shorouk",
  "منة الله": "Menatallah",
  // "منه الله": "Menatallah",
  // "محمود": "Mahmoud",
  // "إبراهيم": "Ibrahim",
  // "ابراهيم": "Ibrahim",
  "أشرف": "Ashraf",
  "اشرف": "Ashraf",
  "عادل": "Adel",
  "جمال": "Gamal",
  "فتحي": "Fathy",
  // "فتحي": "Fathy",
  "صلاح": "Salah",
  "مجدي": "Magdy",
  "فؤاد": "Fouad",
  "نبيل": "Nabil",
  "منصور": "Mansour",
  "عصام": "Essam",
  "كمال": "Kamal",
  "حمدي": "Hamdy",
  "ماهر": "Maher",
  "سامي": "Samy",
  "سمي": "Samy",
  "عز": "Ezz",
  "حازم": "Hazem",
  "باسم": "Bassem",
  "باسل": "Basel",
  "رامز": "Ramez",
  "فادي": "Fady",
  "بيتر": "Peter",
  "مينا": "Mina",
  "جرجس": "Gerges",
  "شنودة": "Shenouda",
  "أمير": "Amir",
  "امير": "Amir",
  "أيمن": "Ayman",
  "ايمن": "Ayman",
  "وليد": "Walid",
  "علاء": "Alaa",
  "بلال": "Bilal",
  "معاذ": "Moaz",
  "مصعب": "Mosab",
  "حبيبة": "Habiba",
  "حبيبه": "Habiba",
  "جنى": "Jana",
  "جنه": "Jana",
  "جنة": "Jana",
  "ليلى": "Layla",
  "ليلي": "Laila",
  "ملك إبراهيم": "Malak Ibrahim",
  "أحمد محمود": "Ahmed Mahmoud",
  "كريم وائل": "Karim Wael",
  "سلمى أشرف": "Salma Ashraf",
  "يوسف عادل": "Youssef Adel",
};

// تحويل الأسماء غير الموجودة في القائمة
const arabicLetters: Record<string, string> = {
  ا: "a",
  أ: "a",
  إ: "e",
  آ: "a",
  ب: "b",
  ت: "t",
  ث: "th",
  ج: "g",
  ح: "h",
  خ: "kh",
  د: "d",
  ذ: "z",
  ر: "r",
  ز: "z",
  س: "s",
  ش: "sh",
  ص: "s",
  ض: "d",
  ط: "t",
  ظ: "z",
  ع: "a",
  غ: "gh",
  ف: "f",
  ق: "q",
  ك: "k",
  ل: "l",
  م: "m",
  ن: "n",
  ه: "h",
  ة: "a",
  و: "w",
  ي: "y",
  ى: "a",
  ء: "",
  ئ: "e",
  ؤ: "o",
};

function transliterateName(name: string) {
  if (!name) return "";

  const normalized = name.trim().replace(/\s+/g, " ");

  if (commonNames[normalized]) {
    return commonNames[normalized];
  }

  return normalized
    .split(" ")
    .map((word) => {
      if (commonNames[word]) {
        return commonNames[word];
      }

      const converted = word
        .split("")
        .map((letter) => arabicLetters[letter] ?? letter)
        .join("");

      return converted.charAt(0).toUpperCase() + converted.slice(1);
    })
    .join(" ");
}

const EMPTY_FORM = {
  name: "",
  nationalId: "",
  email: "",
  phone: "",
  parentName: "",
  parentRelation: "الأب",
  parentPhone: "",
  stage: "primary",
  grade: "grade_1",
  className: "",
  gender: "male",
  birthDate: "",
  address: "",
  admissionDate: "",
  academicYear: "2026/2027",
  status: "active" as Student["status"],
  busNumber: "",
  notes: "",
};

export default function StudentsPage() {
  const { language, t } = useLanguage();

  const isArabic = language === "ar";

  const [students, setStudents] = useState<Student[]>(INITIAL_STUDENTS);
  const [loaded, setLoaded] = useState(false);
  const [search, setSearch] = useState("");
  const [stage, setStage] = useState("all");
  const [status, setStatus] = useState("all");
  const [showForm, setShowForm] = useState(false);
  const [editing, setEditing] = useState<Student | null>(null);
  const [form, setForm] = useState(EMPTY_FORM);
  const [printStudent, setPrintStudent] = useState<Student | null>(null);

  // اسم الطالب حسب اللغة المختارة
  const studentName = (name: string) => {
    return isArabic ? name : transliterateName(name);
  };

  const stageName = (value: string) => {
    const names: Record<string, string> = {
      primary: t.students_primary,
      preparatory: t.students_preparatory,
      secondary: t.students_secondary,
    };

    return names[value] || value;
  };

  const gradeName = (value: string) => {
    const names: Record<string, string> = {
      grade_1: t.students_grade_1,
      grade_2: t.students_grade_2,
      grade_3: t.students_grade_3,
      grade_4: t.students_grade_4,
      grade_5: t.students_grade_5,
      grade_6: t.students_grade_6,
    };

    return names[value] || value;
  };

  const statusName = (value: Student["status"]) => {
    const names = {
      active: t.students_active_status,
      inactive: t.students_inactive_status,
      transferred: t.students_transferred_status,
    };

    return names[value];
  };

  const genderName = (value: string) =>
    value === "male" ? t.students_male : t.students_female;

  const relationName = (value: string) => {
    if (value === "الأب") return t.students_father;
    if (value === "الأم") return t.students_mother;
    if (value === "الوصي") return t.students_guardian;

    return value;
  };

  useEffect(() => {
    setStudents(getStudents());
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (loaded) saveStudents(students);
  }, [students, loaded]);

  // طباعة الطالب المحدد فقط
  useEffect(() => {
    if (!printStudent) return;

    const timer = window.setTimeout(() => {
      window.print();
    }, 300);

    const handleAfterPrint = () => {
      setPrintStudent(null);
    };

    window.addEventListener("afterprint", handleAfterPrint);

    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("afterprint", handleAfterPrint);
    };
  }, [printStudent]);

  const active = students.filter(
    (s) => s.status === "active"
  ).length;

  const inactive = students.filter(
    (s) => s.status === "inactive"
  ).length;

  const transferred = students.filter(
    (s) => s.status === "transferred"
  ).length;

  const females = students.filter(
    (s) => s.gender === "female"
  ).length;

  const filtered = useMemo(() => {
    return students.filter((s) => {
      const query = search.trim().toLowerCase();

      const arabicName = s.name.toLowerCase();
      const englishName = transliterateName(s.name).toLowerCase();

      const matchesSearch =
        !query ||
        arabicName.includes(query) ||
        englishName.includes(query) ||
        s.code.toLowerCase().includes(query) ||
        s.phone.includes(query) ||
        s.parentName.toLowerCase().includes(query) ||
        transliterateName(s.parentName).toLowerCase().includes(query) ||
        s.parentPhone.includes(query);

      return (
        matchesSearch &&
        (stage === "all" || s.stage === stage) &&
        (status === "all" || s.status === status)
      );
    });
  }, [students, search, stage, status]);

  const openAdd = () => {
    setEditing(null);
    setForm(EMPTY_FORM);
    setShowForm(true);
  };

  const openEdit = (student: Student) => {
    setEditing(student);

    const { id, code, ...data } = student;

    setForm(data);
    setShowForm(true);
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();

    if (editing) {
      setStudents((current) =>
        current.map((s) =>
          s.id === editing.id ? { ...s, ...form } : s
        )
      );
    } else {
      const newStudent: Student = {
        ...form,
        id: Date.now(),
        code: `STD-${Date.now().toString().slice(-6)}`,
      };

      setStudents((current) => [newStudent, ...current]);
    }

    setShowForm(false);
    setEditing(null);
    setForm(EMPTY_FORM);
  };

  const remove = (id: number) => {
    if (!window.confirm(t.students_confirm_delete)) return;

    setStudents((current) =>
      current.filter((s) => s.id !== id)
    );
  };

  const exportCSV = () => {
    const headers = [
      t.students_code,
      t.students_name,
      t.students_national_id,
      t.students_phone,
      t.students_parent_name,
      t.students_parent_phone,
      t.students_stage,
      t.students_grade,
      t.students_class,
      t.students_status,
    ];

    const rows = filtered.map((s) => [
      s.code,
      studentName(s.name),
      s.nationalId,
      s.phone,
      studentName(s.parentName),
      s.parentPhone,
      stageName(s.stage),
      gradeName(s.grade),
      s.className,
      statusName(s.status),
    ]);

    const csv = [headers, ...rows]
      .map((row) =>
        row
          .map(
            (value) =>
              `"${String(value ?? "").replace(/"/g, '""')}"`
          )
          .join(",")
      )
      .join("\n");

    const blob = new Blob(["\uFEFF" + csv], {
      type: "text/csv;charset=utf-8;",
    });

    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");

    a.href = url;
    a.download = "rowad-students.csv";
    a.click();

    URL.revokeObjectURL(url);
  };

  const formatDate = (value: string) => {
    if (!value) return "—";

    return new Date(value).toLocaleDateString(
      isArabic ? "ar-EG" : "en-GB"
    );
  };

  const printFields = (student: Student) => [
    {
      title: t.students_name,
      value: studentName(student.name),
    },
    {
      title: t.students_code,
      value: student.code,
    },
    {
      title: t.students_national_id,
      value: student.nationalId,
    },
    {
      title: t.students_gender,
      value: genderName(student.gender),
    },
    {
      title: t.students_birth_date,
      value: formatDate(student.birthDate),
    },
    {
      title: t.students_email,
      value: student.email,
    },
    {
      title: t.students_phone,
      value: student.phone,
    },
    {
      title: t.students_parent_name,
      value: studentName(student.parentName),
    },
    {
      title: t.students_parent_relation,
      value: relationName(student.parentRelation),
    },
    {
      title: t.students_parent_phone,
      value: student.parentPhone,
    },
    {
      title: t.students_stage,
      value: stageName(student.stage),
    },
    {
      title: t.students_grade,
      value: gradeName(student.grade),
    },
    {
      title: t.students_class,
      value: student.className,
    },
    {
      title: t.students_status,
      value: statusName(student.status),
    },
    {
      title: t.students_academic_year,
      value: student.academicYear,
    },
    {
      title: t.students_admission_date,
      value: formatDate(student.admissionDate),
    },
    {
      title: t.students_address,
      value: student.address,
    },
    {
      title: t.students_bus,
      value: student.busNumber,
    },
    {
      title: t.students_notes,
      value: student.notes,
    },
  ];

  return (
    <main
      dir={isArabic ? "rtl" : "ltr"}
      className="min-h-screen space-y-7 bg-slate-50 p-4 sm:p-7"
    >
      {/* Header */}

      <header className="flex flex-wrap items-center justify-between gap-5 print:hidden">
        <div>
          <p className="mb-2 text-sm text-slate-400">
            {t.students_breadcrumb}
          </p>

          <h1 className="text-3xl font-black text-slate-900">
            {t.students_title}
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            {t.students_subtitle}
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <button
            onClick={exportCSV}
            className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-bold text-slate-700 hover:bg-slate-100"
          >
            <Download size={18} />
            {t.students_export}
          </button>

          <button
            onClick={openAdd}
            className="flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-sm font-bold text-white shadow-lg hover:bg-slate-700"
          >
            <Plus size={19} />
            {t.students_add}
          </button>
        </div>
      </header>

      {/* Statistics */}

      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4 print:hidden">
        <StatCard
          title={t.students_total}
          value={students.length}
          icon={Users}
          color="slate"
        />

        <StatCard
          title={t.students_active}
          value={active}
          icon={UserCheck}
          color="emerald"
        />

        <StatCard
          title={t.students_inactive}
          value={inactive}
          icon={UserX}
          color="rose"
        />

        <StatCard
          title={t.students_females}
          value={females}
          icon={GraduationCap}
          color="blue"
        />
      </section>

      {/* Additional Overview */}

      <section className="grid grid-cols-1 gap-4 lg:grid-cols-3 print:hidden">
        <OverviewCard
          title={t.students_transferred}
          value={transferred}
          icon={School}
          color="text-indigo-500"
        />

        <OverviewCard
          title={t.students_males}
          value={students.length - females}
          icon={UserRound}
          color="text-sky-500"
        />

        <OverviewCard
          title={t.students_academic_year}
          value="2026 / 2027"
          icon={TrendingUp}
          color="text-emerald-500"
        />
      </section>

      {/* Stage Distribution */}

      <section className="rounded-2xl border border-slate-200 bg-white p-5 print:hidden">
        <h2 className="mb-5 flex items-center gap-2 font-extrabold text-slate-800">
          <BookOpen size={20} />
          {t.students_distribution}
        </h2>

        <div className="grid gap-4 sm:grid-cols-3">
          {[
            { key: "primary", title: t.students_primary },
            { key: "preparatory", title: t.students_preparatory },
            { key: "secondary", title: t.students_secondary },
          ].map((item) => {
            const count = students.filter(
              (s) => s.stage === item.key
            ).length;

            const percentage = students.length
              ? Math.round((count / students.length) * 100)
              : 0;

            return (
              <div
                key={item.key}
                className="rounded-xl bg-slate-50 p-4"
              >
                <div className="flex justify-between gap-2">
                  <span className="text-sm font-bold text-slate-600">
                    {item.title}
                  </span>

                  <span className="font-black text-slate-900">
                    {count}
                  </span>
                </div>

                <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-200">
                  <div
                    className="h-full rounded-full bg-slate-800"
                    style={{ width: `${percentage}%` }}
                  />
                </div>

                <p className="mt-2 text-xs text-slate-400">
                  {percentage}% {t.students_of_total}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Students List */}

      <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm print:hidden">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 p-5">
          <div>
            <h2 className="text-xl font-black text-slate-900">
              {t.students_list}
            </h2>

            <p className="mt-1 text-sm text-slate-400">
              {filtered.length} {t.students_results}
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <div className="relative">
              <Search
                className={`absolute top-3 text-slate-400 ${
                  isArabic ? "right-3" : "left-3"
                }`}
                size={18}
              />

              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder={t.students_search}
                className={`w-64 max-w-full rounded-xl border border-slate-200 bg-slate-50 py-3 text-sm outline-none focus:border-slate-500 ${
                  isArabic ? "pr-10 pl-3" : "pl-10 pr-3"
                }`}
              />
            </div>

            <div className="relative">
              <Filter
                className={`absolute top-3 text-slate-400 ${
                  isArabic ? "right-3" : "left-3"
                }`}
                size={16}
              />

              <select
                value={stage}
                onChange={(e) => setStage(e.target.value)}
                className={`rounded-xl border border-slate-200 bg-slate-50 py-3 text-sm outline-none ${
                  isArabic ? "pr-9 pl-3" : "pl-9 pr-3"
                }`}
              >
                <option value="all">{t.students_all_stages}</option>
                <option value="primary">{t.students_primary}</option>
                <option value="preparatory">{t.students_preparatory}</option>
                <option value="secondary">{t.students_secondary}</option>
              </select>
            </div>

            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-3 text-sm outline-none"
            >
              <option value="all">{t.students_all_statuses}</option>
              <option value="active">{t.students_active_status}</option>
              <option value="inactive">{t.students_inactive_status}</option>
              <option value="transferred">{t.students_transferred_status}</option>
            </select>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[950px] text-start">
            <thead className="bg-slate-50 text-xs text-slate-500">
              <tr>
                <th className="px-5 py-4">{t.students_student}</th>
                <th className="px-5 py-4">{t.students_code}</th>
                <th className="px-5 py-4">{t.students_stage_grade}</th>
                <th className="px-5 py-4">{t.students_class}</th>
                <th className="px-5 py-4">{t.students_parent}</th>
                <th className="px-5 py-4">{t.students_status}</th>
                <th className="px-5 py-4 text-center">{t.students_actions}</th>
              </tr>
            </thead>

            <tbody>
              {filtered.map((student) => (
                <tr
                  key={student.id}
                  className="border-t border-slate-100 hover:bg-slate-50"
                >
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      <div className="flex size-11 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                        <GraduationCap size={22} />
                      </div>

                      <div>
                        <p className="font-bold text-slate-800">
                          {studentName(student.name)}
                        </p>

                        <p className="mt-1 text-xs text-slate-400">
                          {student.email}
                        </p>
                      </div>
                    </div>
                  </td>

                  <td className="px-5 py-4 text-xs font-bold text-slate-500">
                    {student.code}
                  </td>

                  <td className="px-5 py-4">
                    <p className="text-sm font-bold text-slate-700">
                      {stageName(student.stage)}
                    </p>

                    <p className="mt-1 text-xs text-slate-400">
                      {gradeName(student.grade)}
                    </p>
                  </td>

                  <td className="px-5 py-4 text-sm text-slate-600">
                    {student.className || "—"}
                  </td>

                  <td className="px-5 py-4">
                    <p className="text-sm font-semibold text-slate-700">
                      {studentName(student.parentName)}
                    </p>

                    <p
                      className="mt-1 text-xs text-slate-400"
                      dir="ltr"
                    >
                      {student.parentPhone}
                    </p>
                  </td>

                  <td className="px-5 py-4">
                    <Status
                      status={student.status}
                      t={t}
                    />
                  </td>

                  <td className="px-5 py-4">
                    <div className="flex justify-center gap-2">
                      <Link
                        href={`/dashboard/students/${student.id}`}
                        title={t.students_file}
                        className="flex size-9 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600 hover:bg-indigo-100"
                      >
                        <Eye size={17} />
                      </Link>

                      <button
                        onClick={() => setPrintStudent(student)}
                        title={t.students_print}
                        className="flex size-9 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600 hover:bg-emerald-100"
                      >
                        <Printer size={17} />
                      </button>

                      <button
                        onClick={() => openEdit(student)}
                        title={t.students_edit}
                        className="flex size-9 items-center justify-center rounded-lg bg-slate-100 text-slate-600 hover:bg-slate-200"
                      >
                        <Pencil size={17} />
                      </button>

                      <button
                        onClick={() => remove(student.id)}
                        title={t.students_delete}
                        className="flex size-9 items-center justify-center rounded-lg bg-rose-50 text-rose-600 hover:bg-rose-100"
                      >
                        <Trash2 size={17} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}

              {filtered.length === 0 && (
                <tr>
                  <td
                    colSpan={7}
                    className="p-14 text-center text-slate-400"
                  >
                    {t.students_no_results}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>

      {/* Add / Edit Modal */}

      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-slate-950/60 p-4 backdrop-blur-sm print:hidden">
          <form
            onSubmit={submit}
            className="my-auto max-h-[92vh] w-full max-w-4xl space-y-5 overflow-y-auto rounded-3xl bg-white p-6 shadow-2xl"
          >
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-black text-slate-900">
                  {editing
                    ? t.students_edit_title
                    : t.students_add_title}
                </h2>

                <p className="mt-1 text-sm text-slate-400">
                  {t.students_basic_info}
                </p>
              </div>

              <button
                type="button"
                onClick={() => setShowForm(false)}
                aria-label={isArabic ? "إغلاق" : "Close"}
              >
                <X />
              </button>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {([
                ["name", t.students_name],
                ["nationalId", t.students_national_id],
                ["email", t.students_email],
                ["phone", t.students_phone],
                ["parentName", t.students_parent_name],
                ["parentPhone", t.students_parent_phone],
                ["className", t.students_class],
                ["birthDate", t.students_birth_date],
                ["admissionDate", t.students_admission_date],
                ["address", t.students_address],
                ["busNumber", t.students_bus],
              ] as const).map(([key, label]) => (
                <label
                  key={key}
                  className="space-y-2 text-sm font-bold text-slate-600"
                >
                  {label}

                  <input
                    required={["name", "phone"].includes(key)}
                    type={
                      key === "email"
                        ? "email"
                        : key === "birthDate" || key === "admissionDate"
                        ? "date"
                        : "text"
                    }
                    value={form[key]}
                    onChange={(e) =>
                      setForm({ ...form, [key]: e.target.value })
                    }
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 p-3 font-normal outline-none focus:border-slate-500"
                  />
                </label>
              ))}

              <FormSelect
                label={t.students_stage}
                value={form.stage}
                onChange={(value) => setForm({ ...form, stage: value })}
                options={[
                  ["primary", t.students_primary],
                  ["preparatory", t.students_preparatory],
                  ["secondary", t.students_secondary],
                ]}
              />

              <FormSelect
                label={t.students_grade}
                value={form.grade}
                onChange={(value) => setForm({ ...form, grade: value })}
                options={[1, 2, 3, 4, 5, 6].map((n) => [
                  `grade_${n}`,
                  gradeName(`grade_${n}`),
                ])}
              />

              <FormSelect
                label={t.students_gender}
                value={form.gender}
                onChange={(value) => setForm({ ...form, gender: value })}
                options={[
                  ["male", t.students_male],
                  ["female", t.students_female],
                ]}
              />

              <FormSelect
                label={t.students_status}
                value={form.status}
                onChange={(value) =>
                  setForm({
                    ...form,
                    status: value as Student["status"],
                  })
                }
                options={[
                  ["active", t.students_active_status],
                  ["inactive", t.students_inactive_status],
                  ["transferred", t.students_transferred_status],
                ]}
              />

              <FormSelect
                label={t.students_parent_relation}
                value={form.parentRelation}
                onChange={(value) =>
                  setForm({ ...form, parentRelation: value })
                }
                options={[
                  ["الأب", t.students_father],
                  ["الأم", t.students_mother],
                  ["الوصي", t.students_guardian],
                ]}
              />

              <label className="space-y-2 text-sm font-bold text-slate-600 sm:col-span-2">
                {t.students_notes}

                <textarea
                  value={form.notes}
                  onChange={(e) =>
                    setForm({ ...form, notes: e.target.value })
                  }
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 p-3"
                  rows={2}
                />
              </label>
            </div>

            <div className="flex justify-end gap-3 border-t border-slate-100 pt-5">
              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="rounded-xl border border-slate-200 px-5 py-3 font-bold text-slate-600"
              >
                {t.students_cancel}
              </button>

              <button
                type="submit"
                className="rounded-xl bg-slate-900 px-7 py-3 font-bold text-white hover:bg-slate-700"
              >
                {editing ? t.students_save : t.students_submit}
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Single Student Print Page */}

      {printStudent && (
        <section
          id="student-print-area"
          dir={isArabic ? "rtl" : "ltr"}
          className="hidden print:block"
        >
          <div className="print-document">
            <div className="print-header">
              <div>
                <h1>{t.students_school_name}</h1>
                <p>{t.students_print_title}</p>
              </div>

              <div className="print-logo">
                <GraduationCap size={34} />
              </div>
            </div>

            <div className="print-student-name">
              <h2>{studentName(printStudent.name)}</h2>
              <p>{printStudent.code}</p>
            </div>

            <PrintSection
              title={t.students_personal_section}
              fields={printFields(printStudent).slice(0, 5)}
            />

            <PrintSection
              title={t.students_academic_section}
              fields={printFields(printStudent).slice(10, 16)}
            />

            <PrintSection
              title={t.students_parent_section}
              fields={printFields(printStudent).slice(7, 10)}
            />

            <PrintSection
              title={t.students_contact_section}
              fields={[
                ...printFields(printStudent).slice(5, 7),
                ...printFields(printStudent).slice(16, 19),
              ]}
            />

            <div className="print-footer">
              <span>{t.students_print_date}</span>

              <span>
                {new Date().toLocaleDateString(
                  isArabic ? "ar-EG" : "en-GB"
                )}
              </span>
            </div>
          </div>
        </section>
      )}

      <style jsx global>{`
        @page {
          size: A4 portrait;
          margin: 0;
        }

        @media print {
          html,
          body {
            width: 210mm !important;
            height: 297mm !important;
            min-height: 297mm !important;
            margin: 0 !important;
            padding: 0 !important;
            background: white !important;
            overflow: hidden !important;
          }

          body * {
            visibility: hidden !important;
          }

          #student-print-area,
          #student-print-area * {
            visibility: visible !important;
          }

          #student-print-area {
            display: block !important;
            position: absolute !important;
            top: 0 !important;
            left: 0 !important;
            width: 210mm !important;
            height: 297mm !important;
            overflow: hidden !important;
            background: white !important;
          }

          .print-document {
            box-sizing: border-box;
            width: 210mm;
            height: 297mm;
            padding: 13mm 15mm;
            background: white;
            color: #172033;
            font-family: Arial, sans-serif;
          }

          .print-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding-bottom: 15px;
            border-bottom: 2px solid #172033;
          }

          .print-header h1 {
            font-size: 22px;
            font-weight: 900;
          }

          .print-header p {
            margin-top: 6px;
            color: #64748b;
            font-size: 13px;
          }

          .print-logo {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 55px;
            height: 55px;
            border: 1px solid #cbd5e1;
            border-radius: 12px;
          }

          .print-student-name {
            margin: 18px 0;
            padding: 15px;
            text-align: center;
            background: #f1f5f9;
            border-radius: 8px;
          }

          .print-student-name h2 {
            font-size: 20px;
            font-weight: 900;
          }

          .print-student-name p {
            margin-top: 5px;
            font-size: 12px;
            color: #64748b;
          }

          .print-section {
            margin-bottom: 12px;
            break-inside: avoid;
          }

          .print-section-title {
            padding: 8px 10px;
            margin-bottom: 8px;
            background: #e2e8f0;
            border-inline-start: 4px solid #334155;
            font-size: 13px;
            font-weight: 900;
          }

          .print-fields {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 7px 18px;
          }

          .print-field {
            padding: 6px 3px;
            border-bottom: 1px solid #e2e8f0;
            min-width: 0;
          }

          .print-field-label {
            display: block;
            margin-bottom: 4px;
            font-size: 10px;
            color: #64748b;
          }

          .print-field-value {
            display: block;
            font-size: 12px;
            font-weight: 700;
            overflow-wrap: anywhere;
          }

          .print-footer {
            display: flex;
            justify-content: space-between;
            margin-top: 16px;
            padding-top: 10px;
            border-top: 1px solid #cbd5e1;
            font-size: 10px;
            color: #64748b;
          }
        }
      `}</style>
    </main>
  );
}

/* =========================================
   Form Select
========================================= */

function FormSelect({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: string[][];
}) {
  return (
    <label className="space-y-2 text-sm font-bold text-slate-600">
      {label}

      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-xl border border-slate-200 bg-slate-50 p-3"
      >
        {options.map(([optionValue, optionLabel]) => (
          <option key={optionValue} value={optionValue}>
            {optionLabel}
          </option>
        ))}
      </select>
    </label>
  );
}

/* =========================================
   Print Section
========================================= */

function PrintSection({
  title,
  fields,
}: {
  title: string;
  fields: { title: string; value: string }[];
}) {
  return (
    <div className="print-section">
      <h3 className="print-section-title">{title}</h3>

      <div className="print-fields">
        {fields.map((field, index) => (
          <div className="print-field" key={index}>
            <span className="print-field-label">
              {field.title}
            </span>

            <span className="print-field-value">
              {field.value || "—"}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* =========================================
   Overview Card
========================================= */

function OverviewCard({
  title,
  value,
  icon: Icon,
  color,
}: any) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-slate-400">{title}</p>

          <h3 className="mt-2 text-3xl font-black text-slate-800">
            {value}
          </h3>
        </div>

        <Icon className={color} size={28} />
      </div>
    </div>
  );
}

/* =========================================
   Statistics Card
========================================= */

function StatCard({
  title,
  value,
  icon: Icon,
  color,
}: any) {
  const styles: Record<string, string> = {
    slate: "bg-slate-100 text-slate-700",
    emerald: "bg-emerald-50 text-emerald-600",
    rose: "bg-rose-50 text-rose-600",
    blue: "bg-blue-50 text-blue-600",
  };

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <div className="flex items-center justify-between">
        <div
          className={`flex size-12 items-center justify-center rounded-xl ${styles[color]}`}
        >
          <Icon size={23} />
        </div>

        <span className="text-3xl font-black text-slate-900">
          {value}
        </span>
      </div>

      <h3 className="mt-4 font-bold text-slate-700">
        {title}
      </h3>
    </div>
  );
}

/* =========================================
   Student Status
========================================= */

function Status({
  status,
  t,
}: {
  status: Student["status"];
  t: any;
}) {
  const styles = {
    active: "bg-emerald-50 text-emerald-700",
    inactive: "bg-rose-50 text-rose-600",
    transferred: "bg-amber-50 text-amber-700",
  };

  const labels = {
    active: t.students_active_status,
    inactive: t.students_inactive_status,
    transferred: t.students_transferred_status,
  };

  return (
    <span
      className={`rounded-full px-3 py-1.5 text-xs font-bold ${styles[status]}`}
    >
      {labels[status]}
    </span>
  );
}
