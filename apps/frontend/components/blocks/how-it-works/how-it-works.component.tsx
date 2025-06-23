import { StrapiBase } from "@/interfaces/strapi/base.interface";
import { HowItWorksBlock } from "./how-it-works.interface";
import { StrapiBlock } from "@/interfaces/strapi/block.interface";
import { CtaComponent } from "@/components/elements/cta.component";

export interface HowItWorksBlockComponentProps
  extends HowItWorksBlock,
    StrapiBase,
    StrapiBlock {}

export const HowItWorksBlockComponent = ({
  headline,
  cta,
  stepsList,
}: HowItWorksBlockComponentProps) => {
  return (
    <section
      id="how-to"
      className="tablet:pb-7.5rem border-t-1 border-divider flex flex-col gap-y-20 pb-[6.25rem] pt-20"
    >
      <div className="tablet:px-10 tablet:flex-row tablet:items-center flex flex-col items-start justify-between gap-y-10 px-5">
        <h2 className="heading-1">{headline}</h2>
        <CtaComponent {...cta} variant="secondary" />
      </div>
      <ol className="tablet:px-10 flex w-full flex-row gap-x-[1.25rem] overflow-x-auto px-5">
        {stepsList.map((step, index) => (
          <li
            key={step.id}
            className="border-t-1 border-divider flex min-w-[13.125rem] flex-col gap-y-[3.75rem] pb-[1.25rem] pr-[3.75rem] pt-[3.75rem]"
          >
            <span className="display-statistics text-accent-6">{`${index + 1 < 10 ? `0${index + 1}` : index + 1}`}</span>
            <div className="flex flex-col gap-y-5">
              <h3 className="heading-3">{step.title}</h3>
              <p className="paragraph">{step.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
};
