export const ROLE_PERMISSIONS = {
  Admin: {
    canViewAllUsers: true,
    canInvite: true,
    canAccessMenu: true,
  },
  PrimeUser: {
    canViewAllUsers: true,
    canInvite: false,
    canAccessMenu: true,
  },
  RegularUser: {
    canViewAllUsers: false, // 본인 정보만 볼 수 있음
    canInvite: false,
    canAccessMenu: true,
  },
  Viewer: {
    canAccessMenu: false, // 메뉴 접근 금지
  },
} as const;
