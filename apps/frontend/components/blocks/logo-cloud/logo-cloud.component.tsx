import { ImageLoader } from "@/components/image-loader";
import { LogoCloudBlock } from "./logo-cloud.interface";

export const LogoCloudComponent = ({ title, logoClouds }: LogoCloudBlock) => {
  return (
    <section className="tablet:px-10 px-4 py-12">
      <h2 className="text-dim-gray text-center text-base leading-5 tracking-[-0.05em]">
        {title}
      </h2>
      <div className="tablet:gap-x-10 mt-[1.875rem] flex flex-wrap items-center justify-between gap-x-5 min-[723px]:justify-center">
        {logoClouds.map((logo) => (
          <ImageLoader
            key={logo.documentId}
            src={logo.url}
            alt={logo.alternativeText || "Cloud Company Logo"}
            width={logo.width}
            height={logo.height}
          />
        ))}
      </div>
    </section>
  );
};
