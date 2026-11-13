
"use client";

import { useLanguage } from "../../context/LanguageContext";

const courses = [
  {
    id: 1,
    title: "اللغة العربية",
    en: "Arabic Language",
    teacher: "أ / منى إبراهيم",
    teacherEn: "Mona Ibrahim",
    stage: "المرحلة الابتدائية",
    stageEn: "Primary Stage",
    grades: "الصفوف الرابع والخامس والسادس",
    gradesEn: "Grades 4, 5 and 6",
    lessons: 32,
    duration: "45 دقيقة",
    durationEn: "45 Minutes",
    level: "جميع المستويات",
    levelEn: "All Levels",
    icon: "📚",
    color: "from-[#0e7490] to-[#164e63]",
    description:
      "تطوير مهارات القراءة والكتابة والنحو والإملاء والتعبير من خلال دروس تفاعلية وتدريبات متنوعة.",
    descriptionEn:
      "Develop reading, writing, grammar, spelling and expression skills through interactive lessons and exercises.",
    topics: ["القراءة والفهم", "القواعد النحوية", "الإملاء", "التعبير الكتابي"],
    topicsEn: ["Reading", "Grammar", "Spelling", "Writing"],
  },
  {
    id: 2,
    title: "الرياضيات",
    en: "Mathematics",
    teacher: "أ / أحمد محمد",
    teacherEn: "Ahmed Mohamed",
    stage: "المرحلة الإعدادية",
    stageEn: "Preparatory Stage",
    grades: "الصف الأول والثاني والثالث الإعدادي",
    gradesEn: "Preparatory Grades 1, 2 and 3",
    lessons: 36,
    duration: "50 دقيقة",
    durationEn: "50 Minutes",
    level: "متوسط ومتقدم",
    levelEn: "Intermediate & Advanced",
    icon: "📐",
    color: "from-violet-600 to-purple-800",
    description:
      "تنمية مهارات التفكير المنطقي والتحليل وحل المسائل الرياضية والتدريب على نماذج الامتحانات.",
    descriptionEn:
      "Develop logical thinking, analytical skills, mathematical problem-solving and exam preparation.",
    topics: ["الجبر", "الهندسة", "الإحصاء", "حل المسائل"],
    topicsEn: ["Algebra", "Geometry", "Statistics", "Problem Solving"],
  },
  {
    id: 3,
    title: "اللغة الإنجليزية",
    en: "English Language",
    teacher: "أ / سارة علي",
    teacherEn: "Sara Ali",
    stage: "المرحلة الابتدائية",
    stageEn: "Primary Stage",
    grades: "الصفوف الرابع والخامس والسادس",
    gradesEn: "Grades 4, 5 and 6",
    lessons: 28,
    duration: "45 دقيقة",
    durationEn: "45 Minutes",
    level: "مبتدئ ومتوسط",
    levelEn: "Beginner & Intermediate",
    icon: "🌍",
    color: "from-cyan-600 to-blue-700",
    description:
      "تعلم اللغة الإنجليزية من خلال المحادثة والاستماع والقراءة والكتابة والأنشطة التفاعلية.",
    descriptionEn:
      "Learn English through conversation, listening, reading, writing and interactive activities.",
    topics: ["القواعد", "المفردات", "القراءة", "المحادثة"],
    topicsEn: ["Grammar", "Vocabulary", "Reading", "Conversation"],
  },
  {
    id: 4,
    title: "العلوم",
    en: "Science",
    teacher: "أ / محمود خالد",
    teacherEn: "Mahmoud Khaled",
    stage: "المرحلة الإعدادية",
    stageEn: "Preparatory Stage",
    grades: "الصف الأول والثاني والثالث الإعدادي",
    gradesEn: "Preparatory Grades 1, 2 and 3",
    lessons: 30,
    duration: "50 دقيقة",
    durationEn: "50 Minutes",
    level: "متوسط",
    levelEn: "Intermediate",
    icon: "🔬",
    color: "from-emerald-600 to-teal-800",
    description:
      "اكتشاف الظواهر الطبيعية والتجارب العلمية وفهم جسم الإنسان والطاقة والبيئة.",
    descriptionEn:
      "Explore natural phenomena, scientific experiments, the human body, energy and the environment.",
    topics: ["الكائنات الحية", "الطاقة", "المادة", "البيئة"],
    topicsEn: ["Living Organisms", "Energy", "Matter", "Environment"],
  },
  {
    id: 5,
    title: "الدراسات الاجتماعية",
    en: "Social Studies",
    teacher: "أ / هبة حسن",
    teacherEn: "Heba Hassan",
    stage: "المرحلة الثانوية",
    stageEn: "Secondary Stage",
    grades: "الصفوف الثانوية",
    gradesEn: "Secondary Grades",
    lessons: 26,
    duration: "45 دقيقة",
    durationEn: "45 Minutes",
    level: "متوسط",
    levelEn: "Intermediate",
    icon: "🌎",
    color: "from-orange-500 to-red-700",
    description:
      "التعرف على التاريخ والجغرافيا والحضارات والأحداث التاريخية والخرائط الجغرافية.",
    descriptionEn:
      "Explore history, geography, civilizations, historical events and geographical maps.",
    topics: ["التاريخ", "الجغرافيا", "الحضارات", "الخرائط"],
    topicsEn: ["History", "Geography", "Civilizations", "Maps"],
  },
  {
    id: 6,
    title: "التكنولوجيا والبرمجة",
    en: "Technology & Programming",
    teacher: "أ / كريم سمير",
    teacherEn: "Karim Samir",
    stage: "جميع المراحل",
    stageEn: "All Stages",
    grades: "مستويات متعددة",
    gradesEn: "Multiple Levels",
    lessons: 24,
    duration: "60 دقيقة",
    durationEn: "60 Minutes",
    level: "مبتدئ ومتقدم",
    levelEn: "Beginner & Advanced",
    icon: "💻",
    color: "from-pink-600 to-rose-800",
    description:
      "اكتساب مهارات التكنولوجيا والتفكير الحاسوبي ومبادئ البرمجة والأمان الرقمي.",
    descriptionEn:
      "Learn technology skills, computational thinking, programming fundamentals and digital safety.",
    topics: ["أساسيات الحاسوب", "التفكير المنطقي", "البرمجة", "الأمان الرقمي"],
    topicsEn: ["Computer Basics", "Logical Thinking", "Programming", "Digital Safety"],
  },
  {
    id: 7,
    title: "الفيزياء",
    en: "Physics",
    teacher: "أ / محمد عادل",
    teacherEn: "Mohamed Adel",
    stage: "المرحلة الثانوية",
    stageEn: "Secondary Stage",
    grades: "الصفوف الثانوية",
    gradesEn: "Secondary Grades",
    lessons: 34,
    duration: "55 دقيقة",
    durationEn: "55 Minutes",
    level: "متقدم",
    levelEn: "Advanced",
    icon: "⚛️",
    color: "from-sky-600 to-blue-900",
    description:
      "فهم قوانين الحركة والطاقة والكهرباء والظواهر الفيزيائية مع أمثلة تطبيقية.",
    descriptionEn:
      "Understand motion, energy, electricity and physical phenomena through practical examples.",
    topics: ["الحركة", "القوى", "الكهرباء", "الطاقة"],
    topicsEn: ["Motion", "Forces", "Electricity", "Energy"],
  },
  {
    id: 8,
    title: "الكيمياء",
    en: "Chemistry",
    teacher: "أ / نورهان سامي",
    teacherEn: "Nourhan Samy",
    stage: "المرحلة الثانوية",
    stageEn: "Secondary Stage",
    grades: "الصفوف الثانوية",
    gradesEn: "Secondary Grades",
    lessons: 28,
    duration: "50 دقيقة",
    durationEn: "50 Minutes",
    level: "متقدم",
    levelEn: "Advanced",
    icon: "🧪",
    color: "from-fuchsia-600 to-purple-800",
    description:
      "دراسة العناصر والمركبات والتفاعلات الكيميائية والتطبيقات العملية.",
    descriptionEn:
      "Study chemical elements, compounds, reactions and practical applications.",
    topics: ["العناصر", "المركبات", "التفاعلات", "المعادلات"],
    topicsEn: ["Elements", "Compounds", "Reactions", "Equations"],
  },
  {
    id: 9,
    title: "الأحياء",
    en: "Biology",
    teacher: "أ / مريم خالد",
    teacherEn: "Mariam Khaled",
    stage: "المرحلة الثانوية",
    stageEn: "Secondary Stage",
    grades: "الصفوف الثانوية",
    gradesEn: "Secondary Grades",
    lessons: 25,
    duration: "45 دقيقة",
    durationEn: "45 Minutes",
    level: "متوسط ومتقدم",
    levelEn: "Intermediate & Advanced",
    icon: "🧬",
    color: "from-green-600 to-emerald-900",
    description:
      "التعرف على الكائنات الحية والخلايا والوراثة وأجهزة جسم الإنسان.",
    descriptionEn:
      "Explore living organisms, cells, genetics and the human body's systems.",
    topics: ["الخلية", "الوراثة", "أجهزة الجسم", "التنوع الحيوي"],
    topicsEn: ["Cells", "Genetics", "Body Systems", "Biodiversity"],
  },
  {
    id: 10,
    title: "اللغة الفرنسية",
    en: "French Language",
    teacher: "أ / آية مصطفى",
    teacherEn: "Aya Mostafa",
    stage: "المرحلة الإعدادية",
    stageEn: "Preparatory Stage",
    grades: "الصفوف الإعدادية",
    gradesEn: "Preparatory Grades",
    lessons: 22,
    duration: "45 دقيقة",
    durationEn: "45 Minutes",
    level: "مبتدئ",
    levelEn: "Beginner",
    icon: "🇫🇷",
    color: "from-indigo-600 to-blue-800",
    description:
      "تعلم أساسيات اللغة الفرنسية والمفردات والقواعد والمحادثات اليومية.",
    descriptionEn:
      "Learn French fundamentals, vocabulary, grammar and everyday conversations.",
    topics: ["الحروف", "المفردات", "القواعد", "المحادثة"],
    topicsEn: ["Alphabet", "Vocabulary", "Grammar", "Conversation"],
  },
  {
    id: 11,
    title: "التربية الدينية",
    en: "Religious Education",
    teacher: "أ / خالد حسن",
    teacherEn: "Khaled Hassan",
    stage: "جميع المراحل",
    stageEn: "All Stages",
    grades: "جميع الصفوف",
    gradesEn: "All Grades",
    lessons: 20,
    duration: "35 دقيقة",
    durationEn: "35 Minutes",
    level: "جميع المستويات",
    levelEn: "All Levels",
    icon: "📖",
    color: "from-amber-500 to-orange-700",
    description:
      "تعزيز القيم والأخلاق والسلوك الإيجابي من خلال محتوى تعليمي مناسب للمراحل الدراسية.",
    descriptionEn:
      "Promote values, ethics and positive behavior through age-appropriate educational content.",
    topics: ["القيم والأخلاق", "السيرة", "العبادات", "المواقف التعليمية"],
    topicsEn: ["Values", "Biography", "Worship", "Learning Situations"],
  },
  {
    id: 12,
    title: "المهارات الرقمية",
    en: "Digital Skills",
    teacher: "أ / يوسف أحمد",
    teacherEn: "Youssef Ahmed",
    stage: "جميع المراحل",
    stageEn: "All Stages",
    grades: "جميع الصفوف",
    gradesEn: "All Grades",
    lessons: 18,
    duration: "40 دقيقة",
    durationEn: "40 Minutes",
    level: "مبتدئ",
    levelEn: "Beginner",
    icon: "🖥️",
    color: "from-teal-600 to-cyan-900",
    description:
      "استخدام الأدوات الرقمية والتعامل مع الإنترنت والبحث والتعلم الإلكتروني.",
    descriptionEn:
      "Use digital tools, navigate the internet, research and learn online.",
    topics: ["البحث الرقمي", "التطبيقات", "الإنترنت", "المواطنة الرقمية"],
    topicsEn: ["Digital Research", "Applications", "Internet", "Digital Citizenship"],
  },
];

