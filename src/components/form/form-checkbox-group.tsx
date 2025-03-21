"use client";

import { Checkbox } from "@/components/ui/checkbox";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { FilterOptions } from "@/types/filter";
import { FieldPath, FieldValues, UseControllerProps } from "react-hook-form";

interface FormCheckboxGroupProps<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>
> extends UseControllerProps<TFieldValues, TName> {
  options: FilterOptions[];
}

export function FormCheckboxGroup<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>
>({ options, ...props }: FormCheckboxGroupProps<TFieldValues, TName>) {
  return (
    <FormField
      control={props.control}
      name={props.name}
      render={() => (
        <FormItem className="flex items-center space-x-14">
          {options.map((option) => {
            const isAllOption = option.value === "All";
            const nonAllOptions = options
              .filter((o) => o.value !== "All")
              .map((o) => o.value);

            return (
              <FormField
                key={option.value}
                control={props.control}
                name={props.name}
                render={({ field }) => {
                  const checked = isAllOption
                    ? field.value &&
                      Array.isArray(field.value) &&
                      field.value.length === nonAllOptions.length
                    : field.value?.includes(option.value);

                  return (
                    <FormItem key={option.value} className="flex items-center">
                      <FormControl>
                        <Checkbox
                          checked={checked}
                          onCheckedChange={(checkedValue) => {
                            if (isAllOption) {
                              if (checkedValue) {
                                field.onChange(nonAllOptions);
                              } else {
                                field.onChange([]);
                              }
                            } else {
                              let newValue = Array.isArray(field.value)
                                ? [...field.value]
                                : [];
                              if (checkedValue) {
                                if (!newValue.includes(option.value)) {
                                  newValue.push(option.value);
                                }
                              } else {
                                newValue = newValue.filter(
                                  (v) => v !== option.value
                                );
                              }
                              field.onChange(newValue);
                            }
                          }}
                        />
                      </FormControl>
                      <FormLabel className="text-sm font-normal">
                        {option.label}
                      </FormLabel>
                    </FormItem>
                  );
                }}
              />
            );
          })}
        </FormItem>
      )}
    />
  );
}
