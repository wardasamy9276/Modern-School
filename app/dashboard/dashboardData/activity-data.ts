
import {
  BadgeDollarSign,
  ClipboardCheck,
  GraduationCap,
  UserPlus,
  UserRoundCog,
  type LucideIcon,
} from "lucide-react";

export type Kind = "students" | "attendance" | "exams" | "staff" | "finance";
export type Stage = "primary" | "prep" | "secondary";
export type Day = "today" | "yesterday" | "two_days";

export type Entry = {
  id: number;
  kind: Kind;
  day: Day;
  clock: string;
  titleKey: string;
  descriptionKey: string;
  by: string;
};

export type Student = {
  id: number;
  name: string;
  stage: Stage;
  grade: string;
  present: boolean;
};

export type KindMeta = {
  icon: LucideIcon;
  stripe: string;
  tone: string;
};

export const DAYS: Day[] = ["today", "yesterday", "two_days"];

export const STAGES: Stage[] = ["primary", "prep", "secondary"];

export const KINDS: Record<Kind, KindMeta> = {
  students: {
    icon: UserPlus,
    stripe: "border-s-sky-500",
    tone: "bg-sky-100 text-sky-700",
  },
  attendance: {
    icon: ClipboardCheck,
    stripe: "border-s-emerald-500",
    tone: "bg-emerald-100 text-emerald-700",
  },
  exams: {
    icon: GraduationCap,
    stripe: "border-s-fuchsia-500",
    tone: "bg-fuchsia-100 text-fuchsia-700",
  },
  staff: {
    icon: UserRoundCog,
    stripe: "border-s-amber-500",
    tone: "bg-amber-100 text-amber-700",
  },
  finance: {
    icon: BadgeDollarSign,
    stripe: "border-s-rose-500",
    tone: "bg-rose-100 text-rose-700",
  },
};

export const KIND_KEYS = Object.keys(KINDS) as Kind[];

export const STUDENTS: Student[] = [
  { id: 1, name: "أحمد محمود", stage: "primary", grade: "3", present: true },
  { id: 2, name: "ملك إبراهيم", stage: "primary", grade: "3", present: true },
  { id: 3, name: "يوسف عادل", stage: "primary", grade: "5", present: false },
  { id: 4, name: "نور حسن", stage: "primary", grade: "1", present: true },
  { id: 5, name: "عمر خالد", stage: "primary", grade: "6", present: true },
  { id: 6, name: "سلمى أشرف", stage: "prep", grade: "1", present: true },
  { id: 7, name: "مصطفى سمير", stage: "prep", grade: "2", present: false },
  { id: 8, name: "جنى طارق", stage: "prep", grade: "3", present: true },
  { id: 9, name: "كريم وائل", stage: "prep", grade: "3", present: true },
  { id: 10, name: "هدى ياسر", stage: "prep", grade: "2", present: true },
  { id: 11, name: "آدم فتحي", stage: "secondary", grade: "1", present: true },
  { id: 12, name: "ريم عصام", stage: "secondary", grade: "2", present: true },
  { id: 13, name: "زياد مجدي", stage: "secondary", grade: "3", present: false },
  { id: 14, name: "مريم هاني", stage: "secondary", grade: "3", present: true },
  { id: 15, name: "علي رضا", stage: "secondary", grade: "1", present: true },
];

export const ENTRIES: Entry[] = [
  {
    id: 1,
    kind: "students",
    day: "today",
    clock: "11:20",
    titleKey: "activity_entry_1",
    descriptionKey: "activity_desc_1",
    by: "أ. منى",
  },
  {
    id: 2,
    kind: "attendance",
    day: "today",
    clock: "10:30",
    titleKey: "activity_entry_2",
    descriptionKey: "activity_desc_2",
    by: "أ. خالد",
  },
  {
    id: 3,
    kind: "exams",
    day: "today",
    clock: "10:05",
    titleKey: "activity_entry_3",
    descriptionKey: "activity_desc_3",
    by: "أ. سارة",
  },
  {
    id: 4,
    kind: "finance",
    day: "today",
    clock: "09:40",
    titleKey: "activity_entry_4",
    descriptionKey: "activity_desc_4",
    by: "الحسابات",
  },
  {
    id: 5,
    kind: "staff",
    day: "today",
    clock: "09:10",
    titleKey: "activity_entry_5",
    descriptionKey: "activity_desc_5",
    by: "الإدارة",
  },
  {
    id: 6,
    kind: "attendance",
    day: "today",
    clock: "08:30",
    titleKey: "activity_entry_6",
    descriptionKey: "activity_desc_6",
    by: "أ. هالة",
  },
  {
    id: 7,
    kind: "students",
    day: "today",
    clock: "08:15",
    titleKey: "activity_entry_7",
    descriptionKey: "activity_desc_7",
    by: "أ. منى",
  },
  {
    id: 8,
    kind: "finance",
    day: "yesterday",
    clock: "14:50",
    titleKey: "activity_entry_8",
    descriptionKey: "activity_desc_8",
    by: "الحسابات",
  },
  {
    id: 9,
    kind: "staff",
    day: "yesterday",
    clock: "13:25",
    titleKey: "activity_entry_9",
    descriptionKey: "activity_desc_9",
    by: "الإدارة",
  },
  {
    id: 10,
    kind: "exams",
    day: "yesterday",
    clock: "12:40",
    titleKey: "activity_entry_10",
    descriptionKey: "activity_desc_10",
    by: "أ. سارة",
  },
  {
    id: 11,
    kind: "students",
    day: "yesterday",
    clock: "11:55",
    titleKey: "activity_entry_11",
    descriptionKey: "activity_desc_11",
    by: "أ. منى",
  },
  {
    id: 12,
    kind: "attendance",
    day: "yesterday",
    clock: "10:20",
    titleKey: "activity_entry_12",
    descriptionKey: "activity_desc_12",
    by: "أ. خالد",
  },
  {
    id: 13,
    kind: "finance",
    day: "yesterday",
    clock: "09:30",
    titleKey: "activity_entry_13",
    descriptionKey: "activity_desc_13",
    by: "الحسابات",
  },
  {
    id: 14,
    kind: "attendance",
    day: "yesterday",
    clock: "08:30",
    titleKey: "activity_entry_14",
    descriptionKey: "activity_desc_14",
    by: "أ. هالة",
  },
  {
    id: 15,
    kind: "students",
    day: "two_days",
    clock: "13:10",
    titleKey: "activity_entry_15",
    descriptionKey: "activity_desc_15",
    by: "أ. منى",
  },
  {
    id: 16,
    kind: "exams",
    day: "two_days",
    clock: "12:00",
    titleKey: "activity_entry_16",
    descriptionKey: "activity_desc_16",
    by: "أ. سارة",
  },
  {
    id: 17,
    kind: "staff",
    day: "two_days",
    clock: "11:30",
    titleKey: "activity_entry_17",
    descriptionKey: "activity_desc_17",
    by: "الإدارة",
  },
  {
    id: 18,
    kind: "finance",
    day: "two_days",
    clock: "10:15",
    titleKey: "activity_entry_18",
    descriptionKey: "activity_desc_18",
    by: "الحسابات",
  },
  {
    id: 19,
    kind: "attendance",
    day: "two_days",
    clock: "08:30",
    titleKey: "activity_entry_19",
    descriptionKey: "activity_desc_19",
    by: "أ. خالد",
  },
  {
    id: 20,
    kind: "students",
    day: "two_days",
    clock: "08:05",
    titleKey: "activity_entry_20",
    descriptionKey: "activity_desc_20",
    by: "أ. منى",
  },
];
