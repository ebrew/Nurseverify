"use client";

import { useState } from "react";
import { staffMembers } from "@/lib/staff-data";
import type { StaffMember, StaffStatus } from "@/lib/staff-data";
import StaffStatusBadge from "@/components/staff-status-badge";
import StaffRegistrationForm from "@/components/staff-registration-form";
import type { NewStaffInput } from "@/components/staff-registration-form";

export default function StaffDirectory() {
  const [staffList, setStaffList] = useState<StaffMember[]>(staffMembers);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<
    StaffStatus | "ALL"
  >("ALL");
  const [showForm, setShowForm] = useState(false);

  function handleAddStaff(newStaff: NewStaffInput) {
    setStaffList((currentStaff) => {
      const nextNumber = currentStaff.length + 1;

      const staffMember: StaffMember = {
        id: crypto.randomUUID(),
        staffNumber: `NV-${String(nextNumber).padStart(4, "0")}`,
        ...newStaff,
        status: "ACTIVE",
      };

      return [...currentStaff, staffMember];
    });

    setShowForm(false);
  }

  const filteredStaff = staffList.filter((staff) => {
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
      {showForm ? (
        <StaffRegistrationForm
          onAdd={handleAddStaff}
          onCancel={() => setShowForm(false)}
        />
      ) : (
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
            onClick={() => setShowForm(true)}
            className="rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-blue-700"
          >
            + Add Staff
          </button>
        </div>
      )}

      {!showForm && (
        <>
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

          <div className="text-sm text-gray-500">
            Showing <strong>{filteredStaff.length}</strong> of{" "}
            <strong>{staffList.length}</strong> staff members
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
        </>
      )}
    </div>
  );
}