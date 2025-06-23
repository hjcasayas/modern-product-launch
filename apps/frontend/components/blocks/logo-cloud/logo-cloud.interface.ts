import { StrapiBase } from "@/interfaces/strapi/base.interface";
import { StrapiBlock } from "@/interfaces/strapi/block.interface";
import { StrapiComponentBase } from "@/interfaces/strapi/component-base.interface";
import { StrapiImage } from "@/interfaces/strapi/image.interface";

export interface LogoCloudsImage extends StrapiImage, StrapiComponentBase {}

export interface LogoCloudBlock {
  title: string;
  logoClouds: LogoCloudsImage[];
}
