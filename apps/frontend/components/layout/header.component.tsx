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
      <div className="tablet:px-10 tablet:pb-8 tablet:pt-5">
        <div className="rounded-4xl tablet:items-center tablet:rounded-none tablet:shadow-none relative flex items-start justify-between pb-12 shadow-2xl">
          <h2 className="tablet:pl-0 tablet:pt-0 pl-5 pt-5 text-4xl font-medium">
            {websiteName}
          </h2>
          <MobileMenuComponent cta={cta} navigation={navigation} />
          <MenuComponent cta={cta} navigation={navigation} />
        </div>
      </div>
    </header>
  );
};
