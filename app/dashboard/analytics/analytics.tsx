
// "use client";

// import {
//   Users,
//   GraduationCap,
//   School,
//   Wallet,
//   TrendingUp,
//   CalendarCheck,
//   BookOpen,
// } from "lucide-react";

// import {
//   ResponsiveContainer,
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   LineChart,
//   Line,
//   PieChart,
//   Pie,
//   Cell,
//   Legend,
// } from "recharts";

// import { useState } from "react";

// const studentsData = [
//   { month: "يناير", students: 850 },
//   { month: "فبراير", students: 920 },
//   { month: "مارس", students: 980 },
//   { month: "أبريل", students: 1050 },
//   { month: "مايو", students: 1120 },
//   { month: "يونيو", students: 1250 },
// ];

// const attendanceData = [
//   { month: "يناير", attendance: 95, absence: 5 },
//   { month: "فبراير", attendance: 92, absence: 8 },
//   { month: "مارس", attendance: 97, absence: 3 },
//   { month: "أبريل", attendance: 90, absence: 10 },
//   { month: "مايو", attendance: 94, absence: 6 },
//   { month: "يونيو", attendance: 96, absence: 4 },
// ];

// const stagesData = [
//   { name: "ابتدائي", value: 520 },
//   { name: "إعدادي", value: 430 },
//   { name: "ثانوي", value: 300 },
// ];

// const COLORS = ["#2563eb", "#10b981", "#f59e0b"];

// const stats = [
//   {
//     title: "إجمالي الطلاب",
//     value: "1,250",
//     change: "+12.5%",
//     icon: Users,
//     color: "blue",
//   },
//   {
//     title: "المعلمين",
//     value: "85",
//     change: "+5.2%",
//     icon: GraduationCap,
//     color: "green",
//   },
//   {
//     title: "الفصول الدراسية",
//     value: "32",
//     change: "+3.1%",
//     icon: School,
//     color: "purple",
//   },
//   {
//     title: "تحصيل المصروفات",
//     value: "92%",
//     change: "+8.4%",
//     icon: Wallet,
//     color: "orange",
//   },
// ];

// export default function AnalyticsPage() {
//   const [period, setPeriod] = useState("6");

//   return (
//     <main dir="rtl" className="min-h-screen bg-slate-50 p-4 md:p-8">

//       <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
//         <div>
//           <h1 className="text-2xl font-bold text-slate-800 md:text-3xl">
//             الإحصائيات والتقارير
//           </h1>
//           <p className="mt-2 text-sm text-slate-500">
//             لوحة متابعة الأداء والإحصائيات لمدرسة الرواد الحديثة
//           </p>
//         </div>

//         <select
//           value={period}
//           onChange={(e) => setPeriod(e.target.value)}
//           className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none"
//         >
//           <option value="6">آخر 6 أشهر</option>
//           <option value="3">آخر 3 أشهر</option>
//         </select>
//       </div>

//       <div className="mb-8 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
//         {stats.map((item, index) => {
//           const Icon = item.icon;

//           const colors: Record<string, string> = {
//             blue: "bg-blue-50 text-blue-600",
//             green: "bg-green-50 text-green-600",
//             purple: "bg-purple-50 text-purple-600",
//             orange: "bg-orange-50 text-orange-600",
//           };

//           return (
//             <div
//               key={index}
//               className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
//             >
//               <div className="flex items-center justify-between">
//                 <div className={`rounded-xl p-3 ${colors[item.color]}`}>
//                   <Icon size={24} />
//                 </div>

//                 <span className="flex items-center gap-1 text-xs font-semibold text-green-600">
//                   <TrendingUp size={14} />
//                   {item.change}
//                 </span>
//               </div>

//               <p className="mt-5 text-sm text-slate-500">
//                 {item.title}
//               </p>

//               <h2 className="mt-2 text-3xl font-bold text-slate-800">
//                 {item.value}
//               </h2>
//             </div>
//           );
//         })}
//       </div>

//       <div className="mb-6 grid grid-cols-1 gap-6 xl:grid-cols-2">

//         <section className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
//           <div className="mb-6 flex items-center justify-between">
//             <div>
//               <h2 className="font-bold text-slate-800">
//                 نمو عدد الطلاب
//               </h2>
//               <p className="mt-1 text-xs text-slate-400">
//                 تطور أعداد الطلاب خلال العام
//               </p>
//             </div>
//             <Users className="text-blue-600" />
//           </div>

//           <div className="h-72 w-full">
//             <ResponsiveContainer width="100%" height="100%">
//               <BarChart data={period === "3" ? studentsData.slice(-3) : studentsData}>
//                 <CartesianGrid strokeDasharray="3 3" vertical={false} />
//                 <XAxis dataKey="month" />
//                 <YAxis />
//                 <Tooltip />
//                 <Bar
//                   dataKey="students"
//                   name="عدد الطلاب"
//                   fill="#2563eb"
//                   radius={[8, 8, 0, 0]}
//                 />
//               </BarChart>
//             </ResponsiveContainer>
//           </div>
//         </section>

//         <section className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
//           <div className="mb-6 flex items-center justify-between">
//             <div>
//               <h2 className="font-bold text-slate-800">
//                 الحضور والغياب
//               </h2>
//               <p className="mt-1 text-xs text-slate-400">
//                 نسب حضور الطلاب شهرياً
//               </p>
//             </div>
//             <CalendarCheck className="text-green-600" />
//           </div>

//           <div className="h-72 w-full">
//             <ResponsiveContainer width="100%" height="100%">
//               <LineChart data={period === "3" ? attendanceData.slice(-3) : attendanceData}>
//                 <CartesianGrid strokeDasharray="3 3" vertical={false} />
//                 <XAxis dataKey="month" />
//                 <YAxis domain={[0, 100]} />
//                 <Tooltip />
//                 <Legend />
//                 <Line
//                   type="monotone"
//                   dataKey="attendance"
//                   name="الحضور %"
//                   stroke="#10b981"
//                   strokeWidth={3}
//                 />
//                 <Line
//                   type="monotone"
//                   dataKey="absence"
//                   name="الغياب %"
//                   stroke="#ef4444"
//                   strokeWidth={3}
//                 />
//               </LineChart>
//             </ResponsiveContainer>
//           </div>
//         </section>
//       </div>

//       <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">

//         <section className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
//           <div className="mb-5 flex items-center justify-between">
//             <div>
//               <h2 className="font-bold text-slate-800">
//                 توزيع الطلاب حسب المرحلة
//               </h2>
//               <p className="mt-1 text-xs text-slate-400">
//                 عدد الطلاب في كل مرحلة تعليمية
//               </p>
//             </div>
//             <BookOpen className="text-purple-600" />
//           </div>

