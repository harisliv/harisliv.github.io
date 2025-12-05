import { useTheme } from '@/components/ThemeProvider';

export function useIconColor(color: string, multicolor: boolean) {
  const { theme } = useTheme();
  let iconColor = color;
  if (!multicolor) {
    iconColor = theme === 'dark' ? '#111519' : '#c9c9c9';
  }
  return iconColor;
}
