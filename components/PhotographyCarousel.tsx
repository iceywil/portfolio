"use client";

import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

interface Slide {
  title: string;
  src: string;
}

interface PhotographyCarouselProps {
  slides: Slide[];
}

export function PhotographyCarousel({ slides }: PhotographyCarouselProps) {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 5000,
        }),
      ]}
      className="w-full h-full"
    >
      <CarouselContent className="-ml-0 h-full">
        {slides.map((slide, index) => (
          <CarouselItem key={index} className="pl-0 h-full">
            <div className="w-full h-full flex justify-center items-center overflow-hidden bg-black">
              <img
                src={slide.src}
                alt={slide.title}
                className="h-full w-auto object-contain"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
