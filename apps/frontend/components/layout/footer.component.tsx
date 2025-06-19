import Image from "next/image";

import { LayoutFooter } from "@/interfaces/layout/footer.interface";
import { LinkComponent } from "../elements/link.component";

export const FooterComponent = ({
  navigation,
  logo,
  copyrightSymbol,
  copyrightText,
  copyrightYear,
  websiteName,
}: LayoutFooter) => {
  return (
    <footer className="flex flex-col justify-between gap-y-20 px-4 py-10 md:gap-y-[90px] md:px-10 md:py-[50px]">
      <nav>
        <ul className="flex flex-col items-start justify-between gap-y-7 md:flex-row md:justify-start md:gap-x-7">
          {navigation.map((link) => (
            <li key={link.id}>
              <LinkComponent className="text-sm font-bold" {...link} />
            </li>
          ))}
        </ul>
      </nav>
      <div className="text-dark-moss-green flex items-end justify-between text-xs">
        <div className="flex flex-row items-end justify-between gap-x-10">
          <Image
            src={
              process.env.NODE_ENV === "production"
                ? logo.url
                : `${process.env.NEXT_PUBLIC_STRAPI_URL}${logo.url}`
            }
            alt={logo.alternativeText ?? ""}
            width={31.75}
            height={70}
          />
          <p>
            <span>{copyrightSymbol}</span>
            <span className="ml-[6px] mr-4 inline-block">{websiteName}</span>
            <span>{new Date(copyrightYear).getFullYear()}</span>
          </p>
        </div>
        <p>{copyrightText}</p>
      </div>
    </footer>
  );
};
