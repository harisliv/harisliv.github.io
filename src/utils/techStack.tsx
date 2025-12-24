import { techDataMap } from '@/components/TechStack/techData';
import { TechEnumSchema, type ITechIconProps, type TTechEnum } from '@/types';
import { FaCode } from 'react-icons/fa';
import { iconSvgPaths } from '@/shared/iconSvgPaths';

// Type guard function for TechEnum
export function isTechEnum(value: unknown): value is TTechEnum {
  return TechEnumSchema.safeParse(value).success;
}

// Get tech icon from techDataMap
export function getTechIcon(tech: string): ITechIconProps {
  // Check if tech is a valid TTechEnum
  if (isTechEnum(tech)) {
    return techDataMap[tech];
  }

  return {
    Icon: FaCode,
    name: tech,
    color: '#6b7280'
  };
}

export function getTechIcons() {
  return Object.values(techDataMap).map((tech) => tech.Icon);
}

export const addHash = (color: string) =>
  color[0] === '#' ? color : `#${color}`;

const s = () =>
  Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);

export const guid = () =>
  `${s()}${s()}-${s()}-${s()}-${s()}-${s()}${s()}${s()}`;

export const customRenderSimpleIcons = () => {
  const svgArray = Object.values(iconSvgPaths).map((path) => {
    const encodedSvg = encodeURIComponent(path)
      .replace(/'/g, '%27')
      .replace(/"/g, '%22');

    const imgSrc = `data:image/svg+xml,${encodedSvg}`;

    const a = {
      title: `icon-${guid()}`,
      style: { cursor: 'pointer' }
    };

    const i = {
      alt: `icon-${guid()}`,
      src: imgSrc
    };

    return (
      <a key={guid()} {...a}>
        <img {...i} />
      </a>
    );
  });
  const imgArray = () => (
    <a key={guid()}>
      <img
        height="42"
        width="42"
        alt={`icon-${guid()}`}
        src={'/tanstack.webp'}
      />
    </a>
  );
  return [...svgArray, imgArray()];
};
