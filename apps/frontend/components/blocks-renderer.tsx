import { HeroComponent } from "./blocks/hero/hero.component";
import { HeroBlock } from "./blocks/hero/hero.interface";

export type BlockRendererProps = HeroBlock[];

export const BlockRenderer = ({ blocks }: { blocks: BlockRendererProps }) => {
  return (
    <>
      {blocks.map((block) => {
        switch (block.__typename) {
          case "ComponentBlocksHero":
            return <HeroComponent key={block.id} {...block} />;
          default:
            return null;
        }
      })}
    </>
  );
};
