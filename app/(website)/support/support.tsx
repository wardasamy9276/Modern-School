
"use client";

import { useMemo, useState } from "react";
import { useLanguage } from "../../context/LanguageContext";

type Ticket = {
  id: number;
  name: string;
  email: string;
  category: string;
  subject: string;
  message: string;
  priority: string;
  status: "open" | "pending" | "resolved";
  date: string;
};

type FAQ = {
  id: number;
  category: string;
  question: string;
  answer: string;
};

const initialFAQs: FAQ[] = [
  {
    id: 1,
    category: "account",
    question: "كيف يمكنني تسجيل الدخول إلى حسابي؟",
    answer:
      "افتح صفحة تسجيل الدخول، ثم أدخل البريد الإلكتروني وكلمة المرور المسجلين لدى المدرسة. إذا واجهت مشكلة، استخدم خيار استعادة كلمة المرور.",
  },
  {
    id: 2,
    category: "account",
    question: "نسيت كلمة المرور، ماذا أفعل؟",
    answer:
      "اضغط على نسيت كلمة المرور في صفحة تسجيل الدخول، وأدخل بريدك الإلكتروني المسجل. اتبع التعليمات التي تصلك لاستعادة حسابك.",
  },
  {
    id: 3,
    category: "account",
    question: "كيف يمكنني تحديث بيانات حسابي؟",
    answer:
      "يمكنك مراجعة بيانات الملف الشخصي وتحديث المعلومات المتاحة من إعدادات الحساب، أو التواصل مع إدارة المدرسة لتعديل البيانات الأساسية.",
  },
  {
    id: 4,
    category: "student",
    question: "كيف أتابع درجاتي ونتائجي؟",
    answer:
      "بعد تسجيل الدخول إلى حساب الطالب، افتح لوحة التحكم ثم قسم النتائج والتقييمات للاطلاع على الدرجات المتاحة.",
  },
  {
    id: 5,
    category: "student",
    question: "كيف يمكنني معرفة الواجبات المطلوبة؟",
    answer:
      "انتقل إلى قسم الواجبات داخل حساب الطالب، وستجد الواجبات المنشورة وتفاصيل التسليم والمواعيد المحددة.",
  },
  {
    id: 6,
    category: "student",
    question: "كيف أطلع على جدول الحصص؟",
    answer:
      "يمكنك فتح قسم الجدول الدراسي من لوحة الطالب للاطلاع على مواعيد الحصص والمواد الدراسية.",
  },
  {
    id: 7,
    category: "teacher",
    question: "كيف أضيف درسًا جديدًا؟",
    answer:
      "من لوحة المعلم، انتقل إلى المحتوى التعليمي واختر إضافة درس، ثم أدخل عنوان الدرس والوصف والملفات المطلوبة.",
  },
  {
    id: 8,
    category: "teacher",
    question: "كيف أسجل درجات الطلاب؟",
    answer:
      "افتح قسم التقييمات من حساب المعلم، وحدد الفصل والمادة، ثم أدخل الدرجات واحفظ التغييرات.",
  },
  {
    id: 9,
    category: "teacher",
    question: "كيف أتابع حضور الطلاب؟",
    answer:
      "يمكن تسجيل ومراجعة الحضور من قسم الحضور والغياب داخل لوحة المعلم وفق الصلاحيات المتاحة.",
  },
  {
    id: 10,
    category: "elearning",
    question: "كيف أصل إلى الدروس الإلكترونية؟",
    answer:
      "من القائمة الرئيسية، افتح قسم التعليم الإلكتروني، ثم اختر المرحلة والمادة والدرس المطلوب.",
  },
  {
    id: 11,
    category: "elearning",
    question: "الفيديو التعليمي لا يعمل، ما الحل؟",
    answer:
      "تأكد من اتصال الإنترنت، وجرب تحديث الصفحة أو استخدام متصفح حديث. إذا استمرت المشكلة، أرسل تذكرة دعم مع ذكر اسم الدرس والجهاز المستخدم.",
  },
  {
    id: 12,
    category: "elearning",
    question: "هل يمكنني مراجعة الدروس أكثر من مرة؟",
    answer:
      "يمكنك الرجوع إلى المحتوى التعليمي المتاح في حسابك ومراجعته حسب صلاحيات وإعدادات المنصة.",
  },
  {
    id: 13,
    category: "payment",
    question: "كيف أستفسر عن المصروفات الدراسية؟",
    answer:
      "يمكنك التواصل مع قسم الحسابات بالمدرسة من خلال بيانات التواصل الرسمية للاستفسار عن المصروفات وطرق السداد.",
  },
  {
    id: 14,
    category: "payment",
    question: "كيف أحصل على إيصال السداد؟",
    answer:
      "يرجى مراجعة قسم الحسابات أو الإدارة المالية بالمدرسة للحصول على الإيصال المعتمد وتأكيد عملية السداد.",
  },
  {
    id: 15,
    category: "technical",
    question: "الموقع لا يعمل بشكل صحيح، ماذا أفعل؟",
    answer:
      "تأكد من تحديث المتصفح ومسح ذاكرة التخزين المؤقت، وجرب الدخول مرة أخرى. إذا استمرت المشكلة، أرسل تفاصيلها عبر نموذج الدعم.",
  },
  {
    id: 16,
    category: "technical",
    question: "هل يمكن استخدام المنصة من الهاتف؟",
    answer:
      "يمكنك استخدام الموقع من خلال متصفح الهاتف، ويفضل استخدام أحدث إصدار من المتصفح للحصول على أفضل تجربة.",
  },
];

