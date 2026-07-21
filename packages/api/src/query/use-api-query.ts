import { QueryKey, useQuery, UseQueryOptions } from "@tanstack/react-query";

export function useApiQuery<TData>(
  options: UseQueryOptions<TData, Error, TData, QueryKey>,
) {
  return useQuery({
    ...options,
  });
}
