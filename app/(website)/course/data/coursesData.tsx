import {
  BookOpen,
  Calculator,
  FlaskConical,
  Globe,
  Laptop,
  Languages,
  Palette,
  Atom,
} from "lucide-react";

export function getCoursesData(isArabic: boolean) {
  return {
    stats: [
      {
        number: "30+",
        label: isArabic ? "كورس تعليمي" : "Educational Courses",
      },
      {
        number: "15+",
        label: isArabic ? "تخصص تعليمي" : "Learning Subjects",
      },
      {
        number: "100%",
        label: isArabic ? "اهتمام بالتطوير" : "Focus on Growth",
      },
      {
        number: "24/7",
        label: isArabic ? "تعلم مستمر" : "Continuous Learning",
      },
    ],

    categories: [
      {
        name: isArabic ? "الكل" : "All Courses",
        value: "all",
      },
      {
        name: isArabic ? "العلوم" : "Science",
        value: "science",
      },
      {
        name: isArabic ? "الرياضيات" : "Mathematics",
        value: "math",
      },
      {
        name: isArabic ? "اللغات" : "Languages",
        value: "languages",
      },
      {
        name: isArabic ? "التكنولوجيا" : "Technology",
        value: "technology",
      },
    ],

    courses: [
      {
        id: 1,
        title: isArabic ? "الرياضيات المتقدمة" : "Advanced Mathematics",
        category: "math",
        categoryName: isArabic ? "الرياضيات" : "Mathematics",
        description: isArabic
          ? "تعلم المفاهيم الرياضية وتنمية مهارات التفكير والتحليل وحل المسائل."
          : "Explore mathematical concepts and develop analytical and problem-solving skills.",
        teacher: isArabic ? "قسم الرياضيات" : "Mathematics Department",
        level: isArabic ? "جميع المراحل" : "All Levels",
        duration: isArabic ? "12 أسبوعًا" : "12 Weeks",
        icon: Calculator,
        color: "from-blue-500 to-cyan-500",
        featured: true,
      },
      {
        id: 2,
        title: isArabic ? "العلوم العامة" : "General Science",
        category: "science",
        categoryName: isArabic ? "العلوم" : "Science",
        description: isArabic
          ? "اكتشف أسرار العلوم والطبيعة من خلال التجارب والمفاهيم العلمية."
          : "Discover science and nature through experiments and scientific concepts.",
        teacher: isArabic ? "قسم العلوم" : "Science Department",
        level: isArabic ? "المرحلة الابتدائية" : "Primary Stage",
        duration: isArabic ? "10 أسابيع" : "10 Weeks",
        icon: FlaskConical,
        color: "from-emerald-500 to-teal-500",
        featured: true,
      },
      {
        id: 3,
        title: isArabic ? "اللغة الإنجليزية" : "English Language",
        category: "languages",
        categoryName: isArabic ? "اللغات" : "Languages",
        description: isArabic
          ? "طور مهارات القراءة والكتابة والاستماع والمحادثة باللغة الإنجليزية."
          : "Improve reading, writing, listening and speaking skills in English.",
        teacher: isArabic ? "قسم اللغات" : "Languages Department",
        level: isArabic ? "جميع المراحل" : "All Levels",
        duration: isArabic ? "16 أسبوعًا" : "16 Weeks",
        icon: Languages,
        color: "from-violet-500 to-purple-500",
        featured: true,
      },
      {
        id: 4,
        title: isArabic ? "البرمجة والتكنولوجيا" : "Programming & Technology",
        category: "technology",
        categoryName: isArabic ? "التكنولوجيا" : "Technology",
        description: isArabic
          ? "تعرف على أساسيات البرمجة والتفكير المنطقي ومهارات التكنولوجيا."
          : "Learn programming fundamentals, logical thinking and technology skills.",
        teacher: isArabic ? "قسم التكنولوجيا" : "Technology Department",
        level: isArabic ? "المرحلة الإعدادية والثانوية" : "Preparatory & Secondary",
        duration: isArabic ? "14 أسبوعًا" : "14 Weeks",
        icon: Laptop,
        color: "from-cyan-500 to-blue-600",
        featured: true,
      },
      {
        id: 5,
        title: isArabic ? "الفيزياء" : "Physics",
        category: "science",
        categoryName: isArabic ? "العلوم" : "Science",
        description: isArabic
          ? "ادرس قوانين الطبيعة والحركة والطاقة بطريقة مبسطة وتفاعلية."
          : "Study the laws of nature, motion and energy through interactive learning.",
        teacher: isArabic ? "قسم العلوم" : "Science Department",
        level: isArabic ? "المرحلة الثانوية" : "Secondary Stage",
        duration: isArabic ? "12 أسبوعًا" : "12 Weeks",
        icon: Atom,
        color: "from-orange-500 to-amber-500",
        featured: false,
      },
      {
        id: 6,
        title: isArabic ? "اللغة العربية" : "Arabic Language",
        category: "languages",
        categoryName: isArabic ? "اللغات" : "Languages",
        description: isArabic
          ? "تنمية مهارات القراءة والتعبير والنحو والإملاء."
          : "Develop reading, writing, grammar and language expression skills.",
        teacher: isArabic ? "قسم اللغة العربية" : "Arabic Department",
        level: isArabic ? "جميع المراحل" : "All Levels",
        duration: isArabic ? "16 أسبوعًا" : "16 Weeks",
        icon: BookOpen,
        color: "from-rose-500 to-pink-500",
        featured: false,
      },
      {
        id: 7,
        title: isArabic ? "الجغرافيا" : "Geography",
        category: "science",
        categoryName: isArabic ? "العلوم" : "Science",
        description: isArabic
          ? "تعرف على العالم والخرائط والبيئة والظواهر الجغرافية."
          : "Explore the world, maps, environments and geographical phenomena.",
        teacher: isArabic ? "قسم الدراسات" : "Social Studies Department",
        level: isArabic ? "المرحلة الإعدادية" : "Preparatory Stage",
        duration: isArabic ? "8 أسابيع" : "8 Weeks",
        icon: Globe,
        color: "from-teal-500 to-green-500",
        featured: false,
      },
      {
        id: 8,
        title: isArabic ? "الفنون والإبداع" : "Arts & Creativity",
        category: "technology",
        categoryName: isArabic ? "الفنون" : "Arts",
        description: isArabic
          ? "اكتشف المواهب الفنية ونم مهارات الإبداع والتصميم."
          : "Discover artistic talents and develop creativity and design skills.",
        teacher: isArabic ? "قسم الأنشطة" : "Activities Department",
        level: isArabic ? "جميع المراحل" : "All Levels",
        duration: isArabic ? "8 أسابيع" : "8 Weeks",
        icon: Palette,
        color: "from-fuchsia-500 to-purple-500",
        featured: false,
      },
    ],
  };
}