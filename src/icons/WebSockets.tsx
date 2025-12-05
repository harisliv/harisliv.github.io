import { useIconColor } from '@/hooks';
import { FaPlug } from 'react-icons/fa';
import type { SVGProps } from 'react';

export function WebSockets({
  multicolor = true,
  ...props
}: { multicolor?: boolean } & SVGProps<SVGSVGElement>) {
  const color = useIconColor('#010101', multicolor);
  return <FaPlug color={color} {...props} />;
}
