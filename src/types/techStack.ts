import type { IconType } from 'react-icons';
import z from 'zod';

// Zod enum schema for TechEnum
export const TechEnumSchema = z.enum([
  'typeScript',
  'react',
  'nodeJs',
  'javaScript',
  'nextJs',
  'sql',
  'postgreSQL',
  'nestJS',
  'nestJs',
  'expressJs',
  'tanStackQuery',
  'reactQuery',
  'redux',
  'reduxToolkit',
  'zustand',
  'jest',
  'reactRouter',
  'testingLibrary',
  'mui',
  'tailwindCSS',
  'reactHookForm',
  'zod',
  'pnpm',
  'turborepo',
  'storybook',
  'webSockets',
  'reactFlow',
  'tanstackTable',
  'css',
  'vite',
  'webWorkers',
  'solidity',
  'ethersJs',
  'shadcn',
  'vitest'
]);

export const ETechEnum = TechEnumSchema.enum;

export type TTechEnum = z.infer<typeof TechEnumSchema>;

export interface ITechIconProps {
  Icon:
    | IconType
    | React.ComponentType<{
        multicolor?: boolean;
        className?: string;
        style?: React.CSSProperties;
      }>;
  name: string;
  color: string;
}
