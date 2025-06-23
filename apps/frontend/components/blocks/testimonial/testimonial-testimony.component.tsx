import { TestimonyLayout } from "../../layout/testimony/testimony.interface";

export const TestimonialTestimonyComponent = ({
  quote,
  name,
  occupation,
}: TestimonyLayout) => {
  return (
    <div className="border-divider border-t-1 desktop:pl-[3.125rem] desktop:w-1/2 flex w-full flex-col justify-center gap-y-[3.125rem] py-[2.65625rem]">
      <blockquote>
        <q className="heading-2">{quote}</q>
      </blockquote>
      <div className="desktop:flex-col desktop:items-start flex flex-row items-center gap-2">
        <span className="parargraph">{name}</span>
        <span className="caption">{occupation}</span>
      </div>
    </div>
  );
};
