import { StrapiBase } from "@/interfaces/strapi/base.interface";
import { StrapiBlock } from "@/interfaces/strapi/block.interface";
import { StrapiImage } from "@/interfaces/strapi/image.interface";

export interface HeadlineElement extends StrapiBase {
  text: string;
}

export interface HeroBlock extends StrapiBase, StrapiBlock {
  headlines: HeadlineElement[];
  mobileImage: StrapiImage;
  tabletImage: StrapiImage;
  desktopImage: StrapiImage;
}
