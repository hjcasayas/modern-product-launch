import { StrapiBase } from "../strapi/base.interface";

export interface ElementLink extends StrapiBase {
  label: string;
  href: string;
  isExternal?: boolean;
}
