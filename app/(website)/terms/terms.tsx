
"use client";

import { useState } from "react";
import { useLanguage } from "../../context/LanguageContext";

type Section = {
  id: string;
  title: string;
  icon: string;
  content: string[];
};

export default function TermsPage() {
  const { language } = useLanguage();
  const isAr = language === "ar";

  const [activeSection, setActiveSection] = useState("introduction");
  const [accepted, setAccepted] = useState(false);
  const [showAcceptance, setShowAcceptance] = useState(false);

  const sections: Section[] = [
    {
      id: "introduction",
      title: isAr ? "مقدمة الشروط والأحكام" : "Introduction",
      icon: "📘",
      content: isAr
        ? [
            "مرحبًا بكم في الموقع الإلكتروني لمدرسة الرواد الحديثة. توضح هذه الصفحة الشروط والأحكام المنظمة لاستخدام الموقع والخدمات الرقمية المقدمة من خلاله.",
            "باستخدامك لهذا الموقع أو أي من خدماته، فإنك تقر بأنك قرأت هذه الشروط وفهمتها وتوافق على الالتزام بها.",
            "إذا كنت لا توافق على أي جزء من هذه الشروط، يرجى التوقف عن استخدام الخدمات الإلكترونية والتواصل مع إدارة المدرسة للاستفسار.",
          ]
        : [
            "Welcome to Al Rowad Modern School website. These Terms and Conditions govern your access to and use of our website and digital services.",
            "By accessing this website or using any of its services, you acknowledge that you have read, understood, and agreed to comply with these terms.",
            "If you do not agree with any part of these terms, please discontinue using the digital services and contact the school administration.",
          ],
    },
    {
      id: "eligibility",
      title: isAr ? "أهلية الاستخدام" : "Eligibility",
      icon: "👥",
      content: isAr
        ? [
            "يُسمح باستخدام الموقع للطلاب وأولياء الأمور وأعضاء هيئة التدريس والعاملين والزوار وفقًا لطبيعة الخدمات المتاحة لكل فئة.",
            "يجب أن تكون البيانات المقدمة أثناء التسجيل أو استخدام الخدمات صحيحة ودقيقة ومحدثة.",
            "يتحمل ولي الأمر مسؤولية متابعة استخدام الطالب للخدمات الإلكترونية بما يتناسب مع عمره ومرحلته التعليمية.",
          ]
        : [
            "The website may be used by students, parents, teachers, staff members, and visitors according to the services available to each category.",
            "Information provided during registration or while using our services must be accurate, complete, and up to date.",
            "Parents or legal guardians are responsible for supervising students' use of digital services according to their age and educational level.",
          ],
    },
    {
      id: "accounts",
      title: isAr ? "الحسابات وكلمات المرور" : "Accounts & Passwords",
      icon: "🔐",
      content: isAr
        ? [
            "قد تتطلب بعض الخدمات إنشاء حساب خاص بالطالب أو ولي الأمر أو الموظف.",
            "يجب الحفاظ على سرية بيانات تسجيل الدخول وعدم مشاركتها مع أي شخص غير مصرح له.",
            "يتحمل صاحب الحساب مسؤولية الأنشطة التي تتم من خلال حسابه، مع ضرورة إبلاغ إدارة المدرسة فور الاشتباه في استخدام غير مصرح به.",
            "يجوز للمدرسة تعليق الحساب أو تقييد الوصول إليه عند وجود أسباب أمنية أو إدارية تستدعي ذلك.",
          ]
        : [
            "Some services may require creating an account for students, parents, or staff members.",
            "Login credentials must be kept confidential and must not be shared with unauthorized individuals.",
            "Account holders are responsible for activities conducted through their accounts and should notify the school immediately if unauthorized access is suspected.",
            "The school may suspend or restrict access to an account for security or administrative reasons when necessary.",
          ],
    },
    {
      id: "services",
      title: isAr ? "الخدمات التعليمية والإلكترونية" : "Educational & Digital Services",
      icon: "🎓",
      content: isAr
        ? [
            "يقدم الموقع مجموعة من الخدمات التعليمية والإدارية، وقد تشمل المناهج الرقمية والدورات والواجبات والاختبارات والنتائج والإعلانات والأنشطة المدرسية.",
            "قد تختلف الخدمات المتاحة حسب المرحلة الدراسية والصلاحيات الممنوحة لكل مستخدم.",
            "تحتفظ المدرسة بحق تحديث الخدمات أو تطويرها أو إيقاف بعضها عند الحاجة، مع مراعاة إبلاغ المستخدمين بالتغييرات المهمة متى أمكن.",
            "المحتوى الإلكتروني المقدم عبر الموقع يهدف إلى دعم العملية التعليمية ولا يغني بالضرورة عن التعليم المباشر أو تعليمات المعلمين.",
          ]
        : [
            "The website provides educational and administrative services, which may include digital learning materials, courses, assignments, assessments, results, announcements, and school activities.",
            "Available services may vary depending on the educational stage and permissions assigned to each user.",
            "The school reserves the right to update, improve, or discontinue services when necessary and will communicate significant changes whenever possible.",
            "Digital content is intended to support the educational process and does not necessarily replace direct instruction or teachers' guidance.",
          ],
    },
    {
      id: "acceptable-use",
      title: isAr ? "الاستخدام المقبول" : "Acceptable Use",
      icon: "✅",
      content: isAr
        ? [
            "يجب استخدام الموقع بطريقة قانونية ومسؤولة تحترم حقوق الآخرين وسياسات المدرسة.",
            "يُمنع استخدام الموقع لنشر محتوى مسيء أو غير لائق أو مضلل أو مخالف للقوانين.",
            "يُمنع محاولة الوصول إلى حسابات الآخرين أو الأنظمة الداخلية دون تصريح.",
            "يُمنع تعطيل الموقع أو محاولة اختراقه أو التأثير على أدائه أو أمنه.",
            "يجب احترام المعلمين والطلاب والعاملين عند استخدام أدوات التواصل أو التعليقات المتاحة.",
          ]
        : [
            "The website must be used lawfully and responsibly, respecting the rights of others and the school's policies.",
            "Users must not publish offensive, inappropriate, misleading, or unlawful content.",
            "Unauthorized access to other users' accounts or internal systems is prohibited.",
            "Users must not disrupt, attack, or attempt to compromise the website's performance or security.",
            "Respectful communication with teachers, students, and staff is required when using available communication tools.",
          ],
    },
    {
      id: "intellectual-property",
      title: isAr ? "الملكية الفكرية" : "Intellectual Property",
      icon: "©️",
      content: isAr
        ? [
            "جميع الحقوق المتعلقة بالتصميم والهوية البصرية والنصوص والصور والمواد التعليمية والشعارات والعناصر المنشورة على الموقع محفوظة لأصحابها أو للمدرسة وفقًا للحقوق المقررة.",
            "لا يجوز نسخ أو إعادة نشر أو توزيع أو استغلال محتوى الموقع لأغراض تجارية دون الحصول على إذن كتابي مسبق من صاحب الحق.",
            "يجوز للمستخدم الاطلاع على المحتوى واستخدامه للأغراض التعليمية والشخصية المصرح بها فقط.",
          ]
        : [
            "Rights relating to the website design, visual identity, text, images, educational materials, logos, and published content belong to their respective owners or the school, as applicable.",
            "Content may not be copied, republished, distributed, or commercially exploited without prior written permission from the rights holder.",
            "Users may access and use the content only for authorized educational and personal purposes.",
          ],
    },
    {
      id: "student-responsibilities",
      title: isAr ? "مسؤوليات الطلاب وأولياء الأمور" : "Student & Parent Responsibilities",
      icon: "🏫",
      content: isAr
        ? [
            "يلتزم الطلاب باستخدام المنصة التعليمية في الأغراض الدراسية المحددة لهم.",
            "يجب على الطلاب احترام قواعد السلوك المدرسي عند استخدام الخدمات الرقمية.",
            "يلتزم أولياء الأمور بمتابعة حسابات أبنائهم والاطلاع على الإعلانات والواجبات والنتائج المتاحة.",
            "يجب عدم مشاركة بيانات الطالب الشخصية أو بيانات الدخول عبر منصات غير معتمدة.",
            "ينبغي الإبلاغ عن أي محتوى غير مناسب أو مشكلة تقنية تؤثر على استخدام الطالب للموقع.",
          ]
        : [
            "Students must use the learning platform for its intended educational purposes.",
            "Students are expected to follow school conduct rules when using digital services.",
            "Parents should monitor their children's accounts and review available announcements, assignments, and results.",
            "Student personal information and login credentials should not be shared through unauthorized platforms.",
            "Any inappropriate content or technical issue affecting student access should be reported.",
          ],
    },
    {
      id: "payments",
      title: isAr ? "الرسوم والمدفوعات" : "Fees & Payments",
      icon: "💳",
      content: isAr
        ? [
            "في حال توفير خدمات إلكترونية تتضمن رسومًا أو مدفوعات، يتم توضيح التفاصيل للمستخدم قبل إتمام العملية.",
            "تخضع الرسوم والمواعيد وطرق السداد للسياسات المالية والإدارية المعتمدة لدى المدرسة.",
            "لا تعتبر أي عملية دفع مكتملة إلا بعد ظهور تأكيد واضح من وسيلة الدفع أو الجهة المختصة.",
            "للاستفسار عن الرسوم أو المدفوعات، يرجى التواصل مع الإدارة المالية بالمدرسة.",
          ]
        : [
            "If any digital service involves fees or payments, the relevant details will be presented before the transaction is completed.",
            "Fees, deadlines, and payment methods are subject to the school's approved financial and administrative policies.",
            "A payment is not considered completed until confirmation is provided by the payment method or relevant authority.",
            "For payment inquiries, please contact the school's finance administration.",
          ],
    },
    {
      id: "privacy",
      title: isAr ? "الخصوصية وحماية البيانات" : "Privacy & Data Protection",
      icon: "🛡️",
      content: isAr
        ? [
            "تسعى المدرسة إلى حماية البيانات الشخصية التي يتم تقديمها من خلال الموقع والتعامل معها بمسؤولية.",
            "قد يتم استخدام البيانات لتقديم الخدمات التعليمية والإدارية وتحسين تجربة المستخدم والتواصل مع أولياء الأمور.",
            "يجب على المستخدمين عدم إدخال بيانات شخصية غير ضرورية في النماذج أو المساحات العامة.",
            "لمعرفة المزيد عن كيفية جمع البيانات واستخدامها، يرجى مراجعة صفحة سياسة الخصوصية الخاصة بالموقع.",
          ]
        : [
            "The school aims to protect personal information submitted through the website and handle it responsibly.",
            "Information may be used to provide educational and administrative services, improve user experience, and communicate with parents.",
            "Users should avoid entering unnecessary personal information in forms or public areas.",
            "For more information about data collection and use, please review the website's Privacy Policy.",
          ],
    },
    {
      id: "availability",
      title: isAr ? "توافر الموقع والتحديثات" : "Website Availability & Updates",
      icon: "🌐",
      content: isAr
        ? [
            "تسعى المدرسة إلى توفير الموقع والخدمات الإلكترونية بصورة مستقرة، إلا أنه لا يمكن ضمان استمرار توافرها دون انقطاع.",
            "قد يتم إجراء أعمال صيانة أو تحديثات تقنية قد تؤدي إلى توقف مؤقت لبعض الخدمات.",
            "قد تختلف تجربة الاستخدام حسب نوع الجهاز والمتصفح وسرعة الاتصال بالإنترنت.",
            "لا تتحمل المدرسة مسؤولية الأعطال الناتجة عن مشكلات خارجة عن نطاق سيطرتها، وذلك في الحدود التي يسمح بها القانون.",
          ]
        : [
            "The school aims to maintain stable access to its website and digital services, but uninterrupted availability cannot be guaranteed.",
            "Maintenance or technical updates may temporarily affect some services.",
            "User experience may vary depending on the device, browser, and internet connection.",
            "The school is not responsible for disruptions caused by circumstances beyond its reasonable control, to the extent permitted by law.",
          ],
    },
    {
      id: "third-party",
      title: isAr ? "الروابط والخدمات الخارجية" : "Third-Party Links & Services",
      icon: "🔗",
      content: isAr
        ? [
            "قد يحتوي الموقع على روابط لمواقع أو خدمات خارجية بهدف توفير معلومات أو موارد إضافية.",
            "لا تتحكم المدرسة بالضرورة في محتوى أو سياسات المواقع الخارجية، ولا يعني وجود رابط اعتماد المدرسة لجميع محتويات تلك المواقع.",
            "يُنصح بمراجعة شروط الاستخدام وسياسات الخصوصية الخاصة بأي خدمة خارجية قبل استخدامها.",
          ]
        : [
            "The website may include links to external websites or services to provide additional information or resources.",
            "The school does not necessarily control the content or policies of external websites, and linking to them does not imply endorsement of all their content.",
            "Users are encouraged to review the terms and privacy policies of external services before using them.",
          ],
    },
    {
      id: "suspension",
      title: isAr ? "تعليق الحساب أو إنهاء الاستخدام" : "Suspension & Termination",
      icon: "⛔",
      content: isAr
        ? [
            "يجوز للمدرسة تقييد أو تعليق الوصول إلى بعض الخدمات في حالة مخالفة هذه الشروط أو إساءة استخدام المنصة.",
            "قد يتم اتخاذ الإجراءات الإدارية المناسبة عند وجود تهديد لأمن الموقع أو خصوصية المستخدمين.",
            "يمكن للمستخدم التواصل مع إدارة المدرسة للاستفسار عن أسباب تعليق الحساب أو طلب مراجعة القرار وفق الإجراءات المعتمدة.",
          ]
        : [
            "The school may restrict or suspend access to certain services if these terms are violated or the platform is misused.",
            "Appropriate administrative action may be taken when the website's security or users' privacy is threatened.",
            "Users may contact the school administration to inquire about account suspension or request a review in accordance with applicable procedures.",
          ],
    },
    {
      id: "liability",
      title: isAr ? "حدود المسؤولية" : "Limitation of Liability",
      icon: "⚖️",
      content: isAr
        ? [
            "يتم تقديم الموقع والخدمات الرقمية وفق الإمكانيات التقنية المتاحة، وتسعى المدرسة إلى ضمان دقة المعلومات وتحديثها.",
            "قد تحدث أخطاء أو تأخيرات تقنية أو انقطاعات مؤقتة، وتعمل المدرسة على معالجة المشكلات التي يتم الإبلاغ عنها.",
            "لا تؤثر هذه الشروط على الحقوق أو المسؤوليات التي لا يجوز استبعادها أو تقييدها بموجب القانون المعمول به.",
          ]
        : [
            "The website and digital services are provided using available technical resources, and the school aims to keep information accurate and updated.",
            "Technical errors, delays, or temporary interruptions may occur, and the school will work to address reported issues.",
            "Nothing in these terms excludes or limits rights or liabilities that cannot be excluded under applicable law.",
          ],
    },
    {
      id: "changes",
      title: isAr ? "تعديل الشروط والأحكام" : "Changes to These Terms",
      icon: "🔄",
      content: isAr
        ? [
            "يجوز للمدرسة تحديث هذه الشروط والأحكام من وقت لآخر بما يتناسب مع تطوير الخدمات أو التغييرات الإدارية أو القانونية.",
            "يتم نشر النسخة المحدثة على هذه الصفحة مع تعديل تاريخ آخر تحديث.",
            "استمرار استخدام الموقع بعد نشر التعديلات يعني الاطلاع على الشروط المحدثة، وذلك في الحدود التي يسمح بها القانون.",
          ]
        : [
            "The school may update these Terms and Conditions from time to time to reflect service improvements or administrative and legal changes.",
            "The updated version will be published on this page along with a revised last-updated date.",
            "Continued use of the website after changes are published indicates awareness of the updated terms, to the extent permitted by law.",
          ],
    },
    {
      id: "contact",
      title: isAr ? "التواصل والاستفسارات" : "Contact & Inquiries",
      icon: "📩",
      content: isAr
        ? [
            "إذا كانت لديك أسئلة أو استفسارات تتعلق بهذه الشروط والأحكام أو واجهت مشكلة أثناء استخدام الموقع، يمكنك التواصل مع إدارة المدرسة من خلال قنوات التواصل الرسمية المعتمدة.",
            "يرجى توضيح طبيعة الاستفسار والصفحة أو الخدمة المرتبطة به حتى تتمكن الجهة المختصة من مساعدتك.",
          ]
        : [
            "If you have questions about these Terms and Conditions or experience an issue while using the website, you may contact the school administration through its official communication channels.",
            "Please describe your inquiry and identify the relevant page or service so the appropriate team can assist you.",
          ],
    },
  ];

  const active = sections.find((section) => section.id === activeSection) || sections[0];

  const quickLinks = [
    {
      icon: "📘",
      title: isAr ? "شروط واضحة" : "Clear Terms",
      description: isAr
        ? "قواعد منظمة لاستخدام الموقع."
        : "Clear rules for website usage.",
    },
    {
      icon: "🔐",
      title: isAr ? "حسابات آمنة" : "Secure Accounts",
      description: isAr
        ? "إرشادات لحماية الحسابات."
        : "Guidelines for account protection.",
    },
    {
      icon: "🎓",
      title: isAr ? "تعليم رقمي" : "Digital Learning",
      description: isAr
        ? "تنظيم استخدام الخدمات التعليمية."
        : "Rules for educational services.",
    },
    {
      icon: "⚖️",
      title: isAr ? "حقوق ومسؤوليات" : "Rights & Responsibilities",
      description: isAr
        ? "توضيح حقوق والتزامات المستخدمين."
        : "User rights and responsibilities.",
    },
  ];

  return (
    <main
      dir={isAr ? "rtl" : "ltr"}
      className="min-h-screen bg-[#f5f9fa] text-[#062f3b]"
    >
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#062f3b] via-[#075568] to-[#0e7490] px-5 py-20 text-white md:py-28">
        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full border border-white/10" />
        <div className="absolute -bottom-32 -left-20 h-96 w-96 rounded-full border border-white/10" />

        <div className="relative mx-auto max-w-7xl">
          <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm backdrop-blur">
            <span>📜</span>
            <span>
              {isAr ? "دليل الاستخدام الرسمي" : "Official Website Guidelines"}
            </span>
          </div>

          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <h1 className="mb-6 text-4xl font-black leading-tight md:text-6xl">
                {isAr ? (
                  <>
                    الشروط
                    <span className="block text-cyan-200">والأحكام</span>
                  </>
                ) : (
                  <>
                    Terms &
                    <span className="block text-cyan-200">Conditions</span>
                  </>
                )}
              </h1>

              <p className="max-w-2xl text-base leading-9 text-white/80 md:text-lg">
                {isAr
                  ? "نحرص في مدرسة الرواد الحديثة على توفير بيئة رقمية منظمة وآمنة. توضح هذه الصفحة القواعد والإرشادات التي تنظم استخدام موقعنا وخدماتنا الإلكترونية."
                  : "At Al Rowad Modern School, we aim to provide an organized and secure digital environment. This page explains the rules and guidelines governing the use of our website and online services."}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#terms-content"
                  className="rounded-xl bg-white px-7 py-3.5 font-bold text-[#075568] transition hover:bg-cyan-50"
                >
                  {isAr ? "اقرأ الشروط" : "Read the Terms"} ↓
                </a>

                <a
                  href="#acceptance"
                  className="rounded-xl border border-white/30 px-7 py-3.5 font-bold text-white transition hover:bg-white/10"
                >
                  {isAr ? "إقرار الاستخدام" : "Acknowledgment"}
                </a>
              </div>
            </div>

            <div className="mx-auto w-full max-w-md">
              <div className="rounded-[2rem] border border-white/20 bg-white/10 p-8 shadow-2xl backdrop-blur-lg">
                <div className="mb-7 flex items-center justify-between">
                  <div className="text-6xl">📜</div>
                  <span className="rounded-full bg-cyan-300/20 px-4 py-2 text-sm font-bold text-cyan-100">
                    {isAr ? "وثيقة الاستخدام" : "Usage Policy"}
                  </span>
                </div>

                <h2 className="mb-3 text-2xl font-black">
                  {isAr ? "استخدام مسؤول وآمن" : "Responsible & Safe Usage"}
                </h2>

                <p className="leading-8 text-white/75">
                  {isAr
                    ? "حقوق واضحة، ومسؤوليات مشتركة، وتجربة تعليمية رقمية أفضل لجميع أفراد المجتمع المدرسي."
                    : "Clear rights, shared responsibilities, and a better digital learning experience for the entire school community."}
                </p>

                <div className="mt-7 grid grid-cols-2 gap-3">
                  {[
                    [isAr ? "الشفافية" : "Transparency", "✓"],
                    [isAr ? "الأمان" : "Security", "✓"],
                    [isAr ? "المسؤولية" : "Responsibility", "✓"],
                    [isAr ? "الاحترام" : "Respect", "✓"],
                  ].map(([label, icon]) => (
                    <div
                      key={label}
                      className="rounded-xl border border-white/10 bg-white/10 p-3"
                    >
                      <span className="me-2 text-cyan-200">{icon}</span>
                      <span className="text-sm font-bold">{label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK CARDS */}
      <section className="relative z-10 mx-auto -mt-8 max-w-7xl px-5">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {quickLinks.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-100 bg-white p-5 shadow-lg shadow-[#062f3b]/5 transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-50 text-2xl">
                {item.icon}
              </div>
              <h3 className="mb-2 font-black">{item.title}</h3>
              <p className="text-sm leading-7 text-slate-500">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTENT */}
      <section
        id="terms-content"
        className="mx-auto max-w-7xl scroll-mt-10 px-5 py-20"
      >
        <div className="mb-12 text-center">
          <span className="mb-4 inline-block rounded-full bg-cyan-100 px-5 py-2 text-sm font-bold text-[#075568]">
            {isAr ? "مرجع الاستخدام" : "Usage Reference"}
          </span>

          <h2 className="mb-4 text-3xl font-black md:text-4xl">
            {isAr ? "كل ما تحتاج معرفته" : "Everything You Need to Know"}
          </h2>

          <p className="mx-auto max-w-2xl leading-8 text-slate-500">
            {isAr
              ? "يمكنك الانتقال مباشرة إلى أي قسم من أقسام الشروط والأحكام والاطلاع على التفاصيل."
              : "Navigate directly to any section of our Terms and Conditions to review the details."}
          </p>
        </div>

        <div className="grid items-start gap-7 lg:grid-cols-[320px_1fr]">
          {/* SIDEBAR */}
          <aside className="rounded-3xl border border-slate-100 bg-white p-5 shadow-sm lg:sticky lg:top-24">
            <h3 className="mb-5 flex items-center gap-3 px-2 text-lg font-black">
              <span className="text-xl">📑</span>
              {isAr ? "محتويات الصفحة" : "Table of Contents"}
            </h3>

            <div className="max-h-[650px] space-y-1 overflow-y-auto">
              {sections.map((section, index) => (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`flex w-full items-center gap-3 rounded-xl px-3 py-3 text-start transition ${
                    activeSection === section.id
                      ? "bg-[#075568] text-white shadow-md"
                      : "text-slate-600 hover:bg-cyan-50 hover:text-[#075568]"
                  }`}
                >
                  <span className="text-lg">{section.icon}</span>
                  <span className="min-w-0 flex-1 text-sm font-bold">
                    {section.title}
                  </span>
                  <span
                    className={`text-xs ${
                      activeSection === section.id
                        ? "text-white/60"
                        : "text-slate-400"
                    }`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </button>
              ))}
            </div>

            <div className="mt-6 rounded-2xl bg-[#f0f8fa] p-4">
              <p className="mb-2 text-sm font-black text-[#075568]">
                {isAr ? "هل تحتاج إلى مساعدة؟" : "Need Help?"}
              </p>
              <p className="mb-3 text-xs leading-6 text-slate-500">
                {isAr
                  ? "يمكنك التواصل مع إدارة المدرسة للاستفسار."
                  : "Contact the school administration for assistance."}
              </p>
              <a
                href="/support"
                className="text-sm font-black text-[#0e7490] hover:underline"
              >
                {isAr ? "مركز الدعم ←" : "Support Center →"}
              </a>
            </div>
          </aside>

          {/* ACTIVE SECTION */}
          <article className="min-h-[570px] rounded-3xl border border-slate-100 bg-white p-6 shadow-sm md:p-10">
            <div className="mb-8 flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-7">
              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-50 text-3xl">
                  {active.icon}
                </div>

                <div>
                  <span className="mb-1 block text-xs font-bold text-[#0e7490]">
                    {isAr ? "قسم من الشروط والأحكام" : "Terms & Conditions Section"}
                  </span>
                  <h2 className="text-xl font-black md:text-2xl">
                    {active.title}
                  </h2>
                </div>
              </div>

              <span className="rounded-full bg-[#f0f8fa] px-4 py-2 text-xs font-bold text-[#075568]">
                {String(sections.findIndex((s) => s.id === active.id) + 1).padStart(2, "0")} / {sections.length}
              </span>
            </div>

            <div className="space-y-5">
              {active.content.map((paragraph, index) => (
                <div
                  key={index}
                  className="flex gap-4 rounded-2xl bg-[#f8fbfc] p-5 transition hover:bg-cyan-50/70"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#075568] text-sm font-bold text-white">
                    {index + 1}
                  </span>
                  <p className="text-sm leading-8 text-slate-600 md:text-base">
                    {paragraph}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-slate-100 pt-7">
              <button
                onClick={() => {
                  const index = sections.findIndex(
                    (section) => section.id === activeSection
                  );
                  setActiveSection(
                    sections[Math.max(0, index - 1)].id
                  );
                }}
                disabled={activeSection === sections[0].id}
                className="rounded-xl border border-slate-200 px-5 py-3 text-sm font-bold text-slate-600 transition hover:border-[#075568] hover:text-[#075568] disabled:cursor-not-allowed disabled:opacity-30"
              >
                {isAr ? "→ السابق" : "← Previous"}
              </button>

              <button
                onClick={() => {
                  const index = sections.findIndex(
                    (section) => section.id === activeSection
                  );
                  setActiveSection(
                    sections[Math.min(sections.length - 1, index + 1)].id
                  );
                }}
                disabled={activeSection === sections[sections.length - 1].id}
                className="rounded-xl bg-[#075568] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#062f3b] disabled:cursor-not-allowed disabled:opacity-30"
              >
                {isAr ? "التالي ←" : "Next →"}
              </button>
            </div>
          </article>
        </div>
      </section>

      {/* IMPORTANT NOTICE */}
      <section className="mx-auto max-w-7xl px-5 pb-16">
        <div className="rounded-3xl border border-cyan-100 bg-white p-7 md:p-10">
          <div className="grid items-center gap-7 md:grid-cols-[auto_1fr]">
            <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-cyan-50 text-4xl">
              ⚠️
            </div>

            <div>
              <h2 className="mb-3 text-xl font-black">
                {isAr ? "تنبيه مهم للمستخدمين" : "Important Notice"}
              </h2>
              <p className="leading-8 text-slate-600">
                {isAr
                  ? "هذه الشروط نموذج تنظيمي عام للموقع، ويجب مراجعتها واعتمادها من إدارة المدرسة ومستشارها القانوني قبل نشرها باعتبارها سياسة رسمية ملزمة. كما يجب تحديثها لتتوافق مع الخدمات الفعلية والقوانين المعمول بها."
                  : "These terms are a general website policy template. They should be reviewed and approved by the school's administration and legal advisor before being published as an official binding policy. They should also be adapted to the actual services and applicable laws."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ACCEPTANCE */}
      <section
        id="acceptance"
        className="mx-auto max-w-7xl scroll-mt-10 px-5 pb-20"
      >
        <div className="overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#062f3b] to-[#075568] p-8 text-white md:p-12">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <span className="mb-4 inline-block rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm">
                {isAr ? "إقرار الاستخدام" : "Terms Acknowledgment"}
              </span>

              <h2 className="mb-4 text-3xl font-black">
                {isAr
                  ? "استخدام الموقع يعني الالتزام بالقواعد"
                  : "Use Our Website Responsibly"}
              </h2>

              <p className="leading-8 text-white/75">
                {isAr
                  ? "يرجى قراءة الشروط والأحكام بعناية قبل استخدام الخدمات الرقمية الخاصة بالمدرسة."
                  : "Please read these Terms and Conditions carefully before using the school's digital services."}
              </p>
            </div>

            <div className="rounded-2xl border border-white/15 bg-white/10 p-6">
              <label className="flex cursor-pointer items-start gap-4">
                <input
                  type="checkbox"
                  checked={accepted}
                  onChange={(e) => {
                    setAccepted(e.target.checked);
                    setShowAcceptance(false);
                  }}
                  className="mt-1 h-5 w-5 shrink-0 accent-cyan-300"
                />
                <span className="text-sm leading-8 text-white/90">
                  {isAr
                    ? "أقر بأنني قرأت الشروط والأحكام وفهمت محتواها، وأتعهد باستخدام الموقع وفقًا للقواعد الموضحة."
                    : "I acknowledge that I have read and understood these Terms and Conditions and agree to use the website according to the stated rules."}
                </span>
              </label>

              <button
                onClick={() => setShowAcceptance(true)}
                disabled={!accepted}
                className="mt-6 w-full rounded-xl bg-white px-6 py-4 font-black text-[#075568] transition hover:bg-cyan-50 disabled:cursor-not-allowed disabled:opacity-40"
              >
                {isAr ? "تأكيد الإقرار" : "Confirm Acknowledgment"}
              </button>

              {showAcceptance && accepted && (
                <p className="mt-4 rounded-xl bg-white/10 p-3 text-center text-sm font-bold text-cyan-100">
                  {isAr
                    ? "تم تسجيل إقرارك داخل هذه الصفحة فقط. لم يتم حفظه في قاعدة بيانات."
                    : "Your acknowledgment is recorded on this page only. It has not been saved to a database."}
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER NOTE */}
      <section className="border-t border-slate-200 bg-white px-5 py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-center md:flex-row md:text-start">
          <div>
            <p className="font-black text-[#062f3b]">
              {isAr ? "مدرسة الرواد الحديثة" : "Al Rowad Modern School"}
            </p>
            <p className="mt-1 text-xs text-slate-400">
              {isAr
                ? "الشروط والأحكام الخاصة باستخدام الموقع الإلكتروني"
                : "Website Terms and Conditions"}
            </p>
          </div>

          <div className="text-xs text-slate-400">
            {isAr ? "آخر تحديث: 13 نوفمبر 2026" : "Last Updated: November 13, 2026"}
          </div>

          <a
            href="/privacy"
            className="text-sm font-bold text-[#0e7490] hover:underline"
          >
            {isAr ? "سياسة الخصوصية ←" : "Privacy Policy →"}
          </a>
        </div>
      </section>
    </main>
  );
}
