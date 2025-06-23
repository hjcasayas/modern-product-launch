import { StrapiBlock } from "@/interfaces/strapi/block.interface";
import { StrapiBase } from "@/interfaces/strapi/base.interface";

import { HowItWorksStepsListComponent } from "./how-it-works-steps-list.component";
import { HowItWorksHeadingComponent } from "./how-it-works-heading.component";
import { HowItWorksHeroComponent } from "./how-it-works-hero.component";
import { HowItWorksBlock } from "./how-it-works.interface";

export interface HowItWorksBlockComponentProps
  extends HowItWorksBlock,
    StrapiBase,
    StrapiBlock {}

export const HowItWorksBlockComponent = ({
  headline,
  cta,
  stepsList,
  hero,
}: HowItWorksBlockComponentProps) => {
  return (
    <section id="how-to">
      <div className="tablet:pb-7.5rem border-t-1 border-divider flex flex-col gap-y-20 pb-[6.25rem] pt-20">
        <HowItWorksHeadingComponent {...{ headline, cta }} />
        <HowItWorksStepsListComponent stepsList={stepsList} />
      </div>
      <HowItWorksHeroComponent hero={hero} />
    </section>
  );
};
