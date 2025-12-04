import type { IconType } from 'react-icons';
import {
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiJavascript,
  SiNextdotjs,
  SiPostgresql,
  SiNestjs,
  SiExpress,
  SiReactquery,
  SiRedux,
  SiJest,
  SiTestinglibrary,
  SiMui,
  SiTailwindcss,
  SiPnpm,
  SiStorybook,
  SiPython
} from 'react-icons/si';
import {
  FaTable,
  FaProjectDiagram,
  FaPlug,
  FaCss3Alt,
  FaCode,
  FaCog
} from 'react-icons/fa';
import { Vite } from '@/icons/Vite';
import { Zod } from '@/icons/Zod';
import { ReactRouter } from '@/icons/ReactRouter';
import { TurborepoIcon } from '@/icons/Turborepo';
import { ReactHookForm } from '@/icons/ReactHookForm';
import { Zustand } from '@/icons/Zustand';

export interface TechIconInfo {
  Icon:
    | IconType
    | React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
  color: string;
  needsWhiteBackground?: boolean;
}

// Map technology names to their icons and colors
export const techIconMap: Record<string, TechIconInfo> = {
  TypeScript: {
    Icon: SiTypescript,
    color: '#3178C6'
  },
  React: {
    Icon: SiReact,
    color: '#61DAFB'
  },
  'Node.js': {
    Icon: SiNodedotjs,
    color: '#5FA04E'
  },
  JavaScript: {
    Icon: SiJavascript,
    color: '#F7DF1E'
  },
  'Next.js': {
    Icon: SiNextdotjs,
    color: '#000000',
    needsWhiteBackground: true
  },
  SQL: {
    Icon: SiPostgresql,
    color: '#4479A1'
  },
  PostgreSQL: {
    Icon: SiPostgresql,
    color: '#4479A1'
  },
  NestJS: {
    Icon: SiNestjs,
    color: '#E0234E'
  },
  Express: {
    Icon: SiExpress,
    color: '#000000',
    needsWhiteBackground: true
  },
  'TanStack Query': {
    Icon: SiReactquery,
    color: '#FF4154'
  },
  Redux: {
    Icon: SiRedux,
    color: '#764ABC'
  },
  Zustand: {
    Icon: Zustand,
    color: '#443E38'
  },
  Jest: {
    Icon: SiJest,
    color: '#C21325'
  },
  'React Router': {
    Icon: ReactRouter,
    color: '#CA4245'
  },
  'Testing Library': {
    Icon: SiTestinglibrary,
    color: '#E33332'
  },
  MUI: {
    Icon: SiMui,
    color: '#007FFF'
  },
  'Tailwind CSS': {
    Icon: SiTailwindcss,
    color: '#06B6D4'
  },
  'React Hook Form': {
    Icon: ReactHookForm,
    color: '#EC5990'
  },
  Zod: {
    Icon: Zod,
    color: '#3E67B1'
  },
  pnpm: {
    Icon: SiPnpm,
    color: '#F69220'
  },
  Turborepo: {
    Icon: TurborepoIcon,
    color: '#EF4444'
  },
  Storybook: {
    Icon: SiStorybook,
    color: '#FF4785'
  },
  WebSockets: {
    Icon: FaPlug,
    color: '#010101',
    needsWhiteBackground: true
  },
  'React Flow': {
    Icon: FaProjectDiagram,
    color: '#FF0072',
    needsWhiteBackground: true
  },
  'Tanstack Table': {
    Icon: FaTable,
    color: '#FF4154'
  },
  CSS: {
    Icon: FaCss3Alt,
    color: '#1572B6'
  },
  Vite: {
    Icon: Vite,
    color: '#646CFF'
  },
  Python: {
    Icon: SiPython,
    color: '#3776AB'
  },
  // Aliases and variations
  'Nest.js': {
    Icon: SiNestjs,
    color: '#E0234E'
  },
  'Express.js': {
    Icon: SiExpress,
    color: '#000000',
    needsWhiteBackground: true
  },
  'Redux Toolkit': {
    Icon: SiRedux,
    color: '#764ABC'
  },
  'React Query': {
    Icon: SiReactquery,
    color: '#FF4154'
  },
  'Web Workers': {
    Icon: FaCog,
    color: '#4A90E2'
  },
  Solidity: {
    Icon: FaCode,
    color: '#363636'
  },
  'ethers.js': {
    Icon: FaCode,
    color: '#627EEA'
  }
};

// Helper function to get tech icon info
export function getTechIcon(techName: string): TechIconInfo | null {
  return techIconMap[techName] || null;
}
