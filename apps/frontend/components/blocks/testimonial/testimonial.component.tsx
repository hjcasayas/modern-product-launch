import { TestimonialBlock } from "./testimonial.interface";
import { StrapiBase } from "@/interfaces/strapi/base.interface";
import { StrapiBlock } from "@/interfaces/strapi/block.interface";
import { TestimonialHeroComponent } from "./testimonial-hero.component";
import { TestimonialTestimonyComponent } from "./testimonial-testimony.component";

export interface TestimonialBlockComponentProps
  extends TestimonialBlock,
    StrapiBase,
    StrapiBlock {}

export const TestimonialBlockComponent = ({
  hero,
  testimony,
}: TestimonialBlockComponentProps) => {
  return (
    <div className="tablet:px-10 desktop:flex-row flex flex-col gap-x-5 gap-y-10 px-5 pb-[6.25rem]">
      <TestimonialHeroComponent hero={hero} />
      <TestimonialTestimonyComponent {...testimony} />
    </div>
  );
};
