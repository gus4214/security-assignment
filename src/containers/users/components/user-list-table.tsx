import React, { FC } from "react";
import { User } from "@/types/user";
import DataTable from "@/components/data-table";
import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { ArrowUpDown } from "lucide-react";

interface UserListTableProps {
  userList: User[];
}

export const userColumns: ColumnDef<User>[] = [
  {
    accessorKey: "userName",
    header: "User Name",
    cell: ({ row }) => <div>{row.getValue("userName")}</div>,
  },
  {
    accessorKey: "userEmail",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        User Email <ArrowUpDown />
      </Button>
    ),
    cell: ({ row }) => <div>{row.getValue("userEmail")}</div>,
  },
  {
    accessorKey: "userRole",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "desc")}
      >
        User Role <ArrowUpDown />
      </Button>
    ),
    cell: ({ row }) => <div>{row.getValue("userRole")}</div>,
  },
  {
    accessorKey: "userPhone",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        User Phone <ArrowUpDown />
      </Button>
    ),
    cell: ({ row }) => <div>{row.getValue("userPhone")}</div>,
  },
  {
    accessorKey: "createdAt",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Created At <ArrowUpDown />
      </Button>
    ),
    cell: ({ row }) => (
      <div>{new Date(row.getValue("createdAt")).toLocaleDateString()}</div>
    ),
  },
  {
    accessorKey: "lastLoggedInAt",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Last Logged In At <ArrowUpDown />
      </Button>
    ),
    cell: ({ row }) => (
      <div>{new Date(row.getValue("lastLoggedInAt")).toLocaleDateString()}</div>
    ),
  },
];

const UserListTable: FC<UserListTableProps> = ({ userList }) => {
  return <DataTable<User> data={userList} columns={userColumns} />;
};

export default UserListTable;
