import { ElementCta } from "@/interfaces/elements/cta.interface";
import { ElementLink } from "@/interfaces/elements/link.interface";

import { CtaComponent } from "../elements/cta.component";
import { LinkComponent } from "../elements/link.component";

export interface MenuComponentProps {
  navigation: ElementLink[];
  cta: ElementCta;
}

export const MenuComponent = ({ navigation, cta }: MenuComponentProps) => {
  return (
    <div className="hidden w-3/4 flex-row items-center justify-between md:flex lg:w-[70%]">
      <ul className="hidden flex-row gap-x-5 px-6 py-5 md:flex">
        {navigation.map((link) => (
          <li key={link.id}>
            <LinkComponent
              {...link}
              className="border-platinum block text-sm font-bold"
            >
              {link.label}
            </LinkComponent>
          </li>
        ))}
      </ul>
      <CtaComponent {...cta} />
    </div>
  );
};
