export interface WhyChooseUs {
  id: number;
  title_ar: string;
  title_en: string;
  description_ar: string;
  description_en: string;
  icon: string;
}

export const whyChooseUsItems: WhyChooseUs[] = [
  {
    id: 1,
    title_ar: "تعليم حديث",
    title_en: "Modern Education",
    description_ar: "نستخدم أحدث الأساليب التعليمية والتقنيات الذكية",
    description_en: "We use the latest teaching methods and smart technologies.",
    icon: "graduation-cap",
  },
  {
    id: 2,
    title_ar: "كادر تعليمي متميز",
    title_en: "Qualified Teachers",
    description_ar: "معلمون ذوو خبرة عالية وكفاءة",
    description_en: "Highly experienced and qualified teachers.",
    icon: "users",
  },
  {
    id: 3,
    title_ar: "متابعة مستمرة",
    title_en: "Continuous Follow-up",
    description_ar: "تواصل دائم مع أولياء الأمور",
    description_en: "Constant communication with parents.",
    icon: "message-circle",
  },
  {
    id: 4,
    title_ar: "بيئة آمنة",
    title_en: "Safe Environment",
    description_ar: "نحرص على توفير بيئة تعليمية آمنة ومحفزة",
    description_en: "We provide a safe and motivating learning environment.",
    icon: "shield-check",
  },
  {
    id: 5,
    title_ar: "أنشطة متنوعة",
    title_en: "Various Activities",
    description_ar: "أنشطة رياضية وثقافية لتنمية شخصية الطالب",
    description_en: "Sports and cultural activities to develop students’ personalities.",
    icon: "trophy",
  },
  {
    id: 6,
    title_ar: "نظام إداري ذكي",
    title_en: "Smart Management System",
    description_ar: "إدارة مدرسية إلكترونية متكاملة",
    description_en: "A fully integrated electronic school management system.",
    icon: "monitor-smartphone",
  },
];