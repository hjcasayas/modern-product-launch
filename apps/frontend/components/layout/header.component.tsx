import { LayoutHeader } from "@/interfaces/layout/header.interface";

import { WebsiteNameComponent } from "../elements/website-name.component";
import { MobileMenuComponent } from "./mobile-menu.component";

import { MenuComponent } from "./menu-component";

export const HeaderComponent = ({
  websiteName,
  navigation,
  cta,
}: LayoutHeader) => {
  return (
    <header>
      <div className="px-5 pb-8 pt-5">
        <div className="relative flex items-start justify-between pb-12 md:items-center">
          <WebsiteNameComponent name={websiteName.name} />
          <MobileMenuComponent cta={cta} navigation={navigation} />
          <MenuComponent cta={cta} navigation={navigation} />
        </div>
      </div>
    </header>
  );
};
