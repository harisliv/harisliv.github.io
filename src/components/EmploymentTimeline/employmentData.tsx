export interface EmploymentEntry {
  id: string;
  company: string;
  position: string;
  startDate: string;
  endDate: string | 'Present';
  shortDescription?: string;
  projectName?: string;
  projectDescription?: string;
  location?: string;
  technologies?: string[];
  details?: string[];
}

export const employmentHistory: EmploymentEntry[] = [
  {
    id: '1',
    company: 'NTT DATA Europe & Latam',
    position: 'Front End Lead',
    startDate: '2025-07',
    endDate: 'Present',
    location: 'Athens, Greece',
    shortDescription:
      'Leading front-end development for a climate initiatives management platform.',
    projectName: 'UNFCCC Initiative Self-Service (ISS) Platform',
    projectDescription:
      'The UNFCCC ISS platform is a project for managing and reporting climate initiatives.',
    technologies: [
      'React',
      'TypeScript',
      'pnpm',
      'Turborepo',
      'Storybook',
      'React Hook Form',
      'Zod'
    ],
    details: [
      'Promoted to Front End Lead, overseeing a team of three developers.',
      'Architected and implemented a scalable monorepo architecture using pnpm workspaces and Turborepo',
      'Built and maintained a reusable component library with Storybook for consistent UI across applications',
      'Built a multi-step dynamic form using React Hook Form and Zod, implementing robust schema-based validation and efficient form state management for complex user workflows'
    ]
  },
  {
    id: '2',
    company: 'NTT DATA Europe & Latam',
    position: 'Senior Software Engineer',
    startDate: '2025-01',
    endDate: '2025-07',
    location: 'Athens, Greece',
    shortDescription:
      'Building blockchain-based trusted registry system with smart contracts and scalable APIs.',
    projectName: 'IOBSI',
    projectDescription:
      'IOBSI is an enterprise-focused adaptation of EBSI principles, implementing blockchain as a distributed ledger technology that records transactions in a secure and immutable way through cryptographic hashing.',
    technologies: ['Solidity', 'Nest.js', 'ethers.js', 'TypeScript', 'Node.js'],
    details: [
      "Engineered and deployed smart contracts for IOBSI's Trusted Registry System",
      'Developed a scalable Nest.js API integrated with ethers.js to support credential verification and DID resolution'
    ]
  },
  {
    id: '3',
    company: 'NTT DATA Europe & Latam',
    position: 'Deputy Team Leader & Senior Engineer',
    startDate: '2023-11',
    endDate: '2024-11',
    location: 'Athens, Greece',
    shortDescription:
      'Leading a team on a global platform for greenhouse gas emissions and energy consumption reporting.',
    projectName: 'UNFCCC ETF (Enhanced Transparency Framework)',
    projectDescription:
      'UNFCCC ETF is a platform for global reporting on greenhouse gas emissions and energy consumption. It is built in Vite with React and TypeScript.',
    technologies: [
      'React',
      'TypeScript',
      'WebSockets',
      'Web Workers',
      'JavaScript',
      'Vite'
    ],
    details: [
      'Promoted to Deputy Team Leader and Senior Engineer, overseeing a team of three developers.',
      'Led general tasks and bug fixes, ensuring timely resolutions that enhanced platform stability and success.',
      'Implemented web socket functionality enabling real-time data sharing, and reducing data synchronization delays',
      'Optimized performance by offloading large object processing to Web Workers, preventing main thread blocking'
    ]
  },
  {
    id: '4',
    company: 'Upstream',
    position: 'Full Stack Engineer',
    startDate: '2021-10',
    endDate: '2023-11',
    location: 'Athens, Greece',
    shortDescription:
      'Full-stack development for mobile marketing automation and digital acquisition platform.',
    projectDescription:
      'Upstream is a leading mobile marketing automation and digital acquisition firm.',
    technologies: [
      'Next.js',
      'Express.js',
      'React',
      'TypeScript',
      'Redux Toolkit',
      'React Query',
      'React Flow'
    ],
    details: [
      'Led full-stack development with Next.js and custom Express.js backend, optimizing application performance by implementing React Query for API calls and migrating from Redux Connect to Redux Toolkit, resulting in reduced network requests and improved state management.',
      'Collaborated closely with innovation and business teams to gather project requirements, ensuring understanding of business objectives while actively contributing to the development and deployment of new features.',
      'Developed an interactive marketing flow builder using React Flow, enabling users to visually design campaigns by dragging, connecting, and organizing actionable notes.'
    ]
  },
  {
    id: '5',
    company: 'AGENSO',
    position: 'Front End Engineer',
    startDate: '2020-09',
    endDate: '2021-10',
    location: 'Athens, Greece',
    shortDescription:
      'Developing custom React applications for EU-funded research projects on agricultural sustainability.',
    projectDescription:
      'AGENSO is a company in developing solutions for increased sustainability. Developed custom React applications for European Union funded research projects, creating interactive visualizations and data-driven interfaces that effectively displayed complex agricultural sustainability data.',
    technologies: ['React', 'JavaScript', 'CSS']
  }
];
