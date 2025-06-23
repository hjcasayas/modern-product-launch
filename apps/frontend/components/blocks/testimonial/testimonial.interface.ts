import { TestimonyLayout } from "@/components/layout/testimony/testimony.interface";
import { StrapiImage } from "@/interfaces/strapi/image.interface";

export interface TestimonialBlock {
  hero: StrapiImage;
  testimony: TestimonyLayout;
}
