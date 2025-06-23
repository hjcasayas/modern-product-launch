"use client";

import { useReactQuery } from "@/hooks/use-react-query.hook";
import { FooterComponent } from "./layout/footer.component";
import { HeaderComponent } from "./layout/header.component";
import { GlobalSingleType } from "@/components/single/global/global.interface";
import { globalQuery } from "@/components/single/global/global.query";

export interface LayoutProps {
  children: React.ReactNode;
}

export const LayoutComponent = ({ children }: LayoutProps) => {
  const { data, error } = useReactQuery<{ global: GlobalSingleType }>({
    queryKeys: ["global"],
    gqlQuery: globalQuery,
  });

  if (error != null || data == null || data.global == null) {
    return null;
  }

  return (
    <>
      <HeaderComponent {...data.global.header} />
      {children}
      <FooterComponent {...data.global.footer} />
    </>
  );
};
