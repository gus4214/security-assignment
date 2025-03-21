import FormInput from "@/components/form/form-input";
import FormSelect from "@/components/form/form-select";
import { Form } from "@/components/ui/form";
import { FilterForm, FilterOptions } from "@/types/filter";
import { Search } from "lucide-react";
import { ReactNode } from "react";
import { UseFormReturn } from "react-hook-form";

interface FormSearchFilterProps {
  filterForm: UseFormReturn<FilterForm>;
  filterOptions: FilterOptions[];
  action?: ReactNode;
}

const FormSearchFilter = ({
  filterForm,
  filterOptions,
  action,
}: FormSearchFilterProps) => {
  return (
    <div className="flex items-center space-x-4">
      <Form {...filterForm}>
        <div className="flex items-center space-x-2">
          <FormSelect
            options={filterOptions}
            control={filterForm.control}
            name="filter"
          />
          <FormInput
            control={filterForm.control}
            name="search"
            inputProps={{ placeholder: "Search", className: "w-72" }}
            endIcon={<Search className="opacity-50 size-4" />}
          />
        </div>
      </Form>
      {action && action}
    </div>
  );
};

export default FormSearchFilter;
