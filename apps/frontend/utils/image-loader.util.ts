import { ImageLoader, ImageLoaderProps } from "next/image";
import { getStrapiImage } from "./get-strapi-image.util";

export const imageLoaderProp: ImageLoader = ({
  src,
  width,
  quality,
}: ImageLoaderProps) => {
  return `${getStrapiImage(src)}?w=${width}&q=${quality || 75}`;
};
