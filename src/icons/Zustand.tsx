import { useIconColor } from '@/hooks';
import type { SVGProps } from 'react';

import { FaCode } from 'react-icons/fa';

export interface ZustandProps extends SVGProps<SVGSVGElement> {
  multicolor?: boolean;
}

export function Zustand({ multicolor = true, ...props }: ZustandProps) {
  const color = useIconColor('#3178C6', multicolor);
  return <FaCode color={color} />;
}
