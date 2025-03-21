"use client";

import AppHeader from "@/components/app-header";
import AppMain from "@/components/app-main";
import { useAuth } from "@/hooks/use-auth";
import React, { ReactNode } from "react";

const PAGE_TITLE = "Task List";
const TaskListPageLayout = ({ children }: { children: ReactNode }) => {
  const { user } = useAuth();

  return (
    <>
      <AppHeader
        title={PAGE_TITLE}
        user={user!}
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
      <AppMain>{children}</AppMain>
    </>
  );
};

export default TaskListPageLayout;
