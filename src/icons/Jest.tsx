import { useIconColor } from '@/hooks';
import { SiJest } from 'react-icons/si';
import type { SVGProps } from 'react';

export function Jest({
  multicolor = true,
  ...props
}: { multicolor?: boolean } & SVGProps<SVGSVGElement>) {
  const color = useIconColor('#C21325', multicolor);
  return <SiJest color={color} {...props} />;
}
