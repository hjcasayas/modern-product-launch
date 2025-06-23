import { ModuleLayout } from "@/components/layout/module/module.interface";
import { StrapiBase } from "@/interfaces/strapi/base.interface";
import { StrapiImage } from "@/interfaces/strapi/image.interface";

export interface BenefitsBlockModule extends ModuleLayout, StrapiBase {}

export interface BenefitsBlock {
  title: string;
  headline: string;
  subTitle: string;
  modules: BenefitsBlockModule[];
  image: StrapiImage;
}