//           <div className="h-72 w-full">
//             <ResponsiveContainer width="100%" height="100%">
//               <PieChart>
//                 <Pie
//                   data={stagesData}
//                   dataKey="value"
//                   nameKey="name"
//                   cx="50%"
//                   cy="50%"
//                   outerRadius={95}
//                   label
//                 >
//                   {stagesData.map((entry, index) => (
//                     <Cell
//                       key={entry.name}
//                       fill={COLORS[index]}
//                     />
//                   ))}
//                 </Pie>
//                 <Tooltip />
//                 <Legend />
//               </PieChart>
//             </ResponsiveContainer>
//           </div>
//         </section>

//         <section className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
//           <h2 className="mb-5 font-bold text-slate-800">
//             ملخص أداء المدرسة
//           </h2>

//           {[
//             { name: "نسبة الحضور", value: 96 },
//             { name: "نسبة النجاح", value: 94 },
//             { name: "تحصيل المصروفات", value: 92 },
//             { name: "إنجاز المناهج", value: 88 },
//           ].map((item) => (
//             <div key={item.name} className="mb-6">
//               <div className="mb-2 flex justify-between text-sm">
//                 <span className="text-slate-600">{item.name}</span>
//                 <strong className="text-slate-800">
//                   {item.value}%
//                 </strong>
//               </div>

//               <div className="h-3 overflow-hidden rounded-full bg-slate-100">
//                 <div
//                   className="h-full rounded-full bg-blue-600 transition-all"
//                   style={{ width: `${item.value}%` }}
//                 />
//               </div>
//             </div>
//           ))}

//           <div className="mt-8 rounded-xl bg-blue-50 p-4">
//             <div className="flex items-center gap-2 text-blue-700">
//               <TrendingUp size={20} />
//               <strong>مؤشرات الأداء</strong>
//             </div>
//             <p className="mt-2 text-sm leading-7 text-slate-600">
//               يعرض هذا القسم ملخصاً لمؤشرات الأداء التعليمية
//               والإدارية للمدرسة.
//             </p>
//           </div>
//         </section>
//       </div>
//     </main>
//   );
// }









// "use client";

// import {
//   Users,
//   GraduationCap,
//   School,
//   Wallet,
//   TrendingUp,
//   CalendarCheck,
//   BookOpen,
//   ClipboardList,
//   UserCheck,
//   UserX,
//   Award,
//   Clock,
//   Download,
//   ArrowUpRight,
//   Bell,
//   Target,
//   Activity,
//   CreditCard,
//   Library,
// } from "lucide-react";

// import {
//   ResponsiveContainer,
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   LineChart,
//   Line,
//   PieChart,
//   Pie,
//   Cell,
//   Legend,
//   AreaChart,
//   Area,
// } from "recharts";

// import { useState } from "react";

// const studentsData = [
//   { month: "يناير", students: 850 },
//   { month: "فبراير", students: 920 },
//   { month: "مارس", students: 980 },
//   { month: "أبريل", students: 1050 },
//   { month: "مايو", students: 1120 },
//   { month: "يونيو", students: 1250 },
// ];

// const attendanceData = [
//   { month: "يناير", attendance: 95, absence: 5 },
//   { month: "فبراير", attendance: 92, absence: 8 },
//   { month: "مارس", attendance: 97, absence: 3 },
//   { month: "أبريل", attendance: 90, absence: 10 },
//   { month: "مايو", attendance: 94, absence: 6 },
//   { month: "يونيو", attendance: 96, absence: 4 },
// ];

// const stagesData = [
//   { name: "الابتدائية", value: 520 },
//   { name: "الإعدادية", value: 430 },
//   { name: "الثانوية", value: 300 },
// ];

// const performanceData = [
//   { subject: "اللغة العربية", score: 92 },
//   { subject: "الرياضيات", score: 85 },
//   { subject: "العلوم", score: 89 },
//   { subject: "الإنجليزية", score: 94 },
//   { subject: "الدراسات", score: 87 },
// ];

// const financeData = [
//   { month: "يناير", income: 180000, expenses: 90000 },
//   { month: "فبراير", income: 220000, expenses: 110000 },
//   { month: "مارس", income: 250000, expenses: 130000 },
//   { month: "أبريل", income: 280000, expenses: 150000 },
//   { month: "مايو", income: 310000, expenses: 140000 },
//   { month: "يونيو", income: 350000, expenses: 170000 },
// ];

// const COLORS = ["#2563eb", "#10b981", "#f59e0b"];

// const stats = [
//   {
//     title: "إجمالي الطلاب",
//     value: "1,250",
//     change: "+12.5%",
//     icon: Users,
//     color: "blue",
//   },
//   {
//     title: "إجمالي المعلمين",
//     value: "85",
//     change: "+5.2%",
//     icon: GraduationCap,
//     color: "green",
//   },
//   {
//     title: "الفصول الدراسية",
//     value: "32",
//     change: "+3.1%",
//     icon: School,
//     color: "purple",
//   },
//   {
//     title: "تحصيل المصروفات",
//     value: "92%",
//     change: "+8.4%",
//     icon: Wallet,
//     color: "orange",
//   },
//   {
//     title: "الحضور اليوم",
//     value: "1,180",
//     change: "94.4%",
//     icon: UserCheck,
//     color: "cyan",
//   },
//   {
//     title: "الغياب اليوم",
//     value: "70",
//     change: "5.6%",
//     icon: UserX,
//     color: "red",
//   },
//   {
//     title: "المواد الدراسية",
//     value: "18",
//     change: "+2",
//     icon: BookOpen,
//     color: "indigo",
//   },
//   {
//     title: "الامتحانات",
//     value: "24",
//     change: "هذا الفصل",
//     icon: ClipboardList,
//     color: "pink",
//   },
// ];

// const activities = [
//   {
//     title: "تسجيل طالب جديد",
//     description: "تمت إضافة طالب إلى المرحلة الابتدائية",
//     time: "منذ 15 دقيقة",
//     icon: Users,
//   },
//   {
//     title: "تحديث الحضور",
//     description: "تم تسجيل حضور الصف الثالث الإعدادي",
//     time: "منذ 30 دقيقة",
//     icon: CalendarCheck,
//   },
//   {
//     title: "إضافة نتيجة امتحان",
//     description: "تم رفع نتائج اختبار الرياضيات",
//     time: "منذ ساعة",
//     icon: Award,
//   },
//   {
//     title: "تحديث بيانات المعلم",
//     description: "تم تحديث الملف الوظيفي لأحد المعلمين",
//     time: "منذ ساعتين",
//     icon: GraduationCap,
//   },
// ];

// export default function Analytics() {
//   const [period, setPeriod] = useState("6");

//   const filteredStudents =
//     period === "3" ? studentsData.slice(-3) : studentsData;

//   const filteredAttendance =
//     period === "3" ? attendanceData.slice(-3) : attendanceData;

//   const filteredFinance =
//     period === "3" ? financeData.slice(-3) : financeData;

