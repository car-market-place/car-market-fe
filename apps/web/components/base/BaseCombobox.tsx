"use client";

import { Check, ChevronsUpDown, Loader2, X } from "lucide-react";
import * as React from "react";

import { cn } from "@/lib/utils";

import {
  BaseInput,
  Button,
  Popover,
  PopoverContent,
  PopoverTrigger,
  ScrollArea,
} from "@/components/ui";

export interface ComboboxOption<T = string> {
  value: T;
  label: React.ReactNode;
  disabled?: boolean;
}

export interface BaseComboboxProps<T = string> {
  value?: T;
  options: ComboboxOption<T>[];
  placeholder?: string;
  searchPlaceholder?: string;
  emptyText?: string;
  searchable?: boolean;
  clearable?: boolean;
  disabled?: boolean;
  loading?: boolean;
  className?: string;
  onValueChange?: (value: T) => void;
  onSearch?: (keyword: string) => void;
  onLoadMore?: () => void;
  renderOption?: (
    option: ComboboxOption<T>,
    selected: boolean,
  ) => React.ReactNode;
}

export function BaseCombobox<T extends string>({
  value,
  options,
  placeholder = "Select...",
  searchPlaceholder = "Search...",
  emptyText = "No data",
  searchable = true,
  clearable,
  loading,
  disabled,
  className,
  onSearch,
  onValueChange,
  onLoadMore,
  renderOption,
}: BaseComboboxProps<T>) {
  const [open, setOpen] = React.useState(false);

  const selected = options.find((x) => x.value === value);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          disabled={disabled}
          className={cn("w-full justify-between", className)}
        >
          {selected?.label ?? placeholder}

          <div className="flex items-center gap-1">
            {clearable && value && (
              <X
                className="h-4 w-4"
                onClick={(e) => {
                  e.stopPropagation();
                  onValueChange?.("" as T);
                }}
              />
            )}

            <ChevronsUpDown className="h-4 w-4 opacity-60" />
          </div>
        </Button>
      </PopoverTrigger>

      <PopoverContent className="w-[320px] p-0">
        {searchable && (
          <div className="border-b p-2">
            <BaseInput
              placeholder={searchPlaceholder}
              onChange={(e) => onSearch?.(e.target.value)}
            />
          </div>
        )}

        <ScrollArea
          className="h-72"
          onScrollCapture={(e) => {
            const el = e.currentTarget;

            if (el.scrollTop + el.clientHeight >= el.scrollHeight - 20) {
              onLoadMore?.();
            }
          }}
        >
          {loading && (
            <div className="flex justify-center py-8">
              <Loader2 className="animate-spin" />
            </div>
          )}

          {!loading &&
            options.map((item) => {
              const selected = item.value === value;

              return (
                <button
                  key={String(item.value)}
                  disabled={item.disabled}
                  onClick={() => {
                    onValueChange?.(item.value);
                    setOpen(false);
                  }}
                  className="flex w-full items-center justify-between px-3 py-2 text-left hover:bg-accent"
                >
                  {renderOption ? renderOption(item, selected) : item.label}

                  {selected && <Check className="h-4 w-4" />}
                </button>
              );
            })}

          {!loading && options.length === 0 && (
            <div className="py-8 text-center text-muted-foreground">
              {emptyText}
            </div>
          )}
        </ScrollArea>
      </PopoverContent>
    </Popover>
  );
}
