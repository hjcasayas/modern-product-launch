import { ElementCtaButton } from "../elements/cta-button.interface";
import { ElementLink } from "../elements/link.interface";
import { ElementWebsiteName } from "../elements/website-name.interface";

export interface LayoutHeader {
  websiteName: ElementWebsiteName;
  navigation: ElementLink[];
  cta: ElementCtaButton;
}
