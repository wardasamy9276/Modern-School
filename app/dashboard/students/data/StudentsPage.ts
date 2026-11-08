
export type Student = {
  id: number;
  code: string;
  name: string;
  nationalId: string;
  email: string;
  phone: string;
  parentName: string;
  parentRelation: string;
  parentPhone: string;
  stage: string;
  grade: string;
  className: string;
  gender: string;
  birthDate: string;
  address: string;
  admissionDate: string;
  academicYear: string;
  status: "active" | "inactive" | "transferred";
  busNumber: string;
  notes: string;
};

export const STORAGE_KEY = "rowad-school-students";

export const INITIAL_STUDENTS: Student[] = [
  {
    id: 1,
    code: "STD-1001",
    name: "أحمد محمد علي",
    nationalId: "31705121234567",
    email: "ahmed@example.com",
    phone: "01012345678",
    parentName: "محمد علي",
    parentRelation: "الأب",
    parentPhone: "01112345678",
    stage: "primary",
    grade: "grade_1",
    className: "1-A",
    gender: "male",
    birthDate: "2017-05-12",
    address: "القاهرة",
    admissionDate: "2024-09-01",
    academicYear: "2026/2027",
    status: "active",
    busNumber: "BUS-01",
    notes: "طالب منتظم في الحضور",
  },
  {
    id: 2,
    code: "STD-1002",
    name: "مريم أحمد حسن",
    nationalId: "31608201234567",
    email: "mariam@example.com",
    phone: "01023456789",
    parentName: "أحمد حسن",
    parentRelation: "الأب",
    parentPhone: "01123456789",
    stage: "primary",
    grade: "grade_2",
    className: "2-B",
    gender: "female",
    birthDate: "2016-08-20",
    address: "الجيزة",
    admissionDate: "2023-09-01",
    academicYear: "2026/2027",
    status: "active",
    busNumber: "BUS-02",
    notes: "متفوقة دراسياً",
  },
  {
    id: 3,
    code: "STD-1003",
    name: "يوسف خالد محمود",
    nationalId: "31403151234567",
    email: "youssef@example.com",
    phone: "01034567890",
    parentName: "خالد محمود",
    parentRelation: "الأب",
    parentPhone: "01134567890",
    stage: "preparatory",
    grade: "grade_1",
    className: "1-A",
    gender: "male",
    birthDate: "2014-03-15",
    address: "أكتوبر",
    admissionDate: "2025-09-01",
    academicYear: "2026/2027",
    status: "active",
    busNumber: "BUS-03",
    notes: "",
  },
  {
    id: 4,
    code: "STD-1004",
    name: "نور أحمد إبراهيم",
    nationalId: "31111021234567",
    email: "nour@example.com",
    phone: "01045678901",
    parentName: "أحمد إبراهيم",
    parentRelation: "الأب",
    parentPhone: "01145678901",
    stage: "secondary",
    grade: "grade_1",
    className: "1-C",
    gender: "female",
    birthDate: "2011-11-02",
    address: "الشيخ زايد",
    admissionDate: "2025-09-01",
    academicYear: "2026/2027",
    status: "inactive",
    busNumber: "",
    notes: "ملف يحتاج إلى مراجعة",
  },
  {
    id: 5,
    code: "STD-1005",
    name: "عمر محمود سمير",
    nationalId: "31307251234567",
    email: "omar@example.com",
    phone: "01056789012",
    parentName: "محمود سمير",
    parentRelation: "الأب",
    parentPhone: "01156789012",
    stage: "preparatory",
    grade: "grade_2",
    className: "2-A",
    gender: "male",
    birthDate: "2013-07-25",
    address: "القاهرة",
    admissionDate: "2024-09-01",
    academicYear: "2026/2027",
    status: "active",
    busNumber: "BUS-04",
    notes: "",
  },
  {
    id: 6,
    code: "STD-1006",
    name: "سارة محمود أحمد",
    nationalId: "31709251234568",
    email: "sara@example.com",
    phone: "01067890123",
    parentName: "محمود أحمد",
    parentRelation: "الأب",
    parentPhone: "01167890123",
    stage: "primary",
    grade: "grade_3",
    className: "3-A",
    gender: "female",
    birthDate: "2015-09-25",
    address: "أكتوبر",
    admissionDate: "2024-09-01",
    academicYear: "2026/2027",
    status: "active",
    busNumber: "BUS-05",
    notes: "متميزة دراسياً",
  },
  {
    id: 7,
    code: "STD-1007",
    name: "كريم أحمد حسن",
    nationalId: "31604151234569",
    email: "karim@example.com",
    phone: "01078901234",
    parentName: "أحمد حسن",
    parentRelation: "الأب",
    parentPhone: "01178901234",
    stage: "primary",
    grade: "grade_4",
    className: "4-B",
    gender: "male",
    birthDate: "2016-04-15",
    address: "الجيزة",
    admissionDate: "2023-09-01",
    academicYear: "2026/2027",
    status: "active",
    busNumber: "BUS-06",
    notes: "",
  },
  {
    id: 8,
    code: "STD-1008",
    name: "ملك خالد إبراهيم",
    nationalId: "31506201234570",
    email: "malak@example.com",
    phone: "01089012345",
    parentName: "خالد إبراهيم",
    parentRelation: "الأب",
    parentPhone: "01189012345",
    stage: "primary",
    grade: "grade_5",
    className: "5-A",
    gender: "female",
    birthDate: "2015-06-20",
    address: "القاهرة",
    admissionDate: "2022-09-01",
    academicYear: "2026/2027",
    status: "active",
    busNumber: "BUS-07",
    notes: "",
  },
  {
    id: 9,
    code: "STD-1009",
    name: "آدم محمد سمير",
    nationalId: "31410201234571",
    email: "adam@example.com",
    phone: "01090123456",
    parentName: "محمد سمير",
    parentRelation: "الأب",
    parentPhone: "01190123456",
    stage: "primary",
    grade: "grade_6",
    className: "6-A",
    gender: "male",
    birthDate: "2014-10-20",
    address: "الشيخ زايد",
    admissionDate: "2021-09-01",
    academicYear: "2026/2027",
    status: "active",
    busNumber: "BUS-08",
    notes: "",
  },
  {
    id: 10,
    code: "STD-1010",
    name: "ليلى أحمد محمود",
    nationalId: "31302201234572",
    email: "laila@example.com",
    phone: "01101234567",
    parentName: "أحمد محمود",
    parentRelation: "الأب",
    parentPhone: "01201234567",
    stage: "preparatory",
    grade: "grade_1",
    className: "1-B",
    gender: "female",
    birthDate: "2013-02-20",
    address: "أكتوبر",
    admissionDate: "2025-09-01",
    academicYear: "2026/2027",
    status: "active",
    busNumber: "BUS-09",
    notes: "",
  },
  {
    id: 11,
    code: "STD-1011",
    name: "زياد حسن علي",
    nationalId: "31207151234573",
    email: "ziad@example.com",
    phone: "01112345678",
    parentName: "حسن علي",
    parentRelation: "الأب",
    parentPhone: "01212345678",
    stage: "preparatory",
    grade: "grade_2",
    className: "2-B",
    gender: "male",
    birthDate: "2012-07-15",
    address: "القاهرة",
    admissionDate: "2024-09-01",
    academicYear: "2026/2027",
    status: "active",
    busNumber: "BUS-10",
    notes: "",
  },
  {
    id: 12,
    code: "STD-1012",
    name: "جنى محمد خالد",
    nationalId: "31103101234574",
    email: "jana@example.com",
    phone: "01123456789",
    parentName: "محمد خالد",
    parentRelation: "الأب",
    parentPhone: "01223456789",
    stage: "preparatory",
    grade: "grade_3",
    className: "3-A",
    gender: "female",
    birthDate: "2011-03-10",
    address: "الجيزة",
    admissionDate: "2023-09-01",
    academicYear: "2026/2027",
    status: "active",
    busNumber: "BUS-11",
    notes: "متفوقة",
  },
  {
    id: 13,
    code: "STD-1013",
    name: "مالك إبراهيم حسن",
    nationalId: "31008251234575",
    email: "malek@example.com",
    phone: "01134567890",
    parentName: "إبراهيم حسن",
    parentRelation: "الأب",
    parentPhone: "01234567890",
    stage: "secondary",
    grade: "grade_1",
    className: "1-A",
    gender: "male",
    birthDate: "2010-08-25",
    address: "أكتوبر",
    admissionDate: "2025-09-01",
    academicYear: "2026/2027",
    status: "active",
    busNumber: "BUS-12",
    notes: "",
  },
  {
    id: 14,
    code: "STD-1014",
    name: "ملك سامح محمود",
    nationalId: "30905151234576",
    email: "malak2@example.com",
    phone: "01145678901",
    parentName: "سامح محمود",
    parentRelation: "الأب",
    parentPhone: "01245678901",
    stage: "secondary",
    grade: "grade_2",
    className: "2-B",
    gender: "female",
    birthDate: "2009-05-15",
    address: "القاهرة",
    admissionDate: "2024-09-01",
    academicYear: "2026/2027",
    status: "active",
    busNumber: "",
    notes: "",
  },
  {
    id: 15,
    code: "STD-1015",
    name: "علي محمود أحمد",
    nationalId: "30811101234577",
    email: "ali@example.com",
    phone: "01156789012",
    parentName: "محمود أحمد",
    parentRelation: "الأب",
    parentPhone: "01256789012",
    stage: "secondary",
    grade: "grade_3",
    className: "3-C",
    gender: "male",
    birthDate: "2008-11-10",
    address: "الشيخ زايد",
    admissionDate: "2023-09-01",
    academicYear: "2026/2027",
    status: "active",
    busNumber: "",
    notes: "",
  },
  {
    id: 16,
    code: "STD-1016",
    name: "رنا أحمد علي",
    nationalId: "31712251234578",
    email: "rana@example.com",
    phone: "01167890123",
    parentName: "أحمد علي",
    parentRelation: "الأب",
    parentPhone: "01267890123",
    stage: "primary",
    grade: "grade_2",
    className: "2-A",
    gender: "female",
    birthDate: "2017-12-25",
    address: "الجيزة",
    admissionDate: "2025-09-01",
    academicYear: "2026/2027",
    status: "active",
    busNumber: "BUS-13",
    notes: "",
  },
  {
    id: 17,
    code: "STD-1017",
    name: "حمزة خالد سمير",
    nationalId: "31504121234579",
    email: "hamza@example.com",
    phone: "01178901234",
    parentName: "خالد سمير",
    parentRelation: "الأب",
    parentPhone: "01278901234",
    stage: "primary",
    grade: "grade_4",
    className: "4-A",
    gender: "male",
    birthDate: "2015-04-12",
    address: "القاهرة",
    admissionDate: "2022-09-01",
    academicYear: "2026/2027",
    status: "inactive",
    busNumber: "",
    notes: "متوقف مؤقتاً",
  },
  {
    id: 18,
    code: "STD-1018",
    name: "تاليا محمد حسن",
    nationalId: "31409051234580",
    email: "talia@example.com",
    phone: "01189012345",
    parentName: "محمد حسن",
    parentRelation: "الأب",
    parentPhone: "01289012345",
    stage: "preparatory",
    grade: "grade_1",
    className: "1-C",
    gender: "female",
    birthDate: "2014-09-05",
    address: "أكتوبر",
    admissionDate: "2025-09-01",
    academicYear: "2026/2027",
    status: "active",
    busNumber: "BUS-14",
    notes: "",
  },
  {
    id: 19,
    code: "STD-1019",
    name: "يوسف أحمد محمود",
    nationalId: "31306151234581",
    email: "youssef2@example.com",
    phone: "01201234567",
    parentName: "أحمد محمود",
    parentRelation: "الأب",
    parentPhone: "01301234567",
    stage: "secondary",
    grade: "grade_1",
    className: "1-B",
    gender: "male",
    birthDate: "2013-06-15",
    address: "الجيزة",
    admissionDate: "2025-09-01",
    academicYear: "2026/2027",
    status: "transferred",
    busNumber: "",
    notes: "تم نقل الطالب",
  },
  {
    id: 20,
    code: "STD-1020",
    name: "فرح محمود إبراهيم",
    nationalId: "31210201234582",
    email: "farah@example.com",
    phone: "01212345678",
    parentName: "محمود إبراهيم",
    parentRelation: "الأب",
    parentPhone: "01312345678",
    stage: "preparatory",
    grade: "grade_3",
    className: "3-B",
    gender: "female",
    birthDate: "2012-10-20",
    address: "الشيخ زايد",
    admissionDate: "2023-09-01",
    academicYear: "2026/2027",
    status: "active",
    busNumber: "BUS-15",
    notes: "منتظمة في الدراسة",
  },
];

