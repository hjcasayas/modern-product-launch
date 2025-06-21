import { HeroBlock } from "./hero.interface";
import { ImageLoader } from "@/components/image-loader";

export const HeroComponent = ({
  headlines,
  mobileImage,
  tabletImage,
  desktopImage,
}: HeroBlock) => {
  return (
    <section className="tablet:px-10 px-4 pt-[14px]">
      <h1 className="font-crimson-text desktop:flex-row desktop:gap-x-6 flex flex-col items-center justify-center">
        {headlines.map((headline, index) => (
          <span key={headline.id || index} className="display">
            {headline.text}
          </span>
        ))}
      </h1>
      <div className="tablet:hidden relative mt-[4.5rem] block">
        <div className="bg-moss-green absolute bottom-0 left-0 right-0 h-[22.5rem] rounded-[1.875rem]"></div>
        <ImageLoader
          src={mobileImage.url}
          alt={mobileImage.alternativeText ?? ""}
          width={mobileImage.width}
          height={mobileImage.height}
          className="relative mx-auto block"
        />
      </div>
      <div className="tablet:block desktop:hidden relative mt-20 hidden">
        <div className="bg-moss-green absolute bottom-0 left-0 right-0 h-[22.5rem] rounded-[1.875rem]"></div>
        <ImageLoader
          src={tabletImage.url}
          alt={tabletImage.alternativeText ?? ""}
          width={tabletImage.width}
          height={tabletImage.height}
          className="relative mx-auto block"
        />
      </div>
      <div className="desktop:block relative mt-24 hidden">
        <div className="bg-moss-green absolute bottom-0 left-0 right-0 h-[22.5rem] rounded-[1.875rem]"></div>
        <ImageLoader
          src={desktopImage.url}
          alt={desktopImage.alternativeText ?? ""}
          width={desktopImage.width}
          height={desktopImage.height}
          className="relative mx-auto block"
        />
      </div>
    </section>
  );
};
