import { ElementLink } from "../elements/link.interface";
import { StrapiBase } from "../strapi/base.interface";
import { StrapiImage } from "../strapi/image.interface";

export interface FooterLink extends ElementLink, StrapiBase {}

export interface LayoutFooter {
  logo: StrapiImage;
  navigation: FooterLink[];
  copyrightSymbol: string;
  copyrightText: string;
  copyrightYear: number;
  websiteName: string;
}
