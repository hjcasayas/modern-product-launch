import { CtaComponent } from "@/components/elements/cta.component";
import { HowItWorksBlockComponentProps } from "./how-it-works.component";

export const HowItWorksHeadingComponent = ({
  headline,
  cta,
}: Pick<HowItWorksBlockComponentProps, "headline" | "cta">) => {
  return (
    <div className="tablet:px-10 tablet:flex-row tablet:items-center flex flex-col items-start justify-between gap-y-10 px-5">
      <h2 className="heading-1">{headline}</h2>
      <CtaComponent {...cta} variant="secondary" />
    </div>
  );
};
