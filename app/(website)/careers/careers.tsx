
"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useLanguage } from "../../context/LanguageContext";

type Job = {
  id: number;
  title: string;
  department: string;
  type: string;
  location: string;
  experience: string;
  description: string;
  requirements: string[];
  responsibilities: string[];
  active: boolean;
};

type Application = {
  id: number;
  jobId: number;
  jobTitle: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  date: string;
};

const initialJobs: Job[] = [
  {
    id: 1,
    title: "معلم لغة عربية",
    department: "التدريس",
    type: "دوام كامل",
    location: "6 أكتوبر - الجيزة",
    experience: "خبرة سنتين",
    description: "نبحث عن معلم لغة عربية متميز لديه القدرة على تطوير مهارات الطلاب اللغوية.",
    requirements: [
      "مؤهل تربوي مناسب",
      "خبرة في التدريس لا تقل عن سنتين",
      "مهارات تواصل ممتازة",
      "القدرة على استخدام التكنولوجيا التعليمية",
    ],
    responsibilities: [
      "إعداد الدروس والخطط التعليمية",
      "متابعة مستوى الطلاب",
      "تقييم أداء الطلاب بشكل مستمر",
      "المشاركة في الأنشطة المدرسية",
    ],
    active: true,
  },
  {
    id: 2,
    title: "معلم لغة إنجليزية",
    department: "التدريس",
    type: "دوام كامل",
    location: "6 أكتوبر - الجيزة",
    experience: "خبرة 3 سنوات",
    description: "معلم لغة إنجليزية قادر على تقديم تجربة تعليمية تفاعلية وممتعة.",
    requirements: [
      "بكالوريوس لغة إنجليزية أو مؤهل مناسب",
      "إجادة اللغة الإنجليزية",
      "خبرة في التدريس",
      "مهارات إدارة الفصل",
    ],
    responsibilities: [
      "تدريس المناهج المقررة",
      "تنمية مهارات القراءة والكتابة",
      "إعداد الاختبارات والتقييمات",
      "متابعة تقدم الطلاب",
    ],
    active: true,
  },
  {
    id: 3,
    title: "معلم رياضيات",
    department: "التدريس",
    type: "دوام كامل",
    location: "6 أكتوبر - الجيزة",
    experience: "خبرة سنتين",
    description: "معلم رياضيات يمتلك مهارات تبسيط المفاهيم الرياضية للطلاب.",
    requirements: [
      "بكالوريوس رياضيات أو مؤهل مناسب",
      "خبرة في التدريس",
      "مهارات تحليل وحل المشكلات",
    ],
    responsibilities: [
      "شرح المناهج الرياضية",
      "إعداد التدريبات العملية",
      "متابعة نتائج الطلاب",
      "تقديم الدعم الأكاديمي",
    ],
    active: true,
  },
  {
    id: 4,
    title: "معلم علوم",
    department: "التدريس",
    type: "دوام كامل",
    location: "6 أكتوبر - الجيزة",
    experience: "خبرة سنتين",
    description: "معلم علوم لديه شغف بالتجارب العلمية والتعليم التطبيقي.",
    requirements: [
      "مؤهل جامعي مناسب",
      "خبرة في تدريس العلوم",
      "القدرة على تنفيذ الأنشطة العملية",
    ],
    responsibilities: [
      "شرح المفاهيم العلمية",
      "تنظيم التجارب المعملية",
      "إعداد الأنشطة التعليمية",
    ],
    active: true,
  },
  {
    id: 5,
    title: "أخصائي تكنولوجيا معلومات",
    department: "تكنولوجيا المعلومات",
    type: "دوام كامل",
    location: "6 أكتوبر - الجيزة",
    experience: "خبرة سنة",
    description: "مسؤول عن متابعة الأنظمة التقنية وتقديم الدعم الفني داخل المدرسة.",
    requirements: [
      "مؤهل مناسب في تكنولوجيا المعلومات",
      "معرفة بأساسيات الشبكات",
      "حل المشكلات التقنية",
      "مهارات التواصل والعمل الجماعي",
    ],
    responsibilities: [
      "متابعة أجهزة الكمبيوتر",
      "تقديم الدعم الفني للموظفين",
      "متابعة الشبكات والأنظمة",
      "المساعدة في تطوير الخدمات الرقمية",
    ],
    active: true,
  },
  {
    id: 6,
    title: "مسؤول دعم فني",
    department: "تكنولوجيا المعلومات",
    type: "دوام كامل",
    location: "6 أكتوبر - الجيزة",
    experience: "حديث التخرج أو خبرة سنة",
    description: "تقديم المساعدة التقنية للطلاب والمعلمين والإدارة.",
    requirements: [
      "معرفة جيدة بأنظمة Windows",
      "أساسيات الشبكات",
      "القدرة على التعامل مع المشكلات",
    ],
    responsibilities: [
      "حل مشكلات الأجهزة",
      "متابعة أجهزة المدرسة",
      "تسجيل طلبات الدعم الفني",
    ],
    active: true,
  },
  {
    id: 7,
    title: "أخصائي موارد بشرية",
    department: "الإدارة",
    type: "دوام كامل",
    location: "6 أكتوبر - الجيزة",
    experience: "خبرة سنتين",
    description: "المشاركة في إدارة الموارد البشرية وتنظيم شؤون الموظفين.",
    requirements: [
      "مؤهل جامعي مناسب",
      "مهارات تنظيمية وإدارية",
      "إجادة استخدام Microsoft Office",
    ],
    responsibilities: [
      "متابعة ملفات الموظفين",
      "تنظيم المقابلات",
      "متابعة الحضور والانصراف",
      "إعداد التقارير الإدارية",
    ],
    active: true,
  },
  {
    id: 8,
    title: "موظف شؤون طلاب",
    department: "الإدارة",
    type: "دوام كامل",
    location: "6 أكتوبر - الجيزة",
    experience: "خبرة سنة",
    description: "متابعة الملفات والإجراءات الإدارية الخاصة بالطلاب.",
    requirements: [
      "مؤهل جامعي مناسب",
      "مهارات تواصل جيدة",
      "الدقة في إدخال البيانات",
    ],
    responsibilities: [
      "تنظيم ملفات الطلاب",
      "متابعة بيانات التسجيل",
      "التواصل مع أولياء الأمور",
      "إعداد التقارير",
    ],
    active: true,
  },
  {
    id: 9,
    title: "أخصائي تسويق رقمي",
    department: "التسويق",
    type: "دوام كامل",
    location: "6 أكتوبر - الجيزة",
    experience: "خبرة سنتين",
    description: "إدارة الحملات الرقمية والتواصل عبر منصات التواصل الاجتماعي.",
    requirements: [
      "خبرة في التسويق الرقمي",
      "معرفة بمنصات التواصل الاجتماعي",
      "مهارات كتابة المحتوى",
    ],
    responsibilities: [
      "إعداد خطط التسويق",
      "إدارة حسابات التواصل",
      "متابعة نتائج الحملات",
      "إعداد تقارير الأداء",
    ],
    active: true,
  },
  {
    id: 10,
    title: "مصمم جرافيك",
    department: "التسويق",
    type: "دوام كامل",
    location: "6 أكتوبر - الجيزة",
    experience: "خبرة سنة",
    description: "تصميم المواد الإعلانية والمحتوى البصري للمدرسة.",
    requirements: [
      "إجادة Photoshop أو Illustrator",
      "حس إبداعي",
      "إعداد تصميمات للسوشيال ميديا",
    ],
    responsibilities: [
      "تصميم المنشورات",
      "إعداد المواد الإعلانية",
      "تطوير الهوية البصرية",
    ],
    active: true,
  },
  {
    id: 11,
    title: "مشرف أنشطة مدرسية",
    department: "الأنشطة",
    type: "دوام كامل",
    location: "6 أكتوبر - الجيزة",
    experience: "خبرة سنة",
    description: "تنظيم الأنشطة المدرسية والثقافية والرياضية.",
    requirements: [
      "مؤهل مناسب",
      "مهارات تنظيمية",
      "القدرة على التعامل مع الطلاب",
    ],
    responsibilities: [
      "تنظيم الفعاليات",
      "متابعة الأنشطة",
      "تشجيع مواهب الطلاب",
    ],
    active: true,
  },
  {
    id: 12,
    title: "أخصائي اجتماعي",
    department: "الأنشطة",
    type: "دوام كامل",
    location: "6 أكتوبر - الجيزة",
    experience: "خبرة سنتين",
    description: "دعم الطلاب ومتابعة الجوانب الاجتماعية والسلوكية.",
    requirements: [
      "مؤهل مناسب في الخدمة الاجتماعية",
      "مهارات التواصل",
      "القدرة على حل المشكلات",
    ],
    responsibilities: [
      "متابعة الحالات الطلابية",
      "التواصل مع أولياء الأمور",
      "تنظيم البرامج التوعوية",
    ],
    active: true,
  },
];

