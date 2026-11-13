
"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { useLanguage } from "../../context/LanguageContext";

type Book = {
  id: number;
  title: string;
  author: string;
  category: string;
  stage: string;
  description: string;
  cover: string;
  year: string;
  popular?: boolean;
};

const books: Book[] = [
  {
    id: 1, title: "رحلة إلى عالم العلوم", author: "أحمد محمود",
    category: "Science", stage: "Primary",
    description: "اكتشف أسرار العلوم والطبيعة من خلال تجارب ومعلومات مبسطة.",
    cover: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=600",
    year: "2026", popular: true,
  },
  {
    id: 2, title: "The World of English", author: "John Smith",
    category: "Languages", stage: "Preparatory",
    description: "An educational journey to improve English language skills.",
    cover: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=600",
    year: "2026", popular: true,
  },
  {
    id: 3, title: "تاريخ الحضارة المصرية", author: "محمد عبد الرحمن",
    category: "History", stage: "Secondary",
    description: "رحلة معرفية عبر تاريخ مصر وحضارتها العريقة.",
    cover: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=600",
    year: "2025",
  },
  {
    id: 4, title: "أساسيات الرياضيات", author: "سارة علي",
    category: "Mathematics", stage: "Primary",
    description: "تعلم الرياضيات بأسلوب مبسط وأمثلة تطبيقية.",
    cover: "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=600",
    year: "2026", popular: true,
  },
  {
    id: 5, title: "عالم التكنولوجيا", author: "Michael Brown",
    category: "Technology", stage: "Secondary",
    description: "تعرف على عالم التكنولوجيا والبرمجة والابتكار.",
    cover: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600",
    year: "2026",
  },
  {
    id: 6, title: "قصص الأطفال الممتعة", author: "منى إبراهيم",
    category: "Stories", stage: "Primary",
    description: "مجموعة من القصص التعليمية لتنمية الخيال والإبداع.",
    cover: "https://images.unsplash.com/photo-1519682337058-a94d519337bc?w=600",
    year: "2025",
  },
  {
    id: 7, title: "رحلة في الفضاء", author: "خالد حسن",
    category: "Science", stage: "Preparatory",
    description: "اكتشف الكواكب والنجوم وأسرار الكون.",
    cover: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=600",
    year: "2026",
  },
  {
    id: 8, title: "مهارات القراءة والكتابة", author: "نور أحمد",
    category: "Languages", stage: "Primary",
    description: "تطوير مهارات اللغة العربية والتعبير والقراءة.",
    cover: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=600",
    year: "2025",
  },
  {
    id: 9, title: "البرمجة من الصفر إلى الاحتراف", author: "محمود علي",
    category: "Technology", stage: "Secondary",
    description: "مقدمة شاملة في البرمجة والتفكير المنطقي وتطوير التطبيقات.",
    cover: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=600",
    year: "2026", popular: true,
  },
  {
    id: 10, title: "أسرار عالم الحيوان", author: "سلمى حسن",
    category: "Science", stage: "Primary",
    description: "اكتشف حياة الحيوانات وبيئاتها وطرق تكيفها مع الطبيعة.",
    cover: "https://images.unsplash.com/photo-1535338454770-8be927b5a00b?w=600",
    year: "2026",
  },
  {
    id: 11, title: "رحلة حول العالم", author: "نور محمد",
    category: "History", stage: "Preparatory",
    description: "تعرف على ثقافات الشعوب وأهم المعالم التاريخية حول العالم.",
    cover: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=600",
    year: "2026",
  },
  {
    id: 12, title: "الرياضيات بطريقة ممتعة", author: "أحمد سمير",
    category: "Mathematics", stage: "Preparatory",
    description: "تمارين وألغاز رياضية لتنمية التفكير والتحليل وحل المشكلات.",
    cover: "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=600",
    year: "2026", popular: true,
  },
  {
    id: 13, title: "قصص من التراث العربي", author: "منى إبراهيم",
    category: "Stories", stage: "Primary",
    description: "مجموعة قصص ممتعة تحمل قيماً تربوية وإنسانية.",
    cover: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=600",
    year: "2025",
  },
  {
    id: 14, title: "English Grammar Guide", author: "Sarah Johnson",
    category: "Languages", stage: "Secondary",
    description: "A practical guide to English grammar, vocabulary and communication.",
    cover: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=600",
    year: "2026",
  },
  {
    id: 15, title: "الذكاء الاصطناعي والمستقبل", author: "يوسف خالد",
    category: "Technology", stage: "Secondary",
    description: "اكتشف تطبيقات الذكاء الاصطناعي وتأثير التكنولوجيا على حياتنا.",
    cover: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600",
    year: "2026", popular: true,
  },
  {
    id: 16, title: "جغرافيا العالم", author: "هبة مصطفى",
    category: "History", stage: "Preparatory",
    description: "تعرف على القارات والمحيطات والمناخ والتضاريس.",
    cover: "https://images.unsplash.com/photo-1524666041070-9a8761f7e3c6?w=600",
    year: "2026",
  },
  {
    id: 17, title: "مختبر العلوم الصغير", author: "د. خالد محمود",
    category: "Science", stage: "Primary",
    description: "تجارب علمية بسيطة وآمنة تساعد الطلاب على التعلم والاكتشاف.",
    cover: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=600",
    year: "2026",
  },
  {
    id: 18, title: "فن الكتابة والإبداع", author: "ريم أحمد",
    category: "Languages", stage: "Secondary",
    description: "تعلم التعبير والكتابة الإبداعية وبناء الأفكار وتنظيمها.",
    cover: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=600",
    year: "2025",
  },
];

