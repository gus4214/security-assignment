"use client";

import { FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { FieldPath, FieldValues, UseControllerProps } from "react-hook-form";

interface FormInputProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> extends UseControllerProps<TFieldValues, TName> {
  inputProps?: React.ComponentProps<"input">;
}

const FormInput = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({
  inputProps,
  ...props
}: FormInputProps<TFieldValues, TName>) => {
  return (
    <FormField
      control={props.control}
      name={props.name}
      render={({ field }) => (
        <FormItem className="relative">
          <FormControl>
            <div className="flex items-center">
              <Input {...field} {...inputProps} />
              <Search className="absolute right-2 size-4 shrink-0 opacity-50" />
            </div>
          </FormControl>
        </FormItem>
      )}
    />
  );
};

export default FormInput;
