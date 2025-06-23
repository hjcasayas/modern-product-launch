import { StrapiBlock } from "@/interfaces/strapi/block.interface";
import { ImageLoader } from "@/components/image-loader";
import { StrapiBase } from "@/interfaces/strapi/base.interface";

import { BenefitsHeadingComponent } from "./benefits-heading.component";
import { BenefitsModulesComponent } from "./benefits-modules.component";
import { BenefitsBlock } from "./benefits.interface";

export interface BenefitsBlockComponentProps
  extends BenefitsBlock,
    StrapiBase,
    StrapiBlock {}

export const BenefitsBlockComponent = ({
  title,
  headline,
  subTitle,
  modules,
  image: { url, alternativeText },
}: BenefitsBlockComponentProps) => {
  return (
    <section id="benefits" className="tablet:px-10 px-4 pb-[6.25rem] pt-20">
      <BenefitsHeadingComponent {...{ title, headline, subTitle }} />
      <BenefitsModulesComponent modules={modules} />
      <div className="relative h-[37.5rem] w-full overflow-hidden rounded-[1.875rem]">
        <ImageLoader
          className="object-cover"
          src={url}
          alt={alternativeText ?? "Benefits Hero Image"}
          fill
          sizes="100%"
        />
      </div>
    </section>
  );
};
