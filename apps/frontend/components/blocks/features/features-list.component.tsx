import { FeatureListItemComponent } from "./feature-list-item.component";
import { FeaturesBlock } from "./features.interface";

export const FeaturesListComponent = ({
  featuresList,
}: Pick<FeaturesBlock, "featuresList">) => {
  return (
    <ul className="mt-10 flex flex-col">
      {featuresList.map(({ text }, index) => (
        <FeatureListItemComponent key={index} order={index + 1} text={text} />
      ))}
    </ul>
  );
};
