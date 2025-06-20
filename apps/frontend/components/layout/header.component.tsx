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
      <div className="md:px-10 md:pb-8 md:pt-5">
        <div className="rounded-4xl relative flex items-start justify-between pb-12 shadow-2xl md:items-center md:rounded-none md:shadow-none">
          <h1 className="pl-5 pt-5 text-4xl font-medium md:pl-0 md:pt-0">
            {websiteName}
          </h1>
          <MobileMenuComponent cta={cta} navigation={navigation} />
          <MenuComponent cta={cta} navigation={navigation} />
        </div>
      </div>
    </header>
  );
};
