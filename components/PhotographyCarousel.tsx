"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
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
      }}
      className="w-full"
    >
      <CarouselContent>
        {slides.map((slide, index) => (
          <CarouselItem key={index} className="basis-auto">
            <div className="p-1">
              <div
                className="relative bg-black rounded-lg overflow-hidden"
                style={{ height: "100vh" }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={slide.src}
                  alt={slide.title}
                  className="h-full w-auto object-contain"
                />
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

    </Carousel>
  );
}
