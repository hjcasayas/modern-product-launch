import { LayoutFooter } from "@/interfaces/layout/footer.interface";

import { LinkComponent } from "../elements/link.component";
import { ImageLoader } from "../image-loader";

export const FooterComponent = ({
  navigation,
  logo,
  copyrightSymbol,
  copyrightText,
  copyrightYear,
  websiteName,
}: LayoutFooter) => {
  return (
    <footer className="tablet:gap-y-[90px] tablet:px-10 tablet:py-[50px] flex flex-col justify-between gap-y-20 px-4 py-10">
      <nav>
        <ul className="tablet:flex-row tablet:justify-start tablet:gap-x-7 flex flex-col items-start justify-between gap-y-7">
          {navigation.map((link) => (
            <li key={link.id}>
              <LinkComponent className="text-sm font-bold" {...link} />
            </li>
          ))}
        </ul>
      </nav>
      <div className="text-dark-moss-green flex items-end justify-between text-xs">
        <div className="flex flex-row items-end justify-between gap-x-10">
          <ImageLoader
            src={logo.url}
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