//   return (
//     <main dir="rtl" className="min-h-screen bg-[#f5f7fb] p-4 md:p-7 xl:p-9">

//       {/* Header */}
//       <header className="mb-8 flex flex-wrap items-center justify-between gap-5">
//         <div>
//           <div className="mb-2 flex items-center gap-2 text-sm text-blue-600">
//             <Activity size={17} />
//             <span>لوحة الإدارة والتحليلات</span>
//           </div>

//           <h1 className="text-3xl font-extrabold text-slate-800 md:text-4xl">
//             مركز الإحصائيات والتقارير
//           </h1>

//           <p className="mt-3 text-sm text-slate-500">
//             متابعة شاملة للأداء الأكاديمي والإداري والمالي لمدرسة الرواد الحديثة
//           </p>
//         </div>

//         <div className="flex flex-wrap gap-3">
//           <select
//             value={period}
//             onChange={(e) => setPeriod(e.target.value)}
//             className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 outline-none"
//           >
//             <option value="6">آخر 6 أشهر</option>
//             <option value="3">آخر 3 أشهر</option>
//           </select>

//           <button
//             onClick={() => window.print()}
//             className="flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-blue-200 transition hover:bg-blue-700"
//           >
//             <Download size={18} />
//             طباعة التقرير
//           </button>
//         </div>
//       </header>

//       {/* Main Statistics */}
//       <section className="mb-8">
//         <div className="mb-5 flex items-center justify-between">
//           <h2 className="text-xl font-bold text-slate-800">
//             المؤشرات الرئيسية
//           </h2>
//           <span className="text-xs text-slate-400">
//             بيانات توضيحية قابلة للاستبدال ببيانات API
//           </span>
//         </div>

//         <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
//           {stats.map((item, index) => {
//             const Icon = item.icon;

//             const colors: Record<string, string> = {
//               blue: "bg-blue-50 text-blue-600",
//               green: "bg-green-50 text-green-600",
//               purple: "bg-purple-50 text-purple-600",
//               orange: "bg-orange-50 text-orange-600",
//               cyan: "bg-cyan-50 text-cyan-600",
//               red: "bg-red-50 text-red-600",
//               indigo: "bg-indigo-50 text-indigo-600",
//               pink: "bg-pink-50 text-pink-600",
//             };

//             return (
//               <div
//                 key={index}
//                 className="group rounded-2xl border border-slate-100 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
//               >
//                 <div className="flex items-center justify-between">
//                   <div className={`rounded-2xl p-3 ${colors[item.color]}`}>
//                     <Icon size={25} />
//                   </div>

//                   <span className="flex items-center gap-1 text-xs font-bold text-green-600">
//                     <ArrowUpRight size={15} />
//                     {item.change}
//                   </span>
//                 </div>

//                 <p className="mt-5 text-sm font-medium text-slate-500">
//                   {item.title}
//                 </p>

//                 <h3 className="mt-2 text-3xl font-extrabold text-slate-800">
//                   {item.value}
//                 </h3>
//               </div>
//             );
//           })}
//         </div>
//       </section>

//       {/* Academic Charts */}
//       <section className="mb-8">
//         <h2 className="mb-5 text-xl font-bold text-slate-800">
//           التحليلات الأكاديمية
//         </h2>

//         <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">

//           {/* Students Growth */}
//           <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
//             <div className="mb-7 flex items-center justify-between">
//               <div>
//                 <h3 className="text-lg font-bold text-slate-800">
//                   تطور أعداد الطلاب
//                 </h3>
//                 <p className="mt-2 text-xs text-slate-400">
//                   نمو التسجيلات خلال الفترة المحددة
//                 </p>
//               </div>
//               <Users className="text-blue-600" size={25} />
//             </div>

//             <div className="h-80 w-full">
//               <ResponsiveContainer width="100%" height="100%">
//                 <AreaChart data={filteredStudents}>
//                   <defs>
//                     <linearGradient id="studentGradient" x1="0" y1="0" x2="0" y2="1">
//                       <stop offset="0%" stopColor="#2563eb" stopOpacity={0.3} />
//                       <stop offset="95%" stopColor="#2563eb" stopOpacity={0} />
//                     </linearGradient>
//                   </defs>
//                   <CartesianGrid strokeDasharray="3 3" vertical={false} />
//                   <XAxis dataKey="month" />
//                   <YAxis />
//                   <Tooltip />
//                   <Area
//                     type="monotone"
//                     dataKey="students"
//                     name="عدد الطلاب"
//                     stroke="#2563eb"
//                     strokeWidth={3}
//                     fill="url(#studentGradient)"
//                   />
//                 </AreaChart>
//               </ResponsiveContainer>
//             </div>
//           </div>

//           {/* Attendance */}
//           <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
//             <div className="mb-7 flex items-center justify-between">
//               <div>
//                 <h3 className="text-lg font-bold text-slate-800">
//                   الحضور والغياب
//                 </h3>
//                 <p className="mt-2 text-xs text-slate-400">
//                   متابعة انتظام الطلاب شهرياً
//                 </p>
//               </div>
//               <CalendarCheck className="text-green-600" size={25} />
//             </div>

//             <div className="h-80 w-full">
//               <ResponsiveContainer width="100%" height="100%">
//                 <LineChart data={filteredAttendance}>
//                   <CartesianGrid strokeDasharray="3 3" vertical={false} />
//                   <XAxis dataKey="month" />
//                   <YAxis domain={[0, 100]} />
//                   <Tooltip />
//                   <Legend />
//                   <Line
//                     type="monotone"
//                     dataKey="attendance"
//                     name="الحضور %"
//                     stroke="#10b981"
//                     strokeWidth={3}
//                   />
//                   <Line
//                     type="monotone"
//                     dataKey="absence"
//                     name="الغياب %"
//                     stroke="#ef4444"
//                     strokeWidth={3}
//                   />
//                 </LineChart>
//               </ResponsiveContainer>
//             </div>
//           </div>

//           {/* Students Stages */}
//           <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
//             <div className="mb-5 flex items-center justify-between">
//               <div>
//                 <h3 className="text-lg font-bold text-slate-800">
//                   توزيع الطلاب حسب المرحلة
//                 </h3>
//                 <p className="mt-2 text-xs text-slate-400">
//                   توزيع إجمالي الطلاب على المراحل التعليمية
//                 </p>
//               </div>
//               <School className="text-purple-600" size={25} />
//             </div>

//             <div className="h-80 w-full">
//               <ResponsiveContainer width="100%" height="100%">
//                 <PieChart>
//                   <Pie
//                     data={stagesData}
//                     dataKey="value"
//                     nameKey="name"
//                     cx="50%"
//                     cy="50%"
//                     outerRadius={105}
//                     innerRadius={55}
//                     paddingAngle={4}
//                     label
//                   >
//                     {stagesData.map((entry, index) => (
//                       <Cell key={entry.name} fill={COLORS[index]} />
//                     ))}
//                   </Pie>
//                   <Tooltip />
//                   <Legend />
//                 </PieChart>
//               </ResponsiveContainer>
//             </div>
//           </div>

