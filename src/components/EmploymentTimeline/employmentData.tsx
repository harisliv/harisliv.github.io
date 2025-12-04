export interface EmploymentEntry {
  id: string;
  company: string;
  position: string;
  startDate: string;
  endDate: string | 'Present';
  description: string;
  location?: string;
  technologies?: string[];
  details?: {
    achievements?: string[];
    responsibilities?: string[];
    projects?: Array<{
      name: string;
      description: string;
    }>;
  };
}

export const employmentHistory: EmploymentEntry[] = [
  {
    id: '1',
    company: 'NTT DATA Europe & Latam',
    position: 'Front End Lead',
    startDate: '2025-07',
    endDate: 'Present',
    description:
      'Managing a team of 3 developers on a climate initiative management platform serving global participants.',
    location: 'Athens, Greece',
    technologies: [
      'React',
      'TypeScript',
      'pnpm',
      'Turborepo',
      'Storybook',
      'React Hook Form',
      'Zod'
    ],
    details: {
      achievements: [
        'Promoted to Front End Lead, managing a team of 3 developers on a climate initiative management platform serving global participants',
        'Architected and implemented a scalable monorepo structure using pnpm workspaces and Turborepo, reducing build times and improving developer workflow efficiency',
        'Built and maintained a reusable component library with Storybook, ensuring consistent UI/UX across multiple applications and reducing development time by standardizing components'
      ],
      responsibilities: [
        'Lead front-end development team and coordinate with stakeholders',
        'Architect scalable monorepo solutions and development workflows',
        'Maintain reusable component library and design system'
      ],
      projects: [
        {
          name: 'UNFCCC Initiative Self-Service (ISS) Platform',
          description:
            'Developed a multi-step dynamic form system using React Hook Form and Zod, implementing schema-based validation that handles complex user workflows with improved error handling and user experience'
        }
      ]
    }
  },
  {
    id: '2',
    company: 'NTT DATA Europe & Latam',
    position: 'Senior Software Engineer',
    startDate: '2025-01',
    endDate: '2025-07',
    description:
      'Engineered and deployed production-grade smart contracts and scalable APIs for blockchain-based trusted registry system.',
    location: 'Athens, Greece',
    technologies: ['Solidity', 'Nest.js', 'ethers.js', 'TypeScript', 'Node.js'],
    details: {
      achievements: [
        "Engineered and deployed production-grade smart contracts for IOBSI's Trusted Registry System, enabling secure management of Decentralized Identifiers (DIDs) and verifiable credentials for enterprise clients",
        'Developed a scalable Nest.js API integrated with ethers.js, supporting credential verification and DID resolution with robust error handling and security measures',
        'Implemented blockchain-based distributed ledger technology using cryptographic hashing for secure and immutable transaction recording'
      ],
      responsibilities: [
        'Design and develop smart contracts for enterprise blockchain solutions',
        'Build and maintain scalable backend APIs with Nest.js',
        'Implement secure credential verification and DID resolution systems'
      ],
      projects: [
        {
          name: 'IOBSI (Internal Operational Blockchain Services Infrastructure)',
          description:
            'Trusted Registry System enabling secure management of Decentralized Identifiers (DIDs) and verifiable credentials for enterprise clients'
        }
      ]
    }
  },
  {
    id: '3',
    company: 'NTT DATA Europe & Latam',
    position: 'Deputy Team Leader & Senior Engineer',
    startDate: '2023-11',
    endDate: '2024-11',
    description:
      'Leading a team of 3 developers on a global platform for greenhouse gas emissions and energy consumption reporting.',
    location: 'Athens, Greece',
    technologies: [
      'React',
      'TypeScript',
      'WebSockets',
      'Web Workers',
      'JavaScript'
    ],
    details: {
      achievements: [
        'Promoted to Deputy Team Leader, leading a team of 3 developers on a global platform for greenhouse gas emissions and energy consumption reporting',
        'Led bug resolution initiatives, ensuring timely fixes that enhanced platform stability and user experience',
        'Optimized application performance by offloading large object processing to Web Workers, preventing main thread blocking and improving user interface responsiveness'
      ],
      responsibilities: [
        'Lead development team and coordinate project deliverables',
        'Manage bug resolution and platform stability initiatives',
        'Optimize application performance and user experience'
      ],
      projects: [
        {
          name: 'UNFCCC ETF (Enhanced Transparency Framework)',
          description:
            'Implemented WebSocket functionality enabling real-time data sharing between users, improving collaboration and reducing data synchronization delays on a global platform for greenhouse gas emissions and energy consumption reporting'
        }
      ]
    }
  },
  {
    id: '4',
    company: 'Upstream',
    position: 'Full Stack Engineer',
    startDate: '2021-10',
    endDate: '2023-11',
    description:
      'Led full-stack development using Next.js and custom Express.js backend, optimizing application performance through strategic technology migrations.',
    location: 'Athens, Greece',
    technologies: [
      'Next.js',
      'Express.js',
      'React',
      'TypeScript',
      'Redux Toolkit',
      'React Query',
      'React Flow'
    ],
    details: {
      achievements: [
        'Led full-stack development using Next.js and custom Express.js backend, optimizing application performance through strategic technology migrations',
        'Migrated from Redux Connect to Redux Toolkit and implemented React Query for API calls, reducing network requests and improving state management efficiency',
        'Developed an interactive marketing flow builder using React Flow, enabling users to visually design campaigns through drag-and-drop functionality, reducing campaign setup time and improving user experience'
      ],
      responsibilities: [
        'Lead full-stack development and architecture decisions',
        'Optimize application performance and state management',
        'Collaborate with innovation and business teams to gather requirements and deliver new features'
      ],
      projects: [
        {
          name: 'Interactive Marketing Flow Builder',
          description:
            'Developed an interactive marketing flow builder using React Flow, enabling users to visually design campaigns through drag-and-drop functionality, reducing campaign setup time and improving user experience'
        }
      ]
    }
  },
  {
    id: '5',
    company: 'AGENSO',
    position: 'Front End Engineer',
    startDate: '2020-09',
    endDate: '2021-10',
    description:
      'Developed custom React applications for European Union-funded research projects focused on agricultural sustainability.',
    location: 'Athens, Greece',
    technologies: ['React', 'JavaScript', 'CSS'],
    details: {
      achievements: [
        'Developed custom React applications for European Union-funded research projects focused on agricultural sustainability',
        'Created interactive visualizations and data-driven interfaces that effectively displayed complex agricultural sustainability data, improving data accessibility and user engagement',
        'Built responsive and accessible web applications that met EU project requirements and accessibility standards'
      ],
      responsibilities: [
        'Develop custom React applications for EU research projects',
        'Create interactive visualizations and data-driven interfaces',
        'Ensure applications meet accessibility standards and project requirements'
      ],
      projects: [
        {
          name: 'Agricultural Sustainability Platform',
          description:
            'Created interactive visualizations and data-driven interfaces that effectively displayed complex agricultural sustainability data, improving data accessibility and user engagement'
        }
      ]
    }
  }
];
