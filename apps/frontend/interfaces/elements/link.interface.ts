import { StrapiBase } from "../strapi/base.interface";

export interface ElementLink {
  label: string;
  href: string;
  isExternal?: boolean;
}