//           {/* Academic Performance */}
//           <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
//             <div className="mb-5 flex items-center justify-between">
//               <div>
//                 <h3 className="text-lg font-bold text-slate-800">
//                   أداء المواد الدراسية
//                 </h3>
//                 <p className="mt-2 text-xs text-slate-400">
//                   متوسط درجات الطلاب حسب المادة
//                 </p>
//               </div>
//               <Award className="text-orange-500" size={25} />
//             </div>

//             <div className="h-80 w-full">
//               <ResponsiveContainer width="100%" height="100%">
//                 <BarChart data={performanceData} layout="vertical">
//                   <CartesianGrid strokeDasharray="3 3" horizontal={false} />
//                   <XAxis type="number" domain={[0, 100]} />
//                   <YAxis dataKey="subject" type="category" width={95} />
//                   <Tooltip />
//                   <Bar
//                     dataKey="score"
//                     name="متوسط الدرجات"
//                     fill="#8b5cf6"
//                     radius={[0, 8, 8, 0]}
//                   />
//                 </BarChart>
//               </ResponsiveContainer>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Financial Analytics */}
//       <section className="mb-8">
//         <h2 className="mb-5 text-xl font-bold text-slate-800">
//           التحليلات المالية
//         </h2>

//         <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
//           <div className="mb-6 flex items-center justify-between">
//             <div>
//               <h3 className="text-lg font-bold text-slate-800">
//                 الإيرادات والمصروفات
//               </h3>
//               <p className="mt-2 text-xs text-slate-400">
//                 مقارنة التدفقات المالية بالجنيه المصري
//               </p>
//             </div>
//             <CreditCard className="text-blue-600" size={26} />
//           </div>

//           <div className="h-80 w-full">
//             <ResponsiveContainer width="100%" height="100%">
//               <BarChart data={filteredFinance}>
//                 <CartesianGrid strokeDasharray="3 3" vertical={false} />
//                 <XAxis dataKey="month" />
//                 <YAxis />
//                 <Tooltip />
//                 <Legend />
//                 <Bar
//                   dataKey="income"
//                   name="الإيرادات"
//                   fill="#2563eb"
//                   radius={[6, 6, 0, 0]}
//                 />
//                 <Bar
//                   dataKey="expenses"
//                   name="المصروفات"
//                   fill="#f59e0b"
//                   radius={[6, 6, 0, 0]}
//                 />
//               </BarChart>
//             </ResponsiveContainer>
//           </div>
//         </div>
//       </section>

//       {/* Performance Indicators */}
//       <section className="mb-8">
//         <h2 className="mb-5 text-xl font-bold text-slate-800">
//           مؤشرات الأداء العامة
//         </h2>

//         <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
//           {[
//             { title: "نسبة الحضور", value: 96, icon: UserCheck },
//             { title: "نسبة النجاح", value: 94, icon: Award },
//             { title: "تحصيل المصروفات", value: 92, icon: Wallet },
//             { title: "إنجاز المناهج", value: 88, icon: Library },
//           ].map((item) => {
//             const Icon = item.icon;

//             return (
//               <div
//                 key={item.title}
//                 className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm"
//               >
//                 <div className="flex items-center justify-between">
//                   <span className="text-sm font-semibold text-slate-600">
//                     {item.title}
//                   </span>
//                   <Icon className="text-blue-600" size={21} />
//                 </div>

//                 <div className="mt-5 flex items-end justify-between">
//                   <strong className="text-3xl font-extrabold text-slate-800">
//                     {item.value}%
//                   </strong>
//                   <Target className="mb-1 text-slate-300" size={25} />
//                 </div>

//                 <div className="mt-4 h-2.5 overflow-hidden rounded-full bg-slate-100">
//                   <div
//                     className="h-full rounded-full bg-blue-600"
//                     style={{ width: `${item.value}%` }}
//                   />
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </section>

//       {/* Latest Activities */}
//       <section className="grid grid-cols-1 gap-6 xl:grid-cols-2">

//         <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
//           <div className="mb-6 flex items-center justify-between">
//             <h3 className="text-lg font-bold text-slate-800">
//               آخر الأنشطة الإدارية
//             </h3>
//             <Bell className="text-blue-600" />
//           </div>

//           <div className="space-y-6">
//             {activities.map((activity, index) => {
//               const Icon = activity.icon;

//               return (
//                 <div key={index} className="flex items-start gap-4">
//                   <div className="rounded-xl bg-blue-50 p-3 text-blue-600">
//                     <Icon size={21} />
//                   </div>

//                   <div className="flex-1">
//                     <h4 className="text-sm font-bold text-slate-800">
//                       {activity.title}
//                     </h4>
//                     <p className="mt-1 text-xs text-slate-500">
//                       {activity.description}
//                     </p>
//                     <span className="mt-2 block text-xs text-slate-400">
//                       {activity.time}
//                     </span>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>

//         <div className="rounded-2xl bg-gradient-to-br from-blue-700 to-indigo-900 p-7 text-white shadow-lg">
//           <div className="flex items-center justify-between">
//             <div>
//               <p className="text-sm text-blue-100">
//                 مدرسة الرواد الحديثة
//               </p>
//               <h3 className="mt-3 text-2xl font-extrabold">
//                 التقرير الإداري الشامل
//               </h3>
//             </div>
//             <School size={42} className="text-blue-200" />
//           </div>

//           <p className="mt-6 text-sm leading-8 text-blue-100">
//             توفر لوحة التحليلات رؤية شاملة لمتابعة الأداء التعليمي
//             والإداري والمالي، وتساعد الإدارة على متابعة مؤشرات المدرسة
//             واتخاذ القرارات بناءً على التقارير والإحصائيات.
//           </p>

//           <div className="mt-8 grid grid-cols-2 gap-4">
//             <div className="rounded-xl bg-white/10 p-4">
//               <Clock size={21} />
//               <p className="mt-3 text-sm text-blue-100">
//                 متابعة دورية
//               </p>
//             </div>

//             <div className="rounded-xl bg-white/10 p-4">
//               <TrendingUp size={21} />
//               <p className="mt-3 text-sm text-blue-100">
//                 تحليل الأداء
//               </p>
//             </div>
//           </div>

//           <button
//             onClick={() => window.print()}
//             className="mt-7 flex w-full items-center justify-center gap-2 rounded-xl bg-white px-5 py-4 font-bold text-blue-800 transition hover:bg-blue-50"
//           >
//             <Download size={19} />
//             طباعة التقرير الكامل
//           </button>
//         </div>
//       </section>

