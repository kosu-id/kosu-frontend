"use client";

import { useCarousel } from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

export function CarouselDots({ className }) {
  const { api } = useCarousel();
  const [scrollSnaps, setScrollSnaps] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!api) return;

    const onSelect = () => setSelectedIndex(api.selectedScrollSnap());

    setScrollSnaps(api.scrollSnapList());
    setSelectedIndex(api.selectedScrollSnap());

    api.on("select", onSelect);
    api.on("reInit", onSelect);

    return () => {
      api.off("select", onSelect);
      api.off("reInit", onSelect);
    };
  }, [api]);

  return (
    <div className={cn("flex justify-center mt-4 gap-2", className)}>
      {scrollSnaps.map((_, index) => (
        <button
          key={index}
          onClick={() => api?.scrollTo(index)}
          className={cn(
            "h-2 rounded-full transition-all duration-300",
            selectedIndex === index ? "w-6 bg-white" : "w-2 bg-white/50"
          )}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>
  );
}
