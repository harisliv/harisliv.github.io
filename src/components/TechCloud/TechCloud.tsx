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
    wheelZoom: false,
    initial: [0.1, -0.1],
    clickToFront: 500,
    tooltipDelay: 0,
    maxSpeed: 0.025,
    minSpeed: 0.01,
    shape: 'hcylinder'
  },
  canvasProps: {
    style: {
      // height: '100vh'
      width: '60vw'
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
  'testinglibrary',
  'mui',
  'tailwindcss',
  'zod',
  'pnpm',
  'storybook',
  'css3',
  'reactquery',
  'socketdotio'
];

export default function TechCloud() {
  const [icons, setIcons] = useState<React.ReactNode[]>([]);
  const [loading, setLoading] = useState(true);

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
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center">
        <div className="relative h-16 w-16">
          <div className="absolute inset-0 rounded-full border-4 border-purple-500/20"></div>
          <div
            className="absolute inset-0 rounded-full border-4 border-transparent border-t-purple-500 animate-spin"
            style={{ animationDuration: '1s' }}
          ></div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Cloud {...cloudProps}>{icons}</Cloud>
    </div>
  );
}
