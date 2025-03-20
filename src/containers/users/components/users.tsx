"use client";

import FormSearch from "@/components/form/form-search";
import FormSelectedTable from "@/components/form/form-selected-table";
import { Button } from "@/components/ui/button";

const Users = () => {
  return (
    <>
      <div className="flex items-center space-x-4">
        <FormSearch />
        <Button>Invite User</Button>
      </div>

      <div className="mt-6">
        <FormSelectedTable />
      </div>
    </>
  );
};

export default Users;
