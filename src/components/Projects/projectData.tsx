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
      ETechEnum.vite
    ],
    imageUrl: '/aiform.webp',
    githubUrl: `${import.meta.env.VITE_GITHUB_BASE_URL}/harisliv.github.io`,
    liveUrl: 'https://harisliv.github.io',
    highlights: [
      'Dark mode support with theme switching',
      'Smooth animations and transitions',
      'Responsive design for all devices'
    ],
    featured: true
  },
  {
    id: '2',
    name: 'Course ',
    description:
      'Full-stack e-commerce solution with user authentication and payment integration.',
    technologies: [
      ETechEnum.react,
      ETechEnum.nodeJs,
      ETechEnum.postgreSQL,
      ETechEnum.typeScript
    ],
    imageUrl: '/aiform.webp',
    githubUrl: `${import.meta.env.VITE_GITHUB_BASE_URL}`,
    highlights: [
      'User authentication and authorization',
      'Payment gateway integration',
      'Shopping cart and checkout flow',
      'Admin dashboard for product management'
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
    imageUrl: '/aiform.webp',
    githubUrl: `${import.meta.env.VITE_GITHUB_BASE_URL}`,
    highlights: [
      'Real-time collaboration features',
      'Task assignment and tracking',
      'Form validation with Zod',
      'State management with Zustand'
    ]
  }
];
