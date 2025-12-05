export interface ResumeData {
  personalInfo: {
    name: string;
    location: string;
    phone: string;
    email: string;
  };
  professionalSummary: string;
  technicalSkills: {
    languages: string[];
    frameworks: string[];
    tools: string[];
  };
  education: {
    degree: string;
    institution: string;
  };
}

export const resumeData: ResumeData = {
  personalInfo: {
    name: 'Haris (Theocharis) Livieratos',
    location: 'Athens, Greece',
    phone: '+30 6979058419',
    email: 'livieratos.theoxaris@gmail.com'
  },
  professionalSummary:
    'Senior Software Engineer with 5 years of experience in building dynamic web applications. Proven ability to deliver innovative solutions, manage projects independently, and excel in collaborative environments under tight deadlines.',
  technicalSkills: {
    languages: ['TypeScript', 'JavaScript', 'Node.js', 'SQL'],
    frameworks: ['React', 'Next.js', 'Vite', 'Nest.js', 'Express.js'],
    tools: [
      'Tanstack Query',
      'Redux (Toolkit)',
      'Zustand',
      'Jest',
      'React Router',
      'React Testing Library',
      'React Flow',
      'MUI',
      'Tailwind',
      'React Hook Form',
      'Zod',
      'Tanstack Table',
      'pnpm',
      'Turborepo',
      'Storybook',
      'Web Workers',
      'WebSockets'
    ]
  },
  education: {
    degree: 'BSc degree in Department of Informatics and Computer Engineering',
    institution: 'UNIVERSITY OF WEST ATTICA'
  }
};
