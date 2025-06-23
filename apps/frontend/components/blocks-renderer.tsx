import {
  BenefitsBlockComponent,
  BenefitsBlockComponentProps,
} from "./blocks/benefits/benefits.component";
import {
  HeroBlockComponentProps,
  HeroBlockComponent,
} from "./blocks/hero/hero.component";
import {
  LogoCloudBlockComponent,
  LogoCloudBlockComponentProps,
} from "./blocks/logo-cloud/logo-cloud.component";
import {
  FeaturesBlockComponent,
  FeaturesBlockComponentProps,
} from "./blocks/features/features.component";
import { FeaturesBlock } from "./blocks/features/features.interface";
import {
  SpecificationsBlockComponent,
  SpecificationsBlockComponentProps,
} from "./blocks/specifications/specifications.component";
import {
  TestimonialBlockComponent,
  TestimonialBlockComponentProps,
} from "./blocks/testimonial/testimonial.component";
import {
  HowItWorksBlockComponent,
  HowItWorksBlockComponentProps,
} from "./blocks/how-it-works/how-it-works.component";

export const BlockNames = {
  ComponentBlocksHero: "ComponentBlocksHero",
  ComponentBlocksLogoCloud: "ComponentBlocksLogoCloud",
  ComponentBlocksBenefits: "ComponentBlocksBenefits",
  ComponentBlocksFeatures: "ComponentBlocksFeatures",
  ComponentBlocksSpecifications: "ComponentBlocksSpecifications",
  ComponentBlocksTestimonial: "ComponentBlocksTestimonial",
  ComponentBlocksHowItWorks: "ComponentBlocksHowItWorks",
} as const;

export type BlockNameType = keyof typeof BlockNames;

export type BlockRendererProps = (
  | HeroBlockComponentProps
  | LogoCloudBlockComponentProps
  | BenefitsBlockComponentProps
  | FeaturesBlockComponentProps
  | SpecificationsBlockComponentProps
  | TestimonialBlockComponentProps
  | HowItWorksBlockComponentProps
)[];

export const BlockRenderer = ({ blocks }: { blocks: BlockRendererProps }) => {
  return (
    <>
      {blocks.map((block) => {
        switch (block.__typename) {
          case "ComponentBlocksHero": {
            const currentBlock = block as HeroBlockComponentProps;
            return (
              <HeroBlockComponent key={currentBlock.id} {...currentBlock} />
            );
          }
          case "ComponentBlocksLogoCloud": {
            const currentBlock = block as LogoCloudBlockComponentProps;
            return (
              <LogoCloudBlockComponent
                key={currentBlock.id}
                {...currentBlock}
              />
            );
          }
          case "ComponentBlocksBenefits": {
            const currentBlock = block as BenefitsBlockComponentProps;
            return (
              <BenefitsBlockComponent key={currentBlock.id} {...currentBlock} />
            );
          }
          case "ComponentBlocksFeatures": {
            const currentBlock = block as FeaturesBlockComponentProps;
            return (
              <FeaturesBlockComponent key={currentBlock.id} {...currentBlock} />
            );
          }
          case "ComponentBlocksSpecifications": {
            const currentBlock = block as SpecificationsBlockComponentProps;
            return (
              <SpecificationsBlockComponent
                key={currentBlock.id}
                {...currentBlock}
              />
            );
          }
          case "ComponentBlocksTestimonial": {
            const currentBlock = block as TestimonialBlockComponentProps;
            return (
              <TestimonialBlockComponent
                key={currentBlock.id}
                {...currentBlock}
              />
            );
          }
          case "ComponentBlocksHowItWorks": {
            const currentBlock = block as HowItWorksBlockComponentProps;
            return (
              <HowItWorksBlockComponent
                key={currentBlock.id}
                {...currentBlock}
              />
            );
          }
          default: {
            return null;
          }
        }
      })}
    </>
  );
};
