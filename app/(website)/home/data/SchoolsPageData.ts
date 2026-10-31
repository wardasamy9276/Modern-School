// app/(website)/home/data/SchoolsPageData.ts

export interface School {
  id: number;
  name_ar: string;
  name_en: string;
  logo: string;
  sort_order?: number;
  status?: boolean;
}

export const schoolDescriptions: Record<
  number,
  {
    ar: string;
    en: string;
  }
> = {
  1: {
    ar: "مدرسة تعليمية حديثة تهدف إلى توفير بيئة تعليمية متميزة تجمع بين جودة التعليم وتنمية مهارات الطلاب وبناء شخصية متوازنة.",
    en: "A modern educational school focused on providing an excellent learning environment that combines quality education, skill development, and balanced student growth.",
  },
  2: {
    ar: "مدرسة تهتم بتقديم تعليم متكامل في بيئة تربوية آمنة، مع التركيز على القيم والأخلاق وتنمية قدرات الطلاب.",
    en: "A school dedicated to providing comprehensive education in a safe environment, with a strong focus on values, character, and student development.",
  },
  3: {
    ar: "مدرسة تقدم تجربة تعليمية متطورة تهتم بالتميز الأكاديمي، وتنمية التفكير الإبداعي، وإعداد الطلاب للمستقبل.",
    en: "A modern educational school focused on academic excellence, creative thinking, and preparing students for the future.",
  },
  4: {
    ar: "مدارس تهدف إلى تقديم تعليم دولي متميز يجمع بين المناهج الحديثة وتنمية مهارات التواصل والتفكير والابتكار.",
    en: "An international school community offering modern education while developing communication, critical thinking, and innovation skills.",
  },
  5: {
    ar: "مدرسة عصرية تسعى إلى بناء جيل قادر على التعلم والإبداع من خلال بيئة تعليمية حديثة وبرامج متنوعة.",
    en: "A modern school committed to building a generation capable of learning and creating through a dynamic environment and diverse educational programs.",
  },
  6: {
    ar: "مدرسة تهتم بتقديم تعليم متميز في بيئة داعمة تساعد الطلاب على اكتشاف قدراتهم وتنمية مواهبهم.",
    en: "A school dedicated to quality education in a supportive environment that helps students discover their abilities and develop their talents.",
  },
  7: {
    ar: "مجموعة مدارس تقدم بيئة تعليمية متطورة تهدف إلى تحقيق التميز الأكاديمي وتنمية مهارات الطلاب في مختلف المجالات.",
    en: "A school community providing an advanced educational environment focused on academic excellence and developing students' skills in different fields.",
  },
  8: {
    ar: "مدارس تهتم بالإبداع والابتكار وتعمل على توفير تجربة تعليمية تساعد الطلاب على التفكير والتعلم والثقة بالنفس.",
    en: "A school community that values creativity and innovation while providing an educational experience that encourages thinking, learning, and self-confidence.",
  },
  9: {
    ar: "مدرسة حديثة تسعى إلى تقديم تعليم متوازن يجمع بين المعرفة والمهارات والقيم لبناء مستقبل أفضل للطلاب.",
    en: "A modern school offering balanced education that combines knowledge, skills, and values to help students build a better future.",
  },
  10: {
    ar: "مدارس تعليمية تهدف إلى تقديم مستوى متميز من التعليم مع الاهتمام بالمهارات الشخصية والأكاديمية للطلاب.",
    en: "Educational schools focused on delivering high-quality learning while developing students' academic and personal skills.",
  },
  11: {
    ar: "مدارس دولية تهتم بالتميز التعليمي وتوفير بيئة حديثة تساعد الطلاب على تطوير مهاراتهم والاستعداد لمتطلبات المستقبل.",
    en: "An international school community focused on educational excellence and providing a modern environment that prepares students for future challenges.",
  },
  12: {
    ar: "مدرسة تهتم ببناء بيئة تعليمية متطورة تشجع على التعلم المستمر وتنمية شخصية الطالب وقدراته المختلفة.",
    en: "A school committed to creating a modern learning environment that encourages continuous learning and personal development.",
  },
  13: {
    ar: "مدارس تقدم تجربة تعليمية حديثة تركز على المعرفة والابتكار وتنمية مهارات الطلاب الأكاديمية والشخصية.",
    en: "A modern educational community focusing on knowledge, innovation, and the development of students' academic and personal skills.",
  },
  14: {
    ar: "مدرسة دولية تهدف إلى إعداد الطلاب للمستقبل من خلال تعليم حديث وبرامج تساعد على تنمية التفكير والإبداع.",
    en: "An international school focused on preparing students for the future through modern education and programs that encourage creativity and critical thinking.",
  },
  15: {
    ar: "مدارس تهتم بتقديم تعليم متطور يساعد الطلاب على بناء مستقبلهم وتنمية قدراتهم العلمية والإبداعية.",
    en: "Schools providing modern education that helps students build their future while developing their academic and creative abilities.",
  },
  16: {
    ar: "مدرسة تسعى إلى اكتشاف مواهب الطلاب وتشجيعهم على النجاح والتميز من خلال بيئة تعليمية محفزة.",
    en: "A school committed to discovering students' talents and encouraging achievement and excellence in an inspiring learning environment.",
  },
  17: {
    ar: "مدارس تقدم بيئة تعليمية متكاملة تهدف إلى تحقيق التفوق الأكاديمي وتنمية مهارات الطلاب وثقتهم بأنفسهم.",
    en: "A school community providing comprehensive education aimed at academic success, skill development, and building students' confidence.",
  },
  18: {
    ar: "مدرسة دولية تهتم بالتميز الأكاديمي وتوفير تجربة تعليمية حديثة تساعد الطلاب على تحقيق طموحاتهم.",
    en: "An international school focused on academic excellence and providing a modern learning experience that helps students achieve their ambitions.",
  },
  19: {
    ar: "مدارس تهدف إلى تحقيق التميز في التعليم مع الاهتمام بتنمية مهارات التفكير والإبداع والشخصية المتكاملة للطالب.",
    en: "Schools committed to educational excellence while developing critical thinking, creativity, and well-rounded student personalities.",
  },
  20: {
    ar: "مدرسة حديثة توفر بيئة تعليمية محفزة تساعد الطلاب على اكتساب المعرفة وتنمية المهارات والاستعداد للمستقبل.",
    en: "A modern school providing an inspiring educational environment that helps students gain knowledge, develop skills, and prepare for the future.",
  },
};

