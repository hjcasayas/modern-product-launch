import { StrapiBlock } from "@/interfaces/strapi/block.interface";
import { StrapiBase } from "@/interfaces/strapi/base.interface";

import { SpecificationsContentComponent } from "./specifications-content.component";
import { SpecificationsBlock } from "./specifications.interface";
import { SpecificationsColumnComponent } from "./specifications-column.component";

export interface SpecificationsBlockComponentProps
  extends SpecificationsBlock,
    StrapiBase,
    StrapiBlock {}

export const SpecificationsBlockComponent = ({
  title,
  headline,
  description,
  cta,
  specifications,
}: SpecificationsBlockComponentProps) => {
  return (
    <section className="grid grid-cols-1 gap-y-5 pb-[7.5rem]">
      <SpecificationsContentComponent
        {...{ title, headline, description, cta }}
      />
      <div className="tablet:px-10 flex scroll-m-10 flex-row overflow-x-auto px-5">
        {specifications.map((specification) => (
          <SpecificationsColumnComponent
            key={specification.id}
            {...specification}
          />
        ))}
      </div>
    </section>
  );
};
