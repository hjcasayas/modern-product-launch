import { ListItemElement } from "@/interfaces/elements/list-item.interface";
import { ElementCta } from "@/interfaces/elements/cta.interface";
import { StrapiComponentBase } from "@/interfaces/strapi/component-base.interface";
import { StrapiImage } from "@/interfaces/strapi/image.interface";

interface FeaturesCarouselImage extends StrapiImage, StrapiComponentBase {}

interface FeaturesListItem extends ListItemElement, StrapiComponentBase {}

export interface FeaturesBlock {
  headline: string;
  description: string;
  featuresList: FeaturesListItem[];
  cta: ElementCta;
  carousel: {
    leftArrowIcon: StrapiImage;
    rightArrowIcon: StrapiImage;
    images: FeaturesCarouselImage[];
  };
}
