import { useIconColor } from '@/hooks';
import { FaCode } from 'react-icons/fa';
import type { SVGProps } from 'react';

export function EthersJs({
  multicolor = true,
  ...props
}: { multicolor?: boolean } & SVGProps<SVGSVGElement>) {
  const color = useIconColor('#627EEA', multicolor);
  return <FaCode color={color} {...props} />;
}
