import { StrapiImage } from "../strapi/image.interface";
import { ElementLink } from "./link.interface";

export interface ElementCta {
  link: ElementLink;
  icon?: StrapiImage;
}
