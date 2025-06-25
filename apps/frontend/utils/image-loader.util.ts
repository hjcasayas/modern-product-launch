import { ImageLoader, ImageLoaderProps } from "next/image";

export const imageLoaderProp: ImageLoader = ({
  src,
  width,
  quality,
}: ImageLoaderProps) => {
  return `${src}?w=${width}&q=${quality || 75}`;
};
