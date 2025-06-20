import { ElementCta } from "../elements/cta.interface";
import { ElementLink } from "../elements/link.interface";

export interface LayoutHeader {
  websiteName: string;
  navigation: ElementLink[];
  cta: ElementCta;
}
