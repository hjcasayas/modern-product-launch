import { ModuleLayout } from "@/components/layout/module/module.interface";
import { StrapiBase } from "@/interfaces/strapi/base.interface";
import { StrapiBlock } from "@/interfaces/strapi/block.interface";
import { StrapiImage } from "@/interfaces/strapi/image.interface";

export interface BenefitsBlockModules extends ModuleLayout, StrapiBase {}

export interface BenefitsBlock {
  title: string;
  headline: string;
  subTitle: string;
  modules: BenefitsBlockModules[];
  image: StrapiImage;
}
