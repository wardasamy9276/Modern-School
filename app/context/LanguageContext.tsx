"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

type Language = "ar" | "en";

const translations = {
  ar: {
    dir: "rtl",

    home: "الرئيسية",
    about: "من نحن",
    features: "المميزات",
    blog: "المدونة",
    clients: "عملاؤنا",
    contact: "تواصل معنا",

    login: "تسجيل الدخول",
    register: "إنشاء حساب",

    logoAlt: "الشعار",
    openMenu: "فتح القائمة",
    closeMenu: "إغلاق القائمة",

    bookDemo: "احجز ديمو مجاني",

    student_info: "كل ما يخص الطلبة",

    schools: "مدارسنا",
    view_details: "عرض التفاصيل",
    no_schools: "لا توجد مدارس",

    school_default_desc: "مدرسة تقدم نظام تعليمي متكامل وخدمات تعليمية متميزة.",

    location: "العنوان",
    phone: "الهاتف",
    email: "البريد الإلكتروني",

    footer_cta_badge: "انضم إلى عائلتنا التعليمية",
    footer_cta_title: "هل تبحث عن",
    footer_cta_title_highlight: "مستقبل تعليمي مشرق",
    footer_cta_title_end: "لأبنائك؟",

    footer_cta_desc:
      "باب التسجيل مفتوح الآن للعام الدراسي الجديد. احجز مقعداً لأبنائك واستمتع بتجربة تعليمية فريدة ومتطورة.",

    footer_apply_now: "قدم الآن",
    footer_contact_admission: "تواصل مع القبول",

    footer_brand_desc:
      "صرح تعليمي متميز يهدف إلى بناء جيل واعٍ ومبتكر عبر منصات تعليمية وبيئة تربوية حديثة.",

    footer_follow_us: "تابعنا على شبكاتنا الاجتماعية",
    footer_quick_links_title: "روابط سريعة واستكشاف",

    footer_all_rights_reserved: "جميع الحقوق محفوظة للمدرسة",
    footer_privacy_policy: "سياسة الخصوصية",
    footer_terms_conditions: "الشروط والأحكام",

    hero_academy_badge: "أكاديمية سمارت اسكول الذكية",

    hero_title_start: "طور مهاراتك وانطلق نحو",
    hero_title_highlight: "مستقبلك الأكاديمي",

    hero_description:
      "اكتشف مجموعة متنوعة من الكورسات التعليمية المصممة لمساعدتك على تطوير مهاراتك وتحقيق أهدافك الأكاديمية.",

    explore_courses: "استكشف الدورات",
    browse_schools: "تصفح المدارس",

    /* =========================
       Dashboard
    ========================= */

    dashboard_title: "لوحة التحكم",

    dashboard_total_students: "إجمالي الطلاب",
    dashboard_students_desc: "عدد الطلاب المسجلين في النظام",

    dashboard_total_teachers: "إجمالي المعلمين",
    dashboard_teachers_desc: "عدد المعلمين المسجلين في النظام",

    dashboard_total_parents: "إجمالي أولياء الأمور",
    dashboard_parents_desc: "عدد أولياء الأمور المسجلين",

    dashboard_total_schools: "إجمالي المدارس",
    dashboard_schools_desc: "عدد المدارس المسجلة في النظام",

    dashboard_total_courses: "إجمالي الكورسات",
    dashboard_courses_desc: "عدد الكورسات المتاحة",

    dashboard_total_classes: "إجمالي الفصول",
    dashboard_classes_desc: "عدد الفصول الدراسية",

    dashboard_attendance: "الحضور والغياب",
    dashboard_attendance_desc: "إجمالي سجلات الحضور والغياب",

    dashboard_notifications: "الإشعارات",
    dashboard_notifications_desc: "عدد الإشعارات الموجودة",

    dashboard_elearning: "مركز التعلم الإلكتروني",
    dashboard_manage: "إدارة ومتابعة العملية التعليمية",

    dashboard_live_classes: "المحاضرات المباشرة",
    dashboard_live_classes_desc:
      "المحاضرات التي يمكن للطلاب الانضمام إليها الآن",

    dashboard_manage_classes: "إدارة المحاضرات",

    dashboard_upcoming_classes: "المحاضرات القادمة",
    dashboard_upcoming_desc: "المحاضرات المجدولة في النظام",

    dashboard_recorded_videos: "الفيديوهات المسجلة",
    dashboard_recorded_videos_desc: "مكتبة المحاضرات المسجلة للطلاب",

    dashboard_courses: "الكورسات",
    dashboard_courses_section_desc: "جميع الكورسات المتاحة في النظام",

    dashboard_manage_courses: "إدارة الكورسات",

    dashboard_articles: "المقالات",
    dashboard_articles_desc: "آخر المحتوى المنشور",

    dashboard_quick_actions: "إجراءات سريعة",
    dashboard_quick_actions_desc: "أهم الإجراءات لإدارة المنصة",

    dashboard_live_now: "مباشر الآن",

    dashboard_join_class: "انضم للمحاضرة",
    dashboard_start_class: "بدء محاضرة",
    dashboard_start_live_class: "بدء محاضرة مباشرة",

    dashboard_add_course: "إضافة كورس",
    dashboard_add_video: "إضافة فيديو مسجل",
    dashboard_add_article: "إضافة مقال",

    dashboard_watch_video: "مشاهدة الفيديو",
    dashboard_view_course: "عرض الكورس",
    dashboard_view_all: "عرض الكل",

    dashboard_video_library: "مكتبة الفيديوهات",
    dashboard_educational_content: "المحتوى التعليمي",
    dashboard_news_content: "الأخبار والمحتوى",

    dashboard_teacher: "المعلم",

    dashboard_no_live_classes: "لا توجد محاضرات مباشرة حاليًا",

    dashboard_no_upcoming_classes: "لا توجد محاضرات قادمة",

    dashboard_no_recorded_videos: "لا توجد فيديوهات مسجلة",

    dashboard_no_courses: "لا توجد كورسات متاحة",

    dashboard_no_articles: "لا توجد مقالات متاحة",

    dashboard_refresh: "تحديث",
    dashboard_warning: "تنبيه",

    /* =========================
       Contact Us Page
    ========================= */
    title: "تواصل مع إدارة القبول والدعم",
    subtitle:
      "نحن هنا للإجابة عن استفساراتكم ومساعدتكم في كل ما يتعلق بالعام الدراسي الجديد.",
    contactInfoTitle: "معلومات الاتصال",
    contactInfoDesc:
      "يمكنك زيارتنا في مقر المجمع أو التواصل عبر القنوات المتاحة طوال أيام العمل الرسمية.",
    locationText: "مصر، القاهرة، المجمع الرئيسي للمدارس",
    phoneText: "+20 100 000 0000",
    whatsappText: "+20 100 000 0000 (واتساب)",
    whatsappMsg: "السلام عليكم، أرغب بالاستفسار عن التسجيل في مجمع المدارس",
    emailText: "admission@smartschools.edu.eg",
    workingHours: "ساعات العمل: الأحد - الخميس (8:00 صباحاً - 3:00 مسائاً)",
    formTitle: "أرسل لنا رسالة مباشرة",
    successMsg: "تم إرسال رسالتك بنجاح! فريق الدعم والقبول سيتواصل معك قريباً.",
    errorMsg: "حدث خطأ أثناء إرسال الرسالة.",
    serverError: "تعذر الاتصال بالخادم، تأكد من تشغيل لارافيل.",
    nameLabel: "الاسم الكامل",
    namePlaceholder: "أدخل اسمك الكريم",
    emailLabel: "البريد الإلكتروني",
    subjectLabel: "موضوع الرسالة",
    subjectPlaceholder: "استفسار بخصوص شروط القبول والمصروفات",
    messageLabel: "نص الرسالة",
    messagePlaceholder: "اكتب تفاصيل استفسارك هنا...",
    submitBtn: "إرسال الرسالة",
    sendingBtn: "جاري إرسال الرسالة...",
    langSwitch: "English",
    registerTitle: "إنشاء حساب جديد",
    registerSubtitle: "أنشئ حسابك للوصول إلى لوحة التحكم",
    fullNameLabel: "الاسم الكامل",
    fullNamePlaceholder: "اكتب اسمك بالكامل",
    phoneLabel: "رقم التليفون",
    // emailLabel: "البريد الإلكتروني",
    nextStepBtn: "التالي",
    createPasswordTitle: "أنشئ كلمة المرور",
    createPasswordSubtitle: "أدخل كلمة مرور لحماية حسابك",
    passwordLabel: "كلمة المرور",
    confirmPasswordLabel: "تأكيد كلمة المرور",
    finishRegisterBtn: "إنشاء الحساب والدخول",
    backStepBtn: "الرجوع وتعديل البيانات",
    secureDataNotice: "جميع بياناتك محمية وآمنة",
    errorNameRequired: "من فضلك أدخل الاسم",
    errorPhoneRequired: "من فضلك أدخل رقم التليفون",
    errorEmailRequired: "من فضلك أدخل البريد الإلكتروني",
    errorPasswordLength: "كلمة المرور يجب أن تكون 6 أحرف على الأقل",
    errorPasswordMatch: "كلمة المرور غير متطابقة",




        /* Activity Section */
    activity_title: "آخر ما حدث في المدرسة",
    activity_school_name: "مدرسة الرواد الحديثة",
    activity_print: "طباعة السجل",
    activity_total_students: "إجمالي الطلاب",
    activity_present: "حاضر",
    activity_absent: "غائب",
    activity_stage: "المرحلة",
    activity_attendance_rate: "نسبة الحضور",
    activity_all: "الكل",
    activity_by: "بواسطة",
    activity_empty: "لا توجد نشاطات في هذا القسم",

    activity_kind_students: "الطلاب",
    activity_kind_attendance: "الحضور",
    activity_kind_exams: "الامتحانات",
    activity_kind_staff: "المعلمون",
    activity_kind_finance: "المالية",

    activity_stage_primary: "ابتدائي",
    activity_stage_prep: "إعدادي",
    activity_stage_secondary: "ثانوي",

    activity_day_today: "اليوم",
    activity_day_yesterday: "أمس",
    activity_day_two_days: "قبل يومين",

    activity_col_index: "#",
    activity_col_day: "اليوم",
    activity_col_time: "الوقت",
    activity_col_section: "القسم",
    activity_col_action: "العملية",
    activity_col_details: "التفاصيل",
    activity_col_by: "بواسطة",



activity_entry_1: "تسجيل طالب جديد",
activity_desc_1: "إضافة الطالب أحمد محمود إلى الصف الثالث الابتدائي",

activity_entry_2: "تسجيل الحضور",
activity_desc_2: "حضور الصف الثالث الإعدادي: 28 من 30 طالباً",

activity_entry_3: "رفع نتائج الامتحانات",
activity_desc_3: "اختبارات الرياضيات للمرحلة الإعدادية",

activity_entry_4: "تحصيل مصروفات",
activity_desc_4: "دفعة مصروفات الفصل الأول للطالبة ملك إبراهيم",

activity_entry_5: "إضافة معلم جديد",
activity_desc_5: "تعيين معلم علوم للمرحلة الثانوية",

activity_entry_6: "تسجيل الحضور",
activity_desc_6: "حضور المرحلة الابتدائية: 214 من 220 طالباً",

activity_entry_7: "نقل طالب",
activity_desc_7: "نقل الطالب كريم وائل إلى فصل 3/أ",

activity_entry_8: "إصدار إيصال",
activity_desc_8: "إيصال سداد رسوم الأنشطة لـ 12 طالباً",

activity_entry_9: "تحديث ملف معلم",
activity_desc_9: "تحديث بيانات الوظيفة لمعلم اللغة العربية",

activity_entry_10: "جدولة امتحان",
activity_desc_10: "تحديد موعد امتحان العلوم للصف الثاني الثانوي",

activity_entry_11: "تعديل بيانات طالب",
activity_desc_11: "تحديث بيانات ولي الأمر للطالبة سلمى أشرف",

activity_entry_12: "تسجيل الغياب",
activity_desc_12: "غياب الطالب يوسف عادل وإشعار ولي الأمر",

activity_entry_13: "تحصيل مصروفات",
activity_desc_13: "تحصيل 8 دفعات مصروفات دراسية",

activity_entry_14: "تسجيل الحضور",
activity_desc_14: "حضور المرحلة الثانوية: 342 من 350 طالباً",

activity_entry_15: "تسجيل طالبين جدد",
activity_desc_15: "إضافة طالبين إلى الصف الأول الإعدادي",

activity_entry_16: "رفع نتائج الامتحانات",
activity_desc_16: "نتائج اختبار اللغة الإنجليزية للمرحلة الابتدائية",

activity_entry_17: "تسجيل إجازة معلم",
activity_desc_17: "اعتماد إجازة اعتيادية لمعلم الرياضيات",

activity_entry_18: "صرف رواتب",
activity_desc_18: "اعتماد كشف رواتب شهر أكتوبر",

activity_entry_19: "تسجيل الحضور",
activity_desc_19: "حضور المرحلة الإعدادية: 187 من 195 طالباً",

activity_entry_20: "إصدار بطاقة طالب",
activity_desc_20: "طباعة بطاقات الطلاب الجدد",



/* Students Management */
students_title: "إدارة الطلاب",
students_subtitle: "مركز إدارة ومتابعة جميع ملفات الطلاب والسجلات المدرسية",
students_breadcrumb: "لوحة التحكم / شؤون الطلاب",
students_total: "إجمالي الطلاب",
students_active: "الطلاب النشطون",
students_inactive: "غير النشطين",
students_females: "الطالبات",
students_transferred: "الطلاب المنقولون",
students_males: "الطلاب الذكور",
students_academic_year: "العام الدراسي",
students_distribution: "توزيع الطلاب حسب المرحلة الدراسية",
students_primary: "المرحلة الابتدائية",
students_preparatory: "المرحلة الإعدادية",
students_secondary: "المرحلة الثانوية",
students_of_total: "من إجمالي الطلاب",
students_export: "تصدير Excel/CSV",
students_add: "تسجيل طالب جديد",
students_list: "سجل الطلاب",
students_search: "ابحث عن طالب...",
students_results: "نتيجة",
students_all_stages: "كل المراحل",
students_all_statuses: "كل الحالات",
students_code: "الكود",
students_student: "الطالب",
students_stage_grade: "المرحلة / الصف",
students_class: "الفصل",
students_parent: "ولي الأمر",
students_actions: "الإجراءات",
students_active_status: "نشط",
students_inactive_status: "غير نشط",
students_transferred_status: "منقول",
students_no_results: "لا توجد نتائج مطابقة للبحث",
students_file: "الملف الكامل",
students_edit: "تعديل",
students_delete: "حذف",
students_confirm_delete: "هل أنت متأكدة من حذف الطالب؟",
students_edit_title: "تعديل بيانات الطالب",
students_add_title: "تسجيل طالب جديد",
students_basic_info: "البيانات الأساسية والتسجيل الدراسي",
students_name: "اسم الطالب",
students_national_id: "الرقم القومي",
students_email: "البريد الإلكتروني",
students_phone: "هاتف الطالب",
students_parent_name: "اسم ولي الأمر",
students_parent_phone: "هاتف ولي الأمر",
students_parent_relation: "صلة القرابة",
students_father: "الأب",
students_mother: "الأم",
students_guardian: "الوصي",
students_stage: "المرحلة الدراسية",
students_grade: "الصف الدراسي",
students_gender: "النوع",
students_male: "ذكر",
students_female: "أنثى",
students_birth_date: "تاريخ الميلاد",
students_admission_date: "تاريخ الالتحاق",
students_address: "العنوان",
students_bus: "رقم الباص",
students_status: "حالة الطالب",
students_notes: "ملاحظات إدارية",
students_cancel: "إلغاء",
students_save: "حفظ التعديلات",
students_submit: "تسجيل الطالب",
students_print: "طباعة بيانات الطالب",
students_print_title: "ملف بيانات الطالب",
students_personal_section: "البيانات الشخصية",
students_academic_section: "البيانات الدراسية",
students_parent_section: "بيانات ولي الأمر",
students_contact_section: "بيانات التواصل",
students_print_date: "تاريخ الطباعة",
students_school_name: "مدرسة الرواد الحديثة",
students_grade_1: "الصف الأول",
students_grade_2: "الصف الثاني",
students_grade_3: "الصف الثالث",
students_grade_4: "الصف الرابع",
students_grade_5: "الصف الخامس",
students_grade_6: "الصف السادس",




/* =========================
   General
========================= */
search: "بحث",
filter: "تصفية",
all: "الكل",
save: "حفظ",
cancel: "إلغاء",
edit: "تعديل",
delete: "حذف",
add: "إضافة",
update: "تحديث",
back: "رجوع",
next: "التالي",
loading: "جاري التحميل...",
no_data: "لا توجد بيانات",
view_all: "عرض الكل",
details: "التفاصيل",
actions: "الإجراءات",
status: "الحالة",
date: "التاريخ",
time: "الوقت",

/* =========================
   E-Learning
========================= */
elearning: "التعلم الإلكتروني",
elearning_title: "منصة التعلم الإلكتروني",
elearning_subtitle: "تعلم بذكاء، وتقدم بثقة، وحقق أهدافك التعليمية",
elearning_courses: "الدورات التعليمية",
elearning_lessons: "الدروس التعليمية",
elearning_students: "الطلاب المسجلون",
elearning_teachers: "المعلمون",
elearning_start_learning: "ابدأ التعلم",
elearning_explore: "استكشف المحتوى التعليمي",
elearning_my_courses: "دوراتي",
elearning_all_courses: "جميع الدورات",
elearning_popular_courses: "الدورات الأكثر مشاهدة",
elearning_featured_courses: "الدورات المميزة",
elearning_new_courses: "أحدث الدورات",
elearning_course_details: "تفاصيل الدورة",
elearning_course_content: "محتوى الدورة",
elearning_course_duration: "مدة الدورة",
elearning_course_level: "المستوى",
elearning_course_teacher: "المعلم",
elearning_course_category: "التصنيف",
elearning_course_description: "وصف الدورة",
elearning_course_lessons: "عدد الدروس",
elearning_beginner: "مبتدئ",
elearning_intermediate: "متوسط",
elearning_advanced: "متقدم",
elearning_progress: "نسبة التقدم",
elearning_completed: "مكتمل",
elearning_continue: "استكمل التعلم",
elearning_watch_lesson: "مشاهدة الدرس",
elearning_download_material: "تحميل المادة التعليمية",
elearning_no_courses: "لا توجد دورات متاحة حاليًا",
elearning_live_classes: "الفصول المباشرة",
elearning_recorded_classes: "المحاضرات المسجلة",
elearning_learning_paths: "المسارات التعليمية",
elearning_certificates: "الشهادات",

/* =========================
   Educational Library
========================= */
library: "المكتبة التعليمية",
library_title: "المكتبة الرقمية",
library_subtitle: "مصادر تعليمية متنوعة لدعم رحلة التعلم",
library_books: "الكتب",
library_articles: "المقالات",
library_videos: "الفيديوهات",
library_resources: "المصادر التعليمية",
library_search: "ابحث في المكتبة...",
library_categories: "التصنيفات",
library_author: "المؤلف",
library_publication_year: "سنة النشر",
library_read_book: "قراءة الكتاب",
library_view_resource: "عرض المصدر",
library_download: "تحميل",
library_no_results: "لا توجد نتائج مطابقة",
library_all_categories: "جميع التصنيفات",

/* =========================
   Exams & Assignments
========================= */
exams: "الامتحانات",
exams_title: "الاختبارات والتقييمات",
exams_upcoming: "الاختبارات القادمة",
exams_completed: "الاختبارات المكتملة",
exams_start: "ابدأ الاختبار",
exams_result: "النتيجة",
exams_score: "الدرجة",
exams_duration: "مدة الاختبار",
exams_questions: "عدد الأسئلة",
exams_remaining_time: "الوقت المتبقي",
exams_submit: "تسليم الإجابات",
exams_no_exams: "لا توجد اختبارات متاحة",
assignments: "الواجبات",
assignments_title: "الواجبات المدرسية",
assignments_submit: "تسليم الواجب",
assignments_due_date: "موعد التسليم",
assignments_submitted: "تم التسليم",
assignments_pending: "قيد الانتظار",

/* =========================
   Teachers
========================= */
teachers: "المعلمون",
teachers_title: "إدارة المعلمين",
teachers_name: "اسم المعلم",
teachers_subject: "المادة الدراسية",
teachers_email: "البريد الإلكتروني",
teachers_phone: "رقم الهاتف",
teachers_add: "إضافة معلم",
teachers_edit: "تعديل بيانات المعلم",
teachers_no_results: "لا يوجد معلمون",

/* =========================
   Parents
========================= */
parents: "أولياء الأمور",
parents_title: "إدارة أولياء الأمور",
parents_name: "اسم ولي الأمر",
parents_phone: "رقم الهاتف",
parents_email: "البريد الإلكتروني",
parents_add: "إضافة ولي أمر",
parents_students: "الأبناء",
parents_no_results: "لا توجد بيانات لأولياء الأمور",

/* =========================
   Classes
========================= */
classes: "الفصول الدراسية",
classes_title: "إدارة الفصول",
classes_name: "اسم الفصل",
classes_stage: "المرحلة الدراسية",
classes_grade: "الصف الدراسي",
classes_students_count: "عدد الطلاب",
classes_teacher: "المعلم المسؤول",
classes_add: "إضافة فصل",
classes_no_results: "لا توجد فصول دراسية",

/* =========================
   Notifications
========================= */
notifications: "الإشعارات",
notifications_title: "مركز الإشعارات",
notifications_all: "جميع الإشعارات",
notifications_unread: "غير المقروءة",
notifications_read: "المقروءة",
notifications_mark_read: "تحديد كمقروء",
notifications_empty: "لا توجد إشعارات",

/* =========================
   Settings
========================= */
settings: "الإعدادات",
settings_title: "إعدادات النظام",
settings_profile: "الملف الشخصي",
settings_account: "إعدادات الحساب",
settings_language: "لغة النظام",
settings_arabic: "العربية",
settings_english: "الإنجليزية",
settings_theme: "المظهر",
settings_save: "حفظ الإعدادات",
logout: "تسجيل الخروج",


/* =========================
   Digital Library Page
========================= */
library_hero_badge: "مكتبة مدرسة الرواد الحديثة الرقمية",
library_hero_title: "عالم من المعرفة",
library_hero_highlight: "بين يديك",
library_hero_desc: "اكتشف مكتبتنا التعليمية الرقمية، واستمتع برحلة من القراءة والبحث والتعلم والإبداع في مختلف المجالات العلمية والمعرفية.",
library_explore_books: "استكشف الكتب",
library_home: "الصفحة الرئيسية",
library_book_count: "كتاب بالمكتبة",
library_sections_count: "أقسام تعليمية",
library_stages_count: "مراحل تعليمية",
library_read_learn: "اقرأ، تعلم، أبدع",
library_knowledge_future: "المعرفة تصنع المستقبل",
library_book_categories: "اكتشف أقسام مكتبتنا",
library_categories_desc: "مجموعة متنوعة من المجالات التعليمية والمعرفية",
library_all_books: "كل الكتب",
library_category_science: "العلوم",
library_category_mathematics: "الرياضيات",
library_category_languages: "اللغات",
library_category_history: "التاريخ",
library_category_technology: "التكنولوجيا",
library_category_stories: "القصص",
library_book_unit: "كتاب",
library_featured_collection: "مجموعة مميزة",
library_popular_title: "الكتب الأكثر تميزاً",
library_popular_desc: "اختيارات مميزة من مكتبتنا التعليمية",
library_featured_book: "كتاب مميز",
library_author_label: "المؤلف:",
library_book_details: "اكتشف تفاصيل الكتاب",
library_digital_library: "مكتبتنا الرقمية",
library_explore_all: "استكشف جميع الكتب",
library_explore_desc: "ابحث وصنّف الكتب حسب المجال والمرحلة التعليمية",
library_search_placeholder: "ابحث باسم الكتاب أو المؤلف...",
library_all_stages: "جميع المراحل التعليمية",
library_stage_primary: "المرحلة الابتدائية",
library_stage_preparatory: "المرحلة الإعدادية",
library_stage_secondary: "المرحلة الثانوية",
library_featured: "مميز",
library_search_results: "نتائج البحث:",
library_reset_search: "إعادة ضبط البحث",
library_no_books: "لم يتم العثور على كتب",
library_try_different_search: "جربي البحث بكلمات مختلفة",
library_reading_title: "القراءة طريقك إلى المستقبل",
library_reading_desc: "في مدرسة الرواد الحديثة نؤمن بأن القراءة هي أساس بناء الشخصية وتنمية الفكر والإبداع لدى أبنائنا الطلاب.",
library_start_journey: "ابدأ رحلتك المعرفية",
library_about_book: "عن هذا الكتاب",
library_about_book_desc: "أحد الكتب المدرجة في مكتبة مدرسة الرواد الحديثة الرقمية.",
library_publication_year_label: "سنة النشر:",
library_close: "إغلاق",
library_close_details: "إغلاق التفاصيل",
library_search_category: "جميع التصنيفات",

library_book_1_title: "رحلة إلى عالم العلوم",
library_book_1_desc: "اكتشف أسرار العلوم والطبيعة من خلال تجارب ومعلومات مبسطة.",
library_book_2_title: "عالم اللغة الإنجليزية",
library_book_2_desc: "رحلة تعليمية لتحسين مهارات اللغة الإنجليزية.",
library_book_3_title: "تاريخ الحضارة المصرية",
library_book_3_desc: "رحلة معرفية عبر تاريخ مصر وحضارتها العريقة.",
library_book_4_title: "أساسيات الرياضيات",
library_book_4_desc: "تعلم الرياضيات بأسلوب مبسط وأمثلة تطبيقية.",
library_book_5_title: "عالم التكنولوجيا",
library_book_5_desc: "تعرف على عالم التكنولوجيا والبرمجة والابتكار.",
library_book_6_title: "قصص الأطفال الممتعة",
library_book_6_desc: "مجموعة من القصص التعليمية لتنمية الخيال والإبداع.",
library_book_7_title: "رحلة في الفضاء",
library_book_7_desc: "اكتشف الكواكب والنجوم وأسرار الكون.",
library_book_8_title: "مهارات القراءة والكتابة",
library_book_8_desc: "تطوير مهارات اللغة العربية والتعبير والقراءة.",
library_book_9_title: "البرمجة من الصفر إلى الاحتراف",
library_book_9_desc: "مقدمة شاملة في البرمجة والتفكير المنطقي وتطوير التطبيقات.",
library_book_10_title: "أسرار عالم الحيوان",
library_book_10_desc: "اكتشف حياة الحيوانات وبيئاتها وطرق تكيفها مع الطبيعة.",
library_book_11_title: "رحلة حول العالم",
library_book_11_desc: "تعرف على ثقافات الشعوب وأهم المعالم التاريخية حول العالم.",
library_book_12_title: "الرياضيات بطريقة ممتعة",
library_book_12_desc: "تمارين وألغاز رياضية لتنمية التفكير والتحليل وحل المشكلات.",
library_book_13_title: "قصص من التراث العربي",
library_book_13_desc: "مجموعة قصص ممتعة تحمل قيماً تربوية وإنسانية.",
library_book_14_title: "دليل قواعد اللغة الإنجليزية",
library_book_14_desc: "دليل عملي لقواعد اللغة الإنجليزية والمفردات والتواصل.",
library_book_15_title: "الذكاء الاصطناعي والمستقبل",
library_book_15_desc: "اكتشف تطبيقات الذكاء الاصطناعي وتأثير التكنولوجيا على حياتنا.",
library_book_16_title: "جغرافيا العالم",
library_book_16_desc: "تعرف على القارات والمحيطات والمناخ والتضاريس.",
library_book_17_title: "مختبر العلوم الصغير",
library_book_17_desc: "تجارب علمية بسيطة وآمنة تساعد الطلاب على التعلم والاكتشاف.",
library_book_18_title: "فن الكتابة والإبداع",
library_book_18_desc: "تعلم التعبير والكتابة الإبداعية وبناء الأفكار وتنظيمها.",

  },

  en: {
    dir: "ltr",

    home: "Home",
    about: "About Us",
    features: "Features",
    blog: "Blog",
    clients: "Clients",
    contact: "Contact Us",

    login: "Login",
    register: "Register",

    logoAlt: "Logo",
    openMenu: "Open Menu",
    closeMenu: "Close Menu",

    bookDemo: "Book a Free Demo",

    student_info: "Everything About Students",

    schools: "Our Schools",
    view_details: "View Details",
    no_schools: "No Schools Found",

    school_default_desc:
      "A school that provides an integrated educational system and excellent educational services.",

    location: "Address",
    phone: "Phone",
    email: "Email",

    footer_cta_badge: "Join Our Educational Family",
    footer_cta_title: "Are you looking for a",
    footer_cta_title_highlight: "Bright Educational Future",
    footer_cta_title_end: "for your children?",

    footer_cta_desc:
      "Registration is now open for the new academic year. Reserve a seat for your children and enjoy a unique learning experience.",

    footer_apply_now: "Apply Now",
    footer_contact_admission: "Contact Admissions",

    footer_brand_desc:
      "A distinguished educational institution aiming to build a conscious and innovative generation through modern educational platforms and a modern educational environment.",

    footer_follow_us: "Follow us on social media",
    footer_quick_links_title: "Quick Links & Explore",

    footer_all_rights_reserved: "All rights reserved to the school",
    footer_privacy_policy: "Privacy Policy",
    footer_terms_conditions: "Terms & Conditions",

    hero_academy_badge: "Smart School Academy",

    hero_title_start: "Develop your skills and move toward",
    hero_title_highlight: "Your Academic Future",

    hero_description:
      "Discover a wide range of educational courses designed to help you develop your skills and achieve your academic goals.",

    explore_courses: "Explore Courses",
    browse_schools: "Browse Schools",

    /* =========================
       Dashboard
    ========================= */

    dashboard_title: "Dashboard",

    dashboard_total_students: "Total Students",
    dashboard_students_desc: "Number of students registered in the system",

    dashboard_total_teachers: "Total Teachers",
    dashboard_teachers_desc: "Number of teachers registered in the system",

    dashboard_total_parents: "Total Parents",
    dashboard_parents_desc: "Number of registered parents",

    dashboard_total_schools: "Total Schools",
    dashboard_schools_desc: "Number of schools registered in the system",

    dashboard_total_courses: "Total Courses",
    dashboard_courses_desc: "Number of available courses",

    dashboard_total_classes: "Total Classes",
    dashboard_classes_desc: "Number of classes in the system",

    dashboard_attendance: "Attendance",
    dashboard_attendance_desc: "Total attendance records",

    dashboard_notifications: "Notifications",
    dashboard_notifications_desc: "Number of available notifications",

    dashboard_elearning: "E-Learning Center",
    dashboard_manage: "Manage and monitor the learning process",

    dashboard_live_classes: "Live Classes",
    dashboard_live_classes_desc: "Classes that students can join right now",

    dashboard_manage_classes: "Manage Classes",

    dashboard_upcoming_classes: "Upcoming Classes",
    dashboard_upcoming_desc: "Scheduled classes in the system",

    dashboard_recorded_videos: "Recorded Videos",
    dashboard_recorded_videos_desc: "Library of recorded classes for students",

    dashboard_courses: "Courses",
    dashboard_courses_section_desc: "All courses available in the system",

    dashboard_manage_courses: "Manage Courses",

    dashboard_articles: "Articles",
    dashboard_articles_desc: "Latest published content",

    dashboard_quick_actions: "Quick Actions",
    dashboard_quick_actions_desc:
      "The most important actions for managing the platform",

    dashboard_live_now: "Live Now",

    dashboard_join_class: "Join Class",
    dashboard_start_class: "Start a Class",
    dashboard_start_live_class: "Start Live Class",

    dashboard_add_course: "Add Course",
    dashboard_add_video: "Add Recorded Video",
    dashboard_add_article: "Add Article",

    dashboard_watch_video: "Watch Video",
    dashboard_view_course: "View Course",
    dashboard_view_all: "View All",

    dashboard_video_library: "Video Library",
    dashboard_educational_content: "Manage Educational Content",

    dashboard_news_content: "News & Content",

    dashboard_teacher: "Teacher",

    dashboard_no_live_classes: "No live classes at the moment",

    dashboard_no_upcoming_classes: "No upcoming classes",

    dashboard_no_recorded_videos: "No recorded videos",

    dashboard_no_courses: "No courses available",

    dashboard_no_articles: "No articles available",

    dashboard_refresh: "Refresh",
    dashboard_warning: "Warning",

    /* =========================
       Contact Us Page
    ========================= */
    title: "Contact Admission & Support",
    subtitle:
      "We are here to answer your inquiries and assist you with everything related to the new academic year.",
    contactInfoTitle: "Contact Information",
    contactInfoDesc:
      "You can visit us at the complex headquarters or communicate via available channels throughout official working days.",
    locationText: "Egypt, Cairo, Main School Complex",
    phoneText: "+20 100 000 0000",
    whatsappText: "+20 100 000 0000 (WhatsApp)",
    whatsappMsg:
      "Hello, I would like to inquire about registration at the school complex",
    emailText: "admission@smartschools.edu.eg",
    workingHours: "Working Hours: Sun - Thu (8:00 AM - 3:00 PM)",
    formTitle: "Send Us a Direct Message",
    successMsg:
      "Your message has been sent successfully! The admission & support team will contact you soon.",
    errorMsg: "An error occurred while sending the message.",
    serverError:
      "Could not connect to the server, make sure Laravel is running.",
    nameLabel: "Full Name",
    namePlaceholder: "Enter your full name",
    emailLabel: "Email Address",
    subjectLabel: "Subject",
    subjectPlaceholder: "Inquiry regarding admission terms and fees",
    messageLabel: "Message",
    messagePlaceholder: "Write your inquiry details here...",
    submitBtn: "Send Message",
    sendingBtn: "Sending Message...",
    langSwitch: "العربية",
    registerTitle: "Create New Account",
    registerSubtitle: "Create your account to access the dashboard",
    fullNameLabel: "Full Name",
    fullNamePlaceholder: "Enter your full name",
    phoneLabel: "Phone Number",
    // emailLabel: "Email Address",
    nextStepBtn: "Next",
    createPasswordTitle: "Create Password",
    createPasswordSubtitle: "Enter a password to secure your account",
    passwordLabel: "Password",
    confirmPasswordLabel: "Confirm Password",
    finishRegisterBtn: "Create Account & Login",
    backStepBtn: "Back to Edit Info",
    secureDataNotice: "All your data is secure and protected",
    errorNameRequired: "Please enter your name",
    errorPhoneRequired: "Please enter your phone number",
    errorEmailRequired: "Please enter your email",
    errorPasswordLength: "Password must be at least 6 characters",
    errorPasswordMatch: "Passwords do not match",


        /* Activity Section */
    activity_title: "Latest School Activity",
    activity_school_name: "Modern Pioneers School",
    activity_print: "Print Log",
    activity_total_students: "Total Students",
    activity_present: "Present",
    activity_absent: "Absent",
    activity_stage: "Stage",
    activity_attendance_rate: "Attendance Rate",
    activity_all: "All",
    activity_by: "By",
    activity_empty: "No activity in this section",

    activity_kind_students: "Students",
    activity_kind_attendance: "Attendance",
    activity_kind_exams: "Exams",
    activity_kind_staff: "Teachers",
    activity_kind_finance: "Finance",

    activity_stage_primary: "Primary",
    activity_stage_prep: "Preparatory",
    activity_stage_secondary: "Secondary",

    activity_day_today: "Today",
    activity_day_yesterday: "Yesterday",
    activity_day_two_days: "2 days ago",

    activity_col_index: "#",
    activity_col_day: "Day",
    activity_col_time: "Time",
    activity_col_section: "Section",
    activity_col_action: "Action",
    activity_col_details: "Details",
    activity_col_by: "By",

activity_entry_1: "New Student Registration",
activity_desc_1: "Ahmed Mahmoud was added to Primary Grade 3",

activity_entry_2: "Attendance Recorded",
activity_desc_2: "Grade 3 Preparatory attendance: 28 out of 30 students",

activity_entry_3: "Exam Results Uploaded",
activity_desc_3: "Mathematics exams for the Preparatory Stage",

activity_entry_4: "Tuition Fees Collected",
activity_desc_4: "First-term tuition payment for Malak Ibrahim",

activity_entry_5: "New Teacher Added",
activity_desc_5: "A Science teacher was appointed for the Secondary Stage",

activity_entry_6: "Attendance Recorded",
activity_desc_6: "Primary Stage attendance: 214 out of 220 students",

activity_entry_7: "Student Transferred",
activity_desc_7: "Karim Wael was transferred to Class 3/A",

activity_entry_8: "Receipt Issued",
activity_desc_8: "Activity fee payment receipt issued for 12 students",

activity_entry_9: "Teacher Profile Updated",
activity_desc_9: "Job information updated for the Arabic language teacher",

activity_entry_10: "Exam Scheduled",
activity_desc_10: "Science exam scheduled for Secondary Grade 2",

activity_entry_11: "Student Information Updated",
activity_desc_11: "Parent information updated for Salma Ashraf",

activity_entry_12: "Absence Recorded",
activity_desc_12: "Youssef Adel was absent and the parent was notified",

activity_entry_13: "Tuition Fees Collected",
activity_desc_13: "Eight tuition fee payments were collected",

activity_entry_14: "Attendance Recorded",
activity_desc_14: "Secondary Stage attendance: 342 out of 350 students",

activity_entry_15: "Two New Students Registered",
activity_desc_15: "Two students were added to Preparatory Grade 1",

activity_entry_16: "Exam Results Uploaded",
activity_desc_16: "English test results for the Primary Stage",

activity_entry_17: "Teacher Leave Registered",
activity_desc_17: "Regular leave approved for the Mathematics teacher",

activity_entry_18: "Salaries Paid",
activity_desc_18: "October payroll sheet approved",

activity_entry_19: "Attendance Recorded",
activity_desc_19: "Preparatory Stage attendance: 187 out of 195 students",

activity_entry_20: "Student ID Card Issued",
activity_desc_20: "ID cards printed for new students",




/* Students Management */
students_title: "Students Management",
students_subtitle: "Manage and monitor all student records and school files",
students_breadcrumb: "Dashboard / Student Affairs",
students_total: "Total Students",
students_active: "Active Students",
students_inactive: "Inactive Students",
students_females: "Female Students",
students_transferred: "Transferred Students",
students_males: "Male Students",
students_academic_year: "Academic Year",
students_distribution: "Students by Academic Stage",
students_primary: "Primary Stage",
students_preparatory: "Preparatory Stage",
students_secondary: "Secondary Stage",
students_of_total: "of total students",
students_export: "Export Excel/CSV",
students_add: "Add New Student",
students_list: "Students Registry",
students_search: "Search for a student...",
students_results: "Results",
students_all_stages: "All Stages",
students_all_statuses: "All Statuses",
students_code: "Student Code",
students_student: "Student",
students_stage_grade: "Stage / Grade",
students_class: "Class",
students_parent: "Parent",
students_actions: "Actions",
students_active_status: "Active",
students_inactive_status: "Inactive",
students_transferred_status: "Transferred",
students_no_results: "No matching results found",
students_file: "Full Profile",
students_edit: "Edit",
students_delete: "Delete",
students_confirm_delete: "Are you sure you want to delete this student?",
students_edit_title: "Edit Student Information",
students_add_title: "Register New Student",
students_basic_info: "Basic information and academic registration",
students_name: "Student Name",
students_national_id: "National ID",
students_email: "Email Address",
students_phone: "Student Phone",
students_parent_name: "Parent Name",
students_parent_phone: "Parent Phone",
students_parent_relation: "Relationship",
students_father: "Father",
students_mother: "Mother",
students_guardian: "Guardian",
students_stage: "Academic Stage",
students_grade: "Grade",
students_gender: "Gender",
students_male: "Male",
students_female: "Female",
students_birth_date: "Date of Birth",
students_admission_date: "Admission Date",
students_address: "Address",
students_bus: "Bus Number",
students_status: "Student Status",
students_notes: "Administrative Notes",
students_cancel: "Cancel",
students_save: "Save Changes",
students_submit: "Register Student",
students_print: "Print Student Information",
students_print_title: "Student Information File",
students_personal_section: "Personal Information",
students_academic_section: "Academic Information",
students_parent_section: "Parent Information",
students_contact_section: "Contact Information",
students_print_date: "Print Date",
students_school_name: "Modern Pioneers School",
students_grade_1: "Grade One",
students_grade_2: "Grade Two",
students_grade_3: "Grade Three",
students_grade_4: "Grade Four",
students_grade_5: "Grade Five",
students_grade_6: "Grade Six",


/* =========================
   General
========================= */
search: "Search",
filter: "Filter",
all: "All",
save: "Save",
cancel: "Cancel",
edit: "Edit",
delete: "Delete",
add: "Add",
update: "Update",
back: "Back",
next: "Next",
loading: "Loading...",
no_data: "No data available",
view_all: "View All",
details: "Details",
actions: "Actions",
status: "Status",
date: "Date",
time: "Time",

/* =========================
   E-Learning
========================= */
elearning: "E-Learning",
elearning_title: "E-Learning Platform",
elearning_subtitle: "Learn smart, grow with confidence, and achieve your educational goals",
elearning_courses: "Educational Courses",
elearning_lessons: "Lessons",
elearning_students: "Registered Students",
elearning_teachers: "Teachers",
elearning_start_learning: "Start Learning",
elearning_explore: "Explore Educational Content",
elearning_my_courses: "My Courses",
elearning_all_courses: "All Courses",
elearning_popular_courses: "Most Popular Courses",
elearning_featured_courses: "Featured Courses",
elearning_new_courses: "Latest Courses",
elearning_course_details: "Course Details",
elearning_course_content: "Course Content",
elearning_course_duration: "Course Duration",
elearning_course_level: "Level",
elearning_course_teacher: "Teacher",
elearning_course_category: "Category",
elearning_course_description: "Course Description",
elearning_course_lessons: "Number of Lessons",
elearning_beginner: "Beginner",
elearning_intermediate: "Intermediate",
elearning_advanced: "Advanced",
elearning_progress: "Progress",
elearning_completed: "Completed",
elearning_continue: "Continue Learning",
elearning_watch_lesson: "Watch Lesson",
elearning_download_material: "Download Learning Material",
elearning_no_courses: "No courses are currently available",
elearning_live_classes: "Live Classes",
elearning_recorded_classes: "Recorded Classes",
elearning_learning_paths: "Learning Paths",
elearning_certificates: "Certificates",

/* =========================
   Educational Library
========================= */
library: "Educational Library",
library_title: "Digital Library",
library_subtitle: "A variety of educational resources to support your learning journey",
library_books: "Books",
library_articles: "Articles",
library_videos: "Videos",
library_resources: "Learning Resources",
library_search: "Search the library...",
library_categories: "Categories",
library_author: "Author",
library_publication_year: "Publication Year",
library_read_book: "Read Book",
library_view_resource: "View Resource",
library_download: "Download",
library_no_results: "No matching results found",
library_all_categories: "All Categories",

/* =========================
   Exams & Assignments
========================= */
exams: "Exams",
exams_title: "Exams & Assessments",
exams_upcoming: "Upcoming Exams",
exams_completed: "Completed Exams",
exams_start: "Start Exam",
exams_result: "Result",
exams_score: "Score",
exams_duration: "Exam Duration",
exams_questions: "Number of Questions",
exams_remaining_time: "Remaining Time",
exams_submit: "Submit Answers",
exams_no_exams: "No exams available",
assignments: "Assignments",
assignments_title: "School Assignments",
assignments_submit: "Submit Assignment",
assignments_due_date: "Due Date",
assignments_submitted: "Submitted",
assignments_pending: "Pending",

/* =========================
   Teachers
========================= */
teachers: "Teachers",
teachers_title: "Teachers Management",
teachers_name: "Teacher Name",
teachers_subject: "Subject",
teachers_email: "Email Address",
teachers_phone: "Phone Number",
teachers_add: "Add Teacher",
teachers_edit: "Edit Teacher Information",
teachers_no_results: "No teachers found",

/* =========================
   Parents
========================= */
parents: "Parents",
parents_title: "Parents Management",
parents_name: "Parent Name",
parents_phone: "Phone Number",
parents_email: "Email Address",
parents_add: "Add Parent",
parents_students: "Children",
parents_no_results: "No parent information found",

/* =========================
   Classes
========================= */
classes: "Classes",
classes_title: "Classes Management",
classes_name: "Class Name",
classes_stage: "Academic Stage",
classes_grade: "Grade",
classes_students_count: "Number of Students",
classes_teacher: "Class Teacher",
classes_add: "Add Class",
classes_no_results: "No classes found",

/* =========================
   Notifications
========================= */
notifications: "Notifications",
notifications_title: "Notifications Center",
notifications_all: "All Notifications",
notifications_unread: "Unread",
notifications_read: "Read",
notifications_mark_read: "Mark as Read",
notifications_empty: "No notifications available",

/* =========================
   Settings
========================= */
settings: "Settings",
settings_title: "System Settings",
settings_profile: "Profile",
settings_account: "Account Settings",
settings_language: "System Language",
settings_arabic: "Arabic",
settings_english: "English",
settings_theme: "Theme",
settings_save: "Save Settings",
logout: "Logout",


/* =========================
   Digital Library Page
========================= */
library_hero_badge: "Modern Pioneers School Digital Library",
library_hero_title: "A World of Knowledge",
library_hero_highlight: "At Your Fingertips",
library_hero_desc: "Explore our digital educational library and enjoy a journey of reading, research, learning, and creativity across various fields of knowledge.",
library_explore_books: "Explore Books",
library_home: "Home Page",
library_book_count: "Books in Library",
library_sections_count: "Educational Categories",
library_stages_count: "Educational Stages",
library_read_learn: "Read, Learn, Create",
library_knowledge_future: "Knowledge Builds the Future",
library_book_categories: "Explore Our Library Categories",
library_categories_desc: "A diverse collection of educational and knowledge fields",
library_all_books: "All Books",
library_category_science: "Science",
library_category_mathematics: "Mathematics",
library_category_languages: "Languages",
library_category_history: "History",
library_category_technology: "Technology",
library_category_stories: "Stories",
library_book_unit: "Books",
library_featured_collection: "Featured Collection",
library_popular_title: "Featured Books",
library_popular_desc: "Special selections from our educational library",
library_featured_book: "Featured Book",
library_author_label: "Author:",
library_book_details: "Explore Book Details",
library_digital_library: "OUR DIGITAL LIBRARY",
library_explore_all: "Explore All Books",
library_explore_desc: "Search and filter books by category and educational stage",
library_search_placeholder: "Search by book title or author...",
library_all_stages: "All Educational Stages",
library_stage_primary: "Primary Stage",
library_stage_preparatory: "Preparatory Stage",
library_stage_secondary: "Secondary Stage",
library_featured: "Featured",
library_search_results: "Search Results:",
library_reset_search: "Reset Search",
library_no_books: "No Books Found",
library_try_different_search: "Try searching with different keywords",
library_reading_title: "Reading Is Your Path to the Future",
library_reading_desc: "At Modern Pioneers School, we believe reading is the foundation of building character and developing our students' thinking and creativity.",
library_start_journey: "Start Your Knowledge Journey",
library_about_book: "About This Book",
library_about_book_desc: "One of the books listed in the Modern Pioneers School Digital Library.",
library_publication_year_label: "Publication Year:",
library_close: "Close",
library_close_details: "Close Details",
library_search_category: "All Categories",

library_book_1_title: "A Journey into the World of Science",
library_book_1_desc: "Discover the secrets of science and nature through simple experiments and information.",
library_book_2_title: "The World of English",
library_book_2_desc: "An educational journey to improve English language skills.",
library_book_3_title: "History of Egyptian Civilization",
library_book_3_desc: "An educational journey through the history and ancient civilization of Egypt.",
library_book_4_title: "Mathematics Basics",
library_book_4_desc: "Learn mathematics through simple explanations and practical examples.",
library_book_5_title: "The World of Technology",
library_book_5_desc: "Discover the world of technology, programming, and innovation.",
library_book_6_title: "Fun Children's Stories",
library_book_6_desc: "A collection of educational stories that develop imagination and creativity.",
library_book_7_title: "Journey Through Space",
library_book_7_desc: "Discover planets, stars, and the secrets of the universe.",
library_book_8_title: "Reading and Writing Skills",
library_book_8_desc: "Develop Arabic language, expression, and reading skills.",
library_book_9_title: "Programming from Zero to Professional",
library_book_9_desc: "A comprehensive introduction to programming, logical thinking, and application development.",
library_book_10_title: "Secrets of the Animal World",
library_book_10_desc: "Discover animal life, habitats, and how animals adapt to nature.",
library_book_11_title: "Around the World",
library_book_11_desc: "Explore different cultures and the most important historical landmarks around the world.",
library_book_12_title: "Fun Mathematics",
library_book_12_desc: "Mathematical exercises and puzzles to develop thinking, analysis, and problem-solving skills.",
library_book_13_title: "Stories from Arab Heritage",
library_book_13_desc: "A collection of enjoyable stories with educational and human values.",
library_book_14_title: "English Grammar Guide",
library_book_14_desc: "A practical guide to English grammar, vocabulary, and communication.",
library_book_15_title: "Artificial Intelligence and the Future",
library_book_15_desc: "Discover AI applications and the impact of technology on our lives.",
library_book_16_title: "World Geography",
library_book_16_desc: "Explore continents, oceans, climate, and landforms.",
library_book_17_title: "The Little Science Lab",
library_book_17_desc: "Simple and safe science experiments that help students learn and explore.",
library_book_18_title: "The Art of Writing and Creativity",
library_book_18_desc: "Learn expression, creative writing, and how to build and organize ideas.",
  },
};

type Translation = typeof translations.ar;

interface LanguageContextType {
  language: Language;
  t: Translation;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("ar");

  useEffect(() => {
    const savedLang = localStorage.getItem("lang");

    if (savedLang === "ar" || savedLang === "en") {
      setLanguage(savedLang);
    }
  }, []);

  useEffect(() => {
    document.documentElement.dir = translations[language].dir;

    document.documentElement.lang = language;

    localStorage.setItem("lang", language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "ar" ? "en" : "ar"));
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        t: translations[language],
        toggleLanguage,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }

  return context;
}
