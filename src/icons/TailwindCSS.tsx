import { useIconColor } from '@/hooks';
import { SiTailwindcss } from 'react-icons/si';
import type { SVGProps } from 'react';

export function TailwindCSS({
  multicolor = true,
  ...props
}: { multicolor?: boolean } & SVGProps<SVGSVGElement>) {
  const color = useIconColor('#06B6D4', multicolor);
  return <SiTailwindcss color={color} {...props} />;
}
