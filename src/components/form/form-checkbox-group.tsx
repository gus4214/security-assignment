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
          {options.map((option) => (
            <FormField
              key={option.value}
              control={props.control}
              name={props.name}
              render={({ field }) => {
                return (
                  <FormItem key={option.value} className="flex items-center">
                    <FormControl>
                      <Checkbox
                        checked={field.value?.includes(option.value)}
                        onCheckedChange={(checked) => {
                          return checked
                            ? field.onChange([...field.value, option.value])
                            : field.onChange(
                                field.value?.filter(
                                  (value: string) => value !== option.value
                                )
                              );
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
          ))}
        </FormItem>
      )}
    />
  );
}
