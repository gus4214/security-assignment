import { User, UserRole } from "@/types/user";

export interface FilterOptions {
  value: string;
  label: string;
}

export type UserFilter = keyof Pick<
  User,
  "userEmail" | "userPhone" | "userName"
>;

export interface FilterForm {
  filter: string;
  search: string;
}

export interface UserRolesCheckForm {
  userRoles: UserRole[];
}
