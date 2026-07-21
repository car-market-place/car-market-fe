// Example
/* const {
  data,
  fetchNextPage,
  hasNextPage,
  isFetching,
} = useInfiniteQuery(...);

const options = data?.pages.flatMap((page) => page.items) ?? [];

<AsyncCombobox
  value={value}
  options={options}
  loading={isFetching}
  onValueChange={setValue}
  onSearch={setKeyword}
  onLoadMore={() => {
    if (hasNextPage) {
      fetchNextPage();
    }
  }}
/> */

"use client";

import { useDebouncedCallback } from "@car-market/utils";
import * as React from "react";
import { BaseCombobox, BaseComboboxProps } from "../base/BaseCombobox";

export interface AsyncComboboxProps<T extends string = string> extends Omit<
  BaseComboboxProps<T>,
  "onSearch"
> {
  /**
   * debounce time (ms)
   * @default 500
   */
  debounce?: number;

  /**
   * Search callback
   */
  onSearch?: (keyword: string) => void;

  /**
   * Load next page
   */
  onLoadMore?: () => void;
}

export function AsyncCombobox<T extends string = string>({
  debounce = 500,

  onSearch,

  onLoadMore,

  ...props
}: AsyncComboboxProps<T>) {
  const debouncedSearch = useDebouncedCallback((keyword: string) => {
    onSearch?.(keyword);
  }, debounce);

  const handleSearch = React.useCallback(
    (keyword: string) => {
      debouncedSearch(keyword);
    },
    [debouncedSearch],
  );

  const handleLoadMore = React.useCallback(() => {
    onLoadMore?.();
  }, [onLoadMore]);

  return (
    <BaseCombobox
      {...props}
      searchable
      onSearch={handleSearch}
      onLoadMore={handleLoadMore}
    />
  );
}
