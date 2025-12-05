import { useIconColor } from '@/hooks';
import { SiNodedotjs } from 'react-icons/si';
import type { SVGProps } from 'react';

export function NodeJs({
  multicolor = true,
  ...props
}: { multicolor?: boolean } & SVGProps<SVGSVGElement>) {
  const color = useIconColor('#5FA04E', multicolor);
  return <SiNodedotjs color={color} {...props} />;
}
