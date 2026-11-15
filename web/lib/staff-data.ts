
export type StaffStatus = "ACTIVE" | "INACTIVE";

export type StaffMember = {
  id: string;
  staffNumber: string;
  firstName: string;
  lastName: string;
  department: string;
  jobTitle: string;
  status: StaffStatus;
};

export const staffMembers: StaffMember[] = [
  {
    id: "1",
    staffNumber: "NV-0001",
    firstName: "Ama",
    lastName: "Mensah",
    department: "Emergency",
    jobTitle: "Registered Nurse",
    status: "ACTIVE",
  },
  {
    id: "2",
    staffNumber: "NV-0002",
    firstName: "Kwame",
    lastName: "Asante",
    department: "Paediatrics",
    jobTitle: "Senior Nurse",
    status: "ACTIVE",
  },
  {
    id: "3",
    staffNumber: "NV-0003",
    firstName: "Akosua",
    lastName: "Boateng",
    department: "Surgery",
    jobTitle: "Registered Nurse",
    status: "INACTIVE",
  },
  {
    id: "4",
    staffNumber: "NV-0004",
    firstName: "Kofi",
    lastName: "Owusu",
    department: "Maternity",
    jobTitle: "Midwife",
    status: "ACTIVE",
  },
  {
    id: "5",
    staffNumber: "NV-0005",
    firstName: "Abena",
    lastName: "Osei",
    department: "Emergency",
    jobTitle: "Nurse Assistant",
    status: "INACTIVE",
  },
];
