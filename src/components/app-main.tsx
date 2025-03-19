import { cn } from "@/lib/utils";
import React, { FC, ReactNode } from "react";

interface AppMainProps {
  children: ReactNode;
  className?: string;
}

const AppMain: FC<AppMainProps> = ({ children, className }) => {
  return <main className={cn("container mt-6", className)}>{children}</main>;
};

export default AppMain;
