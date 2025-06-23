import { ListItemTextWithIconElement } from "@/components/elements/list-item-text-with-icon/list-item-text-with-icon.interface";
import { StrapiBase } from "@/interfaces/strapi/base.interface";

export interface ColumnLayoutList
  extends ListItemTextWithIconElement,
    StrapiBase {}

export interface ColumnLayout {
  title: string;
  list: ColumnLayoutList[];
  isEmphasized: boolean;
}
