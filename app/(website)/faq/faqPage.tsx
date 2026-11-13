
"use client";

import { useEffect, useMemo, useState, type FormEvent } from "react";
import { useLanguage } from "../../context/LanguageContext";

type FAQCategory =
  | "admission"
  | "academic"
  | "fees"
  | "activities"
  | "technology"
  | "parents";

type FAQItem = {
  id: number;
  questionAr: string;
  questionEn: string;
  answerAr: string;
  answerEn: string;
  category: FAQCategory;
  popular?: boolean;
};

const initialFAQs: FAQItem[] = [
  {
    id: 1,
    questionAr: "ما هي خطوات التقديم والالتحاق بالمدرسة؟",
    questionEn: "What are the steps to apply and enroll?",
    answerAr: "تبدأ خطوات التقديم بالتواصل مع قسم القبول والتسجيل، ثم تقديم طلب الالتحاق واستكمال المستندات المطلوبة، يلي ذلك مراجعة الطلب وتحديد موعد المقابلة أو التقييم عند الحاجة، ثم إخطار ولي الأمر بنتيجة القبول واستكمال إجراءات التسجيل.",
    answerEn: "The application process starts by contacting the Admissions Department, submitting an application and the required documents. The school then reviews the application and may schedule an interview or assessment before notifying parents of the admission decision.",
    category: "admission",
    popular: true,
  },
  {
    id: 2,
    questionAr: "ما المستندات المطلوبة للتقديم؟",
    questionEn: "What documents are required for admission?",
    answerAr: "تشمل المستندات عادةً شهادة الميلاد، وصورًا شخصية حديثة للطالب، وصورة بطاقة ولي الأمر، وملف الطالب الدراسي أو بيان النجاح عند الحاجة. يرجى التواصل مع إدارة القبول للتأكد من المستندات المطلوبة لكل مرحلة.",
    answerEn: "Required documents usually include a birth certificate, recent student photos, a parent ID copy and previous school records when applicable. Please contact Admissions to confirm the requirements for each grade.",
    category: "admission",
    popular: true,
  },
  {
    id: 3,
    questionAr: "هل يمكن زيارة المدرسة قبل التسجيل؟",
    questionEn: "Can parents visit the school before enrollment?",
    answerAr: "نعم، يمكن لولي الأمر التواصل مع المدرسة لتحديد موعد زيارة والتعرف على الفصول والمرافق التعليمية والأنشطة والخدمات المتاحة.",
    answerEn: "Yes. Parents can contact the school to arrange a visit and explore classrooms, educational facilities, activities and available services.",
    category: "admission",
  },
  {
    id: 4,
    questionAr: "ما المراحل التعليمية المتاحة؟",
    questionEn: "Which educational stages are available?",
    answerAr: "تعتمد المراحل المتاحة على الهيكل التعليمي المعتمد للمدرسة. يمكن التواصل مع إدارة القبول لمعرفة الصفوف والمراحل التي يستقبلها التقديم خلال العام الدراسي.",
    answerEn: "Available stages depend on the school's approved educational structure. Contact Admissions for the grades and stages accepting applications during the academic year.",
    category: "admission",
  },
  {
    id: 5,
    questionAr: "كيف يمكن معرفة نتيجة طلب التقديم؟",
    questionEn: "How can I check my application status?",
    answerAr: "يمكن متابعة طلب التقديم من خلال التواصل مع قسم القبول والتسجيل باستخدام بيانات الطالب ووسائل التواصل التي تم تسجيلها عند تقديم الطلب.",
    answerEn: "You can follow up on your application by contacting the Admissions Department using the student's details and the contact information provided in the application.",
    category: "admission",
  },
  {
    id: 6,
    questionAr: "كيف يتم تنظيم اليوم الدراسي؟",
    questionEn: "How is the school day organized?",
    answerAr: "يتم تنظيم اليوم الدراسي وفق جدول زمني يشمل الحصص الأكاديمية وفترات الراحة والأنشطة التعليمية، مع مراعاة المرحلة الدراسية واحتياجات الطلاب.",
    answerEn: "The school day follows a timetable that includes academic lessons, breaks and educational activities, taking students' grade levels and needs into account.",
    category: "academic",
    popular: true,
  },
  {
    id: 7,
    questionAr: "كيف يمكن معرفة جدول الحصص؟",
    questionEn: "How can students access their class timetable?",
    answerAr: "يمكن الحصول على جدول الحصص من خلال إدارة المرحلة أو القنوات الرسمية التي تعتمدها المدرسة لإعلان الجداول والتحديثات.",
    answerEn: "Students can obtain their timetable from their stage administration or through the official school channels used to publish schedules and updates.",
    category: "academic",
  },
  {
    id: 8,
    questionAr: "كيف يتم تقييم مستوى الطلاب؟",
    questionEn: "How are students assessed?",
    answerAr: "يعتمد التقييم على مجموعة من الأدوات التي قد تشمل الاختبارات الدورية والأنشطة الصفية والواجبات والمشروعات ومتابعة المشاركة والتقدم الدراسي.",
    answerEn: "Assessment may include periodic tests, classroom activities, assignments, projects, participation and ongoing monitoring of academic progress.",
    category: "academic",
  },
  {
    id: 9,
    questionAr: "هل توفر المدرسة مراجعات قبل الامتحانات؟",
    questionEn: "Does the school provide revision before exams?",
    answerAr: "يمكن للمعلمين تنظيم مراجعات وأنشطة تدريبية وفق الخطة الدراسية وجداول التقييم، ويتم إعلان مواعيدها من خلال القنوات الرسمية للمدرسة.",
    answerEn: "Teachers may organize revision sessions and practice activities according to the academic plan and assessment schedule. Dates are announced through official school channels.",
    category: "academic",
  },
  {
    id: 10,
    questionAr: "كيف يمكن الحصول على نتائج الامتحانات؟",
    questionEn: "How can parents access exam results?",
    answerAr: "يتم إعلان النتائج من خلال القنوات الرسمية التي تحددها المدرسة، ويمكن لولي الأمر التواصل مع إدارة المرحلة للاستفسار عن النتيجة أو متابعة مستوى الطالب.",
    answerEn: "Results are announced through the school's official channels. Parents can contact the relevant stage administration for inquiries or progress updates.",
    category: "academic",
    popular: true,
  },
  {
    id: 11,
    questionAr: "كيف يمكن معرفة المصروفات الدراسية؟",
    questionEn: "How can I find out about tuition fees?",
    answerAr: "يمكن معرفة تفاصيل المصروفات الدراسية من خلال التواصل مع الإدارة المالية أو قسم القبول، حيث يتم توضيح الرسوم المعتمدة للمرحلة الدراسية والخدمات المرتبطة بها.",
    answerEn: "Please contact the Finance or Admissions Department for the approved tuition fees for each educational stage and any related services.",
    category: "fees",
    popular: true,
  },
  {
    id: 12,
    questionAr: "هل توجد أنظمة لتقسيط المصروفات؟",
    questionEn: "Are installment payment plans available?",
    answerAr: "يمكن الاستفسار من الإدارة المالية عن طرق السداد المتاحة وإمكانية التقسيط وفق سياسة المدرسة المعتمدة.",
    answerEn: "Contact the Finance Department to ask about available payment methods and whether installment plans are offered under school policy.",
    category: "fees",
  },
  {
    id: 13,
    questionAr: "ما طرق سداد المصروفات؟",
    questionEn: "What payment methods are available?",
    answerAr: "تحدد الإدارة المالية طرق السداد المعتمدة، ويمكن لولي الأمر التواصل معها لمعرفة التفاصيل وإجراءات إثبات الدفع.",
    answerEn: "The Finance Department determines the accepted payment methods. Parents can contact the department for details and payment confirmation procedures.",
    category: "fees",
  },
  {
    id: 14,
    questionAr: "هل توجد رسوم إضافية للخدمات والأنشطة؟",
    questionEn: "Are there additional fees for services and activities?",
    answerAr: "قد تختلف الرسوم بحسب الخدمات أو الأنشطة المقدمة. يُنصح بمراجعة الإدارة المالية للحصول على بيان واضح بأي رسوم إضافية قبل الاشتراك.",
    answerEn: "Additional charges may vary depending on the services or activities offered. Please check with the Finance Department for a clear breakdown before enrolling.",
    category: "fees",
  },
  {
    id: 15,
    questionAr: "ما الأنشطة التي يمكن للطلاب المشاركة فيها؟",
    questionEn: "What activities can students participate in?",
    answerAr: "تشمل الأنشطة المدرسية مجالات متنوعة مثل الرياضة والفنون والقراءة والعلوم والتكنولوجيا والمسابقات والفعاليات الثقافية، وفق البرنامج المتاح لكل مرحلة.",
    answerEn: "School activities may include sports, arts, reading, science, technology, competitions and cultural events, depending on each stage's program.",
    category: "activities",
    popular: true,
  },
  {
    id: 16,
    questionAr: "هل تنظم المدرسة رحلات تعليمية؟",
    questionEn: "Does the school organize educational trips?",
    answerAr: "يمكن تنظيم رحلات تعليمية وترفيهية مرتبطة بالمناهج والأنشطة المدرسية، ويتم إعلان التفاصيل ومواعيد الرحلات ومتطلبات المشاركة مسبقًا.",
    answerEn: "Educational and recreational trips may be organized in connection with the curriculum and school activities. Details, dates and participation requirements are announced in advance.",
    category: "activities",
  },
  {
    id: 17,
    questionAr: "كيف يمكن للطالب الاشتراك في المسابقات؟",
    questionEn: "How can students join competitions?",
    answerAr: "يمكن للطلاب متابعة إعلانات المسابقات من خلال المعلمين وإدارة الأنشطة، ثم التسجيل وفق الشروط والمواعيد المحددة لكل مسابقة.",
    answerEn: "Students can follow competition announcements through teachers and the Activities Department, then register according to each competition's requirements and deadlines.",
    category: "activities",
  },
  {
    id: 18,
    questionAr: "هل توجد أنشطة لتنمية المواهب؟",
    questionEn: "Are there activities to develop students' talents?",
    answerAr: "تشجع المدرسة اكتشاف مواهب الطلاب وتنميتها من خلال الأنشطة والمشروعات والمسابقات والمشاركة في الفعاليات المناسبة لقدراتهم واهتماماتهم.",
    answerEn: "The school encourages students to discover and develop their talents through activities, projects, competitions and events suited to their abilities and interests.",
    category: "activities",
  },
  {
    id: 19,
    questionAr: "هل توفر المدرسة منصة تعليم إلكتروني؟",
    questionEn: "Does the school provide an e-learning platform?",
    answerAr: "يمكن استخدام المنصات والأدوات الرقمية التي تعتمدها المدرسة لدعم العملية التعليمية، والوصول إلى المحتوى والموارد التعليمية وفق صلاحيات المستخدم.",
    answerEn: "The school may use approved digital platforms and tools to support learning and provide access to educational content and resources according to user permissions.",
    category: "technology",
    popular: true,
  },
  {
    id: 20,
    questionAr: "كيف يمكن الدخول إلى حساب الطالب؟",
    questionEn: "How can students log in to their accounts?",
    answerAr: "يتم الدخول باستخدام بيانات الحساب التي توفرها المدرسة. في حالة نسيان بيانات الدخول، يرجى التواصل مع الدعم الفني أو إدارة المدرسة.",
    answerEn: "Students log in using the account credentials provided by the school. If login details are lost, contact technical support or school administration.",
    category: "technology",
  },
  {
    id: 21,
    questionAr: "ماذا أفعل إذا واجهت مشكلة تقنية؟",
    questionEn: "What should I do if I experience a technical issue?",
    answerAr: "يرجى التأكد أولًا من الاتصال بالإنترنت وصحة بيانات الدخول، ثم التواصل مع الدعم الفني مع توضيح المشكلة وإرفاق صورة للشاشة إن أمكن.",
    answerEn: "First check your internet connection and login details. Then contact technical support, describing the issue and attaching a screenshot if possible.",
    category: "technology",
  },
  {
    id: 22,
    questionAr: "هل يمكن متابعة الواجبات إلكترونيًا؟",
    questionEn: "Can homework be followed online?",
    answerAr: "يمكن متابعة الواجبات والمواد التعليمية من خلال الأدوات والمنصات الرقمية التي تعتمدها المدرسة، إذا كانت هذه الخدمة متاحة للمرحلة الدراسية.",
    answerEn: "Homework and learning materials can be followed through the digital tools and platforms adopted by the school, where this service is available.",
    category: "technology",
  },
  {
    id: 23,
    questionAr: "كيف يمكن التواصل مع المعلمين؟",
    questionEn: "How can parents communicate with teachers?",
    answerAr: "يمكن التواصل مع المعلمين من خلال القنوات الرسمية التي تحددها المدرسة، أو عبر إدارة المرحلة لتنسيق موعد مناسب عند الحاجة.",
    answerEn: "Parents can communicate with teachers through the official channels designated by the school, or contact stage administration to arrange a suitable meeting.",
    category: "parents",
    popular: true,
  },
  {
    id: 24,
    questionAr: "كيف يمكن متابعة مستوى الطالب الدراسي؟",
    questionEn: "How can parents monitor academic progress?",
    answerAr: "يمكن متابعة مستوى الطالب من خلال تقارير الأداء والتقييمات الدورية والتواصل مع المعلمين وإدارة المرحلة، وفق آليات المتابعة المعتمدة بالمدرسة.",
    answerEn: "Parents can monitor student progress through performance reports, periodic assessments and communication with teachers and stage administration.",
    category: "parents",
  },
  {
    id: 25,
    questionAr: "كيف يمكن تحديث بيانات ولي الأمر؟",
    questionEn: "How can parents update their contact details?",
    answerAr: "يمكن طلب تحديث البيانات من خلال إدارة شؤون الطلاب أو القسم المختص، مع تقديم البيانات الصحيحة والتحقق من هوية ولي الأمر.",
    answerEn: "Parents can request updates through Student Affairs or the relevant department by providing accurate details and verifying their identity.",
    category: "parents",
  },
  {
    id: 26,
    questionAr: "ماذا أفعل إذا تغيب الطالب عن المدرسة؟",
    questionEn: "What should I do if my child is absent?",
    answerAr: "يرجى إخطار المدرسة من خلال القنوات المعتمدة واتباع إجراءات تسجيل الغياب وتقديم المستندات المطلوبة عند الحاجة.",
    answerEn: "Please notify the school through its approved channels and follow the attendance reporting procedures. Supporting documents may be required when applicable.",
    category: "parents",
  },
  {
    id: 27,
    questionAr: "كيف يمكن تقديم اقتراح أو شكوى؟",
    questionEn: "How can I submit feedback or a complaint?",
    answerAr: "يمكن تقديم الاقتراحات والشكاوى من خلال التواصل مع إدارة المدرسة أو استخدام صفحة التواصل الرسمية، مع توضيح التفاصيل ووسيلة مناسبة للرد.",
    answerEn: "Suggestions and complaints can be submitted to school administration or through the official contact page. Please include details and suitable contact information for a response.",
    category: "parents",
  },
  {
    id: 28,
    questionAr: "هل يمكن تحديد موعد مع إدارة المدرسة؟",
    questionEn: "Can I schedule an appointment with school administration?",
    answerAr: "نعم، يمكن التواصل مع الإدارة لتحديد موعد مناسب، مع توضيح موضوع الزيارة والقسم المطلوب مقابلته.",
    answerEn: "Yes. Contact the administration to arrange a suitable appointment and specify the purpose of your visit and the department you wish to meet.",
    category: "parents",
  },
];

