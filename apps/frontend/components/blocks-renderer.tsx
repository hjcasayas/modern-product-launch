import { BenefitsComponent } from "./blocks/benefits/benefits.component";
import { BenefitsBlock } from "./blocks/benefits/benefits.interface";
import { HeroComponent } from "./blocks/hero/hero.component";
import { HeroBlock } from "./blocks/hero/hero.interface";
import { LogoCloudComponent } from "./blocks/logo-cloud/logo-cloud.component";
import { LogoCloudBlock } from "./blocks/logo-cloud/logo-cloud.interface";

export type BlockRendererProps = (HeroBlock | LogoCloudBlock | BenefitsBlock)[];

export const BlockRenderer = ({ blocks }: { blocks: BlockRendererProps }) => {
  return (
    <>
      {blocks.map((block) => {
        switch (block.__typename) {
          case "ComponentBlocksHero": {
            const currentBlock = block as HeroBlock;
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
          default: {
            return null;
          }
        }
      })}
    </>
  );
};
