import {
  NodeJs,
  React,
  TypeScript,
  JavaScript,
  NextJs,
  PostgreSQL,
  NestJS,
  Express,
  TanStackQuery,
  Redux,
  Jest,
  TestingLibrary,
  MUI,
  TailwindCSS,
  Pnpm,
  Storybook,
  WebSockets,
  ReactFlow,
  TanstackTable,
  CSS,
  WebWorkers,
  Solidity,
  EthersJs,
  Vite,
  Zod,
  ReactRouter,
  Turborepo,
  ReactHookForm,
  Zustand
} from '@/icons';
import { ETechEnum, type ITechIconProps, type TTechEnum } from '@/types';

export const techDataMap: Record<TTechEnum, ITechIconProps> = {
  [ETechEnum.typeScript]: {
    Icon: TypeScript,
    name: 'TypeScript',
    color: '#3178C6'
  },
  [ETechEnum.react]: {
    Icon: React,
    name: 'React',
    color: '#61DAFB'
  },
  [ETechEnum.nodeJs]: {
    Icon: NodeJs,
    name: 'Node.js',
    color: '#5FA04E'
  },
  [ETechEnum.javaScript]: {
    Icon: JavaScript,
    name: 'JavaScript',
    color: '#F7DF1E'
  },
  [ETechEnum.nextJs]: {
    Icon: NextJs,
    name: 'Next.js',
    color: '#dfdfdf'
  },
  [ETechEnum.sql]: {
    Icon: PostgreSQL,
    name: 'SQL',
    color: '#4479A1'
  },
  [ETechEnum.postgreSQL]: {
    Icon: PostgreSQL,
    name: 'PostgreSQL',
    color: '#4479A1'
  },
  [ETechEnum.nestJS]: {
    Icon: NestJS,
    name: 'NestJS',
    color: '#E0234E'
  },
  [ETechEnum.nestJs]: {
    Icon: NestJS,
    name: 'Nest.js',
    color: '#E0234E'
  },
  [ETechEnum.expressJs]: {
    Icon: Express,
    name: 'Express.js',
    color: '#dfdfdf'
  },
  [ETechEnum.tanStackQuery]: {
    Icon: TanStackQuery,
    name: 'TanStack Query',
    color: '#FF4154'
  },
  [ETechEnum.reactQuery]: {
    Icon: TanStackQuery,
    name: 'React Query',
    color: '#FF4154'
  },
  [ETechEnum.redux]: {
    Icon: Redux,
    name: 'Redux',
    color: '#764ABC'
  },
  [ETechEnum.reduxToolkit]: {
    Icon: Redux,
    name: 'Redux Toolkit',
    color: '#764ABC'
  },
  [ETechEnum.zustand]: {
    Icon: Zustand,
    name: 'Zustand',
    color: '#c4a289'
  },
  [ETechEnum.jest]: {
    Icon: Jest,
    name: 'Jest',
    color: '#C21325'
  },
  [ETechEnum.reactRouter]: {
    Icon: ReactRouter,
    name: 'React Router',
    color: '#CA4245'
  },
  [ETechEnum.testingLibrary]: {
    Icon: TestingLibrary,
    name: 'Testing Library',
    color: '#E33332'
  },
  [ETechEnum.mui]: {
    Icon: MUI,
    name: 'MUI',
    color: '#007FFF'
  },
  [ETechEnum.tailwindCSS]: {
    Icon: TailwindCSS,
    name: 'Tailwind CSS',
    color: '#06B6D4'
  },
  [ETechEnum.reactHookForm]: {
    Icon: ReactHookForm,
    name: 'React Hook Form',
    color: '#EC5990'
  },
  [ETechEnum.zod]: {
    Icon: Zod,
    name: 'Zod',
    color: '#3E67B1'
  },
  [ETechEnum.pnpm]: {
    Icon: Pnpm,
    name: 'pnpm',
    color: '#F69220'
  },
  [ETechEnum.turborepo]: {
    Icon: Turborepo,
    name: 'Turborepo',
    color: '#EF4444'
  },
  [ETechEnum.storybook]: {
    Icon: Storybook,
    name: 'Storybook',
    color: '#FF4785'
  },
  [ETechEnum.webSockets]: {
    Icon: WebSockets,
    name: 'WebSockets',
    color: '#010101'
  },
  [ETechEnum.reactFlow]: {
    Icon: ReactFlow,
    name: 'React Flow',
    color: '#FF0072'
  },
  [ETechEnum.tanstackTable]: {
    Icon: TanstackTable,
    name: 'Tanstack Table',
    color: '#FF4154'
  },
  [ETechEnum.css]: {
    Icon: CSS,
    name: 'CSS',
    color: '#1572B6'
  },
  [ETechEnum.vite]: {
    Icon: Vite,
    name: 'Vite',
    color: '#646CFF'
  },
  [ETechEnum.webWorkers]: {
    Icon: WebWorkers,
    name: 'Web Workers',
    color: '#4A90E2'
  },
  [ETechEnum.solidity]: {
    Icon: Solidity,
    name: 'Solidity',
    color: '#363636'
  },
  [ETechEnum.ethersJs]: {
    Icon: EthersJs,
    name: 'ethers.js',
    color: '#627EEA'
  }
};