const categoryKeys: FAQCategory[] = [
  "admission",
  "academic",
  "fees",
  "activities",
  "technology",
  "parents",
];

const categoryIcons: Record<FAQCategory, string> = {
  admission: "✦",
  academic: "▤",
  fees: "◈",
  activities: "⚽",
  technology: "⌘",
  parents: "♧",
};

const emptyForm = {
  questionAr: "",
  questionEn: "",
  answerAr: "",
  answerEn: "",
  category: "admission" as FAQCategory,
  popular: false,
};

export default function FAQPage() {
  const { language } = useLanguage();
  const isArabic = language === "ar";
  const dir = isArabic ? "rtl" : "ltr";

  const [faqs, setFaqs] = useState<FAQItem[]>(initialFAQs);
  const [hydrated, setHydrated] = useState(false);
  const [activeCategory, setActiveCategory] = useState<FAQCategory | "all">("all");
  const [search, setSearch] = useState("");
  const [openIds, setOpenIds] = useState<number[]>([1]);
  const [showAll, setShowAll] = useState(false);
  const [editorOpen, setEditorOpen] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [form, setForm] = useState(emptyForm);

  const t = {
    eyebrow: isArabic ? "نحن هنا لمساعدتك" : "WE ARE HERE TO HELP",
    title: isArabic ? "الأسئلة الشائعة" : "Frequently Asked Questions",
    subtitle: isArabic
      ? "جمعنا لك أهم الإجابات عن القبول والدراسة والخدمات والأنشطة المدرسية لتجد المعلومات التي تحتاجها بسهولة."
      : "Find helpful answers about admissions, academics, school services and activities in one place.",
    search: isArabic ? "اكتب سؤالك أو كلمة للبحث..." : "Search a question or keyword...",
    categories: isArabic ? "تصفح حسب القسم" : "Browse by Category",
    all: isArabic ? "كل الأسئلة" : "All Questions",
    popular: isArabic ? "الأسئلة الأكثر شيوعًا" : "Popular Questions",
    allQuestions: isArabic ? "جميع الأسئلة والإجابات" : "All Questions & Answers",
    add: isArabic ? "إضافة سؤال جديد" : "Add New Question",
    edit: isArabic ? "تعديل" : "Edit",
    delete: isArabic ? "حذف" : "Delete",
    showAll: isArabic ? "فتح كل الإجابات" : "Expand All",
    closeAll: isArabic ? "إغلاق كل الإجابات" : "Collapse All",
    noResults: isArabic ? "لم نجد أسئلة تطابق بحثك" : "No questions match your search",
    noResultsHint: isArabic ? "جربي البحث بكلمات مختلفة أو اختاري قسمًا آخر." : "Try different keywords or choose another category.",
    contactTitle: isArabic ? "لم تجد إجابة لسؤالك؟" : "Didn't find your answer?",
    contactDescription: isArabic ? "فريقنا مستعد لمساعدتك والإجابة عن جميع استفساراتك." : "Our team is ready to help with your questions and inquiries.",
    contactButton: isArabic ? "تواصل معنا" : "Contact Us",
    questionCount: isArabic ? "سؤال وإجابة" : "Questions & Answers",
    sections: isArabic ? "أقسام متنوعة" : "Categories",
    popularCount: isArabic ? "أسئلة شائعة" : "Popular Questions",
    newTitle: isArabic ? "إضافة سؤال جديد" : "Add New Question",
    editTitle: isArabic ? "تعديل السؤال" : "Edit Question",
    questionAr: "السؤال بالعربية",
    questionEn: "Question in English",
    answerAr: "الإجابة بالعربية",
    answerEn: "Answer in English",
    category: isArabic ? "القسم" : "Category",
    popularToggle: isArabic ? "عرض السؤال ضمن الأسئلة الشائعة" : "Mark as a popular question",
    save: isArabic ? "حفظ السؤال" : "Save Question",
    cancel: isArabic ? "إلغاء" : "Cancel",
    result: isArabic ? "نتيجة البحث" : "Search Results",
  };

  const categoryLabels: Record<FAQCategory, string> = {
    admission: isArabic ? "القبول والتسجيل" : "Admissions",
    academic: isArabic ? "الدراسة والتعليم" : "Academics",
    fees: isArabic ? "المصروفات" : "Tuition & Fees",
    activities: isArabic ? "الأنشطة والرحلات" : "Activities & Trips",
    technology: isArabic ? "التكنولوجيا والتعليم الإلكتروني" : "Technology & E-Learning",
    parents: isArabic ? "أولياء الأمور" : "Parents",
  };

  useEffect(() => {
    try {
      const saved = localStorage.getItem("rowad-faq-v1");
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) setFaqs(parsed);
      }
    } catch {
      console.warn("Could not load FAQ data.");
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (hydrated) {
      localStorage.setItem("rowad-faq-v1", JSON.stringify(faqs));
    }
  }, [faqs, hydrated]);

  const filteredFAQs = useMemo(() => {
    const term = search.trim().toLowerCase();

    return faqs.filter((faq) => {
      const categoryMatch =
        activeCategory === "all" || faq.category === activeCategory;

      const searchMatch =
        !term ||
        [
          faq.questionAr,
          faq.questionEn,
          faq.answerAr,
          faq.answerEn,
        ].some((value) => value.toLowerCase().includes(term));

      return categoryMatch && searchMatch;
    });
  }, [faqs, activeCategory, search]);

  const popularFAQs = filteredFAQs.filter((faq) => faq.popular);
  const isAllOpen =
    filteredFAQs.length > 0 &&
    filteredFAQs.every((faq) => openIds.includes(faq.id));

  const openAdd = () => {
    setEditingId(null);
    setForm(emptyForm);
    setEditorOpen(true);
  };

  const openEdit = (faq: FAQItem) => {
    setEditingId(faq.id);
    setForm({
      questionAr: faq.questionAr,
      questionEn: faq.questionEn,
      answerAr: faq.answerAr,
      answerEn: faq.answerEn,
      category: faq.category,
      popular: Boolean(faq.popular),
    });
    setEditorOpen(true);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newFAQ: FAQItem = {
      id: editingId ?? Math.max(0, ...faqs.map((faq) => faq.id)) + 1,
      ...form,
    };

    setFaqs((current) =>
      editingId
        ? current.map((faq) => faq.id === editingId ? newFAQ : faq)
        : [newFAQ, ...current]
    );

    setOpenIds((current) => [...current, newFAQ.id]);
    setEditorOpen(false);
    setEditingId(null);
    setForm(emptyForm);
  };

  const handleDelete = (id: number) => {
    const confirmed = window.confirm(
      isArabic ? "هل تريدين حذف هذا السؤال؟" : "Are you sure you want to delete this question?"
    );

    if (confirmed) {
      setFaqs((current) => current.filter((faq) => faq.id !== id));
      setOpenIds((current) => current.filter((item) => item !== id));
    }
  };

  const toggleQuestion = (id: number) => {
    setOpenIds((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id]
    );
  };

  const toggleAll = () => {
    if (isAllOpen) {
      setOpenIds((current) =>
        current.filter((id) => !filteredFAQs.some((faq) => faq.id === id))
      );
    } else {
      setOpenIds((current) => [
        ...new Set([...current, ...filteredFAQs.map((faq) => faq.id)]),
      ]);
    }
  };

  const renderFAQCard = (faq: FAQItem, index: number) => {
    const isOpen = openIds.includes(faq.id);

    return (
      <article
        key={faq.id}
        className={`overflow-hidden rounded-2xl border bg-white transition duration-300 ${
          isOpen
            ? "border-[#a9d5dc] shadow-lg shadow-[#075568]/5"
            : "border-[#dcebed] shadow-sm hover:border-[#b9d9de]"
        }`}
      >
        <div className="flex items-start gap-3 p-5 md:p-6">
          <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#eaf7f8] text-sm font-black text-[#075568]">
            {String(index + 1).padStart(2, "0")}
          </span>

          <button
            type="button"
            onClick={() => toggleQuestion(faq.id)}
            aria-expanded={isOpen}
            className="flex min-w-0 flex-1 items-start justify-between gap-4 text-start"
          >
            <span className="text-base font-extrabold leading-8 text-[#073b4c] md:text-lg">
              {isArabic ? faq.questionAr : faq.questionEn}
              {faq.popular && (
                <span className="ms-2 inline-flex rounded-full bg-amber-50 px-2 py-1 align-middle text-[10px] font-bold text-amber-700">
                  ★ {isArabic ? "شائع" : "Popular"}
                </span>
              )}
            </span>

            <span
              className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xl font-bold transition ${
                isOpen
                  ? "rotate-45 bg-[#075568] text-white"
                  : "bg-[#eaf7f8] text-[#075568]"
              }`}
            >
              +
            </span>
          </button>
        </div>

        {isOpen && (
          <div className="border-t border-[#e6f0f1] bg-[#fbfefe] px-5 pb-5 pt-4 md:px-6 md:pb-6">
            <p className="ps-12 text-sm leading-8 text-slate-600 md:text-base">
              {isArabic ? faq.answerAr : faq.answerEn}
            </p>

            <div className="mt-5 flex flex-wrap items-center justify-between gap-3 ps-12">
              <span className="rounded-full bg-[#eaf7f8] px-3 py-1.5 text-xs font-bold text-[#075568]">
                {categoryLabels[faq.category]}
              </span>

              <div className="flex gap-2">
                <button
                  onClick={() => openEdit(faq)}
                  className="rounded-lg bg-[#eaf7f8] px-3 py-2 text-xs font-bold text-[#075568] hover:bg-[#d5eff1]"
                >
                  {t.edit}
                </button>
                <button
                  onClick={() => handleDelete(faq.id)}
                  className="rounded-lg bg-red-50 px-3 py-2 text-xs font-bold text-red-600 hover:bg-red-100"
                >
                  {t.delete}
                </button>
              </div>
            </div>
          </div>
        )}
      </article>
    );
  };

  return (
    <main dir={dir} className="min-h-screen bg-[#f4f9fa] text-[#073b4c]">

      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-[#062f3b] px-5 py-24 text-white md:py-32">
        <div className="absolute -left-20 -top-24 -z-10 h-80 w-80 rounded-full border-[50px] border-white/5" />
        <div className="absolute -bottom-36 -right-20 -z-10 h-96 w-96 rounded-full border-[60px] border-white/5" />

        <div className="relative mx-auto max-w-7xl">
          <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-bold text-[#a6e9ee]">
            {t.eyebrow}
          </span>

          <div className="mt-8 grid items-center gap-12 md:grid-cols-[1.5fr_1fr]">
            <div>
              <h1 className="text-4xl font-black leading-tight md:text-6xl lg:text-7xl">
                {t.title}
                <span className="mt-3 block text-[#6ed4df]">
                  {isArabic ? "كل ما تريد معرفته" : "Everything You Need to Know"}
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-9 text-white/75 md:text-lg">
                {t.subtitle}
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href="#questions"
                  className="rounded-xl bg-white px-7 py-4 font-extrabold text-[#062f3b] transition hover:bg-[#dff7f8]"
                >
                  {isArabic ? "تصفح الأسئلة" : "Browse Questions"}
                </a>
                <a
                  href="/contact"
                  className="rounded-xl border border-white/30 px-7 py-4 font-bold text-white transition hover:bg-white/10"
                >
                  {t.contactButton}
                </a>
              </div>
            </div>

            <div className="rounded-3xl border border-white/15 bg-white/10 p-7 backdrop-blur-md">
              <div className="mb-6 flex items-center justify-between">
                <span className="text-sm font-bold text-[#a6e9ee]">
                  {isArabic ? "مركز المساعدة" : "HELP CENTER"}
                </span>
                <span className="text-3xl">✦</span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { number: faqs.length, label: t.questionCount },
                  { number: categoryKeys.length, label: t.sections },
                  { number: faqs.filter((faq) => faq.popular).length, label: t.popularCount },
                  { number: "24/7", label: isArabic ? "معلومات متاحة" : "Available Information" },
                ].map((stat, index) => (
                  <div key={index} className="rounded-2xl bg-white/10 p-5">
                    <p className="text-3xl font-black">{stat.number}</p>
                    <p className="mt-2 text-xs leading-5 text-white/65">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEARCH */}
      <section className="relative z-10 mx-auto -mt-8 max-w-5xl px-5">
        <div className="rounded-2xl border border-[#dcebed] bg-white p-3 shadow-xl shadow-[#062f3b]/10 md:p-5">
          <div className="flex items-center gap-4 rounded-xl bg-[#f4f9fa] px-4 py-2">
            <span className="text-2xl text-[#0e7490]">⌕</span>
            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder={t.search}
              className="min-w-0 flex-1 bg-transparent py-3 text-sm outline-none placeholder:text-slate-400 md:text-base"
            />
            {search && (
              <button
                onClick={() => setSearch("")}
                className="rounded-lg px-3 py-2 text-sm font-bold text-[#0e7490] hover:bg-white"
              >
                ×
              </button>
            )}
          </div>
          {search && (
            <p className="px-3 pt-3 text-xs font-semibold text-slate-500">
              {t.result}: {filteredFAQs.length}
            </p>
          )}
        </div>
      </section>

      {/* CATEGORY CARDS */}
      <section className="mx-auto max-w-7xl px-5 pb-8 pt-20">
        <div className="mb-8">
          <span className="font-bold text-[#0e7490]">
            {isArabic ? "اختر ما تبحث عنه" : "FIND WHAT YOU NEED"}
          </span>
          <h2 className="mt-3 text-3xl font-black text-[#062f3b] md:text-4xl">
            {t.categories}
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          <button
            onClick={() => setActiveCategory("all")}
            className={`rounded-2xl border p-5 text-start transition hover:-translate-y-1 hover:shadow-lg ${
              activeCategory === "all"
                ? "border-[#075568] bg-[#075568] text-white shadow-lg"
                : "border-[#dcebed] bg-white text-[#073b4c]"
            }`}
          >
            <span className="text-3xl">▦</span>
            <h3 className="mt-4 text-sm font-black">{t.all}</h3>
            <p className={`mt-2 text-xs ${activeCategory === "all" ? "text-white/65" : "text-slate-400"}`}>
              {faqs.length} {isArabic ? "سؤال" : "Questions"}
            </p>
          </button>

          {categoryKeys.map((category) => {
            const count = faqs.filter((faq) => faq.category === category).length;
            const active = activeCategory === category;

            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`rounded-2xl border p-5 text-start transition hover:-translate-y-1 hover:shadow-lg ${
                  active
                    ? "border-[#075568] bg-[#075568] text-white shadow-lg"
                    : "border-[#dcebed] bg-white text-[#073b4c]"
                }`}
              >
                <span className="text-3xl">{categoryIcons[category]}</span>
                <h3 className="mt-4 text-sm font-black leading-6">
                  {categoryLabels[category]}
                </h3>
                <p className={`mt-2 text-xs ${active ? "text-white/65" : "text-slate-400"}`}>
                  {count} {isArabic ? "سؤال" : "Questions"}
                </p>
              </button>
            );
          })}
        </div>
      </section>

      {/* POPULAR QUESTIONS */}
      {activeCategory === "all" && !search && popularFAQs.length > 0 && (
        <section className="mx-auto max-w-7xl px-5 py-14">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <span className="font-bold text-[#0e7490]">
                {isArabic ? "الأكثر بحثًا" : "MOST ASKED"}
              </span>
              <h2 className="mt-3 text-3xl font-black text-[#062f3b]">
                {t.popular}
              </h2>
            </div>
            <span className="hidden rounded-full bg-amber-50 px-4 py-2 text-sm font-bold text-amber-700 sm:inline-flex">
              ★ {isArabic ? "الأكثر أهمية" : "Popular"}
            </span>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {popularFAQs.slice(0, 4).map((faq, index) => (
              <button
                key={faq.id}
                onClick={() => {
                  setOpenIds((current) => current.includes(faq.id) ? current : [...current, faq.id]);
                  document.getElementById(`faq-${faq.id}`)?.scrollIntoView({ behavior: "smooth", block: "center" });
                }}
                className="group flex items-center gap-4 rounded-2xl border border-[#dcebed] bg-white p-5 text-start transition hover:border-[#0e7490] hover:shadow-lg"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#eaf7f8] text-xl font-black text-[#075568]">
                  0{index + 1}
                </span>
                <span className="flex-1 text-sm font-extrabold leading-7 text-[#073b4c]">
                  {isArabic ? faq.questionAr : faq.questionEn}
                </span>
                <span className="text-xl text-[#0e7490] transition group-hover:translate-x-1">
                  {isArabic ? "←" : "→"}
                </span>
              </button>
            ))}
          </div>
        </section>
      )}

      {/* ALL QUESTIONS */}
      <section id="questions" className="mx-auto max-w-5xl scroll-mt-10 px-5 pb-24 pt-12">
        <div className="mb-8 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <span className="font-bold text-[#0e7490]">
              {isArabic ? "إجابات واضحة ومباشرة" : "CLEAR AND HELPFUL ANSWERS"}
            </span>
            <h2 className="mt-3 text-3xl font-black text-[#062f3b] md:text-4xl">
              {activeCategory === "all" ? t.allQuestions : categoryLabels[activeCategory]}
            </h2>
            <p className="mt-3 text-sm text-slate-500">
              {filteredFAQs.length} {isArabic ? "سؤال متاح" : "questions available"}
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            <button
              onClick={toggleAll}
              className="rounded-xl border border-[#c9e1e5] bg-white px-4 py-3 text-sm font-bold text-[#075568] transition hover:bg-[#eaf7f8]"
            >
              {isAllOpen ? t.closeAll : t.showAll}
            </button>
            <button
              onClick={openAdd}
              className="rounded-xl bg-[#075568] px-4 py-3 text-sm font-bold text-white transition hover:bg-[#0e7490]"
            >
              + {t.add}
            </button>
          </div>
        </div>

        {filteredFAQs.length > 0 ? (
          <div className="space-y-4">
            {filteredFAQs.map((faq, index) => (
              <div id={`faq-${faq.id}`} key={faq.id}>
                {renderFAQCard(faq, index)}
              </div>
            ))}
          </div>
        ) : (
          <div className="rounded-3xl border border-dashed border-[#b9d9de] bg-white px-5 py-16 text-center">
            <div className="text-5xl">⌕</div>
            <h3 className="mt-5 text-xl font-black text-[#073b4c]">{t.noResults}</h3>
            <p className="mt-3 text-sm text-slate-400">{t.noResultsHint}</p>
            <button
              onClick={() => {
                setSearch("");
                setActiveCategory("all");
              }}
              className="mt-6 rounded-xl bg-[#075568] px-6 py-3 font-bold text-white"
            >
              {t.all}
            </button>
          </div>
        )}
      </section>

      {/* CONTACT CTA */}
      <section className="mx-5 mb-20 overflow-hidden rounded-3xl bg-[#075568] px-6 py-16 text-center text-white md:mx-auto md:max-w-7xl md:px-16">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 text-3xl">
          ?
        </div>
        <h2 className="mt-6 text-3xl font-black md:text-4xl">
          {t.contactTitle}
        </h2>
        <p className="mx-auto mt-5 max-w-2xl leading-8 text-white/75">
          {t.contactDescription}
        </p>
        <a
          href="/contact"
          className="mt-8 inline-flex rounded-xl bg-white px-8 py-4 font-extrabold text-[#075568] transition hover:bg-[#dff7f8]"
        >
          {t.contactButton}
        </a>
      </section>

      {/* ADD / EDIT MODAL */}
      {editorOpen && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center overflow-y-auto bg-[#021c24]/80 p-4 backdrop-blur-sm">
          <form
            onSubmit={handleSubmit}
            className="my-6 max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-3xl bg-white p-6 shadow-2xl md:p-9"
          >
            <div className="mb-7 flex items-center justify-between gap-4">
              <div>
                <span className="text-sm font-bold text-[#0e7490]">
                  {isArabic ? "إدارة الأسئلة الشائعة" : "FAQ MANAGEMENT"}
                </span>
                <h2 className="mt-2 text-2xl font-black text-[#062f3b]">
                  {editingId ? t.editTitle : t.newTitle}
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setEditorOpen(false)}
                className="rounded-full bg-slate-100 px-4 py-2 text-xl text-slate-600 hover:bg-slate-200"
              >
                ×
              </button>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <label>
                <span className="mb-2 block text-sm font-bold text-[#073b4c]">{t.questionAr}</span>
                <input
                  required
                  value={form.questionAr}
                  onChange={(event) => setForm((current) => ({ ...current, questionAr: event.target.value }))}
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-[#0e7490]"
                />
              </label>

              <label>
                <span className="mb-2 block text-sm font-bold text-[#073b4c]">{t.questionEn}</span>
                <input
                  required
                  value={form.questionEn}
                  onChange={(event) => setForm((current) => ({ ...current, questionEn: event.target.value }))}
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-[#0e7490]"
                />
              </label>

              <label className="md:col-span-2">
                <span className="mb-2 block text-sm font-bold text-[#073b4c]">{t.answerAr}</span>
                <textarea
                  required
                  rows={4}
                  value={form.answerAr}
                  onChange={(event) => setForm((current) => ({ ...current, answerAr: event.target.value }))}
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 leading-7 outline-none focus:border-[#0e7490]"
                />
              </label>

              <label className="md:col-span-2">
                <span className="mb-2 block text-sm font-bold text-[#073b4c]">{t.answerEn}</span>
                <textarea
                  required
                  rows={4}
                  value={form.answerEn}
                  onChange={(event) => setForm((current) => ({ ...current, answerEn: event.target.value }))}
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 leading-7 outline-none focus:border-[#0e7490]"
                />
              </label>

              <label className="md:col-span-2">
                <span className="mb-2 block text-sm font-bold text-[#073b4c]">{t.category}</span>
                <select
                  value={form.category}
                  onChange={(event) => setForm((current) => ({ ...current, category: event.target.value as FAQCategory }))}
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none focus:border-[#0e7490]"
                >
                  {categoryKeys.map((category) => (
                    <option key={category} value={category}>
                      {categoryLabels[category]}
                    </option>
                  ))}
                </select>
              </label>

              <label className="flex cursor-pointer items-center gap-3 rounded-xl bg-[#eaf7f8] p-4 md:col-span-2">
                <input
                  type="checkbox"
                  checked={form.popular}
                  onChange={(event) => setForm((current) => ({ ...current, popular: event.target.checked }))}
                  className="h-5 w-5 accent-[#075568]"
                />
                <span className="text-sm font-bold text-[#075568]">{t.popularToggle}</span>
              </label>
            </div>

            <div className="mt-8 flex flex-wrap justify-end gap-3 border-t border-slate-100 pt-6">
              <button
                type="button"
                onClick={() => setEditorOpen(false)}
                className="rounded-xl border border-slate-200 px-7 py-3 font-bold text-slate-600 hover:bg-slate-50"
              >
                {t.cancel}
              </button>
              <button
                type="submit"
                className="rounded-xl bg-[#075568] px-8 py-3 font-extrabold text-white transition hover:bg-[#0e7490]"
              >
                {t.save}
              </button>
            </div>
          </form>
        </div>
      )}
    </main>
  );
}
