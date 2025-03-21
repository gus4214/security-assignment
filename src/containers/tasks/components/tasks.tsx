"use client";

import { TASK_FILTER_OPTIONS } from "@/config/filters";
import TasksFilter from "@/containers/tasks/components/tasks-filter";
import { FilterForm, TaskFilterType } from "@/types/filter";
import { useForm } from "react-hook-form";

const Tasks = () => {
  const taskFilterForm = useForm<FilterForm>({
    defaultValues: {
      filter: TASK_FILTER_OPTIONS[0].value as TaskFilterType,
      search: "",
    },
  });

  return (
    <div className="flex flex-col space-y-16">
      <TasksFilter taskFilterForm={taskFilterForm} />
    </div>
  );
};

export default Tasks;
