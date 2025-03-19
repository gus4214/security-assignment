import { MenuItemProps } from "@/types/menu";
import { ClipboardCheck, LayoutTemplate } from "lucide-react";

export const MENU_ITEMS: MenuItemProps[] = [
  {
    title: "Users",
    href: "/users",
    icon: <LayoutTemplate />,
  },
  {
    title: "Tasks",
    href: "/tasks",
    icon: <ClipboardCheck />,
  },
];
