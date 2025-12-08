import { useIconColor } from '@/hooks';
import type { ITechIconProps } from '@/types';

// Simple badge for other technologies
export function TechBadge({
  item,
  multicolor
}: {
  item: ITechIconProps;
  index?: number;
  multicolor?: boolean;
}) {
  const { Icon, color, name } = item;
  const iconColor = useIconColor(color, multicolor ?? true);

  return (
    <span
      key={name}
      className="inline-flex items-center justify-center gap-2 px-4 py-2 h-8 text-xs rounded-md font-medium min-w-fit"
      style={{
        backgroundColor: `${iconColor}15`,
        color: iconColor,
        border: `1px solid ${color}30`
      }}
    >
      <Icon
        multicolor={multicolor}
        className="w-4 h-4 shrink-0"
        color={iconColor}
      />
      <span className="whitespace-nowrap">{name}</span>
    </span>
  );
}
