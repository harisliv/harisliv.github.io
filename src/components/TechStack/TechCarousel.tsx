import Autoplay from 'embla-carousel-autoplay';
import { techDataMap } from './techData';
import {
  Carousel,
  CarouselContent,
  CarouselItem
} from '@/components/ui/carousel';

const TechCarousel = () => {
  const allTechnologies = Object.values(techDataMap);

  const getRandomRotation = (index: number) => {
    const rotations = [
      'rotateY(-20deg) rotateX(10deg) rotateZ(-3deg)',
      'rotateY(-15deg) rotateX(-8deg) rotateZ(2deg)',
      'rotateY(-25deg) rotateX(5deg) rotateZ(-5deg)',
      'rotateY(-18deg) rotateX(-12deg) rotateZ(4deg)'
    ];
    return rotations[index % rotations.length];
  };

  const getStaggeredOffset = (index: number) => {
    const offsets = ['0px', '-20px', '-10px', '-30px'];
    return offsets[index % offsets.length];
  };

  return (
    <section id="tech-stack" className="relative w-full overflow-hidden py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-violet-500/5 via-transparent to-cyan-500/5" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mb-20 text-center">
          <div className="mb-6 flex items-center justify-center gap-3">
            <div className="h-[2px] w-16 bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
            <span className="relative text-sm font-bold tracking-[0.3em] text-violet-400">
              TECH ARSENAL
              <span className="absolute -bottom-1 left-0 h-[2px] w-full bg-gradient-to-r from-violet-500 to-cyan-500" />
            </span>
            <div className="h-[2px] w-16 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
          </div>

          <h2 className="mb-6 bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-4xl font-black text-transparent sm:text-5xl md:text-6xl">
            Weapons of Choice
          </h2>

          <p className="mx-auto max-w-2xl text-lg text-muted-foreground/80">
            Battle-tested technologies forged in the fires of production
          </p>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-violet-600/10 via-fuchsia-600/10 to-cyan-600/10 blur-3xl" />

          <Carousel
            opts={{
              align: 'start',
              loop: true,
              slidesToScroll: 1
            }}
            plugins={[
              Autoplay({
                delay: 2500,
                stopOnInteraction: false,
                stopOnMouseEnter: false
              })
            ]}
            className="mx-auto w-full"
          >
            <CarouselContent className="ml-0">
              {allTechnologies.map((tech, index) => (
                <CarouselItem
                  key={`${tech.name}-${index}`}
                  className="basis-1/2 pl-6 md:basis-1/3 lg:basis-1/5 p-7"
                >
                  <div
                    className="relative"
                    style={{
                      marginTop: '-20px'
                    }}
                  >
                    <div
                      className="group relative flex h-48 flex-col items-center justify-center gap-4 overflow-hidden rounded-2xl p-6 backdrop-blur-xl"
                      style={{
                        transform: `perspective(1200px) rotateY(-20deg) rotateX(10deg) rotateZ(-3deg)`,
                        transformStyle: 'preserve-3d'
                      }}
                    >
                      <div
                        className="absolute left-0 top-0 h-full w-1"
                        style={{
                          background: `linear-gradient(180deg, ${tech.color}, transparent)`,
                          boxShadow: `0 0 20px ${tech.color}`
                        }}
                      />

                      <div className="relative z-10">
                        <tech.Icon
                          className="h-20 w-20"
                          style={{ color: tech.color }}
                        />
                      </div>

                      <div
                        className="relative z-10 text-center"
                        style={{ transform: 'translateZ(20px)' }}
                      >
                        <span
                          className="text-sm font-bold tracking-wider"
                          style={{
                            color: tech.color,
                            textShadow: `0 0 20px ${tech.color}80`
                          }}
                        >
                          {tech.name}
                        </span>
                      </div>

                      <div
                        className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"
                        style={{ transform: 'translateZ(10px)' }}
                      />
                    </div>

                    <div
                      className="absolute -inset-1 -z-10 rounded-2xl opacity-50 blur-xl"
                      style={{
                        background: `linear-gradient(135deg, ${tech.color}30, transparent)`
                      }}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        <div className="mt-16 flex items-center justify-center gap-4">
          <div className="flex gap-2">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="h-2 w-2 rounded-full bg-gradient-to-r from-violet-500 to-cyan-500"
              />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }
      `}</style>
    </section>
  );
};

export default TechCarousel;
