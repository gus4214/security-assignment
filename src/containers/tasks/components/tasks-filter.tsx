"use client";

import FormSearchFilter from "@/components/form/form-search-filter";
import { Button } from "@/components/ui/button";
import { TASK_FILTER_OPTIONS } from "@/config/filters";
import { FilterForm } from "@/types/filter";
import { FC } from "react";
import { UseFormReturn } from "react-hook-form";

interface TasksFilterProps {
  taskFilterForm: UseFormReturn<FilterForm>;
}

const TasksFilter: FC<TasksFilterProps> = ({ taskFilterForm }) => {
  return (
    <div className="flex flex-col space-y-6">
      <FormSearchFilter
        filterForm={taskFilterForm}
        filterOptions={TASK_FILTER_OPTIONS}
        action={<Button>Create Task</Button>}
      />
    </div>
  );
};

export default TasksFilter;
