
"use client";

import { useEffect, useMemo, useState, type FormEvent } from "react";
import Image from "next/image";
import { useLanguage } from "../../context/LanguageContext";

type GalleryItem = {
  id: number;
  titleAr: string;
  titleEn: string;
  descriptionAr: string;
  descriptionEn: string;
  categoryAr: string;
  categoryEn: string;
  image: string;
  date: string;
  featured?: boolean;
};

const initialGallery: GalleryItem[] = [
  {
    id: 1,
    titleAr: "حفل استقبال الطلاب",
    titleEn: "Students Welcome Ceremony",
    descriptionAr: "استقبال طلابنا في بداية العام الدراسي الجديد وسط أجواء مليئة بالحماس والسعادة.",
    descriptionEn: "Welcoming our students at the beginning of the new academic year.",
    categoryAr: "الاحتفالات",
    categoryEn: "Celebrations",
    image: "https://images.unsplash.com/photo-1529390079861-591de354faf5?w=1200",
    date: "2026-09-15",
    featured: true,
  },
  {
    id: 2,
    titleAr: "التجارب العلمية",
    titleEn: "Science Experiments",
    descriptionAr: "طلابنا يكتشفون أسرار العلوم من خلال التجارب العملية داخل المعمل.",
    descriptionEn: "Students explore science through practical laboratory experiments.",
    categoryAr: "المعامل",
    categoryEn: "Laboratories",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=1200",
    date: "2026-10-02",
  },
  {
    id: 3,
    titleAr: "يوم رياضي مميز",
    titleEn: "Sports Day",
    descriptionAr: "يوم مليء بالمنافسات والأنشطة الرياضية التي تنمي روح الفريق.",
    descriptionEn: "A day full of sports competitions and teamwork.",
    categoryAr: "الأنشطة",
    categoryEn: "Activities",
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=1200",
    date: "2026-10-08",
  },
  {
    id: 4,
    titleAr: "رحلة تعليمية",
    titleEn: "Educational Trip",
    descriptionAr: "رحلات تعليمية وترفيهية تساعد الطلاب على اكتشاف العالم من حولهم.",
    descriptionEn: "Educational trips that help students discover the world.",
    categoryAr: "الرحلات",
    categoryEn: "Trips",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200",
    date: "2026-10-12",
  },
  {
    id: 5,
    titleAr: "أنشطة الفنون والإبداع",
    titleEn: "Arts and Creativity",
    descriptionAr: "مساحة للإبداع والتعبير الفني واكتشاف مواهب الطلاب.",
    descriptionEn: "A creative space for artistic expression and student talents.",
    categoryAr: "الأنشطة",
    categoryEn: "Activities",
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=1200",
    date: "2026-10-14",
  },
  {
    id: 6,
    titleAr: "المكتبة المدرسية",
    titleEn: "School Library",
    descriptionAr: "تشجيع القراءة والبحث والتعلم المستمر داخل مكتبتنا المدرسية.",
    descriptionEn: "Encouraging reading, research and lifelong learning.",
    categoryAr: "الفصول",
    categoryEn: "Classrooms",
    image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=1200",
    date: "2026-10-18",
  },
  {
    id: 7,
    titleAr: "مسابقة الابتكار",
    titleEn: "Innovation Competition",
    descriptionAr: "مشروعات وأفكار مبتكرة يقدمها طلابنا لتنمية مهارات التفكير.",
    descriptionEn: "Innovative projects presented by students.",
    categoryAr: "المسابقات",
    categoryEn: "Competitions",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200",
    date: "2026-10-20",
  },
  {
    id: 8,
    titleAr: "التعلم داخل الفصل",
    titleEn: "Classroom Learning",
    descriptionAr: "تجربة تعليمية تفاعلية تشجع المشاركة والعمل الجماعي.",
    descriptionEn: "Interactive learning that encourages participation.",
    categoryAr: "الفصول",
    categoryEn: "Classrooms",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1200",
    date: "2026-10-22",
  },
  {
    id: 9,
    titleAr: "يوم تكريم المتفوقين",
    titleEn: "Excellence Awards",
    descriptionAr: "تكريم الطلاب المتميزين تقديرًا لاجتهادهم وإنجازاتهم.",
    descriptionEn: "Honoring outstanding students for their achievements.",
    categoryAr: "الاحتفالات",
    categoryEn: "Celebrations",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200",
    date: "2026-10-25",
  },
  {
    id: 10,
    titleAr: "أنشطة الروبوتات",
    titleEn: "Robotics Activities",
    descriptionAr: "طلابنا يتعلمون البرمجة والتكنولوجيا من خلال بناء الروبوتات.",
    descriptionEn: "Students learn coding and technology through robotics.",
    categoryAr: "المعامل",
    categoryEn: "Laboratories",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1200",
    date: "2026-10-27",
  },
  {
    id: 11,
    titleAr: "أنشطة القراءة",
    titleEn: "Reading Activities",
    descriptionAr: "تنمية حب القراءة والمعرفة من خلال أنشطة ممتعة.",
    descriptionEn: "Developing a love of reading through engaging activities.",
    categoryAr: "الأنشطة",
    categoryEn: "Activities",
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=1200",
    date: "2026-10-29",
  },
  {
    id: 12,
    titleAr: "الاحتفال بيوم المعلم",
    titleEn: "Teachers Day",
    descriptionAr: "تقدير معلمينا ودورهم في بناء أجيال المستقبل.",
    descriptionEn: "Celebrating our teachers and their role in shaping the future.",
    categoryAr: "الاحتفالات",
    categoryEn: "Celebrations",
    image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=1200",
    date: "2026-11-01",
  },
  {
    id: 13,
    titleAr: "رحلة استكشافية",
    titleEn: "Discovery Trip",
    descriptionAr: "التعلم خارج أسوار المدرسة واكتساب خبرات جديدة.",
    descriptionEn: "Learning beyond the classroom and gaining new experiences.",
    categoryAr: "الرحلات",
    categoryEn: "Trips",
    image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=1200",
    date: "2026-11-03",
  },
  {
    id: 14,
    titleAr: "بطولة كرة القدم",
    titleEn: "Football Championship",
    descriptionAr: "منافسات رياضية تعزز الثقة بالنفس والروح الرياضية.",
    descriptionEn: "Sports competitions that build confidence and sportsmanship.",
    categoryAr: "المسابقات",
    categoryEn: "Competitions",
    image: "https://images.unsplash.com/photo-1521412644187-c49fa049e84d?w=1200",
    date: "2026-11-05",
  },
  {
    id: 15,
    titleAr: "التعلم بالتكنولوجيا",
    titleEn: "Technology in Learning",
    descriptionAr: "استخدام الأدوات الرقمية لتقديم تجربة تعليمية حديثة.",
    descriptionEn: "Using digital tools to create a modern learning experience.",
    categoryAr: "المعامل",
    categoryEn: "Laboratories",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200",
    date: "2026-11-07",
  },
  {
    id: 16,
    titleAr: "معرض المشروعات الطلابية",
    titleEn: "Student Projects Exhibition",
    descriptionAr: "عرض إبداعات الطلاب ومشروعاتهم في مختلف المجالات.",
    descriptionEn: "Showcasing student creativity and projects.",
    categoryAr: "المسابقات",
    categoryEn: "Competitions",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200",
    date: "2026-11-09",
  },
  {
    id: 17,
    titleAr: "يوم الأنشطة المفتوح",
    titleEn: "Open Activities Day",
    descriptionAr: "أنشطة متنوعة تجمع بين التعلم والمرح والتعاون.",
    descriptionEn: "A variety of activities combining learning and fun.",
    categoryAr: "الأنشطة",
    categoryEn: "Activities",
    image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=1200",
    date: "2026-11-10",
  },
  {
    id: 18,
    titleAr: "لقطات من الحياة المدرسية",
    titleEn: "School Life Moments",
    descriptionAr: "لحظات يومية مميزة من حياة طلابنا داخل المدرسة.",
    descriptionEn: "Special everyday moments from school life.",
    categoryAr: "الفصول",
    categoryEn: "Classrooms",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200",
    date: "2026-11-11",
  },
];

