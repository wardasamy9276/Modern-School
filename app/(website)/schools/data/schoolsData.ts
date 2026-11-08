
import {
  Building2,
  GraduationCap,
  Globe,
  Lightbulb,
  Microscope,
  Monitor,
  School,
  ShieldCheck,
  Star,
  Users,
  BookOpen,
} from "lucide-react";

export function getSchoolsData(isArabic: boolean) {
  const schools = [
    {
      id: 1,
      name: isArabic ? "مدارس الرواد الحديثة" : "Al Rowad Modern Schools",
      type: isArabic ? "تعليم متميز" : "Premium Education",
      description: isArabic
        ? "بيئة تعليمية متكاملة تهدف إلى بناء شخصية الطالب وتنمية مهاراته الأكاديمية والحياتية."
        : "An integrated educational environment focused on academic excellence and personal development.",
      icon: School,
      number: "01",
    },
    {
      id: 2,
      name: isArabic ? "مدارس الرواد الدولية" : "Al Rowad International Schools",
      type: isArabic ? "تعليم دولي" : "International Education",
      description: isArabic
        ? "نقدم تجربة تعليمية حديثة تجمع بين المناهج المتطورة والمهارات العالمية."
        : "A modern learning experience combining advanced curricula and global skills.",
      icon: Globe,
      number: "02",
    },
    {
      id: 3,
      name: isArabic ? "أكاديمية الرواد التعليمية" : "Al Rowad Educational Academy",
      type: isArabic ? "تنمية المهارات" : "Skills Development",
      description: isArabic
        ? "مساحة تعليمية لتنمية المواهب والإبداع وتعزيز مهارات التفكير والابتكار."
        : "A learning space for developing talents, creativity, critical thinking and innovation.",
      icon: GraduationCap,
      number: "03",
    },
  ];

  const statistics = [
    {
      value: "1,650+",
      label: isArabic ? "طالب وطالبة" : "Students",
      icon: Users,
    },
    {
      value: "85+",
      label: isArabic ? "معلم ومعلمة" : "Teachers",
      icon: GraduationCap,
    },
    {
      value: "48",
      label: isArabic ? "فصلًا دراسيًا" : "Classrooms",
      icon: Building2,
    },
    {
      value: "95%",
      label: isArabic ? "معدل التميز" : "Excellence Rate",
      icon: Star,
    },
  ];

  const features = [
    {
      icon: ShieldCheck,
      title: isArabic ? "بيئة تعليمية آمنة" : "Safe Learning Environment",
      description: isArabic
        ? "نوفر بيئة آمنة ومحفزة تساعد الطلاب على التعلم والنمو."
        : "A safe and supportive environment that helps students learn and grow.",
    },
    {
      icon: Microscope,
      title: isArabic ? "التعلم بالتجربة" : "Learning by Experience",
      description: isArabic
        ? "نعتمد على الأنشطة والتجارب لتنمية مهارات الطلاب."
        : "Activities and practical experiences that develop students' skills.",
    },
    {
      icon: Monitor,
      title: isArabic ? "التعليم الذكي" : "Smart Education",
      description: isArabic
        ? "نستخدم التكنولوجيا لدعم العملية التعليمية وتطويرها."
        : "Technology that supports and improves the learning process.",
    },
    {
      icon: Lightbulb,
      title: isArabic ? "الإبداع والابتكار" : "Creativity & Innovation",
      description: isArabic
        ? "نشجع الطلاب على التفكير الإبداعي واكتشاف قدراتهم."
        : "Encouraging creative thinking and discovering students' abilities.",
    },
  ];

  const stages = [
    {
      number: "01",
      title: isArabic ? "مرحلة رياض الأطفال" : "Kindergarten",
      subtitle: isArabic ? "بداية رحلة التعلم" : "The Start of Learning",
      icon: Star,
    },
    {
      number: "02",
      title: isArabic ? "المرحلة الابتدائية" : "Primary Stage",
      subtitle: isArabic ? "بناء الأساس المعرفي" : "Building Strong Foundations",
      icon: BookOpen,
    },
    {
      number: "03",
      title: isArabic
        ? "المرحلة الإعدادية والثانوية"
        : "Preparatory & Secondary",
      subtitle: isArabic ? "الاستعداد للمستقبل" : "Preparing for the Future",
      icon: GraduationCap,
    },
  ];

  return {
    schools,
    statistics,
    features,
    stages,
  };
}
