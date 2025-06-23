"use client";

import { ImageLoader } from "@/components/image-loader";
import { FeaturesCarouselButton } from "./features-carousel-button.component";
import { FeaturesBlock } from "./features.interface";
import { useRef } from "react";

export const FeaturesCarouselComponent = ({
  carousel: { leftArrowIcon, rightArrowIcon, images },
}: Pick<FeaturesBlock, "carousel">) => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const handleClick = (direction: "left" | "right") => {
    if (carouselRef.current != null) {
      const scrollAmount = carouselRef.current.scrollWidth / images.length;
      carouselRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="desktop:w-1/2 relative w-full snap-x">
      <div className="absolute right-[30px] top-[30px] z-10 flex flex-row items-center gap-x-4">
        <FeaturesCarouselButton
          onClick={() => handleClick("left")}
          {...leftArrowIcon}
        />
        <FeaturesCarouselButton
          onClick={() => handleClick("right")}
          {...rightArrowIcon}
        />
      </div>
      <div
        ref={carouselRef}
        className="scrollbar-hide flex w-full snap-x snap-center overflow-hidden"
      >
        {images.map((image) => (
          <div key={image.documentId} className="min-w-full">
            <div className="relative h-[46.5rem] w-full snap-mandatory snap-center">
              <ImageLoader
                src={image.url}
                alt={image.alternativeText || "Carousel Image"}
                fill
                className="object-cover object-bottom"
                sizes="100%"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
