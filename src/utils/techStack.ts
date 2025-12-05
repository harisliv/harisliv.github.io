import { techDataMap } from '@/components/TechStack/techData';
import { TechEnumSchema, type ITechIconProps, type TTechEnum } from '@/types';
import { FaCode } from 'react-icons/fa';

// Type guard function for TechEnum
export function isTechEnum(value: unknown): value is TTechEnum {
  return TechEnumSchema.safeParse(value).success;
}

// Get tech icon from techDataMap
export function getTechIcon(tech: string): ITechIconProps {
  // Check if tech is a valid TTechEnum
  if (isTechEnum(tech)) {
    return techDataMap[tech];
  }

  return {
    Icon: FaCode,
    name: tech,
    color: '#6b7280'
  };
}
