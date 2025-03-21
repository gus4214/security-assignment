import { FilterOptions } from "@/types/filter";

export const USER_FILTER_OPTIONS: FilterOptions[] = [
  { value: "userName", label: "User Name" },
  { value: "userEmail", label: "User Email" },
  { value: "userPhone", label: "User Phone" },
];

export const USER_ROLES_CHECKBOX_OPTIONS: FilterOptions[] = [
  { value: "All", label: "All" },
  { value: "Admin", label: "Admin" },
  { value: "PrimeUser", label: "Prime User" },
  { value: "RegularUser", label: "Regular User" },
  { value: "Viewer", label: "Viewer" },
];

export const TASK_FILTER_OPTIONS: FilterOptions[] = [
  { value: "taskName", label: "Task Name" },
  { value: "reporter", label: "Reporter" },
  { value: "taskDescription", label: "Description" },
  { value: "assignee", label: "담장자 (Assignee)" },
];

export const TASK_TYPES_CHECKBOX_OPTIONS: FilterOptions[] = [
  { value: "All", label: "All" },
  { value: "reporter", label: "Reporter" },
  { value: "taskDescription", label: "Description" },
];
