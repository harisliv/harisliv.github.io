'use client';

import {
  Cloud,
  renderSimpleIcon,
  fetchSimpleIcons,
  type ICloud
} from 'react-icon-cloud';
import { useEffect, useState } from 'react';
import { customRenderSimpleIcons } from '@/utils/techStack';

const cloudProps: Omit<ICloud, 'children'> = {
  containerProps: {
    style: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }
  },
  options: {
    depth: 0.5,
    wheelZoom: false,
    imageScale: 1,
    activeCursor: 'pointer',
    initial: [0.1, -0.1],
    clickToFront: 500,
    tooltipDelay: 0,
    outlineColour: '#0000',
    maxSpeed: 0.02,
    minSpeed: 0.01,
    shape: 'sphere',
    imageAlign: 'centre',
    weightGradient: true
  },
  canvasProps: {
    style: {
      width: '1000px'
    }
  }
};

const iconSlugs = [
  'typescript',
  'react',
  'nodedotjs',
  'javascript',
  'nestjs',
  'redux',
  'jest',
  'reactrouter',
  'testinglibrary',
  'mui',
  'tailwindcss',
  'zod',
  'pnpm',
  'storybook',
  'css3',
  'reactquery',
  'tanstack'
];

export default function TechCloud() {
  const [icons, setIcons] = useState<React.ReactNode[]>([]);

  useEffect(() => {
    fetchSimpleIcons({ slugs: iconSlugs }).then((icons) => {
      const fetchedIcons = Object.values(icons.simpleIcons).map((icon) =>
        renderSimpleIcon({
          icon,
          size: 42
        })
      );

      const customIcons = customRenderSimpleIcons();

      setIcons([...fetchedIcons, ...customIcons]);
    });
  }, []);

  return (
    <div>
      <Cloud {...cloudProps}>{icons}</Cloud>
    </div>
  );
}