const stages = [
  {
    title: "المرحلة الابتدائية",
    en: "Primary Stage",
    icon: "🎒",
    grades: "من الصف الأول إلى الصف السادس",
    gradesEn: "Grade 1 to Grade 6",
    description:
      "بناء أساس تعليمي قوي وتنمية مهارات القراءة والكتابة والتفكير والإبداع.",
    descriptionEn:
      "Build a strong educational foundation and develop reading, writing, thinking and creativity skills.",
    color: "from-[#0e7490] to-[#164e63]",
    subjects: "8 مواد تعليمية",
    subjectsEn: "8 Subjects",
  },
  {
    title: "المرحلة الإعدادية",
    en: "Preparatory Stage",
    icon: "📖",
    grades: "من الصف الأول إلى الصف الثالث",
    gradesEn: "Grade 1 to Grade 3",
    description:
      "تطوير المهارات الأكاديمية وتعزيز الفهم والتحليل والاستعداد للمرحلة الثانوية.",
    descriptionEn:
      "Develop academic skills, strengthen understanding and prepare for secondary education.",
    color: "from-violet-500 to-purple-800",
    subjects: "10 مواد تعليمية",
    subjectsEn: "10 Subjects",
  },
  {
    title: "المرحلة الثانوية",
    en: "Secondary Stage",
    icon: "🎓",
    grades: "الصفوف الثانوية",
    gradesEn: "Secondary Grades",
    description:
      "تعميق المعرفة والتدريب على الامتحانات وتنمية مهارات الاستعداد للمستقبل الجامعي.",
    descriptionEn:
      "Deepen knowledge, prepare for exams and develop skills for future university studies.",
    color: "from-cyan-600 to-blue-900",
    subjects: "12 مادة تعليمية",
    subjectsEn: "12 Subjects",
  },
];

