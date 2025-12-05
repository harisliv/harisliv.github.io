import { useIconColor } from '@/hooks';
import { FaCss3Alt } from 'react-icons/fa';
import type { SVGProps } from 'react';

export function CSS({
  multicolor = true,
  ...props
}: { multicolor?: boolean } & SVGProps<SVGSVGElement>) {
  const color = useIconColor('#1572B6', multicolor);
  return <FaCss3Alt color={color} {...props} />;
}
