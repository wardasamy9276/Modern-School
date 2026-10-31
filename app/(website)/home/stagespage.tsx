"use client";

import React, { useState } from "react";
import { useLanguage } from "../../context/LanguageContext";
import {
  Search,
  Filter,
  Star,
  MapPin,
  BookOpen,
  ChevronRight,
  ChevronLeft,
  GraduationCap,
  X,
  CheckCircle2,
} from "lucide-react";

interface School {
  id: number;
  nameAr: string;
  nameEn: string;
  typeAr: string;
  typeEn: string;
  curriculumAr: string;
  curriculumEn: string;
  rating: number;
  reviewsCount: number;
  locationAr: string;
  locationEn: string;
  image: string;
  gradesAr: string;
  gradesEn: string;
  feesAr: string;
  feesEn: string;
  descriptionAr: string;
  descriptionEn: string;
}

const mockSchools: School[] = [
  {
    id: 1,
    nameAr: "مدرسة الرواد الحديثة",
    nameEn: "Modern Pioneers School",
    typeAr: "لغات / دولي",
    typeEn: "Languages / International",
    curriculumAr: "أمريكي / بريطاني",
    curriculumEn: "American / British",
    rating: 4.9,
    reviewsCount: 120,
    locationAr: "السادس من أكتوبر، الجيزة",
    locationEn: "6th of October, Giza",
    image:"./assets/imge copy 2/op.jpg",
    gradesAr: "KG - الثانوية العامة",
    gradesEn: "KG - High School",
    feesAr: "متوسطة إلى مرتفعة",
    feesEn: "Moderate to High",
    descriptionAr:
      "نقدم بيئة تعليمية تتطور مع الطالب في كل مرحلة عمرية لبناء شخصية أكاديمية متكاملة باستخدام أحدث تقنيات الـ ERP والـ LMS وأنظمة الحضور المتقدمة.",
    descriptionEn:
      "We provide an educational environment that evolves with the student at every age stage to build an integrated academic personality using the latest ERP and LMS technologies.",
  },
  {
    id: 2,
    nameAr: "مدارس النور الخاصة للغات",
    nameEn: "Al-Noor Private Language Schools",
    typeAr: "لغات",
    typeEn: "Languages",
    curriculumAr: "وزاري مصري (لغات)",
    curriculumEn: "Egyptian Ministry (Languages)",
    rating: 4.6,
    reviewsCount: 85,
    locationAr: "الشيخ زايد، الجيزة",
    locationEn: "Sheikh Zayed, Giza",
    image:
"./assets/imge copy 2/op1.jpg" ,
   gradesAr: "ابتدائي - ثانوي",
    gradesEn: "Primary - Secondary",
    feesAr: "اقتصادية",
    feesEn: "Economical",
    descriptionAr:
      "نقدم بيئة تعليمية تتطور مع الطالب في كل مرحلة عمرية لبناء شخصية أكاديمية متكاملة مع تركيز قوي على القيم واللغات الأجنبية.",
    descriptionEn:
      "We provide an educational environment that evolves with the student at every age stage to build an integrated academic personality with a strong focus on values and foreign languages.",
  },
  {
    id: 3,
    nameAr: "أكسفورد البريطانية الحديثة",
    nameEn: "Modern British Oxford",
    typeAr: "دولي",
    typeEn: "International",
    curriculumAr: "بريطاني (IGCSE)",
    curriculumEn: "British (IGCSE)",
    rating: 4.8,
    reviewsCount: 94,
    locationAr: "التجمع الخامس، القاهرة",
    locationEn: "New Cairo, Fifth Settlement",
    image:
"./assets/img/Al Riyadah International School11.jpeg",
    gradesAr: "KG - دبلومة",
    gradesEn: "KG - Diploma",
    feesAr: "مرتفعة",
    feesEn: "High",
    descriptionAr:
      "نقدم بيئة تعليمية تتطور مع الطالب في كل مرحلة عمرية لبناء شخصية أكاديمية متكاملة وفق المنهج البريطاني المعتمد.",
    descriptionEn:
      "We provide an educational environment that evolves with the student at every age stage to build an integrated academic personality according to the accredited British curriculum.",
  },
  {
    id: 4,
    nameAr: "مستقبل التكنولوجيا المتميزة",
    nameEn: "Advanced Tech Future",
    typeAr: "تجريبي / لغات",
    typeEn: "Experimental / Languages",
    curriculumAr: "أمريكي",
    curriculumEn: "American",
    rating: 4.5,
    reviewsCount: 62,
    locationAr: "مدينة نصر، القاهرة",
    locationEn: "Nasr City, Cairo",
    image:
"./assets/imge copy 2/op3.jpg" ,
   gradesAr: "جميع المراحل",
    gradesEn: "All Stages",
    feesAr: "متوسطة",
    feesEn: "Moderate",
    descriptionAr:
      "نقدم بيئة تعليمية تتطور مع الطالب في كل مرحلة عمرية لبناء شخصية أكاديمية متكاملة مع دمج التكنولوجيا والبرمجة.",
    descriptionEn:
      "We provide an educational environment that evolves with the student at every age stage to build an integrated academic personality integrating technology and programming.",
  },
  {
    id: 5,
    nameAr: "رواد المستقبل الدولية",
    nameEn: "Future Pioneers International",
    typeAr: "دولي",
    typeEn: "International",
    curriculumAr: "أمريكي",
    curriculumEn: "American",
    rating: 4.7,
    reviewsCount: 110,
    locationAr: "المقطم، القاهرة",
    locationEn: "Mokattam, Cairo",
    image:
"./assets/imge copy 2/op4.jpg"  ,
  gradesAr: "KG - الثانوية",
    gradesEn: "KG - High School",
    feesAr: "متوسطة",
    feesEn: "Moderate",
    descriptionAr:
      "نقدم بيئة تعليمية تتطور مع الطالب في كل مرحلة عمرية لبناء شخصية أكاديمية متكاملة تشجع التفكير النقدي والابتكار.",
    descriptionEn:
      "We provide an educational environment that evolves with the student at every age stage to build an integrated academic personality encouraging critical thinking.",
  },
  {
    id: 6,
    nameAr: "صروح العلم الخاصة",
    nameEn: "Pillars of Science Private",
    typeAr: "لغات",
    typeEn: "Languages",
    curriculumAr: "وزاري مصري (لغات)",
    curriculumEn: "Egyptian Ministry (Languages)",
    rating: 4.4,
    reviewsCount: 50,
    locationAr: "هليوبوليس، القاهرة",
    locationEn: "Heliopolis, Cairo",
    image:
"./assets/imge copy 2/op5.jpg"  ,
  gradesAr: "ابتدائي - اعدادي",
    gradesEn: "Primary - Preparatory",
    feesAr: "اقتصادية",
    feesEn: "Economical",
    descriptionAr:
      "نقدم بيئة تعليمية تتطور مع الطالب في كل مرحلة عمرية لبناء شخصية أكاديمية متكاملة عبر التفوق الدراسي والأنشطة.",
    descriptionEn:
      "We provide an educational environment that evolves with the student at every age stage to build an integrated academic personality through academic excellence.",
  },
  {
    id: 7,
    nameAr: "مدرسة طلائع الأجيال الخاصة للغات",
    nameEn: "Talaei Al-Ayal Private Language School",
    typeAr: "لغات",
    typeEn: "Languages",
    curriculumAr: "وزاري مصري (لغات)",
    curriculumEn: "Egyptian Ministry (Languages)",
    rating: 4.5,
    reviewsCount: 43,
    locationAr: "الهرم، الجيزة",
    locationEn: "Haram, Giza",
    image:
"public/assets/imge copy 2/op6.jpg" ,
   gradesAr: "KG - ثانوي",
    gradesEn: "KG - Secondary",
    feesAr: "اقتصادية",
    feesEn: "Economical",
    descriptionAr:
      "نقدم بيئة تعليمية تتطور مع الطالب في كل مرحلة عمرية لبناء شخصية أكاديمية متكاملة ونامية لمهارات الحاسب.",
    descriptionEn:
      "We provide an educational environment that evolves with the student at every age stage to build an integrated academic personality and develop computer skills.",
  },
  {
    id: 8,
    nameAr: "مدرسة قصر الأمان للتعليم الأساسي",
    nameEn: "Qasr Al-Aman Basic Education School",
    typeAr: "حكومي تجريبي",
    typeEn: "Experimental Public",
    curriculumAr: "وزاري مصري (عربي/لغات)",
    curriculumEn: "Egyptian Ministry (Arabic/Languages)",
    rating: 4.2,
    reviewsCount: 38,
    locationAr: "الدقى، الجيزة",
    locationEn: "Dokki, Giza",
    image:
"/assets/imge copy 2/op7.jpg" ,
   gradesAr: "ابتدائي - اعدادي",
    gradesEn: "Primary - Preparatory",
    feesAr: "اقتصادية جداً",
    feesEn: "Very Economical",
    descriptionAr:
      "نقدم بيئة تعليمية تتطور مع الطالب في كل مرحلة عمرية لبناء شخصية أكاديمية متكاملة مطابقة لمعايير الجودة.",
    descriptionEn:
      "We provide an educational environment that evolves with the student at every age stage to build an integrated academic personality meeting quality standards.",
  },
  {
    id: 9,
    nameAr: "مدارس العبور القومية للغات",
    nameEn: "Obour National Language Schools",
    typeAr: "لغات",
    typeEn: "Languages",
    curriculumAr: "وزاري مصري (لغات)",
    curriculumEn: "Egyptian Ministry (Languages)",
    rating: 4.7,
    reviewsCount: 65,
    locationAr: "مدينة العبور، القليوبية",
    locationEn: "Obour City, Qalyubia",
    image:
"/assets/imge copy 2/op9.jpg"  ,
  gradesAr: "KG - ثانوية عامة",
    gradesEn: "KG - High School",
    feesAr: "متوسطة",
    feesEn: "Moderate",
    descriptionAr:
      "نقدم بيئة تعليمية تتطور مع الطالب في كل مرحلة عمرية لبناء شخصية أكاديمية متكاملة تجمع بين الأصالة والتقنية.",
    descriptionEn:
      "We provide an educational environment that evolves with the student at every age stage to build an integrated academic personality combining authenticity and technology.",
  },
  {
    id: 10,
    nameAr: "سيتي الدولية للغات والعلوم",
    nameEn: "City International Languages & Sciences",
    typeAr: "دولي / لغات",
    typeEn: "International / Languages",
    curriculumAr: "أمريكي",
    curriculumEn: "American",
    rating: 4.8,
    reviewsCount: 77,
    locationAr: "السادس من أكتوبر، الجيزة",
    locationEn: "6th of October, Giza",
    image:"public/assets/imge copy 2/op10.jpeg",
    gradesAr: "KG - ثانوية",
    gradesEn: "KG - High School",
    feesAr: "مرتفعة",
    feesEn: "High",
    descriptionAr:
      "نقدم بيئة تعليمية تتطور مع الطالب في كل مرحلة عمرية لبناء شخصية أكاديمية متكاملة بأحدث البرامج الأمريكية.",
    descriptionEn:
      "We provide an educational environment that evolves with the student at every age stage to build an integrated academic personality with modern American programs.",
  },
  {
    id: 11,
    nameAr: "المنارة الخاصة للغات",
    nameEn: "Al-Manara Private Language School",
    typeAr: "لغات",
    typeEn: "Languages",
    curriculumAr: "وزاري مصري (لغات)",
    curriculumEn: "Egyptian Ministry (Languages)",
    rating: 4.3,
    reviewsCount: 41,
    locationAr: "مدينة الشروق، القاهرة",
    locationEn: "El Shorouk City, Cairo",

    image:"./assets/imge copy 2/op.jpg",
    gradesAr: "ابتدائي - ثانوي",
    gradesEn: "Primary - Secondary",
    feesAr: "متوسطة",
    feesEn: "Moderate",
    descriptionAr:
      "نقدم بيئة تعليمية تتطور مع الطالب في كل مرحلة عمرية لبناء شخصية أكاديمية متكاملة ومنظومة تربوية آمنة.",
    descriptionEn:
      "We provide an educational environment that evolves with the student at every age stage to build an integrated academic personality and a secure educational system.",
  },
  {
    id: 12,
    nameAr: "النيل الدولية المتكاملة",
    nameEn: "Nile Integrated International School",
    typeAr: "دولي",
    typeEn: "International",
    curriculumAr: "بريطاني / مصري دولي",
    curriculumEn: "British / NIS",
    rating: 4.9,
    reviewsCount: 135,
    locationAr: "الشيخ زايد، الجيزة",
    locationEn: "Sheikh Zayed, Giza",
    image:
"./assets/imge copy 2/op1.jpg" ,
    gradesAr: "KG - دبلومة",
    gradesEn: "KG - Diploma",
    feesAr: "مرتفعة جداً",
    feesEn: "Very High",
    descriptionAr:
      "نقدم بيئة تعليمية تتطور مع الطالب في كل مرحلة عمرية لبناء شخصية أكاديمية متكاملة بشهادات معتمدة ومختبرات روبوتكس.",
    descriptionEn:
      "We provide an educational environment that evolves with the student at every age stage to build an integrated academic personality with certified certificates.",
  },
  {
    id: 13,
    nameAr: "مفيستس للغات الخاصة",
    nameEn: "Memphis Private Language School",
    typeAr: "لغات",
    typeEn: "Languages",
    curriculumAr: "وزاري مصري (لغات)",
    curriculumEn: "Egyptian Ministry (Languages)",
    rating: 4.5,
    reviewsCount: 52,
    locationAr: "المعادي، القاهرة",
    locationEn: "Maadi, Cairo",
    // image:"./assets/imge copy 2/op.jpg",
    image:"./assets/imge copy 2/op.jpg",

  
    gradesAr: "KG - ثانوي",
    gradesEn: "KG - Secondary",
    feesAr: "متوسطة إلى مرتفعة",
    feesEn: "Moderate to High",
    descriptionAr:
      "نقدم بيئة تعليمية تتطور مع الطالب في كل مرحلة عمرية لبناء شخصية أكاديمية متكاملة تجمع العراقة والأساليب الحديثة.",
    descriptionEn:
      "We provide an educational environment that evolves with the student at every age stage to build an integrated academic personality combining tradition and modern methods.",
  },
  {
    id: 14,
    nameAr: "الكرمة الحديثة للغات",
    nameEn: "Modern Karma Language School",
    typeAr: "لغات",
    typeEn: "Languages",
    curriculumAr: "وزاري مصري (لغات)",
    curriculumEn: "Egyptian Ministry (Languages)",
    rating: 4.4,
    reviewsCount: 39,
    locationAr: "التجمع الأول، القاهرة",
    locationEn: "First Settlement, Cairo",
    image:
    "./assets/school/images.jpg",
    gradesAr: "ابتدائي - اعدادي",
    gradesEn: "Primary - Preparatory",
    feesAr: "متوسطة",
    feesEn: "Moderate",
    descriptionAr:
      "نقدم بيئة تعليمية تتطور مع الطالب في كل مرحلة عمرية لبناء شخصية أكاديمية متكاملة بفصول ذكية ومناهج مطورة.",
    descriptionEn:
      "We provide an educational environment that evolves with the student at every age stage to build an integrated academic personality with smart classrooms.",
  },
  {
    id: 15,
    nameAr: "كابيتال الأمريكية الخاصة",
    nameEn: "Capital American Private School",
    typeAr: "دولي / لغات",
    typeEn: "International / Languages",
    curriculumAr: "أمريكي",
    curriculumEn: "American",
    rating: 4.7,
    reviewsCount: 88,
    locationAr: "العاصمة الإدارية الجديدة",
    locationEn: "New Administrative Capital",
    image:
"./assets/imge copy 2/op1.jpg" ,

    gradesAr: "KG - الثانوية",
    gradesEn: "KG - High School",
    feesAr: "مرتفعة",
    feesEn: "High",
    descriptionAr:
      "نقدم بيئة تعليمية تتطور مع الطالب في كل مرحلة عمرية لبناء شخصية أكاديمية متكاملة في العاصمة الإدارية.",
    descriptionEn:
      "We provide an educational environment that evolves with the student at every age stage to build an integrated academic personality in the New Capital.",
  },
  {
    id: 16,
    nameAr: "زهراء مدينة نصر للغات",
    nameEn: "Zahraa Nasr City Language School",
    typeAr: "لغات",
    typeEn: "Languages",
    curriculumAr: "وزاري مصري (لغات)",
    curriculumEn: "Egyptian Ministry (Languages)",
    rating: 4.2,
    reviewsCount: 30,
    locationAr: "مدينة نصر، القاهرة",
    locationEn: "Nasr City, Cairo",
    image:
"./assets/imge copy 2/op1.jpg" ,

    gradesAr: "ابتدائي - ثانوي",
    gradesEn: "Primary - Secondary",
    feesAr: "اقتصادية",
    feesEn: "Economical",
    descriptionAr:
      "نقدم بيئة تعليمية تتطور مع الطالب في كل مرحلة عمرية لبناء شخصية أكاديمية متكاملة برعاية خاصة لكل طالب.",
    descriptionEn:
      "We provide an educational environment that evolves with the student at every age stage to build an integrated academic personality with special care.",
  },
  {
    id: 17,
    nameAr: "الكونتننتال البريطانية",
    nameEn: "Continental British School",
    typeAr: "دولي",
    typeEn: "International",
    curriculumAr: "بريطاني (IGCSE)",
    curriculumEn: "British (IGCSE)",
    rating: 4.8,
    reviewsCount: 96,
    locationAr: "حدائق الأهرام، الجيزة",
    locationEn: "Hadayek Al-Ahram, Giza",
    image:
"./assets/imge copy 2/op5.jpg"  ,

    gradesAr: "KG - ثانوية",
    gradesEn: "KG - High School",
    feesAr: "مرتفعة",
    feesEn: "High",
    descriptionAr:
      "نقدم بيئة تعليمية تتطور مع الطالب في كل مرحلة عمرية لبناء شخصية أكاديمية متكاملة وفق المنهج البريطاني.",
    descriptionEn:
      "We provide an educational environment that evolves with the student at every age stage to build an integrated academic personality under the British curriculum.",
  },
  {
    id: 18,
    nameAr: "الفيروز الخاصة للغات",
    nameEn: "Al-Fayrouz Private Language School",
    typeAr: "لغات",
    typeEn: "Languages",
    curriculumAr: "وزاري مصري (لغات)",
    curriculumEn: "Egyptian Ministry (Languages)",
    rating: 4.3,
    reviewsCount: 45,
    locationAr: "بدر، القاهرة",
    locationEn: "Badr City, Cairo",
    image:
"./assets/imge copy 2/op4.jpg"  ,

    gradesAr: "جميع المراحل",
    gradesEn: "All Stages",
    feesAr: "اقتصادية",
    feesEn: "Economical",
    descriptionAr:
      "نقدم بيئة تعليمية تتطور مع الطالب في كل مرحلة عمرية لبناء شخصية أكاديمية متكاملة وقدرات علمية مبسطة.",
    descriptionEn:
      "We provide an educational environment that evolves with the student at every age stage to build an integrated academic personality and simplified scientific abilities.",
  },
  {
    id: 19,
    nameAr: "البسمة الحديثة للغات",
    nameEn: "Modern Al-Basma Language School",
    typeAr: "لغات",
    typeEn: "Languages",
    curriculumAr: "وزاري مصري (لغات)",
    curriculumEn: "Egyptian Ministry (Languages)",
    rating: 4.5,
    reviewsCount: 58,
    locationAr: "المطرية، القاهرة",
    locationEn: "Mataria, Cairo",
    image:
"./assets/imge copy 2/op3.jpg" ,

    gradesAr: "ابتدائي - اعدادي - ثانوي",
    gradesEn: "Primary - Prep - Secondary",
    feesAr: "اقتصادية",
    feesEn: "Economical",
    descriptionAr:
      "نقدم بيئة تعليمية تتطور مع الطالب في كل مرحلة عمرية لبناء شخصية أكاديمية متكاملة وتنمية المهارات السلوكية.",
    descriptionEn:
      "We provide an educational environment that evolves with the student at every age stage to build an integrated academic personality and develop behavioral skills.",
  },
  {
    id: 20,
    nameAr: "جولدن بريدج الدولية",
    nameEn: "Golden Bridge International School",
    typeAr: "دولي",
    typeEn: "International",
    curriculumAr: "أمريكي",
    curriculumEn: "American",
    rating: 4.9,
    reviewsCount: 115,
    locationAr: "الشيخ زايد، الجيزة",
    locationEn: "Sheikh Zayed, Giza",
    image:
"./assets/img/Al Riyadah International School11.jpeg",

    gradesAr: "KG - دبلومة أمريكية",
    gradesEn: "KG - American Diploma",
    feesAr: "مرتفعة جداً",
    feesEn: "Very High",
    descriptionAr:
      "نقدم بيئة تعليمية تتطور مع الطالب في كل مرحلة عمرية لبناء شخصية أكاديمية متكاملة بحرم جامعي مصغر ومسبح أولمبي.",
    descriptionEn:
      "We provide an educational environment that evolves with the student at every age stage to build an integrated academic personality with a mini campus.",
  },
  {
    id: 21,
    nameAr: "وهج العلم التجريبية المتميزة",
    nameEn: "Wahaj Al-Ilm Experimental School",
    typeAr: "حكومي تجريبي",
    typeEn: "Experimental Public",
    curriculumAr: "وزاري مصري (لغات)",
    curriculumEn: "Egyptian Ministry (Languages)",
    rating: 4.4,
    reviewsCount: 60,
    locationAr: "السادس من أكتوبر، الجيزة",
    locationEn: "6th of October, Giza",
    image:
"./assets/img/Al Riyadah International School11.jpeg",
    gradesAr: "ابتدائي - اعدادي",
    gradesEn: "Primary - Preparatory",
    feesAr: "اقتصادية",
    feesEn: "Economical",
    descriptionAr:
      "نقدم بيئة تعليمية تتطور مع الطالب في كل مرحلة عمرية لبناء شخصية أكاديمية متكاملة بتعليم قوي ومصروفات حكومية.",
    descriptionEn:
      "We provide an educational environment that evolves with the student at every age stage to build an integrated academic personality with strong public education.",
  },
  {
    id: 22,
    nameAr: "الأفق الجديد الخاصة",
    nameEn: "New Horizon Private School",
    typeAr: "لغات",
    typeEn: "Languages",
    curriculumAr: "وزاري مصري (لغات)",
    curriculumEn: "Egyptian Ministry (Languages)",
    rating: 4.6,
    reviewsCount: 71,
    locationAr: "حلوان، القاهرة",
    locationEn: "Helwan, Cairo",

    image:"./assets/img/Al Rowad Schools17.jpeg",
    gradesAr: "KG - ثانوي",
    gradesEn: "KG - Secondary",
    feesAr: "متوسطة",
    feesEn: "Moderate",
    descriptionAr:
      "نقدم بيئة تعليمية تتطور مع الطالب في كل مرحلة عمرية لبناء شخصية أكاديمية متكاملة بالتعلم الذكي والأنشطة.",
    descriptionEn:
      "We provide an educational environment that evolves with the student at every age stage to build an integrated academic personality through smart learning.",
  },
];

