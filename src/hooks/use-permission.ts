import { ROLE_PERMISSIONS } from "@/config/permissions";
import { useAuth } from "@/hooks/use-auth";
import { PermissionsType } from "@/types/permissions";

export const usePermission = () => {
  const { user } = useAuth();

  const hasPermission = (permission: PermissionsType): boolean => {
    if (!user) return false;
    const role = user.userRole as keyof typeof ROLE_PERMISSIONS;
    return (
      (ROLE_PERMISSIONS[role] as Record<PermissionsType, boolean>)?.[
        permission
      ] || false
    );
  };

  return { hasPermission };
};