const categories = [
  { id: "All", icon: "📚" },
  { id: "Science", icon: "🔬" },
  { id: "Mathematics", icon: "📐" },
  { id: "Languages", icon: "🌍" },
  { id: "History", icon: "🏛️" },
  { id: "Technology", icon: "💻" },
  { id: "Stories", icon: "📖" },
];

export default function LibraryPage() {
  const { t, language } = useLanguage();

  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedStage, setSelectedStage] = useState("All");
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);

  const isArabic = language === "ar";

  const categoryLabels: Record<string, string> = {
    All: t.library_all_books,
    Science: t.library_category_science,
    Mathematics: t.library_category_mathematics,
    Languages: t.library_category_languages,
    History: t.library_category_history,
    Technology: t.library_category_technology,
    Stories: t.library_category_stories,
  };

  const stageNames: Record<string, string> = {
    Primary: t.library_stage_primary,
    Preparatory: t.library_stage_preparatory,
    Secondary: t.library_stage_secondary,
  };

  const getBookTitle = (book: Book) =>
    t[`library_book_${book.id}_title` as keyof typeof t] as string;

  const getBookDescription = (book: Book) =>
    t[`library_book_${book.id}_desc` as keyof typeof t] as string;

  const filteredBooks = useMemo(() => {
    return books.filter((book) => {
      const title = t[`library_book_${book.id}_title` as keyof typeof t] as string;

      const matchesSearch =
        title.toLowerCase().includes(search.toLowerCase()) ||
        book.author.toLowerCase().includes(search.toLowerCase());

      const matchesCategory =
        selectedCategory === "All" || book.category === selectedCategory;

      const matchesStage =
        selectedStage === "All" || book.stage === selectedStage;

      return matchesSearch && matchesCategory && matchesStage;
    });
  }, [search, selectedCategory, selectedStage, t]);

  const popularBooks = books.filter((book) => book.popular);

  return (
    <main
      dir={isArabic ? "rtl" : "ltr"}
      className="min-h-screen overflow-hidden bg-slate-100 text-slate-800"
    >
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-l from-indigo-950 via-blue-900 to-cyan-700 px-5 py-28 text-white md:py-36">
        <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-cyan-300/20 blur-3xl" />
        <div className="absolute -bottom-32 right-0 h-96 w-96 rounded-full bg-violet-400/20 blur-3xl" />
        <div className="absolute left-1/3 top-10 h-48 w-48 rounded-full bg-blue-400/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
          <div>
            <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-bold backdrop-blur-md">
              <span className="text-2xl">📚</span>
              <span>{t.library_hero_badge}</span>
            </div>

            <h1 className="text-5xl font-black leading-tight md:text-7xl">
              {t.library_hero_title}
              <span className="mt-3 block bg-gradient-to-l from-cyan-200 to-sky-400 bg-clip-text text-transparent">
                {t.library_hero_highlight}
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-9 text-blue-100 md:text-xl">
              {t.library_hero_desc}
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#books"
                className="rounded-2xl bg-cyan-300 px-9 py-5 text-lg font-black text-indigo-950 shadow-xl shadow-cyan-950/20 transition hover:-translate-y-1 hover:bg-white"
              >
                {t.library_explore_books} ←
              </a>

              <Link
                href="/"
                className="rounded-2xl border border-white/30 bg-white/10 px-9 py-5 font-bold backdrop-blur-md transition hover:bg-white/20"
              >
                {t.library_home}
              </Link>
            </div>

            <div className="mt-14 grid grid-cols-3 gap-4">
              <div className="rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur-md">
                <p className="text-4xl font-black text-cyan-300">{books.length}+</p>
                <p className="mt-2 text-sm text-white">{t.library_book_count}</p>
              </div>

              <div className="rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur-md">
                <p className="text-4xl font-black text-purple-300">{categories.length - 1}</p>
                <p className="mt-2 text-sm text-white">{t.library_sections_count}</p>
              </div>

              <div className="rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur-md">
                <p className="text-4xl font-black text-amber-300">3</p>
                <p className="mt-2 text-sm text-white">{t.library_stages_count}</p>
              </div>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="absolute -inset-5 rounded-[3rem] bg-cyan-300/20 blur-2xl" />

            <img
              src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=1200"
              alt={t.library_hero_badge}
              className="relative h-[550px] w-full rounded-[2.5rem] border border-white/20 object-cover shadow-2xl"
            />

            <div className={`absolute -bottom-8 ${isArabic ? "-right-8" : "-left-8"} rounded-3xl border border-slate-100 bg-white p-7 text-slate-900 shadow-2xl`}>
              <p className="text-3xl">✨ 📖</p>
              <p className="mt-3 text-xl font-black">{t.library_read_learn}</p>
              <p className="mt-2 text-sm text-slate-500">{t.library_knowledge_future}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="mx-auto max-w-7xl px-5 py-24">
        <div className="mb-14 text-center">
          <p className="font-black tracking-widest text-blue-600">BOOK CATEGORIES</p>

          <h2 className="mt-4 text-4xl font-black text-slate-950 md:text-5xl">
            {t.library_book_categories}
          </h2>

          <p className="mt-4 text-lg text-slate-500">
            {t.library_categories_desc}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-7">
          {categories.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setSelectedCategory(item.id);
                document.getElementById("books")?.scrollIntoView({ behavior: "smooth" });
              }}
              className={`group relative overflow-hidden rounded-3xl border p-7 text-center transition duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                selectedCategory === item.id
                  ? "border-blue-600 bg-white shadow-xl ring-2 ring-blue-200"
                  : "border-white bg-white shadow-md"
              }`}
            >
              <span className={`mx-auto flex h-16 w-16 items-center justify-center rounded-2xl text-3xl shadow-lg ${
                item.id === "All" ? "bg-gradient-to-br from-blue-500 to-indigo-600" :
                item.id === "Science" ? "bg-gradient-to-br from-emerald-400 to-teal-600" :
                item.id === "Mathematics" ? "bg-gradient-to-br from-violet-500 to-purple-700" :
                item.id === "Languages" ? "bg-gradient-to-br from-sky-400 to-blue-600" :
                item.id === "History" ? "bg-gradient-to-br from-amber-400 to-orange-600" :
                item.id === "Technology" ? "bg-gradient-to-br from-cyan-400 to-indigo-600" :
                "bg-gradient-to-br from-pink-400 to-rose-600"
              }`}>
                {item.icon}
              </span>

              <p className="mt-5 text-sm font-black text-slate-800">
                {categoryLabels[item.id]}
              </p>

              <p className="mt-2 text-xs text-slate-400">
                {item.id === "All"
                  ? books.length
                  : books.filter((book) => book.category === item.id).length} {t.library_book_unit}
              </p>

              {selectedCategory === item.id && (
                <span className="absolute bottom-0 right-0 h-1.5 w-full bg-gradient-to-l from-blue-600 to-cyan-400" />
              )}
            </button>
          ))}
        </div>
      </section>

      {/* Popular Books */}
      <section className="bg-gradient-to-b from-white to-blue-50 px-5 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-5">
            <div>
              <p className="font-black tracking-widest text-violet-600">
                {t.library_featured_collection}
              </p>

              <h2 className="mt-4 text-4xl font-black text-slate-950 md:text-5xl">
                {t.library_popular_title}
              </h2>

              <p className="mt-4 text-slate-500">{t.library_popular_desc}</p>
            </div>

            <span className="rounded-2xl bg-amber-100 px-6 py-4 text-3xl">⭐</span>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {popularBooks.map((book) => (
              <article
                key={book.id}
                className="group overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-lg transition duration-500 hover:-translate-y-3 hover:shadow-2xl"
              >
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={book.cover}
                    alt={getBookTitle(book)}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />

                  <span className={`absolute ${isArabic ? "right-5" : "left-5"} top-5 rounded-full bg-amber-400 px-5 py-2 text-sm font-black text-slate-950 shadow-lg`}>
                    ⭐ {t.library_featured_book}
                  </span>

                  <span className={`absolute bottom-5 ${isArabic ? "right-5" : "left-5"} text-sm font-bold text-white`}>
                    {stageNames[book.stage]}
                  </span>
                </div>

                <div className="p-7">
                  <p className="text-sm font-black text-blue-600">
                    {categoryLabels[book.category]}
                  </p>

                  <h3 className="mt-3 text-2xl font-black text-slate-950">
                    {getBookTitle(book)}
                  </h3>

                  <p className="mt-3 text-sm text-slate-500">
                    {t.library_author_label} {book.author}
                  </p>

                  <p className="mt-4 line-clamp-2 leading-7 text-slate-500">
                    {getBookDescription(book)}
                  </p>

                  <button
                    onClick={() => setSelectedBook(book)}
                    className="mt-7 w-full rounded-2xl bg-gradient-to-l from-indigo-700 to-blue-500 py-4 font-black text-white shadow-lg transition hover:from-cyan-600 hover:to-blue-700"
                  >
                    {t.library_book_details}
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* All Books */}
      <section id="books" className="bg-slate-100 px-5 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <p className="font-black tracking-widest text-blue-600">
              {t.library_digital_library}
            </p>

            <h2 className="mt-4 text-4xl font-black text-slate-950 md:text-5xl">
              {t.library_explore_all}
            </h2>

            <p className="mt-4 text-lg text-slate-500">
              {t.library_explore_desc}
            </p>
          </div>

          <div className="mb-10 grid gap-5 rounded-3xl border border-white bg-white p-6 shadow-lg md:grid-cols-2">
            <div className="relative">
              <span className={`absolute ${isArabic ? "right-5" : "left-5"} top-4 text-2xl`}>🔍</span>

              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder={t.library_search_placeholder}
                className={`w-full rounded-2xl border-2 border-slate-100 bg-slate-50 py-5 ${isArabic ? "pr-14 pl-5" : "pl-14 pr-5"} outline-none transition focus:border-blue-500 focus:bg-white`}
              />
            </div>

            <select
              value={selectedStage}
              onChange={(e) => setSelectedStage(e.target.value)}
              className="rounded-2xl border-2 border-slate-100 bg-slate-50 px-5 py-5 font-bold text-slate-700 outline-none focus:border-blue-500"
            >
              <option value="All">{t.library_all_stages}</option>
              <option value="Primary">{t.library_stage_primary}</option>
              <option value="Preparatory">{t.library_stage_preparatory}</option>
              <option value="Secondary">{t.library_stage_secondary}</option>
            </select>
          </div>

          <div className="mb-9 flex flex-wrap justify-center gap-3">
            {categories.map((item) => (
              <button
                key={item.id}
                onClick={() => setSelectedCategory(item.id)}
                className={`rounded-full px-7 py-3 font-bold transition ${
                  selectedCategory === item.id
                    ? "bg-gradient-to-l from-indigo-700 to-blue-500 text-white shadow-lg"
                    : "border border-slate-200 bg-white text-slate-600 hover:border-blue-300 hover:text-blue-700"
                }`}
              >
                {item.icon} {categoryLabels[item.id]}
              </button>
            ))}
          </div>

          <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
            <p className="text-lg font-black text-slate-800">
              {t.library_search_results}{" "}
              <span className="text-blue-600">{filteredBooks.length}</span>{" "}
              {t.library_book_unit}
            </p>

            <button
              onClick={() => {
                setSearch("");
                setSelectedCategory("All");
                setSelectedStage("All");
              }}
              className="rounded-xl bg-white px-5 py-3 text-sm font-bold text-blue-700 shadow-sm transition hover:bg-blue-50"
            >
              {t.library_reset_search} ↻
            </button>
          </div>

          {filteredBooks.length > 0 ? (
            <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filteredBooks.map((book) => (
                <article
                  key={book.id}
                  className="group overflow-hidden rounded-3xl border border-white bg-white shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
                >
                  <div className="relative h-64 overflow-hidden bg-slate-200">
                    <img
                      src={book.cover}
                      alt={getBookTitle(book)}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                    />

                    {book.popular && (
                      <span className={`absolute ${isArabic ? "right-4" : "left-4"} top-4 rounded-full bg-amber-400 px-4 py-2 text-xs font-black text-slate-950`}>
                        ⭐ {t.library_featured}
                      </span>
                    )}
                  </div>

                  <div className="p-6">
                    <div className="flex items-center justify-between gap-2">
                      <span className="rounded-full bg-blue-50 px-4 py-2 text-xs font-black text-blue-700">
                        {categoryLabels[book.category]}
                      </span>

                      <span className="text-xs font-bold text-slate-400">
                        {book.year}
                      </span>
                    </div>

                    <h3 className="mt-5 min-h-14 text-xl font-black leading-7 text-slate-950">
                      {getBookTitle(book)}
                    </h3>

                    <p className="mt-3 text-sm text-slate-500">
                      {t.library_author_label} {book.author}
                    </p>

                    <p className="mt-3 text-xs font-bold text-violet-600">
                      {stageNames[book.stage]}
                    </p>

                    <p className="mt-4 line-clamp-2 min-h-12 text-sm leading-6 text-slate-500">
                      {getBookDescription(book)}
                    </p>

                    <button
                      onClick={() => setSelectedBook(book)}
                      className="mt-6 w-full rounded-2xl bg-slate-950 py-4 font-bold text-white transition hover:bg-blue-700"
                    >
                      {t.library_book_details} ←
                    </button>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="rounded-3xl border border-slate-200 bg-white py-20 text-center shadow-sm">
              <p className="text-6xl">📚</p>

              <h3 className="mt-6 text-2xl font-black text-slate-900">
                {t.library_no_books}
              </h3>

              <p className="mt-3 text-slate-500">
                {t.library_try_different_search}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Reading Banner */}
      <section className="px-5 py-24">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-gradient-to-l from-indigo-950 via-blue-900 to-cyan-700 px-7 py-20 text-center text-white shadow-2xl md:px-16">
          <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-cyan-300/20 blur-3xl" />
          <div className="absolute -bottom-24 right-0 h-72 w-72 rounded-full bg-violet-400/20 blur-3xl" />

          <div className="relative">
            <div className="text-6xl">📖 ✨</div>

            <h2 className="mt-8 text-4xl font-black md:text-5xl">
              {t.library_reading_title}
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-9 text-blue-100">
              {t.library_reading_desc}
            </p>

            <a
              href="#books"
              className="mt-10 inline-block rounded-2xl bg-white px-10 py-5 font-black text-indigo-950 shadow-xl transition hover:-translate-y-1 hover:bg-cyan-200"
            >
              {t.library_start_journey}
            </a>
          </div>
        </div>
      </section>

      {/* Book Details Modal */}
      {selectedBook && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 p-4 backdrop-blur-md"
          onClick={() => setSelectedBook(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-3xl bg-white p-6 shadow-2xl md:p-10"
          >
            <button
              onClick={() => setSelectedBook(null)}
              aria-label={t.library_close}
              className={`absolute ${isArabic ? "left-5" : "right-5"} top-5 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 text-2xl font-bold transition hover:bg-red-100 hover:text-red-600`}
            >
              ×
            </button>

            <div className="grid gap-8 md:grid-cols-2">
              <img
                src={selectedBook.cover}
                alt={getBookTitle(selectedBook)}
                className="h-80 w-full rounded-3xl object-cover shadow-lg"
              />

              <div className="pt-4">
                <span className="rounded-full bg-blue-50 px-5 py-2 text-sm font-black text-blue-700">
                  {categoryLabels[selectedBook.category]}
                </span>

                <h2 className="mt-7 text-3xl font-black leading-tight text-slate-950">
                  {getBookTitle(selectedBook)}
                </h2>

                <p className="mt-5 text-slate-600">
                  {t.library_author_label} {selectedBook.author}
                </p>

                <p className="mt-4 text-slate-600">
                  {t.library_publication_year_label} {selectedBook.year}
                </p>

                <p className="mt-4 font-bold text-violet-700">
                  {stageNames[selectedBook.stage]}
                </p>

                <p className="mt-7 leading-9 text-slate-600">
                  {getBookDescription(selectedBook)}
                </p>

                <div className="mt-7 rounded-2xl bg-gradient-to-l from-blue-50 to-violet-50 p-5">
                  <p className="font-black text-slate-800">
                    {t.library_about_book}
                  </p>

                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    {t.library_about_book_desc}
                  </p>
                </div>

                <button
                  onClick={() => setSelectedBook(null)}
                  className="mt-7 w-full rounded-2xl bg-blue-700 py-4 font-black text-white transition hover:bg-indigo-800"
                >
                  {t.library_close_details}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
