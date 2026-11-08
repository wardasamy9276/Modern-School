
"use client";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area,
} from "recharts";

type SchoolChartsProps = {
  language?: "ar" | "en";
};

const monthlyData = [
  { month: "Jan", students: 1200, teachers: 65 },
  { month: "Feb", students: 1280, teachers: 68 },
  { month: "Mar", students: 1350, teachers: 70 },
  { month: "Apr", students: 1400, teachers: 72 },
  { month: "May", students: 1480, teachers: 78 },
  { month: "Jun", students: 1550, teachers: 80 },
  { month: "Jul", students: 1650, teachers: 85 },
];

const attendanceData = [
  { month: "Jan", attendance: 94, absence: 6 },
  { month: "Feb", attendance: 96, absence: 4 },
  { month: "Mar", attendance: 91, absence: 9 },
  { month: "Apr", attendance: 97, absence: 3 },
  { month: "May", attendance: 95, absence: 5 },
  { month: "Jun", attendance: 98, absence: 2 },
];

const classesData = [
  { name: "Primary", value: 650 },
  { name: "Preparatory", value: 550 },
  { name: "Secondary", value: 450 },
];

const performanceData = [
  { month: "Jan", score: 72 },
  { month: "Feb", score: 76 },
  { month: "Mar", score: 74 },
  { month: "Apr", score: 83 },
  { month: "May", score: 88 },
  { month: "Jun", score: 92 },
];

const revenueData = [
  { month: "Jan", revenue: 320 },
  { month: "Feb", revenue: 380 },
  { month: "Mar", revenue: 350 },
  { month: "Apr", revenue: 420 },
  { month: "May", revenue: 480 },
  { month: "Jun", revenue: 520 },
];

const COLORS = ["#6366f1", "#06b6d4", "#a78bfa"];

export default function SchoolCharts({
  language = "ar",
}: SchoolChartsProps) {
  const isArabic = language === "ar";

  const text = {
    students: isArabic ? "إحصائيات الطلاب والمعلمين" : "Students & Teachers",
    attendance: isArabic ? "الحضور والغياب" : "Attendance & Absence",
    classes: isArabic ? "توزيع الطلاب على المراحل" : "Students by Stage",
    performance: isArabic ? "مستوى الأداء الأكاديمي" : "Academic Performance",
    revenue: isArabic ? "الإيرادات الشهرية" : "Monthly Revenue",
    student: isArabic ? "الطلاب" : "Students",
    teacher: isArabic ? "المعلمين" : "Teachers",
    present: isArabic ? "الحضور" : "Attendance",
    absent: isArabic ? "الغياب" : "Absence",
    score: isArabic ? "الأداء" : "Performance",
    primary: isArabic ? "الابتدائية" : "Primary",
    preparatory: isArabic ? "الإعدادية" : "Preparatory",
    secondary: isArabic ? "الثانوية" : "Secondary",
    month: isArabic ? "الشهر" : "Month",
    revenueLabel: isArabic ? "الإيرادات (بالألف)" : "Revenue (Thousands)",
  };

  const chartStyle = "text-xs text-gray-500 dark:text-gray-400";

  const cardStyle =
    "rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-300 hover:shadow-lg dark:border-gray-700 dark:bg-gray-900";

  const titleStyle =
    "mb-6 text-lg font-bold text-gray-800 dark:text-white";

  const tooltipStyle = {
    backgroundColor: "#111827",
    border: "1px solid #374151",
    borderRadius: "10px",
    color: "#fff",
  };

  return (
    <section
      dir={isArabic ? "rtl" : "ltr"}
      className="w-full space-y-6"
    >
      {/* Charts Header */}

      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            {isArabic ? "تحليلات المدرسة" : "School Analytics"}
          </h2>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            {isArabic
              ? "نظرة شاملة على أداء وإحصائيات المدرسة"
              : "Overview of school statistics and performance"}
          </p>
        </div>

        <span className="rounded-full bg-indigo-50 px-4 py-2 text-xs font-semibold text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400">
          {isArabic ? "التقارير والإحصائيات" : "Reports & Analytics"}
        </span>
      </div>

      {/* Students & Teachers */}

      <div className={cardStyle}>
        <h3 className={titleStyle}>{text.students}</h3>

        <div className="h-72 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.15} />
              <XAxis dataKey="month" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip contentStyle={tooltipStyle} />
              <Legend />
              <Bar
                dataKey="students"
                name={text.student}
                fill="#6366f1"
                radius={[6, 6, 0, 0]}
              />
              <Bar
                dataKey="teachers"
                name={text.teacher}
                fill="#06b6d4"
                radius={[6, 6, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Attendance & Absence */}

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className={cardStyle}>
          <h3 className={titleStyle}>{text.attendance}</h3>

          <div className="h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={attendanceData}>
                <defs>
                  <linearGradient id="attendanceColor" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.4} />
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                  </linearGradient>
                </defs>

                <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.15} />
                <XAxis dataKey="month" />
                <YAxis domain={[0, 100]} />
                <Tooltip contentStyle={tooltipStyle} />
                <Legend />

                <Area
                  type="monotone"
                  dataKey="attendance"
                  name={text.present}
                  stroke="#10b981"
                  fill="url(#attendanceColor)"
                  strokeWidth={3}
                />

                <Area
                  type="monotone"
                  dataKey="absence"
                  name={text.absent}
                  stroke="#f43f5e"
                  fill="#f43f5e"
                  fillOpacity={0.08}
                  strokeWidth={2}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Classes Distribution */}

        <div className={cardStyle}>
          <h3 className={titleStyle}>{text.classes}</h3>

          <div className="h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={classesData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  innerRadius={65}
                  outerRadius={100}
                  paddingAngle={5}
                  label
                >
                  {classesData.map((entry, index) => (
                    <Cell key={entry.name} fill={COLORS[index]} />
                  ))}
                </Pie>

                <Tooltip contentStyle={tooltipStyle} />
                <Legend
                  formatter={(value) =>
                    value === "Primary"
                      ? text.primary
                      : value === "Preparatory"
                        ? text.preparatory
                        : text.secondary
                  }
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Academic Performance */}

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className={cardStyle}>
          <h3 className={titleStyle}>{text.performance}</h3>

          <div className="h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.15} />
                <XAxis dataKey="month" />
                <YAxis domain={[0, 100]} />
                <Tooltip contentStyle={tooltipStyle} />
                <Legend />

                <Line
                  type="monotone"
                  dataKey="score"
                  name={text.score}
                  stroke="#8b5cf6"
                  strokeWidth={3}
                  dot={{ r: 5 }}
                  activeDot={{ r: 8 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Monthly Revenue */}

        <div className={cardStyle}>
          <h3 className={titleStyle}>{text.revenue}</h3>

          <div className="h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={revenueData}>
                <defs>
                  <linearGradient id="revenueColor" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.4} />
                    <stop offset="95%" stopColor="#06b6d4" stopOpacity={0} />
                  </linearGradient>
                </defs>

                <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.15} />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip contentStyle={tooltipStyle} />
                <Legend />

                <Area
                  type="monotone"
                  dataKey="revenue"
                  name={text.revenueLabel}
                  stroke="#06b6d4"
                  fill="url(#revenueColor)"
                  strokeWidth={3}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
        
      </div>
    </section>
  );
}
