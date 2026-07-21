"use client";

import { Control, FieldPath, FieldValues } from "@car-market/ui";
import { BaseCombobox, BaseComboboxProps } from "../base/BaseCombobox";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui";

export interface FormComboboxProps<
  TFieldValues extends FieldValues,
> extends Omit<BaseComboboxProps, "value" | "onValueChange"> {
  control: Control<TFieldValues>;
  name: FieldPath<TFieldValues>;
  label?: string;
  description?: string;
}

export function FormCombobox<TFieldValues extends FieldValues>({
  control,
  name,
  label,
  description,
  ...props
}: FormComboboxProps<TFieldValues>) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          {label && <FormLabel>{label}</FormLabel>}

          <FormControl>
            <BaseCombobox
              {...props}
              value={field.value}
              onValueChange={field.onChange}
            />
          </FormControl>

          {description && <FormDescription>{description}</FormDescription>}

          <FormMessage />
        </FormItem>
      )}
    />
  );
}
