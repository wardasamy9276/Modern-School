// "use client";

// import Image from "next/image";
// import { useEffect, useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, EffectCoverflow } from "swiper/modules";

// import "swiper/css";
// import "swiper/css/effect-coverflow";

// import { Button } from "@/components/ui/button";
// import Link from "next/link";
// import { useLanguage } from "../../context/LanguageContext";

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
//       <div className="flex justify-center items-center py-24 bg-[#080910]">
//         <p className="text-gray-500">Loading...</p>
//       </div>
//     );
//   }

//   return (
//     <section
//       className="
//         py-24
//         px-5
//         bg-[#080910]
//         text-white
//         relative
//         overflow-hidden
//         min-h-[700px]


//       "
//     >
//       {/* العنوان */}
//       <h1
//         className="
//           text-center
//           mb-16
//           font-bold
//           text-[34px]
//           text-[#9E7C2F]
//           tracking-tight
//         "
//       >
//         {language === "ar" ? "عملاؤنا" : "Our Clients"}
//       </h1>

//       {/* ================================
//           Slider Container
//           50% من عرض الصفحة ومتمركز
//       ================================= */}
//       <div
//         className="
//           relative
//           w-full
 
//               lg:w-2/3
//           mx-auto
//           overflow-hidden

          
//         "
//       >
//         <Swiper
//           modules={[Autoplay, EffectCoverflow]}
//           effect="coverflow"
//           grabCursor={true}
//           centeredSlides={true}
//           slidesPerView="auto"
//           coverflowEffect={{
//             rotate: 25,
//             stretch: 0,
//             depth: 150,
//             modifier: 1,
//             slideShadows: true,
//           }}
//           loop={schools.length > 3}
//           autoplay={{
//             delay: 3000,
//             disableOnInteraction: false,
//           }}
//           breakpoints={{
//             640: {
//               spaceBetween: -40,
//             },
//             1024: {
//               spaceBetween: -80,
//             },
//           }}
//           className="w-full"
//         >
//           {schools.map((school) => {
//             const imageUrl = school.logo?.startsWith("http")
//               ? school.logo
//               : `http://127.0.0.1:8000/${school.logo}`;

//             return (
//               <SwiperSlide key={school.id} className="!w-[320px] !h-[500px]">
//                 <div
//                   className="
//                     group
//                     relative
//                     bg-[#121622]
//                     border
//                     border-[#1e2536]
//                     rounded-[32px]
//                     p-6
//                     flex
//                     flex-col
//                     justify-between
//                     h-full
//                     shadow-2xl
//                     transition-all
//                     duration-500
//                     swiper-slide-active:border-[#9E7C2F]/40
//                     swiper-slide-active:shadow-[0_30px_70px_rgba(158,124,47,0.2)]
//                   "
//                 >
//                   {/* ================================
//                       الصورة
//                   ================================= */}
//                   <div
//                     className="
//                       w-full
//                       h-[210px]
//                       flex
//                       items-center
//                       justify-center
//                       relative
//                     "
//                   >
//                     <div
//                       className="
//                         w-[85%]
//                         h-full
//                         relative
//                         rounded-[20px]
//                         overflow-hidden
//                       "
//                     >
//                       <Image
//                         src={imageUrl}
//                         alt={
//                           language === "ar" ? school.name_ar : school.name_en
//                         }
//                         fill
//                         className="
//                           w-full
//                           h-full
//                           object-cover
//                           transition-transform
//                           duration-500
//                           group-hover:scale-105
//                         "
//                         unoptimized
//                       />
//                     </div>
//                   </div>

//                   {/* ================================
//                       الجزء النصي
//                   ================================= */}
//                   <div
//                     className="
//                       text-center
//                       my-4
//                       flex-grow
//                       flex
//                       flex-col
//                       justify-center
//                     "
//                   >
//                     <h3
//                       className="
//                         text-white
//                         font-extrabold
//                         text-xl
//                         mb-2
//                         tracking-wide
//                         group-hover:text-[#9E7C2F]
//                         transition-colors
//                         line-clamp-1
//                       "
//                     >
//                       {language === "ar" ? school.name_ar : school.name_en}
//                     </h3>

//                     <p
//                       className="
//                         text-gray-400
//                         text-xs
//                         leading-relaxed
//                         line-clamp-3
//                       "
//                     >
//                       {language === "ar"
//                         ? "نظام تعليمي متطور يهدف إلى بناء جيل مبدع وقادر على مواكبة أحدث التطورات الأكاديمية والتقنية."
//                         : "An advanced educational system aimed at building a creative generation capable of keeping pace with the latest academic developments."}
//                     </p>
//                   </div>

//                   {/* ================================
//                       الزر السفلي
//                   ================================= */}
//                   <div className="w-full mt-auto">
//                     <Link href={`/schools/${school.id}`}>
//                       <Button
//                         className="
//                           w-full
//                           bg-[#181e2b]
//                           hover:bg-[#9E7C2F]
//                           text-gray-200
//                           hover:text-black
//                           border
//                           border-[#2e374e]
//                           hover:border-[#9E7C2F]
//                           rounded-2xl
//                           py-3
//                           text-sm
//                           font-semibold
//                           transition-all
//                           duration-300
//                         "
//                       >
//                         {language === "ar"
//                           ? "اكتشفي المدرسة"
//                           : "Explore School"}
//                       </Button>
//                     </Link>
//                   </div>
//                 </div>
//               </SwiperSlide>
//             );
//           })}
//         </Swiper>
//       </div>