export const stageName = (stage: string): string => {
  const names: Record<string, string> = {
    primary: "المرحلة الابتدائية",
    preparatory: "المرحلة الإعدادية",
    secondary: "المرحلة الثانوية",
  };

  return names[stage] || stage;
};

export const gradeName = (grade: string): string => {
  const names: Record<string, string> = {
    grade_1: "الصف الأول",
    grade_2: "الصف الثاني",
    grade_3: "الصف الثالث",
    grade_4: "الصف الرابع",
    grade_5: "الصف الخامس",
    grade_6: "الصف السادس",
  };

  return names[grade] || grade;
};

export const getStudents = (): Student[] => {
  if (typeof window === "undefined") {
    return INITIAL_STUDENTS;
  }

  try {
    const saved = localStorage.getItem(STORAGE_KEY);

    if (!saved) {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(INITIAL_STUDENTS)
      );

      return INITIAL_STUDENTS;
    }

    const parsed: Student[] = JSON.parse(saved);

    if (!Array.isArray(parsed)) {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(INITIAL_STUDENTS)
      );

      return INITIAL_STUDENTS;
    }

    const existingIds = new Set(
      parsed.map((student) => student.id)
    );

    const newStudents = INITIAL_STUDENTS.filter(
      (student) => !existingIds.has(student.id)
    );

    const updatedStudents = [...parsed, ...newStudents];

    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(updatedStudents)
    );

    return updatedStudents;
  } catch (error) {
    console.error("Error loading students:", error);
    return INITIAL_STUDENTS;
  }
};

export const saveStudents = (students: Student[]): void => {
  if (typeof window === "undefined") return;

  try {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(students)
    );
  } catch (error) {
    console.error("Error saving students:", error);
  }
};