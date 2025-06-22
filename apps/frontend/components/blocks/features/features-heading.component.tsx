import { FeaturesBlock } from "./features.interface";

export const FeaturesHeadingComponent = ({
  headline,
  description,
}: Pick<FeaturesBlock, "headline" | "description">) => {
  return (
    <div>
      <h2 className="heading-1">{headline}</h2>
      <p className="paragraph mt-[1.875rem]">{description}</p>
    </div>
  );
};
