import { ETechEnum, type TTechEnum } from '@/types';

export interface ProjectEntry {
  id: string;
  name: string;
  description: string;
  longDescription?: string;
  technologies: TTechEnum[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
  highlights?: string[];
  featured?: boolean;
}

export const projects: ProjectEntry[] = [
  {
    id: '1',
    name: 'Portfolio Website',
    description:
      'A modern, responsive portfolio website showcasing my work and experience.',
    longDescription:
      'Built with React, TypeScript, and Tailwind CSS. Features smooth animations, dark mode support, and a clean, modern design.',
    technologies: [
      ETechEnum.react,
      ETechEnum.typeScript,
      ETechEnum.tailwindCSS,
      ETechEnum.vite,
      ETechEnum.shadcn
    ],
    imageUrl: '/aiform.webp',
    githubUrl: `${import.meta.env.VITE_GITHUB_BASE_URL}/harisliv.github.io`,
    liveUrl: 'https://harisliv.github.io',
    highlights: [
      'Dark mode support with theme switching',
      'Smooth animations and transitions',
      'Responsive design for all devices',
      'Shadcn UI library for consistent UI'
    ],
    featured: true
  },
  {
    id: '2',
    name: 'Course Management System',
    description:
      'Slice is an educational platform that enables instructors and administrators to manage course profiles, track student progress, create assignments, and generate comprehensive reports.',
    technologies: [
      ETechEnum.react,
      ETechEnum.vite,
      ETechEnum.mui,
      ETechEnum.typeScript,
      ETechEnum.tanStackQuery,
      ETechEnum.tanstackTable
    ],
    imageUrl: '/aiiss.webp',
    githubUrl: `${import.meta.env.VITE_GITHUB_BASE_URL}`,
    highlights: [
      'Multi-step forms with 4 major sections and nested tabs',
      'Track enrolled and registered students with comprehensive data tables',
      'Generate periodic reports with PDF export capabilities',
      'Comprehensive client-side validation using Zod schemas'
    ],
    featured: true
  },
  {
    id: '3',
    name: 'Disney Characters Dashboard',
    description:
      'A comprehensive dashboard for exploring Disney characters with data visualization, search, and filtering capabilities.',
    longDescription:
      'Built with React and Redux for state management, featuring a data table with pagination and sorting, interactive pie charts using Highcharts, character detail modals, and form components. Integrates with the Disney REST API to display character information including TV shows, video games, allies, and enemies.',
    technologies: [
      ETechEnum.react,
      ETechEnum.typeScript,
      ETechEnum.redux,
      ETechEnum.mui,
      ETechEnum.tanStackQuery,
      ETechEnum.tanstackTable,
      ETechEnum.reactHookForm,
      ETechEnum.zod,
      ETechEnum.vite
    ],
    imageUrl: '/aiportfolio.webp',
    githubUrl: `${import.meta.env.VITE_GITHUB_BASE_URL}`,
    highlights: [
      'Data table with pagination (10, 20, 50, 100, 200, 500 per page)',
      'Advanced search and filtering by TV shows',
      'Interactive pie chart showing character film participation',
      'Character detail modal with image and participation lists',
      'Export chart data to XLSX format',
      'Real-time chart updates based on table view changes',
      'Redux for centralized state management'
    ],
    featured: true
  }
];
