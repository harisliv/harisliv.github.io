import type { EmploymentEntry } from './employmentData';
import { getTechIcon } from './techIconMap';

export default function EmploymentDetails({
  entry
}: {
  entry: EmploymentEntry;
}) {
  return (
    <div className="space-y-6">
      {/* Project Name */}
      {entry.projectName && (
        <div>
          <h4 className="font-semibold mb-2">{entry.projectName}</h4>
        </div>
      )}

      {/* Project Description */}
      {entry.projectDescription && (
        <div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {entry.projectDescription}
          </p>
        </div>
      )}

      {/* Details - Bullet Points */}
      {entry.details && entry.details.length > 0 && (
        <div>
          <ul className="space-y-2">
            {entry.details.map((detail, idx) => (
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
