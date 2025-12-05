import { useIconColor } from '@/hooks';
import { SiPython } from 'react-icons/si';
import type { SVGProps } from 'react';

export function Python({
  multicolor = true,
  ...props
}: { multicolor?: boolean } & SVGProps<SVGSVGElement>) {
  const color = useIconColor('#3776AB', multicolor);
  return <SiPython color={color} {...props} />;
}