const emptyJob: Omit<Job, "id"> = {
  title: "",
  department: "التدريس",
  type: "دوام كامل",
  location: "6 أكتوبر - الجيزة",
  experience: "",
  description: "",
  requirements: [],
  responsibilities: [],
  active: true,
};

export default function CareersPage() {
  const { language } = useLanguage();
  const isAr = language === "ar";

  const [jobs, setJobs] = useState<Job[]>(initialJobs);
  const [applications, setApplications] = useState<Application[]>([]);
  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("all");
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [showApplication, setShowApplication] = useState(false);
  const [showAdmin, setShowAdmin] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [jobForm, setJobForm] = useState(emptyJob);
  const [requirementsText, setRequirementsText] = useState("");
  const [responsibilitiesText, setResponsibilitiesText] = useState("");
  const [applicationForm, setApplicationForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  useEffect(() => {
    try {
      const savedJobs = localStorage.getItem("rowad-careers-jobs-v1");
      const savedApplications = localStorage.getItem(
        "rowad-careers-applications-v1"
      );

      if (savedJobs) setJobs(JSON.parse(savedJobs));
      if (savedApplications) setApplications(JSON.parse(savedApplications));
    } catch {
      console.error("Could not load careers data.");
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("rowad-careers-jobs-v1", JSON.stringify(jobs));
  }, [jobs]);

  useEffect(() => {
    localStorage.setItem(
      "rowad-careers-applications-v1",
      JSON.stringify(applications)
    );
  }, [applications]);

  const departments = [
    "all",
    "التدريس",
    "الإدارة",
    "تكنولوجيا المعلومات",
    "التسويق",
    "الأنشطة",
  ];

  const departmentLabels: Record<string, string> = {
    all: isAr ? "كل الأقسام" : "All Departments",
    التدريس: isAr ? "التدريس" : "Teaching",
    الإدارة: isAr ? "الإدارة" : "Administration",
    "تكنولوجيا المعلومات": isAr ? "تكنولوجيا المعلومات" : "IT",
    التسويق: isAr ? "التسويق" : "Marketing",
    الأنشطة: isAr ? "الأنشطة" : "Activities",
  };

  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => {
      const matchesSearch =
        job.title.toLowerCase().includes(search.toLowerCase()) ||
        job.department.toLowerCase().includes(search.toLowerCase()) ||
        job.description.toLowerCase().includes(search.toLowerCase());

      const matchesDepartment =
        department === "all" || job.department === department;

      return job.active && matchesSearch && matchesDepartment;
    });
  }, [jobs, search, department]);

  const updateJobField = (
    field: keyof Omit<Job, "id">,
    value: string | boolean | string[]
  ) => {
    setJobForm((previous) => ({ ...previous, [field]: value }));
  };

  const saveJob = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const jobData: Job = {
      ...jobForm,
      id: editingId ?? Date.now(),
      requirements: requirementsText
        .split("\n")
        .map((item) => item.trim())
        .filter(Boolean),
      responsibilities: responsibilitiesText
        .split("\n")
        .map((item) => item.trim())
        .filter(Boolean),
    };

    if (editingId !== null) {
      setJobs((previous) =>
        previous.map((job) => (job.id === editingId ? jobData : job))
      );
    } else {
      setJobs((previous) => [jobData, ...previous]);
    }

    resetJobForm();
  };

  const resetJobForm = () => {
    setJobForm(emptyJob);
    setRequirementsText("");
    setResponsibilitiesText("");
    setEditingId(null);
  };

  const editJob = (job: Job) => {
    setEditingId(job.id);
    setJobForm({
      title: job.title,
      department: job.department,
      type: job.type,
      location: job.location,
      experience: job.experience,
      description: job.description,
      requirements: job.requirements,
      responsibilities: job.responsibilities,
      active: job.active,
    });
    setRequirementsText(job.requirements.join("\n"));
    setResponsibilitiesText(job.responsibilities.join("\n"));
  };

  const deleteJob = (id: number) => {
    const confirmed = window.confirm(
      isAr ? "هل تريد حذف هذه الوظيفة؟" : "Delete this job?"
    );

    if (!confirmed) return;

    setJobs((previous) => previous.filter((job) => job.id !== id));
  };

  const submitApplication = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!selectedJob) return;

    const newApplication: Application = {
      id: Date.now(),
      jobId: selectedJob.id,
      jobTitle: selectedJob.title,
      ...applicationForm,
      date: new Date().toLocaleDateString(),
    };

    setApplications((previous) => [newApplication, ...previous]);

    setApplicationForm({
      name: "",
      email: "",
      phone: "",
      message: "",
    });

    setShowApplication(false);
    setSelectedJob(null);

    alert(
      isAr
        ? "تم تسجيل طلب التقديم بنجاح!"
        : "Your application has been submitted!"
    );
  };

  const deleteApplication = (id: number) => {
    if (!window.confirm(isAr ? "حذف طلب التقديم؟" : "Delete application?")) {
      return;
    }

    setApplications((previous) =>
      previous.filter((application) => application.id !== id)
    );
  };

  const stats = [
    {
      number: jobs.filter((job) => job.active).length,
      label: isAr ? "وظيفة متاحة" : "Open Positions",
      icon: "💼",
    },
    {
      number: "12+",
      label: isAr ? "قسم متخصص" : "Departments",
      icon: "🏢",
    },
    {
      number: "100%",
      label: isAr ? "بيئة داعمة" : "Supportive Environment",
      icon: "🌱",
    },
    {
      number: "24/7",
      label: isAr ? "روح التعاون" : "Team Spirit",
      icon: "🤝",
    },
  ];

  return (
    <main
      dir={isAr ? "rtl" : "ltr"}
      className="min-h-screen bg-[#f5f9fa] text-[#073b4c]"
    >
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#062f3b] via-[#075568] to-[#0e7490] px-5 py-24 text-white md:py-32">
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/5" />
        <div className="absolute -bottom-32 -left-20 h-96 w-96 rounded-full bg-white/5" />

        <div className="relative mx-auto max-w-7xl">
          <span className="mb-6 inline-flex rounded-full border border-white/30 bg-white/10 px-5 py-2 text-sm">
            {isAr ? "انضم إلى فريق الرواد" : "Join Al Rowad Team"}
          </span>

          <h1 className="mb-6 max-w-3xl text-4xl font-black leading-tight md:text-6xl">
            {isAr
              ? "ابدأ مستقبلك المهني معنا"
              : "Build Your Career With Us"}
          </h1>

          <p className="mb-9 max-w-2xl text-lg leading-9 text-white/80">
            {isAr
              ? "في مدرسة الرواد الحديثة نؤمن أن نجاحنا يبدأ بفريق عمل متميز. اكتشف فرص العمل المتاحة وكن جزءًا من رحلة تعليمية تصنع المستقبل."
              : "At Al Rowad Modern School, we believe our success begins with an outstanding team. Explore our career opportunities and become part of an educational journey."}
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#jobs"
              className="rounded-xl bg-white px-8 py-4 font-bold text-[#075568] transition hover:-translate-y-1 hover:bg-[#e8f5f7]"
            >
              {isAr ? "استكشف الوظائف" : "Explore Jobs"}
            </a>

            <a
              href="#why-us"
              className="rounded-xl border border-white/40 px-8 py-4 font-bold text-white transition hover:bg-white/10"
            >
              {isAr ? "لماذا الرواد؟" : "Why Al Rowad?"}
            </a>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="relative z-10 mx-auto -mt-10 max-w-7xl px-5">
        <div className="grid grid-cols-2 gap-4 rounded-3xl bg-white p-6 shadow-xl md:grid-cols-4 md:p-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="mb-2 text-3xl">{stat.icon}</div>
              <div className="text-3xl font-black text-[#0e7490]">
                {stat.number}
              </div>
              <p className="mt-2 text-sm font-semibold text-gray-500">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* WHY US */}
      <section id="why-us" className="mx-auto max-w-7xl px-5 py-24">
        <div className="mb-14 text-center">
          <span className="font-bold text-[#0e7490]">
            {isAr ? "بيئة العمل" : "OUR CULTURE"}
          </span>

          <h2 className="mt-3 text-3xl font-black md:text-4xl">
            {isAr ? "لماذا تعمل معنا؟" : "Why Work With Us?"}
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-gray-500">
            {isAr
              ? "نوفر بيئة عمل تشجع على الإبداع والتطور المهني والتعاون بين جميع أعضاء الفريق."
              : "We provide an environment that encourages creativity, professional growth and teamwork."}
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: "🚀",
              title: isAr ? "التطوير المستمر" : "Continuous Growth",
              desc: isAr
                ? "فرص للتعلم وتطوير المهارات المهنية."
                : "Opportunities to learn and improve your skills.",
            },
            {
              icon: "🤝",
              title: isAr ? "فريق متعاون" : "Collaborative Team",
              desc: isAr
                ? "نعمل معًا لتحقيق أهداف مشتركة."
                : "We work together to achieve shared goals.",
            },
            {
              icon: "💡",
              title: isAr ? "الإبداع والابتكار" : "Innovation",
              desc: isAr
                ? "نقدر الأفكار الجديدة والحلول المبتكرة."
                : "We value new ideas and creative solutions.",
            },
            {
              icon: "🌟",
              title: isAr ? "التقدير والتميز" : "Recognition",
              desc: isAr
                ? "نقدر مجهودات كل فرد داخل المؤسسة."
                : "We appreciate every team member's contribution.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="rounded-3xl border border-gray-100 bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#e5f4f6] text-3xl">
                {item.icon}
              </div>

              <h3 className="mb-3 text-xl font-black">{item.title}</h3>
              <p className="leading-8 text-gray-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* JOBS */}
      <section id="jobs" className="bg-white px-5 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-wrap items-center justify-between gap-5">
            <div>
              <span className="font-bold text-[#0e7490]">
                {isAr ? "فرص العمل" : "CAREER OPPORTUNITIES"}
              </span>

              <h2 className="mt-3 text-3xl font-black md:text-4xl">
                {isAr ? "الوظائف المتاحة" : "Current Openings"}
              </h2>

              <p className="mt-3 text-gray-500">
                {isAr
                  ? "اختر الوظيفة التي تناسب خبراتك ومهاراتك."
                  : "Find the position that matches your skills."}
              </p>
            </div>

            <div className="rounded-xl bg-[#e5f4f6] px-5 py-3 font-bold text-[#075568]">
              {filteredJobs.length} {isAr ? "وظائف متاحة" : "Available Jobs"}
            </div>
          </div>

          {/* SEARCH AND FILTER */}
          <div className="mb-10 grid gap-4 md:grid-cols-3">
            <div className="md:col-span-2">
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder={
                  isAr
                    ? "ابحث عن وظيفة أو قسم..."
                    : "Search jobs or departments..."
                }
                className="w-full rounded-xl border border-gray-200 bg-[#f8fbfc] px-5 py-4 outline-none transition focus:border-[#0e7490]"
              />
            </div>

            <select
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
              className="rounded-xl border border-gray-200 bg-[#f8fbfc] px-5 py-4 outline-none focus:border-[#0e7490]"
            >
              {departments.map((item) => (
                <option key={item} value={item}>
                  {departmentLabels[item]}
                </option>
              ))}
            </select>
          </div>

          {/* JOB CARDS */}
          {filteredJobs.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredJobs.map((job) => (
                <article
                  key={job.id}
                  className="group flex flex-col rounded-3xl border border-gray-100 bg-[#f9fcfd] p-7 transition hover:-translate-y-2 hover:border-[#0e7490]/30 hover:shadow-xl"
                >
                  <div className="mb-6 flex items-start justify-between gap-3">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#e2f2f5] text-2xl">
                      💼
                    </div>

                    <span className="rounded-full bg-[#e3f4ed] px-4 py-2 text-xs font-bold text-green-700">
                      {isAr ? "متاحة الآن" : "Open"}
                    </span>
                  </div>

                  <span className="mb-3 text-sm font-bold text-[#0e7490]">
                    {departmentLabels[job.department] || job.department}
                  </span>

                  <h3 className="mb-4 text-xl font-black transition group-hover:text-[#0e7490]">
                    {job.title}
                  </h3>

                  <p className="mb-6 line-clamp-3 min-h-[72px] leading-7 text-gray-500">
                    {job.description}
                  </p>

                  <div className="mb-6 space-y-3 border-t border-gray-200 pt-5 text-sm text-gray-600">
                    <div className="flex items-center gap-3">
                      <span>📍</span>
                      <span>{job.location}</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <span>⏰</span>
                      <span>{job.type}</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <span>🎓</span>
                      <span>{job.experience}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => setSelectedJob(job)}
                    className="mt-auto w-full rounded-xl bg-[#075568] px-5 py-4 font-bold text-white transition hover:bg-[#0e7490]"
                  >
                    {isAr ? "عرض التفاصيل والتقديم" : "View Details & Apply"}
                  </button>
                </article>
              ))}
            </div>
          ) : (
            <div className="rounded-3xl bg-[#f5f9fa] px-5 py-16 text-center">
              <div className="mb-4 text-5xl">🔍</div>
              <h3 className="mb-3 text-xl font-black">
                {isAr ? "لا توجد وظائف مطابقة" : "No Matching Jobs"}
              </h3>
              <p className="text-gray-500">
                {isAr
                  ? "جرب البحث بكلمات مختلفة أو اختر قسمًا آخر."
                  : "Try different keywords or another department."}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* APPLICATION PROCESS */}
      <section className="mx-auto max-w-7xl px-5 py-24">
        <div className="mb-14 text-center">
          <span className="font-bold text-[#0e7490]">
            {isAr ? "خطوات التقديم" : "HOW TO APPLY"}
          </span>

          <h2 className="mt-3 text-3xl font-black md:text-4xl">
            {isAr ? "كيف تنضم إلى فريقنا؟" : "How to Join Our Team?"}
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-4">
          {[
            {
              number: "01",
              title: isAr ? "اختر الوظيفة" : "Choose a Job",
              desc: isAr
                ? "استعرض الوظائف واختر المناسبة لك."
                : "Explore and select your preferred role.",
            },
            {
              number: "02",
              title: isAr ? "أرسل طلبك" : "Submit Application",
              desc: isAr
                ? "املأ بياناتك وأرسل طلب التقديم."
                : "Complete and submit your application.",
            },
            {
              number: "03",
              title: isAr ? "مراجعة الطلب" : "Application Review",
              desc: isAr
                ? "يقوم فريقنا بمراجعة بياناتك."
                : "Our team reviews your information.",
            },
            {
              number: "04",
              title: isAr ? "المقابلة الشخصية" : "Interview",
              desc: isAr
                ? "نتواصل مع المرشحين المناسبين."
                : "Selected candidates are contacted.",
            },
          ].map((step, index) => (
            <div
              key={index}
              className="relative rounded-3xl bg-white p-7 shadow-sm"
            >
              <div className="mb-5 text-4xl font-black text-[#0e7490]/30">
                {step.number}
              </div>

              <h3 className="mb-3 text-lg font-black">{step.title}</h3>
              <p className="leading-7 text-gray-500">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="bg-gradient-to-br from-[#062f3b] to-[#0e7490] px-5 py-20 text-center text-white">
        <h2 className="mb-5 text-3xl font-black md:text-4xl">
          {isAr ? "لم تجد الوظيفة المناسبة؟" : "Can't Find the Right Position?"}
        </h2>

        <p className="mx-auto mb-8 max-w-2xl leading-8 text-white/80">
          {isAr
            ? "يسعدنا التعرف على المواهب المتميزة. يمكنك التواصل معنا لمعرفة المزيد عن فرص العمل."
            : "We are always interested in talented people. Contact us to learn more about career opportunities."}
        </p>

        <Link
          href="/contact"
          className="inline-block rounded-xl bg-white px-9 py-4 font-bold text-[#075568] transition hover:-translate-y-1"
        >
          {isAr ? "تواصل معنا" : "Contact Us"}
        </Link>
      </section>

      {/* JOB DETAILS MODAL */}
      {selectedJob && !showApplication && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
          onClick={() => setSelectedJob(null)}
        >
          <div
            className="max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-3xl bg-white p-7 md:p-10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-7 flex items-start justify-between gap-4">
              <div>
                <span className="font-bold text-[#0e7490]">
                  {departmentLabels[selectedJob.department] ||
                    selectedJob.department}
                </span>

                <h2 className="mt-3 text-2xl font-black md:text-3xl">
                  {selectedJob.title}
                </h2>
              </div>

              <button
                onClick={() => setSelectedJob(null)}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gray-100 text-xl hover:bg-gray-200"
                aria-label="Close"
              >
                ×
              </button>
            </div>

            <p className="mb-7 leading-8 text-gray-600">
              {selectedJob.description}
            </p>

            <div className="mb-8 grid gap-4 rounded-2xl bg-[#f5f9fa] p-5 sm:grid-cols-3">
              <div>
                <span className="text-sm text-gray-500">
                  {isAr ? "الموقع" : "Location"}
                </span>
                <p className="mt-2 font-bold">{selectedJob.location}</p>
              </div>

              <div>
                <span className="text-sm text-gray-500">
                  {isAr ? "نوع العمل" : "Job Type"}
                </span>
                <p className="mt-2 font-bold">{selectedJob.type}</p>
              </div>

              <div>
                <span className="text-sm text-gray-500">
                  {isAr ? "الخبرة" : "Experience"}
                </span>
                <p className="mt-2 font-bold">{selectedJob.experience}</p>
              </div>
            </div>

            <div className="mb-7">
              <h3 className="mb-4 text-xl font-black">
                {isAr ? "متطلبات الوظيفة" : "Requirements"}
              </h3>

              <ul className="space-y-3">
                {selectedJob.requirements.map((item, index) => (
                  <li key={index} className="flex gap-3 text-gray-600">
                    <span className="font-bold text-[#0e7490]">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-8">
              <h3 className="mb-4 text-xl font-black">
                {isAr ? "المسؤوليات الوظيفية" : "Responsibilities"}
              </h3>

              <ul className="space-y-3">
                {selectedJob.responsibilities.map((item, index) => (
                  <li key={index} className="flex gap-3 text-gray-600">
                    <span className="font-bold text-[#0e7490]">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={() => setShowApplication(true)}
              className="w-full rounded-xl bg-[#075568] px-6 py-4 font-bold text-white transition hover:bg-[#0e7490]"
            >
              {isAr ? "قدم الآن على الوظيفة" : "Apply Now"}
            </button>
          </div>
        </div>
      )}

      {/* APPLICATION MODAL */}
      {selectedJob && showApplication && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 p-4">
          <form
            onSubmit={submitApplication}
            className="max-h-[90vh] w-full max-w-xl overflow-y-auto rounded-3xl bg-white p-7 md:p-9"
          >
            <div className="mb-7 flex items-center justify-between gap-3">
              <div>
                <h2 className="text-2xl font-black">
                  {isAr ? "طلب التقديم" : "Job Application"}
                </h2>
                <p className="mt-2 text-sm text-[#0e7490]">
                  {selectedJob.title}
                </p>
              </div>

              <button
                type="button"
                onClick={() => setShowApplication(false)}
                className="text-2xl text-gray-500"
              >
                ×
              </button>
            </div>

            <div className="space-y-5">
              <div>
                <label className="mb-2 block font-bold">
                  {isAr ? "الاسم بالكامل" : "Full Name"}
                </label>
                <input
                  required
                  value={applicationForm.name}
                  onChange={(e) =>
                    setApplicationForm({
                      ...applicationForm,
                      name: e.target.value,
                    })
                  }
                  placeholder={isAr ? "اكتب اسمك" : "Your name"}
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-[#0e7490]"
                />
              </div>

              <div>
                <label className="mb-2 block font-bold">
                  {isAr ? "البريد الإلكتروني" : "Email"}
                </label>
                <input
                  required
                  type="email"
                  value={applicationForm.email}
                  onChange={(e) =>
                    setApplicationForm({
                      ...applicationForm,
                      email: e.target.value,
                    })
                  }
                  placeholder="example@email.com"
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-[#0e7490]"
                />
              </div>

              <div>
                <label className="mb-2 block font-bold">
                  {isAr ? "رقم الهاتف" : "Phone Number"}
                </label>
                <input
                  required
                  type="tel"
                  value={applicationForm.phone}
                  onChange={(e) =>
                    setApplicationForm({
                      ...applicationForm,
                      phone: e.target.value,
                    })
                  }
                  placeholder="01xxxxxxxxx"
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-[#0e7490]"
                />
              </div>

              <div>
                <label className="mb-2 block font-bold">
                  {isAr ? "نبذة عنك وخبراتك" : "About You"}
                </label>
                <textarea
                  rows={4}
                  value={applicationForm.message}
                  onChange={(e) =>
                    setApplicationForm({
                      ...applicationForm,
                      message: e.target.value,
                    })
                  }
                  placeholder={
                    isAr
                      ? "اكتب نبذة مختصرة عن خبراتك..."
                      : "Tell us about your experience..."
                  }
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-[#0e7490]"
                />
              </div>
            </div>

            <button
              type="submit"
              className="mt-7 w-full rounded-xl bg-[#075568] px-6 py-4 font-bold text-white transition hover:bg-[#0e7490]"
            >
              {isAr ? "إرسال طلب التقديم" : "Submit Application"}
            </button>
          </form>
        </div>
      )}

      {/* ADMIN PANEL */}
      <section className="mx-auto max-w-7xl px-5 py-16">
        <div className="rounded-3xl border border-gray-200 bg-white p-6 md:p-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <span className="text-sm font-bold text-[#0e7490]">
                {isAr ? "إدارة الوظائف" : "CAREERS MANAGEMENT"}
              </span>

              <h2 className="mt-2 text-2xl font-black">
                {isAr ? "لوحة إدارة التوظيف" : "Recruitment Dashboard"}
              </h2>

              <p className="mt-2 text-sm text-gray-500">
                {isAr
                  ? "إضافة وتعديل وحذف الوظائف ومراجعة طلبات التقديم."
                  : "Add, edit, delete jobs and review applications."}
              </p>
            </div>

            <button
              onClick={() => setShowAdmin(!showAdmin)}
              className="rounded-xl bg-[#075568] px-6 py-3 font-bold text-white hover:bg-[#0e7490]"
            >
              {showAdmin
                ? isAr
                  ? "إخفاء لوحة الإدارة"
                  : "Hide Dashboard"
                : isAr
                  ? "فتح لوحة الإدارة"
                  : "Open Dashboard"}
            </button>
          </div>

          {showAdmin && (
            <div className="mt-8 border-t border-gray-100 pt-8">
              {/* JOB FORM */}
              <div className="mb-10 rounded-2xl bg-[#f5f9fa] p-6">
                <h3 className="mb-6 text-xl font-black">
                  {editingId
                    ? isAr
                      ? "تعديل وظيفة"
                      : "Edit Job"
                    : isAr
                      ? "إضافة وظيفة جديدة"
                      : "Add New Job"}
                </h3>

                <form onSubmit={saveJob} className="space-y-5">
                  <div className="grid gap-5 md:grid-cols-2">
                    <div>
                      <label className="mb-2 block font-bold">
                        {isAr ? "المسمى الوظيفي" : "Job Title"}
                      </label>
                      <input
                        required
                        value={jobForm.title}
                        onChange={(e) =>
                          updateJobField("title", e.target.value)
                        }
                        className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 outline-none focus:border-[#0e7490]"
                        placeholder={
                          isAr ? "مثال: معلم رياضيات" : "Job title"
                        }
                      />
                    </div>

                    <div>
                      <label className="mb-2 block font-bold">
                        {isAr ? "القسم" : "Department"}
                      </label>
                      <select
                        value={jobForm.department}
                        onChange={(e) =>
                          updateJobField("department", e.target.value)
                        }
                        className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 outline-none"
                      >
                        {departments
                          .filter((item) => item !== "all")
                          .map((item) => (
                            <option key={item} value={item}>
                              {departmentLabels[item]}
                            </option>
                          ))}
                      </select>
                    </div>

                    <div>
                      <label className="mb-2 block font-bold">
                        {isAr ? "نوع العمل" : "Job Type"}
                      </label>
                      <select
                        value={jobForm.type}
                        onChange={(e) =>
                          updateJobField("type", e.target.value)
                        }
                        className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 outline-none"
                      >
                        <option value="دوام كامل">
                          {isAr ? "دوام كامل" : "Full Time"}
                        </option>
                        <option value="دوام جزئي">
                          {isAr ? "دوام جزئي" : "Part Time"}
                        </option>
                        <option value="تدريب">
                          {isAr ? "تدريب" : "Internship"}
                        </option>
                      </select>
                    </div>

                    <div>
                      <label className="mb-2 block font-bold">
                        {isAr ? "الموقع" : "Location"}
                      </label>
                      <input
                        required
                        value={jobForm.location}
                        onChange={(e) =>
                          updateJobField("location", e.target.value)
                        }
                        className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 outline-none"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block font-bold">
                        {isAr ? "الخبرة المطلوبة" : "Experience"}
                      </label>
                      <input
                        required
                        value={jobForm.experience}
                        onChange={(e) =>
                          updateJobField("experience", e.target.value)
                        }
                        className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 outline-none"
                        placeholder={
                          isAr ? "مثال: خبرة سنتين" : "e.g. 2 years"
                        }
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block font-bold">
                      {isAr ? "وصف الوظيفة" : "Job Description"}
                    </label>
                    <textarea
                      required
                      rows={3}
                      value={jobForm.description}
                      onChange={(e) =>
                        updateJobField("description", e.target.value)
                      }
                      className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 outline-none"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block font-bold">
                      {isAr
                        ? "متطلبات الوظيفة (كل متطلب في سطر)"
                        : "Requirements (one per line)"}
                    </label>
                    <textarea
                      rows={4}
                      value={requirementsText}
                      onChange={(e) => setRequirementsText(e.target.value)}
                      className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 outline-none"
                      placeholder={
                        isAr
                          ? "مؤهل جامعي مناسب\nخبرة في المجال\nمهارات تواصل"
                          : "Relevant degree\nExperience\nCommunication skills"
                      }
                    />
                  </div>

                  <div>
                    <label className="mb-2 block font-bold">
                      {isAr
                        ? "المسؤوليات (كل مسؤولية في سطر)"
                        : "Responsibilities (one per line)"}
                    </label>
                    <textarea
                      rows={4}
                      value={responsibilitiesText}
                      onChange={(e) =>
                        setResponsibilitiesText(e.target.value)
                      }
                      className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 outline-none"
                    />
                  </div>

                  <label className="flex items-center gap-3 font-bold">
                    <input
                      type="checkbox"
                      checked={jobForm.active}
                      onChange={(e) =>
                        updateJobField("active", e.target.checked)
                      }
                      className="h-5 w-5 accent-[#0e7490]"
                    />
                    {isAr ? "عرض الوظيفة للزوار" : "Publish this job"}
                  </label>

                  <div className="flex flex-wrap gap-3">
                    <button
                      type="submit"
                      className="rounded-xl bg-[#075568] px-7 py-3 font-bold text-white hover:bg-[#0e7490]"
                    >
                      {editingId
                        ? isAr
                          ? "حفظ التعديلات"
                          : "Save Changes"
                        : isAr
                          ? "إضافة الوظيفة"
                          : "Add Job"}
                    </button>

                    {editingId !== null && (
                      <button
                        type="button"
                        onClick={resetJobForm}
                        className="rounded-xl border border-gray-300 px-7 py-3 font-bold text-gray-600"
                      >
                        {isAr ? "إلغاء التعديل" : "Cancel"}
                      </button>
                    )}
                  </div>
                </form>
              </div>

              {/* MANAGE JOBS */}
              <div className="mb-12">
                <h3 className="mb-5 text-xl font-black">
                  {isAr ? "إدارة الوظائف الحالية" : "Manage Jobs"}
                </h3>

                <div className="space-y-4">
                  {jobs.map((job) => (
                    <div
                      key={job.id}
                      className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-gray-200 p-5"
                    >
                      <div>
                        <h4 className="font-black">{job.title}</h4>
                        <p className="mt-2 text-sm text-gray-500">
                          {departmentLabels[job.department] ||
                            job.department}{" "}
                          • {job.location}
                        </p>
                        <span
                          className={`mt-2 inline-block rounded-full px-3 py-1 text-xs font-bold ${
                            job.active
                              ? "bg-green-100 text-green-700"
                              : "bg-gray-100 text-gray-600"
                          }`}
                        >
                          {job.active
                            ? isAr
                              ? "منشورة"
                              : "Published"
                            : isAr
                              ? "مخفية"
                              : "Hidden"}
                        </span>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        <button
                          onClick={() => editJob(job)}
                          className="rounded-lg bg-blue-50 px-4 py-2 text-sm font-bold text-blue-700 hover:bg-blue-100"
                        >
                          {isAr ? "تعديل" : "Edit"}
                        </button>

                        <button
                          onClick={() => deleteJob(job.id)}
                          className="rounded-lg bg-red-50 px-4 py-2 text-sm font-bold text-red-600 hover:bg-red-100"
                        >
                          {isAr ? "حذف" : "Delete"}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* APPLICATIONS */}
              <div>
                <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
                  <h3 className="text-xl font-black">
                    {isAr ? "طلبات التقديم" : "Applications"}
                  </h3>

                  <span className="rounded-xl bg-[#e5f4f6] px-4 py-2 font-bold text-[#075568]">
                    {applications.length}{" "}
                    {isAr ? "طلب تقديم" : "Applications"}
                  </span>
                </div>

                {applications.length > 0 ? (
                  <div className="space-y-4">
                    {applications.map((application) => (
                      <div
                        key={application.id}
                        className="rounded-2xl border border-gray-200 p-5"
                      >
                        <div className="flex flex-wrap items-start justify-between gap-4">
                          <div>
                            <h4 className="font-black">
                              {application.name}
                            </h4>
                            <p className="mt-2 text-sm text-[#0e7490]">
                              {application.jobTitle}
                            </p>
                          </div>

                          <button
                            onClick={() =>
                              deleteApplication(application.id)
                            }
                            className="rounded-lg bg-red-50 px-4 py-2 text-sm font-bold text-red-600"
                          >
                            {isAr ? "حذف الطلب" : "Delete"}
                          </button>
                        </div>

                        <div className="mt-4 grid gap-3 text-sm text-gray-600 md:grid-cols-2">
                          <p>📧 {application.email}</p>
                          <p>📞 {application.phone}</p>
                          <p>
                            📅 {application.date}
                          </p>
                        </div>

                        {application.message && (
                          <p className="mt-4 rounded-xl bg-[#f5f9fa] p-4 leading-7 text-gray-600">
                            {application.message}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="rounded-2xl bg-[#f5f9fa] p-8 text-center text-gray-500">
                    {isAr
                      ? "لا توجد طلبات تقديم حتى الآن."
                      : "No applications yet."}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
