"use client";

import { GlobalSingleType } from "@/gql/global/global.interface";
import { globalQuery } from "@/gql/global/global.query";
import { useReactQuery } from "@/hooks/use-react-query.hook";
import { HeaderComponent } from "./header.component";
import { ReactNode } from "react";

export const LayoutComponent = ({ children }: { children: ReactNode }) => {
  const { data } = useReactQuery<{ global: GlobalSingleType }>({
    queryKeys: ["global"],
    gqlQuery: globalQuery,
  });

  return (
    <>
      {data != null ? <HeaderComponent {...data.global.header} /> : null}
      {children}
    </>
  );
};
