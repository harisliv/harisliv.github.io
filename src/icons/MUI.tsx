import { useIconColor } from '@/hooks';
import { SiMui } from 'react-icons/si';
import type { SVGProps } from 'react';

export function MUI({
  multicolor = true,
  ...props
}: { multicolor?: boolean } & SVGProps<SVGSVGElement>) {
  const color = useIconColor('#007FFF', multicolor);
  return <SiMui color={color} {...props} />;
}
