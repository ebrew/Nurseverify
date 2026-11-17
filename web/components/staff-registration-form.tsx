"use client";

import { useState } from "react";

export type NewStaffInput = {
  firstName: string;
  lastName: string;
  department: string;
  jobTitle: string;
};

type StaffRegistrationFormProps = {
  onAdd: (staff: NewStaffInput) => void;
  onCancel: () => void;
};

export default function StaffRegistrationForm({
  onAdd,
  onCancel,
}: StaffRegistrationFormProps) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [department, setDepartment] = useState("");
  const [jobTitle, setJobTitle] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    onAdd({
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      department: department.trim(),
      jobTitle: jobTitle.trim(),
    });
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
    >
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-gray-900">
          Register New Staff
        </h2>
        <p className="mt-1 text-sm text-gray-500">
          Enter the staff member's details below.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            First name
          </label>
          <input
            required
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
            className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm"
            placeholder="e.g. Ama"
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Last name
          </label>
          <input
            required
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
            className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm"
            placeholder="e.g. Mensah"
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Department
          </label>
          <input
            required
            value={department}
            onChange={(event) => setDepartment(event.target.value)}
            className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm"
            placeholder="e.g. Emergency"
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Job title
          </label>
          <input
            required
            value={jobTitle}
            onChange={(event) => setJobTitle(event.target.value)}
            className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm"
            placeholder="e.g. Registered Nurse"
          />
        </div>
      </div>

      <div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
        <button
          type="button"
          onClick={onCancel}
          className="rounded-lg border border-gray-300 px-4 py-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-50"
        >
          Cancel
        </button>

        <button
          type="submit"
          className="rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-blue-700"
        >
          Register Staff
        </button>
      </div>
    </form>
  );
}