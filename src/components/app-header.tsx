"use client";

import { Button } from "@/components/ui/button";
import { SidebarTrigger, useSidebar } from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import { User } from "@/types/user";
import { LogInIcon, UserRound } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { FC, ReactNode } from "react";

interface AppHeaderProps {
  title: string;
  menu?: ReactNode;
  user: User;
}

const AppHeader: FC<AppHeaderProps> = ({ title, menu, user }) => {
  const { isMobile, open } = useSidebar();
  const router = useRouter();

  return (
    <div className="flex flex-col">
      <header className="container pt-2 flex justify-between items-center">
        <h1 className="text-xl font-semibold">{title}</h1>
        <div className="flex items-center gap-4">
          {menu && menu}
          {user ? (
            <UserRound size="20px" />
          ) : (
            <Button variant="outline" onClick={() => router.push("/login")}>
              <span className="text-sm font-bold">로그인</span>
              <LogInIcon size={"20px"} />
            </Button>
          )}
        </div>
      </header>
      <SidebarTrigger
        className={cn(open && !isMobile ? "-ml-3 z-10" : "ml-3")}
      />
    </div>
  );
};

export default AppHeader;
