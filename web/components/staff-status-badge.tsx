
import type { StaffStatus } from "@/lib/staff-data";

type StaffStatusBadgeProps = {
  status: StaffStatus;
};

export default function StaffStatusBadge({
  status,
}: StaffStatusBadgeProps) {
  const isActive = status === "ACTIVE";

  return (
    <span
      className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
        isActive
          ? "bg-green-100 text-green-700"
          : "bg-red-100 text-red-700"
      }`}
    >
      {isActive ? "Active" : "Inactive"}
    </span>
  );
}
