"use client";

import { Loader2 } from "lucide-react";
import * as React from "react";

import { cn } from "@/lib/utils";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export interface SelectOption {
  label: React.ReactNode;
  value: string;
  disabled?: boolean;
}

export interface BaseSelectProps {
  value?: string;
  defaultValue?: string;
  placeholder?: string;
  options: SelectOption[];
  disabled?: boolean;
  loading?: boolean;
  clearable?: boolean;
  searchable?: boolean;
  className?: string;
  contentClassName?: string;
  onOpenChange?: (open: boolean) => void;
  onSearch?: (keyword: string) => void;
  onLoadMore?: () => void;
  onValueChange?: (value: string) => void;
}

export function BaseSelect({
  value,
  defaultValue,
  placeholder = "Select...",
  options,
  disabled,
  loading,
  className,
  contentClassName,
  onOpenChange,
  onValueChange,
}: BaseSelectProps) {
  return (
    <Select
      value={value}
      defaultValue={defaultValue}
      disabled={disabled}
      onOpenChange={onOpenChange}
      onValueChange={onValueChange}
    >
      <SelectTrigger className={cn("w-full", className)}>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>

      <SelectContent className={contentClassName}>
        {loading && (
          <div className="flex items-center justify-center gap-2 py-4 text-sm text-muted-foreground">
            <Loader2 className="h-4 w-4 animate-spin" />
            Loading...
          </div>
        )}

        {!loading &&
          options.map((option) => (
            <SelectItem
              key={option.value}
              value={option.value}
              disabled={option.disabled}
            >
              {option.label}
            </SelectItem>
          ))}

        {!loading && options.length === 0 && (
          <div className="py-4 text-center text-sm text-muted-foreground">
            No data
          </div>
        )}
      </SelectContent>
    </Select>
  );
}