const features = [
  {
    icon: "🎥",
    title: "فيديوهات تعليمية",
    en: "Educational Videos",
    description: "مشاهدة الدروس التعليمية ومراجعة المحتوى في أي وقت.",
    descriptionEn: "Watch lessons and review educational content anytime.",
  },
  {
    icon: "📝",
    title: "اختبارات إلكترونية",
    en: "Online Exams",
    description: "اختبارات وتدريبات تفاعلية لقياس مستوى الفهم والتحصيل.",
    descriptionEn: "Interactive tests and exercises to measure understanding and achievement.",
  },
  {
    icon: "📊",
    title: "متابعة الأداء",
    en: "Performance Tracking",
    description: "متابعة تقدم الطالب ونتائج الاختبارات والأنشطة.",
    descriptionEn: "Track student progress, exam results and activities.",
  },
  {
    icon: "📅",
    title: "جدول دراسي منظم",
    en: "Organized Schedule",
    description: "تنظيم مواعيد الحصص والدروس والواجبات الأسبوعية.",
    descriptionEn: "Organize classes, lessons and weekly assignments.",
  },
  {
    icon: "📚",
    title: "مكتبة تعليمية",
    en: "Educational Library",
    description: "الوصول إلى الملخصات والمذكرات والمواد التعليمية.",
    descriptionEn: "Access summaries, notes and educational materials.",
  },
  {
    icon: "👨‍🏫",
    title: "متابعة المعلمين",
    en: "Teacher Support",
    description: "التواصل التعليمي ومتابعة الشروحات والأنشطة.",
    descriptionEn: "Follow lessons, explanations and educational activities.",
  },
  {
    icon: "🏆",
    title: "نظام الإنجازات",
    en: "Achievement System",
    description: "تشجيع الطلاب على الاستمرار وتحقيق أهدافهم التعليمية.",
    descriptionEn: "Encourage students to keep learning and achieve their goals.",
  },
  {
    icon: "🔒",
    title: "بيئة تعليمية آمنة",
    en: "Safe Learning Environment",
    description: "تجربة منظمة للوصول إلى المحتوى والخدمات التعليمية.",
    descriptionEn: "A structured and secure learning experience.",
  },
];

const schedule = [
  {
    day: "الأحد",
    dayEn: "Sunday",
    subject: "اللغة العربية",
    subjectEn: "Arabic",
    time: "09:00 صباحًا",
    timeEn: "09:00 AM",
    teacher: "أ / منى إبراهيم",
    teacherEn: "Mona Ibrahim",
    icon: "📚",
  },
  {
    day: "الاثنين",
    dayEn: "Monday",
    subject: "الرياضيات",
    subjectEn: "Mathematics",
    time: "10:00 صباحًا",
    timeEn: "10:00 AM",
    teacher: "أ / أحمد محمد",
    teacherEn: "Ahmed Mohamed",
    icon: "📐",
  },
  {
    day: "الثلاثاء",
    dayEn: "Tuesday",
    subject: "العلوم",
    subjectEn: "Science",
    time: "11:00 صباحًا",
    timeEn: "11:00 AM",
    teacher: "أ / محمود خالد",
    teacherEn: "Mahmoud Khaled",
    icon: "🔬",
  },
  {
    day: "الأربعاء",
    dayEn: "Wednesday",
    subject: "اللغة الإنجليزية",
    subjectEn: "English",
    time: "09:30 صباحًا",
    timeEn: "09:30 AM",
    teacher: "أ / سارة علي",
    teacherEn: "Sara Ali",
    icon: "🌍",
  },
  {
    day: "الخميس",
    dayEn: "Thursday",
    subject: "التكنولوجيا",
    subjectEn: "Technology",
    time: "12:00 ظهرًا",
    timeEn: "12:00 PM",
    teacher: "أ / كريم سمير",
    teacherEn: "Karim Samir",
    icon: "💻",
  },
];

