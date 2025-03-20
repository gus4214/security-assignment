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
