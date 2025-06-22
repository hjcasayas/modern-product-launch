import { ImageLoader } from "@/components/image-loader";
import { BenefitsBlock } from "./benefits.interface";
import { BenefitsHeadingComponent } from "./benefits-heading.component";
import { BenefitsModulesComponent } from "./benefits-modules.component";

export const BenefitsComponent = ({
  title,
  headline,
  subTitle,
  modules,
  image: { url, alternativeText },
}: BenefitsBlock) => {
  return (
    <section className="tablet:px-10 px-4 pb-[6.25rem] pt-20">
      <BenefitsHeadingComponent {...{ title, headline, subTitle }} />
      <BenefitsModulesComponent modules={modules} />
      <div className="relative h-[37.5rem] w-full overflow-hidden rounded-[1.875rem]">
        <ImageLoader
          className="object-cover"
          src={url}
          alt={alternativeText ?? "Benefits Hero Image"}
          fill
        />
      </div>
    </section>
  );
};
