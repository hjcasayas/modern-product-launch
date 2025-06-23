import { ImageLoader } from "@/components/image-loader";
import { TestimonialBlockComponentProps } from "./testimonial.component";

export const TestimonialHeroComponent = ({
  hero,
}: Pick<TestimonialBlockComponentProps, "hero">) => {
  return (
    <div className="tablet:h-[45rem] desktop:h-[43.75rem] desktop:w-1/2 relative h-[21.4375rem] w-full overflow-clip rounded-[1.875rem]">
      <ImageLoader
        src={hero.url}
        alt={hero.alternativeText || "Hero Image"}
        fill
        sizes="100%"
        className="object-cover"
      />
    </div>
  );
};
