
import StaffDirectory from "@/components/staff-directory";

export default function StaffPage() {
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">
          Staff Management
        </h1>

        <p className="mt-1 text-sm text-gray-500">
          Manage nurses and other registered staff members.
        </p>
      </div>

      <StaffDirectory />
    </div>
  );
}
