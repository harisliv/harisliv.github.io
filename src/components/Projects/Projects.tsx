import { useState, useCallback, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Autoplay from 'embla-carousel-autoplay';
import ProjectCard from './ProjectCard';
import { projects } from './projectData';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi
} from '@/components/ui/carousel';
import { cn } from '@/lib/utils';

export default function Projects() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const autoplay = useRef(
    Autoplay({
      delay: 4000,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
      playOnInit: false
    })
  );

  const onSelect = useCallback((api: CarouselApi) => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
    setCount(api.scrollSnapList().length);
  }, []);

  useEffect(() => {
    if (!api) return;

    api.on('select', onSelect);
    api.on('reInit', onSelect);

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
    <section id="projects" className="relative w-full overflow-visible py-12">
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <div className="mb-4 flex items-center justify-center gap-2">
            <span className="h-px w-12 bg-violet-500/50" />
            <span className="text-sm font-medium tracking-wider text-violet-400">
              PROJECTS
            </span>
            <span className="h-px w-12 bg-violet-500/50" />
          </div>

          <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
            Featured Projects
          </h2>

          <p className="mx-auto max-w-xl text-muted-foreground">
            A collection of projects showcasing my skills and experience
          </p>
        </motion.div>

        <div className="w-full flex justify-center overflow-visible">
          <div className="w-full max-w-7xl relative pl-4 md:pl-12 pr-8 md:pr-20 overflow-visible">
            <Carousel
              setApi={setApi}
              opts={{
                align: 'start',
                loop: true,
                slidesToScroll: 1
              }}
              plugins={[autoplay.current]}
              className="w-full overflow-visible"
            >
              <CarouselContent className="-ml-2 md:-ml-4 py-8 pl-8" withPadding>
                {projects.map((project, index) => (
                  <CarouselItem
                    key={project.id}
                    className="pl-2 md:pl-4 basis-1/2 overflow-visible"
                  >
                    <ProjectCard project={project} index={index} />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex -left-4 lg:-left-12" />
              <CarouselNext className="hidden md:flex -right-4 lg:-right-12" />
            </Carousel>

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
      </div>
    </section>
  );
}
