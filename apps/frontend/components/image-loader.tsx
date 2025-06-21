"use client";

import Image, { ImageProps } from "next/image";

import { imageLoaderProp } from "@/utils/image-loader.util";

export interface ImageLoaderProps extends ImageProps {
  classname?: string;
}

export const ImageLoader = ({ className, ...linkProps }: ImageLoaderProps) => {
  return (
    <Image {...linkProps} className={className} loader={imageLoaderProp} />
  );
};
