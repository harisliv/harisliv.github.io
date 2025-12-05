import { useIconColor } from '@/hooks';
import { FaCog } from 'react-icons/fa';
import type { SVGProps } from 'react';

export function WebWorkers({
  multicolor = true,
  ...props
}: { multicolor?: boolean } & SVGProps<SVGSVGElement>) {
  const color = useIconColor('#4A90E2', multicolor);
  return <FaCog color={color} {...props} />;
}
