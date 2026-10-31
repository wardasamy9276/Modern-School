// "use client";

// import Image from "next/image";

// import { useEffect, useState } from "react";

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination } from "swiper/modules";

// import "swiper/css";
// import "swiper/css/pagination";

// import { Button } from "@/components/ui/button";
// import Link from "next/link";
// import { useLanguage } from "@/context/LanguageContext";

// interface SchoolSlider {
//   id: number;
//   name_ar: string;
//   name_en: string;
//   logo: string;
// }

// export default function SchoolsSlider() {
//   const { language } = useLanguage();

//   const [schools, setSchools] = useState<SchoolSlider[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetch("http://127.0.0.1:8000/api/school-slider")
//       .then((res) => res.json())
//       .then((data: SchoolSlider[]) => {
//         setSchools(data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.log(error);
//         setLoading(false);
//       });
//   }, []);

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center py-20">
//         <p className="text-gray-500">Loading...</p>
//       </div>
//     );
//   }

//   return (
//     <section
//       className="py-16 px-5 bg-white
//      overflow-hidden"
//     >
//       {/* العنوان والوصف */}

//       <div className="max-w-4xl mx-auto text-center mb-12">
//         <h1
//           className="
//             text-center
//             mb-5
//             font-bold
//             text-[30px]
//             md:text-[36px]
//             text-[#9E7C2F]
//           "
//         >
//           {language === "ar" ? "عملاؤنا" : "Our Clients"}
//         </h1>

//         <p
//           className="
//             text-gray-600
//             text-base
//             md:text-lg
//             leading-8
//             md:leading-9
//             max-w-3xl
//             mx-auto
//           "
//         >
//           {language === "ar"
//             ? "نفخر بثقة شركائنا من المدارس والمؤسسات التعليمية التي تعتمد على حلولنا لتطوير العملية التعليمية والإدارية. نعمل مع مدارس متنوعة لتقديم تجربة تعليمية حديثة تساعد على تنظيم العمل، وتسهيل التواصل بين الإدارة والمعلمين والطلاب وأولياء الأمور، وتحقيق بيئة تعليمية أكثر تطورًا وكفاءة."
//             : "We are proud of the trust placed in us by our partner schools and educational institutions. We work with a variety of schools to provide modern solutions that help improve educational and administrative processes, facilitate communication between management, teachers, students, and parents, and create a more efficient learning environment."}
//         </p>
//       </div>

//       {/* Slider */}

//       <div className="relative">
//         <Swiper
//           modules={[Autoplay, Pagination]}
//           spaceBetween={20}
//           slidesPerView={1}
//           autoplay={{
//             delay: 2500,
//             disableOnInteraction: false,
//           }}
//           pagination={{
//             clickable: true,
//             el: ".school-pagination",
//           }}
//           breakpoints={{
//             480: {
//               slidesPerView: 1,
//               spaceBetween: 15,
//             },

//             640: {
//               slidesPerView: 2,
//               spaceBetween: 20,
//             },

//             1024: {
//               slidesPerView: 4,
//               spaceBetween: 25,
//             },
//           }}
//           className="max-w-6xl mx-auto"
//         >
//           {schools.map((school) => (
//             <SwiperSlide key={school.id}>
//               <div className="flex flex-col items-center">
//                 <div
//                   className="
//                     w-full
//                     max-w-[220px]
//                     h-[150px]
//                     border
//                     border-gray-200
//                     rounded-2xl
//                     shadow-sm
//                     flex
//                     items-center
//                     justify-center
//                     p-5
//                     bg-white
//                     hover:shadow-xl
//                     hover:-translate-y-1
//                     transition-all
//                     duration-300
//                   "
//                 >
//                   <Image
//                     src={`http://127.0.0.1:8000/${school.logo}`}
//                     alt={language === "ar" ? school.name_ar : school.name_en}
//                     width={160}
//                     height={160}
//                     className="
//                       object-contain
//                       max-h-[100px]
//                     "
//                     unoptimized
//                   />
//                 </div>

//                 <p
//                   className="
//                     mt-4
//                     text-center
//                     text-gray-900
//                     font-bold
//                     text-sm
//                     md:text-base
//                     max-w-[180px]
//                     line-clamp-2
//                   "
//                 >
//                   {language === "ar" ? school.name_ar : school.name_en}
//                 </p>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>

//         {/* Pagination */}

//         <div
//           className="
//             school-pagination
//             flex
//             justify-center
//             mt-8
//           "
//         />
//       </div>

//       {/* زرار */}

