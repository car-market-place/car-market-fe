import * as React from "react";

import { cn } from "@/lib/utils";
import {
  Controller,
  ControllerProps,
  FieldPath,
  FieldValues,
  FormProvider,
  useFormContext,
} from "@car-market/ui";
import { Label } from "./label";

const Form = FormProvider;

const FormField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  ...props
}: ControllerProps<TFieldValues, TName>) => {
  return <Controller {...props} />;
};

const FormItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("space-y-2", className)} {...props} />
));

FormItem.displayName = "FormItem";

const FormLabel = React.forwardRef<
  React.ElementRef<typeof Label>,
  React.ComponentPropsWithoutRef<typeof Label>
>((props, ref) => <Label ref={ref} {...props} />);

FormLabel.displayName = "FormLabel";

const FormControl = React.forwardRef<
  HTMLElement,
  React.HTMLAttributes<HTMLElement>
>(({ ...props }, ref) => <div ref={ref as any} {...props} />);

const FormDescription = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) => (
  <p className={cn("text-sm text-muted-foreground", className)} {...props} />
);

const FormMessage = ({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) => {
  const { formState } = useFormContext();

  return (
    <p
      className={cn("text-sm font-medium text-destructive", className)}
      {...props}
    >
      {children || formState.errors?.root?.message}
    </p>
  );
};

export {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
};
