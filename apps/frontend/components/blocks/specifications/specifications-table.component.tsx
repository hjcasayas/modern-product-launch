import { SpecificationsColumnComponent } from "./specifications-column.component";
import { SpecificationsBlock } from "./specifications.interface";

export const SpecificationsTableComponent = ({
  specifications,
}: Pick<SpecificationsBlock, "specifications">) => {
  return (
    <div className="tablet:px-10 flex scroll-m-10 flex-row overflow-x-auto px-5">
      {specifications.map((specification) => (
        <SpecificationsColumnComponent
          key={specification.id}
          {...specification}
        />
      ))}
    </div>
  );
};
