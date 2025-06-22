import { ElementCta } from "../elements/cta.interface";
import { ElementLink } from "../elements/link.interface";
import { StrapiBase } from "../strapi/base.interface";

export interface HeaderLink extends ElementLink, StrapiBase {}

export interface LayoutHeader {
  websiteName: string;
  navigation: HeaderLink[];
  cta: ElementCta;
}
