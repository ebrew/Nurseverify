
"use client";

import { useState } from "react";
import { staffMembers } from "@/lib/staff-data";
import type { StaffStatus } from "@/lib/staff-data";
import StaffStatusBadge from "@/components/staff-status-badge";

export default function StaffDirectory() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<
    StaffStatus | "ALL"
  >("ALL");

  const filteredStaff = staffMembers.filter((staff) => {
    const fullName = `${staff.firstName} ${staff.lastName}`;

    const matchesSearch =
      fullName.toLowerCase().includes(search.toLowerCase()) ||
      staff.staffNumber.toLowerCase().includes(search.toLowerCase()) ||
      staff.department.toLowerCase().includes(search.toLowerCase());

    const matchesStatus =
      statusFilter === "ALL" || staff.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">
            Staff Directory
          </h2>

          <p className="text-sm text-gray-500">
            Search and manage registered staff members.
          </p>
        </div>

        <button
          type="button"
          disabled
          title="Staff registration will be implemented in the next lesson"
          className="rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white opacity-60"
        >
          + Add Staff (Coming soon)
        </button>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row">
        <input
          type="search"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Search by name, staff number or department..."
          className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
        />

        <select
          value={statusFilter}
          onChange={(event) =>
            setStatusFilter(event.target.value as StaffStatus | "ALL")
          }
          className="rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm outline-none focus:border-blue-500"
        >
          <option value="ALL">All statuses</option>
          <option value="ACTIVE">Active</option>
          <option value="INACTIVE">Inactive</option>
        </select>
      </div>

      <div className="flex items-center justify-between text-sm text-gray-500">
        <p>
          Showing <strong>{filteredStaff.length}</strong> of{" "}
          <strong>{staffMembers.length}</strong> staff members
        </p>
      </div>

      <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white">
        <table className="w-full min-w-[750px] text-left text-sm">
          <thead className="border-b border-gray-200 bg-gray-50 text-xs uppercase text-gray-500">
            <tr>
              <th className="px-5 py-4 font-semibold">Staff member</th>
              <th className="px-5 py-4 font-semibold">Staff number</th>
              <th className="px-5 py-4 font-semibold">Department</th>
              <th className="px-5 py-4 font-semibold">Job title</th>
              <th className="px-5 py-4 font-semibold">Status</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-100">
            {filteredStaff.map((staff) => (
              <tr key={staff.id} className="hover:bg-gray-50">
                <td className="px-5 py-4 font-medium text-gray-900">
                  {staff.firstName} {staff.lastName}
                </td>

                <td className="px-5 py-4 text-gray-600">
                  {staff.staffNumber}
                </td>

                <td className="px-5 py-4 text-gray-600">
                  {staff.department}
                </td>

                <td className="px-5 py-4 text-gray-600">
                  {staff.jobTitle}
                </td>

                <td className="px-5 py-4">
                  <StaffStatusBadge status={staff.status} />
                </td>
              </tr>
            ))}

            {filteredStaff.length === 0 && (
              <tr>
                <td
                  colSpan={5}
                  className="px-5 py-10 text-center text-gray-500"
                >
                  No staff members match your search.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