const steps = [
  {
    number: "01",
    icon: "🔐",
    title: "تسجيل الدخول",
    en: "Sign In",
    description: "استخدم بيانات حسابك للوصول إلى المنصة التعليمية.",
    descriptionEn: "Use your account details to access the learning platform.",
  },
  {
    number: "02",
    icon: "🎓",
    title: "اختيار المرحلة",
    en: "Choose Your Stage",
    description: "حدد المرحلة والصف الدراسي المناسب لك.",
    descriptionEn: "Select your academic stage and grade.",
  },
  {
    number: "03",
    icon: "📚",
    title: "اختيار المادة",
    en: "Choose a Subject",
    description: "استكشف المواد والدروس المتاحة في حسابك.",
    descriptionEn: "Explore the subjects and lessons available to you.",
  },
  {
    number: "04",
    icon: "🚀",
    title: "ابدأ التعلم",
    en: "Start Learning",
    description: "شاهد الدروس وحل الاختبارات وتابع تقدمك.",
    descriptionEn: "Watch lessons, take tests and track your progress.",
  },
];

const faqs = [
  {
    question: "كيف يمكنني الدخول إلى منصة التعلم الإلكتروني؟",
    en: "How can I access the E-Learning platform?",
    answer:
      "يمكنك الدخول من خلال صفحة تسجيل الدخول باستخدام بيانات الحساب المخصصة لك من المدرسة.",
    answerEn:
      "You can access the platform through the login page using the account details provided by the school.",
  },
  {
    question: "هل يمكنني مشاهدة الدروس في أي وقت؟",
    en: "Can I watch lessons anytime?",
    answer:
      "تتيح المنصة الوصول إلى المحتوى التعليمي المتاح في حساب الطالب وفقًا لنظام المدرسة.",
    answerEn:
      "The platform provides access to the educational content available in the student's account.",
  },
  {
    question: "كيف أتابع مستواي الدراسي؟",
    en: "How can I track my academic progress?",
    answer:
      "يمكن متابعة نتائج الاختبارات والأنشطة والتقدم الدراسي من خلال لوحة متابعة الطالب.",
    answerEn:
      "You can track exam results, activities and academic progress through the student dashboard.",
  },
  {
    question: "هل توجد اختبارات إلكترونية؟",
    en: "Are online exams available?",
    answer:
      "يمكن توفير اختبارات وتدريبات إلكترونية لمراجعة الدروس وقياس مستوى التحصيل.",
    answerEn:
      "Online tests and exercises can be provided to review lessons and assess learning progress.",
  },
];