//       <footer className="mt-10 border-t border-slate-200 pt-6 text-center text-xs text-slate-400">
//         جميع الحقوق محفوظة © مدرسة الرواد الحديثة
//       </footer>
//     </main>
//   );
// }








"use client";

import { useMemo, useState } from "react";
import {
  Users,
  GraduationCap,
  School,
  Wallet,
  TrendingUp,
  TrendingDown,
  CalendarCheck,
  BookOpen,
  ClipboardList,
  UserCheck,
  UserX,
  Award,
  Clock,
  Download,
  ArrowUpLeft,
  Bell,
  Target,
  Activity,
  CreditCard,
  Library,
  Search,
  MoreHorizontal,
  ChevronDown,
  CalendarDays,
  Building2,
  BriefcaseBusiness,
  FileText,
  ShieldCheck,
  CircleDollarSign,
  ChartNoAxesCombined,
  Presentation,
  Bus,
  Monitor,
  Star,
  AlertTriangle,
  CheckCircle2,
  GraduationCap as Cap,
} from "lucide-react";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  Legend,
  AreaChart,
  Area,
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ComposedChart,
} from "recharts";

/* =========================
   SCHOOL ANALYTICS DATA
========================= */

const enrollmentData = [
  { month: "يناير", students: 850, newStudents: 35 },
  { month: "فبراير", students: 920, newStudents: 70 },
  { month: "مارس", students: 980, newStudents: 60 },
  { month: "أبريل", students: 1050, newStudents: 75 },
  { month: "مايو", students: 1120, newStudents: 70 },
  { month: "يونيو", students: 1250, newStudents: 130 },
  { month: "يوليو", students: 1290, newStudents: 40 },
  { month: "أغسطس", students: 1380, newStudents: 90 },
  { month: "سبتمبر", students: 1450, newStudents: 70 },
  { month: "أكتوبر", students: 1510, newStudents: 60 },
  { month: "نوفمبر", students: 1580, newStudents: 70 },
  { month: "ديسمبر", students: 1650, newStudents: 70 },
];

const attendanceData = [
  { day: "الأحد", attendance: 96, absence: 4, late: 3 },
  { day: "الإثنين", attendance: 94, absence: 6, late: 5 },
  { day: "الثلاثاء", attendance: 98, absence: 2, late: 2 },
  { day: "الأربعاء", attendance: 92, absence: 8, late: 7 },
  { day: "الخميس", attendance: 95, absence: 5, late: 4 },
];

const stagesData = [
  { name: "الابتدائية", value: 720 },
  { name: "الإعدادية", value: 560 },
  { name: "الثانوية", value: 370 },
];

const performanceData = [
  { subject: "اللغة العربية", score: 92, target: 90 },
  { subject: "الرياضيات", score: 85, target: 90 },
  { subject: "العلوم", score: 89, target: 90 },
  { subject: "الإنجليزية", score: 94, target: 90 },
  { subject: "الدراسات", score: 87, target: 90 },
  { subject: "الحاسب", score: 96, target: 90 },
];

const financeData = [
  { month: "يناير", income: 180000, expenses: 90000 },
  { month: "فبراير", income: 220000, expenses: 110000 },
  { month: "مارس", income: 250000, expenses: 130000 },
  { month: "أبريل", income: 280000, expenses: 150000 },
  { month: "مايو", income: 310000, expenses: 140000 },
  { month: "يونيو", income: 350000, expenses: 170000 },
  { month: "يوليو", income: 390000, expenses: 190000 },
  { month: "أغسطس", income: 420000, expenses: 210000 },
  { month: "سبتمبر", income: 460000, expenses: 220000 },
  { month: "أكتوبر", income: 490000, expenses: 250000 },
  { month: "نوفمبر", income: 520000, expenses: 260000 },
  { month: "ديسمبر", income: 570000, expenses: 280000 },
];

const departmentsData = [
  { subject: "التعليم", value: 95 },
  { subject: "الإدارة", value: 88 },
  { subject: "الأنشطة", value: 82 },
  { subject: "التكنولوجيا", value: 94 },
  { subject: "الانضباط", value: 90 },
  { subject: "الخدمات", value: 86 },
];

const classesData = [
  { name: "الصف الأول", students: 180 },
  { name: "الصف الثاني", students: 210 },
  { name: "الصف الثالث", students: 195 },
  { name: "الصف الرابع", students: 230 },
  { name: "الصف الخامس", students: 205 },
  { name: "الصف السادس", students: 220 },
];

const COLORS = ["#2563eb", "#10b981", "#f59e0b", "#8b5cf6"];

const activities = [
  {
    title: "تسجيل طالب جديد",
    description: "تمت إضافة طالب جديد إلى المرحلة الابتدائية",
    time: "منذ 15 دقيقة",
    type: "students",
  },
  {
    title: "تسجيل الحضور",
    description: "تم تحديث سجل حضور الصف الثالث الإعدادي",
    time: "منذ 30 دقيقة",
    type: "attendance",
  },
  {
    title: "إضافة نتائج امتحانات",
    description: "تم رفع نتائج اختبارات الرياضيات",
    time: "منذ ساعة",
    type: "results",
  },
  {
    title: "تحديث ملف معلم",
    description: "تم تحديث البيانات الوظيفية لأحد المعلمين",
    time: "منذ ساعتين",
    type: "teacher",
  },
  {
    title: "عملية تحصيل مالي",
    description: "تم تسجيل دفعة مصروفات دراسية",
    time: "منذ 3 ساعات",
    type: "finance",
  },
];

const alerts = [
  {
    title: "طلاب بحاجة إلى متابعة",
    description: "هناك طلاب تجاوزوا نسبة الغياب المسموح بها",
    type: "warning",
  },
  {
    title: "امتحانات قادمة",
    description: "توجد امتحانات مجدولة خلال الأسبوع القادم",
    type: "info",
  },
  {
    title: "مراجعة المصروفات",
    description: "توجد دفعات مالية تحتاج إلى مراجعة",
    type: "danger",
  },
];

/* =========================
   COMPONENT
========================= */

