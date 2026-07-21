"use client";

import { QueryClientProvider } from "@tanstack/react-query";
import { PropsWithChildren } from "react";
import { queryClient } from "../../../packages/api/src";

export default function AppProviders({ children }: PropsWithChildren) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
