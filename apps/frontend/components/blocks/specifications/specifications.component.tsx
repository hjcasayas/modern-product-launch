import { StrapiBlock } from "@/interfaces/strapi/block.interface";
import { StrapiBase } from "@/interfaces/strapi/base.interface";

import { SpecificationsContentComponent } from "./specifications-content.component";
import { SpecificationsTableComponent } from "./specifications-table.component";
import { SpecificationsBlock } from "./specifications.interface";

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
      <SpecificationsTableComponent specifications={specifications} />
    </section>
  );
};
