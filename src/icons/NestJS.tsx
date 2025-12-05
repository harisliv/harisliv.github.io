import { useIconColor } from '@/hooks';
import { SiNestjs } from 'react-icons/si';
import type { SVGProps } from 'react';

export function NestJS({
  multicolor = true,
  ...props
}: { multicolor?: boolean } & SVGProps<SVGSVGElement>) {
  const color = useIconColor('#E0234E', multicolor);
  return <SiNestjs color={color} {...props} />;
}
