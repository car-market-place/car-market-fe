import * as React from "react";

import { cn } from "@/lib/utils";

export interface BaseInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}

const BaseInput = React.forwardRef<HTMLInputElement, BaseInputProps>(
  ({ className, error, type = "text", ...props }, ref) => {
    return (
      <input
        ref={ref}
        type={type}
        className={cn(
          "flex h-10 w-full rounded-md border bg-background px-3 py-2 text-sm",
          "placeholder:text-muted-foreground",
          "focus:outline-none focus:ring-2 focus:ring-ring",
          "disabled:cursor-not-allowed disabled:opacity-50",

          error && "border-destructive focus:ring-destructive",

          className,
        )}
        {...props}
      />
    );
  },
);

BaseInput.displayName = "BaseInput";

export { BaseInput };
