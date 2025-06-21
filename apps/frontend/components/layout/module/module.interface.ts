import { StrapiBase } from "@/interfaces/strapi/base.interface";
import { StrapiImage } from "@/interfaces/strapi/image.interface";

export interface ModuleLayout extends StrapiBase {
  id: number;
  title: string;
  icon: StrapiImage;
  description: string;
}
