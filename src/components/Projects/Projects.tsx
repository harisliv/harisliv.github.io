import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import { projects } from './projectData';

export default function Projects() {
  return (
    <section id="projects" className="relative w-full overflow-hidden py-12">
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

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}


