import { BenefitsComponent } from "./blocks/benefits/benefits.component";
import { BenefitsBlock } from "./blocks/benefits/benefits.interface";
import {
  HeroBlockComponentProps,
  HeroComponent,
} from "./blocks/hero/hero.component";
import { LogoCloudComponent } from "./blocks/logo-cloud/logo-cloud.component";
import { LogoCloudBlock } from "./blocks/logo-cloud/logo-cloud.interface";
import { FeaturesBlockComponent } from "./blocks/features/features.component";
import { FeaturesBlock } from "./blocks/features/features.interface";
import {
  SpecificationsBlockComponent,
  SpecificationsBlockComponentProps,
} from "./blocks/specifications/specifications.component";

export const BlockNames = {
  ComponentBlocksHero: "ComponentBlocksHero",
  ComponentBlocksLogoCloud: "ComponentBlocksLogoCloud",
  ComponentBlocksBenefits: "ComponentBlocksBenefits",
  ComponentBlocksFeatures: "ComponentBlocksFeatures",
  ComponentBlocksSpecifications: "ComponentBlocksSpecifications",
} as const;

export type BlockNameType = keyof typeof BlockNames;

export type BlockRendererProps = (
  | HeroBlockComponentProps
  | LogoCloudBlock
  | BenefitsBlock
  | FeaturesBlock
  | SpecificationsBlockComponentProps
)[];

export const BlockRenderer = ({ blocks }: { blocks: BlockRendererProps }) => {
  return (
    <>
      {blocks.map((block) => {
        switch (block.__typename) {
          case "ComponentBlocksHero": {
            const currentBlock = block as HeroBlockComponentProps;
            return <HeroComponent key={currentBlock.id} {...currentBlock} />;
          }
          case "ComponentBlocksLogoCloud": {
            const currentBlock = block as LogoCloudBlock;
            return (
              <LogoCloudComponent key={currentBlock.id} {...currentBlock} />
            );
          }
          case "ComponentBlocksBenefits": {
            const currentBlock = block as BenefitsBlock;
            return (
              <BenefitsComponent key={currentBlock.id} {...currentBlock} />
            );
          }
          case "ComponentBlocksFeatures": {
            const currentBlock = block as FeaturesBlock;
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
          default: {
            return null;
          }
        }
      })}
    </>
  );
};
