
"use client";

import { useMemo, useState } from "react";
import {
  Activity, Users, GraduationCap, School, Wallet, TrendingUp,
  TrendingDown, CalendarDays, BookOpen, Award, UserCheck, UserX,
  Clock, Download, Search, Bell, Target, Building2, Briefcase,
  CreditCard, Library, Monitor, Bus, ShieldCheck, ChartNoAxesCombined,
  ArrowUpLeft, ChevronDown, CircleDollarSign, ClipboardList,
  FileText, CheckCircle2, AlertTriangle, Star, BrainCircuit,
  Presentation, Layers, Gauge, Zap, Globe, Trophy, Timer,
  CircleCheck, CircleAlert, ArrowDownLeft, RefreshCw, Filter,
  BarChart3, PieChart as PieIcon, HeartPulse, GraduationCap as Cap,
} from "lucide-react";

import {
  ResponsiveContainer, AreaChart, Area, BarChart, Bar,
  LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis,
  CartesianGrid, Tooltip, Legend, RadarChart, Radar,
  PolarGrid, PolarAngleAxis, PolarRadiusAxis, ComposedChart,
  ReferenceLine,
} from "recharts";

/* =====================================================
   AL ROWAD MODERN SCHOOL
   SCHOOL INTELLIGENCE & BUSINESS ANALYTICS CENTER
   ===================================================== */

/* تنبيه: البيانات التالية تجريبية للعرض.
   استبدليها ببيانات API الفعلية للمدرسة. */

const C = {
  navy: "#102344",
  blue: "#2563eb",
  cyan: "#06b6d4",
  green: "#10b981",
  orange: "#f59e0b",
  red: "#ef4444",
  purple: "#8b5cf6",
  pink: "#ec4899",
};

const months = [
  "يناير", "فبراير", "مارس", "أبريل",
  "مايو", "يونيو", "يوليو", "أغسطس",
  "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر",
];

const studentGrowth = [
  { month: "يناير", total: 1180, new: 42, previous: 1080 },
  { month: "فبراير", total: 1210, new: 55, previous: 1110 },
  { month: "مارس", total: 1250, new: 63, previous: 1150 },
  { month: "أبريل", total: 1300, new: 72, previous: 1190 },
  { month: "مايو", total: 1335, new: 48, previous: 1220 },
  { month: "يونيو", total: 1380, new: 80, previous: 1260 },
  { month: "يوليو", total: 1410, new: 45, previous: 1300 },
  { month: "أغسطس", total: 1460, new: 75, previous: 1340 },
  { month: "سبتمبر", total: 1510, new: 92, previous: 1390 },
  { month: "أكتوبر", total: 1560, new: 67, previous: 1430 },
  { month: "نوفمبر", total: 1605, new: 70, previous: 1470 },
  { month: "ديسمبر", total: 1650, new: 85, previous: 1510 },
];

const attendance = [
  { day: "الأحد", present: 94, absent: 6, late: 4 },
  { day: "الإثنين", present: 96, absent: 4, late: 3 },
  { day: "الثلاثاء", present: 98, absent: 2, late: 2 },
  { day: "الأربعاء", present: 91, absent: 9, late: 7 },
  { day: "الخميس", present: 95, absent: 5, late: 3 },
];

const stageData = [
  { name: "الابتدائية", value: 720, color: C.blue },
  { name: "الإعدادية", value: 560, color: C.cyan },
  { name: "الثانوية", value: 370, color: C.purple },
];

const financial = [
  { month: "يناير", income: 320000, expenses: 180000, profit: 140000 },
  { month: "فبراير", income: 350000, expenses: 195000, profit: 155000 },
  { month: "مارس", income: 390000, expenses: 210000, profit: 180000 },
  { month: "أبريل", income: 410000, expenses: 225000, profit: 185000 },
  { month: "مايو", income: 450000, expenses: 240000, profit: 210000 },
  { month: "يونيو", income: 470000, expenses: 250000, profit: 220000 },
  { month: "يوليو", income: 490000, expenses: 260000, profit: 230000 },
  { month: "أغسطس", income: 520000, expenses: 270000, profit: 250000 },
  { month: "سبتمبر", income: 560000, expenses: 285000, profit: 275000 },
  { month: "أكتوبر", income: 590000, expenses: 300000, profit: 290000 },
  { month: "نوفمبر", income: 620000, expenses: 315000, profit: 305000 },
  { month: "ديسمبر", income: 680000, expenses: 330000, profit: 350000 },
];

const subjects = [
  { subject: "العربية", average: 88, target: 90, last: 83 },
  { subject: "الرياضيات", average: 82, target: 90, last: 78 },
  { subject: "الإنجليزية", average: 94, target: 90, last: 89 },
  { subject: "العلوم", average: 91, target: 90, last: 86 },
  { subject: "الدراسات", average: 86, target: 90, last: 81 },
  { subject: "الحاسب", average: 97, target: 90, last: 92 },
];

const classes = [
  { name: "أولى ابتدائي", students: 125, average: 91, attendance: 96 },
  { name: "ثانية ابتدائي", students: 118, average: 88, attendance: 94 },
  { name: "ثالثة ابتدائي", students: 130, average: 92, attendance: 97 },
  { name: "رابعة ابتدائي", students: 122, average: 85, attendance: 92 },
  { name: "خامسة ابتدائي", students: 115, average: 90, attendance: 95 },
  { name: "سادسة ابتدائي", students: 110, average: 94, attendance: 98 },
];

