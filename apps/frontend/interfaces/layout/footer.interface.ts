import { ElementLink } from "../elements/link.interface";
import { StrapiImage } from "../strapi/image.interface";

export interface LayoutFooter {
  logo: StrapiImage;
  navigation: ElementLink[];
  copyrightSymbol: string;
  copyrightText: string;
  copyrightYear: number;
  websiteName: string;
}
