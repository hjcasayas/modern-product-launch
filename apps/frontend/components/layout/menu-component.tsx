import { ElementCta } from "@/interfaces/elements/cta.interface";
import { ElementLink } from "@/interfaces/elements/link.interface";

import { CtaComponent } from "../elements/cta.component";
import { LinkComponent } from "../elements/link.component";
import { StrapiBase } from "@/interfaces/strapi/base.interface";

export interface MenuLink extends ElementLink, StrapiBase {}

export interface MenuComponentProps {
  navigation: MenuLink[];
  cta: ElementCta;
}

export const MenuComponent = ({ navigation, cta }: MenuComponentProps) => {
  return (
    <div className="tablet:flex hidden w-[76%] flex-row items-center justify-between lg:w-[70%]">
      <ul className="tablet:flex hidden flex-row gap-x-5 px-6 py-5">
        {navigation.map((link) => (
          <li key={link.id}>
            <LinkComponent {...link} className="border-divider block">
              {link.label}
            </LinkComponent>
          </li>
        ))}
      </ul>
      <CtaComponent {...cta} />
    </div>
  );
};
