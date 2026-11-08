import {
  GraduationCap,
  BookOpen,
  Award,
  Users,
} from "lucide-react";

export const getTeachersData = (isArabic: boolean) => {
  return {
    stats: [
      {
        id: 1,
        number: "85+",
        title: isArabic ? "معلم ومعلمة" : "Teachers",
        icon: Users,
      },
      {
        id: 2,
        number: "15+",
        title: isArabic ? "تخصص تعليمي" : "Subjects",
        icon: BookOpen,
      },
      {
        id: 3,
        number: "10+",
        title: isArabic ? "سنوات خبرة" : "Years Experience",
        icon: Award,
      },
      {
        id: 4,
        number: "100%",
        title: isArabic ? "تأهيل وتطوير" : "Professional Development",
        icon: GraduationCap,
      },
    ],

    teachers: [
      {
        id: 1,
        name: isArabic ? "أحمد محمد" : "Ahmed Mohamed",
        subject: isArabic ? "اللغة العربية" : "Arabic Language",
        experience: isArabic ? "10 سنوات خبرة" : "10 Years Experience",
        description: isArabic
          ? "متخصص في تدريس اللغة العربية وتنمية مهارات القراءة والكتابة."
          : "Specialized in Arabic language teaching and developing reading and writing skills.",
        initials: "AM",
      },
      {
        id: 2,
        name: isArabic ? "سارة أحمد" : "Sara Ahmed",
        subject: isArabic ? "اللغة الإنجليزية" : "English Language",
        experience: isArabic ? "8 سنوات خبرة" : "8 Years Experience",
        description: isArabic
          ? "تساعد الطلاب على تطوير مهارات التواصل والمحادثة باللغة الإنجليزية."
          : "Helps students develop English communication and conversation skills.",
        initials: "SA",
      },
      {
        id: 3,
        name: isArabic ? "محمود علي" : "Mahmoud Ali",
        subject: isArabic ? "الرياضيات" : "Mathematics",
        experience: isArabic ? "12 سنة خبرة" : "12 Years Experience",
        description: isArabic
          ? "يقدم المفاهيم الرياضية بأساليب مبسطة وتطبيقات عملية."
          : "Teaches mathematical concepts through simple methods and practical applications.",
        initials: "MA",
      },
      {
        id: 4,
        name: isArabic ? "منى خالد" : "Mona Khaled",
        subject: isArabic ? "العلوم" : "Science",
        experience: isArabic ? "7 سنوات خبرة" : "7 Years Experience",
        description: isArabic
          ? "تهتم بالتعلم التجريبي وتنمية التفكير العلمي لدى الطلاب."
          : "Focuses on experimental learning and scientific thinking.",
        initials: "MK",
      },
      {
        id: 5,
        name: isArabic ? "يوسف إبراهيم" : "Youssef Ibrahim",
        subject: isArabic ? "الدراسات الاجتماعية" : "Social Studies",
        experience: isArabic ? "9 سنوات خبرة" : "9 Years Experience",
        description: isArabic
          ? "يربط المناهج التعليمية بالحياة والواقع المحيط بالطلاب."
          : "Connects educational subjects with students' everyday lives.",
        initials: "YI",
      },
      {
        id: 6,
        name: isArabic ? "نور حسن" : "Nour Hassan",
        subject: isArabic ? "الحاسب الآلي" : "Computer Science",
        experience: isArabic ? "6 سنوات خبرة" : "6 Years Experience",
        description: isArabic
          ? "تعمل على تنمية المهارات الرقمية والتفكير البرمجي."
          : "Develops students' digital skills and computational thinking.",
        initials: "NH",
      },
    ],
  };
};