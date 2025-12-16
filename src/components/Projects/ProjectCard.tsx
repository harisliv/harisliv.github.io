import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { getTechIcon } from '@/utils/techStack';
import { TechBadge } from '@/components/EmploymentTimeline/TechBadge';
import { cn } from '@/lib/utils';
import type { ProjectEntry } from './projectData';

export default function ProjectCard({
  project,
  index
}: {
  project: ProjectEntry;
  index: number;
}) {
  const handleGithubClick = () => {
    if (project.githubUrl) {
      window.open(project.githubUrl, '_blank');
    }
  };

  const handleLiveClick = () => {
    if (project.liveUrl) {
      window.open(project.liveUrl, '_blank');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      viewport={{ once: true }}
      className="group relative h-full"
    >
      <motion.div
        className={cn(
          'relative h-full flex flex-col p-6 rounded-xl border bg-card shadow-sm',
          'hover:shadow-lg transition-all duration-300 overflow-hidden',
          project.featured && 'border-primary/30 shadow-primary/5'
        )}
        whileHover={{ y: -4, scale: 1.02 }}
        transition={{ duration: 0.2 }}
      >
        {project.featured && (
          <>
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-violet-500/20 via-purple-500/10 to-transparent rounded-bl-full opacity-50" />
            <div
              className="absolute inset-0 rounded-xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                boxShadow: 'inset 0 0 60px rgba(139, 92, 246, 0.1)'
              }}
            />
          </>
        )}

        <div className="relative z-10 flex flex-col h-full">
          {project.imageUrl && (
            <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden bg-muted">
              <img
                src={project.imageUrl}
                alt={project.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          )}

          <div className="mb-4">
            <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
              {project.name}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {project.description}
            </p>
          </div>

          {project.highlights && project.highlights.length > 0 && (
            <div className="mb-4 flex-1">
              <h4 className="text-xs font-semibold text-violet-400/80 uppercase tracking-wider mb-2">
                Highlights
              </h4>
              <ul className="space-y-1.5">
                {project.highlights.map((highlight, idx) => (
                  <li
                    key={idx}
                    className="text-xs text-foreground/80 flex items-center gap-2"
                  >
                    <span className="text-violet-400 shrink-0">•</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-border mb-4">
            {project.technologies.map((tech) => {
              const techInfo = getTechIcon(tech);
              return (
                <TechBadge
                  key={techInfo.name}
                  item={techInfo}
                  multicolor={true}
                />
              );
            })}
          </div>

          {(project.liveUrl || project.githubUrl) && (
            <div className="flex gap-2">
              {project.liveUrl && (
                <motion.button
                  onClick={handleLiveClick}
                  type="button"
                  className={cn(
                    'w-1/2 flex items-center justify-center gap-2 px-4 py-3 rounded-lg',
                    'bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-cyan-500/10',
                    'border border-cyan-500/20 hover:border-cyan-500/40',
                    'text-foreground font-medium text-sm',
                    'transition-all duration-300',
                    'hover:shadow-lg hover:shadow-cyan-500/20',
                    'hover:from-cyan-500/20 hover:via-blue-500/20 hover:to-cyan-500/20',
                    'group/btn relative overflow-hidden cursor-pointer z-20',
                    'focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:ring-offset-2',
                    'active:scale-95'
                  )}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/10 to-cyan-500/0 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                  <ExternalLink className="w-5 h-5 text-cyan-400 group-hover/btn:text-cyan-300 transition-colors relative z-10" />
                  <span className="relative z-10">Live App</span>
                </motion.button>
              )}
              {project.githubUrl && (
                <motion.button
                  onClick={handleGithubClick}
                  type="button"
                  className={cn(
                    'w-1/2 flex items-center justify-center gap-2 px-4 py-3 rounded-lg',
                    'bg-gradient-to-r from-violet-500/10 via-purple-500/10 to-violet-500/10',
                    'border border-violet-500/20 hover:border-violet-500/40',
                    'text-foreground font-medium text-sm',
                    'transition-all duration-300',
                    'hover:shadow-lg hover:shadow-violet-500/20',
                    'hover:from-violet-500/20 hover:via-purple-500/20 hover:to-violet-500/20',
                    'group/btn relative overflow-hidden cursor-pointer z-20',
                    'focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:ring-offset-2',
                    'active:scale-95'
                  )}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-violet-500/0 via-violet-500/10 to-violet-500/0 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                  <Github className="w-5 h-5 text-violet-400 group-hover/btn:text-violet-300 transition-colors relative z-10" />
                  <span className="relative z-10">GitHub</span>
                </motion.button>
              )}
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}
