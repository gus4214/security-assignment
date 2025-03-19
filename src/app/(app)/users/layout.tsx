import AppHeader from "@/components/app-header";
import AppMain from "@/components/app-main";
import React, { ReactNode } from "react";

const PAGE_TITLE = "User List";
const UserListPageLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <AppHeader title={PAGE_TITLE} menu={<span>김수정 Prime User</span>} />
      <AppMain>{children}</AppMain>
    </>
  );
};

export default UserListPageLayout;
