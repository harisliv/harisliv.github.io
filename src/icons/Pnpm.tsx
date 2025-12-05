import { useIconColor } from '@/hooks';
import { SiPnpm } from 'react-icons/si';
import type { SVGProps } from 'react';

export function Pnpm({
  multicolor = true,
  ...props
}: { multicolor?: boolean } & SVGProps<SVGSVGElement>) {
  const color = useIconColor('#F69220', multicolor);
  return <SiPnpm color={color} {...props} />;
}