export const schools: School[] = [
  {
    id: 1,
    name_ar: "مدارس الشمس الحديثة",
    name_en: "Modern Sun Schools",
    logo: "./assets/schoolimg/Modern Al Shams School1.jpeg",
    sort_order: 1,
    status: true,
  },
  {
    id: 2,
    name_ar: "مدرسة راهبات سيدة المعونة",
    name_en: "Our Lady School",
    logo: "./assets/img copy/New Cairo Schools7.jpeg",
    sort_order: 2,
    status: true,
  },
  {
    id: 3,
    name_ar: "مدرسة وينشستر البريطانية",
    name_en: "Winchester British School",
    logo: "./assets/img copy/Al Safwa Educational Schools10.jpeg",
    sort_order: 3,
    status: true,
  },
  {
    id: 4,
    name_ar: "مدارس النيل الدولية",
    name_en: "Nile International Schools",
    logo: "./assets/img copy/WhatsApp Image 2026-08-01 at 8.55.53 PM3.jpeg",
    sort_order: 4,
    status: true,
  },
  {
    id: 5,
    name_ar: "مدارس المستقبل الحديثة",
    name_en: "Future Modern Schools",
    logo: "./assets/schoolimg/Our_Lady_Of_Perpetual_Succour_School_New_Heliopolis.webp",
    sort_order: 5,
    status: true,
  },
  {
    id: 6,
    name_ar: "مدرسة الأمل الخاصة",
    name_en: "Hope Private School",
    logo: "./assets/schoolimg/Our_Lady_Of_Perpetual_Succour_School_New_Heliopolis copy.webp",
    sort_order: 6,
    status: true,
  },
  {
    id: 7,
    name_ar: "مدارس القاهرة الجديدة",
    name_en: "New Cairo Schools",
    logo: "./assets/img copy/Modern Future School5.jpeg",
    sort_order: 7,
    status: true,
  },
  {
    id: 8,
    name_ar: "مدارس الإبداع الدولية",
    name_en: "Creativity International Schools",
    logo: "./assets/imgs/Tamayouz Schools19.jpeg",
    sort_order: 8,
    status: true,
  },
  {
    id: 9,
    name_ar: "مدرسة النور الحديثة",
    name_en: "Al Noor Modern School",
    logo: "./assets/schoolimg/Knights-of-learning-schools.webp",
    sort_order: 9,
    status: true,
  },
  {
    id: 10,
    name_ar: "مدارس الصفوة التعليمية",
    name_en: "Safwa Educational Schools",
    logo: "./assets/schoolimg/مدرسه_العصر_الاهليه.webp",
    sort_order: 10,
    status: true,
  },
  {
    id: 11,
    name_ar: "مدارس الريادة الدولية",
    name_en: "Pioneers International Schools",
    logo: "./assets/imgwarda/Nile International School4.jpeg",
    sort_order: 11,
    status: true,
  },
  {
    id: 12,
    name_ar: "مدرسة جرين فالي",
    name_en: "Green Valley School",
    logo: "./assets/img copy/Modern Future School5.jpeg",
    sort_order: 12,
    status: true,
  },
  {
    id: 13,
    name_ar: "مدارس المعرفة الحديثة",
    name_en: "Modern Knowledge Schools",
    logo: "./assets/schoolimg/Repton_Cairo_School.webp",
    sort_order: 13,
    status: true,
  },
  {
    id: 14,
    name_ar: "مدرسة المستقبل الدولية",
    name_en: "Future International School",
    logo: "./assets/imgs/Future International School14.jpeg",
    sort_order: 14,
    status: true,
  },
  {
    id: 15,
    name_ar: "مدارس الأجيال الجديدة",
    name_en: "New Generations Schools",
    logo: "./assets/img copy/El Amal Private School6.jpeg",
    sort_order: 15,
    status: true,
  },
  {
    id: 16,
    name_ar: "مدرسة فيوتشر ستارز",
    name_en: "Future Stars School",
    logo: "./assets/schoolimg/Orouba_Language_School_Maadi.webp",
    sort_order: 16,
    status: true,
  },
  {
    id: 17,
    name_ar: "مدارس الرواد",
    name_en: "Al Rowad Schools",
    logo: "./assets/imgwarda/Al Noor Modern School9.jpeg",
    sort_order: 17,
    status: true,
  },
  {
    id: 18,
    name_ar: "مدرسة كوينز الدولية",
    name_en: "Queens International School",
    logo: "./assets/imgwarda/Al Noor Modern School9.jpeg",
    sort_order: 18,
    status: true,
  },
  {
    id: 19,
    name_ar: "مدارس التميز",
    name_en: "Excellence Schools",
    logo: "./assets/img copy/Ebdaah International School8.jpeg",
    sort_order: 19,
    status: true,
  },
  {
    id: 20,
    name_ar: "مدرسة الأفق الجديد",
    name_en: "New Horizon School",
    logo: "./assets/imgs/Al Riyadah International School11.jpeg",
    sort_order: 20,
    status: true,
  },
];