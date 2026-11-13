
"use client";

import { useEffect, useMemo, useState, type FormEvent } from "react";
import { useLanguage } from "../../context/LanguageContext";

type EventType = "exam" | "holiday" | "activity" | "meeting" | "trip";

type SchoolEvent = {
  id: number;
  titleAr: string;
  titleEn: string;
  descriptionAr: string;
  descriptionEn: string;
  date: string;
  time: string;
  locationAr: string;
  locationEn: string;
  type: EventType;
};

const initialEvents: SchoolEvent[] = [
  {
    id: 1,
    titleAr: "بداية العام الدراسي",
    titleEn: "Beginning of Academic Year",
    descriptionAr: "استقبال الطلاب وبدء الدراسة في جميع المراحل التعليمية.",
    descriptionEn: "Welcoming students and starting classes across all educational stages.",
    date: "2026-09-20",
    time: "08:00",
    locationAr: "جميع الفصول",
    locationEn: "All Classrooms",
    type: "activity",
  },
  {
    id: 2,
    titleAr: "اجتماع أولياء الأمور",
    titleEn: "Parents Meeting",
    descriptionAr: "لقاء تعريفي لمناقشة الخطة الدراسية والتواصل مع المعلمين.",
    descriptionEn: "An introductory meeting to discuss the academic plan and meet teachers.",
    date: "2026-09-24",
    time: "10:00",
    locationAr: "قاعة الاجتماعات",
    locationEn: "Meeting Hall",
    type: "meeting",
  },
  {
    id: 3,
    titleAr: "اختبار تحديد المستوى",
    titleEn: "Placement Test",
    descriptionAr: "اختبارات لتحديد المستوى الأكاديمي للطلاب.",
    descriptionEn: "Assessment tests to determine students' academic levels.",
    date: "2026-10-05",
    time: "09:00",
    locationAr: "الفصول الدراسية",
    locationEn: "Classrooms",
    type: "exam",
  },
  {
    id: 4,
    titleAr: "رحلة تعليمية",
    titleEn: "Educational Trip",
    descriptionAr: "رحلة تعليمية وترفيهية لتنمية مهارات الطلاب.",
    descriptionEn: "An educational and recreational trip for students.",
    date: "2026-10-12",
    time: "07:30",
    locationAr: "خارج المدرسة",
    locationEn: "Off Campus",
    type: "trip",
  },
  {
    id: 5,
    titleAr: "مسابقة القراءة",
    titleEn: "Reading Competition",
    descriptionAr: "مسابقة لتشجيع الطلاب على القراءة والبحث.",
    descriptionEn: "A competition encouraging students to read and research.",
    date: "2026-10-18",
    time: "11:00",
    locationAr: "المكتبة",
    locationEn: "Library",
    type: "activity",
  },
  {
    id: 6,
    titleAr: "إجازة رسمية",
    titleEn: "Official Holiday",
    descriptionAr: "إجازة رسمية للطلاب والعاملين بالمدرسة.",
    descriptionEn: "Official holiday for students and school staff.",
    date: "2026-10-22",
    time: "00:00",
    locationAr: "المدرسة",
    locationEn: "School",
    type: "holiday",
  },
  {
    id: 7,
    titleAr: "اجتماع مجلس الإدارة",
    titleEn: "Board Meeting",
    descriptionAr: "اجتماع لمتابعة الأداء والخطط التطويرية.",
    descriptionEn: "Meeting to review performance and development plans.",
    date: "2026-11-03",
    time: "12:00",
    locationAr: "مكتب الإدارة",
    locationEn: "Administration Office",
    type: "meeting",
  },
  {
    id: 8,
    titleAr: "امتحانات شهر نوفمبر",
    titleEn: "November Monthly Exams",
    descriptionAr: "بدء امتحانات الشهر للصفوف الدراسية المختلفة.",
    descriptionEn: "Monthly examinations for different grade levels.",
    date: "2026-11-08",
    time: "09:00",
    locationAr: "الفصول الدراسية",
    locationEn: "Classrooms",
    type: "exam",
  },
  {
    id: 9,
    titleAr: "يوم الرياضة المدرسي",
    titleEn: "School Sports Day",
    descriptionAr: "أنشطة رياضية ومسابقات جماعية للطلاب.",
    descriptionEn: "Sports activities and group competitions for students.",
    date: "2026-11-15",
    time: "08:30",
    locationAr: "الملعب",
    locationEn: "School Playground",
    type: "activity",
  },
  {
    id: 10,
    titleAr: "رحلة إلى المتحف",
    titleEn: "Museum Trip",
    descriptionAr: "زيارة تعليمية للتعرف على التاريخ والحضارة.",
    descriptionEn: "An educational visit to explore history and civilization.",
    date: "2026-11-19",
    time: "08:00",
    locationAr: "المتحف",
    locationEn: "Museum",
    type: "trip",
  },
  {
    id: 11,
    titleAr: "اجتماع متابعة أولياء الأمور",
    titleEn: "Parents Follow-up Meeting",
    descriptionAr: "مناقشة مستوى الطلاب ونتائج التقييمات.",
    descriptionEn: "Discussing student progress and assessment results.",
    date: "2026-11-23",
    time: "10:30",
    locationAr: "قاعة الاجتماعات",
    locationEn: "Meeting Hall",
    type: "meeting",
  },
  {
    id: 12,
    titleAr: "امتحانات منتصف الفصل",
    titleEn: "Midterm Examinations",
    descriptionAr: "بدء امتحانات منتصف الفصل الدراسي.",
    descriptionEn: "Midterm examinations begin.",
    date: "2026-12-01",
    time: "09:00",
    locationAr: "الفصول الدراسية",
    locationEn: "Classrooms",
    type: "exam",
  },
  {
    id: 13,
    titleAr: "معرض المشروعات",
    titleEn: "Projects Exhibition",
    descriptionAr: "عرض مشروعات الطلاب وأفكارهم الإبداعية.",
    descriptionEn: "Showcasing student projects and creative ideas.",
    date: "2026-12-10",
    time: "11:00",
    locationAr: "قاعة الأنشطة",
    locationEn: "Activities Hall",
    type: "activity",
  },
  {
    id: 14,
    titleAr: "إجازة نصف العام",
    titleEn: "Mid-Year Holiday",
    descriptionAr: "بداية إجازة نصف العام الدراسي.",
    descriptionEn: "Beginning of the mid-year school holiday.",
    date: "2027-01-24",
    time: "00:00",
    locationAr: "المدرسة",
    locationEn: "School",
    type: "holiday",
  },
  {
    id: 15,
    titleAr: "بداية الفصل الدراسي الثاني",
    titleEn: "Second Semester Begins",
    descriptionAr: "عودة الطلاب واستئناف الدراسة.",
    descriptionEn: "Students return and classes resume.",
    date: "2027-02-07",
    time: "08:00",
    locationAr: "المدرسة",
    locationEn: "School",
    type: "activity",
  },
  {
    id: 16,
    titleAr: "امتحانات نهاية العام",
    titleEn: "Final Examinations",
    descriptionAr: "بدء امتحانات نهاية العام الدراسي.",
    descriptionEn: "Final examinations begin.",
    date: "2027-05-30",
    time: "09:00",
    locationAr: "الفصول الدراسية",
    locationEn: "Classrooms",
    type: "exam",
  },
];

