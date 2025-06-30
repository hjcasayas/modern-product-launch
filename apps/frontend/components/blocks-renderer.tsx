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
import {
  ContactUsBlockComponent,
  ContactUsBlockComponentProps,
} from "./blocks/contact-us/contact-us.component";

export const BlockNames = {
  ComponentBlocksHero: "ComponentBlocksHero",
  ComponentBlocksLogoCloud: "ComponentBlocksLogoCloud",
  ComponentBlocksBenefits: "ComponentBlocksBenefits",
  ComponentBlocksFeatures: "ComponentBlocksFeatures",
  ComponentBlocksSpecifications: "ComponentBlocksSpecifications",
  ComponentBlocksTestimonial: "ComponentBlocksTestimonial",
  ComponentBlocksHowItWorks: "ComponentBlocksHowItWorks",
  ComponentBlocksContactUs: "ComponentBlocksContactUs",
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
  | ContactUsBlockComponentProps
)[];

export const BlockRenderer = ({ blocks }: { blocks: BlockRendererProps }) => {
  return (
    <>
      {blocks.map((block, index) => {
        switch (block.__typename) {
          case "ComponentBlocksHero": {
            const currentBlock = block as HeroBlockComponentProps;
            return (
              <HeroBlockComponent key={index} {...currentBlock} />
            );
          }
          case "ComponentBlocksLogoCloud": {
            const currentBlock = block as LogoCloudBlockComponentProps;
            return (
              <LogoCloudBlockComponent
                key={index}
                {...currentBlock}
              />
            );
          }
          case "ComponentBlocksBenefits": {
            const currentBlock = block as BenefitsBlockComponentProps;
            return (
              <BenefitsBlockComponent key={index} {...currentBlock} />
            );
          }
          case "ComponentBlocksFeatures": {
            const currentBlock = block as FeaturesBlockComponentProps;
            return (
              <FeaturesBlockComponent key={index} {...currentBlock} />
            );
          }
          case "ComponentBlocksSpecifications": {
            const currentBlock = block as SpecificationsBlockComponentProps;
            return (
              <SpecificationsBlockComponent
                key={index}
                {...currentBlock}
              />
            );
          }
          case "ComponentBlocksTestimonial": {
            const currentBlock = block as TestimonialBlockComponentProps;
            return (
              <TestimonialBlockComponent
                key={index}
                {...currentBlock}
              />
            );
          }
          case "ComponentBlocksHowItWorks": {
            const currentBlock = block as HowItWorksBlockComponentProps;
            return (
              <HowItWorksBlockComponent
                key={index}
                {...currentBlock}
              />
            );
          }
          case "ComponentBlocksContactUs": {
            const currentBlock = block as ContactUsBlockComponentProps;
            return (
              <ContactUsBlockComponent
                key={index}
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
