import { ModuleLayout } from "@/components/layout/module/module.interface";
import { StrapiBase } from "@/interfaces/strapi/base.interface";
import { StrapiBlock } from "@/interfaces/strapi/block.interface";
import { StrapiImage } from "@/interfaces/strapi/image.interface";

export interface BenefitsBlock extends StrapiBase, StrapiBlock {
  title: string;
  headline: string;
  subTitle: string;
  modules: ModuleLayout[];
  image: StrapiImage;
}