const eventColors: Record<EventType, string> = {
  exam: "bg-red-100 text-red-700 border-red-200",
  holiday: "bg-emerald-100 text-emerald-700 border-emerald-200",
  activity: "bg-sky-100 text-sky-700 border-sky-200",
  meeting: "bg-violet-100 text-violet-700 border-violet-200",
  trip: "bg-amber-100 text-amber-700 border-amber-200",
};

const eventDots: Record<EventType, string> = {
  exam: "bg-red-500",
  holiday: "bg-emerald-500",
  activity: "bg-sky-500",
  meeting: "bg-violet-500",
  trip: "bg-amber-500",
};

const emptyForm = {
  titleAr: "",
  titleEn: "",
  descriptionAr: "",
  descriptionEn: "",
  date: "",
  time: "09:00",
  locationAr: "",
  locationEn: "",
  type: "activity" as EventType,
};

export default function CalendarPage() {
  const { language } = useLanguage();
  const isArabic = language === "ar";
  const dir = isArabic ? "rtl" : "ltr";

  const [events, setEvents] = useState<SchoolEvent[]>(initialEvents);
  const [hydrated, setHydrated] = useState(false);
  const [currentDate, setCurrentDate] = useState(new Date(2026, 10, 1));
  const [selectedDate, setSelectedDate] = useState("2026-11-13");
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");
  const [editorOpen, setEditorOpen] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [form, setForm] = useState(emptyForm);

  const t = {
    eyebrow: isArabic ? "نظم وقتك وكن مستعدًا" : "PLAN AHEAD",
    title: isArabic ? "التقويم المدرسي" : "School Calendar",
    subtitle: isArabic
      ? "تابع جميع المواعيد والفعاليات والامتحانات والإجازات المدرسية في مكان واحد."
      : "Keep track of school events, examinations, holidays and important dates in one place.",
    today: isArabic ? "اليوم" : "Today",
    add: isArabic ? "إضافة حدث جديد" : "Add New Event",
    events: isArabic ? "الأحداث" : "Events",
    upcoming: isArabic ? "الأحداث القادمة" : "Upcoming Events",
    selected: isArabic ? "أحداث اليوم المحدد" : "Selected Day Events",
    all: isArabic ? "كل الأحداث" : "All Events",
    search: isArabic ? "ابحث عن حدث..." : "Search events...",
    empty: isArabic ? "لا توجد أحداث في هذا اليوم" : "No events on this day",
    noResults: isArabic ? "لا توجد نتائج مطابقة" : "No matching events",
    save: isArabic ? "حفظ الحدث" : "Save Event",
    cancel: isArabic ? "إلغاء" : "Cancel",
    edit: isArabic ? "تعديل" : "Edit",
    delete: isArabic ? "حذف" : "Delete",
    addTitle: isArabic ? "إضافة حدث جديد" : "Add New Event",
    editTitle: isArabic ? "تعديل الحدث" : "Edit Event",
    titleAr: "عنوان الحدث بالعربية",
    titleEn: "Event Title in English",
    descriptionAr: "الوصف بالعربية",
    descriptionEn: "Description in English",
    date: isArabic ? "التاريخ" : "Date",
    time: isArabic ? "الوقت" : "Time",
    locationAr: "المكان بالعربية",
    locationEn: "Location in English",
    type: isArabic ? "نوع الحدث" : "Event Type",
    allTypes: isArabic ? "كل الأنواع" : "All Types",
    exam: isArabic ? "امتحانات" : "Exams",
    holiday: isArabic ? "إجازات" : "Holidays",
    activity: isArabic ? "أنشطة" : "Activities",
    meeting: isArabic ? "اجتماعات" : "Meetings",
    trip: isArabic ? "رحلات" : "Trips",
    total: isArabic ? "إجمالي الأحداث" : "Total Events",
    thisMonth: isArabic ? "أحداث هذا الشهر" : "This Month",
    exams: isArabic ? "الامتحانات" : "Examinations",
    holidays: isArabic ? "الإجازات" : "Holidays",
    location: isArabic ? "المكان" : "Location",
  };

  const typeLabels: Record<EventType, string> = {
    exam: t.exam,
    holiday: t.holiday,
    activity: t.activity,
    meeting: t.meeting,
    trip: t.trip,
  };

  const months = isArabic
    ? ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"]
    : ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  const weekdays = isArabic
    ? ["الأحد", "الإثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"]
    : ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  useEffect(() => {
    try {
      const saved = localStorage.getItem("rowad-school-calendar-v1");
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) setEvents(parsed);
      }
    } catch {
      console.warn("Could not load calendar events.");
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (hydrated) {
      localStorage.setItem("rowad-school-calendar-v1", JSON.stringify(events));
    }
  }, [events, hydrated]);

  const dateKey = (date: Date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const monthEvents = useMemo(
    () => events.filter((event) => {
      const date = new Date(`${event.date}T00:00:00`);
      return date.getMonth() === currentDate.getMonth() &&
        date.getFullYear() === currentDate.getFullYear();
    }),
    [events, currentDate]
  );

  const selectedEvents = useMemo(
    () => events.filter((event) => event.date === selectedDate),
    [events, selectedDate]
  );

  const filteredEvents = useMemo(() => {
    const term = search.trim().toLowerCase();

    return events
      .filter((event) => filter === "all" || event.type === filter)
      .filter((event) => {
        if (!term) return true;
        return [
          event.titleAr,
          event.titleEn,
          event.descriptionAr,
          event.descriptionEn,
          event.locationAr,
          event.locationEn,
        ].some((value) => value.toLowerCase().includes(term));
      })
      .sort((a, b) => a.date.localeCompare(b.date));
  }, [events, filter, search]);

  const upcomingEvents = useMemo(() => {
    const today = dateKey(new Date());
    return filteredEvents.filter((event) => event.date >= today).slice(0, 6);
  }, [filteredEvents]);

  const calendarCells = useMemo(() => {
    const firstDay = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      1
    ).getDay();

    const daysInMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1,
      0
    ).getDate();

    const previousMonthDays = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      0
    ).getDate();

    const cells: { date: Date; outside: boolean }[] = [];

    for (let i = firstDay - 1; i >= 0; i--) {
      cells.push({
        date: new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, previousMonthDays - i),
        outside: true,
      });
    }

    for (let day = 1; day <= daysInMonth; day++) {
      cells.push({
        date: new Date(currentDate.getFullYear(), currentDate.getMonth(), day),
        outside: false,
      });
    }

    const remaining = 42 - cells.length;
    for (let day = 1; day <= remaining; day++) {
      cells.push({
        date: new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, day),
        outside: true,
      });
    }

    return cells;
  }, [currentDate]);

  const changeMonth = (amount: number) => {
    setCurrentDate((current) =>
      new Date(current.getFullYear(), current.getMonth() + amount, 1)
    );
  };

  const openAdd = (date = selectedDate) => {
    setEditingId(null);
    setForm({ ...emptyForm, date });
    setEditorOpen(true);
  };

  const openEdit = (event: SchoolEvent) => {
    setEditingId(event.id);
    setForm({
      titleAr: event.titleAr,
      titleEn: event.titleEn,
      descriptionAr: event.descriptionAr,
      descriptionEn: event.descriptionEn,
      date: event.date,
      time: event.time,
      locationAr: event.locationAr,
      locationEn: event.locationEn,
      type: event.type,
    });
    setEditorOpen(true);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newEvent: SchoolEvent = {
      id: editingId ?? Math.max(0, ...events.map((item) => item.id)) + 1,
      ...form,
    };

    setEvents((current) =>
      editingId
        ? current.map((item) => item.id === editingId ? newEvent : item)
        : [...current, newEvent]
    );

    setSelectedDate(newEvent.date);
    setCurrentDate(new Date(`${newEvent.date}T00:00:00`));
    setEditorOpen(false);
    setEditingId(null);
    setForm(emptyForm);
  };

  const handleDelete = (id: number) => {
    const confirmed = window.confirm(
      isArabic ? "هل تريدين حذف هذا الحدث؟" : "Are you sure you want to delete this event?"
    );

    if (confirmed) {
      setEvents((current) => current.filter((item) => item.id !== id));
    }
  };

  const formatDate = (date: string) =>
    new Date(`${date}T00:00:00`).toLocaleDateString(
      isArabic ? "ar-EG" : "en-US",
      { day: "numeric", month: "long", year: "numeric" }
    );

  const eventTitle = (event: SchoolEvent) =>
    isArabic ? event.titleAr : event.titleEn;

  const eventDescription = (event: SchoolEvent) =>
    isArabic ? event.descriptionAr : event.descriptionEn;

  const eventLocation = (event: SchoolEvent) =>
    isArabic ? event.locationAr : event.locationEn;

  return (
    <main dir={dir} className="min-h-screen bg-[#f4f9fa] text-[#073b4c]">

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#062f3b] px-5 py-20 text-white md:py-28">
        <div className="absolute -left-24 -top-28 h-96 w-96 rounded-full border-[55px] border-white/5" />
        <div className="absolute -bottom-40 -right-20 h-[450px] w-[450px] rounded-full border-[65px] border-white/5" />

        <div className="relative mx-auto max-w-7xl">
          <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-bold text-[#a6e9ee]">
            {t.eyebrow}
          </span>

          <div className="mt-7 grid items-center gap-10 md:grid-cols-[1.5fr_1fr]">
            <div>
              <h1 className="text-4xl font-black leading-tight md:text-6xl">
                {t.title}
                <span className="mt-3 block text-[#6ed4df]">
                  {isArabic ? "كل مواعيدنا في مكان واحد" : "All Our Dates in One Place"}
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-9 text-white/75 md:text-lg">
                {t.subtitle}
              </p>

              <button
                onClick={() => openAdd()}
                className="mt-9 rounded-xl bg-white px-7 py-4 font-extrabold text-[#062f3b] transition hover:bg-[#dff7f8]"
              >
                + {t.add}
              </button>
            </div>

            <div className="rounded-3xl border border-white/15 bg-white/10 p-7 backdrop-blur-md">
              <div className="text-sm font-bold text-[#a6e9ee]">
                {isArabic ? "ملخص التقويم" : "Calendar Overview"}
              </div>
              <div className="mt-5 grid grid-cols-2 gap-4">
                {[
                  { value: events.length, label: t.total },
                  { value: monthEvents.length, label: t.thisMonth },
                  { value: events.filter((e) => e.type === "exam").length, label: t.exams },
                  { value: events.filter((e) => e.type === "holiday").length, label: t.holidays },
                ].map((item, index) => (
                  <div key={index} className="rounded-2xl bg-white/10 p-5">
                    <p className="text-3xl font-black">{item.value}</p>
                    <p className="mt-2 text-xs text-white/65">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CALENDAR AREA */}
      <section className="mx-auto max-w-7xl px-4 py-16 md:px-5">

        <div className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <span className="font-bold text-[#0e7490]">
              {isArabic ? "خطط لشهرك" : "PLAN YOUR MONTH"}
            </span>
            <h2 className="mt-3 text-3xl font-black text-[#062f3b] md:text-4xl">
              {isArabic ? "التقويم التفاعلي" : "Interactive Calendar"}
            </h2>
          </div>

          <button
            onClick={() => {
              setCurrentDate(new Date());
              setSelectedDate(dateKey(new Date()));
            }}
            className="rounded-xl border border-[#b9d9de] bg-white px-6 py-3 font-bold text-[#075568] transition hover:bg-[#eaf7f8]"
          >
            {t.today}
          </button>
        </div>

        <div className="grid gap-7 lg:grid-cols-[1.65fr_1fr]">

          {/* MONTH CALENDAR */}
          <div className="overflow-hidden rounded-3xl border border-[#dcebed] bg-white shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-4 bg-[#075568] p-6 text-white md:p-8">
              <div>
                <p className="text-sm text-white/65">
                  {isArabic ? "التقويم المدرسي" : "SCHOOL CALENDAR"}
                </p>
                <h3 className="mt-2 text-2xl font-black md:text-3xl">
                  {months[currentDate.getMonth()]} {currentDate.getFullYear()}
                </h3>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => changeMonth(-1)}
                  aria-label={isArabic ? "الشهر السابق" : "Previous month"}
                  className="rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-xl hover:bg-white/20"
                >
                  {isArabic ? "›" : "‹"}
                </button>
                <button
                  onClick={() => changeMonth(1)}
                  aria-label={isArabic ? "الشهر التالي" : "Next month"}
                  className="rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-xl hover:bg-white/20"
                >
                  {isArabic ? "‹" : "›"}
                </button>
              </div>
            </div>

            <div className="p-3 md:p-6">
              <div className="mb-3 grid grid-cols-7 gap-1">
                {weekdays.map((day) => (
                  <div key={day} className="py-3 text-center text-[10px] font-extrabold text-slate-400 sm:text-xs">
                    {day}
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-7 gap-1">
                {calendarCells.map((cell, index) => {
                  const key = dateKey(cell.date);
                  const dayEvents = events.filter((event) => event.date === key);
                  const isSelected = selectedDate === key;
                  const isToday = dateKey(new Date()) === key;

                  return (
                    <button
                      key={`${key}-${index}`}
                      onClick={() => {
                        setSelectedDate(key);
                        if (cell.outside) {
                          setCurrentDate(new Date(cell.date.getFullYear(), cell.date.getMonth(), 1));
                        }
                      }}
                      className={`group flex min-h-[76px] flex-col items-center rounded-xl border p-1 transition sm:min-h-[100px] sm:p-2 ${
                        isSelected
                          ? "border-[#075568] bg-[#e8f5f7] ring-2 ring-[#075568]/10"
                          : "border-transparent hover:border-[#c6e3e7] hover:bg-[#f5fbfc]"
                      } ${cell.outside ? "opacity-35" : ""}`}
                    >
                      <span className={`flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold sm:h-9 sm:w-9 sm:text-sm ${
                        isToday ? "bg-[#0e7490] text-white" :
                        isSelected ? "bg-[#075568] text-white" :
                        "text-[#073b4c]"
                      }`}>
                        {cell.date.getDate()}
                      </span>

                      <div className="mt-2 flex max-w-full flex-wrap justify-center gap-1">
                        {dayEvents.slice(0, 3).map((event) => (
                          <span
                            key={event.id}
                            className={`h-1.5 w-1.5 rounded-full sm:h-2 sm:w-2 ${eventDots[event.type]}`}
                          />
                        ))}
                      </div>

                      {dayEvents.length > 0 && (
                        <span className="mt-1 hidden text-[9px] font-bold text-slate-400 sm:block">
                          {dayEvents.length} {isArabic ? "أحداث" : "events"}
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* LEGEND */}
            <div className="flex flex-wrap gap-x-5 gap-y-3 border-t border-slate-100 px-5 py-5">
              {(Object.keys(typeLabels) as EventType[]).map((type) => (
                <div key={type} className="flex items-center gap-2">
                  <span className={`h-2.5 w-2.5 rounded-full ${eventDots[type]}`} />
                  <span className="text-xs font-semibold text-slate-500">{typeLabels[type]}</span>
                </div>
              ))}
            </div>
          </div>

          {/* SELECTED DAY */}
          <div className="rounded-3xl border border-[#dcebed] bg-white p-6 shadow-sm md:p-7">
            <div className="flex items-start justify-between gap-3">
              <div>
                <span className="text-sm font-bold text-[#0e7490]">
                  {t.selected}
                </span>
                <h3 className="mt-3 text-2xl font-black text-[#062f3b]">
                  {formatSelectedDate(selectedDate, isArabic)}
                </h3>
              </div>
              <div className="rounded-xl bg-[#eaf7f8] p-3 text-2xl">▦</div>
            </div>

            <button
              onClick={() => openAdd(selectedDate)}
              className="mt-6 w-full rounded-xl bg-[#075568] px-5 py-3 font-bold text-white transition hover:bg-[#0e7490]"
            >
              + {t.add}
            </button>

            <div className="mt-6 space-y-4">
              {selectedEvents.length > 0 ? (
                selectedEvents.map((event) => (
                  <EventCard
                    key={event.id}
                    event={event}
                    isArabic={isArabic}
                    title={eventTitle(event)}
                    description={eventDescription(event)}
                    location={eventLocation(event)}
                    typeLabel={typeLabels[event.type]}
                    onEdit={() => openEdit(event)}
                    onDelete={() => handleDelete(event.id)}
                    editLabel={t.edit}
                    deleteLabel={t.delete}
                    dateLabel={formatDate(event.date)}
                  />
                ))
              ) : (
                <div className="rounded-2xl border border-dashed border-[#c7e0e4] py-12 text-center">
                  <div className="text-4xl">📅</div>
                  <p className="mt-4 text-sm font-bold text-slate-400">{t.empty}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* UPCOMING EVENTS */}
      <section className="mx-auto max-w-7xl px-5 pb-20">
        <div className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <span className="font-bold text-[#0e7490]">
              {isArabic ? "لا تفوت المواعيد المهمة" : "DON'T MISS IMPORTANT DATES"}
            </span>
            <h2 className="mt-3 text-3xl font-black text-[#062f3b] md:text-4xl">
              {t.upcoming}
            </h2>
          </div>
        </div>

        {/* SEARCH + FILTER */}
        <div className="mb-7 grid gap-4 rounded-2xl border border-[#dcebed] bg-white p-4 md:grid-cols-[1fr_250px]">
          <input
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder={t.search}
            className="w-full rounded-xl border border-slate-200 bg-[#f8fbfc] px-5 py-3 outline-none focus:border-[#0e7490]"
          />

          <select
            value={filter}
            onChange={(event) => setFilter(event.target.value)}
            className="rounded-xl border border-slate-200 bg-[#f8fbfc] px-4 py-3 font-semibold text-[#075568] outline-none focus:border-[#0e7490]"
          >
            <option value="all">{t.allTypes}</option>
            {(Object.keys(typeLabels) as EventType[]).map((type) => (
              <option key={type} value={type}>{typeLabels[type]}</option>
            ))}
          </select>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {upcomingEvents.map((event) => (
            <EventCard
              key={event.id}
              event={event}
              isArabic={isArabic}
              title={eventTitle(event)}
              description={eventDescription(event)}
              location={eventLocation(event)}
              typeLabel={typeLabels[event.type]}
              onEdit={() => openEdit(event)}
              onDelete={() => handleDelete(event.id)}
              editLabel={t.edit}
              deleteLabel={t.delete}
              dateLabel={formatDate(event.date)}
            />
          ))}
        </div>

        {upcomingEvents.length === 0 && (
          <div className="rounded-3xl bg-white py-16 text-center text-slate-400">
            {t.noResults}
          </div>
        )}

        <div className="mt-6 text-center text-sm text-slate-400">
          {isArabic
            ? `عرض ${upcomingEvents.length} من ${filteredEvents.length} حدث`
            : `Showing ${upcomingEvents.length} of ${filteredEvents.length} events`}
        </div>
      </section>

      {/* ADD / EDIT MODAL */}
      {editorOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-[#021c24]/80 p-4 backdrop-blur-sm">
          <form
            onSubmit={handleSubmit}
            className="my-6 max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-3xl bg-white p-6 shadow-2xl md:p-9"
          >
            <div className="mb-7 flex items-center justify-between gap-4">
              <div>
                <span className="text-sm font-bold text-[#0e7490]">
                  {isArabic ? "إدارة المواعيد" : "EVENT MANAGEMENT"}
                </span>
                <h2 className="mt-2 text-2xl font-black text-[#062f3b]">
                  {editingId ? t.editTitle : t.addTitle}
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setEditorOpen(false)}
                className="rounded-full bg-slate-100 px-4 py-2 text-xl text-slate-600 hover:bg-slate-200"
              >
                ×
              </button>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {[
                { key: "titleAr", label: t.titleAr },
                { key: "titleEn", label: t.titleEn },
                { key: "locationAr", label: t.locationAr },
                { key: "locationEn", label: t.locationEn },
              ].map((field) => (
                <label key={field.key}>
                  <span className="mb-2 block text-sm font-bold text-[#073b4c]">{field.label}</span>
                  <input
                    required
                    value={form[field.key as keyof typeof form] as string}
                    onChange={(event) => setForm((current) => ({
                      ...current,
                      [field.key]: event.target.value,
                    }))}
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-[#0e7490] focus:ring-4 focus:ring-[#0e7490]/10"
                  />
                </label>
              ))}

              <label className="md:col-span-2">
                <span className="mb-2 block text-sm font-bold text-[#073b4c]">{t.descriptionAr}</span>
                <textarea
                  required
                  rows={3}
                  value={form.descriptionAr}
                  onChange={(event) => setForm((current) => ({ ...current, descriptionAr: event.target.value }))}
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-[#0e7490]"
                />
              </label>

              <label className="md:col-span-2">
                <span className="mb-2 block text-sm font-bold text-[#073b4c]">{t.descriptionEn}</span>
                <textarea
                  required
                  rows={3}
                  value={form.descriptionEn}
                  onChange={(event) => setForm((current) => ({ ...current, descriptionEn: event.target.value }))}
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-[#0e7490]"
                />
              </label>

              <label>
                <span className="mb-2 block text-sm font-bold text-[#073b4c]">{t.date}</span>
                <input
                  type="date"
                  required
                  value={form.date}
                  onChange={(event) => setForm((current) => ({ ...current, date: event.target.value }))}
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-[#0e7490]"
                />
              </label>

              <label>
                <span className="mb-2 block text-sm font-bold text-[#073b4c]">{t.time}</span>
                <input
                  type="time"
                  required
                  value={form.time}
                  onChange={(event) => setForm((current) => ({ ...current, time: event.target.value }))}
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-[#0e7490]"
                />
              </label>

              <label className="md:col-span-2">
                <span className="mb-2 block text-sm font-bold text-[#073b4c]">{t.type}</span>
                <select
                  value={form.type}
                  onChange={(event) => setForm((current) => ({ ...current, type: event.target.value as EventType }))}
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-[#0e7490]"
                >
                  {(Object.keys(typeLabels) as EventType[]).map((type) => (
                    <option key={type} value={type}>{typeLabels[type]}</option>
                  ))}
                </select>
              </label>
            </div>

            <div className="mt-8 flex flex-wrap justify-end gap-3 border-t border-slate-100 pt-6">
              <button
                type="button"
                onClick={() => setEditorOpen(false)}
                className="rounded-xl border border-slate-200 px-7 py-3 font-bold text-slate-600 hover:bg-slate-50"
              >
                {t.cancel}
              </button>
              <button
                type="submit"
                className="rounded-xl bg-[#075568] px-8 py-3 font-extrabold text-white transition hover:bg-[#0e7490]"
              >
                {t.save}
              </button>
            </div>
          </form>
        </div>
      )}
    </main>
  );
}

function formatSelectedDate(date: string, isArabic: boolean) {
  return new Date(`${date}T00:00:00`).toLocaleDateString(
    isArabic ? "ar-EG" : "en-US",
    { weekday: "long", day: "numeric", month: "long", year: "numeric" }
  );
}

type EventCardProps = {
  event: SchoolEvent;
  isArabic: boolean;
  title: string;
  description: string;
  location: string;
  typeLabel: string;
  onEdit: () => void;
  onDelete: () => void;
  editLabel: string;
  deleteLabel: string;
  dateLabel: string;
};

function EventCard({
  event,
  isArabic,
  title,
  description,
  location,
  typeLabel,
  onEdit,
  onDelete,
  editLabel,
  deleteLabel,
  dateLabel,
}: EventCardProps) {
  return (
    <article className="rounded-2xl border border-[#dcebed] bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="flex items-start justify-between gap-3">
        <span className={`rounded-full border px-3 py-1.5 text-xs font-bold ${eventColors[event.type]}`}>
          {typeLabel}
        </span>
        <span className="text-xs font-semibold text-slate-400">{dateLabel}</span>
      </div>

      <h3 className="mt-4 text-lg font-black text-[#073b4c]">{title}</h3>
      <p className="mt-2 line-clamp-3 text-sm leading-7 text-slate-500">{description}</p>

      <div className="mt-4 flex flex-wrap items-center gap-4 border-t border-slate-100 pt-4 text-xs text-slate-500">
        <span>◷ {event.time === "00:00" ? (isArabic ? "طوال اليوم" : "All day") : event.time}</span>
        <span>⌖ {location}</span>
      </div>

      <div className="mt-5 flex gap-2">
        <button
          onClick={onEdit}
          className="flex-1 rounded-lg bg-[#eaf7f8] px-3 py-2.5 text-sm font-bold text-[#075568] transition hover:bg-[#d5eff1]"
        >
          {editLabel}
        </button>
        <button
          onClick={onDelete}
          className="flex-1 rounded-lg bg-red-50 px-3 py-2.5 text-sm font-bold text-red-600 transition hover:bg-red-100"
        >
          {deleteLabel}
        </button>
      </div>
    </article>
  );
}
