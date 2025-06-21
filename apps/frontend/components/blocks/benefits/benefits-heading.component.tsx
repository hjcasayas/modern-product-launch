export interface BenefitsHeadingProps {
  title: string;
  headline: string;
  subTitle: string;
}

export const BenefitsHeadingComponent = ({
  title,
  headline,
  subTitle,
}: BenefitsHeadingProps) => {
  return (
    <div>
      <h3 className="text-dark-moss-green caption">{title}</h3>
      <h2 className="heading-1 mt-[3.125rem]">{headline}</h2>
      <p className="paragraph mt-[1.875rem]">{subTitle}</p>
    </div>
  );
};
