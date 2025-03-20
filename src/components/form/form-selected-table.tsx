"use client";

import { FormCheckboxGroup } from "@/components/form/form-checkbox-group";
import { Badge } from "@/components/ui/badge";
import { Form } from "@/components/ui/form";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { USER_ROLES_CHECKBOX_OPTIONS } from "@/config/filters";
import { useForm } from "react-hook-form";

const FormSelectedTable = () => {
  const form = useForm({
    defaultValues: {
      userRole: ["All"],
    },
  });

  return (
    <Form {...form}>
      <Table>
        <TableHeader>
          <TableRow className="border-primary">
            <TableHead className="flex items-center gap-2">
              Selected
              <Badge variant="outline">5</Badge>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="w-36 font-bold">사용자 권한</TableCell>
            <TableCell>
              <FormCheckboxGroup
                options={USER_ROLES_CHECKBOX_OPTIONS}
                control={form.control}
                name="userRole"
              />
            </TableCell>
          </TableRow>
          <TableRow />
        </TableBody>
      </Table>
    </Form>
  );
};

export default FormSelectedTable;