//       {/* ================================
//           زر كل ما يخص الطلبة
//       ================================= */}
//       <div
//         className="
//           flex
//           justify-center
//           items-center
//           mt-16
//         "
//       >
//         <Link href="/thank-you">
//           <Button
//             className="
//               hidden
//               md:inline-flex
//               text-white
//               bg-cyan-700
//               hover:bg-cyan-900
//               px-10
//               py-4
//               rounded-2xl
//               shadow-xl
//               transition-all
//               font-bold
//             "
//           >
//             {language === "ar" ? "كل ما يخص الطلبة" : "Student Information"}
//           </Button>
//         </Link>
//       </div>
//     </section>
//   );
// }

"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useLanguage } from "../../context/LanguageContext";
import { schoolsData } from "../home/data/schoolsData";

export default function SchoolsSlider() {
  const { language } = useLanguage();

  const schools = [...schoolsData]
    .filter((school) => school.status === 1)
    .sort((a, b) => a.sort_order - b.sort_order);

  return (
    <section className="py-20 px-3 sm:px-6 bg-[#080910] text-white relative overflow-hidden w-full">
      {/* Section Title */}
      <h2 className="text-center mb-12 font-bold text-3xl sm:text-[34px] text-[#9E7C2F] tracking-tight">
        {language === "ar" ? "عملاؤنا" : "Our Clients"}
      </h2>

      {/* Slider Container */}
      <div className="w-full max-w-5xl mx-auto px-0 overflow-hidden">
        <Swiper
          modules={[Autoplay, EffectCoverflow, Pagination]}
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          initialSlide={Math.floor(schools.length / 2)}
          coverflowEffect={{
            rotate: 15,
            stretch: 0,
            depth: 80,
            modifier: 1,
            slideShadows: false,
          }}
          loop={schools.length > 2}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: "auto",
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: "auto",
              spaceBetween: 30,
            },
          }}
          className="w-full py-6"
        >
          {schools.map((school) => (
            <SwiperSlide
              key={school.id}
              className="!w-[280px] sm:!w-[320px] !h-[480px] flex justify-center"
            >
              <div
                className="
                  w-full group relative bg-[#121622]
                  border border-[#1e2536]
                  rounded-[28px] p-5 sm:p-6
                  flex flex-col justify-between h-full
                  shadow-2xl transition-all duration-500
                  hover:border-[#9E7C2F]/50
                "
              >
                {/* School Image */}
                <div className="w-full h-[180px] flex items-center justify-center relative">
                  <div className="w-full h-full relative rounded-[18px] overflow-hidden bg-[#181e2b]">
                    <Image
                      src={school.logo}
                      alt={
                        language === "ar"
                          ? school.name_ar
                          : school.name_en
                      }
                      fill
                      sizes="(max-width: 768px) 280px, 320px"
                      className="
                        object-cover transition-transform
                        duration-500 group-hover:scale-105
                      "
                    />
                  </div>
                </div>

                {/* School Information */}
                <div className="text-center my-3 flex-grow flex flex-col justify-center">
                  <h3
                    className="
                      text-white font-extrabold text-lg sm:text-xl mb-2
                      tracking-wide group-hover:text-[#9E7C2F]
                      transition-colors line-clamp-1
                    "
                  >
                    {language === "ar"
                      ? school.name_ar
                      : school.name_en}
                  </h3>

                  <p className="text-gray-400 text-xs leading-relaxed line-clamp-3">
                    {language === "ar"
                      ? "نظام تعليمي متطور يهدف إلى بناء جيل مبدع وقادر على مواكبة أحدث التطورات الأكاديمية والتقنية."
                      : "An advanced educational system aimed at building a creative generation capable of keeping pace with the latest academic and technical developments."}
                  </p>
                </div>

                {/* School Details Button */}
                <div className="w-full mt-auto">
                  <Link href={`/schools/${school.id}`} className="block w-full">
                    <Button
                      className="
                        w-full bg-[#181e2b] hover:bg-[#9E7C2F]
                        text-gray-200 hover:text-black
                        border border-[#2e374e]
                        hover:border-[#9E7C2F]
                        rounded-xl py-3 text-sm font-semibold
                        transition-all duration-300
                      "
                    >
                      {language === "ar"
                        ? "اكتشفي المدرسة"
                        : "Explore School"}
                    </Button>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Student Information Button */}
      <div className="flex justify-center items-center mt-10">
        <Link href="/thank-you">
          <Button
            className="
              text-white
              bg-cyan-700 hover:bg-cyan-900
              px-8 py-3.5 rounded-2xl shadow-xl
              transition-all font-bold text-sm sm:text-base
            "
          >
            {language === "ar"
              ? "كل ما يخص الطلبة"
              : "Student Information"}
          </Button>
        </Link>
      </div>
    </section>
  );
}