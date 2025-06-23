import { ListItemTextWithIconElement } from "@/components/elements/list-item-text-with-icon/list-item-text-with-icon.interface";

export interface ColumnLayout {
  title: string;
  list: ListItemTextWithIconElement[];
  isEmphasized: boolean;
}
