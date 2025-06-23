import { ImageLoader } from "@/components/image-loader";

import { HowItWorksBlockComponentProps } from "./how-it-works.component";

export const HowItWorksHeroComponent = ({
  hero,
}: Pick<HowItWorksBlockComponentProps, "hero">) => {
  return (
    <div className="tablet:px-10 px-5 pb-10">
      <div className="tablet:h-[45rem] relative h-[37.5rem] w-full overflow-clip rounded-[1.875rem]">
        <ImageLoader
          src={hero.url}
          alt={hero.alternativeText || "How it works hero image"}
          fill
          sizes="100%"
          className="object-cover"
        />
      </div>
    </div>
  );
};