export default function Analytics() {
  const [period, setPeriod] = useState("12");
  const [activeTab, setActiveTab] = useState("overview");
  const [search, setSearch] = useState("");

  const filteredEnrollment = useMemo(
    () =>
      period === "3"
        ? enrollmentData.slice(-3)
        : period === "6"
        ? enrollmentData.slice(-6)
        : enrollmentData,
    [period]
  );

  const filteredFinance = useMemo(
    () =>
      period === "3"
        ? financeData.slice(-3)
        : period === "6"
        ? financeData.slice(-6)
        : financeData,
    [period]
  );

  const statCards = [
    {
      title: "إجمالي الطلاب",
      value: "1,650",
      detail: "مقارنة بالعام السابق",
      growth: "+14.8%",
      icon: Users,
      color: "blue",
    },
    {
      title: "إجمالي المعلمين",
      value: "125",
      detail: "المعلمين والإداريين",
      growth: "+8.2%",
      icon: GraduationCap,
      color: "green",
    },
    {
      title: "الفصول الدراسية",
      value: "48",
      detail: "جميع المراحل التعليمية",
      growth: "+4.5%",
      icon: School,
      color: "purple",
    },
    {
      title: "الإيرادات السنوية",
      value: "4.9M",
      detail: "جنيه مصري",
      growth: "+18.5%",
      icon: Wallet,
      color: "orange",
    },
    {
      title: "معدل الحضور",
      value: "95.4%",
      detail: "متوسط الحضور العام",
      growth: "+3.2%",
      icon: UserCheck,
      color: "cyan",
    },
    {
      title: "معدل النجاح",
      value: "94.2%",
      detail: "النتائج الأكاديمية",
      growth: "+5.6%",
      icon: Award,
      color: "pink",
    },
    {
      title: "المواد الدراسية",
      value: "24",
      detail: "المواد والمقررات",
      growth: "+2",
      icon: BookOpen,
      color: "indigo",
    },
    {
      title: "الامتحانات",
      value: "36",
      detail: "امتحانات العام الدراسي",
      growth: "+12%",
      icon: ClipboardList,
      color: "red",
    },
  ];

  const colorClasses: Record<string, string> = {
    blue: "bg-blue-50 text-blue-600",
    green: "bg-green-50 text-green-600",
    purple: "bg-purple-50 text-purple-600",
    orange: "bg-orange-50 text-orange-600",
    cyan: "bg-cyan-50 text-cyan-600",
    pink: "bg-pink-50 text-pink-600",
    indigo: "bg-indigo-50 text-indigo-600",
    red: "bg-red-50 text-red-600",
  };

  const visibleActivities = activities.filter((activity) =>
    `${activity.title} ${activity.description}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <main
      dir="rtl"
      className="min-h-screen bg-[#f4f6fb] p-4 text-slate-800 md:p-7 xl:p-9"
    >
      {/* HEADER */}

      <header className="mb-8 overflow-hidden rounded-3xl bg-gradient-to-l from-[#101f46] via-[#173b75] to-[#2563eb] p-6 text-white shadow-xl md:p-9">
        <div className="flex flex-col justify-between gap-7 lg:flex-row lg:items-center">
          <div>
            <div className="mb-4 flex items-center gap-2 text-sm font-semibold text-blue-200">
              <ChartNoAxesCombined size={19} />
              مركز التحليلات الذكية
            </div>

            <h1 className="text-3xl font-black leading-tight md:text-4xl">
              لوحة القيادة المركزية
            </h1>

            <h2 className="mt-2 text-xl font-bold text-blue-100">
              مدرسة الرواد الحديثة
            </h2>

            <p className="mt-4 max-w-2xl text-sm leading-8 text-blue-100">
              نظام متكامل لمراقبة الأداء الأكاديمي والإداري والمالي،
              وتحليل مؤشرات المؤسسة التعليمية، ومتابعة جودة الخدمات
              التعليمية واتخاذ القرارات الاستراتيجية.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:min-w-[300px]">
            <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur">
              <CalendarDays size={22} className="text-blue-200" />
              <p className="mt-3 text-xs text-blue-100">العام الدراسي</p>
              <p className="mt-1 text-lg font-extrabold">2026 / 2027</p>
            </div>

            <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur">
              <Activity size={22} className="text-blue-200" />
              <p className="mt-3 text-xs text-blue-100">حالة المنصة</p>
              <p className="mt-1 text-lg font-extrabold">نشطة</p>
            </div>
          </div>
        </div>

        <div className="mt-7 flex flex-wrap items-center justify-between gap-4 border-t border-white/15 pt-5">
          <div className="flex items-center gap-2 text-sm text-blue-100">
            <ShieldCheck size={18} />
            لوحة متابعة الإدارة العليا
          </div>

          <button
            onClick={() => window.print()}
            className="flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-blue-800 transition hover:bg-blue-50"
          >
            <Download size={18} />
            تصدير وطباعة التقرير
          </button>
        </div>
      </header>

      {/* NAVIGATION TABS */}

      <div className="mb-8 flex flex-wrap gap-2 rounded-2xl border border-slate-100 bg-white p-2 shadow-sm">
        {[
          { id: "overview", label: "نظرة عامة", icon: Activity },
          { id: "academic", label: "الأداء الأكاديمي", icon: BookOpen },
          { id: "financial", label: "الإدارة المالية", icon: Wallet },
          { id: "administrative", label: "الإدارة والموارد", icon: Building2 },
        ].map((tab) => {
          const Icon = tab.icon;

          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-bold transition ${
                activeTab === tab.id
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-100"
                  : "text-slate-500 hover:bg-slate-50 hover:text-blue-600"
              }`}
            >
              <Icon size={18} />
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* FILTER BAR */}

      <div className="mb-7 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
        <div>
          <h2 className="font-extrabold">تحليل بيانات المؤسسة</h2>
          <p className="mt-1 text-xs text-slate-400">
            اختر الفترة المناسبة لمراجعة المؤشرات
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <select
            value={period}
            onChange={(e) => setPeriod(e.target.value)}
            className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold outline-none focus:border-blue-500"
          >
            <option value="3">آخر 3 أشهر</option>
            <option value="6">آخر 6 أشهر</option>
            <option value="12">العام بالكامل</option>
          </select>

          <button
            onClick={() => {
              setPeriod("12");
              setActiveTab("overview");
              setSearch("");
            }}
            className="rounded-xl border border-slate-200 px-4 py-3 text-sm font-bold text-slate-600 hover:bg-slate-50"
          >
            إعادة ضبط
          </button>
        </div>
      </div>

      {/* OVERVIEW */}

      {activeTab === "overview" && (
        <>
          <section className="mb-9">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <h2 className="text-xl font-black">المؤشرات الاستراتيجية</h2>
                <p className="mt-1 text-sm text-slate-400">
                  أهم الأرقام والمؤشرات الخاصة بالمدرسة
                </p>
              </div>
              <MoreHorizontal className="text-slate-400" />
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
              {statCards.map((stat) => {
                const Icon = stat.icon;

                return (
                  <div
                    key={stat.title}
                    className="group rounded-2xl border border-slate-100 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                  >
                    <div className="flex items-start justify-between">
                      <div className={`rounded-2xl p-3 ${colorClasses[stat.color]}`}>
                        <Icon size={25} />
                      </div>

                      <span className="flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-extrabold text-green-600">
                        <TrendingUp size={13} />
                        {stat.growth}
                      </span>
                    </div>

                    <p className="mt-5 text-sm font-semibold text-slate-500">
                      {stat.title}
                    </p>

                    <h3 className="mt-2 text-3xl font-black tracking-tight text-slate-900">
                      {stat.value}
                    </h3>

                    <p className="mt-3 text-xs text-slate-400">
                      {stat.detail}
                    </p>
                  </div>
                );
              })}
            </div>
          </section>

          {/* ENROLLMENT */}

          <section className="mb-7 grid grid-cols-1 gap-6 xl:grid-cols-3">
            <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm xl:col-span-2">
              <div className="mb-7 flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-black">النمو والتسجيل الطلابي</h3>
                  <p className="mt-2 text-xs text-slate-400">
                    تطور إجمالي أعداد الطلاب والتسجيلات الجديدة
                  </p>
                </div>
                <Users className="text-blue-600" size={25} />
              </div>

              <div className="h-80 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <ComposedChart data={filteredEnrollment}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar
                      dataKey="newStudents"
                      name="التسجيلات الجديدة"
                      fill="#93c5fd"
                      radius={[6, 6, 0, 0]}
                    />
                    <Line
                      type="monotone"
                      dataKey="students"
                      name="إجمالي الطلاب"
                      stroke="#2563eb"
                      strokeWidth={3}
                      dot={{ r: 4 }}
                    />
                  </ComposedChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="rounded-3xl bg-[#142c59] p-6 text-white shadow-lg">
              <div className="flex items-center justify-between">
                <h3 className="font-bold">ملخص التسجيل</h3>
                <GraduationCap className="text-blue-300" size={25} />
              </div>

              <div className="mt-9">
                <p className="text-sm text-blue-200">إجمالي الطلاب</p>
                <h2 className="mt-2 text-5xl font-black">1,650</h2>
                <div className="mt-4 flex items-center gap-2 text-sm text-green-300">
                  <TrendingUp size={17} />
                  نمو التسجيلات 14.8%
                </div>
              </div>

              <div className="my-8 h-px bg-white/15" />

              {[
                ["طلاب المرحلة الابتدائية", "720"],
                ["طلاب المرحلة الإعدادية", "560"],
                ["طلاب المرحلة الثانوية", "370"],
              ].map(([name, value]) => (
                <div
                  key={name}
                  className="mb-5 flex items-center justify-between text-sm"
                >
                  <span className="text-blue-100">{name}</span>
                  <strong>{value}</strong>
                </div>
              ))}

              <div className="mt-8 rounded-xl bg-white/10 p-4">
                <div className="flex items-center gap-2 text-blue-200">
                  <Target size={18} />
                  <span className="text-sm font-bold">الهدف السنوي</span>
                </div>
                <div className="mt-3 flex justify-between text-xs">
                  <span>1,650 من 2,000 طالب</span>
                  <strong>82.5%</strong>
                </div>
                <div className="mt-3 h-2 rounded-full bg-white/20">
                  <div className="h-full w-[82.5%] rounded-full bg-blue-300" />
                </div>
              </div>
            </div>
          </section>

          {/* ATTENDANCE AND STAGES */}

          <section className="mb-8 grid grid-cols-1 gap-6 xl:grid-cols-2">
            <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-black">مؤشرات الحضور والانضباط</h3>
              <p className="mt-2 text-xs text-slate-400">
                تحليل الحضور والغياب والتأخير خلال الأسبوع
              </p>

              <div className="mt-6 h-72">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={attendanceData}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="day" />
                    <YAxis domain={[0, 100]} />
                    <Tooltip />
                    <Legend />
                    <Area
                      type="monotone"
                      dataKey="attendance"
                      name="الحضور %"
                      stroke="#10b981"
                      fill="#10b981"
                      fillOpacity={0.13}
                      strokeWidth={3}
                    />
                    <Area
                      type="monotone"
                      dataKey="absence"
                      name="الغياب %"
                      stroke="#ef4444"
                      fill="#ef4444"
                      fillOpacity={0.08}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-black">توزيع الطلاب التعليمي</h3>
              <p className="mt-2 text-xs text-slate-400">
                توزيع الطلاب حسب المرحلة الدراسية
              </p>

              <div className="mt-4 h-72">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={stagesData}
                      dataKey="value"
                      nameKey="name"
                      innerRadius={65}
                      outerRadius={105}
                      paddingAngle={5}
                      label
                    >
                      {stagesData.map((item, index) => (
                        <Cell key={item.name} fill={COLORS[index]} />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </section>

          {/* ALERTS */}

          <section className="mb-8 rounded-3xl border border-slate-100 bg-white p-6 shadow-sm">
            <div className="mb-6 flex items-center justify-between">
              <h3 className="text-lg font-black">التنبيهات والإشعارات الإدارية</h3>
              <Bell className="text-blue-600" />
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {alerts.map((alert) => (
                <div
                  key={alert.title}
                  className={`rounded-2xl border p-5 ${
                    alert.type === "warning"
                      ? "border-amber-100 bg-amber-50"
                      : alert.type === "danger"
                      ? "border-red-100 bg-red-50"
                      : "border-blue-100 bg-blue-50"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <AlertTriangle
                      size={21}
                      className={
                        alert.type === "danger"
                          ? "text-red-500"
                          : alert.type === "warning"
                          ? "text-amber-500"
                          : "text-blue-500"
                      }
                    />
                    <strong className="text-sm">{alert.title}</strong>
                  </div>
                  <p className="mt-3 text-xs leading-7 text-slate-600">
                    {alert.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </>
      )}

      {/* ACADEMIC */}

      {activeTab === "academic" && (
        <section className="space-y-7">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {[
              ["متوسط النجاح", "94.2%", Award],
              ["عدد المواد", "24", BookOpen],
              ["الامتحانات المنفذة", "36", ClipboardList],
            ].map(([title, value, Icon]) => {
              const ItemIcon = Icon as typeof Award;
              return (
                <div key={title as string} className="rounded-2xl bg-white p-6 shadow-sm">
                  <ItemIcon className="text-blue-600" size={27} />
                  <p className="mt-4 text-sm text-slate-500">{title as string}</p>
                  <h3 className="mt-2 text-3xl font-black">{value as string}</h3>
                </div>
              );
            })}
          </div>

          <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
            <div className="rounded-3xl bg-white p-6 shadow-sm">
              <h3 className="mb-2 text-lg font-black">تحليل نتائج المواد الدراسية</h3>
              <p className="mb-6 text-xs text-slate-400">
                مقارنة متوسط درجات الطلاب بالمستهدف
              </p>

              <div className="h-96">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={performanceData}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="subject" />
                    <YAxis domain={[0, 100]} />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="score" name="المتوسط" fill="#2563eb" radius={[7, 7, 0, 0]} />
                    <Bar dataKey="target" name="المستهدف" fill="#cbd5e1" radius={[7, 7, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="rounded-3xl bg-white p-6 shadow-sm">
              <h3 className="mb-2 text-lg font-black">مؤشرات جودة التعليم</h3>
              <p className="mb-6 text-xs text-slate-400">
                تقييم الأداء عبر المجالات التعليمية والإدارية
              </p>

              <div className="h-96">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart data={departmentsData}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="subject" />
                    <PolarRadiusAxis domain={[0, 100]} />
                    <Radar
                      name="مؤشر الأداء"
                      dataKey="value"
                      stroke="#2563eb"
                      fill="#2563eb"
                      fillOpacity={0.3}
                    />
                    <Tooltip />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <h3 className="mb-6 text-lg font-black">توزيع الطلاب حسب الصفوف</h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={classesData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="students" name="عدد الطلاب" fill="#10b981" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </section>
      )}

      {/* FINANCIAL */}

      {activeTab === "financial" && (
        <section className="space-y-7">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {[
              ["إجمالي الإيرادات", "4.9 مليون", CircleDollarSign],
              ["إجمالي المصروفات", "2.1 مليون", CreditCard],
              ["صافي الفائض", "2.8 مليون", TrendingUp],
              ["نسبة التحصيل", "92%", Wallet],
            ].map(([title, value, Icon]) => {
              const ItemIcon = Icon as typeof Wallet;
              return (
                <div key={title as string} className="rounded-2xl bg-white p-6 shadow-sm">
                  <ItemIcon size={27} className="text-blue-600" />
                  <p className="mt-4 text-sm text-slate-500">{title as string}</p>
                  <h3 className="mt-2 text-2xl font-black">{value as string}</h3>
                </div>
              );
            })}
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <h3 className="text-lg font-black">التدفقات المالية</h3>
            <p className="mt-2 text-xs text-slate-400">
              مقارنة الإيرادات والمصروفات خلال العام
            </p>

            <div className="mt-7 h-96">
              <ResponsiveContainer width="100%" height="100%">
                <ComposedChart data={filteredFinance}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="income" name="الإيرادات" fill="#2563eb" radius={[7, 7, 0, 0]} />
                  <Bar dataKey="expenses" name="المصروفات" fill="#f59e0b" radius={[7, 7, 0, 0]} />
                  <Line type="monotone" dataKey="income" name="اتجاه الإيرادات" stroke="#10b981" strokeWidth={3} />
                </ComposedChart>
              </ResponsiveContainer>
            </div>
          </div>
        </section>
      )}

      {/* ADMINISTRATIVE */}

      {activeTab === "administrative" && (
        <section className="space-y-7">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {[
              ["الموظفون", "125", BriefcaseBusiness],
              ["المعلمون", "85", GraduationCap],
              ["المباني", "3", Building2],
              ["الفصول", "48", School],
              ["الحافلات", "12", Bus],
              ["المكتبة", "1", Library],
              ["الأجهزة التقنية", "150", Monitor],
              ["الخدمات", "18", ShieldCheck],
            ].map(([title, value, Icon]) => {
              const ItemIcon = Icon as typeof School;
              return (
                <div key={title as string} className="rounded-2xl bg-white p-6 shadow-sm">
                  <ItemIcon size={26} className="text-blue-600" />
                  <p className="mt-4 text-sm text-slate-500">{title as string}</p>
                  <h3 className="mt-2 text-3xl font-black">{value as string}</h3>
                </div>
              );
            })}
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <h3 className="mb-6 text-lg font-black">تقييم الأقسام المؤسسية</h3>
            <div className="space-y-7">
              {departmentsData.map((item) => (
                <div key={item.subject}>
                  <div className="mb-2 flex justify-between text-sm">
                    <strong>{item.subject}</strong>
                    <span className="font-bold text-blue-600">{item.value}%</span>
                  </div>
                  <div className="h-3 overflow-hidden rounded-full bg-slate-100">
                    <div
                      className="h-full rounded-full bg-gradient-to-l from-blue-600 to-cyan-400"
                      style={{ width: `${item.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ACTIVITY LOG */}

      <section className="mt-9 grid grid-cols-1 gap-6 xl:grid-cols-2">
        <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
            <div>
              <h3 className="text-lg font-black">سجل النشاطات الأخير</h3>
              <p className="mt-2 text-xs text-slate-400">
                متابعة آخر العمليات المسجلة على المنصة
              </p>
            </div>

            <div className="relative">
              <Search className="absolute right-3 top-3 text-slate-400" size={17} />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="بحث في النشاطات"
                className="w-48 rounded-xl border border-slate-200 py-2.5 pr-9 pl-3 text-xs outline-none focus:border-blue-500"
              />
            </div>
          </div>

          <div className="space-y-5">
            {visibleActivities.length ? (
              visibleActivities.map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <div className="rounded-xl bg-blue-50 p-3 text-blue-600">
                    <Activity size={20} />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-bold">{item.title}</h4>
                    <p className="mt-1 text-xs leading-6 text-slate-500">
                      {item.description}
                    </p>
                    <span className="mt-2 block text-xs text-slate-400">
                      {item.time}
                    </span>
                  </div>
                </div>
              ))
            ) : (
              <p className="py-8 text-center text-sm text-slate-400">
                لا توجد نتائج مطابقة
              </p>
            )}
          </div>
        </div>

        <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-[#12234b] to-[#2454a5] p-7 text-white shadow-xl">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-sm text-blue-200">الملف المؤسسي</span>
              <h3 className="mt-3 text-2xl font-black">
                مدرسة الرواد الحديثة
              </h3>
            </div>
            <Presentation size={43} className="text-blue-200" />
          </div>

          <p className="mt-6 text-sm leading-8 text-blue-100">
            تهدف لوحة القيادة إلى توفير رؤية متكاملة لمستوى الأداء،
            وتسهيل متابعة المؤشرات الاستراتيجية، ورفع كفاءة الإدارة
            المدرسية من خلال التحليل المستمر للبيانات.
          </p>

          <div className="my-7 grid grid-cols-2 gap-3">
            <div className="rounded-2xl border border-white/10 bg-white/10 p-4">
              <CheckCircle2 size={23} className="text-green-300" />
              <p className="mt-3 text-sm font-bold">متابعة الأداء</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/10 p-4">
              <Star size={23} className="text-amber-300" />
              <p className="mt-3 text-sm font-bold">جودة التعليم</p>
            </div>
          </div>

          <button
            onClick={() => window.print()}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-white px-5 py-4 font-extrabold text-blue-800 transition hover:bg-blue-50"
          >
            <FileText size={19} />
            طباعة التقرير الشامل
            <ArrowUpLeft size={18} />
          </button>
        </div>
      </section>

      {/* FOOTER */}

      <footer className="mt-10 flex flex-wrap items-center justify-between gap-3 border-t border-slate-200 pt-6 text-xs text-slate-400">
        <span>مدرسة الرواد الحديثة - نظام الإدارة والتحليلات</span>
        <span>جميع الحقوق محفوظة © 2026</span>
      </footer>
    </main>
  );
}