//       <div className="flex justify-center items-center mt-12">
//         <Link href="/student-information">
//           <Button
//             className="
//               hidden
//               md:inline-flex
//               text-white
//               bg-cyan-700
//               hover:bg-cyan-900
//               px-7
//               py-6
//               rounded-2xl
//               transition-all
//               duration-300
//               hover:scale-105
//             "
//           >
//             {/* {language === "ar" ? "كل ما يخص الطلبة" : "Student Information"}
//              */}
//             <span>{language ? "استكشف مدارسنا" : "Explore Our Schools"}</span>
//             <Image src="/icon/Icon8.png" alt="Icon" width={35} height={35} />
//           </Button>
//         </Link>
//       </div>
//     </section>
//   );
// }
// 2222222222222222222222222222222222222222222222222
// 'use client';

// import React, { useState, useEffect, useCallback } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';

// interface Slide {
//   id: number;
//   title: string;
//   description: string;
//   image: string;
//   tag: string;
// }

// const slides: Slide[] = [
//   {
//     id: 1,
//     title: 'أنظمة إدارة المدارس الذكية',
//     description: 'حلول برمجية متكاملة تهدف إلى تحسين العملية التعليمية وإدارة الطلاب والدرجات بسهولة.',
//     tag: 'Next.js & Laravel',
//     image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200&auto=format&fit=crop',
//   },
//   {
//     title: 'تطبيقات التجارة الإلكترونية',
//     id: 2,
//     description: 'واجهات مستخدم سريعة وفاخرة تدعم متعدد اللغات ووسائل الدفع الحديثة بكفاءة عالية.',
//     tag: 'React & Tailwind',
//     image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop',
//   },
//   {
//     title: 'لوحات تحكم تفاعلية',
//     id: 3,
//     description: 'متابعة وإدارة الأداء، تقارير وإحصائيات دقيقة في الوقت الفعلي مع حماية ودقة في البيانات.',
//     tag: 'TypeScript & APIs',
//     image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
//   },
// ];

// export default function ModernSlider() {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isPlaying, setIsPlaying] = useState(true);

//   const nextSlide = useCallback(() => {
//     setCurrentIndex((prev) => (prev + 1) % slides.length);
//   }, []);

//   const prevSlide = () => {
//     setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
//   };

//   useEffect(() => {
//     if (!isPlaying) return;
//     const interval = setInterval(() => {
//       nextSlide();
//     }, 5000);
//     return () => clearInterval(interval);
//   }, [isPlaying, nextSlide]);

//   return (
//     <div className="relative w-full max-w-5xl mx-auto h-[450px] md:h-[500px] overflow-hidden rounded-2xl bg-neutral-950 text-white shadow-2xl border border-neutral-800">
//       {/* Background Image & Overlay */}
//       <AnimatePresence mode="wait">
//         <motion.div
//           key={currentIndex}
//           initial={{ opacity: 0, scale: 1.05 }}
//           animate={{ opacity: 1, scale: 1 }}
//           exit={{ opacity: 0, scale: 0.95 }}
//           transition={{ duration: 0.7, ease: 'easeInOut' }}
//           className="absolute inset-0"
//         >
//           <img
//             src={slides[currentIndex].image}
//             alt={slides[currentIndex].title}
//             className="w-full h-full object-cover"
//           />
//           <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/70 to-transparent" />
//           <div className="absolute inset-0 bg-neutral-950/30 backdrop-blur-[2px]" />
//         </motion.div>
//       </AnimatePresence>

//       {/* Slide Content */}
//       <div className="relative z-10 h-full flex flex-col justify-end p-6 md:p-12 max-w-2xl">
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={currentIndex}
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -20 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//             className="space-y-3"
//           >
//             <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-cyan-400 bg-cyan-950/60 border border-cyan-800/50 rounded-full backdrop-blur-md">
//               {slides[currentIndex].tag}
//             </span>
//             <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-neutral-100">
//               {slides[currentIndex].title}
//             </h2>
//             <p className="text-sm md:text-base text-neutral-300 leading-relaxed">
//               {slides[currentIndex].description}
//             </p>
//           </motion.div>
//         </AnimatePresence>
//       </div>

//       {/* Navigation Controls */}
//       <div className="absolute bottom-6 left-6 z-20 flex items-center gap-3">
//         {/* Play / Pause Toggle */}
//         <button
//           onClick={() => setIsPlaying(!isPlaying)}
//           className="p-2.5 rounded-full bg-neutral-900/80 hover:bg-neutral-800 border border-neutral-700 text-neutral-300 hover:text-cyan-400 transition-all backdrop-blur-md"
//           aria-label={isPlaying ? 'Pause' : 'Play'}
//         >
//           {isPlaying ? <Pause size={18} /> : <Play size={18} />}
//         </button>

