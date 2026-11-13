
"use client";

import { useState } from "react";
import { useLanguage } from "../../context/LanguageContext";

type PolicySection = {
  id: string;
  number: string;
  icon: string;
  title: string;
  description: string;
  items: string[];
};

export default function PrivacyPage() {
  const { language } = useLanguage();
  const isAr = language === "ar";

  const [activeSection, setActiveSection] = useState("introduction");
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);
  const [showRequestForm, setShowRequestForm] = useState(false);
  const [requestSent, setRequestSent] = useState(false);

  const [request, setRequest] = useState({
    name: "",
    email: "",
    type: "access",
    message: "",
  });

  const sections: PolicySection[] = [
    {
      id: "introduction",
      number: "01",
      icon: "🛡️",
      title: isAr ? "مقدمة سياسة الخصوصية" : "Privacy Policy Introduction",
      description: isAr
        ? "تحرص مدرسة الرواد الحديثة على احترام خصوصية جميع مستخدمي موقعها الإلكتروني ومنصتها التعليمية. توضح هذه السياسة أنواع البيانات التي قد يتم جمعها وكيفية استخدامها وحمايتها."
        : "Al Rowad Modern School respects the privacy of everyone using its website and educational platform. This policy explains the types of information that may be collected and how it is used and protected.",
      items: [
        isAr
          ? "تطبيق ممارسات مناسبة لحماية بيانات المستخدمين."
          : "Applying appropriate practices to protect user information.",
        isAr
          ? "استخدام البيانات للأغراض التعليمية والإدارية المشروعة."
          : "Using information for legitimate educational and administrative purposes.",
        isAr
          ? "توضيح حقوق المستخدمين المتعلقة ببياناتهم."
          : "Explaining users' rights regarding their information.",
      ],
    },
    {
      id: "collection",
      number: "02",
      icon: "📋",
      title: isAr ? "البيانات التي نجمعها" : "Information We Collect",
      description: isAr
        ? "قد تجمع المدرسة بعض المعلومات التي يقدمها المستخدم عند التسجيل أو استخدام الخدمات أو التواصل مع الإدارة."
        : "The school may collect information provided by users when registering, using services, or communicating with the administration.",
      items: [
        isAr ? "الاسم وبيانات الاتصال." : "Name and contact information.",
        isAr
          ? "البريد الإلكتروني ورقم الهاتف."
          : "Email address and phone number.",
        isAr
          ? "البيانات الدراسية المرتبطة بحساب الطالب."
          : "Educational information associated with student accounts.",
        isAr
          ? "البيانات التي يرسلها المستخدم من خلال نماذج الموقع."
          : "Information submitted through website forms.",
        isAr
          ? "معلومات تقنية مثل نوع المتصفح وبيانات الاستخدام."
          : "Technical information such as browser type and usage data.",
      ],
    },
    {
      id: "usage",
      number: "03",
      icon: "🎯",
      title: isAr ? "كيفية استخدام البيانات" : "How We Use Information",
      description: isAr
        ? "تستخدم البيانات لتشغيل الخدمات التعليمية وتحسين تجربة المستخدم والتواصل مع الطلاب وأولياء الأمور."
        : "Information is used to operate educational services, improve user experience, and communicate with students and parents.",
      items: [
        isAr ? "إنشاء وإدارة الحسابات." : "Creating and managing accounts.",
        isAr
          ? "متابعة الخدمات والأنشطة التعليمية."
          : "Managing educational services and activities.",
        isAr
          ? "إرسال الإشعارات المتعلقة بالدراسة."
          : "Sending study-related notifications.",
        isAr
          ? "الرد على الاستفسارات وطلبات الدعم."
          : "Responding to inquiries and support requests.",
        isAr
          ? "تحسين جودة الموقع والخدمات."
          : "Improving website and service quality.",
      ],
    },
    {
      id: "students",
      number: "04",
      icon: "🎓",
      title: isAr
        ? "خصوصية الطلاب وأولياء الأمور"
        : "Student and Parent Privacy",
      description: isAr
        ? "تولي المدرسة اهتمامًا خاصًا ببيانات الطلاب، وتتعامل معها في حدود الأغراض التعليمية والإدارية المصرح بها."
        : "The school gives special attention to student information and handles it within authorized educational and administrative purposes.",
      items: [
        isAr
          ? "تقييد الوصول إلى بيانات الطلاب وفق الصلاحيات."
          : "Restricting access to student information according to permissions.",
        isAr
          ? "استخدام البيانات لمتابعة الأداء الأكاديمي."
          : "Using information to monitor academic performance.",
        isAr
          ? "التواصل مع أولياء الأمور بشأن شؤون الطلاب."
          : "Communicating with parents about student matters.",
        isAr
          ? "عدم نشر المعلومات الشخصية للطلاب دون أساس أو موافقة مناسبة."
          : "Not publishing students' personal information without an appropriate basis or consent.",
      ],
    },
    {
      id: "sharing",
      number: "05",
      icon: "🤝",
      title: isAr ? "مشاركة البيانات" : "Information Sharing",
      description: isAr
        ? "لا ينبغي مشاركة البيانات الشخصية إلا عند وجود حاجة مشروعة أو متطلب قانوني أو بموافقة مناسبة، مع مراعاة حماية المعلومات."
        : "Personal information should only be shared when there is a legitimate need, a legal requirement, or appropriate consent, while taking steps to protect it.",
      items: [
        isAr
          ? "مع الجهات المختصة عند وجود التزام قانوني."
          : "With relevant authorities when legally required.",
        isAr
          ? "مع مزودي الخدمات الضروريين لتشغيل المنصة، وفق ضوابط مناسبة."
          : "With necessary service providers under appropriate safeguards.",
        isAr
          ? "مع الجهات أو الأشخاص المخولين وفق الإجراءات المعتمدة."
          : "With authorized parties under approved procedures.",
      ],
    },
    {
      id: "cookies",
      number: "06",
      icon: "🍪",
      title: isAr
        ? "ملفات تعريف الارتباط"
        : "Cookies and Similar Technologies",
      description: isAr
        ? "قد يستخدم الموقع ملفات تعريف الارتباط وتقنيات مشابهة لتحسين تجربة التصفح وتذكر بعض الإعدادات."
        : "The website may use cookies and similar technologies to improve browsing and remember certain preferences.",
      items: [
        isAr
          ? "تذكر إعدادات اللغة والتفضيلات."
          : "Remembering language settings and preferences.",
        isAr
          ? "المساعدة في تشغيل وظائف الموقع."
          : "Helping website features operate.",
        isAr
          ? "فهم كيفية استخدام الموقع لتحسين أدائه."
          : "Understanding website usage to improve performance.",
        isAr
          ? "يمكن للمستخدم إدارة ملفات الارتباط من إعدادات المتصفح."
          : "Users can manage cookies through their browser settings.",
      ],
    },
    {
      id: "security",
      number: "07",
      icon: "🔐",
      title: isAr ? "حماية وأمن المعلومات" : "Data Security",
      description: isAr
        ? "تسعى المدرسة إلى تطبيق تدابير تنظيمية وتقنية مناسبة للمساعدة في حماية البيانات من الوصول غير المصرح به أو الفقد أو التغيير."
        : "The school seeks to apply appropriate organizational and technical measures to help protect information against unauthorized access, loss, or alteration.",
      items: [
        isAr
          ? "تحديد صلاحيات الوصول إلى البيانات."
          : "Limiting access to information.",
        isAr
          ? "استخدام إجراءات حماية تقنية مناسبة."
          : "Using appropriate technical safeguards.",
        isAr
          ? "مراجعة إجراءات التعامل مع البيانات."
          : "Reviewing information-handling procedures.",
        isAr
          ? "التعامل مع الحوادث الأمنية وفق الإجراءات المعتمدة."
          : "Handling security incidents according to approved procedures.",
      ],
    },
    {
      id: "retention",
      number: "08",
      icon: "🗂️",
      title: isAr ? "الاحتفاظ بالبيانات" : "Data Retention",
      description: isAr
        ? "يتم الاحتفاظ بالبيانات للمدة اللازمة لتحقيق الأغراض التي جُمعت من أجلها، أو للمدة التي تتطلبها الالتزامات القانونية والإدارية."
        : "Information is retained for as long as necessary for the purposes for which it was collected or as required by legal and administrative obligations.",
      items: [
        isAr
          ? "الاحتفاظ بالبيانات خلال فترة الحاجة إليها."
          : "Retaining information while it is needed.",
        isAr
          ? "مراجعة البيانات وفق سياسات الاحتفاظ المعتمدة."
          : "Reviewing information under applicable retention policies.",
        isAr
          ? "التعامل مع البيانات بعد انتهاء الغرض وفق الإجراءات المناسبة."
          : "Handling information after its purpose ends under appropriate procedures.",
      ],
    },
    {
      id: "rights",
      number: "09",
      icon: "⚖️",
      title: isAr ? "حقوق المستخدم" : "Your Privacy Rights",
      description: isAr
        ? "يمكن للمستخدم تقديم طلبات متعلقة ببياناته الشخصية، مع مراعاة التحقق من الهوية والمتطلبات القانونية والتنظيمية."
        : "Users may submit requests concerning their personal information, subject to identity verification and applicable legal and regulatory requirements.",
      items: [
        isAr ? "طلب معرفة البيانات المتاحة." : "Request access to available information.",
        isAr ? "طلب تصحيح البيانات غير الدقيقة." : "Request correction of inaccurate information.",
        isAr
          ? "طلب حذف البيانات عندما يكون ذلك مسموحًا."
          : "Request deletion where permitted.",
        isAr
          ? "الاستفسار عن كيفية استخدام البيانات."
          : "Ask how information is being used.",
        isAr
          ? "تقديم استفسار أو شكوى متعلقة بالخصوصية."
          : "Submit a privacy inquiry or complaint.",
      ],
    },
    {
      id: "updates",
      number: "10",
      icon: "🔄",
      title: isAr ? "تحديث سياسة الخصوصية" : "Policy Updates",
      description: isAr
        ? "قد يتم تحديث هذه السياسة من وقت لآخر لمواكبة تطور الخدمات أو المتطلبات التنظيمية. سيتم نشر النسخة المحدثة على هذه الصفحة."
        : "This policy may be updated from time to time to reflect service developments or regulatory requirements. Updated versions will be published on this page.",
      items: [
        isAr
          ? "مراجعة السياسة عند الحاجة."
          : "Reviewing the policy when necessary.",
        isAr
          ? "توضيح تاريخ آخر تحديث."
          : "Showing the latest update date.",
        isAr
          ? "إتاحة النسخة المحدثة للمستخدمين."
          : "Making the updated policy available to users.",
      ],
    },
  ];

  const faqs = [
    {
      question: isAr
        ? "هل يتم جمع بيانات الطلاب؟"
        : "Is student information collected?",
      answer: isAr
        ? "قد تتم معالجة بيانات الطلاب اللازمة لتقديم الخدمات التعليمية والإدارية، وفق الصلاحيات والإجراءات المعتمدة."
        : "Student information necessary for educational and administrative services may be processed under approved permissions and procedures.",
    },
    {
      question: isAr
        ? "هل يمكنني طلب تعديل بياناتي؟"
        : "Can I request a correction to my information?",
      answer: isAr
        ? "نعم، يمكنك تقديم طلب من خلال نموذج طلبات الخصوصية، وقد يُطلب منك التحقق من هويتك قبل تنفيذ الطلب."
        : "Yes. You can submit a request through the privacy request form. Identity verification may be required.",
    },
    {
      question: isAr
        ? "هل يتم مشاركة بياناتي مع جهات أخرى؟"
        : "Is my information shared with other parties?",
      answer: isAr
        ? "تتم المشاركة عند وجود حاجة مشروعة أو التزام قانوني أو موافقة مناسبة، مع مراعاة الضوابط المعمول بها."
        : "Information may be shared when there is a legitimate need, legal requirement, or appropriate consent, subject to applicable safeguards.",
    },
    {
      question: isAr
        ? "كيف يمكنني تقديم شكوى متعلقة بالخصوصية؟"
        : "How can I submit a privacy complaint?",
      answer: isAr
        ? "يمكنك إرسال طلب من خلال نموذج التواصل الموجود في هذه الصفحة مع توضيح موضوع الشكوى."
        : "You can submit a request using the form on this page and explain the nature of your complaint.",
    },
    {
      question: isAr
        ? "هل تستخدم المدرسة ملفات تعريف الارتباط؟"
        : "Does the school use cookies?",
      answer: isAr
        ? "قد تستخدم بعض ملفات تعريف الارتباط الضرورية أو ملفات تساعد على تحسين تجربة التصفح، ويمكن التحكم فيها من إعدادات المتصفح."
        : "The website may use essential cookies or cookies that improve browsing. You can manage them through your browser settings.",
    },
  ];

  const requestTypes = [
    {
      value: "access",
      ar: "طلب الوصول إلى البيانات",
      en: "Access My Information",
    },
    {
      value: "correction",
      ar: "طلب تصحيح البيانات",
      en: "Correct My Information",
    },
    {
      value: "deletion",
      ar: "طلب حذف البيانات",
      en: "Delete My Information",
    },
    {
      value: "inquiry",
      ar: "استفسار عن الخصوصية",
      en: "Privacy Inquiry",
    },
    {
      value: "complaint",
      ar: "شكوى متعلقة بالخصوصية",
      en: "Privacy Complaint",
    },
  ];

  const submitRequest = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // نموذج واجهة تجريبي: لا يرسل البيانات إلى خادم.
    console.log("Privacy request:", request);

    setRequestSent(true);
    setRequest({
      name: "",
      email: "",
      type: "access",
      message: "",
    });
  };

  return (
    <main
      dir={isAr ? "rtl" : "ltr"}
      className="min-h-screen bg-[#f5f9fa] text-[#073b4c]"
    >
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#062f3b] via-[#075568] to-[#0e7490] px-5 py-24 text-white md:py-32">
        <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-white/5" />
        <div className="absolute -bottom-36 -left-24 h-96 w-96 rounded-full bg-white/5" />

        <div className="relative mx-auto max-w-7xl">
          <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-5 py-3">
            <span className="text-xl">🛡️</span>
            <span className="text-sm font-semibold">
              {isAr ? "خصوصيتك أولوية لدينا" : "YOUR PRIVACY MATTERS"}
            </span>
          </div>

          <h1 className="max-w-4xl text-4xl font-black leading-tight md:text-6xl">
            {isAr
              ? "سياسة الخصوصية وحماية البيانات"
              : "Privacy Policy & Data Protection"}
          </h1>

          <p className="mt-7 max-w-3xl text-lg leading-9 text-white/80">
            {isAr
              ? "نلتزم باحترام خصوصية مستخدمينا والتعامل بمسؤولية مع البيانات المرتبطة بالخدمات التعليمية والإدارية."
              : "We are committed to respecting our users' privacy and handling information related to educational and administrative services responsibly."}
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#policy"
              className="rounded-xl bg-white px-8 py-4 font-bold text-[#075568] transition hover:-translate-y-1"
            >
              {isAr ? "اقرأ سياسة الخصوصية" : "Read Privacy Policy"}
            </a>

            <button
              onClick={() => {
                setShowRequestForm(true);
                setRequestSent(false);
              }}
              className="rounded-xl border border-white/40 px-8 py-4 font-bold transition hover:bg-white/10"
            >
              {isAr ? "طلب متعلق ببياناتي" : "Privacy Request"}
            </button>
          </div>

          <div className="mt-14 grid max-w-3xl gap-4 sm:grid-cols-3">
            {[
              {
                icon: "🔐",
                title: isAr ? "حماية البيانات" : "Data Protection",
              },
              {
                icon: "👨‍👩‍👧",
                title: isAr ? "خصوصية الطلاب" : "Student Privacy",
              },
              {
                icon: "⚖️",
                title: isAr ? "حقوق المستخدم" : "User Rights",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur"
              >
                <div className="text-3xl">{item.icon}</div>
                <p className="mt-3 font-bold">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SUMMARY */}
      <section className="relative z-10 mx-auto -mt-9 max-w-7xl px-5">
        <div className="grid gap-4 rounded-3xl bg-white p-6 shadow-xl md:grid-cols-3 md:p-8">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#e5f4f6] text-2xl">
              🔎
            </div>
            <div>
              <h3 className="font-black">
                {isAr ? "الشفافية" : "Transparency"}
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                {isAr ? "نعرفك بكيفية استخدام البيانات" : "Clear information practices"}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#e5f4f6] text-2xl">
              🔐
            </div>
            <div>
              <h3 className="font-black">
                {isAr ? "المسؤولية" : "Responsibility"}
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                {isAr ? "التعامل بحرص مع المعلومات" : "Responsible information handling"}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#e5f4f6] text-2xl">
              ⚖️
            </div>
            <div>
              <h3 className="font-black">
                {isAr ? "حقوقك" : "Your Rights"}
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                {isAr ? "إمكانية تقديم طلبات الخصوصية" : "Privacy request options"}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* POLICY CONTENT */}
      <section id="policy" className="mx-auto max-w-7xl px-5 py-24">
        <div className="mb-12">
          <span className="font-bold text-[#0e7490]">
            {isAr ? "تفاصيل السياسة" : "POLICY DETAILS"}
          </span>
          <h2 className="mt-3 text-3xl font-black md:text-4xl">
            {isAr ? "كيف نتعامل مع بياناتك؟" : "How Do We Handle Your Data?"}
          </h2>
          <p className="mt-4 max-w-3xl leading-8 text-gray-500">
            {isAr
              ? "يمكنك استعراض جميع بنود سياسة الخصوصية واختيار القسم الذي تريد معرفة المزيد عنه."
              : "Explore all sections of our privacy policy and select the information you want to learn more about."}
          </p>
        </div>

        <div className="grid items-start gap-8 lg:grid-cols-[300px_1fr]">
          {/* SIDEBAR */}
          <aside className="rounded-3xl border border-gray-100 bg-white p-5 shadow-sm lg:sticky lg:top-24">
            <h3 className="mb-5 px-3 text-lg font-black">
              {isAr ? "محتويات السياسة" : "Policy Contents"}
            </h3>

            <div className="space-y-2">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => {
                    setActiveSection(section.id);
                    document
                      .getElementById(`policy-${section.id}`)
                      ?.scrollIntoView({
                        behavior: "smooth",
                        block: "center",
                      });
                  }}
                  className={`flex w-full items-center gap-3 rounded-xl p-3 text-start transition ${
                    activeSection === section.id
                      ? "bg-[#075568] text-white"
                      : "text-gray-600 hover:bg-[#eaf5f7] hover:text-[#075568]"
                  }`}
                >
                  <span>{section.icon}</span>
                  <span className="min-w-0 flex-1 text-sm font-semibold">
                    {section.title}
                  </span>
                  <span className="text-xs opacity-60">
                    {section.number}
                  </span>
                </button>
              ))}
            </div>
          </aside>

          {/* SECTIONS */}
          <div className="space-y-5">
            {sections.map((section) => (
              <article
                id={`policy-${section.id}`}
                key={section.id}
                onMouseEnter={() => setActiveSection(section.id)}
                className={`scroll-mt-24 rounded-3xl border bg-white p-7 transition md:p-9 ${
                  activeSection === section.id
                    ? "border-[#0e7490]/40 shadow-md"
                    : "border-gray-100 shadow-sm"
                }`}
              >
                <div className="mb-6 flex items-start gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#e5f4f6] text-2xl">
                    {section.icon}
                  </div>

                  <div className="min-w-0 flex-1">
                    <span className="text-sm font-black text-[#0e7490]">
                      {section.number}
                    </span>
                    <h3 className="mt-1 text-xl font-black md:text-2xl">
                      {section.title}
                    </h3>
                  </div>
                </div>

                <p className="mb-6 leading-9 text-gray-600">
                  {section.description}
                </p>

                <div className="rounded-2xl bg-[#f5f9fa] p-5 md:p-6">
                  <h4 className="mb-4 font-black">
                    {isAr ? "النقاط الأساسية" : "Key Points"}
                  </h4>

                  <ul className="space-y-4">
                    {section.items.map((item, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3 leading-7 text-gray-600"
                      >
                        <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#dceff2] text-sm font-black text-[#075568]">
                          ✓
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white px-5 py-24">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <span className="font-bold text-[#0e7490]">
              {isAr ? "الأسئلة والاستفسارات" : "QUESTIONS & ANSWERS"}
            </span>
            <h2 className="mt-3 text-3xl font-black md:text-4xl">
              {isAr ? "أسئلة حول الخصوصية" : "Privacy FAQs"}
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFAQ === index;

              return (
                <div
                  key={index}
                  className="overflow-hidden rounded-2xl border border-gray-100"
                >
                  <button
                    onClick={() => setOpenFAQ(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-4 p-6 text-start"
                  >
                    <span className="font-black leading-7">
                      {faq.question}
                    </span>

                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition ${
                        isOpen
                          ? "rotate-45 bg-[#075568] text-white"
                          : "bg-[#e5f4f6] text-[#075568]"
                      }`}
                    >
                      +
                    </span>
                  </button>

                  {isOpen && (
                    <div className="border-t border-gray-100 bg-[#f8fbfc] px-6 py-5">
                      <p className="leading-8 text-gray-600">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PRIVACY REQUEST CTA */}
      <section className="mx-auto max-w-7xl px-5 py-24">
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#062f3b] to-[#0e7490] p-8 text-white md:p-14">
          <div className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-white/5" />

          <div className="relative grid items-center gap-10 md:grid-cols-2">
            <div>
              <span className="font-bold text-cyan-200">
                {isAr ? "حقوق الخصوصية" : "PRIVACY RIGHTS"}
              </span>

              <h2 className="mt-4 text-3xl font-black leading-tight md:text-4xl">
                {isAr
                  ? "هل لديك طلب يتعلق ببياناتك الشخصية؟"
                  : "Have a Request About Your Personal Data?"}
              </h2>

              <p className="mt-5 leading-9 text-white/75">
                {isAr
                  ? "يمكنك إرسال استفسار أو طلب متعلق بالوصول إلى بياناتك أو تصحيحها أو حذفها، وفق الإجراءات والمتطلبات المعمول بها."
                  : "You can submit a request concerning access, correction, or deletion of your information, subject to applicable procedures and requirements."}
              </p>

              <button
                onClick={() => {
                  setShowRequestForm(true);
                  setRequestSent(false);
                }}
                className="mt-8 rounded-xl bg-white px-8 py-4 font-bold text-[#075568] transition hover:-translate-y-1"
              >
                {isAr ? "إرسال طلب خصوصية" : "Submit Privacy Request"}
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  icon: "👁️",
                  title: isAr ? "الوصول" : "Access",
                },
                {
                  icon: "✏️",
                  title: isAr ? "التصحيح" : "Correction",
                },
                {
                  icon: "🗑️",
                  title: isAr ? "الحذف" : "Deletion",
                },
                {
                  icon: "💬",
                  title: isAr ? "الاستفسار" : "Inquiry",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-white/15 bg-white/10 p-6 text-center backdrop-blur"
                >
                  <div className="text-3xl">{item.icon}</div>
                  <p className="mt-3 font-bold">{item.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* REQUEST FORM */}
      {showRequestForm && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-black/60 p-4">
          <div className="my-auto w-full max-w-2xl rounded-3xl bg-white p-7 shadow-2xl md:p-9">
            <div className="mb-7 flex items-start justify-between gap-4">
              <div>
                <span className="font-bold text-[#0e7490]">
                  {isAr ? "طلبات الخصوصية" : "PRIVACY REQUESTS"}
                </span>
                <h2 className="mt-2 text-2xl font-black">
                  {isAr ? "إرسال طلب جديد" : "Submit a New Request"}
                </h2>
                <p className="mt-2 text-sm leading-7 text-gray-500">
                  {isAr
                    ? "أدخل بياناتك ووضح طلبك حتى تتمكن الجهة المختصة من مراجعته."
                    : "Enter your details and explain your request for review."}
                </p>
              </div>

              <button
                onClick={() => setShowRequestForm(false)}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gray-100 text-xl"
                aria-label="Close"
              >
                ×
              </button>
            </div>

            {requestSent ? (
              <div className="rounded-2xl bg-[#eaf7f0] p-8 text-center">
                <div className="text-5xl">✓</div>
                <h3 className="mt-4 text-xl font-black text-green-800">
                  {isAr ? "تم تجهيز الطلب" : "Request Prepared"}
                </h3>
                <p className="mt-3 leading-8 text-green-700">
                  {isAr
                    ? "تم التحقق من إدخال البيانات في النموذج التجريبي. لم يتم إرسال الطلب إلى المدرسة بعد."
                    : "Your information was entered in the demo form. The request has not been sent to the school."}
                </p>
                <button
                  onClick={() => setShowRequestForm(false)}
                  className="mt-6 rounded-xl bg-[#075568] px-7 py-3 font-bold text-white"
                >
                  {isAr ? "إغلاق" : "Close"}
                </button>
              </div>
            ) : (
              <form onSubmit={submitRequest} className="space-y-5">
                <div>
                  <label className="mb-2 block font-bold">
                    {isAr ? "الاسم بالكامل" : "Full Name"}
                  </label>
                  <input
                    required
                    value={request.name}
                    onChange={(e) =>
                      setRequest({ ...request, name: e.target.value })
                    }
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-[#0e7490]"
                    placeholder={isAr ? "اكتب اسمك" : "Enter your name"}
                  />
                </div>

                <div>
                  <label className="mb-2 block font-bold">
                    {isAr ? "البريد الإلكتروني" : "Email Address"}
                  </label>
                  <input
                    required
                    type="email"
                    value={request.email}
                    onChange={(e) =>
                      setRequest({ ...request, email: e.target.value })
                    }
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-[#0e7490]"
                    placeholder="example@email.com"
                  />
                </div>

                <div>
                  <label className="mb-2 block font-bold">
                    {isAr ? "نوع الطلب" : "Request Type"}
                  </label>
                  <select
                    value={request.type}
                    onChange={(e) =>
                      setRequest({ ...request, type: e.target.value })
                    }
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-[#0e7490]"
                  >
                    {requestTypes.map((type) => (
                      <option key={type.value} value={type.value}>
                        {isAr ? type.ar : type.en}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="mb-2 block font-bold">
                    {isAr ? "تفاصيل الطلب" : "Request Details"}
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={request.message}
                    onChange={(e) =>
                      setRequest({ ...request, message: e.target.value })
                    }
                    className="w-full resize-y rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-[#0e7490]"
                    placeholder={
                      isAr
                        ? "اشرح طلبك بالتفصيل..."
                        : "Explain your request..."
                    }
                  />
                </div>

                <p className="rounded-xl bg-[#f5f9fa] p-4 text-xs leading-6 text-gray-500">
                  {isAr
                    ? "يرجى عدم إدخال كلمات المرور أو البيانات البنكية أو أي معلومات حساسة غير ضرورية في هذا النموذج."
                    : "Do not enter passwords, banking details, or unnecessary sensitive information in this form."}
                </p>

                <button
                  type="submit"
                  className="w-full rounded-xl bg-[#075568] px-6 py-4 font-bold text-white transition hover:bg-[#0e7490]"
                >
                  {isAr ? "إرسال الطلب" : "Submit Request"}
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* FOOTER NOTE */}
      <section className="border-t border-gray-100 bg-white px-5 py-10">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4">
          <div>
            <h3 className="font-black">
              {isAr ? "مدرسة الرواد الحديثة" : "Al Rowad Modern School"}
            </h3>
            <p className="mt-2 text-sm text-gray-500">
              {isAr
                ? "سياسة الخصوصية وحماية البيانات"
                : "Privacy Policy & Data Protection"}
            </p>
          </div>

          <div className="text-sm text-gray-500">
            {isAr ? "آخر مراجعة للصفحة: " : "Page review date: "}
            13 November 2026
          </div>
        </div>
      </section>
    </main>
  );
}
