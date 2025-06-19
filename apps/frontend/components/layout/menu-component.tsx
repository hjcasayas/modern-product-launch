import Link from "next/link";

import { ElementCtaButton } from "@/interfaces/elements/cta-button.interface";
import { ElementLink } from "@/interfaces/elements/link.interface";

import { CtaButtonComponent } from "../elements/cta-button";

export interface MenuComponentProps {
  navigation: ElementLink[];
  cta: ElementCtaButton;
}

export const MenuComponent = ({ navigation, cta }: MenuComponentProps) => {
  return (
    <div className="hidden w-[70%] flex-row items-center justify-between md:flex">
      <ul className="hidden flex-row gap-x-5 px-6 py-5 md:flex">
        {navigation.map((link) => (
          <li key={link.id}>
            <Link
              className="border-platinum block text-sm font-bold"
              href={link.url}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
      <CtaButtonComponent {...cta} />
    </div>
  );
};
