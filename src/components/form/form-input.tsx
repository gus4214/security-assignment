"use client";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ReactNode } from "react";
import { FieldPath, FieldValues, UseControllerProps } from "react-hook-form";

interface FormInputProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> extends UseControllerProps<TFieldValues, TName> {
  label?: string;
  endIcon?: ReactNode;
  inputProps?: React.ComponentProps<"input">;
}

const FormInput = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({
  label,
  endIcon,
  inputProps,
  ...props
}: FormInputProps<TFieldValues, TName>) => {
  return (
    <FormField
      control={props.control}
      name={props.name}
      render={({ field }) => (
        <FormItem className="relative">
          {label && <FormLabel>{label}</FormLabel>}
          <FormControl>
            <div className="flex items-center">
              <Input {...field} {...inputProps} />
              {endIcon && (
                <div className="absolute right-2 shrink-0">{endIcon}</div>
              )}
            </div>
          </FormControl>
        </FormItem>
      )}
    />
  );
};

export default FormInput;
