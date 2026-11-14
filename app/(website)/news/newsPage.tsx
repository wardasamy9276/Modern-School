
"use client";

import {
  useEffect,
  useMemo,
  useState,
  type ChangeEvent,
  type FormEvent,
} from "react";
import Link from "next/link";
import { useLanguage } from "../../context/LanguageContext";

type NewsItem = {
  id: number;
  titleAr: string;
  titleEn: string;
  descriptionAr: string;
  descriptionEn: string;
  categoryAr: string;
  categoryEn: string;
  date: string;
  image: string;
  featured?: boolean;
};

type NewsForm = Omit<NewsItem, "id">;

const initialNewsItems: NewsItem[] = [
  {
    id: 1,
    titleAr: "مدرسة الرواد الحديثة تطلق خطتها الجديدة للتطوير التعليمي",
    titleEn: "Al Rowad Modern School Launches Its New Educational Development Plan",
    descriptionAr: "أعلنت إدارة المدرسة عن خطة تطوير شاملة تهدف إلى تحسين جودة العملية التعليمية، وتحديث أساليب التدريس، وتوفير بيئة تعليمية متكاملة تساعد الطلاب على تنمية مهاراتهم الأكاديمية والشخصية.",
    descriptionEn: "The school administration announced a comprehensive development plan to improve educational quality, modernize teaching methods, and provide an integrated learning environment that supports students' academic and personal growth.",
    categoryAr: "أخبار المدرسة",
    categoryEn: "School News",
    date: "2026-11-12",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?w=1000",
    featured: true,
  },
  {
    id: 2,
    titleAr: "يوم رياضي مميز بمشاركة طلاب جميع المراحل",
    titleEn: "A Special Sports Day for Students Across All Stages",
    descriptionAr: "نظمت المدرسة يومًا رياضيًا مليئًا بالأنشطة والمسابقات الجماعية والفردية، بهدف تشجيع الطلاب على ممارسة الرياضة وتعزيز روح التعاون والمنافسة الإيجابية بينهم.",
    descriptionEn: "The school organized a sports day filled with team and individual competitions to encourage physical activity and strengthen teamwork and positive competition.",
    categoryAr: "الأنشطة",
    categoryEn: "Activities",
    date: "2026-11-10",
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=1000",
  },
  {
    id: 3,
    titleAr: "طلاب الرواد يشاركون في معرض الابتكار العلمي",
    titleEn: "Al Rowad Students Participate in the Science Innovation Exhibition",
    descriptionAr: "شارك مجموعة من الطلاب في معرض الابتكار العلمي بمجموعة من المشروعات التي تعكس قدرتهم على التفكير الإبداعي وحل المشكلات وتطبيق المفاهيم العلمية بصورة عملية.",
    descriptionEn: "A group of students participated in the Science Innovation Exhibition with projects demonstrating creative thinking, problem-solving, and practical applications of scientific concepts.",
    categoryAr: "إنجازات الطلاب",
    categoryEn: "Student Achievements",
    date: "2026-11-08",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1000",
  },
  {
    id: 4,
    titleAr: "تطوير المنصة الإلكترونية لمتابعة المستوى الدراسي",
    titleEn: "Development of the Electronic Platform for Academic Progress",
    descriptionAr: "تعمل المدرسة على تطوير خدماتها الإلكترونية لتسهيل متابعة مستوى الطلاب والواجبات والأنشطة، وتوفير تجربة رقمية أكثر سهولة لأولياء الأمور والمعلمين.",
    descriptionEn: "The school is developing its digital services to make it easier to follow students' progress, assignments, and activities while providing a smoother digital experience for parents and teachers.",
    categoryAr: "التكنولوجيا",
    categoryEn: "Technology",
    date: "2026-11-06",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1000",
  },
  {
    id: 5,
    titleAr: "لقاء تعريفي لأولياء الأمور مع إدارة المدرسة",
    titleEn: "An Introductory Meeting Between Parents and School Administration",
    descriptionAr: "استضافت المدرسة لقاءً تعريفيًا لمناقشة الخطة الدراسية وآليات التواصل والمتابعة، والاستماع إلى استفسارات أولياء الأمور ومقترحاتهم لتحسين الخدمات التعليمية.",
    descriptionEn: "The school hosted an introductory meeting to discuss the academic plan, communication methods, and student follow-up, while listening to parents' questions and suggestions.",
    categoryAr: "أولياء الأمور",
    categoryEn: "Parents",
    date: "2026-11-04",
    image: "https://images.unsplash.com/photo-1529390079861-591de354faf5?w=1000",
  },
  {
    id: 6,
    titleAr: "افتتاح أنشطة المكتبة الرقمية للطلاب",
    titleEn: "Launch of the Digital Library Activities for Students",
    descriptionAr: "أطلقت المدرسة مجموعة من الأنشطة الخاصة بالمكتبة الرقمية، لتشجيع الطلاب على القراءة والبحث واكتشاف مصادر المعرفة الإلكترونية بطريقة منظمة وممتعة.",
    descriptionEn: "The school launched a series of digital library activities to encourage reading, research, and the discovery of online learning resources.",
    categoryAr: "التعليم",
    categoryEn: "Education",
    date: "2026-11-02",
    image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=1000",
  },
  {
    id: 7,
    titleAr: "مسابقة القراءة الحرة لتنمية مهارات الطلاب",
    titleEn: "Free Reading Competition to Develop Students' Skills",
    descriptionAr: "أطلقت المدرسة مسابقة للقراءة الحرة تهدف إلى تنمية مهارات الفهم والاستيعاب والتعبير لدى الطلاب، مع تشجيعهم على اكتشاف مجالات جديدة من المعرفة.",
    descriptionEn: "The school launched a free reading competition to develop comprehension and communication skills while encouraging students to explore new areas of knowledge.",
    categoryAr: "المسابقات",
    categoryEn: "Competitions",
    date: "2026-10-30",
    image: "https://images.unsplash.com/photo-1519682337058-a94d519337bc?w=1000",
  },
  {
    id: 8,
    titleAr: "ورشة عمل لتنمية مهارات التفكير الإبداعي",
    titleEn: "A Workshop to Develop Creative Thinking Skills",
    descriptionAr: "نظمت المدرسة ورشة عمل تفاعلية تعتمد على حل المشكلات والعمل الجماعي، بهدف مساعدة الطلاب على التفكير بطرق مختلفة وتقديم أفكار وحلول مبتكرة.",
    descriptionEn: "The school organized an interactive workshop based on problem-solving and teamwork to help students think differently and develop innovative solutions.",
    categoryAr: "الأنشطة",
    categoryEn: "Activities",
    date: "2026-10-28",
    image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=1000",
  },
  {
    id: 9,
    titleAr: "تكريم الطلاب المتفوقين في الاختبارات الشهرية",
    titleEn: "Honoring Outstanding Students in Monthly Assessments",
    descriptionAr: "كرمت إدارة المدرسة عددًا من الطلاب المتميزين تقديرًا لجهودهم والتزامهم وتفوقهم الدراسي، مع التأكيد على أهمية الاستمرار في التعلم وتحقيق أفضل النتائج.",
    descriptionEn: "The school administration honored outstanding students in recognition of their effort, commitment, and academic performance, encouraging them to continue achieving excellence.",
    categoryAr: "إنجازات الطلاب",
    categoryEn: "Student Achievements",
    date: "2026-10-26",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1000",
  },
  {
    id: 10,
    titleAr: "تحديث معامل الحاسب الآلي بأجهزة وتقنيات حديثة",
    titleEn: "Computer Labs Updated with Modern Equipment and Technology",
    descriptionAr: "تواصل المدرسة تطوير معامل الحاسب الآلي لتوفير أدوات تقنية حديثة تساعد الطلاب على تعلم أساسيات البرمجة والتعامل مع التطبيقات الرقمية.",
    descriptionEn: "The school continues to upgrade its computer labs with modern technology to help students learn programming fundamentals and digital applications.",
    categoryAr: "التكنولوجيا",
    categoryEn: "Technology",
    date: "2026-10-24",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1000",
  },
  {
    id: 11,
    titleAr: "رحلة تعليمية لاستكشاف العلوم والطبيعة",
    titleEn: "An Educational Trip to Explore Science and Nature",
    descriptionAr: "شارك الطلاب في رحلة تعليمية تهدف إلى ربط المعلومات النظرية بالتجارب الواقعية، والتعرف على البيئة والطبيعة من خلال الملاحظة والاستكشاف.",
    descriptionEn: "Students took part in an educational trip connecting classroom knowledge with real-life experiences through observation and exploration of nature.",
    categoryAr: "الرحلات",
    categoryEn: "Trips",
    date: "2026-10-22",
    image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=1000",
  },
  {
    id: 12,
    titleAr: "ندوة توعوية حول الاستخدام الآمن للإنترنت",
    titleEn: "Awareness Seminar on Safe Internet Usage",
    descriptionAr: "نظمت المدرسة ندوة توعوية لتعريف الطلاب بأساليب الاستخدام الآمن للإنترنت، وحماية البيانات الشخصية، والتعامل الواعي مع المحتوى الرقمي.",
    descriptionEn: "The school held an awareness seminar to introduce students to safe internet practices, personal data protection, and responsible digital content consumption.",
    categoryAr: "التوعية",
    categoryEn: "Awareness",
    date: "2026-10-20",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1000",
  },
  {
    id: 13,
    titleAr: "إطلاق مبادرة مدرستي نظيفة ومسؤوليتي",
    titleEn: "Launch of the My Clean School Initiative",
    descriptionAr: "أطلقت المدرسة مبادرة بيئية لتعزيز المسؤولية لدى الطلاب تجاه نظافة الفصول والساحات، وترسيخ ثقافة المحافظة على الموارد والبيئة.",
    descriptionEn: "The school launched an environmental initiative encouraging students to take responsibility for classroom and campus cleanliness and to protect natural resources.",
    categoryAr: "المبادرات",
    categoryEn: "Initiatives",
    date: "2026-10-18",
    image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=1000",
  },
  {
    id: 14,
    titleAr: "فعاليات فنية وإبداعية لاكتشاف مواهب الطلاب",
    titleEn: "Art and Creative Events to Discover Student Talents",
    descriptionAr: "شهدت المدرسة مجموعة من الفعاليات الفنية التي أتاحت للطلاب التعبير عن مواهبهم في الرسم والتصميم والأعمال اليدوية، وتشجيعهم على الابتكار.",
    descriptionEn: "The school hosted art activities that allowed students to express their talents in drawing, design, and crafts while encouraging creativity.",
    categoryAr: "الفعاليات",
    categoryEn: "Events",
    date: "2026-10-16",
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=1000",
  },
  {
    id: 15,
    titleAr: "برنامج دعم الطلاب وتحسين مهارات التعلم",
    titleEn: "Student Support Program to Improve Learning Skills",
    descriptionAr: "تعمل المدرسة على توفير أنشطة تعليمية داعمة تساعد الطلاب على مراجعة المفاهيم الأساسية وتطوير مهاراتهم بما يتناسب مع احتياجاتهم التعليمية.",
    descriptionEn: "The school is providing supportive educational activities to help students review key concepts and develop skills according to their learning needs.",
    categoryAr: "التعليم",
    categoryEn: "Education",
    date: "2026-10-14",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1000",
  },
  {
    id: 16,
    titleAr: "اجتماع تطوير الأداء بين المعلمين والإدارة",
    titleEn: "A Performance Development Meeting Between Teachers and Administration",
    descriptionAr: "عقدت إدارة المدرسة اجتماعًا لمناقشة تطوير الأداء التعليمي وتبادل الخبرات بين المعلمين، ومراجعة الخطط التي تدعم جودة التدريس داخل الفصول.",
    descriptionEn: "The school administration held a meeting to discuss teaching development, exchange experiences among teachers, and review plans for improving classroom instruction.",
    categoryAr: "أخبار المدرسة",
    categoryEn: "School News",
    date: "2026-10-12",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1000",
  },
  {
    id: 17,
    titleAr: "طلاب المدرسة يشاركون في مسابقة الحساب الذهني",
    titleEn: "Students Participate in the Mental Math Competition",
    descriptionAr: "شارك الطلاب في تحديات الحساب الذهني التي تهدف إلى تنمية سرعة التفكير والتركيز والقدرة على حل المسائل الرياضية بطرق متنوعة.",
    descriptionEn: "Students participated in mental math challenges designed to improve quick thinking, concentration, and mathematical problem-solving skills.",
    categoryAr: "المسابقات",
    categoryEn: "Competitions",
    date: "2026-10-10",
    image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=1000",
  },
  {
    id: 18,
    titleAr: "يوم مفتوح للتعريف بالأنشطة المدرسية",
    titleEn: "Open Day to Introduce School Activities",
    descriptionAr: "نظمت المدرسة يومًا مفتوحًا للتعريف بالأنشطة الرياضية والثقافية والفنية، وإتاحة الفرصة للطلاب للتعرف على المجالات المختلفة والمشاركة فيها.",
    descriptionEn: "The school organized an open day introducing sports, cultural, and artistic activities, giving students the opportunity to explore and join different programs.",
    categoryAr: "الفعاليات",
    categoryEn: "Events",
    date: "2026-10-08",
    image: "https://images.unsplash.com/photo-1529390079861-591de354faf5?w=1000",
  },
  {
    id: 19,
    titleAr: "تعزيز مهارات اللغة الإنجليزية من خلال الأنشطة",
    titleEn: "Enhancing English Language Skills Through Activities",
    descriptionAr: "تضمنت الأنشطة التعليمية تدريبات تفاعلية تساعد الطلاب على ممارسة المحادثة والاستماع والقراءة، واستخدام اللغة الإنجليزية في مواقف تعليمية متنوعة.",
    descriptionEn: "Educational activities included interactive exercises that help students practice speaking, listening, and reading in different learning situations.",
    categoryAr: "التعليم",
    categoryEn: "Education",
    date: "2026-10-06",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1000",
  },
  {
    id: 20,
    titleAr: "مبادرة لدعم الصحة النفسية والبيئة المدرسية الإيجابية",
    titleEn: "An Initiative Supporting Wellbeing and a Positive School Environment",
    descriptionAr: "تهدف المبادرة إلى نشر ثقافة الاحترام والتعاون، وتشجيع الطلاب على التعبير عن آرائهم والتعامل الإيجابي مع زملائهم داخل المجتمع المدرسي.",
    descriptionEn: "The initiative promotes respect and cooperation, encouraging students to express their opinions and interact positively with their peers.",
    categoryAr: "المبادرات",
    categoryEn: "Initiatives",
    date: "2026-10-04",
    image: "https://images.unsplash.com/photo-1529390079861-591de354faf5?w=1000",
  },
  {
    id: 21,
    titleAr: "تفعيل حصص التعلم التفاعلي داخل الفصول",
    titleEn: "Interactive Learning Sessions Introduced in Classrooms",
    descriptionAr: "تعمل المدرسة على توظيف الأنشطة التفاعلية داخل الحصص الدراسية لمساعدة الطلاب على المشاركة وطرح الأسئلة وربط المعلومات بالتطبيق العملي.",
    descriptionEn: "The school is incorporating interactive classroom activities to encourage participation, questions, and practical application of knowledge.",
    categoryAr: "التعليم",
    categoryEn: "Education",
    date: "2026-10-02",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1000",
  },
  {
    id: 22,
    titleAr: "معرض للمشروعات اليدوية والفنون المدرسية",
    titleEn: "An Exhibition of Handcrafts and School Art Projects",
    descriptionAr: "قدم الطلاب مجموعة من الأعمال الفنية والمشروعات اليدوية التي تعكس مهاراتهم وقدرتهم على تحويل الأفكار إلى منتجات إبداعية.",
    descriptionEn: "Students presented artwork and handcrafted projects that reflected their skills and ability to turn ideas into creative products.",
    categoryAr: "الفعاليات",
    categoryEn: "Events",
    date: "2026-09-29",
    image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=1000",
  },
  {
    id: 23,
    titleAr: "تدريب الطلاب على مهارات العرض والتقديم",
    titleEn: "Training Students in Presentation and Public Speaking Skills",
    descriptionAr: "تضمنت الأنشطة تدريبات عملية على إعداد العروض وتقديم الأفكار أمام الآخرين، بما يعزز الثقة بالنفس والتواصل الفعال.",
    descriptionEn: "Students took part in practical training on preparing presentations and sharing ideas, helping build confidence and effective communication.",
    categoryAr: "الأنشطة",
    categoryEn: "Activities",
    date: "2026-09-26",
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=1000",
  },
  {
    id: 24,
    titleAr: "لقاء لمناقشة الشراكة بين الأسرة والمدرسة",
    titleEn: "A Meeting to Discuss Family-School Partnership",
    descriptionAr: "ناقش اللقاء أهمية التعاون بين الأسرة والمدرسة في متابعة تقدم الطلاب، وتوفير بيئة داعمة تساعدهم على تحقيق أهدافهم التعليمية.",
    descriptionEn: "The meeting highlighted the importance of family-school cooperation in monitoring student progress and creating a supportive learning environment.",
    categoryAr: "أولياء الأمور",
    categoryEn: "Parents",
    date: "2026-09-23",
    image: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=1000",
    featured: true,
  },
  {
    id: 25,
    titleAr: "أنشطة عملية لتبسيط مفاهيم العلوم",
    titleEn: "Practical Activities to Simplify Science Concepts",
    descriptionAr: "استخدم المعلمون مجموعة من الأنشطة والتجارب التعليمية لتقريب المفاهيم العلمية إلى الطلاب وتحويل المعلومات النظرية إلى خبرات عملية.",
    descriptionEn: "Teachers used educational activities and experiments to make science concepts easier to understand and turn theoretical information into practical experiences.",
    categoryAr: "التعليم",
    categoryEn: "Education",
    date: "2026-09-20",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=1000",
  },
  {
    id: 26,
    titleAr: "مسابقة أفضل مشروع تقني طلابي",
    titleEn: "Best Student Technology Project Competition",
    descriptionAr: "أتاحت المسابقة للطلاب تقديم أفكار ومشروعات تقنية بسيطة، مع التركيز على الإبداع والعمل الجماعي واستخدام التكنولوجيا في حل المشكلات.",
    descriptionEn: "The competition invited students to present simple technology projects, focusing on creativity, teamwork, and using technology to solve problems.",
    categoryAr: "المسابقات",
    categoryEn: "Competitions",
    date: "2026-09-17",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1000",
  },
  {
    id: 27,
    titleAr: "حملة مدرسية للتوعية بأهمية التغذية الصحية",
    titleEn: "A School Campaign Promoting Healthy Nutrition",
    descriptionAr: "نظمت المدرسة حملة توعوية للتعريف بالعادات الغذائية الصحية وأهمية تناول وجبات متوازنة، وربط التغذية السليمة بالنشاط والتركيز.",
    descriptionEn: "The school organized an awareness campaign about healthy eating habits, balanced meals, and the connection between nutrition, activity, and concentration.",
    categoryAr: "التوعية",
    categoryEn: "Awareness",
    date: "2026-09-14",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=1000",
  },
  {
    id: 28,
    titleAr: "تطوير الأنشطة الثقافية لتعزيز مهارات التواصل",
    titleEn: "Cultural Activities Developed to Strengthen Communication Skills",
    descriptionAr: "تضمنت خطة الأنشطة الثقافية مسابقات حوارية وعروضًا طلابية تهدف إلى تنمية مهارات التعبير والاستماع واحترام وجهات النظر المختلفة.",
    descriptionEn: "The cultural activities plan included discussions and student presentations designed to develop expression, listening, and respect for different viewpoints.",
    categoryAr: "الأنشطة",
    categoryEn: "Activities",
    date: "2026-09-11",
    image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=1000",
  },
  {
    id: 29,
    titleAr: "يوم للتوعية بأهمية المحافظة على البيئة",
    titleEn: "An Awareness Day for Environmental Protection",
    descriptionAr: "شارك الطلاب في أنشطة تعليمية تهدف إلى نشر الوعي البيئي، والتعرف على طرق تقليل المخلفات وإعادة الاستخدام والمحافظة على المساحات الخضراء.",
    descriptionEn: "Students participated in educational activities about environmental awareness, waste reduction, reuse, and protecting green spaces.",
    categoryAr: "التوعية",
    categoryEn: "Awareness",
    date: "2026-09-08",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1000",
  },
  {
    id: 30,
    titleAr: "استقبال الطلاب الجدد والتعريف بالحياة المدرسية",
    titleEn: "Welcoming New Students and Introducing School Life",
    descriptionAr: "نظمت المدرسة أنشطة استقبال للطلاب الجدد لتعريفهم بالمرافق المدرسية والمعلمين والأنشطة المختلفة، ومساعدتهم على الاندماج في المجتمع المدرسي.",
    descriptionEn: "The school organized welcome activities for new students, introducing them to school facilities, teachers, and activities while helping them settle into school life.",
    categoryAr: "أخبار المدرسة",
    categoryEn: "School News",
    date: "2026-09-05",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1000",
  },
];

