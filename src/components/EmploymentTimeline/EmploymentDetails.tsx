import type { EmploymentEntry } from './employmentData';
import { getTechIcon } from '@/utils/techStack';
import { TechBadge } from './TechBadge';

export default function EmploymentDetails({
  entry
}: {
  entry: EmploymentEntry;
}) {
  return (
    <div className="space-y-6">
      {/* Projects */}
      {entry.projects && entry.projects.length > 0 && (
        <div className="space-y-6">
          <h4 className="font-semibold mb-4">Projects</h4>
          {entry.projects.map((project, projectIdx) => (
            <div
              key={projectIdx}
              className="space-y-4 pb-6 border-b last:border-b-0 last:pb-0"
            >
              {/* Project Name */}
              <div>
                <h5 className="font-semibold text-lg mb-1">{project.name}</h5>
                <p className="text-sm text-muted-foreground mb-2">
                  {project?.position || entry.hiringPosition}
                </p>
              </div>

              {/* Project Description */}
              {project.description && (
                <div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>
              )}

              {/* Details - Bullet Points */}
              {project.details && project.details.length > 0 && (
                <div>
                  <ul className="space-y-2">
                    {project.details.map((detail, idx) => (
                      <li
                        key={idx}
                        className="text-sm text-muted-foreground flex items-start gap-2"
                      >
                        <span className="text-primary mt-1">•</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Technologies - Colored badges at the bottom */}
              {project.technologies && project.technologies.length > 0 && (
                <div className="pt-2">
                  <h6 className="font-semibold text-sm mb-2">Technologies</h6>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => {
                      const techInfo = getTechIcon(tech);
                      return <TechBadge item={techInfo} multicolor={true} />;
                    })}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
