"use client";

import Image, { ImageProps } from "next/image";

import { imageLoaderProp } from "@/utils/image-loader.util";
import { getStrapiImage } from "@/utils/get-strapi-image.util";

export interface ImageLoaderProps extends ImageProps {
  classname?: string;
}

export const ImageLoader = ({ className, ...linkProps }: ImageLoaderProps) => {
  return (
    <Image
      {...linkProps}
      src={getStrapiImage(linkProps.src)}
      className={className}
      loader={imageLoaderProp}
    />
  );
};
