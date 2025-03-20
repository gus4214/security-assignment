export type UserRole = "Admin" | "RegularUser" | "PrimeUser" | "Viewer";

export interface User {
  userName: string;
  userPhone: string;
  userEmail: string;
  userRole: string;
  createdAt: string;
  lastLoggedInAt: string;
}