export default function SchoolsBrowsePage() {
  const { language } = useLanguage();
  const isAr = language === "ar";

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCurriculum, setSelectedCurriculum] = useState("الكل");
  const [selectedSchool, setSelectedSchool] = useState<School | null>(null);
  const [isRegistered, setIsRegistered] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; // عرض 6 كروت في كل صفحة بدقة

  // تصفية المدارس بناءً على البحث والمنهج
  const filteredSchools = mockSchools.filter((school) => {
    const name = isAr ? school.nameAr : school.nameEn;
    const location = isAr ? school.locationAr : school.locationEn;
    const matchesSearch =
      name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      location.toLowerCase().includes(searchTerm.toLowerCase());

    const curriculum = isAr ? school.curriculumAr : school.curriculumEn;
    const matchesCurriculum =
      selectedCurriculum === "الكل" || curriculum.includes(selectedCurriculum);

    return matchesSearch && matchesCurriculum;
  });

  // حساب نظام التقسيم (Pagination)
  const totalPages = Math.ceil(filteredSchools.length / itemsPerPage) || 1;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentSchools = filteredSchools.slice(
    startIndex,
    startIndex + itemsPerPage,
  );

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsRegistered(true);
    setTimeout(() => {
      setIsRegistered(false);
      setSelectedSchool(null);
    }, 2500);
  };

  return (
    <div
      className="min-h-screen bg-slate-950 text-slate-100 p-6 md:p-12 font-sans"
      dir={isAr ? "rtl" : "ltr"}
    >
      {/* تم استخدام h-auto و items-start لتجنب أي مساحات فارغة كبيرة أسفل الكروت */}
      <div className="max-w-7xl mx-auto space-y-6 h-auto flex flex-col justify-start">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-slate-800 pb-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-white flex items-center gap-3">
              <GraduationCap className="w-8 h-8 text-amber-400" />
              {isAr ? "دليل وتصفح المدارس" : "Schools Directory"}
            </h1>
            <p className="text-slate-400 mt-1">
              {isAr
                ? "نقدم بيئة تعليمية تتطور مع الطالب في كل مرحلة عمرية لبناء شخصية أكاديمية متكاملة."
                : "Explore the best schools, curriculums, and easily apply for admission."}
            </p>
          </div>
          <div className="text-sm bg-slate-900 border border-slate-800 px-4 py-2 rounded-xl text-amber-400">
            {isAr ? "إجمالي المدارس المطابقة:" : "Total Matching Schools:"}{" "}
            <span className="font-bold">{filteredSchools.length}</span>
          </div>
        </div>

        {/* Search and Filters Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-slate-900/60 p-4 rounded-2xl border border-slate-800/80 backdrop-blur-md">
          <div className="relative md:col-span-2">
            <Search
              className={`absolute ${isAr ? "right-4" : "left-4"} top-3.5 w-5 h-5 text-slate-400`}
            />
            <input
              type="text"
              placeholder={
                isAr
                  ? "ابحث باسم المدرسة، المنطقة، أو المدينة..."
                  : "Search school name, location, or city..."
              }
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
              className={`w-full bg-slate-950 border border-slate-800 rounded-xl ${isAr ? "pr-12 pl-4" : "pl-12 pr-4"} py-3 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-amber-500 transition-colors`}
            />
          </div>

          <div className="relative">
            <Filter
              className={`absolute ${isAr ? "right-4" : "left-4"} top-3.5 w-5 h-5 text-slate-400`}
            />
            <select
              value={selectedCurriculum}
              onChange={(e) => {
                setSelectedCurriculum(e.target.value);
                setCurrentPage(1);
              }}
              className={`w-full bg-slate-950 border border-slate-800 rounded-xl ${isAr ? "pr-12 pl-4" : "pl-12 pr-4"} py-3 text-slate-200 focus:outline-none focus:border-amber-500 transition-colors appearance-none cursor-pointer`}
            >
              <option value="الكل">
                {isAr ? "جميع المناهج" : "All Curriculums"}
              </option>
              <option value="أمريكي">{isAr ? "أمريكي" : "American"}</option>
              <option value="بريطاني">{isAr ? "بريطاني" : "British"}</option>
              <option value="وزاري">
                {isAr ? "وزاري مصري" : "Egyptian Ministry"}
              </option>
            </select>
          </div>
        </div>

        {/* Schools Grid (Displaying exactly 6 items per page) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
          {currentSchools.map((school) => {
            const name = isAr ? school.nameAr : school.nameEn;
            const type = isAr ? school.typeAr : school.typeEn;
            const curriculum = isAr ? school.curriculumAr : school.curriculumEn;
            const location = isAr ? school.locationAr : school.locationEn;
            const grades = isAr ? school.gradesAr : school.gradesEn;
            const fees = isAr ? school.feesAr : school.feesEn;

            return (
              <div
                key={school.id}
                className="group bg-slate-900/50 border border-slate-800/80 rounded-2xl overflow-hidden hover:border-amber-500/40 transition-all duration-300 flex flex-col justify-between shadow-xl"
              >
                <div>
                  {/* School Image & Badge */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={school.image}
                      alt={name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
                    <span
                      className={`absolute top-3 ${isAr ? "right-3" : "left-3"} bg-slate-950/80 backdrop-blur-md border border-slate-800 text-amber-400 text-xs px-3 py-1 rounded-full font-medium`}
                    >
                      {type}
                    </span>
                    <div
                      className={`absolute bottom-3 ${isAr ? "right-3" : "left-3"} flex items-center gap-1 bg-amber-500/20 border border-amber-500/30 px-2.5 py-1 rounded-lg text-amber-300 text-xs font-semibold`}
                    >
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      <span>{school.rating}</span>
                      <span className="text-slate-400 text-[10px]">
                        ({school.reviewsCount})
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 space-y-3">
                    <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors line-clamp-1">
                      {name}
                    </h3>

                    <div className="flex items-center gap-2 text-slate-400 text-sm">
                      <MapPin className="w-4 h-4 text-amber-500 shrink-0" />
                      <span className="truncate">{location}</span>
                    </div>

                    <div className="flex items-center gap-2 text-slate-400 text-sm">
                      <BookOpen className="w-4 h-4 text-yellow-500 shrink-0" />
                      <span>
                        {isAr ? "المنهج:" : "Curriculum:"}{" "}
                        <strong className="text-slate-200">{curriculum}</strong>
                      </span>
                    </div>

                    <div className="flex justify-between items-center text-xs text-slate-400 pt-2 border-t border-slate-800/60">
                      <span>
                        {isAr ? "المراحل:" : "Grades:"} {grades}
                      </span>
                      <span className="text-amber-400 font-medium">
                        {isAr ? "المصروفات:" : "Fees:"} {fees}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Action Button - Amber/Gold Gradient Theme */}
                <div className="p-5 pt-0">
                  <button
                    onClick={() => setSelectedSchool(school)}
                    className="w-full bg-gradient-to-r from-[#9F7A24] via-[#FFF1A8] to-[#C9A227] hover:from-[#C9A227] hover:via-[#FFF8C7] hover:to-[#B88A16] text-slate-950 font-bold py-3.5 rounded-xl text-sm transition-all duration-300 shadow-lg shadow-[#D4AF37]/30 flex items-center justify-center gap-2"
                  >
                    <span>
                      {isAr
                        ? "عرض التفاصيل والتسجيل"
                        : "View Details & Register"}
                    </span>
                    <ChevronRight
                      className={`w-4 h-4 ${isAr ? "rotate-180" : ""}`}
                    />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Pagination Controls */}
        {filteredSchools.length > itemsPerPage && (
          <div className="flex justify-center items-center gap-4 pt-2 pb-2">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="flex items-center gap-1 bg-slate-900 border border-slate-800 text-slate-300 px-4 py-2 rounded-xl text-sm font-semibold disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-800 transition-colors"
            >
              {isAr ? (
                <ChevronRight className="w-4 h-4" />
              ) : (
                <ChevronLeft className="w-4 h-4" />
              )}
              <span>{isAr ? "السابق" : "Previous"}</span>
            </button>

            <span className="text-sm text-slate-400 font-medium">
              {isAr ? "صفحة" : "Page"}{" "}
              <strong className="text-amber-400">{currentPage}</strong>{" "}
              {isAr ? "من" : "of"}{" "}
              <strong className="text-slate-200">{totalPages}</strong>
            </span>

            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
              className="flex items-center gap-1 bg-slate-900 border border-slate-800 text-slate-300 px-4 py-2 rounded-xl text-sm font-semibold disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-800 transition-colors"
            >
              <span>{isAr ? "التالي" : "Next"}</span>
              {isAr ? (
                <ChevronLeft className="w-4 h-4" />
              ) : (
                <ChevronRight className="w-4 h-4" />
              )}
            </button>
          </div>
        )}

        {/* Empty State */}
        {filteredSchools.length === 0 && (
          <div className="text-center py-12 bg-slate-900/30 rounded-2xl border border-slate-800/80">
            <GraduationCap className="w-12 h-12 text-slate-600 mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-slate-300">
              {isAr
                ? "لا توجد مدارس مطابقة للبحث"
                : "No Matching Schools Found"}
            </h3>
            <p className="text-slate-500 text-sm mt-1">
              {isAr
                ? "جرب تغيير كلمات البحث أو اختيار منهج دراسي آخر."
                : "Try changing your search terms or selecting another curriculum."}
            </p>
          </div>
        )}
      </div>

      {/* Modal for Details & Registration */}
      {selectedSchool && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-sm p-4 overflow-y-auto">
          <div className="bg-slate-900 border border-amber-500/30 rounded-3xl max-w-xl w-full p-6 md:p-8 space-y-6 relative shadow-2xl">
            {/* Close Button */}
            <button
              onClick={() => {
                setSelectedSchool(null);
                setIsRegistered(false);
              }}
              className={`absolute top-6 ${isAr ? "left-6" : "right-6"} text-slate-400 hover:text-white bg-slate-800 p-2 rounded-full transition-colors`}
            >
              <X className="w-5 h-5" />
            </button>

            {isRegistered ? (
              <div className="text-center py-10 space-y-3">
                <CheckCircle2 className="w-14 h-14 text-amber-400 mx-auto animate-bounce" />
                <h3 className="text-xl font-bold text-white">
                  {isAr
                    ? "تم تقديم طلب التسجيل بنجاح!"
                    : "Registration Request Submitted Successfully!"}
                </h3>
                <p className="text-slate-400 text-sm">
                  {isAr
                    ? "ستقوم إدارة المدرسة بالتواصل معك قريباً."
                    : "The school administration will contact you soon."}
                </p>
              </div>
            ) : (
              <>
                <div className="space-y-1.5">
                  <span className="text-amber-400 text-xs font-semibold bg-amber-950/60 border border-amber-800/60 px-3 py-1 rounded-full inline-block">
                    {isAr
                      ? `${selectedSchool.typeAr} - ${selectedSchool.curriculumAr}`
                      : `${selectedSchool.typeEn} - ${selectedSchool.curriculumEn}`}
                  </span>
                  <h2 className="text-2xl font-bold text-white pt-1">
                    {isAr ? selectedSchool.nameAr : selectedSchool.nameEn}
                  </h2>
                  <p className="text-slate-400 text-sm flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-amber-400" />
                    {isAr
                      ? selectedSchool.locationAr
                      : selectedSchool.locationEn}
                  </p>
                </div>

                <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800 space-y-1.5">
                  <h4 className="font-semibold text-amber-300 text-xs">
                    {isAr ? "نبذة عن المدرسة:" : "School Overview:"}
                  </h4>
                  <p className="text-slate-400 text-xs leading-relaxed">
                    {isAr
                      ? selectedSchool.descriptionAr
                      : selectedSchool.descriptionEn}
                  </p>
                </div>

                <div className="border-t border-slate-800 pt-4 space-y-3">
                  <h3 className="text-base font-bold text-white">
                    {isAr
                      ? "نموذج التسجيل الفوري"
                      : "Instant Registration Form"}
                  </h3>
                  <form onSubmit={handleRegisterSubmit} className="space-y-3">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="space-y-1">
                        <label className="text-[11px] text-slate-400">
                          {isAr ? "اسم ولي الأمر" : "Parent Name"}
                        </label>
                        <input
                          required
                          type="text"
                          placeholder={isAr ? "الاسم الكامل" : "Full Name"}
                          className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2 text-xs text-slate-200 focus:outline-none focus:border-amber-500"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-[11px] text-slate-400">
                          {isAr ? "رقم الهاتف / واتساب" : "Phone / WhatsApp"}
                        </label>
                        <input
                          required
                          type="tel"
                          placeholder="01xxxxxxxxx"
                          className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2 text-xs text-slate-200 focus:outline-none focus:border-amber-500"
                        />
                      </div>
                    </div>
                    <div className="space-y-1">
                      <label className="text-[11px] text-slate-400">
                        {isAr
                          ? "الصف الدراسي المراد التقديم له"
                          : "Grade to Apply For"}
                      </label>
                      <input
                        required
                        type="text"
                        placeholder={
                          isAr
                            ? "مثال: الصف الأول الابتدائي، KG2..."
                            : "e.g., Grade 1, KG2..."
                        }
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2 text-xs text-slate-200 focus:outline-none focus:border-amber-500"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-slate-950 font-bold py-3 rounded-xl text-xs transition-all shadow-md shadow-amber-500/25"
                    >
                      {isAr
                        ? "تأكيد وإرسال طلب الالتحاق"
                        : "Confirm & Submit Application"}
                    </button>
                  </form>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