export default function SupportPage() {
  const { language } = useLanguage();
  const isAr = language === "ar";

  const [faqs] = useState(initialFAQs);
  const [activeCategory, setActiveCategory] = useState("all");
  const [search, setSearch] = useState("");
  const [openedFAQ, setOpenedFAQ] = useState<number | null>(1);
  const [showTicketForm, setShowTicketForm] = useState(false);
  const [showTickets, setShowTickets] = useState(false);
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [ticketForm, setTicketForm] = useState({
    name: "",
    email: "",
    category: "technical",
    subject: "",
    message: "",
    priority: "medium",
  });
  const [trackingId, setTrackingId] = useState("");
  const [trackingResult, setTrackingResult] = useState<Ticket | null>(null);
  const [trackingError, setTrackingError] = useState(false);

  const categories = [
    {
      id: "all",
      icon: "📚",
      ar: "كل الأسئلة",
      en: "All Questions",
    },
    {
      id: "account",
      icon: "👤",
      ar: "الحسابات",
      en: "Accounts",
    },
    {
      id: "student",
      icon: "🎓",
      ar: "الطلاب",
      en: "Students",
    },
    {
      id: "teacher",
      icon: "👩‍🏫",
      ar: "المعلمين",
      en: "Teachers",
    },
    {
      id: "elearning",
      icon: "💻",
      ar: "التعليم الإلكتروني",
      en: "E-Learning",
    },
    {
      id: "payment",
      icon: "💳",
      ar: "الحسابات المالية",
      en: "Payments",
    },
    {
      id: "technical",
      icon: "⚙️",
      ar: "مشكلات تقنية",
      en: "Technical Issues",
    },
  ];

  const categoryNames: Record<string, { ar: string; en: string }> = {
    account: { ar: "الحسابات", en: "Accounts" },
    student: { ar: "الطلاب", en: "Students" },
    teacher: { ar: "المعلمين", en: "Teachers" },
    elearning: { ar: "التعليم الإلكتروني", en: "E-Learning" },
    payment: { ar: "الحسابات المالية", en: "Payments" },
    technical: { ar: "مشكلات تقنية", en: "Technical Issues" },
  };

  const filteredFAQs = useMemo(() => {
    return faqs.filter((faq) => {
      const matchesCategory =
        activeCategory === "all" || faq.category === activeCategory;

      const matchesSearch =
        faq.question.toLowerCase().includes(search.toLowerCase()) ||
        faq.answer.toLowerCase().includes(search.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [faqs, activeCategory, search]);

  const createTicket = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newTicket: Ticket = {
      ...ticketForm,
      id: Date.now(),
      status: "open",
      date: new Date().toLocaleDateString(
        isAr ? "ar-EG" : "en-US"
      ),
    };

    setTickets((previous) => [newTicket, ...previous]);

    setTicketForm({
      name: "",
      email: "",
      category: "technical",
      subject: "",
      message: "",
      priority: "medium",
    });

    setShowTicketForm(false);
    setTrackingId(String(newTicket.id));

    alert(
      isAr
        ? `تم تسجيل طلبك بنجاح. رقم التذكرة: ${newTicket.id}`
        : `Your ticket was submitted. Ticket ID: ${newTicket.id}`
    );
  };

  const trackTicket = () => {
    const result = tickets.find(
      (ticket) => String(ticket.id) === trackingId.trim()
    );

    setTrackingResult(result || null);
    setTrackingError(!result);
  };

  const statusText = (status: Ticket["status"]) => {
    if (isAr) {
      return status === "open"
        ? "جديد"
        : status === "pending"
          ? "قيد المراجعة"
          : "تم الحل";
    }

    return status === "open"
      ? "New"
      : status === "pending"
        ? "In Progress"
        : "Resolved";
  };

  const priorityText = (priority: string) => {
    if (isAr) {
      return priority === "high"
        ? "عالية"
        : priority === "low"
          ? "منخفضة"
          : "متوسطة";
    }

    return priority === "high"
      ? "High"
      : priority === "low"
        ? "Low"
        : "Medium";
  };

  return (
    <main
      dir={isAr ? "rtl" : "ltr"}
      className="min-h-screen bg-[#f5f9fa] text-[#073b4c]"
    >
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#062f3b] via-[#075568] to-[#0e7490] px-5 py-24 text-white md:py-32">
        <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-white/5" />
        <div className="absolute -bottom-32 -left-20 h-96 w-96 rounded-full bg-white/5" />

        <div className="relative mx-auto max-w-7xl">
          <span className="inline-flex rounded-full border border-white/30 bg-white/10 px-5 py-2 text-sm">
            {isAr ? "مركز المساعدة والدعم" : "HELP & SUPPORT CENTER"}
          </span>

          <h1 className="mt-7 max-w-3xl text-4xl font-black leading-tight md:text-6xl">
            {isAr
              ? "كيف يمكننا مساعدتك اليوم؟"
              : "How Can We Help You Today?"}
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-9 text-white/80">
            {isAr
              ? "نحن هنا لمساعدتك في الوصول إلى أفضل تجربة تعليمية. ابحث عن إجابة أو أرسل طلبًا لفريق الدعم الفني."
              : "We are here to help you get the best learning experience. Find answers or contact our support team."}
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#faq"
              className="rounded-xl bg-white px-8 py-4 font-bold text-[#075568] transition hover:-translate-y-1"
            >
              {isAr ? "تصفح الأسئلة الشائعة" : "Browse FAQs"}
            </a>

            <button
              onClick={() => setShowTicketForm(true)}
              className="rounded-xl border border-white/40 px-8 py-4 font-bold text-white transition hover:bg-white/10"
            >
              {isAr ? "إرسال طلب دعم" : "Submit a Ticket"}
            </button>
          </div>

          <div className="mt-12 grid max-w-2xl grid-cols-2 gap-4 md:grid-cols-3">
            {[
              {
                icon: "💬",
                value: "FAQ",
                label: isAr ? "إجابات سريعة" : "Quick Answers",
              },
              {
                icon: "🎫",
                value: "Support",
                label: isAr ? "تذاكر الدعم" : "Support Tickets",
              },
              {
                icon: "🤝",
                value: "Help",
                label: isAr ? "مساعدة مستمرة" : "Helpful Service",
              },
            ].map((item) => (
              <div
                key={item.value}
                className="rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-sm"
              >
                <div className="text-2xl">{item.icon}</div>
                <div className="mt-2 font-black">{item.value}</div>
                <div className="mt-1 text-sm text-white/70">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUICK HELP */}
      <section className="relative z-10 mx-auto -mt-8 max-w-7xl px-5">
        <div className="grid gap-4 rounded-3xl bg-white p-6 shadow-xl md:grid-cols-3 md:p-8">
          {[
            {
              icon: "🔍",
              title: isAr ? "ابحث عن إجابة" : "Find an Answer",
              desc: isAr
                ? "ابحث داخل الأسئلة الشائعة."
                : "Search our frequently asked questions.",
              action: () =>
                document.getElementById("faq")?.scrollIntoView({
                  behavior: "smooth",
                }),
              label: isAr ? "ابدأ البحث" : "Start Searching",
            },
            {
              icon: "🎫",
              title: isAr ? "أنشئ تذكرة" : "Create a Ticket",
              desc: isAr
                ? "أرسل مشكلتك إلى فريق الدعم."
                : "Send your issue to our support team.",
              action: () => setShowTicketForm(true),
              label: isAr ? "إرسال طلب" : "Submit Request",
            },
            {
              icon: "📋",
              title: isAr ? "تابع طلبك" : "Track Your Ticket",
              desc: isAr
                ? "اعرف حالة طلب الدعم الخاص بك."
                : "Check the status of your support request.",
              action: () => setShowTickets(true),
              label: isAr ? "متابعة الطلب" : "Track Request",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl bg-[#f5f9fa] p-6 transition hover:bg-[#eaf5f7]"
            >
              <div className="text-3xl">{item.icon}</div>
              <h3 className="mt-4 text-xl font-black">{item.title}</h3>
              <p className="mt-2 leading-7 text-gray-500">{item.desc}</p>
              <button
                onClick={item.action}
                className="mt-5 font-bold text-[#0e7490] hover:underline"
              >
                {item.label} ←
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-7xl px-5 py-24">
        <div className="mb-12 text-center">
          <span className="font-bold text-[#0e7490]">
            {isAr ? "مركز المعرفة" : "KNOWLEDGE CENTER"}
          </span>

          <h2 className="mt-3 text-3xl font-black md:text-4xl">
            {isAr ? "الأسئلة الشائعة" : "Frequently Asked Questions"}
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-8 text-gray-500">
            {isAr
              ? "ستجد هنا إجابات لأكثر الأسئلة شيوعًا حول استخدام منصة المدرسة وخدماتها."
              : "Find answers to common questions about the school platform and its services."}
          </p>
        </div>

        {/* SEARCH */}
        <div className="mx-auto mb-9 max-w-3xl">
          <div className="flex items-center gap-3 rounded-2xl border border-gray-200 bg-white px-5 py-4 shadow-sm focus-within:border-[#0e7490]">
            <span className="text-xl">🔍</span>
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder={
                isAr
                  ? "اكتب سؤالك أو ابحث عن مشكلة..."
                  : "Search for a question or issue..."
              }
              className="w-full bg-transparent outline-none"
            />
            {search && (
              <button
                onClick={() => setSearch("")}
                className="text-gray-400 hover:text-gray-700"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* CATEGORIES */}
        <div className="mb-10 flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => {
                setActiveCategory(category.id);
                setOpenedFAQ(null);
              }}
              className={`rounded-xl px-5 py-3 text-sm font-bold transition ${
                activeCategory === category.id
                  ? "bg-[#075568] text-white shadow-lg"
                  : "border border-gray-200 bg-white text-gray-600 hover:border-[#0e7490] hover:text-[#0e7490]"
              }`}
            >
              <span className="me-2">{category.icon}</span>
              {isAr ? category.ar : category.en}
            </button>
          ))}
        </div>

        {/* QUESTIONS */}
        <div className="mx-auto max-w-4xl space-y-4">
          {filteredFAQs.length > 0 ? (
            filteredFAQs.map((faq) => {
              const isOpen = openedFAQ === faq.id;

              return (
                <div
                  key={faq.id}
                  className={`overflow-hidden rounded-2xl border bg-white transition ${
                    isOpen
                      ? "border-[#0e7490]/40 shadow-lg"
                      : "border-gray-100 shadow-sm"
                  }`}
                >
                  <button
                    onClick={() =>
                      setOpenedFAQ(isOpen ? null : faq.id)
                    }
                    className="flex w-full items-center justify-between gap-4 p-6 text-start"
                  >
                    <div>
                      <span className="mb-2 block text-xs font-bold text-[#0e7490]">
                        {categoryNames[faq.category]?.[
                          isAr ? "ar" : "en"
                        ]}
                      </span>
                      <h3 className="text-base font-black leading-7 md:text-lg">
                        {faq.question}
                      </h3>
                    </div>

                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xl transition ${
                        isOpen
                          ? "rotate-45 bg-[#075568] text-white"
                          : "bg-[#e5f4f6] text-[#075568]"
                      }`}
                    >
                      +
                    </span>
                  </button>

                  {isOpen && (
                    <div className="border-t border-gray-100 bg-[#f9fcfd] px-6 py-6">
                      <p className="leading-9 text-gray-600">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="rounded-2xl bg-white p-12 text-center">
              <div className="text-5xl">🔎</div>
              <h3 className="mt-4 text-xl font-black">
                {isAr ? "لم نعثر على نتائج" : "No Results Found"}
              </h3>
              <p className="mt-2 text-gray-500">
                {isAr
                  ? "جرب البحث بكلمات أخرى أو اختر تصنيفًا مختلفًا."
                  : "Try different keywords or another category."}
              </p>
              <button
                onClick={() => {
                  setSearch("");
                  setActiveCategory("all");
                }}
                className="mt-5 font-bold text-[#0e7490]"
              >
                {isAr ? "عرض كل الأسئلة" : "Show All Questions"}
              </button>
            </div>
          )}
        </div>
      </section>

      {/* SUPPORT TICKET CTA */}
      <section className="bg-[#eaf5f7] px-5 py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-2">
          <div>
            <span className="font-bold text-[#0e7490]">
              {isAr ? "نحن هنا لمساعدتك" : "WE ARE HERE TO HELP"}
            </span>

            <h2 className="mt-4 text-3xl font-black leading-tight md:text-4xl">
              {isAr
                ? "لم تجد الحل الذي تبحث عنه؟"
                : "Still Need More Help?"}
            </h2>

            <p className="mt-5 leading-9 text-gray-600">
              {isAr
                ? "إذا لم تجد إجابة لسؤالك، يمكنك إرسال طلب إلى فريق الدعم الفني وسنساعدك في تحديد المشكلة ومتابعتها."
                : "If you couldn't find the answer, submit a request to our support team so your issue can be reviewed."}
            </p>

            <button
              onClick={() => setShowTicketForm(true)}
              className="mt-8 rounded-xl bg-[#075568] px-8 py-4 font-bold text-white transition hover:bg-[#0e7490]"
            >
              {isAr ? "إنشاء تذكرة دعم جديدة" : "Create Support Ticket"}
            </button>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-sm md:p-12">
            <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-[#e5f4f6] text-4xl">
              🎧
            </div>

            <h3 className="text-2xl font-black">
              {isAr ? "فريق الدعم الفني" : "Technical Support Team"}
            </h3>

            <p className="mt-4 leading-8 text-gray-500">
              {isAr
                ? "أرسل تفاصيل المشكلة بوضوح، مع تحديد القسم المتأثر، حتى يتمكن فريق الدعم من فهم طلبك."
                : "Describe your issue clearly and select the affected service so the support team can review your request."}
            </p>

            <div className="mt-7 space-y-4">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#e5f4f6]">
                  📩
                </span>
                <span className="font-semibold">
                  {isAr ? "إرسال طلب دعم إلكتروني" : "Online Support Request"}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#e5f4f6]">
                  📋
                </span>
                <span className="font-semibold">
                  {isAr ? "متابعة حالة الطلب" : "Ticket Status Tracking"}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#e5f4f6]">
                  🔐
                </span>
                <span className="font-semibold">
                  {isAr ? "تسجيل تفاصيل المشكلة" : "Issue Details"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT OPTIONS */}
      <section className="mx-auto max-w-7xl px-5 py-24">
        <div className="mb-12 text-center">
          <span className="font-bold text-[#0e7490]">
            {isAr ? "طرق التواصل" : "CONTACT OPTIONS"}
          </span>
          <h2 className="mt-3 text-3xl font-black">
            {isAr ? "تواصل مع المدرسة" : "Contact the School"}
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {[
            {
              icon: "📍",
              title: isAr ? "موقع المدرسة" : "School Location",
              desc: isAr
                ? "6 أكتوبر - الجيزة"
                : "6th of October - Giza",
            },
            {
              icon: "📞",
              title: isAr ? "التواصل الهاتفي" : "Phone Support",
              desc: isAr
                ? "تواصل مع الإدارة عبر بيانات الاتصال الرسمية."
                : "Contact the administration using official contact details.",
            },
            {
              icon: "✉️",
              title: isAr ? "البريد الإلكتروني" : "Email Support",
              desc: isAr
                ? "يمكنك مراسلة المدرسة عبر البريد الرسمي."
                : "Contact the school through its official email.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-gray-100 bg-white p-8 text-center shadow-sm"
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#e5f4f6] text-3xl">
                {item.icon}
              </div>
              <h3 className="mt-5 text-xl font-black">{item.title}</h3>
              <p className="mt-3 leading-7 text-gray-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TICKET FORM MODAL */}
      {showTicketForm && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4">
          <form
            onSubmit={createTicket}
            className="max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-3xl bg-white p-7 md:p-9"
          >
            <div className="mb-7 flex items-start justify-between gap-4">
              <div>
                <span className="font-bold text-[#0e7490]">
                  {isAr ? "مركز الدعم الفني" : "SUPPORT CENTER"}
                </span>
                <h2 className="mt-2 text-2xl font-black">
                  {isAr ? "إنشاء تذكرة دعم جديدة" : "Create New Ticket"}
                </h2>
                <p className="mt-2 text-sm text-gray-500">
                  {isAr
                    ? "املأ البيانات التالية لتسجيل مشكلتك."
                    : "Complete the form to submit your issue."}
                </p>
              </div>

              <button
                type="button"
                onClick={() => setShowTicketForm(false)}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-xl"
              >
                ×
              </button>
            </div>

            <div className="space-y-5">
              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-2 block font-bold">
                    {isAr ? "الاسم بالكامل" : "Full Name"}
                  </label>
                  <input
                    required
                    value={ticketForm.name}
                    onChange={(e) =>
                      setTicketForm({
                        ...ticketForm,
                        name: e.target.value,
                      })
                    }
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-[#0e7490]"
                    placeholder={isAr ? "اسمك" : "Your name"}
                  />
                </div>

                <div>
                  <label className="mb-2 block font-bold">
                    {isAr ? "البريد الإلكتروني" : "Email Address"}
                  </label>
                  <input
                    required
                    type="email"
                    value={ticketForm.email}
                    onChange={(e) =>
                      setTicketForm({
                        ...ticketForm,
                        email: e.target.value,
                      })
                    }
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-[#0e7490]"
                    placeholder="example@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block font-bold">
                  {isAr ? "نوع المشكلة" : "Issue Category"}
                </label>
                <select
                  value={ticketForm.category}
                  onChange={(e) =>
                    setTicketForm({
                      ...ticketForm,
                      category: e.target.value,
                    })
                  }
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-[#0e7490]"
                >
                  {categories
                    .filter((category) => category.id !== "all")
                    .map((category) => (
                      <option key={category.id} value={category.id}>
                        {isAr ? category.ar : category.en}
                      </option>
                    ))}
                </select>
              </div>

              <div>
                <label className="mb-2 block font-bold">
                  {isAr ? "عنوان المشكلة" : "Issue Subject"}
                </label>
                <input
                  required
                  value={ticketForm.subject}
                  onChange={(e) =>
                    setTicketForm({
                      ...ticketForm,
                      subject: e.target.value,
                    })
                  }
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-[#0e7490]"
                  placeholder={
                    isAr ? "اكتب عنوانًا مختصرًا" : "Brief issue title"
                  }
                />
              </div>

              <div>
                <label className="mb-2 block font-bold">
                  {isAr ? "درجة الأولوية" : "Priority"}
                </label>
                <select
                  value={ticketForm.priority}
                  onChange={(e) =>
                    setTicketForm({
                      ...ticketForm,
                      priority: e.target.value,
                    })
                  }
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-[#0e7490]"
                >
                  <option value="low">
                    {isAr ? "منخفضة" : "Low"}
                  </option>
                  <option value="medium">
                    {isAr ? "متوسطة" : "Medium"}
                  </option>
                  <option value="high">
                    {isAr ? "عالية" : "High"}
                  </option>
                </select>
              </div>

              <div>
                <label className="mb-2 block font-bold">
                  {isAr ? "تفاصيل المشكلة" : "Issue Details"}
                </label>
                <textarea
                  required
                  rows={5}
                  value={ticketForm.message}
                  onChange={(e) =>
                    setTicketForm({
                      ...ticketForm,
                      message: e.target.value,
                    })
                  }
                  className="w-full resize-y rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-[#0e7490]"
                  placeholder={
                    isAr
                      ? "اشرح المشكلة والخطوات التي أدت إليها..."
                      : "Describe the issue and how it happened..."
                  }
                />
              </div>
            </div>

            <button
              type="submit"
              className="mt-7 w-full rounded-xl bg-[#075568] px-6 py-4 font-bold text-white transition hover:bg-[#0e7490]"
            >
              {isAr ? "إرسال تذكرة الدعم" : "Submit Support Ticket"}
            </button>
          </form>
        </div>
      )}

      {/* TRACK TICKET MODAL */}
      {showTickets && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4">
          <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl bg-white p-7 md:p-9">
            <div className="mb-7 flex items-center justify-between gap-4">
              <div>
                <span className="font-bold text-[#0e7490]">
                  {isAr ? "متابعة الطلبات" : "TICKET TRACKING"}
                </span>
                <h2 className="mt-2 text-2xl font-black">
                  {isAr ? "متابعة تذكرة الدعم" : "Track Your Ticket"}
                </h2>
              </div>

              <button
                onClick={() => {
                  setShowTickets(false);
                  setTrackingResult(null);
                  setTrackingError(false);
                }}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-xl"
              >
                ×
              </button>
            </div>

            <label className="mb-2 block font-bold">
              {isAr ? "رقم التذكرة" : "Ticket ID"}
            </label>

            <div className="flex flex-col gap-3 sm:flex-row">
              <input
                value={trackingId}
                onChange={(e) => {
                  setTrackingId(e.target.value);
                  setTrackingError(false);
                }}
                placeholder={isAr ? "أدخل رقم التذكرة" : "Enter ticket ID"}
                className="min-w-0 flex-1 rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-[#0e7490]"
              />

              <button
                onClick={trackTicket}
                className="rounded-xl bg-[#075568] px-7 py-3 font-bold text-white hover:bg-[#0e7490]"
              >
                {isAr ? "بحث" : "Search"}
              </button>
            </div>

            {trackingError && (
              <p className="mt-4 rounded-xl bg-red-50 p-4 text-sm font-semibold text-red-600">
                {isAr
                  ? "لم يتم العثور على تذكرة بهذا الرقم في هذا المتصفح."
                  : "No ticket with this ID was found in this browser."}
              </p>
            )}

            {trackingResult && (
              <div className="mt-7 rounded-2xl border border-gray-100 bg-[#f5f9fa] p-6">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h3 className="text-lg font-black">
                    {trackingResult.subject}
                  </h3>

                  <span className="rounded-full bg-[#dff2f5] px-4 py-2 text-sm font-bold text-[#075568]">
                    {statusText(trackingResult.status)}
                  </span>
                </div>

                <div className="mt-5 space-y-3 text-sm text-gray-600">
                  <p>
                    <strong>{isAr ? "رقم التذكرة: " : "Ticket ID: "}</strong>
                    {trackingResult.id}
                  </p>
                  <p>
                    <strong>{isAr ? "الاسم: " : "Name: "}</strong>
                    {trackingResult.name}
                  </p>
                  <p>
                    <strong>{isAr ? "تاريخ الإرسال: " : "Date: "}</strong>
                    {trackingResult.date}
                  </p>
                  <p>
                    <strong>{isAr ? "الأولوية: " : "Priority: "}</strong>
                    {priorityText(trackingResult.priority)}
                  </p>
                  <p className="leading-8">
                    <strong>{isAr ? "التفاصيل: " : "Details: "}</strong>
                    {trackingResult.message}
                  </p>
                </div>
              </div>
            )}

            <div className="mt-8 border-t border-gray-100 pt-6">
              <h3 className="mb-4 font-black">
                {isAr ? "تذاكر هذا المتصفح" : "Tickets in This Browser"}
              </h3>

              {tickets.length > 0 ? (
                <div className="space-y-3">
                  {tickets.map((ticket) => (
                    <button
                      key={ticket.id}
                      onClick={() => {
                        setTrackingId(String(ticket.id));
                        setTrackingResult(ticket);
                        setTrackingError(false);
                      }}
                      className="flex w-full flex-wrap items-center justify-between gap-3 rounded-xl border border-gray-200 p-4 text-start hover:border-[#0e7490]"
                    >
                      <div>
                        <p className="font-bold">{ticket.subject}</p>
                        <p className="mt-1 text-xs text-gray-500">
                          #{ticket.id}
                        </p>
                      </div>

                      <span className="text-sm font-bold text-[#0e7490]">
                        {statusText(ticket.status)}
                      </span>
                    </button>
                  ))}
                </div>
              ) : (
                <p className="rounded-xl bg-[#f5f9fa] p-5 text-center text-sm text-gray-500">
                  {isAr
                    ? "لم يتم إنشاء أي تذاكر بعد."
                    : "No tickets have been created yet."}
                </p>
              )}
            </div>
          </div>
        </div>
      )}

      {/* FINAL CTA */}
      <section className="bg-gradient-to-br from-[#062f3b] to-[#075568] px-5 py-16 text-center text-white">
        <div className="mx-auto max-w-3xl">
          <div className="text-4xl">💙</div>

          <h2 className="mt-5 text-3xl font-black">
            {isAr
              ? "نجاح تجربتك التعليمية يهمنا"
              : "Your Learning Experience Matters"}
          </h2>

          <p className="mt-4 leading-8 text-white/75">
            {isAr
              ? "فريق مدرسة الرواد الحديثة يسعى دائمًا لتقديم تجربة تعليمية رقمية سهلة ومتميزة."
              : "Al Rowad Modern School is committed to providing an easy and outstanding digital learning experience."}
          </p>

          <button
            onClick={() => setShowTicketForm(true)}
            className="mt-7 rounded-xl bg-white px-9 py-4 font-bold text-[#075568] transition hover:-translate-y-1"
          >
            {isAr ? "تواصل مع الدعم الفني" : "Contact Support"}
          </button>
        </div>
      </section>
    </main>
  );
}
