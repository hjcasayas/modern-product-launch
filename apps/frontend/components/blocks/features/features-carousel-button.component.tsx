import { ImageLoader } from "@/components/image-loader";
import { StrapiImage } from "@/interfaces/strapi/image.interface";

export interface FeaturesCarouselButtonProps extends StrapiImage {
  onClick?: () => void;
}

export const FeaturesCarouselButton = ({
  url,
  alternativeText,
  width,
  height,
  onClick,
}: FeaturesCarouselButtonProps) => {
  return (
    <button
      onClick={onClick}
      type="button"
      className="bg-background hover:bg-accent-2 relative inline-block cursor-pointer rounded-[0.625rem] px-[0.9375rem] py-[1.09375rem] transition-all duration-300 ease-in-out"
    >
      <ImageLoader
        src={url}
        alt={alternativeText || "Carousel Arrow Button"}
        width={width}
        height={height}
      />
    </button>
  );
};
