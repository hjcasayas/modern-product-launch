"use client";

import {
  QueryClientProvider,
  QueryClientProviderProps,
} from "@tanstack/react-query";
import { useState } from "react";
import { getQueryClient } from "./get-query-client";

export const ReactQueryProvider = ({
  children,
}: Omit<QueryClientProviderProps, "client">) => {
  const [queryClient] = useState(() => getQueryClient());

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