const radarData = [
  { metric: "جودة التعليم", value: 94 },
  { metric: "الانضباط", value: 88 },
  { metric: "التكنولوجيا", value: 96 },
  { metric: "الأنشطة", value: 82 },
  { metric: "الإدارة", value: 91 },
  { metric: "الخدمات", value: 86 },
];

const departments = [
  { name: "الشؤون التعليمية", value: 94, count: 45 },
  { name: "الإدارة المدرسية", value: 91, count: 12 },
  { name: "شؤون الطلاب", value: 88, count: 15 },
  { name: "التكنولوجيا", value: 96, count: 8 },
  { name: "الخدمات", value: 86, count: 20 },
];

const activities = [
  { title: "تسجيل طالب جديد", description: "تمت إضافة طالب إلى قاعدة بيانات المرحلة الابتدائية", time: "09:15 صباحاً", status: "مكتمل" },
  { title: "تحديث الحضور", description: "تم تحديث سجلات الحضور للفصل الثالث", time: "09:45 صباحاً", status: "مكتمل" },
  { title: "إضافة نتائج", description: "تم تسجيل نتائج اختبار الرياضيات", time: "10:20 صباحاً", status: "مكتمل" },
  { title: "تحديث ملف موظف", description: "تم تحديث بيانات أحد أعضاء هيئة التدريس", time: "11:10 صباحاً", status: "مكتمل" },
  { title: "مراجعة المصروفات", description: "عملية مالية بانتظار المراجعة", time: "11:40 صباحاً", status: "مراجعة" },
];

const alerts = [
  { title: "معدل غياب مرتفع", text: "بعض الفصول تجاوزت معدل الغياب المستهدف.", type: "warning" },
  { title: "مراجعة التحصيل المالي", text: "توجد معاملات مالية تحتاج إلى المراجعة.", type: "danger" },
  { title: "تحسن الأداء الأكاديمي", text: "تحسن متوسط نتائج بعض المواد الدراسية.", type: "success" },
];

const employees = [
  { name: "المعلمون", total: 85, active: 81 },
  { name: "الإداريون", total: 20, active: 19 },
  { name: "المشرفون", total: 12, active: 11 },
  { name: "الدعم الفني", total: 8, active: 8 },
];

const resources = [
  { name: "الفصول الدراسية", value: 48, icon: School },
  { name: "أجهزة الكمبيوتر", value: 150, icon: Monitor },
  { name: "الحافلات المدرسية", value: 12, icon: Bus },
  { name: "المكتبة", value: 1, icon: Library },
  { name: "المعامل", value: 6, icon: BrainCircuit },
  { name: "المرافق", value: 14, icon: Building2 },
];

const formatMoney = (value: number) =>
  `${(value / 1000).toFixed(0)} ألف`;

function SectionTitle({
  title,
  subtitle,
  icon: Icon,
}: {
  title: string;
  subtitle: string;
  icon: React.ElementType;
}) {
  return (
    <div className="mb-6 flex items-center justify-between gap-4">
      <div className="flex items-center gap-3">
        <div className="rounded-xl bg-blue-50 p-3 text-blue-600">
          <Icon size={23} />
        </div>
        <div>
          <h2 className="text-xl font-black text-slate-800">{title}</h2>
          <p className="mt-1 text-xs text-slate-400">{subtitle}</p>
        </div>
      </div>
    </div>
  );
}

function Panel({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`rounded-3xl border border-slate-100 bg-white p-5 shadow-sm md:p-7 ${className}`}>
      {children}
    </div>
  );
}

function Metric({
  title,
  value,
  change,
  icon: Icon,
  color,
  description,
}: {
  title: string;
  value: string;
  change: string;
  icon: React.ElementType;
  color: string;
  description: string;
}) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-slate-100 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className={`absolute -left-8 -top-8 h-28 w-28 rounded-full opacity-10 ${color}`} />
      <div className="relative flex items-start justify-between">
        <div className={`rounded-2xl p-3 ${color} bg-opacity-10`}>
          <Icon size={25} />
        </div>
        <span className="flex items-center gap-1 rounded-full bg-green-50 px-2.5 py-1 text-xs font-bold text-green-600">
          <TrendingUp size={13} />
          {change}
        </span>
      </div>
      <p className="relative mt-5 text-sm font-semibold text-slate-500">{title}</p>
      <h3 className="relative mt-2 text-3xl font-black tracking-tight text-slate-900">{value}</h3>
      <p className="relative mt-3 text-xs text-slate-400">{description}</p>
    </div>
  );
}

