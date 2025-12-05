import { useIconColor } from '@/hooks';
import { SiPostgresql } from 'react-icons/si';
import type { SVGProps } from 'react';

export function PostgreSQL({
  multicolor = true,
  ...props
}: { multicolor?: boolean } & SVGProps<SVGSVGElement>) {
  const color = useIconColor('#4479A1', multicolor);
  return <SiPostgresql color={color} {...props} />;
}
