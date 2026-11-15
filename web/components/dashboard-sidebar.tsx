
import Link from "next/link";

const navigationItems = [
  { label: "Overview", href: "/", icon: "⌂" },
  { label: "Staff", href: "/staff", icon: "♙" },
  { label: "Departments", href: "/departments", icon: "▤" },
  { label: "Verification Logs", href: "/verification-logs", icon: "✓" },
  { label: "Settings", href: "/settings", icon: "⚙" },
];

export default function DashboardSidebar() {
  return (
    <aside className="w-full shrink-0 border-b border-gray-200 bg-white p-5 md:min-h-screen md:w-64 md:border-b-0 md:border-r">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-blue-700">
          NurseVerify
        </h1>
        <p className="mt-1 text-xs text-gray-500">
          Staff management system
        </p>
      </div>

      <nav aria-label="Main navigation">
        <ul className="flex flex-wrap gap-2 md:flex-col">
          {navigationItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="flex items-center gap-3 rounded-lg px-3 py-3 text-sm font-medium text-gray-600 transition-colors hover:bg-blue-50 hover:text-blue-700"
              >
                <span aria-hidden="true">{item.icon}</span>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="mt-8 rounded-lg bg-blue-50 p-4">
        <p className="text-sm font-semibold text-blue-900">
          Administration
        </p>
        <p className="mt-1 text-xs text-blue-700">
          Manage staff and verification.
        </p>
      </div>
    </aside>
  );
}