//         {/* Prev Button */}
//         <button
//           onClick={prevSlide}
//           className="p-2.5 rounded-full bg-neutral-900/80 hover:bg-neutral-800 border border-neutral-700 text-neutral-300 hover:text-cyan-400 transition-all backdrop-blur-md"
//           aria-label="Previous Slide"
//         >
//           <ChevronRight size={18} />
//         </button>

//         {/* Next Button */}
//         <button
//           onClick={nextSlide}
//           className="p-2.5 rounded-full bg-neutral-900/80 hover:bg-neutral-800 border border-neutral-700 text-neutral-300 hover:text-cyan-400 transition-all backdrop-blur-md"
//           aria-label="Next Slide"
//         >
//           <ChevronLeft size={18} />
//         </button>
//       </div>

//       {/* Slide Indicators / Pagination */}
//       <div className="absolute top-6 left-6 z-20 flex items-center gap-2">
//         {slides.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => setCurrentIndex(index)}
//             className={`h-1.5 rounded-full transition-all duration-500 ${
//               currentIndex === index
//                 ? 'w-8 bg-cyan-400 shadow-[0_0_10px_#22d3ee]'
//                 : 'w-2 bg-neutral-600 hover:bg-neutral-400'
//             }`}
//             aria-label={`Go to slide ${index + 1}`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }


"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useLanguage } from "../../context/LanguageContext";
import { schools } from "./data/SchoolSliderData"; // استيراد الداتا من الملف المنفصل

export default function SchoolsSlider() {
  const { language } = useLanguage();

  return (
    <section className="py-16 px-5 bg-white overflow-hidden">
      {/* العنوان والوصف */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1
          className="
            text-center
            mb-5
            font-bold
            text-[30px]
            md:text-[36px]
            text-[#9E7C2F]
          "
        >
          {language === "ar" ? "عملاؤنا" : "Our Clients"}
        </h1>

        <p
          className="
            text-gray-600
            text-base
            md:text-lg
            leading-8
            md:leading-9
            max-w-3xl
            mx-auto
          "
        >
          {language === "ar"
            ? "نفخر بثقة شركائنا من المدارس والمؤسسات التعليمية التي تعتمد على حلولنا لتطوير العملية التعليمية والإدارية. نعمل مع مدارس متنوعة لتقديم تجربة تعليمية حديثة تساعد على تنظيم العمل، وتسهيل التواصل بين الإدارة والمعلمين والطلاب وأولياء الأمور، وتحقيق بيئة تعليمية أكثر تطورًا وكفاءة."
            : "We are proud of the trust placed in us by our partner schools and educational institutions. We work with a variety of schools to provide modern solutions that help improve educational and administrative processes, facilitate communication between management, teachers, students, and parents, and create a more efficient learning environment."}
        </p>
      </div>

      {/* Slider */}
      <div className="relative">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            el: ".school-pagination",
          }}
          breakpoints={{
            480: {
              slidesPerView: 1,
              spaceBetween: 15,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 25,
            },
          }}
          className="max-w-6xl mx-auto"
        >
          {schools.map((school) => (
            <SwiperSlide key={school.id}>
              <div className="flex flex-col items-center">
                <div
                  className="
                    w-full
                    max-w-[220px]
                    h-[150px]
                    border
                    border-gray-200
                    rounded-2xl
                    shadow-sm
                    flex
                    items-center
                    justify-center
                    p-5
                    bg-white
                    hover:shadow-xl
                    hover:-translate-y-1
                    transition-all
                    duration-300
                  "
                >
                  <Image
                    src={school.logo}
                    alt={language === "ar" ? school.name_ar : school.name_en}
                    width={160}
                    height={160}
                    className="
                      object-contain
                      max-h-[100px]
                    "
                    unoptimized
                  />
                </div>

                <p
                  className="
                    mt-4
                    text-center
                    text-gray-900
                    font-bold
                    text-sm
                    md:text-base
                    max-w-[180px]
                    line-clamp-2
                  "
                >
                  {language === "ar" ? school.name_ar : school.name_en}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Pagination */}
        <div
          className="
            school-pagination
            flex
            justify-center
            mt-8
          "
        />
      </div>

      {/* زرار الاستكشاف */}
      <div className="flex justify-center items-center mt-12">
        <Link href="/student-information">
          <Button
            className="
              hidden
              md:inline-flex
              text-white
              bg-cyan-700
              hover:bg-cyan-900
              px-7
              py-6
              rounded-2xl
              transition-all
              duration-300
              hover:scale-105
            "
          >
            <span>{language === "ar" ? "استكشف مدارسنا" : "Explore Our Schools"}</span>
            <Image src="/icon/Icon8.png" alt="Icon" width={35} height={35} />
          </Button>
        </Link>
      </div>
    </section>
  );
}