export default function SchoolIntelligence() {
  const [activeTab, setActiveTab] = useState("overview");
  const [period, setPeriod] = useState("12");
  const [search, setSearch] = useState("");
  const [stage, setStage] = useState("all");

  const enrollment = useMemo(() => {
    if (period === "3") return studentGrowth.slice(-3);
    if (period === "6") return studentGrowth.slice(-6);
    return studentGrowth;
  }, [period]);

  const finance = useMemo(() => {
    if (period === "3") return financial.slice(-3);
    if (period === "6") return financial.slice(-6);
    return financial;
  }, [period]);

  const filteredActivities = activities.filter((item) =>
    `${item.title} ${item.description}`.includes(search)
  );

  const tabs = [
    { id: "overview", label: "الرؤية الشاملة", icon: Gauge },
    { id: "academic", label: "الذكاء الأكاديمي", icon: GraduationCap },
    { id: "financial", label: "الذكاء المالي", icon: CircleDollarSign },
    { id: "administrative", label: "الموارد والإدارة", icon: Building2 },
    { id: "quality", label: "الجودة والتقييم", icon: Trophy },
  ];

  const metrics = [
    { title: "إجمالي الطلاب", value: "1,650", change: "+14.8%", icon: Users, color: "text-blue-600 bg-blue-600", description: "إجمالي المسجلين" },
    { title: "هيئة التدريس", value: "85", change: "+8.2%", icon: GraduationCap, color: "text-purple-600 bg-purple-600", description: "معلم ومعلمة" },
    { title: "الفصول الدراسية", value: "48", change: "+4.5%", icon: School, color: "text-cyan-600 bg-cyan-600", description: "فصل تعليمي" },
    { title: "الإيرادات السنوية", value: "5.5M", change: "+18.5%", icon: Wallet, color: "text-green-600 bg-green-600", description: "جنيه مصري - قيمة تجريبية" },
    { title: "معدل الحضور", value: "95.4%", change: "+3.2%", icon: UserCheck, color: "text-emerald-600 bg-emerald-600", description: "متوسط الحضور" },
    { title: "معدل النجاح", value: "94.2%", change: "+5.6%", icon: Award, color: "text-orange-600 bg-orange-600", description: "متوسط النتائج" },
    { title: "المواد الدراسية", value: "24", change: "+2", icon: BookOpen, color: "text-indigo-600 bg-indigo-600", description: "مادة تعليمية" },
    { title: "الامتحانات", value: "36", change: "+12%", icon: ClipboardList, color: "text-pink-600 bg-pink-600", description: "اختبار خلال العام" },
  ];

  return (
    <main dir="rtl" className="min-h-screen bg-[#f3f6fc] p-3 text-slate-800 md:p-7 xl:p-9">

      {/* ================= HERO ================= */}

   

      {/* ================= NAVIGATION ================= */}

      <nav className="mb-8 grid grid-cols-2 gap-2 rounded-2xl border border-slate-100 bg-white p-2 shadow-sm sm:grid-cols-3 lg:grid-cols-5">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const selected = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center justify-center gap-2 rounded-xl px-3 py-4 text-xs font-extrabold transition md:text-sm ${
                selected
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-200"
                  : "text-slate-500 hover:bg-blue-50 hover:text-blue-700"
              }`}
            >
              <Icon size={18} />
              {tab.label}
            </button>
          );
        })}
      </nav>

      {/* ================= GLOBAL FILTERS ================= */}

      <div className="mb-8 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="rounded-xl bg-indigo-50 p-3 text-indigo-600"><Filter size={20} /></div>
          <div>
            <h2 className="font-black">مركز التحكم في التقارير</h2>
            <p className="mt-1 text-xs text-slate-400">تخصيص الفترة الزمنية للرسوم والمؤشرات</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          <select value={period} onChange={(e) => setPeriod(e.target.value)} className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-bold outline-none focus:border-blue-500">
            <option value="3">آخر 3 أشهر</option>
            <option value="6">آخر 6 أشهر</option>
            <option value="12">العام بالكامل</option>
          </select>
          <button onClick={() => { setPeriod("12"); setStage("all"); setSearch(""); }} className="rounded-xl border border-slate-200 px-4 py-3 text-sm font-bold text-slate-600 hover:bg-slate-50">
            إعادة تعيين
          </button>
        </div>
      </div>

      {/* ================= OVERVIEW ================= */}

      {activeTab === "overview" && (
        <>
          <SectionTitle title="المؤشرات الاستراتيجية للمدرسة" subtitle="الصورة الرقمية الشاملة لأهم موارد ونتائج المؤسسة التعليمية" icon={ChartNoAxesCombined} />

          <div className="mb-9 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {metrics.map((item) => <Metric key={item.title} {...item} />)}
          </div>

          {/* Growth intelligence */}

          <div className="mb-8 grid grid-cols-1 gap-6 xl:grid-cols-3">
            <Panel className="xl:col-span-2">
              <div className="mb-7 flex flex-wrap items-center justify-between gap-3">
                <div>
                  <h3 className="text-lg font-black">تحليل النمو والتسجيلات الطلابية</h3>
                  <p className="mt-2 text-xs text-slate-400">مقارنة إجمالي الطلاب بالتسجيلات الجديدة والنمو السابق</p>
                </div>
                <span className="rounded-xl bg-blue-50 px-3 py-2 text-xs font-bold text-blue-700">Enrollment Intelligence</span>
              </div>
              <div className="h-[360px]">
                <ResponsiveContainer width="100%" height="100%">
                  <ComposedChart data={enrollment}>
                    <defs>
                      <linearGradient id="studentArea" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor={C.blue} stopOpacity={0.28} />
                        <stop offset="95%" stopColor={C.blue} stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e8edf5" />
                    <XAxis dataKey="month" tick={{ fontSize: 11 }} />
                    <YAxis tick={{ fontSize: 11 }} />
                    <Tooltip />
                    <Legend />
                    <Area type="monotone" dataKey="total" name="إجمالي الطلاب" stroke={C.blue} strokeWidth={3} fill="url(#studentArea)" />
                    <Bar dataKey="new" name="تسجيلات جديدة" fill="#93c5fd" radius={[5, 5, 0, 0]} />
                    <Line type="monotone" dataKey="previous" name="العام السابق" stroke={C.orange} strokeWidth={2} strokeDasharray="6 5" />
                  </ComposedChart>
                </ResponsiveContainer>
              </div>
            </Panel>

            <Panel>
              <h3 className="text-lg font-black">التوزيع التعليمي</h3>
              <p className="mt-2 text-xs text-slate-400">حجم الطلاب حسب المرحلة التعليمية</p>
              <div className="mt-5 h-[260px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie data={stageData} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={65} outerRadius={105} paddingAngle={5}>
                      {stageData.map((item) => <Cell key={item.name} fill={item.color} />)}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="space-y-4">
                {stageData.map((item) => (
                  <div key={item.name} className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <span className="h-3 w-3 rounded-full" style={{ background: item.color }} />
                      {item.name}
                    </div>
                    <strong className="text-sm">{item.value.toLocaleString("en-US")}</strong>
                  </div>
                ))}
              </div>
            </Panel>
          </div>

          {/* Operational performance */}

          <div className="mb-8 grid grid-cols-1 gap-6 xl:grid-cols-2">
            <Panel>
              <h3 className="text-lg font-black">مراقبة الحضور والانضباط</h3>
              <p className="mt-2 text-xs text-slate-400">مقارنة الحضور والغياب خلال أيام الأسبوع</p>
              <div className="mt-6 h-[320px]">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={attendance}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="day" />
                    <YAxis domain={[0, 100]} />
                    <Tooltip />
                    <Legend />
                    <Area type="monotone" dataKey="present" name="الحضور %" stroke={C.green} fill={C.green} fillOpacity={0.14} strokeWidth={3} />
                    <Area type="monotone" dataKey="absent" name="الغياب %" stroke={C.red} fill={C.red} fillOpacity={0.1} />
                    <Line type="monotone" dataKey="late" name="التأخير %" stroke={C.orange} strokeWidth={2} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </Panel>

            <Panel>
              <h3 className="text-lg font-black">مقارنة الأداء المؤسسي</h3>
              <p className="mt-2 text-xs text-slate-400">مستوى الأداء في الإدارات والمجالات الرئيسية</p>
              <div className="mt-5 h-[320px]">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart data={radarData} outerRadius="75%">
                    <PolarGrid />
                    <PolarAngleAxis dataKey="metric" tick={{ fontSize: 11 }} />
                    <PolarRadiusAxis domain={[0, 100]} />
                    <Radar name="مستوى الأداء" dataKey="value" stroke={C.purple} fill={C.purple} fillOpacity={0.3} strokeWidth={2} />
                    <Tooltip />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </Panel>
          </div>

          {/* Financial preview */}

          <Panel className="mb-8">
            <div className="mb-7 flex items-center justify-between">
              <div>
                <h3 className="text-lg font-black">المشهد المالي العام</h3>
                <p className="mt-2 text-xs text-slate-400">مقارنة الإيرادات والمصروفات والفائض المالي</p>
              </div>
              <CircleDollarSign className="text-green-600" size={28} />
            </div>
            <div className="h-[350px]">
              <ResponsiveContainer width="100%" height="100%">
                <ComposedChart data={finance}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="month" />
                  <YAxis tickFormatter={formatMoney} />
                  <Tooltip formatter={(value) => `${Number(value).toLocaleString("en-US")} جنيه`} />
                  <Legend />
                  <Bar dataKey="income" name="الإيرادات" fill={C.blue} radius={[5, 5, 0, 0]} />
                  <Bar dataKey="expenses" name="المصروفات" fill={C.orange} radius={[5, 5, 0, 0]} />
                  <Line type="monotone" dataKey="profit" name="الفائض" stroke={C.green} strokeWidth={3} />
                </ComposedChart>
              </ResponsiveContainer>
            </div>
          </Panel>

          {/* Executive alerts */}

          <SectionTitle title="مركز التنبيهات الاستراتيجية" subtitle="ملاحظات تساعد الإدارة على تحديد الأولويات" icon={Bell} />
          <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-3">
            {alerts.map((alert) => (
              <div key={alert.title} className={`rounded-2xl border p-5 ${alert.type === "danger" ? "border-red-100 bg-red-50" : alert.type === "warning" ? "border-amber-100 bg-amber-50" : "border-green-100 bg-green-50"}`}>
                <div className="flex items-center gap-3">
                  {alert.type === "danger" ? <CircleAlert className="text-red-500" /> : alert.type === "warning" ? <AlertTriangle className="text-amber-500" /> : <CheckCircle2 className="text-green-600" />}
                  <strong className="text-sm">{alert.title}</strong>
                </div>
                <p className="mt-4 text-xs leading-7 text-slate-600">{alert.text}</p>
              </div>
            ))}
          </div>
        </>
      )}

      {/* ================= ACADEMIC INTELLIGENCE ================= */}

      {activeTab === "academic" && (
        <>
          <SectionTitle title="مركز الذكاء الأكاديمي" subtitle="تحليل نتائج الطلاب وجودة التدريس والفصول والمقررات" icon={GraduationCap} />

          <div className="mb-7 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <Metric title="متوسط التحصيل" value="89.5%" change="+4.2%" icon={Award} color="text-blue-600 bg-blue-600" description="متوسط الدرجات" />
            <Metric title="معدل النجاح" value="94.2%" change="+5.6%" icon={Trophy} color="text-green-600 bg-green-600" description="نسبة النجاح الإجمالية" />
            <Metric title="المقررات الدراسية" value="24" change="+2" icon={BookOpen} color="text-purple-600 bg-purple-600" description="عدد المواد" />
          </div>

          <div className="mb-7 grid grid-cols-1 gap-6 xl:grid-cols-2">
            <Panel>
              <h3 className="text-lg font-black">مقارنة درجات المواد الدراسية</h3>
              <p className="mt-2 text-xs text-slate-400">المتوسط الفعلي مقابل المستهدف والعام السابق</p>
              <div className="mt-6 h-[380px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={subjects}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="subject" tick={{ fontSize: 10 }} />
                    <YAxis domain={[0, 100]} />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="average" name="المتوسط الحالي" fill={C.blue} radius={[5, 5, 0, 0]} />
                    <Bar dataKey="target" name="المستهدف" fill="#cbd5e1" radius={[5, 5, 0, 0]} />
                    <Bar dataKey="last" name="العام السابق" fill={C.orange} radius={[5, 5, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </Panel>

            <Panel>
              <h3 className="text-lg font-black">اتجاه التحصيل الدراسي</h3>
              <p className="mt-2 text-xs text-slate-400">تطور المستوى الأكاديمي خلال العام</p>
              <div className="mt-6 h-[380px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={studentGrowth}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="month" tick={{ fontSize: 10 }} />
                    <YAxis domain={[70, 100]} />
                    <Tooltip />
                    <ReferenceLine y={90} stroke={C.orange} strokeDasharray="5 5" label="المستهدف" />
                    <Line type="monotone" dataKey="total" name="إجمالي الطلاب" stroke={C.blue} strokeWidth={3} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </Panel>
          </div>

          <Panel className="mb-7">
            <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
              <div>
                <h3 className="text-lg font-black">تحليل الفصول الدراسية</h3>
                <p className="mt-2 text-xs text-slate-400">مقارنة أعداد الطلاب ومتوسط النتائج والحضور</p>
              </div>
              <select value={stage} onChange={(e) => setStage(e.target.value)} className="rounded-xl border border-slate-200 px-4 py-3 text-sm font-bold outline-none">
                <option value="all">جميع الصفوف</option>
                <option value="primary">المرحلة الابتدائية</option>
              </select>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[600px] text-right text-sm">
                <thead>
                  <tr className="border-b border-slate-100 text-xs text-slate-400">
                    <th className="p-4">الفصل</th>
                    <th className="p-4">عدد الطلاب</th>
                    <th className="p-4">متوسط الدرجات</th>
                    <th className="p-4">الحضور</th>
                    <th className="p-4">التقييم</th>
                  </tr>
                </thead>
                <tbody>
                  {classes.map((item) => (
                    <tr key={item.name} className="border-b border-slate-50 hover:bg-slate-50">
                      <td className="p-4 font-bold">{item.name}</td>
                      <td className="p-4">{item.students}</td>
                      <td className="p-4 font-bold text-blue-600">{item.average}%</td>
                      <td className="p-4">{item.attendance}%</td>
                      <td className="p-4"><span className="rounded-full bg-green-50 px-3 py-1 text-xs font-bold text-green-600">{item.average >= 90 ? "ممتاز" : "جيد جداً"}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Panel>

          <Panel>
            <h3 className="text-lg font-black">تحليل التوزيع الأكاديمي</h3>
            <p className="mt-2 text-xs text-slate-400">نسبة الأداء لكل مادة دراسية</p>
            <div className="mt-7 space-y-6">
              {subjects.map((item) => (
                <div key={item.subject}>
                  <div className="mb-2 flex justify-between text-sm">
                    <strong>{item.subject}</strong>
                    <span className="font-black text-blue-600">{item.average}%</span>
                  </div>
                  <div className="relative h-3 overflow-hidden rounded-full bg-slate-100">
                    <div className="h-full rounded-full bg-gradient-to-l from-blue-700 to-cyan-400" style={{ width: `${item.average}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </Panel>
        </>
      )}

      {/* ================= FINANCIAL INTELLIGENCE ================= */}

      {activeTab === "financial" && (
        <>
          <SectionTitle title="مركز الذكاء المالي" subtitle="إدارة الإيرادات والمصروفات والتحصيل والتخطيط المالي" icon={CircleDollarSign} />

          <div className="mb-7 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
            <Metric title="الإيرادات السنوية" value="5.5M" change="+18.5%" icon={Wallet} color="text-blue-600 bg-blue-600" description="جنيه مصري - تجريبي" />
            <Metric title="المصروفات السنوية" value="2.9M" change="+8.4%" icon={CreditCard} color="text-orange-600 bg-orange-600" description="جنيه مصري - تجريبي" />
            <Metric title="الفائض المالي" value="2.6M" change="+22.1%" icon={TrendingUp} color="text-green-600 bg-green-600" description="جنيه مصري - تجريبي" />
            <Metric title="معدل التحصيل" value="92%" change="+6.5%" icon={CircleCheck} color="text-purple-600 bg-purple-600" description="نسبة تحصيل المصروفات" />
          </div>

          <Panel className="mb-7">
            <h3 className="text-lg font-black">التحليل المالي المقارن</h3>
            <p className="mt-2 text-xs text-slate-400">الإيرادات والمصروفات والفائض على مدار الفترة المحددة</p>
            <div className="mt-6 h-[420px]">
              <ResponsiveContainer width="100%" height="100%">
                <ComposedChart data={finance}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="month" />
                  <YAxis tickFormatter={formatMoney} />
                  <Tooltip formatter={(value) => `${Number(value).toLocaleString("en-US")} جنيه`} />
                  <Legend />
                  <Bar dataKey="income" name="الإيرادات" fill={C.blue} radius={[5, 5, 0, 0]} />
                  <Bar dataKey="expenses" name="المصروفات" fill={C.orange} radius={[5, 5, 0, 0]} />
                  <Area dataKey="profit" name="الفائض المالي" stroke={C.green} fill={C.green} fillOpacity={0.1} />
                </ComposedChart>
              </ResponsiveContainer>
            </div>
          </Panel>

          <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
            <Panel>
              <h3 className="text-lg font-black">توزيع بنود المصروفات</h3>
              <div className="mt-6 h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie data={[
                      { name: "الرواتب", value: 45 },
                      { name: "التشغيل", value: 20 },
                      { name: "الصيانة", value: 12 },
                      { name: "التكنولوجيا", value: 13 },
                      { name: "الأنشطة", value: 10 },
                    ]} dataKey="value" nameKey="name" innerRadius={65} outerRadius={110} paddingAngle={4}>
                      {[C.blue, C.orange, C.green, C.purple, C.cyan].map((color, i) => <Cell key={i} fill={color} />)}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </Panel>

            <Panel>
              <h3 className="text-lg font-black">مؤشرات الكفاءة المالية</h3>
              <p className="mt-2 text-xs text-slate-400">مؤشرات تجريبية قابلة للربط بنظام الحسابات</p>
              <div className="mt-8 space-y-8">
                {[
                  { label: "تحصيل المصروفات", value: 92 },
                  { label: "الالتزام بالميزانية", value: 88 },
                  { label: "كفاءة الإنفاق", value: 91 },
                  { label: "استقرار الإيرادات", value: 95 },
                ].map((item) => (
                  <div key={item.label}>
                    <div className="mb-3 flex justify-between text-sm">
                      <strong>{item.label}</strong>
                      <strong className="text-blue-600">{item.value}%</strong>
                    </div>
                    <div className="h-3 rounded-full bg-slate-100">
                      <div className="h-3 rounded-full bg-gradient-to-l from-blue-700 to-cyan-400" style={{ width: `${item.value}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </Panel>
          </div>
        </>
      )}

      {/* ================= ADMINISTRATION ================= */}

      {activeTab === "administrative" && (
        <>
          <SectionTitle title="مركز الموارد والإدارة" subtitle="تحليل الموارد البشرية والمرافق والأصول والتشغيل" icon={Building2} />

          <div className="mb-7 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {resources.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.name} className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
                  <div className="flex items-center justify-between">
                    <div className="rounded-xl bg-blue-50 p-3 text-blue-600"><Icon size={24} /></div>
                    <span className="text-xs text-green-600">متاح</span>
                  </div>
                  <p className="mt-5 text-sm text-slate-500">{item.name}</p>
                  <h3 className="mt-2 text-3xl font-black">{item.value}</h3>
                </div>
              );
            })}
          </div>

          <Panel className="mb-7">
            <h3 className="text-lg font-black">تحليل القوى العاملة</h3>
            <p className="mt-2 text-xs text-slate-400">إجمالي العاملين والموظفين النشطين حسب الإدارة</p>
            <div className="mt-6 h-[350px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={employees}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="total" name="إجمالي الموظفين" fill="#cbd5e1" radius={[5, 5, 0, 0]} />
                  <Bar dataKey="active" name="الموظفون النشطون" fill={C.blue} radius={[5, 5, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </Panel>

          <Panel>
            <h3 className="mb-6 text-lg font-black">مؤشرات الأقسام الإدارية</h3>
            <div className="space-y-7">
              {departments.map((item) => (
                <div key={item.name}>
                  <div className="mb-2 flex items-center justify-between text-sm">
                    <strong>{item.name}</strong>
                    <span className="font-black text-blue-600">{item.value}%</span>
                  </div>
                  <div className="h-3 overflow-hidden rounded-full bg-slate-100">
                    <div className="h-full rounded-full bg-blue-600" style={{ width: `${item.value}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </Panel>
        </>
      )}

      {/* ================= QUALITY & PERFORMANCE ================= */}

      {activeTab === "quality" && (
        <>
          <SectionTitle title="مركز الجودة والتميز المؤسسي" subtitle="قياس جودة التعليم ومستوى الانضباط والكفاءة المؤسسية" icon={Trophy} />

          <div className="mb-7 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
            <Metric title="الجودة المؤسسية" value="92.8%" change="+3.4%" icon={Star} color="text-amber-600 bg-amber-600" description="مؤشر الأداء العام" />
            <Metric title="جودة التعليم" value="94%" change="+4.1%" icon={Award} color="text-blue-600 bg-blue-600" description="جودة العملية التعليمية" />
            <Metric title="رضا المستفيدين" value="91%" change="+2.8%" icon={HeartPulse} color="text-pink-600 bg-pink-600" description="مؤشر تجريبي" />
            <Metric title="كفاءة التشغيل" value="91.5%" change="+5.2%" icon={Zap} color="text-green-600 bg-green-600" description="كفاءة الأداء الإداري" />
          </div>

          <div className="mb-7 grid grid-cols-1 gap-6 xl:grid-cols-2">
            <Panel>
              <h3 className="text-lg font-black">رادار التميز المؤسسي</h3>
              <p className="mt-2 text-xs text-slate-400">مقارنة المجالات المختلفة بمؤشر الجودة</p>
              <div className="mt-6 h-[380px]">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart data={radarData} outerRadius="75%">
                    <PolarGrid />
                    <PolarAngleAxis dataKey="metric" tick={{ fontSize: 11 }} />
                    <PolarRadiusAxis domain={[0, 100]} />
                    <Radar name="مستوى الجودة" dataKey="value" stroke={C.blue} fill={C.blue} fillOpacity={0.35} />
                    <Tooltip />
                    <Legend />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </Panel>

            <Panel>
              <h3 className="text-lg font-black">مؤشرات تحقيق الأهداف</h3>
              <p className="mt-2 text-xs text-slate-400">متابعة مستوى الإنجاز وفق الأهداف التشغيلية</p>
              <div className="mt-8 space-y-8">
                {[
                  { name: "تحسين التحصيل الأكاديمي", value: 94 },
                  { name: "رفع معدلات الحضور", value: 96 },
                  { name: "تطوير البنية التكنولوجية", value: 89 },
                  { name: "رفع كفاءة الموارد البشرية", value: 91 },
                  { name: "تطوير الأنشطة المدرسية", value: 82 },
                ].map((item) => (
                  <div key={item.name}>
                    <div className="mb-3 flex justify-between gap-3 text-sm">
                      <strong>{item.name}</strong>
                      <span className="font-black text-blue-600">{item.value}%</span>
                    </div>
                    <div className="h-3 overflow-hidden rounded-full bg-slate-100">
                      <div className="h-full rounded-full bg-gradient-to-l from-indigo-600 to-cyan-400" style={{ width: `${item.value}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </Panel>
          </div>

          <Panel>
            <h3 className="text-lg font-black">لوحة تقييم المخاطر وفرص التحسين</h3>
            <p className="mt-2 text-xs text-slate-400">أولويات المتابعة الإدارية المقترحة بناءً على المؤشرات التجريبية</p>
            <div className="mt-7 grid grid-cols-1 gap-4 md:grid-cols-3">
              <div className="rounded-2xl border border-red-100 bg-red-50 p-5">
                <AlertTriangle className="text-red-500" size={25} />
                <h4 className="mt-4 font-black">أولوية مرتفعة</h4>
                <p className="mt-2 text-xs leading-7 text-slate-600">متابعة الفصول التي يظهر بها ارتفاع في معدلات الغياب.</p>
              </div>
              <div className="rounded-2xl border border-amber-100 bg-amber-50 p-5">
                <Target className="text-amber-500" size={25} />
                <h4 className="mt-4 font-black">فرص التحسين</h4>
                <p className="mt-2 text-xs leading-7 text-slate-600">رفع متوسط نتائج الرياضيات والمواد الأقل من المستهدف.</p>
              </div>
              <div className="rounded-2xl border border-green-100 bg-green-50 p-5">
                <CheckCircle2 className="text-green-600" size={25} />
                <h4 className="mt-4 font-black">نقاط القوة</h4>
                <p className="mt-2 text-xs leading-7 text-slate-600">الحفاظ على جودة الحاسب والإنجليزية ومعدلات الحضور المرتفعة.</p>
              </div>
            </div>
          </Panel>
        </>
      )}

      {/* ================= ACTIVITY CENTER ================= */}

      <div className="mt-10 grid grid-cols-1 gap-6 xl:grid-cols-2">
        <Panel>
          <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
            <div>
              <h3 className="text-lg font-black">مركز النشاط التشغيلي</h3>
              <p className="mt-2 text-xs text-slate-400">آخر العمليات المسجلة على المنصة</p>
            </div>
            <Activity className="text-blue-600" size={25} />
          </div>

          <div className="relative mb-5">
            <Search className="absolute right-4 top-3.5 text-slate-400" size={18} />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="ابحث في سجل العمليات..."
              className="w-full rounded-xl border border-slate-200 py-3 pr-11 pl-4 text-sm outline-none focus:border-blue-500"
            />
          </div>

          <div className="space-y-5">
            {filteredActivities.length ? filteredActivities.map((item) => (
              <div key={item.title} className="flex items-start gap-4 border-b border-slate-50 pb-5 last:border-0">
                <div className="rounded-xl bg-blue-50 p-3 text-blue-600"><Activity size={20} /></div>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap justify-between gap-2">
                    <strong className="text-sm">{item.title}</strong>
                    <span className={`rounded-full px-3 py-1 text-[10px] font-bold ${item.status === "مكتمل" ? "bg-green-50 text-green-600" : "bg-amber-50 text-amber-600"}`}>{item.status}</span>
                  </div>
                  <p className="mt-2 text-xs leading-6 text-slate-500">{item.description}</p>
                  <span className="mt-2 flex items-center gap-1 text-[11px] text-slate-400"><Clock size={13} /> {item.time}</span>
                </div>
              </div>
            )) : (
              <p className="py-8 text-center text-sm text-slate-400">لا توجد نتائج مطابقة للبحث</p>
            )}
          </div>
        </Panel>

        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#102344] to-[#1d4d91] p-7 text-white shadow-xl">
          <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-cyan-400/10 blur-3xl" />
          <div className="relative">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-bold text-cyan-300">EXECUTIVE INTELLIGENCE</p>
                <h3 className="mt-3 text-2xl font-black">التقرير التنفيذي</h3>
              </div>
              <Presentation size={40} className="text-cyan-300" />
            </div>

            <p className="mt-7 text-sm leading-9 text-blue-100">
              توفر منظومة التحليلات رؤية متعددة الأبعاد حول أداء المدرسة،
              وتدعم الإدارة في متابعة جودة العملية التعليمية، وقياس كفاءة
              الموارد، وتحليل المؤشرات المالية، وتحديد الأولويات
              الاستراتيجية بناءً على البيانات.
            </p>

            <div className="my-7 grid grid-cols-2 gap-3">
              {[
                { label: "تحليل البيانات", icon: BarChart3 },
                { label: "متابعة الأداء", icon: Gauge },
                { label: "دعم القرار", icon: BrainCircuit },
                { label: "جودة التعليم", icon: Award },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/10 p-4">
                    <Icon size={20} className="text-cyan-300" />
                    <span className="text-xs font-bold">{item.label}</span>
                  </div>
                );
              })}
            </div>

            <button
              onClick={() => window.print()}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-white px-5 py-4 font-black text-[#102344] transition hover:bg-cyan-50"
            >
              <Download size={19} />
              طباعة التقرير التنفيذي
              <ArrowUpLeft size={18} />
            </button>
          </div>
        </div>
      </div>
   {/* <header className="relative mb-8 overflow-hidden rounded-[30px] bg-[#0c1e3d] p-6 text-white shadow-2xl md:p-9">
        <div className="absolute -left-20 -top-24 h-80 w-80 rounded-full border-[35px] border-blue-500/10" />
        <div className="absolute -bottom-36 right-1/3 h-80 w-80 rounded-full bg-blue-600/10 blur-3xl" />

        <div className="relative z-10">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="rounded-2xl border border-white/20 bg-white/10 p-3">
                <BrainCircuit size={30} className="text-cyan-300" />
              </div>
              <div>
                <p className="text-xs font-bold tracking-widest text-cyan-300">AL ROWAD MODERN SCHOOL</p>
                <p className="mt-1 text-sm text-blue-100">Enterprise Intelligence Platform</p>
              </div>
            </div>
            <div className="flex items-center gap-2 rounded-full border border-green-300/20 bg-green-400/10 px-4 py-2 text-xs font-bold text-green-300">
              <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
              النظام يعمل
            </div>
          </div>

          <div className="grid grid-cols-1 items-center gap-8 xl:grid-cols-[1.5fr_1fr]">
            <div>
              <p className="mb-3 text-sm font-semibold text-blue-300">مركز القيادة والتحليل الاستراتيجي</p>
              <h1 className="text-3xl font-black leading-tight md:text-5xl">
                ذكاء المدرسة
                <span className="mt-2 block text-cyan-300">من البيانات إلى القرار</span>
              </h1>
              <p className="mt-6 max-w-2xl text-sm leading-8 text-blue-100">
                منظومة تحليل متقدمة تجمع المؤشرات التعليمية والإدارية والمالية
                في مركز واحد، لتمنح إدارة مدرسة الرواد الحديثة رؤية شاملة
                حول الأداء الحالي، ومقارنة النتائج، واكتشاف نقاط القوة
                وفرص التحسين.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <button
                  onClick={() => window.print()}
                  className="flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-bold text-[#102344] transition hover:bg-cyan-50"
                >
                  <Download size={18} />
                  طباعة التقرير
                </button>
                <button
                  onClick={() => {
                    setActiveTab("overview");
                    setPeriod("12");
                  }}
                  className="flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-5 py-3 font-bold text-white hover:bg-white/20"
                >
                  <RefreshCw size={17} />
                  تحديث العرض
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {[
                { label: "مؤشر الأداء العام", value: "92.8%", icon: Gauge },
                { label: "معدل النمو", value: "+14.8%", icon: TrendingUp },
                { label: "جودة التعليم", value: "94/100", icon: Award },
                { label: "كفاءة التشغيل", value: "91.5%", icon: Zap },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="rounded-2xl border border-white/10 bg-white/[0.07] p-4 backdrop-blur">
                    <Icon size={22} className="text-cyan-300" />
                    <p className="mt-4 text-xs text-blue-200">{item.label}</p>
                    <h3 className="mt-2 text-2xl font-black">{item.value}</h3>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-5 text-xs text-blue-200">
            <span className="flex items-center gap-2"><CalendarDays size={15} /> العام الدراسي 2026 / 2027</span>
            <span className="flex items-center gap-2"><ShieldCheck size={15} /> لوحة الإدارة العليا</span>
            <span className="flex items-center gap-2"><Activity size={15} /> التحليلات والمؤشرات المؤسسية</span>
          </div>
        </div>
      </header> */}
      {/* ================= FOOTER ================= */}

      <footer className="mt-10 flex flex-wrap items-center justify-between gap-3 border-t border-slate-200 py-6 text-xs text-slate-400">
        <span>مدرسة الرواد الحديثة | مركز الذكاء والتحليلات</span>
        <span>School Intelligence & Analytics Platform</span>
        <span>© 2026 - جميع الحقوق محفوظة</span>
      </footer>
    </main>
  );
}
