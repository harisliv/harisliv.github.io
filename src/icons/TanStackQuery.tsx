import { useIconColor } from '@/hooks';
import { SiReactquery } from 'react-icons/si';
import type { SVGProps } from 'react';

export function TanStackQuery({
  multicolor = true,
  ...props
}: { multicolor?: boolean } & SVGProps<SVGSVGElement>) {
  const color = useIconColor('#FF4154', multicolor);
  return <SiReactquery color={color} {...props} />;
}
