import { StrapiBase } from "@/interfaces/strapi/base.interface";
import { StrapiBlock } from "@/interfaces/strapi/block.interface";
import { StrapiImage } from "@/interfaces/strapi/image.interface";

export interface LogoCloudBlock extends StrapiBase, StrapiBlock {
  title: string;
  logoClouds: (StrapiImage & { documentId: string })[];
}
