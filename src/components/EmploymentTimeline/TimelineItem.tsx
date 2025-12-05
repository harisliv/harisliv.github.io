import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle
} from '@/components/ui/dialog';

import { Calendar, MapPin, Briefcase, Info } from 'lucide-react';
import type { EmploymentEntry } from './employmentData';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { getTechIcon } from '@/utils/techStack';
import { Button } from '@/components/ui/button';
import EmploymentDetails from './EmploymentDetails';

export function TimelineItem({
  entry,
  isActive
}: {
  entry: EmploymentEntry;
  isActive: boolean;
}) {
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const isPresent = entry.endDate === 'Present';

  return (
    <>
      <div className="relative flex flex-col items-center flex-shrink-0 w-full px-1 pt-4">
        {/* Timeline dot */}
        <div className="relative z-10 mb-4">
          <div
            className={cn(
              'w-4 h-4 rounded-full border-2 transition-all duration-300',
              isPresent
                ? 'bg-primary border-primary shadow-lg shadow-primary/50'
                : 'bg-background border-muted-foreground'
            )}
          />
          {isPresent && (
            <div className="absolute inset-0 w-4 h-4 rounded-full bg-primary animate-ping opacity-75" />
          )}
        </div>

        {/* Content card */}
        <motion.div
          className={cn(
            'relative z-10 w-full p-5 rounded-lg border bg-card shadow-sm mt-2',
            'hover:shadow-md transition-all duration-300',
            isActive &&
              'border-l-2 border-l-primary border-primary/30 shadow-primary/5 shadow-md'
          )}
          whileHover={{ y: -4 }}
        >
          {/* Date badge */}
          <div
            className={cn(
              'inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium mb-3',
              isPresent
                ? 'bg-primary/10 text-primary border border-primary/20'
                : 'bg-muted text-muted-foreground'
            )}
          >
            <Calendar className="w-3 h-3" />
            <span>
              {new Date(entry.startDate).toLocaleDateString('en-US', {
                month: 'short',
                year: 'numeric'
              })}{' '}
              -{' '}
              {isPresent
                ? 'Present'
                : new Date(entry.endDate).toLocaleDateString('en-US', {
                    month: 'short',
                    year: 'numeric'
                  })}
            </span>
          </div>

          {/* Company and Position */}
          <div className="mb-2">
            <h3 className="text-lg font-semibold text-foreground mb-1">
              {entry.hiringPosition}
            </h3>
            <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <Briefcase className="w-4 h-4" />
              <span className="font-medium">{entry.company}</span>
            </div>
          </div>

          {/* Location */}
          {entry.location && (
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-3">
              <MapPin className="w-3.5 h-3.5" />
              <span>{entry.location}</span>
            </div>
          )}

          {/* Project Name - Show first project if exists */}
          {entry.projects && entry.projects.length > 0 && (
            <h4 className="text-sm font-semibold text-foreground mb-2">
              {entry.projects[0].name}
            </h4>
          )}

          {/* Short Description */}
          {entry.shortDescription && (
            <p className="text-sm text-muted-foreground leading-relaxed mb-3">
              {entry.shortDescription}
            </p>
          )}

          {/* Technologies */}
          {entry.baseTechnologies && entry.baseTechnologies.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-border mb-3">
              {entry.baseTechnologies.map((tech) => {
                const techInfo = getTechIcon(tech);
                const Icon = techInfo?.Icon;
                const techName = techInfo?.name || tech;
                const color = techInfo?.color || '#6b7280';

                return (
                  <span
                    key={tech}
                    className="inline-flex items-center gap-2 px-3 py-1.5 text-xs rounded-md bg-muted text-muted-foreground"
                  >
                    {Icon && (
                      <Icon
                        className="h-4 w-4 shrink-0"
                        multicolor={false}
                        style={{ color }}
                      />
                    )}
                    <span>{techName}</span>
                  </span>
                );
              })}
            </div>
          )}

          {/* More Details Button */}
          <Button
            variant="outline"
            size="sm"
            className="w-full mt-3"
            onClick={() => setIsDetailsOpen(true)}
          >
            <Info className="w-4 h-4 mr-2" />
            More Details
          </Button>
        </motion.div>
      </div>

      {/* Details Dialog */}
      <Dialog open={isDetailsOpen} onOpenChange={setIsDetailsOpen}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Briefcase className="w-5 h-5" />
              {entry.company}
            </DialogTitle>
          </DialogHeader>
          <EmploymentDetails entry={entry} />
        </DialogContent>
      </Dialog>
    </>
  );
}
