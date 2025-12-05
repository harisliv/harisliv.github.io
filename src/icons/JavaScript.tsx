import { useIconColor } from '@/hooks';
import { SiJavascript } from 'react-icons/si';
import type { SVGProps } from 'react';

export function JavaScript({
  multicolor = true,
  ...props
}: { multicolor?: boolean } & SVGProps<SVGSVGElement>) {
  const color = useIconColor('#F7DF1E', multicolor);
  return <SiJavascript color={color} {...props} />;
}
