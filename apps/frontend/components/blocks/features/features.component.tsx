import { FeaturesBlock } from "./features.interface";
import { FeaturesListComponent } from "./features-list.component";
import { FeaturesHeadingComponent } from "./features-heading.component";
import { CtaComponent } from "@/components/elements/cta.component";
import { FeaturesCarouselComponent } from "./features-carousel.component";

export const FeaturesBlockComponent = ({
  headline,
  description,
  featuresList,
  cta,
  carousel,
}: FeaturesBlock) => {
  return (
    <section className="tablet:pb-[7.5rem] tablet:px-10 px-4 pb-[6.25rem]">
      <div className="desktop:grid-cols-2 grid grid-cols-1 items-start gap-5">
        <div className="pb-20 pt-[3.75rem]">
          <FeaturesHeadingComponent {...{ headline, description }} />
          <FeaturesListComponent {...{ featuresList }} />
          <CtaComponent link={cta.link} className="mt-10" variant="secondary" />
        </div>
        <FeaturesCarouselComponent carousel={carousel} />
      </div>
    </section>
  );
};
