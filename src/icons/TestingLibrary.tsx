import { useIconColor } from '@/hooks';
import { SiTestinglibrary } from 'react-icons/si';
import type { SVGProps } from 'react';

export function TestingLibrary({
  multicolor = true,
  ...props
}: { multicolor?: boolean } & SVGProps<SVGSVGElement>) {
  const color = useIconColor('#E33332', multicolor);
  return <SiTestinglibrary color={color} {...props} />;
}
