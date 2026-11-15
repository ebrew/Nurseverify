
import StatCard from "@/components/stat-card";

const statistics = [
  {
    title: "Total Staff",
    value: "248",
    description: "All registered staff members",
    accent: "blue" as const,
  },
  {
    title: "Active Staff",
    value: "231",
    description: "Currently eligible for verification",
    accent: "green" as const,
  },
  {
    title: "Inactive Staff",
    value: "17",
    description: "Not currently eligible for verification",
    accent: "rose" as const,
  },
  {
    title: "Departments",
    value: "12",
    description: "Registered departments",
    accent: "amber" as const,
  },
];

export default function Home() {
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">
          Overview
        </h1>

        <p className="mt-1 text-sm text-gray-500">
          Here's an overview of your staff management system.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {statistics.map((statistic) => (
          <StatCard
            key={statistic.title}
            title={statistic.title}
            value={statistic.value}
            description={statistic.description}
            accent={statistic.accent}
          />
        ))}
      </div>

      <section className="mt-8 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-gray-900">
          Welcome to NurseVerify
        </h2>

        <p className="mt-2 text-sm leading-6 text-gray-600">
          Your central workspace for managing nurses, monitoring
          staff status and verifying professional credentials.
        </p>

        <p className="mt-4 rounded-lg bg-amber-50 p-3 text-sm text-amber-800">
          Demonstration data only. These figures are placeholders
          and will be replaced with live database information later.
        </p>
      </section>
    </div>
  );
}
