"use client";

import { useRef } from "react";

import { ElementCtaButton } from "@/interfaces/elements/cta-button.interface";
import { ElementLink } from "@/interfaces/elements/link.interface";

import { CtaButtonComponent } from "../elements/cta-button.component";
import { LinkComponent } from "../elements/link.component";

export interface MobileMenuComponentProps {
  navigation: ElementLink[];
  cta: ElementCtaButton;
}

export const MobileMenuComponent = ({
  cta,
  navigation,
}: MobileMenuComponentProps) => {
  const menuBurgerRef = useRef<HTMLButtonElement>(null);
  const handleClick = () => {
    if (menuBurgerRef != null) {
      menuBurgerRef.current?.classList.toggle("open");
    }
  };

  return (
    <div className="block md:hidden">
      <button
        ref={menuBurgerRef}
        type="button"
        onClick={handleClick}
        className="group peer block cursor-pointer p-[5px]"
      >
        <div className="relative h-1 w-5 rounded-full bg-black transition-all group-open:top-2 group-open:rotate-45"></div>
        <div className="mt-1 h-1 w-5 rounded-full bg-black opacity-100 transition-all group-open:opacity-0"></div>
        <div className="relative mt-1 h-1 w-5 rounded-full bg-black transition-all group-open:-top-2 group-open:-rotate-45"></div>
      </button>
      <nav className="absolute left-0 top-[84px] hidden w-full bg-white transition-all peer-open:block">
        <ul className="pb-8 pt-2">
          {navigation.map((link) => (
            <li key={link.id}>
              <LinkComponent
                {...link}
                className="border-platinum block border-t-[1px] py-[30px] text-sm font-bold"
              >
                {link.label}
              </LinkComponent>
            </li>
          ))}
        </ul>
        <CtaButtonComponent {...cta} className="mt-12" />
      </nav>
    </div>
  );
};
