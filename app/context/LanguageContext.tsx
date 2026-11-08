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
