
export interface Feature {
  id: number;
  title_ar: string;
  title_en: string;
  description_ar: string;
  description_en: string;
}

export const featuresData: Feature[] = [
  {
    id: 1,
    title_ar: "المنطقة الإدارية",
    title_en: "Administrative Area",
    description_ar:
      "إدارة الهيكل التنظيمي للمدرسة والمراحل الدراسية والصفوف. إعداد السنوات الدراسية والأقسام وتحديد صلاحيات المستخدمين والمدراء. متابعة القرارات الإدارية والتعاميم الرسمية للجامعة أو المجمع المدرسي.\n\nتنظيم الملفات الإدارية وتخصيص الصلاحيات للموظفين والمعلمين. إدارة الصلاحيات والأدوار، متابعة الأنشطة اليومية للمدرسة، وإصدار الخطابات الرسمية والتقارير التنفيذية الشاملة للقيادة الإدارية.",
    description_en:
      "Manage organizational structure, educational stages, and grade levels. Configure academic years, departments, and define role-based access controls. Track administrative decisions and official directives.\n\nOrganize administrative records and staff permissions. Oversee daily school operations, issue official documentation, and generate executive summaries for school leadership.",
  },
  {
    id: 2,
    title_ar: "إدارة شئون الطلاب",
    title_en: "Student Affairs Management",
    description_ar:
      "قبول وتسجيل الطلاب الجدد وتنظيم ملفاتهم الأكاديمية والطبية. متابعة الحضور والغياب اليومي والتأخير، وإدارة نقل الطلاب بين الصفوف والفصول أو المدارس الأخرى.\n\nاستخراج الشهادات وإثباتات القيد، متابعة أولياء الأمور عبر الرسائل الإشعارية، وإنشاء قوائم الطلاب والطباعة الذكية لبطاقات التعريف والتقارير الإحصائية للمراحل التعليمية.",
    description_en:
      "Handle new student admissions, registration, and academic/medical record management. Track daily attendance, absence, and tardiness, as well as class transfers and school migrations.\n\nIssue certificates and enrollment proofs, notify parents, generate student rosters, print ID cards, and produce statistical reports across educational levels.",
  },
  {
    id: 3,
    title_ar: "إدارة حسابات الطلاب",
    title_en: "Student Accounts Management",
    description_ar:
      "تحديد الرسوم الدراسية والخدمات الإضافية مثل النقل والأنشطة. إصدار الفواتير وتحصيل الأقساط وتسجيل المبالغ المدفوعة والمتبقية مع دعم خيارات الدفع الإلكتروني والتقسيط.\n\nإدارة الخصومات والمنح الدراسية للطلاب، متابعة المتأخرات وإرسال مطالبات مالية لأولياء الأمور، وإصدار سندات القبض والإرجاع والتقارير المالية الفردية والشاملة.",
    description_en:
      "Define tuition fees and auxiliary service charges, including transportation and activities. Issue invoices, collect installments, and record payments with multi-channel and installment options.\n\nManage financial discounts and scholarships, track overdue payments, issue financial notices to parents, print receipts, and generate detailed student ledger reports.",
  },
  {
    id: 4,
    title_ar: "إدارة الحسابات العامة",
    title_en: "General Ledger & Financial Management",
    description_ar:
      "إدارة شجرة الحسابات والدفاتر المالية والدليل المحاسبي. تسجيل قيود اليومية، مراكز التكلفة، ومتابعة سندات الصرف والقبض وإدارة الحسابات البنكية والمصروفات الإدارية.\n\nتسوية الحسابات، متابعة الإيرادات والمصروفات العامة، وإصدار التقارير المالية التفصيلية مثل ميزان المراجعة، قائمة الدخل، القوائم المالية، والتقرير المالي النهائي للمؤسسة.",
    description_en:
      "Manage chart of accounts, ledgers, and accounting structures. Record journal entries, cost centers, payment/receipt vouchers, bank accounts, and operational expenses.\n\nPerform account reconciliations, track income and expenditures, and generate comprehensive trial balances, income statements, and end-of-year financial reports.",
  },
  {
    id: 5,
    title_ar: "المرشد الطلابي",
    title_en: "Student Counselor Management",
    description_ar:
      "إضافة تصنيف للمخالفات. إضافة مخالفات على الطلاب. عمل دراسة حالة لطالب معين. عمل تقرير لمخالفات الطلاب. إرسال رسائل SMS لأولياء الأمور لإبلاغهم بمخالفات الطلاب.\n\nمتابعة السلوك الطلابي والحالات الخاصة بالطلاب. تسجيل الملاحظات اليومية والتوصيات الخاصة بكل طالب. إنشاء ملف سلوكي كامل للطالب. متابعة الإجراءات التأديبية وخطط تحسين السلوك. تسجيل الحالات الاجتماعية والنفسية للطلاب. إنشاء تقارير تفصيلية عن المخالفات والحالات الطلابية.",
    description_en:
      "Create violation categories. Add student violations. Create student case studies. Generate violation reports. Send SMS messages to parents about student violations.\n\nMonitor student behavior and special cases. Record daily notes and recommendations for each student. Create complete behavioral records. Track disciplinary actions and behavior improvement plans. Record social and psychological cases. Generate detailed reports about student violations and cases.",
  },
  {
    id: 6,
    title_ar: "إدارة البوابة والاستقبال",
    title_en: "Gate and Reception Management",
    description_ar:
      "تسجيل الزيارات. إنهاء الزيارات. تقرير الزيارات. تسجيل مدخلات البوابة. استقبال المكالمات. تقارير المكالمات. تقرير مدخلات البوابة.\n\nإدارة حركة الدخول والخروج داخل المدرسة. تسجيل بيانات الزوار وأولياء الأمور. متابعة مواعيد الزيارات وتصاريح الدخول. حفظ سجل كامل للزوار والمكالمات. إنشاء تقارير يومية وشهرية عن حركة البوابة والاستقبال. تنظيم إجراءات الأمن والسلامة داخل المدرسة.",
    description_en:
      "Register visits. Complete visits. Generate visit reports. Manage gate entries. Receive calls and generate call reports.\n\nManage school entry and exit movements. Record visitor and parent information. Track visit schedules and entry permissions. Maintain complete visitor and call records. Generate daily and monthly gate activity reports. Organize school security and safety procedures.",
  },
  {
    id: 7,
    title_ar: "إدارة عيادة المدرسة",
    title_en: "School Clinic Management",
    description_ar:
      "تسجيل العيادات والأطباء والتخصصات والتشخيصات. عمل ملف طبي خاص لكل طالب. إضافة كشف طبي. عمل تقرير بجميع الكشوفات الطبية.\n\nإدارة الملف الصحي الكامل للطلاب. تسجيل الزيارات الطبية والأدوية والتشخيصات. متابعة الحالات الطارئة داخل المدرسة. إدارة بيانات الأطباء والممرضين والمستلزمات الطبية. تسجيل التطعيمات والحالات المرضية المزمنة. إنشاء تقارير صحية تفصيلية لكل طالب.",
    description_en:
      "Register clinics, doctors, specialties, and diagnoses. Create medical files for students. Add medical examinations and generate medical reports.\n\nManage complete student health records. Record medical visits, medications, and diagnoses. Handle emergency cases inside the school. Manage doctors, nurses, and medical supplies. Record vaccinations and chronic diseases. Generate detailed health reports for each student.",
  },
  {
    id: 8,
    title_ar: "إدارة المكتبات",
    title_en: "Library Management",
    description_ar:
      "تحديد أقسام المكتبة. وضع إعدادات المكتبة. إضافة كتاب يدوياً. عمل استعارة للكتب وإعادتها. عمل تقارير متعددة مثل الكتب المستعارة التي لم ترجع بعد وعرض تفاصيل الكتاب والكتب المستهلكة خلال فترة. عمل إهلاك للكتب. تقرير الكتب المفقودة. تقرير تاريخ الاستعارة لكل طالب. عمل بحث بالمكتبة. جرد المخزن بالباركود.\n\nإدارة جميع الكتب والمراجع داخل المدرسة. تصنيف الكتب حسب الأقسام والمراحل التعليمية. تسجيل بيانات المؤلفين والناشرين. متابعة حركة استعارة وإرجاع الكتب للطلاب والمعلمين. استخدام الباركود في البحث والجرد. إنشاء تقارير عن الكتب الأكثر استخداماً والكتب المفقودة والمتأخرة. متابعة حالة الكتب وإدارة مخزون المكتبة.",
    description_en:
      "Define library sections. Configure library settings. Add books manually. Manage book borrowing and returning. Generate reports for overdue books, book details, consumed books, damaged books, lost books, borrowing history, library search, and barcode inventory.\n\nManage all school books and references. Categorize books by sections and educational levels. Store author and publisher information. Track borrowing and returning operations for students and teachers. Use barcode technology for searching and inventory. Generate reports for popular, lost, and overdue books. Monitor book conditions and library inventory.",
  },
  {
    id: 9,
    title_ar: "إدارة الموارد البشرية",
    title_en: "Human Resources Management",
    description_ar:
      "إدارة ملفات الموظفين والمعلمين الوظيفية والشخصية. متابعة الحضور والغياب والإجازات عبر أنظمة البصمة، وتنظيم وتقييم الأداء والمكافآت والجزاءات.\n\nحساب وتجهيز مسيرات الرواتب والبدلات والاستقطاعات الشاملة، متابعة العقود ووثائق التأمين والشهادات، وإصدار التقارير الهيكلية الشاملة للكادر التعليمي والإداري.",
    description_en:
      "Manage employee and teacher personal/professional profiles. Track attendance, absences, and leaves via biometric integration. Evaluate staff performance and bonuses.\n\nProcess payrolls, allowances, and deductions. Track employment contracts, insurance documents, and certificates, while generating administrative and manpower reports.",
  },
  {
    id: 10,
    title_ar: "إدارة الكنترول المدرسي",
    title_en: "School Examination Control",
    description_ar:
      "إعداد لجان الامتحانات وتوزيع أرقام الجلوس وأكواد الطلاب. رصد الدرجات للاختبارات النصفية والنهائية وتصحيح الاختبارات الشفهية والتحريرية.\n\nحساب التقديرات والمعدلات، تطبيق قواعد الرأفة والترفيع، طباعة كشوف الدرجات والشهادات الرسمية، وإصدار تقارير تحليل النتائج والإحصائيات لكل فصل ومادة.",
    description_en:
      "Set up examination committees, seating numbers, and student codes. Record mid-term and final exam marks for written and oral examinations.\n\nCalculate GPAs, handle grading boundaries, print official transcripts and report cards, and generate performance analytics per class and subject.",
  },
  {
    id: 11,
    title_ar: "إدارة المخازن",
    title_en: "Inventory Management",
    description_ar:
      "إدارة المخازن والأصناف والكتب والأزياء المدرسية. متابعة حركة الوارد والمصروف، إجراء عمليات الجرد الدوري والسنوي بالباركود وتحديد حد الطلب للمحتويات.\n\nإصدار أذون الإضافة والصرف، ربط المخزن بالمسؤولين والجهات المستلمة، وتقييم حركة المخزون من خلال تقارير النواقص والهوالك والعهدة.",
    description_en:
      "Manage inventory, stock items, textbooks, and school uniforms. Track stock inbound/outbound movements, perform barcode counts, and set reorder levels.\n\nIssue stock adjustment and disbursement notes, assign responsibilities, and analyze inventory performance via shortage, damaged, and stock balance reports.",
  },
  {
    id: 12,
    title_ar: "جدول الحصص المدرسي",
    title_en: "School Timetable Management",
    description_ar:
      "إعداد وتقسيم الجدول المدرسي تلقائياً أو يدوياً. توزيع الحصص الدراسية على المعلمين والفصول بناءً على النصاب المعتمد وتجنب التعارضات.\n\nإدارة حصص الانتظار وتغطية الغيابات الطارئة للمعلمين، طباعة الجداول الفردية للمدرسين والجداول العامة للفصول والمراحل، وإشعار المعلمين بالتغييرات.",
    description_en:
      "Generate and organize school timetables automatically or manually. Assign subject periods to teachers and classes, balancing workloads and avoiding conflicts.\n\nManage teacher substitutions and cover classes, print individual timetables and class schedules, and notify staff of schedule adjustments.",
  },
  {
    id: 13,
    title_ar: "إدارة الحافلات",
    title_en: "School Bus & Transport Management",
    description_ar:
      "إدارة أسطول الحافلات المدرسية والسائقين والمشرفين. تحديد الخطوط والمناطق الجغرافية وتسكين الطلاب على الحافلات حسب المواعيد والعناوين.\n\nمتابعة صيانة الحافلات، الوقود، والتراخيص، إضافة إلى متابعة صعود ونزول الطلاب مع إمكانية التتبع وإرسال تنبيهات لحظية لأولياء الأمور لتأمين سلامة الرحلة.",
    description_en:
      "Manage bus fleets, drivers, and supervisors. Map bus routes and zones, assigning students based on location and pickup schedules.\n\nTrack vehicle maintenance, fuel expenses, and licensing, as well as student pickup/drop-off logs with real-time notifications for parents.",
  },
];
