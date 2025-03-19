import AppHeader from "@/components/app-header";
import AppMain from "@/components/app-main";
import React, { ReactNode } from "react";

const PAGE_TITLE = "Task List";
const TaskListPageLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <AppHeader title={PAGE_TITLE} />
      <AppMain>{children}</AppMain>
    </>
  );
};

export default TaskListPageLayout;
