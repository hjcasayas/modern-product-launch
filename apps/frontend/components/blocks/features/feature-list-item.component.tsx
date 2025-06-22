import { ListItemElement } from "../../../interfaces/elements/list-item.interface";

export interface FeatureListItemComponentProps extends ListItemElement {
  order: number;
}

export const FeatureListItemComponent = ({
  order,
  text,
}: FeatureListItemComponentProps) => {
  return (
    <li className="border-t-1 border-divider paragraph flex flex-row items-start py-5">
      <span className="mr-[1.875rem] inline-block font-bold">
        {order < 10 ? `0${order}` : order}
      </span>
      <span className="text-headline flex-1">{text}</span>
    </li>
  );
};
