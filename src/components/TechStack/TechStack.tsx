import { motion } from 'framer-motion';
import { TechCard } from './TechCard';
import { techDataMap } from './techData';
import { ETechEnum } from '@/types';

const mainTech = [
  techDataMap[ETechEnum.typeScript],
  techDataMap[ETechEnum.react],
  techDataMap[ETechEnum.vite],
  techDataMap[ETechEnum.nodeJs]
];

const TechStack = () => (
  <section id="tech-stack" className="relative w-full overflow-hidden py-24">
    <div className="relative z-10 mx-auto max-w-6xl px-6">
      {/* Section Header */}
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
            TECH STACK
          </span>
          <span className="h-px w-12 bg-violet-500/50" />
        </div>

        <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
          Technologies I Work With
        </h2>

        <p className="mx-auto max-w-xl text-muted-foreground">
          My core toolkit for building modern web applications
        </p>
      </motion.div>

      {/* Main Technologies - 3D Cards */}
      <div className="mb-16 grid grid-cols-2 gap-6 md:grid-cols-4">
        {mainTech.map((item, index) => (
          <TechCard key={item.name} item={item} index={index} />
        ))}
      </div>
    </div>
  </section>
);

export default TechStack;
