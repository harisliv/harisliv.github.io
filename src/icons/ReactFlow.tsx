import { useIconColor } from '@/hooks';
import { FaProjectDiagram } from 'react-icons/fa';
import type { SVGProps } from 'react';

export function ReactFlow({
  multicolor = true,
  ...props
}: { multicolor?: boolean } & SVGProps<SVGSVGElement>) {
  const color = useIconColor('#FF0072', multicolor);
  return <FaProjectDiagram color={color} {...props} />;
}
