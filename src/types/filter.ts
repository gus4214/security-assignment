import { Task } from "@/types/task";
import { User, UserRole } from "@/types/user";

export interface FilterOptions {
  value: string;
  label: string;
}

export type UserFilterType = keyof Pick<
  User,
  "userEmail" | "userPhone" | "userName"
>;

export type TaskFilterType = keyof Pick<
  Task,
  "taskName" | "reporter" | "taskDescription" | "assignee"
>;

export interface FilterForm {
  filter: string;
  search: string;
}

export interface UserRolesCheckForm {
  userRoles: UserRole[];
}

export interface TaskTypesCheckForm {
  taskType: string[];
}
