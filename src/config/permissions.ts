export const ROLE_PERMISSIONS = {
  Admin: {
    canViewAllUsers: true,
    canInvite: true,
  },
  PrimeUser: {
    canViewAllUsers: true,
    canInvite: false,
  },
  RegularUser: {
    canViewAllUsers: false, // 본인 정보만 볼 수 있음
    canInvite: false,
  },
  Viewer: {
    canAccessMenu: false, // 메뉴 접근 금지
  },
} as const;
