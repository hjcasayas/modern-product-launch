import { StrapiBase } from "../strapi/base.interface";

export interface ElementLink extends StrapiBase {
  label: string;
  url: string;
  isExternal?: boolean;
}
