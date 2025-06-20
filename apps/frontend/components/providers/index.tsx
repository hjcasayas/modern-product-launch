import { ReactQueryProvider } from "./react-query.provider";
import { QueryClientProviderProps } from "@tanstack/react-query";

export type ProvidersProps = Omit<QueryClientProviderProps, "client">;

export const Providers = ({ children }: ProvidersProps) => {
  return <ReactQueryProvider>{children}</ReactQueryProvider>;
};
