import { useIconColor } from '@/hooks';
import { FaCode } from 'react-icons/fa';
import type { SVGProps } from 'react';

export function Solidity({
  multicolor = true,
  ...props
}: { multicolor?: boolean } & SVGProps<SVGSVGElement>) {
  const color = useIconColor('#363636', multicolor);
  return <FaCode color={color} {...props} />;
}
