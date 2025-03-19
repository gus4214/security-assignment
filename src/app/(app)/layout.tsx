import { ReactNode } from "react";

const AppLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-1 flex-col">
      {/* SideBar */}
      <div className="flex flex-1 flex-col">{children}</div>
    </div>
  );
};

export default AppLayout;
