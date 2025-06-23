import { HowItWorksBlockComponentProps } from "./how-it-works.component";

export const HowItWorksStepsListComponent = ({
  stepsList,
}: Pick<HowItWorksBlockComponentProps, "stepsList">) => {
  return (
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
  );
};
