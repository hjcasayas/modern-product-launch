import { StrapiImage } from "../strapi/image.interface";
import { ElementLink } from "./link.interface";

export interface ElementCta {
  Link: ElementLink;
  icon?: StrapiImage;
}
