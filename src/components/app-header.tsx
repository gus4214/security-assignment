"use client";

import { SidebarTrigger, useSidebar } from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import { UserRound } from "lucide-react";
import React, { FC, ReactNode } from "react";

interface AppHeaderProps {
  title: string;
  menu?: ReactNode;
}

const AppHeader: FC<AppHeaderProps> = ({ title, menu }) => {
  const { isMobile, open } = useSidebar();

  return (
    <div className="flex flex-col">
      <header className="container pt-2 flex justify-between items-center">
        <h1 className="text-xl font-semibold">{title}</h1>
        <div className="flex items-center gap-4">
          {menu && menu}
          <UserRound size="20px" />
        </div>
      </header>
      <SidebarTrigger
        className={cn(open && !isMobile ? "-ml-3 z-10" : "ml-3")}
      />
    </div>
  );
};

export default AppHeader;
