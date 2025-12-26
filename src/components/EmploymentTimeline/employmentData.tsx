import { ETechEnum } from '@/types';

export interface EmploymentEntry {
  id: string;
  company: string;
  hiringPosition: string;
  startDate: string;
  endDate: string | 'Present';
  shortDescription?: string;
  baseTechnologies?: string[];
  location?: string;
  projects?: {
    name: string;
    position?: string;
    description: string;
    technologies: string[];
    details: string[];
  }[];
}

export const employmentHistory: EmploymentEntry[] = [
  {
    id: '1',
    company: 'NTT DATA Europe & Latam',
    hiringPosition: 'Front-End Engineer',
    startDate: '2023-11',
    endDate: 'Present',
    location: 'Athens, Greece',
    shortDescription:
      'NTT DATA Europe & Latam is a leading global IT services company. ',
    baseTechnologies: [
      ETechEnum.react,
      ETechEnum.typeScript,
      ETechEnum.vite,
      ETechEnum.nodeJs
    ],
    projects: [
      {
        name: 'UNFCCC Initiative Self-Service (ISS) Platform',
        position: 'Front End Lead',
        description:
          'The UNFCCC ISS platform is a project for managing and reporting climate initiatives.',
        technologies: [
          ETechEnum.pnpm,
          ETechEnum.turborepo,
          ETechEnum.storybook,
          ETechEnum.reactHookForm,
          ETechEnum.zod,
          ETechEnum.reactRouter,
          ETechEnum.mui,
          ETechEnum.tanstackTable,
          ETechEnum.tanStackQuery,
          ETechEnum.zustand
        ],
        details: [
          'Promoted to Front End Lead, overseeing a team of three developers.',
          'Architected and implemented a scalable monorepo architecture using pnpm workspaces and Turborepo',
          'Built and maintained a reusable component library with Storybook for consistent UI across applications',
          'Built a multi-step dynamic form using React Hook Form and Zod, implementing robust schema-based validation and efficient form state management for complex user workflows'
        ]
      },
      {
        name: 'IOBSI',
        position: 'Senior Software Engineer',
        description:
          'IOBSI is an enterprise-focused adaptation of EBSI principles, implementing blockchain as a distributed ledger technology that records transactions in a secure and immutable way through cryptographic hashing.',
        technologies: [
          ETechEnum.solidity,
          ETechEnum.nestJs,
          ETechEnum.ethersJs,
          ETechEnum.typeScript,
          ETechEnum.nodeJs
        ],
        details: [
          "Engineered and deployed smart contracts for IOBSI's Trusted Registry System",
          'Developed a scalable Nest.js API integrated with ethers.js to support credential verification and DID resolution'
        ]
      },
      {
        name: 'UNFCCC ETF (Enhanced Transparency Framework)',
        position: 'Deputy Team Leader & Senior Engineer',
        description:
          'UNFCCC ETF is a platform for global reporting on greenhouse gas emissions and energy consumption. It is built in Vite with React and TypeScript.',
        technologies: [
          ETechEnum.webSockets,
          ETechEnum.webWorkers,
          ETechEnum.mui,
          ETechEnum.vitest
        ],
        details: [
          'Promoted to Deputy Team Leader and Senior Engineer, overseeing a team of three developers.',
          'Led general tasks and bug fixes, ensuring timely resolutions that enhanced platform stability and success.',
          'Implemented web socket functionality enabling real-time data sharing, and reducing data synchronization delays',
          'Optimized performance by offloading large object processing to Web Workers, preventing main thread blocking'
        ]
      }
    ]
  },
  {
    id: '2',
    company: 'Upstream',
    hiringPosition: 'Full Stack Engineer',
    startDate: '2021-10',
    endDate: '2023-11',
    location: 'Athens, Greece',
    shortDescription:
      'Upstream is a leading mobile marketing automation and digital acquisition firm. ',
    baseTechnologies: [
      ETechEnum.nextJs,
      ETechEnum.react,
      ETechEnum.typeScript,
      ETechEnum.reduxToolkit
    ],
    projects: [
      {
        name: 'Grow Design platform',
        description:
          'End to end platform for creating and managing marketing campaigns.',
        technologies: [
          ETechEnum.expressJs,
          ETechEnum.reactQuery,
          ETechEnum.reactFlow,
          ETechEnum.jest
        ],
        details: [
          'Led full-stack development with Next.js and custom Express.js backend, optimizing application performance by implementing React Query for API calls and migrating from Redux Connect to Redux Toolkit, resulting in reduced network requests and improved state management.',
          'Collaborated closely with innovation and business teams to gather project requirements, ensuring understanding of business objectives while actively contributing to the development and deployment of new features.',
          'Developed an interactive marketing flow builder using React Flow, enabling users to visually design campaigns by dragging, connecting, and organizing actionable notes.'
        ]
      }
    ]
  },
  {
    id: '3',
    company: 'AGENSO',
    hiringPosition: 'Front End Engineer',
    startDate: '2020-09',
    endDate: '2021-10',
    location: 'Athens, Greece',
    shortDescription:
      'AGENSO is a company in developing solutions for increased sustainability. ',
    baseTechnologies: [ETechEnum.react, ETechEnum.javaScript, ETechEnum.css],
    projects: [
      {
        name: 'AGENSO',
        description:
          'AGENSO is a company in developing solutions for increased sustainability.',
        technologies: [ETechEnum.react, ETechEnum.javaScript, ETechEnum.css],
        details: [
          'Developed custom React applications for European Union funded research projects, creating interactive visualizations and data-driven interfaces that effectively displayed complex agricultural sustainability data.'
        ]
      }
    ]
  }
];
