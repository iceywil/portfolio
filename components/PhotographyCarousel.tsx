"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

interface Slide {
  title: string;
  src: string;
}

interface PhotographyCarouselProps {
  slides: Slide[];
}

export function PhotographyCarousel({ slides }: PhotographyCarouselProps) {
  return (
    <Carousel className="w-full max-w-4xl">
      <CarouselContent>
        {slides.map((slide, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <div className="relative aspect-video">
                <Image
                  src={slide.src}
                  alt={slide.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
              <div className="text-center text-lg font-semibold mt-2">
                {slide.title}
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
