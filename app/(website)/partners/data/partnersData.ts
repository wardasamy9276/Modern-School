
import {
  GraduationCap,
  Laptop,
  BookOpen,
  Globe,
  Brain,
  Building2,
} from "lucide-react";

export const getPartnersData = (isArabic: boolean) => {
  return {
    stats: [
      {
        id: 1,
        number: "25+",
        title: isArabic ? "شريك نجاح" : "Success Partners",
      },
      {
        id: 2,
        number: "15+",
        title: isArabic ? "مجال تعاون" : "Collaboration Fields",
      },
      {
        id: 3,
        number: "10+",
        title: isArabic ? "سنوات من التعاون" : "Years of Partnership",
      },
      {
        id: 4,
        number: "100%",
        title: isArabic ? "نحو مستقبل أفضل" : "Towards a Better Future",
      },
    ],

    partners: [
      {
        id: 1,
        name: isArabic ? "شركاء التعليم" : "Education Partners",
        category: isArabic ? "التعليم والتدريب" : "Education & Training",
        description: isArabic
          ? "التعاون مع المؤسسات التعليمية لتطوير المناهج وتحسين جودة العملية التعليمية."
          : "Collaborating with educational institutions to improve curricula and learning quality.",
        initials: "ED",
        icon: GraduationCap,
      },
      {
        id: 2,
        name: isArabic ? "شركاء التكنولوجيا" : "Technology Partners",
        category: isArabic ? "التكنولوجيا والتحول الرقمي" : "Technology & Digital",
        description: isArabic
          ? "توفير الحلول التقنية الحديثة لدعم التحول الرقمي وتطوير الخدمات المدرسية."
          : "Providing modern technology solutions to support digital transformation.",
        initials: "TECH",
        icon: Laptop,
      },
      {
        id: 3,
        name: isArabic ? "شركاء المعرفة" : "Knowledge Partners",
        category: isArabic ? "المحتوى والمصادر التعليمية" : "Learning Resources",
        description: isArabic
          ? "دعم الطلاب بمصادر تعليمية متنوعة تساعدهم على التعلم والبحث والابتكار."
          : "Supporting students with diverse educational resources and learning materials.",
        initials: "KN",
        icon: BookOpen,
      },
      {
        id: 4,
        name: isArabic ? "الشراكات الدولية" : "International Partners",
        category: isArabic ? "التعاون الدولي" : "International Cooperation",
        description: isArabic
          ? "الانفتاح على الخبرات والتجارب العالمية والاستفادة من أفضل الممارسات التعليمية."
          : "Connecting with global expertise and adopting international educational practices.",
        initials: "INT",
        icon: Globe,
      },
      {
        id: 5,
        name: isArabic ? "شركاء الابتكار" : "Innovation Partners",
        category: isArabic ? "الابتكار والتطوير" : "Innovation & Development",
        description: isArabic
          ? "تشجيع الإبداع وتنمية مهارات التفكير وحل المشكلات لدى الطلاب."
          : "Encouraging creativity, critical thinking, and problem-solving skills.",
        initials: "IN",
        icon: Brain,
      },
      {
        id: 6,
        name: isArabic ? "شركاء المجتمع" : "Community Partners",
        category: isArabic ? "المؤسسات المجتمعية" : "Community Institutions",
        description: isArabic
          ? "بناء علاقات تعاون فعالة مع المؤسسات التي تسهم في خدمة المجتمع."
          : "Building effective relationships with organizations that serve the community.",
        initials: "COM",
        icon: Building2,
      },
    ],

    benefits: [
      {
        id: 1,
        title: isArabic ? "تطوير التعليم" : "Educational Development",
        description: isArabic
          ? "تبادل الخبرات وتطوير أساليب التعليم والتعلم."
          : "Sharing expertise and improving teaching methods.",
      },
      {
        id: 2,
        title: isArabic ? "دعم الابتكار" : "Supporting Innovation",
        description: isArabic
          ? "توفير فرص جديدة للإبداع والتجربة والتطوير."
          : "Creating new opportunities for creativity and development.",
      },
      {
        id: 3,
        title: isArabic ? "بناء المستقبل" : "Building the Future",
        description: isArabic
          ? "إعداد جيل يمتلك المهارات والمعرفة اللازمة للمستقبل."
          : "Preparing a generation with the skills needed for the future.",
      },
    ],
  };
};
