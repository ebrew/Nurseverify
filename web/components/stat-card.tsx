
type StatCardProps = {
  title: string;
  value: string;
  description: string;
  accent: "blue" | "green" | "amber" | "rose";
};

const accentStyles: Record<StatCardProps["accent"], string> = {
  blue: "bg-blue-50 text-blue-700",
  green: "bg-green-50 text-green-700",
  amber: "bg-amber-50 text-amber-700",
  rose: "bg-rose-50 text-rose-700",
};

export default function StatCard({
  title,
  value,
  description,
  accent,
}: StatCardProps) {
  return (
    <section className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium text-gray-500">
          {title}
        </p>

        <span
          className={`rounded-lg px-3 py-1 text-xs font-semibold ${accentStyles[accent]}`}
        >
          {accent.toUpperCase()}
        </span>
      </div>

      <p className="mt-4 text-3xl font-bold text-gray-900">
        {value}
      </p>

      <p className="mt-2 text-sm text-gray-500">
        {description}
      </p>
    </section>
  );
}
