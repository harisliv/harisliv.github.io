import { useIconColor } from '@/hooks';
import { SiStorybook } from 'react-icons/si';
import type { SVGProps } from 'react';

export function Storybook({
  multicolor = true,
  ...props
}: { multicolor?: boolean } & SVGProps<SVGSVGElement>) {
  const color = useIconColor('#FF4785', multicolor);
  return <SiStorybook color={color} {...props} />;
}
