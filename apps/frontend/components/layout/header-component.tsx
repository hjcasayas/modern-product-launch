"use client";

import { useRef } from "react";
import Link from "next/link";

import { LayoutHeader } from "@/interfaces/layout/header.interface";

import { WebsiteNameComponent } from "../elements/website-name.component";
import { CtaButtonComponent } from "../elements/cta-button";

export const HeaderComponent = ({
  websiteName,
  navigation,
  cta,
}: LayoutHeader) => {
  const menuBurgerRef = useRef<HTMLButtonElement>(null);
  const handleClick = () => {
    if (menuBurgerRef != null) {
      menuBurgerRef.current?.classList.toggle("open");
    }
  };

  return (
    <header>
      <div className="px-5 pb-8 pt-5">
        <div className="relative flex items-start justify-between pb-12">
          <WebsiteNameComponent name={websiteName.name} />
          <div className="block md:hidden">
            <button
              ref={menuBurgerRef}
              type="button"
              onClick={handleClick}
              className="group peer block p-[5px]"
            >
              <div className="relative h-1 w-5 rounded-full bg-black transition-all group-open:top-2 group-open:rotate-45"></div>
              <div className="mt-1 h-1 w-5 rounded-full bg-black opacity-100 transition-all group-open:opacity-0"></div>
              <div className="relative mt-1 h-1 w-5 rounded-full bg-black transition-all group-open:-top-2 group-open:-rotate-45"></div>
            </button>
            <nav className="absolute left-0 top-[84px] hidden w-full bg-white transition-all peer-open:block">
              <ul className="pb-8 pt-2">
                {navigation.map((link) => (
                  <li key={link.id}>
                    <Link
                      className="border-platinum block border-t-[1px] py-[30px] text-sm font-bold"
                      href={link.url}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <CtaButtonComponent {...cta} />
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
