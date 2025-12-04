import { useState, useMemo, useCallback, useEffect } from 'react';
import { employmentHistory } from './employmentData';
import { cn } from '@/lib/utils';
import { TimelineItem } from './TimelineItem';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi
} from '@/components/ui/carousel';

export function EmploymentTimeline() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  // Reorganize: current position (Present) first, then others sorted by year
  const organizedHistory = useMemo(() => {
    const currentEntry = employmentHistory.find(
      (entry) => entry.endDate === 'Present'
    );
    const others = employmentHistory
      .filter((entry) => entry.endDate !== 'Present')
      .sort((a, b) => {
        const dateA = new Date(a.startDate).getTime();
        const dateB = new Date(b.startDate).getTime();
        return dateB - dateA; // Newest first
      });

    return currentEntry ? [currentEntry, ...others] : others;
  }, []);

  const onSelect = useCallback((api: CarouselApi) => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
    setCount(api.scrollSnapList().length);
  }, []);

  useEffect(() => {
    if (!api) return;

    api.on('select', onSelect);
    api.on('reInit', onSelect);

    // Defer initial state to avoid synchronous setState in effect
    queueMicrotask(() => onSelect(api));

    return () => {
      api.off('select', onSelect);
      api.off('reInit', onSelect);
    };
  }, [api, onSelect]);

  const scrollTo = useCallback(
    (index: number) => {
      api?.scrollTo(index);
    },
    [api]
  );

  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-7xl relative px-4 md:px-12">
        <Carousel
          setApi={setApi}
          opts={{
            align: 'start',
            loop: true
          }}
          className="w-full"
        >
          {/* Continuous timeline line */}
          <div className="absolute top-[22px] left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-muted-foreground/70 to-transparent dark:via-muted-foreground/100 z-0" />

          <CarouselContent className="-ml-2 md:-ml-20">
            {organizedHistory.map((entry, index) => {
              const isActive = index === 0;

              return (
                <CarouselItem
                  key={entry.id}
                  className="pl-2 md:pl-20 basis-full sm:basis-1/2 lg:basis-1/3"
                >
                  <TimelineItem entry={entry} isActive={isActive} />
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-4 lg:-left-12" />
          <CarouselNext className="hidden md:flex -right-4 lg:-right-12" />
        </Carousel>

        {/* Dots Indicator */}
        {count > 1 && (
          <div className="flex justify-center gap-2 mt-6">
            {Array.from({ length: count }).map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={cn(
                  'h-2 rounded-full transition-all duration-300',
                  index === current
                    ? 'w-8 bg-primary'
                    : 'w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50'
                )}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
