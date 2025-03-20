import React, { ReactNode } from "react";

const LoginPageLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-1 flex-col h-screen">
      <div className="flex justify-center items-center min-h-full">
        {children}
      </div>
    </div>
  );
};

export default LoginPageLayout;
