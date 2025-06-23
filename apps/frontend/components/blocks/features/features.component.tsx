import { FeaturesBlock } from "./features.interface";
import { FeaturesListComponent } from "./features-list.component";
import { FeaturesHeadingComponent } from "./features-heading.component";
import { CtaComponent } from "@/components/elements/cta.component";
import { FeaturesCarouselComponent } from "./features-carousel.component";
import { StrapiBase } from "@/interfaces/strapi/base.interface";
import { StrapiBlock } from "@/interfaces/strapi/block.interface";

export interface FeaturesBlockComponentProps
  extends FeaturesBlock,
    StrapiBase,
    StrapiBlock {}

export const FeaturesBlockComponent = ({
  headline,
  description,
  featuresList,
  cta,
  carousel,
}: FeaturesBlockComponentProps) => {
  return (
    <section className="tablet:pb-[7.5rem] tablet:px-10 px-4 pb-[6.25rem]">
      <div className="desktop:flex-row flex flex-col gap-5">
        <div className="desktop:w-1/2 w-full pb-20 pt-[3.75rem]">
          <FeaturesHeadingComponent {...{ headline, description }} />
          <FeaturesListComponent {...{ featuresList }} />
          <CtaComponent link={cta.link} className="mt-10" variant="secondary" />
        </div>
        <FeaturesCarouselComponent carousel={carousel} />
      </div>
    </section>
  );
};
