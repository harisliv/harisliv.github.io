import { useIconColor } from '@/hooks';
import { SiExpress } from 'react-icons/si';
import type { SVGProps } from 'react';

export function Express({
  multicolor = true,
  ...props
}: { multicolor?: boolean } & SVGProps<SVGSVGElement>) {
  const color = useIconColor('#000000', multicolor);
  return <SiExpress color={color} {...props} />;
}
