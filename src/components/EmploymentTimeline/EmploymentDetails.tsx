import type { EmploymentEntry } from './employmentData';
import { getTechIcon } from './techIconMap';

export default function EmploymentDetails({
  entry
}: {
  entry: EmploymentEntry;
}) {
  return (
    <div className="space-y-6">
      {/* Description */}
      <div>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {entry.description}
        </p>
      </div>

      {/* Responsibilities */}
      {entry.details?.responsibilities &&
        entry.details.responsibilities.length > 0 && (
          <div>
            <h4 className="font-semibold mb-2">Key Responsibilities</h4>
            <ul className="space-y-2">
              {entry.details.responsibilities.map((responsibility, idx) => (
                <li
                  key={idx}
                  className="text-sm text-muted-foreground flex items-start gap-2"
                >
                  <span className="text-primary mt-1">•</span>
                  <span>{responsibility}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

      {/* Achievements */}
      {entry.details?.achievements && entry.details.achievements.length > 0 && (
        <div>
          <h4 className="font-semibold mb-2">Key Achievements</h4>
          <ul className="space-y-2">
            {entry.details.achievements.map((achievement, idx) => (
              <li
                key={idx}
                className="text-sm text-muted-foreground flex items-start gap-2"
              >
                <span className="text-primary mt-1">•</span>
                <span>{achievement}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Projects */}
      {entry.details?.projects && entry.details.projects.length > 0 && (
        <div>
          <h4 className="font-semibold mb-2">Notable Projects</h4>
          <div className="space-y-3">
            {entry.details.projects.map((project, idx) => (
              <div key={idx} className="p-3 rounded-lg border bg-muted/50">
                <h5 className="font-medium mb-1">{project.name}</h5>
                <p className="text-sm text-muted-foreground">
                  {project.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Technologies - Colored badges at the bottom */}
      {entry.technologies && entry.technologies.length > 0 && (
        <div className="pt-4 border-t">
          <h4 className="font-semibold mb-3">Technologies</h4>
          <div className="flex flex-wrap gap-2">
            {entry.technologies.map((tech) => {
              const techInfo = getTechIcon(tech);
              const Icon = techInfo?.Icon;
              const color = techInfo?.color || '#6b7280';

              return (
                <span
                  key={tech}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs rounded-md font-medium"
                  style={{
                    backgroundColor: `${color}15`,
                    color: color,
                    border: `1px solid ${color}30`
                  }}
                >
                  {Icon && (
                    <Icon className="h-4 w-4 shrink-0" style={{ color }} />
                  )}
                  <span>{tech}</span>
                </span>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
