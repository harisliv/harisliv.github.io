import { FaProjectDiagram } from 'react-icons/fa';
import type { SVGProps } from 'react';

export function ReactFlow({ ...props }: SVGProps<SVGSVGElement>) {
  return <FaProjectDiagram {...props} />;
}
