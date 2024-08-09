import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useState } from "react";
import { ArrowLeft2, ArrowRight2 } from "iconsax-react";

export default function Carousel({ children, title }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });

  const scrollPrev = useCallback(() => {
    if (emblaApi && emblaApi.canScrollPrev()) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi && emblaApi.canScrollNext()) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <article className="mx-6 my-8">
      <header className="mb-5 flex items-center justify-between">
        {title && (
          <h2 className="text-xl font-semibold text-secondary">{title}</h2>
        )}
        <div className="flex items-center gap-[10px]">
          <button
            type="button"
            onClick={scrollPrev}
            className="text-secondary disabled:text-secondary-400"
            disabled={emblaApi && !emblaApi.canScrollPrev()}
          >
            <ArrowLeft2 />
          </button>
          <button
            type="button"
            onClick={scrollNext}
            className="text-secondary disabled:text-secondary-400"
            disabled={emblaApi && !emblaApi.canScrollNext()}
          >
            <ArrowRight2 />
          </button>
        </div>
      </header>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex space-x-2">{children}</div>
      </div>
    </article>
  );
}
