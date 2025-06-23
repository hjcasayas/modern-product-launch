import { StrapiBase } from "@/interfaces/strapi/base.interface";
import { StrapiImage } from "@/interfaces/strapi/image.interface";

export interface HeadlineElement extends StrapiBase {
  text: string;
}

export interface HeroBlock {
  headlines: HeadlineElement[];
  mobileImage: StrapiImage;
  tabletImage: StrapiImage;
  desktopImage: StrapiImage;
}
