import { useIconColor } from '@/hooks';
import { SiTypescript } from 'react-icons/si';
import type { SVGProps } from 'react';

export function TypeScript({
  multicolor = true,
  ...props
}: { multicolor?: boolean } & SVGProps<SVGSVGElement>) {
  const color = useIconColor('#3178C6', multicolor);
  return <SiTypescript color={color} {...props} />;
}