const emptyForm = {
  titleAr: "",
  titleEn: "",
  descriptionAr: "",
  descriptionEn: "",
  categoryAr: "الأنشطة",
  categoryEn: "Activities",
  image: "",
  date: new Date().toISOString().slice(0, 10),
  featured: false,
};

const categories = [
  { ar: "الكل", en: "All" },
  { ar: "الأنشطة", en: "Activities" },
  { ar: "الرحلات", en: "Trips" },
  { ar: "الفصول", en: "Classrooms" },
  { ar: "المعامل", en: "Laboratories" },
  { ar: "الاحتفالات", en: "Celebrations" },
  { ar: "المسابقات", en: "Competitions" },
];

export default function GalleryPage() {
  const { language } = useLanguage();
  const isArabic = language === "ar";
  const dir = isArabic ? "rtl" : "ltr";

  const [items, setItems] = useState<GalleryItem[]>(initialGallery);
  const [hydrated, setHydrated] = useState(false);
  const [activeCategory, setActiveCategory] = useState("الكل");
  const [search, setSearch] = useState("");
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const [editorOpen, setEditorOpen] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [form, setForm] = useState(emptyForm);

  const t = {
    eyebrow: isArabic ? "لحظات لا تُنسى" : "UNFORGETTABLE MOMENTS",
    title: isArabic ? "معرض الصور" : "Photo Gallery",
    subtitle: isArabic
      ? "اكتشف أجمل اللحظات والأنشطة والإنجازات التي تصنع تجربتنا التعليمية كل يوم."
      : "Discover the beautiful moments, activities and achievements that shape our school experience.",
    all: isArabic ? "كل الصور" : "All Photos",
    search: isArabic ? "ابحث عن صورة أو نشاط..." : "Search photos or activities...",
    add: isArabic ? "إضافة صورة جديدة" : "Add New Photo",
    latest: isArabic ? "أحدث اللحظات" : "Latest Moments",
    view: isArabic ? "عرض الصورة" : "View Photo",
    empty: isArabic ? "لا توجد صور مطابقة للبحث" : "No matching photos found",
    photos: isArabic ? "صورة في المعرض" : "Gallery Photos",
    categories: isArabic ? "تصنيفات متنوعة" : "Categories",
    events: isArabic ? "لحظات مدرسية" : "School Moments",
    featured: isArabic ? "صورة مميزة" : "Featured Photo",
    edit: isArabic ? "تعديل" : "Edit",
    delete: isArabic ? "حذف" : "Delete",
    save: isArabic ? "حفظ الصورة" : "Save Photo",
    cancel: isArabic ? "إلغاء" : "Cancel",
    newPhoto: isArabic ? "إضافة صورة للمعرض" : "Add Gallery Photo",
    editPhoto: isArabic ? "تعديل بيانات الصورة" : "Edit Photo Details",
    titleAr: "عنوان الصورة بالعربية",
    titleEn: "Photo Title in English",
    descriptionAr: "الوصف بالعربية",
    descriptionEn: "Description in English",
    categoryAr: "التصنيف بالعربية",
    categoryEn: "Category in English",
    image: isArabic ? "رابط الصورة" : "Image URL",
    date: isArabic ? "التاريخ" : "Date",
    makeFeatured: isArabic ? "اجعلها الصورة المميزة" : "Set as featured photo",
    close: isArabic ? "إغلاق" : "Close",
    previous: isArabic ? "السابق" : "Previous",
    next: isArabic ? "التالي" : "Next",
  };

  useEffect(() => {
    try {
      const saved = localStorage.getItem("rowad-gallery-v1");
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) setItems(parsed);
      }
    } catch {
      console.warn("Could not load gallery data.");
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (hydrated) {
      localStorage.setItem("rowad-gallery-v1", JSON.stringify(items));
    }
  }, [items, hydrated]);

  const filteredItems = useMemo(() => {
    const term = search.trim().toLowerCase();

    return items.filter((item) => {
      const categoryMatch =
        activeCategory === "الكل" ||
        item.categoryAr === activeCategory;

      const searchMatch =
        !term ||
        [
          item.titleAr,
          item.titleEn,
          item.descriptionAr,
          item.descriptionEn,
          item.categoryAr,
          item.categoryEn,
        ].some((value) => value.toLowerCase().includes(term));

      return categoryMatch && searchMatch;
    });
  }, [items, activeCategory, search]);

  const featured = filteredItems.find((item) => item.featured);
  const regularItems = filteredItems.filter((item) => item.id !== featured?.id);

  const openAdd = () => {
    setEditingId(null);
    setForm({ ...emptyForm, date: new Date().toISOString().slice(0, 10) });
    setEditorOpen(true);
  };

  const openEdit = (item: GalleryItem) => {
    setEditingId(item.id);
    setForm({
      titleAr: item.titleAr,
      titleEn: item.titleEn,
      descriptionAr: item.descriptionAr,
      descriptionEn: item.descriptionEn,
      categoryAr: item.categoryAr,
      categoryEn: item.categoryEn,
      image: item.image,
      date: item.date,
      featured: Boolean(item.featured),
    });
    setEditorOpen(true);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newItem: GalleryItem = {
      id: editingId ?? Math.max(0, ...items.map((item) => item.id)) + 1,
      ...form,
    };

    setItems((current) => {
      const updated = editingId
        ? current.map((item) => item.id === editingId ? newItem : item)
        : [newItem, ...current];

      if (newItem.featured) {
        return updated.map((item) => ({
          ...item,
          featured: item.id === newItem.id,
        }));
      }

      return updated;
    });

    setEditorOpen(false);
    setEditingId(null);
    setForm(emptyForm);
  };

  const handleDelete = (id: number) => {
    const confirmed = window.confirm(
      isArabic ? "هل تريدين حذف هذه الصورة؟" : "Are you sure you want to delete this photo?"
    );

    if (confirmed) {
      setItems((current) => current.filter((item) => item.id !== id));
      if (selectedImage?.id === id) setSelectedImage(null);
    }
  };

  const showAdjacent = (direction: number) => {
    if (!selectedImage) return;
    const index = filteredItems.findIndex((item) => item.id === selectedImage.id);
    const nextIndex = (index + direction + filteredItems.length) % filteredItems.length;
    setSelectedImage(filteredItems[nextIndex]);
  };

  const formatDate = (date: string) =>
    new Date(`${date}T00:00:00`).toLocaleDateString(
      isArabic ? "ar-EG" : "en-US",
      { year: "numeric", month: "long", day: "numeric" }
    );

  const featuredTitle = (item: GalleryItem) =>
    isArabic ? item.titleAr : item.titleEn;

  const featuredDescription = (item: GalleryItem) =>
    isArabic ? item.descriptionAr : item.descriptionEn;

  return (
    <main dir={dir} className="min-h-screen bg-[#f4f9fa] text-[#073b4c]">
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-[#062f3b] px-5 py-24 text-white md:py-32">
        <div className="absolute inset-0 -z-10 opacity-25">
          <Image
            src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1800"
            alt="School gallery"
            fill
            priority
            unoptimized
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#062f3b] via-[#062f3b]/90 to-[#075568]/70" />
        <div className="mx-auto max-w-7xl">
          <span className="inline-flex rounded-full border border-white/25 bg-white/10 px-5 py-2 text-sm font-bold tracking-wider">
            {t.eyebrow}
          </span>
          <h1 className="mt-7 text-4xl font-black leading-tight md:text-6xl lg:text-7xl">
            {t.title}
            <span className="mt-3 block text-[#6ed4df]"> {isArabic ? "ذاكرة مدرستنا" : "Our School Memories"}</span>
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-9 text-white/80 md:text-lg">
            {t.subtitle}
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#gallery" className="rounded-xl bg-white px-7 py-4 font-extrabold text-[#062f3b] transition hover:bg-[#dff7f8]">
              {t.all}
            </a>
            <button onClick={openAdd} className="rounded-xl border border-white/40 px-7 py-4 font-bold transition hover:bg-white/10">
              + {t.add}
            </button>
          </div>
        </div>
        <div className="pointer-events-none absolute -bottom-24 -left-16 h-72 w-72 rounded-full border-[40px] border-white/5" />
        <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full border-[50px] border-white/5" />
      </section>

      {/* STATISTICS */}
      <section className="relative z-10 mx-auto -mt-10 grid max-w-6xl grid-cols-1 gap-4 px-5 sm:grid-cols-3">
        {[
          { number: items.length, label: t.photos, icon: "▧" },
          { number: categories.length - 1, label: t.categories, icon: "◈" },
          { number: items.length, label: t.events, icon: "✦" },
        ].map((stat, index) => (
          <div key={index} className="rounded-2xl border border-[#dcebed] bg-white p-6 text-center shadow-lg shadow-[#062f3b]/5">
            <span className="text-3xl text-[#0e7490]">{stat.icon}</span>
            <p className="mt-2 text-3xl font-black text-[#075568]">{stat.number}</p>
            <p className="mt-1 text-sm font-bold text-slate-500">{stat.label}</p>
          </div>
        ))}
      </section>

      {/* GALLERY */}
      <section id="gallery" className="mx-auto max-w-7xl px-5 py-20">
        <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="font-bold text-[#0e7490]">{isArabic ? "اكتشف عالمنا" : "EXPLORE OUR WORLD"}</span>
            <h2 className="mt-3 text-3xl font-black text-[#062f3b] md:text-4xl">{t.latest}</h2>
            <p className="mt-3 max-w-xl leading-8 text-slate-500">
              {isArabic ? "كل صورة تحكي قصة من قصص النجاح والتعلم والإبداع." : "Every photo tells a story of success, learning and creativity."}
            </p>
          </div>
          <button onClick={openAdd} className="rounded-xl bg-[#075568] px-6 py-3 font-bold text-white shadow-lg transition hover:bg-[#0e7490]">
            + {t.add}
          </button>
        </div>

        {/* SEARCH */}
        <div className="mb-7 rounded-2xl border border-[#dcebed] bg-white p-4 shadow-sm">
          <input
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder={t.search}
            className="w-full rounded-xl border border-slate-200 bg-[#f8fbfc] px-5 py-4 outline-none transition focus:border-[#0e7490] focus:ring-4 focus:ring-[#0e7490]/10"
          />
        </div>

        {/* CATEGORIES */}
        <div className="mb-10 flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category.ar}
              onClick={() => setActiveCategory(category.ar)}
              className={`rounded-full px-5 py-3 text-sm font-bold transition ${
                activeCategory === category.ar
                  ? "bg-[#075568] text-white shadow-lg"
                  : "border border-[#dcebed] bg-white text-[#075568] hover:border-[#0e7490] hover:bg-[#eaf7f8]"
              }`}
            >
              {isArabic ? category.ar : category.en}
            </button>
          ))}
        </div>

        {/* FEATURED */}
        {featured && (
          <div className="group relative mb-10 grid overflow-hidden rounded-3xl bg-[#062f3b] shadow-xl md:grid-cols-2">
            <div className="relative min-h-[280px] overflow-hidden md:min-h-[430px]">
              <Image
                src={featured.image}
                alt={featuredTitle(featured)}
                fill
                unoptimized
                className="object-cover transition duration-700 group-hover:scale-105"
              />
              <span className="absolute start-5 top-5 rounded-full bg-[#0e7490] px-4 py-2 text-sm font-bold text-white">
                ★ {t.featured}
              </span>
            </div>
            <div className="flex flex-col justify-center p-7 text-white md:p-12">
              <span className="text-sm font-bold text-[#6ed4df]">
                {isArabic ? featured.categoryAr : featured.categoryEn}
              </span>
              <h3 className="mt-4 text-3xl font-black leading-tight md:text-4xl">
                {featuredTitle(featured)}
              </h3>
              <p className="mt-5 leading-9 text-white/70">
                {featuredDescription(featured)}
              </p>
              <p className="mt-5 text-sm text-white/50">{formatDate(featured.date)}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <button onClick={() => setSelectedImage(featured)} className="rounded-xl bg-white px-6 py-3 font-bold text-[#062f3b] transition hover:bg-[#dff7f8]">
                  {t.view}
                </button>
                <button onClick={() => openEdit(featured)} className="rounded-xl border border-white/30 px-5 py-3 font-bold hover:bg-white/10">
                  {t.edit}
                </button>
                <button onClick={() => handleDelete(featured.id)} className="rounded-xl border border-red-300/40 px-5 py-3 font-bold text-red-200 hover:bg-red-500/20">
                  {t.delete}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* MASONRY GRID */}
        {regularItems.length > 0 ? (
          <div className="columns-1 gap-6 sm:columns-2 lg:columns-3">
            {regularItems.map((item, index) => (
              <article key={item.id} className="group mb-6 break-inside-avoid overflow-hidden rounded-2xl border border-[#dcebed] bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                <button onClick={() => setSelectedImage(item)} className="relative block w-full overflow-hidden text-start">
                  <div className={`relative ${index % 4 === 0 ? "h-80" : index % 3 === 0 ? "h-56" : "h-64"}`}>
                    <Image
                      src={item.image}
                      alt={featuredTitle(item)}
                      fill
                      unoptimized
                      className="object-cover transition duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#062f3b]/80 via-transparent to-transparent opacity-70" />
                    <span className="absolute bottom-4 start-4 rounded-full bg-white/90 px-4 py-2 text-xs font-bold text-[#075568]">
                      {isArabic ? item.categoryAr : item.categoryEn}
                    </span>
                  </div>
                </button>
                <div className="p-5">
                  <div className="mb-2 text-xs text-slate-400">{formatDate(item.date)}</div>
                  <h3 className="text-xl font-black text-[#073b4c]">{featuredTitle(item)}</h3>
                  <p className="mt-3 line-clamp-2 text-sm leading-7 text-slate-500">{featuredDescription(item)}</p>
                  <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
                    <button onClick={() => setSelectedImage(item)} className="text-sm font-extrabold text-[#0e7490] hover:text-[#062f3b]">
                      {t.view} ←
                    </button>
                    <div className="flex gap-2">
                      <button onClick={() => openEdit(item)} className="rounded-lg bg-[#eaf7f8] px-3 py-2 text-xs font-bold text-[#075568] hover:bg-[#d5eff1]">
                        {t.edit}
                      </button>
                      <button onClick={() => handleDelete(item.id)} className="rounded-lg bg-red-50 px-3 py-2 text-xs font-bold text-red-600 hover:bg-red-100">
                        {t.delete}
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : !featured ? (
          <div className="rounded-3xl border border-dashed border-[#b9d9de] bg-white py-20 text-center">
            <div className="text-5xl">▧</div>
            <h3 className="mt-5 text-xl font-black">{t.empty}</h3>
            <button onClick={openAdd} className="mt-5 rounded-xl bg-[#075568] px-6 py-3 font-bold text-white">
              + {t.add}
            </button>
          </div>
        ) : null}
      </section>

      {/* CALL TO ACTION */}
      <section className="mx-5 mb-20 overflow-hidden rounded-3xl bg-[#075568] px-6 py-16 text-center text-white md:mx-auto md:max-w-7xl md:px-16">
        <span className="text-4xl">✦</span>
        <h2 className="mt-5 text-3xl font-black md:text-4xl">
          {isArabic ? "كل يوم نصنع ذكرى جديدة" : "Every Day We Create a New Memory"}
        </h2>
        <p className="mx-auto mt-5 max-w-2xl leading-8 text-white/75">
          {isArabic ? "تابعوا رحلتنا التعليمية واكتشفوا المزيد من أنشطة وإنجازات طلابنا." : "Follow our educational journey and discover more student activities and achievements."}
        </p>
        <a href="/contact" className="mt-8 inline-flex rounded-xl bg-white px-8 py-4 font-extrabold text-[#075568] transition hover:bg-[#dff7f8]">
          {isArabic ? "تواصل معنا" : "Contact Us"}
        </a>
      </section>

      {/* IMAGE LIGHTBOX */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#021c24]/95 p-4 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute end-5 top-5 z-20 rounded-full bg-white/15 px-5 py-3 text-2xl text-white hover:bg-white/25"
            aria-label={t.close}
          >
            ×
          </button>

          <button
            onClick={(event) => { event.stopPropagation(); showAdjacent(-1); }}
            className="absolute start-3 top-1/2 z-20 rounded-full bg-white/15 px-4 py-3 text-white hover:bg-white/25 md:start-8"
          >
            {isArabic ? "❯" : "❮"}
          </button>

          <div className="relative w-full max-w-5xl" onClick={(event) => event.stopPropagation()}>
            <div className="relative h-[55vh] min-h-[280px] w-full md:h-[70vh]">
              <Image
                src={selectedImage.image}
                alt={featuredTitle(selectedImage)}
                fill
                unoptimized
                className="rounded-2xl object-contain"
              />
            </div>
            <div className="mt-5 text-center text-white">
              <h3 className="text-2xl font-black">{featuredTitle(selectedImage)}</h3>
              <p className="mt-2 text-sm text-white/65">{featuredDescription(selectedImage)}</p>
              <p className="mt-2 text-xs text-white/50">{formatDate(selectedImage.date)}</p>
            </div>
          </div>

          <button
            onClick={(event) => { event.stopPropagation(); showAdjacent(1); }}
            className="absolute end-3 top-1/2 z-20 rounded-full bg-white/15 px-4 py-3 text-white hover:bg-white/25 md:end-8"
          >
            {isArabic ? "❮" : "❯"}
          </button>
        </div>
      )}

      {/* ADD / EDIT MODAL */}
      {editorOpen && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center overflow-y-auto bg-[#021c24]/80 p-4 backdrop-blur-sm">
          <form
            onSubmit={handleSubmit}
            className="my-8 max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-3xl bg-white p-6 shadow-2xl md:p-9"
          >
            <div className="mb-7 flex items-center justify-between gap-4">
              <div>
                <span className="text-sm font-bold text-[#0e7490]">{isArabic ? "إدارة المعرض" : "GALLERY MANAGEMENT"}</span>
                <h2 className="mt-2 text-2xl font-black text-[#062f3b]">
                  {editingId ? t.editPhoto : t.newPhoto}
                </h2>
              </div>
              <button type="button" onClick={() => setEditorOpen(false)} className="rounded-full bg-slate-100 px-4 py-2 text-xl text-slate-600 hover:bg-slate-200">
                ×
              </button>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {[
                { key: "titleAr", label: t.titleAr },
                { key: "titleEn", label: t.titleEn },
                { key: "categoryAr", label: t.categoryAr },
                { key: "categoryEn", label: t.categoryEn },
              ].map((field) => (
                <label key={field.key} className="block">
                  <span className="mb-2 block text-sm font-bold text-[#073b4c]">{field.label}</span>
                  <input
                    required
                    value={form[field.key as keyof typeof form] as string}
                    onChange={(event) => setForm((current) => ({ ...current, [field.key]: event.target.value }))}
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-[#0e7490] focus:ring-4 focus:ring-[#0e7490]/10"
                  />
                </label>
              ))}

              <label className="block md:col-span-2">
                <span className="mb-2 block text-sm font-bold text-[#073b4c]">{t.descriptionAr}</span>
                <textarea
                  required
                  rows={3}
                  value={form.descriptionAr}
                  onChange={(event) => setForm((current) => ({ ...current, descriptionAr: event.target.value }))}
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-[#0e7490]"
                />
              </label>

              <label className="block md:col-span-2">
                <span className="mb-2 block text-sm font-bold text-[#073b4c]">{t.descriptionEn}</span>
                <textarea
                  required
                  rows={3}
                  value={form.descriptionEn}
                  onChange={(event) => setForm((current) => ({ ...current, descriptionEn: event.target.value }))}
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-[#0e7490]"
                />
              </label>

              <label className="block md:col-span-2">
                <span className="mb-2 block text-sm font-bold text-[#073b4c]">{t.image}</span>
                <input
                  required
                  type="url"
                  value={form.image}
                  onChange={(event) => setForm((current) => ({ ...current, image: event.target.value }))}
                  placeholder="https://example.com/photo.jpg"
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-[#0e7490]"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-bold text-[#073b4c]">{t.date}</span>
                <input
                  required
                  type="date"
                  value={form.date}
                  onChange={(event) => setForm((current) => ({ ...current, date: event.target.value }))}
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-[#0e7490]"
                />
              </label>

              <label className="flex cursor-pointer items-center gap-3 self-end rounded-xl bg-[#eaf7f8] p-4">
                <input
                  type="checkbox"
                  checked={form.featured}
                  onChange={(event) => setForm((current) => ({ ...current, featured: event.target.checked }))}
                  className="h-5 w-5 accent-[#075568]"
                />
                <span className="text-sm font-bold text-[#075568]">{t.makeFeatured}</span>
              </label>
            </div>

            {form.image && (
              <div className="mt-6">
                <p className="mb-2 text-sm font-bold text-slate-600">{isArabic ? "معاينة الصورة" : "Image Preview"}</p>
                <div className="relative h-48 overflow-hidden rounded-xl bg-slate-100">
                  <Image src={form.image} alt="Preview" fill unoptimized className="object-cover" />
                </div>
              </div>
            )}

            <div className="mt-8 flex flex-wrap justify-end gap-3 border-t border-slate-100 pt-6">
              <button type="button" onClick={() => setEditorOpen(false)} className="rounded-xl border border-slate-200 px-7 py-3 font-bold text-slate-600 hover:bg-slate-50">
                {t.cancel}
              </button>
              <button type="submit" className="rounded-xl bg-[#075568] px-8 py-3 font-extrabold text-white shadow-lg transition hover:bg-[#0e7490]">
                {t.save}
              </button>
            </div>
          </form>
        </div>
      )}
    </main>
  );
}
