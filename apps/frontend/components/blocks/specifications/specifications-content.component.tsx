import { CtaComponent } from "@/components/elements/cta.component";
import { SpecificationsBlock } from "./specifications.interface";

export const SpecificationsContentComponent = ({
  title,
  headline,
  description,
  cta,
}: Pick<SpecificationsBlock, "title" | "headline" | "description" | "cta">) => {
  return (
    <div className="tablet:gap-y-10 tablet:max-w-[35rem] desktop:max-w-[45rem] tablet:px-10 grid max-w-[21.4375rem] grid-cols-1 gap-y-[1.875rem] place-self-center px-5 py-20">
      <h3 id="specifications" className="caption scroll-mt-28 text-center">
        {title}
      </h3>
      <h2 className="heading-1 text-center">{headline}</h2>
      <p className="paragraph text-center">{description}</p>
      <CtaComponent
        {...cta}
        variant="secondary"
        className="place-self-center"
      />
    </div>
  );
};
