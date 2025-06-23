import { ListItemTitleDescriptionLayout } from "@/components/layout/list-item-title-description/list-item-title-description.interface";
import { ElementCta } from "@/interfaces/elements/cta.interface";
import { ElementLink } from "@/interfaces/elements/link.interface";
import { StrapiBase } from "@/interfaces/strapi/base.interface";

export interface StepsListItem
  extends ListItemTitleDescriptionLayout,
    StrapiBase {}

export interface HowItWorksBlock {
  headline: string;
  cta: ElementCta;
  link: ElementLink;
  stepsList: StepsListItem[];
}
