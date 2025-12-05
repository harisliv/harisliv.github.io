import { useIconColor } from '@/hooks';
import { SiReact } from 'react-icons/si';
import type { SVGProps } from 'react';

export function React({
  multicolor = true,
  ...props
}: { multicolor?: boolean } & SVGProps<SVGSVGElement>) {
  const color = useIconColor('#61DAFB', multicolor);
  return <SiReact color={color} {...props} />;
}
