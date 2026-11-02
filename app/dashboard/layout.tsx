// "use client";

// import React, { useState } from "react";
// import Sidebar from "../dashboard/Sidebar"; // تأكدي من صحة المسار

// export default function DashboardLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   // 1. تعريف الحالات هنا لأن الـ Layout هو الأب الذي يحتوي على الـ Sidebar
//   const [isCollapsed, setIsCollapsed] = useState(false);
//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   return (
//     <div className="flex min-h-screen bg-slate-100" dir="rtl">
//       {/* 2. تمرير الحالات المطلوبة للـ Sidebar */}
//       <Sidebar
//         isCollapsed={isCollapsed}
//         setIsCollapsed={setIsCollapsed}
//         sidebarOpen={sidebarOpen}
//         setSidebarOpen={setSidebarOpen}
//       />

//       <div className="flex flex-1 flex-col">
//         {/* محتوى الصفحات */}
//         <main className="flex-1 p-6">{children}</main>
//       </div>
//     </div>
//   );





"use client";

import React, { useState } from "react";
import Sidebar from "./Sidebar";
import { useLanguage } from "../context/LanguageContext";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const { language } = useLanguage();
  const isArabic = language === "ar";

  return (
    <div
      dir={isArabic ? "rtl" : "ltr"}
      className="min-h-screen bg-slate-100"
    >
      <Sidebar
        isCollapsed={isCollapsed}
        setIsCollapsed={setIsCollapsed}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      <div
        className={`
          min-h-screen
          transition-[margin]
          duration-300
          ease-in-out
          ${
            isArabic
              ? isCollapsed
                ? "lg:mr-20"
                : "lg:mr-72"
              : isCollapsed
                ? "lg:ml-20"
                : "lg:ml-72"
          }
        `}
      >
        <main className="min-h-screen w-full">
          {children}
        </main>
      </div>
    </div>
  );
}
