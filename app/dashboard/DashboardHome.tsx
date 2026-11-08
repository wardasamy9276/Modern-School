
"use client";

import { useMemo, useState } from "react";
import { Printer, type LucideIcon } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

import {
  DAYS,
  ENTRIES,
  KINDS,
  KIND_KEYS,
  STAGES,
  STUDENTS,
  type Kind,
} from "../dashboard/dashboardData/activity-data";

const PRINT_CSS = `
@media print {
  @page { size: A4; margin: 10mm; }
  body * { visibility: hidden !important; }
  #activity-print-report, #activity-print-report * { visibility: visible !important; }
  #activity-print-report { position: absolute; inset: 0; width: 100%; }
}
`;

const PRINT_COLS = [
  "activity_col_index",
  "activity_col_day",
  "activity_col_time",
  "activity_col_section",
  "activity_col_action",
  "activity_col_details",
  "activity_col_by",
];

export default function RecentActivitySection() {
  const { t } = useLanguage();

  const tr = (key: string) =>
    (t as Record<string, string>)[key] ?? key;

  const [filter, setFilter] = useState<Kind | "all">("all");

  const stats = useMemo(() => {
    const total = STUDENTS.length;
    const present = STUDENTS.filter((s) => s.present).length;

    const byStage = STAGES.map((stage) => ({
      stage,
      count: STUDENTS.filter((s) => s.stage === stage).length,
    }));

    const counts = { all: ENTRIES.length } as Record<
      Kind | "all",
      number
    >;

    KIND_KEYS.forEach(
      (k) =>
        (counts[k] = ENTRIES.filter((e) => e.kind === k).length)
    );

    return {
      total,
      present,
      absent: total - present,
      rate: Math.round((present / total) * 100),
      byStage,
      counts,
    };
  }, []);

  const visible = useMemo(
    () =>
      filter === "all"
        ? ENTRIES
        : ENTRIES.filter((e) => e.kind === filter),
    [filter]
  );

  const grouped = useMemo(
    () =>
      DAYS.map((day) => ({
        day,
        items: visible.filter((e) => e.day === day),
      })).filter((g) => g.items.length > 0),
    [visible]
  );

  return (
    <>
      <style>{PRINT_CSS}</style>

      {/* ================= الشاشة ================= */}

      <section
        dir={t.dir}
        className="w-full max-w-none space-y-8 px-4 py-6 sm:px-6 lg:px-8"
      >
        {/* Header */}

        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
              {t.activity_title}
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              {t.activity_school_name}
            </p>
          </div>

          <button
            type="button"
            onClick={() => window.print()}
            className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
          >
            <Printer className="size-4" aria-hidden />
            {t.activity_print}
          </button>
        </div>

        {/* ملخص الطلاب */}

        <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-5">

          <div className="flex flex-col justify-between rounded-2xl bg-slate-900 p-5 text-white shadow-sm">
            <p className="text-sm text-slate-300">
              {t.activity_total_students}
            </p>

            <p className="mt-3 text-4xl font-extrabold tabular-nums">
              {stats.total}
            </p>

            <p className="mt-3 text-xs text-slate-400">
              {t.activity_present} {stats.present} ·{" "}
              {t.activity_absent} {stats.absent}
            </p>
          </div>

          {stats.byStage.map((s) => (
            <div
              key={s.stage}
              className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <p className="text-sm text-slate-500">
                {t.activity_stage}{" "}
                {tr(`activity_stage_${s.stage}`)}
              </p>

              <p className="mt-3 text-3xl font-extrabold tabular-nums text-slate-900">
                {s.count}
              </p>

              <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-100">
                <div
                  className="h-full rounded-full bg-sky-500 transition-all"
                  style={{
                    width: `${stats.total ? (s.count / stats.total) * 100 : 0}%`,
                  }}
                />
              </div>
            </div>
          ))}

          <div className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            <p className="text-sm text-slate-500">
              {t.activity_attendance_rate}
            </p>

            <p className="mt-3 text-3xl font-extrabold tabular-nums text-emerald-600">
              {stats.rate}%
            </p>

            <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-100">
              <div
                className="h-full rounded-full bg-emerald-500 transition-all"
                style={{ width: `${stats.rate}%` }}
              />
            </div>
          </div>
        </div>

        {/* العدادات والفلاتر - Flexbox */}

        <div className="flex w-full flex-wrap gap-3">
          <FilterButton
            active={filter === "all"}
            onClick={() => setFilter("all")}
            count={stats.counts.all}
            label={t.activity_all}
          />

          {KIND_KEYS.map((k) => (
            <FilterButton
              key={k}
              active={filter === k}
              onClick={() => setFilter(k)}
              count={stats.counts[k]}
              label={tr(`activity_kind_${k}`)}
              Icon={KINDS[k].icon}
            />
          ))}
        </div>

        {/* النشاطات حسب اليوم */}

        {grouped.length === 0 ? (
          <p className="rounded-2xl border border-dashed border-slate-300 py-12 text-center text-sm text-slate-400">
            {t.activity_empty}
          </p>
        ) : (
          <div className="w-full space-y-8">
            {grouped.map((g) => (
              <div key={g.day} className="w-full">
                <div className="mb-4 flex items-center gap-3">
                  <h3 className="text-base font-extrabold text-slate-800">
                    {tr(`activity_day_${g.day}`)}
                  </h3>

                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-500">
                    {g.items.length}
                  </span>

                  <div className="h-px flex-1 bg-slate-200" />
                </div>

                <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 2xl:grid-cols-3">
                  {g.items.map((e) => {
                    const k = KINDS[e.kind];
                    const Icon = k.icon;

                    return (
                      <article
                        key={e.id}
                        className={`flex min-w-0 items-start gap-4 rounded-2xl border border-slate-200 border-s-4 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md ${k.stripe}`}
                      >
                        <span
                          className={`flex size-12 shrink-0 items-center justify-center rounded-xl ${k.tone}`}
                        >
                          <Icon className="size-5" aria-hidden />
                        </span>

                        <div className="min-w-0 flex-1">
                          <div className="flex flex-wrap items-start justify-between gap-2">
                            <p className="font-bold leading-6 text-slate-900">
                              {tr(e.titleKey)}
                            </p>

                            <time className="shrink-0 rounded-lg bg-slate-50 px-2 py-1 text-xs font-medium tabular-nums text-slate-500">
                              {e.clock}
                            </time>
                          </div>

                          <p className="mt-2 break-words text-sm leading-6 text-slate-500">
                            {tr(e.descriptionKey)}
                          </p>

                          <div className="mt-4 border-t border-slate-100 pt-3">
                            <p className="text-xs text-slate-400">
                              {t.activity_by}{" "}
                              <span className="font-semibold text-slate-600">
                                {e.by}
                              </span>
                            </p>
                          </div>
                        </div>
                      </article>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* ================= الطباعة ================= */}

      <div
        id="activity-print-report"
        dir={t.dir}
        className="hidden print:block"
      >
        <table className="w-full border-collapse text-xs">
          <thead>
            <tr>
              {PRINT_COLS.map((c) => (
                <th
                  key={c}
                  className="border border-black px-1.5 py-1 text-start font-bold"
                >
                  {tr(c)}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {visible.map((e, i) => (
              <tr key={e.id} style={{ breakInside: "avoid" }}>
                <td className="border border-black px-1.5 py-1">
                  {i + 1}
                </td>

                <td className="border border-black px-1.5 py-1">
                  {tr(`activity_day_${e.day}`)}
                </td>

                <td className="border border-black px-1.5 py-1">
                  {e.clock}
                </td>

                <td className="border border-black px-1.5 py-1">
                  {tr(`activity_kind_${e.kind}`)}
                </td>

                <td className="border border-black px-1.5 py-1">
                  {tr(e.titleKey)}
                </td>

                <td className="border border-black px-1.5 py-1">
                  {tr(e.descriptionKey)}
                </td>

                <td className="border border-black px-1.5 py-1">
                  {e.by}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

function FilterButton({
  active,
  onClick,
  count,
  label,
  Icon,
}: {
  active: boolean;
  onClick: () => void;
  count: number;
  label: string;
  Icon?: LucideIcon;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`flex min-w-[140px] flex-1 items-center justify-between gap-3 rounded-2xl border p-4 text-start transition hover:-translate-y-0.5 hover:shadow-sm sm:min-w-[160px] ${
        active
          ? "border-slate-900 bg-slate-900 text-white shadow-sm"
          : "border-slate-200 bg-white text-slate-800 hover:border-slate-400"
      }`}
    >
      <div>
        <p className="text-2xl font-extrabold tabular-nums sm:text-3xl">
          {count}
        </p>

        <p className="mt-1 text-sm opacity-80">{label}</p>
      </div>

      {Icon && (
        <Icon className="size-5 shrink-0 opacity-60" aria-hidden />
      )}
    </button>
  );
}
