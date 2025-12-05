import { useIconColor } from '@/hooks';
import { SiNextdotjs } from 'react-icons/si';
import type { SVGProps } from 'react';

export function NextJs({
  multicolor = true,
  ...props
}: { multicolor?: boolean } & SVGProps<SVGSVGElement>) {
  const color = useIconColor('#000000', multicolor);
  return <SiNextdotjs color={color} {...props} />;
}
