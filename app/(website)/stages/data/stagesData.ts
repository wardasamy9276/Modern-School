
import {
  Baby,
  BookOpen,
  GraduationCap,
  Brain,
  Palette,
  Microscope,
} from "lucide-react";

export function getStagesData(isArabic: boolean) {
  const stages = [
    {
      id: 1,
      number: "01",
      title: isArabic ? "مرحلة رياض الأطفال" : "Kindergarten Stage",
      subtitle: isArabic ? "بداية رحلة التعلم" : "The Beginning of Learning",
      age: isArabic ? "من 4 إلى 6 سنوات" : "4 - 6 Years",
      description: isArabic
        ? "مرحلة تأسيسية تساعد الأطفال على اكتشاف العالم من حولهم وتنمية مهارات التواصل والتفكير والإبداع من خلال اللعب والأنشطة التعليمية."
        : "A foundational stage where children explore the world around them and develop communication, thinking and creativity through play and educational activities.",
      icon: Baby,
      subjects: isArabic
        ? ["اللغة العربية", "اللغة الإنجليزية", "الرياضيات المبسطة", "الأنشطة الفنية", "المهارات الحياتية"]
        : ["Arabic Language", "English Language", "Basic Mathematics", "Art Activities", "Life Skills"],
    },
    {
      id: 2,
      number: "02",
      title: isArabic ? "المرحلة الابتدائية" : "Primary Stage",
      subtitle: isArabic ? "بناء الأساس المعرفي" : "Building Knowledge Foundations",
      age: isArabic ? "من 6 إلى 12 سنة" : "6 - 12 Years",
      description: isArabic
        ? "نساعد الطلاب على بناء أساس علمي قوي واكتساب المهارات الأساسية في القراءة والكتابة والرياضيات والعلوم، مع تنمية التفكير المستقل."
        : "Students build strong academic foundations and develop essential reading, writing, mathematics and science skills while learning independent thinking.",
      icon: BookOpen,
      subjects: isArabic
        ? ["اللغة العربية", "اللغة الإنجليزية", "الرياضيات", "العلوم", "الدراسات الاجتماعية", "تكنولوجيا المعلومات"]
        : ["Arabic Language", "English Language", "Mathematics", "Science", "Social Studies", "Information Technology"],
    },
    {
      id: 3,
      number: "03",
      title: isArabic ? "المرحلة الإعدادية" : "Preparatory Stage",
      subtitle: isArabic ? "اكتشاف القدرات وتطوير المهارات" : "Discovering Potential & Skills",
      age: isArabic ? "من 12 إلى 15 سنة" : "12 - 15 Years",
      description: isArabic
        ? "نركز على تطوير شخصية الطالب وتعزيز مهارات التحليل والبحث والتفكير النقدي، وإعداده للانتقال إلى المرحلة الثانوية."
        : "We focus on personal development, analytical skills, research and critical thinking to prepare students for secondary education.",
      icon: Brain,
      subjects: isArabic
        ? ["اللغة العربية", "اللغة الإنجليزية", "الرياضيات", "العلوم", "الدراسات الاجتماعية", "الحاسب الآلي"]
        : ["Arabic Language", "English Language", "Mathematics", "Science", "Social Studies", "Computer Studies"],
    },
    {
      id: 4,
      number: "04",
      title: isArabic ? "المرحلة الثانوية" : "Secondary Stage",
      subtitle: isArabic ? "الاستعداد للمستقبل الجامعي" : "Preparing for University",
      age: isArabic ? "من 15 إلى 18 سنة" : "15 - 18 Years",
      description: isArabic
        ? "مرحلة متقدمة تهدف إلى تعميق المعرفة والتخصص الأكاديمي وتنمية مهارات اتخاذ القرار والاستعداد للحياة الجامعية والمهنية."
        : "An advanced stage focused on deeper knowledge, academic pathways, decision-making and preparation for university and professional life.",
      icon: GraduationCap,
      subjects: isArabic
        ? ["المواد الأساسية", "الرياضيات المتقدمة", "العلوم المتخصصة", "اللغات", "التكنولوجيا", "مهارات البحث"]
        : ["Core Subjects", "Advanced Mathematics", "Specialized Sciences", "Languages", "Technology", "Research Skills"],
    },
  ];

  const benefits = [
    {
      icon: Brain,
      title: isArabic ? "تنمية التفكير" : "Critical Thinking",
      description: isArabic
        ? "تطوير مهارات التحليل وحل المشكلات."
        : "Developing analytical and problem-solving skills.",
    },
    {
      icon: Palette,
      title: isArabic ? "الإبداع والابتكار" : "Creativity & Innovation",
      description: isArabic
        ? "تشجيع المواهب والأنشطة الإبداعية."
        : "Encouraging talents and creative activities.",
    },
    {
      icon: Microscope,
      title: isArabic ? "التعلم العملي" : "Practical Learning",
      description: isArabic
        ? "ربط المعرفة بالتجارب والتطبيقات."
        : "Connecting knowledge with experiments and applications.",
    },
  ];

  return { stages, benefits };
}
