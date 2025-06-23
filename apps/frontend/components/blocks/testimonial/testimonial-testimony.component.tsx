import { TestimonyLayout } from "../../layout/testimony/testimony.interface";

export const TestimonialTestimonyComponent = ({
  quote,
  name,
  occupation,
}: TestimonyLayout) => {
  return (
    <div className="border-divider border-t-1 desktop: desktop:place-content-center desktop:pl-[3.125rem] grid grid-cols-1 gap-y-[3.125rem] py-[2.65625rem]">
      <blockquote>
        <q className="heading-2">{quote}</q>
      </blockquote>
      <div className="justify-tart desktop:flex-col desktop:items-start flex flex-row items-center gap-2">
        <span className="parargraph">{name}</span>
        <span className="caption">{occupation}</span>
      </div>
    </div>
  );
};
