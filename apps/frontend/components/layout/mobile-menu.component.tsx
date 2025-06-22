"use client";

import { useRef } from "react";

import { ElementCta } from "@/interfaces/elements/cta.interface";
import { HeaderLink } from "@/interfaces/layout/header.interface";

import { LinkComponent } from "../elements/link.component";
import { CtaComponent } from "../elements/cta.component";

export interface MobileMenuComponentProps {
  navigation: HeaderLink[];
  cta: ElementCta;
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
    <div className="tablet:hidden block">
      <button
        ref={menuBurgerRef}
        type="button"
        onClick={handleClick}
        className="group peer block cursor-pointer pr-5 pt-5"
      >
        <div className="p-[5px]">
          <div className="relative h-[2.4px] w-[18px] rounded-full bg-black transition-all duration-300 ease-in-out group-open:top-[4.8px] group-open:rotate-45"></div>
          <div className="mt-[2.4px] h-[2.4px] w-[18px] rounded-full bg-black opacity-100 transition-all duration-300 ease-in-out group-open:opacity-0"></div>
          <div className="relative mt-[2.4px] h-[2.4px] w-[18px] rounded-full bg-black transition-all duration-300 ease-in-out group-open:-top-[4.8px] group-open:-rotate-45"></div>
        </div>
      </button>
      <nav className="top-15 absolute left-0 z-10 hidden w-full bg-white px-5 pb-8 pt-9 transition-all duration-300 ease-in-out peer-open:block">
        <ul className="pb-8 pt-2">
          {navigation.map((link) => (
            <li key={link.id}>
              <LinkComponent
                {...link}
                className="border-platinum border-t-1 block py-[30px]"
              >
                {link.label}
              </LinkComponent>
            </li>
          ))}
        </ul>
        <CtaComponent {...cta} className="mt-12" />
      </nav>
    </div>
  );
};
