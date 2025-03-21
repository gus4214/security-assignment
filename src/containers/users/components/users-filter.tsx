"use client";

import { FormCheckboxGroup } from "@/components/form/form-checkbox-group";
import FormSearchFilter from "@/components/form/form-search-filter";
import FormSelectedTable from "@/components/form/form-selected-table";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { TableCell, TableRow } from "@/components/ui/table";
import { USER_FILTER_OPTIONS } from "@/config/filters";
import { usePermission } from "@/hooks/use-permission";
import { FilterForm, FilterOptions, UserRolesCheckForm } from "@/types/filter";
import { FC } from "react";
import { UseFormReturn } from "react-hook-form";

interface UsersFilterProps {
  userFilterForm: UseFormReturn<FilterForm>;
  userRolesCheckForm: UseFormReturn<UserRolesCheckForm>;
  filteredUserRolesOptions: FilterOptions[];
  selectedCount: number;
}

const UsersFilter: FC<UsersFilterProps> = ({
  userFilterForm,
  userRolesCheckForm,
  filteredUserRolesOptions,
  selectedCount,
}) => {
  const { hasPermission } = usePermission();
  const canInvite = hasPermission("canInvite");

  return (
    <div className="flex flex-col space-y-6">
      <FormSearchFilter
        filterForm={userFilterForm}
        filterOptions={USER_FILTER_OPTIONS}
        action={<Button disabled={!canInvite}>Invite User</Button>}
      />

      <Form {...userRolesCheckForm}>
        <FormSelectedTable
          count={selectedCount}
          body={
            <TableRow>
              <TableCell className="w-36 font-bold">사용자 권한</TableCell>
              <TableCell>
                <FormCheckboxGroup
                  options={filteredUserRolesOptions}
                  control={userRolesCheckForm.control}
                  name="userRoles"
                />
              </TableCell>
            </TableRow>
          }
        />
      </Form>
    </div>
  );
};

export default UsersFilter;
