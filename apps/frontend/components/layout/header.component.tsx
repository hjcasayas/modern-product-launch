import { LayoutHeader } from "@/interfaces/layout/header.interface";

import { MobileMenuComponent } from "./mobile-menu.component";

import { MenuComponent } from "./menu-component";

export const HeaderComponent = ({
  websiteName,
  navigation,
  cta,
}: LayoutHeader) => {
  return (
    <header>
      <div className="px-5 pb-8 pt-5 md:px-10">
        <div className="relative flex items-start justify-between pb-12 md:items-center">
          <h1 className="text-3xl font-medium">{websiteName}</h1>
          <MobileMenuComponent cta={cta} navigation={navigation} />
          <MenuComponent cta={cta} navigation={navigation} />
        </div>
      </div>
    </header>
  );
};