const emptyForm: NewsForm = {
  titleAr: "",
  titleEn: "",
  descriptionAr: "",
  descriptionEn: "",
  categoryAr: "",
  categoryEn: "",
  date: new Date().toISOString().slice(0, 10),
  image: "",
  featured: false,
};

const resolveImage = (image: string) => {
  const value = image.trim();

  if (!value) return "";

  if (
    value.startsWith("http://") ||
    value.startsWith("https://") ||
    value.startsWith("data:image/") ||
    value.startsWith("/")
  ) {
    return value;
  }

  return `/images/${value}`;
};

export default function NewsPage() {
  const { language } = useLanguage();
  const isArabic = language === "ar";

  const [newsItems, setNewsItems] = useState<NewsItem[]>(initialNewsItems);
  const [isLoaded, setIsLoaded] = useState(false);

  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const [showManagement, setShowManagement] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [formData, setFormData] = useState<NewsForm>(emptyForm);

  const [successMessage, setSuccessMessage] = useState("");
  const [imageError, setImageError] = useState("");
  const [uploadedFileName, setUploadedFileName] = useState("");

  const content = {
    ar: {
      badge: "مركز أخبار الرواد",
      title: "آخر أخبار",
      titleHighlight: "مدرسة الرواد الحديثة",
      subtitle: "تابع أحدث أخبار المدرسة والفعاليات والأنشطة والإنجازات الطلابية، وكن دائمًا على اطلاع بكل ما يحدث داخل مجتمعنا التعليمي.",
      search: "ابحث عن خبر...",
      all: "جميع الأخبار",
      featured: "الخبر الرئيسي",
      latest: "أحدث الأخبار",
      readMore: "اقرأ المزيد",
      noResults: "لا توجد أخبار مطابقة لبحثك",
      noResultsDesc: "جرب البحث بكلمات مختلفة أو اختر تصنيفًا آخر.",
      reset: "عرض جميع الأخبار",
      explore: "اكتشف المزيد",
      ctaTitle: "كن جزءًا من مجتمع الرواد",
      ctaDesc: "اكتشف بيئة تعليمية تهتم بالمعرفة والإبداع وتنمية مهارات الطلاب.",
      contact: "تواصل معنا",
      admission: "التقديم والقبول",
      newsCount: "خبر",
      allNews: "كل الأخبار",
      management: "إدارة الأخبار",
      addNews: "إضافة خبر جديد",
      editNews: "تعديل الخبر",
      save: "حفظ الخبر",
      update: "حفظ التعديلات",
      cancel: "إلغاء",
      delete: "حذف",
      edit: "تعديل",
      total: "إجمالي الأخبار",
      titleAr: "عنوان الخبر بالعربي",
      titleEn: "عنوان الخبر بالإنجليزي",
      descriptionAr: "وصف الخبر بالعربي",
      descriptionEn: "وصف الخبر بالإنجليزي",
      categoryAr: "التصنيف بالعربي",
      categoryEn: "التصنيف بالإنجليزي",
      date: "تاريخ الخبر",
      image: "اسم الصورة أو مسارها",
      imageUpload: "رفع صورة من الجهاز",
      imageHint: "اختاري صورة من جهازك أو اكتبي اسمها أو رابطها. الصورة اختيارية.",
      chooseImage: "اختيار صورة",
      imagePreview: "معاينة الصورة",
      featuredOption: "عرض الخبر كخبر رئيسي",
      required: "من فضلك املئي جميع الحقول المطلوبة",
      deleteConfirm: "هل أنت متأكدة من حذف هذا الخبر؟",
      close: "إغلاق الإدارة",
      imageError: "تعذر تحميل الصورة",
      featuredLabel: "خبر رئيسي",
      searchManagement: "ابحث في الأخبار لإدارتها",
      added: "تم إرسال الخبر بنجاح",
      updated: "تم تحديث الخبر بنجاح",
      deleted: "تم حذف الخبر بنجاح",
      uploadError: "من فضلك اختاري ملف صورة صحيح.",
      uploadSize: "حجم الصورة كبير. الحد الأقصى 1 ميجابايت.",
      noImage: "لا توجد صورة",
      fileName: "اسم الملف",
    },
    en: {
      badge: "Al Rowad News Center",
      title: "Latest News",
      titleHighlight: "Al Rowad Modern School",
      subtitle: "Follow the latest school news, events, activities, and student achievements. Stay informed about everything happening in our educational community.",
      search: "Search news...",
      all: "All News",
      featured: "Featured Story",
      latest: "Latest News",
      readMore: "Read More",
      noResults: "No news matches your search",
      noResultsDesc: "Try different keywords or choose another category.",
      reset: "Show All News",
      explore: "Explore More",
      ctaTitle: "Be Part of Al Rowad Community",
      ctaDesc: "Discover a learning environment that values knowledge, creativity, and student development.",
      contact: "Contact Us",
      admission: "Admissions",
      newsCount: "Articles",
      allNews: "All News",
      management: "News Management",
      addNews: "Add New News",
      editNews: "Edit News",
      save: "Save News",
      update: "Save Changes",
      cancel: "Cancel",
      delete: "Delete",
      edit: "Edit",
      total: "Total News",
      titleAr: "Arabic News Title",
      titleEn: "English News Title",
      descriptionAr: "Arabic Description",
      descriptionEn: "English Description",
      categoryAr: "Arabic Category",
      categoryEn: "English Category",
      date: "News Date",
      image: "Image name or path",
      imageUpload: "Upload an image from your device",
      imageHint: "Choose an image from your device, or enter its name or URL. Image is optional.",
      chooseImage: "Choose Image",
      imagePreview: "Image Preview",
      featuredOption: "Set as Featured News",
      required: "Please complete all required fields",
      deleteConfirm: "Are you sure you want to delete this news?",
      close: "Close Management",
      imageError: "Unable to load image",
      featuredLabel: "Featured",
      searchManagement: "Search news to manage",
      added: "News was submitted successfully",
      updated: "News was updated successfully",
      deleted: "News was deleted successfully",
      uploadError: "Please choose a valid image file.",
      uploadSize: "Image is too large. Maximum size is 1 MB.",
      noImage: "No image",
      fileName: "File name",
    },
  };

  const t = isArabic ? content.ar : content.en;

  useEffect(() => {
    try {
      const savedNews = localStorage.getItem("rowad-news");

      if (savedNews) {
        const parsedNews = JSON.parse(savedNews);

        if (Array.isArray(parsedNews)) {
          setNewsItems(parsedNews);
        }
      }
    } catch (error) {
      console.error("Error loading news:", error);
    } finally {
      setIsLoaded(true);
    }
  }, []);

  useEffect(() => {
    if (!isLoaded) return;

    try {
      localStorage.setItem("rowad-news", JSON.stringify(newsItems));
    } catch (error) {
      console.error("Error saving news:", error);
    }
  }, [newsItems, isLoaded]);

  useEffect(() => {
    if (!successMessage) return;

    const timer = window.setTimeout(() => {
      setSuccessMessage("");
    }, 4500);

    return () => window.clearTimeout(timer);
  }, [successMessage]);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // رفع الصورة مباشرة من الجهاز
  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) return;

    if (!file.type.startsWith("image/")) {
      setImageError(t.uploadError);
      e.target.value = "";
      return;
    }

    if (file.size > 1024 * 1024) {
      setImageError(t.uploadSize);
      e.target.value = "";
      return;
    }

    setImageError("");
    setUploadedFileName(file.name);

    const reader = new FileReader();

    reader.onload = () => {
      if (typeof reader.result === "string") {
        setFormData((prev) => ({
          ...prev,
          image: reader.result as string,
        }));
      }
    };

    reader.onerror = () => {
      setImageError(t.uploadError);
    };

    reader.readAsDataURL(file);
  };

  const handleSaveNews = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const requiredFields = [
      formData.titleAr,
      formData.titleEn,
      formData.descriptionAr,
      formData.descriptionEn,
      formData.categoryAr,
      formData.categoryEn,
      formData.date,
    ];

    if (requiredFields.some((field) => !field.trim())) {
      alert(t.required);
      return;
    }

    const cleanData: NewsForm = {
      ...formData,
      titleAr: formData.titleAr.trim(),
      titleEn: formData.titleEn.trim(),
      descriptionAr: formData.descriptionAr.trim(),
      descriptionEn: formData.descriptionEn.trim(),
      categoryAr: formData.categoryAr.trim(),
      categoryEn: formData.categoryEn.trim(),
      image: formData.image.trim(),
    };

    if (editingId !== null) {
      setNewsItems((prev) =>
        prev.map((item) => {
          if (item.id === editingId) {
            return {
              ...cleanData,
              id: editingId,
            };
          }

          if (cleanData.featured) {
            return {
              ...item,
              featured: false,
            };
          }

          return item;
        })
      );

      setSuccessMessage(t.updated);
    } else {
      const newId =
        Math.max(0, ...newsItems.map((item) => item.id)) + 1;

      const newNews: NewsItem = {
        ...cleanData,
        id: newId,
      };

      setNewsItems((prev) => [
        newNews,
        ...prev.map((item) =>
          cleanData.featured
            ? { ...item, featured: false }
            : item
        ),
      ]);

      setSuccessMessage(t.added);
    }

    setFormData({
      ...emptyForm,
      date: new Date().toISOString().slice(0, 10),
    });

    setUploadedFileName("");
    setImageError("");
    setEditingId(null);
    setShowManagement(false);
    setActiveCategory("all");
    setSearch("");

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleEditNews = (item: NewsItem) => {
    setFormData({
      titleAr: item.titleAr,
      titleEn: item.titleEn,
      descriptionAr: item.descriptionAr,
      descriptionEn: item.descriptionEn,
      categoryAr: item.categoryAr,
      categoryEn: item.categoryEn,
      date: item.date,
      image: item.image || "",
      featured: !!item.featured,
    });

    setUploadedFileName("");
    setImageError("");
    setEditingId(item.id);
    setShowManagement(true);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleDeleteNews = (id: number) => {
    const confirmed = window.confirm(t.deleteConfirm);

    if (!confirmed) return;

    setNewsItems((prev) =>
      prev.filter((item) => item.id !== id)
    );

    if (editingId === id) {
      setEditingId(null);
      setFormData(emptyForm);
      setShowManagement(false);
    }

    setSuccessMessage(t.deleted);
  };

  const handleCancelEdit = () => {
    setFormData({
      ...emptyForm,
      date: new Date().toISOString().slice(0, 10),
    });

    setUploadedFileName("");
    setImageError("");
    setEditingId(null);
    setShowManagement(false);
  };

  const categories = useMemo(() => {
    const uniqueCategories = Array.from(
      new Set(newsItems.map((item) => item.categoryAr))
    );

    return [
      {
        value: "all",
        label: t.all,
      },
      ...uniqueCategories.map((category) => {
        const item = newsItems.find(
          (news) => news.categoryAr === category
        );

        return {
          value: category,
          label: isArabic
            ? category
            : item?.categoryEn || category,
        };
      }),
    ];
  }, [newsItems, isArabic, t.all]);

  const filteredNews = useMemo(() => {
    return newsItems.filter((item) => {
      const keyword = search.trim().toLowerCase();

      const matchesSearch =
        item.titleAr.toLowerCase().includes(keyword) ||
        item.titleEn.toLowerCase().includes(keyword) ||
        item.descriptionAr.toLowerCase().includes(keyword) ||
        item.descriptionEn.toLowerCase().includes(keyword) ||
        item.categoryAr.toLowerCase().includes(keyword) ||
        item.categoryEn.toLowerCase().includes(keyword);

      const matchesCategory =
        activeCategory === "all" ||
        item.categoryAr === activeCategory;

      return matchesSearch && matchesCategory;
    });
  }, [newsItems, search, activeCategory]);

  const featuredNews = filteredNews.find(
    (item) => item.featured
  );

  const regularNews = filteredNews.filter(
    (item) => item.id !== featuredNews?.id
  );

  const formatDate = (date: string) => {
    return new Date(`${date}T12:00:00`).toLocaleDateString(
      isArabic ? "ar-EG" : "en-US",
      {
        year: "numeric",
        month: "long",
        day: "numeric",
      }
    );
  };

  if (!isLoaded) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#f4f9fa]">
        <div className="text-center">
          <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-cyan-100 border-t-[#0e7490]" />
          <p className="mt-4 font-bold text-[#075568]">
            {isArabic ? "جاري تحميل الأخبار..." : "Loading News..."}
          </p>
        </div>
      </main>
    );
  }

  return (
    <main
      dir={isArabic ? "rtl" : "ltr"}
      className="min-h-screen overflow-hidden bg-[#f4f9fa] text-slate-800"
    >
      {/* SUCCESS MESSAGE */}

      {successMessage && (
        <div className="fixed top-5 left-1/2 z-[100] w-[calc(100%-32px)] max-w-md -translate-x-1/2">
          <div className="flex items-center gap-3 rounded-2xl border border-emerald-200 bg-white px-5 py-4 shadow-2xl">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-xl text-emerald-700">
              ✓
            </span>
            <div>
              <p className="font-black text-emerald-700">
                {successMessage}
              </p>
              <p className="mt-1 text-xs text-slate-500">
                {isArabic
                  ? "تم حفظ التغييرات في المتصفح."
                  : "Changes have been saved in this browser."}
              </p>
            </div>
            <button
              type="button"
              onClick={() => setSuccessMessage("")}
              className="ms-auto text-xl text-slate-400 hover:text-slate-700"
              aria-label="Close"
            >
              ×
            </button>
          </div>
        </div>
      )}

      {/* NEWS MANAGEMENT */}

      <section className="relative z-10 mx-auto max-w-7xl px-5 pt-8">
        <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-cyan-100 bg-white p-5 shadow-lg">
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-50 text-xl">
              📰
            </span>

            <div>
              <h2 className="text-xl font-black text-[#073b4c]">
                {t.management}
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                {t.total}: {newsItems.length}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => {
              if (showManagement) {
                handleCancelEdit();
              } else {
                setFormData(emptyForm);
                setUploadedFileName("");
                setEditingId(null);
                setShowManagement(true);

                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }
            }}
            className="rounded-xl bg-[#075568] px-6 py-3 font-bold text-white transition hover:bg-[#0e7490]"
          >
            {showManagement ? t.close : `+ ${t.addNews}`}
          </button>
        </div>

        {/* ADD / EDIT FORM */}

        {showManagement && (
          <form
            onSubmit={handleSaveNews}
            className="mt-6 rounded-3xl border border-cyan-100 bg-white p-6 shadow-xl md:p-9"
          >
            <div className="mb-8 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-50 text-2xl">
                {editingId !== null ? "✏️" : "➕"}
              </div>

              <div>
                <h3 className="text-2xl font-black text-[#073b4c]">
                  {editingId !== null ? t.editNews : t.addNews}
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                  {isArabic
                    ? "أدخلي بيانات الخبر بالعربي والإنجليزي"
                    : "Enter the news details in Arabic and English"}
                </p>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label className="mb-2 block font-bold text-[#073b4c]">
                  {t.titleAr} *
                </label>
                <input
                  name="titleAr"
                  value={formData.titleAr}
                  onChange={handleInputChange}
                  required
                  dir="rtl"
                  placeholder="اكتبي عنوان الخبر بالعربي"
                  className="w-full rounded-xl border border-cyan-100 bg-[#f8fcfd] p-4 outline-none transition focus:border-[#0e7490] focus:ring-4 focus:ring-cyan-50"
                />
              </div>

              <div>
                <label className="mb-2 block font-bold text-[#073b4c]">
                  {t.titleEn} *
                </label>
                <input
                  name="titleEn"
                  value={formData.titleEn}
                  onChange={handleInputChange}
                  required
                  dir="ltr"
                  placeholder="Enter news title"
                  className="w-full rounded-xl border border-cyan-100 bg-[#f8fcfd] p-4 outline-none transition focus:border-[#0e7490] focus:ring-4 focus:ring-cyan-50"
                />
              </div>

              <div>
                <label className="mb-2 block font-bold text-[#073b4c]">
                  {t.descriptionAr} *
                </label>
                <textarea
                  name="descriptionAr"
                  value={formData.descriptionAr}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  dir="rtl"
                  placeholder="اكتبي تفاصيل الخبر..."
                  className="w-full resize-y rounded-xl border border-cyan-100 bg-[#f8fcfd] p-4 leading-8 outline-none transition focus:border-[#0e7490] focus:ring-4 focus:ring-cyan-50"
                />
              </div>

              <div>
                <label className="mb-2 block font-bold text-[#073b4c]">
                  {t.descriptionEn} *
                </label>
                <textarea
                  name="descriptionEn"
                  value={formData.descriptionEn}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  dir="ltr"
                  placeholder="Write news description..."
                  className="w-full resize-y rounded-xl border border-cyan-100 bg-[#f8fcfd] p-4 leading-8 outline-none transition focus:border-[#0e7490] focus:ring-4 focus:ring-cyan-50"
                />
              </div>

              <div>
                <label className="mb-2 block font-bold text-[#073b4c]">
                  {t.categoryAr} *
                </label>
                <input
                  name="categoryAr"
                  value={formData.categoryAr}
                  onChange={handleInputChange}
                  required
                  dir="rtl"
                  placeholder="مثال: أخبار المدرسة"
                  className="w-full rounded-xl border border-cyan-100 bg-[#f8fcfd] p-4 outline-none transition focus:border-[#0e7490] focus:ring-4 focus:ring-cyan-50"
                />
              </div>

              <div>
                <label className="mb-2 block font-bold text-[#073b4c]">
                  {t.categoryEn} *
                </label>
                <input
                  name="categoryEn"
                  value={formData.categoryEn}
                  onChange={handleInputChange}
                  required
                  dir="ltr"
                  placeholder="Example: School News"
                  className="w-full rounded-xl border border-cyan-100 bg-[#f8fcfd] p-4 outline-none transition focus:border-[#0e7490] focus:ring-4 focus:ring-cyan-50"
                />
              </div>

              <div>
                <label className="mb-2 block font-bold text-[#073b4c]">
                  {t.date} *
                </label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  required
                  className="w-full rounded-xl border border-cyan-100 bg-[#f8fcfd] p-4 outline-none transition focus:border-[#0e7490] focus:ring-4 focus:ring-cyan-50"
                />
              </div>
            </div>

            {/* IMAGE UPLOAD AND IMAGE NAME */}

            <div className="mt-8 rounded-2xl border border-dashed border-cyan-300 bg-[#f5fbfc] p-5 md:p-7">
              <div className="mb-5">
                <h4 className="text-lg font-black text-[#073b4c]">
                  🖼️ {t.imageUpload}
                </h4>
                <p className="mt-2 text-sm leading-7 text-slate-500">
                  {t.imageHint}
                </p>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                {/* UPLOAD FILE */}

                <div>
                  <label className="mb-2 block font-bold text-[#073b4c]">
                    {t.chooseImage}
                  </label>

                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="block w-full cursor-pointer rounded-xl border border-cyan-100 bg-white p-3 text-sm text-slate-600 file:me-4 file:cursor-pointer file:rounded-lg file:border-0 file:bg-[#075568] file:px-4 file:py-2 file:font-bold file:text-white hover:file:bg-[#0e7490]"
                  />

                  {uploadedFileName && (
                    <p className="mt-3 break-all text-sm font-semibold text-emerald-700">
                      ✓ {t.fileName}: {uploadedFileName}
                    </p>
                  )}
                </div>

                {/* IMAGE NAME / URL / PATH */}

                <div>
                  <label className="mb-2 block font-bold text-[#073b4c]">
                    {t.image}
                  </label>

                  <input
                    type="text"
                    name="image"
                    value={
                      formData.image.startsWith("data:image/")
                        ? uploadedFileName
                        : formData.image
                    }
                    onChange={(e) => {
                      setFormData((prev) => ({
                        ...prev,
                        image: e.target.value,
                      }));
                      setUploadedFileName("");
                      setImageError("");
                    }}
                    dir="ltr"
                    placeholder="school.jpg أو /images/school.jpg أو https://..."
                    className="w-full rounded-xl border border-cyan-100 bg-white p-4 outline-none transition focus:border-[#0e7490] focus:ring-4 focus:ring-cyan-50"
                  />

                  <p className="mt-2 text-xs leading-6 text-slate-500">
                    {isArabic
                      ? "لو كتبتي school.jpg سيتم البحث عنها داخل public/images."
                      : "If you enter school.jpg, it will be loaded from public/images."}
                  </p>
                </div>
              </div>

              {imageError && (
                <p className="mt-4 rounded-lg bg-red-50 p-3 text-sm font-bold text-red-600">
                  {imageError}
                </p>
              )}

              {/* IMAGE PREVIEW */}

              {formData.image && (
                <div className="mt-7">
                  <p className="mb-3 font-bold text-[#073b4c]">
                    {t.imagePreview}
                  </p>

                  <div className="relative w-full overflow-hidden rounded-2xl border border-cyan-100 bg-white md:w-96">
                    <img
                      src={resolveImage(formData.image)}
                      alt="News Preview"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                      onLoad={(e) => {
                        e.currentTarget.style.display = "block";
                      }}
                      className="h-56 w-full object-cover"
                    />

                    <button
                      type="button"
                      onClick={() => {
                        setFormData((prev) => ({
                          ...prev,
                          image: "",
                        }));
                        setUploadedFileName("");
                        setImageError("");
                      }}
                      className="absolute right-3 top-3 rounded-lg bg-red-600 px-3 py-2 text-sm font-bold text-white shadow-lg hover:bg-red-700"
                    >
                      {isArabic ? "إزالة الصورة" : "Remove Image"}
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* FEATURED OPTION */}

            <label className="mt-7 flex cursor-pointer items-center gap-3 rounded-xl border border-cyan-100 bg-cyan-50 p-4 font-bold text-[#075568] transition hover:bg-cyan-100">
              <input
                type="checkbox"
                checked={!!formData.featured}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    featured: e.target.checked,
                  }))
                }
                className="h-5 w-5 accent-[#0e7490]"
              />
              ⭐ {t.featuredOption}
            </label>

            {/* FORM BUTTONS */}

            <div className="mt-8 flex flex-wrap gap-3">
              <button
                type="submit"
                className="rounded-xl bg-[#0e7490] px-8 py-4 font-bold text-white shadow-lg shadow-cyan-900/10 transition hover:bg-[#075568]"
              >
                {editingId !== null
                  ? `✓ ${t.update}`
                  : `+ ${t.save}`}
              </button>

              <button
                type="button"
                onClick={handleCancelEdit}
                className="rounded-xl border border-slate-200 px-8 py-4 font-bold text-slate-600 transition hover:bg-slate-100"
              >
                {t.cancel}
              </button>
            </div>
          </form>
        )}
      </section>

      {/* HERO */}

      <section className="relative mt-8 overflow-hidden bg-gradient-to-br from-[#062f3b] via-[#075568] to-[#0e7490] px-5 py-24 text-white md:py-32">
        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-cyan-300/10 blur-3xl" />
        <div className="absolute -bottom-32 -left-20 h-96 w-96 rounded-full bg-teal-300/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <span className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-bold text-cyan-100 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-cyan-300" />
              {t.badge}
            </span>

            <h1 className="text-4xl font-black leading-tight tracking-tight md:text-6xl lg:text-7xl">
              {t.title}
              <span className="mt-3 block text-cyan-300">
                {t.titleHighlight}
              </span>
            </h1>

            <p className="mt-8 max-w-3xl text-base leading-9 text-cyan-50/85 md:text-xl md:leading-10">
              {t.subtitle}
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <div className="rounded-2xl border border-white/15 bg-white/10 px-6 py-4 backdrop-blur">
                <p className="text-3xl font-black text-cyan-300">
                  {newsItems.length}+
                </p>
                <p className="mt-1 text-sm text-white/80">
                  {t.allNews}
                </p>
              </div>

              <div className="rounded-2xl border border-white/15 bg-white/10 px-6 py-4 backdrop-blur">
                <p className="text-3xl font-black text-cyan-300">
                  {categories.length - 1}
                </p>
                <p className="mt-1 text-sm text-white/80">
                  {isArabic ? "تصنيفات متنوعة" : "News Categories"}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 h-2 w-full bg-gradient-to-r from-cyan-300 via-teal-300 to-[#0e7490]" />
      </section>

      {/* NEWS CONTENT */}

      <section className="mx-auto max-w-7xl px-5 py-20">
        {/* SEARCH */}

        <div className="mb-12 rounded-3xl border border-cyan-100 bg-white p-5 shadow-xl shadow-cyan-950/5 md:p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <span className="text-sm font-bold text-[#0e7490]">
                {t.explore}
              </span>
              <h2 className="mt-2 text-2xl font-black text-[#073b4c] md:text-3xl">
                {t.latest}
              </h2>
            </div>

            <div className="relative w-full lg:max-w-xl">
              <span
                className={`absolute top-1/2 -translate-y-1/2 text-xl text-[#0e7490] ${
                  isArabic ? "right-5" : "left-5"
                }`}
              >
                ⌕
              </span>

              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder={t.search}
                className={`w-full rounded-2xl border border-cyan-100 bg-[#f4fafb] py-5 text-sm outline-none transition focus:border-[#0e7490] focus:ring-4 focus:ring-cyan-100 ${
                  isArabic ? "pr-14 pl-5" : "pl-14 pr-5"
                }`}
              />
            </div>
          </div>

          {/* CATEGORIES */}

          <div className="mt-8 flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category.value}
                type="button"
                onClick={() => setActiveCategory(category.value)}
                className={`rounded-xl px-5 py-3 text-sm font-bold transition duration-300 ${
                  activeCategory === category.value
                    ? "bg-[#0e7490] text-white shadow-lg shadow-cyan-900/20"
                    : "border border-cyan-100 bg-white text-slate-600 hover:border-[#0e7490] hover:text-[#0e7490]"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* FEATURED NEWS */}

        {featuredNews && (
          <div className="mb-16">
            <div className="mb-7 flex items-center gap-3">
              <span className="h-8 w-1.5 rounded-full bg-[#0e7490]" />
              <h2 className="text-2xl font-black text-[#073b4c] md:text-3xl">
                {t.featured}
              </h2>
            </div>

            <article className="group grid overflow-hidden rounded-[2rem] border border-cyan-100 bg-white shadow-xl shadow-cyan-950/5 transition hover:-translate-y-1 hover:shadow-2xl lg:grid-cols-2">
              <div className="relative min-h-[300px] overflow-hidden bg-cyan-50 lg:min-h-[480px]">
                {featuredNews.image ? (
                  <img
                    src={resolveImage(featuredNews.image)}
                    alt={isArabic ? featuredNews.titleAr : featuredNews.titleEn}
                    className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                ) : (
                  <div className="flex h-full min-h-[300px] items-center justify-center text-6xl">
                    📰
                  </div>
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-[#062f3b]/60 to-transparent" />

                <span className="absolute right-6 top-6 rounded-full bg-[#0e7490] px-5 py-2 text-sm font-bold text-white shadow-lg">
                  {isArabic
                    ? featuredNews.categoryAr
                    : featuredNews.categoryEn}
                </span>
              </div>

              <div className="flex flex-col justify-center p-7 md:p-12">
                <div className="mb-6 flex items-center gap-3 text-sm font-semibold text-[#0e7490]">
                  <span>📅</span>
                  <span>{formatDate(featuredNews.date)}</span>
                </div>

                <h3 className="text-2xl font-black leading-relaxed text-[#073b4c] transition group-hover:text-[#0e7490] md:text-3xl">
                  {isArabic
                    ? featuredNews.titleAr
                    : featuredNews.titleEn}
                </h3>

                <p className="mt-6 text-base leading-9 text-slate-600">
                  {isArabic
                    ? featuredNews.descriptionAr
                    : featuredNews.descriptionEn}
                </p>

                <div className="mt-9">
                  <span className="inline-flex items-center gap-3 rounded-xl bg-[#0e7490] px-7 py-4 font-bold text-white">
                    {t.readMore}
                    <span>{isArabic ? "←" : "→"}</span>
                  </span>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <button
                    type="button"
                    onClick={() => handleEditNews(featuredNews)}
                    className="rounded-xl bg-cyan-50 px-5 py-3 font-bold text-[#075568] transition hover:bg-cyan-100"
                  >
                    ✏️ {t.edit}
                  </button>

                  <button
                    type="button"
                    onClick={() => handleDeleteNews(featuredNews.id)}
                    className="rounded-xl bg-red-50 px-5 py-3 font-bold text-red-600 transition hover:bg-red-100"
                  >
                    🗑️ {t.delete}
                  </button>
                </div>
              </div>
            </article>
          </div>
        )}

        {/* NEWS GRID */}

        <div className="mb-8 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="h-8 w-1.5 rounded-full bg-[#0e7490]" />
            <h2 className="text-2xl font-black text-[#073b4c] md:text-3xl">
              {t.latest}
            </h2>
          </div>

          <span className="rounded-xl bg-cyan-100 px-4 py-2 text-sm font-bold text-[#0e7490]">
            {filteredNews.length} {t.newsCount}
          </span>
        </div>

        {regularNews.length > 0 ? (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {regularNews.map((item) => (
              <article
                key={item.id}
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-cyan-100 bg-white shadow-lg shadow-cyan-950/5 transition duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-900/10"
              >
                <div className="relative h-60 overflow-hidden bg-cyan-50">
                  {item.image ? (
                    <img
                      src={resolveImage(item.image)}
                      alt={isArabic ? item.titleAr : item.titleEn}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center text-5xl">
                      📰
                    </div>
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-[#062f3b]/40 to-transparent opacity-70" />

                  <span className="absolute right-5 top-5 rounded-xl bg-white/95 px-4 py-2 text-xs font-bold text-[#0e7490] shadow-lg">
                    {isArabic ? item.categoryAr : item.categoryEn}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-7">
                  <div className="mb-5 flex flex-wrap gap-2">
                    <button
                      type="button"
                      onClick={() => handleEditNews(item)}
                      className="rounded-lg bg-cyan-50 px-4 py-2 text-sm font-bold text-[#075568] transition hover:bg-cyan-100"
                    >
                      ✏️ {t.edit}
                    </button>

                    <button
                      type="button"
                      onClick={() => handleDeleteNews(item.id)}
                      className="rounded-lg bg-red-50 px-4 py-2 text-sm font-bold text-red-600 transition hover:bg-red-100"
                    >
                      🗑️ {t.delete}
                    </button>
                  </div>

                  <div className="mb-4 flex items-center gap-2 text-xs font-semibold text-slate-400">
                    <span>📅</span>
                    <span>{formatDate(item.date)}</span>
                  </div>

                  <h3 className="mb-4 text-xl font-black leading-relaxed text-[#073b4c] transition group-hover:text-[#0e7490]">
                    {isArabic ? item.titleAr : item.titleEn}
                  </h3>

                  <p className="mb-7 flex-1 text-sm leading-8 text-slate-600">
                    {isArabic
                      ? item.descriptionAr
                      : item.descriptionEn}
                  </p>

                  <div className="border-t border-cyan-50 pt-5">
                    <span className="inline-flex items-center gap-2 text-sm font-black text-[#0e7490]">
                      {t.readMore}
                      <span>{isArabic ? "←" : "→"}</span>
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="rounded-3xl border border-dashed border-cyan-200 bg-white px-6 py-20 text-center">
            <div className="mb-5 text-6xl">📰</div>

            <h3 className="text-2xl font-black text-[#073b4c]">
              {t.noResults}
            </h3>

            <p className="mt-3 text-slate-500">
              {t.noResultsDesc}
            </p>

            <button
              type="button"
              onClick={() => {
                setSearch("");
                setActiveCategory("all");
              }}
              className="mt-7 rounded-xl bg-[#0e7490] px-7 py-4 font-bold text-white transition hover:bg-[#075568]"
            >
              {t.reset}
            </button>
          </div>
        )}
      </section>

      {/* CTA */}

      <section className="px-5 pb-20">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#062f3b] via-[#075568] to-[#0e7490] px-7 py-16 text-center text-white md:px-16 md:py-20">
          <div className="absolute -right-20 -top-24 h-72 w-72 rounded-full bg-cyan-300/10 blur-3xl" />
          <div className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-teal-300/10 blur-3xl" />

          <div className="relative">
            <span className="text-5xl">🎓</span>

            <h2 className="mt-7 text-3xl font-black md:text-5xl">
              {t.ctaTitle}
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-9 text-cyan-50/85 md:text-lg">
              {t.ctaDesc}
            </p>

            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="rounded-xl bg-white px-8 py-4 font-black text-[#075568] transition hover:bg-cyan-100"
              >
                {t.contact}
              </Link>

              <Link
                href="/admission"
                className="rounded-xl border border-white/40 bg-white/10 px-8 py-4 font-black text-white transition hover:bg-white/20"
              >
                {t.admission}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
