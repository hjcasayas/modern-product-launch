import { ColumnLayout } from "@/components/layout/column/column.interface";
import { ElementCta } from "@/interfaces/elements/cta.interface";
import { StrapiBase } from "@/interfaces/strapi/base.interface";

export interface SpecicationsColumnLayout extends ColumnLayout, StrapiBase {}

export interface SpecificationsBlock {
  title: string;
  headline: string;
  description: string;
  cta: ElementCta;
  specifications: SpecicationsColumnLayout[];
}
