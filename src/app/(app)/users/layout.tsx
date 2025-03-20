import AppMain from "@/components/app-main";
import UsersHeader from "@/containers/users/components/users-header";
import { ReactNode } from "react";

const UserListPageLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <UsersHeader />
      <AppMain>{children}</AppMain>
    </>
  );
};

export default UserListPageLayout;