export default function ELearningPage() {
  const { language } = useLanguage();
  const isArabic = language === "ar";

  const content = {
    badge: isArabic ? "منصة الرواد للتعلم الإلكتروني" : "Al Rowad E-Learning Platform",
    title1: isArabic ? "تعلم بذكاء" : "Learn Smart",
    title2: isArabic ? "اصنع مستقبلك" : "Build Your Future",
    heroDescription: isArabic
      ? "مرحبًا بك في عالم جديد من التعلم والمعرفة. منصة تعليمية متكاملة تجمع بين الدروس الرقمية والاختبارات والمتابعة الأكاديمية والمحتوى التعليمي المتميز."
      : "Welcome to a new world of learning and knowledge. An integrated educational platform combining digital lessons, assessments, academic tracking and quality learning content.",
    exploreCourses: isArabic ? "اكتشف المواد الدراسية" : "Explore Courses",
    exploreStages: isArabic ? "استكشف المراحل" : "Explore Stages",
    subjects: isArabic ? "مادة تعليمية" : "Educational Subjects",
    stages: isArabic ? "مراحل دراسية" : "Academic Stages",
    organized: isArabic ? "رحلة تعليمية منظمة" : "Organized Learning Journey",
    smartCenter: isArabic ? "مركز التعلم الذكي" : "Smart Learning Center",
    platform: isArabic ? "منصة تعليمية" : "Learning Platform",
    continuous: isArabic ? "التعلم المستمر" : "Continuous Learning",
    success: isArabic ? "النجاح والتميز" : "Success & Excellence",
    learnEveryDay: "Learn Every Day",
    achieveMore: "Achieve More",
    achievement: isArabic ? "تعلم وتفوق" : "Learn & Excel",
    everyStep: isArabic ? "كل خطوة تصنع فرقًا" : "Every step makes a difference",
    videoLessons: isArabic ? "دروس متخصصة" : "Expert Lessons",
    learnAnytime: isArabic ? "تعلم في أي وقت" : "Learn Anytime",
    students: isArabic ? "طالب وطالبة" : "Students",
    teachers: isArabic ? "معلم ومعلمة" : "Teachers",
    lessons: isArabic ? "درس تعليمي" : "Lessons",
    aboutBadge: "ABOUT OUR PLATFORM",
    aboutTitle: isArabic ? "تجربة تعليمية" : "An Educational Experience",
    aboutHighlight: isArabic ? "تتجاوز حدود الفصل" : "Beyond the Classroom",
    aboutDescription: isArabic
      ? "في مدرسة الرواد الحديثة نؤمن أن التعليم رحلة مستمرة. لذلك نسعى إلى توفير بيئة رقمية تساعد الطالب على التعلم والتفاعل والمراجعة ومتابعة مستواه الدراسي بصورة منظمة."
      : "At Al Rowad Modern School, we believe education is a continuous journey. We provide a digital environment that helps students learn, interact, review and track their academic progress.",
    goals: isArabic ? "أهداف واضحة" : "Clear Goals",
    goalsDesc: isArabic ? "خطوات تعليمية تساعد الطالب على تحقيق أهدافه." : "Learning steps that help students achieve their goals.",
    creativity: isArabic ? "تفكير وإبداع" : "Thinking & Creativity",
    creativityDesc: isArabic ? "تنمية مهارات التفكير والتحليل والابتكار." : "Develop thinking, analytical and innovation skills.",
    progress: isArabic ? "تقدم مستمر" : "Continuous Progress",
    progressDesc: isArabic ? "متابعة التعلم والتدريب وتحسين المستوى." : "Track learning, practice and improvement.",
    excellence: isArabic ? "تميز ونجاح" : "Excellence & Success",
    excellenceDesc: isArabic ? "بناء شخصية متعلمة ومستعدة للمستقبل." : "Build a knowledgeable personality ready for the future.",
    discoverFeatures: isArabic ? "اكتشف مميزات المنصة" : "Discover Platform Features",
    stagesBadge: "EDUCATIONAL STAGES",
    stagesTitle: isArabic ? "المراحل التعليمية" : "Educational Stages",
    stagesDesc: isArabic
      ? "محتوى تعليمي يناسب احتياجات كل مرحلة ويساعد الطلاب على تطوير مهاراتهم وتحقيق أهدافهم."
      : "Educational content designed for each stage to help students develop their skills and achieve their goals.",
    explore: isArabic ? "استكشف" : "Explore",
    coursesBadge: "OUR COURSES",
    coursesTitle: isArabic ? "المواد والمقررات الدراسية" : "Subjects & Courses",
    coursesDesc: isArabic
      ? "مجموعة متنوعة من المواد التعليمية والمقررات المتخصصة."
      : "A wide range of educational subjects and specialized courses.",
    studentLogin: isArabic ? "دخول الطلاب" : "Student Login",
    allCourses: isArabic ? "جميع المواد" : "All Subjects",
    primary: isArabic ? "الابتدائية" : "Primary",
    preparatory: isArabic ? "الإعدادية" : "Preparatory",
    secondary: isArabic ? "الثانوية" : "Secondary",
    subject: isArabic ? "مادة دراسية" : "Subject",
    targetGrades: isArabic ? "الصفوف المستهدفة" : "Target Grades",
    lesson: isArabic ? "درس" : "Lessons",
    level: isArabic ? "المستوى" : "Level",
    courseContent: isArabic ? "محتويات المادة" : "Course Topics",
    subjectTeacher: isArabic ? "مدرس المادة" : "Subject Teacher",
    enterSubject: isArabic ? "دخول المادة" : "Open Subject",
    howBadge: "HOW IT WORKS",
    howTitle: isArabic ? "ابدأ رحلتك التعليمية" : "Start Your Learning Journey",
    howDesc: isArabic
      ? "أربع خطوات بسيطة للوصول إلى عالم التعلم الإلكتروني."
      : "Four simple steps to enter the world of online learning.",
    scheduleBadge: "WEEKLY SCHEDULE",
    scheduleTitle: isArabic ? "الجدول التعليمي الأسبوعي" : "Weekly Learning Schedule",
    scheduleDesc: isArabic
      ? "نموذج استرشادي لتنظيم الحصص التعليمية خلال الأسبوع."
      : "A sample schedule for organizing weekly lessons.",
    day: isArabic ? "اليوم" : "Day",
    course: isArabic ? "المادة" : "Subject",
    time: isArabic ? "الموعد" : "Time",
    teacher: isArabic ? "المعلم" : "Teacher",
    featuresBadge: "WHY AL ROWAD",
    featuresTitle: isArabic ? "مميزات منصتنا التعليمية" : "Our Learning Platform Features",
    featuresDesc: isArabic
      ? "أدوات وخدمات تعليمية متنوعة لدعم الطالب والمعلم وتحسين تجربة التعلم."
      : "Educational tools and services that support students and teachers and improve the learning experience.",
    faqBadge: "FAQ",
    faqTitle: isArabic ? "الأسئلة الشائعة" : "Frequently Asked Questions",
    faqDesc: isArabic
      ? "إجابات عن أهم الأسئلة المتعلقة باستخدام المنصة."
      : "Answers to common questions about using the platform.",
    ctaBadge: "AL ROWAD MODERN SCHOOL",
    ctaTitle: isArabic ? "مستقبلك يبدأ" : "Your Future Starts",
    ctaTitleEnd: isArabic ? "من هنا!" : "Right Here!",
    ctaDescription: isArabic
      ? "اكتشف عالمًا من المعرفة والفرص التعليمية. انضم إلى رحلتك التعليمية وابدأ في تطوير مهاراتك وتحقيق طموحاتك."
      : "Discover a world of knowledge and educational opportunities. Join your learning journey and start developing your skills.",
    ctaButton: isArabic ? "دخول منصة الطلاب" : "Enter Student Platform",
  };

  return (
    <main
      dir={isArabic ? "rtl" : "ltr"}
      className="min-h-screen overflow-hidden bg-slate-50 text-slate-800"
    >
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#164e63] via-[#0e7490] to-[#0891b2] text-white">
        <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-cyan-300/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-white/10 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: "radial-gradient(#fff 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />

        <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-5 py-28 md:grid-cols-2 md:px-10 lg:py-36">
          <div>
            <span className="inline-flex rounded-full border border-cyan-200/30 bg-white/10 px-6 py-3 text-sm font-bold text-cyan-100">
              ✦ {content.badge}
            </span>

            <h1 className="mt-8 text-5xl font-black leading-[1.5] md:text-6xl lg:text-7xl">
              {content.title1}
              <br />
              <span className="text-cyan-200">{content.title2}</span>
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-10 text-cyan-50/90 md:text-xl">
              {content.heroDescription}
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#courses"
                className="rounded-2xl bg-white px-9 py-5 font-black text-[#0e7490] shadow-xl transition hover:-translate-y-1 hover:bg-cyan-50"
              >
                {content.exploreCourses} ←
              </a>
              <a
                href="#stages"
                className="rounded-2xl border border-white/40 px-9 py-5 font-bold transition hover:bg-white/10"
              >
                {content.exploreStages}
              </a>
            </div>

            <div className="mt-14 flex flex-wrap gap-8">
              <div>
                <p className="text-3xl font-black text-cyan-200">12+</p>
                <p className="mt-2 text-sm text-cyan-50">{content.subjects}</p>
              </div>
              <div className="border-s border-white/20 ps-8">
                <p className="text-3xl font-black text-cyan-200">3</p>
                <p className="mt-2 text-sm text-cyan-50">{content.stages}</p>
              </div>
              <div className="border-s border-white/20 ps-8">
                <p className="text-3xl font-black text-cyan-200">100%</p>
                <p className="mt-2 text-sm text-cyan-50">{content.organized}</p>
              </div>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl">
            <div className="rounded-[2.5rem] border border-white/20 bg-white/10 p-6 shadow-2xl backdrop-blur-xl md:p-8">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-xs font-bold tracking-widest text-cyan-100">
                    AL ROWAD MODERN SCHOOL
                  </p>
                  <h3 className="mt-2 text-xl font-black">{content.smartCenter}</h3>
                </div>
                <span className="rounded-full bg-emerald-400/20 px-4 py-2 text-xs text-emerald-200">
                  ● {content.platform}
                </span>
              </div>

              <div className="my-8 grid min-h-80 place-items-center rounded-[2rem] bg-gradient-to-br from-cyan-50 to-white">
                <div className="relative grid h-56 w-56 place-items-center rounded-full bg-gradient-to-br from-[#0e7490] to-cyan-400 shadow-2xl">
                  <span className="text-9xl">🎓</span>
                  <span className="absolute -right-8 top-5 grid h-16 w-16 place-items-center rounded-2xl bg-white text-4xl shadow-xl">
                    📚
                  </span>
                  <span className="absolute -bottom-5 -left-8 grid h-16 w-16 place-items-center rounded-2xl bg-white text-4xl shadow-xl">
                    💡
                  </span>
                  <span className="absolute -left-8 top-8 grid h-14 w-14 place-items-center rounded-2xl bg-white text-3xl shadow-xl">
                    ⭐
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl bg-white/10 p-4">
                  <p className="text-sm text-cyan-50">{content.continuous}</p>
                  <p className="mt-2 font-black text-cyan-200">{content.learnEveryDay}</p>
                </div>
                <div className="rounded-2xl bg-white/10 p-4">
                  <p className="text-sm text-cyan-50">{content.success}</p>
                  <p className="mt-2 font-black text-cyan-200">{content.achieveMore}</p>
                </div>
              </div>
            </div>

            <div className="absolute -right-7 top-24 hidden rounded-2xl bg-white p-5 text-slate-800 shadow-2xl lg:block">
              <span className="text-3xl">🏆</span>
              <p className="mt-2 font-black">{content.achievement}</p>
              <p className="mt-1 text-xs text-slate-500">{content.everyStep}</p>
            </div>

            <div className="absolute -bottom-7 -left-7 hidden rounded-2xl bg-white p-5 text-slate-800 shadow-2xl lg:block">
              <span className="text-3xl">📹</span>
              <p className="mt-2 font-black">{content.videoLessons}</p>
              <p className="mt-1 text-xs text-slate-500">{content.learnAnytime}</p>
            </div>
          </div>
        </div>
      </section>

      {/* STATISTICS */}
      <section className="relative z-10 mx-auto max-w-7xl px-5 md:px-10">
        <div className="grid grid-cols-2 gap-5 rounded-[2rem] bg-white p-7 shadow-2xl shadow-slate-200/70 md:grid-cols-4 md:p-10">
          {[
            { number: "1,650+", label: content.students, icon: "👨‍🎓" },
            { number: "85+", label: content.teachers, icon: "👩‍🏫" },
            { number: "300+", label: content.lessons, icon: "📚" },
            { number: "3", label: content.stages, icon: "🏫" },
          ].map((item) => (
            <div
              key={item.label}
              className="flex items-center justify-center gap-4 border-s border-slate-100 p-4 last:border-0"
            >
              <span className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-cyan-50 text-3xl">
                {item.icon}
              </span>
              <div>
                <h3 className="text-3xl font-black text-[#164e63]">
                  {item.number}
                </h3>
                <p className="mt-2 text-sm text-slate-500">{item.label}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* INTRO */}
      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-28 md:grid-cols-2 md:items-center md:px-10">
        <div>
          <span className="text-sm font-black tracking-[4px] text-[#0e7490]">
            {content.aboutBadge}
          </span>
          <h2 className="mt-6 text-4xl font-black leading-relaxed text-[#164e63] md:text-5xl">
            {content.aboutTitle}
            <span className="block text-[#0e7490]">
              {content.aboutHighlight}
            </span>
          </h2>
          <p className="mt-7 text-lg leading-10 text-slate-500">
            {content.aboutDescription}
          </p>
          <a
            href="#features"
            className="mt-8 inline-flex rounded-xl bg-[#0e7490] px-7 py-4 font-bold text-white transition hover:bg-[#164e63]"
          >
            {content.discoverFeatures} ←
          </a>
        </div>

        <div className="grid grid-cols-2 gap-5">
          <div className="rounded-3xl bg-[#0e7490] p-8 text-white shadow-xl">
            <span className="text-5xl">🎯</span>
            <h3 className="mt-7 text-xl font-black">{content.goals}</h3>
            <p className="mt-4 text-sm leading-8 text-cyan-50">
              {content.goalsDesc}
            </p>
          </div>
          <div className="mt-10 rounded-3xl bg-cyan-600 p-8 text-white shadow-xl">
            <span className="text-5xl">🧠</span>
            <h3 className="mt-7 text-xl font-black">{content.creativity}</h3>
            <p className="mt-4 text-sm leading-8 text-cyan-50">
              {content.creativityDesc}
            </p>
          </div>
          <div className="rounded-3xl bg-[#164e63] p-8 text-white shadow-xl">
            <span className="text-5xl">📈</span>
            <h3 className="mt-7 text-xl font-black">{content.progress}</h3>
            <p className="mt-4 text-sm leading-8 text-cyan-50">
              {content.progressDesc}
            </p>
          </div>
          <div className="mt-10 rounded-3xl bg-cyan-50 p-8 text-[#164e63] shadow-xl">
            <span className="text-5xl">🌟</span>
            <h3 className="mt-7 text-xl font-black">{content.excellence}</h3>
            <p className="mt-4 text-sm leading-8 text-slate-600">
              {content.excellenceDesc}
            </p>
          </div>
        </div>
      </section>

      {/* STAGES */}
      <section id="stages" className="bg-cyan-50/60 py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <div className="mb-16 text-center">
            <span className="text-sm font-black tracking-[4px] text-[#0e7490]">
              {content.stagesBadge}
            </span>
            <h2 className="mt-5 text-4xl font-black text-[#164e63] md:text-5xl">
              {content.stagesTitle}
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-9 text-slate-500">
              {content.stagesDesc}
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {stages.map((stage, index) => (
              <a
                key={stage.title}
                href="#courses"
                className="group relative overflow-hidden rounded-[2rem] border border-cyan-100 bg-white p-9 shadow-sm transition duration-300 hover:-translate-y-3 hover:shadow-2xl"
              >
                <div
                  className={`absolute inset-x-0 top-0 h-3 bg-gradient-to-l ${stage.color}`}
                />
                <span className="absolute end-7 top-7 text-6xl font-black text-slate-100">
                  0{index + 1}
                </span>
                <div
                  className={`grid h-24 w-24 place-items-center rounded-3xl bg-gradient-to-br ${stage.color} text-5xl shadow-xl`}
                >
                  {stage.icon}
                </div>
                <h3 className="mt-9 text-2xl font-black text-[#164e63]">
                  {isArabic ? stage.title : stage.en}
                </h3>
                <p className="mt-3 text-sm font-bold text-[#0e7490]">
                  {stage.en}
                </p>
                <p className="mt-5 text-sm font-bold text-slate-600">
                  {isArabic ? stage.grades : stage.gradesEn}
                </p>
                <p className="mt-5 text-sm leading-9 text-slate-500">
                  {isArabic ? stage.description : stage.descriptionEn}
                </p>
                <div className="mt-7 flex items-center justify-between border-t border-slate-100 pt-6">
                  <span className="text-sm font-bold text-slate-500">
                    {isArabic ? stage.subjects : stage.subjectsEn}
                  </span>
                  <span className="font-black text-[#0e7490] transition group-hover:-translate-x-2">
                    {content.explore} ←
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* COURSES */}
      <section id="courses" className="mx-auto max-w-7xl px-5 py-28 md:px-10">
        <div className="mb-16 flex flex-wrap items-end justify-between gap-6">
          <div>
            <span className="text-sm font-black tracking-[4px] text-[#0e7490]">
              {content.coursesBadge}
            </span>
            <h2 className="mt-5 text-4xl font-black text-[#164e63] md:text-5xl">
              {content.coursesTitle}
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-500">
              {content.coursesDesc}
            </p>
          </div>
          <a
            href="/login"
            className="rounded-xl bg-[#0e7490] px-7 py-4 font-bold text-white transition hover:bg-[#164e63]"
          >
            {content.studentLogin} ←
          </a>
        </div>

        <div className="mb-8 flex flex-wrap gap-3">
          <span className="rounded-full bg-[#0e7490] px-5 py-3 text-sm font-bold text-white">
            {content.allCourses}
          </span>
          <span className="rounded-full border border-cyan-100 bg-white px-5 py-3 text-sm font-bold text-slate-600">
            {content.primary}
          </span>
          <span className="rounded-full border border-cyan-100 bg-white px-5 py-3 text-sm font-bold text-slate-600">
            {content.preparatory}
          </span>
          <span className="rounded-full border border-cyan-100 bg-white px-5 py-3 text-sm font-bold text-slate-600">
            {content.secondary}
          </span>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <article
              key={course.id}
              className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div
                className={`relative grid h-56 place-items-center overflow-hidden bg-gradient-to-br ${course.color}`}
              >
                <div className="absolute -end-14 -top-16 h-60 w-60 rounded-full border border-white/20" />
                <div className="absolute -bottom-24 -start-12 h-60 w-60 rounded-full border border-white/20" />
                <span className="absolute start-6 top-6 rounded-full bg-white/20 px-4 py-2 text-xs font-bold text-white backdrop-blur">
                  {content.subject}
                </span>
                <span className="relative text-8xl drop-shadow-lg transition duration-300 group-hover:scale-110">
                  {course.icon}
                </span>
                <span className="absolute bottom-4 end-6 text-4xl font-black text-white/30">
                  {String(course.id).padStart(2, "0")}
                </span>
              </div>

              <div className="p-7">
                <span className="rounded-lg bg-cyan-50 px-3 py-2 text-xs font-bold text-[#0e7490]">
                  {isArabic ? course.stage : course.stageEn}
                </span>

                <h3 className="mt-6 text-2xl font-black text-[#164e63]">
                  {isArabic ? course.title : course.en}
                </h3>

                <p className="mt-4 min-h-20 text-sm leading-8 text-slate-500">
                  {isArabic ? course.description : course.descriptionEn}
                </p>

                <div className="mt-5 rounded-2xl bg-slate-50 p-4">
                  <p className="text-xs font-bold text-slate-400">
                    {content.targetGrades}
                  </p>
                  <p className="mt-2 text-sm font-bold text-slate-700">
                    {isArabic ? course.grades : course.gradesEn}
                  </p>
                </div>

                <div className="mt-5 grid grid-cols-2 gap-3 text-xs text-slate-600">
                  <div className="rounded-xl border border-slate-100 p-3">
                    📹 {course.lessons} {content.lesson}
                  </div>
                  <div className="rounded-xl border border-slate-100 p-3">
                    ⏱️ {isArabic ? course.duration : course.durationEn}
                  </div>
                  <div className="col-span-2 rounded-xl border border-slate-100 p-3">
                    🎯 {content.level}: {isArabic ? course.level : course.levelEn}
                  </div>
                </div>

                <div className="mt-5">
                  <p className="text-sm font-black text-[#164e63]">
                    {content.courseContent}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {(isArabic ? course.topics : course.topicsEn).map((topic) => (
                      <span
                        key={topic}
                        className="rounded-lg bg-cyan-50 px-3 py-2 text-xs font-bold text-[#0e7490]"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-5 text-xs text-slate-500">
                  <span>
                    👨‍🏫 {isArabic ? course.teacher : course.teacherEn}
                  </span>
                  <span>{content.teacher}</span>
                </div>

                <a
                  href="/login"
                  className="mt-5 flex items-center justify-between rounded-xl bg-[#0e7490] px-5 py-4 text-sm font-bold text-white transition hover:bg-[#164e63]"
                >
                  {content.enterSubject}
                  <span>←</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* LEARNING STEPS */}
      <section className="bg-[#164e63] py-28 text-white">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <div className="mb-16 text-center">
            <span className="text-sm font-black tracking-[4px] text-cyan-200">
              {content.howBadge}
            </span>
            <h2 className="mt-5 text-4xl font-black md:text-5xl">
              {content.howTitle}
            </h2>
            <p className="mt-5 text-cyan-50/80">{content.howDesc}</p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <div
                key={step.number}
                className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:-translate-y-2 hover:bg-white/10"
              >
                <div className="flex items-center justify-between">
                  <span className="text-5xl">{step.icon}</span>
                  <span className="text-4xl font-black text-cyan-200/30">
                    {step.number}
                  </span>
                </div>
                <h3 className="mt-8 text-xl font-black">
                  {isArabic ? step.title : step.en}
                </h3>
                <p className="mt-4 text-sm leading-8 text-cyan-50/80">
                  {isArabic ? step.description : step.descriptionEn}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SCHEDULE */}
      <section className="mx-auto max-w-7xl px-5 py-28 md:px-10">
        <div className="mb-14 text-center">
          <span className="text-sm font-black tracking-[4px] text-[#0e7490]">
            {content.scheduleBadge}
          </span>
          <h2 className="mt-5 text-4xl font-black text-[#164e63] md:text-5xl">
            {content.scheduleTitle}
          </h2>
          <p className="mt-5 text-slate-500">{content.scheduleDesc}</p>
        </div>

        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">
          <div className="grid grid-cols-4 gap-3 bg-[#0e7490] p-5 text-xs font-black text-white md:text-sm">
            <span>{content.day}</span>
            <span>{content.course}</span>
            <span>{content.time}</span>
            <span>{content.teacher}</span>
          </div>

          {schedule.map((item) => (
            <div
              key={item.day}
              className="grid grid-cols-4 items-center gap-3 border-b border-slate-100 p-5 text-xs transition hover:bg-cyan-50 md:text-sm"
            >
              <span className="font-black text-[#164e63]">
                {isArabic ? item.day : item.dayEn}
              </span>
              <span className="font-bold text-slate-700">
                {item.icon} {isArabic ? item.subject : item.subjectEn}
              </span>
              <span className="text-slate-500">
                {isArabic ? item.time : item.timeEn}
              </span>
              <span className="text-slate-500">
                {isArabic ? item.teacher : item.teacherEn}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="bg-cyan-50/60 py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <div className="mb-16 text-center">
            <span className="text-sm font-black tracking-[4px] text-[#0e7490]">
              {content.featuresBadge}
            </span>
            <h2 className="mt-5 text-4xl font-black text-[#164e63] md:text-5xl">
              {content.featuresTitle}
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-9 text-slate-500">
              {content.featuresDesc}
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-3xl border border-cyan-100 bg-white p-8 transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <span className="grid h-20 w-20 place-items-center rounded-3xl bg-cyan-50 text-4xl">
                  {feature.icon}
                </span>
                <h3 className="mt-7 text-xl font-black text-[#164e63]">
                  {isArabic ? feature.title : feature.en}
                </h3>
                <p className="mt-4 text-sm leading-8 text-slate-500">
                  {isArabic ? feature.description : feature.descriptionEn}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-5xl px-5 py-28">
        <div className="mb-14 text-center">
          <span className="text-sm font-black tracking-[4px] text-[#0e7490]">
            {content.faqBadge}
          </span>
          <h2 className="mt-5 text-4xl font-black text-[#164e63]">
            {content.faqTitle}
          </h2>
          <p className="mt-5 text-slate-500">{content.faqDesc}</p>
        </div>

        <div className="space-y-5">
          {faqs.map((faq, index) => (
            <details
              key={faq.question}
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm open:border-cyan-200 open:shadow-lg"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-black text-[#164e63]">
                <span>
                  {index + 1}. {isArabic ? faq.question : faq.en}
                </span>
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-cyan-50 text-xl text-[#0e7490] transition group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-5 border-t border-slate-100 pt-5 text-sm leading-9 text-slate-500">
                {isArabic ? faq.answer : faq.answerEn}
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 pb-24 md:px-10">
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 overflow-hidden rounded-[2.5rem] bg-gradient-to-l from-[#164e63] via-[#0e7490] to-[#0891b2] px-8 py-16 text-white md:grid-cols-2 md:px-16">
          <div className="absolute -start-24 -top-24 h-80 w-80 rounded-full bg-cyan-200/10 blur-3xl" />

          <div className="relative">
            <span className="text-sm font-black tracking-[4px] text-cyan-100">
              {content.ctaBadge}
            </span>
            <h2 className="mt-7 text-4xl font-black leading-relaxed md:text-5xl">
              {content.ctaTitle}
              <br />
              {content.ctaTitleEnd}
            </h2>
            <p className="mt-6 max-w-lg text-base leading-9 text-cyan-50/90">
              {content.ctaDescription}
            </p>
            <a
              href="/login"
              className="mt-9 inline-flex rounded-xl bg-white px-8 py-5 font-black text-[#0e7490] transition hover:-translate-y-1 hover:bg-cyan-50"
            >
              {content.ctaButton} ←
            </a>
          </div>

          <div className="relative grid min-h-72 place-items-center">
            <div className="grid h-64 w-64 place-items-center rounded-full border-[14px] border-white/15 bg-gradient-to-br from-cyan-400 to-[#0e7490] text-9xl shadow-2xl">
              🎓
            </div>
            <span className="absolute end-8 top-4 text-5xl">⭐</span>
            <span className="absolute bottom-4 start-8 text-5xl">📚</span>
            <span className="absolute start-5 top-10 text-4xl">💡</span>
          </div>
        </div>
      </section>
    </main>
  );
}
