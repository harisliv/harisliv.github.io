// Tech stack data using react-icons and custom SVGs
// Icons from: https://react-icons.github.io/react-icons/

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
  SiStorybook
} from 'react-icons/si';
import { FaTable, FaProjectDiagram, FaPlug } from 'react-icons/fa';
import { Vite } from '@/icons/Vite';
import { Zod } from '@/icons/Zod';
import { ReactRouter } from '@/icons/ReactRouter';
import { TurborepoIcon } from '@/icons/Turborepo';
import { ReactHookForm } from '@/icons/ReactHookForm';
import { Zustand } from '@/icons/Zustand';

export interface TechItem {
  name: string;
  color: string;
  Icon:
    | IconType
    | React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
  needsWhiteBackground?: boolean;
}

// Main technologies - featured with 3D cards
export const mainTech: TechItem[] = [
  {
    name: 'TypeScript',
    color: '#3178C6',
    Icon: SiTypescript
  },
  {
    name: 'React',
    color: '#61DAFB',
    Icon: SiReact
  },
  {
    name: 'Vite',
    color: '#646CFF',
    Icon: Vite
  },
  {
    name: 'Node.js',
    color: '#5FA04E',
    Icon: SiNodedotjs
  }
];

// Other technologies - displayed as badges
export const otherTech: TechItem[] = [
  {
    name: 'JavaScript',
    color: '#F7DF1E',
    Icon: SiJavascript
  },
  {
    name: 'Next.js',
    color: '#000000',
    Icon: SiNextdotjs,
    needsWhiteBackground: true
  },
  {
    name: 'SQL',
    color: '#4479A1',
    Icon: SiPostgresql // Using PostgreSQL icon as SQL representation
  },
  {
    name: 'NestJS',
    color: '#E0234E',
    Icon: SiNestjs
  },
  {
    name: 'Express',
    color: '#000000',
    Icon: SiExpress,
    needsWhiteBackground: true
  },
  {
    name: 'TanStack Query',
    color: '#FF4154',
    Icon: SiReactquery
  },
  {
    name: 'Redux',
    color: '#764ABC',
    Icon: SiRedux
  },
  {
    name: 'Zustand',
    color: '#443E38',
    Icon: Zustand
  },
  {
    name: 'Jest',
    color: '#C21325',
    Icon: SiJest
  },
  {
    name: 'React Router',
    color: '#CA4245',
    Icon: ReactRouter
  },
  {
    name: 'Testing Library',
    color: '#E33332',
    Icon: SiTestinglibrary
  },
  {
    name: 'MUI',
    color: '#007FFF',
    Icon: SiMui
  },
  {
    name: 'Tailwind CSS',
    color: '#06B6D4',
    Icon: SiTailwindcss
  },
  {
    name: 'React Hook Form',
    color: '#EC5990',
    Icon: ReactHookForm
  },
  {
    name: 'Zod',
    color: '#3E67B1',
    Icon: Zod
  },
  {
    name: 'pnpm',
    color: '#F69220',
    Icon: SiPnpm
  },
  {
    name: 'Turborepo',
    color: '#EF4444',
    Icon: TurborepoIcon
  },
  {
    name: 'Storybook',
    color: '#FF4785',
    Icon: SiStorybook
  },
  {
    name: 'WebSockets',
    color: '#010101',
    Icon: FaPlug, // Using plug icon as WebSocket alternative
    needsWhiteBackground: true
  },
  {
    name: 'React Flow',
    color: '#FF0072',
    Icon: FaProjectDiagram, // Using diagram icon as React Flow alternative
    needsWhiteBackground: true
  },
  {
    name: 'Tanstack Table',
    color: '#FF4154',
    Icon: FaTable // Using table icon for Tanstack Table
  }
];
