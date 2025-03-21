import { ROLE_PERMISSIONS } from "@/config/permissions";
import { useAuth } from "@/hooks/use-auth";

export const usePermission = () => {
  const { user } = useAuth();

  const hasPermission = (
    permission: keyof (typeof ROLE_PERMISSIONS)["Admin"]
  ): boolean => {
    if (!user) return false;
    const role = user.userRole as keyof typeof ROLE_PERMISSIONS;
    return ROLE_PERMISSIONS[role]?.[permission] || false;
  };

  return { hasPermission };
};
