"use client";

import AppHeader from "@/components/app-header";
import { useAuth } from "@/hooks/use-auth";
import React from "react";

const PAGE_TITLE = "User List";
const UsersHeader = () => {
  const { user } = useAuth();

  return (
    <AppHeader
      title={PAGE_TITLE}
      menu={
        <div className="flex items-center space-x-2">
          <span className="text-blue-600 font-semibold text-sm">
            {user?.userName}
          </span>
          <span className="text-blue-600 font-semibold text-sm">
            {user?.userRole}
          </span>
        </div>
      }
    />
  );
};

export default UsersHeader;
