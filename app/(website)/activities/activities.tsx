
"use client";

import { useState } from "react";
import { useLanguage } from "../../context/LanguageContext";

import {
  Activity,
  Trophy,
  Palette,
  FlaskConical,
  Music,
  BookOpen,
  Users,
  CalendarDays,
  Clock,
  MapPin,
  ArrowLeft,
  ArrowRight,
  Sparkles,
  Star,
  Heart,
  Camera,
  Medal,
  Dumbbell,
  Globe,
  Lightbulb,
  CheckCircle2,
} from "lucide-react";

export default function ActivitiesPage() {
  const { language } = useLanguage();
  const isArabic = language === "ar";

  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", label: isArabic ? "جميع الأنشطة" : "All Activities" },
    { id: "sports", label: isArabic ? "رياضية" : "Sports" },
    { id: "arts", label: isArabic ? "فنية" : "Arts" },
    { id: "science", label: isArabic ? "علمية" : "Science" },
    { id: "culture", label: isArabic ? "ثقافية" : "Cultural" },
  ];

  const activities = [
    {
      id: 1,
      category: "sports",
      title: isArabic ? "البطولات الرياضية" : "Sports Championships",
      description: isArabic
        ? "أنشطة ومسابقات رياضية لتنمية روح الفريق والمنافسة الإيجابية بين الطلاب."
        : "Sports activities and competitions that encourage teamwork and positive competition.",
      icon: Trophy,
      image:
        "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=900",
      tag: isArabic ? "الرياضة" : "Sports",
    },
    {
      id: 2,
      category: "arts",
      title: isArabic ? "الفنون والإبداع" : "Arts & Creativity",
      description: isArabic
        ? "مساحة للطلاب لاكتشاف مواهبهم الفنية وتنمية مهارات الرسم والتصميم."
        : "A space for students to discover artistic talents through drawing and design.",
      icon: Palette,
      image:
        "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=900",
      tag: isArabic ? "الفنون" : "Arts",
    },
    {
      id: 3,
      category: "science",
      title: isArabic ? "المعارض العلمية" : "Science Exhibitions",
      description: isArabic
        ? "تجارب ومشروعات علمية تساعد الطلاب على التفكير والابتكار والاكتشاف."
        : "Experiments and science projects that inspire innovation and discovery.",
      icon: FlaskConical,
      image:
        "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=900",
      tag: isArabic ? "العلوم" : "Science",
    },
    {
      id: 4,
      category: "culture",
      title: isArabic ? "الأنشطة الثقافية" : "Cultural Activities",
      description: isArabic
        ? "مسابقات القراءة والإلقاء والمعلومات العامة لبناء شخصية الطالب."
        : "Reading, presentation and general knowledge competitions.",
      icon: BookOpen,
      image:
        "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=900",
      tag: isArabic ? "الثقافة" : "Culture",
    },
    {
      id: 5,
      category: "arts",
      title: isArabic ? "الموسيقى والمسرح" : "Music & Theatre",
      description: isArabic
        ? "أنشطة فنية ومسرحية تساعد الطلاب على التعبير عن أنفسهم بثقة."
        : "Music and theatre activities that help students express themselves confidently.",
      icon: Music,
      image:
        "https://images.unsplash.com/photo-1503095396549-807759245b35?w=900",
      tag: isArabic ? "الفنون" : "Arts",
    },
    {
      id: 6,
      category: "sports",
      title: isArabic ? "اللياقة البدنية" : "Physical Fitness",
      description: isArabic
        ? "برامج رياضية تشجع على الحركة والصحة والنشاط البدني."
        : "Fitness programs that promote movement, health and physical activity.",
      icon: Dumbbell,
      image:
        "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=900",
      tag: isArabic ? "الرياضة" : "Sports",
    },
    {
      id: 7,
      category: "science",
      title: isArabic ? "نادي الابتكار" : "Innovation Club",
      description: isArabic
        ? "ورش عمل ومشروعات تكنولوجية لتنمية التفكير الإبداعي ومهارات المستقبل."
        : "Workshops and technology projects that develop creative thinking and future skills.",
      icon: Lightbulb,
      image:
        "https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=900",
      tag: isArabic ? "الابتكار" : "Innovation",
    },
    {
      id: 8,
      category: "culture",
      title: isArabic ? "الرحلات التعليمية" : "Educational Trips",
      description: isArabic
        ? "زيارات تعليمية تساعد الطلاب على اكتساب الخبرات وربط المعرفة بالواقع."
        : "Educational visits that connect classroom knowledge with real experiences.",
      icon: Globe,
      image:
        "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=900",
      tag: isArabic ? "الثقافة" : "Culture",
    },
  ];

  const events = [
    {
      date: "01",
      month: isArabic ? "ديسمبر" : "DEC",
      title: isArabic ? "اليوم الرياضي" : "Sports Day",
      description: isArabic
        ? "يوم مليء بالمسابقات والأنشطة الرياضية."
        : "A day full of sports competitions and activities.",
      icon: Trophy,
      time: isArabic ? "9 صباحًا" : "9:00 AM",
    },
    {
      date: "10",
      month: isArabic ? "ديسمبر" : "DEC",
      title: isArabic ? "معرض العلوم" : "Science Fair",
      description: isArabic
        ? "عرض مشروعات الطلاب وتجاربهم العلمية."
        : "Showcasing students' projects and science experiments.",
      icon: FlaskConical,
      time: isArabic ? "10 صباحًا" : "10:00 AM",
    },
    {
      date: "18",
      month: isArabic ? "ديسمبر" : "DEC",
      title: isArabic ? "المهرجان الفني" : "Arts Festival",
      description: isArabic
        ? "عرض المواهب الفنية والإبداعية للطلاب."
        : "Celebrating students' artistic and creative talents.",
      icon: Palette,
      time: isArabic ? "11 صباحًا" : "11:00 AM",
    },
  ];

  const stats = [
    {
      number: "20+",
      label: isArabic ? "نشاط متنوع" : "Activities",
      icon: Activity,
    },
    {
      number: "8+",
      label: isArabic ? "مجالات مختلفة" : "Activity Fields",
      icon: Star,
    },
    {
      number: "100%",
      label: isArabic ? "تنمية المواهب" : "Talent Development",
      icon: Heart,
    },
    {
      number: "365",
      label: isArabic ? "يوم من التعلم" : "Days of Learning",
      icon: CalendarDays,
    },
  ];

  const filteredActivities =
    activeCategory === "all"
      ? activities
      : activities.filter((item) => item.category === activeCategory);

  return (
    <main
      dir={isArabic ? "rtl" : "ltr"}
      className="min-h-screen overflow-hidden bg-white text-[#053e50]"
    >
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#053e50] via-[#07566b] to-[#0e7490] px-5 py-24 text-white md:py-32">
        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-cyan-300/10 blur-3xl" />
        <div className="absolute -bottom-32 -left-20 h-96 w-96 rounded-full bg-white/5 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 md:grid-cols-2">
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm">
              <Activity size={18} />
              {isArabic ? "الأنشطة المدرسية" : "School Activities"}
            </div>

            <h1 className="mb-7 text-4xl font-black leading-tight md:text-6xl">
              {isArabic ? (
                <>
                  اكتشف مواهبك
                  <span className="mt-3 block text-cyan-300">
                    واصنع إنجازك
                  </span>
                </>
              ) : (
                <>
                  Discover Your Talents
                  <span className="mt-3 block text-cyan-300">
                    Create Your Success
                  </span>
                </>
              )}
            </h1>

            <p className="mb-9 max-w-xl text-lg leading-9 text-white/80">
              {isArabic
                ? "في مدرسة الرواد الحديثة نؤمن أن التعليم لا يقتصر على الفصول الدراسية، بل يمتد إلى الأنشطة التي تصنع شخصية الطالب وتكتشف مواهبه."
                : "At Al Rowad Modern School, we believe education goes beyond classrooms. Activities help shape students' personalities and discover their talents."}
            </p>

            <a
              href="#activities-list"
              className="inline-flex items-center gap-3 rounded-xl bg-white px-8 py-4 font-bold text-[#053e50] shadow-lg transition hover:-translate-y-1"
            >
              {isArabic ? "اكتشف الأنشطة" : "Explore Activities"}
              {isArabic ? <ArrowLeft size={20} /> : <ArrowRight size={20} />}
            </a>
          </div>

          <div className="relative mx-auto w-full max-w-lg">
            <div className="absolute inset-0 rotate-6 rounded-[40px] bg-cyan-300/20" />

            <div className="relative overflow-hidden rounded-[40px] border border-white/20 bg-white/10 p-5 shadow-2xl backdrop-blur-xl">
              <img
                src="https://images.unsplash.com/photo-1529390079861-591de354faf5?w=1000"
                alt={isArabic ? "طلاب يشاركون في الأنشطة" : "Students participating in activities"}
                className="h-64 w-full rounded-[30px] object-cover md:h-80"
              />

              <div className="p-5">
                <div className="mb-3 flex items-center gap-2 text-cyan-300">
                  <Sparkles size={20} />
                  <span className="text-sm font-bold">
                    {isArabic ? "تعلم • شارك • أبدع" : "Learn • Participate • Create"}
                  </span>
                </div>

                <h2 className="text-2xl font-black">
                  {isArabic ? "كل موهبة تستحق الفرصة" : "Every Talent Deserves a Chance"}
                </h2>

                <p className="mt-3 leading-8 text-white/70">
                  {isArabic
                    ? "نمنح الطلاب فرصًا لاكتشاف قدراتهم وتنمية مهاراتهم."
                    : "We give students opportunities to discover their abilities and develop their skills."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="relative z-10 mx-auto -mt-10 max-w-6xl px-5">
        <div className="grid grid-cols-2 gap-4 rounded-3xl border border-slate-100 bg-white p-6 shadow-xl md:grid-cols-4 md:p-9">
          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <div key={index} className="py-4 text-center">
                <Icon size={28} className="mx-auto mb-3 text-[#0e7490]" />
                <h3 className="mb-2 text-3xl font-black text-[#0e7490] md:text-4xl">
                  {stat.number}
                </h3>
                <p className="text-sm font-bold text-slate-500 md:text-base">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* INTRO */}
      <section className="px-5 py-24 text-center">
        <div className="mx-auto max-w-4xl">
          <span className="mb-4 inline-block rounded-full bg-[#e8f5f8] px-5 py-2 text-sm font-bold text-[#0e7490]">
            {isArabic ? "التعلم خارج الفصل" : "Beyond The Classroom"}
          </span>

          <h2 className="mb-6 text-3xl font-black md:text-5xl">
            {isArabic
              ? "التعليم تجربة متكاملة"
              : "Education Is a Complete Experience"}
          </h2>

          <p className="text-lg leading-9 text-slate-500">
            {isArabic
              ? "تساعد الأنشطة المدرسية على بناء الثقة بالنفس، وتنمية روح التعاون، واكتشاف المواهب والقدرات لدى كل طالب."
              : "School activities build confidence, encourage teamwork and help every student discover their unique talents."}
          </p>
        </div>
      </section>

      {/* ACTIVITIES */}
      <section id="activities-list" className="bg-[#f4fafb] px-5 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <span className="mb-4 inline-block rounded-full bg-white px-5 py-2 text-sm font-bold text-[#0e7490] shadow-sm">
              {isArabic ? "اكتشف عالم الأنشطة" : "Explore Activities"}
            </span>

            <h2 className="text-3xl font-black md:text-5xl">
              {isArabic ? "أنشطة تناسب كل موهبة" : "Activities for Every Talent"}
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-500">
              {isArabic
                ? "مجموعة متنوعة من المجالات التي تمنح الطلاب فرصة للتعلم والمشاركة والإبداع."
                : "A diverse range of fields that give students opportunities to learn, participate and create."}
            </p>
          </div>

          {/* FILTERS */}
          <div className="mb-10 flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`rounded-xl px-6 py-3 text-sm font-bold transition ${
                  activeCategory === category.id
                    ? "bg-[#0e7490] text-white shadow-lg"
                    : "border border-slate-200 bg-white text-slate-600 hover:border-[#0e7490] hover:text-[#0e7490]"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* ACTIVITY CARDS */}
          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {filteredActivities.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.id}
                  className="group overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
                >
                  <div className="relative h-60 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#053e50]/80 via-transparent to-transparent" />

                    <span className="absolute bottom-5 right-5 rounded-full border border-white/20 bg-white/15 px-4 py-2 text-xs font-bold text-white backdrop-blur-md">
                      {item.tag}
                    </span>

                    <div className="absolute left-5 top-5 flex h-12 w-12 items-center justify-center rounded-xl bg-white text-[#0e7490] shadow-lg">
                      <Icon size={25} />
                    </div>
                  </div>

                  <div className="p-7">
                    <h3 className="mb-4 text-xl font-black transition group-hover:text-[#0e7490]">
                      {item.title}
                    </h3>

                    <p className="min-h-20 leading-8 text-slate-500">
                      {item.description}
                    </p>

                    <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-5">
                      <span className="flex items-center gap-2 text-sm font-bold text-[#0e7490]">
                        <CheckCircle2 size={18} />
                        {isArabic ? "اكتشف المزيد" : "Discover More"}
                      </span>

                      {isArabic ? <ArrowLeft size={20} /> : <ArrowRight size={20} />}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* EVENTS */}
      <section className="px-5 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <span className="mb-4 inline-block rounded-full bg-[#e8f5f8] px-5 py-2 text-sm font-bold text-[#0e7490]">
              {isArabic ? "مواعيد وفعاليات" : "Events & Dates"}
            </span>

            <h2 className="text-3xl font-black md:text-5xl">
              {isArabic ? "فعالياتنا المدرسية" : "Our School Events"}
            </h2>
          </div>

          <div className="grid gap-7 md:grid-cols-3">
            {events.map((event, index) => {
              const Icon = event.icon;

              return (
                <div
                  key={index}
                  className="flex gap-5 rounded-3xl border border-slate-100 bg-white p-7 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className="flex h-20 w-20 shrink-0 flex-col items-center justify-center rounded-2xl bg-[#e8f5f8] text-[#0e7490]">
                    <span className="text-3xl font-black">{event.date}</span>
                    <span className="text-xs font-bold">{event.month}</span>
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="mb-3 flex items-center gap-2 text-[#0e7490]">
                      <Icon size={20} />
                      <span className="text-xs font-bold">
                        {isArabic ? "فعالية مدرسية" : "School Event"}
                      </span>
                    </div>

                    <h3 className="mb-3 text-lg font-black">{event.title}</h3>

                    <p className="mb-4 text-sm leading-7 text-slate-500">
                      {event.description}
                    </p>

                    <div className="flex items-center gap-2 text-xs text-slate-400">
                      <Clock size={15} />
                      {event.time}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="bg-[#f4fafb] px-5 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <span className="mb-4 inline-block rounded-full bg-white px-5 py-2 text-sm font-bold text-[#0e7490] shadow-sm">
                {isArabic ? "معرض الصور" : "Photo Gallery"}
              </span>

              <h2 className="text-3xl font-black md:text-5xl">
                {isArabic ? "لحظات من أنشطتنا" : "Moments From Our Activities"}
              </h2>
            </div>

            <div className="flex items-center gap-2 font-bold text-[#0e7490]">
              <Camera size={22} />
              {isArabic ? "ذكريات تستحق المشاركة" : "Memories Worth Sharing"}
            </div>
          </div>

          <div className="grid auto-rows-[180px] grid-cols-2 gap-4 md:auto-rows-[230px] md:grid-cols-4">
            <div className="group relative col-span-2 row-span-2 overflow-hidden rounded-3xl">
              <img
                src="https://images.unsplash.com/photo-1529390079861-591de354faf5?w=1000"
                alt="School activities"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#053e50]/70 to-transparent" />
            </div>

            <div className="group overflow-hidden rounded-3xl">
              <img
                src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=700"
                alt="Creative arts"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
              />
            </div>

            <div className="group overflow-hidden rounded-3xl">
              <img
                src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=700"
                alt="Science activities"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
              />
            </div>

            <div className="group overflow-hidden rounded-3xl">
              <img
                src="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=700"
                alt="Sports activities"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
              />
            </div>

            <div className="group overflow-hidden rounded-3xl">
              <img
                src="https://images.unsplash.com/photo-1503095396549-807759245b35?w=700"
                alt="Theatre activities"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
              />
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="px-5 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <span className="mb-4 inline-block rounded-full bg-[#e8f5f8] px-5 py-2 text-sm font-bold text-[#0e7490]">
              {isArabic ? "أثر الأنشطة" : "The Impact"}
            </span>

            <h2 className="text-3xl font-black md:text-5xl">
              {isArabic ? "ماذا يكتسب طلابنا؟" : "What Do Students Gain?"}
            </h2>
          </div>

          <div className="grid gap-7 md:grid-cols-3">
            {[
              {
                icon: Users,
                title: isArabic ? "العمل الجماعي" : "Teamwork",
                description: isArabic
                  ? "تنمية مهارات التعاون والتواصل واحترام الآخرين."
                  : "Developing collaboration, communication and respect.",
              },
              {
                icon: Medal,
                title: isArabic ? "الثقة والإنجاز" : "Confidence & Achievement",
                description: isArabic
                  ? "تشجيع الطلاب على المشاركة وتحقيق أهدافهم."
                  : "Encouraging participation and personal achievement.",
              },
              {
                icon: Lightbulb,
                title: isArabic ? "الإبداع والابتكار" : "Creativity & Innovation",
                description: isArabic
                  ? "اكتشاف أفكار جديدة وتنمية التفكير الإبداعي."
                  : "Discovering new ideas and creative thinking.",
              },
            ].map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="rounded-3xl border border-slate-100 bg-white p-9 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#e8f5f8] text-[#0e7490]">
                    <Icon size={32} />
                  </div>

                  <h3 className="mb-4 text-xl font-black">{item.title}</h3>

                  <p className="leading-8 text-slate-500">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#053e50] px-5 py-20 text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 text-center md:flex-row md:text-start">
          <div>
            <h2 className="mb-5 text-3xl font-black md:text-4xl">
              {isArabic
                ? "موهبتك تستحق أن تظهر!"
                : "Your Talent Deserves to Shine!"}
            </h2>

            <p className="max-w-2xl leading-8 text-white/70">
              {isArabic
                ? "انضم إلى أنشطتنا المدرسية واكتشف قدراتك وشاركنا رحلة الإبداع والنجاح."
                : "Join our school activities, discover your abilities and share a journey of creativity and success."}
            </p>
          </div>

          <a
            href="/contact"
            className="inline-flex shrink-0 items-center gap-3 rounded-xl bg-white px-8 py-4 font-bold text-[#053e50] transition hover:-translate-y-1"
          >
            {isArabic ? "شارك معنا" : "Join Us"}
            {isArabic ? <ArrowLeft size={20} /> : <ArrowRight size={20} />}
          </a>
        </div>
      </section>
    </main>
  );
}
