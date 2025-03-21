"use client";

import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { FC, ReactNode } from "react";

interface FormSelectedTableProps {
  count: number;
  body: ReactNode;
}

const FormSelectedTable: FC<FormSelectedTableProps> = ({ count, body }) => {
  return (
    <Table>
      <TableHeader>
        <TableRow className="border-primary">
          <TableHead className="flex items-center gap-2">
            Selected
            <Badge variant="outline">{count}</Badge>
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {body}
        <TableRow />
      </TableBody>
    </Table>
  );
};

export default FormSelectedTable;
