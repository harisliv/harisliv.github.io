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
    name: 'Task Management App',
    description:
      'Collaborative task management application with real-time updates.',
    technologies: [
      ETechEnum.react,
      ETechEnum.zustand,
      ETechEnum.reactHookForm,
      ETechEnum.zod
    ],
    imageUrl: '/aiportfolio.webp',
    githubUrl: `${import.meta.env.VITE_GITHUB_BASE_URL}`,
    highlights: [
      'Real-time collaboration features',
      'Task assignment and tracking',
      'Form validation with Zod',
      'State management with Zustand'
    ]
  }
];
