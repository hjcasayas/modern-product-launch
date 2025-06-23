import { CtaComponent } from "@/components/elements/cta.component";
import { HowItWorksBlockComponentProps } from "./how-it-works.component";

export const HowItWorksHeadingComponent = ({
  headline,
  cta,
}: Pick<HowItWorksBlockComponentProps, "headline" | "cta">) => {
  return (
    <div className="tablet:pb-7.5rem border-t-1 border-divider flex flex-col gap-y-20 pb-[6.25rem] pt-20">
      <div className="tablet:px-10 tablet:flex-row tablet:items-center flex flex-col items-start justify-between gap-y-10 px-5">
        <h2 className="heading-1">{headline}</h2>
        <CtaComponent {...cta} variant="secondary" />
      </div>
    </div>
  );
};
