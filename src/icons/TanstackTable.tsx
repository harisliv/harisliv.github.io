import { useIconColor } from '@/hooks';
import { FaTable } from 'react-icons/fa';
import type { SVGProps } from 'react';

export function TanstackTable({
  multicolor = true,
  ...props
}: { multicolor?: boolean } & SVGProps<SVGSVGElement>) {
  const color = useIconColor('#FF4154', multicolor);
  return <FaTable color={color} {...props} />;
}
