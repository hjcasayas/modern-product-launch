import { HeroBlock } from "./hero.interface";
import { ImageLoader } from "@/components/image-loader";

export const HeroComponent = ({
  headlines,
  mobileImage,
  tabletImage,
  desktopImage,
}: HeroBlock) => {
  return (
    <section className="px-4 pt-[14px] md:px-10">
      <h1 className="font-crimson-text flex flex-col items-center justify-center xl:flex-row xl:gap-x-6">
        {headlines.map((headline, index) => (
          <span
            key={headline.id || index}
            className="leading-16 md:leading-28 inline-block text-[4.75rem] tracking-[-0.045em] md:text-[8.75rem] md:tracking-[-0.05em] xl:text-[11rem] xl:leading-[9.35rem]"
          >
            {headline.text}
          </span>
        ))}
      </h1>
      <div className="relative mt-[4.5rem] block md:hidden">
        <div className="bg-moss-green absolute bottom-0 left-0 right-0 h-[22.5rem] rounded-[1.875rem]"></div>
        <ImageLoader
          src={mobileImage.url}
          alt={mobileImage.alternativeText ?? ""}
          width={mobileImage.width}
          height={mobileImage.height}
          className="relative mx-auto block"
        />
      </div>
      <div className="relative mt-20 hidden md:block xl:hidden">
        <div className="bg-moss-green absolute bottom-0 left-0 right-0 h-[22.5rem] rounded-[1.875rem]"></div>
        <ImageLoader
          src={tabletImage.url}
          alt={tabletImage.alternativeText ?? ""}
          width={tabletImage.width}
          height={tabletImage.height}
          className="relative mx-auto block"
        />
      </div>
      <div className="relative mt-24 hidden xl:block">
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
