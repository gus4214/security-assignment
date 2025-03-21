"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { MENU_ITEMS } from "@/config/menu";
import { useAuth } from "@/hooks/use-auth";
import { usePermission } from "@/hooks/use-permission";
import { cn } from "@/lib/utils";
import { usePathname, useRouter } from "next/navigation";

export function AppSidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const { user } = useAuth();
  const { hasPermission } = usePermission();

  const isActive = user && hasPermission("canAccessMenu");

  return (
    <Sidebar>
      <SidebarHeader className="mt-16" />
      <SidebarContent>
        <SidebarMenu className="px-2">
          {MENU_ITEMS.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton
                disabled={!isActive}
                onClick={() => router.push(item.href)}
                className={cn(
                  pathname === item.href &&
                    "bg-primary hover:bg-primary text-muted hover:text-muted"
                )}
              >
                {item.icon}
                {item.title}
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
