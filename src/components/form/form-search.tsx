"use client";

import FormInput from "@/components/form/form-input";
import FormSelect from "@/components/form/form-select";
import { Form } from "@/components/ui/form";
import { USER_FILTER_OPTIONS } from "@/config/filters";
import { useForm } from "react-hook-form";

const FormSearch = () => {
  const form = useForm({
    defaultValues: {
      filter: USER_FILTER_OPTIONS[0].value,
      search: "",
    },
  });

  return (
    <Form {...form}>
      <div className="flex items-center space-x-2">
        <FormSelect
          options={USER_FILTER_OPTIONS}
          control={form.control}
          name="filter"
        />
        <FormInput
          control={form.control}
          name="search"
          inputProps={{ placeholder: "Search", className: "w-72" }}
        />
      </div>
    </Form>
  );
};

export default FormSearch;
