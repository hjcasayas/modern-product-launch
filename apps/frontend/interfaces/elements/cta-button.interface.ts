import { StrapiBase } from "../strapi/base.interface";
import { StrapiImage } from "../strapi/image.interface";

export interface ElementCtaButton extends StrapiBase {
  label: string;
  url: string;
  icon?: StrapiImage;
  isExternal?: boolean;
}
