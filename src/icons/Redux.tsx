import { useIconColor } from '@/hooks';
import { SiRedux } from 'react-icons/si';
import type { SVGProps } from 'react';

export function Redux({
  multicolor = true,
  ...props
}: { multicolor?: boolean } & SVGProps<SVGSVGElement>) {
  const color = useIconColor('#764ABC', multicolor);
  return <SiRedux color={color} {...props} />;
}
