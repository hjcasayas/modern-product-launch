import { ElementCta } from "@/interfaces/elements/cta.interface";
import { HeaderLink } from "@/interfaces/layout/header.interface";

import { CtaComponent } from "../elements/cta.component";
import { LinkComponent } from "../elements/link.component";

export interface MenuComponentProps {
  navigation: HeaderLink[];
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
